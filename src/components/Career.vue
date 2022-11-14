<template>
  <div class="container">
    <!-- iAm -->
    <div class="iAm">
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
    <!-- photo -->
    <div class="photo">
      <vue-load-image>
        <template v-slot:image>
          <img src="../assets/common/logo.png" />
        </template>
        <template v-slot:preloader> 
          <img src="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/f11e79fd131f723fa828cf254f1336a7458d9cb0/src/assets/common/loading.gif" />
        </template>
        <template v-slot:error> image load fails </template>
      </vue-load-image>
      <p>이미지는 조금더 찾아보고 적용해보자</p>
    </div>
    <!-- /photo -->
    <!-- Skills -->
    <div class="skills">
      <p class="title">Skills :</p>
      <ul>
        <li 
          v-for="item in skiils" 
          :key="item"
          @mouseover="colorChange($event)"
          @mouseleave="colorReset($event)">
          {{item}}
        </li>
      </ul>
    </div>
    <!-- /Skills -->
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
  data(){
    return {
      skiils:[
        '반응형',
        '모바일',
        '웹표준',
        '시멘틱 마크업',
        'HTML5',
        'JavaScript',
        'jQuery',
        'Node.js',
        'Vue.js',
        'DB',
        'ORACLE',
        'MySql',
        'git',
        'Bundler',
        'Parcel',
        'Webpack',
      ],
      number:0
    }
  },
  components: {
    'vue-load-image': VueLoadImage
  },
  methods:{
    colorChange(e){
      let colors = [
        '#ffda7c',
        '#8edecb',
        '#D4CAFB',
        '#fcb9ca',
        '#A8E0F4'
      ]

      e.target.style.backgroundColor = colors[this.number]
      this.number++;
      console.log(this.number);
      if(this.number >= colors.length) this.number = 0;
    },
    colorReset(e){
      e.target.style.backgroundColor = "inherit"
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.container {
  padding: 100px 0;
}
.photo{
  width: 250px;
  height: 250px;
  margin: 40px auto 20px;
  padding: 30px;
  border: 10px solid #dee2e6;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #e9ecef;
  position: relative;
  img{
    width: 100%;
  }
}
.iAm {
  .title {
    font-family: $font--Russo;
    margin-bottom: 40px;
  }
  .text {
    font-family: $font--NotoSans;
    line-height: 1.63;
  }
}
.skills {
  .title {
    font-family: $font--Russo;
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      padding: 5px 20px;
      box-sizing: border-box;
      height: 40px;
      border-radius: 40px;
      margin: 0 20px 20px 0;
      box-shadow: 5px 5px 30px -10px rgb(0 0 0 / 15%);
      transition: all .1s ease-in-out;
      font-family: $font--NotoSans;
      color:#8f8181;
      cursor: default;
    }
  }
}
</style>