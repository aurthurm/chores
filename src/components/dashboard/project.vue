<template>
    <!-- Accordion card -->
    <div class="card">

        <!-- Card header -->
        <div class="card-header" role="tab" :id="projectID + 'XX'" >
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx1" :href="'#' + projectID"
               aria-expanded="false" :aria-controls="projectID">
                <h5 class="mb-0 h6 text-uppercase text-success">
                    {{ projectName }} <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
            </a>
        </div>

        <!-- Card body -->
        <div :id="projectID" class="collapse" role="tabpanel" :aria-labelledby="'#' + projectID + 'XX'"
             data-parent="#accordionEx1">
            <div class="card-body container py-0">
                <table class="table">
                    <tbody>
                        <chore-task
                                v-for="task in tasks"
                                :task="task.task"
                                :dueDate="task.dueDate"
                                :_progress="task._progress"
                                :asigned="task.asigned"
                                :msgs="task.msgs"
                        ></chore-task>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    <!-- Accordion card -->
</template>


<script>
  import ChoreTask from '@/components/dashboard/task.vue';
  export default {
    props: {
      projectName: String,
      tasks: Array,
      projectID: String,
    },
    components: {
      ChoreTask,
    }
  }
</script>