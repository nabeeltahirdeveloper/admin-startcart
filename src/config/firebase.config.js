// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-TPJKXhNldB0uvIp2zUDEx7C_68KECRA",
    authDomain: "hackathon-65dd0.firebaseapp.com",
    projectId: "hackathon-65dd0",
    storageBucket: "hackathon-65dd0.appspot.com",
    messagingSenderId: "185332252339",
    appId: "1:185332252339:web:385757d79fc00cf7c53ac6",
    measurementId: "G-KRD62SL6G4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// exportin the fireStore
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Signup function
export const signup = async (email, password) => {
    let user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
};

// Login function
export const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// logout function
export const logout = () => {
    return signOut(auth);
};

// custom hooks
export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
        return unsub;
    }, []);

    return currentUser;
};