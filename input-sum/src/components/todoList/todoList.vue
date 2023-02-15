<template>
<div class="todolist-container">
    <div class="todolist-header">
        <NavBar
        :activeTasks="this.$store.state.listContainer.length"
        :title="title"
        :pageName="'todo'" />
    </div>
    <div class="todo-list-body">
        <InputBar />
        <List
        v-if="!$route.meta.taskTypeComplete"
        v-on:update="updateCachedState"
        />
        <span v-if="$route.meta.taskTypeComplete">
          <CompletedList
          v-on:update="updateCachedState"
          />
        </span>
    </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
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
    dateParser() {
      return true;
    },
    updateCachedState() {
      const localListContainer = [];
      if (localStorage.getItem('store')) {
        localListContainer.push(...JSON.parse(localStorage.getItem('store')).listContainer);
      }
      localStorage.setItem('store', JSON.stringify({
        listContainer: [...localListContainer],
        completedListContainer: this.$store.state.completedListContainer,
      }));
    },
    ...mapMutations([
      'checkDone',
    ]),
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
  computed: mapState([
    'listContainer',
  ]),
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
