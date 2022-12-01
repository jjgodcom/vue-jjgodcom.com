<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
  <ToTop></ToTop>
</template>

<script>
import Header from '~/components/common/Header'
import Footer from '~/components/common/Footer'
import ToTop from '~/components/common/ToTop'

export default {
  components: {
    Header,
    Footer,
    ToTop
  }
}
</script>

<style lang="scss">
@import '~/scss/common.scss';
</style>