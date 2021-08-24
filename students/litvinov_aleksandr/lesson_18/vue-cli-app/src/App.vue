<template>
  <div class="app">
    <Aside />
    <Main />
  </div>
</template>

<script>
import Aside from "./components/Aside.vue";
import Main from "./layouts/Main.vue";

export default {
  name: "App",
  components: {
    Aside,
    Main,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;
}
</style>
