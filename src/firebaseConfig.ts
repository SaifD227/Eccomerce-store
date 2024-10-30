// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAWXjII0dKGpatS9855rqvYyQRXVzEuwPk",
//   authDomain: "user-data-98ceb.firebaseapp.com",
//   projectId: "user-data-98ceb",
//   storageBucket: "user-data-98ceb.appspot.com",
//   messagingSenderId: "777373485001",
//   appId: "1:777373485001:web:fae29d30ca72288cda4a18",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth };


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAaiA8fAmWuzVnqXdlfXQimafTAIU0W0eM",
//   authDomain: "netflix-clone-544b4.firebaseapp.com",
//   projectId: "netflix-clone-544b4",
//   storageBucket: "netflix-clone-544b4.appspot.com",
//   messagingSenderId: "582406791543",
//   appId: "1:582406791543:web:eb19571cf274d488084172"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth }; // Export the auth instance


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaiA8fAmWuzVnqXdlfXQimafTAIU0W0eM",
  authDomain: "netflix-clone-544b4.firebaseapp.com",
  projectId: "netflix-clone-544b4",
  storageBucket: "netflix-clone-544b4.appspot.com",
  messagingSenderId: "582406791543",
  appId: "1:582406791543:web:eb19571cf274d488084172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
