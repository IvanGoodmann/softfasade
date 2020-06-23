import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
Vue.prototype.$moment = moment;
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
