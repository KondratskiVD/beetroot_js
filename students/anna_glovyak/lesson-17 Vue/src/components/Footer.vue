<template>
    <div class="footer">
        
        
    </div>
</template>


<script>

export default {
    props: ['links'],
    methods: {
        handleClickLink(link, index){
            this.$emit('change-page', {link, index})
        }
    }

}
</script>

<style scoped>
    .footer {
        padding: 30px;
        font-size: 20px;
        flex-grow: 0;
        background-color: #26c6da;
    }
</style>
