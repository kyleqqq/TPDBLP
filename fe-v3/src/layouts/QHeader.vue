<template>
  <header>
    <nav class="wrapper row-space-between">
      <q-logo />
      <q-search @handleSubmit="handleSubmit" />
    </nav>
  </header>
  <q-toast-contribute-form ref="toast-contribute-from" />
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
    handleSubmit() {
      this.$refs['toast-contribute-from'].show()
    }
  }
}
</script>
