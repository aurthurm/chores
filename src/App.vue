<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation: Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-spacer {
  margin-top: 56px;
}
.rgba-gradient {
  background-image: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
}
.rgba-gradient-success {
  background-image: linear-gradient(to right, rgba(0, 200, 81, 0.5),rgba(0, 200, 81, 1), rgba(0, 200, 81, 0.5));
}

</style>
