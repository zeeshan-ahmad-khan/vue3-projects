import { ref } from "vue"
import { projectDb } from "@/firebase/config"
import { collection, addDoc } from "firebase/firestore"

const useCollection = (collectn) => {
    const error = ref(null)

    const addDocs = async (doc) => {
        error.value = null

        try {
            const messageRef = collection(projectDb, collectn)
            await addDoc(messageRef, doc)
        } catch (err) {
            console.log(err.message);
            error.value = "Could not send the message";
        }
    }

    return { error, addDocs }
}

export default useCollection