import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNc_S52rvnDdYhXklpdkbeOIlqQusOk1w",
    authDomain: "igenmon.firebaseapp.com",
    projectId: "igenmon",
    storageBucket: "igenmon.appspot.com",
    messagingSenderId: "891942870067",
    appId: "1:891942870067:web:1eae0f85eaf9c2cb2f9746",
    measurementId: "G-PXNNXBD4XR"
};

class Firebase{
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    
}