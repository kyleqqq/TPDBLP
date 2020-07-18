<template>
  <div class="banner flex-box">
    <div class="b-l">
      <div class="b-logo"></div>
      <div class="b-num">
        已收录<span>{{totalnum}}</span>本公版图书
      </div>
    </div>
    <div class="b-r">
      <TopSearchWrap></TopSearchWrap>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
    box-sizing: border-box;
    width: 100%;
    min-width: 1200px;
    height: 130px;
    background: #4e4141;
    padding: 30px 40px;

    .b-logo {
      width: 295px;
      height: 55px;
      background: url(../assets/img/logo.png) no-repeat;
      background-size: 100% 100%;
    }

    .b-num {
      font-size: 14px;
      line-height: 20px;
      color: #8d6630;
      margin-top: 10px;

      span {
        color: #dccec4;
      }
    }
  }
</style>

<script>
import TopSearchWrap from '@/components/TopSearchWrap'
export default {
  name: 'TopHeadBanner',
  data () {
    return {
      totalnum: 0
    }
  },
  components: {
    TopSearchWrap
  }
}
</script>
