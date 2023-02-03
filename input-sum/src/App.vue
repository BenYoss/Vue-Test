<template>
  <div class="app-container">
    <!-- <div class="app-header">
      <NavBar :title="title" />
    </div> -->
    <router-view />
    <div id="project-container">
      <!-- <TodoList /> -->
    </div>
    <div id="project-container">
      <!-- <InputSum /> -->
    </div>
  </div>
</template>

<script>
// import InputSum from './components/inputSum/inputSum.vue';
// import TodoList from './components/todoList/todoList.vue';
// import NavBar from './components/todoList/navBar.vue';

export default {
  name: 'App',
  // components: {
  //   InputSum,
  //   TodoList,
  // },
  data() {
    return {
      title: 'Input-sum',
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 30%);
}
html {
  font-family: 'Inter', sans-serif;
}
.project-container {
  display: flex;
  justify-content: center;
}
</style>
