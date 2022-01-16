<template>
  <div class="home">
    <v-text-field class="mx-2 mt-2"
      filled
      label="Add Task"
      v-model="newTask"
      append-icon="mdi-plus"
      @keyup.enter="addTask"
      @click:append="addTask"
      clearable
    ></v-text-field>
    <v-list flat class="pt-0" v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="clickTask(task.id)" :class="{'blue lighten-5' : task.done} ">
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="tasks.done" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{task.title}}</v-list-item-title>
          </v-list-item-content>
           <v-list-item-action>
          <v-btn icon @click="deleteTask(task.id)">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="notask">
        <v-btn icon>
          <v-icon color="red lighten-1">mdi-alert</v-icon>
        </v-btn>
        <div class="text-h5">  No Task</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      newTask:'',
    }
  },
  computed:{
    ...mapState(['tasks'])
  },
  methods:{
    clickTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id) {
       this.$store.dispatch('deleteTask',id) 
    },
     addTask() {
       let addItem = {
         id: Date.now(),
         title:this.newTask,
         done:false,
       }
       this.$store.dispatch('addTask',addItem) 
       this.newTask=''
  
    },
  }
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
