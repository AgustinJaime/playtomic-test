import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDj6R5Kx8N6G1-JqgMoQSdVqO-Im4mhO6Q',
  authDomain: 'playtomic-test-ajaime.firebaseapp.com',
  projectId: 'playtomic-test-ajaime',
  storageBucket: 'playtomic-test-ajaime.appspot.com',
  messagingSenderId: '136084515383',
  appId: '1:136084515383:web:7b6d2dad323fdf0c75edb2',
}

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb
