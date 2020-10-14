<template>
  <teleport v-if="toastVisiable" to="body">
    <div class="q-toast">
      <div class="q-toast-wrap">
        <div class="q-toast-close" @click="show"><q-icon-close /></div>
        <div class="q-toast-head">
          <div class="title">{{ title }}</div>
          <div class="desc">{{ desc }}</div>
        </div>
        <div class="q-toast-slot">
          <slot></slot>
        </div>
      </div>
  </div>
  </teleport>
</template>
<script>
import QIconClose from './QIconClose.vue'
export default {
  name: 'QToast',
  components: { QIconClose },
  data() {
    return {
      toastVisiable: false
    }
  },
  props: {
    title: {
      type: String,
      default: '为你喜欢的公版书投稿'
    },
    desc: {
      type: String,
      default: '好书籍一起分享阅读'
    }
  },
  methods: {
    show() {
      this.toastVisiable = !this.toastVisiable
    }
  }
}
</script>
