<template>
  <v-col v-for="(item, index) of arr" :key="index" ols="12" sm="6" md="3">
    <v-card
      id="card"
      class="cursor-pointer d-flex flex-column pa-15 text-center ga-5"
      rounded="large"
      height="600"
    >
      <div class="logo d-flex flex-column justify-center align-center ga-2">
        <v-img :src="item.img_src" width="60" height="60" />
        <span
          :style="{ color: _store.isActive === 'front-end' ? '#0C7CC0' : '#D84315' }"
          >{{ item.lang }}</span
        >
      </div>

      <div class="activity d-flex flex-column justify-center align-center ga-2">
        <span
          :style="{ color: _store.isActive === 'front-end' ? '#039BE5' : '#FB8C00' }"
          >{{ item.date }}</span
        >
        <span class="text-h5 text-sm-h4">{{ item.activitiy }}</span>
      </div>

      <div class="buttons d-flex justify-center align-center ga-2">
        <v-btn
          :style="{
            backgroundColor: _store.isActive === 'front-end' ? '#0277BD' : '#D84315',
          }"
          class="border-none"
          rounded="xl"
          size="large"
          >join</v-btn
        >
        <v-btn
          :style="{
            backgroundColor: _store.isActive === 'front-end' ? '#0277BD' : '#D84315',
          }"
          class="border-none"
          rounded="xl"
          size="large"
          >map</v-btn
        >
      </div>

      <div class="mt-10 rates d-flex justify-space-between align-center">
        <span>{{ item.percantage }}%</span>
        <span>{{ item.vote }} vote</span>
      </div>
      <v-divider></v-divider>

      <div
        class="vote-btn d-flex justify-space-between align-center"
        v-if="isVote === false"
      >
        <v-btn @click="sendVote(item)" prepend-icon="mdi-thumb-up-outline">Good</v-btn>
        <v-btn @click="sendVote(item)" prepend-icon="mdi-thumb-down-outline">Bad</v-btn>
      </div>

      <div v-if="isVote">
        <p class="pa-3 mt-2 bg-green">Thanks for your vote!</p>
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

const isVote = ref(false);

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

const sendVote = (item: any) => {
  item.vote++;
  isVote.value = true;
  setTimeout(() => {
    isVote.value = false;
  }, 2000);
};

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
<style scoped>
#card:hover span {
  text-decoration: underline;
}
</style>
