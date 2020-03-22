import ArrayHelper from "@/modules/array/array-helper.js"


export default {
    select,
    first,
    last,
    where,
    removeFirst,
    removeLast,
    removeDuplicates,
    removeAll,
    indexOf,
    any,
    all,
    count,
    max,
    min,
    sum,
    difference,
    intersect,
    groupByMultipleFlatten,
    groupByMultiple,
    groupBySingle,
    mergeSort,
    binarySearch,
    binarySearchIndexOf,
    buildHash
}



function select(func, array) {
    var resultArray = [];

    var workingArray = ArrayHelper.getArrayArgument(array, this);
    if(ArrayHelper.isArrayEmpty(workingArray)) return resultArray;
    
    for (var i = 0; i < workingArray.length; i++) {
        resultArray.push(func(workingArray[i]));
    }

    return resultArray;
}

function first(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) return array[i];
    }
}

function last(array, func) {
    for (var i = array.length; i > 0; i--) {
        if (func(array[i])) return array[i];
    }
}

function where(array, func) {
    var resultArray = [];

    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) resultArray.push(array[i]);
    }

    return resultArray;
}

function removeFirst(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) {
            array.splice(i, 1);
            return true;
        }
    }
}

function removeLast(array, func) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (func(array[i])) {
            array.splice(i, 1);
            return true;
        }
    }
}

function removeDuplicates(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
        var item = a[i];
        if(seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}

function removeAll(array, func) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (func(array[i])) {
            array.splice(i, 1);
        }
    }
}

function indexOf(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) return i;
    }
    return -1;
}

function any(array, func){
    return this.where(array, func).length > 0;
}

function all(array, func){
    return this.where(array, func).length === array.length;
}

function count(array, func){
    return this.where(array, func).length;
}

function max(array, func) {
    if(!array || array.length === 0) throw "utils::linq::max:: array undefined or empty";
    if(array.length === 1) return func(array[0]);
    var max = func(array[0]);
    for(var i=1; i<array.length; i++) {
        if(func(array[i]) > max) max = func(array[i]);
    }
    return max;
}

function min(array, func) {
    if(!array || array.length === 0) return -1;
    if(array.length === 1) return func(array[0]);
    var min = func(array[0]);
    for(var i=1; i<array.length; i++) {
        if(func(array[i]) < min) min = func(array[i]);
    }
    return min;
}

function sum(array, func) {
    if(!array || array.length === 0) throw "utils::linq::sum:: array undefined or empty";
    if(array.length === 1) return func(array[0]);
    var sum = func(array[0]);
    for(var i=1; i<array.length; i++) {
        sum = sum + func(array[i]);
    }
    return sum;
}

function difference(array1, array2, funcAr1, funcAr2) {
    var result = [];

    if(array1.length === 0) return [];
    if(array2.length === 0) return utils.deepCopy(array1);

    var found = false;

    for(var i = 0; i < array1.length; i++) {
        found = false;
        for(var j = 0; j < array2.length; j++) {
            if( funcAr1(array1[i]) === funcAr2(array2[j]) ) {
                found = true;
                break;
            }
        }
        if(!found) result.push(array1[i]);
    }

    return result;
}

function intersect(array1, array2, funcAr1, funcAr2) {
    var result = [];

    if(array1.length === 0 || array2.length === 0) return [];

    for(var i = 0; i < array1.length; i++) {
        for(var j = 0; j < array2.length; j++) {
            if( funcAr1(array1[i]) === funcAr2(array2[j]) ) {
                result.push(array1[i]);
            }
        }
    }

    return result;
}

function groupByMultipleFlatten(array, arrayOfKeys) {
    var group = this.groupByMultiple(array, arrayOfKeys);
    return flattenGroupByObject(group);
}

function groupByMultiple(array, arrayOfKeys) {
    // check if all objects from array have all of the keys from arrayOfKeys
    if(arrayOfKeys.length === 0) return array;
    if(arrayOfKeys.length === 1) return this.groupBySingle(array, arrayOfKeys[0]);

    var group = this.groupBySingle(array, arrayOfKeys[0]);
    var newList = arrayOfKeys.slice(1, arrayOfKeys.length);
    for (var prop in group) {
        if (group.hasOwnProperty(prop)) {
            group[prop] = this.groupByMultiple(group[prop], newList);
        }
    }

    return group;

}

function groupBySingle(array, key) {
    var group = {};
    array.forEach(function (element) {
        if(element.hasOwnProperty(key)) {
            if(group.hasOwnProperty(element[key])) group[element[key]].push(element);
            else {
                group[element[key]] = [];
                group[element[key]].push(element);
            }
        }
    });
    return group;
}

function mergeSort(array, func) {
    if (array.length < 2)
        return array;

    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);

    return merge(this.mergeSort(left, func), this.mergeSort(right, func), func);
}

function binarySearch(array, searchedValue, func) {
    var startIndex = 0;
    var stopIndex = array.length - 1;
    var index = (startIndex + stopIndex) >> 1;

    while(func(array[index]) !== searchedValue && startIndex < stopIndex){
        if (searchedValue < func(array[index])) {
            stopIndex = index - 1;
        } else if (searchedValue > func(array[index])) {
            startIndex = index + 1;
        }

        index = (startIndex + stopIndex) >> 1;
    }

    if (func(array[index]) === searchedValue) return array[index];
}

function binarySearchIndexOf(array, searchedValue, func) {
    var startIndex = 0;
    var stopIndex = array.length - 1;
    var index = (startIndex + stopIndex) >> 1;

    while(func(array[index]) !== searchedValue && startIndex < stopIndex){
        if (searchedValue < func(array[index])) {
            stopIndex = index - 1;
        } else if (searchedValue > func(array[index])) {
            startIndex = index + 1;
        }

        index = (startIndex + stopIndex) >> 1;
    }

    if (func(array[index]) === searchedValue) return index;
    else return -1;
}

function buildHash(array, func) {
    var hash = {};

    array.forEach(function (element) {
        hash[func(element)] = element;
    });

    return hash;
}



/// helper methods /////////


function merge(left, right, func) {
    var result = [];

    while (left.length && right.length) {
        if (func(left[0]) <= func(right[0])) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

function flattenGroupByObject(element) {
    var resultArray = [];

    function recurse(el) {
        for (var prop in el) {
            if (el.hasOwnProperty(prop)) {
                if(el[prop].constructor === Array) resultArray.push(el[prop]);
                else recurse(el[prop]);
            }
        }
    }

    recurse(element);
    return resultArray;
}

function flattenGroupByObjectV1(element) {
    if(element.constructor === Array) return element;

    var resultArray = [];

    if(typeof element === "object") {
        for (var prop in element) {
            if (element.hasOwnProperty(prop)) {
                var temp = flattenGroupByObject(element[prop]);
                if(temp.constructor === Array) {
                    resultArray.push(temp);
                }
            }
        }
    }

    return resultArray;
}

function flattenGroupByObjectV2(element) {
    if(element.constructor === Array) return element;

    var resultArray = [];

    if(typeof element === "object") {
        for (var prop in element) {
            if (element.hasOwnProperty(prop)) {
                var temp = flattenGroupByObject(element[prop]);
                if(temp.constructor === Array) {
                    temp.forEach(function (el) {
                        resultArray.push(el);
                    });
                }
            }
        }
    }

    return resultArray;
}

function convertGroupToArray(obj) {
    var array = [];

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            array.push(obj[prop]);
        }
    }

    return array;
}