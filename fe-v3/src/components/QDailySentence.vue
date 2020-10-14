<template>
  <div class="daily-card mb-50">
    <div class="row-between-start">
      <div class="data">
        <span>
          {{ date }}
        </span>
      </div>
      <div class="title">每日精读</div>
    </div>
    <div class="row-between-start">
      <div class="content mt-20-m">
        他的电影从来不缺乏XX和政治寓意。
        他痴迷于法国新浪潮，奉法国电影巨匠戈达尔为精神导师。
        1964年，年仅23岁的他便拍出令人惊世骇俗的《革命前夕》，
        不伦之恋的内容令本片迄今为止都备受热议。
        1987年，他因《末代皇帝》与中国结缘，
        成为第一个获准进入紫禁城实景拍电影的外国导演。
        2018年初冬，这位个性的意大利老头贝纳尔多·贝托鲁奇弃影迷而去，
        留下一卷“政治加性”的银幕传奇。
        他的电影从来不缺乏XX和政治寓意。
        他痴迷于法国新浪潮，奉法国电影巨匠戈达尔为精神导师。
        1964年，年仅23岁的他便拍出令人惊世骇俗的《革命前夕》，
        不伦之恋的内容令本片迄今为止都备受热议。
        1987年，他因《末代皇帝》与中国结缘，
        成为第一个获准进入紫禁城实景拍电影的外国导演。
        2018年初冬，这位个性的意大利老头贝纳尔多·贝托鲁奇弃影迷而去，
        留下一卷“政治加性”的银幕传奇。
      </div>
      <div class="cover mt-15-m" style="background-image: url('img/cover.jpg');"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QDailySentence',
  data() {
    return {
      date: (new Date().getMonth() + 1) + '.' + (new Date().getDate())
    }
  }
}
</script>
