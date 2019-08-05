<template>
  <div class="home">
    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "home",
};
</script>

<style scoped>
  .card-columns {
    @include media-breakpoint-only(lg) {
      column-count: 4;
    }
    @include media-breakpoint-only(xl) {
      column-count: 5;
    }
  }
</style>
