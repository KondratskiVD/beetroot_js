<template>
    <div class="page">
       <h1 class="page__title">Home page</h1>
       <div v-if="!users">
           <md-progress-spinner class="spinner" md-mode="indeterminate"></md-progress-spinner>
       </div>
       <div>
           <md-card v-for="(user, index) in users" :key="user.cell">
            <md-card-header>
                <md-card-header-text>
                <div class="md-title">{{user.name.first}}</div>
                <div class="md-subhead">{{user.name.last}}</div>
                <div :mode="index">Index - {{index}}</div>
                </md-card-header-text>

                <md-card-media>
                <img :src="user.picture.thumbnail" alt="People">
                </md-card-media>
            </md-card-header>


            <md-card-actions > <!--modal window-->
                <md-dialog :md-active.sync="showDialog">
                <md-dialog-title>Общая информация</md-dialog-title>

                <md-tabs md-dynamic-height>
                    <md-tab md-label="General">
                        <div class="info-title">Имя: </div><span>{{user.name.first}}</span>
                        <div class="info-title">Фамилия:  </div><span>{{user.name.last}}</span>
                        <div class="info-title">Возраст:  </div><span>{{user.dob.age}}</span>
                        <div class="info-title">Дата рождения:  </div><span>{{user.dob.date}}</span>
                        <div class="info-title">Место жительства:  </div><span>{{user.location.street.name}} {{user.location.street.number}}, {{user.location.city}}, {{user.location.state}}</span>
                    </md-tab>
                </md-tabs>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                    <md-button class="md-primary" @click="showDialog = false">Save</md-button>
                </md-dialog-actions>
                </md-dialog>

                
            </md-card-actions>
            <md-button class="md-primary md-raised" @click="showInfo">Подробнее</md-button>
            </md-card>
       </div>
    </div>
</template>


<script>

import axios from 'axios'

export default {
    data(){
        
        return {
            users: null,
            showDialog: false,
            index: null
        }
    },
    name: 'ProgressSpinnerIndeterminate', 
    created(){
        console.log('created'),
        this.fetchUsers()
    },
    mounted(){
        console.log('mounted')
    },
    methods: {
        fetchUsers(){
            axios.get('https://randomuser.me/api/?results=9')
            .then(users => this.users = users.data.results)
        },
        showInfo(payload, index){
            this.showDialog = true,
            this.index = index
            console.log('showInfo work', payload, this.$vnode.key);
        }
    }
}


</script>
<style scoped lang="scss">
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

    .page__title{
        margin-bottom: 30px;
    }

    .spinner{
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .md-dialog .md-dialog-container {
        max-width: 768px;
    }
   
</style>