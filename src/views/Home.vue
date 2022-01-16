<template>
  <div class="home">

    <add-task-input></add-task-input>

    <task-list v-if="tasks.length"></task-list>

    <div v-else class="notask">
      <v-btn icon>
        <v-icon color="red lighten-1">mdi-alert</v-icon>
      </v-btn>
      <div class="text-h5">No Task</div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import AddTaskInput from '../components/task/AddTaskInput.vue';
import TaskList from '../components/task/TaskList.vue';
export default {
  name: "Home",
  components: {
    AddTaskInput,
    TaskList
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
