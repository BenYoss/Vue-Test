/* eslint-disable new-cap */
import Vue from 'vue';
import Buefy from 'buefy';
import Vuex from 'vuex';
import router from './routes/router';
import App from './App.vue';
import updateToLocalStorage from './helpers/helpers';

import 'buefy/dist/buefy.css';

// * Invoking the vue integrations.
Vue.use(Buefy);
Vue.use(Vuex);

// * Declare store constant with initialized Observable.
const store = new Vuex.Store({
  state: {
    listContainer: [],
    completedListContainer: [],
  },
  mutations: {
    addToList(state, text) {
      if (text) {
        state.listContainer.push(text);
        updateToLocalStorage(state);
      } else {
        alert('Please enter a task first.');
      }
    },
    deleteFromList(state, text) {
      if (text) {
        const index = state.listContainer.indexOf(text);
        state.listContainer.splice(index, 1);
        updateToLocalStorage(state);
      } else {
        alert('Unsufficient deletion permissions.');
      }
    },
    checkDone(state, payload) {
      if (payload.isDone) {
        state.completedListContainer.push(payload.item);
        state.listContainer.splice(payload.index, 1);
      } else {
        state.listContainer.push(payload.item);
        state.completedListContainer.splice(payload.index, 1);
      }
      updateToLocalStorage(state);
    },
  },
});

const app = new Vue({
  render: (h) => h(App),
  router,
  store,
  mounted() {
    if (localStorage.getItem('store')) {
      try {
        const localStore = JSON.parse(localStorage.getItem('store'));
        store.replaceState({
          listContainer: localStore.listContainer,
          completedListContainer: localStore.completedListContainer,
        });
      } catch (error) {
        localStorage.removeItem('store');
      }
    }
  },
});
app.$mount('#app');
