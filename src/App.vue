<template>
  <v-app id="app">
    <v-app-bar app flat color="white">
      <Search></Search>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search.vue";

export default Vue.extend({
  name: "App",

  components: {
    Search
  }
});
</script>
