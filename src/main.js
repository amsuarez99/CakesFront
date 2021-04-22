import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInstagram, faFacebookF, faWhatsapp)

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


