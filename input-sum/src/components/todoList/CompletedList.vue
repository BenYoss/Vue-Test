<template>
    <div class="list-container">
        <div class="list"
        v-for="(item, index) in $store.state.completedListContainer" :key="item.id">
            <div class="list-item-container">
              <h2 class="list-item">{{item}}</h2>
              <b-button
              id="delete-btn"
              @click="
              $store.commit('checkDone', {isDone: false, item, index})">Move To Open</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'completed-items',
  methods: {
    ...mapMutations([
      'checkDone',
    ]),
  },
  data() {
    return {
      item: '',
    };
  },
  computed: mapState([
    'completedListContainer',
  ]),
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
