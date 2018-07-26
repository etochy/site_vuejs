import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/Header'
import Cards from '@/components/Cards'
import InfoPerso from '@/components/InfoPerso'
import Position from '@/components/Position'
import Login from '@/components/Login'
import Creation from '@/components/Creation'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/actualite' },
    { path: '/actualite', name: 'Actualité', component: Cards },
    { path: '/about', name: 'About', component: InfoPerso },
    { path: '/contact', name: 'Contact', component: Position },
    { path: '/login', name: 'Login', component: Login },
    { path: '/create', name: 'Create', component: Creation }
  ]
})
