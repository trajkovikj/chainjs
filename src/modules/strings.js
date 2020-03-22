export const replaceAll = _replaceAll;

export default {
    replaceAll
}


function _replaceAll(target, search, replacement) {
    return target.split(search).join(replacement);
}