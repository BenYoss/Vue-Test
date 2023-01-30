<template>
<div class="todolist-container">
    <div class="todolist-header">
        <NavBar :title="title" :activeTasks="listContainer.length" />
        {{title}}
        {{listContainer}}
    </div>
    <div class="todo-list-body">
        <InputBar
        @inputvalue="addToList"
        :inputValue="inputValue" :addToList="addToList" />
        <List @activetasks="updateTaskCount" :listContainer="listContainer" />
    </div>
</div>
</template>

<script>
import InputBar from './inputBar.vue';
import NavBar from './navBar.vue';
import List from './list.vue';

export default {
  name: 'TodoList',
  components: {
    InputBar,
    NavBar,
    List,
  },
  methods: {
    addToList(text) {
      if (text) {
        this.listContainer.push(text);
      } else {
        alert('Please enter a task first.');
      }
    },
    deleteFromList() {
      return true;
    },
    checkDone() {
      return true;
    },
    dateParser() {
      return true;
    },
  },
  data() {
    return {
      listContainer: ['Example', 'Design application interface.'],
      inputValue: null,
      isChecked: false,
      isDeleted: false,
      dateMarker: new Date(Date.now()),
      title: 'title',
    };
  },
};
</script>

<style lang="scss">
    body {
      background-color: white;
      overflow: hidden;
    }
    .todolist-container {
        margin: 6vh 21vw 6vh 21vw;
        background-color: #393F49;
        height: 88vh;
        display: flex;
        flex-direction: column;
        font-size: 2.3vh;
        border-radius: 3px;
        box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 30%);
        row-gap: 1.5vw;
    }
    .todolist-header {
        display: flex;
        justify-content: center;
    }
    .todolist-body {
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>
