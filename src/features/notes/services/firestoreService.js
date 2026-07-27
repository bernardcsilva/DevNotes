import { auth, db } from "../../../firebase/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore";

export async function addNote(note) {
    const docRef = await addDoc(collection(db, "notes"), note)

    return docRef.id
}

export async function getNotes() {

    const user = auth.currentUser

    if (!user) return []
    const notesQuery = query(
        collection(db, "notes"),
        where("uid", "==", user.uid)
    )

    const snapshot = await getDocs(notesQuery)

    return snapshot.docs.map((doc) => ({
        firestoreId: doc.id,
        ...doc.data(),
    }))
}

export async function updateNote(firestoreId, updatedNote) {
    const noteRef = doc(db, "notes", firestoreId)

    await updateDoc(noteRef, updatedNote)
}

export async function deleteNote(firestoreId) {
    const noteRef = doc(db, "notes", firestoreId)

    await deleteDoc(noteRef)
}