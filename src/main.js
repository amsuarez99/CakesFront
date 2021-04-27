import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faInstagram, faFacebookF, faWhatsapp,faCheckCircle)

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'

// CSS
import $ from 'jquery'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import store from "./store"

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(VueSnap)
    .use(Vuex)
    .use($)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


App.prototype.$http = axios;
App.prototype.$store = store;
