<template>
  <header>
    <nav class="wrapper row-space-between">
      <q-logo />
      <q-search />
    </nav>
  </header>
  <q-toast-contribute-form />
</template>
<script>
import QLogo from '/@/components/QLogo.vue'
import QSearch from '/@/components/QSearch.vue'
import QToastContributeForm from '/@/components/QToastContributeForm.vue'
export default {
  name: 'QHeader',
  components: { QLogo, QSearch, QToastContributeForm },
  data() {
    return {}
  },
  methods: {
  }
}
</script>
