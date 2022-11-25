<template>
  <div class="container">
    <Photo></Photo>
    <Iam></Iam>
    <Skills></Skills>
  </div>
</template>

<script>
import Iam from '~/components/about/Iam'
import Photo from '~/components/about/Photo'
import Skills from '~/components/about/Skills'

export default {
  components: {
    Iam,
    Photo,
    Skills
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 100px;
}
</style>