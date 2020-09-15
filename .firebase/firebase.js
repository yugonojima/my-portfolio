import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCyTbFkrWzGU-kexqwcMwWrvRNHZXFUlno",
    authDomain: "yugo-portfolio.firebaseapp.com",
    databaseURL: "https://yugo-portfolio.firebaseio.com/",
    projectId: "yugo-portfolio",
    storageBucket: "bucket-name.appspot.com",
    messagingSenderId: "825127507561"
}

firebase.initializeApp(config);
