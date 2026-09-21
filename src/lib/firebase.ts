import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import firebaseConfigJson from "../../firebase-applet-config.json";

let firebaseConfig = firebaseConfigJson;

// Override with env var if available (for Vercel deployment)
try {
  const envConfig = (import.meta as any)?.env?.VITE_FIREBASE_CONFIG || (typeof process !== 'undefined' ? process.env?.VITE_FIREBASE_CONFIG : undefined);
  if (envConfig) {
    firebaseConfig = JSON.parse(envConfig);
  }
} catch (e) {
  console.warn("Failed to parse VITE_FIREBASE_CONFIG, falling back to local config", e);
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
