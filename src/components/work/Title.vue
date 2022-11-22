<template>
  <h2 class="title">
    <template v-if="this.$route.fullPath === '/work'">
      <div class="text">WORK</div>
    </template>
    <template v-else>
      <RouterLink
        to="/work"
        class="text">
        WORK
        <span>더보기 &gt;</span>
      </RouterLink>
   </template>
  </h2>
</template>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.title {
  text-align: center;
  .text {
    display: block;
    position: relative;
    text-decoration: none;
    color:#333;
    font-family: $font--NotoSans;
    font-size: 1.75em;
    font-weight: 700;
    span {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 0.6em;
      font-weight: 400;
      line-height: 28px;
    }
  }
}
</style>