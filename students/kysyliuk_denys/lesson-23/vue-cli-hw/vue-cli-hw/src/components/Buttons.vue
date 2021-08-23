<template>
    <div class="buttons">
        <button @click="inc(this.number)">+</button>
        <button @click="dec(this.number)">-</button>
    </div>
</template>

<script>

export default {
    data(){
        return{
        }
    },
    methods: {
        inc(number){
            this.number++
        },
        dec(number){
            this.number--
        },
    }
}

</script>