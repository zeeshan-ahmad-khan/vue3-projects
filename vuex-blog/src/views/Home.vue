<template>
  <div class="home">
    <h1>This is home component</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
      repellendus expedita distinctio totam, enim ipsa temporibus deleniti
      mollitia officiis ad vero reprehenderit sed! Quibusdam accusantium
      repudiandae aut distinctio minus dolorum placeat magni vel. Eaque,
      deserunt.
    </p>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Home",
  components: {},
  setup() {
    const store = useStore();
    // console.log(store.state);
  },
};
</script>

<style>
.home {
  width: 90%;
  margin-inline: auto;
}
</style>
