<template>
  <div>
    <v-list-item
      v-if="task"
      @click="$store.commit('CLICK_TASK', task.id)"
      :class="{ 'blue lighten-5': task.done }"
    >
      <template v-slot:default>
        <!-- <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action> -->

        <v-list-item-content>
          <v-list-item-title>{{ task.title }}</v-list-item-title>
        </v-list-item-content>

        <v-icon small class="pr-1" v-if="task.dueDate">mdi-calendar</v-icon>
        <v-list-item-action-text v-if="task.dueDate">
          {{ task.dueDate | niceDate }}</v-list-item-action-text
        >

        <v-list-item-action>
          <maneu-list :task="task"></maneu-list>
        </v-list-item-action>
      </template>
    </v-list-item>
    <!-- <v-divider></v-divider> -->
  </div>
</template>

<script>
import ManeuList from "./ManeuList.vue";
import { format } from "date-fns";
export default {
  components: { ManeuList },
  props: ["task"],
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM d y");
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
