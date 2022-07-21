<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Enter Name" v-model="name" />
    <input type="email" required placeholder="Enter Email" v-model="email" />
    <input
      type="password"
      required
      placeholder="Enter Password"
      v-model="password"
    />
    <div>{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    const name = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(name.value, email.value, password.value);
      if (!error.value) {
        context.emit("signup");
      }
      name.value = "";
      email.value = "";
      password.value = "";
    };

    return { name, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
