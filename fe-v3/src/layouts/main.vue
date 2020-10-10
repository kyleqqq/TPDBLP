<template>
  <a-layout>
    <a-layout-header><Header /></a-layout-header>
    <a-layout-content><router-view :key="$router.path" /></a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import Header from './header.vue'
export default {
  name: 'Main',
  components: { Header }
}
</script>