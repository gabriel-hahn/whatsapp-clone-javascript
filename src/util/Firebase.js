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
        if (!this._initialized) {
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            this._initialized = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }
}