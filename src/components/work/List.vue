<template>
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
</template>

<script>
export default {
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
</style>