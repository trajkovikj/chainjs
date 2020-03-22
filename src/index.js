import ChainArrayModule from '@/modules/array/index.js'
import ChainFileModule from '@/modules/file.js'
import ChainObjectModule from '@/modules/object.js'
import ChainStringModule from '@/modules/strings.js'
import ChainUtilsModule from '@/modules/utils.js'

export default {
    ...ChainArrayModule,
    ...ChainFileModule,
    ...ChainObjectModule,
    ...ChainStringModule,
    ...ChainUtilsModule,

    setupArrayPrototypes
}

var global = window || global;
if(global) {
    global.setupArrayPrototypes = setupArrayPrototypes;
}

function setupArrayPrototypes() {
    Array.prototype.chainSelect = Array.prototype.cSelect = Array.prototype.cselect = ChainArrayModule.select;
}


