<template>
  <!-- photo -->
  <div class="photo">
    <!-- <vue-load-image>
      <template v-slot:image>
        <img src="../../assets/common/character.png" />
      </template>
      <template v-slot:preloader> 
        <img src="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/f11e79fd131f723fa828cf254f1336a7458d9cb0/src/assets/common/loading.gif" />
      </template>
      <template v-slot:error> image load fails </template>
    </vue-load-image> -->
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
  padding-bottom: 43%;
  background-image: url('../../assets/common/character.png');
  background-size: auto 51%;

  img{
    width: 300px;
    display: block;
    margin: 0 auto;
  }
}
@include media890 {
  .photo {
    margin: 0 auto;
  }
}
</style>