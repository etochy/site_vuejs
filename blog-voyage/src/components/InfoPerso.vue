<template>
<div class="container is-fullhd">
  <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Expériences : </p>
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
                  <li>Déploiement avec Kubernetes, Jenkins, Docker et Nexus</li>
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

          <div class="card" style="flex: 1;">
            <div class="card-content cardPropos">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Nombreux projets d'étude</p>
                  <p class="subtitle is-6">2013 - 2018</p>
                </div>
              </div>
              <div class="content">
                <ul>
                  <li>Programmation Web et client lourd</li>
                  <li>Principalement en Java, C, C++, Javascript</li>
                  <li>Utilisation de Bases de Données SQL et noSql</li>
                  <li>Maîtrise de Git</li>
                </ul>
              </div>
            </div>
          </div>

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
                  <li>Développement Web et client lourd, Test logiciel</li>
                  <li>Architecture logicielle</li>
                  <li>Web Sémantique</li>
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
                  <li>Développement Java, C++, C</li>
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
                  <li>Outils de développement</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    </div>
  </div>

  <div class="card">

    <div class="card-content cardPropos">
      <p class="title is-4">À propos de ce site: </p>
      <!--<p class="subtitle is-6">2016 - 2018</p>-->
      <div class="content">
        <h5>But de ce site :</h5>
        <p>Ce site est un projet personnel encore en construction visant à partager à ma famille des photos ainsi que de m'exercer sur des technologies récentes.
          De plus, il me sert de vitrine professionnelle.</p>
        <br>
        <h5>Technologies utilisées :</h5>
        <p>La partie front-end de ce site est développée en utilisant le framework VueJs ainsi que BULMA pour le css.</p>
        <p>La partie back-end de ce site est développée en utilisant nodeJs couplé à plusieurs frameworks dont express.</p>
        <p>La base de données utilisée pour le stockage des données est MongoDb.</p>
        <br>
        <h5>Déploiement :</h5>
        <p>Afin de parfaire mes compétences, j'utilise plusieurs plateformes pour le déploiement de mon application.</p>
        <p>Le Front-End est hebergé sur AWS en utilisant Amazon S3. Mon nom de domaine est réservé en utilisant Route53 de AWS.</p>
        <p>La partie Back-End de cette application ainsi que la base de données sont hébergés sur heroku.</p>
        <br>
        <h5>Propriété intellectuelle</h5>
        <p>Tout le contenu de ce site est la propriété de Esteban Launay.</p>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />L'ensemble des images et informations utilisées sur ce site est mis à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Licence Creative Commons Attribution - Pas d’Utilisation Commerciale 4.0 International</a>.
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
