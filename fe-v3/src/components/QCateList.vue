<template>
  <q-cate-title
  :title="'文学'"
  :show-line="false"
  />
  <div class="flex-box-space-wrap">
    <q-cate-list-card />
    <q-cate-list-card />
    <q-cate-list-card />
    <q-cate-list-card />
    <q-cate-list-card />
    <q-cate-list-card />
  </div>
</template>
<script>
import QCateTitle from './QCateTitle.vue'
import QCateListCard from './QCateListCard.vue'
export default {
  components: { QCateTitle, QCateListCard }
}
</script>
