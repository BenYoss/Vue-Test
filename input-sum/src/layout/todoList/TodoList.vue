<template>
  <div class="app-container">
    <div id="project-container">
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from '../../components/todoList/todoList.vue';

export default {
  name: 'todo-list',
  components: {
    Todo,
  },
  data() {
    return {
      title: 'todo-list',
    };
  },
};
</script>
