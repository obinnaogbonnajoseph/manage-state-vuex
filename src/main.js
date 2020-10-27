/* eslint-disable indent */
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import pinDirective from './shared/pin-directive';

import router from './router';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
