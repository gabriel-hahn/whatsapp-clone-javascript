export default class ClassEvent {

    constructor() {
        this._events = {};
    }

    on(eventName, fn) {
        if (!this._events[eventName]) {
            this._events[eventName] = new Array();
        }

        this._events[eventName].push(fn);
    }

    trigger() {
        let args = [...arguments];
        let eventName = args.shift();

        args.push(new Event(eventName));

        //If already exists
        if (this._events[eventName] instanceof Array) {
            this._events[eventName].forEach(fn => {
                fn.apply(null, args);
            });
        }
    }

}