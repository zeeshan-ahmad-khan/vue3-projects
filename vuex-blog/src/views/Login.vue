<template>
  <section class="login">
    <h1>Login Page</h1>

    <form @submit.prevent="handleLogin">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        v-model="email"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter a password"
        v-model="password"
      />
      <button>Login</button>
    </form>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import store from "@/store";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleLogin = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };

    return { email, password, handleLogin };
  },
};
</script>

<style>
.login {
  width: 70%;
  margin-inline: auto;
  text-align: center;
}
</style>
