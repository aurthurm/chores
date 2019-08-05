<template>
  <div class="home">
    <!-- Hero Intro -->
    <Hero />
    <!-- Services -->
    <section class="container">
        <h4 class="my-5">{{ services.title }}</h4>
        <div class="row">
          <!-- General Services -->
          <div class="col">
              <div class="row"> 
                <service 
                  v-for="chore in services.business"
                  :_servc="chore" :key="chore">
                </service>
              </div>
          </div>
          <!-- Business Services -->
          <div class="col servives-sep">
              <div class="row"> 
                <service 
                  v-for="chore in services.general"
                  :_servc="chore" 
                  :key="chore">
                </service>
              </div>
          </div>
        </div>
    </section>
    <section class="container">
      <h4 class="my-5">{{ useCases.title }}</h4>
      <div class="row text-center text-md-left">
        <use-case
          v-for="_case in useCases.cases"
          :title="_case.title"
          :message="_case.message"
          :key="_case.title"
        ></use-case>
      </div>
      <hr>
      <a href="#" class="btn btn-dark">View available Chores and start bidding</a>
      <hr>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/hero.vue";
import Service from "@/components/home/service.vue";
import UseCase from "@/components/home/useCase.vue";
// import Carousel from "@/components/home/carousel.vue";

export default {
  name: "home",
  data(){
    return {
      services: {
        title: "Most Popular",
        business: ['Appointments', "Scheduling", "Phone Calls", "Research", "Text Messaging", "Planning"],
        general: ["Installations", "Mounting", "G. Handyman", "Furniture Assebly", "Heavy Lifting", "Packing and Moving"]
      },
      useCases: {
        title: "Use Cases",
        cases: [{
          imageLink: "#",
          title: "Email Sending",
          message: "Can you email my friend Amanda .... and tell her we will be leaving for a workshop tomorrow 3pm sharp"
        },{
          imageLink: "#",
          title: "Furniture Moving",
          message: "Hie, I am moving from Bulawayo to Gweru, need help packing and lifting ...."
        }]
      }
    }
  },
  components: {
    Hero,
    Service,
    UseCase,
  }
};
</script>

<style scoped>
  .servives-sep{
    border-left: 2px solid orange;
  }
</style>
