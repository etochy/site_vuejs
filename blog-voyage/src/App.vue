<template>
<div id='app'>
  <header class="tabs is-centered">
    <ul>
      <li :class="[ tab === 'actu' ? 'is-active' : '']" @click="selectTab('actu')">
        <router-link id="router-link" class="level-item" to="/" active-class="is-active">
          Actualité
        </router-link>
      </li>
      <li :class="[ tab === 'contact' ? 'is-active' : '']" @click="selectTab('contact')">
        <router-link id="router-link" class="level-item" to="/contact" active-class="is-active">
          Me contacter
        </router-link>
      </li>
      <li :class="[ tab === 'propos' ? 'is-active' : '']" @click="selectTab('propos')">
        <router-link id="router-link" class="level-item" to="/about" active-class="is-active">
          A propos
        </router-link>
      </li>
    </ul>
  </header>
  <router-view/>
</div>

</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      tab: 'actu'
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.tab = selectedTab
    }
  }
}
</script>
