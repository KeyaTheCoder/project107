//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwJqNloYPnhMjDnwBrE3akYWDh61sfvGA",
    authDomain: "let-schatwebbapp.firebaseapp.com",
    databaseURL: "https://let-schatwebbapp-default-rtdb.firebaseio.com",
    projectId: "let-schatwebbapp",
    storageBucket: "let-schatwebbapp.appspot.com",
    messagingSenderId: "262828347203",
    appId: "1:262828347203:web:d367ddac68bde7a84269f6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("user_name");
  roomname=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning'id="+firebase_message_id+"value="+like+" onclick = 'updateLike(this.id)'>Likes :"+ like +"</button>";

row = name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value ="";
}





function updateLike(message_id)
{
 console.log("clocked on like button - " + message_id);
 button_id =message_id;
 likes = document.getElementById(button_id).value;
 updated_likes = Number(likes) + 1;
 console.log(updated_likes);

 firebase.database().ref(room_name).child(message_id).update({
       like : updated_likes
 });
}

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}
