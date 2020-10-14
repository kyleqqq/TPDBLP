<template>
  <div class="q-svg-title row-flex-start">
    <q-icon-lib />
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
import QIconLib from './QIconLib.vue'
export default {
  name: 'QSvgTitle',
  components: { QIconLib },
  props: {
    title: {
      type: String,
      default: '公版图书馆'
    }
  }
}
</script>
