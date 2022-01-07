document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();

  const db = firebase.firestore();

  const myPost = db.collection("entries").doc("s1G11znw5wKjuP2rky9W");

  myPost.get().then((doc) => {
    const data = doc.data();
    document.write(data.content + `<br>`);
    document.write(data.createdOn);
  });
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)

    .then((result) => {
      const user = result.user;
      document.write(`Hello ${user.displayName}!`);
      console.log(user);
    })
    .catch(console.log);
}
