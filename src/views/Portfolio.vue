<template>
  <div class="container portfolio-all scroll-spy">
    <Title :getPortfolioInfo="getPortfolioInfo"></Title>
    <Info :getPortfolioInfo="getPortfolioInfo"></Info>
    <View :getPortfolioInfo="getPortfolioInfo"></View>
  </div>
</template>

<script>
import Title from '~/components/portfolio/Title'
import Info from '~/components/portfolio/Info'
import View from '~/components/portfolio/View'
import ScrollMagic from 'scrollmagic'

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
  mounted(){
    // ScrollMagic
    const spyEls = document.querySelectorAll(".scroll-spy");

    spyEls.forEach(function (spyEl, index) {
      console.log(spyEl);
      new ScrollMagic
        .Scene({ // 감시할 장면(Scene)을 추가
          triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
          triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
        })
        .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
    }); 
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
@import '~/scss/scrollSpy.scss';
.container {
  padding: 80px 0;
}
</style>