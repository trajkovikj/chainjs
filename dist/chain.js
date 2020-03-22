/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_array_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/array/index.js */ \"./src/modules/array/index.js\");\n/* harmony import */ var _modules_file_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/file.js */ \"./src/modules/file.js\");\n/* harmony import */ var _modules_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/object.js */ \"./src/modules/object.js\");\n/* harmony import */ var _modules_strings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/strings.js */ \"./src/modules/strings.js\");\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/modules/utils.js */ \"./src/modules/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    ..._modules_array_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    ..._modules_file_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    ..._modules_object_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    ..._modules_strings_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    ..._modules_utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n\r\n    setupArrayPrototypes\r\n});\r\n\r\nvar global = window || global;\r\nif(global) {\r\n    global.setupArrayPrototypes = setupArrayPrototypes;\r\n}\r\n\r\nfunction setupArrayPrototypes() {\r\n    Array.prototype.chainSelect = Array.prototype.cSelect = Array.prototype.cselect = _modules_array_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].select;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/array/array-helper.js":
/*!*******************************************!*\
  !*** ./src/modules/array/array-helper.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    isArray,\r\n    isArrayEmpty,\r\n    getArrayArgument\r\n});\r\n\r\n\r\nfunction isArray(array) {\r\n    return array && array.constructor === Array;\r\n}\r\n\r\nfunction isArrayEmpty(array) {\r\n    if(! isArray(array)) throw \"ChainJS::passed argument is not array!\"\r\n    return array && array.length === 0;\r\n}\r\n\r\nfunction getArrayArgument(array, context) {\r\n    if(array && array.constructor === Array) return array;\r\n    if(context && context.constructor === Array) return context;\r\n\r\n    throw \"ChainJS::you need to supply an array!\";\r\n}\n\n//# sourceURL=webpack:///./src/modules/array/array-helper.js?");

/***/ }),

/***/ "./src/modules/array/index.js":
/*!************************************!*\
  !*** ./src/modules/array/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_array_array_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/array/array-helper.js */ \"./src/modules/array/array-helper.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    select,\r\n    first,\r\n    last,\r\n    where,\r\n    removeFirst,\r\n    removeLast,\r\n    removeDuplicates,\r\n    removeAll,\r\n    indexOf,\r\n    any,\r\n    all,\r\n    count,\r\n    max,\r\n    min,\r\n    sum,\r\n    difference,\r\n    intersect,\r\n    groupByMultipleFlatten,\r\n    groupByMultiple,\r\n    groupBySingle,\r\n    mergeSort,\r\n    binarySearch,\r\n    binarySearchIndexOf,\r\n    buildHash\r\n});\r\n\r\n\r\n\r\nfunction select(func, array) {\r\n    var resultArray = [];\r\n\r\n    var workingArray = _modules_array_array_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getArrayArgument(array, this);\r\n    if(_modules_array_array_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isArrayEmpty(workingArray)) return resultArray;\r\n    \r\n    for (var i = 0; i < workingArray.length; i++) {\r\n        resultArray.push(func(workingArray[i]));\r\n    }\r\n\r\n    return resultArray;\r\n}\r\n\r\nfunction first(array, func) {\r\n    for (var i = 0; i < array.length; i++) {\r\n        if (func(array[i])) return array[i];\r\n    }\r\n}\r\n\r\nfunction last(array, func) {\r\n    for (var i = array.length; i > 0; i--) {\r\n        if (func(array[i])) return array[i];\r\n    }\r\n}\r\n\r\nfunction where(array, func) {\r\n    var resultArray = [];\r\n\r\n    for (var i = 0; i < array.length; i++) {\r\n        if (func(array[i])) resultArray.push(array[i]);\r\n    }\r\n\r\n    return resultArray;\r\n}\r\n\r\nfunction removeFirst(array, func) {\r\n    for (var i = 0; i < array.length; i++) {\r\n        if (func(array[i])) {\r\n            array.splice(i, 1);\r\n            return true;\r\n        }\r\n    }\r\n}\r\n\r\nfunction removeLast(array, func) {\r\n    for (var i = array.length - 1; i >= 0; i--) {\r\n        if (func(array[i])) {\r\n            array.splice(i, 1);\r\n            return true;\r\n        }\r\n    }\r\n}\r\n\r\nfunction removeDuplicates(a) {\r\n    var seen = {};\r\n    var out = [];\r\n    var len = a.length;\r\n    var j = 0;\r\n    for(var i = 0; i < len; i++) {\r\n        var item = a[i];\r\n        if(seen[item] !== 1) {\r\n            seen[item] = 1;\r\n            out[j++] = item;\r\n        }\r\n    }\r\n    return out;\r\n}\r\n\r\nfunction removeAll(array, func) {\r\n    for (var i = array.length - 1; i >= 0; i--) {\r\n        if (func(array[i])) {\r\n            array.splice(i, 1);\r\n        }\r\n    }\r\n}\r\n\r\nfunction indexOf(array, func) {\r\n    for (var i = 0; i < array.length; i++) {\r\n        if (func(array[i])) return i;\r\n    }\r\n    return -1;\r\n}\r\n\r\nfunction any(array, func){\r\n    return this.where(array, func).length > 0;\r\n}\r\n\r\nfunction all(array, func){\r\n    return this.where(array, func).length === array.length;\r\n}\r\n\r\nfunction count(array, func){\r\n    return this.where(array, func).length;\r\n}\r\n\r\nfunction max(array, func) {\r\n    if(!array || array.length === 0) throw \"utils::linq::max:: array undefined or empty\";\r\n    if(array.length === 1) return func(array[0]);\r\n    var max = func(array[0]);\r\n    for(var i=1; i<array.length; i++) {\r\n        if(func(array[i]) > max) max = func(array[i]);\r\n    }\r\n    return max;\r\n}\r\n\r\nfunction min(array, func) {\r\n    if(!array || array.length === 0) return -1;\r\n    if(array.length === 1) return func(array[0]);\r\n    var min = func(array[0]);\r\n    for(var i=1; i<array.length; i++) {\r\n        if(func(array[i]) < min) min = func(array[i]);\r\n    }\r\n    return min;\r\n}\r\n\r\nfunction sum(array, func) {\r\n    if(!array || array.length === 0) throw \"utils::linq::sum:: array undefined or empty\";\r\n    if(array.length === 1) return func(array[0]);\r\n    var sum = func(array[0]);\r\n    for(var i=1; i<array.length; i++) {\r\n        sum = sum + func(array[i]);\r\n    }\r\n    return sum;\r\n}\r\n\r\nfunction difference(array1, array2, funcAr1, funcAr2) {\r\n    var result = [];\r\n\r\n    if(array1.length === 0) return [];\r\n    if(array2.length === 0) return utils.deepCopy(array1);\r\n\r\n    var found = false;\r\n\r\n    for(var i = 0; i < array1.length; i++) {\r\n        found = false;\r\n        for(var j = 0; j < array2.length; j++) {\r\n            if( funcAr1(array1[i]) === funcAr2(array2[j]) ) {\r\n                found = true;\r\n                break;\r\n            }\r\n        }\r\n        if(!found) result.push(array1[i]);\r\n    }\r\n\r\n    return result;\r\n}\r\n\r\nfunction intersect(array1, array2, funcAr1, funcAr2) {\r\n    var result = [];\r\n\r\n    if(array1.length === 0 || array2.length === 0) return [];\r\n\r\n    for(var i = 0; i < array1.length; i++) {\r\n        for(var j = 0; j < array2.length; j++) {\r\n            if( funcAr1(array1[i]) === funcAr2(array2[j]) ) {\r\n                result.push(array1[i]);\r\n            }\r\n        }\r\n    }\r\n\r\n    return result;\r\n}\r\n\r\nfunction groupByMultipleFlatten(array, arrayOfKeys) {\r\n    var group = this.groupByMultiple(array, arrayOfKeys);\r\n    return flattenGroupByObject(group);\r\n}\r\n\r\nfunction groupByMultiple(array, arrayOfKeys) {\r\n    // check if all objects from array have all of the keys from arrayOfKeys\r\n    if(arrayOfKeys.length === 0) return array;\r\n    if(arrayOfKeys.length === 1) return this.groupBySingle(array, arrayOfKeys[0]);\r\n\r\n    var group = this.groupBySingle(array, arrayOfKeys[0]);\r\n    var newList = arrayOfKeys.slice(1, arrayOfKeys.length);\r\n    for (var prop in group) {\r\n        if (group.hasOwnProperty(prop)) {\r\n            group[prop] = this.groupByMultiple(group[prop], newList);\r\n        }\r\n    }\r\n\r\n    return group;\r\n\r\n}\r\n\r\nfunction groupBySingle(array, key) {\r\n    var group = {};\r\n    array.forEach(function (element) {\r\n        if(element.hasOwnProperty(key)) {\r\n            if(group.hasOwnProperty(element[key])) group[element[key]].push(element);\r\n            else {\r\n                group[element[key]] = [];\r\n                group[element[key]].push(element);\r\n            }\r\n        }\r\n    });\r\n    return group;\r\n}\r\n\r\nfunction mergeSort(array, func) {\r\n    if (array.length < 2)\r\n        return array;\r\n\r\n    var middle = parseInt(array.length / 2);\r\n    var left   = array.slice(0, middle);\r\n    var right  = array.slice(middle, array.length);\r\n\r\n    return merge(this.mergeSort(left, func), this.mergeSort(right, func), func);\r\n}\r\n\r\nfunction binarySearch(array, searchedValue, func) {\r\n    var startIndex = 0;\r\n    var stopIndex = array.length - 1;\r\n    var index = (startIndex + stopIndex) >> 1;\r\n\r\n    while(func(array[index]) !== searchedValue && startIndex < stopIndex){\r\n        if (searchedValue < func(array[index])) {\r\n            stopIndex = index - 1;\r\n        } else if (searchedValue > func(array[index])) {\r\n            startIndex = index + 1;\r\n        }\r\n\r\n        index = (startIndex + stopIndex) >> 1;\r\n    }\r\n\r\n    if (func(array[index]) === searchedValue) return array[index];\r\n}\r\n\r\nfunction binarySearchIndexOf(array, searchedValue, func) {\r\n    var startIndex = 0;\r\n    var stopIndex = array.length - 1;\r\n    var index = (startIndex + stopIndex) >> 1;\r\n\r\n    while(func(array[index]) !== searchedValue && startIndex < stopIndex){\r\n        if (searchedValue < func(array[index])) {\r\n            stopIndex = index - 1;\r\n        } else if (searchedValue > func(array[index])) {\r\n            startIndex = index + 1;\r\n        }\r\n\r\n        index = (startIndex + stopIndex) >> 1;\r\n    }\r\n\r\n    if (func(array[index]) === searchedValue) return index;\r\n    else return -1;\r\n}\r\n\r\nfunction buildHash(array, func) {\r\n    var hash = {};\r\n\r\n    array.forEach(function (element) {\r\n        hash[func(element)] = element;\r\n    });\r\n\r\n    return hash;\r\n}\r\n\r\n\r\n\r\n/// helper methods /////////\r\n\r\n\r\nfunction merge(left, right, func) {\r\n    var result = [];\r\n\r\n    while (left.length && right.length) {\r\n        if (func(left[0]) <= func(right[0])) {\r\n            result.push(left.shift());\r\n        } else {\r\n            result.push(right.shift());\r\n        }\r\n    }\r\n\r\n    while (left.length)\r\n        result.push(left.shift());\r\n\r\n    while (right.length)\r\n        result.push(right.shift());\r\n\r\n    return result;\r\n}\r\n\r\nfunction flattenGroupByObject(element) {\r\n    var resultArray = [];\r\n\r\n    function recurse(el) {\r\n        for (var prop in el) {\r\n            if (el.hasOwnProperty(prop)) {\r\n                if(el[prop].constructor === Array) resultArray.push(el[prop]);\r\n                else recurse(el[prop]);\r\n            }\r\n        }\r\n    }\r\n\r\n    recurse(element);\r\n    return resultArray;\r\n}\r\n\r\nfunction flattenGroupByObjectV1(element) {\r\n    if(element.constructor === Array) return element;\r\n\r\n    var resultArray = [];\r\n\r\n    if(typeof element === \"object\") {\r\n        for (var prop in element) {\r\n            if (element.hasOwnProperty(prop)) {\r\n                var temp = flattenGroupByObject(element[prop]);\r\n                if(temp.constructor === Array) {\r\n                    resultArray.push(temp);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    return resultArray;\r\n}\r\n\r\nfunction flattenGroupByObjectV2(element) {\r\n    if(element.constructor === Array) return element;\r\n\r\n    var resultArray = [];\r\n\r\n    if(typeof element === \"object\") {\r\n        for (var prop in element) {\r\n            if (element.hasOwnProperty(prop)) {\r\n                var temp = flattenGroupByObject(element[prop]);\r\n                if(temp.constructor === Array) {\r\n                    temp.forEach(function (el) {\r\n                        resultArray.push(el);\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    return resultArray;\r\n}\r\n\r\nfunction convertGroupToArray(obj) {\r\n    var array = [];\r\n\r\n    for (var prop in obj) {\r\n        if (obj.hasOwnProperty(prop)) {\r\n            array.push(obj[prop]);\r\n        }\r\n    }\r\n\r\n    return array;\r\n}\n\n//# sourceURL=webpack:///./src/modules/array/index.js?");

/***/ }),

/***/ "./src/modules/file.js":
/*!*****************************!*\
  !*** ./src/modules/file.js ***!
  \*****************************/
/*! exports provided: getBase64FromFile, b64toBlob, blobToFile, b64toFile, b64EncodeUnicode, b64DecodeUnicode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBase64FromFile\", function() { return getBase64FromFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b64toBlob\", function() { return b64toBlob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blobToFile\", function() { return blobToFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b64toFile\", function() { return b64toFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b64EncodeUnicode\", function() { return b64EncodeUnicode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b64DecodeUnicode\", function() { return b64DecodeUnicode; });\nconst getBase64FromFile = _getBase64FromFile;\r\nconst b64toBlob = _b64toBlob;\r\nconst blobToFile = _blobToFile;\r\nconst b64toFile = _b64toFile;\r\nconst b64EncodeUnicode = _b64EncodeUnicode;\r\nconst b64DecodeUnicode = _b64DecodeUnicode;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    getBase64FromFile,\r\n    b64toBlob,\r\n    blobToFile,\r\n    b64toFile,\r\n    b64EncodeUnicode,\r\n    b64DecodeUnicode\r\n});\r\n\r\n/// implementation /////////\r\n\r\nfunction _getBase64FromFile(file, successCallback, errorCallback) {\r\n    var reader = new FileReader();\r\n    reader.readAsDataURL(file);\r\n    reader.onload = function () {\r\n        if(successCallback) successCallback(reader.result);\r\n    };\r\n    reader.onerror = function (error) {\r\n        if(errorCallback) errorCallback(error);\r\n    };\r\n}\r\n\r\nfunction _b64toBlob(b64Data, contentType, sliceSize) {\r\n    contentType = contentType || \"\";\r\n    sliceSize = sliceSize || 512;\r\n\r\n    var byteCharacters = atob(b64Data);\r\n    var byteArrays = [];\r\n\r\n    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {\r\n        var slice = byteCharacters.slice(offset, offset + sliceSize);\r\n\r\n        var byteNumbers = new Array(slice.length);\r\n        for (var i = 0; i < slice.length; i++) {\r\n            byteNumbers[i] = slice.charCodeAt(i);\r\n        }\r\n\r\n        var byteArray = new Uint8Array(byteNumbers);\r\n\r\n        byteArrays.push(byteArray);\r\n    }\r\n\r\n    var blob = new Blob(byteArrays, {type: contentType});\r\n    return blob;\r\n}\r\n\r\nfunction _blobToFile(blob, fileName, mimeType){\r\n    var file = new File([blob], fileName,{\r\n        type: mimeType,\r\n    });\r\n    return file;\r\n}\r\n\r\nfunction _b64toFile(b64data, mimeType, fileName, sliceSize) {\r\n    var blob = utils.b64toBlob(b64data, mimeType, sliceSize);\r\n    return utils.blobToFile(blob, fileName, mimeType);\r\n};\r\n\r\nfunction _b64EncodeUnicode(str) {\r\n    // first we use encodeURIComponent to get percent-encoded UTF-8,\r\n    // then we convert the percent encodings into raw bytes which\r\n    // can be fed into btoa.\r\n    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,\r\n        function toSolidBytes(match, p1) {\r\n            return String.fromCharCode('0x' + p1);\r\n        }));\r\n}\r\n\r\nfunction _b64DecodeUnicode(str) {\r\n    // Going backwards: from bytestream, to percent-encoding, to original string.\r\n    return decodeURIComponent(atob(str).split('').map(function(c) {\r\n        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);\r\n    }).join(''));\r\n}\n\n//# sourceURL=webpack:///./src/modules/file.js?");

/***/ }),

/***/ "./src/modules/object.js":
/*!*******************************!*\
  !*** ./src/modules/object.js ***!
  \*******************************/
/*! exports provided: inherit, deepCopy, setDeepValue, getDeepValue, isObjectEmpty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inherit\", function() { return inherit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepCopy\", function() { return deepCopy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDeepValue\", function() { return setDeepValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDeepValue\", function() { return getDeepValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObjectEmpty\", function() { return isObjectEmpty; });\nconst inherit = _inherit;\r\nconst deepCopy = _deepCopy;\r\nconst setDeepValue = _setDeepValue;\r\nconst getDeepValue = _getDeepValue;\r\nconst isObjectEmpty = _isObjectEmpty;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    inherit,\r\n    deepCopy,\r\n    setDeepValue,\r\n    getDeepValue,\r\n    isObjectEmpty\r\n});\r\n\r\n\r\n\r\nfunction _inherit(object) {\r\n    function F() {}\r\n    F.prototype = o;\r\n    return new F();\r\n};\r\n\r\nfunction _deepCopy(object) {\r\n    return JSON.parse(JSON.stringify(o));\r\n};\r\n\r\nfunction _setDeepValue(object, path, value) {\r\n    var obj = this.deepCopy(object);\r\n    var copy = obj;\r\n\r\n    path = path.split('.');\r\n    for (var i = 0; i < path.length - 1; i++)\r\n        obj = obj[path[i]];\r\n\r\n    obj[path[i]] = value;\r\n\r\n    return copy;\r\n};\r\n\r\n\r\nfunction _getDeepValue(object, path) {\r\n    var obj = this.deepCopy(object);\r\n\r\n    path = path.split('.');\r\n    for (var i = 0; i < path.length - 1; i++) {\r\n        if(obj[path[i]]) {\r\n            obj = obj[path[i]];\r\n        } else return;\r\n    }\r\n    return obj[path[i]];\r\n};\r\n\r\nfunction _isObjectEmpty(obj) {\r\n    for (var prop in obj) {\r\n        if (obj.hasOwnProperty(prop))\r\n            return false;\r\n    }\r\n\r\n    return JSON.stringify(obj) === JSON.stringify({});\r\n};\n\n//# sourceURL=webpack:///./src/modules/object.js?");

/***/ }),

/***/ "./src/modules/strings.js":
/*!********************************!*\
  !*** ./src/modules/strings.js ***!
  \********************************/
/*! exports provided: replaceAll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceAll\", function() { return replaceAll; });\nconst replaceAll = _replaceAll;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    replaceAll\r\n});\r\n\r\n\r\nfunction _replaceAll(target, search, replacement) {\r\n    return target.split(search).join(replacement);\r\n}\n\n//# sourceURL=webpack:///./src/modules/strings.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/*! exports provided: uuid, isMobile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uuid\", function() { return uuid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\nconst uuid = _uuid;\r\nconst isMobile = _isMobile;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    uuid,\r\n    isMobile\r\n});\r\n\r\nfunction _uuid() {\r\n    function s4() {\r\n        return Math.floor((1 + Math.random()) * 0x10000)\r\n            .toString(16)\r\n            .substring(1);\r\n    }\r\n\r\n    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();\r\n}\r\n\r\nfunction _isMobile() {\r\n    if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)\r\n        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(navigator.userAgent.substr(0,4))) return true;\r\n\r\n    return false;\r\n}\n\n//# sourceURL=webpack:///./src/modules/utils.js?");

/***/ })

/******/ });