// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwmJda5yXpuE7rihITa6z66FL5KhdezbQ",
  authDomain: "yellowbird-4e1b8.firebaseapp.com",
  projectId: "yellowbird-4e1b8",
  storageBucket: "yellowbird-4e1b8.appspot.com",
  messagingSenderId: "621857544175",
  appId: "1:621857544175:web:8ea4a8935551387bc9c81a",
  measurementId: "G-Y4YEB6TRG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { app, storage };

export async function uploadFileToStorage(key: string, file: Blob | Uint8Array | ArrayBuffer, contentType: string = "image/jpeg") {
  const storageRef = ref(getStorage(), key);
  return await uploadBytes(storageRef, file, { contentType });
}

export async function getFileUrl(key: string) {
  const storageRef = ref(getStorage(), key);
  return await getDownloadURL(storageRef);
}
