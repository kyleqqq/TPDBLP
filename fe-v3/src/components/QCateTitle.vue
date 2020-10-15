<template>
  <div 
    class="cate-tit row-space-between"
    :class="{ line: showLine}"
  >
    <div class="title">{{ title }}</div>
    <div class="more" title="更多">>></div>
  </div>
</template>
<script>
export default {
  name: 'QCateTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    showLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>
