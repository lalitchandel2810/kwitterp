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


 user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

function send() 
{ 
    msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({ name:user_name, message:msg, 
          like:0 }); 
    document.getElementById("msg").value = ""; 
}firebase.database()



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML=""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;

    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>"; 
    span_with_tag = "<sapn class='glyphicon glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
 } });  }); }
getData();



function update (message_id)
{
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes);
     firebase.database().ref(room_name).child(message_id).update({
           like : updated_likes
     })
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace = ("kwitter.html");
}
