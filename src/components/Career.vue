<template>
  <div class="container">
    <!-- photo -->
    <div class="photo">
      <vue-load-image>
        <template v-slot:image>
          <img src="../assets/common/logo.png" />
        </template>
        <template v-slot:preloader> 
          <img src="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/f5efd8614f20f46d1a6655aab749e2c7e5fb2b02/src/assets/common/loading.gif" />
        </template>
        <template v-slot:error> image load fails </template>
      </vue-load-image>
    </div>
    <!-- /photo -->
    

    <div>I am</div>
    <div>Skills</div>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 0;
}
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
</style>