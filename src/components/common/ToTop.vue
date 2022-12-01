<template>
  <div class="to-top" @click="toTop"></div>
</template>

<script>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

export default {
  mounted(){
    window.addEventListener("scroll",function(){
      const toTopEl = document.querySelector(".to-top");

      if(window.scrollY > 300){
        gsap.to(toTopEl, 0.2, {
          x: 0
        });
      }else{
        gsap.to(toTopEl, 0.2, {
          x: 100
        });
      }
    });
  },
  methods:{
    toTop(){
      gsap.to(window, 0.7, {
        scrollTo: 0
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 3;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
  background-color: #fff;
  background-image: url('../../assets/common/top.png');
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transform: translate(100px, 0px);
  &:hover {
    background-color: #efefee;
  }
}
</style>