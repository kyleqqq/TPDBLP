export default class {
  constructor(config) {
    this.DB = null
    this.store = config.storeName
    const request = window.indexedDB.open('db', 1)
    request.onupgradeneeded = () => {
      // 获取数据库对象
      this.DB = event.target.result
      if (!this.DB.objectStoreNames.contains(this.store)) {
        // 创建以日期作为主键的log库
        const _store = this.DB.createObjectStore(this.store, { keyPath: config.key, autoIncrement: config.autoIncrement })
        // 创建其他索引
        if (config.indexs && config.indexs.length > 0) {
          config.indexs.forEach(i => {
            _store.createIndex(i.name, i.name, { unique: i.unique })
          })
        }
        // 数据库完成创建后返回
        _store.transaction.oncomplete = (event) => { }
      }
    }
    request.onerror = (err) => {
      console.warn('indexedDB打开失败', err)
    }
    request.onsuccess = (event) => {
      if (event.target.result.objectStoreNames.contains(this.store)) {
        this.DB = event.target.result
      }
    }
  }
  /**
   * 添加数据
  */
  add(data) {
    return new Promise((resolve, reject) => {
      const store = this.DB.transaction(this.store, 'readwrite').objectStore(this.store)
      const request = store.add(data)
      request.onsuccess = function(e) {
        resolve({ operate: 'add', res: e.type, event: e })
      }
      request.onerror = function(e) {
        reject({ operate: 'add', res: e.type, event: e })
      }
    })
  }
  /**
   * 根据主键删除数据
   */
  delete(key) {
    return new Promise((resolve, reject) => {
      const store = this.DB.transaction(this.store, 'readwrite').objectStore(this.store)
      const request = store.delete(key)
      request.onsuccess = function(e) {
        resolve({ operate: 'delete', res: e.type, event: e })
      }
      request.onerror = function(e) {
        reject({ operate: 'delete', res: e.type, event: e })
      }
    })
  }
  /**
   * 根据游标索引删除数据
   */
  deleteByIndex(index, key) {
    return new Promise((resolve, reject) => {
      const store = this.DB.transaction(this.store).objectStore(this.store)
      const _index = store.index(index)
      const request = _index.openCursor(IDBKeyRange.only(key))
      request.onsuccess = (e) => {
        const cursor = event.target.result
        if (cursor && cursor.value) {
          this.delete(cursor.value.id)
          cursor.continue()
        } else {
          resolve({ operate: 'delete', res: e.type, event: e })
        }
      }
      request.onerror = function(e) {
        reject({ operate: 'delete', res: e.type, event: e })
      }
    })
  }
  /**
   * 根据主键更新数据
   */
  put(data) {
    return new Promise((resolve, reject) => {
      const store = this.DB.transaction(this.store, 'readwrite').objectStore(this.store)
      const request = store.put(data)
      request.onsuccess = function(e) {
        resolve({ operate: 'put', res: e.type, event: e })
      }
      request.onerror = function(e) {
        reject({ operate: 'put', res: e.type, event: e })
      }
    })
  }
  /**
   * 根据主键获取
   */
  get(key) {
    return new Promise((resolve, reject) => {
      const store = this.DB.transaction(this.store).objectStore(this.store)
      const request = store.get(key)
      request.onsuccess = function(e) {
        resolve(e.target.result)
      }
      request.onerror = function(e) {
        reject({ operate: 'get', res: e.type, event: e })
      }
    })
  }
  /**
   * 根据游标索引获取数据
   */
  getByIndex(index, key) {
    const res = []
    return new Promise((resolve, reject) => {
      const store = this.DB.transaction(this.store).objectStore(this.store)
      const _index = store.index(index)
      const request = _index.openCursor(IDBKeyRange.only(key))
      request.onsuccess = function(e) {
        const cursor = event.target.result
        if (cursor && cursor.value) {
          res.push(cursor.value)
          cursor.continue()
        } else {
          resolve(res)
        }
      }
      request.onerror = function(e) {
        reject({ operate: 'get', res: e.type, event: e })
      }
    })
  }
}
