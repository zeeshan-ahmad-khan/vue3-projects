<template>
  <form @submit.prevent="handleMessage">
    <textarea
      placeholder="Click send to send the message"
      v-model="message"
      class="chat-box"
    >
    </textarea>
    <button>Send</button>
    <div>{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "@/composables/getUser";
import { serverTimestamp } from "firebase/firestore";
import useCollection from "@/composables/useCollection";

export default {
  setup() {
    const { user } = getUser();
    const message = ref("");
    const { error, addDocs } = useCollection("messages");

    const handleMessage = async () => {
      const chat = {
        name: user.value.displayName,
        email: user.value.email,
        message: message.value,
        createdAt: serverTimestamp(),
      };

      await addDocs(chat);

      if (!error.value) {
        message.value = "";
      }
    };

    return { handleMessage, message, error };
  },
};
</script>

<style scoped>
form {
  width: 55%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat-box {
  width: 75%;
  color: #1f3248;
  padding: 0.3rem;
  border-radius: 10px;
  border: 2px solid #1f3248;
}

button {
  margin-inline: 0.5rem;
  color: #68c573;
  width: 100px;
  height: 45px;
  background-color: #1f3248;
  border-radius: 10px;
  border: 2px solid #1f3248;
  cursor: pointer;
}
</style>
