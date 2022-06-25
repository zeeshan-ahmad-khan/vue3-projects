<template>
  <div class="edit">
    <h1>Edit Your Notes !!!</h1>
    <form @submit.prevent="handleSubmit">
      <label>Title: </label>
      <input type="text" v-model="title" required />
      <label>Details: </label>
      <textarea v-model="details" required />
      <button>Update</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "https://jsonserver-backend.herokuapp.com/vue-projects/",
    };
  },
  mounted() {
    fetch(this.uri + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    handleSubmit() {
      const updatedProject = {
        title: this.title,
        details: this.details,
      };
      fetch(this.uri + this.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProject),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.edit {
  width: 50%;
  margin-inline: auto;
  color: #0b67a1bf;
}
form {
  margin-block: 2rem;
  border: 2px solid #0b67a1bf;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
}
label {
  text-transform: uppercase;
  margin-block: 0.5rem;
}
input {
  margin-bottom: 0.5rem;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #0b67a1bf;
  padding-block: 0.5rem;
  font-size: 1rem;
}
textarea {
  width: 100%;
  height: 200px;
  border: 2px solid #0b67a1b1;
  border-radius: 10px;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
}
.edit h1 {
  text-align: center;
}
.edit button {
  width: 100px;
  color: white;
  outline: none;
  border: none;
  background-color: #0b67a1bf;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}
.edit button:hover {
  background-color: #0b67a1b1;
}
</style>
