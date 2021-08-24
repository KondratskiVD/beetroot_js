<template>
  <div class="main">
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <Footer />
  </div>
</template>


<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
.main {
  background: rgb(206, 255, 194);
  font-size: 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
}

.container {
  flex-grow: 1;
  padding: 50px 50px 0 50px;
}
.fade-enter{
  transform: translateX(-300px);
  opacity: 0;
}
.fade-enter-active{
  transition: all .2s ease;

}
.fade-leave{
  transform: translateX(0);
}
.fade-leave-active{
  transition: all .2s ease;
  transform: translateX(300px);
  opacity: 0;
}
</style>
