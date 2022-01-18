<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-center">
            Vue App
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            App make using Vue&Vuetify
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark prominent height="150" src="@/assets/logo.png">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-container>
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer" class="bar_icon"></v-app-bar-nav-icon>
          <v-divider></v-divider>
          <search-input></search-input>
        </v-row>
        <v-row>
          <v-toolbar-title class=" text-h5 ml-2">Vue App</v-toolbar-title>
        </v-row>
        <v-row>
          <date-time-component></date-time-component>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
         <router-view></router-view>
      </v-container>
     
    </v-main>
    <BaseNotification />
  </v-app>
</template>

<script>
import DateTimeComponent from "./components/task/DateTimeComponent.vue";

import SearchInput from "./components/task/SearchInput.vue";
export default {
  components: { SearchInput, DateTimeComponent },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", to: "/" },
        { title: "About", icon: "mdi-account-check", to: "/about" },
      ],
    };
  },
};
</script>
<style scoped>
  /* .header_container{
    padding: 12px 0px !important;
  } */
  .bar_icon{
    margin-left:-7px
  }
  
</style>