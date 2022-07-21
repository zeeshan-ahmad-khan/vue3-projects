<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="chat-window" ref="message">
      <div
        v-for="doc in formattedDocuments"
        :key="doc.id"
        class="chat"
        :class="{ current: doc.email === currentUserEmail }"
      >
        <span>{{ doc.createdAt }}</span
        ><br />
        <span>{{ doc.name }}</span
        ><br />
        <span>{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const currentUserEmail = ref("");
    const { user } = getUser();
    const { error, documents } = getCollection("messages");

    if (user) {
      currentUserEmail.value = user.value.email;
    }

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    const message = ref(null);

    onUpdated(() => {
      message.value.scrollTop = message.value.scrollHeight;
    });

    return { error, formattedDocuments, documents, message, currentUserEmail };
  },
};
</script>

<style>
.chat-window {
  width: 50%;
  height: 500px;
  margin-inline: auto;
  overflow-y: auto;
}
.chat {
  margin-block: 0.5rem;
  text-align: left;
  padding: 0.5rem;
  box-shadow: 2px 2px 3px gray;
}

.current {
  background-color: #d7d7d7;
  text-align: right;
}
</style>
