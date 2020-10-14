<template>
  <div class="left-con">
    <q-daily-sentence />
    <q-svg-title />
  </div>
  <div class="right-con">right</div>
</template>
<script>
import QDailySentence from '/@/components/QDailySentence.vue'
import QSvgTitle from '/@/components/QSvgTitle.vue'
export default {
  components: { QDailySentence, QSvgTitle }
}
</script>