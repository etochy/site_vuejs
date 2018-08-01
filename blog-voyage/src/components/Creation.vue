
<template>
<div>
    <p>Creer Article</p>
    <form class="field formulaire ">
        <div class="control">
          <span>Nom Article</span>
            <input v-model="nom" class="input is-primary is-rounded" type="text" placeholder="nom">
        </div>
        <div class="control">
          <span>Date</span>
            <!--<input v-model="date" class="input is-primary is-rounded" type="text" placeholder="date">-->
            <datepicker :format="format" v-model="date"></datepicker>
        </div>
        <div class="control">
          <span>Localistaion</span>
            <input v-model="localisation" class="input is-primary is-rounded" type="text" placeholder="localisation">
        </div>
        <div class="control">
          <span>Description</span>
            <textarea v-model="description" class="textarea is-primary" type="text" placeholder="description"></textarea>
        </div>
        <div class="control">
          <span>Lien image</span>
            <input v-model="image" class="input is-primary is-rounded" type="text" placeholder="http://exempleimage">
        </div>
        <br>
        <button class="button is-primary is-outlined"  v-bind:class="{ 'is-loading': loading}" v-on:click="create()">create</button>
    </form>
    </div>
</template>

<script>
/* eslint-disable */
import { HTTP } from "./../services/servicesArticles";
import Datepicker from 'vuejs-datepicker';

export default {
  name: "InfoPerso",
  components: {
    Datepicker
  },
  data() {
    return {
      loading: false,
      format: 'MM-dd-yyyy',
      utilisateur: "",
      akArticle: "",
      nom: "",
      date: "",
      localisation: "",
      description: "",
      image: ""
    };
  },
  created() {
    if (localStorage.username) {
      this.utilisateur = localStorage.username;
    }
  },
  methods: {
    create() {
      this.loading = true;
      HTTP.post("/articles", {
        utilisateur: this.utilisateur,
        akArticle: "ak_" + this.nom,
        nom: this.nom,
        date: this.date,
        localisation: this.localisation,
        description: this.description,
        image: this.image
      })
        .then(response => {
          this.loading = false;
          console.log(response);
          this.utilisateur = "";
          this.akArticle = "";
          this.nom = "";
          this.date = "";
          this.localisation = "";
          this.description = "";
          this.image = "";
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
