<template>
  <RouterLink :to="{name: list.page, params: {title: list.title}}">
    <div class="card"> 
      <div class="bg"></div>
      <div class="border-box"></div>
      <div class="text-box">
        <div class="text">{{list.title}}</div>
      </div>
      <div class="image-box" :style="{ backgroundImage : `url(${list.image})`}"></div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: undefined,
    }
  }
}
</script> 

<style lang="scss" scoped>
@import '~/scss/var.scss';
.card {
  position: absolute;
  top: 0;
  left: 0 ;
  width: 100%;
  height: 100%;
  .border-box {
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    position: absolute;
    z-index: 1;
    left: 12px;
    top: 12px;
    border: none;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border: 2px solid;
      transition: all .6s ease;
      border-radius: 2px;
    }
    &::before {
      top: 0;
      left: 0;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: #fff;
      border-left-color: #fff;
    }
    &::after {
      bottom: 0;
      right: 0;
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: #fff;
      border-right-color: #fff;
    }
  }
  .text-box {
    z-index: 1;
    width: calc(100% - 24px);
    height: 30px;
    position: absolute;
    top: 50%; 
    left: 50%;
    transform:translate(-50%,-50%);
    overflow: hidden;
    .text {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -30px;
      text-align: center;
      font-weight: 700;
      color:#fff;
      font-size: 1.5em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all .6s ease;
      padding: 0 10px;
      box-sizing: border-box;
      font-family: $font--NotoSans;
    }
  }
  .bg {
    z-index: 1;
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    animation-duration: .4s;
    transition: background-color .4s;
    background-color: rgba(51,51,51,.0);
  }
  .image-box {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(0) blur(0);
  }

  // hover
  &:hover {
    .border-box::before,
    .border-box::after{
      width: 100%;
      height: 100%;
    }
    .text-box .text {
      top: 0;
    }
    .bg {
      background-color: rgba(51,51,51,.5);
    }
  }
  
}
</style>