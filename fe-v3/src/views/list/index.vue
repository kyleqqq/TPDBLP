<template>
  <div class="left-con">
    <div class="mb-50">
      <q-cate-list :title="'文学'" :show-line="true" />
    </div>

    <div class="btn-wrap">
      <div class="load-more" :class="{'no-more': isAll }" @click="loadMore">{{ moreWord }}</div>
    </div>
  </div>
  <div class="right-con">
    <q-month-read-card />
  </div>
</template>
<script>
import QCateList from "/@/components/QCateList.vue"
import QMonthReadCard from "/@/components/QMonthReadCard.vue"
export default {
  components: { QCateList, QMonthReadCard },
  data() {
    return {
      isAll: false,
      moreWord: '加载更多'
    }
  },
  methods: {
    loadMore() {
      this.moreWord = '加载中'
      this.isAll = true
      this.moreWord = '没有更多了~'
    }
  }
};
</script>
