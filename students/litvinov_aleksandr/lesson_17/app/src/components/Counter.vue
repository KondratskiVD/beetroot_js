<template>
  <div>
    <h3>Number: {{ counter }}</h3>
  </div>
</template>

<script>
import { eventEmitter } from "../main";
export default {
  props: ["counter"],
  data() {
    return {
      currentCounter: this.counter,
    };
  },
  mounted() {
    eventEmitter.$on("addCount", () => {
      this.counter++;
    }),
      eventEmitter.$on("decCount", () => {
        this.counter--;
      });
  },
};
</script>