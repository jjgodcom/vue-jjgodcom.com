<template>
  <h1>테스트전용페이지</h1>
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="slide-fade" mode="out-in">
    <p v-if="show">hello</p>
  </transition>
</template>

<script>
export default {
  data(){
    return{
      show: true
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0.4;
}
</style>
