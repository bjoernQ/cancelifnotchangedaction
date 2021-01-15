let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { getInput, setOutput, info } = require(String.raw`@actions/core`);
const { TextDecoder, TextEncoder } = require(String.raw`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
*/
module.exports.main = function() {
    wasm.main();
};

/**
* The code to exit an action
*/
module.exports.ExitCode = Object.freeze({
/**
* A code indicating that the action was successful.
*/
Success:0,"0":"Success",
/**
* A code indicating that the action was a failure.
*/
Failure:1,"1":"Failure", });
/**
* Interface for cp options.
*/
class CopyOptions {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_copyoptions_free(ptr);
    }
    /**
    * Whether to recursively copy all subdirectories. Defaults to false.
    * @returns {boolean | undefined}
    */
    get recursive() {
        var ret = wasm.__wbg_get_copyoptions_recursive(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * Whether to recursively copy all subdirectories. Defaults to false.
    * @param {boolean | undefined} arg0
    */
    set recursive(arg0) {
        wasm.__wbg_set_copyoptions_recursive(this.ptr, isLikeNone(arg0) ? 0xFFFFFF : arg0 ? 1 : 0);
    }
    /**
    * Whether to overwrite existing files in the destination. Defaults to true.
    * @returns {boolean | undefined}
    */
    get force() {
        var ret = wasm.__wbg_get_copyoptions_force(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * Whether to overwrite existing files in the destination. Defaults to true.
    * @param {boolean | undefined} arg0
    */
    set force(arg0) {
        wasm.__wbg_set_copyoptions_force(this.ptr, isLikeNone(arg0) ? 0xFFFFFF : arg0 ? 1 : 0);
    }
}
module.exports.CopyOptions = CopyOptions;
/**
* Interface for getInput options
*/
class InputOptions {

    static __wrap(ptr) {
        const obj = Object.create(InputOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_inputoptions_free(ptr);
    }
    /**
    * Whether the input is required. If required and not present, will throw. Defaults
    * to false.
    * @returns {boolean | undefined}
    */
    get required() {
        var ret = wasm.__wbg_get_copyoptions_recursive(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * Whether the input is required. If required and not present, will throw. Defaults
    * to false.
    * @param {boolean | undefined} arg0
    */
    set required(arg0) {
        wasm.__wbg_set_copyoptions_recursive(this.ptr, isLikeNone(arg0) ? 0xFFFFFF : arg0 ? 1 : 0);
    }
}
module.exports.InputOptions = InputOptions;
/**
* Interface for mv options.
*/
class MoveOptions {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_moveoptions_free(ptr);
    }
    /**
    * Whether to overwrite existing files in the destination. Defaults to true.
    * @returns {boolean | undefined}
    */
    get force() {
        var ret = wasm.__wbg_get_copyoptions_recursive(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * Whether to overwrite existing files in the destination. Defaults to true.
    * @param {boolean | undefined} arg0
    */
    set force(arg0) {
        wasm.__wbg_set_copyoptions_recursive(this.ptr, isLikeNone(arg0) ? 0xFFFFFF : arg0 ? 1 : 0);
    }
}
module.exports.MoveOptions = MoveOptions;

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbg_getInput_241debccc49191b7 = function(arg0, arg1) {
    var ret = getInput(getObject(arg0), arg1 === 0 ? undefined : InputOptions.__wrap(arg1));
    return addHeapObject(ret);
};

module.exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbg_info_cae407d898b762f5 = function(arg0) {
    info(getObject(arg0));
};

module.exports.__wbg_setOutput_1470ddb69cbbe087 = function(arg0, arg1) {
    setOutput(getObject(arg0), getObject(arg1));
};

module.exports.__wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

module.exports.__wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = require('path').join(__dirname, 'index_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

wasm.__wbindgen_start();

