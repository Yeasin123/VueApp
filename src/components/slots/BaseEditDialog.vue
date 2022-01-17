<template>
  <div>
    <v-dialog
      :value="true"
      max-width="300"
    >
      <v-card>
        <v-card-title class="text-h6">
          Edit task
        </v-card-title>
        <v-card-text> 
          Edit task Title 
           <v-text-field v-model="newTask"> </v-text-field>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
      
          <v-btn
            text
            @click="$emit('close')"
          >
            Cancle
          </v-btn>

          <v-btn
            color="success darken-1"
            text
            @click="updateTask()"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
 props:['task'],
 data() {
   return {
     newTask:null
   }
 },
  methods: {
    updateTask() {
      let updatetask = {
        id:this.task.id,
        title:this.newTask
      }
       this.$store.dispatch('updateTask',updatetask)
       this.$emit('close')
    }
  },
  mounted() {
    this.newTask = this.task.title
  }
}
</script>

<style>

</style>