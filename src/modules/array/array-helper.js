export default {
    isArray,
    isArrayEmpty,
    getArrayArgument
}


function isArray(array) {
    return array && array.constructor === Array;
}

function isArrayEmpty(array) {
    if(! isArray(array)) throw "ChainJS::passed argument is not array!"
    return array && array.length === 0;
}

function getArrayArgument(array, context) {
    if(array && array.constructor === Array) return array;
    if(context && context.constructor === Array) return context;

    throw "ChainJS::you need to supply an array!";
}