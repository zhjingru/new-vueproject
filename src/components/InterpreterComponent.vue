<!-- InterpreterComponent.vue -->
<template>
    <div v-if="dataFromBackend">
      <h3>Interpreter Output:</h3>
      <pre>{{ dataFromBackend }}</pre>
    </div>
  </template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState(['dataFromBackend'])
    },
    mounted() {
      this.$store.dispatch('fetchDataFromBackend');
    }
  };
</script>