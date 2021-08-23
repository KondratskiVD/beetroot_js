<template>
  <div class="app__buttons">
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { eventEmitter } from "../main";

export default {
  props: ["counter"],
  methods: {
    increment() {
      eventEmitter.$emit("addCount");
    },
    decrement() {
      eventEmitter.$emit("decCount");
    },
  },
};
</script>

<style>
.app__buttons {
  margin-top: 20px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
}
</style>
