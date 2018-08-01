<template>
<div>

  <h1>Ce site en encore en cours de construction, il reste de nombreux détails à régler</h1>

  <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Experiences : </p>
          </div>
        </div>
        <div class="content" style="display: flex; flex-flow: row wrap">

          <div class="card" style="flex: 1;">

            <div class="card-content cardPropos">
              <p class="title is-4">Création d'une application de gestion des emplois et des compétences </p>
              <p class="subtitle is-6">Janvier - Juillet 2018, SII Atlantique, Nantes</p>
              <div class="content">
                <ul>
                  <li>Back-end en Java 8, Spring Boot 2.0</li>
                  <li>Front End en Angular 5</li>
                  <li>Architecture micro-services</li>
                  <li>Deploiement avec Kubernetes, Jenkins, Docker et Nexus</li>
                  <li>Stage de fin d'études</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card" style="flex: 1;">
            <div class="card-content cardPropos">
              <p class="title is-4">Reprise d'un projet d'archivage et d'index de données</p>
              <p class="subtitle is-6">Avril - Aout 2016, CGI, Carquefou</p>
              <div class="content">
                <ul>
                  <li>Basé sur EMC Documentum et Sinequa</li>
                  <li>Programmation en Java et C#</li>
                </ul>
              </div>
            </div>
          </div>
<!--
          <div class="card" style="flex: 1;">
            <div class="card-content cardPropos">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">DUT Informatique</p>
                  <p class="subtitle is-6">2013 - 2015</p>
                </div>
              </div>
              <div class="content">
                <ul>
                  <li>Apprentissage programmation objet</li>
                  <li>Bases de données</li>
                  <li>Outils de developpement</li>
                </ul>
              </div>
            </div>
          </div>
-->
        </div>
    </div>
  </div>

  <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Formations : </p>
          </div>
        </div>
        <div class="content" style="display: flex; flex-flow: row wrap">

          <div class="card" style="flex: 1;">

            <div class="card-content cardPropos">
              <p class="title is-4">Master ALMA : </p>
              <p class="subtitle is-6">2016 - 2018</p>
              <div class="content">
                <ul>
                  <li>Developpement Web et client lourd, Test logiciel</li>
                  <li>Architecture logicielle</li>
                  <li>Web Semantique</li>
                  <li>Gestion des données à large échelle</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card" style="flex: 1;">
            <div class="card-content cardPropos">
              <p class="title is-4">Licence Informatique</p>
              <p class="subtitle is-6">2015 - 2016</p>
              <div class="content">
                <ul>
                  <li>Developpement Java, C++, C</li>
                  <li>Algorithmique</li>
                  <li>Structure de données</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card" style="flex: 1;">
            <div class="card-content cardPropos">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">DUT Informatique</p>
                  <p class="subtitle is-6">2013 - 2015</p>
                </div>
              </div>
              <div class="content">
                <ul>
                  <li>Apprentissage programmation objet</li>
                  <li>Bases de données</li>
                  <li>Outils de developpement</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'InfoPerso',
  data () {
    return {
      msg: 'coucou'
    }
  }
}
</script>
