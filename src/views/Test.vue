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
            :class="{ active: menu === isActive}" 
            @click="filter($event,menu)">
            {{menu}}
          </li>
        </template>
      </ul>
      <!-- /menu -->
      <!-- list -->
      <Transition mode="out-in" @leave="leave">
        <ul class="list" v-if="show">
          <template v-for="list in lists" :key="list.title">
            <li class="list-item" v-if="isActive ===  'All' ? true:false">
              <div class="card">
                제목 : {{list.title}} <br>
                타입 : {{list.type}} <br>
                {{isActive}}
              </div>
            </li>
            <li class="list-item" v-else-if="list.type === isActive">
              <div class="card">
                제목 : {{list.title}} <br>
                타입 : {{list.type}} <br>
                {{isActive}}
              </div>
            </li>
          </template>
        </ul>
      </Transition>
      <!-- /list -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isActive: '',
      show:false
    }
  },
  computed: {
    menus(){
      return this.$store.state.work.menus
    },
    lists(){
      return this.$store.state.work.lists
    }
  },
  methods: {
    filter(event,type) {
      const checkClass = event.target.classList.contains('active');
      if(!checkClass){
        this.isActive = type;
        this.show = false
      }
    },
    leave(){
      this.show = true
    }
  },
  mounted(){
    this.isActive = 'All';
    this.show = true
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
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    .list-item {
      width: calc(33.33% - 8px);
      margin-bottom: 12px;
      background-color: #ccc;
      position: relative;
      &::before {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      .card {
        position: absolute;
        top: 0;
        left: 0 ;
        width: 100%;
        height: 100%;
      }
    }

    
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateX(10px);
    opacity: 0.4;
  }

}
</style>