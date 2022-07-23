<template>
  <nav class="navbar" v-if="user">
    <div class="user">
      <p>Hi, {{ user.displayName }}</p>
      <p>Logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("User Logged Out");
      }
    };

    return { error, handleLogout, user };
  },
};
</script>

<style scoped>
.navbar {
  padding-inline: 1rem;
  height: 55px;
  background-color: #68c573;
  color: #1f3248;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user p {
  font-size: 1.1rem;
}

button {
  color: #68c573;
  width: 100px;
  height: 35px;
  background-color: #1f3248;
  border-radius: 10px;
  border: 2px solid #1f3248;
  cursor: pointer;
}
</style>
