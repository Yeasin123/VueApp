<template>
  <div class="home">

    <add-task-input></add-task-input>

    <task-list v-if="tasks.length"></task-list>

   <no-task v-else></no-task>

  </div>
</template>

<script>
import { mapState } from "vuex";
import AddTaskInput from '../components/task/AddTaskInput.vue';
import NoTask from '../components/task/NoTask.vue';
import TaskList from '../components/task/TaskList.vue';
export default {
  name: "Home",
  components: {
    AddTaskInput,
    TaskList,
    NoTask
  },
 computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    
  },
};
</script>

<style scoped>
.notask {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
