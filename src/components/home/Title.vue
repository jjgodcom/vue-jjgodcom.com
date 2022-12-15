<template>
  <div class="container home-title scroll-spy">
    <h1 class="delay-0">A Welcome to JJGODCOM world! 🖥️</h1>
    <h1 class="delay-1">Finding joy in front-end development!</h1>
    <h1 class="delay-2">: vue.js <span class="text"></span></h1>
  </div>
</template>

<script>
export default {
  mounted(){
    const $text = document.querySelector(".text");
    // 글자 모음
    const letters = [
      "/ HTML(5)",
      "/ CSS(3)", 
      "/ SCSS", 
      "/ JavaScript(es5,6)"
    ];
    // 글자 입력 속도
    const speed = 100;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {  
      const letter = letters[i].split("");
      
      while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
      }
      
      // 잠시 대기
      await wait(800);
      
      // 지우는 효과
      remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
      const letter = letters[i].split("");
      
      while (letter.length) {
        await wait(speed);
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
      }
      
      // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
      i = !letters[i+1] ? 0 : i + 1;
      typing();
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
      return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 1500);
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
@import '~/scss/scrollSpy.scss';
.container {
  padding: 100px 0;
}
h1 {
  margin-bottom: 5px;
  font-family: $font--NotoSans;
  font-weight: bold;
  color:#191919;
  font-size: 3em;
  line-height: 1.43;
  span::after {
    content: '';
    margin-left: .4rem;
    border-right: 2px solid #191919;
    animation: blink-caret .5s step-end infinite;
  }
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #191919 }
  }
}

@include media1204 {
  .container {
    padding: 50px 0;
  }
  h1 {
    font-size: 1.75em;
  }
}

@include media890 {
  h1 {
    font-size: 1.5em;
    text-align: center;
  }
}
</style>