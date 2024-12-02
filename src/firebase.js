import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxm-rUfhREbJC5uB-ZnEoZlDOAlDCsO7M",
  authDomain: "designify-app.firebaseapp.com",
  projectId: "designify-app",
  storageBucket: "designify-app.firebasestorage.app",
  messagingSenderId: "941841303834",
  appId: "1:941841303834:web:e1b420fe7a545fb34f84a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };