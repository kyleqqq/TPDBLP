<template>
  <q-header />
  <section class="wrapper pc flex-box-space">
    <router-view :key="$router.path" />
  </section>
  <section class="footer wrapper">
    footer
  </section>
</template>
<script>
import QHeader from './QHeader.vue'
export default {
  name: 'QMain',
  components: { QHeader }
}
</script>