<template>
  <div class="copy-right mt-5">
    &copy; 2018 - {{ nowYear }} 仓颉公版图书典藏计划版权所有
  </div>
</template>
<script>
export default {
  name: 'QCopyRight',
  data() {
    return {
      nowYear: new Date().getFullYear()
    }
  }
}
</script>