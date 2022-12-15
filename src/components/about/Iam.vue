<template>
  <!-- iAm -->
  <div class="iAm about-iAm scroll-spy">
    <p class="title">I am :</p>
    <p class="text">
      20살 중반 떄 게임을 보며 '나도 저런 게임을 만들고 싶다.' 라고 생각하여 디자인 학원을 등록 했습니다. 
      하지만 디자인을 배우면서 다른사람과 디자인에 대한 센스 그림능력이 부족하여 게임과 디자인을 포기하려던 떄, 지도해주시던
      선생님꼐서 웹 퍼블리셔 라는 직종도 있다고 소개를 해주셨고20살 중반 떄 게임을 보며 '나도 저런 게임을 만들고 싶다.' 라고 생각하여 디자인 학원을 등록 했습니다. 
      하지만 디자인을 배우면서 다른사람과 디자인에 대한 센스 그림능력이 부족하여 게임과 디자인을 포기하려던 떄, 지도해주시던
      선생님꼐서 웹 퍼블리셔 라는 직종도 있다고 소개를 해주셨고20살 중반 떄 게임을 보며 '나도 저런 게임을 만들고 싶다.' 라고 생각하여 디자인 학원을 등록 했습니다. 
      하지만 디자인을 배우면서 다른사람과 디자인에 대한 센스 그림능력이 부족하여 게임과 디자인을 포기하려던 떄, 지도해주시던
      선생님꼐서 웹 퍼블리셔 라는 직종도 있다고 소개를 해주셨고 이거 작성 나중에 <br>
      이거 작성 나중에 이력서 쓸때 소설 같이 작성하면 될듯
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