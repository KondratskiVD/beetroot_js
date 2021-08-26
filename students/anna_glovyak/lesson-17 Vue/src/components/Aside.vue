<template>
    <div class="aside" v-bind:class="{ vizible: visible }">
        
        <md-list>
            <md-list-item to="/home">
                <md-icon>home</md-icon>
                <span class="md-list-item-text">Home</span>
            </md-list-item>
            <md-list-item to="/about">
                <md-icon><span class="material-icons">business</span></md-icon>
                <span class="md-list-item-text">About</span>
            </md-list-item>
            <md-list-item to="/contacts">
                <md-icon><span class="material-icons">call</span></md-icon>
                <span class="md-list-item-text">Contacts</span>
            </md-list-item>
            <!-- <md-list-item>
                <md-icon><span class="material-icons" v-on:click="visible=!visible">visibility</span></md-icon>
            </md-list-item> -->
            <md-list-item v-on:click="visible=!visible">
                <md-icon><span class="material-icons" >{{visible?'visibility_off':'visibility'}}</span></md-icon>
                <span class="md-list-item-text">Скрыть</span>
            </md-list-item>
            
        </md-list>
    </div>
</template>


<script>

export default {
    props: ['links'],
    data: function(){
        return {
            visible: false,
        }
    },
    beforeUpdate(){
        console.log('beforeUpdate aside')
    },
    methods: {
        handleClickLink(link, index){
            this.$emit('change-page', {link, index})
        },
    }
}


</script>

<style scoped>
    .aside {
        /* padding: 30px; */
        font-size: 20px;
        flex-grow: 0;
        background-color: #0095a8;
    }
    .vizible {
        width: 50px;
    }
    .md-list:last-child .md-list-item-button{
        background-color: #e8fbfd;
    }
    
</style>
