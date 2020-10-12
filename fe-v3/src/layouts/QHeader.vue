<template>
  <header>
    <nav class="wrapper row-space-between">
      <q-logo />
      <q-search />
    </nav>
  </header>
</template>
<script>
import QLogo from '/@/components/QLogo.vue'
import QSearch from '/@/components/QSearch.vue'
export default {
  name: 'QHeader',
  components: { QLogo, QSearch },
  data() {
    return {}
  },
  methods: {
  }
}
</script>
