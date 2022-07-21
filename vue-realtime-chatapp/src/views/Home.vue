<template>
  <div class="home">
    <h3>Welocme To VueChat</h3>
    <SignupForm @signup="enterChat" />
    <LoginForm @login="enterChat" />
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { useRouter } from "vue-router";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "ChatRoom" });
    };

    return { enterChat };
  },
};
</script>
