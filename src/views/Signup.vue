<template>
  <v-form class="pa-10" id="form" ref="formRef" @submit.prevent="validate">
    <div
      @click="$router.replace('/')"
      class="my-10 cursor-pointer d-flex justify-center align-center ga-2"
    >
      <v-icon icon="mdi-code-braces" size="x-large" />
      <h5 class="text-h5 text-sm-h4">CodeCal</h5>
    </div>
    <v-text-field
      v-model="models.fullName"
      :rules="modelRules.fullName"
      type="text"
      label="Full Name"
      prepend-inner-icon="mdi-account"
      variant="outlined"
      color="light-blue-darken-3"
    />
    <v-text-field
      v-model="models.email"
      :rules="modelRules.email"
      type="text"
      label="Email"
      prepend-inner-icon="mdi-email"
      variant="outlined"
      color="light-blue-darken-3"
    />
    <v-text-field
      v-model="models.password"
      :rules="modelRules.password"
      :type="showPassword ? 'text' : 'password'"
      label="Password"
      prepend-inner-icon="mdi-lock"
      variant="outlined"
      color="light-blue-darken-3"
    >
      <template v-slot:append-inner>
        <v-icon
          :icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click="togglePasswordVisibility"
        />
      </template>
    </v-text-field>
    <v-btn class="bg-light-blue-darken-3" type="submit" variant="text" block
      >register</v-btn
    >

    <a
      @click="$router.replace('/signin')"
      class="register-link mt-5 d-flex justify-center align-center text-caption text-sm-subtitle-1"
    >
      Already have an account? Login.
    </a>
  </v-form>

  <!-- toast -->
  <v-snackbar v-model="isRegister" color="green">
    <span class="d-flex justify-center align-center">Welcome to CodeCal !</span>
  </v-snackbar>

  <v-snackbar v-model="isErr" color="red">
    <span class="d-flex justify-center align-center"
      >Registration failed. There may already be such a user.</span
    >
  </v-snackbar>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isErr = ref(false);
const isRegister = ref(false);
const formRef = ref(null);
const models = ref({
  fullName: "",
  email: "",
  password: "",
});

const modelRules = reactive({
  fullName: [
    (v: string) => !!v || "Your name and surname is required!",
    (v: string) => (v && v.length >= 5) || "Name and surname must be longer than 4",
  ],
  email: [
    (v: string) => !!v || "Email is required!",
    (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
  ],
  password: [
    (v: string) => !!v || "Password is required!",
    (v: string) => (v && v.length >= 6) || "Your password must be longer than 5",
  ],
});

const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const api_key = import.meta.env.VITE_API_KEY;

const onRegister = async () => {
  try {
    await axios
      .post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`, {
        email: models.value.email,
        password: models.value.password,
        returnSecureToken: true,
      })
      .then((res) => {
        if ((res.status = 200)) {
          isRegister.value = true;
          setTimeout(() => {
            isRegister.value = false;
            router.replace("/signin");
          }, 2000);
        }
      });
  } catch (error) {
    isErr.value = true;
    setTimeout(() => {
      isErr.value = false;
    }, 2000);
    console.error(error);
  }
};

const validate = async () => {
  const { valid } = await formRef.value.validate();
  if (valid) {
    onRegister();
  }
};
</script>

<style scoped>
#form {
  border: none;
  box-shadow: 0 0 2rem #499dd0;
}

.register-link {
  text-decoration: none;
  color: rgb(158, 151, 151);
  transition: all 0.5s ease;
  cursor: pointer;
}

.register-link:hover {
  color: #0277bd;
  text-decoration: underline;
}
</style>
