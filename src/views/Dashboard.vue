<template>
<div class="container">
    <div class="row">
        <!-- List group -->
        <div class="list-group col-2 mt-5" id="myList" role="tablist">
        <a class="list-group-item list-group-item-action active" data-toggle="list" href="#projects" role="tab">Projects</a>
        <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Chores</a>
        <a class="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Messages</a>
        <a class="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Reviews</a>
        </div>

        <!-- Tab panes -->
        <div class="tab-content col-10">
        <div class="tab-pane active" id="projects" role="tabpanel">
            <projects></projects>
        </div>
        <div class="tab-pane" id="profile" role="tabpanel">
            <d-chores></d-chores>
        </div>
        <div class="tab-pane" id="messages" role="tabpanel">
            Ut ut do pariatur aliquip aliqua aliquip exercitation 
        </div>
        <div class="tab-pane" id="settings" role="tabpanel">
            Irure enim occaecat labore 
        </div>
        </div>
    </div>
</div>
</template>

<script>
    import Projects from '@/components/dashboard/projects.vue';
    import DChores from '@/components/dashboard/chores.vue';
    export default {
        components: {
          Projects,
          DChores,
        }
    }
</script>

<style scoped>
    a.active {
        background-color: #00C851!important;
        color: #ffffff!important;
        border-color:  #00C851!important;
    }
</style>