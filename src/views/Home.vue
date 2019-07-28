<template>
  <div class="home nav-spacer">
    <Intro />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";

export default {
  name: "home",
  components: {
    Intro
  }
};
</script>
