// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD419e-fq8Oi2EjrB2fUyEH_0A9whNQG70",
  authDomain: "i-1-experts.firebaseapp.com",
  projectId: "i-1-experts",
  storageBucket: "i-1-experts.appspot.com",
  messagingSenderId: "1029292886299",
  appId: "1:1029292886299:web:7d065df49159dae1f9ebbe",
  measurementId: "G-94XD6B8C0N",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
