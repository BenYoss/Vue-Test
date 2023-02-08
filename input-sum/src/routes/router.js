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
      path: '/',
      name: 'input_sum',
      component: InputSum,
      meta: {
        color: 'rgb(20, 20, 27)',
      },
    },
    {
      path: '/todo',
      name: 'todo_list',
      component: TodoList,
      meta: {
        color: 'white',
        taskTypeComplete: false,
      },
    },
    {
      path: '/todo-complete',
      name: 'todo_list_complete',
      component: TodoList,
      meta: {
        color: 'white',
        taskTypeComplete: true,
      },
    },
  ],
});
