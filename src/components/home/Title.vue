<template>
  <div class="container home-title scroll-spy">
    <h1 class="delay-0">A Welcome to JJGODCOM world! π₯οΈ</h1>
    <h1 class="delay-1">Finding joy in front-end development!</h1>
    <h1 class="delay-2">: vue.js <span class="text"></span></h1>
  </div>
</template>

<script>
export default {
  mounted(){
    const $text = document.querySelector(".text");
    // κΈμ λͺ¨μ
    const letters = [
      "/ HTML(5)",
      "/ CSS(3)", 
      "/ SCSS", 
      "/ JavaScript(es5,6)"
    ];
    // κΈμ μλ ₯ μλ
    const speed = 100;
    let i = 0;

    // νμ΄ν ν¨κ³Ό
    const typing = async () => {  
      const letter = letters[i].split("");
      
      while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
      }
      
      // μ μ λκΈ°
      await wait(800);
      
      // μ§μ°λ ν¨κ³Ό
      remove();
    }

    // κΈμ μ§μ°λ ν¨κ³Ό
    const remove = async () => {
      const letter = letters[i].split("");
      
      while (letter.length) {
        await wait(speed);
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
      }
      
      // λ€μ μμμ κΈμλ‘ μ§μ , νμ΄ν ν¨μ λ€μ μ€ν
      i = !letters[i+1] ? 0 : i + 1;
      typing();
    }

    // λλ μ΄ κΈ°λ₯ ( λ§μ΄ν¬λ‘μ΄ )
    function wait(ms) {
      return new Promise(res => setTimeout(res, ms))
    }

    // μ΄κΈ° μ€ν
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