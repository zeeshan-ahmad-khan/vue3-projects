<template>
  <div class="home">
    <LoginForm @login="enterChat" />
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const onLoginPage = ref(false);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "ChatRoom" });
    };

    return { enterChat };
  },
};
</script>

<style scoped></style>
