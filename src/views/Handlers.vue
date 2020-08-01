<template>
  <div class="home">
    <!-- Hero Intro -->
    <Hero />
    <!-- Chores -->
    <section class="container">
      <div class="row">
        <handler
          v-for="_handler in handlers"
          :name="_handler.name"
          :title="_handler.title"
          :location="_handler.location"
          :successRate="_handler.successRate"
          :key="_handler.name"
        ></handler>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/handlers/hero.vue";
import Handler from "@/components/handlers/handler.vue";

export default {
  name: "home",
  data(){
    return {
      handlers:[
        {
          name: "Peter Soros",
          title: "TV and Satelite Mounting Specialist",
          location: "Gweru, Mkoba 2",
          successRate: 98,
        },
        {
          name: "Amuse Sanders",
          title: "Handyman",
          location: "kwekwe, Mbizo",
          successRate: 100,
        },
        {
          name: "Benard Ncube",
          title: "Website Developer",
          location: "Bulawayo, C/Park",
          successRate: 90,
        },
        {
          name: "Peter Soros1",
          title: "TV and Satelite Mounting Specialist1",
          location: "Gweru, Mkoba 21",
          successRate: 982,
        },
        {
          name: "Amuse Sanders2",
          title: "Handyman2",
          location: "kwekwe, Mbizo2",
          successRate: 1002,
        }
      ]
    }
  },
  components: {
    Hero,
    Handler
  }
};
</script>

<style scoped>

</style>
