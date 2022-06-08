<template>
  <div class="project" :class="{ completed: project.completed }">
    <div class="action">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-symbols-outlined">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-symbols-outlined"
          >delete</span
        >
        <span
          @click="toggleComplete"
          class="material-symbols-outlined"
          :class="{ tick: project.completed }"
          >completed</span
        >
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((error) => console.log(error));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !this.project.completed }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.project {
  background-color: white;
  box-shadow: 1px 3px 5px #00000080;
  text-align: left;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 10px solid #0b67a1bf;
}
.project.completed {
  border-left: 10px solid #0ba11abf;
}
.icons a {
  text-decoration: none;
}
.icons span.tick {
  background-color: #0ba11abf;
}
.project h3 {
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.icons span {
  border: 2px solid #0b67a1bf;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;
  cursor: pointer;
  background-color: #0b67a1bf;
  color: white;
}
.icons span:not(:nth-child(2)):hover {
  background-color: white;
  color: #0b67a1bf;
}
.icons span:nth-child(2):hover {
  background-color: crimson;
}
</style>
