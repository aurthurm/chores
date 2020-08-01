<template>
    <!-- Grid column -->
    <article class="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" class="rounded z-depth-1" alt="Sample avatar">
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3 nowrap">{{ title }}</h4>
        <!-- <h6 class="font-weight-bold grey-text mb-3">Web Designer</h6> -->
        <p class="grey-text">{{ message }}</p>
        <!-- Facebook-->
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f"> </i>
        </a>
        <!-- Twitter -->
        <a class="p-2 fa-lg tw-ic">
          <i class="fab fa-twitter"> </i>
        </a>
        <!--Dribbble -->
        <a class="p-2 fa-lg dribbble-ic">
          <i class="fab fa-dribbble"> </i>
        </a>
      </div>
    </article>
    <!-- Grid column -->
</template>

<script>
export default {
  name: "usecase",
  props: {
      title: String,
      message: String,
  },
  components: {
  }
};
</script>