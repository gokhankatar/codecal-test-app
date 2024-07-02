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
    <v-btn class="bg-light-blue-darken-3" type="submit" variant="text" block>login</v-btn>

    <a
      @click="$router.replace('/signup')"
      class="register-link d-flex justify-center align-center mt-5 text-caption text-sm-subtitle-1"
    >
      Don't have an account? Sign up now!
    </a>
  </v-form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formRef = ref(null);
const models = ref({
  email: "",
  password: "",
});

const modelRules = reactive({
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

const onLogin = () => {
  console.log("login");
  //  todo
};

const validate = async () => {
  const { valid } = await formRef.value.validate();
  if (valid) {
    onLogin();
    router.replace("/");
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
