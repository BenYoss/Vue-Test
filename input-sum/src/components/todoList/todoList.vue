<template>
<div class="todolist-container">
    <div class="todolist-header">
        <NavBar
        :title="title"
        :activeTasks="$store.todoList.listContainer.length"
        :pageName="'todo'" />
    </div>
    <div class="todo-list-body">
        <InputBar
        @inputvalue="addToList"
        :inputValue="inputValue" :addToList="addToList" />
        <List
        v-if="!$route.meta.taskTypeComplete"
        @activetasks="updateTaskCount"
        :listContainer="$store.todoList.listContainer"
        @delete="deleteFromList"
        @incomplete="checkDone"
        />
        <span v-if="$route.meta.taskTypeComplete">
          <CompletedList
          :completedListContainer="$store.todoList.completedListContainer"
          @incomplete="checkDone"
          />
        </span>
    </div>
</div>
</template>

<script>

import InputBar from './inputBar.vue';
import NavBar from './navBar.vue';
import List from './list.vue';
import CompletedList from './CompletedList.vue';

export default {
  name: 'TodoList',
  components: {
    InputBar,
    NavBar,
    List,
    CompletedList,
  },
  methods: {
    addToList(text) {
      if (text) {
        this.$store.todoList.listContainer.push(text);
      } else {
        alert('Please enter a task first.');
      }
    },
    deleteFromList(text) {
      if (text) {
        const index = this.$store.todoList.listContainer.indexOf(text);
        this.$store.todoList.listContainer.splice(index, 1);
      } else {
        alert('Unsufficient deletion permissions.');
      }
    },
    checkDone(response) {
      if (response.isDone) {
        this.$store.todoList.completedListContainer.push(response.item);
        this.$store.todoList.listContainer.splice(response.index, 1);
      } else {
        this.$store.todoList.listContainer.push(response.item);
        this.$store.todoList.completedListContainer.splice(response.index, 1);
      }
    },
    dateParser() {
      return true;
    },
  },
  data() {
    return {
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
