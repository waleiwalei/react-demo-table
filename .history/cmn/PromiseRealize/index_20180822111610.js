const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class GPromise {
    constructor() {
        this._promiseStatus = PENDING;
        this._promiseValue;
        this.execute(executor);
    }

    execute(executor) {
        if( typeof executor != 'function') {
            throw new Error(`${executor} is not a function`);
        } else {
            try {
                executor( data => {
                    this._promiseStatus = RESOLVED;
                    this._promiseValue = data;
                }, data => {
                    this._promiseStatus = REJECTED;
                    this._promiseValue = data;
                });
            } catch (e) {
                this._promiseStatus = REJECTED;
                this._promiseValue = e;
            }
        }
    }

    then(onFulfilled, onRejected) {
        let _ref, _rej, timer;
        timer = setInterval(() => {
            if((this._promiseStatus == RESOLVED && typeof onFulfilled == 'function') || 
            (this._promiseStatus == RESOLVED && typeof onFulfilled == 'function')) {
                clearInterval(timer);
                try {
                    if(this._promiseStatus == RESOLVED) {
                        _ref = onFulfilled(this._promiseValue);
                    } else if(this._promiseStatus == REJECTED) {
                        _rej = onRejected(this._promiseValue);
                    }

                    if(typeof _ref == GPromise) {
                        timer = setInterval( () => {
                            if(_ref._promiseStatus == RESOLVED) {
                                this._promiseStatus = RESOLVED;
                                this._promiseValue = _ref._promiseValue;
                            } else if(_ref._promiseStatus == REJECTED) {
                                this._promiseStatus = REJECTED;
                                this._promiseValue = _ref._promiseValue;
                            }
                        });
                    }


                } catch(e) {

                }
            }
        });
    } 
}