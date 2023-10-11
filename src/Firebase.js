import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxf2QyeTiUr-LlQzpsrRrFwRd8CMxtDjQ",
    authDomain: "freedomwall-c2659.firebaseapp.com",
    projectId: "freedomwall-c2659",
    storageBucket: "freedomwall-c2659.appspot.com",
    messagingSenderId: "855862615592",
    appId: "1:855862615592:web:2ba6c8a0c8a6680a239f1d",
    measurementId: "G-VQVSC8D3B2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}