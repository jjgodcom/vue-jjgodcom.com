<template>
  <Transition mode="out-in" @leave="leave">
    <ul class="list" v-if="show">
      <template v-for="list in lists" :key="list.title">
        <li class="item" v-if="isActive ===  'All' ? true:false">
          <Card :list="list"></Card>
        </li>
        <li class="item" v-else-if="list.type === isActive">
          <Card :list="list"></Card>
        </li>
      </template>
    </ul>
  </Transition>
</template>

<script>
import Card from '~/components/work/Card'

export default {
  components: {
    Card
  },
  computed: {
    isActive(){
      return this.$store.state.work.isActive
    },
    show(){
      return this.$store.state.work.show
    },
    lists(){
      return this.$store.state.work.lists
    }
  },
  methods: {
    leave(){
      this.$store.dispatch('work/changeIsShow', true)
    } 
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  .item {
    width: calc(33.33% - 8px);
    margin-bottom: 12px;
    background-color: #ccc;
    position: relative;
    &::before {
      content: "";
      display: block;
      padding-bottom: 100%;
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
</style>