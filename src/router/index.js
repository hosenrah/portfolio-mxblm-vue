import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'overlay-up-full' },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue'),
  },
  {
    path: '/project1',
    name: 'Project1',
    component: () => import('../views/projects/DesignSystemEvolution.vue'),
  },
  {
    path: '/project2',
    name: 'Project2',
    component: () => import('../views/projects/BraProMobileGame.vue'),
  },
  // {
  //   path: '/project3',
  //   name: 'Project3',
  //   component: () => import('../views/Project3.vue'),
  // },
  // {
  //   path: '/project4',
  //   name: 'Project4',
  //   component: () => import('../views/Project4.vue'),
  // },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    const position = { x: 0, y: 0 };
    return position;
  },
});

export default router;
