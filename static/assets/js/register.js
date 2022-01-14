var firebaseConfig = {
    apiKey: "AIzaSyBqIaP1Fy6D3ZBjomRiH7_leWbtMECPNPo",
    authDomain: "arqsegredes.firebaseapp.com",
    projectId: "arqsegredes",
    storageBucket: "arqsegredes.appspot.com",
    messagingSenderId: "141153404122",
    appId: "1:141153404122:web:6191eee7a182a82de811e3",
    measurementId: "G-6Y7ML4TV9L"
};

firebase.initializeApp(firebaseConfig);


document.querySelector('.google-register-btn').addEventListener('click', async ()=> {
    register();
});

firebase.auth().onAuthStateChanged( userInfo => {
    console.log(userInfo)
    window.location.href = "login.html";
})

function register() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(function() {
        return firebase.auth()
        .signInWithPopup( provider )
        .then(() => {
            console.log("correcto....");
        })
        .catch(error => {
            console.log(1, error);
        }) 
    })
    .catch(error => {
        console.log(2, error.code);
        console.log(2, error.message);
    }) 
}

function logout(){
    firebase.auth().signOut()
    .then(() => {
        console.log("Sesion cerrada...");
    })
}

export { logout };
