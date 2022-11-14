<template>
  <h2 @click="changeMessage">
    {{ msg }}
  </h2>
  <img src="../assets/common/logo.png" alt="JJGODCOM" >
  <img src="https://raw.githubusercontent.com/john015/vue-load-image/master/example/image-loader.gif" />
  <!-- <img src="https://raw.githubusercontent.com/jjgodcom/jjgodcom.com/master/resources/images/global/logo.png" alt="JJGODCOM" > -->

  <div class="container">
    <h1>컨테이너 테스트</h1>
    <!-- <button @click="changeImageURL">change image</button> -->
    <vue-load-image>
      <template v-slot:image>
        <img :src="src" />
      </template>
      <template v-slot:preloader> 
        <img src="https://raw.githubusercontent.com/john015/vue-load-image/master/example/image-loader.gif" />
      </template>
      <template v-slot:error> image load fails </template>
    </vue-load-image>
  </div>

</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
  data(){
    return{
      src: "https://picsum.photos/500/600/?random"
    }
  },
  components: {
    'vue-load-image': VueLoadImage
  },
  computed: {
    msg() {
      return this.$store.state.message.msg
    }
  },
  methods: {
    changeMessage() {
      this.$store.dispatch('message/changeMessage', 'Hello Vue!!!')
    },
    changeImageURL() {
      const randomImageNumber = Math.floor(Math.random() * 999) + 1;
      this.src = "https://picsum.photos/500/600/?image=" + randomImageNumber;
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
