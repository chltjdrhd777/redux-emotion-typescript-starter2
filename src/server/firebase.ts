import firebase from 'firebase/app';
import { firebaseConfig } from 'config/firebase';

export const firebaseInit = firebase.initializeApp(firebaseConfig);
