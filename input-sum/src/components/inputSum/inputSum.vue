<template>
  <div class="input-sum-container">
    <div class="input-sum-title">
      <h2 id="title">Input Sum</h2>
    </div>
    <div class="input-sum-header">
      <NavBar :title="title" :activeTasks="-1" :pageName="'input-sum'" />
    </div>
    <div class="input-sum-body">
      <div class="equation-visual">
        <h1 id="equation-value">{{ value1 || 0 }}</h1>
        <h1 id="equation-value">+</h1>
        <h1 id="equation-value">{{ value2 || 0 }}</h1>
        <h1 id="equation-value">=</h1>
        <h1 id="equation-value">{{ sums || 0 }}</h1>
      </div>
      <div class="input-sum-input-box">
        <label for="form" class="input-sum-input-box">
          <input type="text"
                  placeholder="Enter Number 1"
                  v-model="value1"
                  label="my-label"
                  >
          <input type="text"
                  placeholder="Enter Number 2"
                  v-model="value2"
                  label="my-label"
                  >
          <b-button @click="sum">Calculate Sum</b-button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../todoList/navBar.vue';

export default {
  name: 'input-sum',
  components: {
    NavBar,
  },
  props: {
    input: String,
  },
  // Methods that are incorporated into the component
  methods: {
    sum() {
      this.sums = Number(this.value1) + Number(this.value2);
    },
  },
  // The list of declared/initialized vue variables
  data() {
    return {
      value2: null,
      value1: null,
      sums: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$test: 1;
::-webkit-scrollbar {
    display: none;
}
body {
  width: 100vw;
  height: 100vh;
}
$gap-width: 100px;
.equation-visual {
  display: flex;
  flex-direction: row;
  column-gap: $gap-width;
  font-size: 50px;
}
#equation-symbol {
  width: fit-content;
  height: fit-content;
  filter: invert(1);
}
.input-sum-title {
  font-size: 8vh;
  color: white;
  font-weight: bolder;
}
.input-sum-container {
  display: flex;
  background-color: rgb(27, 28, 44);
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
  position: relative;
  top: 35vh;
}
.input-sum-body {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.input-sum-header {
  color: white;
  font-size: 1.8vh;
  transform: scale(2);
  width: 50vw;
}
.input-sum-input-box {
  display: flex;
  flex-direction: row;
  column-gap: $gap-width;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
