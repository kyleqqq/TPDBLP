<template>
  <img class="logo" src="/@/assets/logo.png" alt="logo">
  <div class="search row-space-between">
    <a-input-search
      v-model:value="value"
      placeholder="搜索图书内容"
      @search="onSearch"
    />
    <a-button class="btn-space mlf">投稿</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(value) {
      console.log(value)
    }
  }
}
</script>
