<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="input" @focusout="passNumber">
      <input type="text" />
    </div>
    <Buttons />
    <Counter :counter="counter" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Buttons from "./components/Buttons.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",

  data() {
    return {
      counter: null,
    };
  },
  components: {
    HelloWorld,
    Buttons,
    Counter,
  },
  methods: {
    passNumber(e) {
      this.counter = e.target.value;
      e.target.value = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 
