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

    <v-app-bar app dark prominent src="@/assets/logo.png">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-container>
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-row>
        <v-row>
          <v-toolbar-title  class="ml-3">Vue App</v-toolbar-title>
        </v-row>
      </v-container>

         <search-input></search-input>
      
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <BaseNotification />
  </v-app>
</template>

<script>

import SearchInput from './components/task/SearchInput.vue';
export default {
  components: {SearchInput},
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
