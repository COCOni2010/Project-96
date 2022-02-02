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
//YOUR FIREBASE LINKS

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
}

