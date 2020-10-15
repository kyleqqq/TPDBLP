<template>
  <div class="left-con">
    <q-daily-sentence />

    <q-svg-title />

    <div class="mb-50"><q-cate-list :title="'文学'" /></div>
    <div class="mb-50"><q-cate-list :title="'历史'" /></div>
    <div class="mb-50"><q-cate-list :title="'传记'" /></div>
    <div class="mb-50"><q-cate-list :title="'生活'" /></div>
    <div class="mb-50"><q-cate-list :title="'艺术'" /></div>
    <div class="mb-50"><q-cate-list :title="'其他'" /></div>

  </div>
  <div class="right-con">
    
  </div>
</template>
<script>
import QDailySentence from '/@/components/QDailySentence.vue'
import QSvgTitle from '/@/components/QSvgTitle.vue'
import QCateList from '/@/components/QCateList.vue'
export default {
  components: { QDailySentence, QSvgTitle, QCateList }
}
</script>
