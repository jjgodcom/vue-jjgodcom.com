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
        <template 
          v-for="menu in menus" 
          :key="menu">
          <li 
            v-if="menu === 'All'" 
            :class="{ active: menu === isActive}"
            @click="filterModeAll()">
            {{menu}} 
          </li>
          <li 
            v-else 
            :class="{ active: menu === isActive}" 
            @click="filter($event,menu)">
            {{menu}}
          </li>
        </template>
      </ul>
      <!-- /menu -->
      <!-- list -->
      <TransitionGroup 
        tag="ul" 
        name="fade" 
        class="list">
        <template 
          v-for="list in lists" 
          :key="list.title">
          <div class="list-item" v-if="isActive ===  'All' ? true:false">
            제목 : {{list.title}} <br>
            타입 : {{list.type}}
          </div>
          <div class="list-item" v-else-if="list.type === isActive">
            제목 : {{list.title}} <br>
            타입 : {{list.type}}
          </div>
        </template>
      </TransitionGroup>
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
      isActive: false,
      lists:[
        {
          title:'HTML',
          type:'HTML'
        },
        {
          title:'HTML23',
          type:'HTML'
        },
        {
          title:'CSS',
          type:'CSS'
        },
        {
          title:'Bundler',
          type:'Bundler'
        },
        {
          title:'JAVA',
          type:'JAVA'
        },
        {
          title:'DB',
          type:'DB'
        },
        {
          title:'REFERENCE',
          type:'REFERENCE'
        },
        {
          title:'PORTFOLIO',
          type:'PORTFOLIO'
        },
        {
          title:'OTHER',
          type:'OTHER'
        },
      ]
    }
  },
  methods: {
    filter(event,type) {
      const checkClass = event.target.classList.contains('active');
      if(!checkClass) this.isActive = type;
    },
    filterModeAll(){
      this.isActive = 'All';
    }
  },
  mounted(){
    this.filterModeAll()
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
    flex-wrap: wrap;
    position: relative;
    .list-item {
      margin-right: 10px;
      border:1px solid red;
    }
  }

  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
    // transform: translateX(10px);
  }

  .fade-leave-active {
    position: absolute;
  }
}
</style>