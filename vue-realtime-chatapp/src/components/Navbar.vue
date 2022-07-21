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

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
