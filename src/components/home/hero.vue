<template>
  <!-- Full Page Intro -->
  <div id="main-intro">
    <!-- Mask & flexbox options-->
    <div class="rgba-gradient d-flex justify-content-center align-items-center">
      <!-- Content -->
      <div class="container">
        <!--Grid row-->
        <div class="row d-flex justify-content-around">
          <!--Grid column-->
          <div class="col-md-6 text-center text-md-left mt-xl-5 mb-5 text-white" >
            <h1 class="h1-responsive font-weight-bold mt-sm-5">Let us handle your chores </h1>
            <hr class="hr-light">
            <h6 class="mb-4">
              Call us Taskers or Assistants, its all upto you. We are here to help you run all your errands. Simply give us your to to list.
            </h6>
            <a class="btn btn-success" data-toggle="modal" data-target="#loginRegister">Create a Chore</a>
            <a class="btn btn-outline-success" data-toggle="modal" data-target="#loginRegister">Become a Handler</a>
          </div>
          <!--Grid column-->
          <!--Grid column-->
          <div class="col-md-6 col-xl-5 mt-xl-5 align-self-center" >
            <!-- Search form -->
            <form class="form-inline">
              <i class="fas fa-search" aria-hidden="true"></i>
              <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search for chores here"
                aria-label="Search">
            </form>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Content -->
    </div>
    <!-- Mask & flexbox options-->
    <!-- loginRegister Modal -->
    <div> 
      <login-register></login-register> 
    </div>
  </div>
  <!-- Full Page Intro -->
</template>

<script>
import loginRegister from '@/components/auth/loginRegister.vue'
export default {
    components: {
      loginRegister
    }
}
</script>

<style scoped>
    #main-intro {
        background-image: url('../../assets/img/architecture.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;
    }
    .fa, .fas {
      color: #fff;
    }
</style>

