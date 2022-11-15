<template>
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
</template>

<script>
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