<template>
  <div class="container">
    <Photo></Photo>
    <Info></Info>
    <Iam></Iam>
    <Skills></Skills>
    <Career></Career>
  </div>
</template>

<script>
import Photo from '~/components/about/Photo'
import Info from '~/components/about/Info'
import Iam from '~/components/about/Iam'
import Skills from '~/components/about/Skills'
import Career from '~/components/about/Career'

export default {
  components: {
    Photo,
    Info,
    Iam,
    Skills,
    Career
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
@import '~/scss/scrollSpy.scss';
.container {
  padding-top: 100px;
}

@include media1204 {
  .container {
    padding: 50px 0;
  }
}
</style>