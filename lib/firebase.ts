import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAScrz9pUKIV0aPl9Qs9KPwWgpcg6XfVH4",
  authDomain: "contact-book-be02a.firebaseapp.com",
  projectId: "contact-book-be02a",
  storageBucket: "contact-book-be02a.appspot.com",
  messagingSenderId: "349064864940",
  appId: "1:349064864940:web:4dd17be87583e082d46b09"
};

const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app)