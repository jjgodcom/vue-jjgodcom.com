<template>
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
</template>

<script>
export default {
  computed: {
    isActive(){
      return this.$store.state.work.isActive
    },
    menus(){
      return this.$store.state.work.menus
    }
  },
  methods:{
    filter(event,type) {
      const checkClass = event.target.classList.contains('active');
      if(!checkClass){
        this.$store.dispatch('work/changeIsActive', type)
        this.$store.dispatch('work/changeIsShow', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';

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
</style>