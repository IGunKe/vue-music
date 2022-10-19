import recommend from '@/components/find/recommend';
import nav from '@/components/find/nav';
import song from '@/components/find/song.vue';
import station from '@/components/find/station.vue';
import singer from '@/components/find/singer.vue';
import New from '@/components/find/new';
import rank from '@/components/find/rank';
//使用路由的时候切记，不要用懒加载
export default {
    path: '/find',
    component: nav,
    redirect: '/find/recommend',
    children: [
        {
            path: 'recommend',
            name: 'recommend',
            component: recommend
        },
        {
            path: 'song',
            name: 'song',
            component: song
        },
        {
            path: 'station',
            name: 'station',
            component: station
        },
        {
            path: 'singer',
            name: 'singer',
            component: singer
        },
        {
            path: 'new',
            name: 'new',
            component: New
        },
        {
            path: 'rank', //排名
            name: 'rank',
            component: rank
        }
    ]
};
