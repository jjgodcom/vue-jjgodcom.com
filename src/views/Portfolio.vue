<template>
  <div class="container">
    <Title :getPortfolioInfo="getPortfolioInfo"></Title>
    <View :getPortfolioInfo="getPortfolioInfo"></View>
    <Info :getPortfolioInfo="getPortfolioInfo"></Info>
  </div>
</template>

<script>
import Title from '~/components/portfolio/Title'
import Info from '~/components/portfolio/Info'
import View from '~/components/portfolio/View'

export default {
  components: {
    Title,
    Info,
    View
  },
  computed: {
    getRouteParamsTitle(){
      // Work - Card 에서 전달받은 title
      return this.$route.params.title
    },
    getPortfolioLists(){
      // portfolio.js 에 저장되어 있는 목록
      return this.$store.state.portfolio.lists
    },
    getPortfolioInfo(){
      // portfolio.js 에 title 하고 getRouteParamsTitle() 값이 같은거 추출
      // length 가 0일경우 데이터 없으니 다시 Work 페이지로 이동
      const length = this.getPortfolioLists.filter(this.isFilter).length;
      
      if (length > 0) return this.getPortfolioLists.filter(this.isFilter)
      else this.$router.push('/work')
    }
  },
  methods: {
    isFilter(element){
      if(element.title === this.getRouteParamsTitle)  {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 0;
}
</style>