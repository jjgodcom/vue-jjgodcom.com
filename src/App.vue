<template>
  <!-- 페이지별 확인할떄 쓰는거임 -->
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<script>
import Header from '~/components/common/Header'
import Footer from '~/components/common/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import '~/scss/common.scss';
</style>