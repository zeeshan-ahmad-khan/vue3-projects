<template>
  <header>
    <router-link to="/">
      <h3>Vuex blog</h3>
    </router-link>
    <nav>
      <router-link to="/">Home</router-link>
      <p v-if="user">Logged in as {{ user ? user.email : "No User" }}</p>
      <button v-if="user" @click="handleLogout">Logout</button>
      <div v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await store.dispatch("logout");
        router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };

    const user = computed(() => store.state.user);

    return { user, handleLogout };
  },
};
</script>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}

header a {
  text-decoration: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-inline: 15px;
}

header h3 {
  color: hsl(212, 61%, 48%);
}

nav a.router-link-exact-active {
  color: hsl(212, 61%, 48%);
}

nav button {
  outline: none;
  background: none;
  border: none;
  font-size: 1.1em;
  font-weight: 700;
  cursor: pointer;
  margin-inline: 1rem;
}
button:hover {
  color: hsl(212, 61%, 48%);
}
</style>
