<template>
  <!-- view -->
  <div class="view">
    <h2>View</h2>
    <div class="image-box">
      <vue-load-image> 
        <template v-slot:image>
          <template v-for="image in this.getPortfolioInfo[0].images" :key="image">
            <img 
              :src="image" 
              :alt="this.getPortfolioInfo[0].title"
              :title="this.getPortfolioInfo[0].title">
          </template>
        </template>
        <template v-slot:preloader> 
          <img src="https://raw.githubusercontent.com/john015/vue-load-image/master/example/image-loader.gif" />
        </template>
        <template v-slot:error> image load fails </template>
      </vue-load-image>
    </div>
  </div>
  <!-- /view -->
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  },
  props: {
    getPortfolioInfo: {
      type: Object,
      default: undefined,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.view {
  h2 {
    color:#191919;
    font-family: $font--Russo;
    padding-bottom: 20px;
  }
  .image-box {
    width: 100%;
    img {
      width: 60%;
      margin-top: 10px;
      &:nth-child(1) {
        margin-top: 0;
      }
    }
  }
}
@include media1440 {
  .view {
    .image-box {
      img {
        width: 100%;
      }
    }
  }
}
</style>