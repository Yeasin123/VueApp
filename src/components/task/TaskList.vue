<template>
    <v-list flat class="pt-0" v-if="tasks.length">
      <task-list-item  v-for="task in tasks" :key="task.id" @delete="deleteTask" :task="task"></task-list-item>
    </v-list>
</template>

<script>
import { mapState } from "vuex";
import TaskListItem from './TaskListItem.vue';

export default {
  components: {TaskListItem  },
 computed: {
    ...mapState(["tasks"]),
  },
  methods:{
      deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
   
  }
}
</script>

<style>

</style>