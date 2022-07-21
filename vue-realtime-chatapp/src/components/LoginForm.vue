<template>
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Enter Email" v-model="email" />
    <input
      type="password"
      required
      placeholder="Enter Password"
      v-model="password"
    />
    <div>{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";

export default {
  setup(props, context) {
    const { error, login } = useLogin();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
        console.log("User Logged In");
      }
      email.value = "";
      password.value = "";
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
