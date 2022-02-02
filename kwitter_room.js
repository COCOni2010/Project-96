var firebaseConfig = {
      apiKey: "AIzaSyBxJShysJP3Sioj9GCXzgzRTMUcaNaBByI",
      authDomain: "letschat-d0157.firebaseapp.com",
      databaseURL: "https://letschat-d0157-default-rtdb.firebaseio.com",
      projectId: "letschat-d0157",
      storageBucket: "letschat-d0157.appspot.com",
      messagingSenderId: "553534289283",
      appId: "1:553534289283:web:56f60bde15bbc8a1abb2b6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomname - " + Room_names);
row = "<div class= 'Room_names' id='" + Room_names + "' onclick='redirectToRoomPage(this.id) >#" + Room_names + " </div> <hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      });
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";

}
function redirectToRoomPage(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}