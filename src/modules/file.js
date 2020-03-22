export const getBase64FromFile = _getBase64FromFile;
export const b64toBlob = _b64toBlob;
export const blobToFile = _blobToFile;
export const b64toFile = _b64toFile;
export const b64EncodeUnicode = _b64EncodeUnicode;
export const b64DecodeUnicode = _b64DecodeUnicode;

export default {
    getBase64FromFile,
    b64toBlob,
    blobToFile,
    b64toFile,
    b64EncodeUnicode,
    b64DecodeUnicode
}

/// implementation /////////

function _getBase64FromFile(file, successCallback, errorCallback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        if(successCallback) successCallback(reader.result);
    };
    reader.onerror = function (error) {
        if(errorCallback) errorCallback(error);
    };
}

function _b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || "";
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

function _blobToFile(blob, fileName, mimeType){
    var file = new File([blob], fileName,{
        type: mimeType,
    });
    return file;
}

function _b64toFile(b64data, mimeType, fileName, sliceSize) {
    var blob = utils.b64toBlob(b64data, mimeType, sliceSize);
    return utils.blobToFile(blob, fileName, mimeType);
};

function _b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

function _b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}