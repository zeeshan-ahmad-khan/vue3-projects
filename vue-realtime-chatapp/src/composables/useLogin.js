import { projectAuth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const error = ref(null)

const login = async (email, password) => {
    error.value = null;

    try {
        const response = await signInWithEmailAndPassword(projectAuth, email, password)
        if (!response) {
            throw new Error("Could not complete the Login")
        }
        error.value = null
        return response;
    } catch (err) {
        const message = err.message.split(":")
        error.value = message[1].trim();
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin;