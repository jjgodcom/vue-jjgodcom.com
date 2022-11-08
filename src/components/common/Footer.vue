<template>
  <footer>
    <p>🐢 Copyright {{year}}. Web Front-end developer Suho-Park 🐢</p>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      year: new Date().getFullYear()
    }
  },
}
</script>

<style lang="scss" scoped>

footer {
  width: 100%;
  padding: 20px 0;
  color: #292929;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>