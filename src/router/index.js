import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Checkout from '../views/Checkout.vue';
import BoxCatalog from '../views/BoxCatalog.vue';
import CakeCatalog from '../views/CakeCatalog.vue';
import SuccessPayment from '../views/SucessPayment.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/desayunos',
        name: 'BoxCatalog',
        component: BoxCatalog
    },
    {
        path: '/pasteles',
        name: 'CakeCatalog',
        component: CakeCatalog
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/success',
        name: 'SuccessPayment',
        component: SuccessPayment
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
