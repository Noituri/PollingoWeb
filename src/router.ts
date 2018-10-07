import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Poll from './views/Poll.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/poll/:user/:id',
      component: Poll,
    },
  ],
});
