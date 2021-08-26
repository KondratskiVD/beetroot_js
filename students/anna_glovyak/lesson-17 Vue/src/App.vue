<template>
  <div class="app">
    <Aside 
      :links="links"
      @change-page="changePage"
    />
    <Main/>
    
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Main from './layouts/Main.vue'

export default {
  name: 'App',
  components: {
    Aside,
    Main
  },
  data(){
    return {
    }
  },
  methods: {
    changePage(payload){
      this.currentPage = payload;
    }
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  height: 100%;
}
</style>
