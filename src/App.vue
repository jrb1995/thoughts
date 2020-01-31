<template>
  <div id="app">
    <Header />

    <router-view class="content" />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
.content {
  max-width: 1440px;
  margin: 0 auto 60px;
}
</style>
