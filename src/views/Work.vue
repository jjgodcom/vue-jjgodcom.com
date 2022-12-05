<template>
  <div class="home-work">
    <div class="container">
      <Title></Title>
      <Menu></Menu>
      <List></List>
    </div>
  </div>
</template>

<script>
import Title from '~/components/work/Title'
import Menu from '~/components/work/Menu'
import List from '~/components/work/List'

export default {
  components:{
    Title,
    Menu,
    List
  },
  mounted(){
    // 페이지 진입시 menu-All 활성화 , list 전체 출력
    this.$store.dispatch('work/changeIsActive', 'All')
    this.$store.dispatch('work/changeIsShow', true)
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.home-work {
  padding: 100px 0;
}

@include media890 {
  .home-work {
    padding: 50px 0;
  }
}
</style>