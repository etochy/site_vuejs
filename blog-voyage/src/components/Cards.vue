<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
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
      infPerso: [],
      errors: [],
      i: 2,
      j: 6,
      y: 'A',
      y1: ':D',
      y2: '?valueRenderOption=FORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&alt=json',
      valid: true,
      validPerso: true,
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
          this.perso = response.data.values[0]
          this.validPerso = false
        }
      })
      .catch(e => {
        this.errors.push(e)
        this.validPerso = false
      })
  },
  charger () {
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
        this.valid = false
      })
      .catch(e => {
        this.errors.push(e)
        this.valid = false
      })
  }
}
</script>
