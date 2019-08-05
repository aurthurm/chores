<template>
    <div class="col mb-2 ">
        <h6 class="btn btn-outline-success btn-sm btn-block nowrap">{{ _servc }}</h6>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "servie",
  props: {
      _servc: String,
  },
  components: {
  }
};
</script>

<style>
.nowrap {
    white-space: nowrap!important;
}
</style>
