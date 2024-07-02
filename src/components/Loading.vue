<template>
  <!-- loading bar -->
  <v-progress-circular
    class="loading-bar"
    :size="90"
    :width="9"
    color="light-blue-darken-3"
    indeterminate
  ></v-progress-circular>
</template>

<style scoped>
.loading-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
