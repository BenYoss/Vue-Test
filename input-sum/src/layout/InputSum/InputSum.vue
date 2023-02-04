<template>
  <div class="app-container">
    <div id="project-container">
      <Sum />
    </div>
  </div>
</template>

<script>
import Sum from '../../components/inputSum/inputSum.vue';

export default {
  name: 'input-sum',
  components: {
    Sum,
  },
  data() {
    return {
      title: 'input-sum',
    };
  },
};
</script>

<style lang="scss">
body {
  width: 100vw;
}
</style>
