<template>
  <div class="to-top"></div>
</template>

<script>
export default {
  
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
  transform: translate(0, 0px);
  &:hover {
    background-color: #efefee;
  }
}
</style>