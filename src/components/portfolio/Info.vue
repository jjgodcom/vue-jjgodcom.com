<template>
  <!-- view -->
  <div class="view">
    <h2>View</h2>
    <div class="image-box">
      <vue-load-image> 
        <template v-slot:image>
          <img 
            :src="this.getPortfolioInfo[0].image.default" 
            :alt="this.getPortfolioInfo[0].title"
            :title="this.getPortfolioInfo[0].title">
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
    border: 1px solid #ccc;
    img {
      width: 100%;
    }
  }
}
</style>