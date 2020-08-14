<template>
  <div class="home">
    <test />
    <p>test svg icons:</p>
    <svg-icon icon-class="user" />
    <svg-icon icon-class="eye" />
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    this.test()
  },
  methods: {
    async test() {
      const res = await this.$api.logout()
      console.log(res)
    }
  }
}
</script>
