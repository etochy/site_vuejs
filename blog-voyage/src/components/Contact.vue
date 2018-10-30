<template>
<div class="container is-fullhd">
  <div class="columns">
  <div class="column">
    <div class="card" >
      <div class="card-content">
        <p class="title is-4">Vous pouvez aussi me contacter via ces plateformes</p>
        <div class="content">
          <a class="button is-dark" href="https://github.com/etochy" target="_blank">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>Github</span>
          </a>
          <a class="button is-dark" href="http://www.linkedin.com/in/esteban-launay-8b2060a5" target="_blank">
            <span class="icon">
              <i class="fab fa-linkedin"></i>
            </span>
            <span>Linkedin</span>
          </a>
          <a class="button is-dark" href="https://www.malt.fr/profile/estebanlaunay" target="_blank">
            <span class="icon">
              <i class="far fa-comments"></i>
            </span>
            <span>Hire me on Malt</span>
          </a>
          <br>
          <br>
          <span>Si vous préfèrez m'envoyer un mail directement :</span>
          <a href="mailto:esteban.launay.pro@gmail.com">esteban.launay.pro@gmail.com</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import { HTTP } from "./../services/servicesArticles";

export default {
  name: "Contact",
  data() {
    return {
      sujet: "",
      mail: "",
      message: "",
      loading: false,
      envoiOk: false,
      envoiError: false,
      formError: false
    };
  },
  methods: {
    envoi_mail() {
      if (this.sujet === "" || this.mail === "" || this.message === "" || !this.mail.includes('@') || !this.mail.includes('.')) {
        this.formError = true;
      } else {
        this.loading = true;
        var message = {
          sujet: this.sujet,
          mail: this.mail,
          message: this.message
        };
        HTTP.post("/contacter", message)
          .then(response => {
            this.loading = false;
            this.envoiOk = true;
            this.sujet = "";
            this.mail = "";
            this.message = "";
            this.envoiError = false;
            this.formError = false;
          })
          .catch(error => {
            console.log(error);
            this.loading = false;
            this.envoiError = true;
          });
      }
    },
    fermer(b) {
      if (b === "ok") {
        this.envoiOk = false;
      } else if(b === 'envoi'){
        this.envoiError = false;
      } else if(b === 'form'){
        this.formError = false;
      }
    }
  }
};
</script>
