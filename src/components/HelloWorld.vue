<template>
  <h2 @click="changeMessage">
    {{ msg }}
  </h2>
  <!-- <img src="../assets/common/logo.png" alt="JJGODCOM" > -->
  <img src="https://raw.githubusercontent.com/jjgodcom/jjgodcom.com/master/resources/images/global/logo.png" alt="JJGODCOM" >

  <div class="container">
    <h1>컨테이너 테스트</h1>
  </div>

</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.message.msg
    }
  },
  methods: {
    changeMessage() {
      this.$store.dispatch('message/changeMessage', 'Hello Vue!!!')
    }
  }
}
</script>

<style scoped lang="scss">
  h2 {
    font-size: 22px;
    & + img {
      width: 120px;
    }
  }
</style>
