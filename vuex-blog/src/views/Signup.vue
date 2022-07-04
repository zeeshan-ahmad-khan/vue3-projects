<template>
  <section class="signup">
    <h1>Signup Page</h1>

    <form @submit.prevent="handleSignup">
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        v-model="username"
      />
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
      <button>Signup</button>
    </form>
  </section>
</template>

<script>
import { ref } from "vue";
import store from "@/store";
import { useRouter } from "vue-router";

export default {
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleSignup = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };

    return { username, email, password, handleSignup };
  },
};
</script>

<style>
.signup {
  width: 70%;
  margin-inline: auto;
  text-align: center;
}
</style>
