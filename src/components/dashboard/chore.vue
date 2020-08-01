<template>
    <article class="card border-default mr-1 p-2">
        <h5 class="card-title pt-2">
            <router-link 
                :to="{ name: 'choreDetail', params: { choreId } }"
                >{{ choreName }}</router-link>
        </h5>
        <div class="card-text">
            <span class="badge badge-info mx-2">{{progress}}</span>
        </div>
    </article>
</template>


<script>
  export default {
    props: {
        choreName:  String,
        progress: String,
        choreId: String,
    }
  }
</script>