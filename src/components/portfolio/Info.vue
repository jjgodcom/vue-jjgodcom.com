<template>
  <!-- info -->
  <div class="info">
    <h2>Info</h2>
    <dl>
      <dt>링크 :</dt>
      <dd>
        <a :href="this.getPortfolioInfo[0].link" target="_blank">
          바로가기
        </a>
      </dd>
    </dl>
    <dl>
      <dt>개발 기간 :</dt>
      <dd>{{this.getPortfolioInfo[0].day}}</dd>
    </dl>
    <dl>
      <dt>개발 언어 :</dt>
      <dd>{{this.getPortfolioInfo[0].language}}</dd>
    </dl>
    <dl>
      <dt>설명 :</dt>
      <dd>{{this.getPortfolioInfo[0].description}}</dd>
    </dl>
  </div>
  <!-- /info -->
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
.info {
  padding-bottom: 50px;
  h2 {
    color:#191919;
    font-family: $font--Russo;
    padding-bottom: 20px;
  }
  dl {
    display: flex;
    font-family: $font--NotoSans;
    line-height: 1.63;
    dt {
      color:#999;
      width: 80px;
      margin-right: 10px;
    }
    dd {
      color:#333;
      a {
        color:#6b60e5;
      }
    }
  }
}
</style>