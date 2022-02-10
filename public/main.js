document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();

  const db = firebase.firestore();

  const myPost = db.collection("entries").doc("s1G11znw5wKjuP2rky9W");

  myPost.get().then((doc) => {
    const data = doc.data();

    document.querySelector("#entry").innerHTML =
      data.content + `<br>` + Date(data.createdOn);
  });
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)

    .then((result) => {
      const user = result.user;
      // document.write(`Hello ${user.displayName}!`);
      console.log(user);
      document.getElementById("username").innerHTML = user.displayName;
    })
    .catch(console.log);
}

function updatePost(e) {
  // check to see if an entry exists for this day
  // if so, append this to that entry
  // if not, create a new document with this as its first collection
  const db = firebase.firestore();
  const myPost = db.collection("entries").doc("s1G11znw5wKjuP2rky9W");
  myPost.update({ content: document.getElementById("newEntry").value });
}
