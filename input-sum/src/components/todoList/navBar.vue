<template>
    <div class="navbar-container">
        <div class="column-block">
            <h2 id="date">{{dateMarker}}</h2>
            <span v-if="activeTasks >= 0">
              <h4 id="active-tasks">{{activeTasks}} Active Tasks</h4>
            </span>
        </div>
        <div class="nav-links">
            <router-link :to="{ name: 'input_sum' }">Input Sum</router-link>
            <router-link :to="{ name: 'todo_list' }">Todo List</router-link>
            <router-link
            v-if="url"
            :to="{
              name: 'todo_list_complete'
            }">Completed Tasks</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    activeTasks: Number,
    title: String,
  },
  created() {
    this.dateParser();
  },
  methods: {
    dateParser() {
      const dateList = `${this.dateMarker.toLocaleString('en-us', { weekday: 'long', month: 'long' })
      } ${this.dateMarker.getDate()}`.split(' ');
      this.dateMarker = `${dateList[1]}, ${dateList[0]} ${dateList[2]}`;
    },
  },
  data() {
    return {
      dateMarker: new Date(Date.now()),
      url: window.location.href.includes('todo'),
    };
  },
};
</script>

<style lang="scss">
    @mixin navbar-padding {
        display: flex;
        padding: 3% 5% 0 5%;
    }
    .navbar-container {
      @include navbar-padding();
      justify-content: space-between;
      row-gap: 10vw;
      color: white;
      width: 100%;
      height: 100%;
    }
    #date {
        font-weight:500;
    }
    .router-select {
        color: rgba(255, 255, 255, 0.447);
        cursor: pointer;
    }
    .router-select:hover {
        color: rgba(255, 255, 255, 0.892);
        cursor: pointer;
    }
    .router-select:active {
        font-weight: bold;
    }
    #active-tasks {
        color: #61DBFB;
        font-size: 1.7vh;
    }
    .router-link-exact-active {
        color: rgba(255, 255, 255, 0.892) !important;
    }
    a:hover {
        color: rgba(255, 255, 255, 0.892);
        cursor: pointer;
    }
    a {
        color: rgba(255, 255, 255, 0.447) !important;
        text-decoration: none;
    }
    .column-block {
        // @include navbar-padding();
        display: flex;
        flex-direction: column;
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        width: 40vh;
    }
</style>
