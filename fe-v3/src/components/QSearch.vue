<template>
  <div class="search row-space-between">
    <div class="search-wrap row-space-between">
      <input v-model="value" type="text" placeholder="搜索作者、书名" @keyup.enter="onSearch">
      <div class="search-btn" @click="onSearch">
        <q-icon-search />
      </div>
    </div>
    <div class="contribution" @click="onContribute">
      <q-icon-upload />投稿
    </div>
  </div>
</template>
<script>
import QIconSearch from '/@/components/QIconSearch.vue'
import QIconUpload from '/@/components/QIconUpload.vue'
export default {
  name: 'QSearch',
  components: { QIconUpload, QIconSearch },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    // 搜索
    onSearch() {
      console.log(this.value)
    },
    // 投稿
    onContribute() {
      console.log('aaa')
    }
  }
}
</script>