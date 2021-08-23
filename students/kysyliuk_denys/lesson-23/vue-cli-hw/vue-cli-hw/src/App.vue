<template>
  <div id="app">
    <Input
    
    />
    <Buttons
    
    />
  </div>
</template>

<script>

import Buttons from './components/Buttons.vue'
import Input from './components/Input.vue'

export default {
  name: 'App',
  components: {
    Buttons,
    Input,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
