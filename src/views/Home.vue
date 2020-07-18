<template>
  <div class="home">
    <TopHeadNav></TopHeadNav>
    <div class="scroll-wrap">
      <TopHeadBanner></TopHeadBanner>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeadBanner from '@/components/TopHeadBanner'
import TopHeadNav from '@/components/TopHeadNav'
export default {
  name: 'Home',
  components: {
    TopHeadBanner,
    TopHeadNav
  }
}
</script>
