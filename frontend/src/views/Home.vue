<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <svg-icon icon-class="user" />
    <svg-icon icon-class="eye" />
    <test />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
