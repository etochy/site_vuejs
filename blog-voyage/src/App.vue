<template>

<div id='app'>
  <header>
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Esteban Launay
          </h1>
          <h2 class="subtitle">
            Développeur Full-Stack et photographe amateur
          </h2>
        </div>
      </div>
    </section>

  </header>
    <div class="tabs is-centered">
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
    </div>
  <router-view/>

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>estebanlaunay.com</strong> by <a href="https://github.com/etochy">Esteban Launay</a>.
        This website works with <a href="https://bulma.io/">BULMA</a> and <a href="https://vuejs.org/">VueJs</a>.
        <br>
        The website content is licensed <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.CC BY-NC-SA 4.0
        <br>
        <router-link id="router-link" class="level-item" to="/login" active-class="is-active">
          administration
        </router-link>
      </p>
    </div>
  </footer>

</div>

</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  components: {},
  data() {
    return {
      tab: "actu"
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tab = selectedTab;
    }
  }
};
</script>
