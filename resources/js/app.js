require('./bootstrap');

import Vue from 'vue'
import App from './vue/app.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare, faTrash)


Vue.component('font-awesome-icon', FontAwesomeIcon)

window.Vue = require('vue');

//createApp(App).mount('#app');


const app = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});