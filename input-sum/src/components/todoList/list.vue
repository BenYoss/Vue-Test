<template>
    <div class="list-container">
        <div class="list" v-for="(item, index) in $store.todoList.listContainer" :key="item">
            <div class="list-item-container">
              <h2 class="list-item">{{item}}</h2>
              <div class="list-item-btns">
                <b-button id="delete-btn" @click="$emit('delete', item)">Delete Me</b-button>
                <b-button id="check-btn" @click="$emit('incomplete',
                {isDone: true, item, index})">Mark as Complete</b-button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'list-items',
  props: {
    listContainer: Array,
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$store.todoList.listContainer) {
        this.$emit('activetasks', this.$store.todoList.listContainer.length);
      }
    });
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
  #check-btn {
    font-size: 1.6vh;
    background-color: rgb(58, 144, 62);
    color: white;
  }
  .list-item-btns {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 15vw;
  }
  .list-container {
    height: 63vh;
    margin: 3vh 2vw 3vh 2vw;
    overflow-y: scroll;
  }
</style>
