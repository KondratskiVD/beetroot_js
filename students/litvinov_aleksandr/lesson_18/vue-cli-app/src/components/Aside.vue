<template>
  <div class="aside" :class="{'show-menu': menuOpen}">
    <md-button class="md-icon-button md-dense md-raised md-primary" @click="menuOpen = !menuOpen">
      <md-icon>cached</md-icon>
    </md-button>
    <md-list >
      <md-list-item to="/home">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">Home</span>
      </md-list-item>

      <md-list-item to="/about">
        <md-icon>business</md-icon>
        <span class="md-list-item-text">About</span>
      </md-list-item>

      <md-list-item to="contacts">
        <md-icon>call</md-icon>
        <span class="md-list-item-text">Contacts</span>
      </md-list-item>
    </md-list>
  </div>
</template>


<script>
export default {
  props: ["links"],
  data(){
    return{
      menuOpen: true
    }
  },
  methods: {
    handleClickLink(link, index) {
      this.$emit("change-page", { link, index });
    },
    hideMenu() {
      console.log("work!");
    },
  },
};
</script>

<style>
.aside {
  transition:  all .2s ease;
  max-width: 152px;
  font-size: 20px;
  flex-grow: 0;
  background: purple;
}
.md-icon-button {
  margin: 10px;
}
.show-menu{
  max-width: 60px;
}
</style>