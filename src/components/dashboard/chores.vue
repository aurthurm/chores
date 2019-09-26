<template>
    <div class="text-left">
        <h3>
            <span>Our Chores</span>   
            <span> <div class="btn btn-sm btn-outline-success float-right">Create a  Chore</div> </span>
        </h3>
        <hr>
        <section class="d-flex justify-content-start">
            <my-chore
                v-for="chore in chores"
                :choreName="chore.choreName"
                :progress="chore.progress"
                :choreId="chore.choreId"
                :key="chore.choreName"
            ></my-chore>
        </section>

    </div>
</template>

<script>
    import MyChore from '@/components/dashboard/chore.vue';

    export default {
      data(){
        return {
          chores: [
                {
                    choreName: "Help Cleaning office",
                    progress: 'Completed',
                    choreId: '2',
                },
                {
                    choreName: "Need a Graphic Desinger",
                    progress: 'Listed',
                    choreId: '3',
                },
                {
                    choreName: "Edit my WP Theme",
                    progress: 'In Progress',
                    choreId: '1',
                },
            ]
        }
      },
      components: {
        MyChore,
      }
    }
</script>