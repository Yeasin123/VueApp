<template>
  <div>
    <v-dialog :value="true" max-width="300">
      <v-card>
        <v-card-title class="text-h6">
          Are You sure to delete this?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="$emit('close')"> No </v-btn>

          <v-btn color="red darken-1" text @click="deleteTask(task.id)">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
};
</script>

<style></style>
