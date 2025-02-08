<!-- ManagerComponent.vue -->
<template>
    <div v-if="isDataLoaded">
      <h3>Manager Output:</h3>
      <p>Data has been loaded and displayed by the interpreter. Here is some additional content from the manager.</p >
    </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState(['isDataLoaded'])
    }
  };
</script>