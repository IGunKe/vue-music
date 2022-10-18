import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => {
            import('@/components/find/nav.vue');
        },
        redirect: '/home/recommend',
        children: [
            {
                path: 'recommend',
                name: 'recommend',
                component: () => {
                    import('@/components/find/recommend.vue');
                }
            },
            {
                path: 'song',
                name: 'song',
                component: () => {
                    import('@/components/find/song.vue');
                }
            },
            {
                path: 'station',
                name: 'station',
                component: () => {
                    import('@/components/find/station.vue');
                }
            },
            {
                path: 'singer',
                name: 'singer',
                component: () => {
                    import('@/components/find/singer.vue');
                }
            },
            {
                path: 'new',
                name: 'new',
                component: () => {
                    import('@/components/find/new.vue');
                }
            },
            {
                path: 'rank',
                name: 'rank',
                component: () => {
                    import('@/components/find/rank.vue');
                }
            }
        ]
    },
    {
        path: '/',
        redirect: '/home/recommend'
    },
    // {
    //     path: '*',
    //     name: 'NotFound',
    //     component: () => {
    //         import('@/components/not-found.vue');
    //     }
    // }
];

const router = new VueRouter({
  routes,
});

export default router;
