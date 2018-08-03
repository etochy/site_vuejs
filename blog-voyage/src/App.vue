<template>

<div id='app'>
  <header>
    <section class="hero is-dark is-medium">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-menu">
                <div class="navbar-end">
                  <span class="navbar-item">
                    <a class="button is-dark" href="https://github.com/etochy" target="_blank">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Github</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-dark" href="http://www.linkedin.com/in/esteban-launay-8b2060a5" target="_blank">
                      <span class="icon">
                        <i class="fab fa-linkedin"></i>
                      </span>
                      <span>Linkedin</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-dark" href="https://www.malt.fr/profile/estebanlaunay" target="_blank">
                      <span class="icon">
                        <i class="far fa-comments"></i>
                      </span>
                      <span>Hire me on Malt</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-dark" href="https://www.instagram.com/esteban_launay/" target="_blank">
                      <span class="icon">
                        <i class="fab fa-instagram"></i>
                      </span>
                      <span>Instagram</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
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
        <li :class="[ tab === 'actu' ? 'is-active' : '']">
          <router-link id="router-link" class="level-item" to="/" active-class="is-active">
            Actualité
          </router-link>
        </li>
        <li :class="[ tab === 'contact' ? 'is-active' : '']">
          <router-link id="router-link" class="level-item" to="/contact" active-class="is-active">
            Me contacter
          </router-link>
        </li>
        <li :class="[ tab === 'about' ? 'is-active' : '']">
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
        <strong>launay-esteban.fr</strong> by <a href="https://github.com/etochy">Esteban Launay</a>.
        This website works with <a href="https://bulma.io/">BULMA</a> and <a href="https://vuejs.org/">VueJs</a>.
        <br>
        The website content is licensed <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.CC BY-NC 4.0
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
      tab: this.$route.name
    };
  },
  created() {
  },
  watch: {
    // modification des tab en fonction de la route
    '$route' (to, from) {
       this.selectTab(to.name);
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.tab = selectedTab;
    }
  }
};
</script>
