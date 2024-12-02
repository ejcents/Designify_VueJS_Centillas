<template>
  <div id="app" class="container">
    <h1 class="text-center my-4">Welcome to Designify</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding-top: 50px;
}
</style>
