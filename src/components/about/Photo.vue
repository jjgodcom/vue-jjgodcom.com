<template>
  <!-- photo -->
  <div class="photo">
    <vue-load-image>
      <template v-slot:image>
        <img src="../../assets/common/logo.png" />
      </template>
      <template v-slot:preloader> 
        <img src="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/f11e79fd131f723fa828cf254f1336a7458d9cb0/src/assets/common/loading.gif" />
      </template>
      <template v-slot:error> image load fails </template>
    </vue-load-image>
    <p>이미지는 조금더 찾아보고 적용해보자</p>
  </div>
  <!-- /photo -->
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.photo{
  width: 250px;
  height: 250px;
  margin: 40px auto 20px;
  padding: 30px;
  border: 10px solid #dee2e6;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #e9ecef;
  position: relative;
  img{
    width: 100%;
  }
}
@include media890 {
  .photo {
    margin: 0 auto;
  }
}
</style>