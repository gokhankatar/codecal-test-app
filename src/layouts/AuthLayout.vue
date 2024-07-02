<template>
  <v-container class="fill-height d-flex justify-center align-center pa-5">
    <v-row class="pa-5 d-flex justify-center align-center">
      <v-col cols="12" xs="12" sm="10" md="6" lg="5" xl="5">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts"></script>
<style scoped></style>
