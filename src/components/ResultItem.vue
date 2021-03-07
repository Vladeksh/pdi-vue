<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: String,
    date: String,
    pic: String,
    address: String,
    desc: String
  }
})
export default class ResultItem extends Vue {}
</script>

<template>
  <li>
    <v-card class="event-card">
      <v-layout row>
        <img :src="pic" />
        <v-layout
          column
          justify-space-between
          style="padding: 0.8em 1.3em; max-width: 700px;"
        >
          <div>
            <h1 class="name">{{ title }}</h1>
            <p class="desc">{{ desc }}</p>
          </div>
        </v-layout>
      </v-layout>
    </v-card>
  </li>
</template>

<style scoped lang="scss">
li {
  list-style: none;
  margin: 2em 0;
}

.event-card {
  overflow: hidden;
  border-radius: 0.3em;

  img {
    width: 240px;
    height: 200px;

    object-fit: cover;
  }

  .name {
    font-size: 1.3em;
    font-weight: 500;
  }

  .name a {
    text-decoration: none;
  }

  .desc {
    margin-top: 1em;
    margin-bottom: 0.2em;
    font-size: 0.8em;
    padding-left: 0.1em;
  }
}
</style>
