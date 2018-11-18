import Firebase from './Firebase';

export default class Upload {
    constructor() {

    }

    static send(file, from) {
        return new Promise((s, f) => {
            let uploadTask = Firebase.hd().ref(from).child(Date.now() + '_' + file.name).put(file);
            uploadTask.on('state_changed', e => {
                //console.info('Upload', e);
            }, err => {
                f(err);
            }, () => {
                s(uploadTask);
            });
        });
    }
}
