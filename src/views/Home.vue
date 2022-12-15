<template>
  <Title></Title>
  <About></About>
  <Work></Work>
</template>

<script>
import Title from '~/components/home/Title'
import About from '~/components/home/About'
import Work from '~/components/home/Work'
import ScrollMagic from 'scrollmagic'

export default {
  components: {
    Title,
    About,
    Work
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
  }
}
</script>
