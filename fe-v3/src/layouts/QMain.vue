<template>
  <q-header />
  <section class="main">
    <router-view :key="$router.path" />
  </section>
  <section class="footer">
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