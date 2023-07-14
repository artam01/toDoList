//require('./bootstrap');
//import BootstrapVue from 'bootstrap-vue'

import Vue from 'vue';
import App from './vue/app.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';



library.add(faPlusSquare, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);



// insert all your axios logic here




//Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});