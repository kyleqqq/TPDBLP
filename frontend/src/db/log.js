import DbConfig from './config'
import lib from '@/utils/libcommon.js'

class Log extends DbConfig {
  constructor() {
    super(
      {
        storeName: 'log',
        key: 'id',
        autoIncrement: false,
        indexs: [{ name: 'date' }, { name: 'fcn' }, { name: 'level' }]
      }
    )
  }
    info = async function(value) {
      const d = await this.get(value.id)
      const defaultData = {
        date: lib.getNowTime('yyyy-MM-dd'),
        time: lib.getNowTime('hh:mm:ss'),
        level: '0'
      }
      if (!d) return this.add({ ...defaultData, ...value })
      if (d) return this.put({ ...d, defaultData, ...value })
    }
    warn = async function(value) {
      const d = await this.get(value.id)
      const defaultData = {
        date: lib.getNowTime('yyyy-MM-dd'),
        time: lib.getNowTime('hh:mm:ss'),
        level: '1'
      }
      if (!d) return this.add({ ...defaultData, ...value })
      if (d) return this.put({ ...d, ...defaultData, ...value })
    }
}
export default Log
