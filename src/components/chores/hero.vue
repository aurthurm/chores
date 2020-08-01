<template>
  <!-- Full Page Intro -->
  <div id="main-intro">
    <!-- Mask & flexbox options-->
    <div class="rgba-gradient-success d-flex justify-content-center align-items-center mb-5">
      <!-- Content -->
      <div class="container">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col text-md-left mb-5" >
            <h1 class="h1-responsive font-weight-bold mt-sm-5 text-center text-white">{{ choreEntry }}</h1>
            <!-- <hr class="hr-light">
            <h6 class="mb-4">Choose a chore that a right fit for your skills and get going</h6> -->
          </div>
        </div>
        <!--Grid row-->
      </div>
      <!-- Content -->
    </div>
    <!-- Mask & flexbox options-->
  </div>
  <!-- Full Page Intro -->
</template>

<script>
export default {
  props: {
    choreEntry: String
  }
}
</script>

<style scoped>

</style>
