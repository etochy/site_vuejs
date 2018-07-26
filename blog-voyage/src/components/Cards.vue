<template>

<div class="actuContainer">
  <div class="cardPerso">
    <div class="card" v-bind:class="{ 'cardLoad element is-loading': validPerso}">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ infosPerso[0] }}</p>
            <p class="subtitle is-6">Posté le : {{infosPerso[2]}}</p>
            <!-- {{ infosPerso[1] }} -->
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Me contacter</a>
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
          <img :src=item.image alt="Placeholder image" @click="ouvrirModal(item)">
        </figure>
      </div>
      <div class="content">
        {{ item.description }}
      </div>
    </div>

    <div v-bind:class="{ 'card cardLoad element is-loading': valid}">
    </div>

    <a class="button is-primary is-outlined"  v-bind:class="{ 'is-loading': validPlus}"  @click="charger()">Plus</a>

    <div class="modal"  v-bind:class="{ 'is-active': modal}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image">
          <img :src=contenuModal.image alt="">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="fermerModal()"></button>
    </div>

  </div>

  <div class="pub">

  </div>
</div>
</template>

<script>
import { HTTP } from './../services/servicesArticles'

import moment from 'moment'

/* eslint-disable */
export default {
  name: 'coucou',
  data() {
    return {
      posts: [],
      infosPerso: [],
      errors: [],
      i: 0,
      valid: true,
      validPlus: false,
      validPerso: true,
      modal: false,
      contenuModal: [],
      params: {
        limit: 6,
        skip: 0
      }
    };
  },
  created() {
    // Init liste posts
    HTTP.get('articles?limit=' + this.params.limit + '&skip=' + this.params.skip)
      .then(response => {
        if (response.data.length != null) {
          this.posts = response.data;

          this.i = this.posts.length;
          this.j = this.i + 5;
        }
        this.valid = false;
      })
      .catch(e => {
        console.log(e);
        this.errors.push(e);
        this.valid = false;
      });
    // Init info personnelles
    HTTP.get('utilisateurs/elaunay')
      .then(response => {
        if (response.data != null) {
          this.infosPerso = response.data;
          this.validPerso = false
        }
      })
      .catch(e => {
        this.errors.push(e)
        this.validPerso = false
      })
  },
  methods: {
    charger() {
      this.validPlus = true;
      //const req = this.y + this.i + this.y1 + this.j + this.y2
      HTTP.params.skip = this.i;
      HTTP.get('articles?limit=' + this.params.limit + '&skip=' + this.params.skip)
        .then(response => {
          if (response.data.values.length != null) {
            response.data.values.forEach(element => {
              this.posts.push(element);
            });
            this.i = this.posts.length;
            //this.j = this.i + 5
          }
          this.validPlus = false;
        })
        .catch(e => {
          this.errors.push(e);
          this.validPlus = false;
        });
    },
    ouvrirModal(item) {
      this.contenuModal = item;
      this.modal = true;
    },
    fermerModal() {
      this.modal = false;
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format('L');
    }
  }
};
</script>
