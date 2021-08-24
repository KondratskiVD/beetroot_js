<template>
  <md-dialog :md-active.sync="showDialog">
    <md-tabs md-dynamic-height>
      <md-tab md-label="main info">
        <img :src="user.picture.thumbnail" alt="People" />
        <p>First Name: {{ user.name.first }}</p>
        <p>Last Name: {{ user.name.last }}</p>
        <p>Gender: {{ user.gender }}</p>
        <p>Age: {{ user.dob.age }}</p>
        <p>Phone: {{ user.phone }}</p>
      </md-tab>
    </md-tabs>
    <md-dialog-actions>
      <md-button class="md-primary" @click="closeInfo"
        >Close</md-button
      >
      <md-button class="md-primary" @click="$emit('removeUser', user.cell)">delete</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>


<script>
export default {
  props: ["showDialog", "user"],

  data() {
    return {};
  },
  methods: {
    closeInfo(){
      this.$emit('closeModal')
    },
  },
  computed:{
    
  }
};
</script>



<style >
</style>