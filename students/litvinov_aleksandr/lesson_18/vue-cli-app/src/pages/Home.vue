<template>
  <div>
    <h1 class="title">Home page</h1>
    <md-progress-spinner
      v-if="!users"
      md-mode="indeterminate"
    ></md-progress-spinner>
    <md-card v-for="user in users" :key="user.cell">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ user.name.first }}</div>
          <div class="md-subhead">{{ user.name.last }}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="user.picture.thumbnail" alt="People" />
        </md-card-media>
      </md-card-header>
      <div>
        <md-button class="md-primary md-raised" @click="showInfo(user)"
          >User Info</md-button
        >
      </div>
    </md-card>
    <Info 
    :showDialog="showDialog" 
    :user="currentUser" 
    @closeModal = "showDialog = false" 
    @removeUser="removeUser" />
  </div>
</template>


<script>
import axios from "axios";
import Info from "../components/Info.vue";

export default {
  data() {
    return {
      users: null,
      showDialog: false,
      currentUser: {
        name:{
          first: '',
          last: ''
        },
        picture:{
          thumbnail: ''
        },
        dob:{
          age: ''
        },
        gender: '',
        phone:''
      }
    };
  },
  components: {
    Info,
  },
  created() {
    this.fetchUsers();
  },
  mounted() {},
  methods: {
    fetchUsers() {
      axios
        .get("https://randomuser.me/api/?results=9")
        .then((users) => (this.users = users.data.results));
    },
    showInfo(user) {
      this.currentUser = user;
      this.showDialog = true;
    },
    removeUser(userCell){
      this.users = this.users.filter(user => user.cell !== userCell)
      this.showDialog = false;
    }
  },
  computed: {},
};
</script>

<style>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.title {
  margin-bottom: 50px;
}
.md-progress-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 24px;
}

.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>