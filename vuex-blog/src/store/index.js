import { createStore } from 'vuex';
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default createStore({
  state: {
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    token: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async signup(context, payload) {
      const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      if (response) {
        context.commit('setUser', response.user)
        context.commit('setToken', response.user.accessToken)
        sessionStorage.setItem('user', JSON.stringify(response.user))
      } else {
        throw new Error("An error occurred !!!")
      }
    },
    async login(context, payload) {
      const response = await signInWithEmailAndPassword(auth, payload.email, payload.password);
      if (response) {
        context.commit('setUser', response.user)
        context.commit('setToken', response.user.accessToken)
        sessionStorage.setItem('user', JSON.stringify(response.user))
      } else {
        throw new Error("An error occurred !!!")
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
      context.commit('setToken', null)
      sessionStorage.removeItem("user")
    }
  },
})
