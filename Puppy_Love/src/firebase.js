import firebase from 'firebase/app';
import 'firebase/auth';

const app=firebase.initializeApp({
    apiKey: "AIzaSyA2aaM2yMwmJNrx8rC-OE0fwKq505Al6eQ",
    authDomain: "teamsapp-9e3a6.firebaseapp.com",
    projectId: "teamsapp-9e3a6",
    storageBucket: "teamsapp-9e3a6.appspot.com",
    messagingSenderId: "484407376301",
    appId: "1:484407376301:web:b3d3071c77f6152b488924"
});

export const auth=app.auth();
export default app;