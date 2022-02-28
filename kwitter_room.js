var firebaseConfig = {
   apiKey: "AIzaSyBk1lIkC5L9tXyIs6Fzrm6116OnrfVjOD8",
   authDomain: "juhi-dayal.firebaseapp.com",
   databaseURL: "https://juhi-dayal-default-rtdb.firebaseio.com",
   projectId: "juhi-dayal",
   storageBucket: "juhi-dayal.appspot.com",
   messagingSenderId: "184330242312",
   appId: "1:184330242312:web:ce052d2692293168ff44bd",
   measurementId: "G-834730K0H4"
 };
firebase.initializeApp(firebaseConfig);




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}   


function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "kwitter.html"
}