<template>
  <div class="cate-card" :class="{ 'mb-70': subPage }">
    <div class="cover" style="background-image: url('/img/cover.jpg');" />
    <div class="info">
      <div class="name ellipsis">很长的标题很长的标题很长的标题很长的标题很长的标题很长的标题</div>
      <div class="sub ellipsis">1964 / 文学 / 巨作</div>
      <div class="sub ellipsis">中国 / 杨先生</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QCateListCard',
  props: {
    subPage: {
      type: Boolean,
      default: false
    }
  }
}
</script>
