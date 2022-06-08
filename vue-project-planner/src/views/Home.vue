<template>
  <div class="home">
    <h1>Project Planner</h1>
    <FilterNav @filterProjects="handleFilter" :filterBy="filterBy" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "Home",
  components: { SingleProject, FilterNav, FilterNav },
  data() {
    return {
      projects: [],
      filteredProjects: [],
      filterBy: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => {
        this.projects = data;
        this.filteredProjects = data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
      this.filteredProjects = this.projects;
    },
    handleComplete(id) {
      this.projects = this.projects.map((project) => {
        if (project.id === id) {
          return { ...project, completed: !project.completed };
        } else {
          return project;
        }
      });
      this.filteredProjects = this.projects;
    },
    handleFilter(by) {
      if (by === "completed") {
        this.filteredProjects = this.projects.filter(
          (project) => project.completed === true
        );
        this.filterBy = by;
      } else if (by === "ongoing") {
        this.filteredProjects = this.projects.filter(
          (project) => project.completed === false
        );
      } else {
        this.filteredProjects = this.projects;
      }
      this.filterBy = by;
    },
  },
};
</script>

<style>
.home h1 {
  color: #0b67a1bf;
  margin-block: 1rem;
}
</style>
