"# Simple-Firebase-Authentication" 
"# Simple-Firebase-Authentication" 
1. visit:  console.firebase.google.com
2. create a new firebase project
3. Visit doc(go to docs): Build->Authentication->Web->Getting started
4. Register web app -> firebase project home -> click web -> give name and  register
5. Install firebase for your project: npm install firebase
6. get firebase config and put it in firebase.init.js
7. export app from firebase.init.js
8. create auth using getAuth from firebase by using app from firebase.init.js
9. create a google auth provider
10. go to firebase -> build -> Authentication -> sign in method
11. Enable google sign in method
12. create a button for google sign method with a click handler
13. inside the event handler, call signInWithPopup with auth, provider
14. after signInWithPopup .then result, error
