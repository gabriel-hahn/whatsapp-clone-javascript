const firebase = require('firebase');
require('firebase/firestore');

export default class Firebase {

    constructor() {
        this._config = {
            //Your Firebase config here :)
        };

        this.init();
    }

    // Initialize Firebase
    init() {

        //Global variable
        if (!window._initializedFirebase) {
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            window._initializedFirebase = true;
        }
    }

    initAuth() {
        return new Promise((s, f) => {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result => {
                let token = result.credential.accessToken;
                let user = result.user;
                s({
                    user,
                    token
                });
            }).catch(err => {
                f(err);
            })
        });
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }
}