import * as firebase from 'firebase/app';
import 'firebase/auth';

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBeAavZmVP0pyD9PG3FXRGgI2SHoNXW1uQ",
    authDomain: "wishlist-bd83f.firebaseapp.com",
    databaseURL: "https://wishlist-bd83f.firebaseio.com",
    projectId: "wishlist-bd83f",
    storageBucket: "wishlist-bd83f.appspot.com",
    messagingSenderId: "282368271884",
    appId: "1:282368271884:web:89fce93aa537e2c4747029",
    measurementId: "G-E1DK1WHR5P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase