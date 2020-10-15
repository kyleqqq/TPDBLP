<template>
  <q-header />
  <section class="wrapper pc flex-box-space">
    <router-view :key="$router.path" />
  </section>
  <q-footer />
</template>
<script>
import QHeader from './QHeader.vue'
import QFooter from './QFooter.vue'
export default {
  name: 'QMain',
  components: { QHeader, QFooter }
}
</script>