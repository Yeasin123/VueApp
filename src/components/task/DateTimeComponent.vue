<template>
  <div class="text-subtitle-1 ml-2 text_color">
    {{ date }}
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDateTime() {
      this.date = format(new Date(), "MMMM d h:mm:ss:aaa");
      setTimeout(this.getDateTime, 1000);
    },
  },
  created() {
    this.getDateTime();
  },
};
</script>

<style>
.text_color {
  color: rgba(255, 255, 255, 0.8);
}
</style>
