import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByzp9LWvjQ3wZZrEuAi6luBNd-ZTlLLQ4",
    authDomain: "catch-of-the-day-vicstar.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-vicstar.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;