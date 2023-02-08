/* eslint-disable new-cap */
import Vue from 'vue';
import Buefy from 'buefy';
import router from './routes/router';
import App from './App.vue';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

// * Declare store constant with initialized Observable.
const store = new Vue.observable({
  todoList: {
    listContainer: [],
    completedListContainer: [],
  },
});

// * Make the vue global data store.
Vue.prototype.$store = store;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
