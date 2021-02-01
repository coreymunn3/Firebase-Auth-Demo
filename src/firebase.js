import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDC9FuIn-QZ3WVDAwcBzDuzAooyb4kzud8',
  authDomain: 'authdemo-dev-58f3d.firebaseapp.com',
  projectId: 'authdemo-dev-58f3d',
  storageBucket: 'authdemo-dev-58f3d.appspot.com',
  messagingSenderId: '667403527705',
  appId: '1:667403527705:web:35839024b0bc89a26e2c88',
});

export const auth = app.auth();
export default app;
