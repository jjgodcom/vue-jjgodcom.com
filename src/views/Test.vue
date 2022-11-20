<template>
  <button @click="insert">insert at random index</button>
  <button @click="reset">reset</button>

  <TransitionGroup tag="ul" name="fade" class="">
    <div v-for="list in lists" class="item" :key="list.title">
      제목 : {{list.title}} <br>
      타입 : {{list.type}}
    </div>
  </TransitionGroup>
</template>

<script>
const getInitialItems = () => [1, 2, 3, 4, 5]
let id = getInitialItems().length + 1

export default {
  data() {
    return {
      items: getInitialItems(),
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
    insert() {
      const i = Math.round(Math.random() * this.items.length)
      this.items.splice(i, 0, id++)
    },
    reset() {
      this.items = getInitialItems()
    }
  }
}
</script>


<style>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>