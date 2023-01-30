import Vue from 'vue';
import Buefy from 'buefy';
import routes from './routes/router';
import App from './App.vue';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

new Vue({
  render: (h) => h(App),
  routes,
}).$mount('#app');
