<template>
  <div class="app-container">
    <InputSum />
  </div>
</template>

<script>
import InputSum from './components/inputSum.vue';

export default {
  name: 'App',
  components: {
    InputSum,
  },
};
</script>

<style lang="css">
body {
  background-color: rgb(20, 20, 27);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
::-webkit-scrollbar {
    display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
