import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import GameSelection from '@/views/GameSelection.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: GameSelection,
    },
    {
        path: '/mode',
        component: () => import('@/views/ChooseMode.vue'),
    },
    {
        path: '/form/:id',
        component: () => import('@/views/Form.vue'),
    },
    {
        path: '/result',
        component: () => import('@/views/Result.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
