<template>
  <div class="home-work scroll-spy">
    <div class="container">
      <Title></Title>
      <Menu></Menu>
      <List></List>
    </div>
  </div>
</template>

<script>
import Title from '~/components/work/Title'
import Menu from '~/components/work/Menu'
import List from '~/components/work/List'
import ScrollMagic from 'scrollmagic'

export default {
  components:{
    Title,
    Menu,
    List
  },
  mounted(){
    // 페이지 진입시 menu-All 활성화 , list 전체 출력
    this.$store.dispatch('work/changeIsActive', 'All');
    this.$store.dispatch('work/changeIsShow', true);

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
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
@import '~/scss/scrollSpy.scss';
.home-work {
  padding: 80px 0;
}

@include media890 {
  .home-work {
    padding: 50px 0;
  }
}
</style>