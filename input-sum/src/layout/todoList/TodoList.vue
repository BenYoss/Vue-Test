<template>
  <div class="app-container">
    <div id="project-container">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from '../../components/todoList/todoList.vue';

export default {
  name: 'TodoList',
  components: {
    TodoList,
  },
  data() {
    return {
      title: 'Input-sum',
    };
  },
};
</script>
