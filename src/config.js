import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyCTnMiOA5iqKNvbQgrGOAgoakrBPf5zqPY",
    authDomain: "fir-react-72a25.firebaseapp.com",
    projectId: "fir-react-72a25",
    storageBucket: "fir-react-72a25.appspot.com",
    messagingSenderId: "373007547166",
    appId: "1:373007547166:web:bc43d049968d191ec1e70f"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export { firebaseConfig };