<template>
    <div class="list-container">
        <div class="list" v-for="item in completedListContainer" :key="item.id">
            <div class="list-item-container">
              <h2 class="list-item">{{item}}</h2>
              <b-button
              id="delete-btn"
              @click="$emit('incomplete', {isDone: false, text})">Move To Open</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'completed-items',
  props: {
    completedListContainer: Array,
  },
  methods: {
  },
  data() {
    return {
      item: '',
    };
  },
};
</script>

<style lang="scss">
  .list {
    color: white;
    height: fit-content;
  }
  .list-item {
    display: flex;
  }
  .list-item-container {
    border-top: 0.23vh solid #8D9196;
    padding: 2vh 0vh 2vh 0vh;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #delete-btn {
    font-size: 1.6vh;
    background-color: rgb(214, 110, 110);
    color: white;
  }
  .list-container {
    height: 63vh;
    margin: 3vh 2vw 3vh 2vw;
    overflow-y: scroll;
  }
</style>
