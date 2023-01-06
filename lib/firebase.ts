import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Replace with firebase config from your project on the firebase console
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

function createFirebaseApp(config: any) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore (DB)
export const firestore = getFirestore(firebaseApp);

// Firebase Storage
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = "state_changed";

/********************* Helper functions **********************/
/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function docToJSON(doc: any) {
  const data = doc.data({ serverTimestamps: "estimate" });
  return {
    ...data,
    // Example of a Gotcha: firestore timestamp NOT serializable to JSON. Must convert to milliseconds. References to other documents are also not serializable.
    // createdAt: data?.createdAt.toMillis() || 0,
    // updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
