import Vue from "vue";
import VueRouter from "vue-router";

import Find from './find';
import Personal from './personal';

Vue.use(VueRouter);

const routes = [
    Find,
    Personal,
    // {
    //     path: '/',
    //     redirect: '/find/recommend'
    // }
    {
        path: '*',
        redirect: '/find/recommend'
    }
];

const router = new VueRouter({
  routes,
});

export default router;
