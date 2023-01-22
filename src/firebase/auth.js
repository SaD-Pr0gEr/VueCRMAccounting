import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import errorCodes from "@/firebase/errorCodes";

export function loginUser(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then(
            userCredential => userCredential.user
        ).then(user => {
            return {success: true, user};
        })
        .catch((error) => {
            return {success: false, message: errorCodes[error.code]}
        })
}
