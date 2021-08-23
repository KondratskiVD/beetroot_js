<template>
    <div class="input">
        <input @blur="inputNumber" v-model="message" type="text">
        <p>{{number}}</p>
    </div>
</template>


<script>

export default {
    data(){
        return{
            number: 0
        }
    },
    methods:{
        inputNumber(){
            this.number = this.message
            this.message = null
        }
    }
    
}
</script>
