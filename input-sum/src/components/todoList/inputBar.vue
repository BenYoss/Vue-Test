<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="todolist-input">
        <form class="todolist-input-box">
            <b-input type="text"
                placeholder="Enter a task here"
                v-model="value"
                label="task-input"
                id="strd-input"
                />
            <b-button id="styled-btn"
            @click="$store.commit('addToList', value)">Add Task</b-button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'input-bar',
  props: {
  },
  methods: {
    ...mapMutations([
      'addToList',
    ]),
  },
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="scss">
  @mixin input-size {
    height: 5vh;
    font-size: 2vh;
    border-radius: 5%;
  }
  #styled-btn {
    width: 13vh;
    background-color: #61DBFB;
    border-color: #61DBFB;
    border: #61DBFB;
    color: white;
    @include input-size();
  }
  #strd-input {
    width: 100%;
    @include input-size();
  }
  .todolist-input-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 30vw;
    row-gap: 2vw;
  }
  #strd-input {
    margin-right: 0.4vw;
    min-width: 22vw;
    border-radius: 3px;
  }
  .todolist-input {
    width: 50vw;
    display: flex;
    flex-direction: row;
    margin-left: 2.5vw;
  }
</style>
