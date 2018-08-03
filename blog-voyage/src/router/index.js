import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/Header'
import Cards from '@/components/Cards'
import InfoPerso from '@/components/InfoPerso'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Creation from '@/components/Creation'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/actualite' },
    { path: '/actualite', name: 'actu', component: Cards },
    { path: '/about', name: 'about', component: InfoPerso },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/login', name: 'login', component: Login },
    { path: '/create', name: 'create', component: Creation }
  ]
})
