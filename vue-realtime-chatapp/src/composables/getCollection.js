import { projectDb } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollection = (collectn) => {
    const error = ref(null);
    const documents = ref(null)

    const messageRef = collection(projectDb, collectn)
    const q = query(messageRef, orderBy('createdAt'))
    const unsub = onSnapshot(q, (snap) => {
        let result = [];
        snap.docs.map((doc) => {
            doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
        })
        documents.value = result;
        error.value = null;
    }, (err) => {
        console.log(err.message);
        documents.value = null;
        error.value = "Could not fetch data"
    })

    // to unsubscribe when component unmounts
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection