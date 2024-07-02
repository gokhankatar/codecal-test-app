<template>
  <v-app :theme="_store.mode">
    <v-main>
      <v-icon
        @click="_store.changeMode"
        class="icon cursor-pointer"
        size="x-large"
        :icon="_store.mode === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      />
      <component :is="$route.meta.layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import store from "./store/pinia";
const _store = store();
</script>

<style scoped>
.icon {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 99;
  transition: all 0.5s ease;
}
.icon:hover {
  color: #0277bd;
  transform: rotate(360deg);
}
</style>
