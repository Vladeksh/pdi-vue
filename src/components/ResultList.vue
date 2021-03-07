<template>
  <v-container class="container">
    <v-row>
      <v-col md="10" offset-md="1" sm="12">
        <transition-group
          tag="ul"
          class="event-card-list"
          name="fade-in"
          :css="false"
          appear
        >
          <slot></slot>
        </transition-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.container {
  padding-top: 0;
}
</style>
