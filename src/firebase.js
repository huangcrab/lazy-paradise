import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
let app;
const firebaseConfig = {
  apiKey: 'AIzaSyDoy5Wn3UV90U-nPQNz9eYicdiumFU1G1g',
  authDomain: 'portfolio-1f5ca.firebaseapp.com',
  projectId: 'portfolio-1f5ca',
  storageBucket: 'portfolio-1f5ca.appspot.com',
  messagingSenderId: '68944147398',
  appId: '1:68944147398:web:ebccb28ae35db5e822f8c7',
  measurementId: 'G-NR3QETSNF6',
};

class Firebase {
  constructor() {
    app = initializeApp(firebaseConfig);
  }

  database() {
    return getFirestore(app);
  }
}

export default Firebase;
