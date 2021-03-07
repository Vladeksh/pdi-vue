<template>
  <v-container>
    <v-row>
      <v-col lg="6" offset-lg="3">
        <v-row>
          <v-text-field placeholder="Buscar" v-model="searchQuery">
            <template v-slot:append>
              <v-btn
                depressed
                tile
                color="grey lighten-5"
                class="ma-0"
                v-on:click="search"
              >
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  searchQuery = this.$store.getters.getSearchQuery;

  async search(): Promise<void> {
    if (!this.searchQuery) {
      return;
    }
    this.$store.commit("setSearchQuery", this.searchQuery);
    await this.$store.dispatch("doSearch");
  }
}
</script>
