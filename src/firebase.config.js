import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey:"AIzaSyBakin9RPjS9cCK8Y-ym0wR29AMzN8leNw",
    authDomain:"maltimart-539e8.firebaseapp.com",
    projectId:"maltimart-539e8",
    storageBucket:"maltimart-539e8.appspot.com",
    messagingSenderId:"205475960841",
    appId:"1:205475960841:web:6f17da67cc6b8235fc80d8"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;