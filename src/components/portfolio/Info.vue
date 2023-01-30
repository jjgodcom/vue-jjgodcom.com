<template>
  <!-- info -->
  <div class="info">
    <h2>Info</h2>
    <dl>
      <dt>링크 :</dt>
      <dd>
        <template v-if="this.getPortfolioInfo[0].link === ''">
          <span>도메인 만료</span>
        </template>
        <template v-else>
          <a :href="this.getPortfolioInfo[0].link" target="_blank">
            바로가기 
          </a>
        </template>
      </dd>
    </dl>
    <dl>
      <dt>개발 언어 :</dt>
      <dd>{{this.getPortfolioInfo[0].language}}</dd>
    </dl>
    <dl v-if="this.getPortfolioInfo[0].works.length > 0">
      <dt>담당 업무 : </dt>
      <dd>
        <ul>
          <template v-for="work in this.getPortfolioInfo[0].works" :key="work">
            <li>- {{work}}</li>
          </template>
        </ul>
      </dd>
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
    flex:1;
    font-family: $font--NotoSans;
    line-height: 1.63;
    margin-bottom: 10px;
    dt {
      display: flex;
      flex:none;
      color:#999;
      width: 80px;
      margin-right: 10px;
    }
    dd {
      display: flex;
      flex: 1;
      color:#333;
      a {
        color:#6b60e5;
      }
      span {
        color: #999;
        text-decoration: line-through;
      }
    }
  }
}
</style>