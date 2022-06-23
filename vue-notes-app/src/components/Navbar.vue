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
  width: 100vw;
  height: 50px;
  background-color: #0b67a1bf;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.navbar a {
  width: 100px;
  text-align: center;
  text-decoration: none;
  margin-inline: 1rem;
  color: white;
}
.navbar .router-link-active {
  width: 120px;
  text-align: center;
  padding: 0.5rem;
  background-color: white;
  color: #0b67a1bf;
}
</style>
