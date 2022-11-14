<template>
  <Title></Title>
  <Career></Career>
  <HelloWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld'
import Title from '~/components/home/Title'
import Career from '~/components/Career'

export default {
  components: {
    HelloWorld,
    Title,
    Career
  }
}
</script>
