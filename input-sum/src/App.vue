<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
