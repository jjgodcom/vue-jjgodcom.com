<template>
  <!-- Skills -->
  <div class="career">
    <p class="title">Career :</p>
    <ul>
      <li>
        <p class="company">
          <img src="../../assets/common/ideaconcert.png">
          (주) 아이디어 콘서트
        </p>
        <p class="day">2017/12/11 ~ 2020/07/01</p>
      </li>
    </ul>
  </div>
  <!-- /Skills -->
</template>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.career {
  padding: 70px 0;
  .title {
    font-family: $font--Russo;
    margin-bottom: 40px;
  }
  .img {}
  .company {
    font-family: $font--NotoSans;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.43;
    margin-bottom: 10px;
    display: flex;
    img {
      width: 20px;
      margin-right: 10px;
    }
  }
  .day {
    font-family: $font--NotoSans;
    font-size: 14px;
    line-height: 1.43;
    color:#333
  }
}
@include media890 {
  .career {
    padding: 40px 0;
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    ul {
      text-align: center;
    }
  }
}
</style>