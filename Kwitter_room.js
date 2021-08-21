// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwdkwkpUJwDxnqZPV102nmYyD6iA4Wqk8",
    authDomain: "kwittertest-720eb.firebaseapp.com",
    projectId: "kwittertest-720eb",
    storageBucket: "kwittertest-720eb.appspot.com",
    messagingSenderId: "1029578309176",
    appId: "1:1029578309176:web:4447f633ed6a4d106270cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();