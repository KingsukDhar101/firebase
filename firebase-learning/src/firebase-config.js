import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFW2Y9tUxXluQESnTcaO_ffKAcJLofqFw",
  authDomain: "fir-learning-63d86.firebaseapp.com",
  projectId: "fir-learning-63d86",
  storageBucket: "fir-learning-63d86.appspot.com",
  messagingSenderId: "902225344419",
  appId: "1:902225344419:web:92e70aa704e789092e8c16",
  measurementId: "G-VCXTV2JHMT",
};
// config code
// const config = {};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);