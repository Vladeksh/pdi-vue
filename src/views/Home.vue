<template>
  <v-main class="grey lighten-4">
    <ResultList v-show="getShowResult">
      <ResultItem
        v-for="{ id, title, description, thumbnail } in getResult"
        :key="id"
        :title="title"
        :pic="thumbnail"
        :desc="description"
      >
      </ResultItem>
    </ResultList>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

import ResultList from "@/components/ResultList.vue";
import ResultItem from "@/components/ResultItem.vue";

@Component({
  components: { ResultList, ResultItem },
  computed: {
    ...mapGetters(["getShowResult", "getResult"])
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.container {
  padding: 1.5rem;
}
</style>
