<template>
  <div class="container">
    <Photo></Photo>
    <Iam></Iam>
    <Skills></Skills>
  </div>
</template>

<script>
import Photo from '~/components/about/Photo'
import Iam from '~/components/about/Iam'
import Skills from '~/components/about/Skills'

export default {
  components:{
    Photo,
    Iam,
    Skills
  }
}
</script>
