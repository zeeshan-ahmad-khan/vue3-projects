<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'AddProject' }">Add Project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  margin-block: 1rem;
}
.navbar a {
  text-decoration: none;
  margin-inline: 1rem;
  color: #0b67a1bf;
}
.navbar .router-link-active {
  border-bottom: 2px solid #292a29;
}
</style>
