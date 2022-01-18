<template>
  <v-list flat class="pt-0" v-if="tasks.length">
    <task-list-item
      v-for="task in SearchFilter"
      :key="task.id"
      :task="task"
    ></task-list-item>
  </v-list>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TaskListItem from "./TaskListItem.vue";

export default {
  components: { TaskListItem },
  computed: {
    ...mapState(["tasks"]),
    ...mapGetters(["SearchFilter"]),
  },
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
};
</script>

<style></style>
