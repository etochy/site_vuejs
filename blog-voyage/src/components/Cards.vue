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

    <div v-for="item in posts" :key="item[0]" class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ item[1] }}</p>
            <p class="subtitle is-6">Posté le : {{ item[0] }}</p>
          </div>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img :src=item[3] alt="Placeholder image" @click="ouvrirModal(item)">
        </figure>
      </div>
      <div class="content">
        {{ item[2] }}
      </div>
    </div>

    <div v-bind:class="{ 'card cardLoad element is-loading': valid}">
    </div>

    <a class="button is-primary is-outlined"  v-bind:class="{ 'is-loading': validPlus}"  @click="charger()">Plus</a>

    <div class="modal"  v-bind:class="{ 'is-active': modal}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image">
          <img :src=contenuModal[3] alt="">
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
import {HTTP} from './../share/http-common'

export default {
  name: 'HelloWorld',
  data () {
    return {
      posts: [],
      infosPerso: [],
      errors: [],
      i: 2,
      j: 6,
      y: 'A',
      y1: ':D',
      y2: '?valueRenderOption=FORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&alt=json',
      valid: true,
      validPlus: false,
      validPerso: true,
      modal: false,
      contenuModal: [],
      perso: 'F2:H2?valueRenderOption=FORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&alt=json'
    }
  },
  created () {
    const req = this.y + this.i + this.y1 + this.j + this.y2
    // Init liste posts
    HTTP.get(req)
      .then(response => {
        if (response.data.values.length != null) {
          this.posts = response.data.values
          this.i = this.posts.length + 2
          this.j = this.i + 5
        }
        this.valid = false
      })
      .catch(e => {
        this.errors.push(e)
        this.valid = false
      })
    // Init info personnelles
    HTTP.get(this.perso)
      .then(response => {
        if (response.data.values.length != null) {
          this.infosPerso = response.data.values[0]
          this.validPerso = false
        }
      })
      .catch(e => {
        this.errors.push(e)
        this.validPerso = false
      })
  },
  methods: {
    charger () {
      this.validPlus = true
      const req = this.y + this.i + this.y1 + this.j + this.y2
      console.log(req)
      HTTP.get(req)
        .then(response => {
          if (response.data.values.length != null) {
            response.data.values.forEach(element => {
              this.posts.push(element)
            })
            this.i = this.posts.length + 2
            this.j = this.i + 5
          }
          this.validPlus = false
        })
        .catch(e => {
          this.errors.push(e)
          this.validPlus = false
        })
    },
    ouvrirModal (item) {
      console.log('ouverture')
      this.contenuModal = item
      this.modal = true
    },
    fermerModal () {
      this.modal = false
    }
  }
}
</script>
