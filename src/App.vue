<template>
  <!-- 페이지별 확인할떄 쓰는거임 -->
  <!-- <Test /> -->
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<script>
import Test from '~/components/Test'
import Header from '~/components/common/Header'
import Footer from '~/components/common/Footer'

export default {
  components: {
    Test,
    Header,
    Footer
  }
}
</script>
