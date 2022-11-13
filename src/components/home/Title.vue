<template>
  <div class="container">
    <h1>
      A Welcome to JJGODCOM world! 🖥️<br>
      Finding joy in front-end development! <br>
      : vue.js / javascript / scss / html <br>
      나중에 타이핑 효과 넣기
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '~/scss/var.scss';

.container {
  padding: 100px 0;
}
h1 {
  font-family: $font--NotoSans;
  font-weight: bold;
  color:#191919;
  font-size: 3em;
  line-height: 1.43;
}
@keyframes typing {
    from { width: 100% }
    to { width: 0 }
}


@media (max-width: 1204px){
  h1 {
    font-size: 1.75em;
  }
}
</style>