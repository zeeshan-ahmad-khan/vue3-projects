<template>
  <div class="signup">
    <h1>Welocme To VueChat</h1>
    <h2>Sign Up Page</h2>
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
    <div>
      <h4>
        Already have account?
        <router-link :to="{ name: 'Home' }"> Login </router-link>
      </h4>
    </div>
  </div>
</template>

<style scoped>
.signup {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
h1,
h2,
h3,
h4 {
  color: #1f3248;
}
form {
  margin-inline: auto;
  width: 550px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  border: 3px solid #68c573;
  background-color: #68c573;
  border-radius: 10px;
  padding: 1rem;
}

input {
  font-size: 1.3rem;
  width: 97%;
  color: #1f3248;
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid #1f3248;
}

button {
  font-size: 1.1rem;
  color: #68c573;
  width: 130px;
  height: 40px;
  background-color: #1f3248;
  border-radius: 10px;
  border: 2px solid #1f3248;
  cursor: pointer;
}

button:hover {
  transform: scale(1.05);
}
</style>

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
