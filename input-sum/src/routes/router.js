import Router from 'vue-router';
import Vue from 'vue';

import InputSum from '../components/inputSum/inputSum.vue';
import TodoList from '../components/todoList/todoList.vue';

Vue.use(Router);

export default new Router({
  history: true,
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'input_sum',
      component: InputSum,
    },
    {
      path: '/todo',
      name: 'todo_list',
      component: TodoList,
    },
  ],
});
