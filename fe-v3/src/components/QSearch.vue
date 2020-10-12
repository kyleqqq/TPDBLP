<template>
  <div class="search row-space-between">
    <div class="search-wrap row-space-between">
      <input type="text" placeholder="搜索作者、书名">
      <div class="search-btn" />
    </div>
    <div class="contribution">
      投稿
    </div>
  </div>
</template>
<script>
export default {
  name: 'QSearch',
  data() {
    return {
      value: ''
    }
  },
  methods: {
  }
}
</script>