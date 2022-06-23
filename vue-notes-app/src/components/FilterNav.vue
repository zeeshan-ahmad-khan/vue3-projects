<template>
  <div class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ active: filterBy === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: filterBy === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: filterBy === 'ongoing' }"
    >
      Ongoing
    </button>
  </div>
</template>

<script>
export default {
  props: ["filterBy"],
  methods: {
    updateFilter(by) {
      this.$emit("filterProjects", by);
    },
  },
};
</script>

<style>
.filter-nav {
  display: flex;
  align-content: center;
  justify-content: flex-start;
}
.filter-nav button {
  outline: none;
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
.filter-nav button.active {
  color: white;
  background-color: #0b67a1bf;
}
</style>
