<template>
  <v-col v-for="(item, index) of arr" :key="index" ols="12" sm="6" md="3">
    <v-card
      id="card"
      class="cursor-pointer d-flex flex-column pa-15 text-center ga-5"
      rounded="large"
      height="600"
    >
      <div class="logo d-flex flex-column justify-center align-center ga-2">
        <v-img :src="item.img_src" width="60" />
        <span class="text-light-blue-darken-3">{{ item.lang }}</span>
      </div>

      <div class="activity d-flex flex-column justify-center align-center ga-2">
        <span class="date text-light-blue-darken-1">{{ item.date }}</span>
        <span class="text-h5 text-sm-h4">{{ item.activitiy }}</span>
      </div>

      <div class="buttons d-flex justify-center align-center ga-2">
        <v-btn class="bg-light-blue-darken-3 border-none" rounded="xl" size="large"
          >edit</v-btn
        >
        <v-btn class="bg-red-lighten-1 border-none" rounded="xl" size="large"
          >delete</v-btn
        >
      </div>

      <div class="mt-10 rates d-flex justify-space-between align-center">
        <span>{{ item.percantage }}%</span>
        <span>{{ item.vote }} vote</span>
      </div>
      <v-divider></v-divider>

      <div class="vote-btn d-flex justify-space-between align-center">
        <v-btn prepend-icon="mdi-thumb-up-outline">Good</v-btn>
        <v-btn prepend-icon="mdi-thumb-down-outline">Bad</v-btn>
      </div>

      <div class="added-date mt-10">
        <span class="text-caption">Added {{ item.added_date }}</span>
      </div>
    </v-card>
  </v-col>

  <!-- loading bar -->
  <Loading v-if="isLoading" />
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import store from "../store/pinia";
import Loading from "../components/Loading.vue";

interface ProjectItem {
  img_src: string;
  lang: string;
  date: string;
  activitiy: string;
  percantage: number;
  vote: number;
  added_date: string;
}

const _store = store();
const isLoading = ref(false);
const arr = ref<ProjectItem[]>([]);

watch(
  () => _store.isActive,
  (value) => {
    isLoading.value = true;
    if (value === "front-end") {
      arr.value = _store.frontEndArr;
    } else if (value === "back-end") {
      arr.value = _store.backEndArr;
    }
    isLoading.value = false;
  }
);

onMounted(() => {
  isLoading.value = true;
  if (_store.isActive === "front-end") {
    arr.value = _store.frontEndArr;
  } else if (_store.isActive === "back-end") {
    arr.value = _store.backEndArr;
  }
  isLoading.value = false;
});
</script>
<style scoped></style>
