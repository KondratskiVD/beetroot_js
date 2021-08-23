<template>
    <div class="main">
        <div class="container">
            <router-view></router-view>
        </div>
       
       <Footer/>
    </div>
</template>


<script>
import Footer from '../components/Footer.vue'

export default {
    props: {
        page: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        Footer,
    }

}
</script>
<style scoped>
    .main{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .container {
        flex-grow: 1;
        padding: 50px 50px 0 50px;
    }
</style>