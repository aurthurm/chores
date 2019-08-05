<template>
  <div class="about">
   <hero></hero>
  </div>
</template>


<script>
// @ is an alias to /src
import Hero from "@/components/about/hero.vue";

export default {
  name: "home",
  components: {
    Hero
  }
};
</script>
