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
            <md-button class="md-primary md-raised" @click="showInfo(index)">Подробнее</md-button>
            </md-card>
       </div>
       <!--modal window-->
       <md-card-actions v-if="modal"> 
                <md-dialog :md-active.sync="showDialog">
                <md-dialog-title>Общая информация</md-dialog-title>

                <md-tabs md-dynamic-height>
                    <md-tab md-label="General">
                        <div class="info-title">Имя: </div><span>{{this.users[index].name.first}}</span>
                        <div class="info-title">Фамилия:  </div><span>{{this.users[index].name.last}}</span>
                        <div class="info-title">Возраст:  </div><span>{{this.users[index].dob.age}}</span>
                        <div class="info-title">Дата рождения:  </div><span>{{this.users[index].dob.date}}</span>
                        <div class="info-title">Место жительства:  </div><span>{{this.users[index].location.street.name}} {{this.users[index].location.street.number}}, {{this.users[index].location.city}}, {{this.users[index].location.state}}</span>
                    </md-tab>
                </md-tabs>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                    <md-button class="md-primary" @click="showDialog = false">Save</md-button>
                </md-dialog-actions>
                </md-dialog>  
            </md-card-actions>
    </div>
    
</template>


<script>

import axios from 'axios'

export default {
    data(){
        
        return {
            users: null,
            showDialog: false,
            index: null,
            modal: false
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
        showInfo(index){
            this.showDialog = true,
            this.index = index,
            this.modal = true
            console.log('showInfo work', index, this.users[index].name.first);
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