<template>
    <!-- Card -->
    <article class="card text-left mb-3 border-success">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-title">{{ location }} - {{ dateTime }}</h6>
            <p class="card-text ">{{ message }}</p>
            <h6 class="card-title d-flex justify-content-between">
                <span class="align-self-center"> Budget: ${{ budget }} </span>
                <router-link 
                    :to="{ name: 'choreDetail', params: { choreId } }"
                    class="btn btn-sm btn-outline-success"
                    >View Detail</router-link>
            </h6>
            <p class="card-text">
                <small class="text-muted">{{ posted }}</small> |
                <small class="text-muted">{{ bids }} Bids so far</small> |
                <small class="text-muted">status: {{ status }}</small>
            </p>
        </div>
    </article>
    <!-- Card -->
</template>

<script>
export default {
    props: {
        title: String,
        location: String,
        dateTime: String,
        budget: Number,
        message: String,
        posted: String,
        bids: Number,
        status: String,
        choreId: String,
    }
}
</script>

