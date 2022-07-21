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

<style>
form {
  width: 50%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat-box {
  width: 70%;
  margin-inline: 1.5rem;
}

form button {
  width: 100px;
  height: 30px;
}
</style>
