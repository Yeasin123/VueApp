<template>
  <div>
    <v-dialog
      ref="dialog"
      :value="true"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <v-date-picker v-model="date" scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
        <v-btn text color="primary" @click="updateDueDate(task.id)">
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:['task'],
    data() {
        return {
            date:null
        }
    },
    methods:{
        updateDueDate(id) {
            let updateDueDate = {
            id:id,
            dueDate:this.date
        }
        this.$store.dispatch('updateDateTask',updateDueDate)
        this.$emit('close')
    }
        
    },
    mounted() {
        if(this.task.dueDate) {
          this.date = this.task.dueDate;
        }
    }
};
</script>

<style>
</style>