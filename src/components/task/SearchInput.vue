<template>
  <div>
    <v-text-field
      :value="searchItem"
      @input="filterMethod($event)"
      placeholder="search"
      dense
      filled
      clearable
      append-icon="mdi-magnify"
      class="mr-2"
    >
    </v-text-field>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["searchItem"]),
  },
  methods: {
    filterMethod(value) {
      this.$store.commit("SET_SEARCH", value);
    },
  },
};
</script>

<style scoped>
/* .v-text-field >>> .v-input__slot:before{
    border-color:transparent !important;
  }
  .v-text-field >>> .v-input__slot {
    background:transparent !important;
  }
   .v-text-field >>> .v-input__slot:before{
    border-color:transparent !important;
  } */
</style>
