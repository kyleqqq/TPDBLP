<template>
  <div class="left-con">
    <div class="mb-50">
      <q-cate-list :title="'文学'" :show-line="true" />
    </div>

    <div class="btn-wrap">
      <div class="load-more">加载更多</div>
    </div>
  </div>
  <div class="right-con"></div>
</template>
<script>
import QCateList from "/@/components/QCateList.vue";
export default {
  components: { QCateList },
};
</script>
