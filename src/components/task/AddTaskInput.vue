<template>
  <v-text-field
    class="mx-2 mt-2"
    label="Add Task"
    v-model.trim="newTask"
    outlined
    append-icon="mdi-plus"
    @keyup.enter="addTask"
    @click:append="addTask"
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      let addItem = {
        id: Date.now(),
        title: this.newTask,
        done: false,
        dueDate:null
      };
      if (this.newTask !== "") {
        this.$store.dispatch("addTask", addItem);
        this.newTask = "";
      } else {
        this.$store.commit("SHOW_SACKBER", " Opps Input field is Empty!");
      }
    },
  },
};
</script>

<style>
</style>
