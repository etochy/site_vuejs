import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/Header'
import Cards from '@/components/Cards'
import InfoPerso from '@/components/InfoPerso'
import Position from '@/components/Position'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/cards' },
    { path: '/cards', name: 'Actualité', component: Cards },
    { path: '/about', name: 'About', component: InfoPerso },
    { path: '/contact', name: 'Contact', component: Position }
  ]
})
