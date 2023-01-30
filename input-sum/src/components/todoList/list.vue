<template>
    <div class="list-container">
        <div class="list" v-for="item in listContainer" :key="item.id">
            <h2 id="list-item">{{item}}</h2>
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
      if (this.listContainer) {
        this.$emit('activetasks', this.listContainer.length);
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
  #list-item {
    padding: 2vh;
    display: flex;
    border-top: 0.23vh solid #8D9196;
  }
  .list-container {
    height: 63vh;
    margin: 3vh 2vw 3vh 2vw;
    overflow-y: scroll;
  }
</style>
