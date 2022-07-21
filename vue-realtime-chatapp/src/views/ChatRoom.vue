<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import NewChatRoom from "@/components/NewChatRoom.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
  components: { Navbar, NewChatRoom, ChatWindow },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    watch(user, () => {
      if (!user.value) {
        router.go({ name: "Home" });
      }
    });
  },
};
</script>

<style></style>
