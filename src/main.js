import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import NavbarComponent from './components/Navbar.vue';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faInstagram, faFacebookF, faWhatsapp,faCheckCircle, 
    faTimesCircle, faChevronLeft, faChevronRight, faShoppingCart, faTimes);

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

// CSS
import $ from 'jquery';
import 'popper.js';
import "bootstrap";
import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/app.css";
import store from "./store";

const app = createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(VueSnap)
    .use(Vuex)
    .use($)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('NavbarComponent', NavbarComponent)
    .mount('#app')

app.config = {
    globalProperties: {}
};

app.config.globalProperties.$http = axios;
app.config.globalProperties.$store = store;
