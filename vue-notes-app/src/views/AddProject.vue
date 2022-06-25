<template>
  <div class="add">
    <h1>Add your notes !!!</h1>
    <form @submit.prevent="handleSubmit">
      <label>Title: </label>
      <input type="text" v-model="title" required />
      <label>Details: </label>
      <textarea v-model="details" required />
      <button>Add</button>
    </form>
    <div v-if="success" class="success">Project added successfully !!!</div>
    <div v-if="error" class="error">
      An Error Occurred. Please Try Again !!!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
      success: false,
      error: false,
      uri: "https://jsonserver-backend.herokuapp.com/vprojects/",
    };
  },
  methods: {
    handleSubmit() {
      const project = {
        title: this.title,
        details: this.details,
        completed: false,
      };
      fetch(this.uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.title = "";
          this.details = "";
          this.success = true;
          this.error = false;
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
          console.log(error);
        });

      setTimeout(() => {
        this.success = false;
        this.error = false;
      }, 3000);
    },
  },
};
</script>

<style>
.add {
  width: 50%;
  margin-inline: auto;
  color: #0b67a1bf;
}
.add h1 {
  text-align: center;
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
.add button {
  width: 100px;
  color: white;
  outline: none;
  border: none;
  background-color: #0b67a1bf;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}
.add button:hover {
  background-color: #0b67a1b1;
}
.success,
.error {
  margin-inline: auto;
  color: white;
  width: max-content;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #0d9e31;
}
.error {
  background-color: crimson;
}
</style>
