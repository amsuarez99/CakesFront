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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    },
    {
        path: '/success',
        name: 'SuccessPayment',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: SuccessPayment
    },
    {
        path: '/checkout',
        name: 'checkout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Checkout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
