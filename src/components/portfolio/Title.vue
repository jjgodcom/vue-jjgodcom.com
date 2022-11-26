<template>
  <!-- title -->
  <h1 class="title">
    {{this.getPortfolioInfo[0].title}}
  </h1>
  <!-- //title -->
</template>

<script>
export default {
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
.title {
  font-weight: 700;
  font-family: $font--NotoSans;
  font-size: 1.75em;
  padding-bottom: 100px;
}
</style>