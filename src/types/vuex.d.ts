import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { LocalSearchDao } from "@/types/LocalSearchDao";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    searchQuery: string;
    showResults: boolean;
    searchResult: LocalSearchDao[];
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
