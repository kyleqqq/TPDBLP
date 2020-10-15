<template>
  <div class="left-con">
    <q-daily-sentence />

    <q-svg-title />

    <div class="mb-50"><q-cate-list /></div>
    <div class="mb-50"><q-cate-list /></div>
    <div class="mb-50"><q-cate-list /></div>
    <div class="mb-50"><q-cate-list /></div>
    <div class="mb-50"><q-cate-list /></div>
    <div class="mb-50"><q-cate-list /></div>

  </div>
  <div class="right-con">right</div>
</template>
<script>
import QDailySentence from '/@/components/QDailySentence.vue'
import QSvgTitle from '/@/components/QSvgTitle.vue'
import QCateList from '/@/components/QCateList.vue'
export default {
  components: { QDailySentence, QSvgTitle, QCateList }
}
</script>
