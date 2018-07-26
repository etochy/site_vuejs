
<template>
<div>
    <p>Login</p>
    <form class="field formulaire ">
        <div class="control">
            <input v-model="username" class="input is-primary is-rounded" type="text" placeholder="username" required>
        </div>
        <div class="control">
            <input v-model="password" class="input is-primary is-rounded" type="password" placeholder="password" required>
        </div>
        <br>
        <button class="button is-primary is-outlined"  v-bind:class="{ 'is-loading': loading}"  v-on:click="login()">login</button>
    </form>
    </div>
</template>

<script>
/* eslint-disable */
import { HTTP } from "./../services/servicesArticles";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      username: "",
      password: ""
    };
  },
  created() {},
  methods: {
    login() {
      this.loading = true;
      HTTP.post("/login", {
        username: this.username,
        password: this.password
      })
        .then(response => {
          HTTP.defaults.headers.authorization = response.data.token;
          localStorage.username = response.data.user.username;
          this.loading = false;
          this.$router.push("/create");
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  },
  filters: {}
};
</script>
