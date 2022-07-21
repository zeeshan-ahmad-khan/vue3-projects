import { ref } from "vue"
import { projectAuth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const error = ref(null)

const logout = async () => {
    error.value = null;
    try {
        await signOut(projectAuth)
        error.value = null;
    } catch (err) {
        const message = err.message.split(":")
        error.value = message[1].trim();
    }
}

const useLogout = () => {
    return { error, logout }
}

export default useLogout;