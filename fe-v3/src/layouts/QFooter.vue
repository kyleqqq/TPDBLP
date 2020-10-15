<template>
  <section class="footer">
    <div class="wrapper row-space-between">
      <div class="f-left">
        <q-logo :home="false" :logo="'logo-white.png'" />

        <q-copy-right />
      </div>
      <div class="f-right row-space-between">
        <router-link class="f-link" :to="{ name: 'about' }">
          关于
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import QLogo from '/@/components/QLogo.vue'
import QCopyRight from '/@/components/QCopyRight.vue'
export default {
  name: 'QFooter',
  components: { QLogo, QCopyRight }
}
</script>
