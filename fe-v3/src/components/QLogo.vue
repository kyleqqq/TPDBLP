<template>
  <div class="flex-box">
    <img @click="toHome" class="logo" :src="'/@/assets/' + logo" alt="logo">
    <q-icon-home v-if="home && $route.path !== '/'" />
  </div>
</template>
<script>
import QIconHome from './QIconHome.vue'
export default {
  name: 'QLogo',
  components: { QIconHome },
  props: {
    logo: {
      type: String,
      default: 'logo.png'
    },
    home: {
      type: Boolean,
      default: true
    }
  },
  created() {
  },
  methods: {
    toHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>