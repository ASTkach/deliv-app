import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCMheCmlN8flkhaGIQs3aEqhE2TuRThK3I',
    authDomain: 'delivery-app-8ae93.firebaseapp.com',
    projectId: 'delivery-app-8ae93',
    storageBucket: 'delivery-app-8ae93.appspot.com',
    messagingSenderId: '185758494199',
    appId: '1:185758494199:web:6a87c5bd8c96929ac0d2f2',
    measurementId: 'G-G48HVPQRQ2',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
