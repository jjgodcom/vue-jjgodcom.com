<template>
  <div class="info about-info scroll-spy">
    <div class="left-box">
      <h5>
        안녕하세요<br>
        풀스텍을 꿈꾸는 개발자 박수호입니다.
      </h5>
      <p>
        개발에 재미를 느끼고 <br>
        세상에 단 하나뿐인   <br>
        저의 홈페이지를 둘러봐주세요 :)
      </p>
    </div>
    <div class="right-box">
      <ul>
        <li>
          <p>Where i live</p>
          <p>Wirye, Hanam-si, Gyeonggi-do, Republic of Korea</p>
        </li>
        <li>
          <p>Give me a call</p>
          <p>T. +82 (0)10 1234 4567</p>
        </li>
        <li>
          <p>Or, why don’t you email me?</p>
          <p>jjgodcom1@gmail.com</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/scss/var.scss';
@import '~/scss/scrollSpy.scss';

.info {
  padding: 70px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  
  .left-box,
  .right-box {
    flex: 1;
  }
  .left-box {
    h5 {
      font-family: $font--NotoSans;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.43;
      margin-bottom: 10px;
    }
    p {
      font-family: $font--NotoSans;
      font-size: 14px;
      line-height: 1.43;
      color:#333

    }
  }
  .right-box {
    li {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      p {
        &:first-child {
          color:#999;
          padding-bottom: 10px;
          font-family: $font--NotoSans;
        }
        &:last-child {
          color:#333;
          font-family: $font--NotoSans;
        }
      }
    }
  }
}

@include media890 {
  .info {
    padding: 40px 0;
    display: block;
    text-align: center;
    .left-box {
      padding-bottom: 50px;
    }
  }
}
</style>