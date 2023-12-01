import { initializeApp } from "firebase/app";
import { getAuth, sendEmailVerification } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA3l1PXXFeX_ljI3M3NwET3viGPz6Y9npc",
    authDomain: "jira-clone-1c37f.firebaseapp.com",
    databaseURL: "https://jira-clone-1c37f-default-rtdb.firebaseio.com",
    projectId: "jira-clone-1c37f",
    storageBucket: "jira-clone-1c37f.appspot.com",
    messagingSenderId: "155334323689",
    appId: "1:155334323689:web:b0af2f1b4c2df47bcbaf78",
    measurementId: "G-QMSLNPYDLS"
};

export default initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)



export { auth, app, db }

