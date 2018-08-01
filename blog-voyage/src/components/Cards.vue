
<template>
<div class="actuContainer">
  <div class="cardPerso">
    <div class="card" v-bind:class="{ 'cardLoad element is-loading': validPerso}">
      <div class="card-image">
        <figure class="image">
          <img :src=user.image alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ user.nom }} {{ user.prenom }}</p>
            <p class="subtitle is-6">{{ user.pays }} {{ user.ville }}</p>

            <p>{{ user.bio }}</p>

            <div id="mapid" style="height: 20em; width: 100%"></div>

          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item" style="flex-direction:column">
          <a :href=mailto+user.email>Me contacter</a>
          <p> {{ user.email }} </p>
        </div>
      </footer>
    </div>
  </div>

  <div class="filActu">

    <div v-for="item in posts" :key="item.date" class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ item.nom }}</p>
            <p class="subtitle is-6">Posté le : {{  item.date | moment }}</p>
          </div>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <a  v-bind:href="item.image" target="_blank">
            <img :src=item.image alt="Image">
          </a>
        </figure>
      </div>
      <div class="content">
        {{ item.description }}
      </div>
    </div>

    <div v-bind:class="{ 'card cardLoad element is-loading': valid}">
    </div>

    <a class="button is-primary is-outlined"  v-bind:class="{ 'is-loading': validPlus}"  @click="charger()">Plus</a>

  </div>
</div>
</template>

<script>
/* eslint-disable */
import { HTTP } from "./../services/servicesArticles";

import moment from "moment";

export default {
  name: "Card",
  data() {
    return {
      mailto: "mailto:",
      posts: [],
      user: {
        nom: "",
        prenom: "",
        email: "",
        username: "",
        position: "",
        pays: "",
        ville: "",
        bio: ""
      },
      map: null,
      errors: [],
      i: 0,
      valid: true,
      validPlus: false,
      validPerso: true,
      modal: false,
      contenuModal: [],
      params: {
        limit: 5,
        skip: 0
      }
    };
  },
  mounted() {
    this.map = L.map("mapid", {
      center: [47.2137728, -1.5499264],
      zoom: 7,
      trackResize: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([47.2137728, -1.5499264])
      .addTo(this.map)
      .bindPopup("Ma position de depart");
  },
  created() {
    this.initChargement();
    this.chargerUser();
  },
  methods: {
    charger() {
      this.validPlus = true;
      this.params.skip = this.i;
      HTTP.get(
        "articles?limit=" + this.params.limit + "&skip=" + this.params.skip
      )
        .then(response => {
          if (response.data.length != null) {
            response.data.forEach(element => {
              this.posts.push(element);
            });
            this.i = this.posts.length;
          }
          this.validPlus = false;
        })
        .catch(e => {
          this.errors.push(e);
          this.validPlus = false;
        });
    },
    initChargement() {
      // Init liste posts
      HTTP.get(
        "articles?limit=" + this.params.limit + "&skip=" + this.params.skip
      )
        .then(response => {
          if (response.data.length != null) {
            this.posts = response.data;
            this.i = this.posts.length;
          }
          this.valid = false;
          this.map.invalidateSize(true);
        })
        .catch(e => {
          this.errors.push(e);
          this.valid = false;
        });
    },
    chargerUser() {
      HTTP.get("utilisateurs/elaunay")
        .then(response => {
          if (response.data != null) {
            this.user = response.data;
            this.validPerso = false;
            this.changerPos(this.map, this.user.position);
          }
        })
        .catch(e => {
          this.errors.push(e);
          this.validPerso = false;
        });
    },
    changerPos(m, p) {
      var po = p.split(",");
      m.setView([po[0], po[1]], 7);

      L.marker([po[0], po[1]]).addTo(m);
      m.invalidateSize(true);
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("L");
    }
  }
};
</script>
