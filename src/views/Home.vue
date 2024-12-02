<template>
  <div class="container mt-4">
    <DesignList />
    <router-link to="/add" class="btn btn-success mt-3">Add New Design</router-link>
  </div>
</template>

<script>
import DesignList from '../components/DesignList.vue';

export default {
  components: {
    DesignList
  }
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
