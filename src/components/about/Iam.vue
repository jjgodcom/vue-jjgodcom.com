<template>
  <!-- iAm -->
  <div class="iAm about-iAm scroll-spy">
    <p class="title">I am :</p>
    <p class="text">
      20살 중반 떄 게임을 보며 '나도 저런 게임을 만들고 싶다.' 라고 생각하여 디자인 학원을 등록 했습니다. 
      하지만 디자인을 배우면서 다른사람과 디자인에 대한 센스 그림능력이 부족하여 게임과 디자인을 포기하려던 떄, 우연히 HTML 을 접하게 되어 개발을 시작하게 되었습니다.
      또한 회사에서 같이 일하던 백앤드 분의 개발 방식을 접하게 되었고 항상 저것도 내가 할줄알면 개발이 더 재미있지 않을까? 라는 생각으로 백앤드 개발에 대한 지식을 공부하던중에
      개발을 공부하면서 작성한 글을 나만의 블로그로 구현해보자 하여 개발을 시작한 과거부터 현재까지 꾸준히 블로그를 운영중이고, 다양한 프로젝트를 시도하고 있습니다.
    </p>
  </div>
  <!-- /iAm -->
</template>

<style lang="scss" scoped>
@import '~/scss/var.scss';
@import '~/scss/scrollSpy.scss';
.iAm {
  padding: 70px 0;
  border-bottom: 1px solid #ddd;
  .title {
    font-family: $font--Russo;
    margin-bottom: 40px;
  }
  .text {
    font-family: $font--NotoSans;
    line-height: 1.63;
  }
}
@include media890 {
  .iAm {
    padding: 40px 0;
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    .text {
      text-align: center;
    }
  }
}
</style>