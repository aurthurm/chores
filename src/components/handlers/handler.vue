<template>
    <div class="col-lg-3 col-md-6 mb-4">
    <!--Card-->
    <div class="card card-cascade wider mb-4">
      <!--Card image-->
      <div class="view view-cascade">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" class="card-img-top">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <!--/Card image-->
      <!--Card content-->
      <div class="card-body card-body-cascade text-center">
        <!--Title-->
        <h4 class="card-title mb-0"><strong>{{ name }}</strong></h4>
         <p class="card-text">{{ location }}</p>
        <h5 class="indigo-text"><strong>{{ title }}</strong></h5>
        <p class="card-text"><small>{{ successRate }}% success rate</small></p>
      </div>
      <!--/.Card content-->
    </div>
    <!--/.Card-->

  </div>
</template>


<script>
export default {
    props: {
        name: String,
        title: String,
        location: String,
        successRate: Number,
    }
}
</script>