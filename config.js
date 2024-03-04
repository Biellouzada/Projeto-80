import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCErg2WlN9wcv5c7TVMLDV2x6SQ7G_Q2v4",
  authDomain: "ciclista-eletronico-bf9bb.firebaseapp.com",
  databaseURL: "https://ciclista-eletronico-bf9bb-default-rtdb.firebaseio.com",
  projectId: "ciclista-eletronico-bf9bb",
  storageBucket: "ciclista-eletronico-bf9bb.appspot.com",
  messagingSenderId: "1031756292540",
  appId: "1:1031756292540:web:b32426d275d52ae9530bb9",
  measurementId: "G-2WSJCGVJ8X"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
