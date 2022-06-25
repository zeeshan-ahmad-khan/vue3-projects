<template>
  <h1 v-if="projects.length === 0 && !error">
    NOTHING TO SHOW. PLEASE ADD SOME NOTES !!!
  </h1>
  <h2 v-else-if="error">AN ERROR OCCURRED. PLEASE TRY AGAIN</h2>
  <div v-else class="home">
    <h1>Vue Notes App</h1>
    <FilterNav @filterProjects="handleFilter" :filterBy="filterBy" />
    <p>Click on the heading to reveal details !!!</p>
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
      error: false,
      projects: [],
      filteredProjects: [],
      filterBy: "all",
      uri: "https://jsonserver-backend.herokuapp.com/vprojects/",
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.projects = data;
        this.filteredProjects = data;
        this.error = false;
      })
      .catch((error) => {
        this.error = true;
        console.log(error);
      });
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
h1 {
  text-align: center;
}
h2 {
  text-align: center;
  color: crimson;
}
.home {
  width: 50%;
  margin-inline: auto;
}
.home h1 {
  color: #0b67a1bf;
  margin-block: 1rem;
}
</style>
