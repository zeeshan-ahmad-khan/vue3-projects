import { projectAuth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

const error = ref(null)

const signup = async (name, email, password) => {
    error.value = null;

    try {
        const response = await createUserWithEmailAndPassword(projectAuth, email, password)
        if (!response) {
            throw new Error("Could not complete the Signup")
        }
        await updateProfile(projectAuth.currentUser, { displayName: name })
        error.value = null

        return response;
    } catch (err) {
        const message = err.message.split(":")
        error.value = message[1].trim();
    }
}

const useSignup = () => {
    return { error, signup }
}

export default useSignup;