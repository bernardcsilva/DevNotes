import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"

import { auth } from "../../../firebase/firebase"

export async function registerUser(email, password) {
    return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
}

export async function loginUser(email, password) {
    return await signInWithEmailAndPassword(
        auth,
        email,
        password
    )
}

export async function logoutUser() {
    await signOut(auth)
}

export function observeAuthState(callback) {
    return onAuthStateChanged(auth, callback)
}