<template>
  <v-app theme="dark">
    <v-main>
      <component :is="$route.meta.layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
