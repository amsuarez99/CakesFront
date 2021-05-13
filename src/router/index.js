import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Checkout from '../views/Checkout.vue';
import BoxCatalog from '../views/BoxCatalog.vue';
import CakeCatalog from '../views/CakeCatalog.vue';
import SuccessPayment from '../views/SucessPayment.vue';
import BoxCheckout from '../views/BoxCheckout.vue';

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
        path: '/success',
        name: 'SuccessPayment',
        component: SuccessPayment
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/boxcheckout',
        name: 'BoxCheckout',
        component: BoxCheckout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
