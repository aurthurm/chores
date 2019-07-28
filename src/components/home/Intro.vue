<template>
  <!-- Full Page Intro -->
  <div id="main-intro" class="">
    <!-- Mask & flexbox options-->
    <div class="rgba-gradient d-flex justify-content-center align-items-center">
      <!-- Content -->
      <div class="container">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-md-6 text-center text-md-left mt-xl-5 mb-5" >
            <h1 class="h1-responsive font-weight-bold mt-sm-5">Make purchases with our app </h1>
            <hr class="hr-light">
            <h6 class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi
              fuga nesciunt
              dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
              iste.</h6>
            <a class="btn btn-default">Download</a>
            <a class="btn btn-outline-success">Learn more</a>
          </div>
          <!--Grid column-->
          <!--Grid column-->
          <div class="col-md-6 col-xl-5 mt-xl-5" >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa, culpa assumenda quod quas officiis? Nam, nisi praesentium? Neque laudantium possimus cum odit veniam voluptatibus, fugiat officia odio exercitationem unde.
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Content -->
    </div>
    <!-- Mask & flexbox options-->
  </div>
  <!-- Full Page Intro -->
</template>

<style scoped>
    #main-intro {
        background-image: url('../../assets/img/architecture.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;
    }



    /* Required for full background image */
/* 
  html,
  body,
  header,
  .view {
    height: 100%;
  }

  @media (max-width: 740px) {
    html,
    body,
    header,
    .view {
      height: 1000px;
    }
  }
  @media (min-width: 800px) and (max-width: 850px) {
    html,
    body,
    header,
    .view {
      height: 600px;
    }
  }

  .btn .fa {
    margin-left: 3px;
  }

  .top-nav-collapse {
    background-color: #424f95 !important;
  }

.navbar:not(.top-nav-collapse) {
  background: transparent !important;
}

@media (max-width: 991px) {
 .navbar:not(.top-nav-collapse) {
  background: #424f95 !important;
 }
}

.btn-white {
  color: black !important;
} */

h6 {
  line-height: 1.7;
}

.rgba-gradient {
  background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
  background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
}
</style>
