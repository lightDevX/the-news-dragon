// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnQFxQ_NWKibj-SCwza6w2Om6dd3LLIIY",
    authDomain: "the-news-dragon-m.firebaseapp.com",
    projectId: "the-news-dragon-m",
    storageBucket: "the-news-dragon-m.appspot.com",
    messagingSenderId: "439291465696",
    appId: "1:439291465696:web:0c44b497896e7fa1296585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;