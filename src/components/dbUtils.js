import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const firestoreCollection = "users";

export const addDocument = async (newUser) => {
    try {
        const docRef = await addDoc(collection(db, firestoreCollection), newUser);

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getDocuments = async () => {
    const querySnapshot = await getDocs(collection(db, firestoreCollection));
    const users = [];
    querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
    });
    return users;
}

export const updateDocument = async (id, updatedUser) => {
    const userRef = doc(db, firestoreCollection, id);
    await updateDoc(userRef, updatedUser);
}

export const deleteDocument = async (id) => {
    await deleteDoc(doc(db, firestoreCollection, id));
}