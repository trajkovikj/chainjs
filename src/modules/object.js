export const inherit = _inherit;
export const deepCopy = _deepCopy;
export const setDeepValue = _setDeepValue;
export const getDeepValue = _getDeepValue;
export const isObjectEmpty = _isObjectEmpty;

export default {
    inherit,
    deepCopy,
    setDeepValue,
    getDeepValue,
    isObjectEmpty
}



function _inherit(object) {
    function F() {}
    F.prototype = o;
    return new F();
};

function _deepCopy(object) {
    return JSON.parse(JSON.stringify(o));
};

function _setDeepValue(object, path, value) {
    var obj = this.deepCopy(object);
    var copy = obj;

    path = path.split('.');
    for (var i = 0; i < path.length - 1; i++)
        obj = obj[path[i]];

    obj[path[i]] = value;

    return copy;
};


function _getDeepValue(object, path) {
    var obj = this.deepCopy(object);

    path = path.split('.');
    for (var i = 0; i < path.length - 1; i++) {
        if(obj[path[i]]) {
            obj = obj[path[i]];
        } else return;
    }
    return obj[path[i]];
};

function _isObjectEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
};