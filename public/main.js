// Each firebase document is effectively a day
// A document's collections are individual entries
// const app = firebase.app;
// const db = firebase.firestore();

const entriesRef = firebase.database().ref("entries/");

document.addEventListener("DOMContentLoaded", (event) => {
  // TODO: replace with myEntries = db.entries (get all of the entries as a single collection)
  // const myPost = db.collection("entries").doc("s1G11znw5wKjuP2rky9W");
  // TODO: create an input div for today, input disabled unless user is logged in
  // TODO: replace with iteration through the collection's entries
  // TODO: and creating a row of div(s) for each collection/day
  // myPost.get().then((doc) => {
  //   const data = doc.data();
  //   document.querySelector("#entry").innerHTML =
  //     data.content + `<br>` + Date(data.createdOn);
  // });
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)

    .then((result) => {
      const user = result.user;
      // TODO: update the display to show the user's displayName
      // TODO: enable today's input div
      // document.write(`Hello ${user.displayName}!`);
      console.log(user);
      document.getElementById("username").innerHTML = user.displayName;
    })
    .catch(console.log);
}

function updatePost(e) {
  // check to see if an entry exists for this day
  // if so, append this collection to that document
  // if not, create a new document with this as its first collection
  // const myPost = db.collection("entries").doc("s1G11znw5wKjuP2rky9W");
  entriesRef.push({
    timestamp: Date.now(),
    entry: document.getElementById("newEntry").value,
  });
  // entriesRef.set ({
  //   first: {
  //     entry: document.getElementById("newEntry").value
  //   }
  // });
  // myPost.update({ content: document.getElementById("newEntry").value });
}

// TODO: function to create entries for a day/collection
// iterate through the elements in the collection
// create a div for each element
// fill div with entry and signed by user.displayName
