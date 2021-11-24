import Vue from 'vue';
import VueRouter from 'vue-router';
import startPage from '../views/startPage.vue';
import slider from '../views/slider.vue';
import endPage from '../views/endPage.vue';
import winPage from '../views/winPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'startPage',
    component: startPage,
  },
  {
    path: '/slider',
    name: 'slider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: slider,
  },
  {
    path: '/endPage',
    name: 'endPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: endPage,
  },
  {
    path: '/winPage',
    name: 'winPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: winPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
