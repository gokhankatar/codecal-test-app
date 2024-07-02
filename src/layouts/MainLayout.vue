<template>
  <v-app-bar class="px-10 bg-blue-grey-darken-3">
    <div
      @click="$router.replace('/')"
      class="cursor-pointer d-flex justify-center align-center ga-2"
    >
      <v-icon icon="mdi-code-braces" size="x-large" />
      <h5 class="text-subtitle-1 text-sm-h5">CodeCal</h5>
    </div>
    <v-spacer></v-spacer>
    <v-list class="d-flex align-center ga-2 bg-transparent">
      <v-list-item class="d-none d-sm-flex list-item cursor-pointer rounded-xl"
        >Ranking</v-list-item
      >
      <v-list-item class="d-none d-sm-flex list-item cursor-pointer rounded-xl"
        >Vote</v-list-item
      >
      <v-list-item class="d-none d-sm-flex list-item cursor-pointer rounded-xl"
        >Logout</v-list-item
      >
      <v-btn
        id="btn"
        class="bg-light-blue-darken-3"
        style="border-color: #0277bd"
        variant="outlined"
        rounded="xl"
        prepend-icon="mdi-plus"
        >Add Event</v-btn
      >
    </v-list>
  </v-app-bar>

  <v-container>
    <v-row class="d-flex justify-center align-center my-10">
      <div
        class="position-relative w-100 mt-15 mx-auto d-flex justify-center align-center"
      >
        <span
          @click="_store.changeIsActive"
          :style="{
            backgroundColor: _store.isActive === 'front-end' ? '#0277bd' : 'transparent',
            color: _store.isActive === 'front-end' ? '#fff' : '#37474F',
          }"
          class="cursor-pointer pa-3 text-subtitle-1 text-sm-h5"
          style="
            border-radius: 2.5rem 0 0 2.5rem;
            border: 1px solid #37474f;
            border-right: none;
          "
          >Front End</span
        >
        <v-icon class="position-absolute" color="#37474F" icon="mdi-sync"></v-icon>
        <span
          @click="_store.changeIsActive"
          :style="{
            backgroundColor: _store.isActive === 'back-end' ? '#D84315' : 'transparent',
            color: _store.isActive === 'back-end' ? '#fff' : '#37474F',
          }"
          class="cursor-pointer pa-3 text-subtitle-1 text-sm-h5"
          style="
            border-radius: 0 2.5rem 2.5rem 0;
            border: 1px solid #37474f;
            border-left: none;
          "
          >Back End</span
        >
      </div>
    </v-row>

    <v-divider></v-divider>

    <v-row class="pa-5">
      <v-col cols="12" sm="6" md="3">
        <v-card
          id="card"
          class="cursor-pointer d-flex flex-column pa-10 text-center ga-5"
          rounded="large"
        >
          <div class="d-flex justify-center align-center ga-2">
            <v-img
              :src="
                _store.isActive === 'front-end'
                  ? 'https://seekvectors.com/files/download/vue-9-01.png'
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
              "
              max-width="50"
              max-height="30"
            />
            <span
              class="text-subtitle-1 text-md-5"
              :style="{ color: _store.isActive === 'front-end' ? '#0277bd' : '#D84315' }"
              >20 Sep 2024</span
            >
          </div>
          <span class="text-h5 text-md-h4">{{
            _store.isActive === "front-end" ? "Panel Challenge" : "Authentication Page"
          }}</span>
          <span class="text-subtitle-1">+78 views | +4 votes</span>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card
          id="card"
          class="cursor-pointer d-flex flex-column pa-10 text-center ga-5"
          rounded="large"
        >
          <div class="d-flex justify-center align-center ga-1">
            <v-img
              :src="
              _store.isActive === 'front-end'
                  ? 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png'
              "
              max-width="50"
              max-height="30"
            />
            <span
              class="text-subtitle-1 text-md-5"
              :style="{ color: _store.isActive === 'front-end' ? '#0277bd' : '#D84315' }"
              >20 Sep 2024</span
            >
          </div>
          <span class="text-h5 text-md-h4">{{
            _store.isActive === "front-end" ? "Dashboard Space" : "Database Build"
          }}</span>
          <span class="text-subtitle-1">+78 views | +4 votes</span>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card
          id="card"
          class="cursor-pointer d-flex flex-column pa-10 text-center ga-5"
          rounded="large"
        >
          <div class="d-flex justify-center align-center ga-1">
            <v-img
              :src="
              _store.isActive === 'front-end'
                  ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
                  : 'https://i.pinimg.com/originals/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.png'
              "
              max-width="50"
              max-height="30"
            />
            <span
              class="text-subtitle-1 text-md-5"
              :style="{ color: _store.isActive === 'front-end' ? '#0277bd' : '#D84315' }"
              >25 Sep 2024</span
            >
          </div>
          <span class="text-h5 text-md-h4">{{
            _store.isActive === "front-end" ? "Todo Challenge" : "AI Algorthym"
          }}</span>
          <span class="text-subtitle-1">+78 views | +4 votes</span>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card
          id="card"
          class="cursor-pointer d-flex flex-column pa-10 text-center ga-5"
          rounded="large"
        >
          <div class="d-flex justify-center align-center ga-1">
            <v-img
              :src="
              _store.isActive === 'front-end'
                  ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Svelte_logo_by_gengns.svg/640px-Svelte_logo_by_gengns.svg.png'
                  : 'https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png'
              "
              max-width="50"
              max-height="30"
            />
            <span
              class="text-subtitle-1 text-md-5"
              :style="{ color: _store.isActive === 'front-end' ? '#0277bd' : '#D84315' }"
              >25 Sep 2024</span
            >
          </div>
          <span class="text-h5 text-md-h4">{{
            _store.isActive === "front-end" ? "Login Platform" : "Sensor Algorthym"
          }}</span>
          <span class="text-subtitle-1">+78 views | +4 votes</span>
        </v-card>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="pa-5 my-10">
      <slot />
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import store from "../store/pinia";

const _store = store();
</script>
<style scoped>
#btn {
  transition: all 0.2s ease;
}
#btn:hover {
  background-color: transparent !important;
}
.list-item {
  transition: all 0.2s ease;
}
.list-item:hover {
  background-color: #0277bd;
}

#card:hover span {
  text-decoration: underline;
}
</style>
