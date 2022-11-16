<template>
  <div class="home-work">
    <div class="container">
      <!-- title -->
      <h2 class="title">
        <RouterLink
          to="/work">
          WORK
          <span>더보기 &gt;</span>
        </RouterLink>
      </h2>
      <!-- /title -->
      <!-- menu -->
      <ul class="menu">
        <li 
          :class="{ active: index === isActive}"
          v-for="(menu, index) in menus" 
          :key="index"
          @click="selectItem(index)">
          {{menu}}
        </li>
      </ul>
      <!-- /menu -->
      <!-- list -->
      <div class="list">
        <div
          class="list-item" 
          v-for="list in lists"
          :key="list.title">
          {{list.title}}
          {{list.type}}
        </div>
      </div>
      <!-- /list -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menus:[
        'All',
        'HTML',
        'CSS',
        'Bundler',
        'JAVA',
        'DB',
        'REFERENCE',
        'PORTFOLIO',
        'OTHER'
      ],
      lists:[
        {
          title:'HTML',
          type:'html'
        },
        {
          title:'CSS',
          type:'css'
        },
        {
          title:'SCSS',
          type:'css'
        }
      ],
      isActive: false
    }
  },
  methods: {
      selectItem(i) {
          this.isActive = i;
      },
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.home-work {
  padding: 70px 0;
  background-color: #f8f8f8;
  .title {
    text-align: center;
    a {
      display: block;
      position: relative;
      text-decoration: none;
      color:#333;
      font-family: $font--NotoSans;
      font-size: 1.75em;
      font-weight: 700;
      span {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 0.6em;
        font-weight: 400;
        line-height: 28px;
      }
    }
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
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
      color:#979797;
      cursor: pointer;
      font-size: 1em;
      &:hover,
      &.active{
        @include textGradient;
      }
    }
  }
  .list {
    display: flex;
    .list-item {
      margin-right: 10px;
      border:1px solid red;
    }
  }
}
</style>