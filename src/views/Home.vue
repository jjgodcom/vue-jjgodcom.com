<template>
  <Title></Title>
  <About></About>
  <HelloWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld'
import Title from '~/components/home/Title'
import About from '~/components/home/About'

export default {
  components: {
    HelloWorld,
    Title,
    About
  }
}
</script>
