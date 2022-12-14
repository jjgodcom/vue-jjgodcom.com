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
  components:{
    Photo,
    Info,
    Iam,
    Skills,
    Career
  }
}
</script>
