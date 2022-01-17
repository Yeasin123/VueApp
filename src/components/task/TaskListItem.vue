<template>
  <div>
    <v-list-item
      @click="$store.commit('CLICK_TASK', task.id)"
      :class="{ 'blue lighten-5': task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ task.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <!-- <v-btn icon @click="dialogs.delete = true">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn> -->
             <maneu-list :task="task"></maneu-list>
        </v-list-item-action>
     
      </template>
    </v-list-item>
    <v-divider></v-divider>
    
  </div>
</template>

<script>
import ManeuList from "./ManeuList.vue";
export default {
  components: { ManeuList },
  props: ["task"],
  data() {
    return {
      
    };
  },
};
</script>

<style></style>
