<template>
  <div 
    class="cate-tit row-space-between"
    :class="{ line: showLine}"
  >
    <div class="title">{{ title }}</div>
    <div v-if="!showLine" class="more" title="更多" @click="$router.push({ path: '/list/wx'})">>></div>
    <div v-if="showLine" class="number"><span>55</span>本</div>
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
