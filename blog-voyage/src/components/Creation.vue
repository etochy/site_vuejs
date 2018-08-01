
<template>
  <div class="creationList">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Mise a jour localisation</p>
          </div>
        </div>
        <div class="content">
          <form class="field formulaire ">
            <div class="control">
              <span>Pays</span>
                <input v-model="pays" class="input is-primary is-rounded" type="text" placeholder="pays">
            </div>
            <div class="control">
              <span>Ville</span>
                <input v-model="ville" class="input is-primary is-rounded" type="text" placeholder="ville">
            </div>
            <br>
            <button class="button is-primary is-outlined"  v-bind:class="{ 'is-loading': loading}" v-on:click="majPos()">M-A-J Localisation</button>
          </form>
          <div  v-if="posOk" class="notification is-success">
            Position mise a jour
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Création</p>
          </div>
        </div>
        <div class="content">
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
          <div  v-if="creaOk" class="notification is-success">
            Post ok
          </div>
        </div>
    </div>
  </div>

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
      image: "",
      ville: "",
      pays: "",
      posOk: false,
      creaOk: false,
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
          this.creaOk = true;
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
    },
    majPos() {
      if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.maPosition);
      } else {
        // Pas de support, proposer une alternative ?
      }
    },
    maPosition(pos) {

      this.loading = true;
      var util = {
        idUtil: this.utilisateur,
        position: pos.coords.latitude + "," + pos.coords.longitude,
        pays: this.pays,
        ville: this.ville
      };
      HTTP.put("/utilisateurs/update-position/"+this.utilisateur, util)
        .then(response => {
          this.loading = false;
          this.posOk = true;
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
