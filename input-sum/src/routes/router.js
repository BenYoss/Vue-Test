import Router from 'vue-router';
import Vue from 'vue';

import InputSum from '../layout/InputSum/InputSum.vue';
import TodoList from '../layout/todoList/TodoList.vue';

Vue.use(Router);

export default new Router({
  history: true,
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/input',
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
