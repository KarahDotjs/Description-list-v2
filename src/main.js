import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
/* Import de 'fontawesome core' */
import { library } from '@fortawesome/fontawesome-svg-core'
/* Import du composant 'vue-fontawesome' */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Import des icônes de type 'solid' */
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)
/* Indique à l'instance Vue.js quelle va utiliser le composant vue-fontawesome */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
