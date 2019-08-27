<template>
    <div class="text-left">
        <h3>Projects</h3>
        <hr>

        <!--Accordion wrapper-->
        <div class="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">

            <!-- Accordion card -->
                <project
                        v-for="project in projects"
                        :projectName="project.projectName"
                        :projectID="project.projectID"
                        :tasks="project.tasks"
                >
                </project>
            <!-- Accordion card -->

        </div>
        <!-- Accordion wrapper -->

    </div>
</template>

<script>
    import Project from '@/components/dashboard/project.vue';
    import ChoreTask from '@/components/dashboard/task.vue';

    export default {
      data(){
        return {
          projects: [
            {
              projectName: "Dinner Tomorrow",
              projectID: "GSGDJHDUE",
              tasks: [
                {
                  task: "Discovery",
                  dueDate: 'July 15th',
                  _progress: 'Done',
                  asigned: 'powell',
                  msgs: 5,
                },
                {
                  task: "Garden Folking",
                  dueDate: 'July 20th',
                  _progress: 'In Progress',
                  asigned: 'Energy',
                  msgs: 0,
                }
              ]
            },
            {
              projectName: "Train my Horses",
              projectID: "OEFVNOIE",
              tasks: [
                {
                  task: "Familiarisation",
                  dueDate: 'September 1st',
                  _progress: 'Pending',
                  asigned: 'mandoza',
                  msgs: 0,
                },
                {
                  task: "Horse Markup",
                  dueDate: 'September 5th',
                  _progress: 'Pending',
                  asigned: 'perfidius',
                  msgs: 2,
                }
              ]
            }
          ]

        }
      },
      components: {
        Project,
        ChoreTask,
      }
    }
</script>