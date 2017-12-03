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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractMatrix__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matrix__ = __webpack_require__(9);



class BaseView extends Object(__WEBPACK_IMPORTED_MODULE_0__abstractMatrix__["a" /* default */])() {
    constructor(matrix, rows, columns) {
        super();
        this.matrix = matrix;
        this.rows = rows;
        this.columns = columns;
    }

    static get [Symbol.species]() {
        return __WEBPACK_IMPORTED_MODULE_1__matrix__["a" /* default */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseView;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return define; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyper", function() { return hyper; });
/* harmony export (immutable) */ __webpack_exports__["default"] = hyper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Megatron_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Intent_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hyper_render_js__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wire", function() { return __WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["b"]; });
/*! (c) Andrea Giammarchi (ISC) */







// all functions are self bound to the right context
// you can do the following
// const {bind, wire} = hyperHTML;
// and use them right away: bind(node)`hello!`;
const bind = context => __WEBPACK_IMPORTED_MODULE_4__hyper_render_js__["a" /* default */].bind(context);
const define = __WEBPACK_IMPORTED_MODULE_2__objects_Intent_js__["a" /* default */].define;

hyper.Component = __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__["a" /* default */];
hyper.bind = bind;
hyper.define = define;
hyper.hyper = hyper;
hyper.wire = __WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["b" /* default */];

// it is possible to define a different engine
// to resolve nodes diffing.
// The engine must provide an update method
// capable of mutating liveNodes collection
// and the related DOM.
// See hyperhtml-majinbuu to know more
Object.defineProperty(hyper, 'engine', {
  get: function get() {
    return __WEBPACK_IMPORTED_MODULE_0__classes_Megatron_js__["a" /* default */].engine;
  },
  set: function set(engine) {
    __WEBPACK_IMPORTED_MODULE_0__classes_Megatron_js__["a" /* default */].engine = engine;
  }
});

// the wire content is the lazy defined
// html or svg property of each hyper.Component
Object(__WEBPACK_IMPORTED_MODULE_1__classes_Component_js__["b" /* setup */])(__WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["a" /* content */]);

// everything is exported directly or through the
// hyperHTML callback, when used as top level script


// by default, hyperHTML is a smart function
// that "magically" understands what's the best
// thing to do with passed arguments
function hyper(HTML) {
  return arguments.length < 2 ?
    (HTML == null ?
      Object(__WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["a" /* content */])('html') :
      (typeof HTML === 'string' ?
        Object(__WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["b" /* default */])(null, HTML) :
        ('raw' in HTML ?
          Object(__WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["a" /* content */])('html')(HTML) :
          ('nodeType' in HTML ?
            __WEBPACK_IMPORTED_MODULE_4__hyper_render_js__["a" /* default */].bind(HTML) :
            Object(__WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["c" /* weakly */])(HTML, 'html')
          )
        )
      )) :
    ('raw' in HTML ?
      Object(__WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["a" /* content */])('html') : __WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__["b" /* default */]
    ).apply(null, arguments);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(58);
const inputReducer_1 = __webpack_require__(74);
const outputReducer_1 = __webpack_require__(76);
const reducer = redux_1.combineReducers({
    input: inputReducer_1.inputReducer,
    output: outputReducer_1.outputReducer
});
exports.appStore = redux_1.createStore(reducer, 
// @ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return __WEBPACK_IMPORTED_MODULE_0__matrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstractMatrix__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "abstractMatrix", function() { return __WEBPACK_IMPORTED_MODULE_1__abstractMatrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wrap_wrap__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return __WEBPACK_IMPORTED_MODULE_2__wrap_wrap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wrap_WrapperMatrix2D__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix2D", function() { return __WEBPACK_IMPORTED_MODULE_3__wrap_WrapperMatrix2D__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wrap_WrapperMatrix1D__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix1D", function() { return __WEBPACK_IMPORTED_MODULE_4__wrap_WrapperMatrix1D__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__decompositions__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return __WEBPACK_IMPORTED_MODULE_5__decompositions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return __WEBPACK_IMPORTED_MODULE_5__decompositions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SingularValueDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SVD", function() { return __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EigenvalueDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EVD", function() { return __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CholeskyDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CHO", function() { return __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LuDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LU", function() { return __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dc_qr_js__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QrDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_10__dc_qr_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QR", function() { return __WEBPACK_IMPORTED_MODULE_10__dc_qr_js__["a"]; });















/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const global = document.defaultView;
/* harmony export (immutable) */ __webpack_exports__["l"] = global;


// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
const ELEMENT_NODE = 1;
/* harmony export (immutable) */ __webpack_exports__["e"] = ELEMENT_NODE;

const ATTRIBUTE_NODE = 2;
/* unused harmony export ATTRIBUTE_NODE */

const TEXT_NODE = 3;
/* harmony export (immutable) */ __webpack_exports__["i"] = TEXT_NODE;

const COMMENT_NODE = 8;
/* harmony export (immutable) */ __webpack_exports__["a"] = COMMENT_NODE;

const DOCUMENT_FRAGMENT_NODE = 11;
/* harmony export (immutable) */ __webpack_exports__["d"] = DOCUMENT_FRAGMENT_NODE;


// SVG related constants
const OWNER_SVG_ELEMENT = 'ownerSVGElement';
/* harmony export (immutable) */ __webpack_exports__["f"] = OWNER_SVG_ELEMENT;

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
/* harmony export (immutable) */ __webpack_exports__["h"] = SVG_NAMESPACE;


// Custom Elements / MutationObserver constants
const CONNECTED = 'connected';
/* harmony export (immutable) */ __webpack_exports__["b"] = CONNECTED;

const DISCONNECTED = 'dis' + CONNECTED;
/* harmony export (immutable) */ __webpack_exports__["c"] = DISCONNECTED;


// hyperHTML related constants
const EXPANDO = '_hyper: ';
/* unused harmony export EXPANDO */

const SHOULD_USE_TEXT_CONTENT = /^style|textarea$/i;
/* harmony export (immutable) */ __webpack_exports__["g"] = SHOULD_USE_TEXT_CONTENT;

const UID = EXPANDO + ((Math.random() * new Date) | 0) + ';';
/* harmony export (immutable) */ __webpack_exports__["j"] = UID;

const UIDC = '<!--' + UID + '-->';
/* harmony export (immutable) */ __webpack_exports__["k"] = UIDC;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = checkRowIndex;
/* harmony export (immutable) */ __webpack_exports__["a"] = checkColumnIndex;
/* harmony export (immutable) */ __webpack_exports__["h"] = checkRowVector;
/* harmony export (immutable) */ __webpack_exports__["c"] = checkColumnVector;
/* harmony export (immutable) */ __webpack_exports__["d"] = checkIndices;
/* harmony export (immutable) */ __webpack_exports__["g"] = checkRowIndices;
/* harmony export (immutable) */ __webpack_exports__["b"] = checkColumnIndices;
/* harmony export (immutable) */ __webpack_exports__["e"] = checkRange;
/* unused harmony export getRange */
/* harmony export (immutable) */ __webpack_exports__["k"] = sumByRow;
/* harmony export (immutable) */ __webpack_exports__["j"] = sumByColumn;
/* harmony export (immutable) */ __webpack_exports__["i"] = sumAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix__ = __webpack_require__(9);


/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkRowIndex(matrix, index, outer) {
    var max = outer ? matrix.rows : matrix.rows - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Row index out of range');
    }
}

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkColumnIndex(matrix, index, outer) {
    var max = outer ? matrix.columns : matrix.columns - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Column index out of range');
    }
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkRowVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.columns) {
        throw new RangeError('vector size must be the same as the number of columns');
    }
    return vector;
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkColumnVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.rows) {
        throw new RangeError('vector size must be the same as the number of rows');
    }
    return vector;
}

function checkIndices(matrix, rowIndices, columnIndices) {
    return {
        row: checkRowIndices(matrix, rowIndices),
        column: checkColumnIndices(matrix, columnIndices)
    };
}

function checkRowIndices(matrix, rowIndices) {
    if (typeof rowIndices !== 'object') {
        throw new TypeError('unexpected type for row indices');
    }

    var rowOut = rowIndices.some(r => {
        return r < 0 || r >= matrix.rows;

    });

    if (rowOut) {
        throw new RangeError('row indices are out of range');
    }

    if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);

    return rowIndices;
}

function checkColumnIndices(matrix, columnIndices) {
    if (typeof columnIndices !== 'object') {
        throw new TypeError('unexpected type for column indices');
    }

    var columnOut = columnIndices.some(c => {
        return c < 0 || c >= matrix.columns;
    });

    if (columnOut) {
        throw new RangeError('column indices are out of range');
    }
    if (!Array.isArray(columnIndices)) columnIndices = Array.from(columnIndices);

    return columnIndices;
}

function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
    if (arguments.length !== 5) throw new TypeError('Invalid argument type');
    var notAllNumbers = Array.from(arguments).slice(1).some(function (arg) {
        return typeof arg !== 'number';
    });
    if (notAllNumbers) throw new TypeError('Invalid argument type');
    if (startRow > endRow || startColumn > endColumn || startRow < 0 || startRow >= matrix.rows || endRow < 0 || endRow >= matrix.rows || startColumn < 0 || startColumn >= matrix.columns || endColumn < 0 || endColumn >= matrix.columns) {
        throw new RangeError('Submatrix indices are out of range');
    }
}

function getRange(from, to) {
    var arr = new Array(to - from + 1);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = from + i;
    }
    return arr;
}

function sumByRow(matrix) {
    var sum = __WEBPACK_IMPORTED_MODULE_0__matrix__["a" /* default */].zeros(matrix.rows, 1);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(i, 0, sum.get(i, 0) + matrix.get(i, j));
        }
    }
    return sum;
}

function sumByColumn(matrix) {
    var sum = __WEBPACK_IMPORTED_MODULE_0__matrix__["a" /* default */].zeros(1, matrix.columns);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(0, j, sum.get(0, j) + matrix.get(i, j));
        }
    }
    return sum;
}

function sumAll(matrix) {
    var v = 0;
    for (var i = 0; i < matrix.rows; i++) {
        for (var j = 0; j < matrix.columns; j++) {
            v += matrix.get(i, j);
        }
    }
    return v;
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return splice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return unshift; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_detection_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__easy_dom_js__ = __webpack_require__(7);






// appends an array of nodes
// to a generic node/fragment
// When available, uses append passing all arguments at once
// hoping that's somehow faster, even if append has more checks on type
const append = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["a" /* hasAppend */] ?
  (node, childNodes) => {
    node.append.apply(node, childNodes);
  } :
  (node, childNodes) => {
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      node.appendChild(childNodes[i]);
    }
  };
/* harmony export (immutable) */ __webpack_exports__["a"] = append;


// remove comments parts from attributes to avoid issues
// with either old browsers or SVG elements
// export const cleanAttributes = html => html.replace(no, comments);
const attrName = '[^\\S]+[^ \\f\\n\\r\\t\\/>"\'=]+';
const no = new RegExp(
  '(<[a-z]+[a-z0-9:_-]*)((?:' +
    attrName +
  '(?:=(?:\'.*?\'|".*?"|<.+?>|\\S+))?)+)([^\\S]*/?>)',
  'gi'
);
const findAttributes = new RegExp('(' + attrName + '=)([\'"]?)' + __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* UIDC */] + '\\2', 'gi');
const comments = ($0, $1, $2, $3) =>
  $1 + $2.replace(findAttributes, replaceAttributes) + $3;
const replaceAttributes = ($0, $1, $2) => $1 + ($2 || '"') + __WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* UID */] + ($2 || '"');

// given a node and a generic HTML content,
// create either an SVG or an HTML fragment
// where such content will be injected
const createFragment = (node, html) =>
  (__WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* OWNER_SVG_ELEMENT */] in node ?
    SVGFragment :
    HTMLFragment
  )(node, html.replace(no, comments));
/* harmony export (immutable) */ __webpack_exports__["b"] = createFragment;


// IE/Edge shenanigans proof cloneNode
// it goes through all nodes manually
// instead of relying the engine to suddenly
// merge nodes together
const cloneNode = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["c" /* hasDoomedCloneNode */] ?
  node => {
    const clone = node.cloneNode();
    const childNodes = node.childNodes ||
                      // this is an excess of caution
                      // but some node, in IE, might not
                      // have childNodes property.
                      // The following fallback ensure working code
                      // in older IE without compromising performance
                      // or any other browser/engine involved.
                      /* istanbul ignore next */
                      [];
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      clone.appendChild(cloneNode(childNodes[i]));
    }
    return clone;
  } :
  // the following ignore is due code-coverage
  // combination of not having document.importNode
  // but having a working node.cloneNode.
  // This shenario is common on older Android/WebKit browsers
  // but basicHTML here tests just two major cases:
  // with document.importNode or with broken cloneNode.
  /* istanbul ignore next */
  node => node.cloneNode(true);

// used to import html into fragments
const importNode = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["d" /* hasImportNode */] ?
  (doc, node) => doc.importNode(node, true) :
  (doc, node) => cloneNode(node)
/* harmony export (immutable) */ __webpack_exports__["c"] = importNode;


// just recycling a one-off array to use slice/splice
// in every needed place
const {push, slice, splice, unshift} = [];


// lazy evaluated, returns the unique identity
// of a template literal, as tempalte literal itself.
// By default, ES2015 template literals are unique
// tag`a${1}z` === tag`a${2}z`
// even if interpolated values are different
// the template chunks are in a frozen Array
// that is identical each time you use the same
// literal to represent same static content
// around its own interpolations.
const unique = template => TL(template);
/* harmony export (immutable) */ __webpack_exports__["g"] = unique;


// TL returns a unique version of the template
// it needs lazy feature detection
// (cannot trust literals with transpiled code)
let TL = template => {
  if (
    // TypeScript template literals are not standard
    template.propertyIsEnumerable('raw') ||
    (
      // Firefox < 55 has not standard implementation neither
      /Firefox\/(\d+)/.test((__WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* global */].navigator || {}).userAgent) &&
      parseFloat(RegExp.$1) < 55
    )
  ) {
    // in these cases, address templates once
    const templateObjects = {};
    // but always return the same template
    TL = template => {
      const key = '_' + template.join(__WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* UID */]);
      return templateObjects[key] || (
        templateObjects[key] = template
      );
    };
  }
  else {
    // make TL an identity like function
    TL = template => template;
  }
  return TL(template);
};

// create document fragments via native template
// with a fallback for browsers that won't be able
// to deal with some injected element such <td> or others
const HTMLFragment = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["b" /* hasContent */] ?
  (node, html) => {
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["a" /* create */])(node, 'template');
    container.innerHTML = html;
    return container.content;
  } :
  (node, html) => {
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["a" /* create */])(node, 'template');
    const content = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["c" /* fragment */])(node);
    if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
      const selector = RegExp.$1;
      container.innerHTML = '<table>' + html + '</table>';
      append(content, slice.call(container.querySelectorAll(selector)));
    } else {
      container.innerHTML = html;
      append(content, slice.call(container.childNodes));
    }
    return content;
  };

// creates SVG fragment with a fallback for IE that needs SVG
// within the HTML content
const SVGFragment = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["b" /* hasContent */] ?
  (node, html) => {
    const content = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["c" /* fragment */])(node);
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["b" /* doc */])(node).createElementNS(__WEBPACK_IMPORTED_MODULE_0__constants_js__["h" /* SVG_NAMESPACE */], 'svg');
    container.innerHTML = html;
    append(content, slice.call(container.childNodes));
    return content;
  } :
  (node, html) => {
    const content = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["c" /* fragment */])(node);
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["a" /* create */])(node, 'div');
    container.innerHTML = '<svg xmlns="' + __WEBPACK_IMPORTED_MODULE_0__constants_js__["h" /* SVG_NAMESPACE */] + '">' + html + '</svg>';
    append(content, slice.call(container.firstChild.childNodes));
    return content;
  };


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// these are tiny helpers to simplify most common operations needed here
const create = (node, type) => doc(node).createElement(type);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;

const doc = node => node.ownerDocument || node;
/* harmony export (immutable) */ __webpack_exports__["b"] = doc;

const fragment = node => doc(node).createDocumentFragment();
/* harmony export (immutable) */ __webpack_exports__["c"] = fragment;

const text = (node, text) => doc(node).createTextNode(text);
/* harmony export (immutable) */ __webpack_exports__["d"] = text;



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const appStore_1 = __webpack_require__(2);
const HyperComponent_1 = __webpack_require__(16);
class HyperContainer extends HyperComponent_1.HyperComponent {
    constructor() {
        super();
        this.onStateUpdate(true);
    }
    onconnected() {
        this.subscribeToStore();
    }
    ondisconnected() {
        this.unsubscribeFromStore();
    }
    subscribeToStore() {
        this.storeUnsubscribeCallback = appStore_1.appStore.subscribe(this.onStateUpdate.bind(this));
    }
    unsubscribeFromStore() {
        if (this.storeUnsubscribeCallback) {
            this.storeUnsubscribeCallback();
        }
    }
    onStateUpdate(ignoreRender = false) {
        const newContainerState = this.mapAppStateToContainerState(appStore_1.appStore.getState());
        const renderNeeded = this.patchState(newContainerState);
        if (renderNeeded && !ignoreRender) {
            this.render();
        }
    }
    patchState(newState) {
        let renderNeeded = false;
        for (const key of Object.keys(newState)) {
            const previousValue = this.state[key];
            const newValue = newState[key];
            if (previousValue === newValue) {
                continue;
            }
            this.state[key] = newValue;
            renderNeeded = true;
        }
        return renderNeeded;
    }
}
exports.HyperContainer = HyperContainer;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbol_species__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbol_species___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__symbol_species__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstractMatrix__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(5);




class Matrix extends Object(__WEBPACK_IMPORTED_MODULE_1__abstractMatrix__["a" /* default */])(Array) {
    constructor(nRows, nColumns) {
        var i;
        if (arguments.length === 1 && typeof nRows === 'number') {
            return new Array(nRows);
        }
        if (Matrix.isMatrix(nRows)) {
            return nRows.clone();
        } else if (Number.isInteger(nRows) && nRows > 0) { // Create an empty matrix
            super(nRows);
            if (Number.isInteger(nColumns) && nColumns > 0) {
                for (i = 0; i < nRows; i++) {
                    this[i] = new Array(nColumns);
                }
            } else {
                throw new TypeError('nColumns must be a positive integer');
            }
        } else if (Array.isArray(nRows)) { // Copy the values from the 2D array
            const matrix = nRows;
            nRows = matrix.length;
            nColumns = matrix[0].length;
            if (typeof nColumns !== 'number' || nColumns === 0) {
                throw new TypeError('Data must be a 2D array with at least one element');
            }
            super(nRows);
            for (i = 0; i < nRows; i++) {
                if (matrix[i].length !== nColumns) {
                    throw new RangeError('Inconsistent array dimensions');
                }
                this[i] = [].concat(matrix[i]);
            }
        } else {
            throw new TypeError('First argument must be a positive number or an array');
        }
        this.rows = nRows;
        this.columns = nColumns;
        return this;
    }

    set(rowIndex, columnIndex, value) {
        this[rowIndex][columnIndex] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        return this[rowIndex][columnIndex];
    }

    /**
     * Removes a row from the given index
     * @param {number} index - Row index
     * @return {Matrix} this
     */
    removeRow(index) {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["f" /* checkRowIndex */])(this, index);
        if (this.rows === 1) {
            throw new RangeError('A matrix cannot have less than one row');
        }
        this.splice(index, 1);
        this.rows -= 1;
        return this;
    }

    /**
     * Adds a row at the given index
     * @param {number} [index = this.rows] - Row index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addRow(index, array) {
        if (array === undefined) {
            array = index;
            index = this.rows;
        }
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["f" /* checkRowIndex */])(this, index, true);
        array = Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* checkRowVector */])(this, array, true);
        this.splice(index, 0, array);
        this.rows += 1;
        return this;
    }

    /**
     * Removes a column from the given index
     * @param {number} index - Column index
     * @return {Matrix} this
     */
    removeColumn(index) {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* checkColumnIndex */])(this, index);
        if (this.columns === 1) {
            throw new RangeError('A matrix cannot have less than one column');
        }
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 1);
        }
        this.columns -= 1;
        return this;
    }

    /**
     * Adds a column at the given index
     * @param {number} [index = this.columns] - Column index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addColumn(index, array) {
        if (typeof array === 'undefined') {
            array = index;
            index = this.columns;
        }
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* checkColumnIndex */])(this, index, true);
        array = Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* checkColumnVector */])(this, array);
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 0, array[i]);
        }
        this.columns += 1;
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Matrix;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AbstractMatrix;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dc_lu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dc_svd__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ml_array_rescale__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_transpose__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_row__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_sub__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_selection__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_rowSelection__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_columnSelection__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_column__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_flipRow__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_flipColumn__ = __webpack_require__(106);














function AbstractMatrix(superCtor) {
    if (superCtor === undefined) superCtor = Object;

    /**
     * Real matrix
     * @class Matrix
     * @param {number|Array|Matrix} nRows - Number of rows of the new matrix,
     * 2D array containing the data or Matrix instance to clone
     * @param {number} [nColumns] - Number of columns of the new matrix
     */
    class Matrix extends superCtor {
        static get [Symbol.species]() {
            return this;
        }

        /**
         * Constructs a Matrix with the chosen dimensions from a 1D array
         * @param {number} newRows - Number of rows
         * @param {number} newColumns - Number of columns
         * @param {Array} newData - A 1D array containing data for the matrix
         * @return {Matrix} - The new matrix
         */
        static from1DArray(newRows, newColumns, newData) {
            var length = newRows * newColumns;
            if (length !== newData.length) {
                throw new RangeError('Data length does not match given dimensions');
            }
            var newMatrix = new this(newRows, newColumns);
            for (var row = 0; row < newRows; row++) {
                for (var column = 0; column < newColumns; column++) {
                    newMatrix.set(row, column, newData[row * newColumns + column]);
                }
            }
            return newMatrix;
        }

        /**
         * Creates a row vector, a matrix with only one row.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static rowVector(newData) {
            var vector = new this(1, newData.length);
            for (var i = 0; i < newData.length; i++) {
                vector.set(0, i, newData[i]);
            }
            return vector;
        }

        /**
         * Creates a column vector, a matrix with only one column.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static columnVector(newData) {
            var vector = new this(newData.length, 1);
            for (var i = 0; i < newData.length; i++) {
                vector.set(i, 0, newData[i]);
            }
            return vector;
        }

        /**
         * Creates an empty matrix with the given dimensions. Values will be undefined. Same as using new Matrix(rows, columns).
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static empty(rows, columns) {
            return new this(rows, columns);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to zero.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static zeros(rows, columns) {
            return this.empty(rows, columns).fill(0);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to one.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static ones(rows, columns) {
            return this.empty(rows, columns).fill(1);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be randomly set.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static rand(rows, columns, rng) {
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    matrix.set(i, j, rng());
                }
            }
            return matrix;
        }

        /**
         * Creates a matrix with the given dimensions. Values will be random integers.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {number} [maxValue=1000] - Maximum value
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static randInt(rows, columns, maxValue, rng) {
            if (maxValue === undefined) maxValue = 1000;
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    var value = Math.floor(rng() * maxValue);
                    matrix.set(i, j, value);
                }
            }
            return matrix;
        }

        /**
         * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
         * @param {number} rows - Number of rows
         * @param {number} [columns=rows] - Number of columns
         * @param {number} [value=1] - Value to fill the diagonal with
         * @return {Matrix} - The new identity matrix
         */
        static eye(rows, columns, value) {
            if (columns === undefined) columns = rows;
            if (value === undefined) value = 1;
            var min = Math.min(rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, value);
            }
            return matrix;
        }

        /**
         * Creates a diagonal matrix based on the given array.
         * @param {Array} data - Array containing the data for the diagonal
         * @param {number} [rows] - Number of rows (Default: data.length)
         * @param {number} [columns] - Number of columns (Default: rows)
         * @return {Matrix} - The new diagonal matrix
         */
        static diag(data, rows, columns) {
            var l = data.length;
            if (rows === undefined) rows = l;
            if (columns === undefined) columns = rows;
            var min = Math.min(l, rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, data[i]);
            }
            return matrix;
        }

        /**
         * Returns a matrix whose elements are the minimum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static min(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Returns a matrix whose elements are the maximum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static max(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Check that the provided value is a Matrix and tries to instantiate one if not
         * @param {*} value - The value to check
         * @return {Matrix}
         */
        static checkMatrix(value) {
            return Matrix.isMatrix(value) ? value : new this(value);
        }

        /**
         * Returns true if the argument is a Matrix, false otherwise
         * @param {*} value - The value to check
         * @return {boolean}
         */
        static isMatrix(value) {
            return (value != null) && (value.klass === 'Matrix');
        }

        /**
         * @prop {number} size - The number of elements in the matrix.
         */
        get size() {
            return this.rows * this.columns;
        }

        /**
         * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
         * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
         * @return {Matrix} this
         */
        apply(callback) {
            if (typeof callback !== 'function') {
                throw new TypeError('callback must be a function');
            }
            var ii = this.rows;
            var jj = this.columns;
            for (var i = 0; i < ii; i++) {
                for (var j = 0; j < jj; j++) {
                    callback.call(this, i, j);
                }
            }
            return this;
        }

        /**
         * Returns a new 1D array filled row by row with the matrix values
         * @return {Array}
         */
        to1DArray() {
            var array = new Array(this.size);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    array[i * this.columns + j] = this.get(i, j);
                }
            }
            return array;
        }

        /**
         * Returns a 2D array containing a copy of the data
         * @return {Array}
         */
        to2DArray() {
            var copy = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                copy[i] = new Array(this.columns);
                for (var j = 0; j < this.columns; j++) {
                    copy[i][j] = this.get(i, j);
                }
            }
            return copy;
        }

        /**
         * @return {boolean} true if the matrix has one row
         */
        isRowVector() {
            return this.rows === 1;
        }

        /**
         * @return {boolean} true if the matrix has one column
         */
        isColumnVector() {
            return this.columns === 1;
        }

        /**
         * @return {boolean} true if the matrix has one row or one column
         */
        isVector() {
            return (this.rows === 1) || (this.columns === 1);
        }

        /**
         * @return {boolean} true if the matrix has the same number of rows and columns
         */
        isSquare() {
            return this.rows === this.columns;
        }

        /**
         * @return {boolean} true if the matrix is square and has the same values on both sides of the diagonal
         */
        isSymmetric() {
            if (this.isSquare()) {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j <= i; j++) {
                        if (this.get(i, j) !== this.get(j, i)) {
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        }

        /**
         * Sets a given element of the matrix. mat.set(3,4,1) is equivalent to mat[3][4]=1
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @param {number} value - The new value for the element
         * @return {Matrix} this
         */
        set(rowIndex, columnIndex, value) { // eslint-disable-line no-unused-vars
            throw new Error('set method is unimplemented');
        }

        /**
         * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @return {number}
         */
        get(rowIndex, columnIndex) { // eslint-disable-line no-unused-vars
            throw new Error('get method is unimplemented');
        }

        /**
         * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
         * rows of the matrix, and colRep times the number of columns of the matrix
         * @param {number} rowRep - Number of times the rows should be repeated
         * @param {number} colRep - Number of times the columns should be re
         * @return {Matrix}
         * @example
         * var matrix = new Matrix([[1,2]]);
         * matrix.repeat(2); // [[1,2],[1,2]]
         */
        repeat(rowRep, colRep) {
            rowRep = rowRep || 1;
            colRep = colRep || 1;
            var matrix = new this.constructor[Symbol.species](this.rows * rowRep, this.columns * colRep);
            for (var i = 0; i < rowRep; i++) {
                for (var j = 0; j < colRep; j++) {
                    matrix.setSubMatrix(this, this.rows * i, this.columns * j);
                }
            }
            return matrix;
        }

        /**
         * Fills the matrix with a given value. All elements will be set to this value.
         * @param {number} value - New value
         * @return {Matrix} this
         */
        fill(value) {
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, value);
                }
            }
            return this;
        }

        /**
         * Negates the matrix. All elements will be multiplied by (-1)
         * @return {Matrix} this
         */
        neg() {
            return this.mulS(-1);
        }

        /**
         * Returns a new array from the given row index
         * @param {number} index - Row index
         * @return {Array}
         */
        getRow(index) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, index);
            var row = new Array(this.columns);
            for (var i = 0; i < this.columns; i++) {
                row[i] = this.get(index, i);
            }
            return row;
        }

        /**
         * Returns a new row vector from the given row index
         * @param {number} index - Row index
         * @return {Matrix}
         */
        getRowVector(index) {
            return this.constructor.rowVector(this.getRow(index));
        }

        /**
         * Sets a row at the given index
         * @param {number} index - Row index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setRow(index, array) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, index);
            array = Object(__WEBPACK_IMPORTED_MODULE_3__util__["h" /* checkRowVector */])(this, array);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, array[i]);
            }
            return this;
        }

        /**
         * Swaps two rows
         * @param {number} row1 - First row index
         * @param {number} row2 - Second row index
         * @return {Matrix} this
         */
        swapRows(row1, row2) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, row1);
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, row2);
            for (var i = 0; i < this.columns; i++) {
                var temp = this.get(row1, i);
                this.set(row1, i, this.get(row2, i));
                this.set(row2, i, temp);
            }
            return this;
        }

        /**
         * Returns a new array from the given column index
         * @param {number} index - Column index
         * @return {Array}
         */
        getColumn(index) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, index);
            var column = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                column[i] = this.get(i, index);
            }
            return column;
        }

        /**
         * Returns a new column vector from the given column index
         * @param {number} index - Column index
         * @return {Matrix}
         */
        getColumnVector(index) {
            return this.constructor.columnVector(this.getColumn(index));
        }

        /**
         * Sets a column at the given index
         * @param {number} index - Column index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setColumn(index, array) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, index);
            array = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* checkColumnVector */])(this, array);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, array[i]);
            }
            return this;
        }

        /**
         * Swaps two columns
         * @param {number} column1 - First column index
         * @param {number} column2 - Second column index
         * @return {Matrix} this
         */
        swapColumns(column1, column2) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, column1);
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, column2);
            for (var i = 0; i < this.rows; i++) {
                var temp = this.get(i, column1);
                this.set(i, column1, this.get(i, column2));
                this.set(i, column2, temp);
            }
            return this;
        }

        /**
         * Adds the values of a vector to each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addRowVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["h" /* checkRowVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[j]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subRowVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["h" /* checkRowVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[j]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulRowVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["h" /* checkRowVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[j]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each row by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divRowVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["h" /* checkRowVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[j]);
                }
            }
            return this;
        }

        /**
         * Adds the values of a vector to each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addColumnVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* checkColumnVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[i]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subColumnVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* checkColumnVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulColumnVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* checkColumnVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[i]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each column by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divColumnVector(vector) {
            vector = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* checkColumnVector */])(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a row with a scalar
         * @param {number} index - Row index
         * @param {number} value
         * @return {Matrix} this
         */
        mulRow(index, value) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, index);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, this.get(index, i) * value);
            }
            return this;
        }

        /**
         * Multiplies the values of a column with a scalar
         * @param {number} index - Column index
         * @param {number} value
         * @return {Matrix} this
         */
        mulColumn(index, value) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, index);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, this.get(i, index) * value);
            }
            return this;
        }

        /**
         * Returns the maximum value of the matrix
         * @return {number}
         */
        max() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value
         * @return {Array}
         */
        maxIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of the matrix
         * @return {number}
         */
        min() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value
         * @return {Array}
         */
        minIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        maxRow(row) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        maxRowIndex(row) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        minRow(row) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        minRowIndex(row) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        maxColumn(column) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        maxColumnIndex(column) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        minColumn(column) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        minColumnIndex(column) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns an array containing the diagonal values of the matrix
         * @return {Array}
         */
        diag() {
            var min = Math.min(this.rows, this.columns);
            var diag = new Array(min);
            for (var i = 0; i < min; i++) {
                diag[i] = this.get(i, i);
            }
            return diag;
        }

        /**
         * Returns the sum by the argument given, if no argument given,
         * it returns the sum of all elements of the matrix.
         * @param {string} by - sum by 'row' or 'column'.
         * @return {Matrix|number}
         */
        sum(by) {
            switch (by) {
                case 'row':
                    return Object(__WEBPACK_IMPORTED_MODULE_3__util__["k" /* sumByRow */])(this);
                case 'column':
                    return Object(__WEBPACK_IMPORTED_MODULE_3__util__["j" /* sumByColumn */])(this);
                default:
                    return Object(__WEBPACK_IMPORTED_MODULE_3__util__["i" /* sumAll */])(this);
            }
        }

        /**
         * Returns the mean of all elements of the matrix
         * @return {number}
         */
        mean() {
            return this.sum() / this.size;
        }

        /**
         * Returns the product of all elements of the matrix
         * @return {number}
         */
        prod() {
            var prod = 1;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    prod *= this.get(i, j);
                }
            }
            return prod;
        }

        /**
         * Returns the norm of a matrix.
         * @param {string} type - "frobenius" (default) or "max" return resp. the Frobenius norm and the max norm.
         * @return {number}
         */
        norm(type = 'frobenius') {
            var result = 0;
            if (type === 'max') {
                return this.max();
            } else if (type === 'frobenius') {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j < this.columns; j++) {
                        result = result + this.get(i, j) * this.get(i, j);
                    }
                }
                return Math.sqrt(result);
            } else {
                throw new RangeError(`unknown norm type: ${type}`);
            }
        }

        /**
         * Computes the cumulative sum of the matrix elements (in place, row by row)
         * @return {Matrix} this
         */
        cumulativeSum() {
            var sum = 0;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    sum += this.get(i, j);
                    this.set(i, j, sum);
                }
            }
            return this;
        }

        /**
         * Computes the dot (scalar) product between the matrix and another
         * @param {Matrix} vector2 vector
         * @return {number}
         */
        dot(vector2) {
            if (Matrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
            var vector1 = this.to1DArray();
            if (vector1.length !== vector2.length) {
                throw new RangeError('vectors do not have the same size');
            }
            var dot = 0;
            for (var i = 0; i < vector1.length; i++) {
                dot += vector1[i] * vector2[i];
            }
            return dot;
        }

        /**
         * Returns the matrix product between this and other
         * @param {Matrix} other
         * @return {Matrix}
         */
        mmul(other) {
            other = this.constructor.checkMatrix(other);
            if (this.columns !== other.rows) {
                // eslint-disable-next-line no-console
                console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');
            }

            var m = this.rows;
            var n = this.columns;
            var p = other.columns;

            var result = new this.constructor[Symbol.species](m, p);

            var Bcolj = new Array(n);
            for (var j = 0; j < p; j++) {
                for (var k = 0; k < n; k++) {
                    Bcolj[k] = other.get(k, j);
                }

                for (var i = 0; i < m; i++) {
                    var s = 0;
                    for (k = 0; k < n; k++) {
                        s += this.get(i, k) * Bcolj[k];
                    }

                    result.set(i, j, s);
                }
            }
            return result;
        }

        strassen2x2(other) {
            var result = new this.constructor[Symbol.species](2, 2);
            const a11 = this.get(0, 0);
            const b11 = other.get(0, 0);
            const a12 = this.get(0, 1);
            const b12 = other.get(0, 1);
            const a21 = this.get(1, 0);
            const b21 = other.get(1, 0);
            const a22 = this.get(1, 1);
            const b22 = other.get(1, 1);

            // Compute intermediate values.
            const m1 = (a11 + a22) * (b11 + b22);
            const m2 = (a21 + a22) * b11;
            const m3 = a11 * (b12 - b22);
            const m4 = a22 * (b21 - b11);
            const m5 = (a11 + a12) * b22;
            const m6 = (a21 - a11) * (b11 + b12);
            const m7 = (a12 - a22) * (b21 + b22);

            // Combine intermediate values into the output.
            const c00 = m1 + m4 - m5 + m7;
            const c01 = m3 + m5;
            const c10 = m2 + m4;
            const c11 = m1 - m2 + m3 + m6;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            return result;
        }

        strassen3x3(other) {
            var result = new this.constructor[Symbol.species](3, 3);

            const a00 = this.get(0, 0);
            const a01 = this.get(0, 1);
            const a02 = this.get(0, 2);
            const a10 = this.get(1, 0);
            const a11 = this.get(1, 1);
            const a12 = this.get(1, 2);
            const a20 = this.get(2, 0);
            const a21 = this.get(2, 1);
            const a22 = this.get(2, 2);

            const b00 = other.get(0, 0);
            const b01 = other.get(0, 1);
            const b02 = other.get(0, 2);
            const b10 = other.get(1, 0);
            const b11 = other.get(1, 1);
            const b12 = other.get(1, 2);
            const b20 = other.get(2, 0);
            const b21 = other.get(2, 1);
            const b22 = other.get(2, 2);

            const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
            const m2 = (a00 - a10) * (-b01 + b11);
            const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
            const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
            const m5 = (a10 + a11) * (-b00 + b01);
            const m6 = a00 * b00;
            const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
            const m8 = (-a00 + a20) * (b02 - b12);
            const m9 = (a20 + a21) * (-b00 + b02);
            const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
            const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
            const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
            const m13 = (a02 - a22) * (b11 - b21);
            const m14 = a02 * b20;
            const m15 = (a21 + a22) * (-b20 + b21);
            const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
            const m17 = (a02 - a12) * (b12 - b22);
            const m18 = (a11 + a12) * (-b20 + b22);
            const m19 = a01 * b10;
            const m20 = a12 * b21;
            const m21 = a10 * b02;
            const m22 = a20 * b01;
            const m23 = a22 * b22;

            const c00 = m6 + m14 + m19;
            const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
            const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
            const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
            const c11 = m2 + m4 + m5 + m6 + m20;
            const c12 = m14 + m16 + m17 + m18 + m21;
            const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
            const c21 = m12 + m13 + m14 + m15 + m22;
            const c22 = m6 + m7 + m8 + m9 + m23;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(0, 2, c02);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            result.set(1, 2, c12);
            result.set(2, 0, c20);
            result.set(2, 1, c21);
            result.set(2, 2, c22);
            return result;
        }

        /**
         * Returns the matrix product between x and y. More efficient than mmul(other) only when we multiply squared matrix and when the size of the matrix is > 1000.
         * @param {Matrix} y
         * @return {Matrix}
         */
        mmulStrassen(y) {
            var x = this.clone();
            var r1 = x.rows;
            var c1 = x.columns;
            var r2 = y.rows;
            var c2 = y.columns;
            if (c1 !== r2) {
                // eslint-disable-next-line no-console
                console.warn(`Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`);
            }

            // Put a matrix into the top left of a matrix of zeros.
            // `rows` and `cols` are the dimensions of the output matrix.
            function embed(mat, rows, cols) {
                var r = mat.rows;
                var c = mat.columns;
                if ((r === rows) && (c === cols)) {
                    return mat;
                } else {
                    var resultat = Matrix.zeros(rows, cols);
                    resultat = resultat.setSubMatrix(mat, 0, 0);
                    return resultat;
                }
            }


            // Make sure both matrices are the same size.
            // This is exclusively for simplicity:
            // this algorithm can be implemented with matrices of different sizes.

            var r = Math.max(r1, r2);
            var c = Math.max(c1, c2);
            x = embed(x, r, c);
            y = embed(y, r, c);

            // Our recursive multiplication function.
            function blockMult(a, b, rows, cols) {
                // For small matrices, resort to naive multiplication.
                if (rows <= 512 || cols <= 512) {
                    return a.mmul(b); // a is equivalent to this
                }

                // Apply dynamic padding.
                if ((rows % 2 === 1) && (cols % 2 === 1)) {
                    a = embed(a, rows + 1, cols + 1);
                    b = embed(b, rows + 1, cols + 1);
                } else if (rows % 2 === 1) {
                    a = embed(a, rows + 1, cols);
                    b = embed(b, rows + 1, cols);
                } else if (cols % 2 === 1) {
                    a = embed(a, rows, cols + 1);
                    b = embed(b, rows, cols + 1);
                }

                var halfRows = parseInt(a.rows / 2);
                var halfCols = parseInt(a.columns / 2);
                // Subdivide input matrices.
                var a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
                var b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);

                var a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
                var b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);

                var a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
                var b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);

                var a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
                var b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1);

                // Compute intermediate values.
                var m1 = blockMult(Matrix.add(a11, a22), Matrix.add(b11, b22), halfRows, halfCols);
                var m2 = blockMult(Matrix.add(a21, a22), b11, halfRows, halfCols);
                var m3 = blockMult(a11, Matrix.sub(b12, b22), halfRows, halfCols);
                var m4 = blockMult(a22, Matrix.sub(b21, b11), halfRows, halfCols);
                var m5 = blockMult(Matrix.add(a11, a12), b22, halfRows, halfCols);
                var m6 = blockMult(Matrix.sub(a21, a11), Matrix.add(b11, b12), halfRows, halfCols);
                var m7 = blockMult(Matrix.sub(a12, a22), Matrix.add(b21, b22), halfRows, halfCols);

                // Combine intermediate values into the output.
                var c11 = Matrix.add(m1, m4);
                c11.sub(m5);
                c11.add(m7);
                var c12 = Matrix.add(m3, m5);
                var c21 = Matrix.add(m2, m4);
                var c22 = Matrix.sub(m1, m2);
                c22.add(m3);
                c22.add(m6);

                //Crop output to the desired size (undo dynamic padding).
                var resultat = Matrix.zeros(2 * c11.rows, 2 * c11.columns);
                resultat = resultat.setSubMatrix(c11, 0, 0);
                resultat = resultat.setSubMatrix(c12, c11.rows, 0);
                resultat = resultat.setSubMatrix(c21, 0, c11.columns);
                resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
                return resultat.subMatrix(0, rows - 1, 0, cols - 1);
            }
            return blockMult(x, y, r, c);
        }

        /**
         * Returns a row-by-row scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The scaled matrix
         */
        scaleRows(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.rows; i++) {
                var scaled = Object(__WEBPACK_IMPORTED_MODULE_2_ml_array_rescale__["a" /* default */])(this.getRow(i), {min, max});
                newMatrix.setRow(i, scaled);
            }
            return newMatrix;
        }

        /**
         * Returns a new column-by-column scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The new scaled matrix
         * @example
         * var matrix = new Matrix([[1,2],[-1,0]]);
         * var scaledMatrix = matrix.scaleColumns(); // [[1,1],[0,0]]
         */
        scaleColumns(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.columns; i++) {
                var scaled = Object(__WEBPACK_IMPORTED_MODULE_2_ml_array_rescale__["a" /* default */])(this.getColumn(i), {
                    min: min,
                    max: max
                });
                newMatrix.setColumn(i, scaled);
            }
            return newMatrix;
        }


        /**
         * Returns the Kronecker product (also known as tensor product) between this and other
         * See https://en.wikipedia.org/wiki/Kronecker_product
         * @param {Matrix} other
         * @return {Matrix}
         */
        kroneckerProduct(other) {
            other = this.constructor.checkMatrix(other);

            var m = this.rows;
            var n = this.columns;
            var p = other.rows;
            var q = other.columns;

            var result = new this.constructor[Symbol.species](m * p, n * q);
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    for (var k = 0; k < p; k++) {
                        for (var l = 0; l < q; l++) {
                            result[p * i + k][q * j + l] = this.get(i, j) * other.get(k, l);
                        }
                    }
                }
            }
            return result;
        }

        /**
         * Transposes the matrix and returns a new one containing the result
         * @return {Matrix}
         */
        transpose() {
            var result = new this.constructor[Symbol.species](this.columns, this.rows);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    result.set(j, i, this.get(i, j));
                }
            }
            return result;
        }

        /**
         * Sorts the rows (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortRows(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.rows; i++) {
                this.setRow(i, this.getRow(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Sorts the columns (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortColumns(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.columns; i++) {
                this.setColumn(i, this.getColumn(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Returns a subset of the matrix
         * @param {number} startRow - First row index
         * @param {number} endRow - Last row index
         * @param {number} startColumn - First column index
         * @param {number} endColumn - Last column index
         * @return {Matrix}
         */
        subMatrix(startRow, endRow, startColumn, endColumn) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["e" /* checkRange */])(this, startRow, endRow, startColumn, endColumn);
            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, endColumn - startColumn + 1);
            for (var i = startRow; i <= endRow; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    newMatrix[i - startRow][j - startColumn] = this.get(i, j);
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of row indices
         * @param {Array} indices - Array containing the row indices
         * @param {number} [startColumn = 0] - First column index
         * @param {number} [endColumn = this.columns-1] - Last column index
         * @return {Matrix}
         */
        subMatrixRow(indices, startColumn, endColumn) {
            if (startColumn === undefined) startColumn = 0;
            if (endColumn === undefined) endColumn = this.columns - 1;
            if ((startColumn > endColumn) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](indices.length, endColumn - startColumn + 1);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    if (indices[i] < 0 || indices[i] >= this.rows) {
                        throw new RangeError('Row index out of range: ' + indices[i]);
                    }
                    newMatrix.set(i, j - startColumn, this.get(indices[i], j));
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of column indices
         * @param {Array} indices - Array containing the column indices
         * @param {number} [startRow = 0] - First row index
         * @param {number} [endRow = this.rows-1] - Last row index
         * @return {Matrix}
         */
        subMatrixColumn(indices, startRow, endRow) {
            if (startRow === undefined) startRow = 0;
            if (endRow === undefined) endRow = this.rows - 1;
            if ((startRow > endRow) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, indices.length);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startRow; j <= endRow; j++) {
                    if (indices[i] < 0 || indices[i] >= this.columns) {
                        throw new RangeError('Column index out of range: ' + indices[i]);
                    }
                    newMatrix.set(j - startRow, i, this.get(j, indices[i]));
                }
            }
            return newMatrix;
        }

        /**
         * Set a part of the matrix to the given sub-matrix
         * @param {Matrix|Array< Array >} matrix - The source matrix from which to extract values.
         * @param {number} startRow - The index of the first row to set
         * @param {number} startColumn - The index of the first column to set
         * @return {Matrix}
         */
        setSubMatrix(matrix, startRow, startColumn) {
            matrix = this.constructor.checkMatrix(matrix);
            var endRow = startRow + matrix.rows - 1;
            var endColumn = startColumn + matrix.columns - 1;
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["e" /* checkRange */])(this, startRow, endRow, startColumn, endColumn);
            for (var i = 0; i < matrix.rows; i++) {
                for (var j = 0; j < matrix.columns; j++) {
                    this[startRow + i][startColumn + j] = matrix.get(i, j);
                }
            }
            return this;
        }

        /**
         * Return a new matrix based on a selection of rows and columns
         * @param {Array<number>} rowIndices - The row indices to select. Order matters and an index can be more than once.
         * @param {Array<number>} columnIndices - The column indices to select. Order matters and an index can be use more than once.
         * @return {Matrix} The new matrix
         */
        selection(rowIndices, columnIndices) {
            var indices = Object(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* checkIndices */])(this, rowIndices, columnIndices);
            var newMatrix = new this.constructor[Symbol.species](rowIndices.length, columnIndices.length);
            for (var i = 0; i < indices.row.length; i++) {
                var rowIndex = indices.row[i];
                for (var j = 0; j < indices.column.length; j++) {
                    var columnIndex = indices.column[j];
                    newMatrix[i][j] = this.get(rowIndex, columnIndex);
                }
            }
            return newMatrix;
        }

        /**
         * Returns the trace of the matrix (sum of the diagonal elements)
         * @return {number}
         */
        trace() {
            var min = Math.min(this.rows, this.columns);
            var trace = 0;
            for (var i = 0; i < min; i++) {
                trace += this.get(i, i);
            }
            return trace;
        }

        /*
         Matrix views
         */

        /**
         * Returns a view of the transposition of the matrix
         * @return {MatrixTransposeView}
         */
        transposeView() {
            return new __WEBPACK_IMPORTED_MODULE_4__views_transpose__["a" /* default */](this);
        }

        /**
         * Returns a view of the row vector with the given index
         * @param {number} row - row index of the vector
         * @return {MatrixRowView}
         */
        rowView(row) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["f" /* checkRowIndex */])(this, row);
            return new __WEBPACK_IMPORTED_MODULE_5__views_row__["a" /* default */](this, row);
        }

        /**
         * Returns a view of the column vector with the given index
         * @param {number} column - column index of the vector
         * @return {MatrixColumnView}
         */
        columnView(column) {
            Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* checkColumnIndex */])(this, column);
            return new __WEBPACK_IMPORTED_MODULE_10__views_column__["a" /* default */](this, column);
        }

        /**
         * Returns a view of the matrix flipped in the row axis
         * @return {MatrixFlipRowView}
         */
        flipRowView() {
            return new __WEBPACK_IMPORTED_MODULE_11__views_flipRow__["a" /* default */](this);
        }

        /**
         * Returns a view of the matrix flipped in the column axis
         * @return {MatrixFlipColumnView}
         */
        flipColumnView() {
            return new __WEBPACK_IMPORTED_MODULE_12__views_flipColumn__["a" /* default */](this);
        }

        /**
         * Returns a view of a submatrix giving the index boundaries
         * @param {number} startRow - first row index of the submatrix
         * @param {number} endRow - last row index of the submatrix
         * @param {number} startColumn - first column index of the submatrix
         * @param {number} endColumn - last column index of the submatrix
         * @return {MatrixSubView}
         */
        subMatrixView(startRow, endRow, startColumn, endColumn) {
            return new __WEBPACK_IMPORTED_MODULE_6__views_sub__["a" /* default */](this, startRow, endRow, startColumn, endColumn);
        }

        /**
         * Returns a view of the cross of the row indices and the column indices
         * @example
         * // resulting vector is [[2], [2]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).selectionView([0, 0], [1])
         * @param {Array<number>} rowIndices
         * @param {Array<number>} columnIndices
         * @return {MatrixSelectionView}
         */
        selectionView(rowIndices, columnIndices) {
            return new __WEBPACK_IMPORTED_MODULE_7__views_selection__["a" /* default */](this, rowIndices, columnIndices);
        }

        /**
         * Returns a view of the row indices
         * @example
         * // resulting vector is [[1,2,3], [1,2,3]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).rowSelectionView([0, 0])
         * @param {Array<number>} rowIndices
         * @return {MatrixRowSelectionView}
         */
        rowSelectionView(rowIndices) {
            return new __WEBPACK_IMPORTED_MODULE_8__views_rowSelection__["a" /* default */](this, rowIndices);
        }

        /**
         * Returns a view of the column indices
         * @example
         * // resulting vector is [[2, 2], [5, 5]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).columnSelectionView([1, 1])
         * @param {Array<number>} columnIndices
         * @return {MatrixColumnSelectionView}
         */
        columnSelectionView(columnIndices) {
            return new __WEBPACK_IMPORTED_MODULE_9__views_columnSelection__["a" /* default */](this, columnIndices);
        }


        /**
        * Calculates and returns the determinant of a matrix as a Number
        * @example
        *   new Matrix([[1,2,3], [4,5,6]]).det()
        * @return {number}
        */
        det() {
            if (this.isSquare()) {
                var a, b, c, d;
                if (this.columns === 2) {
                    // 2 x 2 matrix
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(1, 0);
                    d = this.get(1, 1);

                    return a * d - (b * c);
                } else if (this.columns === 3) {
                    // 3 x 3 matrix
                    var subMatrix0, subMatrix1, subMatrix2;
                    subMatrix0 = this.selectionView([1, 2], [1, 2]);
                    subMatrix1 = this.selectionView([1, 2], [0, 2]);
                    subMatrix2 = this.selectionView([1, 2], [0, 1]);
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(0, 2);

                    return a * subMatrix0.det() - b * subMatrix1.det() + c * subMatrix2.det();
                } else {
                    // general purpose determinant using the LU decomposition
                    return new __WEBPACK_IMPORTED_MODULE_0__dc_lu__["a" /* default */](this).determinant;
                }

            } else {
                throw Error('Determinant can only be calculated for a square matrix.');
            }
        }

        /**
         * Returns inverse of a matrix if it exists or the pseudoinverse
         * @param {number} threshold - threshold for taking inverse of singular values (default = 1e-15)
         * @return {Matrix} the (pseudo)inverted matrix.
         */
        pseudoInverse(threshold) {
            if (threshold === undefined) threshold = Number.EPSILON;
            var svdSolution = new __WEBPACK_IMPORTED_MODULE_1__dc_svd__["a" /* default */](this, {autoTranspose: true});

            var U = svdSolution.leftSingularVectors;
            var V = svdSolution.rightSingularVectors;
            var s = svdSolution.diagonal;

            for (var i = 0; i < s.length; i++) {
                if (Math.abs(s[i]) > threshold) {
                    s[i] = 1.0 / s[i];
                } else {
                    s[i] = 0.0;
                }
            }

            // convert list to diagonal
            s = this.constructor[Symbol.species].diag(s);
            return V.mmul(s.mmul(U.transposeView()));
        }

        /**
         * Creates an exact and independent copy of the matrix
         * @return {Matrix}
         */
        clone() {
            var newMatrix = new this.constructor[Symbol.species](this.rows, this.columns);
            for (var row = 0; row < this.rows; row++) {
                for (var column = 0; column < this.columns; column++) {
                    newMatrix.set(row, column, this.get(row, column));
                }
            }
            return newMatrix;
        }
    }

    Matrix.prototype.klass = 'Matrix';

    function compareNumbers(a, b) {
        return a - b;
    }

    /*
     Synonyms
     */

    Matrix.random = Matrix.rand;
    Matrix.diagonal = Matrix.diag;
    Matrix.prototype.diagonal = Matrix.prototype.diag;
    Matrix.identity = Matrix.eye;
    Matrix.prototype.negate = Matrix.prototype.neg;
    Matrix.prototype.tensorProduct = Matrix.prototype.kroneckerProduct;
    Matrix.prototype.determinant = Matrix.prototype.det;

    /*
     Add dynamically instance and static methods for mathematical operations
     */

    var inplaceOperator = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var inplaceOperatorScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% value);
        }
    }
    return this;
})
`;

    var inplaceOperatorMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
        this.columns !== matrix.columns) {
        throw new RangeError('Matrices dimensions must be equal');
    }
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% matrix.get(i, j));
        }
    }
    return this;
})
`;

    var staticOperator = `
(function %name%(matrix, value) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(value);
})
`;

    var inplaceMethod = `
(function %name%() {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j)));
        }
    }
    return this;
})
`;

    var staticMethod = `
(function %name%(matrix) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%();
})
`;

    var inplaceMethodWithArgs = `
(function %name%(%args%) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), %args%));
        }
    }
    return this;
})
`;

    var staticMethodWithArgs = `
(function %name%(matrix, %args%) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(%args%);
})
`;


    var inplaceMethodWithOneArgScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), value));
        }
    }
    return this;
})
`;
    var inplaceMethodWithOneArgMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
        this.columns !== matrix.columns) {
        throw new RangeError('Matrices dimensions must be equal');
    }
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), matrix.get(i, j)));
        }
    }
    return this;
})
`;

    var inplaceMethodWithOneArg = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var staticMethodWithOneArg = staticMethodWithArgs;

    var operators = [
        // Arithmetic operators
        ['+', 'add'],
        ['-', 'sub', 'subtract'],
        ['*', 'mul', 'multiply'],
        ['/', 'div', 'divide'],
        ['%', 'mod', 'modulus'],
        // Bitwise operators
        ['&', 'and'],
        ['|', 'or'],
        ['^', 'xor'],
        ['<<', 'leftShift'],
        ['>>', 'signPropagatingRightShift'],
        ['>>>', 'rightShift', 'zeroFillRightShift']
    ];

    var i;
    var eval2 = eval;
    for (var operator of operators) {
        var inplaceOp = eval2(fillTemplateFunction(inplaceOperator, {name: operator[1], op: operator[0]}));
        var inplaceOpS = eval2(fillTemplateFunction(inplaceOperatorScalar, {name: operator[1] + 'S', op: operator[0]}));
        var inplaceOpM = eval2(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[1] + 'M', op: operator[0]}));
        var staticOp = eval2(fillTemplateFunction(staticOperator, {name: operator[1]}));
        for (i = 1; i < operator.length; i++) {
            Matrix.prototype[operator[i]] = inplaceOp;
            Matrix.prototype[operator[i] + 'S'] = inplaceOpS;
            Matrix.prototype[operator[i] + 'M'] = inplaceOpM;
            Matrix[operator[i]] = staticOp;
        }
    }

    var methods = [
        ['~', 'not']
    ];

    [
        'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil',
        'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'log', 'log1p',
        'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
    ].forEach(function (mathMethod) {
        methods.push(['Math.' + mathMethod, mathMethod]);
    });

    for (var method of methods) {
        var inplaceMeth = eval2(fillTemplateFunction(inplaceMethod, {name: method[1], method: method[0]}));
        var staticMeth = eval2(fillTemplateFunction(staticMethod, {name: method[1]}));
        for (i = 1; i < method.length; i++) {
            Matrix.prototype[method[i]] = inplaceMeth;
            Matrix[method[i]] = staticMeth;
        }
    }

    var methodsWithArgs = [
        ['Math.pow', 1, 'pow']
    ];

    for (var methodWithArg of methodsWithArgs) {
        var args = 'arg0';
        for (i = 1; i < methodWithArg[1]; i++) {
            args += `, arg${i}`;
        }
        if (methodWithArg[1] !== 1) {
            var inplaceMethWithArgs = eval2(fillTemplateFunction(inplaceMethodWithArgs, {
                name: methodWithArg[2],
                method: methodWithArg[0],
                args: args
            }));
            var staticMethWithArgs = eval2(fillTemplateFunction(staticMethodWithArgs, {name: methodWithArg[2], args: args}));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
                Matrix[methodWithArg[i]] = staticMethWithArgs;
            }
        } else {
            var tmplVar = {
                name: methodWithArg[2],
                args: args,
                method: methodWithArg[0]
            };
            var inplaceMethod2 = eval2(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
            var inplaceMethodS = eval2(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
            var inplaceMethodM = eval2(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
            var staticMethod2 = eval2(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethod2;
                Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
                Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
                Matrix[methodWithArg[i]] = staticMethod2;
            }
        }
    }

    function fillTemplateFunction(template, values) {
        for (var value in values) {
            template = template.replace(new RegExp('%' + value + '%', 'g'), values[value]);
        }
        return template;
    }

    return Matrix;
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(48);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorSpaceType;
(function (ColorSpaceType) {
    ColorSpaceType[ColorSpaceType["YCbCr"] = 0] = "YCbCr";
    ColorSpaceType[ColorSpaceType["HSV"] = 1] = "HSV";
    ColorSpaceType[ColorSpaceType["Lab"] = 2] = "Lab";
})(ColorSpaceType = exports.ColorSpaceType || (exports.ColorSpaceType = {}));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;
/* harmony export (immutable) */ __webpack_exports__["b"] = setup;
// hyperHTML.Component is a very basic class
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
function Component() {}

// components will lazily define html or svg properties
// as soon as these are invoked within the .render() method
// Such render() method is not provided by the base class
// but it must be available through the Component extend.
function setup(content) {
  Object.defineProperties(
    Component.prototype,
    {
      handleEvent: {value(e) {
        const ct = e.currentTarget;
        this[
          ('getAttribute' in ct && ct.getAttribute('data-call')) ||
          ('on' + e.type)
        ](e);
      }},
      html: lazyGetter('html', content),
      svg: lazyGetter('svg', content),
      state: lazyGetter('state', function () { return this.defaultState; }),
      defaultState: {get() { return {}; }},
      setState: {value(state) {
        const target = this.state;
        const source = typeof state === 'function' ? state.call(this, target) : state;
        for (const key in source) target[key] = source[key];
        this.render();
      }}
    }
  );
}

// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
const lazyGetter = (type, fn) => {
  const secret = '_' + type + '$';
  return {
    get() {
      return this[secret] || (this[type] = fn.call(this, type));
    },
    set(value) {
      Object.defineProperty(this, secret, {configurable: true, value});
    }
  };
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(4);


// you know that kind of basics you need to cover
// your use case only but you don't want to bloat the library?
// There's even a package in here:
// https://www.npmjs.com/package/poorlyfills

// used to dispatch simple events
let Event = __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* global */].Event;
try {
  new Event('Event');
} catch(o_O) {
  Event = function (type) {
    const e = document.createEvent('Event');
    e.initEvent(type, false, false);
    return e;
  };
}


// used to store template literals
const Map = __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* global */].Map || function Map() {
  const keys = [], values = [];
  return {
    get(obj) {
      return values[keys.indexOf(obj)];
    },
    set(obj, value) {
      values[keys.push(obj) - 1] = value;
    }
  };
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Map;


// used to store wired content
const WeakMap = __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* global */].WeakMap || function WeakMap() {
  return {
    get(obj) { return obj[__WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* UID */]]; },
    set(obj, value) {
      Object.defineProperty(obj, __WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* UID */], {
        configurable: true,
        value
      });
    }
  };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = WeakMap;


// used to store hyper.Components
const WeakSet = __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* global */].WeakSet || function WeakSet() {
  const wm = new WeakMap;
  return {
    add(obj) { wm.set(obj, true); },
    has(obj) { return wm.get(obj) === true; }
  };
};
/* harmony export (immutable) */ __webpack_exports__["d"] = WeakSet;


// used to be sure IE9 or older Androids work as expected
const isArray = Array.isArray || (toString =>
  arr => toString.call(arr) === '[object Array]'
)({}.toString);
/* harmony export (immutable) */ __webpack_exports__["e"] = isArray;


const trim = __WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* UID */].trim || function () {
  return this.replace(/^\s+|\s+$/g, '');
};
/* harmony export (immutable) */ __webpack_exports__["f"] = trim;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
exports.HyperComponent = esm_1.Component;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ConversionParameters {
    constructor(redPoint, greenPoint, bluePoint, whitePoint, gamma) {
        this.redPoint = redPoint;
        this.greenPoint = greenPoint;
        this.bluePoint = bluePoint;
        this.whitePoint = whitePoint;
        this.gamma = gamma;
    }
    static sRGB() {
        return new ConversionParameters({ x: 0.64, y: 0.33 }, { x: 0.3, y: 0.6 }, { x: 0.15, y: 0.06 }, { x: 0.3127, y: 0.329 }, 2.2);
    }
    static adobeRGB() {
        return new ConversionParameters({ x: 0.64, y: 0.33 }, { x: 0.21, y: 0.71 }, { x: 0.15, y: 0.06 }, { x: 0.3127, y: 0.329 }, 2.2);
    }
    static appleRGB() {
        return new ConversionParameters({ x: 0.625, y: 0.34 }, { x: 0.28, y: 0.595 }, { x: 0.155, y: 0.07 }, { x: 0.3127, y: 0.329 }, 1.8);
    }
    static cieRGB() {
        return new ConversionParameters({ x: 0.735, y: 0.265 }, { x: 0.274, y: 0.717 }, { x: 0.167, y: 0.009 }, { x: 0.3333, y: 0.3333 }, 2.2);
    }
    static wideGamut() {
        return new ConversionParameters({ x: 0.7347, y: 0.2653 }, { x: 0.1152, y: 0.8264 }, { x: 0.1566, y: 0.0177 }, { x: 0.3457, y: 0.3585 }, 1.2);
    }
    static pal() {
        return new ConversionParameters({ x: 0.64, y: 0.33 }, { x: 0.29, y: 0.6 }, { x: 0.15, y: 0.06 }, { x: 0.3127, y: 0.329 }, 1.95);
    }
    patch(patch) {
        const { redPoint, greenPoint, bluePoint, whitePoint, gamma } = Object.assign({}, this, patch);
        return new ConversionParameters(redPoint, greenPoint, bluePoint, whitePoint, gamma);
    }
}
exports.ConversionParameters = ConversionParameters;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CONVERSION_FINISHED = 'CONVERSION_FINISHED';
function conversionFinished(conversionResult, resultImages) {
    return {
        type: exports.CONVERSION_FINISHED,
        conversionResult,
        resultImages
    };
}
exports.conversionFinished = conversionFinished;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_COLOR_PROFILE_TYPE = 'CHANGE_COLOR_PROFILE_TYPE';
function changeColorProfileType(colorProfileType, conversionParameters) {
    return {
        type: exports.CHANGE_COLOR_PROFILE_TYPE,
        colorProfileType,
        conversionParameters
    };
}
exports.changeColorProfileType = changeColorProfileType;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_ORIGINAL_IMAGE = 'CHANGE_ORIGINAL_IMAGE';
function changeOriginalImage(image) {
    return {
        type: exports.CHANGE_ORIGINAL_IMAGE,
        image
    };
}
exports.changeOriginalImage = changeOriginalImage;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ConversionParameters_1 = __webpack_require__(17);
var ColorProfileType;
(function (ColorProfileType) {
    ColorProfileType[ColorProfileType["sRGB"] = 0] = "sRGB";
    ColorProfileType[ColorProfileType["AdobeRGB"] = 1] = "AdobeRGB";
    ColorProfileType[ColorProfileType["AppleRGB"] = 2] = "AppleRGB";
    ColorProfileType[ColorProfileType["CIERGB"] = 3] = "CIERGB";
    ColorProfileType[ColorProfileType["WideGamut"] = 4] = "WideGamut";
    ColorProfileType[ColorProfileType["PAL"] = 5] = "PAL";
    ColorProfileType[ColorProfileType["Custom"] = 6] = "Custom";
})(ColorProfileType = exports.ColorProfileType || (exports.ColorProfileType = {}));
exports.predefinedColorProfiles = [
    { colorProfileType: ColorProfileType.AdobeRGB, parameters: ConversionParameters_1.ConversionParameters.adobeRGB },
    { colorProfileType: ColorProfileType.AppleRGB, parameters: ConversionParameters_1.ConversionParameters.appleRGB },
    { colorProfileType: ColorProfileType.sRGB, parameters: ConversionParameters_1.ConversionParameters.sRGB },
    { colorProfileType: ColorProfileType.CIERGB, parameters: ConversionParameters_1.ConversionParameters.cieRGB },
    { colorProfileType: ColorProfileType.WideGamut, parameters: ConversionParameters_1.ConversionParameters.wideGamut },
    { colorProfileType: ColorProfileType.PAL, parameters: ConversionParameters_1.ConversionParameters.pal }
];
exports.labeledColorProfiles = [
    { value: ColorProfileType.AdobeRGB, label: 'AdobeRGB' },
    { value: ColorProfileType.AppleRGB, label: 'AppleRGB' },
    { value: ColorProfileType.sRGB, label: 'sRGB' },
    { value: ColorProfileType.CIERGB, label: 'CIERGB' },
    { value: ColorProfileType.WideGamut, label: 'WideGamut' },
    { value: ColorProfileType.PAL, label: 'PAL' },
    { value: ColorProfileType.Custom, label: 'Custom' }
];


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PartialConversionResult {
    constructor(label, values, width, height) {
        this.label = label;
        this.values = values;
        this.width = width;
        this.height = height;
    }
}
exports.PartialConversionResult = PartialConversionResult;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);


/**
 * @class LuDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
 * @param {Matrix} matrix
 */
class LuDecomposition {
    constructor(matrix) {
        matrix = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(matrix);

        var lu = matrix.clone();
        var rows = lu.rows;
        var columns = lu.columns;
        var pivotVector = new Array(rows);
        var pivotSign = 1;
        var i, j, k, p, s, t, v;
        var LUcolj, kmax;

        for (i = 0; i < rows; i++) {
            pivotVector[i] = i;
        }

        LUcolj = new Array(rows);

        for (j = 0; j < columns; j++) {

            for (i = 0; i < rows; i++) {
                LUcolj[i] = lu.get(i, j);
            }

            for (i = 0; i < rows; i++) {
                kmax = Math.min(i, j);
                s = 0;
                for (k = 0; k < kmax; k++) {
                    s += lu.get(i, k) * LUcolj[k];
                }
                LUcolj[i] -= s;
                lu.set(i, j, LUcolj[i]);
            }

            p = j;
            for (i = j + 1; i < rows; i++) {
                if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                    p = i;
                }
            }

            if (p !== j) {
                for (k = 0; k < columns; k++) {
                    t = lu.get(p, k);
                    lu.set(p, k, lu.get(j, k));
                    lu.set(j, k, t);
                }

                v = pivotVector[p];
                pivotVector[p] = pivotVector[j];
                pivotVector[j] = v;

                pivotSign = -pivotSign;
            }

            if (j < rows && lu.get(j, j) !== 0) {
                for (i = j + 1; i < rows; i++) {
                    lu.set(i, j, lu.get(i, j) / lu.get(j, j));
                }
            }
        }

        this.LU = lu;
        this.pivotVector = pivotVector;
        this.pivotSign = pivotSign;
    }

    /**
     *
     * @return {boolean}
     */
    isSingular() {
        var data = this.LU;
        var col = data.columns;
        for (var j = 0; j < col; j++) {
            if (data[j][j] === 0) {
                return true;
            }
        }
        return false;
    }

    /**
     *
     * @param {Matrix} value
     * @return {Matrix}
     */
    solve(value) {
        value = __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].checkMatrix(value);

        var lu = this.LU;
        var rows = lu.rows;

        if (rows !== value.rows) {
            throw new Error('Invalid matrix dimensions');
        }
        if (this.isSingular()) {
            throw new Error('LU matrix is singular');
        }

        var count = value.columns;
        var X = value.subMatrixRow(this.pivotVector, 0, count - 1);
        var columns = lu.columns;
        var i, j, k;

        for (k = 0; k < columns; k++) {
            for (i = k + 1; i < columns; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        for (k = columns - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= lu[k][k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {number}
     */
    get determinant() {
        var data = this.LU;
        if (!data.isSquare()) {
            throw new Error('Matrix must be square');
        }
        var determinant = this.pivotSign;
        var col = data.columns;
        for (var j = 0; j < col; j++) {
            determinant *= data[j][j];
        }
        return determinant;
    }

    /**
     *
     * @return {Matrix}
     */
    get lowerTriangularMatrix() {
        var data = this.LU;
        var rows = data.rows;
        var columns = data.columns;
        var X = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i > j) {
                    X[i][j] = data[i][j];
                } else if (i === j) {
                    X[i][j] = 1;
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {Matrix}
     */
    get upperTriangularMatrix() {
        var data = this.LU;
        var rows = data.rows;
        var columns = data.columns;
        var X = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i <= j) {
                    X[i][j] = data[i][j];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {Array<number>}
     */
    get pivotPermutationVector() {
        return this.pivotVector.slice();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LuDecomposition;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(25);



/**
 * @class SingularValueDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
 * @param {Matrix} value
 * @param {object} [options]
 * @param {boolean} [options.computeLeftSingularVectors=true]
 * @param {boolean} [options.computeRightSingularVectors=true]
 * @param {boolean} [options.autoTranspose=false]
 */
class SingularValueDecomposition {
    constructor(value, options = {}) {
        value = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(value);

        var m = value.rows;
        var n = value.columns;
        var nu = Math.min(m, n);

        const {
            computeLeftSingularVectors = true,
            computeRightSingularVectors = true,
            autoTranspose = false
        } = options;

        var wantu = Boolean(computeLeftSingularVectors);
        var wantv = Boolean(computeRightSingularVectors);

        var swapped = false;
        var a;
        if (m < n) {
            if (!autoTranspose) {
                a = value.clone();
                // eslint-disable-next-line no-console
                console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
            } else {
                a = value.transpose();
                m = a.rows;
                n = a.columns;
                swapped = true;
                var aux = wantu;
                wantu = wantv;
                wantv = aux;
            }
        } else {
            a = value.clone();
        }

        var s = new Array(Math.min(m + 1, n));
        var U = Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getFilled2DArray */])(m, nu, 0);
        var V = Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getFilled2DArray */])(n, n, 0);
        var e = new Array(n);
        var work = new Array(m);

        var nct = Math.min(m - 1, n);
        var nrt = Math.max(0, Math.min(n - 2, m));

        var i, j, k, p, t, ks, f, cs, sn, max, kase,
            scale, sp, spm1, epm1, sk, ek, b, c, shift, g;

        for (k = 0, max = Math.max(nct, nrt); k < max; k++) {
            if (k < nct) {
                s[k] = 0;
                for (i = k; i < m; i++) {
                    s[k] = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(s[k], a[i][k]);
                }
                if (s[k] !== 0) {
                    if (a[k][k] < 0) {
                        s[k] = -s[k];
                    }
                    for (i = k; i < m; i++) {
                        a[i][k] /= s[k];
                    }
                    a[k][k] += 1;
                }
                s[k] = -s[k];
            }

            for (j = k + 1; j < n; j++) {
                if ((k < nct) && (s[k] !== 0)) {
                    t = 0;
                    for (i = k; i < m; i++) {
                        t += a[i][k] * a[i][j];
                    }
                    t = -t / a[k][k];
                    for (i = k; i < m; i++) {
                        a[i][j] += t * a[i][k];
                    }
                }
                e[j] = a[k][j];
            }

            if (wantu && (k < nct)) {
                for (i = k; i < m; i++) {
                    U[i][k] = a[i][k];
                }
            }

            if (k < nrt) {
                e[k] = 0;
                for (i = k + 1; i < n; i++) {
                    e[k] = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(e[k], e[i]);
                }
                if (e[k] !== 0) {
                    if (e[k + 1] < 0) {
                        e[k] = 0 - e[k];
                    }
                    for (i = k + 1; i < n; i++) {
                        e[i] /= e[k];
                    }
                    e[k + 1] += 1;
                }
                e[k] = -e[k];
                if ((k + 1 < m) && (e[k] !== 0)) {
                    for (i = k + 1; i < m; i++) {
                        work[i] = 0;
                    }
                    for (j = k + 1; j < n; j++) {
                        for (i = k + 1; i < m; i++) {
                            work[i] += e[j] * a[i][j];
                        }
                    }
                    for (j = k + 1; j < n; j++) {
                        t = -e[j] / e[k + 1];
                        for (i = k + 1; i < m; i++) {
                            a[i][j] += t * work[i];
                        }
                    }
                }
                if (wantv) {
                    for (i = k + 1; i < n; i++) {
                        V[i][k] = e[i];
                    }
                }
            }
        }

        p = Math.min(n, m + 1);
        if (nct < n) {
            s[nct] = a[nct][nct];
        }
        if (m < p) {
            s[p - 1] = 0;
        }
        if (nrt + 1 < p) {
            e[nrt] = a[nrt][p - 1];
        }
        e[p - 1] = 0;

        if (wantu) {
            for (j = nct; j < nu; j++) {
                for (i = 0; i < m; i++) {
                    U[i][j] = 0;
                }
                U[j][j] = 1;
            }
            for (k = nct - 1; k >= 0; k--) {
                if (s[k] !== 0) {
                    for (j = k + 1; j < nu; j++) {
                        t = 0;
                        for (i = k; i < m; i++) {
                            t += U[i][k] * U[i][j];
                        }
                        t = -t / U[k][k];
                        for (i = k; i < m; i++) {
                            U[i][j] += t * U[i][k];
                        }
                    }
                    for (i = k; i < m; i++) {
                        U[i][k] = -U[i][k];
                    }
                    U[k][k] = 1 + U[k][k];
                    for (i = 0; i < k - 1; i++) {
                        U[i][k] = 0;
                    }
                } else {
                    for (i = 0; i < m; i++) {
                        U[i][k] = 0;
                    }
                    U[k][k] = 1;
                }
            }
        }

        if (wantv) {
            for (k = n - 1; k >= 0; k--) {
                if ((k < nrt) && (e[k] !== 0)) {
                    for (j = k + 1; j < n; j++) {
                        t = 0;
                        for (i = k + 1; i < n; i++) {
                            t += V[i][k] * V[i][j];
                        }
                        t = -t / V[k + 1][k];
                        for (i = k + 1; i < n; i++) {
                            V[i][j] += t * V[i][k];
                        }
                    }
                }
                for (i = 0; i < n; i++) {
                    V[i][k] = 0;
                }
                V[k][k] = 1;
            }
        }

        var pp = p - 1;
        var iter = 0;
        var eps = Number.EPSILON;
        while (p > 0) {
            for (k = p - 2; k >= -1; k--) {
                if (k === -1) {
                    break;
                }
                if (Math.abs(e[k]) <= eps * (Math.abs(s[k]) + Math.abs(s[k + 1]))) {
                    e[k] = 0;
                    break;
                }
            }
            if (k === p - 2) {
                kase = 4;
            } else {
                for (ks = p - 1; ks >= k; ks--) {
                    if (ks === k) {
                        break;
                    }
                    t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
                    if (Math.abs(s[ks]) <= eps * t) {
                        s[ks] = 0;
                        break;
                    }
                }
                if (ks === k) {
                    kase = 3;
                } else if (ks === p - 1) {
                    kase = 1;
                } else {
                    kase = 2;
                    k = ks;
                }
            }

            k++;

            switch (kase) {
                case 1: {
                    f = e[p - 2];
                    e[p - 2] = 0;
                    for (j = p - 2; j >= k; j--) {
                        t = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(s[j], f);
                        cs = s[j] / t;
                        sn = f / t;
                        s[j] = t;
                        if (j !== k) {
                            f = -sn * e[j - 1];
                            e[j - 1] = cs * e[j - 1];
                        }
                        if (wantv) {
                            for (i = 0; i < n; i++) {
                                t = cs * V[i][j] + sn * V[i][p - 1];
                                V[i][p - 1] = -sn * V[i][j] + cs * V[i][p - 1];
                                V[i][j] = t;
                            }
                        }
                    }
                    break;
                }
                case 2 : {
                    f = e[k - 1];
                    e[k - 1] = 0;
                    for (j = k; j < p; j++) {
                        t = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(s[j], f);
                        cs = s[j] / t;
                        sn = f / t;
                        s[j] = t;
                        f = -sn * e[j];
                        e[j] = cs * e[j];
                        if (wantu) {
                            for (i = 0; i < m; i++) {
                                t = cs * U[i][j] + sn * U[i][k - 1];
                                U[i][k - 1] = -sn * U[i][j] + cs * U[i][k - 1];
                                U[i][j] = t;
                            }
                        }
                    }
                    break;
                }
                case 3 : {
                    scale = Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2]), Math.abs(e[p - 2]), Math.abs(s[k]), Math.abs(e[k]));
                    sp = s[p - 1] / scale;
                    spm1 = s[p - 2] / scale;
                    epm1 = e[p - 2] / scale;
                    sk = s[k] / scale;
                    ek = e[k] / scale;
                    b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
                    c = (sp * epm1) * (sp * epm1);
                    shift = 0;
                    if ((b !== 0) || (c !== 0)) {
                        shift = Math.sqrt(b * b + c);
                        if (b < 0) {
                            shift = -shift;
                        }
                        shift = c / (b + shift);
                    }
                    f = (sk + sp) * (sk - sp) + shift;
                    g = sk * ek;
                    for (j = k; j < p - 1; j++) {
                        t = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(f, g);
                        cs = f / t;
                        sn = g / t;
                        if (j !== k) {
                            e[j - 1] = t;
                        }
                        f = cs * s[j] + sn * e[j];
                        e[j] = cs * e[j] - sn * s[j];
                        g = sn * s[j + 1];
                        s[j + 1] = cs * s[j + 1];
                        if (wantv) {
                            for (i = 0; i < n; i++) {
                                t = cs * V[i][j] + sn * V[i][j + 1];
                                V[i][j + 1] = -sn * V[i][j] + cs * V[i][j + 1];
                                V[i][j] = t;
                            }
                        }
                        t = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(f, g);
                        cs = f / t;
                        sn = g / t;
                        s[j] = t;
                        f = cs * e[j] + sn * s[j + 1];
                        s[j + 1] = -sn * e[j] + cs * s[j + 1];
                        g = sn * e[j + 1];
                        e[j + 1] = cs * e[j + 1];
                        if (wantu && (j < m - 1)) {
                            for (i = 0; i < m; i++) {
                                t = cs * U[i][j] + sn * U[i][j + 1];
                                U[i][j + 1] = -sn * U[i][j] + cs * U[i][j + 1];
                                U[i][j] = t;
                            }
                        }
                    }
                    e[p - 2] = f;
                    iter = iter + 1;
                    break;
                }
                case 4: {
                    if (s[k] <= 0) {
                        s[k] = (s[k] < 0 ? -s[k] : 0);
                        if (wantv) {
                            for (i = 0; i <= pp; i++) {
                                V[i][k] = -V[i][k];
                            }
                        }
                    }
                    while (k < pp) {
                        if (s[k] >= s[k + 1]) {
                            break;
                        }
                        t = s[k];
                        s[k] = s[k + 1];
                        s[k + 1] = t;
                        if (wantv && (k < n - 1)) {
                            for (i = 0; i < n; i++) {
                                t = V[i][k + 1];
                                V[i][k + 1] = V[i][k];
                                V[i][k] = t;
                            }
                        }
                        if (wantu && (k < m - 1)) {
                            for (i = 0; i < m; i++) {
                                t = U[i][k + 1];
                                U[i][k + 1] = U[i][k];
                                U[i][k] = t;
                            }
                        }
                        k++;
                    }
                    iter = 0;
                    p--;
                    break;
                }
                // no default
            }
        }

        if (swapped) {
            var tmp = V;
            V = U;
            U = tmp;
        }

        this.m = m;
        this.n = n;
        this.s = s;
        this.U = U;
        this.V = V;
    }

    /**
     * Solve a problem of least square (Ax=b) by using the SVD. Useful when A is singular. When A is not singular, it would be better to use qr.solve(value).
     * Example : We search to approximate x, with A matrix shape m*n, x vector size n, b vector size m (m > n). We will use :
     * var svd = SingularValueDecomposition(A);
     * var x = svd.solve(b);
     * @param {Matrix} value - Matrix 1D which is the vector b (in the equation Ax = b)
     * @return {Matrix} - The vector x
     */
    solve(value) {

        var Y = value;
        var e = this.threshold;
        var scols = this.s.length;
        var Ls = __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].zeros(scols, scols);
        var i;

        for (i = 0; i < scols; i++) {
            if (Math.abs(this.s[i]) <= e) {
                Ls[i][i] = 0;
            } else {
                Ls[i][i] = 1 / this.s[i];
            }
        }

        var U = this.U;
        var V = this.rightSingularVectors;

        var VL = V.mmul(Ls);
        var vrows = V.rows;
        var urows = U.length;
        var VLU = __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].zeros(vrows, urows);
        var j, k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < scols; k++) {
                    sum += VL[i][k] * U[j][k];
                }
                VLU[i][j] = sum;
            }
        }

        return VLU.mmul(Y);
    }

    /**
     *
     * @param {Array<number>} value
     * @return {Matrix}
     */
    solveForDiagonal(value) {
        return this.solve(__WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].diag(value));
    }

    /**
     * Get the inverse of the matrix. We compute the inverse of a matrix using SVD when this matrix is singular or ill-conditioned. Example :
     * var svd = SingularValueDecomposition(A);
     * var inverseA = svd.inverse();
     * @return {Matrix} - The approximation of the inverse of the matrix
     */
    inverse() {
        var V = this.V;
        var e = this.threshold;
        var vrows = V.length;
        var vcols = V[0].length;
        var X = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](vrows, this.s.length);
        var i, j;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < vcols; j++) {
                if (Math.abs(this.s[j]) > e) {
                    X[i][j] = V[i][j] / this.s[j];
                } else {
                    X[i][j] = 0;
                }
            }
        }

        var U = this.U;

        var urows = U.length;
        var ucols = U[0].length;
        var Y = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](vrows, urows);
        var k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < ucols; k++) {
                    sum += X[i][k] * U[j][k];
                }
                Y[i][j] = sum;
            }
        }

        return Y;
    }

    /**
     *
     * @return {number}
     */
    get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    }

    /**
     *
     * @return {number}
     */
    get norm2() {
        return this.s[0];
    }

    /**
     *
     * @return {number}
     */
    get rank() {
        var tol = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
        var r = 0;
        var s = this.s;
        for (var i = 0, ii = s.length; i < ii; i++) {
            if (s[i] > tol) {
                r++;
            }
        }
        return r;
    }

    /**
     *
     * @return {Array<number>}
     */
    get diagonal() {
        return this.s;
    }

    /**
     *
     * @return {number}
     */
    get threshold() {
        return (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0];
    }

    /**
     *
     * @return {Matrix}
     */
    get leftSingularVectors() {
        if (!__WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].isMatrix(this.U)) {
            this.U = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](this.U);
        }
        return this.U;
    }

    /**
     *
     * @return {Matrix}
     */
    get rightSingularVectors() {
        if (!__WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].isMatrix(this.V)) {
            this.V = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](this.V);
        }
        return this.V;
    }

    /**
     *
     * @return {Matrix}
     */
    get diagonalMatrix() {
        return __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].diag(this.s);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SingularValueDecomposition;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hypotenuse;
/* harmony export (immutable) */ __webpack_exports__["a"] = getFilled2DArray;
function hypotenuse(a, b) {
    var r = 0;
    if (Math.abs(a) > Math.abs(b)) {
        r = b / a;
        return Math.abs(a) * Math.sqrt(1 + r * r);
    }
    if (b !== 0) {
        r = a / b;
        return Math.abs(b) * Math.sqrt(1 + r * r);
    }
    return 0;
}

function getFilled2DArray(rows, columns, value) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for (var j = 0; j < columns; j++) {
            array[i][j] = value;
        }
    }
    return array;
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Engine_js__ = __webpack_require__(52);
// this is an overly defensive approach to avoid any possible
// side-effect when the live collection of nodes is passed around





/*                0                       0                 0
000                00                   00                000
 0000              0000               0000              0000 
  00000             0000             0000              0000  
  000000            000000         000000            000000  
   0000000           0000000      0000000          0000000   
   0000000000000000  0000000000000000000  0000000000000000   
   0000000000000000   000000000000000000  0000000000000000   
   0000000000000000   00000000000000000   000000000000000    
    0000000            000000   0000000           0000000    
    0000000000000000   0000000 0000000   000000000000000     
     0000000000000000  00000000000000  0000000000000000      
      000000            000000000000             000000      
       0000000000000      00000000       0000000000000       
      0  0000000000000000           0000000000000000  0      
       00  00000000000000000       0000000000000000  00      
       000   00000     000000   0000000    00000   000       
        0000   00000        000000       000000  00000       
        000000  000000     0000000     000000  000000        
         0000000  000000   00000000   00000  0000000         
         00000000   00000 000000000 00000  000000000         
         0000000000   00000000000000000   0000000000         
          00000000000   00000000000000  00000000000          
          0000000000000   000000000   0000000000000          
                000000000   00000   0000000000               
                       0000  000  0000                       
                            0 0 0                            
                                                             
                    slyer0.deviantart.com                  */

// Megatron is a transformer in charge of mutating
// a list of live DOM nodes into a new list.
function Megatron(node, childNodes) {
  this.node = node;
  this.childNodes = childNodes;
}

// it carries the default merge/diff engine
// that can be swapped via hyperHTML.engine = {...}
// See hyperhtml-majinbuu to know more
Megatron.engine = __WEBPACK_IMPORTED_MODULE_3__objects_Engine_js__["a" /* default */];

// quickly erase the related content
// optionally add a single node/component as value
Megatron.prototype.empty = function empty(value) {
  const node = this.node;
  const childNodes = this.childNodes;
  let length = childNodes.length;
  if (length) {
    const pn = node.parentNode;
    const remove = __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["f" /* splice */].call(childNodes, 0, length);
    while (length--) pn.removeChild(utils.getNode(remove[length]));
  }
  if (value) {
    __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["d" /* push */].call(childNodes, value);
    node.parentNode.insertBefore(utils.getNode(value), node);
  }
};

// there are numerous ways to optimize a list of nodes
// that is going to represent another list (or even the same)
Megatron.prototype.become = function become(virtual) {
  const vlength = virtual.length;
  // if there are new elements to push ..
  if (0 < vlength) {
    const node = this.node;
    const live = this.childNodes;
    const pn = node.parentNode;
    let llength = live.length;
    let l = 0;
    let v = 0;
    // if the current list is empty, append all nodes
    if (llength < 1) {
      __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["d" /* push */].apply(
        live,
        utils.insert(pn, virtual, node)
      );
      return;
    }
    // if all elements are the same, do pretty much nothing
    while (l < llength && v < vlength) {
      // appending nodes/components could be just fine
      if (live[l] !== virtual[v]) break;
      l++;
      v++;
    }
    // if we reached the live length destination
    if (l === llength) {
      // there could be a tie (nothing to do)
      if (vlength === llength) return;
      // or there's only to append
      __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["d" /* push */].apply(
        live,
        utils.insert(pn, __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["e" /* slice */].call(virtual, v), node)
      );
      return;
    }
    // if the new length is reached though
    if (v === vlength) {
      // there are nodes to remove
      utils.remove(pn, __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["f" /* splice */].call(live, l, llength));
      return;
    }
    // otherwise let's check backward
    let rl = llength;
    let rv = vlength;
    while (rl && rv) {
      if (live[--rl] !== virtual[--rv]) {
        ++rl;
        ++rv;
        break;
      }
    }
    // now ... lists are not identical, we know that,
    // but maybe it was a prepend ... so if live length is covered
    if (rl < 1) {
      // return after pre-pending all nodes
      __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["h" /* unshift */].apply(
        live,
        utils.insert(pn, __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["e" /* slice */].call(virtual, 0, rv), utils.getNode(live[0]))
      );
      return;
    }
    // or maybe, it was a removal of nodes at the beginning
    if (rv < 1) {
      // return after removing all pre-nodes
      utils.remove(pn, __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["f" /* splice */].call(live, l, rl));
      return;
    }
    // now we have a boundary of nodes that need to be changed
    // all the discovered info ar passed to the engine
    Megatron.engine.update(
      utils, pn, node,
      live, l, rl, llength,
      virtual, v, rv, vlength
    );
  } else {
    this.empty();
  }
};

const utils = {

  // the basic default engine is always provided
  // in case there are conditions that need it
  engine: __WEBPACK_IMPORTED_MODULE_3__objects_Engine_js__["a" /* default */],

  // an item could be an hyperHTML.Component and, in such case,
  // it should be rendered as node
  getNode: node => node instanceof __WEBPACK_IMPORTED_MODULE_2__Component_js__["a" /* default */] ? node.render() : node,

  // append a list of nodes before another node
  insert: (parentNode, nodes, node) => {
    const length = nodes.length;
    if (length === 1) {
      parentNode.insertBefore(utils.getNode(nodes[0]), node);
    } else {
      let i = 0;
      const tmp = Object(__WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__["c" /* fragment */])(parentNode);
      while (i < length)
        tmp.appendChild(utils.getNode(nodes[i++]));
      parentNode.insertBefore(tmp, node);
    }
    return nodes;
  },

  // drop a list of nodes from their parentNode
  remove: (parentNode, nodes) => {
    let i = nodes.length;
    while (i--) {
      parentNode.removeChild(utils.getNode(nodes[i]));
    }
  }
};

/*                  _____
                ___/  |  \___
             __/      |      \__
          __/         |         \__
         /|           |           |\
        | |           |           | |
        | |           |           | |
       |  |           |           |  |
       |  |        ___|___        |  |
      /   |    ___/  ___  \___    |   \
      |   |___/  ___/| |\___  \___|   |
      |   /   __/_ \_| |_/ _\__   \   |
     |   |___/\_  \_______/  _/\___|   |
    /   /___/   \___\___/___/   \___\   \
   /    |   |       |   |       |   |    \
  /     |   |_      |   |      _|   |     \
 |___   |___|_\   _/|___|\_   /_|___|   ___|
 |_  \    |   |\ /  |___|  \ /|   |    /  _|
 ||| |    |   | |  _______  | |   |    | |||
 ||| |    |   | |  \_____/  | |   |    | |||
 ||| |    |   | |    ___    | |   |    | |||
 ||| |    |   | |           | |   |    | |||
 ||| |    |   | |           | |   |    | |||
 ||| |    |   | |           | |   |    | |||
 ||| |    |   |\|           |/|   |    | |||
 \||_|____|___|-\___________/-|___|____|_||/

    cybertronchronicle.freewebspace.com   */

/* harmony default export */ __webpack_exports__["a"] = (Megatron);

/* TODO: benchmark this is needed at all
// instead of checking instanceof each time and render potentially twice
// use a map to retrieve nodes from a generic item

import {Map} from '../shared/poorlyfills.js';
const get = (map, node) => map.get(node) || set(map, node);
const set = (map, node) => {
  const value = utils.getNode(node);
  map.set(node, value);
  return value;
};

*/


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const intents = {};
const keys = [];
const hasOwnProperty = intents.hasOwnProperty;

let length = 0;

/* harmony default export */ __webpack_exports__["a"] = ({

  // hyperHTML.define('intent', (object, update) => {...})
  // can be used to define a third parts update mechanism
  // when every other known mechanism failed.
  // hyper.define('user', info => info.name);
  // hyper(node)`<p>${{user}}</p>`;
  define: (intent, callback) => {
    if (!(intent in intents)) {
      length = keys.push(intent);
    }
    intents[intent] = callback;
  },

  // this method is used internally as last resort
  // to retrieve a value out of an object
  invoke: (object, callback) => {
    for (let i = 0; i < length; i++) {
      let key = keys[i];
      if (hasOwnProperty.call(object, key)) {
        return intents[key](object[key], callback);
      }
    }
  }
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__ = __webpack_require__(6);





// a weak collection of contexts that
// are already known to hyperHTML
const bewitched = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["c" /* WeakMap */];

// the collection of all template literals
// since these are unique and immutable
// for the whole application life-cycle
const templates = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["b" /* Map */];

// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function render(template) {
  const wicked = bewitched.get(this);
  if (wicked && wicked.template === Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["g" /* unique */])(template)) {
    update.apply(wicked.updates, arguments);
  } else {
    upgrade.apply(this, arguments);
  }
  return this;
}

// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function upgrade(template) {
  template = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["g" /* unique */])(template);
  const info =  templates.get(template) ||
                createTemplate.call(this, template);
  const fragment = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["c" /* importNode */])(this.ownerDocument, info.fragment);
  const updates = __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__["a" /* default */].create(fragment, info.paths);
  bewitched.set(this, {template, updates});
  update.apply(updates, arguments);
  this.textContent = '';
  this.appendChild(fragment);
}

// an update simply loops over all mapped DOM operations
function update() {
  const length = arguments.length;
  for (let i = 1; i < length; i++) {
    this[i - 1](arguments[i]);
  }
}

// a template can be used to create a document fragment
// aware of all interpolations and with a list
// of paths used to find once those nodes that need updates,
// no matter if these are attributes, text nodes, or regular one
function createTemplate(template) {
  const paths = [];
  const fragment = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["b" /* createFragment */])(this, template.join(__WEBPACK_IMPORTED_MODULE_1__shared_constants_js__["k" /* UIDC */]));
  __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__["a" /* default */].find(fragment, paths, template.slice());
  const info = {fragment, paths};
  templates.set(template, info);
  return info;
}

/* harmony default export */ __webpack_exports__["a"] = (render);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(66);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(60);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorSpaceType_1 = __webpack_require__(13);
const ConversionParameters_1 = __webpack_require__(17);
exports.configuration = {
    defaultImageUrl: 'images/7-colorful-photography.jpg',
    defaultColorSpace: ColorSpaceType_1.ColorSpaceType.YCbCr,
    defaultConversionParameters: ConversionParameters_1.ConversionParameters.sRGB()
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CONVERSION_STARTED = 'CONVERSION_STARTED';
function conversionStarted() {
    return {
        type: exports.CONVERSION_STARTED
    };
}
exports.conversionStarted = conversionStarted;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_ILLUMINANT_TYPE = 'CHANGE_ILLUMINANT_TYPE';
function changeIlluminantType(illuminantType, whitePoint) {
    return {
        type: exports.CHANGE_ILLUMINANT_TYPE,
        illuminantType,
        whitePoint
    };
}
exports.changeIlluminantType = changeIlluminantType;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_SELECTED_COLOR_SPACE = 'CHANGE_SELECTED_COLOR_SPACE';
function changeSelectedColorSpace(colorSpace) {
    return {
        type: exports.CHANGE_SELECTED_COLOR_SPACE,
        colorSpace
    };
}
exports.changeSelectedColorSpace = changeSelectedColorSpace;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IlluminantType;
(function (IlluminantType) {
    IlluminantType[IlluminantType["A"] = 0] = "A";
    IlluminantType[IlluminantType["B"] = 1] = "B";
    IlluminantType[IlluminantType["C"] = 2] = "C";
    IlluminantType[IlluminantType["D50"] = 3] = "D50";
    IlluminantType[IlluminantType["D55"] = 4] = "D55";
    IlluminantType[IlluminantType["D65"] = 5] = "D65";
    IlluminantType[IlluminantType["D75"] = 6] = "D75";
    IlluminantType[IlluminantType["E"] = 7] = "E";
    IlluminantType[IlluminantType["F2"] = 8] = "F2";
    IlluminantType[IlluminantType["F7"] = 9] = "F7";
    IlluminantType[IlluminantType["F11"] = 10] = "F11";
    IlluminantType[IlluminantType["Custom"] = 11] = "Custom";
})(IlluminantType = exports.IlluminantType || (exports.IlluminantType = {}));
exports.predefinedIlluminants = [
    { illuminantType: IlluminantType.A, whitePoint: () => ({ x: 0.44757, y: 0.40733 }) },
    { illuminantType: IlluminantType.B, whitePoint: () => ({ x: 0.3484, y: 0.3516 }) },
    { illuminantType: IlluminantType.C, whitePoint: () => ({ x: 0.31006, y: 0.31615 }) },
    { illuminantType: IlluminantType.D50, whitePoint: () => ({ x: 0.34567, y: 0.3585 }) },
    { illuminantType: IlluminantType.D55, whitePoint: () => ({ x: 0.33242, y: 0.34743 }) },
    { illuminantType: IlluminantType.D65, whitePoint: () => ({ x: 0.31273, y: 0.32902 }) },
    { illuminantType: IlluminantType.D75, whitePoint: () => ({ x: 0.29902, y: 0.31485 }) },
    { illuminantType: IlluminantType.E, whitePoint: () => ({ x: 0.33333, y: 0.33333 }) },
    { illuminantType: IlluminantType.F2, whitePoint: () => ({ x: 0.37207, y: 0.37512 }) },
    { illuminantType: IlluminantType.F7, whitePoint: () => ({ x: 0.31285, y: 0.32918 }) },
    { illuminantType: IlluminantType.F11, whitePoint: () => ({ x: 0.38054, y: 0.37691 }) }
];
exports.labeledIlluminants = [
    { value: IlluminantType.A, label: 'A' },
    { value: IlluminantType.B, label: 'B' },
    { value: IlluminantType.C, label: 'C' },
    { value: IlluminantType.D50, label: 'D50' },
    { value: IlluminantType.D55, label: 'D55' },
    { value: IlluminantType.D65, label: 'D65' },
    { value: IlluminantType.D75, label: 'D75' },
    { value: IlluminantType.E, label: 'E' },
    { value: IlluminantType.F2, label: 'F2' },
    { value: IlluminantType.F7, label: 'F7' },
    { value: IlluminantType.F11, label: 'F11' },
    { value: IlluminantType.Custom, label: 'Custom' }
];


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
function LabeledSelect(id, options, selectedOption, onChange) {
    return esm_1.wire() `
    <select id=${id} onchange=${(event) => onChange(getValueFromSelectEvent(options, event))}>
      ${options.map(option => LabeledOption(option, selectedOption))}
    </select>
  `;
}
exports.LabeledSelect = LabeledSelect;
function LabeledOption(labeledOption, selectedValue) {
    return esm_1.wire() `
    <option
      value=${labeledOption.value}
      selected=${labeledOption.value === selectedValue}
    >
      ${labeledOption.label}
    </option>
  `;
}
function getValueFromSelectEvent(options, event) {
    const select = event.target;
    const value = parseInt(select.value, 10);
    const selectedOption = options.find(option => option.value === value);
    if (!selectedOption) {
        throw new Error('Selected <option> not found in options parameter');
    }
    return selectedOption.value;
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractMatrix__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matrix__ = __webpack_require__(9);



class WrapperMatrix1D extends Object(__WEBPACK_IMPORTED_MODULE_0__abstractMatrix__["a" /* default */])() {
    /**
     * @class WrapperMatrix1D
     * @param {Array<number>} data
     * @param {object} [options]
     * @param {object} [options.rows = 1]
     */
    constructor(data, options = {}) {
        const {
            rows = 1
        } = options;

        if (data.length % rows !== 0) {
            throw new Error('the data length is not divisible by the number of rows');
        }
        super();
        this.rows = rows;
        this.columns = data.length / rows;
        this.data = data;
    }

    set(rowIndex, columnIndex, value) {
        var index = this._calculateIndex(rowIndex, columnIndex);
        this.data[index] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        var index = this._calculateIndex(rowIndex, columnIndex);
        return this.data[index];
    }

    _calculateIndex(row, column) {
        return (row * this.columns) + column;
    }

    static get [Symbol.species]() {
        return __WEBPACK_IMPORTED_MODULE_1__matrix__["a" /* default */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WrapperMatrix1D;



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractMatrix__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matrix__ = __webpack_require__(9);



class WrapperMatrix2D extends Object(__WEBPACK_IMPORTED_MODULE_0__abstractMatrix__["a" /* default */])() {
    /**
     * @class WrapperMatrix2D
     * @param {Array<Array<number>>} data
     */
    constructor(data) {
        super();
        this.data = data;
        this.rows = data.length;
        this.columns = data[0].length;
    }

    set(rowIndex, columnIndex, value) {
        this.data[rowIndex][columnIndex] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.data[rowIndex][columnIndex];
    }

    static get [Symbol.species]() {
        return __WEBPACK_IMPORTED_MODULE_1__matrix__["a" /* default */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WrapperMatrix2D;



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(25);



/**
 * @class QrDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
 * @param {Matrix} value
 */
class QrDecomposition {
    constructor(value) {
        value = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(value);

        var qr = value.clone();
        var m = value.rows;
        var n = value.columns;
        var rdiag = new Array(n);
        var i, j, k, s;

        for (k = 0; k < n; k++) {
            var nrm = 0;
            for (i = k; i < m; i++) {
                nrm = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(nrm, qr.get(i, k));
            }
            if (nrm !== 0) {
                if (qr.get(k, k) < 0) {
                    nrm = -nrm;
                }
                for (i = k; i < m; i++) {
                    qr.set(i, k, qr.get(i, k) / nrm);
                }
                qr.set(k, k, qr.get(k, k) + 1);
                for (j = k + 1; j < n; j++) {
                    s = 0;
                    for (i = k; i < m; i++) {
                        s += qr.get(i, k) * qr.get(i, j);
                    }
                    s = -s / qr.get(k, k);
                    for (i = k; i < m; i++) {
                        qr.set(i, j, qr.get(i, j) + s * qr.get(i, k));
                    }
                }
            }
            rdiag[k] = -nrm;
        }

        this.QR = qr;
        this.Rdiag = rdiag;
    }

    /**
     * Solve a problem of least square (Ax=b) by using the QR decomposition. Useful when A is rectangular, but not working when A is singular.
     * Example : We search to approximate x, with A matrix shape m*n, x vector size n, b vector size m (m > n). We will use :
     * var qr = QrDecomposition(A);
     * var x = qr.solve(b);
     * @param {Matrix} value - Matrix 1D which is the vector b (in the equation Ax = b)
     * @return {Matrix} - The vector x
     */
    solve(value) {
        value = __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].checkMatrix(value);

        var qr = this.QR;
        var m = qr.rows;

        if (value.rows !== m) {
            throw new Error('Matrix row dimensions must agree');
        }
        if (!this.isFullRank()) {
            throw new Error('Matrix is rank deficient');
        }

        var count = value.columns;
        var X = value.clone();
        var n = qr.columns;
        var i, j, k, s;

        for (k = 0; k < n; k++) {
            for (j = 0; j < count; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * X[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    X[i][j] += s * qr[i][k];
                }
            }
        }
        for (k = n - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= this.Rdiag[k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * qr[i][k];
                }
            }
        }

        return X.subMatrix(0, n - 1, 0, count - 1);
    }

    /**
     *
     * @return {boolean}
     */
    isFullRank() {
        var columns = this.QR.columns;
        for (var i = 0; i < columns; i++) {
            if (this.Rdiag[i] === 0) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     * @return {Matrix}
     */
    get upperTriangularMatrix() {
        var qr = this.QR;
        var n = qr.columns;
        var X = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](n, n);
        var i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (i < j) {
                    X[i][j] = qr[i][j];
                } else if (i === j) {
                    X[i][j] = this.Rdiag[i];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {Matrix}
     */
    get orthogonalMatrix() {
        var qr = this.QR;
        var rows = qr.rows;
        var columns = qr.columns;
        var X = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](rows, columns);
        var i, j, k, s;

        for (k = columns - 1; k >= 0; k--) {
            for (i = 0; i < rows; i++) {
                X[i][k] = 0;
            }
            X[k][k] = 1;
            for (j = k; j < columns; j++) {
                if (qr[k][k] !== 0) {
                    s = 0;
                    for (i = k; i < rows; i++) {
                        s += qr[i][k] * X[i][j];
                    }

                    s = -s / qr[k][k];

                    for (i = k; i < rows; i++) {
                        X[i][j] += s * qr[i][k];
                    }
                }
            }
        }
        return X;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = QrDecomposition;



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(46);
__webpack_require__(49);
const Application_1 = __webpack_require__(50);
const esm_1 = __webpack_require__(1);
window.onload = bootstrap;
function bootstrap() {
    const applicationContainer = document.querySelector('.application');
    if (!applicationContainer) {
        throw new Error('Application container not found');
    }
    const application = new Application_1.Application();
    // tslint:disable-next-line no-unused-expression
    esm_1.bind(applicationContainer) `${application}`;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n.container {\n  margin: auto; }\n\n.footer {\n  margin: auto;\n  font-size: 0.8em;\n  margin-top: 3rem;\n  text-align: center; }\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const ImagePicker_1 = __webpack_require__(57);
const ColorSpacePicker_1 = __webpack_require__(78);
const OriginalImageDisplay_1 = __webpack_require__(79);
const ResultsDisplay_1 = __webpack_require__(82);
const StartConversionButton_1 = __webpack_require__(85);
const appStore_1 = __webpack_require__(2);
const configuration_1 = __webpack_require__(36);
const ImageLoader_1 = __webpack_require__(112);
const changeOriginalImage_1 = __webpack_require__(20);
const ConversionParametersBox_1 = __webpack_require__(113);
class Application extends esm_1.Component {
    constructor() {
        super();
        this.imagePicker = new ImagePicker_1.ImagePicker();
        this.originalImageDisplay = new OriginalImageDisplay_1.OriginalImageDisplay();
        this.colorSpacePicker = new ColorSpacePicker_1.ColorSpacePicker();
        this.conversionParameterBox = new ConversionParametersBox_1.ConversionParametersBox();
        this.startConversionButton = new StartConversionButton_1.StartConversionButton();
        this.resultsDisplay = new ResultsDisplay_1.ResultsDisplay();
        this.loadDefaultImage();
    }
    render() {
        return this.html `
      <div class="container">
        <h1>Color converter</h1>
        ${this.imagePicker}
        ${this.originalImageDisplay}
        ${this.colorSpacePicker}
        ${this.conversionParameterBox}
        ${this.startConversionButton}
        ${this.resultsDisplay}

        <footer class="footer">Created by Grzegorz Rozdzialik @ 2017</footer>
      </div>
    `;
    }
    loadDefaultImage() {
        return __awaiter(this, void 0, void 0, function* () {
            const defaultImageUrl = configuration_1.configuration.defaultImageUrl;
            const imageLoader = new ImageLoader_1.ImageLoader();
            const image = yield imageLoader.loadImage(defaultImageUrl);
            appStore_1.appStore.dispatch(changeOriginalImage_1.changeOriginalImage(image));
        });
    }
}
exports.Application = Application;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__easy_dom_js__ = __webpack_require__(7);


const testFragment = Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["c" /* fragment */])(document);

// DOM4 node.append(...many)
const hasAppend = 'append' in testFragment;
/* harmony export (immutable) */ __webpack_exports__["a"] = hasAppend;


// detect old browsers without HTMLTemplateElement content support
const hasContent = 'content' in Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["a" /* create */])(document, 'template');
/* harmony export (immutable) */ __webpack_exports__["b"] = hasContent;


// IE 11 has problems with cloning templates: it "forgets" empty childNodes
testFragment.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["d" /* text */])(testFragment, 'g'));
testFragment.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["d" /* text */])(testFragment, ''));
const hasDoomedCloneNode = testFragment.cloneNode(true).childNodes.length === 1;
/* harmony export (immutable) */ __webpack_exports__["c"] = hasDoomedCloneNode;


// old browsers need to fallback to cloneNode
// Custom Elements V0 and V1 will work polyfilled
// but native implementations need importNode instead
// (specially Chromium and its old V0 implementation)
const hasImportNode = 'importNode' in document;
/* harmony export (immutable) */ __webpack_exports__["d"] = hasImportNode;



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = ({
  update: (
    utils, parentNode, commentNode,
    liveNodes, liveStart, liveEnd, liveLength,
    virtualNodes, virtualStart, virtualEnd /*, virtualLength */
  ) => {
    while (liveStart < liveEnd && virtualStart < virtualEnd) {
      const liveValue = liveNodes[liveStart];
      const virtualValue = virtualNodes[virtualStart];
      const status = liveValue === virtualValue ?
                      0 : (liveNodes.indexOf(virtualValue) < 0 ? 1 : -1);
      // nodes can be either removed ...
      if (status < 0) {
        __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["f" /* splice */].call(liveNodes, liveStart, 1);
        parentNode.removeChild(utils.getNode(liveValue));
        liveEnd--;
        liveLength--;
      }
      // ... appended ...
      else if (0 < status) {
        __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["f" /* splice */].call(liveNodes, liveStart, 0, virtualValue);
        parentNode.insertBefore(utils.getNode(virtualValue), utils.getNode(liveValue));
        liveStart++;
        liveEnd++;
        liveLength++;
        virtualStart++;
      }
      // ... or ignored, since it's the same ...
      else {
        liveStart++;
        virtualStart++;
      }
    }
    if (liveStart < liveEnd) {
      const remove = __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["f" /* splice */].call(liveNodes, liveStart, liveEnd - liveStart);
      liveStart = remove.length;
      while (liveStart--) {
        parentNode.removeChild(utils.getNode(remove[liveStart]));
      }
    }
    if (virtualStart < virtualEnd) {
      __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["f" /* splice */].apply(
        liveNodes,
        [liveEnd, 0].concat(
          utils.insert(
            parentNode,
            __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["e" /* slice */].call(virtualNodes, virtualStart, virtualEnd),
            liveEnd < liveLength ?
              utils.getNode(liveNodes[liveEnd]) : commentNode
          )
        )
      );
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return weakly; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_easy_dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_js__ = __webpack_require__(28);






// all wires used per each context
const wires = new __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__["c" /* WeakMap */];

// A wire is a callback used as tag function
// to lazily relate a generic object to a template literal.
// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
// This provides the ability to have a unique DOM structure
// related to a unique JS object through a reusable template literal.
// A wire can specify a type, as svg or html, and also an id
// via html:id or :id convention. Such :id allows same JS objects
// to be associated to different DOM structures accordingly with
// the used template literal without losing previously rendered parts.
const wire = (obj, type) => obj == null ?
  content(type || 'html') :
  weakly(obj, type || 'html');

// A wire content is a virtual reference to one or more nodes.
// It's represented by either a DOM node, or an Array.
// In both cases, the wire content role is to simply update
// all nodes through the list of related callbacks.
// In few words, a wire content is like an invisible parent node
// in charge of updating its content like a bound element would do.
const content = type => {
  let wire, container, content, template, updates;
  return function (statics) {
    statics = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["g" /* unique */])(statics);
    let setup = template !== statics;
    if (setup) {
      template = statics;
      content = Object(__WEBPACK_IMPORTED_MODULE_2__shared_easy_dom_js__["c" /* fragment */])(document);
      container = type === 'svg' ?
        document.createElementNS(__WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["h" /* SVG_NAMESPACE */], 'svg') :
        content;
      updates = __WEBPACK_IMPORTED_MODULE_4__render_js__["a" /* default */].bind(container);
    }
    updates.apply(null, arguments);
    if (setup) {
      if (type === 'svg') {
        Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["a" /* append */])(content, __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["e" /* slice */].call(container.childNodes));
      }
      wire = wireContent(content);
    }
    return wire;
  };
};

// wires are weakly created through objects.
// Each object can have multiple wires associated
// and this is thanks to the type + :id feature.
const weakly = (obj, type) => {
  const i = type.indexOf(':');
  let wire = wires.get(obj);
  let id = type;
  if (-1 < i) {
    id = type.slice(i + 1);
    type = type.slice(0, i) || 'html';
  }
  if (!wire) wires.set(obj, wire = {});
  return wire[id] || (wire[id] = content(type));
};

// a document fragment loses its nodes as soon
// as it's appended into another node.
// This would easily lose wired content
// so that on a second render call, the parent
// node wouldn't know which node was there
// associated to the interpolation.
// To prevent hyperHTML to forget about wired nodes,
// these are either returned as Array or, if there's ony one entry,
// as single referenced node that won't disappear from the fragment.
// The initial fragment, at this point, would be used as unique reference.
const wireContent = node => {
  const childNodes = node.childNodes;
  const length = childNodes.length;
  const wire = [];
  for (let i = 0; i < length; i++) {
    let child = childNodes[i];
    if (
      child.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */] ||
      __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__["f" /* trim */].call(child.textContent).length !== 0
    ) {
      wire.push(child);
    }
  }
  return wire.length === 1 ? wire[0] : wire;
};


/* harmony default export */ __webpack_exports__["b"] = (wire);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Megatron_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Path_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Style_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Intent_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_easy_dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_poorlyfills_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_utils_js__ = __webpack_require__(6);











// hyper.Component have a connected/disconnected
// mechanism provided by MutationObserver
// This weak set is used to recognize components
// as DOM node that needs to trigger connected/disconnected events
const components = new __WEBPACK_IMPORTED_MODULE_7__shared_poorlyfills_js__["d" /* WeakSet */];

// a basic dictionary used to filter already cached attributes
// while looking for special hyperHTML values.
function Cache() {}
Cache.prototype = Object.create(null);

// returns an intent to explicitly inject content as html
const asHTML = html => ({html});

// updates are created once per context upgrade
// within the main render function (../hyper/render.js)
// These are an Array of callbacks to invoke passing
// each interpolation value.
// Updates can be related to any kind of content,
// attributes, or special text-only cases such <style>
// elements or <textarea>
const create = (root, paths) => {
  const updates = [];
  const length = paths.length;
  for (let i = 0; i < length; i++) {
    const info = paths[i];
    const node = __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].find(root, info.path);
    switch (info.type) {
      case 'any':
        updates.push(setAnyContent(node, []));
        break;
      case 'attr':
        updates.push(setAttribute(node, info.name, info.node));
        break;
      case 'text':
        updates.push(setTextContent(node));
        break;
    }
  }
  return updates;
};

// finding all paths is a one-off operation performed
// when a new template literal is used.
// The goal is to map all target nodes that will be
// used to update content/attributes every time
// the same template literal is used to create content.
// The result is a list of paths related to the template
// with all the necessary info to create updates as
// list of callbacks that target directly affected nodes.
const find = (node, paths, parts) => {
  const childNodes = node.childNodes;
  const length = childNodes.length;
  for (let i = 0; i < length; i++) {
    let child = childNodes[i];
    switch (child.nodeType) {
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */]:
        findAttributes(child, paths, parts);
        find(child, paths, parts);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["a" /* COMMENT_NODE */]:
        if (child.textContent === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["j" /* UID */]) {
          parts.shift();
          paths.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["g" /* SHOULD_USE_TEXT_CONTENT */].test(node.nodeName) ?
              __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('text', node) :
              __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('any', child)
          );
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["i" /* TEXT_NODE */]:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior
        /* istanbul ignore if */
        if (
          __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["g" /* SHOULD_USE_TEXT_CONTENT */].test(node.nodeName) &&
          __WEBPACK_IMPORTED_MODULE_7__shared_poorlyfills_js__["f" /* trim */].call(child.textContent) === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["k" /* UIDC */]
        ) {
          parts.shift();
          paths.push(__WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('text', node));
        }
        break;
    }
  }
};

// attributes are searched via unique hyperHTML id value.
// Despite HTML being case insensitive, hyperHTML is able
// to recognize attributes by name in a caseSensitive way.
// This plays well with Custom Elements definitions
// and also with XML-like environments, without trusting
// the resulting DOM but the template literal as the source of truth.
// IE/Edge has a funny bug with attributes and these might be duplicated.
// This is why there is a cache in charge of being sure no duplicated
// attributes are ever considered in future updates.
const findAttributes = (node, paths, parts) => {
  const cache = new Cache;
  const attributes = node.attributes;
  const array = __WEBPACK_IMPORTED_MODULE_8__shared_utils_js__["e" /* slice */].call(attributes);
  const remove = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const attribute = array[i];
    if (attribute.value === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["j" /* UID */]) {
      const name = attribute.name;
      // the following ignore is covered by IE
      // and the IE9 double viewBox test
      /* istanbul ignore else */
      if (!(name in cache)) {
        const realName = parts.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, '$1');
        cache[name] = attributes[realName] ||
                      // the following ignore is covered by browsers
                      // while basicHTML is already case-sensitive
                      /* istanbul ignore next */
                      attributes[realName.toLowerCase()];
        paths.push(__WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('attr', cache[name], realName));
      }
      remove.push(attribute);
    }
  }
  const len = remove.length;
  for (let i = 0; i < len; i++) {
    node.removeAttributeNode(remove[i]);
  }
};

// when a Promise is used as interpolation value
// its result must be parsed once resolved.
// This callback is in charge of understanding what to do
// with a returned value once the promise is resolved.
const invokeAtDistance = (value, callback) => {
  callback(value.placeholder);
  if ('text' in value) {
    Promise.resolve(value.text).then(String).then(callback);
  } else if ('any' in value) {
    Promise.resolve(value.any).then(callback);
  } else if ('html' in value) {
    Promise.resolve(value.html).then(asHTML).then(callback);
  } else {
    Promise.resolve(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, callback)).then(callback);
  }
};

// quick and dirty ways to check a value type without abusing instanceof
const isNode_ish = value => 'ELEMENT_NODE' in value;
const isPromise_ish = value => value != null && 'then' in value;

// in a hyper(node)`<div>${content}</div>` case
// everything could happen:
//  * it's a JS primitive, stored as text
//  * it's null or undefined, the node should be cleaned
//  * it's a component, update the content by rendering it
//  * it's a promise, update the content once resolved
//  * it's an explicit intent, perform the desired operation
//  * it's an Array, resolve all values if Promises and/or
//    update the node with the resulting list of content
const setAnyContent = (node, childNodes) => {
  const transformer = new __WEBPACK_IMPORTED_MODULE_1__classes_Megatron_js__["a" /* default */](node, childNodes);
  let fastPath = false;
  let oldValue;
  const anyContent = value => {
    switch (typeof value) {
      case 'string':
      case 'number':
      case 'boolean':
        if (fastPath) {
          if (oldValue !== value) {
            oldValue = value;
            childNodes[0].textContent = value;
          }
        } else {
          fastPath = true;
          oldValue = value;
          transformer.empty(Object(__WEBPACK_IMPORTED_MODULE_6__shared_easy_dom_js__["d" /* text */])(node, value));
        }
        break;
      case 'object':
      case 'undefined':
        if (value == null) {
          fastPath = false;
          transformer.empty();
          break;
        }
      default:
        fastPath = false;
        oldValue = value;
        if (Object(__WEBPACK_IMPORTED_MODULE_7__shared_poorlyfills_js__["e" /* isArray */])(value)) {
          if (value.length === 0) {
            transformer.empty();
          } else {
            switch (typeof value[0]) {
              case 'string':
              case 'number':
              case 'boolean':
                anyContent({html: value});
                break;
              case 'object':
                if (Object(__WEBPACK_IMPORTED_MODULE_7__shared_poorlyfills_js__["e" /* isArray */])(value[0])) {
                  value = value.concat.apply([], value);
                }
                if (isPromise_ish(value[0])) {
                  Promise.all(value).then(anyContent);
                  break;
                }
              default:
                transformer.become(value);
                break;
            }
          }
        } else if (value instanceof __WEBPACK_IMPORTED_MODULE_2__classes_Component_js__["a" /* default */]) {
          transformer.empty(value);
        } else if (isNode_ish(value)) {
          transformer.become(value.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["d" /* DOCUMENT_FRAGMENT_NODE */] ?
            __WEBPACK_IMPORTED_MODULE_8__shared_utils_js__["e" /* slice */].call(value.childNodes) :
            [value]);
        } else if (isPromise_ish(value)) {
          value.then(anyContent);
        } else if ('placeholder' in value) {
          invokeAtDistance(value, anyContent);
        } else if ('text' in value) {
          anyContent(String(value.text));
        } else if ('any' in value) {
          anyContent(value.any);
        } else if ('html' in value) {
          transformer.empty();
          const fragment = Object(__WEBPACK_IMPORTED_MODULE_8__shared_utils_js__["b" /* createFragment */])(node, [].concat(value.html).join(''));
          childNodes.push.apply(childNodes, fragment.childNodes);
          node.parentNode.insertBefore(fragment, node);
        } else if ('length' in value) {
          anyContent(__WEBPACK_IMPORTED_MODULE_8__shared_utils_js__["e" /* slice */].call(value));
        } else {
          anyContent(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, anyContent));
        }
        break;
    }
  };
  return anyContent;
};

// there are four kind of attributes, and related behavior:
//  * events, with a name starting with `on`, to add/remove event listeners
//  * special, with a name present in their inherited prototype, accessed directly
//  * regular, accessed through get/setAttribute standard DOM methods
//  * style, the only regular attribute that also accepts an object as value
//    so that you can style=${{width: 120}}. In this case, the behavior has been
//    fully inspired by Preact library and its simplicity.
const setAttribute = (node, name, original) => {
  const isSVG = __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["f" /* OWNER_SVG_ELEMENT */] in node;
  let oldValue;
  // if the attribute is the style one
  // handle it differently from others
  if (name === 'style') {
    return Object(__WEBPACK_IMPORTED_MODULE_4__Style_js__["a" /* default */])(node, original, isSVG);
  }
  // the name is an event one,
  // add/remove event listeners accordingly
  else if (/^on/.test(name)) {
    let type = name.slice(2);
    if (type === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* CONNECTED */] || type === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["c" /* DISCONNECTED */]) {
      if (notObserving) {
        notObserving = false;
        observe();
      }
      components.add(node);
    }
    else if (name.toLowerCase() in node) {
      type = type.toLowerCase();
    }
    return newValue => {
      if (oldValue !== newValue) {
        if (oldValue) node.removeEventListener(type, oldValue, false);
        oldValue = newValue;
        if (newValue) node.addEventListener(type, newValue, false);
      }
    };
  }
  // the attribute is special ('value' in input)
  // and it's not SVG *or* the name is exactly data,
  // in this case assign the value directly
  else if (name === 'data' || (!isSVG && name in node)) {
    return newValue => {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (node[name] !== newValue) {
          node[name] = newValue;
          if (newValue == null) {
            node.removeAttribute(name);
          }
        }
      }
    };
  }
  // in every other case, use the attribute node as it is
  // update only the value, set it as node only when/if needed
  else {
    let owner = false;
    const attribute = original.cloneNode(true);
    return newValue => {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (attribute.value !== newValue) {
          if (newValue == null) {
            if (owner) {
              owner = false;
              node.removeAttributeNode(attribute);
            }
          } else {
            attribute.value = newValue;
            if (!owner) {
              owner = true;
              node.setAttributeNode(attribute);
            }
          }
        }
      }
    };
  }
};

// style or textareas don't accept HTML as content
// it's pointless to transform or analyze anything
// different from text there but it's worth checking
// for possible defined intents.
const setTextContent = node => {
  let oldValue;
  const textContent = value => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === 'object' && value) {
        if (isPromise_ish(value)) {
          value.then(textContent);
        } else if ('placeholder' in value) {
          invokeAtDistance(value, textContent);
        } else if ('text' in value) {
          textContent(String(value.text));
        } else if ('any' in value) {
          textContent(value.any);
        } else if ('html' in value) {
          textContent([].concat(value.html).join(''));
        } else if ('length' in value) {
          textContent(__WEBPACK_IMPORTED_MODULE_8__shared_utils_js__["e" /* slice */].call(value).join(''));
        } else {
          textContent(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, textContent));
        }
      } else {
        node.textContent = value == null ? '' : value;
      }
    }
  };
  return textContent;
};

/* harmony default export */ __webpack_exports__["a"] = ({create, find});

// hyper.Components might need connected/disconnected notifications
// used by components and their onconnect/ondisconnect callbacks.
// When one of these callbacks is encountered,
// the document starts being observed.
let notObserving = true;
function observe() {

  // when hyper.Component related DOM nodes
  // are appended or removed from the live tree
  // these might listen to connected/disconnected events
  // This utility is in charge of finding all components
  // involved in the DOM update/change and dispatch
  // related information to them
  const dispatchAll = (nodes, type) => {
    const event = new __WEBPACK_IMPORTED_MODULE_7__shared_poorlyfills_js__["a" /* Event */](type);
    const length = nodes.length;
    for (let i = 0; i < length; i++) {
      let node = nodes[i];
      if (node.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */]) {
        dispatchTarget(node, event);
      }
    }
  };

  // the way it's done is via the components weak set
  // and recursively looking for nested components too
  const dispatchTarget = (node, event) => {
    if (components.has(node)) {
      node.dispatchEvent(event);
    } else {
      const children = node.children;
      const length = children.length;
      for (let i = 0; i < length; i++) {
        dispatchTarget(children[i], event);
      }
    }
  }

  // The MutationObserver is the best way to implement that
  // but there is a fallback to deprecated DOMNodeInserted/Removed
  // so that even older browsers/engines can help components life-cycle
  try {
    (new MutationObserver(records => {
      const length = records.length;
      for (let i = 0; i < length; i++) {
        let record = records[i];
        dispatchAll(record.removedNodes, __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["c" /* DISCONNECTED */]);
        dispatchAll(record.addedNodes, __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* CONNECTED */]);
      }
    })).observe(document, {subtree: true, childList: true});
  } catch(o_O) {
    document.addEventListener('DOMNodeRemoved', event => {
      dispatchAll([event.target], __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["c" /* DISCONNECTED */]);
    }, false);
    document.addEventListener('DOMNodeInserted', event => {
      dispatchAll([event.target], __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* CONNECTED */]);
    }, false);
  }
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(4);


// every template literal interpolation indicates
// a precise target in the DOM the template is representing.
// `<p id=${'attribute'}>some ${'content'}</p>`
// hyperHTML finds only once per template literal,
// hence once per entire application life-cycle,
// all nodes that are related to interpolations.
// These nodes are stored as indexes used to retrieve,
// once per upgrade, nodes that will change on each future update.
// A path example is [2, 0, 1] representing the operation:
// node.childNodes[2].childNodes[0].childNodes[1]
// Attributes are addressed via their owner node and their name.
const createPath = node => {
  const path = [];
  let parentNode;
  switch (node.nodeType) {
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */]:
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["d" /* DOCUMENT_FRAGMENT_NODE */]:
      parentNode = node;
      break;
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["a" /* COMMENT_NODE */]:
      parentNode = node.parentNode;
      prepend(path, parentNode, node);
      break;
    default:
      parentNode = node.ownerElement;
      break;
  }
  for (
    node = parentNode;
    (parentNode = parentNode.parentNode);
    node = parentNode
  ) {
    prepend(path, parentNode, node);
  }
  return path;
};

const prepend = (path, parent, node) => {
  path.unshift(path.indexOf.call(parent.childNodes, node));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  create: (type, node, name) => ({type, name, node, path: createPath(node)}),
  find: (node, path) => {
    const length = path.length;
    for (let i = 0; i < length; i++) {
      node = node.childNodes[path[i]];
    }
    return node;
  }
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/constants.js
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

// style is handled as both string and object
// even if the target is an SVG element (consistency)
/* harmony default export */ __webpack_exports__["a"] = ((node, original, isSVG) => {
  if (isSVG) {
    const style = original.cloneNode(true);
    style.value = '';
    node.setAttributeNode(style);
    return update(style, isSVG);
  }
  return update(node.style, isSVG);
});

// the update takes care or changing/replacing
// only properties that are different or
// in case of string, the whole node
const update = (style, isSVG) => {
  let oldType, oldValue;
  return newValue => {
    switch (typeof newValue) {
      case 'object':
        if (newValue) {
          if (oldType === 'object') {
            if (!isSVG) {
              if (oldValue !== newValue) {
                for (const key in oldValue) {
                  if (!(key in newValue)) {
                    style[key] = '';
                  }
                }
              }
            }
          } else {
            if (isSVG) style.value = '';
            else style.cssText = '';
          }
          const info = isSVG ? {} : style;
          for (const key in newValue) {
            const value = newValue[key];
            info[key] = typeof value === 'number' &&
                        !IS_NON_DIMENSIONAL.test(key) ?
                          (value + 'px') : value;
          }
          oldType = 'object';
          if (isSVG) style.value = toStyle((oldValue = info));
          else oldValue = newValue;
          break;
        }
      default:
        if (oldValue != newValue) {
          oldType = 'string';
          oldValue = newValue;
          if (isSVG) style.value = newValue || '';
          else style.cssText = newValue || '';
        }
        break;
    }
  };
};

const hyphen = /([^A-Z])([A-Z]+)/g;
const ized = ($0, $1, $2) => $1 + '-' + $2.toLowerCase();
const toStyle = object => {
  const css = [];
  for (const key in object) {
    css.push(key.replace(hyphen, ized), ':', object[key], ';');
  }
  return css.join('');
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HyperComponent_1 = __webpack_require__(16);
const appStore_1 = __webpack_require__(2);
const FileToImageConverter_1 = __webpack_require__(77);
const changeOriginalImage_1 = __webpack_require__(20);
class ImagePicker extends HyperComponent_1.HyperComponent {
    constructor() {
        super();
        this.onImageChange = this.onImageChange.bind(this);
    }
    render() {
        return this.html `
      <div class="image-picker">
        <h2>Image picker</h2>
        <input type="file" name="image" accept="image/*"
          onchange=${this.onImageChange}>
      </div>
    `;
    }
    onImageChange(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = event.target.files;
            if (!files) {
                return;
            }
            const fileToImageConverter = new FileToImageConverter_1.FileToImageConverter();
            const image = yield fileToImageConverter.convertFile(files[0]);
            appStore_1.appStore.dispatch(changeOriginalImage_1.changeOriginalImage(image));
        });
    }
}
exports.ImagePicker = ImagePicker;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(29)))

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(63);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(61);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(33)))

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(32);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(65);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(70);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), __webpack_require__(69)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(34);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(29)))

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(36);
const mergeState_1 = __webpack_require__(75);
const conversionFinished_1 = __webpack_require__(18);
const conversionStarted_1 = __webpack_require__(37);
const changeColorProfileType_1 = __webpack_require__(19);
const changeIlluminantType_1 = __webpack_require__(38);
const changeOriginalImage_1 = __webpack_require__(20);
const changeSelectedColorSpace_1 = __webpack_require__(39);
const ColorProfileType_1 = __webpack_require__(21);
const ConversionParameters_1 = __webpack_require__(17);
const IlluminantType_1 = __webpack_require__(40);
const defaultState = {
    originalImage: null,
    selectedColorSpace: configuration_1.configuration.defaultColorSpace,
    conversionAvailable: false,
    conversionInProgress: false,
    conversionParameters: configuration_1.configuration.defaultConversionParameters,
    colorProfileType: ColorProfileType_1.ColorProfileType.sRGB,
    illuminantType: IlluminantType_1.IlluminantType.Custom
};
function inputReducer(state = defaultState, action) {
    switch (action.type) {
        case changeOriginalImage_1.CHANGE_ORIGINAL_IMAGE:
            const newState = mergeState_1.mergeState(state, {
                originalImage: action.image
            });
            newState.conversionAvailable = isConversionAvailable(newState);
            return newState;
        case changeSelectedColorSpace_1.CHANGE_SELECTED_COLOR_SPACE:
            return mergeState_1.mergeState(state, {
                selectedColorSpace: action.colorSpace
            });
        case conversionStarted_1.CONVERSION_STARTED:
            return mergeState_1.mergeState(state, {
                conversionAvailable: false,
                conversionInProgress: true
            });
        case conversionFinished_1.CONVERSION_FINISHED:
            return mergeState_1.mergeState(state, {
                conversionAvailable: true,
                conversionInProgress: false
            });
        case changeColorProfileType_1.CHANGE_COLOR_PROFILE_TYPE:
            return mergeState_1.mergeState(state, {
                colorProfileType: action.colorProfileType,
                illuminantType: IlluminantType_1.IlluminantType.Custom,
                conversionParameters: action.conversionParameters
            });
        case changeIlluminantType_1.CHANGE_ILLUMINANT_TYPE:
            const currentConversionParameters = state.conversionParameters;
            return mergeState_1.mergeState(state, {
                illuminantType: action.illuminantType,
                colorProfileType: ColorProfileType_1.ColorProfileType.Custom,
                conversionParameters: new ConversionParameters_1.ConversionParameters(currentConversionParameters.redPoint, currentConversionParameters.greenPoint, currentConversionParameters.bluePoint, action.whitePoint, currentConversionParameters.gamma)
            });
        default:
            return state;
    }
}
exports.inputReducer = inputReducer;
function isConversionAvailable(state) {
    return !!state.originalImage && !state.conversionInProgress;
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mergeState(state, ...updates) {
    return Object.assign({}, state, ...updates);
}
exports.mergeState = mergeState;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const conversionFinished_1 = __webpack_require__(18);
const defaultState = {
    conversionResult: null,
    resultImages: []
};
function outputReducer(state = defaultState, action) {
    switch (action.type) {
        case conversionFinished_1.CONVERSION_FINISHED:
            return Object.assign({}, state, {
                conversionResult: action.conversionResult,
                resultImages: action.resultImages
            });
        default:
            return state;
    }
}
exports.outputReducer = outputReducer;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class FileToImageConverter {
    convertFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = new Image();
            image.src = yield this.getDataURLFromFile(file);
            return image;
        });
    }
    getDataURLFromFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
        });
    }
}
exports.FileToImageConverter = FileToImageConverter;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HyperContainer_1 = __webpack_require__(8);
const appStore_1 = __webpack_require__(2);
const ColorSpaceType_1 = __webpack_require__(13);
const changeSelectedColorSpace_1 = __webpack_require__(39);
const LabeledSelect_1 = __webpack_require__(41);
class ColorSpacePicker extends HyperContainer_1.HyperContainer {
    constructor() {
        super();
        this.labeledColorSpaces = [
            { value: ColorSpaceType_1.ColorSpaceType.YCbCr, label: 'YCbCr' },
            { value: ColorSpaceType_1.ColorSpaceType.HSV, label: 'HSV' },
            { value: ColorSpaceType_1.ColorSpaceType.Lab, label: 'Lab' }
        ];
        this.onColorSpaceChange = this.onColorSpaceChange.bind(this);
    }
    mapAppStateToContainerState(appState) {
        return {
            selectedColorSpace: appState.input.selectedColorSpace
        };
    }
    render() {
        const { selectedColorSpace } = this.state;
        return this.html `
      <div onconnected=${this} ondisconnected=${this}>
        <label for="color-space-select">Target color space: </label>
        ${LabeledSelect_1.LabeledSelect('color-space-select', this.labeledColorSpaces, selectedColorSpace, this.onColorSpaceChange)}
      </div>
    `;
    }
    onColorSpaceChange(newColorSpace) {
        appStore_1.appStore.dispatch(changeSelectedColorSpace_1.changeSelectedColorSpace(newColorSpace));
    }
}
exports.ColorSpacePicker = ColorSpacePicker;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const HyperContainer_1 = __webpack_require__(8);
__webpack_require__(80);
function NoImageMessage() {
    return esm_1.wire() `Please select an image first.`;
}
function DisplayImage(image) {
    return esm_1.wire() `
    <div class="original-image-wrapper">
      ${image}
    </div>
  `;
}
class OriginalImageDisplay extends HyperContainer_1.HyperContainer {
    mapAppStateToContainerState(appState) {
        return {
            image: appState.input.originalImage
        };
    }
    render() {
        const image = this.state.image;
        return this.html `
      <div onconnected=${this} ondisconnected=${this}>
        ${image ? DisplayImage(image) : NoImageMessage()}
      </div>
    `;
    }
}
exports.OriginalImageDisplay = OriginalImageDisplay;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./OriginalImageDisplay.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./OriginalImageDisplay.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".original-image-wrapper {\n  margin: 1em auto;\n  max-width: 800px;\n  max-height: 400px; }\n  .original-image-wrapper img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n    max-height: 400px;\n    height: auto; }\n", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const HyperContainer_1 = __webpack_require__(8);
__webpack_require__(83);
function NoResults() {
    return esm_1.wire() `Please click <em>RUN</em>`;
}
function Results(conversionResult, resultImages) {
    return esm_1.wire(conversionResult) `
    <div class="results">
      ${conversionResult.components.map((partialResult, index) => Result(partialResult, resultImages[index]))}
    </div>
  `;
}
function Result(partialResult, image) {
    return esm_1.wire(partialResult) `
    <div class="result">
      <div class="result__label">${partialResult.label}</div>
      ${image}
    </div>
  `;
}
class ResultsDisplay extends HyperContainer_1.HyperContainer {
    mapAppStateToContainerState(appState) {
        return {
            conversionResult: appState.output.conversionResult,
            resultImages: appState.output.resultImages
        };
    }
    render() {
        const { conversionResult, resultImages } = this.state;
        return this.html `
      <div onconnected=${this} ondisconnected=${this}>
        <h2>Results</h2>
        ${conversionResult ? Results(conversionResult, resultImages) : NoResults()}
      </div>
    `;
    }
}
exports.ResultsDisplay = ResultsDisplay;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./ResultsDisplay.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./ResultsDisplay.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".results {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column; }\n  @media (min-width: 1000px) {\n    .results {\n      flex-direction: row; } }\n\n.result {\n  margin: 0.5em;\n  max-width: 800px; }\n  .result img {\n    max-width: 100%;\n    max-height: 100%;\n    height: auto; }\n\n.result__label {\n  font-size: 2em; }\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HyperContainer_1 = __webpack_require__(8);
const conversionFinished_1 = __webpack_require__(18);
const conversionStarted_1 = __webpack_require__(37);
const appStore_1 = __webpack_require__(2);
const createColorSpaceConverter_1 = __webpack_require__(86);
const ImageDataConverter_1 = __webpack_require__(111);
class StartConversionButton extends HyperContainer_1.HyperContainer {
    constructor() {
        super();
        this.startConversion = this.startConversion.bind(this);
    }
    mapAppStateToContainerState(appState) {
        return {
            conversionAvailable: appState.input.conversionAvailable,
            image: appState.input.originalImage
        };
    }
    render() {
        const { conversionAvailable } = this.state;
        return this.html `
      <button
        onclick=${this.startConversion}
        onconnected=${this} ondisconnected=${this}
        disabled=${!conversionAvailable}>RUN</button>
    `;
    }
    startConversion() {
        if (!this.state.image) {
            return;
        }
        appStore_1.appStore.dispatch(conversionStarted_1.conversionStarted());
        const imageDataConverter = new ImageDataConverter_1.ImageDataConverter();
        const imageData = imageDataConverter.convertImageToImageData(this.state.image);
        const appState = appStore_1.appStore.getState();
        const colorSpaceConverter = createColorSpaceConverter_1.createColorSpaceConverter(appState.input.selectedColorSpace, appState.input.conversionParameters);
        const conversionResult = colorSpaceConverter.convertFromImageData(imageData);
        const resultImages = conversionResult.convertComponentsToImageData()
            .map(imageDataConverter.convertImageDataToImage);
        appStore_1.appStore.dispatch(conversionFinished_1.conversionFinished(conversionResult, resultImages));
    }
}
exports.StartConversionButton = StartConversionButton;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorSpaceType_1 = __webpack_require__(13);
const HSVColorSpaceConverter_1 = __webpack_require__(87);
const LabColorSpaceConverter_1 = __webpack_require__(89);
const YCbCrColorSpaceConverter_1 = __webpack_require__(91);
const XYZConverter_1 = __webpack_require__(93);
function createColorSpaceConverter(colorSpace, conversionParameters) {
    switch (colorSpace) {
        case ColorSpaceType_1.ColorSpaceType.HSV:
            return new HSVColorSpaceConverter_1.HSVColorSpaceConverter();
        case ColorSpaceType_1.ColorSpaceType.YCbCr:
            return new YCbCrColorSpaceConverter_1.YCbCrColorSpaceConverter();
        case ColorSpaceType_1.ColorSpaceType.Lab:
            const xyzConverter = new XYZConverter_1.XYZConverter(conversionParameters);
            return new LabColorSpaceConverter_1.LabColorSpaceConverter(xyzConverter);
        default:
            throw new Error('Unknown color space type');
    }
}
exports.createColorSpaceConverter = createColorSpaceConverter;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HSVColorSpaceConversionResult_1 = __webpack_require__(88);
const PartialConversionResult_1 = __webpack_require__(22);
class HSVColorSpaceConverter {
    convertFromImageData(imageData) {
        const { data, width, height } = imageData;
        const lastPixelIndex = width * height * 4 - 4;
        const hValues = [];
        const sValues = [];
        const vValues = [];
        for (let index = 0; index <= lastPixelIndex; index += 4) {
            const { h, s, v } = this.convertSinglePixel(data[index], data[index + 1], data[index + 2]);
            hValues.push(h);
            sValues.push(s);
            vValues.push(v);
        }
        return this.createConversionResult(hValues, sValues, vValues, width, height);
    }
    convertFromRGB(r, g, b) {
        const { h, s, v } = this.convertSinglePixel(r, g, b);
        return this.createConversionResult([h], [s], [v], 1, 1);
    }
    convertSinglePixel(r, g, b) {
        const result = {
            h: 0,
            s: 0,
            v: Math.max(r, g, b)
        };
        const min = Math.min(r, g, b);
        if (min === result.v) {
            result.h = 0;
            result.s = 0;
        }
        else {
            if (result.v === r) {
                result.h = 0 + (g - b) * 60 / (result.v - min);
            }
            else if (min === g) {
                result.h = 120 + (b - r) * 60 / (result.v - min);
            }
            else if (min === b) {
                result.h = 240 + (r - g) * 60 / (result.v - min);
            }
        }
        if (result.h < 0) {
            result.h += 360;
        }
        if (result.v === 0) {
            result.s = 0;
        }
        else {
            result.s = (result.v - min) * 100 / result.v;
        }
        result.v *= 100 / 255;
        return result;
    }
    createConversionResult(hValues, sValues, vValues, width, height) {
        const hComponent = new PartialConversionResult_1.PartialConversionResult('H', hValues, width, height);
        const sComponent = new PartialConversionResult_1.PartialConversionResult('S', sValues, width, height);
        const vComponent = new PartialConversionResult_1.PartialConversionResult('V', vValues, width, height);
        return new HSVColorSpaceConversionResult_1.HSVColorSpaceConversionResult(hComponent, sComponent, vComponent);
    }
}
exports.HSVColorSpaceConverter = HSVColorSpaceConverter;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HSVColorSpaceConversionResult {
    constructor(hComponentResult, sComponentResult, vComponentResult) {
        this.components = [hComponentResult, sComponentResult, vComponentResult];
    }
    convertComponentsToImageData() {
        return [this.getHueImageData(), this.getSaturationImageData(), this.getValueImageData()];
    }
    // tslint:disable no-increment-decrement
    getHueImageData() {
        const hComponent = this.components[0];
        const hueImageData = new ImageData(hComponent.width, hComponent.height);
        let index = 0;
        hComponent.values.forEach(hue => {
            const normalizedHue = hue / 360 * 255;
            hueImageData.data[index++] = normalizedHue;
            hueImageData.data[index++] = normalizedHue;
            hueImageData.data[index++] = normalizedHue;
            hueImageData.data[index++] = 255;
        });
        return hueImageData;
    }
    getSaturationImageData() {
        const sComponent = this.components[1];
        const saturationImageData = new ImageData(sComponent.width, sComponent.height);
        let index = 0;
        sComponent.values.forEach(saturation => {
            const normalizedSaturation = saturation / 100 * 255;
            saturationImageData.data[index++] = normalizedSaturation;
            saturationImageData.data[index++] = normalizedSaturation;
            saturationImageData.data[index++] = normalizedSaturation;
            saturationImageData.data[index++] = 255;
        });
        return saturationImageData;
    }
    getValueImageData() {
        const vComponent = this.components[2];
        const valueImageData = new ImageData(vComponent.width, vComponent.height);
        let index = 0;
        vComponent.values.forEach(value => {
            const normalizedValue = value / 100 * 255;
            valueImageData.data[index++] = normalizedValue;
            valueImageData.data[index++] = normalizedValue;
            valueImageData.data[index++] = normalizedValue;
            valueImageData.data[index++] = 255;
        });
        return valueImageData;
    }
}
exports.HSVColorSpaceConversionResult = HSVColorSpaceConversionResult;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LabColorSpaceConversionResult_1 = __webpack_require__(90);
const PartialConversionResult_1 = __webpack_require__(22);
class LabColorSpaceConverter {
    constructor(xyzConverter) {
        this.XR = 94.81;
        this.YR = 100;
        this.ZR = 107.3;
        this.xyzConverter = xyzConverter;
    }
    convertFromImageData(imageData) {
        const { data, width, height } = imageData;
        const lastPixelIndex = width * height * 4 - 4;
        const lValues = [];
        const aValues = [];
        const bValues = [];
        for (let index = 0; index <= lastPixelIndex; index += 4) {
            const { l, a, b } = this.convertSinglePixel(data[index], data[index + 1], data[index + 2]);
            lValues.push(l);
            aValues.push(a);
            bValues.push(b);
        }
        return this.createConversionResult(lValues, aValues, bValues, width, height);
    }
    convertFromRGB(r, g, b) {
        const result = this.convertSinglePixel(r, g, b);
        return this.createConversionResult([result.l], [result.a], [result.b], 1, 1);
    }
    convertSinglePixel(r, g, b) {
        const { X, Y, Z } = this.xyzConverter.rgbToXYZ(r, g, b);
        const xRatio = X / this.XR;
        const yRatio = Y / this.YR;
        const zRatio = Z / this.ZR;
        let l;
        if (yRatio > 0.008856) {
            l = 116 * Math.cbrt(yRatio) - 16;
        }
        else {
            l = 903.3 * yRatio;
        }
        return {
            l,
            a: 500 * (Math.cbrt(xRatio) - Math.cbrt(yRatio)),
            b: 200 * (Math.cbrt(yRatio) - Math.cbrt(zRatio))
        };
    }
    createConversionResult(lValues, aValues, bValues, width, height) {
        const hComponent = new PartialConversionResult_1.PartialConversionResult('L', lValues, width, height);
        const sComponent = new PartialConversionResult_1.PartialConversionResult('a', aValues, width, height);
        const vComponent = new PartialConversionResult_1.PartialConversionResult('b', bValues, width, height);
        return new LabColorSpaceConversionResult_1.LabColorSpaceConversionResult(hComponent, sComponent, vComponent);
    }
}
exports.LabColorSpaceConverter = LabColorSpaceConverter;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LabColorSpaceConversionResult {
    constructor(lComponentResult, aComponentResult, bComponentResult) {
        this.components = [lComponentResult, aComponentResult, bComponentResult];
    }
    convertComponentsToImageData() {
        return [this.getLImageData(), this.getAImageData(), this.getBImageData()];
    }
    // tslint:disable no-increment-decrement
    getLImageData() {
        const lComponent = this.components[0];
        const lImageData = new ImageData(lComponent.width, lComponent.height);
        let index = 0;
        lComponent.values.forEach(l => {
            const normalizedL = l / 100 * 255;
            lImageData.data[index++] = normalizedL;
            lImageData.data[index++] = normalizedL;
            lImageData.data[index++] = normalizedL;
            lImageData.data[index++] = 255;
        });
        return lImageData;
    }
    getAImageData() {
        const aComponent = this.components[1];
        const aImageData = new ImageData(aComponent.width, aComponent.height);
        let index = 0;
        aComponent.values.forEach(a => {
            aImageData.data[index++] = 127 + a;
            aImageData.data[index++] = 127 - a;
            aImageData.data[index++] = 255;
            aImageData.data[index++] = 255;
        });
        return aImageData;
    }
    getBImageData() {
        const bComponent = this.components[2];
        const bImageData = new ImageData(bComponent.width, bComponent.height);
        let index = 0;
        bComponent.values.forEach(b => {
            bImageData.data[index++] = 127 + b;
            bImageData.data[index++] = 127;
            bImageData.data[index++] = 127 - b;
            bImageData.data[index++] = 255;
        });
        return bImageData;
    }
}
exports.LabColorSpaceConversionResult = LabColorSpaceConversionResult;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PartialConversionResult_1 = __webpack_require__(22);
const YCbCrColorSpaceConversionResult_1 = __webpack_require__(92);
class YCbCrColorSpaceConverter {
    convertFromImageData(imageData) {
        const { data, width, height } = imageData;
        const lastPixelIndex = width * height * 4 - 4;
        const yValues = [];
        const cbValues = [];
        const crValues = [];
        for (let index = 0; index <= lastPixelIndex; index += 4) {
            const { y, cb, cr } = this.convertSinglePixel(data[index], data[index + 1], data[index + 2]);
            yValues.push(y);
            cbValues.push(cb);
            crValues.push(cr);
        }
        return this.createConversionResult(yValues, cbValues, crValues, width, height);
    }
    convertFromRGB(r, g, b) {
        const { y, cb, cr } = this.convertSinglePixel(r, g, b);
        return this.createConversionResult([y], [cb], [cr], 1, 1);
    }
    convertSinglePixel(r, g, b) {
        const y = 0.299 * r + 0.587 * g + 0.114 * b;
        const cb = (b - y) / 1.772 + 128;
        const cr = (r - y) / 1.402 + 128;
        return {
            y,
            cb,
            cr
        };
    }
    createConversionResult(yValues, cbValues, crValues, width, height) {
        const yComponent = new PartialConversionResult_1.PartialConversionResult('Y', yValues, width, height);
        const cbComponent = new PartialConversionResult_1.PartialConversionResult('Cb', cbValues, width, height);
        const crComponent = new PartialConversionResult_1.PartialConversionResult('Cr', crValues, width, height);
        return new YCbCrColorSpaceConversionResult_1.YCbCrColorSpaceConversionResult(yComponent, cbComponent, crComponent);
    }
}
exports.YCbCrColorSpaceConverter = YCbCrColorSpaceConverter;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class YCbCrColorSpaceConversionResult {
    constructor(yComponentResult, cbComponentResult, crComponentResult) {
        this.components = [yComponentResult, cbComponentResult, crComponentResult];
    }
    convertComponentsToImageData() {
        return [this.getYImageData(), this.getCbImageData(), this.getCrImageData()];
    }
    // tslint:disable no-increment-decrement
    getYImageData() {
        const yComponent = this.components[0];
        const yImageData = new ImageData(yComponent.width, yComponent.height);
        let index = 0;
        yComponent.values.forEach(y => {
            yImageData.data[index++] = y;
            yImageData.data[index++] = y;
            yImageData.data[index++] = y;
            yImageData.data[index++] = 255;
        });
        return yImageData;
    }
    getCbImageData() {
        const cbComponent = this.components[1];
        const cbImageData = new ImageData(cbComponent.width, cbComponent.height);
        let index = 0;
        cbComponent.values.forEach(cb => {
            cbImageData.data[index++] = 127;
            cbImageData.data[index++] = 255 - cb;
            cbImageData.data[index++] = cb;
            cbImageData.data[index++] = 255;
        });
        return cbImageData;
    }
    getCrImageData() {
        const crComponent = this.components[2];
        const crImageData = new ImageData(crComponent.width, crComponent.height);
        let index = 0;
        crComponent.values.forEach(cr => {
            crImageData.data[index++] = cr;
            crImageData.data[index++] = 255 - cr;
            crImageData.data[index++] = 127;
            crImageData.data[index++] = 255;
        });
        return crImageData;
    }
}
exports.YCbCrColorSpaceConversionResult = YCbCrColorSpaceConversionResult;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ml_matrix_1 = __webpack_require__(3);
// tslint:disable variable-name
class XYZConverter {
    constructor(conversionParameters) {
        this.redPoint = conversionParameters.redPoint;
        this.greenPoint = conversionParameters.greenPoint;
        this.bluePoint = conversionParameters.bluePoint;
        this.whitePoint = conversionParameters.whitePoint;
        this.gamma = conversionParameters.gamma;
        this.initialize();
    }
    rgbToXYZ(r, g, b) {
        const rgbVector = ml_matrix_1.Matrix.columnVector([
            this.applyGammaCorrection(r / 255),
            this.applyGammaCorrection(g / 255),
            this.applyGammaCorrection(b / 255)
        ]);
        const result = this.rgbToXYZMatrix.mmul(rgbVector);
        return {
            X: result.get(0, 0) * 100,
            Y: result.get(1, 0) * 100,
            Z: result.get(2, 0) * 100
        };
    }
    initialize() {
        this.initializeRGBMatrix();
        // Calculate Xw, Yw, Zw
        const zw = 1 - this.whitePoint.x - this.whitePoint.y;
        const Yw = 1;
        const Xw = this.whitePoint.x / Yw / this.whitePoint.y;
        const Zw = zw / this.whitePoint.y;
        const XwYwZw = ml_matrix_1.Matrix.columnVector([Xw, Yw, Zw]);
        this.SVector = ml_matrix_1.solve(this.rgbMatrix, XwYwZw);
        this.rgbToXYZMatrix = this.rgbMatrix.mulRowVector(this.SVector);
    }
    initializeRGBMatrix() {
        const redPointZ = 1 - this.redPoint.x - this.redPoint.y;
        const greenPointZ = 1 - this.greenPoint.x - this.greenPoint.y;
        const bluePointZ = 1 - this.bluePoint.x - this.bluePoint.y;
        this.rgbMatrix = new ml_matrix_1.Matrix([
            [this.redPoint.x, this.greenPoint.x, this.greenPoint.x],
            [this.redPoint.y, this.greenPoint.y, this.bluePoint.y],
            [redPointZ, greenPointZ, bluePointZ]
        ]);
    }
    applyGammaCorrection(v) {
        return Math.pow(v, this.gamma);
    }
}
exports.XYZConverter = XYZConverter;
// tslint:enable variable-name


/***/ }),
/* 94 */
/***/ (function(module, exports) {

if (!Symbol.species) {
    Symbol.species = Symbol.for('@@species');
}


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rescale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ml_array_max__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ml_array_min__ = __webpack_require__(97);



function rescale(input, options = {}) {
    if (!Array.isArray(input)) {
        throw new TypeError('input must be an array');
    } else if (input.length === 0) {
        throw new TypeError('input must not be empty');
    }

    let output;
    if (options.output !== undefined) {
        if (!Array.isArray(options.output)) {
            throw new TypeError('output option must be an array if specified');
        }
        output = options.output;
    } else {
        output = new Array(input.length);
    }

    const currentMin = Object(__WEBPACK_IMPORTED_MODULE_1_ml_array_min__["a" /* default */])(input);
    const currentMax = Object(__WEBPACK_IMPORTED_MODULE_0_ml_array_max__["a" /* default */])(input);

    if (currentMin === currentMax) {
        throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
    }

    const {
        min: minValue = options.autoMinMax ? currentMin : 0,
        max: maxValue = options.autoMinMax ? currentMax : 1
    } = options;

    if (minValue >= maxValue) {
        throw new RangeError('min option must be smaller than max option');
    }

    const factor = (maxValue - minValue) / (currentMax - currentMin);
    for (var i = 0; i < input.length; i++) {
        output[i] = (input[i] - currentMin) * factor + minValue;
    }

    return output;
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
function max(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    var max = input[0];
    for (var i = 1; i < input.length; i++) {
        if (input[i] > max) max = input[i];
    }
    return max;
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
function min(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    var min = input[0];
    for (var i = 1; i < input.length; i++) {
        if (input[i] < min) min = input[i];
    }
    return min;
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class MatrixTransposeView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix) {
        super(matrix, matrix.columns, matrix.rows);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(columnIndex, rowIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(columnIndex, rowIndex);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixTransposeView;



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class MatrixRowView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix, row) {
        super(matrix, 1, matrix.columns);
        this.row = row;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.row, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.row, columnIndex);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixRowView;



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



class MatrixSubView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix, startRow, endRow, startColumn, endColumn) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* checkRange */])(matrix, startRow, endRow, startColumn, endColumn);
        super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
        this.startRow = startRow;
        this.startColumn = startColumn;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixSubView;



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



class MatrixSelectionView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix, rowIndices, columnIndices) {
        var indices = Object(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* checkIndices */])(matrix, rowIndices, columnIndices);
        super(matrix, indices.row.length, indices.column.length);
        this.rowIndices = indices.row;
        this.columnIndices = indices.column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex], value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixSelectionView;



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



class MatrixRowSelectionView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix, rowIndices) {
        rowIndices = Object(__WEBPACK_IMPORTED_MODULE_1__util__["g" /* checkRowIndices */])(matrix, rowIndices);
        super(matrix, rowIndices.length, matrix.columns);
        this.rowIndices = rowIndices;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rowIndices[rowIndex], columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rowIndices[rowIndex], columnIndex);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixRowSelectionView;



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);



class MatrixColumnSelectionView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix, columnIndices) {
        columnIndices = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* checkColumnIndices */])(matrix, columnIndices);
        super(matrix, matrix.rows, columnIndices.length);
        this.columnIndices = columnIndices;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.columnIndices[columnIndex], value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(rowIndex, this.columnIndices[columnIndex]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixColumnSelectionView;



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class MatrixColumnView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix, column) {
        super(matrix, matrix.rows, 1);
        this.column = column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.column, value);
        return this;
    }

    get(rowIndex) {
        return this.matrix.get(rowIndex, this.column);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixColumnView;



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class MatrixFlipRowView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixFlipRowView;



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);


class MatrixFlipColumnView extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */] {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MatrixFlipColumnView;



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WrapperMatrix1D__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WrapperMatrix2D__ = __webpack_require__(43);



/**
 * @param {Array<Array<number>>|Array<number>} array
 * @param {object} [options]
 * @param {object} [options.rows = 1]
 * @return {WrapperMatrix1D|WrapperMatrix2D}
 */
function wrap(array, options) {
    if (Array.isArray(array)) {
        if (array[0] && Array.isArray(array[0])) {
            return new __WEBPACK_IMPORTED_MODULE_1__WrapperMatrix2D__["a" /* default */](array);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_0__WrapperMatrix1D__["a" /* default */](array, options);
        }
    } else {
        throw new Error('the argument is not an array');
    }
}


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["b"] = solve;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dc_lu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dc_qr__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dc_svd__ = __webpack_require__(24);






/**
 * Computes the inverse of a Matrix
 * @param {Matrix} matrix
 * @param {boolean} [useSVD=false]
 * @return {Matrix}
 */
function inverse(matrix, useSVD = false) {
    matrix = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(matrix);
    if (useSVD) {
        return new __WEBPACK_IMPORTED_MODULE_3__dc_svd__["a" /* default */](matrix).inverse();
    } else {
        return solve(matrix, __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].eye(matrix.rows));
    }
}

/**
 *
 * @param {Matrix} leftHandSide
 * @param {Matrix} rightHandSide
 * @param {boolean} [useSVD = false]
 * @return {Matrix}
 */
function solve(leftHandSide, rightHandSide, useSVD = false) {
    leftHandSide = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(leftHandSide);
    rightHandSide = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(rightHandSide);
    if (useSVD) {
        return new __WEBPACK_IMPORTED_MODULE_3__dc_svd__["a" /* default */](leftHandSide).solve(rightHandSide);
    } else {
        return leftHandSide.isSquare() ? new __WEBPACK_IMPORTED_MODULE_1__dc_lu__["a" /* default */](leftHandSide).solve(rightHandSide) : new __WEBPACK_IMPORTED_MODULE_2__dc_qr__["a" /* default */](leftHandSide).solve(rightHandSide);
    }
}


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(25);



/**
 * @class EigenvalueDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
 * @param {Matrix} matrix
 * @param {object} [options]
 * @param {boolean} [options.assumeSymmetric=false]
 */
class EigenvalueDecomposition {
    constructor(matrix, options = {}) {
        const {
            assumeSymmetric = false
        } = options;

        matrix = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(matrix);
        if (!matrix.isSquare()) {
            throw new Error('Matrix is not a square matrix');
        }

        var n = matrix.columns;
        var V = Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getFilled2DArray */])(n, n, 0);
        var d = new Array(n);
        var e = new Array(n);
        var value = matrix;
        var i, j;

        var isSymmetric = false;
        if (assumeSymmetric) {
            isSymmetric = true;
        } else {
            isSymmetric = matrix.isSymmetric();
        }

        if (isSymmetric) {
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    V[i][j] = value.get(i, j);
                }
            }
            tred2(n, e, d, V);
            tql2(n, e, d, V);
        } else {
            var H = Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getFilled2DArray */])(n, n, 0);
            var ort = new Array(n);
            for (j = 0; j < n; j++) {
                for (i = 0; i < n; i++) {
                    H[i][j] = value.get(i, j);
                }
            }
            orthes(n, H, ort, V);
            hqr2(n, e, d, V, H);
        }

        this.n = n;
        this.e = e;
        this.d = d;
        this.V = V;
    }

    /**
     *
     * @return {Array<number>}
     */
    get realEigenvalues() {
        return this.d;
    }

    /**
     *
     * @return {Array<number>}
     */
    get imaginaryEigenvalues() {
        return this.e;
    }

    /**
     *
     * @return {Matrix}
     */
    get eigenvectorMatrix() {
        if (!__WEBPACK_IMPORTED_MODULE_0__index__["Matrix"].isMatrix(this.V)) {
            this.V = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](this.V);
        }
        return this.V;
    }

    /**
     *
     * @return {Matrix}
     */
    get diagonalMatrix() {
        var n = this.n;
        var e = this.e;
        var d = this.d;
        var X = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](n, n);
        var i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                X[i][j] = 0;
            }
            X[i][i] = d[i];
            if (e[i] > 0) {
                X[i][i + 1] = e[i];
            } else if (e[i] < 0) {
                X[i][i - 1] = e[i];
            }
        }
        return X;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EigenvalueDecomposition;


function tred2(n, e, d, V) {
    var f, g, h, i, j, k,
        hh, scale;

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
    }

    for (i = n - 1; i > 0; i--) {
        scale = 0;
        h = 0;
        for (k = 0; k < i; k++) {
            scale = scale + Math.abs(d[k]);
        }

        if (scale === 0) {
            e[i] = d[i - 1];
            for (j = 0; j < i; j++) {
                d[j] = V[i - 1][j];
                V[i][j] = 0;
                V[j][i] = 0;
            }
        } else {
            for (k = 0; k < i; k++) {
                d[k] /= scale;
                h += d[k] * d[k];
            }

            f = d[i - 1];
            g = Math.sqrt(h);
            if (f > 0) {
                g = -g;
            }

            e[i] = scale * g;
            h = h - f * g;
            d[i - 1] = f - g;
            for (j = 0; j < i; j++) {
                e[j] = 0;
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                V[j][i] = f;
                g = e[j] + V[j][j] * f;
                for (k = j + 1; k <= i - 1; k++) {
                    g += V[k][j] * d[k];
                    e[k] += V[k][j] * f;
                }
                e[j] = g;
            }

            f = 0;
            for (j = 0; j < i; j++) {
                e[j] /= h;
                f += e[j] * d[j];
            }

            hh = f / (h + h);
            for (j = 0; j < i; j++) {
                e[j] -= hh * d[j];
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                g = e[j];
                for (k = j; k <= i - 1; k++) {
                    V[k][j] -= (f * e[k] + g * d[k]);
                }
                d[j] = V[i - 1][j];
                V[i][j] = 0;
            }
        }
        d[i] = h;
    }

    for (i = 0; i < n - 1; i++) {
        V[n - 1][i] = V[i][i];
        V[i][i] = 1;
        h = d[i + 1];
        if (h !== 0) {
            for (k = 0; k <= i; k++) {
                d[k] = V[k][i + 1] / h;
            }

            for (j = 0; j <= i; j++) {
                g = 0;
                for (k = 0; k <= i; k++) {
                    g += V[k][i + 1] * V[k][j];
                }
                for (k = 0; k <= i; k++) {
                    V[k][j] -= g * d[k];
                }
            }
        }

        for (k = 0; k <= i; k++) {
            V[k][i + 1] = 0;
        }
    }

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
        V[n - 1][j] = 0;
    }

    V[n - 1][n - 1] = 1;
    e[0] = 0;
}

function tql2(n, e, d, V) {

    var g, h, i, j, k, l, m, p, r,
        dl1, c, c2, c3, el1, s, s2,
        iter;

    for (i = 1; i < n; i++) {
        e[i - 1] = e[i];
    }

    e[n - 1] = 0;

    var f = 0;
    var tst1 = 0;
    var eps = Number.EPSILON;

    for (l = 0; l < n; l++) {
        tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
        m = l;
        while (m < n) {
            if (Math.abs(e[m]) <= eps * tst1) {
                break;
            }
            m++;
        }

        if (m > l) {
            iter = 0;
            do {
                iter = iter + 1;

                g = d[l];
                p = (d[l + 1] - g) / (2 * e[l]);
                r = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(p, 1);
                if (p < 0) {
                    r = -r;
                }

                d[l] = e[l] / (p + r);
                d[l + 1] = e[l] * (p + r);
                dl1 = d[l + 1];
                h = g - d[l];
                for (i = l + 2; i < n; i++) {
                    d[i] -= h;
                }

                f = f + h;

                p = d[m];
                c = 1;
                c2 = c;
                c3 = c;
                el1 = e[l + 1];
                s = 0;
                s2 = 0;
                for (i = m - 1; i >= l; i--) {
                    c3 = c2;
                    c2 = c;
                    s2 = s;
                    g = c * e[i];
                    h = c * p;
                    r = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* hypotenuse */])(p, e[i]);
                    e[i + 1] = s * r;
                    s = e[i] / r;
                    c = p / r;
                    p = c * d[i] - s * g;
                    d[i + 1] = h + s * (c * g + s * d[i]);

                    for (k = 0; k < n; k++) {
                        h = V[k][i + 1];
                        V[k][i + 1] = s * V[k][i] + c * h;
                        V[k][i] = c * V[k][i] - s * h;
                    }
                }

                p = -s * s2 * c3 * el1 * e[l] / dl1;
                e[l] = s * p;
                d[l] = c * p;

            }
            while (Math.abs(e[l]) > eps * tst1);
        }
        d[l] = d[l] + f;
        e[l] = 0;
    }

    for (i = 0; i < n - 1; i++) {
        k = i;
        p = d[i];
        for (j = i + 1; j < n; j++) {
            if (d[j] < p) {
                k = j;
                p = d[j];
            }
        }

        if (k !== i) {
            d[k] = d[i];
            d[i] = p;
            for (j = 0; j < n; j++) {
                p = V[j][i];
                V[j][i] = V[j][k];
                V[j][k] = p;
            }
        }
    }
}

function orthes(n, H, ort, V) {

    var low = 0;
    var high = n - 1;
    var f, g, h, i, j, m;
    var scale;

    for (m = low + 1; m <= high - 1; m++) {
        scale = 0;
        for (i = m; i <= high; i++) {
            scale = scale + Math.abs(H[i][m - 1]);
        }

        if (scale !== 0) {
            h = 0;
            for (i = high; i >= m; i--) {
                ort[i] = H[i][m - 1] / scale;
                h += ort[i] * ort[i];
            }

            g = Math.sqrt(h);
            if (ort[m] > 0) {
                g = -g;
            }

            h = h - ort[m] * g;
            ort[m] = ort[m] - g;

            for (j = m; j < n; j++) {
                f = 0;
                for (i = high; i >= m; i--) {
                    f += ort[i] * H[i][j];
                }

                f = f / h;
                for (i = m; i <= high; i++) {
                    H[i][j] -= f * ort[i];
                }
            }

            for (i = 0; i <= high; i++) {
                f = 0;
                for (j = high; j >= m; j--) {
                    f += ort[j] * H[i][j];
                }

                f = f / h;
                for (j = m; j <= high; j++) {
                    H[i][j] -= f * ort[j];
                }
            }

            ort[m] = scale * ort[m];
            H[m][m - 1] = scale * g;
        }
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            V[i][j] = (i === j ? 1 : 0);
        }
    }

    for (m = high - 1; m >= low + 1; m--) {
        if (H[m][m - 1] !== 0) {
            for (i = m + 1; i <= high; i++) {
                ort[i] = H[i][m - 1];
            }

            for (j = m; j <= high; j++) {
                g = 0;
                for (i = m; i <= high; i++) {
                    g += ort[i] * V[i][j];
                }

                g = (g / ort[m]) / H[m][m - 1];
                for (i = m; i <= high; i++) {
                    V[i][j] += g * ort[i];
                }
            }
        }
    }
}

function hqr2(nn, e, d, V, H) {
    var n = nn - 1;
    var low = 0;
    var high = nn - 1;
    var eps = Number.EPSILON;
    var exshift = 0;
    var norm = 0;
    var p = 0;
    var q = 0;
    var r = 0;
    var s = 0;
    var z = 0;
    var iter = 0;
    var i, j, k, l, m, t, w, x, y;
    var ra, sa, vr, vi;
    var notlast, cdivres;

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            d[i] = H[i][i];
            e[i] = 0;
        }

        for (j = Math.max(i - 1, 0); j < nn; j++) {
            norm = norm + Math.abs(H[i][j]);
        }
    }

    while (n >= low) {
        l = n;
        while (l > low) {
            s = Math.abs(H[l - 1][l - 1]) + Math.abs(H[l][l]);
            if (s === 0) {
                s = norm;
            }
            if (Math.abs(H[l][l - 1]) < eps * s) {
                break;
            }
            l--;
        }

        if (l === n) {
            H[n][n] = H[n][n] + exshift;
            d[n] = H[n][n];
            e[n] = 0;
            n--;
            iter = 0;
        } else if (l === n - 1) {
            w = H[n][n - 1] * H[n - 1][n];
            p = (H[n - 1][n - 1] - H[n][n]) / 2;
            q = p * p + w;
            z = Math.sqrt(Math.abs(q));
            H[n][n] = H[n][n] + exshift;
            H[n - 1][n - 1] = H[n - 1][n - 1] + exshift;
            x = H[n][n];

            if (q >= 0) {
                z = (p >= 0) ? (p + z) : (p - z);
                d[n - 1] = x + z;
                d[n] = d[n - 1];
                if (z !== 0) {
                    d[n] = x - w / z;
                }
                e[n - 1] = 0;
                e[n] = 0;
                x = H[n][n - 1];
                s = Math.abs(x) + Math.abs(z);
                p = x / s;
                q = z / s;
                r = Math.sqrt(p * p + q * q);
                p = p / r;
                q = q / r;

                for (j = n - 1; j < nn; j++) {
                    z = H[n - 1][j];
                    H[n - 1][j] = q * z + p * H[n][j];
                    H[n][j] = q * H[n][j] - p * z;
                }

                for (i = 0; i <= n; i++) {
                    z = H[i][n - 1];
                    H[i][n - 1] = q * z + p * H[i][n];
                    H[i][n] = q * H[i][n] - p * z;
                }

                for (i = low; i <= high; i++) {
                    z = V[i][n - 1];
                    V[i][n - 1] = q * z + p * V[i][n];
                    V[i][n] = q * V[i][n] - p * z;
                }
            } else {
                d[n - 1] = x + p;
                d[n] = x + p;
                e[n - 1] = z;
                e[n] = -z;
            }

            n = n - 2;
            iter = 0;
        } else {
            x = H[n][n];
            y = 0;
            w = 0;
            if (l < n) {
                y = H[n - 1][n - 1];
                w = H[n][n - 1] * H[n - 1][n];
            }

            if (iter === 10) {
                exshift += x;
                for (i = low; i <= n; i++) {
                    H[i][i] -= x;
                }
                s = Math.abs(H[n][n - 1]) + Math.abs(H[n - 1][n - 2]);
                x = y = 0.75 * s;
                w = -0.4375 * s * s;
            }

            if (iter === 30) {
                s = (y - x) / 2;
                s = s * s + w;
                if (s > 0) {
                    s = Math.sqrt(s);
                    if (y < x) {
                        s = -s;
                    }
                    s = x - w / ((y - x) / 2 + s);
                    for (i = low; i <= n; i++) {
                        H[i][i] -= s;
                    }
                    exshift += s;
                    x = y = w = 0.964;
                }
            }

            iter = iter + 1;

            m = n - 2;
            while (m >= l) {
                z = H[m][m];
                r = x - z;
                s = y - z;
                p = (r * s - w) / H[m + 1][m] + H[m][m + 1];
                q = H[m + 1][m + 1] - z - r - s;
                r = H[m + 2][m + 1];
                s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                p = p / s;
                q = q / s;
                r = r / s;
                if (m === l) {
                    break;
                }
                if (Math.abs(H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m - 1][m - 1]) + Math.abs(z) + Math.abs(H[m + 1][m + 1])))) {
                    break;
                }
                m--;
            }

            for (i = m + 2; i <= n; i++) {
                H[i][i - 2] = 0;
                if (i > m + 2) {
                    H[i][i - 3] = 0;
                }
            }

            for (k = m; k <= n - 1; k++) {
                notlast = (k !== n - 1);
                if (k !== m) {
                    p = H[k][k - 1];
                    q = H[k + 1][k - 1];
                    r = (notlast ? H[k + 2][k - 1] : 0);
                    x = Math.abs(p) + Math.abs(q) + Math.abs(r);
                    if (x !== 0) {
                        p = p / x;
                        q = q / x;
                        r = r / x;
                    }
                }

                if (x === 0) {
                    break;
                }

                s = Math.sqrt(p * p + q * q + r * r);
                if (p < 0) {
                    s = -s;
                }

                if (s !== 0) {
                    if (k !== m) {
                        H[k][k - 1] = -s * x;
                    } else if (l !== m) {
                        H[k][k - 1] = -H[k][k - 1];
                    }

                    p = p + s;
                    x = p / s;
                    y = q / s;
                    z = r / s;
                    q = q / p;
                    r = r / p;

                    for (j = k; j < nn; j++) {
                        p = H[k][j] + q * H[k + 1][j];
                        if (notlast) {
                            p = p + r * H[k + 2][j];
                            H[k + 2][j] = H[k + 2][j] - p * z;
                        }

                        H[k][j] = H[k][j] - p * x;
                        H[k + 1][j] = H[k + 1][j] - p * y;
                    }

                    for (i = 0; i <= Math.min(n, k + 3); i++) {
                        p = x * H[i][k] + y * H[i][k + 1];
                        if (notlast) {
                            p = p + z * H[i][k + 2];
                            H[i][k + 2] = H[i][k + 2] - p * r;
                        }

                        H[i][k] = H[i][k] - p;
                        H[i][k + 1] = H[i][k + 1] - p * q;
                    }

                    for (i = low; i <= high; i++) {
                        p = x * V[i][k] + y * V[i][k + 1];
                        if (notlast) {
                            p = p + z * V[i][k + 2];
                            V[i][k + 2] = V[i][k + 2] - p * r;
                        }

                        V[i][k] = V[i][k] - p;
                        V[i][k + 1] = V[i][k + 1] - p * q;
                    }
                }
            }
        }
    }

    if (norm === 0) {
        return;
    }

    for (n = nn - 1; n >= 0; n--) {
        p = d[n];
        q = e[n];

        if (q === 0) {
            l = n;
            H[n][n] = 1;
            for (i = n - 1; i >= 0; i--) {
                w = H[i][i] - p;
                r = 0;
                for (j = l; j <= n; j++) {
                    r = r + H[i][j] * H[j][n];
                }

                if (e[i] < 0) {
                    z = w;
                    s = r;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        H[i][n] = (w !== 0) ? (-r / w) : (-r / (eps * norm));
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                        t = (x * s - z * r) / q;
                        H[i][n] = t;
                        H[i + 1][n] = (Math.abs(x) > Math.abs(z)) ? ((-r - w * t) / x) : ((-s - y * t) / z);
                    }

                    t = Math.abs(H[i][n]);
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        } else if (q < 0) {
            l = n - 1;

            if (Math.abs(H[n][n - 1]) > Math.abs(H[n - 1][n])) {
                H[n - 1][n - 1] = q / H[n][n - 1];
                H[n - 1][n] = -(H[n][n] - p) / H[n][n - 1];
            } else {
                cdivres = cdiv(0, -H[n - 1][n], H[n - 1][n - 1] - p, q);
                H[n - 1][n - 1] = cdivres[0];
                H[n - 1][n] = cdivres[1];
            }

            H[n][n - 1] = 0;
            H[n][n] = 1;
            for (i = n - 2; i >= 0; i--) {
                ra = 0;
                sa = 0;
                for (j = l; j <= n; j++) {
                    ra = ra + H[i][j] * H[j][n - 1];
                    sa = sa + H[i][j] * H[j][n];
                }

                w = H[i][i] - p;

                if (e[i] < 0) {
                    z = w;
                    r = ra;
                    s = sa;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        cdivres = cdiv(-ra, -sa, w, q);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                        vi = (d[i] - p) * 2 * q;
                        if (vr === 0 && vi === 0) {
                            vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                        }
                        cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                        if (Math.abs(x) > (Math.abs(z) + Math.abs(q))) {
                            H[i + 1][n - 1] = (-ra - w * H[i][n - 1] + q * H[i][n]) / x;
                            H[i + 1][n] = (-sa - w * H[i][n] - q * H[i][n - 1]) / x;
                        } else {
                            cdivres = cdiv(-r - y * H[i][n - 1], -s - y * H[i][n], z, q);
                            H[i + 1][n - 1] = cdivres[0];
                            H[i + 1][n] = cdivres[1];
                        }
                    }

                    t = Math.max(Math.abs(H[i][n - 1]), Math.abs(H[i][n]));
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n - 1] = H[j][n - 1] / t;
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            for (j = i; j < nn; j++) {
                V[i][j] = H[i][j];
            }
        }
    }

    for (j = nn - 1; j >= low; j--) {
        for (i = low; i <= high; i++) {
            z = 0;
            for (k = low; k <= Math.min(j, high); k++) {
                z = z + V[i][k] * H[k][j];
            }
            V[i][j] = z;
        }
    }
}

function cdiv(xr, xi, yr, yi) {
    var r, d;
    if (Math.abs(yr) > Math.abs(yi)) {
        r = yi / yr;
        d = yr + r * yi;
        return [(xr + r * xi) / d, (xi - r * xr) / d];
    } else {
        r = yr / yi;
        d = yi + r * yr;
        return [(r * xr + xi) / d, (r * xi - xr) / d];
    }
}


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);


/**
 * @class CholeskyDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
 * @param {Matrix} value
 */
class CholeskyDecomposition {
    constructor(value) {
        value = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(value);
        if (!value.isSymmetric()) {
            throw new Error('Matrix is not symmetric');
        }

        var a = value;
        var dimension = a.rows;
        var l = new __WEBPACK_IMPORTED_MODULE_0__index__["Matrix"](dimension, dimension);
        var positiveDefinite = true;
        var i, j, k;

        for (j = 0; j < dimension; j++) {
            var Lrowj = l[j];
            var d = 0;
            for (k = 0; k < j; k++) {
                var Lrowk = l[k];
                var s = 0;
                for (i = 0; i < k; i++) {
                    s += Lrowk[i] * Lrowj[i];
                }
                Lrowj[k] = s = (a.get(j, k) - s) / l[k][k];
                d = d + s * s;
            }

            d = a.get(j, j) - d;

            positiveDefinite &= (d > 0);
            l[j][j] = Math.sqrt(Math.max(d, 0));
            for (k = j + 1; k < dimension; k++) {
                l[j][k] = 0;
            }
        }

        if (!positiveDefinite) {
            throw new Error('Matrix is not positive definite');
        }

        this.L = l;
    }

    /**
     *
     * @param {Matrix} value
     * @return {Matrix}
     */
    solve(value) {
        value = __WEBPACK_IMPORTED_MODULE_0__index__["WrapperMatrix2D"].checkMatrix(value);

        var l = this.L;
        var dimension = l.rows;

        if (value.rows !== dimension) {
            throw new Error('Matrix dimensions do not match');
        }

        var count = value.columns;
        var B = value.clone();
        var i, j, k;

        for (k = 0; k < dimension; k++) {
            for (j = 0; j < count; j++) {
                for (i = 0; i < k; i++) {
                    B[k][j] -= B[i][j] * l[k][i];
                }
                B[k][j] /= l[k][k];
            }
        }

        for (k = dimension - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                for (i = k + 1; i < dimension; i++) {
                    B[k][j] -= B[i][j] * l[i][k];
                }
                B[k][j] /= l[k][k];
            }
        }

        return B;
    }

    /**
     *
     * @return {Matrix}
     */
    get lowerTriangularMatrix() {
        return this.L;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CholeskyDecomposition;




/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ImageDataConverter {
    convertImageToImageData(image) {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('Cannot get canvas drawing context');
        }
        context.drawImage(image, 0, 0);
        return context.getImageData(0, 0, canvas.width, canvas.height);
    }
    convertImageDataToImage(imageData) {
        const canvas = document.createElement('canvas');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('Cannot get canvas drawing context');
        }
        context.putImageData(imageData, 0, 0);
        const image = new Image(imageData.width, imageData.height);
        image.src = canvas.toDataURL('image/png');
        return image;
    }
}
exports.ImageDataConverter = ImageDataConverter;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ImageLoader {
    loadImage(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = url;
        });
    }
}
exports.ImageLoader = ImageLoader;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HyperContainer_1 = __webpack_require__(8);
const LabParametersBox_1 = __webpack_require__(114);
const ColorSpaceType_1 = __webpack_require__(13);
class ConversionParametersBox extends HyperContainer_1.HyperContainer {
    mapAppStateToContainerState(appState) {
        return {
            selectedColorSpace: appState.input.selectedColorSpace,
            conversionParameters: appState.input.conversionParameters,
            illuminantType: appState.input.illuminantType,
            colorProfileType: appState.input.colorProfileType
        };
    }
    render() {
        return this.html `
      <div onconnected=${this} ondisconnected=${this}>
        ${this.getColorSpaceParametersBox()}
      </div>
    `;
    }
    getColorSpaceParametersBox() {
        const { illuminantType, colorProfileType, conversionParameters } = this.state;
        return {
            [ColorSpaceType_1.ColorSpaceType.HSV]: () => null,
            [ColorSpaceType_1.ColorSpaceType.YCbCr]: () => null,
            [ColorSpaceType_1.ColorSpaceType.Lab]: () => LabParametersBox_1.LabParametersBox(illuminantType, colorProfileType, conversionParameters)
        }[this.state.selectedColorSpace]();
    }
}
exports.ConversionParametersBox = ConversionParametersBox;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const ColorProfileType_1 = __webpack_require__(21);
const IlluminantType_1 = __webpack_require__(40);
const changeColorProfileType_1 = __webpack_require__(19);
const changeIlluminantType_1 = __webpack_require__(38);
const appStore_1 = __webpack_require__(2);
const LabeledSelect_1 = __webpack_require__(41);
const LabParametersInputs_1 = __webpack_require__(115);
function LabParametersBox(illuminantType, colorProfileType, conversionParameters) {
    const labParametersInput = new LabParametersInputs_1.LabParametersInput(conversionParameters);
    return esm_1.wire() `
    <div>
      <label for="illuminant-type-select">Illuminant type: </label>
      ${LabeledSelect_1.LabeledSelect('illuminant-type-select', IlluminantType_1.labeledIlluminants, illuminantType, onIlluminantChange.bind(null, conversionParameters.whitePoint))}
    </div>

    <div>
      <label for="color-profile-select">Color profile: </label>
      ${LabeledSelect_1.LabeledSelect('color-profile-select', ColorProfileType_1.labeledColorProfiles, colorProfileType, onColorProfileChange.bind(null, conversionParameters))}
    </div>

    ${labParametersInput}
  `;
}
exports.LabParametersBox = LabParametersBox;
function onIlluminantChange(currentWhitePoint, newIlluminant) {
    if (newIlluminant === IlluminantType_1.IlluminantType.Custom) {
        appStore_1.appStore.dispatch(changeIlluminantType_1.changeIlluminantType(newIlluminant, currentWhitePoint));
        return;
    }
    const foundIlluminant = IlluminantType_1.predefinedIlluminants.find(illuminant => illuminant.illuminantType === newIlluminant);
    if (!foundIlluminant) {
        throw new Error('Selected illuminant not found in predefined ones');
    }
    appStore_1.appStore.dispatch(changeIlluminantType_1.changeIlluminantType(newIlluminant, foundIlluminant.whitePoint()));
}
function onColorProfileChange(currentConversionParameters, newColorProfile) {
    if (newColorProfile === ColorProfileType_1.ColorProfileType.Custom) {
        appStore_1.appStore.dispatch(changeColorProfileType_1.changeColorProfileType(newColorProfile, currentConversionParameters));
        return;
    }
    const foundColorProfile = ColorProfileType_1.predefinedColorProfiles.find(colorProfile => colorProfile.colorProfileType === newColorProfile);
    if (!foundColorProfile) {
        throw new Error('Selected color profile not found in predefined ones');
    }
    appStore_1.appStore.dispatch(changeColorProfileType_1.changeColorProfileType(newColorProfile, foundColorProfile.parameters()));
}


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const HyperComponent_1 = __webpack_require__(16);
const changeColorProfileType_1 = __webpack_require__(19);
const appStore_1 = __webpack_require__(2);
const ColorProfileType_1 = __webpack_require__(21);
__webpack_require__(116);
class LabParametersInput extends HyperComponent_1.HyperComponent {
    constructor(conversionParameters) {
        super();
        this.state = {
            conversionParameters
        };
        this.onGammaChange = this.onGammaChange.bind(this);
        this.onColorPointChange = this.onColorPointChange.bind(this);
    }
    setConversionParameters(conversionParameters) {
        this.setState({
            conversionParameters
        });
    }
    render() {
        const { conversionParameters } = this.state;
        return this.html `
      <div>
        <table>
          <thead>
            <tr>
              <th>Chromacity</th>
              <th>x</th>
              <th>y</th>
            </tr>
          </thead>

          <tbody>
            ${[
            ColorPointRow('Red primary', conversionParameters.redPoint, this.onColorPointChange('red')),
            ColorPointRow('Green primary', conversionParameters.greenPoint, this.onColorPointChange('green')),
            ColorPointRow('Blue primary', conversionParameters.bluePoint, this.onColorPointChange('blue')),
            ColorPointRow('White point', conversionParameters.whitePoint, this.onColorPointChange('white'))
        ]}
          </tbody>
        </table>

        <div>
          Gamma:
          <input type="number" value=${conversionParameters.gamma}
            onblur=${this.onGammaChange} step="0.1" class="gamma-input"
          >
        </div>
      </div>
    `;
    }
    onColorPointChange(colorPointName) {
        return (xOrY, value) => {
            const propertyName = `${colorPointName}Point`;
            // tslint:disable-next-line:no-any
            const newColorPoint = Object.assign({}, this.state
                .conversionParameters[propertyName]);
            if (xOrY === 'x') {
                newColorPoint.x = value;
            }
            else if (xOrY === 'y') {
                newColorPoint.y = value;
            }
            const newConversionParameters = this.state.conversionParameters.patch({
                [propertyName]: newColorPoint
            });
            appStore_1.appStore.dispatch(changeColorProfileType_1.changeColorProfileType(ColorProfileType_1.ColorProfileType.Custom, newConversionParameters));
        };
    }
    onGammaChange(event) {
        const newGamma = getValueFromInputEvent(event);
        const newConversionParameters = this.state.conversionParameters.patch({
            gamma: newGamma
        });
        appStore_1.appStore.dispatch(changeColorProfileType_1.changeColorProfileType(ColorProfileType_1.ColorProfileType.Custom, newConversionParameters));
    }
}
exports.LabParametersInput = LabParametersInput;
function ColorPointRow(label, colorPoint, onColorPointChange) {
    function handleChange(xOrY) {
        return (event) => {
            const value = getValueFromInputEvent(event);
            onColorPointChange(xOrY, value);
        };
    }
    return esm_1.wire(colorPoint) `
    <tr>
      <td>${label}</td>
      <td>
        <input type="number" class="point-position-input"
          value=${colorPoint.x} step="0.001" onblur=${handleChange('x')}
        >
      </td>
      <td>
        <input type="number" class="point-position-input"
          value=${colorPoint.y} step="0.001" onblur=${handleChange('y')}
        >
      </td>
    </tr>
  `;
}
function getValueFromInputEvent(event) {
    const inputElement = event.target;
    return parseFloat(inputElement.value);
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./LabParametersInputs.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./LabParametersInputs.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".gamma-input {\n  width: 60px; }\n\n.point-position-input {\n  width: 100px; }\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzgxZmFiOWM2NDE5YTRhMGU4MDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvZWFzeS1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0h5cGVyQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9hYnN0cmFjdE1hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29sb3JTcGFjZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL3Bvb3JseWZpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9IeXBlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvbkZpbmlzaGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2lucHV0L2NoYW5nZUNvbG9yUHJvZmlsZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvUGFydGlhbENvbnZlcnNpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvbHUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvc3ZkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9NZWdhdHJvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0ludGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlSWxsdW1pbmFudFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvSWxsdW1pbmFudFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL1dyYXBwZXJNYXRyaXgxRC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL1dyYXBwZXJNYXRyaXgyRC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9xci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NDQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC9mZWF0dXJlcy1kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9FbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vaHlwZXIvd2lyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1VwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VQaWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2lucHV0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbWVyZ2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvb3V0cHV0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvRmlsZVRvSW1hZ2VDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ29sb3JTcGFjZVBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzPzRlY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvT3JpZ2luYWxJbWFnZURpc3BsYXkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS5zY3NzPzhmYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVzdWx0c0Rpc3BsYXkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9TdGFydENvbnZlcnNpb25CdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL2NyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL0hTVkNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL0xhYkNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvTGFiQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9ZQ2JDckNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9YWVpDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvc3ltYm9sLXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LXJlc2NhbGUvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1hcnJheS1tYXgvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1hcnJheS1taW4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3RyYW5zcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc3ViLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9yb3dTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9mbGlwUm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvd3JhcC93cmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RlY29tcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL2V2ZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9jaG9sZXNreS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvSW1hZ2VEYXRhQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbWFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Db252ZXJzaW9uUGFyYW1ldGVyc0JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYWJQYXJhbWV0ZXJzQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xhYlBhcmFtZXRlcnNJbnB1dHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0lucHV0cy5zY3NzPzExODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0lucHV0cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7O0FBRUE7QUFDeUI7QUFDekI7QUFDOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3JFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxJQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx5QkFBeUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5QkFBeUI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7OztBQ3ZQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQzdEQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7QUNwQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0UsYUFBYTtBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7OztBQy9CQSxpREFBdUQ7QUFDdkQsdURBQW1FO0FBRXRELHFCQUFhLEdBQUc7SUFDM0IsZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxpQkFBaUIsRUFBRSwrQkFBYyxDQUFDLEtBQUs7SUFDdkMsMkJBQTJCLEVBQUUsMkNBQW9CLENBQUMsSUFBSSxFQUFFO0NBQ3pELENBQUM7Ozs7Ozs7Ozs7QUNMVywwQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztBQUV2RDtJQUNFLE1BQU0sQ0FBQztRQUNMLElBQUksRUFBRSwwQkFBa0I7S0FDekIsQ0FBQztBQUNKLENBQUM7QUFKRCw4Q0FJQzs7Ozs7Ozs7OztBQ0hZLDhCQUFzQixHQUFHLHdCQUF3QixDQUFDO0FBRS9ELDhCQUFxQyxjQUE4QixFQUFFLFVBQXNCO0lBQ3pGLE1BQU0sQ0FBQztRQUNMLElBQUksRUFBRSw4QkFBc0I7UUFDNUIsY0FBYztRQUNkLFVBQVU7S0FDWCxDQUFDO0FBQ0osQ0FBQztBQU5ELG9EQU1DOzs7Ozs7Ozs7O0FDVFksbUNBQTJCLEdBQUcsNkJBQTZCLENBQUM7QUFNekUsa0NBQ0UsVUFBMEI7SUFFMUIsTUFBTSxDQUFDO1FBQ0wsSUFBSSxFQUFFLG1DQUEyQjtRQUNqQyxVQUFVO0tBQ1gsQ0FBQztBQUNKLENBQUM7QUFQRCw0REFPQzs7Ozs7Ozs7OztBQ2RELElBQVksY0FhWDtBQWJELFdBQVksY0FBYztJQUN4Qiw2Q0FBQztJQUNELDZDQUFDO0lBQ0QsNkNBQUM7SUFDRCxpREFBRztJQUNILGlEQUFHO0lBQ0gsaURBQUc7SUFDSCxpREFBRztJQUNILDZDQUFDO0lBQ0QsK0NBQUU7SUFDRiwrQ0FBRTtJQUNGLGtEQUFHO0lBQ0gsd0RBQU07QUFDUixDQUFDLEVBYlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFhekI7QUFPWSw2QkFBcUIsR0FBMkI7SUFDM0QsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDcEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDbEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDcEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDckYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDcEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDckYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVRO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUN5QjtBQUNSOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLEtBQUs7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBQzs7Ozs7OztBQ3RKRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXdDLGdCQUFnQixFQUFFLDJCQUEyQixpQkFBaUIsRUFBRTs7QUFFeEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc4MWZhYjljNjQxOWE0YTBlODA2IiwiaW1wb3J0IEFic3RyYWN0TWF0cml4IGZyb20gJy4uL2Fic3RyYWN0TWF0cml4JztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCgpIHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvd3MsIGNvbHVtbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkge1xuICAgICAgICByZXR1cm4gTWF0cml4O1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiEgKGMpIEFuZHJlYSBHaWFtbWFyY2hpIChJU0MpICovXG5cbmltcG9ydCBNZWdhdHJvbiBmcm9tICcuL2NsYXNzZXMvTWVnYXRyb24uanMnO1xuaW1wb3J0IENvbXBvbmVudCwge3NldHVwfSBmcm9tICcuL2NsYXNzZXMvQ29tcG9uZW50LmpzJztcbmltcG9ydCBJbnRlbnQgZnJvbSAnLi9vYmplY3RzL0ludGVudC5qcyc7XG5pbXBvcnQgd2lyZSwge2NvbnRlbnQsIHdlYWtseX0gZnJvbSAnLi9oeXBlci93aXJlLmpzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9oeXBlci9yZW5kZXIuanMnO1xuXG4vLyBhbGwgZnVuY3Rpb25zIGFyZSBzZWxmIGJvdW5kIHRvIHRoZSByaWdodCBjb250ZXh0XG4vLyB5b3UgY2FuIGRvIHRoZSBmb2xsb3dpbmdcbi8vIGNvbnN0IHtiaW5kLCB3aXJlfSA9IGh5cGVySFRNTDtcbi8vIGFuZCB1c2UgdGhlbSByaWdodCBhd2F5OiBiaW5kKG5vZGUpYGhlbGxvIWA7XG5jb25zdCBiaW5kID0gY29udGV4dCA9PiByZW5kZXIuYmluZChjb250ZXh0KTtcbmNvbnN0IGRlZmluZSA9IEludGVudC5kZWZpbmU7XG5cbmh5cGVyLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmh5cGVyLmJpbmQgPSBiaW5kO1xuaHlwZXIuZGVmaW5lID0gZGVmaW5lO1xuaHlwZXIuaHlwZXIgPSBoeXBlcjtcbmh5cGVyLndpcmUgPSB3aXJlO1xuXG4vLyBpdCBpcyBwb3NzaWJsZSB0byBkZWZpbmUgYSBkaWZmZXJlbnQgZW5naW5lXG4vLyB0byByZXNvbHZlIG5vZGVzIGRpZmZpbmcuXG4vLyBUaGUgZW5naW5lIG11c3QgcHJvdmlkZSBhbiB1cGRhdGUgbWV0aG9kXG4vLyBjYXBhYmxlIG9mIG11dGF0aW5nIGxpdmVOb2RlcyBjb2xsZWN0aW9uXG4vLyBhbmQgdGhlIHJlbGF0ZWQgRE9NLlxuLy8gU2VlIGh5cGVyaHRtbC1tYWppbmJ1dSB0byBrbm93IG1vcmVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShoeXBlciwgJ2VuZ2luZScsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIE1lZ2F0cm9uLmVuZ2luZTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoZW5naW5lKSB7XG4gICAgTWVnYXRyb24uZW5naW5lID0gZW5naW5lO1xuICB9XG59KTtcblxuLy8gdGhlIHdpcmUgY29udGVudCBpcyB0aGUgbGF6eSBkZWZpbmVkXG4vLyBodG1sIG9yIHN2ZyBwcm9wZXJ0eSBvZiBlYWNoIGh5cGVyLkNvbXBvbmVudFxuc2V0dXAoY29udGVudCk7XG5cbi8vIGV2ZXJ5dGhpbmcgaXMgZXhwb3J0ZWQgZGlyZWN0bHkgb3IgdGhyb3VnaCB0aGVcbi8vIGh5cGVySFRNTCBjYWxsYmFjaywgd2hlbiB1c2VkIGFzIHRvcCBsZXZlbCBzY3JpcHRcbmV4cG9ydCB7Q29tcG9uZW50LCBiaW5kLCBkZWZpbmUsIGh5cGVyLCB3aXJlfTtcblxuLy8gYnkgZGVmYXVsdCwgaHlwZXJIVE1MIGlzIGEgc21hcnQgZnVuY3Rpb25cbi8vIHRoYXQgXCJtYWdpY2FsbHlcIiB1bmRlcnN0YW5kcyB3aGF0J3MgdGhlIGJlc3Rcbi8vIHRoaW5nIHRvIGRvIHdpdGggcGFzc2VkIGFyZ3VtZW50c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwZXIoSFRNTCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgP1xuICAgIChIVE1MID09IG51bGwgP1xuICAgICAgY29udGVudCgnaHRtbCcpIDpcbiAgICAgICh0eXBlb2YgSFRNTCA9PT0gJ3N0cmluZycgP1xuICAgICAgICB3aXJlKG51bGwsIEhUTUwpIDpcbiAgICAgICAgKCdyYXcnIGluIEhUTUwgP1xuICAgICAgICAgIGNvbnRlbnQoJ2h0bWwnKShIVE1MKSA6XG4gICAgICAgICAgKCdub2RlVHlwZScgaW4gSFRNTCA/XG4gICAgICAgICAgICByZW5kZXIuYmluZChIVE1MKSA6XG4gICAgICAgICAgICB3ZWFrbHkoSFRNTCwgJ2h0bWwnKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSkgOlxuICAgICgncmF3JyBpbiBIVE1MID9cbiAgICAgIGNvbnRlbnQoJ2h0bWwnKSA6IHdpcmVcbiAgICApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBpbnB1dFJlZHVjZXIsIElucHV0U3RhdGUgfSBmcm9tICdyZWR1Y2Vycy9pbnB1dFJlZHVjZXInO1xyXG5pbXBvcnQgeyBvdXRwdXRSZWR1Y2VyLCBPdXRwdXRTdGF0ZSB9IGZyb20gJ3JlZHVjZXJzL291dHB1dFJlZHVjZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcbiAgaW5wdXQ6IElucHV0U3RhdGU7XHJcbiAgb3V0cHV0OiBPdXRwdXRTdGF0ZTtcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyczxBcHBTdGF0ZT4oe1xyXG4gIGlucHV0OiBpbnB1dFJlZHVjZXIsXHJcbiAgb3V0cHV0OiBvdXRwdXRSZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFN0b3JlID0gY3JlYXRlU3RvcmU8QXBwU3RhdGU+KFxyXG4gIHJlZHVjZXIsXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYXBwU3RvcmUudHMiLCJleHBvcnQge2RlZmF1bHQgYXMgZGVmYXVsdCwgZGVmYXVsdCBhcyBNYXRyaXh9IGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhYnN0cmFjdE1hdHJpeH0gZnJvbSAnLi9hYnN0cmFjdE1hdHJpeCc7XG5cbmV4cG9ydCB7d3JhcH0gZnJvbSAnLi93cmFwL3dyYXAnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5leHBvcnQge2RlZmF1bHQgYXMgV3JhcHBlck1hdHJpeDFEfSBmcm9tICcuL3dyYXAvV3JhcHBlck1hdHJpeDFEJztcblxuZXhwb3J0IHtzb2x2ZSwgaW52ZXJzZX0gZnJvbSAnLi9kZWNvbXBvc2l0aW9ucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24sIGRlZmF1bHQgYXMgU1ZEfSBmcm9tICcuL2RjL3N2ZC5qcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgRWlnZW52YWx1ZURlY29tcG9zaXRpb24sIGRlZmF1bHQgYXMgRVZEfSBmcm9tICcuL2RjL2V2ZC5qcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgQ2hvbGVza3lEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIENIT30gZnJvbSAnLi9kYy9jaG9sZXNreS5qcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgTHVEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIExVfSBmcm9tICcuL2RjL2x1LmpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBRckRlY29tcG9zaXRpb24sIGRlZmF1bHQgYXMgUVJ9IGZyb20gJy4vZGMvcXIuanMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgZ2xvYmFsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbi8vIE5vZGUuQ09OU1RBTlRTXG4vLyAnY2F1c2Ugc29tZSBlbmdpbmUgaGFzIG5vIGdsb2JhbCBOb2RlIGRlZmluZWRcbi8vIChpLmUuIE5vZGUsIE5hdGl2ZVNjcmlwdCwgYmFzaWNIVE1MIC4uLiApXG5leHBvcnQgY29uc3QgRUxFTUVOVF9OT0RFID0gMTtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfTk9ERSA9IDI7XG5leHBvcnQgY29uc3QgVEVYVF9OT0RFID0gMztcbmV4cG9ydCBjb25zdCBDT01NRU5UX05PREUgPSA4O1xuZXhwb3J0IGNvbnN0IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSAxMTtcblxuLy8gU1ZHIHJlbGF0ZWQgY29uc3RhbnRzXG5leHBvcnQgY29uc3QgT1dORVJfU1ZHX0VMRU1FTlQgPSAnb3duZXJTVkdFbGVtZW50JztcbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxuLy8gQ3VzdG9tIEVsZW1lbnRzIC8gTXV0YXRpb25PYnNlcnZlciBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBDT05ORUNURUQgPSAnY29ubmVjdGVkJztcbmV4cG9ydCBjb25zdCBESVNDT05ORUNURUQgPSAnZGlzJyArIENPTk5FQ1RFRDtcblxuLy8gaHlwZXJIVE1MIHJlbGF0ZWQgY29uc3RhbnRzXG5leHBvcnQgY29uc3QgRVhQQU5ETyA9ICdfaHlwZXI6ICc7XG5leHBvcnQgY29uc3QgU0hPVUxEX1VTRV9URVhUX0NPTlRFTlQgPSAvXnN0eWxlfHRleHRhcmVhJC9pO1xuZXhwb3J0IGNvbnN0IFVJRCA9IEVYUEFORE8gKyAoKE1hdGgucmFuZG9tKCkgKiBuZXcgRGF0ZSkgfCAwKSArICc7JztcbmV4cG9ydCBjb25zdCBVSURDID0gJzwhLS0nICsgVUlEICsgJy0tPic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgYSByb3cgaW5kZXggaXMgbm90IG91dCBvZiBib3VuZHNcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtib29sZWFufSBbb3V0ZXJdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jvd0luZGV4KG1hdHJpeCwgaW5kZXgsIG91dGVyKSB7XG4gICAgdmFyIG1heCA9IG91dGVyID8gbWF0cml4LnJvd3MgOiBtYXRyaXgucm93cyAtIDE7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IG1heCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignUm93IGluZGV4IG91dCBvZiByYW5nZScpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCBhIGNvbHVtbiBpbmRleCBpcyBub3Qgb3V0IG9mIGJvdW5kc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvdXRlcl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sdW1uSW5kZXgobWF0cml4LCBpbmRleCwgb3V0ZXIpIHtcbiAgICB2YXIgbWF4ID0gb3V0ZXIgPyBtYXRyaXguY29sdW1ucyA6IG1hdHJpeC5jb2x1bW5zIC0gMTtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbWF4KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb2x1bW4gaW5kZXggb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IHRoZSBwcm92aWRlZCB2ZWN0b3IgaXMgYW4gYXJyYXkgd2l0aCB0aGUgcmlnaHQgbGVuZ3RoXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jvd1ZlY3RvcihtYXRyaXgsIHZlY3Rvcikge1xuICAgIGlmICh2ZWN0b3IudG8xREFycmF5KSB7XG4gICAgICAgIHZlY3RvciA9IHZlY3Rvci50bzFEQXJyYXkoKTtcbiAgICB9XG4gICAgaWYgKHZlY3Rvci5sZW5ndGggIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd2ZWN0b3Igc2l6ZSBtdXN0IGJlIHRoZSBzYW1lIGFzIHRoZSBudW1iZXIgb2YgY29sdW1ucycpO1xuICAgIH1cbiAgICByZXR1cm4gdmVjdG9yO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IHRoZSBwcm92aWRlZCB2ZWN0b3IgaXMgYW4gYXJyYXkgd2l0aCB0aGUgcmlnaHQgbGVuZ3RoXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbHVtblZlY3RvcihtYXRyaXgsIHZlY3Rvcikge1xuICAgIGlmICh2ZWN0b3IudG8xREFycmF5KSB7XG4gICAgICAgIHZlY3RvciA9IHZlY3Rvci50bzFEQXJyYXkoKTtcbiAgICB9XG4gICAgaWYgKHZlY3Rvci5sZW5ndGggIT09IG1hdHJpeC5yb3dzKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd2ZWN0b3Igc2l6ZSBtdXN0IGJlIHRoZSBzYW1lIGFzIHRoZSBudW1iZXIgb2Ygcm93cycpO1xuICAgIH1cbiAgICByZXR1cm4gdmVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdzogY2hlY2tSb3dJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcyksXG4gICAgICAgIGNvbHVtbjogY2hlY2tDb2x1bW5JbmRpY2VzKG1hdHJpeCwgY29sdW1uSW5kaWNlcylcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSb3dJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcykge1xuICAgIGlmICh0eXBlb2Ygcm93SW5kaWNlcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5leHBlY3RlZCB0eXBlIGZvciByb3cgaW5kaWNlcycpO1xuICAgIH1cblxuICAgIHZhciByb3dPdXQgPSByb3dJbmRpY2VzLnNvbWUociA9PiB7XG4gICAgICAgIHJldHVybiByIDwgMCB8fCByID49IG1hdHJpeC5yb3dzO1xuXG4gICAgfSk7XG5cbiAgICBpZiAocm93T3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdyb3cgaW5kaWNlcyBhcmUgb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvd0luZGljZXMpKSByb3dJbmRpY2VzID0gQXJyYXkuZnJvbShyb3dJbmRpY2VzKTtcblxuICAgIHJldHVybiByb3dJbmRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb2x1bW5JbmRpY2VzKG1hdHJpeCwgY29sdW1uSW5kaWNlcykge1xuICAgIGlmICh0eXBlb2YgY29sdW1uSW5kaWNlcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5leHBlY3RlZCB0eXBlIGZvciBjb2x1bW4gaW5kaWNlcycpO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5PdXQgPSBjb2x1bW5JbmRpY2VzLnNvbWUoYyA9PiB7XG4gICAgICAgIHJldHVybiBjIDwgMCB8fCBjID49IG1hdHJpeC5jb2x1bW5zO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbHVtbk91dCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignY29sdW1uIGluZGljZXMgYXJlIG91dCBvZiByYW5nZScpO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29sdW1uSW5kaWNlcykpIGNvbHVtbkluZGljZXMgPSBBcnJheS5mcm9tKGNvbHVtbkluZGljZXMpO1xuXG4gICAgcmV0dXJuIGNvbHVtbkluZGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKG1hdHJpeCwgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSA1KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHR5cGUnKTtcbiAgICB2YXIgbm90QWxsTnVtYmVycyA9IEFycmF5LmZyb20oYXJndW1lbnRzKS5zbGljZSgxKS5zb21lKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmcgIT09ICdudW1iZXInO1xuICAgIH0pO1xuICAgIGlmIChub3RBbGxOdW1iZXJzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHR5cGUnKTtcbiAgICBpZiAoc3RhcnRSb3cgPiBlbmRSb3cgfHwgc3RhcnRDb2x1bW4gPiBlbmRDb2x1bW4gfHwgc3RhcnRSb3cgPCAwIHx8IHN0YXJ0Um93ID49IG1hdHJpeC5yb3dzIHx8IGVuZFJvdyA8IDAgfHwgZW5kUm93ID49IG1hdHJpeC5yb3dzIHx8IHN0YXJ0Q29sdW1uIDwgMCB8fCBzdGFydENvbHVtbiA+PSBtYXRyaXguY29sdW1ucyB8fCBlbmRDb2x1bW4gPCAwIHx8IGVuZENvbHVtbiA+PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignU3VibWF0cml4IGluZGljZXMgYXJlIG91dCBvZiByYW5nZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlKGZyb20sIHRvKSB7XG4gICAgdmFyIGFyciA9IG5ldyBBcnJheSh0byAtIGZyb20gKyAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJbaV0gPSBmcm9tICsgaTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5Um93KG1hdHJpeCkge1xuICAgIHZhciBzdW0gPSBNYXRyaXguemVyb3MobWF0cml4LnJvd3MsIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7ICsraSkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyArK2opIHtcbiAgICAgICAgICAgIHN1bS5zZXQoaSwgMCwgc3VtLmdldChpLCAwKSArIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeUNvbHVtbihtYXRyaXgpIHtcbiAgICB2YXIgc3VtID0gTWF0cml4Lnplcm9zKDEsIG1hdHJpeC5jb2x1bW5zKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyArK2kpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgKytqKSB7XG4gICAgICAgICAgICBzdW0uc2V0KDAsIGosIHN1bS5nZXQoMCwgaikgKyBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQWxsKG1hdHJpeCkge1xuICAgIHZhciB2ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB2ICs9IG1hdHJpeC5nZXQoaSwgaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgZ2xvYmFsLFxuICBPV05FUl9TVkdfRUxFTUVOVCxcbiAgU1ZHX05BTUVTUEFDRSxcbiAgVUlELFxuICBVSURDXG59IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuaW1wb3J0IHtcbiAgaGFzQXBwZW5kLFxuICBoYXNDb250ZW50LFxuICBoYXNEb29tZWRDbG9uZU5vZGUsXG4gIGhhc0ltcG9ydE5vZGVcbn0gZnJvbSAnLi9mZWF0dXJlcy1kZXRlY3Rpb24uanMnO1xuXG5pbXBvcnQge2NyZWF0ZSwgZG9jLCBmcmFnbWVudH0gZnJvbSAnLi9lYXN5LWRvbS5qcyc7XG5cbi8vIGFwcGVuZHMgYW4gYXJyYXkgb2Ygbm9kZXNcbi8vIHRvIGEgZ2VuZXJpYyBub2RlL2ZyYWdtZW50XG4vLyBXaGVuIGF2YWlsYWJsZSwgdXNlcyBhcHBlbmQgcGFzc2luZyBhbGwgYXJndW1lbnRzIGF0IG9uY2Vcbi8vIGhvcGluZyB0aGF0J3Mgc29tZWhvdyBmYXN0ZXIsIGV2ZW4gaWYgYXBwZW5kIGhhcyBtb3JlIGNoZWNrcyBvbiB0eXBlXG5leHBvcnQgY29uc3QgYXBwZW5kID0gaGFzQXBwZW5kID9cbiAgKG5vZGUsIGNoaWxkTm9kZXMpID0+IHtcbiAgICBub2RlLmFwcGVuZC5hcHBseShub2RlLCBjaGlsZE5vZGVzKTtcbiAgfSA6XG4gIChub2RlLCBjaGlsZE5vZGVzKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGVzW2ldKTtcbiAgICB9XG4gIH07XG5cbi8vIHJlbW92ZSBjb21tZW50cyBwYXJ0cyBmcm9tIGF0dHJpYnV0ZXMgdG8gYXZvaWQgaXNzdWVzXG4vLyB3aXRoIGVpdGhlciBvbGQgYnJvd3NlcnMgb3IgU1ZHIGVsZW1lbnRzXG4vLyBleHBvcnQgY29uc3QgY2xlYW5BdHRyaWJ1dGVzID0gaHRtbCA9PiBodG1sLnJlcGxhY2Uobm8sIGNvbW1lbnRzKTtcbmNvbnN0IGF0dHJOYW1lID0gJ1teXFxcXFNdK1teIFxcXFxmXFxcXG5cXFxcclxcXFx0XFxcXC8+XCJcXCc9XSsnO1xuY29uc3Qgbm8gPSBuZXcgUmVnRXhwKFxuICAnKDxbYS16XStbYS16MC05Ol8tXSopKCg/OicgK1xuICAgIGF0dHJOYW1lICtcbiAgJyg/Oj0oPzpcXCcuKj9cXCd8XCIuKj9cInw8Lis/PnxcXFxcUyspKT8pKykoW15cXFxcU10qLz8+KScsXG4gICdnaSdcbik7XG5jb25zdCBmaW5kQXR0cmlidXRlcyA9IG5ldyBSZWdFeHAoJygnICsgYXR0ck5hbWUgKyAnPSkoW1xcJ1wiXT8pJyArIFVJREMgKyAnXFxcXDInLCAnZ2knKTtcbmNvbnN0IGNvbW1lbnRzID0gKCQwLCAkMSwgJDIsICQzKSA9PlxuICAkMSArICQyLnJlcGxhY2UoZmluZEF0dHJpYnV0ZXMsIHJlcGxhY2VBdHRyaWJ1dGVzKSArICQzO1xuY29uc3QgcmVwbGFjZUF0dHJpYnV0ZXMgPSAoJDAsICQxLCAkMikgPT4gJDEgKyAoJDIgfHwgJ1wiJykgKyBVSUQgKyAoJDIgfHwgJ1wiJyk7XG5cbi8vIGdpdmVuIGEgbm9kZSBhbmQgYSBnZW5lcmljIEhUTUwgY29udGVudCxcbi8vIGNyZWF0ZSBlaXRoZXIgYW4gU1ZHIG9yIGFuIEhUTUwgZnJhZ21lbnRcbi8vIHdoZXJlIHN1Y2ggY29udGVudCB3aWxsIGJlIGluamVjdGVkXG5leHBvcnQgY29uc3QgY3JlYXRlRnJhZ21lbnQgPSAobm9kZSwgaHRtbCkgPT5cbiAgKE9XTkVSX1NWR19FTEVNRU5UIGluIG5vZGUgP1xuICAgIFNWR0ZyYWdtZW50IDpcbiAgICBIVE1MRnJhZ21lbnRcbiAgKShub2RlLCBodG1sLnJlcGxhY2Uobm8sIGNvbW1lbnRzKSk7XG5cbi8vIElFL0VkZ2Ugc2hlbmFuaWdhbnMgcHJvb2YgY2xvbmVOb2RlXG4vLyBpdCBnb2VzIHRocm91Z2ggYWxsIG5vZGVzIG1hbnVhbGx5XG4vLyBpbnN0ZWFkIG9mIHJlbHlpbmcgdGhlIGVuZ2luZSB0byBzdWRkZW5seVxuLy8gbWVyZ2Ugbm9kZXMgdG9nZXRoZXJcbmNvbnN0IGNsb25lTm9kZSA9IGhhc0Rvb21lZENsb25lTm9kZSA/XG4gIG5vZGUgPT4ge1xuICAgIGNvbnN0IGNsb25lID0gbm9kZS5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzIHx8XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiBleGNlc3Mgb2YgY2F1dGlvblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBzb21lIG5vZGUsIGluIElFLCBtaWdodCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIGNoaWxkTm9kZXMgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmYWxsYmFjayBlbnN1cmUgd29ya2luZyBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaW4gb2xkZXIgSUUgd2l0aG91dCBjb21wcm9taXNpbmcgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvciBhbnkgb3RoZXIgYnJvd3Nlci9lbmdpbmUgaW52b2x2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICBbXTtcbiAgICBjb25zdCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGROb2Rlc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG4gIH0gOlxuICAvLyB0aGUgZm9sbG93aW5nIGlnbm9yZSBpcyBkdWUgY29kZS1jb3ZlcmFnZVxuICAvLyBjb21iaW5hdGlvbiBvZiBub3QgaGF2aW5nIGRvY3VtZW50LmltcG9ydE5vZGVcbiAgLy8gYnV0IGhhdmluZyBhIHdvcmtpbmcgbm9kZS5jbG9uZU5vZGUuXG4gIC8vIFRoaXMgc2hlbmFyaW8gaXMgY29tbW9uIG9uIG9sZGVyIEFuZHJvaWQvV2ViS2l0IGJyb3dzZXJzXG4gIC8vIGJ1dCBiYXNpY0hUTUwgaGVyZSB0ZXN0cyBqdXN0IHR3byBtYWpvciBjYXNlczpcbiAgLy8gd2l0aCBkb2N1bWVudC5pbXBvcnROb2RlIG9yIHdpdGggYnJva2VuIGNsb25lTm9kZS5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgbm9kZSA9PiBub2RlLmNsb25lTm9kZSh0cnVlKTtcblxuLy8gdXNlZCB0byBpbXBvcnQgaHRtbCBpbnRvIGZyYWdtZW50c1xuZXhwb3J0IGNvbnN0IGltcG9ydE5vZGUgPSBoYXNJbXBvcnROb2RlID9cbiAgKGRvYywgbm9kZSkgPT4gZG9jLmltcG9ydE5vZGUobm9kZSwgdHJ1ZSkgOlxuICAoZG9jLCBub2RlKSA9PiBjbG9uZU5vZGUobm9kZSlcblxuLy8ganVzdCByZWN5Y2xpbmcgYSBvbmUtb2ZmIGFycmF5IHRvIHVzZSBzbGljZS9zcGxpY2Vcbi8vIGluIGV2ZXJ5IG5lZWRlZCBwbGFjZVxuY29uc3Qge3B1c2gsIHNsaWNlLCBzcGxpY2UsIHVuc2hpZnR9ID0gW107XG5leHBvcnQge3B1c2gsIHNsaWNlLCBzcGxpY2UsIHVuc2hpZnR9O1xuXG4vLyBsYXp5IGV2YWx1YXRlZCwgcmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aXR5XG4vLyBvZiBhIHRlbXBsYXRlIGxpdGVyYWwsIGFzIHRlbXBhbHRlIGxpdGVyYWwgaXRzZWxmLlxuLy8gQnkgZGVmYXVsdCwgRVMyMDE1IHRlbXBsYXRlIGxpdGVyYWxzIGFyZSB1bmlxdWVcbi8vIHRhZ2BhJHsxfXpgID09PSB0YWdgYSR7Mn16YFxuLy8gZXZlbiBpZiBpbnRlcnBvbGF0ZWQgdmFsdWVzIGFyZSBkaWZmZXJlbnRcbi8vIHRoZSB0ZW1wbGF0ZSBjaHVua3MgYXJlIGluIGEgZnJvemVuIEFycmF5XG4vLyB0aGF0IGlzIGlkZW50aWNhbCBlYWNoIHRpbWUgeW91IHVzZSB0aGUgc2FtZVxuLy8gbGl0ZXJhbCB0byByZXByZXNlbnQgc2FtZSBzdGF0aWMgY29udGVudFxuLy8gYXJvdW5kIGl0cyBvd24gaW50ZXJwb2xhdGlvbnMuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gdGVtcGxhdGUgPT4gVEwodGVtcGxhdGUpO1xuXG4vLyBUTCByZXR1cm5zIGEgdW5pcXVlIHZlcnNpb24gb2YgdGhlIHRlbXBsYXRlXG4vLyBpdCBuZWVkcyBsYXp5IGZlYXR1cmUgZGV0ZWN0aW9uXG4vLyAoY2Fubm90IHRydXN0IGxpdGVyYWxzIHdpdGggdHJhbnNwaWxlZCBjb2RlKVxubGV0IFRMID0gdGVtcGxhdGUgPT4ge1xuICBpZiAoXG4gICAgLy8gVHlwZVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFscyBhcmUgbm90IHN0YW5kYXJkXG4gICAgdGVtcGxhdGUucHJvcGVydHlJc0VudW1lcmFibGUoJ3JhdycpIHx8XG4gICAgKFxuICAgICAgLy8gRmlyZWZveCA8IDU1IGhhcyBub3Qgc3RhbmRhcmQgaW1wbGVtZW50YXRpb24gbmVpdGhlclxuICAgICAgL0ZpcmVmb3hcXC8oXFxkKykvLnRlc3QoKGdsb2JhbC5uYXZpZ2F0b3IgfHwge30pLnVzZXJBZ2VudCkgJiZcbiAgICAgIHBhcnNlRmxvYXQoUmVnRXhwLiQxKSA8IDU1XG4gICAgKVxuICApIHtcbiAgICAvLyBpbiB0aGVzZSBjYXNlcywgYWRkcmVzcyB0ZW1wbGF0ZXMgb25jZVxuICAgIGNvbnN0IHRlbXBsYXRlT2JqZWN0cyA9IHt9O1xuICAgIC8vIGJ1dCBhbHdheXMgcmV0dXJuIHRoZSBzYW1lIHRlbXBsYXRlXG4gICAgVEwgPSB0ZW1wbGF0ZSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSAnXycgKyB0ZW1wbGF0ZS5qb2luKFVJRCk7XG4gICAgICByZXR1cm4gdGVtcGxhdGVPYmplY3RzW2tleV0gfHwgKFxuICAgICAgICB0ZW1wbGF0ZU9iamVjdHNba2V5XSA9IHRlbXBsYXRlXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gbWFrZSBUTCBhbiBpZGVudGl0eSBsaWtlIGZ1bmN0aW9uXG4gICAgVEwgPSB0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZTtcbiAgfVxuICByZXR1cm4gVEwodGVtcGxhdGUpO1xufTtcblxuLy8gY3JlYXRlIGRvY3VtZW50IGZyYWdtZW50cyB2aWEgbmF0aXZlIHRlbXBsYXRlXG4vLyB3aXRoIGEgZmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgd29uJ3QgYmUgYWJsZVxuLy8gdG8gZGVhbCB3aXRoIHNvbWUgaW5qZWN0ZWQgZWxlbWVudCBzdWNoIDx0ZD4gb3Igb3RoZXJzXG5jb25zdCBIVE1MRnJhZ21lbnQgPSBoYXNDb250ZW50ID9cbiAgKG5vZGUsIGh0bWwpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUobm9kZSwgJ3RlbXBsYXRlJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jb250ZW50O1xuICB9IDpcbiAgKG5vZGUsIGh0bWwpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUobm9kZSwgJ3RlbXBsYXRlJyk7XG4gICAgY29uc3QgY29udGVudCA9IGZyYWdtZW50KG5vZGUpO1xuICAgIGlmICgvXlteXFxTXSo/PChjb2woPzpncm91cCk/fHQoPzpoZWFkfGJvZHl8Zm9vdHxyfGR8aCkpL2kudGVzdChodG1sKSkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBSZWdFeHAuJDE7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzx0YWJsZT4nICsgaHRtbCArICc8L3RhYmxlPic7XG4gICAgICBhcHBlbmQoY29udGVudCwgc2xpY2UuY2FsbChjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICBhcHBlbmQoY29udGVudCwgc2xpY2UuY2FsbChjb250YWluZXIuY2hpbGROb2RlcykpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuLy8gY3JlYXRlcyBTVkcgZnJhZ21lbnQgd2l0aCBhIGZhbGxiYWNrIGZvciBJRSB0aGF0IG5lZWRzIFNWR1xuLy8gd2l0aGluIHRoZSBIVE1MIGNvbnRlbnRcbmNvbnN0IFNWR0ZyYWdtZW50ID0gaGFzQ29udGVudCA/XG4gIChub2RlLCBodG1sKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGZyYWdtZW50KG5vZGUpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvYyhub2RlKS5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ3N2ZycpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICAgIGFwcGVuZChjb250ZW50LCBzbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZE5vZGVzKSk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0gOlxuICAobm9kZSwgaHRtbCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmcmFnbWVudChub2RlKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUobm9kZSwgJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cIicgKyBTVkdfTkFNRVNQQUNFICsgJ1wiPicgKyBodG1sICsgJzwvc3ZnPic7XG4gICAgYXBwZW5kKGNvbnRlbnQsIHNsaWNlLmNhbGwoY29udGFpbmVyLmZpcnN0Q2hpbGQuY2hpbGROb2RlcykpO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdGhlc2UgYXJlIHRpbnkgaGVscGVycyB0byBzaW1wbGlmeSBtb3N0IGNvbW1vbiBvcGVyYXRpb25zIG5lZWRlZCBoZXJlXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKG5vZGUsIHR5cGUpID0+IGRvYyhub2RlKS5jcmVhdGVFbGVtZW50KHR5cGUpO1xuZXhwb3J0IGNvbnN0IGRvYyA9IG5vZGUgPT4gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSBub2RlID0+IGRvYyhub2RlKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5leHBvcnQgY29uc3QgdGV4dCA9IChub2RlLCB0ZXh0KSA9PiBkb2Mobm9kZSkuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC9lYXN5LWRvbS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcbmltcG9ydCB7IFVuc3Vic2NyaWJlIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUsIGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBIeXBlckNvbXBvbmVudCB9IGZyb20gJ3V0aWxzL0h5cGVyQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZSBleHRlbmRzIERpY3Rpb25hcnk+IGV4dGVuZHMgSHlwZXJDb21wb25lbnQ8XHJcbiAgQ29udGFpbmVyU3RhdGVcclxuPiB7XHJcbiAgcHJpdmF0ZSBzdG9yZVVuc3Vic2NyaWJlQ2FsbGJhY2s6IFVuc3Vic2NyaWJlIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5vblN0YXRlVXBkYXRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uY29ubmVjdGVkKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1N0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25kaXNjb25uZWN0ZWQoKSB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9TdG9yZSgpIHtcclxuICAgIHRoaXMuc3RvcmVVbnN1YnNjcmliZUNhbGxiYWNrID0gYXBwU3RvcmUuc3Vic2NyaWJlKHRoaXMub25TdGF0ZVVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1bnN1YnNjcmliZUZyb21TdG9yZSgpIHtcclxuICAgIGlmICh0aGlzLnN0b3JlVW5zdWJzY3JpYmVDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLnN0b3JlVW5zdWJzY3JpYmVDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZTtcclxuXHJcbiAgcHJpdmF0ZSBvblN0YXRlVXBkYXRlKGlnbm9yZVJlbmRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBuZXdDb250YWluZXJTdGF0ZSA9IHRoaXMubWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0b3JlLmdldFN0YXRlKCkpO1xyXG4gICAgY29uc3QgcmVuZGVyTmVlZGVkID0gdGhpcy5wYXRjaFN0YXRlKG5ld0NvbnRhaW5lclN0YXRlKTtcclxuXHJcbiAgICBpZiAocmVuZGVyTmVlZGVkICYmICFpZ25vcmVSZW5kZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGF0Y2hTdGF0ZShuZXdTdGF0ZTogUGFydGlhbDxDb250YWluZXJTdGF0ZT4pOiBib29sZWFuIHtcclxuICAgIGxldCByZW5kZXJOZWVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdTdGF0ZVtrZXldO1xyXG5cclxuICAgICAgaWYgKHByZXZpb3VzVmFsdWUgPT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3RhdGVba2V5XSA9IG5ld1ZhbHVlO1xyXG4gICAgICByZW5kZXJOZWVkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZW5kZXJOZWVkZWQ7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3V0aWxzL0h5cGVyQ29udGFpbmVyLnRzIiwiaW1wb3J0ICcuL3N5bWJvbC1zcGVjaWVzJztcbmltcG9ydCBBYnN0cmFjdE1hdHJpeCBmcm9tICcuL2Fic3RyYWN0TWF0cml4JztcbmltcG9ydCB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCxcbiAgICBjaGVja0NvbHVtblZlY3RvcixcbiAgICBjaGVja1Jvd0luZGV4LFxuICAgIGNoZWNrUm93VmVjdG9yXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCBleHRlbmRzIEFic3RyYWN0TWF0cml4KEFycmF5KSB7XG4gICAgY29uc3RydWN0b3IoblJvd3MsIG5Db2x1bW5zKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgblJvd3MgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KG5Sb3dzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTWF0cml4LmlzTWF0cml4KG5Sb3dzKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5Sb3dzLmNsb25lKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihuUm93cykgJiYgblJvd3MgPiAwKSB7IC8vIENyZWF0ZSBhbiBlbXB0eSBtYXRyaXhcbiAgICAgICAgICAgIHN1cGVyKG5Sb3dzKTtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG5Db2x1bW5zKSAmJiBuQ29sdW1ucyA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgblJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gbmV3IEFycmF5KG5Db2x1bW5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25Db2x1bW5zIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuUm93cykpIHsgLy8gQ29weSB0aGUgdmFsdWVzIGZyb20gdGhlIDJEIGFycmF5XG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBuUm93cztcbiAgICAgICAgICAgIG5Sb3dzID0gbWF0cml4Lmxlbmd0aDtcbiAgICAgICAgICAgIG5Db2x1bW5zID0gbWF0cml4WzBdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbkNvbHVtbnMgIT09ICdudW1iZXInIHx8IG5Db2x1bW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGF0YSBtdXN0IGJlIGEgMkQgYXJyYXkgd2l0aCBhdCBsZWFzdCBvbmUgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIoblJvd3MpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5Sb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0cml4W2ldLmxlbmd0aCAhPT0gbkNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luY29uc2lzdGVudCBhcnJheSBkaW1lbnNpb25zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBbXS5jb25jYXQobWF0cml4W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIgb3IgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvd3MgPSBuUm93cztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gbkNvbHVtbnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXNbcm93SW5kZXhdW2NvbHVtbkluZGV4XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzW3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHJvdyBmcm9tIHRoZSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFJvdyBpbmRleFxuICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAqL1xuICAgIHJlbW92ZVJvdyhpbmRleCkge1xuICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMucm93cyA9PT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0EgbWF0cml4IGNhbm5vdCBoYXZlIGxlc3MgdGhhbiBvbmUgcm93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnJvd3MgLT0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHJvdyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4ID0gdGhpcy5yb3dzXSAtIFJvdyBpbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSBhcnJheSAtIEFycmF5IG9yIHZlY3RvclxuICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAqL1xuICAgIGFkZFJvdyhpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgaWYgKGFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFycmF5ID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMucm93cztcbiAgICAgICAgfVxuICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4LCB0cnVlKTtcbiAgICAgICAgYXJyYXkgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCBhcnJheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAwLCBhcnJheSk7XG4gICAgICAgIHRoaXMucm93cyArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29sdW1uIGZyb20gdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICovXG4gICAgcmVtb3ZlQ29sdW1uKGluZGV4KSB7XG4gICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5zID09PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQSBtYXRyaXggY2Fubm90IGhhdmUgbGVzcyB0aGFuIG9uZSBjb2x1bW4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zIC09IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb2x1bW4gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleCA9IHRoaXMuY29sdW1uc10gLSBDb2x1bW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gYXJyYXkgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgKi9cbiAgICBhZGRDb2x1bW4oaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJyYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhcnJheSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCwgdHJ1ZSk7XG4gICAgICAgIGFycmF5ID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgYXJyYXkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldLnNwbGljZShpbmRleCwgMCwgYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1ucyArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL21hdHJpeC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTHVEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvbHUnO1xuaW1wb3J0IFN2RGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL3N2ZCc7XG5pbXBvcnQgcmVzY2FsZSBmcm9tICdtbC1hcnJheS1yZXNjYWxlJztcbmltcG9ydCB7XG4gICAgY2hlY2tSb3dWZWN0b3IsIGNoZWNrUm93SW5kZXgsIGNoZWNrQ29sdW1uSW5kZXgsIGNoZWNrQ29sdW1uVmVjdG9yLFxuICAgIGNoZWNrUmFuZ2UsIGNoZWNrSW5kaWNlcyxcbiAgICBzdW1CeVJvdywgc3VtQnlDb2x1bW4sIHN1bUFsbFxufSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IE1hdHJpeFRyYW5zcG9zZVZpZXcgZnJvbSAnLi92aWV3cy90cmFuc3Bvc2UnO1xuaW1wb3J0IE1hdHJpeFJvd1ZpZXcgZnJvbSAnLi92aWV3cy9yb3cnO1xuaW1wb3J0IE1hdHJpeFN1YlZpZXcgZnJvbSAnLi92aWV3cy9zdWInO1xuaW1wb3J0IE1hdHJpeFNlbGVjdGlvblZpZXcgZnJvbSAnLi92aWV3cy9zZWxlY3Rpb24nO1xuaW1wb3J0IE1hdHJpeFJvd1NlbGVjdGlvblZpZXcgZnJvbSAnLi92aWV3cy9yb3dTZWxlY3Rpb24nO1xuaW1wb3J0IE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcgZnJvbSAnLi92aWV3cy9jb2x1bW5TZWxlY3Rpb24nO1xuaW1wb3J0IE1hdHJpeENvbHVtblZpZXcgZnJvbSAnLi92aWV3cy9jb2x1bW4nO1xuaW1wb3J0IE1hdHJpeEZsaXBSb3dWaWV3IGZyb20gJy4vdmlld3MvZmxpcFJvdyc7XG5pbXBvcnQgTWF0cml4RmxpcENvbHVtblZpZXcgZnJvbSAnLi92aWV3cy9mbGlwQ29sdW1uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJzdHJhY3RNYXRyaXgoc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3RvciA9PT0gdW5kZWZpbmVkKSBzdXBlckN0b3IgPSBPYmplY3Q7XG5cbiAgICAvKipcbiAgICAgKiBSZWFsIG1hdHJpeFxuICAgICAqIEBjbGFzcyBNYXRyaXhcbiAgICAgKiBAcGFyYW0ge251bWJlcnxBcnJheXxNYXRyaXh9IG5Sb3dzIC0gTnVtYmVyIG9mIHJvd3Mgb2YgdGhlIG5ldyBtYXRyaXgsXG4gICAgICogMkQgYXJyYXkgY29udGFpbmluZyB0aGUgZGF0YSBvciBNYXRyaXggaW5zdGFuY2UgdG8gY2xvbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW25Db2x1bW5zXSAtIE51bWJlciBvZiBjb2x1bW5zIG9mIHRoZSBuZXcgbWF0cml4XG4gICAgICovXG4gICAgY2xhc3MgTWF0cml4IGV4dGVuZHMgc3VwZXJDdG9yIHtcbiAgICAgICAgc3RhdGljIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIE1hdHJpeCB3aXRoIHRoZSBjaG9zZW4gZGltZW5zaW9ucyBmcm9tIGEgMUQgYXJyYXlcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1Jvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbmV3Q29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5ld0RhdGEgLSBBIDFEIGFycmF5IGNvbnRhaW5pbmcgZGF0YSBmb3IgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBmcm9tMURBcnJheShuZXdSb3dzLCBuZXdDb2x1bW5zLCBuZXdEYXRhKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gbmV3Um93cyAqIG5ld0NvbHVtbnM7XG4gICAgICAgICAgICBpZiAobGVuZ3RoICE9PSBuZXdEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdEYXRhIGxlbmd0aCBkb2VzIG5vdCBtYXRjaCBnaXZlbiBkaW1lbnNpb25zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMobmV3Um93cywgbmV3Q29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBuZXdSb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IG5ld0NvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXQocm93LCBjb2x1bW4sIG5ld0RhdGFbcm93ICogbmV3Q29sdW1ucyArIGNvbHVtbl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHJvdyB2ZWN0b3IsIGEgbWF0cml4IHdpdGggb25seSBvbmUgcm93LlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBuZXdEYXRhIC0gQSAxRCBhcnJheSBjb250YWluaW5nIGRhdGEgZm9yIHRoZSB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcm93VmVjdG9yKG5ld0RhdGEpIHtcbiAgICAgICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgdGhpcygxLCBuZXdEYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3Iuc2V0KDAsIGksIG5ld0RhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgY29sdW1uIHZlY3RvciwgYSBtYXRyaXggd2l0aCBvbmx5IG9uZSBjb2x1bW4uXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5ld0RhdGEgLSBBIDFEIGFycmF5IGNvbnRhaW5pbmcgZGF0YSBmb3IgdGhlIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBjb2x1bW5WZWN0b3IobmV3RGF0YSkge1xuICAgICAgICAgICAgdmFyIHZlY3RvciA9IG5ldyB0aGlzKG5ld0RhdGEubGVuZ3RoLCAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlY3Rvci5zZXQoaSwgMCwgbmV3RGF0YVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYW4gZW1wdHkgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbnMuIFZhbHVlcyB3aWxsIGJlIHVuZGVmaW5lZC4gU2FtZSBhcyB1c2luZyBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZW1wdHkocm93cywgY29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVmFsdWVzIHdpbGwgYmUgc2V0IHRvIHplcm8uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyB6ZXJvcyhyb3dzLCBjb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbXB0eShyb3dzLCBjb2x1bW5zKS5maWxsKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVmFsdWVzIHdpbGwgYmUgc2V0IHRvIG9uZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIG9uZXMocm93cywgY29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHkocm93cywgY29sdW1ucykuZmlsbCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbnMuIFZhbHVlcyB3aWxsIGJlIHJhbmRvbWx5IHNldC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtybmc9TWF0aC5yYW5kb21dIC0gUmFuZG9tIG51bWJlciBnZW5lcmF0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHJhbmQocm93cywgY29sdW1ucywgcm5nKSB7XG4gICAgICAgICAgICBpZiAocm5nID09PSB1bmRlZmluZWQpIHJuZyA9IE1hdGgucmFuZG9tO1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuZW1wdHkocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgaiwgcm5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBkaW1lbnNpb25zLiBWYWx1ZXMgd2lsbCBiZSByYW5kb20gaW50ZWdlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFZhbHVlPTEwMDBdIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbcm5nPU1hdGgucmFuZG9tXSAtIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyByYW5kSW50KHJvd3MsIGNvbHVtbnMsIG1heFZhbHVlLCBybmcpIHtcbiAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA9PT0gdW5kZWZpbmVkKSBtYXhWYWx1ZSA9IDEwMDA7XG4gICAgICAgICAgICBpZiAocm5nID09PSB1bmRlZmluZWQpIHJuZyA9IE1hdGgucmFuZG9tO1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuZW1wdHkocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguZmxvb3Iocm5nKCkgKiBtYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpZGVudGl0eSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9uLiBWYWx1ZXMgb2YgdGhlIGRpYWdvbmFsIHdpbGwgYmUgMSBhbmQgb3RoZXJzIHdpbGwgYmUgMC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbHVtbnM9cm93c10gLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlPTFdIC0gVmFsdWUgdG8gZmlsbCB0aGUgZGlhZ29uYWwgd2l0aFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBpZGVudGl0eSBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBleWUocm93cywgY29sdW1ucywgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zID09PSB1bmRlZmluZWQpIGNvbHVtbnMgPSByb3dzO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHZhbHVlID0gMTtcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSB0aGlzLnplcm9zKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgaSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgZGlhZ29uYWwgbWF0cml4IGJhc2VkIG9uIHRoZSBnaXZlbiBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIEFycmF5IGNvbnRhaW5pbmcgdGhlIGRhdGEgZm9yIHRoZSBkaWFnb25hbFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Jvd3NdIC0gTnVtYmVyIG9mIHJvd3MgKERlZmF1bHQ6IGRhdGEubGVuZ3RoKVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbHVtbnNdIC0gTnVtYmVyIG9mIGNvbHVtbnMgKERlZmF1bHQ6IHJvd3MpXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IGRpYWdvbmFsIG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRpYWcoZGF0YSwgcm93cywgY29sdW1ucykge1xuICAgICAgICAgICAgdmFyIGwgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChyb3dzID09PSB1bmRlZmluZWQpIHJvd3MgPSBsO1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMgPT09IHVuZGVmaW5lZCkgY29sdW1ucyA9IHJvd3M7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5taW4obCwgcm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gdGhpcy56ZXJvcyhyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtYXRyaXguc2V0KGksIGksIGRhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbWF0cml4IHdob3NlIGVsZW1lbnRzIGFyZSB0aGUgbWluaW11bSBiZXR3ZWVuIG1hdHJpeDEgYW5kIG1hdHJpeDJcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeDFcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeDJcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIG1pbihtYXRyaXgxLCBtYXRyaXgyKSB7XG4gICAgICAgICAgICBtYXRyaXgxID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgxKTtcbiAgICAgICAgICAgIG1hdHJpeDIgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDIpO1xuICAgICAgICAgICAgdmFyIHJvd3MgPSBtYXRyaXgxLnJvd3M7XG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IG1hdHJpeDEuY29sdW1ucztcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcyhyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldChpLCBqLCBNYXRoLm1pbihtYXRyaXgxLmdldChpLCBqKSwgbWF0cml4Mi5nZXQoaSwgaikpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBtYXRyaXggd2hvc2UgZWxlbWVudHMgYXJlIHRoZSBtYXhpbXVtIGJldHdlZW4gbWF0cml4MSBhbmQgbWF0cml4MlxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4MVxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4MlxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgbWF4KG1hdHJpeDEsIG1hdHJpeDIpIHtcbiAgICAgICAgICAgIG1hdHJpeDEgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDEpO1xuICAgICAgICAgICAgbWF0cml4MiA9IHRoaXMuY2hlY2tNYXRyaXgobWF0cml4Mik7XG4gICAgICAgICAgICB2YXIgcm93cyA9IG1hdHJpeDEucm93cztcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gbWF0cml4MS5jb2x1bW5zO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2V0KGksIGosIE1hdGgubWF4KG1hdHJpeDEuZ2V0KGksIGopLCBtYXRyaXgyLmdldChpLCBqKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdGhhdCB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSBNYXRyaXggYW5kIHRyaWVzIHRvIGluc3RhbnRpYXRlIG9uZSBpZiBub3RcbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgY2hlY2tNYXRyaXgodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXguaXNNYXRyaXgodmFsdWUpID8gdmFsdWUgOiBuZXcgdGhpcyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBhcmd1bWVudCBpcyBhIE1hdHJpeCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBpc01hdHJpeCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPSBudWxsKSAmJiAodmFsdWUua2xhc3MgPT09ICdNYXRyaXgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJvcCB7bnVtYmVyfSBzaXplIC0gVGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgbWF0cml4LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3dzICogdGhpcy5jb2x1bW5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGxpZXMgYSBjYWxsYmFjayBmb3IgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXguIFRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgaW4gdGhlIG1hdHJpeCAodGhpcykgY29udGV4dC5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdHdvIHBhcmFtZXRlcnMgOiBpIChyb3cpIGFuZCBqIChjb2x1bW4pXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHkoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpaSA9IHRoaXMucm93cztcbiAgICAgICAgICAgIHZhciBqaiA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgMUQgYXJyYXkgZmlsbGVkIHJvdyBieSByb3cgd2l0aCB0aGUgbWF0cml4IHZhbHVlc1xuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRvMURBcnJheSgpIHtcbiAgICAgICAgICAgIHZhciBhcnJheSA9IG5ldyBBcnJheSh0aGlzLnNpemUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaSAqIHRoaXMuY29sdW1ucyArIGpdID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSAyRCBhcnJheSBjb250YWluaW5nIGEgY29weSBvZiB0aGUgZGF0YVxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRvMkRBcnJheSgpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gbmV3IEFycmF5KHRoaXMucm93cyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29weVtpXSA9IG5ldyBBcnJheSh0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29weVtpXVtqXSA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBoYXMgb25lIHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaXNSb3dWZWN0b3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3dzID09PSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBoYXMgb25lIGNvbHVtblxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb2x1bW5WZWN0b3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5zID09PSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBoYXMgb25lIHJvdyBvciBvbmUgY29sdW1uXG4gICAgICAgICAqL1xuICAgICAgICBpc1ZlY3RvcigpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5yb3dzID09PSAxKSB8fCAodGhpcy5jb2x1bW5zID09PSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBtYXRyaXggaGFzIHRoZSBzYW1lIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zXG4gICAgICAgICAqL1xuICAgICAgICBpc1NxdWFyZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvd3MgPT09IHRoaXMuY29sdW1ucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBtYXRyaXggaXMgc3F1YXJlIGFuZCBoYXMgdGhlIHNhbWUgdmFsdWVzIG9uIGJvdGggc2lkZXMgb2YgdGhlIGRpYWdvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpc1N5bW1ldHJpYygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDw9IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopICE9PSB0aGlzLmdldChqLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGEgZ2l2ZW4gZWxlbWVudCBvZiB0aGUgbWF0cml4LiBtYXQuc2V0KDMsNCwxKSBpcyBlcXVpdmFsZW50IHRvIG1hdFszXVs0XT0xXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93SW5kZXggLSBJbmRleCBvZiB0aGUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5JbmRleCAtIEluZGV4IG9mIHRoZSBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldCBtZXRob2QgaXMgdW5pbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIGVsZW1lbnQgb2YgdGhlIG1hdHJpeC4gbWF0LmdldCgzLDQpIGlzIGVxdWl2YWxlbnQgdG8gbWF0cml4WzNdWzRdXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93SW5kZXggLSBJbmRleCBvZiB0aGUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5JbmRleCAtIEluZGV4IG9mIHRoZSBjb2x1bW5cbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBtZXRob2QgaXMgdW5pbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgbWF0cml4IHRoYXQgaXMgYSByZXBldGl0aW9uIG9mIHRoZSBjdXJyZW50IG1hdHJpeC4gTmV3IG1hdHJpeCBoYXMgcm93UmVwIHRpbWVzIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgICogcm93cyBvZiB0aGUgbWF0cml4LCBhbmQgY29sUmVwIHRpbWVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dSZXAgLSBOdW1iZXIgb2YgdGltZXMgdGhlIHJvd3Mgc2hvdWxkIGJlIHJlcGVhdGVkXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xSZXAgLSBOdW1iZXIgb2YgdGltZXMgdGhlIGNvbHVtbnMgc2hvdWxkIGJlIHJlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDJdXSk7XG4gICAgICAgICAqIG1hdHJpeC5yZXBlYXQoMik7IC8vIFtbMSwyXSxbMSwyXV1cbiAgICAgICAgICovXG4gICAgICAgIHJlcGVhdChyb3dSZXAsIGNvbFJlcCkge1xuICAgICAgICAgICAgcm93UmVwID0gcm93UmVwIHx8IDE7XG4gICAgICAgICAgICBjb2xSZXAgPSBjb2xSZXAgfHwgMTtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10odGhpcy5yb3dzICogcm93UmVwLCB0aGlzLmNvbHVtbnMgKiBjb2xSZXApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dSZXA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sUmVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldFN1Yk1hdHJpeCh0aGlzLCB0aGlzLnJvd3MgKiBpLCB0aGlzLmNvbHVtbnMgKiBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbGxzIHRoZSBtYXRyaXggd2l0aCBhIGdpdmVuIHZhbHVlLiBBbGwgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gdGhpcyB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gTmV3IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgZmlsbCh2YWx1ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lZ2F0ZXMgdGhlIG1hdHJpeC4gQWxsIGVsZW1lbnRzIHdpbGwgYmUgbXVsdGlwbGllZCBieSAoLTEpXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgbmVnKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsUygtMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyBhcnJheSBmcm9tIHRoZSBnaXZlbiByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Um93KGluZGV4KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIHZhciByb3cgPSBuZXcgQXJyYXkodGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb3dbaV0gPSB0aGlzLmdldChpbmRleCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgcm93IHZlY3RvciBmcm9tIHRoZSBnaXZlbiByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIGdldFJvd1ZlY3RvcihpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Iucm93VmVjdG9yKHRoaXMuZ2V0Um93KGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIHJvdyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSBhcnJheSAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNldFJvdyhpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgYXJyYXkgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCBhcnJheSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaW5kZXgsIGksIGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIHR3byByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cxIC0gRmlyc3Qgcm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cyIC0gU2Vjb25kIHJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHN3YXBSb3dzKHJvdzEsIHJvdzIpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93MSk7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdzIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gdGhpcy5nZXQocm93MSwgaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm93MSwgaSwgdGhpcy5nZXQocm93MiwgaSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdzIsIGksIHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyBhcnJheSBmcm9tIHRoZSBnaXZlbiBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q29sdW1uKGluZGV4KSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSBuZXcgQXJyYXkodGhpcy5yb3dzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5baV0gPSB0aGlzLmdldChpLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgY29sdW1uIHZlY3RvciBmcm9tIHRoZSBnaXZlbiBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIGdldENvbHVtblZlY3RvcihpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY29sdW1uVmVjdG9yKHRoaXMuZ2V0Q29sdW1uKGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIGNvbHVtbiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSBhcnJheSAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNldENvbHVtbihpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgYXJyYXkgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCBhcnJheSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaW5kZXgsIGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIHR3byBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4xIC0gRmlyc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4yIC0gU2Vjb25kIGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHN3YXBDb2x1bW5zKGNvbHVtbjEsIGNvbHVtbjIpIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uMSk7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbjIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gdGhpcy5nZXQoaSwgY29sdW1uMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgY29sdW1uMSwgdGhpcy5nZXQoaSwgY29sdW1uMikpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGNvbHVtbjIsIHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIHRvIGVhY2ggcm93XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBhZGRSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKyB2ZWN0b3Jbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN1YnRyYWN0cyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIGZyb20gZWFjaCByb3dcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHN1YlJvd1ZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAtIHZlY3RvcltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlwbGllcyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIHdpdGggZWFjaCByb3dcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIG11bFJvd1ZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAqIHZlY3RvcltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGl2aWRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggcm93IGJ5IHRob3NlIG9mIGEgdmVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBkaXZSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLyB2ZWN0b3Jbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciB0byBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgYWRkQ29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICsgdmVjdG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJ0cmFjdHMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciBmcm9tIGVhY2ggY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzdWJDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLSB2ZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpcGxpZXMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciB3aXRoIGVhY2ggY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBtdWxDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKiB2ZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpdmlkZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNvbHVtbiBieSB0aG9zZSBvZiBhIHZlY3RvclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgZGl2Q29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC8gdmVjdG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXBsaWVzIHRoZSB2YWx1ZXMgb2YgYSByb3cgd2l0aCBhIHNjYWxhclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgbXVsUm93KGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaW5kZXgsIGksIHRoaXMuZ2V0KGluZGV4LCBpKSAqIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpcGxpZXMgdGhlIHZhbHVlcyBvZiBhIGNvbHVtbiB3aXRoIGEgc2NhbGFyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBtdWxDb2x1bW4oaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBpbmRleCwgdGhpcy5nZXQoaSwgaW5kZXgpICogdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1heCgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF4aW11bSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1heEluZGV4KCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbMCwgMF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4WzFdID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1pbigpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWluaW11bSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1pbkluZGV4KCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbMCwgMF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4WzFdID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBvZiBvbmUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Um93KHJvdykge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChyb3csIGkpID4gdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF4aW11bSB2YWx1ZSBvZiBvbmUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtYXhSb3dJbmRleChyb3cpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbcm93LCAwXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlkeFsxXSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIG9mIG9uZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5Sb3cocm93KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KHJvdywgMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXhpbXVtIHZhbHVlIG9mIG9uZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1pblJvd0luZGV4KHJvdykge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgICAgICAgICAgdmFyIGlkeCA9IFtyb3csIDBdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChyb3csIGkpIDwgdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgaWR4WzFdID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgb2Ygb25lIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uIC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1heENvbHVtbihjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1heGltdW0gdmFsdWUgb2Ygb25lIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uIC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Q29sdW1uSW5kZXgoY29sdW1uKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgaWR4ID0gWzAsIGNvbHVtbl07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGNvbHVtbikgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBvZiBvbmUgY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWluQ29sdW1uKGNvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pIDwgdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWluaW11bSB2YWx1ZSBvZiBvbmUgY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5Db2x1bW5JbmRleChjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbMCwgY29sdW1uXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA8IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIGlkeFswXSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGRpYWdvbmFsIHZhbHVlcyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZGlhZygpIHtcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICB2YXIgZGlhZyA9IG5ldyBBcnJheShtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgICAgICAgICAgIGRpYWdbaV0gPSB0aGlzLmdldChpLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaWFnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHN1bSBieSB0aGUgYXJndW1lbnQgZ2l2ZW4sIGlmIG5vIGFyZ3VtZW50IGdpdmVuLFxuICAgICAgICAgKiBpdCByZXR1cm5zIHRoZSBzdW0gb2YgYWxsIGVsZW1lbnRzIG9mIHRoZSBtYXRyaXguXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBieSAtIHN1bSBieSAncm93JyBvciAnY29sdW1uJy5cbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHN1bShieSkge1xuICAgICAgICAgICAgc3dpdGNoIChieSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Jvdyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW1CeVJvdyh0aGlzKTtcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtQnlDb2x1bW4odGhpcyk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bUFsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtZWFuIG9mIGFsbCBlbGVtZW50cyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1lYW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW0oKSAvIHRoaXMuc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIGFsbCBlbGVtZW50cyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHByb2QoKSB7XG4gICAgICAgICAgICB2YXIgcHJvZCA9IDE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwcm9kICo9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9kO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG5vcm0gb2YgYSBtYXRyaXguXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gXCJmcm9iZW5pdXNcIiAoZGVmYXVsdCkgb3IgXCJtYXhcIiByZXR1cm4gcmVzcC4gdGhlIEZyb2Jlbml1cyBub3JtIGFuZCB0aGUgbWF4IG5vcm0uXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG5vcm0odHlwZSA9ICdmcm9iZW5pdXMnKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbWF4Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1heCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnJvYmVuaXVzJykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgdGhpcy5nZXQoaSwgaikgKiB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGB1bmtub3duIG5vcm0gdHlwZTogJHt0eXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBjdW11bGF0aXZlIHN1bSBvZiB0aGUgbWF0cml4IGVsZW1lbnRzIChpbiBwbGFjZSwgcm93IGJ5IHJvdylcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBjdW11bGF0aXZlU3VtKCkge1xuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHN1bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcHV0ZXMgdGhlIGRvdCAoc2NhbGFyKSBwcm9kdWN0IGJldHdlZW4gdGhlIG1hdHJpeCBhbmQgYW5vdGhlclxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmVjdG9yMiB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgZG90KHZlY3RvcjIpIHtcbiAgICAgICAgICAgIGlmIChNYXRyaXguaXNNYXRyaXgodmVjdG9yMikpIHZlY3RvcjIgPSB2ZWN0b3IyLnRvMURBcnJheSgpO1xuICAgICAgICAgICAgdmFyIHZlY3RvcjEgPSB0aGlzLnRvMURBcnJheSgpO1xuICAgICAgICAgICAgaWYgKHZlY3RvcjEubGVuZ3RoICE9PSB2ZWN0b3IyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd2ZWN0b3JzIGRvIG5vdCBoYXZlIHRoZSBzYW1lIHNpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb3QgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZG90ICs9IHZlY3RvcjFbaV0gKiB2ZWN0b3IyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtYXRyaXggcHJvZHVjdCBiZXR3ZWVuIHRoaXMgYW5kIG90aGVyXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSBvdGhlclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBtbXVsKG90aGVyKSB7XG4gICAgICAgICAgICBvdGhlciA9IHRoaXMuY29uc3RydWN0b3IuY2hlY2tNYXRyaXgob3RoZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gb3RoZXIucm93cykge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOdW1iZXIgb2YgY29sdW1ucyBvZiBsZWZ0IG1hdHJpeCBhcmUgbm90IGVxdWFsIHRvIG51bWJlciBvZiByb3dzIG9mIHJpZ2h0IG1hdHJpeC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG0gPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIHZhciBwID0gb3RoZXIuY29sdW1ucztcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShtLCBwKTtcblxuICAgICAgICAgICAgdmFyIEJjb2xqID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBCY29saltrXSA9IG90aGVyLmdldChrLCBqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gdGhpcy5nZXQoaSwgaykgKiBCY29saltrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmFzc2VuMngyKG90aGVyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKDIsIDIpO1xuICAgICAgICAgICAgY29uc3QgYTExID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMTEgPSBvdGhlci5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMTIgPSB0aGlzLmdldCgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGIxMiA9IG90aGVyLmdldCgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGEyMSA9IHRoaXMuZ2V0KDEsIDApO1xuICAgICAgICAgICAgY29uc3QgYjIxID0gb3RoZXIuZ2V0KDEsIDApO1xuICAgICAgICAgICAgY29uc3QgYTIyID0gdGhpcy5nZXQoMSwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMjIgPSBvdGhlci5nZXQoMSwgMSk7XG5cbiAgICAgICAgICAgIC8vIENvbXB1dGUgaW50ZXJtZWRpYXRlIHZhbHVlcy5cbiAgICAgICAgICAgIGNvbnN0IG0xID0gKGExMSArIGEyMikgKiAoYjExICsgYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG0yID0gKGEyMSArIGEyMikgKiBiMTE7XG4gICAgICAgICAgICBjb25zdCBtMyA9IGExMSAqIChiMTIgLSBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTQgPSBhMjIgKiAoYjIxIC0gYjExKTtcbiAgICAgICAgICAgIGNvbnN0IG01ID0gKGExMSArIGExMikgKiBiMjI7XG4gICAgICAgICAgICBjb25zdCBtNiA9IChhMjEgLSBhMTEpICogKGIxMSArIGIxMik7XG4gICAgICAgICAgICBjb25zdCBtNyA9IChhMTIgLSBhMjIpICogKGIyMSArIGIyMik7XG5cbiAgICAgICAgICAgIC8vIENvbWJpbmUgaW50ZXJtZWRpYXRlIHZhbHVlcyBpbnRvIHRoZSBvdXRwdXQuXG4gICAgICAgICAgICBjb25zdCBjMDAgPSBtMSArIG00IC0gbTUgKyBtNztcbiAgICAgICAgICAgIGNvbnN0IGMwMSA9IG0zICsgbTU7XG4gICAgICAgICAgICBjb25zdCBjMTAgPSBtMiArIG00O1xuICAgICAgICAgICAgY29uc3QgYzExID0gbTEgLSBtMiArIG0zICsgbTY7XG5cbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMCwgMCwgYzAwKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMCwgMSwgYzAxKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMSwgMCwgYzEwKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMSwgMSwgYzExKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJhc3NlbjN4MyhvdGhlcikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSgzLCAzKTtcblxuICAgICAgICAgICAgY29uc3QgYTAwID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMDEgPSB0aGlzLmdldCgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGEwMiA9IHRoaXMuZ2V0KDAsIDIpO1xuICAgICAgICAgICAgY29uc3QgYTEwID0gdGhpcy5nZXQoMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMTEgPSB0aGlzLmdldCgxLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGExMiA9IHRoaXMuZ2V0KDEsIDIpO1xuICAgICAgICAgICAgY29uc3QgYTIwID0gdGhpcy5nZXQoMiwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMjEgPSB0aGlzLmdldCgyLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGEyMiA9IHRoaXMuZ2V0KDIsIDIpO1xuXG4gICAgICAgICAgICBjb25zdCBiMDAgPSBvdGhlci5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMDEgPSBvdGhlci5nZXQoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMDIgPSBvdGhlci5nZXQoMCwgMik7XG4gICAgICAgICAgICBjb25zdCBiMTAgPSBvdGhlci5nZXQoMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMTEgPSBvdGhlci5nZXQoMSwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMTIgPSBvdGhlci5nZXQoMSwgMik7XG4gICAgICAgICAgICBjb25zdCBiMjAgPSBvdGhlci5nZXQoMiwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMjEgPSBvdGhlci5nZXQoMiwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMjIgPSBvdGhlci5nZXQoMiwgMik7XG5cbiAgICAgICAgICAgIGNvbnN0IG0xID0gKGEwMCArIGEwMSArIGEwMiAtIGExMCAtIGExMSAtIGEyMSAtIGEyMikgKiBiMTE7XG4gICAgICAgICAgICBjb25zdCBtMiA9IChhMDAgLSBhMTApICogKC1iMDEgKyBiMTEpO1xuICAgICAgICAgICAgY29uc3QgbTMgPSBhMTEgKiAoLWIwMCArIGIwMSArIGIxMCAtIGIxMSAtIGIxMiAtIGIyMCArIGIyMik7XG4gICAgICAgICAgICBjb25zdCBtNCA9ICgtYTAwICsgYTEwICsgYTExKSAqIChiMDAgLSBiMDEgKyBiMTEpO1xuICAgICAgICAgICAgY29uc3QgbTUgPSAoYTEwICsgYTExKSAqICgtYjAwICsgYjAxKTtcbiAgICAgICAgICAgIGNvbnN0IG02ID0gYTAwICogYjAwO1xuICAgICAgICAgICAgY29uc3QgbTcgPSAoLWEwMCArIGEyMCArIGEyMSkgKiAoYjAwIC0gYjAyICsgYjEyKTtcbiAgICAgICAgICAgIGNvbnN0IG04ID0gKC1hMDAgKyBhMjApICogKGIwMiAtIGIxMik7XG4gICAgICAgICAgICBjb25zdCBtOSA9IChhMjAgKyBhMjEpICogKC1iMDAgKyBiMDIpO1xuICAgICAgICAgICAgY29uc3QgbTEwID0gKGEwMCArIGEwMSArIGEwMiAtIGExMSAtIGExMiAtIGEyMCAtIGEyMSkgKiBiMTI7XG4gICAgICAgICAgICBjb25zdCBtMTEgPSBhMjEgKiAoLWIwMCArIGIwMiArIGIxMCAtIGIxMSAtIGIxMiAtIGIyMCArIGIyMSk7XG4gICAgICAgICAgICBjb25zdCBtMTIgPSAoLWEwMiArIGEyMSArIGEyMikgKiAoYjExICsgYjIwIC0gYjIxKTtcbiAgICAgICAgICAgIGNvbnN0IG0xMyA9IChhMDIgLSBhMjIpICogKGIxMSAtIGIyMSk7XG4gICAgICAgICAgICBjb25zdCBtMTQgPSBhMDIgKiBiMjA7XG4gICAgICAgICAgICBjb25zdCBtMTUgPSAoYTIxICsgYTIyKSAqICgtYjIwICsgYjIxKTtcbiAgICAgICAgICAgIGNvbnN0IG0xNiA9ICgtYTAyICsgYTExICsgYTEyKSAqIChiMTIgKyBiMjAgLSBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTE3ID0gKGEwMiAtIGExMikgKiAoYjEyIC0gYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG0xOCA9IChhMTEgKyBhMTIpICogKC1iMjAgKyBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTE5ID0gYTAxICogYjEwO1xuICAgICAgICAgICAgY29uc3QgbTIwID0gYTEyICogYjIxO1xuICAgICAgICAgICAgY29uc3QgbTIxID0gYTEwICogYjAyO1xuICAgICAgICAgICAgY29uc3QgbTIyID0gYTIwICogYjAxO1xuICAgICAgICAgICAgY29uc3QgbTIzID0gYTIyICogYjIyO1xuXG4gICAgICAgICAgICBjb25zdCBjMDAgPSBtNiArIG0xNCArIG0xOTtcbiAgICAgICAgICAgIGNvbnN0IGMwMSA9IG0xICsgbTQgKyBtNSArIG02ICsgbTEyICsgbTE0ICsgbTE1O1xuICAgICAgICAgICAgY29uc3QgYzAyID0gbTYgKyBtNyArIG05ICsgbTEwICsgbTE0ICsgbTE2ICsgbTE4O1xuICAgICAgICAgICAgY29uc3QgYzEwID0gbTIgKyBtMyArIG00ICsgbTYgKyBtMTQgKyBtMTYgKyBtMTc7XG4gICAgICAgICAgICBjb25zdCBjMTEgPSBtMiArIG00ICsgbTUgKyBtNiArIG0yMDtcbiAgICAgICAgICAgIGNvbnN0IGMxMiA9IG0xNCArIG0xNiArIG0xNyArIG0xOCArIG0yMTtcbiAgICAgICAgICAgIGNvbnN0IGMyMCA9IG02ICsgbTcgKyBtOCArIG0xMSArIG0xMiArIG0xMyArIG0xNDtcbiAgICAgICAgICAgIGNvbnN0IGMyMSA9IG0xMiArIG0xMyArIG0xNCArIG0xNSArIG0yMjtcbiAgICAgICAgICAgIGNvbnN0IGMyMiA9IG02ICsgbTcgKyBtOCArIG05ICsgbTIzO1xuXG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDAsIGMwMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDEsIGMwMSk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDIsIGMwMik7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDAsIGMxMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDEsIGMxMSk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDIsIGMxMik7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDIsIDAsIGMyMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDIsIDEsIGMyMSk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDIsIDIsIGMyMik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1hdHJpeCBwcm9kdWN0IGJldHdlZW4geCBhbmQgeS4gTW9yZSBlZmZpY2llbnQgdGhhbiBtbXVsKG90aGVyKSBvbmx5IHdoZW4gd2UgbXVsdGlwbHkgc3F1YXJlZCBtYXRyaXggYW5kIHdoZW4gdGhlIHNpemUgb2YgdGhlIG1hdHJpeCBpcyA+IDEwMDAuXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSB5XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIG1tdWxTdHJhc3Nlbih5KSB7XG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciByMSA9IHgucm93cztcbiAgICAgICAgICAgIHZhciBjMSA9IHguY29sdW1ucztcbiAgICAgICAgICAgIHZhciByMiA9IHkucm93cztcbiAgICAgICAgICAgIHZhciBjMiA9IHkuY29sdW1ucztcbiAgICAgICAgICAgIGlmIChjMSAhPT0gcjIpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTXVsdGlwbHlpbmcgJHtyMX0geCAke2MxfSBhbmQgJHtyMn0geCAke2MyfSBtYXRyaXg6IGRpbWVuc2lvbnMgZG8gbm90IG1hdGNoLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQdXQgYSBtYXRyaXggaW50byB0aGUgdG9wIGxlZnQgb2YgYSBtYXRyaXggb2YgemVyb3MuXG4gICAgICAgICAgICAvLyBgcm93c2AgYW5kIGBjb2xzYCBhcmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIG91dHB1dCBtYXRyaXguXG4gICAgICAgICAgICBmdW5jdGlvbiBlbWJlZChtYXQsIHJvd3MsIGNvbHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG1hdC5yb3dzO1xuICAgICAgICAgICAgICAgIHZhciBjID0gbWF0LmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaWYgKChyID09PSByb3dzKSAmJiAoYyA9PT0gY29scykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0YXQgPSBNYXRyaXguemVyb3Mocm93cywgY29scyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KG1hdCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGJvdGggbWF0cmljZXMgYXJlIHRoZSBzYW1lIHNpemUuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4Y2x1c2l2ZWx5IGZvciBzaW1wbGljaXR5OlxuICAgICAgICAgICAgLy8gdGhpcyBhbGdvcml0aG0gY2FuIGJlIGltcGxlbWVudGVkIHdpdGggbWF0cmljZXMgb2YgZGlmZmVyZW50IHNpemVzLlxuXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgubWF4KHIxLCByMik7XG4gICAgICAgICAgICB2YXIgYyA9IE1hdGgubWF4KGMxLCBjMik7XG4gICAgICAgICAgICB4ID0gZW1iZWQoeCwgciwgYyk7XG4gICAgICAgICAgICB5ID0gZW1iZWQoeSwgciwgYyk7XG5cbiAgICAgICAgICAgIC8vIE91ciByZWN1cnNpdmUgbXVsdGlwbGljYXRpb24gZnVuY3Rpb24uXG4gICAgICAgICAgICBmdW5jdGlvbiBibG9ja011bHQoYSwgYiwgcm93cywgY29scykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBzbWFsbCBtYXRyaWNlcywgcmVzb3J0IHRvIG5haXZlIG11bHRpcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGlmIChyb3dzIDw9IDUxMiB8fCBjb2xzIDw9IDUxMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5tbXVsKGIpOyAvLyBhIGlzIGVxdWl2YWxlbnQgdG8gdGhpc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGR5bmFtaWMgcGFkZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoKHJvd3MgJSAyID09PSAxKSAmJiAoY29scyAlIDIgPT09IDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBlbWJlZChhLCByb3dzICsgMSwgY29scyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBiID0gZW1iZWQoYiwgcm93cyArIDEsIGNvbHMgKyAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd3MgJSAyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBlbWJlZChhLCByb3dzICsgMSwgY29scyk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBlbWJlZChiLCByb3dzICsgMSwgY29scyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xzICUgMiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gZW1iZWQoYSwgcm93cywgY29scyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBiID0gZW1iZWQoYiwgcm93cywgY29scyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBoYWxmUm93cyA9IHBhcnNlSW50KGEucm93cyAvIDIpO1xuICAgICAgICAgICAgICAgIHZhciBoYWxmQ29scyA9IHBhcnNlSW50KGEuY29sdW1ucyAvIDIpO1xuICAgICAgICAgICAgICAgIC8vIFN1YmRpdmlkZSBpbnB1dCBtYXRyaWNlcy5cbiAgICAgICAgICAgICAgICB2YXIgYTExID0gYS5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBiMTEgPSBiLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIDAsIGhhbGZDb2xzIC0gMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYTEyID0gYS5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCBoYWxmQ29scywgYS5jb2x1bW5zIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFyIGIxMiA9IGIuc3ViTWF0cml4KDAsIGhhbGZSb3dzIC0gMSwgaGFsZkNvbHMsIGIuY29sdW1ucyAtIDEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGEyMSA9IGEuc3ViTWF0cml4KGhhbGZSb3dzLCBhLnJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBiMjEgPSBiLnN1Yk1hdHJpeChoYWxmUm93cywgYi5yb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcblxuICAgICAgICAgICAgICAgIHZhciBhMjIgPSBhLnN1Yk1hdHJpeChoYWxmUm93cywgYS5yb3dzIC0gMSwgaGFsZkNvbHMsIGEuY29sdW1ucyAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBiMjIgPSBiLnN1Yk1hdHJpeChoYWxmUm93cywgYi5yb3dzIC0gMSwgaGFsZkNvbHMsIGIuY29sdW1ucyAtIDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnRlcm1lZGlhdGUgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHZhciBtMSA9IGJsb2NrTXVsdChNYXRyaXguYWRkKGExMSwgYTIyKSwgTWF0cml4LmFkZChiMTEsIGIyMiksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG0yID0gYmxvY2tNdWx0KE1hdHJpeC5hZGQoYTIxLCBhMjIpLCBiMTEsIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG0zID0gYmxvY2tNdWx0KGExMSwgTWF0cml4LnN1YihiMTIsIGIyMiksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG00ID0gYmxvY2tNdWx0KGEyMiwgTWF0cml4LnN1YihiMjEsIGIxMSksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG01ID0gYmxvY2tNdWx0KE1hdHJpeC5hZGQoYTExLCBhMTIpLCBiMjIsIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG02ID0gYmxvY2tNdWx0KE1hdHJpeC5zdWIoYTIxLCBhMTEpLCBNYXRyaXguYWRkKGIxMSwgYjEyKSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgICAgICAgICAgICB2YXIgbTcgPSBibG9ja011bHQoTWF0cml4LnN1YihhMTIsIGEyMiksIE1hdHJpeC5hZGQoYjIxLCBiMjIpLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29tYmluZSBpbnRlcm1lZGlhdGUgdmFsdWVzIGludG8gdGhlIG91dHB1dC5cbiAgICAgICAgICAgICAgICB2YXIgYzExID0gTWF0cml4LmFkZChtMSwgbTQpO1xuICAgICAgICAgICAgICAgIGMxMS5zdWIobTUpO1xuICAgICAgICAgICAgICAgIGMxMS5hZGQobTcpO1xuICAgICAgICAgICAgICAgIHZhciBjMTIgPSBNYXRyaXguYWRkKG0zLCBtNSk7XG4gICAgICAgICAgICAgICAgdmFyIGMyMSA9IE1hdHJpeC5hZGQobTIsIG00KTtcbiAgICAgICAgICAgICAgICB2YXIgYzIyID0gTWF0cml4LnN1YihtMSwgbTIpO1xuICAgICAgICAgICAgICAgIGMyMi5hZGQobTMpO1xuICAgICAgICAgICAgICAgIGMyMi5hZGQobTYpO1xuXG4gICAgICAgICAgICAgICAgLy9Dcm9wIG91dHB1dCB0byB0aGUgZGVzaXJlZCBzaXplICh1bmRvIGR5bmFtaWMgcGFkZGluZykuXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdGF0ID0gTWF0cml4Lnplcm9zKDIgKiBjMTEucm93cywgMiAqIGMxMS5jb2x1bW5zKTtcbiAgICAgICAgICAgICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMTEsIDAsIDApO1xuICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMxMiwgYzExLnJvd3MsIDApO1xuICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMyMSwgMCwgYzExLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMyMiwgYzExLnJvd3MsIGMxMS5jb2x1bW5zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuc3ViTWF0cml4KDAsIHJvd3MgLSAxLCAwLCBjb2xzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmxvY2tNdWx0KHgsIHksIHIsIGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSByb3ctYnktcm93IHNjYWxlZCBtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gLSBNaW5pbXVtIHNjYWxlZCB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIE1heGltdW0gc2NhbGVkIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgc2NhbGVkIG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc2NhbGVSb3dzKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICBtaW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBtaW47XG4gICAgICAgICAgICBtYXggPSBtYXggPT09IHVuZGVmaW5lZCA/IDEgOiBtYXg7XG4gICAgICAgICAgICBpZiAobWluID49IG1heCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW4gc2hvdWxkIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBtYXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmVtcHR5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGVkID0gcmVzY2FsZSh0aGlzLmdldFJvdyhpKSwge21pbiwgbWF4fSk7XG4gICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldFJvdyhpLCBzY2FsZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IGNvbHVtbi1ieS1jb2x1bW4gc2NhbGVkIG1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSAtIE1pbmltdW0gc2NhbGVkIHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIC0gTWF4aW11bSBzY2FsZWQgdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgc2NhbGVkIG1hdHJpeFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeChbWzEsMl0sWy0xLDBdXSk7XG4gICAgICAgICAqIHZhciBzY2FsZWRNYXRyaXggPSBtYXRyaXguc2NhbGVDb2x1bW5zKCk7IC8vIFtbMSwxXSxbMCwwXV1cbiAgICAgICAgICovXG4gICAgICAgIHNjYWxlQ29sdW1ucyhtaW4sIG1heCkge1xuICAgICAgICAgICAgbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogbWluO1xuICAgICAgICAgICAgbWF4ID0gbWF4ID09PSB1bmRlZmluZWQgPyAxIDogbWF4O1xuICAgICAgICAgICAgaWYgKG1pbiA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluIHNob3VsZCBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gbWF4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5lbXB0eSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZCA9IHJlc2NhbGUodGhpcy5nZXRDb2x1bW4oaSksIHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldENvbHVtbihpLCBzY2FsZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIEtyb25lY2tlciBwcm9kdWN0IChhbHNvIGtub3duIGFzIHRlbnNvciBwcm9kdWN0KSBiZXR3ZWVuIHRoaXMgYW5kIG90aGVyXG4gICAgICAgICAqIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Lcm9uZWNrZXJfcHJvZHVjdFxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gb3RoZXJcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAga3JvbmVja2VyUHJvZHVjdChvdGhlcikge1xuICAgICAgICAgICAgb3RoZXIgPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG90aGVyKTtcblxuICAgICAgICAgICAgdmFyIG0gPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIHZhciBwID0gb3RoZXIucm93cztcbiAgICAgICAgICAgIHZhciBxID0gb3RoZXIuY29sdW1ucztcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShtICogcCwgbiAqIHEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBxOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcCAqIGkgKyBrXVtxICogaiArIGxdID0gdGhpcy5nZXQoaSwgaikgKiBvdGhlci5nZXQoaywgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYW5zcG9zZXMgdGhlIG1hdHJpeCBhbmQgcmV0dXJucyBhIG5ldyBvbmUgY29udGFpbmluZyB0aGUgcmVzdWx0XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zcG9zZSgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10odGhpcy5jb2x1bW5zLCB0aGlzLnJvd3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldChqLCBpLCB0aGlzLmdldChpLCBqKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb3J0cyB0aGUgcm93cyAoaW4gcGxhY2UpXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVGdW5jdGlvbiAtIHVzdWFsIEFycmF5LnByb3RvdHlwZS5zb3J0IGNvbXBhcmlzb24gZnVuY3Rpb25cbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Um93cyhjb21wYXJlRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkgY29tcGFyZUZ1bmN0aW9uID0gY29tcGFyZU51bWJlcnM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSb3coaSwgdGhpcy5nZXRSb3coaSkuc29ydChjb21wYXJlRnVuY3Rpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvcnRzIHRoZSBjb2x1bW5zIChpbiBwbGFjZSlcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZUZ1bmN0aW9uIC0gdXN1YWwgQXJyYXkucHJvdG90eXBlLnNvcnQgY29tcGFyaXNvbiBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRDb2x1bW5zKGNvbXBhcmVGdW5jdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSBjb21wYXJlRnVuY3Rpb24gPSBjb21wYXJlTnVtYmVycztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbHVtbihpLCB0aGlzLmdldENvbHVtbihpKS5zb3J0KGNvbXBhcmVGdW5jdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN1YnNldCBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFJvdyAtIEZpcnN0IHJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kUm93IC0gTGFzdCByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Q29sdW1uIC0gRmlyc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmRDb2x1bW4gLSBMYXN0IGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdWJNYXRyaXgoc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tSYW5nZSh0aGlzLCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oZW5kUm93IC0gc3RhcnRSb3cgKyAxLCBlbmRDb2x1bW4gLSBzdGFydENvbHVtbiArIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHN0YXJ0Q29sdW1uOyBqIDw9IGVuZENvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeFtpIC0gc3RhcnRSb3ddW2ogLSBzdGFydENvbHVtbl0gPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBzdWJzZXQgb2YgdGhlIG1hdHJpeCBiYXNlZCBvbiBhbiBhcnJheSBvZiByb3cgaW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBpbmRpY2VzIC0gQXJyYXkgY29udGFpbmluZyB0aGUgcm93IGluZGljZXNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydENvbHVtbiA9IDBdIC0gRmlyc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kQ29sdW1uID0gdGhpcy5jb2x1bW5zLTFdIC0gTGFzdCBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3ViTWF0cml4Um93KGluZGljZXMsIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICAgICAgICAgIGlmIChzdGFydENvbHVtbiA9PT0gdW5kZWZpbmVkKSBzdGFydENvbHVtbiA9IDA7XG4gICAgICAgICAgICBpZiAoZW5kQ29sdW1uID09PSB1bmRlZmluZWQpIGVuZENvbHVtbiA9IHRoaXMuY29sdW1ucyAtIDE7XG4gICAgICAgICAgICBpZiAoKHN0YXJ0Q29sdW1uID4gZW5kQ29sdW1uKSB8fCAoc3RhcnRDb2x1bW4gPCAwKSB8fCAoc3RhcnRDb2x1bW4gPj0gdGhpcy5jb2x1bW5zKSB8fCAoZW5kQ29sdW1uIDwgMCkgfHwgKGVuZENvbHVtbiA+PSB0aGlzLmNvbHVtbnMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0FyZ3VtZW50IG91dCBvZiByYW5nZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKGluZGljZXMubGVuZ3RoLCBlbmRDb2x1bW4gLSBzdGFydENvbHVtbiArIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHN0YXJ0Q29sdW1uOyBqIDw9IGVuZENvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRpY2VzW2ldIDwgMCB8fCBpbmRpY2VzW2ldID49IHRoaXMucm93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1JvdyBpbmRleCBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRpY2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXguc2V0KGksIGogLSBzdGFydENvbHVtbiwgdGhpcy5nZXQoaW5kaWNlc1tpXSwgaikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN1YnNldCBvZiB0aGUgbWF0cml4IGJhc2VkIG9uIGFuIGFycmF5IG9mIGNvbHVtbiBpbmRpY2VzXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGluZGljZXMgLSBBcnJheSBjb250YWluaW5nIHRoZSBjb2x1bW4gaW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0Um93ID0gMF0gLSBGaXJzdCByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRSb3cgPSB0aGlzLnJvd3MtMV0gLSBMYXN0IHJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdWJNYXRyaXhDb2x1bW4oaW5kaWNlcywgc3RhcnRSb3csIGVuZFJvdykge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Um93ID09PSB1bmRlZmluZWQpIHN0YXJ0Um93ID0gMDtcbiAgICAgICAgICAgIGlmIChlbmRSb3cgPT09IHVuZGVmaW5lZCkgZW5kUm93ID0gdGhpcy5yb3dzIC0gMTtcbiAgICAgICAgICAgIGlmICgoc3RhcnRSb3cgPiBlbmRSb3cpIHx8IChzdGFydFJvdyA8IDApIHx8IChzdGFydFJvdyA+PSB0aGlzLnJvd3MpIHx8IChlbmRSb3cgPCAwKSB8fCAoZW5kUm93ID49IHRoaXMucm93cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXJndW1lbnQgb3V0IG9mIHJhbmdlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oZW5kUm93IC0gc3RhcnRSb3cgKyAxLCBpbmRpY2VzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gc3RhcnRSb3c7IGogPD0gZW5kUm93OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGljZXNbaV0gPCAwIHx8IGluZGljZXNbaV0gPj0gdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ29sdW1uIGluZGV4IG91dCBvZiByYW5nZTogJyArIGluZGljZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXQoaiAtIHN0YXJ0Um93LCBpLCB0aGlzLmdldChqLCBpbmRpY2VzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgYSBwYXJ0IG9mIHRoZSBtYXRyaXggdG8gdGhlIGdpdmVuIHN1Yi1tYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh8QXJyYXk8IEFycmF5ID59IG1hdHJpeCAtIFRoZSBzb3VyY2UgbWF0cml4IGZyb20gd2hpY2ggdG8gZXh0cmFjdCB2YWx1ZXMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFJvdyAtIFRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgcm93IHRvIHNldFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRDb2x1bW4gLSBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGNvbHVtbiB0byBzZXRcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0U3ViTWF0cml4KG1hdHJpeCwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSB7XG4gICAgICAgICAgICBtYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgICAgICAgICB2YXIgZW5kUm93ID0gc3RhcnRSb3cgKyBtYXRyaXgucm93cyAtIDE7XG4gICAgICAgICAgICB2YXIgZW5kQ29sdW1uID0gc3RhcnRDb2x1bW4gKyBtYXRyaXguY29sdW1ucyAtIDE7XG4gICAgICAgICAgICBjaGVja1JhbmdlKHRoaXMsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3RhcnRSb3cgKyBpXVtzdGFydENvbHVtbiArIGpdID0gbWF0cml4LmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gYSBuZXcgbWF0cml4IGJhc2VkIG9uIGEgc2VsZWN0aW9uIG9mIHJvd3MgYW5kIGNvbHVtbnNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSByb3dJbmRpY2VzIC0gVGhlIHJvdyBpbmRpY2VzIHRvIHNlbGVjdC4gT3JkZXIgbWF0dGVycyBhbmQgYW4gaW5kZXggY2FuIGJlIG1vcmUgdGhhbiBvbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbHVtbkluZGljZXMgLSBUaGUgY29sdW1uIGluZGljZXMgdG8gc2VsZWN0LiBPcmRlciBtYXR0ZXJzIGFuZCBhbiBpbmRleCBjYW4gYmUgdXNlIG1vcmUgdGhhbiBvbmNlLlxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb24ocm93SW5kaWNlcywgY29sdW1uSW5kaWNlcykge1xuICAgICAgICAgICAgdmFyIGluZGljZXMgPSBjaGVja0luZGljZXModGhpcywgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKHJvd0luZGljZXMubGVuZ3RoLCBjb2x1bW5JbmRpY2VzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGljZXMucm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvd0luZGV4ID0gaW5kaWNlcy5yb3dbaV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbmRpY2VzLmNvbHVtbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uSW5kZXggPSBpbmRpY2VzLmNvbHVtbltqXTtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4W2ldW2pdID0gdGhpcy5nZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHRyYWNlIG9mIHRoZSBtYXRyaXggKHN1bSBvZiB0aGUgZGlhZ29uYWwgZWxlbWVudHMpXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRyYWNlKCkge1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIHZhciB0cmFjZSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdHJhY2UgKz0gdGhpcy5nZXQoaSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgTWF0cml4IHZpZXdzXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgdHJhbnNwb3NpdGlvbiBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFRyYW5zcG9zZVZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc3Bvc2VWaWV3KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhUcmFuc3Bvc2VWaWV3KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSByb3cgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSByb3cgaW5kZXggb2YgdGhlIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhSb3dWaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgcm93Vmlldyhyb3cpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4Um93Vmlldyh0aGlzLCByb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBjb2x1bW4gdmVjdG9yIHdpdGggdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBjb2x1bW4gaW5kZXggb2YgdGhlIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhDb2x1bW5WaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uVmlldyhjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4Q29sdW1uVmlldyh0aGlzLCBjb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBtYXRyaXggZmxpcHBlZCBpbiB0aGUgcm93IGF4aXNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4RmxpcFJvd1ZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBmbGlwUm93VmlldygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4RmxpcFJvd1ZpZXcodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIG1hdHJpeCBmbGlwcGVkIGluIHRoZSBjb2x1bW4gYXhpc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhGbGlwQ29sdW1uVmlld31cbiAgICAgICAgICovXG4gICAgICAgIGZsaXBDb2x1bW5WaWV3KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhGbGlwQ29sdW1uVmlldyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiBhIHN1Ym1hdHJpeCBnaXZpbmcgdGhlIGluZGV4IGJvdW5kYXJpZXNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Um93IC0gZmlyc3Qgcm93IGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFJvdyAtIGxhc3Qgcm93IGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Q29sdW1uIC0gZmlyc3QgY29sdW1uIGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZENvbHVtbiAtIGxhc3QgY29sdW1uIGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4U3ViVmlld31cbiAgICAgICAgICovXG4gICAgICAgIHN1Yk1hdHJpeFZpZXcoc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhTdWJWaWV3KHRoaXMsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBjcm9zcyBvZiB0aGUgcm93IGluZGljZXMgYW5kIHRoZSBjb2x1bW4gaW5kaWNlc1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAvLyByZXN1bHRpbmcgdmVjdG9yIGlzIFtbMl0sIFsyXV1cbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDIsM10sIFs0LDUsNl1dKS5zZWxlY3Rpb25WaWV3KFswLCAwXSwgWzFdKVxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHJvd0luZGljZXNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb2x1bW5JbmRpY2VzXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFNlbGVjdGlvblZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb25WaWV3KHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4U2VsZWN0aW9uVmlldyh0aGlzLCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgcm93IGluZGljZXNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogLy8gcmVzdWx0aW5nIHZlY3RvciBpcyBbWzEsMiwzXSwgWzEsMiwzXV1cbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDIsM10sIFs0LDUsNl1dKS5yb3dTZWxlY3Rpb25WaWV3KFswLCAwXSlcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSByb3dJbmRpY2VzXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFJvd1NlbGVjdGlvblZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICByb3dTZWxlY3Rpb25WaWV3KHJvd0luZGljZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4Um93U2VsZWN0aW9uVmlldyh0aGlzLCByb3dJbmRpY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgY29sdW1uIGluZGljZXNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogLy8gcmVzdWx0aW5nIHZlY3RvciBpcyBbWzIsIDJdLCBbNSwgNV1dXG4gICAgICAgICAqIHZhciBtYXRyaXggPSBuZXcgTWF0cml4KFtbMSwyLDNdLCBbNCw1LDZdXSkuY29sdW1uU2VsZWN0aW9uVmlldyhbMSwgMV0pXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29sdW1uSW5kaWNlc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhDb2x1bW5TZWxlY3Rpb25WaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uU2VsZWN0aW9uVmlldyhjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcodGhpcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIENhbGN1bGF0ZXMgYW5kIHJldHVybnMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4IGFzIGEgTnVtYmVyXG4gICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgKiAgIG5ldyBNYXRyaXgoW1sxLDIsM10sIFs0LDUsNl1dKS5kZXQoKVxuICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgKi9cbiAgICAgICAgZGV0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgICAgIHZhciBhLCBiLCBjLCBkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMiB4IDIgbWF0cml4XG4gICAgICAgICAgICAgICAgICAgIGEgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHRoaXMuZ2V0KDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjID0gdGhpcy5nZXQoMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGQgPSB0aGlzLmdldCgxLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAqIGQgLSAoYiAqIGMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5zID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDMgeCAzIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ViTWF0cml4MCwgc3ViTWF0cml4MSwgc3ViTWF0cml4MjtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWF0cml4MCA9IHRoaXMuc2VsZWN0aW9uVmlldyhbMSwgMl0sIFsxLCAyXSk7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1hdHJpeDEgPSB0aGlzLnNlbGVjdGlvblZpZXcoWzEsIDJdLCBbMCwgMl0pO1xuICAgICAgICAgICAgICAgICAgICBzdWJNYXRyaXgyID0gdGhpcy5zZWxlY3Rpb25WaWV3KFsxLCAyXSwgWzAsIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBiID0gdGhpcy5nZXQoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGMgPSB0aGlzLmdldCgwLCAyKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAqIHN1Yk1hdHJpeDAuZGV0KCkgLSBiICogc3ViTWF0cml4MS5kZXQoKSArIGMgKiBzdWJNYXRyaXgyLmRldCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdlbmVyYWwgcHVycG9zZSBkZXRlcm1pbmFudCB1c2luZyB0aGUgTFUgZGVjb21wb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEx1RGVjb21wb3NpdGlvbih0aGlzKS5kZXRlcm1pbmFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0RldGVybWluYW50IGNhbiBvbmx5IGJlIGNhbGN1bGF0ZWQgZm9yIGEgc3F1YXJlIG1hdHJpeC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGludmVyc2Ugb2YgYSBtYXRyaXggaWYgaXQgZXhpc3RzIG9yIHRoZSBwc2V1ZG9pbnZlcnNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aHJlc2hvbGQgLSB0aHJlc2hvbGQgZm9yIHRha2luZyBpbnZlcnNlIG9mIHNpbmd1bGFyIHZhbHVlcyAoZGVmYXVsdCA9IDFlLTE1KVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoZSAocHNldWRvKWludmVydGVkIG1hdHJpeC5cbiAgICAgICAgICovXG4gICAgICAgIHBzZXVkb0ludmVyc2UodGhyZXNob2xkKSB7XG4gICAgICAgICAgICBpZiAodGhyZXNob2xkID09PSB1bmRlZmluZWQpIHRocmVzaG9sZCA9IE51bWJlci5FUFNJTE9OO1xuICAgICAgICAgICAgdmFyIHN2ZFNvbHV0aW9uID0gbmV3IFN2RGVjb21wb3NpdGlvbih0aGlzLCB7YXV0b1RyYW5zcG9zZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICB2YXIgVSA9IHN2ZFNvbHV0aW9uLmxlZnRTaW5ndWxhclZlY3RvcnM7XG4gICAgICAgICAgICB2YXIgViA9IHN2ZFNvbHV0aW9uLnJpZ2h0U2luZ3VsYXJWZWN0b3JzO1xuICAgICAgICAgICAgdmFyIHMgPSBzdmRTb2x1dGlvbi5kaWFnb25hbDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNbaV0pID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNbaV0gPSAxLjAgLyBzW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNbaV0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb252ZXJ0IGxpc3QgdG8gZGlhZ29uYWxcbiAgICAgICAgICAgIHMgPSB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXS5kaWFnKHMpO1xuICAgICAgICAgICAgcmV0dXJuIFYubW11bChzLm1tdWwoVS50cmFuc3Bvc2VWaWV3KCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIGV4YWN0IGFuZCBpbmRlcGVuZGVudCBjb3B5IG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgY2xvbmUoKSB7XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRoaXMucm93czsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXQocm93LCBjb2x1bW4sIHRoaXMuZ2V0KHJvdywgY29sdW1uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE1hdHJpeC5wcm90b3R5cGUua2xhc3MgPSAnTWF0cml4JztcblxuICAgIGZ1bmN0aW9uIGNvbXBhcmVOdW1iZXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH1cblxuICAgIC8qXG4gICAgIFN5bm9ueW1zXG4gICAgICovXG5cbiAgICBNYXRyaXgucmFuZG9tID0gTWF0cml4LnJhbmQ7XG4gICAgTWF0cml4LmRpYWdvbmFsID0gTWF0cml4LmRpYWc7XG4gICAgTWF0cml4LnByb3RvdHlwZS5kaWFnb25hbCA9IE1hdHJpeC5wcm90b3R5cGUuZGlhZztcbiAgICBNYXRyaXguaWRlbnRpdHkgPSBNYXRyaXguZXllO1xuICAgIE1hdHJpeC5wcm90b3R5cGUubmVnYXRlID0gTWF0cml4LnByb3RvdHlwZS5uZWc7XG4gICAgTWF0cml4LnByb3RvdHlwZS50ZW5zb3JQcm9kdWN0ID0gTWF0cml4LnByb3RvdHlwZS5rcm9uZWNrZXJQcm9kdWN0O1xuICAgIE1hdHJpeC5wcm90b3R5cGUuZGV0ZXJtaW5hbnQgPSBNYXRyaXgucHJvdG90eXBlLmRldDtcblxuICAgIC8qXG4gICAgIEFkZCBkeW5hbWljYWxseSBpbnN0YW5jZSBhbmQgc3RhdGljIG1ldGhvZHMgZm9yIG1hdGhlbWF0aWNhbCBvcGVyYXRpb25zXG4gICAgICovXG5cbiAgICB2YXIgaW5wbGFjZU9wZXJhdG9yID0gYFxuKGZ1bmN0aW9uICVuYW1lJSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy4lbmFtZSVTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy4lbmFtZSVNKHZhbHVlKTtcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VPcGVyYXRvclNjYWxhciA9IGBcbihmdW5jdGlvbiAlbmFtZSVTKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAlb3AlIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VPcGVyYXRvck1hdHJpeCA9IGBcbihmdW5jdGlvbiAlbmFtZSVNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAlb3AlIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG5cbiAgICB2YXIgc3RhdGljT3BlcmF0b3IgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKG1hdHJpeCwgdmFsdWUpIHtcbiAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXNbU3ltYm9sLnNwZWNpZXNdKG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC4lbmFtZSUodmFsdWUpO1xufSlcbmA7XG5cbiAgICB2YXIgaW5wbGFjZU1ldGhvZCA9IGBcbihmdW5jdGlvbiAlbmFtZSUoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCAlbWV0aG9kJSh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG5cbiAgICB2YXIgc3RhdGljTWV0aG9kID0gYFxuKGZ1bmN0aW9uICVuYW1lJShtYXRyaXgpIHtcbiAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXNbU3ltYm9sLnNwZWNpZXNdKG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC4lbmFtZSUoKTtcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VNZXRob2RXaXRoQXJncyA9IGBcbihmdW5jdGlvbiAlbmFtZSUoJWFyZ3MlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCAlbWV0aG9kJSh0aGlzLmdldChpLCBqKSwgJWFyZ3MlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcblxuICAgIHZhciBzdGF0aWNNZXRob2RXaXRoQXJncyA9IGBcbihmdW5jdGlvbiAlbmFtZSUobWF0cml4LCAlYXJncyUpIHtcbiAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXNbU3ltYm9sLnNwZWNpZXNdKG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC4lbmFtZSUoJWFyZ3MlKTtcbn0pXG5gO1xuXG5cbiAgICB2YXIgaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmdTY2FsYXIgPSBgXG4oZnVuY3Rpb24gJW5hbWUlUyh2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgJW1ldGhvZCUodGhpcy5nZXQoaSwgaiksIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcbiAgICB2YXIgaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmdNYXRyaXggPSBgXG4oZnVuY3Rpb24gJW5hbWUlTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgJW1ldGhvZCUodGhpcy5nZXQoaSwgaiksIG1hdHJpeC5nZXQoaSwgaikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VNZXRob2RXaXRoT25lQXJnID0gYFxuKGZ1bmN0aW9uICVuYW1lJSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy4lbmFtZSVTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy4lbmFtZSVNKHZhbHVlKTtcbn0pXG5gO1xuXG4gICAgdmFyIHN0YXRpY01ldGhvZFdpdGhPbmVBcmcgPSBzdGF0aWNNZXRob2RXaXRoQXJncztcblxuICAgIHZhciBvcGVyYXRvcnMgPSBbXG4gICAgICAgIC8vIEFyaXRobWV0aWMgb3BlcmF0b3JzXG4gICAgICAgIFsnKycsICdhZGQnXSxcbiAgICAgICAgWyctJywgJ3N1YicsICdzdWJ0cmFjdCddLFxuICAgICAgICBbJyonLCAnbXVsJywgJ211bHRpcGx5J10sXG4gICAgICAgIFsnLycsICdkaXYnLCAnZGl2aWRlJ10sXG4gICAgICAgIFsnJScsICdtb2QnLCAnbW9kdWx1cyddLFxuICAgICAgICAvLyBCaXR3aXNlIG9wZXJhdG9yc1xuICAgICAgICBbJyYnLCAnYW5kJ10sXG4gICAgICAgIFsnfCcsICdvciddLFxuICAgICAgICBbJ14nLCAneG9yJ10sXG4gICAgICAgIFsnPDwnLCAnbGVmdFNoaWZ0J10sXG4gICAgICAgIFsnPj4nLCAnc2lnblByb3BhZ2F0aW5nUmlnaHRTaGlmdCddLFxuICAgICAgICBbJz4+PicsICdyaWdodFNoaWZ0JywgJ3plcm9GaWxsUmlnaHRTaGlmdCddXG4gICAgXTtcblxuICAgIHZhciBpO1xuICAgIHZhciBldmFsMiA9IGV2YWw7XG4gICAgZm9yICh2YXIgb3BlcmF0b3Igb2Ygb3BlcmF0b3JzKSB7XG4gICAgICAgIHZhciBpbnBsYWNlT3AgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlT3BlcmF0b3IsIHtuYW1lOiBvcGVyYXRvclsxXSwgb3A6IG9wZXJhdG9yWzBdfSkpO1xuICAgICAgICB2YXIgaW5wbGFjZU9wUyA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VPcGVyYXRvclNjYWxhciwge25hbWU6IG9wZXJhdG9yWzFdICsgJ1MnLCBvcDogb3BlcmF0b3JbMF19KSk7XG4gICAgICAgIHZhciBpbnBsYWNlT3BNID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU9wZXJhdG9yTWF0cml4LCB7bmFtZTogb3BlcmF0b3JbMV0gKyAnTScsIG9wOiBvcGVyYXRvclswXX0pKTtcbiAgICAgICAgdmFyIHN0YXRpY09wID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oc3RhdGljT3BlcmF0b3IsIHtuYW1lOiBvcGVyYXRvclsxXX0pKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG9wZXJhdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW29wZXJhdG9yW2ldXSA9IGlucGxhY2VPcDtcbiAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbb3BlcmF0b3JbaV0gKyAnUyddID0gaW5wbGFjZU9wUztcbiAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbb3BlcmF0b3JbaV0gKyAnTSddID0gaW5wbGFjZU9wTTtcbiAgICAgICAgICAgIE1hdHJpeFtvcGVyYXRvcltpXV0gPSBzdGF0aWNPcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgICBbJ34nLCAnbm90J11cbiAgICBdO1xuXG4gICAgW1xuICAgICAgICAnYWJzJywgJ2Fjb3MnLCAnYWNvc2gnLCAnYXNpbicsICdhc2luaCcsICdhdGFuJywgJ2F0YW5oJywgJ2NicnQnLCAnY2VpbCcsXG4gICAgICAgICdjbHozMicsICdjb3MnLCAnY29zaCcsICdleHAnLCAnZXhwbTEnLCAnZmxvb3InLCAnZnJvdW5kJywgJ2xvZycsICdsb2cxcCcsXG4gICAgICAgICdsb2cxMCcsICdsb2cyJywgJ3JvdW5kJywgJ3NpZ24nLCAnc2luJywgJ3NpbmgnLCAnc3FydCcsICd0YW4nLCAndGFuaCcsICd0cnVuYydcbiAgICBdLmZvckVhY2goZnVuY3Rpb24gKG1hdGhNZXRob2QpIHtcbiAgICAgICAgbWV0aG9kcy5wdXNoKFsnTWF0aC4nICsgbWF0aE1ldGhvZCwgbWF0aE1ldGhvZF0pO1xuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgbWV0aG9kIG9mIG1ldGhvZHMpIHtcbiAgICAgICAgdmFyIGlucGxhY2VNZXRoID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZCwge25hbWU6IG1ldGhvZFsxXSwgbWV0aG9kOiBtZXRob2RbMF19KSk7XG4gICAgICAgIHZhciBzdGF0aWNNZXRoID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oc3RhdGljTWV0aG9kLCB7bmFtZTogbWV0aG9kWzFdfSkpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbWV0aG9kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW21ldGhvZFtpXV0gPSBpbnBsYWNlTWV0aDtcbiAgICAgICAgICAgIE1hdHJpeFttZXRob2RbaV1dID0gc3RhdGljTWV0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtZXRob2RzV2l0aEFyZ3MgPSBbXG4gICAgICAgIFsnTWF0aC5wb3cnLCAxLCAncG93J11cbiAgICBdO1xuXG4gICAgZm9yICh2YXIgbWV0aG9kV2l0aEFyZyBvZiBtZXRob2RzV2l0aEFyZ3MpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSAnYXJnMCc7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBtZXRob2RXaXRoQXJnWzFdOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3MgKz0gYCwgYXJnJHtpfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZFdpdGhBcmdbMV0gIT09IDEpIHtcbiAgICAgICAgICAgIHZhciBpbnBsYWNlTWV0aFdpdGhBcmdzID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZFdpdGhBcmdzLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogbWV0aG9kV2l0aEFyZ1syXSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZFdpdGhBcmdbMF0sXG4gICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIHN0YXRpY01ldGhXaXRoQXJncyA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKHN0YXRpY01ldGhvZFdpdGhBcmdzLCB7bmFtZTogbWV0aG9kV2l0aEFyZ1syXSwgYXJnczogYXJnc30pKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDI7IGkgPCBtZXRob2RXaXRoQXJnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVttZXRob2RXaXRoQXJnW2ldXSA9IGlucGxhY2VNZXRoV2l0aEFyZ3M7XG4gICAgICAgICAgICAgICAgTWF0cml4W21ldGhvZFdpdGhBcmdbaV1dID0gc3RhdGljTWV0aFdpdGhBcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRtcGxWYXIgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbWV0aG9kV2l0aEFyZ1syXSxcbiAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kV2l0aEFyZ1swXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBpbnBsYWNlTWV0aG9kMiA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VNZXRob2RXaXRoT25lQXJnLCB0bXBsVmFyKSk7XG4gICAgICAgICAgICB2YXIgaW5wbGFjZU1ldGhvZFMgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlTWV0aG9kV2l0aE9uZUFyZ1NjYWxhciwgdG1wbFZhcikpO1xuICAgICAgICAgICAgdmFyIGlucGxhY2VNZXRob2RNID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmdNYXRyaXgsIHRtcGxWYXIpKTtcbiAgICAgICAgICAgIHZhciBzdGF0aWNNZXRob2QyID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oc3RhdGljTWV0aG9kV2l0aE9uZUFyZywgdG1wbFZhcikpO1xuICAgICAgICAgICAgZm9yIChpID0gMjsgaSA8IG1ldGhvZFdpdGhBcmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW21ldGhvZFdpdGhBcmdbaV1dID0gaW5wbGFjZU1ldGhvZDI7XG4gICAgICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVttZXRob2RXaXRoQXJnW2ldICsgJ00nXSA9IGlucGxhY2VNZXRob2RNO1xuICAgICAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbbWV0aG9kV2l0aEFyZ1tpXSArICdTJ10gPSBpbnBsYWNlTWV0aG9kUztcbiAgICAgICAgICAgICAgICBNYXRyaXhbbWV0aG9kV2l0aEFyZ1tpXV0gPSBzdGF0aWNNZXRob2QyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsbFRlbXBsYXRlRnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcykge1xuICAgICAgICBmb3IgKHZhciB2YWx1ZSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKCclJyArIHZhbHVlICsgJyUnLCAnZycpLCB2YWx1ZXNbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdHJpeDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvYWJzdHJhY3RNYXRyaXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBlbnVtIENvbG9yU3BhY2VUeXBlIHtcclxuICBZQ2JDcixcclxuICBIU1YsXHJcbiAgTGFiXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0NvbG9yU3BhY2VUeXBlLnRzIiwiLy8gaHlwZXJIVE1MLkNvbXBvbmVudCBpcyBhIHZlcnkgYmFzaWMgY2xhc3Ncbi8vIGFibGUgdG8gY3JlYXRlIEN1c3RvbSBFbGVtZW50cyBsaWtlIGNvbXBvbmVudHNcbi8vIGluY2x1ZGluZyB0aGUgYWJpbGl0eSB0byBsaXN0ZW4gdG8gY29ubmVjdC9kaXNjb25uZWN0XG4vLyBldmVudHMgdmlhIG9uY29ubmVjdC9vbmRpc2Nvbm5lY3QgYXR0cmlidXRlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KCkge31cblxuLy8gY29tcG9uZW50cyB3aWxsIGxhemlseSBkZWZpbmUgaHRtbCBvciBzdmcgcHJvcGVydGllc1xuLy8gYXMgc29vbiBhcyB0aGVzZSBhcmUgaW52b2tlZCB3aXRoaW4gdGhlIC5yZW5kZXIoKSBtZXRob2Rcbi8vIFN1Y2ggcmVuZGVyKCkgbWV0aG9kIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgYmFzZSBjbGFzc1xuLy8gYnV0IGl0IG11c3QgYmUgYXZhaWxhYmxlIHRocm91Z2ggdGhlIENvbXBvbmVudCBleHRlbmQuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoY29udGVudCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBDb21wb25lbnQucHJvdG90eXBlLFxuICAgIHtcbiAgICAgIGhhbmRsZUV2ZW50OiB7dmFsdWUoZSkge1xuICAgICAgICBjb25zdCBjdCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgdGhpc1tcbiAgICAgICAgICAoJ2dldEF0dHJpYnV0ZScgaW4gY3QgJiYgY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGwnKSkgfHxcbiAgICAgICAgICAoJ29uJyArIGUudHlwZSlcbiAgICAgICAgXShlKTtcbiAgICAgIH19LFxuICAgICAgaHRtbDogbGF6eUdldHRlcignaHRtbCcsIGNvbnRlbnQpLFxuICAgICAgc3ZnOiBsYXp5R2V0dGVyKCdzdmcnLCBjb250ZW50KSxcbiAgICAgIHN0YXRlOiBsYXp5R2V0dGVyKCdzdGF0ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGVmYXVsdFN0YXRlOyB9KSxcbiAgICAgIGRlZmF1bHRTdGF0ZToge2dldCgpIHsgcmV0dXJuIHt9OyB9fSxcbiAgICAgIHNldFN0YXRlOiB7dmFsdWUoc3RhdGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qgc291cmNlID0gdHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nID8gc3RhdGUuY2FsbCh0aGlzLCB0YXJnZXQpIDogc3RhdGU7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH19XG4gICAgfVxuICApO1xufVxuXG4vLyBpbnN0ZWFkIG9mIGEgc2VjcmV0IGtleSBJIGNvdWxkJ3ZlIHVzZWQgYSBXZWFrTWFwXG4vLyBIb3dldmVyLCBhdHRhY2hpbmcgYSBwcm9wZXJ0eSBkaXJlY3RseSB3aWxsIHJlc3VsdFxuLy8gaW50byBiZXR0ZXIgcGVyZm9ybWFuY2Ugd2l0aCB0aG91c2FuZHMgb2YgY29tcG9uZW50c1xuLy8gaGFuZ2luZyBhcm91bmQsIGFuZCBsZXNzIG1lbW9yeSBwcmVzc3VyZSBjYXVzZWQgYnkgdGhlIFdlYWtNYXBcbmNvbnN0IGxhenlHZXR0ZXIgPSAodHlwZSwgZm4pID0+IHtcbiAgY29uc3Qgc2VjcmV0ID0gJ18nICsgdHlwZSArICckJztcbiAgcmV0dXJuIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWNyZXRdIHx8ICh0aGlzW3R5cGVdID0gZm4uY2FsbCh0aGlzLCB0eXBlKSk7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBzZWNyZXQsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlfSk7XG4gICAgfVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9Db21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2xvYmFsLCBVSUR9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuLy8geW91IGtub3cgdGhhdCBraW5kIG9mIGJhc2ljcyB5b3UgbmVlZCB0byBjb3ZlclxuLy8geW91ciB1c2UgY2FzZSBvbmx5IGJ1dCB5b3UgZG9uJ3Qgd2FudCB0byBibG9hdCB0aGUgbGlicmFyeT9cbi8vIFRoZXJlJ3MgZXZlbiBhIHBhY2thZ2UgaW4gaGVyZTpcbi8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3Bvb3JseWZpbGxzXG5cbi8vIHVzZWQgdG8gZGlzcGF0Y2ggc2ltcGxlIGV2ZW50c1xubGV0IEV2ZW50ID0gZ2xvYmFsLkV2ZW50O1xudHJ5IHtcbiAgbmV3IEV2ZW50KCdFdmVudCcpO1xufSBjYXRjaChvX08pIHtcbiAgRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBlLmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICAgIHJldHVybiBlO1xuICB9O1xufVxuZXhwb3J0IHtFdmVudH07XG5cbi8vIHVzZWQgdG8gc3RvcmUgdGVtcGxhdGUgbGl0ZXJhbHNcbmV4cG9ydCBjb25zdCBNYXAgPSBnbG9iYWwuTWFwIHx8IGZ1bmN0aW9uIE1hcCgpIHtcbiAgY29uc3Qga2V5cyA9IFtdLCB2YWx1ZXMgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBnZXQob2JqKSB7XG4gICAgICByZXR1cm4gdmFsdWVzW2tleXMuaW5kZXhPZihvYmopXTtcbiAgICB9LFxuICAgIHNldChvYmosIHZhbHVlKSB7XG4gICAgICB2YWx1ZXNba2V5cy5wdXNoKG9iaikgLSAxXSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcbn07XG5cbi8vIHVzZWQgdG8gc3RvcmUgd2lyZWQgY29udGVudFxuZXhwb3J0IGNvbnN0IFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcCB8fCBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICByZXR1cm4ge1xuICAgIGdldChvYmopIHsgcmV0dXJuIG9ialtVSURdOyB9LFxuICAgIHNldChvYmosIHZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBVSUQsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxuLy8gdXNlZCB0byBzdG9yZSBoeXBlci5Db21wb25lbnRzXG5leHBvcnQgY29uc3QgV2Vha1NldCA9IGdsb2JhbC5XZWFrU2V0IHx8IGZ1bmN0aW9uIFdlYWtTZXQoKSB7XG4gIGNvbnN0IHdtID0gbmV3IFdlYWtNYXA7XG4gIHJldHVybiB7XG4gICAgYWRkKG9iaikgeyB3bS5zZXQob2JqLCB0cnVlKTsgfSxcbiAgICBoYXMob2JqKSB7IHJldHVybiB3bS5nZXQob2JqKSA9PT0gdHJ1ZTsgfVxuICB9O1xufTtcblxuLy8gdXNlZCB0byBiZSBzdXJlIElFOSBvciBvbGRlciBBbmRyb2lkcyB3b3JrIGFzIGV4cGVjdGVkXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgKHRvU3RyaW5nID0+XG4gIGFyciA9PiB0b1N0cmluZy5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSdcbikoe30udG9TdHJpbmcpO1xuXG5leHBvcnQgY29uc3QgdHJpbSA9IFVJRC50cmltIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL3Bvb3JseWZpbGxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgYXMgSHlwZXJDb21wb25lbnQgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmV4cG9ydCB7IEh5cGVyQ29tcG9uZW50IH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3V0aWxzL0h5cGVyQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29sb3JQb2ludCB9IGZyb20gJ21vZGVscy9Db2xvclBvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHJlZFBvaW50OiBDb2xvclBvaW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBncmVlblBvaW50OiBDb2xvclBvaW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBibHVlUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IHdoaXRlUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGdhbW1hOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVkUG9pbnQ6IENvbG9yUG9pbnQsXHJcbiAgICBncmVlblBvaW50OiBDb2xvclBvaW50LFxyXG4gICAgYmx1ZVBvaW50OiBDb2xvclBvaW50LFxyXG4gICAgd2hpdGVQb2ludDogQ29sb3JQb2ludCxcclxuICAgIGdhbW1hOiBudW1iZXJcclxuICApIHtcclxuICAgIHRoaXMucmVkUG9pbnQgPSByZWRQb2ludDtcclxuICAgIHRoaXMuZ3JlZW5Qb2ludCA9IGdyZWVuUG9pbnQ7XHJcbiAgICB0aGlzLmJsdWVQb2ludCA9IGJsdWVQb2ludDtcclxuICAgIHRoaXMud2hpdGVQb2ludCA9IHdoaXRlUG9pbnQ7XHJcbiAgICB0aGlzLmdhbW1hID0gZ2FtbWE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNSR0IoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjY0LCB5OiAwLjMzIH0sXHJcbiAgICAgIHsgeDogMC4zLCB5OiAwLjYgfSxcclxuICAgICAgeyB4OiAwLjE1LCB5OiAwLjA2IH0sXHJcbiAgICAgIHsgeDogMC4zMTI3LCB5OiAwLjMyOSB9LFxyXG4gICAgICAyLjJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkb2JlUkdCKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC42NCwgeTogMC4zMyB9LFxyXG4gICAgICB7IHg6IDAuMjEsIHk6IDAuNzEgfSxcclxuICAgICAgeyB4OiAwLjE1LCB5OiAwLjA2IH0sXHJcbiAgICAgIHsgeDogMC4zMTI3LCB5OiAwLjMyOSB9LFxyXG4gICAgICAyLjJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFwcGxlUkdCKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC42MjUsIHk6IDAuMzQgfSxcclxuICAgICAgeyB4OiAwLjI4LCB5OiAwLjU5NSB9LFxyXG4gICAgICB7IHg6IDAuMTU1LCB5OiAwLjA3IH0sXHJcbiAgICAgIHsgeDogMC4zMTI3LCB5OiAwLjMyOSB9LFxyXG4gICAgICAxLjhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNpZVJHQigpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNzM1LCB5OiAwLjI2NSB9LFxyXG4gICAgICB7IHg6IDAuMjc0LCB5OiAwLjcxNyB9LFxyXG4gICAgICB7IHg6IDAuMTY3LCB5OiAwLjAwOSB9LFxyXG4gICAgICB7IHg6IDAuMzMzMywgeTogMC4zMzMzIH0sXHJcbiAgICAgIDIuMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2lkZUdhbXV0KCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC43MzQ3LCB5OiAwLjI2NTMgfSxcclxuICAgICAgeyB4OiAwLjExNTIsIHk6IDAuODI2NCB9LFxyXG4gICAgICB7IHg6IDAuMTU2NiwgeTogMC4wMTc3IH0sXHJcbiAgICAgIHsgeDogMC4zNDU3LCB5OiAwLjM1ODUgfSxcclxuICAgICAgMS4yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwYWwoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjY0LCB5OiAwLjMzIH0sXHJcbiAgICAgIHsgeDogMC4yOSwgeTogMC42IH0sXHJcbiAgICAgIHsgeDogMC4xNSwgeTogMC4wNiB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMS45NVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXRjaChwYXRjaDogUGFydGlhbDxDb252ZXJzaW9uUGFyYW1ldGVycz4pOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHJlZFBvaW50LFxyXG4gICAgICBncmVlblBvaW50LFxyXG4gICAgICBibHVlUG9pbnQsXHJcbiAgICAgIHdoaXRlUG9pbnQsXHJcbiAgICAgIGdhbW1hXHJcbiAgICB9ID0gPENvbnZlcnNpb25QYXJhbWV0ZXJzPk9iamVjdC5hc3NpZ24oe30sIHRoaXMsIHBhdGNoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKHJlZFBvaW50LCBncmVlblBvaW50LCBibHVlUG9pbnQsIHdoaXRlUG9pbnQsIGdhbW1hKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05WRVJTSU9OX0ZJTklTSEVEID0gJ0NPTlZFUlNJT05fRklOSVNIRUQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnNpb25GaW5pc2hlZChcclxuICBjb252ZXJzaW9uUmVzdWx0OiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCxcclxuICByZXN1bHRJbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXVxyXG4pOiBBbnlBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDT05WRVJTSU9OX0ZJTklTSEVELFxyXG4gICAgY29udmVyc2lvblJlc3VsdCxcclxuICAgIHJlc3VsdEltYWdlc1xyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25GaW5pc2hlZC50cyIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7IENvbG9yUHJvZmlsZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQ09MT1JfUFJPRklMRV9UWVBFID0gJ0NIQU5HRV9DT0xPUl9QUk9GSUxFX1RZUEUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUoY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZSwgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzKTogQW55QWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ0hBTkdFX0NPTE9SX1BST0ZJTEVfVFlQRSxcclxuICAgIGNvbG9yUHJvZmlsZVR5cGUsXHJcbiAgICBjb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VDb2xvclByb2ZpbGVUeXBlLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9PUklHSU5BTF9JTUFHRSA9ICdDSEFOR0VfT1JJR0lOQUxfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VPcmlnaW5hbEltYWdlQWN0aW9uIGV4dGVuZHMgQW55QWN0aW9uIHtcclxuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU9yaWdpbmFsSW1hZ2UoXHJcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcclxuKTogQ2hhbmdlT3JpZ2luYWxJbWFnZUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9PUklHSU5BTF9JTUFHRSxcclxuICAgIGltYWdlXHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2lucHV0L2NoYW5nZU9yaWdpbmFsSW1hZ2UudHMiLCJpbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcbmltcG9ydCB7IExhYmVsZWRWYWx1ZSB9IGZyb20gJ3V0aWxzL0xhYmVsZWRWYWx1ZSc7XHJcblxyXG5leHBvcnQgZW51bSBDb2xvclByb2ZpbGVUeXBlIHtcclxuICBzUkdCLFxyXG4gIEFkb2JlUkdCLFxyXG4gIEFwcGxlUkdCLFxyXG4gIENJRVJHQixcclxuICBXaWRlR2FtdXQsXHJcbiAgUEFMLFxyXG4gIEN1c3RvbVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJlZGVmaW5lZENvbG9yUHJvZmlsZSB7XHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZTtcclxuICBwYXJhbWV0ZXJzKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJlZGVmaW5lZENvbG9yUHJvZmlsZXM6IFByZWRlZmluZWRDb2xvclByb2ZpbGVbXSA9IFtcclxuICB7IGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUuQWRvYmVSR0IsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLmFkb2JlUkdCIH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLkFwcGxlUkdCLCBwYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycy5hcHBsZVJHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5zUkdCLCBwYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycy5zUkdCIH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLkNJRVJHQiwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuY2llUkdCIH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLldpZGVHYW11dCwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMud2lkZUdhbXV0IH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLlBBTCwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMucGFsIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYWJlbGVkQ29sb3JQcm9maWxlczogTGFiZWxlZFZhbHVlPENvbG9yUHJvZmlsZVR5cGU+W10gPSBbXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5BZG9iZVJHQiwgbGFiZWw6ICdBZG9iZVJHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLkFwcGxlUkdCLCBsYWJlbDogJ0FwcGxlUkdCJyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuc1JHQiwgbGFiZWw6ICdzUkdCJyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuQ0lFUkdCLCBsYWJlbDogJ0NJRVJHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLldpZGVHYW11dCwgbGFiZWw6ICdXaWRlR2FtdXQnIH0sXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5QQUwsIGxhYmVsOiAnUEFMJyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuQ3VzdG9tLCBsYWJlbDogJ0N1c3RvbScgfVxyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvQ29sb3JQcm9maWxlVHlwZS50cyIsImV4cG9ydCBjbGFzcyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IHZhbHVlczogbnVtYmVyW107XHJcbiAgcHVibGljIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xyXG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7TWF0cml4LCBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4uL2luZGV4JztcblxuLyoqXG4gKiBAY2xhc3MgTHVEZWNvbXBvc2l0aW9uXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbHV0enJvZWRlci9NYXBhY2svYmxvYi9tYXN0ZXIvU291cmNlL0x1RGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMdURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgICAgICBtYXRyaXggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobWF0cml4KTtcblxuICAgICAgICB2YXIgbHUgPSBtYXRyaXguY2xvbmUoKTtcbiAgICAgICAgdmFyIHJvd3MgPSBsdS5yb3dzO1xuICAgICAgICB2YXIgY29sdW1ucyA9IGx1LmNvbHVtbnM7XG4gICAgICAgIHZhciBwaXZvdFZlY3RvciA9IG5ldyBBcnJheShyb3dzKTtcbiAgICAgICAgdmFyIHBpdm90U2lnbiA9IDE7XG4gICAgICAgIHZhciBpLCBqLCBrLCBwLCBzLCB0LCB2O1xuICAgICAgICB2YXIgTFVjb2xqLCBrbWF4O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHBpdm90VmVjdG9yW2ldID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIExVY29saiA9IG5ldyBBcnJheShyb3dzKTtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBMVWNvbGpbaV0gPSBsdS5nZXQoaSwgaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrbWF4ID0gTWF0aC5taW4oaSwgaik7XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGttYXg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzICs9IGx1LmdldChpLCBrKSAqIExVY29saltrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTFVjb2xqW2ldIC09IHM7XG4gICAgICAgICAgICAgICAgbHUuc2V0KGksIGosIExVY29saltpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBqO1xuICAgICAgICAgICAgZm9yIChpID0gaiArIDE7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoTFVjb2xqW2ldKSA+IE1hdGguYWJzKExVY29saltwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocCAhPT0gaikge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBjb2x1bW5zOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IGx1LmdldChwLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgbHUuc2V0KHAsIGssIGx1LmdldChqLCBrKSk7XG4gICAgICAgICAgICAgICAgICAgIGx1LnNldChqLCBrLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2ID0gcGl2b3RWZWN0b3JbcF07XG4gICAgICAgICAgICAgICAgcGl2b3RWZWN0b3JbcF0gPSBwaXZvdFZlY3RvcltqXTtcbiAgICAgICAgICAgICAgICBwaXZvdFZlY3RvcltqXSA9IHY7XG5cbiAgICAgICAgICAgICAgICBwaXZvdFNpZ24gPSAtcGl2b3RTaWduO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaiA8IHJvd3MgJiYgbHUuZ2V0KGosIGopICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaiArIDE7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbHUuc2V0KGksIGosIGx1LmdldChpLCBqKSAvIGx1LmdldChqLCBqKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5MVSA9IGx1O1xuICAgICAgICB0aGlzLnBpdm90VmVjdG9yID0gcGl2b3RWZWN0b3I7XG4gICAgICAgIHRoaXMucGl2b3RTaWduID0gcGl2b3RTaWduO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1Npbmd1bGFyKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciBjb2wgPSBkYXRhLmNvbHVtbnM7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2pdW2pdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIHNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0cml4LmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgICAgICB2YXIgbHUgPSB0aGlzLkxVO1xuICAgICAgICB2YXIgcm93cyA9IGx1LnJvd3M7XG5cbiAgICAgICAgaWYgKHJvd3MgIT09IHZhbHVlLnJvd3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXRyaXggZGltZW5zaW9ucycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2luZ3VsYXIoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMVSBtYXRyaXggaXMgc2luZ3VsYXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gdmFsdWUuc3ViTWF0cml4Um93KHRoaXMucGl2b3RWZWN0b3IsIDAsIGNvdW50IC0gMSk7XG4gICAgICAgIHZhciBjb2x1bW5zID0gbHUuY29sdW1ucztcbiAgICAgICAgdmFyIGksIGosIGs7XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IGNvbHVtbnM7IGsrKykge1xuICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdIC09IFhba11bal0gKiBsdVtpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrID0gY29sdW1ucyAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIFhba11bal0gLz0gbHVba11ba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSAtPSBYW2tdW2pdICogbHVbaV1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBkZXRlcm1pbmFudCgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLkxVO1xuICAgICAgICBpZiAoIWRhdGEuaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggbXVzdCBiZSBzcXVhcmUnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGV0ZXJtaW5hbnQgPSB0aGlzLnBpdm90U2lnbjtcbiAgICAgICAgdmFyIGNvbCA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgKj0gZGF0YVtqXVtqXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGV0ZXJtaW5hbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGxvd2VyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLkxVO1xuICAgICAgICB2YXIgcm93cyA9IGRhdGEucm93cztcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBkYXRhLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSBkYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IHVwcGVyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLkxVO1xuICAgICAgICB2YXIgcm93cyA9IGRhdGEucm93cztcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBkYXRhLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gaikge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gZGF0YVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldCBwaXZvdFBlcm11dGF0aW9uVmVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waXZvdFZlY3Rvci5zbGljZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvbHUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWF0cml4LCBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7aHlwb3RlbnVzZSwgZ2V0RmlsbGVkMkRBcnJheX0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAY2xhc3MgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb25cbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sdXR6cm9lZGVyL01hcGFjay9ibG9iL21hc3Rlci9Tb3VyY2UvU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24uY3NcbiAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycz10cnVlXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb21wdXRlUmlnaHRTaW5ndWxhclZlY3RvcnM9dHJ1ZV1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b1RyYW5zcG9zZT1mYWxzZV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBtID0gdmFsdWUucm93cztcbiAgICAgICAgdmFyIG4gPSB2YWx1ZS5jb2x1bW5zO1xuICAgICAgICB2YXIgbnUgPSBNYXRoLm1pbihtLCBuKTtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycyA9IHRydWUsXG4gICAgICAgICAgICBjb21wdXRlUmlnaHRTaW5ndWxhclZlY3RvcnMgPSB0cnVlLFxuICAgICAgICAgICAgYXV0b1RyYW5zcG9zZSA9IGZhbHNlXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciB3YW50dSA9IEJvb2xlYW4oY29tcHV0ZUxlZnRTaW5ndWxhclZlY3RvcnMpO1xuICAgICAgICB2YXIgd2FudHYgPSBCb29sZWFuKGNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycyk7XG5cbiAgICAgICAgdmFyIHN3YXBwZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGE7XG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgaWYgKCFhdXRvVHJhbnNwb3NlKSB7XG4gICAgICAgICAgICAgICAgYSA9IHZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvbXB1dGluZyBTVkQgb24gYSBtYXRyaXggd2l0aCBtb3JlIGNvbHVtbnMgdGhhbiByb3dzLiBDb25zaWRlciBlbmFibGluZyBhdXRvVHJhbnNwb3NlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGEgPSB2YWx1ZS50cmFuc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBtID0gYS5yb3dzO1xuICAgICAgICAgICAgICAgIG4gPSBhLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgc3dhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGF1eCA9IHdhbnR1O1xuICAgICAgICAgICAgICAgIHdhbnR1ID0gd2FudHY7XG4gICAgICAgICAgICAgICAgd2FudHYgPSBhdXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzID0gbmV3IEFycmF5KE1hdGgubWluKG0gKyAxLCBuKSk7XG4gICAgICAgIHZhciBVID0gZ2V0RmlsbGVkMkRBcnJheShtLCBudSwgMCk7XG4gICAgICAgIHZhciBWID0gZ2V0RmlsbGVkMkRBcnJheShuLCBuLCAwKTtcbiAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXkobik7XG4gICAgICAgIHZhciB3b3JrID0gbmV3IEFycmF5KG0pO1xuXG4gICAgICAgIHZhciBuY3QgPSBNYXRoLm1pbihtIC0gMSwgbik7XG4gICAgICAgIHZhciBucnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMiwgbSkpO1xuXG4gICAgICAgIHZhciBpLCBqLCBrLCBwLCB0LCBrcywgZiwgY3MsIHNuLCBtYXgsIGthc2UsXG4gICAgICAgICAgICBzY2FsZSwgc3AsIHNwbTEsIGVwbTEsIHNrLCBlaywgYiwgYywgc2hpZnQsIGc7XG5cbiAgICAgICAgZm9yIChrID0gMCwgbWF4ID0gTWF0aC5tYXgobmN0LCBucnQpOyBrIDwgbWF4OyBrKyspIHtcbiAgICAgICAgICAgIGlmIChrIDwgbmN0KSB7XG4gICAgICAgICAgICAgICAgc1trXSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzW2tdID0gaHlwb3RlbnVzZShzW2tdLCBhW2ldW2tdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNba10gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFba11ba10gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2tdID0gLXNba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYVtpXVtrXSAvPSBzW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFba11ba10gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc1trXSA9IC1zW2tdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGlmICgoayA8IG5jdCkgJiYgKHNba10gIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ICs9IGFbaV1ba10gKiBhW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQgPSAtdCAvIGFba11ba107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbaV1bal0gKz0gdCAqIGFbaV1ba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZVtqXSA9IGFba11bal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3YW50dSAmJiAoayA8IG5jdCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSBhW2ldW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgPCBucnQpIHtcbiAgICAgICAgICAgICAgICBlW2tdID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlW2tdID0gaHlwb3RlbnVzZShlW2tdLCBlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVba10gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbayArIDFdIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZVtrXSA9IDAgLSBlW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlW2ldIC89IGVba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZVtrICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZVtrXSA9IC1lW2tdO1xuICAgICAgICAgICAgICAgIGlmICgoayArIDEgPCBtKSAmJiAoZVtrXSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtbaV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGsgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtbaV0gKz0gZVtqXSAqIGFbaV1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAtZVtqXSAvIGVbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2ldW2pdICs9IHQgKiB3b3JrW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtrXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwID0gTWF0aC5taW4obiwgbSArIDEpO1xuICAgICAgICBpZiAobmN0IDwgbikge1xuICAgICAgICAgICAgc1tuY3RdID0gYVtuY3RdW25jdF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0gPCBwKSB7XG4gICAgICAgICAgICBzW3AgLSAxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ydCArIDEgPCBwKSB7XG4gICAgICAgICAgICBlW25ydF0gPSBhW25ydF1bcCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGVbcCAtIDFdID0gMDtcblxuICAgICAgICBpZiAod2FudHUpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IG5jdDsgaiA8IG51OyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFVbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBVW2pdW2pdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoayA9IG5jdCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNba10gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBudTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9IFVbaV1ba10gKiBVW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IC10IC8gVVtrXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2pdICs9IHQgKiBVW2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSAtVVtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBVW2tdW2tdID0gMSArIFVba11ba107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2tdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFVba11ba10gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgZm9yIChrID0gbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKChrIDwgbnJ0KSAmJiAoZVtrXSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9IFZbaV1ba10gKiBWW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IC10IC8gVltrICsgMV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1bal0gKz0gdCAqIFZbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrXVtrXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHAgPSBwIC0gMTtcbiAgICAgICAgdmFyIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgZXBzID0gTnVtYmVyLkVQU0lMT047XG4gICAgICAgIHdoaWxlIChwID4gMCkge1xuICAgICAgICAgICAgZm9yIChrID0gcCAtIDI7IGsgPj0gLTE7IGstLSkge1xuICAgICAgICAgICAgICAgIGlmIChrID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVba10pIDw9IGVwcyAqIChNYXRoLmFicyhzW2tdKSArIE1hdGguYWJzKHNbayArIDFdKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZVtrXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID09PSBwIC0gMikge1xuICAgICAgICAgICAgICAgIGthc2UgPSA0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtzID0gcCAtIDE7IGtzID49IGs7IGtzLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtzID09PSBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ID0gKGtzICE9PSBwID8gTWF0aC5hYnMoZVtrc10pIDogMCkgKyAoa3MgIT09IGsgKyAxID8gTWF0aC5hYnMoZVtrcyAtIDFdKSA6IDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc1trc10pIDw9IGVwcyAqIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba3NdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrcyA9PT0gaykge1xuICAgICAgICAgICAgICAgICAgICBrYXNlID0gMztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtzID09PSBwIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBrYXNlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrYXNlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgayA9IGtzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaysrO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGthc2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICAgICAgZiA9IGVbcCAtIDJdO1xuICAgICAgICAgICAgICAgICAgICBlW3AgLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IHAgLSAyOyBqID49IGs7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGh5cG90ZW51c2Uoc1tqXSwgZik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcyA9IHNbal0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc24gPSBmIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogIT09IGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gLXNuICogZVtqIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtqIC0gMV0gPSBjcyAqIGVbaiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gY3MgKiBWW2ldW2pdICsgc24gKiBWW2ldW3AgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtwIC0gMV0gPSAtc24gKiBWW2ldW2pdICsgY3MgKiBWW2ldW3AgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIDIgOiB7XG4gICAgICAgICAgICAgICAgICAgIGYgPSBlW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgZVtrIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrOyBqIDwgcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaHlwb3RlbnVzZShzW2pdLCBmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzID0gc1tqXSAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbiA9IGYgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gLXNuICogZVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbal0gPSBjcyAqIGVbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FudHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBjcyAqIFVbaV1bal0gKyBzbiAqIFVbaV1bayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2sgLSAxXSA9IC1zbiAqIFVbaV1bal0gKyBjcyAqIFVbaV1bayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMyA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1heChNYXRoLmFicyhzW3AgLSAxXSksIE1hdGguYWJzKHNbcCAtIDJdKSwgTWF0aC5hYnMoZVtwIC0gMl0pLCBNYXRoLmFicyhzW2tdKSwgTWF0aC5hYnMoZVtrXSkpO1xuICAgICAgICAgICAgICAgICAgICBzcCA9IHNbcCAtIDFdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHNwbTEgPSBzW3AgLSAyXSAvIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBlcG0xID0gZVtwIC0gMl0gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc2sgPSBzW2tdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGVrID0gZVtrXSAvIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBiID0gKChzcG0xICsgc3ApICogKHNwbTEgLSBzcCkgKyBlcG0xICogZXBtMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICBjID0gKHNwICogZXBtMSkgKiAoc3AgKiBlcG0xKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGIgIT09IDApIHx8IChjICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBNYXRoLnNxcnQoYiAqIGIgKyBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ID0gLXNoaWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBjIC8gKGIgKyBzaGlmdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZiA9IChzayArIHNwKSAqIChzayAtIHNwKSArIHNoaWZ0O1xuICAgICAgICAgICAgICAgICAgICBnID0gc2sgKiBlaztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gazsgaiA8IHAgLSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBoeXBvdGVudXNlKGYsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3MgPSBmIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuID0gZyAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbaiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBjcyAqIHNbal0gKyBzbiAqIGVbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBlW2pdID0gY3MgKiBlW2pdIC0gc24gKiBzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZyA9IHNuICogc1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2ogKyAxXSA9IGNzICogc1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FudHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBjcyAqIFZbaV1bal0gKyBzbiAqIFZbaV1baiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2ogKyAxXSA9IC1zbiAqIFZbaV1bal0gKyBjcyAqIFZbaV1baiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaHlwb3RlbnVzZShmLCBnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzID0gZiAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbiA9IGcgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gY3MgKiBlW2pdICsgc24gKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbaiArIDFdID0gLXNuICogZVtqXSArIGNzICogc1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gc24gKiBlW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbaiArIDFdID0gY3MgKiBlW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dSAmJiAoaiA8IG0gLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGNzICogVVtpXVtqXSArIHNuICogVVtpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1baiArIDFdID0gLXNuICogVVtpXVtqXSArIGNzICogVVtpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlW3AgLSAyXSA9IGY7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXIgPSBpdGVyICsgMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgNDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc1trXSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2tdID0gKHNba10gPCAwID8gLXNba10gOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gcHA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gLVZbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgcHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzW2tdID49IHNbayArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gc1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba10gPSBzW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbayArIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50diAmJiAoayA8IG4gLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IFZbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2sgKyAxXSA9IFZbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1ba10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dSAmJiAoayA8IG0gLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IFVbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2sgKyAxXSA9IFVbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcC0tO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN3YXBwZWQpIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBWO1xuICAgICAgICAgICAgViA9IFU7XG4gICAgICAgICAgICBVID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tID0gbTtcbiAgICAgICAgdGhpcy5uID0gbjtcbiAgICAgICAgdGhpcy5zID0gcztcbiAgICAgICAgdGhpcy5VID0gVTtcbiAgICAgICAgdGhpcy5WID0gVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb2x2ZSBhIHByb2JsZW0gb2YgbGVhc3Qgc3F1YXJlIChBeD1iKSBieSB1c2luZyB0aGUgU1ZELiBVc2VmdWwgd2hlbiBBIGlzIHNpbmd1bGFyLiBXaGVuIEEgaXMgbm90IHNpbmd1bGFyLCBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gdXNlIHFyLnNvbHZlKHZhbHVlKS5cbiAgICAgKiBFeGFtcGxlIDogV2Ugc2VhcmNoIHRvIGFwcHJveGltYXRlIHgsIHdpdGggQSBtYXRyaXggc2hhcGUgbSpuLCB4IHZlY3RvciBzaXplIG4sIGIgdmVjdG9yIHNpemUgbSAobSA+IG4pLiBXZSB3aWxsIHVzZSA6XG4gICAgICogdmFyIHN2ZCA9IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKEEpO1xuICAgICAqIHZhciB4ID0gc3ZkLnNvbHZlKGIpO1xuICAgICAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZSAtIE1hdHJpeCAxRCB3aGljaCBpcyB0aGUgdmVjdG9yIGIgKGluIHRoZSBlcXVhdGlvbiBBeCA9IGIpXG4gICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSB2ZWN0b3IgeFxuICAgICAqL1xuICAgIHNvbHZlKHZhbHVlKSB7XG5cbiAgICAgICAgdmFyIFkgPSB2YWx1ZTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnRocmVzaG9sZDtcbiAgICAgICAgdmFyIHNjb2xzID0gdGhpcy5zLmxlbmd0aDtcbiAgICAgICAgdmFyIExzID0gTWF0cml4Lnplcm9zKHNjb2xzLCBzY29scyk7XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY29sczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zW2ldKSA8PSBlKSB7XG4gICAgICAgICAgICAgICAgTHNbaV1baV0gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMc1tpXVtpXSA9IDEgLyB0aGlzLnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgVSA9IHRoaXMuVTtcbiAgICAgICAgdmFyIFYgPSB0aGlzLnJpZ2h0U2luZ3VsYXJWZWN0b3JzO1xuXG4gICAgICAgIHZhciBWTCA9IFYubW11bChMcyk7XG4gICAgICAgIHZhciB2cm93cyA9IFYucm93cztcbiAgICAgICAgdmFyIHVyb3dzID0gVS5sZW5ndGg7XG4gICAgICAgIHZhciBWTFUgPSBNYXRyaXguemVyb3ModnJvd3MsIHVyb3dzKTtcbiAgICAgICAgdmFyIGosIGssIHN1bTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdnJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHVyb3dzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBzY29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBWTFtpXVtrXSAqIFVbal1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZMVVtpXVtqXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBWTFUubW11bChZKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgc29sdmVGb3JEaWFnb25hbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb2x2ZShNYXRyaXguZGlhZyh2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW52ZXJzZSBvZiB0aGUgbWF0cml4LiBXZSBjb21wdXRlIHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4IHVzaW5nIFNWRCB3aGVuIHRoaXMgbWF0cml4IGlzIHNpbmd1bGFyIG9yIGlsbC1jb25kaXRpb25lZC4gRXhhbXBsZSA6XG4gICAgICogdmFyIHN2ZCA9IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKEEpO1xuICAgICAqIHZhciBpbnZlcnNlQSA9IHN2ZC5pbnZlcnNlKCk7XG4gICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBhcHByb3hpbWF0aW9uIG9mIHRoZSBpbnZlcnNlIG9mIHRoZSBtYXRyaXhcbiAgICAgKi9cbiAgICBpbnZlcnNlKCkge1xuICAgICAgICB2YXIgViA9IHRoaXMuVjtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnRocmVzaG9sZDtcbiAgICAgICAgdmFyIHZyb3dzID0gVi5sZW5ndGg7XG4gICAgICAgIHZhciB2Y29scyA9IFZbMF0ubGVuZ3RoO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgodnJvd3MsIHRoaXMucy5sZW5ndGgpO1xuICAgICAgICB2YXIgaSwgajtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdnJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHZjb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zW2pdKSA+IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IFZbaV1bal0gLyB0aGlzLnNbal07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIFUgPSB0aGlzLlU7XG5cbiAgICAgICAgdmFyIHVyb3dzID0gVS5sZW5ndGg7XG4gICAgICAgIHZhciB1Y29scyA9IFVbMF0ubGVuZ3RoO1xuICAgICAgICB2YXIgWSA9IG5ldyBNYXRyaXgodnJvd3MsIHVyb3dzKTtcbiAgICAgICAgdmFyIGssIHN1bTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdnJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHVyb3dzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCB1Y29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBYW2ldW2tdICogVVtqXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgWVtpXVtqXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBjb25kaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNbMF0gLyB0aGlzLnNbTWF0aC5taW4odGhpcy5tLCB0aGlzLm4pIC0gMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IG5vcm0yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCByYW5rKCkge1xuICAgICAgICB2YXIgdG9sID0gTWF0aC5tYXgodGhpcy5tLCB0aGlzLm4pICogdGhpcy5zWzBdICogTnVtYmVyLkVQU0lMT047XG4gICAgICAgIHZhciByID0gMDtcbiAgICAgICAgdmFyIHMgPSB0aGlzLnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNbaV0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICByKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldCBkaWFnb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgdGhyZXNob2xkKCkge1xuICAgICAgICByZXR1cm4gKE51bWJlci5FUFNJTE9OIC8gMikgKiBNYXRoLm1heCh0aGlzLm0sIHRoaXMubikgKiB0aGlzLnNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGxlZnRTaW5ndWxhclZlY3RvcnMoKSB7XG4gICAgICAgIGlmICghTWF0cml4LmlzTWF0cml4KHRoaXMuVSkpIHtcbiAgICAgICAgICAgIHRoaXMuVSA9IG5ldyBNYXRyaXgodGhpcy5VKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5VO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCByaWdodFNpbmd1bGFyVmVjdG9ycygpIHtcbiAgICAgICAgaWYgKCFNYXRyaXguaXNNYXRyaXgodGhpcy5WKSkge1xuICAgICAgICAgICAgdGhpcy5WID0gbmV3IE1hdHJpeCh0aGlzLlYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGRpYWdvbmFsTWF0cml4KCkge1xuICAgICAgICByZXR1cm4gTWF0cml4LmRpYWcodGhpcy5zKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3N2ZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGh5cG90ZW51c2UoYSwgYikge1xuICAgIHZhciByID0gMDtcbiAgICBpZiAoTWF0aC5hYnMoYSkgPiBNYXRoLmFicyhiKSkge1xuICAgICAgICByID0gYiAvIGE7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhKSAqIE1hdGguc3FydCgxICsgciAqIHIpO1xuICAgIH1cbiAgICBpZiAoYiAhPT0gMCkge1xuICAgICAgICByID0gYSAvIGI7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhiKSAqIE1hdGguc3FydCgxICsgciAqIHIpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGxlZDJEQXJyYXkocm93cywgY29sdW1ucywgdmFsdWUpIHtcbiAgICB2YXIgYXJyYXkgPSBuZXcgQXJyYXkocm93cyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgYXJyYXlbaV0gPSBuZXcgQXJyYXkoY29sdW1ucyk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICBhcnJheVtpXVtqXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdGhpcyBpcyBhbiBvdmVybHkgZGVmZW5zaXZlIGFwcHJvYWNoIHRvIGF2b2lkIGFueSBwb3NzaWJsZVxuLy8gc2lkZS1lZmZlY3Qgd2hlbiB0aGUgbGl2ZSBjb2xsZWN0aW9uIG9mIG5vZGVzIGlzIHBhc3NlZCBhcm91bmRcbmltcG9ydCB7cHVzaCwgc2xpY2UsIHNwbGljZSwgdW5zaGlmdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7ZnJhZ21lbnR9IGZyb20gJy4uL3NoYXJlZC9lYXN5LWRvbS5qcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50LmpzJztcbmltcG9ydCBlbmdpbmUgZnJvbSAnLi4vb2JqZWN0cy9FbmdpbmUuanMnO1xuXG4vKiAgICAgICAgICAgICAgICAwICAgICAgICAgICAgICAgICAgICAgICAwICAgICAgICAgICAgICAgICAwXG4wMDAgICAgICAgICAgICAgICAgMDAgICAgICAgICAgICAgICAgICAgMDAgICAgICAgICAgICAgICAgMDAwXG4gMDAwMCAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAgIDAwMDAgICAgICAgICAgICAgIDAwMDAgXG4gIDAwMDAwICAgICAgICAgICAgIDAwMDAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAgMDAwMCAgXG4gIDAwMDAwMCAgICAgICAgICAgIDAwMDAwMCAgICAgICAgIDAwMDAwMCAgICAgICAgICAgIDAwMDAwMCAgXG4gICAwMDAwMDAwICAgICAgICAgICAwMDAwMDAwICAgICAgMDAwMDAwMCAgICAgICAgICAwMDAwMDAwICAgXG4gICAwMDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwICAgXG4gICAwMDAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwICAgXG4gICAwMDAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAgICAgXG4gICAgMDAwMDAwMCAgICAgICAgICAgIDAwMDAwMCAgIDAwMDAwMDAgICAgICAgICAgIDAwMDAwMDAgICAgXG4gICAgMDAwMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAgMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAwMCAgICAgXG4gICAgIDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwICAgICAgXG4gICAgICAwMDAwMDAgICAgICAgICAgICAwMDAwMDAwMDAwMDAgICAgICAgICAgICAgMDAwMDAwICAgICAgXG4gICAgICAgMDAwMDAwMDAwMDAwMCAgICAgIDAwMDAwMDAwICAgICAgIDAwMDAwMDAwMDAwMDAgICAgICAgXG4gICAgICAwICAwMDAwMDAwMDAwMDAwMDAwICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwICAwICAgICAgXG4gICAgICAgMDAgIDAwMDAwMDAwMDAwMDAwMDAwICAgICAgIDAwMDAwMDAwMDAwMDAwMDAgIDAwICAgICAgXG4gICAgICAgMDAwICAgMDAwMDAgICAgIDAwMDAwMCAgIDAwMDAwMDAgICAgMDAwMDAgICAwMDAgICAgICAgXG4gICAgICAgIDAwMDAgICAwMDAwMCAgICAgICAgMDAwMDAwICAgICAgIDAwMDAwMCAgMDAwMDAgICAgICAgXG4gICAgICAgIDAwMDAwMCAgMDAwMDAwICAgICAwMDAwMDAwICAgICAwMDAwMDAgIDAwMDAwMCAgICAgICAgXG4gICAgICAgICAwMDAwMDAwICAwMDAwMDAgICAwMDAwMDAwMCAgIDAwMDAwICAwMDAwMDAwICAgICAgICAgXG4gICAgICAgICAwMDAwMDAwMCAgIDAwMDAwIDAwMDAwMDAwMCAwMDAwMCAgMDAwMDAwMDAwICAgICAgICAgXG4gICAgICAgICAwMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwICAgICAgICAgXG4gICAgICAgICAgMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMCAgMDAwMDAwMDAwMDAgICAgICAgICAgXG4gICAgICAgICAgMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgMDAwMDAwMDAwICAgMDAwMDAgICAwMDAwMDAwMDAwICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIDAwMDAgIDAwMCAgMDAwMCAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNseWVyMC5kZXZpYW50YXJ0LmNvbSAgICAgICAgICAgICAgICAgICovXG5cbi8vIE1lZ2F0cm9uIGlzIGEgdHJhbnNmb3JtZXIgaW4gY2hhcmdlIG9mIG11dGF0aW5nXG4vLyBhIGxpc3Qgb2YgbGl2ZSBET00gbm9kZXMgaW50byBhIG5ldyBsaXN0LlxuZnVuY3Rpb24gTWVnYXRyb24obm9kZSwgY2hpbGROb2Rlcykge1xuICB0aGlzLm5vZGUgPSBub2RlO1xuICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xufVxuXG4vLyBpdCBjYXJyaWVzIHRoZSBkZWZhdWx0IG1lcmdlL2RpZmYgZW5naW5lXG4vLyB0aGF0IGNhbiBiZSBzd2FwcGVkIHZpYSBoeXBlckhUTUwuZW5naW5lID0gey4uLn1cbi8vIFNlZSBoeXBlcmh0bWwtbWFqaW5idXUgdG8ga25vdyBtb3JlXG5NZWdhdHJvbi5lbmdpbmUgPSBlbmdpbmU7XG5cbi8vIHF1aWNrbHkgZXJhc2UgdGhlIHJlbGF0ZWQgY29udGVudFxuLy8gb3B0aW9uYWxseSBhZGQgYSBzaW5nbGUgbm9kZS9jb21wb25lbnQgYXMgdmFsdWVcbk1lZ2F0cm9uLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uIGVtcHR5KHZhbHVlKSB7XG4gIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGU7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXM7XG4gIGxldCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCkge1xuICAgIGNvbnN0IHBuID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHJlbW92ZSA9IHNwbGljZS5jYWxsKGNoaWxkTm9kZXMsIDAsIGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBwbi5yZW1vdmVDaGlsZCh1dGlscy5nZXROb2RlKHJlbW92ZVtsZW5ndGhdKSk7XG4gIH1cbiAgaWYgKHZhbHVlKSB7XG4gICAgcHVzaC5jYWxsKGNoaWxkTm9kZXMsIHZhbHVlKTtcbiAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHV0aWxzLmdldE5vZGUodmFsdWUpLCBub2RlKTtcbiAgfVxufTtcblxuLy8gdGhlcmUgYXJlIG51bWVyb3VzIHdheXMgdG8gb3B0aW1pemUgYSBsaXN0IG9mIG5vZGVzXG4vLyB0aGF0IGlzIGdvaW5nIHRvIHJlcHJlc2VudCBhbm90aGVyIGxpc3QgKG9yIGV2ZW4gdGhlIHNhbWUpXG5NZWdhdHJvbi5wcm90b3R5cGUuYmVjb21lID0gZnVuY3Rpb24gYmVjb21lKHZpcnR1YWwpIHtcbiAgY29uc3Qgdmxlbmd0aCA9IHZpcnR1YWwubGVuZ3RoO1xuICAvLyBpZiB0aGVyZSBhcmUgbmV3IGVsZW1lbnRzIHRvIHB1c2ggLi5cbiAgaWYgKDAgPCB2bGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZTtcbiAgICBjb25zdCBsaXZlID0gdGhpcy5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IHBuID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGxldCBsbGVuZ3RoID0gbGl2ZS5sZW5ndGg7XG4gICAgbGV0IGwgPSAwO1xuICAgIGxldCB2ID0gMDtcbiAgICAvLyBpZiB0aGUgY3VycmVudCBsaXN0IGlzIGVtcHR5LCBhcHBlbmQgYWxsIG5vZGVzXG4gICAgaWYgKGxsZW5ndGggPCAxKSB7XG4gICAgICBwdXNoLmFwcGx5KFxuICAgICAgICBsaXZlLFxuICAgICAgICB1dGlscy5pbnNlcnQocG4sIHZpcnR1YWwsIG5vZGUpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBhbGwgZWxlbWVudHMgYXJlIHRoZSBzYW1lLCBkbyBwcmV0dHkgbXVjaCBub3RoaW5nXG4gICAgd2hpbGUgKGwgPCBsbGVuZ3RoICYmIHYgPCB2bGVuZ3RoKSB7XG4gICAgICAvLyBhcHBlbmRpbmcgbm9kZXMvY29tcG9uZW50cyBjb3VsZCBiZSBqdXN0IGZpbmVcbiAgICAgIGlmIChsaXZlW2xdICE9PSB2aXJ0dWFsW3ZdKSBicmVhaztcbiAgICAgIGwrKztcbiAgICAgIHYrKztcbiAgICB9XG4gICAgLy8gaWYgd2UgcmVhY2hlZCB0aGUgbGl2ZSBsZW5ndGggZGVzdGluYXRpb25cbiAgICBpZiAobCA9PT0gbGxlbmd0aCkge1xuICAgICAgLy8gdGhlcmUgY291bGQgYmUgYSB0aWUgKG5vdGhpbmcgdG8gZG8pXG4gICAgICBpZiAodmxlbmd0aCA9PT0gbGxlbmd0aCkgcmV0dXJuO1xuICAgICAgLy8gb3IgdGhlcmUncyBvbmx5IHRvIGFwcGVuZFxuICAgICAgcHVzaC5hcHBseShcbiAgICAgICAgbGl2ZSxcbiAgICAgICAgdXRpbHMuaW5zZXJ0KHBuLCBzbGljZS5jYWxsKHZpcnR1YWwsIHYpLCBub2RlKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgdGhlIG5ldyBsZW5ndGggaXMgcmVhY2hlZCB0aG91Z2hcbiAgICBpZiAodiA9PT0gdmxlbmd0aCkge1xuICAgICAgLy8gdGhlcmUgYXJlIG5vZGVzIHRvIHJlbW92ZVxuICAgICAgdXRpbHMucmVtb3ZlKHBuLCBzcGxpY2UuY2FsbChsaXZlLCBsLCBsbGVuZ3RoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG90aGVyd2lzZSBsZXQncyBjaGVjayBiYWNrd2FyZFxuICAgIGxldCBybCA9IGxsZW5ndGg7XG4gICAgbGV0IHJ2ID0gdmxlbmd0aDtcbiAgICB3aGlsZSAocmwgJiYgcnYpIHtcbiAgICAgIGlmIChsaXZlWy0tcmxdICE9PSB2aXJ0dWFsWy0tcnZdKSB7XG4gICAgICAgICsrcmw7XG4gICAgICAgICsrcnY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBub3cgLi4uIGxpc3RzIGFyZSBub3QgaWRlbnRpY2FsLCB3ZSBrbm93IHRoYXQsXG4gICAgLy8gYnV0IG1heWJlIGl0IHdhcyBhIHByZXBlbmQgLi4uIHNvIGlmIGxpdmUgbGVuZ3RoIGlzIGNvdmVyZWRcbiAgICBpZiAocmwgPCAxKSB7XG4gICAgICAvLyByZXR1cm4gYWZ0ZXIgcHJlLXBlbmRpbmcgYWxsIG5vZGVzXG4gICAgICB1bnNoaWZ0LmFwcGx5KFxuICAgICAgICBsaXZlLFxuICAgICAgICB1dGlscy5pbnNlcnQocG4sIHNsaWNlLmNhbGwodmlydHVhbCwgMCwgcnYpLCB1dGlscy5nZXROb2RlKGxpdmVbMF0pKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gb3IgbWF5YmUsIGl0IHdhcyBhIHJlbW92YWwgb2Ygbm9kZXMgYXQgdGhlIGJlZ2lubmluZ1xuICAgIGlmIChydiA8IDEpIHtcbiAgICAgIC8vIHJldHVybiBhZnRlciByZW1vdmluZyBhbGwgcHJlLW5vZGVzXG4gICAgICB1dGlscy5yZW1vdmUocG4sIHNwbGljZS5jYWxsKGxpdmUsIGwsIHJsKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5vdyB3ZSBoYXZlIGEgYm91bmRhcnkgb2Ygbm9kZXMgdGhhdCBuZWVkIHRvIGJlIGNoYW5nZWRcbiAgICAvLyBhbGwgdGhlIGRpc2NvdmVyZWQgaW5mbyBhciBwYXNzZWQgdG8gdGhlIGVuZ2luZVxuICAgIE1lZ2F0cm9uLmVuZ2luZS51cGRhdGUoXG4gICAgICB1dGlscywgcG4sIG5vZGUsXG4gICAgICBsaXZlLCBsLCBybCwgbGxlbmd0aCxcbiAgICAgIHZpcnR1YWwsIHYsIHJ2LCB2bGVuZ3RoXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVtcHR5KCk7XG4gIH1cbn07XG5cbmNvbnN0IHV0aWxzID0ge1xuXG4gIC8vIHRoZSBiYXNpYyBkZWZhdWx0IGVuZ2luZSBpcyBhbHdheXMgcHJvdmlkZWRcbiAgLy8gaW4gY2FzZSB0aGVyZSBhcmUgY29uZGl0aW9ucyB0aGF0IG5lZWQgaXRcbiAgZW5naW5lLFxuXG4gIC8vIGFuIGl0ZW0gY291bGQgYmUgYW4gaHlwZXJIVE1MLkNvbXBvbmVudCBhbmQsIGluIHN1Y2ggY2FzZSxcbiAgLy8gaXQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIG5vZGVcbiAgZ2V0Tm9kZTogbm9kZSA9PiBub2RlIGluc3RhbmNlb2YgQ29tcG9uZW50ID8gbm9kZS5yZW5kZXIoKSA6IG5vZGUsXG5cbiAgLy8gYXBwZW5kIGEgbGlzdCBvZiBub2RlcyBiZWZvcmUgYW5vdGhlciBub2RlXG4gIGluc2VydDogKHBhcmVudE5vZGUsIG5vZGVzLCBub2RlKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHV0aWxzLmdldE5vZGUobm9kZXNbMF0pLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgdG1wID0gZnJhZ21lbnQocGFyZW50Tm9kZSk7XG4gICAgICB3aGlsZSAoaSA8IGxlbmd0aClcbiAgICAgICAgdG1wLmFwcGVuZENoaWxkKHV0aWxzLmdldE5vZGUobm9kZXNbaSsrXSkpO1xuICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodG1wLCBub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9LFxuXG4gIC8vIGRyb3AgYSBsaXN0IG9mIG5vZGVzIGZyb20gdGhlaXIgcGFyZW50Tm9kZVxuICByZW1vdmU6IChwYXJlbnROb2RlLCBub2RlcykgPT4ge1xuICAgIGxldCBpID0gbm9kZXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodXRpbHMuZ2V0Tm9kZShub2Rlc1tpXSkpO1xuICAgIH1cbiAgfVxufTtcblxuLyogICAgICAgICAgICAgICAgICBfX19fX1xuICAgICAgICAgICAgICAgIF9fXy8gIHwgIFxcX19fXG4gICAgICAgICAgICAgX18vICAgICAgfCAgICAgIFxcX19cbiAgICAgICAgICBfXy8gICAgICAgICB8ICAgICAgICAgXFxfX1xuICAgICAgICAgL3wgICAgICAgICAgIHwgICAgICAgICAgIHxcXFxuICAgICAgICB8IHwgICAgICAgICAgIHwgICAgICAgICAgIHwgfFxuICAgICAgICB8IHwgICAgICAgICAgIHwgICAgICAgICAgIHwgfFxuICAgICAgIHwgIHwgICAgICAgICAgIHwgICAgICAgICAgIHwgIHxcbiAgICAgICB8ICB8ICAgICAgICBfX198X19fICAgICAgICB8ICB8XG4gICAgICAvICAgfCAgICBfX18vICBfX18gIFxcX19fICAgIHwgICBcXFxuICAgICAgfCAgIHxfX18vICBfX18vfCB8XFxfX18gIFxcX19ffCAgIHxcbiAgICAgIHwgICAvICAgX18vXyBcXF98IHxfLyBfXFxfXyAgIFxcICAgfFxuICAgICB8ICAgfF9fXy9cXF8gIFxcX19fX19fXy8gIF8vXFxfX198ICAgfFxuICAgIC8gICAvX19fLyAgIFxcX19fXFxfX18vX19fLyAgIFxcX19fXFwgICBcXFxuICAgLyAgICB8ICAgfCAgICAgICB8ICAgfCAgICAgICB8ICAgfCAgICBcXFxuICAvICAgICB8ICAgfF8gICAgICB8ICAgfCAgICAgIF98ICAgfCAgICAgXFxcbiB8X19fICAgfF9fX3xfXFwgICBfL3xfX198XFxfICAgL198X19ffCAgIF9fX3xcbiB8XyAgXFwgICAgfCAgIHxcXCAvICB8X19ffCAgXFwgL3wgICB8ICAgIC8gIF98XG4gfHx8IHwgICAgfCAgIHwgfCAgX19fX19fXyAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8IHwgIFxcX19fX18vICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgICBfX18gICAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8IHwgICAgICAgICAgIHwgfCAgIHwgICAgfCB8fHxcbiB8fHwgfCAgICB8ICAgfCB8ICAgICAgICAgICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgICAgICAgICAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8XFx8ICAgICAgICAgICB8L3wgICB8ICAgIHwgfHx8XG4gXFx8fF98X19fX3xfX198LVxcX19fX19fX19fX18vLXxfX198X19fX3xffHwvXG5cbiAgICBjeWJlcnRyb25jaHJvbmljbGUuZnJlZXdlYnNwYWNlLmNvbSAgICovXG5cbmV4cG9ydCBkZWZhdWx0IE1lZ2F0cm9uO1xuXG4vKiBUT0RPOiBiZW5jaG1hcmsgdGhpcyBpcyBuZWVkZWQgYXQgYWxsXG4vLyBpbnN0ZWFkIG9mIGNoZWNraW5nIGluc3RhbmNlb2YgZWFjaCB0aW1lIGFuZCByZW5kZXIgcG90ZW50aWFsbHkgdHdpY2Vcbi8vIHVzZSBhIG1hcCB0byByZXRyaWV2ZSBub2RlcyBmcm9tIGEgZ2VuZXJpYyBpdGVtXG5cbmltcG9ydCB7TWFwfSBmcm9tICcuLi9zaGFyZWQvcG9vcmx5ZmlsbHMuanMnO1xuY29uc3QgZ2V0ID0gKG1hcCwgbm9kZSkgPT4gbWFwLmdldChub2RlKSB8fCBzZXQobWFwLCBub2RlKTtcbmNvbnN0IHNldCA9IChtYXAsIG5vZGUpID0+IHtcbiAgY29uc3QgdmFsdWUgPSB1dGlscy5nZXROb2RlKG5vZGUpO1xuICBtYXAuc2V0KG5vZGUsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuKi9cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9NZWdhdHJvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgaW50ZW50cyA9IHt9O1xuY29uc3Qga2V5cyA9IFtdO1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBpbnRlbnRzLmhhc093blByb3BlcnR5O1xuXG5sZXQgbGVuZ3RoID0gMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8vIGh5cGVySFRNTC5kZWZpbmUoJ2ludGVudCcsIChvYmplY3QsIHVwZGF0ZSkgPT4gey4uLn0pXG4gIC8vIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIHRoaXJkIHBhcnRzIHVwZGF0ZSBtZWNoYW5pc21cbiAgLy8gd2hlbiBldmVyeSBvdGhlciBrbm93biBtZWNoYW5pc20gZmFpbGVkLlxuICAvLyBoeXBlci5kZWZpbmUoJ3VzZXInLCBpbmZvID0+IGluZm8ubmFtZSk7XG4gIC8vIGh5cGVyKG5vZGUpYDxwPiR7e3VzZXJ9fTwvcD5gO1xuICBkZWZpbmU6IChpbnRlbnQsIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKCEoaW50ZW50IGluIGludGVudHMpKSB7XG4gICAgICBsZW5ndGggPSBrZXlzLnB1c2goaW50ZW50KTtcbiAgICB9XG4gICAgaW50ZW50c1tpbnRlbnRdID0gY2FsbGJhY2s7XG4gIH0sXG5cbiAgLy8gdGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IGFzIGxhc3QgcmVzb3J0XG4gIC8vIHRvIHJldHJpZXZlIGEgdmFsdWUgb3V0IG9mIGFuIG9iamVjdFxuICBpbnZva2U6IChvYmplY3QsIGNhbGxiYWNrKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGludGVudHNba2V5XShvYmplY3Rba2V5XSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9JbnRlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWFwLCBXZWFrTWFwfSBmcm9tICcuLi9zaGFyZWQvcG9vcmx5ZmlsbHMuanMnO1xuaW1wb3J0IHtVSURDfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzLmpzJztcbmltcG9ydCBVcGRhdGVzIGZyb20gJy4uL29iamVjdHMvVXBkYXRlcy5qcyc7XG5pbXBvcnQge1xuICBjcmVhdGVGcmFnbWVudCxcbiAgaW1wb3J0Tm9kZSxcbiAgdW5pcXVlXG59IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5cbi8vIGEgd2VhayBjb2xsZWN0aW9uIG9mIGNvbnRleHRzIHRoYXRcbi8vIGFyZSBhbHJlYWR5IGtub3duIHRvIGh5cGVySFRNTFxuY29uc3QgYmV3aXRjaGVkID0gbmV3IFdlYWtNYXA7XG5cbi8vIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCB0ZW1wbGF0ZSBsaXRlcmFsc1xuLy8gc2luY2UgdGhlc2UgYXJlIHVuaXF1ZSBhbmQgaW1tdXRhYmxlXG4vLyBmb3IgdGhlIHdob2xlIGFwcGxpY2F0aW9uIGxpZmUtY3ljbGVcbmNvbnN0IHRlbXBsYXRlcyA9IG5ldyBNYXA7XG5cbi8vIGJldHRlciBrbm93biBhcyBoeXBlci5iaW5kKG5vZGUpLCB0aGUgcmVuZGVyIGlzXG4vLyB0aGUgbWFpbiB0YWcgZnVuY3Rpb24gaW4gY2hhcmdlIG9mIGZ1bGx5IHVwZ3JhZGluZ1xuLy8gb3Igc2ltcGx5IHVwZGF0aW5nLCBjb250ZXh0cyB1c2VkIGFzIGh5cGVySFRNTCB0YXJnZXRzLlxuLy8gVGhlIGB0aGlzYCBjb250ZXh0IGlzIGVpdGhlciBhIHJlZ3VsYXIgRE9NIG5vZGUgb3IgYSBmcmFnbWVudC5cbmZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSkge1xuICBjb25zdCB3aWNrZWQgPSBiZXdpdGNoZWQuZ2V0KHRoaXMpO1xuICBpZiAod2lja2VkICYmIHdpY2tlZC50ZW1wbGF0ZSA9PT0gdW5pcXVlKHRlbXBsYXRlKSkge1xuICAgIHVwZGF0ZS5hcHBseSh3aWNrZWQudXBkYXRlcywgYXJndW1lbnRzKTtcbiAgfSBlbHNlIHtcbiAgICB1cGdyYWRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIGFuIHVwZ3JhZGUgaXMgaW4gY2hhcmdlIG9mIGNvbGxlY3RpbmcgdGVtcGxhdGUgaW5mbyxcbi8vIHBhcnNlIGl0IG9uY2UsIGlmIHVua25vd24sIHRvIG1hcCBhbGwgaW50ZXJwb2xhdGlvbnNcbi8vIGFzIHNpbmdsZSBET00gY2FsbGJhY2tzLCByZWxhdGUgc3VjaCB0ZW1wbGF0ZVxuLy8gdG8gdGhlIGN1cnJlbnQgY29udGV4dCwgYW5kIHJlbmRlciBpdCBhZnRlciBjbGVhbmluZyB0aGUgY29udGV4dCB1cFxuZnVuY3Rpb24gdXBncmFkZSh0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHVuaXF1ZSh0ZW1wbGF0ZSk7XG4gIGNvbnN0IGluZm8gPSAgdGVtcGxhdGVzLmdldCh0ZW1wbGF0ZSkgfHxcbiAgICAgICAgICAgICAgICBjcmVhdGVUZW1wbGF0ZS5jYWxsKHRoaXMsIHRlbXBsYXRlKTtcbiAgY29uc3QgZnJhZ21lbnQgPSBpbXBvcnROb2RlKHRoaXMub3duZXJEb2N1bWVudCwgaW5mby5mcmFnbWVudCk7XG4gIGNvbnN0IHVwZGF0ZXMgPSBVcGRhdGVzLmNyZWF0ZShmcmFnbWVudCwgaW5mby5wYXRocyk7XG4gIGJld2l0Y2hlZC5zZXQodGhpcywge3RlbXBsYXRlLCB1cGRhdGVzfSk7XG4gIHVwZGF0ZS5hcHBseSh1cGRhdGVzLCBhcmd1bWVudHMpO1xuICB0aGlzLnRleHRDb250ZW50ID0gJyc7XG4gIHRoaXMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG4vLyBhbiB1cGRhdGUgc2ltcGx5IGxvb3BzIG92ZXIgYWxsIG1hcHBlZCBET00gb3BlcmF0aW9uc1xuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdGhpc1tpIC0gMV0oYXJndW1lbnRzW2ldKTtcbiAgfVxufVxuXG4vLyBhIHRlbXBsYXRlIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XG4vLyBhd2FyZSBvZiBhbGwgaW50ZXJwb2xhdGlvbnMgYW5kIHdpdGggYSBsaXN0XG4vLyBvZiBwYXRocyB1c2VkIHRvIGZpbmQgb25jZSB0aG9zZSBub2RlcyB0aGF0IG5lZWQgdXBkYXRlcyxcbi8vIG5vIG1hdHRlciBpZiB0aGVzZSBhcmUgYXR0cmlidXRlcywgdGV4dCBub2Rlcywgb3IgcmVndWxhciBvbmVcbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHBhdGhzID0gW107XG4gIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQodGhpcywgdGVtcGxhdGUuam9pbihVSURDKSk7XG4gIFVwZGF0ZXMuZmluZChmcmFnbWVudCwgcGF0aHMsIHRlbXBsYXRlLnNsaWNlKCkpO1xuICBjb25zdCBpbmZvID0ge2ZyYWdtZW50LCBwYXRoc307XG4gIHRlbXBsYXRlcy5zZXQodGVtcGxhdGUsIGluZm8pO1xuICByZXR1cm4gaW5mbztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci9yZW5kZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xuZXhwb3J0IHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gICAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICAgKlxuICAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAgICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gICAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAgICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICAgKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAgICovXG59O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXG5cdFx0ZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uID0ge1xyXG4gIGRlZmF1bHRJbWFnZVVybDogJ2ltYWdlcy83LWNvbG9yZnVsLXBob3RvZ3JhcGh5LmpwZycsXHJcbiAgZGVmYXVsdENvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlLllDYkNyLFxyXG4gIGRlZmF1bHRDb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuc1JHQigpXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVkVSU0lPTl9TVEFSVEVEID0gJ0NPTlZFUlNJT05fU1RBUlRFRCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVyc2lvblN0YXJ0ZWQoKTogQWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ09OVkVSU0lPTl9TVEFSVEVEXHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclBvaW50IH0gZnJvbSAnbW9kZWxzL0NvbG9yUG9pbnQnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSB9IGZyb20gJ21vZGVscy9JbGx1bWluYW50VHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lMTFVNSU5BTlRfVFlQRSA9ICdDSEFOR0VfSUxMVU1JTkFOVF9UWVBFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VJbGx1bWluYW50VHlwZShpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUsIHdoaXRlUG9pbnQ6IENvbG9yUG9pbnQpOiBBbnlBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDSEFOR0VfSUxMVU1JTkFOVF9UWVBFLFxyXG4gICAgaWxsdW1pbmFudFR5cGUsXHJcbiAgICB3aGl0ZVBvaW50XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2lucHV0L2NoYW5nZUlsbHVtaW5hbnRUeXBlLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JTcGFjZVR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRSA9ICdDSEFOR0VfU0VMRUNURURfQ09MT1JfU1BBQ0UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2VBY3Rpb24gZXh0ZW5kcyBBbnlBY3Rpb24ge1xyXG4gIGNvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlKFxyXG4gIGNvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlXHJcbik6IENoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRSxcclxuICAgIGNvbG9yU3BhY2VcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlLnRzIiwiaW1wb3J0IHsgQ29sb3JQb2ludCB9IGZyb20gJ21vZGVscy9Db2xvclBvaW50JztcclxuaW1wb3J0IHsgTGFiZWxlZFZhbHVlIH0gZnJvbSAndXRpbHMvTGFiZWxlZFZhbHVlJztcclxuXHJcbmV4cG9ydCBlbnVtIElsbHVtaW5hbnRUeXBlIHtcclxuICBBLFxyXG4gIEIsXHJcbiAgQyxcclxuICBENTAsXHJcbiAgRDU1LFxyXG4gIEQ2NSxcclxuICBENzUsXHJcbiAgRSxcclxuICBGMixcclxuICBGNyxcclxuICBGMTEsXHJcbiAgQ3VzdG9tXHJcbn1cclxuXHJcbmludGVyZmFjZSBQcmVkZWZpbmVkSWxsdW1pbmFudCB7XHJcbiAgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlO1xyXG4gIHdoaXRlUG9pbnQoKTogQ29sb3JQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByZWRlZmluZWRJbGx1bWluYW50czogUHJlZGVmaW5lZElsbHVtaW5hbnRbXSA9IFtcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5BLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjQ0NzU3LCB5OiAwLjQwNzMzIH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuQiwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zNDg0LCB5OiAwLjM1MTYgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5DLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjMxMDA2LCB5OiAwLjMxNjE1IH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRDUwLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjM0NTY3LCB5OiAwLjM1ODUgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5ENTUsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzMyNDIsIHk6IDAuMzQ3NDMgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5ENjUsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzEyNzMsIHk6IDAuMzI5MDIgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5ENzUsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMjk5MDIsIHk6IDAuMzE0ODUgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5FLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjMzMzMzLCB5OiAwLjMzMzMzIH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRjIsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzcyMDcsIHk6IDAuMzc1MTIgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5GNywgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zMTI4NSwgeTogMC4zMjkxOCB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkYxMSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zODA1NCwgeTogMC4zNzY5MSB9KSB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbGFiZWxlZElsbHVtaW5hbnRzOiBMYWJlbGVkVmFsdWU8SWxsdW1pbmFudFR5cGU+W10gPSBbXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuQSwgbGFiZWw6ICdBJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkIsIGxhYmVsOiAnQicgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5DLCBsYWJlbDogJ0MnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRDUwLCBsYWJlbDogJ0Q1MCcgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5ENTUsIGxhYmVsOiAnRDU1JyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkQ2NSwgbGFiZWw6ICdENjUnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRDc1LCBsYWJlbDogJ0Q3NScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5FLCBsYWJlbDogJ0UnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRjIsIGxhYmVsOiAnRjInIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRjcsIGxhYmVsOiAnRjcnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRjExLCBsYWJlbDogJ0YxMScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5DdXN0b20sIGxhYmVsOiAnQ3VzdG9tJyB9XHJcbl07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9JbGx1bWluYW50VHlwZS50cyIsImltcG9ydCB7IHdpcmUgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmltcG9ydCB7IExhYmVsZWRWYWx1ZSB9IGZyb20gJ3V0aWxzL0xhYmVsZWRWYWx1ZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFiZWxlZFNlbGVjdChcclxuICBpZDogc3RyaW5nLFxyXG4gIG9wdGlvbnM6IExhYmVsZWRWYWx1ZTxudW1iZXI+W10sXHJcbiAgc2VsZWN0ZWRPcHRpb246IG51bWJlcixcclxuICBvbkNoYW5nZTogKG5ld1ZhbHVlOiBudW1iZXIpID0+IHZvaWRcclxuKSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBcclxuICAgIDxzZWxlY3QgaWQ9JHtpZH0gb25jaGFuZ2U9JHsoZXZlbnQ6IEV2ZW50KSA9PiBvbkNoYW5nZShnZXRWYWx1ZUZyb21TZWxlY3RFdmVudChvcHRpb25zLCBldmVudCkpfT5cclxuICAgICAgJHtvcHRpb25zLm1hcChvcHRpb24gPT4gTGFiZWxlZE9wdGlvbihvcHRpb24sIHNlbGVjdGVkT3B0aW9uKSl9XHJcbiAgICA8L3NlbGVjdD5cclxuICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYWJlbGVkT3B0aW9uPFQ+KGxhYmVsZWRPcHRpb246IExhYmVsZWRWYWx1ZTxUPiwgc2VsZWN0ZWRWYWx1ZTogVCkge1xyXG4gIHJldHVybiB3aXJlKClgXHJcbiAgICA8b3B0aW9uXHJcbiAgICAgIHZhbHVlPSR7bGFiZWxlZE9wdGlvbi52YWx1ZX1cclxuICAgICAgc2VsZWN0ZWQ9JHtsYWJlbGVkT3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlfVxyXG4gICAgPlxyXG4gICAgICAke2xhYmVsZWRPcHRpb24ubGFiZWx9XHJcbiAgICA8L29wdGlvbj5cclxuICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21TZWxlY3RFdmVudChvcHRpb25zOiBMYWJlbGVkVmFsdWU8bnVtYmVyPltdLCBldmVudDogRXZlbnQpIHtcclxuICBjb25zdCBzZWxlY3QgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xyXG4gIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoc2VsZWN0LnZhbHVlLCAxMCk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHZhbHVlKTtcclxuICBpZiAoIXNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdGVkIDxvcHRpb24+IG5vdCBmb3VuZCBpbiBvcHRpb25zIHBhcmFtZXRlcicpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uLnZhbHVlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdC50cyIsImltcG9ydCBBYnN0cmFjdE1hdHJpeCBmcm9tICcuLi9hYnN0cmFjdE1hdHJpeCc7XG5pbXBvcnQgTWF0cml4IGZyb20gJy4uL21hdHJpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyYXBwZXJNYXRyaXgxRCBleHRlbmRzIEFic3RyYWN0TWF0cml4KCkge1xuICAgIC8qKlxuICAgICAqIEBjbGFzcyBXcmFwcGVyTWF0cml4MURcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGRhdGFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLnJvd3MgPSAxXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICByb3dzID0gMVxuICAgICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggJSByb3dzICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBkYXRhIGxlbmd0aCBpcyBub3QgZGl2aXNpYmxlIGJ5IHRoZSBudW1iZXIgb2Ygcm93cycpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGRhdGEubGVuZ3RoIC8gcm93cztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9jYWxjdWxhdGVJbmRleChyb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgICAgICB0aGlzLmRhdGFbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fY2FsY3VsYXRlSW5kZXgocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleF07XG4gICAgfVxuXG4gICAgX2NhbGN1bGF0ZUluZGV4KHJvdywgY29sdW1uKSB7XG4gICAgICAgIHJldHVybiAocm93ICogdGhpcy5jb2x1bW5zKSArIGNvbHVtbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFtTeW1ib2wuc3BlY2llc10oKSB7XG4gICAgICAgIHJldHVybiBNYXRyaXg7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL1dyYXBwZXJNYXRyaXgxRC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEFic3RyYWN0TWF0cml4IGZyb20gJy4uL2Fic3RyYWN0TWF0cml4JztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JhcHBlck1hdHJpeDJEIGV4dGVuZHMgQWJzdHJhY3RNYXRyaXgoKSB7XG4gICAgLyoqXG4gICAgICogQGNsYXNzIFdyYXBwZXJNYXRyaXgyRFxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucm93cyA9IGRhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBkYXRhWzBdLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbcm93SW5kZXhdW2NvbHVtbkluZGV4XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbcm93SW5kZXhdW2NvbHVtbkluZGV4XTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFtTeW1ib2wuc3BlY2llc10oKSB7XG4gICAgICAgIHJldHVybiBNYXRyaXg7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL1dyYXBwZXJNYXRyaXgyRC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtoeXBvdGVudXNlfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzcyBRckRlY29tcG9zaXRpb25cbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sdXR6cm9lZGVyL01hcGFjay9ibG9iL21hc3Rlci9Tb3VyY2UvUXJEZWNvbXBvc2l0aW9uLmNzXG4gKiBAcGFyYW0ge01hdHJpeH0gdmFsdWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXJEZWNvbXBvc2l0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIHFyID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgdmFyIG0gPSB2YWx1ZS5yb3dzO1xuICAgICAgICB2YXIgbiA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICAgIHZhciByZGlhZyA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgdmFyIGksIGosIGssIHM7XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgdmFyIG5ybSA9IDA7XG4gICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbnJtID0gaHlwb3RlbnVzZShucm0sIHFyLmdldChpLCBrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnJtICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHFyLmdldChrLCBrKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnJtID0gLW5ybTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBxci5zZXQoaSwgaywgcXIuZ2V0KGksIGspIC8gbnJtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcXIuc2V0KGssIGssIHFyLmdldChrLCBrKSArIDEpO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGsgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzICs9IHFyLmdldChpLCBrKSAqIHFyLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzID0gLXMgLyBxci5nZXQoaywgayk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHFyLnNldChpLCBqLCBxci5nZXQoaSwgaikgKyBzICogcXIuZ2V0KGksIGspKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJkaWFnW2tdID0gLW5ybTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuUVIgPSBxcjtcbiAgICAgICAgdGhpcy5SZGlhZyA9IHJkaWFnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvbHZlIGEgcHJvYmxlbSBvZiBsZWFzdCBzcXVhcmUgKEF4PWIpIGJ5IHVzaW5nIHRoZSBRUiBkZWNvbXBvc2l0aW9uLiBVc2VmdWwgd2hlbiBBIGlzIHJlY3Rhbmd1bGFyLCBidXQgbm90IHdvcmtpbmcgd2hlbiBBIGlzIHNpbmd1bGFyLlxuICAgICAqIEV4YW1wbGUgOiBXZSBzZWFyY2ggdG8gYXBwcm94aW1hdGUgeCwgd2l0aCBBIG1hdHJpeCBzaGFwZSBtKm4sIHggdmVjdG9yIHNpemUgbiwgYiB2ZWN0b3Igc2l6ZSBtIChtID4gbikuIFdlIHdpbGwgdXNlIDpcbiAgICAgKiB2YXIgcXIgPSBRckRlY29tcG9zaXRpb24oQSk7XG4gICAgICogdmFyIHggPSBxci5zb2x2ZShiKTtcbiAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmFsdWUgLSBNYXRyaXggMUQgd2hpY2ggaXMgdGhlIHZlY3RvciBiIChpbiB0aGUgZXF1YXRpb24gQXggPSBiKVxuICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgdmVjdG9yIHhcbiAgICAgKi9cbiAgICBzb2x2ZSh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdHJpeC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIHFyID0gdGhpcy5RUjtcbiAgICAgICAgdmFyIG0gPSBxci5yb3dzO1xuXG4gICAgICAgIGlmICh2YWx1ZS5yb3dzICE9PSBtKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCByb3cgZGltZW5zaW9ucyBtdXN0IGFncmVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzRnVsbFJhbmsoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgcmFuayBkZWZpY2llbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgdmFyIG4gPSBxci5jb2x1bW5zO1xuICAgICAgICB2YXIgaSwgaiwgaywgcztcblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBxcltpXVtrXSAqIFhbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMgPSAtcyAvIHFyW2tdW2tdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSArPSBzICogcXJbaV1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoayA9IG4gLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBYW2tdW2pdIC89IHRoaXMuUmRpYWdba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSAtPSBYW2tdW2pdICogcXJbaV1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFguc3ViTWF0cml4KDAsIG4gLSAxLCAwLCBjb3VudCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Z1bGxSYW5rKCkge1xuICAgICAgICB2YXIgY29sdW1ucyA9IHRoaXMuUVIuY29sdW1ucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLlJkaWFnW2ldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCB1cHBlclRyaWFuZ3VsYXJNYXRyaXgoKSB7XG4gICAgICAgIHZhciBxciA9IHRoaXMuUVI7XG4gICAgICAgIHZhciBuID0gcXIuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSBuZXcgTWF0cml4KG4sIG4pO1xuICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgaikge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gcXJbaV1bal07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSB0aGlzLlJkaWFnW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgb3J0aG9nb25hbE1hdHJpeCgpIHtcbiAgICAgICAgdmFyIHFyID0gdGhpcy5RUjtcbiAgICAgICAgdmFyIHJvd3MgPSBxci5yb3dzO1xuICAgICAgICB2YXIgY29sdW1ucyA9IHFyLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgdmFyIGksIGosIGssIHM7XG5cbiAgICAgICAgZm9yIChrID0gY29sdW1ucyAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgWFtpXVtrXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYW2tdW2tdID0gMTtcbiAgICAgICAgICAgIGZvciAoaiA9IGs7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocXJba11ba10gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gcXJbaV1ba10gKiBYW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcyA9IC1zIC8gcXJba11ba107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSArPSBzICogcXJbaV1ba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9xci5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICdpbmRleC5zY3NzJztcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBiaW5kIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG53aW5kb3cub25sb2FkID0gYm9vdHN0cmFwO1xyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xyXG4gIGNvbnN0IGFwcGxpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcGxpY2F0aW9uJyk7XHJcblxyXG4gIGlmICghYXBwbGljYXRpb25Db250YWluZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQXBwbGljYXRpb24gY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwbGljYXRpb24oKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cclxuICBiaW5kKGFwcGxpY2F0aW9uQ29udGFpbmVyKWAke2FwcGxpY2F0aW9ufWA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvaW5kZXgudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG4uZm9vdGVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IGFzIEh5cGVyQ29tcG9uZW50IH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5pbXBvcnQgeyBJbWFnZVBpY2tlciB9IGZyb20gJ2NvbXBvbmVudHMvSW1hZ2VQaWNrZXInO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZVBpY2tlciB9IGZyb20gJ2NvbnRhaW5lcnMvQ29sb3JTcGFjZVBpY2tlcic7XHJcbmltcG9ydCB7IE9yaWdpbmFsSW1hZ2VEaXNwbGF5IH0gZnJvbSAnY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheSc7XHJcbmltcG9ydCB7IFJlc3VsdHNEaXNwbGF5IH0gZnJvbSAnY29udGFpbmVycy9SZXN1bHRzRGlzcGxheSc7XHJcbmltcG9ydCB7IFN0YXJ0Q29udmVyc2lvbkJ1dHRvbiB9IGZyb20gJ2NvbnRhaW5lcnMvU3RhcnRDb252ZXJzaW9uQnV0dG9uJztcclxuXHJcbmltcG9ydCB7IGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VMb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlT3JpZ2luYWxJbWFnZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzQm94IH0gZnJvbSAnY29udGFpbmVycy9Db252ZXJzaW9uUGFyYW1ldGVyc0JveCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBIeXBlckNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZVBpY2tlcjogSW1hZ2VQaWNrZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBvcmlnaW5hbEltYWdlRGlzcGxheTogT3JpZ2luYWxJbWFnZURpc3BsYXk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb2xvclNwYWNlUGlja2VyOiBDb2xvclNwYWNlUGlja2VyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udmVyc2lvblBhcmFtZXRlckJveDogQ29udmVyc2lvblBhcmFtZXRlcnNCb3g7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFydENvbnZlcnNpb25CdXR0b246IFN0YXJ0Q29udmVyc2lvbkJ1dHRvbjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlc3VsdHNEaXNwbGF5OiBSZXN1bHRzRGlzcGxheTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuaW1hZ2VQaWNrZXIgPSBuZXcgSW1hZ2VQaWNrZXIoKTtcclxuICAgIHRoaXMub3JpZ2luYWxJbWFnZURpc3BsYXkgPSBuZXcgT3JpZ2luYWxJbWFnZURpc3BsYXkoKTtcclxuICAgIHRoaXMuY29sb3JTcGFjZVBpY2tlciA9IG5ldyBDb2xvclNwYWNlUGlja2VyKCk7XHJcbiAgICB0aGlzLmNvbnZlcnNpb25QYXJhbWV0ZXJCb3ggPSBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnNCb3goKTtcclxuICAgIHRoaXMuc3RhcnRDb252ZXJzaW9uQnV0dG9uID0gbmV3IFN0YXJ0Q29udmVyc2lvbkJ1dHRvbigpO1xyXG4gICAgdGhpcy5yZXN1bHRzRGlzcGxheSA9IG5ldyBSZXN1bHRzRGlzcGxheSgpO1xyXG5cclxuICAgIHRoaXMubG9hZERlZmF1bHRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+Q29sb3IgY29udmVydGVyPC9oMT5cclxuICAgICAgICAke3RoaXMuaW1hZ2VQaWNrZXJ9XHJcbiAgICAgICAgJHt0aGlzLm9yaWdpbmFsSW1hZ2VEaXNwbGF5fVxyXG4gICAgICAgICR7dGhpcy5jb2xvclNwYWNlUGlja2VyfVxyXG4gICAgICAgICR7dGhpcy5jb252ZXJzaW9uUGFyYW1ldGVyQm94fVxyXG4gICAgICAgICR7dGhpcy5zdGFydENvbnZlcnNpb25CdXR0b259XHJcbiAgICAgICAgJHt0aGlzLnJlc3VsdHNEaXNwbGF5fVxyXG5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+Q3JlYXRlZCBieSBHcnplZ29yeiBSb3pkemlhbGlrIEAgMjAxNzwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGxvYWREZWZhdWx0SW1hZ2UoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0SW1hZ2VVcmwgPSBjb25maWd1cmF0aW9uLmRlZmF1bHRJbWFnZVVybDtcclxuXHJcbiAgICBjb25zdCBpbWFnZUxvYWRlciA9IG5ldyBJbWFnZUxvYWRlcigpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBpbWFnZUxvYWRlci5sb2FkSW1hZ2UoZGVmYXVsdEltYWdlVXJsKTtcclxuXHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmlnaW5hbEltYWdlKGltYWdlKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL0FwcGxpY2F0aW9uLnRzIiwiaW1wb3J0IHtjcmVhdGUsIGZyYWdtZW50LCB0ZXh0fSBmcm9tICcuL2Vhc3ktZG9tLmpzJztcblxuY29uc3QgdGVzdEZyYWdtZW50ID0gZnJhZ21lbnQoZG9jdW1lbnQpO1xuXG4vLyBET000IG5vZGUuYXBwZW5kKC4uLm1hbnkpXG5leHBvcnQgY29uc3QgaGFzQXBwZW5kID0gJ2FwcGVuZCcgaW4gdGVzdEZyYWdtZW50O1xuXG4vLyBkZXRlY3Qgb2xkIGJyb3dzZXJzIHdpdGhvdXQgSFRNTFRlbXBsYXRlRWxlbWVudCBjb250ZW50IHN1cHBvcnRcbmV4cG9ydCBjb25zdCBoYXNDb250ZW50ID0gJ2NvbnRlbnQnIGluIGNyZWF0ZShkb2N1bWVudCwgJ3RlbXBsYXRlJyk7XG5cbi8vIElFIDExIGhhcyBwcm9ibGVtcyB3aXRoIGNsb25pbmcgdGVtcGxhdGVzOiBpdCBcImZvcmdldHNcIiBlbXB0eSBjaGlsZE5vZGVzXG50ZXN0RnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dCh0ZXN0RnJhZ21lbnQsICdnJykpO1xudGVzdEZyYWdtZW50LmFwcGVuZENoaWxkKHRleHQodGVzdEZyYWdtZW50LCAnJykpO1xuZXhwb3J0IGNvbnN0IGhhc0Rvb21lZENsb25lTm9kZSA9IHRlc3RGcmFnbWVudC5jbG9uZU5vZGUodHJ1ZSkuY2hpbGROb2Rlcy5sZW5ndGggPT09IDE7XG5cbi8vIG9sZCBicm93c2VycyBuZWVkIHRvIGZhbGxiYWNrIHRvIGNsb25lTm9kZVxuLy8gQ3VzdG9tIEVsZW1lbnRzIFYwIGFuZCBWMSB3aWxsIHdvcmsgcG9seWZpbGxlZFxuLy8gYnV0IG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgbmVlZCBpbXBvcnROb2RlIGluc3RlYWRcbi8vIChzcGVjaWFsbHkgQ2hyb21pdW0gYW5kIGl0cyBvbGQgVjAgaW1wbGVtZW50YXRpb24pXG5leHBvcnQgY29uc3QgaGFzSW1wb3J0Tm9kZSA9ICdpbXBvcnROb2RlJyBpbiBkb2N1bWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2ZlYXR1cmVzLWRldGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtzbGljZSwgc3BsaWNlfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHVwZGF0ZTogKFxuICAgIHV0aWxzLCBwYXJlbnROb2RlLCBjb21tZW50Tm9kZSxcbiAgICBsaXZlTm9kZXMsIGxpdmVTdGFydCwgbGl2ZUVuZCwgbGl2ZUxlbmd0aCxcbiAgICB2aXJ0dWFsTm9kZXMsIHZpcnR1YWxTdGFydCwgdmlydHVhbEVuZCAvKiwgdmlydHVhbExlbmd0aCAqL1xuICApID0+IHtcbiAgICB3aGlsZSAobGl2ZVN0YXJ0IDwgbGl2ZUVuZCAmJiB2aXJ0dWFsU3RhcnQgPCB2aXJ0dWFsRW5kKSB7XG4gICAgICBjb25zdCBsaXZlVmFsdWUgPSBsaXZlTm9kZXNbbGl2ZVN0YXJ0XTtcbiAgICAgIGNvbnN0IHZpcnR1YWxWYWx1ZSA9IHZpcnR1YWxOb2Rlc1t2aXJ0dWFsU3RhcnRdO1xuICAgICAgY29uc3Qgc3RhdHVzID0gbGl2ZVZhbHVlID09PSB2aXJ0dWFsVmFsdWUgP1xuICAgICAgICAgICAgICAgICAgICAgIDAgOiAobGl2ZU5vZGVzLmluZGV4T2YodmlydHVhbFZhbHVlKSA8IDAgPyAxIDogLTEpO1xuICAgICAgLy8gbm9kZXMgY2FuIGJlIGVpdGhlciByZW1vdmVkIC4uLlxuICAgICAgaWYgKHN0YXR1cyA8IDApIHtcbiAgICAgICAgc3BsaWNlLmNhbGwobGl2ZU5vZGVzLCBsaXZlU3RhcnQsIDEpO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHV0aWxzLmdldE5vZGUobGl2ZVZhbHVlKSk7XG4gICAgICAgIGxpdmVFbmQtLTtcbiAgICAgICAgbGl2ZUxlbmd0aC0tO1xuICAgICAgfVxuICAgICAgLy8gLi4uIGFwcGVuZGVkIC4uLlxuICAgICAgZWxzZSBpZiAoMCA8IHN0YXR1cykge1xuICAgICAgICBzcGxpY2UuY2FsbChsaXZlTm9kZXMsIGxpdmVTdGFydCwgMCwgdmlydHVhbFZhbHVlKTtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodXRpbHMuZ2V0Tm9kZSh2aXJ0dWFsVmFsdWUpLCB1dGlscy5nZXROb2RlKGxpdmVWYWx1ZSkpO1xuICAgICAgICBsaXZlU3RhcnQrKztcbiAgICAgICAgbGl2ZUVuZCsrO1xuICAgICAgICBsaXZlTGVuZ3RoKys7XG4gICAgICAgIHZpcnR1YWxTdGFydCsrO1xuICAgICAgfVxuICAgICAgLy8gLi4uIG9yIGlnbm9yZWQsIHNpbmNlIGl0J3MgdGhlIHNhbWUgLi4uXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGl2ZVN0YXJ0Kys7XG4gICAgICAgIHZpcnR1YWxTdGFydCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGl2ZVN0YXJ0IDwgbGl2ZUVuZCkge1xuICAgICAgY29uc3QgcmVtb3ZlID0gc3BsaWNlLmNhbGwobGl2ZU5vZGVzLCBsaXZlU3RhcnQsIGxpdmVFbmQgLSBsaXZlU3RhcnQpO1xuICAgICAgbGl2ZVN0YXJ0ID0gcmVtb3ZlLmxlbmd0aDtcbiAgICAgIHdoaWxlIChsaXZlU3RhcnQtLSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHV0aWxzLmdldE5vZGUocmVtb3ZlW2xpdmVTdGFydF0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZpcnR1YWxTdGFydCA8IHZpcnR1YWxFbmQpIHtcbiAgICAgIHNwbGljZS5hcHBseShcbiAgICAgICAgbGl2ZU5vZGVzLFxuICAgICAgICBbbGl2ZUVuZCwgMF0uY29uY2F0KFxuICAgICAgICAgIHV0aWxzLmluc2VydChcbiAgICAgICAgICAgIHBhcmVudE5vZGUsXG4gICAgICAgICAgICBzbGljZS5jYWxsKHZpcnR1YWxOb2RlcywgdmlydHVhbFN0YXJ0LCB2aXJ0dWFsRW5kKSxcbiAgICAgICAgICAgIGxpdmVFbmQgPCBsaXZlTGVuZ3RoID9cbiAgICAgICAgICAgICAgdXRpbHMuZ2V0Tm9kZShsaXZlTm9kZXNbbGl2ZUVuZF0pIDogY29tbWVudE5vZGVcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9FbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7RUxFTUVOVF9OT0RFLCBTVkdfTkFNRVNQQUNFfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7V2Vha01hcCwgdHJpbX0gZnJvbSAnLi4vc2hhcmVkL3Bvb3JseWZpbGxzLmpzJztcbmltcG9ydCB7ZnJhZ21lbnR9IGZyb20gJy4uL3NoYXJlZC9lYXN5LWRvbS5qcyc7XG5pbXBvcnQge2FwcGVuZCwgc2xpY2UsIHVuaXF1ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXIuanMnO1xuXG4vLyBhbGwgd2lyZXMgdXNlZCBwZXIgZWFjaCBjb250ZXh0XG5jb25zdCB3aXJlcyA9IG5ldyBXZWFrTWFwO1xuXG4vLyBBIHdpcmUgaXMgYSBjYWxsYmFjayB1c2VkIGFzIHRhZyBmdW5jdGlvblxuLy8gdG8gbGF6aWx5IHJlbGF0ZSBhIGdlbmVyaWMgb2JqZWN0IHRvIGEgdGVtcGxhdGUgbGl0ZXJhbC5cbi8vIGh5cGVyLndpcmUodXNlcilgPGRpdiBpZD11c2VyPiR7dXNlci5uYW1lfTwvZGl2PmA7ID0+IHRoZSBkaXYjdXNlclxuLy8gVGhpcyBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBoYXZlIGEgdW5pcXVlIERPTSBzdHJ1Y3R1cmVcbi8vIHJlbGF0ZWQgdG8gYSB1bmlxdWUgSlMgb2JqZWN0IHRocm91Z2ggYSByZXVzYWJsZSB0ZW1wbGF0ZSBsaXRlcmFsLlxuLy8gQSB3aXJlIGNhbiBzcGVjaWZ5IGEgdHlwZSwgYXMgc3ZnIG9yIGh0bWwsIGFuZCBhbHNvIGFuIGlkXG4vLyB2aWEgaHRtbDppZCBvciA6aWQgY29udmVudGlvbi4gU3VjaCA6aWQgYWxsb3dzIHNhbWUgSlMgb2JqZWN0c1xuLy8gdG8gYmUgYXNzb2NpYXRlZCB0byBkaWZmZXJlbnQgRE9NIHN0cnVjdHVyZXMgYWNjb3JkaW5nbHkgd2l0aFxuLy8gdGhlIHVzZWQgdGVtcGxhdGUgbGl0ZXJhbCB3aXRob3V0IGxvc2luZyBwcmV2aW91c2x5IHJlbmRlcmVkIHBhcnRzLlxuY29uc3Qgd2lyZSA9IChvYmosIHR5cGUpID0+IG9iaiA9PSBudWxsID9cbiAgY29udGVudCh0eXBlIHx8ICdodG1sJykgOlxuICB3ZWFrbHkob2JqLCB0eXBlIHx8ICdodG1sJyk7XG5cbi8vIEEgd2lyZSBjb250ZW50IGlzIGEgdmlydHVhbCByZWZlcmVuY2UgdG8gb25lIG9yIG1vcmUgbm9kZXMuXG4vLyBJdCdzIHJlcHJlc2VudGVkIGJ5IGVpdGhlciBhIERPTSBub2RlLCBvciBhbiBBcnJheS5cbi8vIEluIGJvdGggY2FzZXMsIHRoZSB3aXJlIGNvbnRlbnQgcm9sZSBpcyB0byBzaW1wbHkgdXBkYXRlXG4vLyBhbGwgbm9kZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiByZWxhdGVkIGNhbGxiYWNrcy5cbi8vIEluIGZldyB3b3JkcywgYSB3aXJlIGNvbnRlbnQgaXMgbGlrZSBhbiBpbnZpc2libGUgcGFyZW50IG5vZGVcbi8vIGluIGNoYXJnZSBvZiB1cGRhdGluZyBpdHMgY29udGVudCBsaWtlIGEgYm91bmQgZWxlbWVudCB3b3VsZCBkby5cbmNvbnN0IGNvbnRlbnQgPSB0eXBlID0+IHtcbiAgbGV0IHdpcmUsIGNvbnRhaW5lciwgY29udGVudCwgdGVtcGxhdGUsIHVwZGF0ZXM7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGljcykge1xuICAgIHN0YXRpY3MgPSB1bmlxdWUoc3RhdGljcyk7XG4gICAgbGV0IHNldHVwID0gdGVtcGxhdGUgIT09IHN0YXRpY3M7XG4gICAgaWYgKHNldHVwKSB7XG4gICAgICB0ZW1wbGF0ZSA9IHN0YXRpY3M7XG4gICAgICBjb250ZW50ID0gZnJhZ21lbnQoZG9jdW1lbnQpO1xuICAgICAgY29udGFpbmVyID0gdHlwZSA9PT0gJ3N2ZycgP1xuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ3N2ZycpIDpcbiAgICAgICAgY29udGVudDtcbiAgICAgIHVwZGF0ZXMgPSByZW5kZXIuYmluZChjb250YWluZXIpO1xuICAgIH1cbiAgICB1cGRhdGVzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHNldHVwKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgYXBwZW5kKGNvbnRlbnQsIHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpKTtcbiAgICAgIH1cbiAgICAgIHdpcmUgPSB3aXJlQ29udGVudChjb250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpcmU7XG4gIH07XG59O1xuXG4vLyB3aXJlcyBhcmUgd2Vha2x5IGNyZWF0ZWQgdGhyb3VnaCBvYmplY3RzLlxuLy8gRWFjaCBvYmplY3QgY2FuIGhhdmUgbXVsdGlwbGUgd2lyZXMgYXNzb2NpYXRlZFxuLy8gYW5kIHRoaXMgaXMgdGhhbmtzIHRvIHRoZSB0eXBlICsgOmlkIGZlYXR1cmUuXG5jb25zdCB3ZWFrbHkgPSAob2JqLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGkgPSB0eXBlLmluZGV4T2YoJzonKTtcbiAgbGV0IHdpcmUgPSB3aXJlcy5nZXQob2JqKTtcbiAgbGV0IGlkID0gdHlwZTtcbiAgaWYgKC0xIDwgaSkge1xuICAgIGlkID0gdHlwZS5zbGljZShpICsgMSk7XG4gICAgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkgfHwgJ2h0bWwnO1xuICB9XG4gIGlmICghd2lyZSkgd2lyZXMuc2V0KG9iaiwgd2lyZSA9IHt9KTtcbiAgcmV0dXJuIHdpcmVbaWRdIHx8ICh3aXJlW2lkXSA9IGNvbnRlbnQodHlwZSkpO1xufTtcblxuLy8gYSBkb2N1bWVudCBmcmFnbWVudCBsb3NlcyBpdHMgbm9kZXMgYXMgc29vblxuLy8gYXMgaXQncyBhcHBlbmRlZCBpbnRvIGFub3RoZXIgbm9kZS5cbi8vIFRoaXMgd291bGQgZWFzaWx5IGxvc2Ugd2lyZWQgY29udGVudFxuLy8gc28gdGhhdCBvbiBhIHNlY29uZCByZW5kZXIgY2FsbCwgdGhlIHBhcmVudFxuLy8gbm9kZSB3b3VsZG4ndCBrbm93IHdoaWNoIG5vZGUgd2FzIHRoZXJlXG4vLyBhc3NvY2lhdGVkIHRvIHRoZSBpbnRlcnBvbGF0aW9uLlxuLy8gVG8gcHJldmVudCBoeXBlckhUTUwgdG8gZm9yZ2V0IGFib3V0IHdpcmVkIG5vZGVzLFxuLy8gdGhlc2UgYXJlIGVpdGhlciByZXR1cm5lZCBhcyBBcnJheSBvciwgaWYgdGhlcmUncyBvbnkgb25lIGVudHJ5LFxuLy8gYXMgc2luZ2xlIHJlZmVyZW5jZWQgbm9kZSB0aGF0IHdvbid0IGRpc2FwcGVhciBmcm9tIHRoZSBmcmFnbWVudC5cbi8vIFRoZSBpbml0aWFsIGZyYWdtZW50LCBhdCB0aGlzIHBvaW50LCB3b3VsZCBiZSB1c2VkIGFzIHVuaXF1ZSByZWZlcmVuY2UuXG5jb25zdCB3aXJlQ29udGVudCA9IG5vZGUgPT4ge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICBjb25zdCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgY29uc3Qgd2lyZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGROb2Rlc1tpXTtcbiAgICBpZiAoXG4gICAgICBjaGlsZC5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8XG4gICAgICB0cmltLmNhbGwoY2hpbGQudGV4dENvbnRlbnQpLmxlbmd0aCAhPT0gMFxuICAgICkge1xuICAgICAgd2lyZS5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdpcmUubGVuZ3RoID09PSAxID8gd2lyZVswXSA6IHdpcmU7XG59O1xuXG5leHBvcnQge2NvbnRlbnQsIHdlYWtseX07XG5leHBvcnQgZGVmYXVsdCB3aXJlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci93aXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICBDT05ORUNURUQsIERJU0NPTk5FQ1RFRCxcbiAgQ09NTUVOVF9OT0RFLCBET0NVTUVOVF9GUkFHTUVOVF9OT0RFLCBFTEVNRU5UX05PREUsIFRFWFRfTk9ERSxcbiAgT1dORVJfU1ZHX0VMRU1FTlQsXG4gIFNIT1VMRF9VU0VfVEVYVF9DT05URU5ULFxuICBVSUQsIFVJRENcbn0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy5qcyc7XG5cbmltcG9ydCBNZWdhdHJvbiBmcm9tICcuLi9jbGFzc2VzL01lZ2F0cm9uLmpzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQuanMnO1xuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoLmpzJztcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlLmpzJztcbmltcG9ydCBJbnRlbnQgZnJvbSAnLi9JbnRlbnQuanMnO1xuaW1wb3J0IHt0ZXh0fSBmcm9tICcuLi9zaGFyZWQvZWFzeS1kb20uanMnO1xuaW1wb3J0IHtFdmVudCwgV2Vha1NldCwgaXNBcnJheSwgdHJpbX0gZnJvbSAnLi4vc2hhcmVkL3Bvb3JseWZpbGxzLmpzJztcbmltcG9ydCB7Y3JlYXRlRnJhZ21lbnQsIHNsaWNlfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuXG4vLyBoeXBlci5Db21wb25lbnQgaGF2ZSBhIGNvbm5lY3RlZC9kaXNjb25uZWN0ZWRcbi8vIG1lY2hhbmlzbSBwcm92aWRlZCBieSBNdXRhdGlvbk9ic2VydmVyXG4vLyBUaGlzIHdlYWsgc2V0IGlzIHVzZWQgdG8gcmVjb2duaXplIGNvbXBvbmVudHNcbi8vIGFzIERPTSBub2RlIHRoYXQgbmVlZHMgdG8gdHJpZ2dlciBjb25uZWN0ZWQvZGlzY29ubmVjdGVkIGV2ZW50c1xuY29uc3QgY29tcG9uZW50cyA9IG5ldyBXZWFrU2V0O1xuXG4vLyBhIGJhc2ljIGRpY3Rpb25hcnkgdXNlZCB0byBmaWx0ZXIgYWxyZWFkeSBjYWNoZWQgYXR0cmlidXRlc1xuLy8gd2hpbGUgbG9va2luZyBmb3Igc3BlY2lhbCBoeXBlckhUTUwgdmFsdWVzLlxuZnVuY3Rpb24gQ2FjaGUoKSB7fVxuQ2FjaGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuLy8gcmV0dXJucyBhbiBpbnRlbnQgdG8gZXhwbGljaXRseSBpbmplY3QgY29udGVudCBhcyBodG1sXG5jb25zdCBhc0hUTUwgPSBodG1sID0+ICh7aHRtbH0pO1xuXG4vLyB1cGRhdGVzIGFyZSBjcmVhdGVkIG9uY2UgcGVyIGNvbnRleHQgdXBncmFkZVxuLy8gd2l0aGluIHRoZSBtYWluIHJlbmRlciBmdW5jdGlvbiAoLi4vaHlwZXIvcmVuZGVyLmpzKVxuLy8gVGhlc2UgYXJlIGFuIEFycmF5IG9mIGNhbGxiYWNrcyB0byBpbnZva2UgcGFzc2luZ1xuLy8gZWFjaCBpbnRlcnBvbGF0aW9uIHZhbHVlLlxuLy8gVXBkYXRlcyBjYW4gYmUgcmVsYXRlZCB0byBhbnkga2luZCBvZiBjb250ZW50LFxuLy8gYXR0cmlidXRlcywgb3Igc3BlY2lhbCB0ZXh0LW9ubHkgY2FzZXMgc3VjaCA8c3R5bGU+XG4vLyBlbGVtZW50cyBvciA8dGV4dGFyZWE+XG5jb25zdCBjcmVhdGUgPSAocm9vdCwgcGF0aHMpID0+IHtcbiAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICBjb25zdCBsZW5ndGggPSBwYXRocy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbmZvID0gcGF0aHNbaV07XG4gICAgY29uc3Qgbm9kZSA9IFBhdGguZmluZChyb290LCBpbmZvLnBhdGgpO1xuICAgIHN3aXRjaCAoaW5mby50eXBlKSB7XG4gICAgICBjYXNlICdhbnknOlxuICAgICAgICB1cGRhdGVzLnB1c2goc2V0QW55Q29udGVudChub2RlLCBbXSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0dHInOlxuICAgICAgICB1cGRhdGVzLnB1c2goc2V0QXR0cmlidXRlKG5vZGUsIGluZm8ubmFtZSwgaW5mby5ub2RlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIHVwZGF0ZXMucHVzaChzZXRUZXh0Q29udGVudChub2RlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXBkYXRlcztcbn07XG5cbi8vIGZpbmRpbmcgYWxsIHBhdGhzIGlzIGEgb25lLW9mZiBvcGVyYXRpb24gcGVyZm9ybWVkXG4vLyB3aGVuIGEgbmV3IHRlbXBsYXRlIGxpdGVyYWwgaXMgdXNlZC5cbi8vIFRoZSBnb2FsIGlzIHRvIG1hcCBhbGwgdGFyZ2V0IG5vZGVzIHRoYXQgd2lsbCBiZVxuLy8gdXNlZCB0byB1cGRhdGUgY29udGVudC9hdHRyaWJ1dGVzIGV2ZXJ5IHRpbWVcbi8vIHRoZSBzYW1lIHRlbXBsYXRlIGxpdGVyYWwgaXMgdXNlZCB0byBjcmVhdGUgY29udGVudC5cbi8vIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIHBhdGhzIHJlbGF0ZWQgdG8gdGhlIHRlbXBsYXRlXG4vLyB3aXRoIGFsbCB0aGUgbmVjZXNzYXJ5IGluZm8gdG8gY3JlYXRlIHVwZGF0ZXMgYXNcbi8vIGxpc3Qgb2YgY2FsbGJhY2tzIHRoYXQgdGFyZ2V0IGRpcmVjdGx5IGFmZmVjdGVkIG5vZGVzLlxuY29uc3QgZmluZCA9IChub2RlLCBwYXRocywgcGFydHMpID0+IHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgY29uc3QgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hpbGQgPSBjaGlsZE5vZGVzW2ldO1xuICAgIHN3aXRjaCAoY2hpbGQubm9kZVR5cGUpIHtcbiAgICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgICBmaW5kQXR0cmlidXRlcyhjaGlsZCwgcGF0aHMsIHBhcnRzKTtcbiAgICAgICAgZmluZChjaGlsZCwgcGF0aHMsIHBhcnRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENPTU1FTlRfTk9ERTpcbiAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50ID09PSBVSUQpIHtcbiAgICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgIHBhdGhzLnB1c2goXG4gICAgICAgICAgICAvLyBiYXNpY0hUTUwgb3Igb3RoZXIgbm9uIHN0YW5kYXJkIGVuZ2luZXNcbiAgICAgICAgICAgIC8vIG1pZ2h0IGVuZCB1cCBoYXZpbmcgY29tbWVudHMgaW4gbm9kZXNcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZXkgc2hvdWxkbid0LCBoZW5jZSB0aGlzIGNoZWNrLlxuICAgICAgICAgICAgU0hPVUxEX1VTRV9URVhUX0NPTlRFTlQudGVzdChub2RlLm5vZGVOYW1lKSA/XG4gICAgICAgICAgICAgIFBhdGguY3JlYXRlKCd0ZXh0Jywgbm9kZSkgOlxuICAgICAgICAgICAgICBQYXRoLmNyZWF0ZSgnYW55JywgY2hpbGQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEVYVF9OT0RFOlxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGlnbm9yZSBpcyBhY3R1YWxseSBjb3ZlcmVkIGJ5IGJyb3dzZXJzXG4gICAgICAgIC8vIG9ubHkgYmFzaWNIVE1MIGVuZHMgdXAgb24gcHJldmlvdXMgQ09NTUVOVF9OT0RFIGNhc2VcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBURVhUX05PREUgYmVjYXVzZSBpdCBrbm93cyBub3RoaW5nIGFib3V0XG4gICAgICAgIC8vIHNwZWNpYWwgc3R5bGUgb3IgdGV4dGFyZWEgYmVoYXZpb3JcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICBTSE9VTERfVVNFX1RFWFRfQ09OVEVOVC50ZXN0KG5vZGUubm9kZU5hbWUpICYmXG4gICAgICAgICAgdHJpbS5jYWxsKGNoaWxkLnRleHRDb250ZW50KSA9PT0gVUlEQ1xuICAgICAgICApIHtcbiAgICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgIHBhdGhzLnB1c2goUGF0aC5jcmVhdGUoJ3RleHQnLCBub2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vLyBhdHRyaWJ1dGVzIGFyZSBzZWFyY2hlZCB2aWEgdW5pcXVlIGh5cGVySFRNTCBpZCB2YWx1ZS5cbi8vIERlc3BpdGUgSFRNTCBiZWluZyBjYXNlIGluc2Vuc2l0aXZlLCBoeXBlckhUTUwgaXMgYWJsZVxuLy8gdG8gcmVjb2duaXplIGF0dHJpYnV0ZXMgYnkgbmFtZSBpbiBhIGNhc2VTZW5zaXRpdmUgd2F5LlxuLy8gVGhpcyBwbGF5cyB3ZWxsIHdpdGggQ3VzdG9tIEVsZW1lbnRzIGRlZmluaXRpb25zXG4vLyBhbmQgYWxzbyB3aXRoIFhNTC1saWtlIGVudmlyb25tZW50cywgd2l0aG91dCB0cnVzdGluZ1xuLy8gdGhlIHJlc3VsdGluZyBET00gYnV0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGguXG4vLyBJRS9FZGdlIGhhcyBhIGZ1bm55IGJ1ZyB3aXRoIGF0dHJpYnV0ZXMgYW5kIHRoZXNlIG1pZ2h0IGJlIGR1cGxpY2F0ZWQuXG4vLyBUaGlzIGlzIHdoeSB0aGVyZSBpcyBhIGNhY2hlIGluIGNoYXJnZSBvZiBiZWluZyBzdXJlIG5vIGR1cGxpY2F0ZWRcbi8vIGF0dHJpYnV0ZXMgYXJlIGV2ZXIgY29uc2lkZXJlZCBpbiBmdXR1cmUgdXBkYXRlcy5cbmNvbnN0IGZpbmRBdHRyaWJ1dGVzID0gKG5vZGUsIHBhdGhzLCBwYXJ0cykgPT4ge1xuICBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZTtcbiAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcbiAgY29uc3QgYXJyYXkgPSBzbGljZS5jYWxsKGF0dHJpYnV0ZXMpO1xuICBjb25zdCByZW1vdmUgPSBbXTtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXR0cmlidXRlID0gYXJyYXlbaV07XG4gICAgaWYgKGF0dHJpYnV0ZS52YWx1ZSA9PT0gVUlEKSB7XG4gICAgICBjb25zdCBuYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAvLyB0aGUgZm9sbG93aW5nIGlnbm9yZSBpcyBjb3ZlcmVkIGJ5IElFXG4gICAgICAvLyBhbmQgdGhlIElFOSBkb3VibGUgdmlld0JveCB0ZXN0XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKCEobmFtZSBpbiBjYWNoZSkpIHtcbiAgICAgICAgY29uc3QgcmVhbE5hbWUgPSBwYXJ0cy5zaGlmdCgpLnJlcGxhY2UoL14oPzp8W1xcU1xcc10qP1xccykoXFxTKz8pPVsnXCJdPyQvLCAnJDEnKTtcbiAgICAgICAgY2FjaGVbbmFtZV0gPSBhdHRyaWJ1dGVzW3JlYWxOYW1lXSB8fFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgaWdub3JlIGlzIGNvdmVyZWQgYnkgYnJvd3NlcnNcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3aGlsZSBiYXNpY0hUTUwgaXMgYWxyZWFkeSBjYXNlLXNlbnNpdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1tyZWFsTmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgcGF0aHMucHVzaChQYXRoLmNyZWF0ZSgnYXR0cicsIGNhY2hlW25hbWVdLCByZWFsTmFtZSkpO1xuICAgICAgfVxuICAgICAgcmVtb3ZlLnB1c2goYXR0cmlidXRlKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgbGVuID0gcmVtb3ZlLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlTm9kZShyZW1vdmVbaV0pO1xuICB9XG59O1xuXG4vLyB3aGVuIGEgUHJvbWlzZSBpcyB1c2VkIGFzIGludGVycG9sYXRpb24gdmFsdWVcbi8vIGl0cyByZXN1bHQgbXVzdCBiZSBwYXJzZWQgb25jZSByZXNvbHZlZC5cbi8vIFRoaXMgY2FsbGJhY2sgaXMgaW4gY2hhcmdlIG9mIHVuZGVyc3RhbmRpbmcgd2hhdCB0byBkb1xuLy8gd2l0aCBhIHJldHVybmVkIHZhbHVlIG9uY2UgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQuXG5jb25zdCBpbnZva2VBdERpc3RhbmNlID0gKHZhbHVlLCBjYWxsYmFjaykgPT4ge1xuICBjYWxsYmFjayh2YWx1ZS5wbGFjZWhvbGRlcik7XG4gIGlmICgndGV4dCcgaW4gdmFsdWUpIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudGV4dCkudGhlbihTdHJpbmcpLnRoZW4oY2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKCdhbnknIGluIHZhbHVlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFueSkudGhlbihjYWxsYmFjayk7XG4gIH0gZWxzZSBpZiAoJ2h0bWwnIGluIHZhbHVlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmh0bWwpLnRoZW4oYXNIVE1MKS50aGVuKGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUoSW50ZW50Lmludm9rZSh2YWx1ZSwgY2FsbGJhY2spKS50aGVuKGNhbGxiYWNrKTtcbiAgfVxufTtcblxuLy8gcXVpY2sgYW5kIGRpcnR5IHdheXMgdG8gY2hlY2sgYSB2YWx1ZSB0eXBlIHdpdGhvdXQgYWJ1c2luZyBpbnN0YW5jZW9mXG5jb25zdCBpc05vZGVfaXNoID0gdmFsdWUgPT4gJ0VMRU1FTlRfTk9ERScgaW4gdmFsdWU7XG5jb25zdCBpc1Byb21pc2VfaXNoID0gdmFsdWUgPT4gdmFsdWUgIT0gbnVsbCAmJiAndGhlbicgaW4gdmFsdWU7XG5cbi8vIGluIGEgaHlwZXIobm9kZSlgPGRpdj4ke2NvbnRlbnR9PC9kaXY+YCBjYXNlXG4vLyBldmVyeXRoaW5nIGNvdWxkIGhhcHBlbjpcbi8vICAqIGl0J3MgYSBKUyBwcmltaXRpdmUsIHN0b3JlZCBhcyB0ZXh0XG4vLyAgKiBpdCdzIG51bGwgb3IgdW5kZWZpbmVkLCB0aGUgbm9kZSBzaG91bGQgYmUgY2xlYW5lZFxuLy8gICogaXQncyBhIGNvbXBvbmVudCwgdXBkYXRlIHRoZSBjb250ZW50IGJ5IHJlbmRlcmluZyBpdFxuLy8gICogaXQncyBhIHByb21pc2UsIHVwZGF0ZSB0aGUgY29udGVudCBvbmNlIHJlc29sdmVkXG4vLyAgKiBpdCdzIGFuIGV4cGxpY2l0IGludGVudCwgcGVyZm9ybSB0aGUgZGVzaXJlZCBvcGVyYXRpb25cbi8vICAqIGl0J3MgYW4gQXJyYXksIHJlc29sdmUgYWxsIHZhbHVlcyBpZiBQcm9taXNlcyBhbmQvb3Jcbi8vICAgIHVwZGF0ZSB0aGUgbm9kZSB3aXRoIHRoZSByZXN1bHRpbmcgbGlzdCBvZiBjb250ZW50XG5jb25zdCBzZXRBbnlDb250ZW50ID0gKG5vZGUsIGNoaWxkTm9kZXMpID0+IHtcbiAgY29uc3QgdHJhbnNmb3JtZXIgPSBuZXcgTWVnYXRyb24obm9kZSwgY2hpbGROb2Rlcyk7XG4gIGxldCBmYXN0UGF0aCA9IGZhbHNlO1xuICBsZXQgb2xkVmFsdWU7XG4gIGNvbnN0IGFueUNvbnRlbnQgPSB2YWx1ZSA9PiB7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGlmIChmYXN0UGF0aCkge1xuICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBjaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhc3RQYXRoID0gdHJ1ZTtcbiAgICAgICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHRyYW5zZm9ybWVyLmVtcHR5KHRleHQobm9kZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIGZhc3RQYXRoID0gZmFsc2U7XG4gICAgICAgICAgdHJhbnNmb3JtZXIuZW1wdHkoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZmFzdFBhdGggPSBmYWxzZTtcbiAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtZXIuZW1wdHkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWVbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgYW55Q29udGVudCh7aHRtbDogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY29uY2F0LmFwcGx5KFtdLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2VfaXNoKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodmFsdWUpLnRoZW4oYW55Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZXIuYmVjb21lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5lbXB0eSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOb2RlX2lzaCh2YWx1ZSkpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5iZWNvbWUodmFsdWUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgP1xuICAgICAgICAgICAgc2xpY2UuY2FsbCh2YWx1ZS5jaGlsZE5vZGVzKSA6XG4gICAgICAgICAgICBbdmFsdWVdKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2VfaXNoKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlLnRoZW4oYW55Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3BsYWNlaG9sZGVyJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGludm9rZUF0RGlzdGFuY2UodmFsdWUsIGFueUNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCd0ZXh0JyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGFueUNvbnRlbnQoU3RyaW5nKHZhbHVlLnRleHQpKTtcbiAgICAgICAgfSBlbHNlIGlmICgnYW55JyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGFueUNvbnRlbnQodmFsdWUuYW55KTtcbiAgICAgICAgfSBlbHNlIGlmICgnaHRtbCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5lbXB0eSgpO1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQobm9kZSwgW10uY29uY2F0KHZhbHVlLmh0bWwpLmpvaW4oJycpKTtcbiAgICAgICAgICBjaGlsZE5vZGVzLnB1c2guYXBwbHkoY2hpbGROb2RlcywgZnJhZ21lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICBhbnlDb250ZW50KHNsaWNlLmNhbGwodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbnlDb250ZW50KEludGVudC5pbnZva2UodmFsdWUsIGFueUNvbnRlbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG4gIHJldHVybiBhbnlDb250ZW50O1xufTtcblxuLy8gdGhlcmUgYXJlIGZvdXIga2luZCBvZiBhdHRyaWJ1dGVzLCBhbmQgcmVsYXRlZCBiZWhhdmlvcjpcbi8vICAqIGV2ZW50cywgd2l0aCBhIG5hbWUgc3RhcnRpbmcgd2l0aCBgb25gLCB0byBhZGQvcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuLy8gICogc3BlY2lhbCwgd2l0aCBhIG5hbWUgcHJlc2VudCBpbiB0aGVpciBpbmhlcml0ZWQgcHJvdG90eXBlLCBhY2Nlc3NlZCBkaXJlY3RseVxuLy8gICogcmVndWxhciwgYWNjZXNzZWQgdGhyb3VnaCBnZXQvc2V0QXR0cmlidXRlIHN0YW5kYXJkIERPTSBtZXRob2RzXG4vLyAgKiBzdHlsZSwgdGhlIG9ubHkgcmVndWxhciBhdHRyaWJ1dGUgdGhhdCBhbHNvIGFjY2VwdHMgYW4gb2JqZWN0IGFzIHZhbHVlXG4vLyAgICBzbyB0aGF0IHlvdSBjYW4gc3R5bGU9JHt7d2lkdGg6IDEyMH19LiBJbiB0aGlzIGNhc2UsIHRoZSBiZWhhdmlvciBoYXMgYmVlblxuLy8gICAgZnVsbHkgaW5zcGlyZWQgYnkgUHJlYWN0IGxpYnJhcnkgYW5kIGl0cyBzaW1wbGljaXR5LlxuY29uc3Qgc2V0QXR0cmlidXRlID0gKG5vZGUsIG5hbWUsIG9yaWdpbmFsKSA9PiB7XG4gIGNvbnN0IGlzU1ZHID0gT1dORVJfU1ZHX0VMRU1FTlQgaW4gbm9kZTtcbiAgbGV0IG9sZFZhbHVlO1xuICAvLyBpZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzdHlsZSBvbmVcbiAgLy8gaGFuZGxlIGl0IGRpZmZlcmVudGx5IGZyb20gb3RoZXJzXG4gIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG4gICAgcmV0dXJuIFN0eWxlKG5vZGUsIG9yaWdpbmFsLCBpc1NWRyk7XG4gIH1cbiAgLy8gdGhlIG5hbWUgaXMgYW4gZXZlbnQgb25lLFxuICAvLyBhZGQvcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhY2NvcmRpbmdseVxuICBlbHNlIGlmICgvXm9uLy50ZXN0KG5hbWUpKSB7XG4gICAgbGV0IHR5cGUgPSBuYW1lLnNsaWNlKDIpO1xuICAgIGlmICh0eXBlID09PSBDT05ORUNURUQgfHwgdHlwZSA9PT0gRElTQ09OTkVDVEVEKSB7XG4gICAgICBpZiAobm90T2JzZXJ2aW5nKSB7XG4gICAgICAgIG5vdE9ic2VydmluZyA9IGZhbHNlO1xuICAgICAgICBvYnNlcnZlKCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRzLmFkZChub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZS50b0xvd2VyQ2FzZSgpIGluIG5vZGUpIHtcbiAgICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZSA9PiB7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIG9sZFZhbHVlLCBmYWxzZSk7XG4gICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvLyB0aGUgYXR0cmlidXRlIGlzIHNwZWNpYWwgKCd2YWx1ZScgaW4gaW5wdXQpXG4gIC8vIGFuZCBpdCdzIG5vdCBTVkcgKm9yKiB0aGUgbmFtZSBpcyBleGFjdGx5IGRhdGEsXG4gIC8vIGluIHRoaXMgY2FzZSBhc3NpZ24gdGhlIHZhbHVlIGRpcmVjdGx5XG4gIGVsc2UgaWYgKG5hbWUgPT09ICdkYXRhJyB8fCAoIWlzU1ZHICYmIG5hbWUgaW4gbm9kZSkpIHtcbiAgICByZXR1cm4gbmV3VmFsdWUgPT4ge1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAobm9kZVtuYW1lXSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICBub2RlW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgLy8gaW4gZXZlcnkgb3RoZXIgY2FzZSwgdXNlIHRoZSBhdHRyaWJ1dGUgbm9kZSBhcyBpdCBpc1xuICAvLyB1cGRhdGUgb25seSB0aGUgdmFsdWUsIHNldCBpdCBhcyBub2RlIG9ubHkgd2hlbi9pZiBuZWVkZWRcbiAgZWxzZSB7XG4gICAgbGV0IG93bmVyID0gZmFsc2U7XG4gICAgY29uc3QgYXR0cmlidXRlID0gb3JpZ2luYWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBuZXdWYWx1ZSA9PiB7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChvd25lcikge1xuICAgICAgICAgICAgICBvd25lciA9IGZhbHNlO1xuICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cmlidXRlLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAoIW93bmVyKSB7XG4gICAgICAgICAgICAgIG93bmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuLy8gc3R5bGUgb3IgdGV4dGFyZWFzIGRvbid0IGFjY2VwdCBIVE1MIGFzIGNvbnRlbnRcbi8vIGl0J3MgcG9pbnRsZXNzIHRvIHRyYW5zZm9ybSBvciBhbmFseXplIGFueXRoaW5nXG4vLyBkaWZmZXJlbnQgZnJvbSB0ZXh0IHRoZXJlIGJ1dCBpdCdzIHdvcnRoIGNoZWNraW5nXG4vLyBmb3IgcG9zc2libGUgZGVmaW5lZCBpbnRlbnRzLlxuY29uc3Qgc2V0VGV4dENvbnRlbnQgPSBub2RlID0+IHtcbiAgbGV0IG9sZFZhbHVlO1xuICBjb25zdCB0ZXh0Q29udGVudCA9IHZhbHVlID0+IHtcbiAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUHJvbWlzZV9pc2godmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUudGhlbih0ZXh0Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3BsYWNlaG9sZGVyJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGludm9rZUF0RGlzdGFuY2UodmFsdWUsIHRleHRDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICgndGV4dCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0ZXh0Q29udGVudChTdHJpbmcodmFsdWUudGV4dCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCdhbnknIGluIHZhbHVlKSB7XG4gICAgICAgICAgdGV4dENvbnRlbnQodmFsdWUuYW55KTtcbiAgICAgICAgfSBlbHNlIGlmICgnaHRtbCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0ZXh0Q29udGVudChbXS5jb25jYXQodmFsdWUuaHRtbCkuam9pbignJykpO1xuICAgICAgICB9IGVsc2UgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgdGV4dENvbnRlbnQoc2xpY2UuY2FsbCh2YWx1ZSkuam9pbignJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHRDb250ZW50KEludGVudC5pbnZva2UodmFsdWUsIHRleHRDb250ZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiB0ZXh0Q29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtjcmVhdGUsIGZpbmR9O1xuXG4vLyBoeXBlci5Db21wb25lbnRzIG1pZ2h0IG5lZWQgY29ubmVjdGVkL2Rpc2Nvbm5lY3RlZCBub3RpZmljYXRpb25zXG4vLyB1c2VkIGJ5IGNvbXBvbmVudHMgYW5kIHRoZWlyIG9uY29ubmVjdC9vbmRpc2Nvbm5lY3QgY2FsbGJhY2tzLlxuLy8gV2hlbiBvbmUgb2YgdGhlc2UgY2FsbGJhY2tzIGlzIGVuY291bnRlcmVkLFxuLy8gdGhlIGRvY3VtZW50IHN0YXJ0cyBiZWluZyBvYnNlcnZlZC5cbmxldCBub3RPYnNlcnZpbmcgPSB0cnVlO1xuZnVuY3Rpb24gb2JzZXJ2ZSgpIHtcblxuICAvLyB3aGVuIGh5cGVyLkNvbXBvbmVudCByZWxhdGVkIERPTSBub2Rlc1xuICAvLyBhcmUgYXBwZW5kZWQgb3IgcmVtb3ZlZCBmcm9tIHRoZSBsaXZlIHRyZWVcbiAgLy8gdGhlc2UgbWlnaHQgbGlzdGVuIHRvIGNvbm5lY3RlZC9kaXNjb25uZWN0ZWQgZXZlbnRzXG4gIC8vIFRoaXMgdXRpbGl0eSBpcyBpbiBjaGFyZ2Ugb2YgZmluZGluZyBhbGwgY29tcG9uZW50c1xuICAvLyBpbnZvbHZlZCBpbiB0aGUgRE9NIHVwZGF0ZS9jaGFuZ2UgYW5kIGRpc3BhdGNoXG4gIC8vIHJlbGF0ZWQgaW5mb3JtYXRpb24gdG8gdGhlbVxuICBjb25zdCBkaXNwYXRjaEFsbCA9IChub2RlcywgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUpO1xuICAgIGNvbnN0IGxlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICBkaXNwYXRjaFRhcmdldChub2RlLCBldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIHRoZSB3YXkgaXQncyBkb25lIGlzIHZpYSB0aGUgY29tcG9uZW50cyB3ZWFrIHNldFxuICAvLyBhbmQgcmVjdXJzaXZlbHkgbG9va2luZyBmb3IgbmVzdGVkIGNvbXBvbmVudHMgdG9vXG4gIGNvbnN0IGRpc3BhdGNoVGFyZ2V0ID0gKG5vZGUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKGNvbXBvbmVudHMuaGFzKG5vZGUpKSB7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICBjb25zdCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc3BhdGNoVGFyZ2V0KGNoaWxkcmVuW2ldLCBldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIE11dGF0aW9uT2JzZXJ2ZXIgaXMgdGhlIGJlc3Qgd2F5IHRvIGltcGxlbWVudCB0aGF0XG4gIC8vIGJ1dCB0aGVyZSBpcyBhIGZhbGxiYWNrIHRvIGRlcHJlY2F0ZWQgRE9NTm9kZUluc2VydGVkL1JlbW92ZWRcbiAgLy8gc28gdGhhdCBldmVuIG9sZGVyIGJyb3dzZXJzL2VuZ2luZXMgY2FuIGhlbHAgY29tcG9uZW50cyBsaWZlLWN5Y2xlXG4gIHRyeSB7XG4gICAgKG5ldyBNdXRhdGlvbk9ic2VydmVyKHJlY29yZHMgPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoID0gcmVjb3Jkcy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICBkaXNwYXRjaEFsbChyZWNvcmQucmVtb3ZlZE5vZGVzLCBESVNDT05ORUNURUQpO1xuICAgICAgICBkaXNwYXRjaEFsbChyZWNvcmQuYWRkZWROb2RlcywgQ09OTkVDVEVEKTtcbiAgICAgIH1cbiAgICB9KSkub2JzZXJ2ZShkb2N1bWVudCwge3N1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZX0pO1xuICB9IGNhdGNoKG9fTykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVSZW1vdmVkJywgZXZlbnQgPT4ge1xuICAgICAgZGlzcGF0Y2hBbGwoW2V2ZW50LnRhcmdldF0sIERJU0NPTk5FQ1RFRCk7XG4gICAgfSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIGV2ZW50ID0+IHtcbiAgICAgIGRpc3BhdGNoQWxsKFtldmVudC50YXJnZXRdLCBDT05ORUNURUQpO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1VwZGF0ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG4gIENPTU1FTlRfTk9ERSxcbiAgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSxcbiAgRUxFTUVOVF9OT0RFXG59IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMuanMnO1xuXG4vLyBldmVyeSB0ZW1wbGF0ZSBsaXRlcmFsIGludGVycG9sYXRpb24gaW5kaWNhdGVzXG4vLyBhIHByZWNpc2UgdGFyZ2V0IGluIHRoZSBET00gdGhlIHRlbXBsYXRlIGlzIHJlcHJlc2VudGluZy5cbi8vIGA8cCBpZD0keydhdHRyaWJ1dGUnfT5zb21lICR7J2NvbnRlbnQnfTwvcD5gXG4vLyBoeXBlckhUTUwgZmluZHMgb25seSBvbmNlIHBlciB0ZW1wbGF0ZSBsaXRlcmFsLFxuLy8gaGVuY2Ugb25jZSBwZXIgZW50aXJlIGFwcGxpY2F0aW9uIGxpZmUtY3ljbGUsXG4vLyBhbGwgbm9kZXMgdGhhdCBhcmUgcmVsYXRlZCB0byBpbnRlcnBvbGF0aW9ucy5cbi8vIFRoZXNlIG5vZGVzIGFyZSBzdG9yZWQgYXMgaW5kZXhlcyB1c2VkIHRvIHJldHJpZXZlLFxuLy8gb25jZSBwZXIgdXBncmFkZSwgbm9kZXMgdGhhdCB3aWxsIGNoYW5nZSBvbiBlYWNoIGZ1dHVyZSB1cGRhdGUuXG4vLyBBIHBhdGggZXhhbXBsZSBpcyBbMiwgMCwgMV0gcmVwcmVzZW50aW5nIHRoZSBvcGVyYXRpb246XG4vLyBub2RlLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdXG4vLyBBdHRyaWJ1dGVzIGFyZSBhZGRyZXNzZWQgdmlhIHRoZWlyIG93bmVyIG5vZGUgYW5kIHRoZWlyIG5hbWUuXG5jb25zdCBjcmVhdGVQYXRoID0gbm9kZSA9PiB7XG4gIGNvbnN0IHBhdGggPSBbXTtcbiAgbGV0IHBhcmVudE5vZGU7XG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDT01NRU5UX05PREU6XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgcHJlcGVuZChwYXRoLCBwYXJlbnROb2RlLCBub2RlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5vd25lckVsZW1lbnQ7XG4gICAgICBicmVhaztcbiAgfVxuICBmb3IgKFxuICAgIG5vZGUgPSBwYXJlbnROb2RlO1xuICAgIChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICBub2RlID0gcGFyZW50Tm9kZVxuICApIHtcbiAgICBwcmVwZW5kKHBhdGgsIHBhcmVudE5vZGUsIG5vZGUpO1xuICB9XG4gIHJldHVybiBwYXRoO1xufTtcblxuY29uc3QgcHJlcGVuZCA9IChwYXRoLCBwYXJlbnQsIG5vZGUpID0+IHtcbiAgcGF0aC51bnNoaWZ0KHBhdGguaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZE5vZGVzLCBub2RlKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZTogKHR5cGUsIG5vZGUsIG5hbWUpID0+ICh7dHlwZSwgbmFtZSwgbm9kZSwgcGF0aDogY3JlYXRlUGF0aChub2RlKX0pLFxuICBmaW5kOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkTm9kZXNbcGF0aFtpXV07XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvUGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9ibG9iLzMzZmM2OTdhYzExNzYyYTFjYjZlNzFlOTg0NzY3MGQwNDdhZjdjZTUvc3JjL2NvbnN0YW50cy5qc1xuY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7XG5cbi8vIHN0eWxlIGlzIGhhbmRsZWQgYXMgYm90aCBzdHJpbmcgYW5kIG9iamVjdFxuLy8gZXZlbiBpZiB0aGUgdGFyZ2V0IGlzIGFuIFNWRyBlbGVtZW50IChjb25zaXN0ZW5jeSlcbmV4cG9ydCBkZWZhdWx0IChub2RlLCBvcmlnaW5hbCwgaXNTVkcpID0+IHtcbiAgaWYgKGlzU1ZHKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBvcmlnaW5hbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgc3R5bGUudmFsdWUgPSAnJztcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5vZGUoc3R5bGUpO1xuICAgIHJldHVybiB1cGRhdGUoc3R5bGUsIGlzU1ZHKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlKG5vZGUuc3R5bGUsIGlzU1ZHKTtcbn07XG5cbi8vIHRoZSB1cGRhdGUgdGFrZXMgY2FyZSBvciBjaGFuZ2luZy9yZXBsYWNpbmdcbi8vIG9ubHkgcHJvcGVydGllcyB0aGF0IGFyZSBkaWZmZXJlbnQgb3Jcbi8vIGluIGNhc2Ugb2Ygc3RyaW5nLCB0aGUgd2hvbGUgbm9kZVxuY29uc3QgdXBkYXRlID0gKHN0eWxlLCBpc1NWRykgPT4ge1xuICBsZXQgb2xkVHlwZSwgb2xkVmFsdWU7XG4gIHJldHVybiBuZXdWYWx1ZSA9PiB7XG4gICAgc3dpdGNoICh0eXBlb2YgbmV3VmFsdWUpIHtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgIGlmIChvbGRUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKCFpc1NWRykge1xuICAgICAgICAgICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVba2V5XSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNTVkcpIHN0eWxlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBlbHNlIHN0eWxlLmNzc1RleHQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaW5mbyA9IGlzU1ZHID8ge30gOiBzdHlsZTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBuZXdWYWx1ZVtrZXldO1xuICAgICAgICAgICAgaW5mb1trZXldID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgKyAncHgnKSA6IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbGRUeXBlID0gJ29iamVjdCc7XG4gICAgICAgICAgaWYgKGlzU1ZHKSBzdHlsZS52YWx1ZSA9IHRvU3R5bGUoKG9sZFZhbHVlID0gaW5mbykpO1xuICAgICAgICAgIGVsc2Ugb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgb2xkVHlwZSA9ICdzdHJpbmcnO1xuICAgICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgaWYgKGlzU1ZHKSBzdHlsZS52YWx1ZSA9IG5ld1ZhbHVlIHx8ICcnO1xuICAgICAgICAgIGVsc2Ugc3R5bGUuY3NzVGV4dCA9IG5ld1ZhbHVlIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IGh5cGhlbiA9IC8oW15BLVpdKShbQS1aXSspL2c7XG5jb25zdCBpemVkID0gKCQwLCAkMSwgJDIpID0+ICQxICsgJy0nICsgJDIudG9Mb3dlckNhc2UoKTtcbmNvbnN0IHRvU3R5bGUgPSBvYmplY3QgPT4ge1xuICBjb25zdCBjc3MgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgY3NzLnB1c2goa2V5LnJlcGxhY2UoaHlwaGVuLCBpemVkKSwgJzonLCBvYmplY3Rba2V5XSwgJzsnKTtcbiAgfVxuICByZXR1cm4gY3NzLmpvaW4oJycpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEh5cGVyQ29tcG9uZW50IH0gZnJvbSAndXRpbHMvSHlwZXJDb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IEZpbGVUb0ltYWdlQ29udmVydGVyIH0gZnJvbSAnc2VydmljZXMvRmlsZVRvSW1hZ2VDb252ZXJ0ZXInO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlT3JpZ2luYWxJbWFnZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VQaWNrZXIgZXh0ZW5kcyBIeXBlckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMub25JbWFnZUNoYW5nZSA9IHRoaXMub25JbWFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1waWNrZXJcIj5cclxuICAgICAgICA8aDI+SW1hZ2UgcGlja2VyPC9oMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5vbkltYWdlQ2hhbmdlfT5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbkltYWdlQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgZmlsZXMgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5maWxlcztcclxuICAgIGlmICghZmlsZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVUb0ltYWdlQ29udmVydGVyID0gbmV3IEZpbGVUb0ltYWdlQ29udmVydGVyKCk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGZpbGVUb0ltYWdlQ29udmVydGVyLmNvbnZlcnRGaWxlKGZpbGVzWzBdKTtcclxuXHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmlnaW5hbEltYWdlKGltYWdlKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvSW1hZ2VQaWNrZXIudHMiLCJpbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgY29tYmluZVJlZHVjZXJzIGZyb20gJy4vY29tYmluZVJlZHVjZXJzJztcbmltcG9ydCBiaW5kQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnO1xuaW1wb3J0IGFwcGx5TWlkZGxld2FyZSBmcm9tICcuL2FwcGx5TWlkZGxld2FyZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi91dGlscy93YXJuaW5nJztcblxuLypcbiogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4qL1xuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcXCdwcm9kdWN0aW9uXFwnLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3IgRGVmaW5lUGx1Z2luIGZvciB3ZWJwYWNrIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMDMwMDMxKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGJpbmRBY3Rpb25DcmVhdG9ycywgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBvdmVyQXJnIGZyb20gJy4vX292ZXJBcmcuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBfU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBfU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKF9TeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25OYW1lID0gYWN0aW9uVHlwZSAmJiAnXCInICsgYWN0aW9uVHlwZS50b1N0cmluZygpICsgJ1wiJyB8fCAnYW4gYWN0aW9uJztcblxuICByZXR1cm4gJ0dpdmVuIGFjdGlvbiAnICsgYWN0aW9uTmFtZSArICcsIHJlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZC4gJyArICdUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuICcgKyAnSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJztcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuICdUaGUgJyArIGFyZ3VtZW50TmFtZSArICcgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcIicgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArICdcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyAnICsgKCdrZXlzOiBcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIicpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcblxuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICdVbmV4cGVjdGVkICcgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArICcgJyArICgnXCInICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyAnXCIgZm91bmQgaW4gJyArIGFyZ3VtZW50TmFtZSArICcuICcpICsgJ0V4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogJyArICgnXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvblxcJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCAnICsgJ3lvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIEFjdGlvblR5cGVzLklOSVQgKyAnIG9yIG90aGVyIGFjdGlvbnMgaW4gXCJyZWR1eC8qXCIgJykgKyAnbmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgJyArICdjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCAnICsgJ2luIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSAnICsgJ2FjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLicpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoJ05vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIicgKyBrZXkgKyAnXCInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHZvaWQgMDtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yID0gdm9pZCAwO1xuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKF9rZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkICcgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgJy4gJyArICdEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25DcmVhdG9ycyk7XG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodW5kZWZpbmVkLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYXBwbHlNaWRkbGV3YXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IG1lcmdlU3RhdGUgfSBmcm9tICd1dGlscy9tZXJnZVN0YXRlJztcclxuXHJcbmltcG9ydCB7IENPTlZFUlNJT05fRklOSVNIRUQgfSBmcm9tICdhY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvbkZpbmlzaGVkJztcclxuaW1wb3J0IHsgQ09OVkVSU0lPTl9TVEFSVEVEIH0gZnJvbSAnYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25TdGFydGVkJztcclxuaW1wb3J0IHsgQ0hBTkdFX0NPTE9SX1BST0ZJTEVfVFlQRSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENIQU5HRV9JTExVTUlOQU5UX1RZUEUgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZUlsbHVtaW5hbnRUeXBlJztcclxuaW1wb3J0IHsgQ0hBTkdFX09SSUdJTkFMX0lNQUdFIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VPcmlnaW5hbEltYWdlJztcclxuaW1wb3J0IHsgQ0hBTkdFX1NFTEVDVEVEX0NPTE9SX1NQQUNFIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ29sb3JTcGFjZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JTcGFjZVR5cGUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcbmltcG9ydCB7IElsbHVtaW5hbnRUeXBlIH0gZnJvbSAnbW9kZWxzL0lsbHVtaW5hbnRUeXBlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRTdGF0ZSB7XHJcbiAgb3JpZ2luYWxJbWFnZTogSFRNTEltYWdlRWxlbWVudCB8IG51bGw7XHJcbiAgc2VsZWN0ZWRDb2xvclNwYWNlOiBDb2xvclNwYWNlVHlwZTtcclxuICBjb252ZXJzaW9uQXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIGNvbnZlcnNpb25JblByb2dyZXNzOiBib29sZWFuO1xyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycztcclxuXHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZTtcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGU7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZTogSW5wdXRTdGF0ZSA9IHtcclxuICBvcmlnaW5hbEltYWdlOiBudWxsLFxyXG4gIHNlbGVjdGVkQ29sb3JTcGFjZTogY29uZmlndXJhdGlvbi5kZWZhdWx0Q29sb3JTcGFjZSxcclxuICBjb252ZXJzaW9uQXZhaWxhYmxlOiBmYWxzZSxcclxuICBjb252ZXJzaW9uSW5Qcm9ncmVzczogZmFsc2UsXHJcbiAgY29udmVyc2lvblBhcmFtZXRlcnM6IGNvbmZpZ3VyYXRpb24uZGVmYXVsdENvbnZlcnNpb25QYXJhbWV0ZXJzLFxyXG5cclxuICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLnNSR0IsXHJcbiAgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkN1c3RvbVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0UmVkdWNlcihzdGF0ZTogSW5wdXRTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBBbnlBY3Rpb24pOiBJbnB1dFN0YXRlIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENIQU5HRV9PUklHSU5BTF9JTUFHRTpcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgb3JpZ2luYWxJbWFnZTogYWN0aW9uLmltYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgICBuZXdTdGF0ZS5jb252ZXJzaW9uQXZhaWxhYmxlID0gaXNDb252ZXJzaW9uQXZhaWxhYmxlKG5ld1N0YXRlKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuXHJcbiAgICBjYXNlIENIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRTpcclxuICAgICAgcmV0dXJuIG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBzZWxlY3RlZENvbG9yU3BhY2U6IGFjdGlvbi5jb2xvclNwYWNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgQ09OVkVSU0lPTl9TVEFSVEVEOlxyXG4gICAgICByZXR1cm4gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNvbnZlcnNpb25BdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbnZlcnNpb25JblByb2dyZXNzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgQ09OVkVSU0lPTl9GSU5JU0hFRDpcclxuICAgICAgcmV0dXJuIG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBjb252ZXJzaW9uQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbnZlcnNpb25JblByb2dyZXNzOiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIENIQU5HRV9DT0xPUl9QUk9GSUxFX1RZUEU6XHJcbiAgICAgIHJldHVybiBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY29sb3JQcm9maWxlVHlwZTogYWN0aW9uLmNvbG9yUHJvZmlsZVR5cGUsXHJcbiAgICAgICAgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkN1c3RvbSxcclxuICAgICAgICBjb252ZXJzaW9uUGFyYW1ldGVyczogYWN0aW9uLmNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX0lMTFVNSU5BTlRfVFlQRTpcclxuICAgICAgY29uc3QgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzID0gc3RhdGUuY29udmVyc2lvblBhcmFtZXRlcnM7XHJcblxyXG4gICAgICByZXR1cm4gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGlsbHVtaW5hbnRUeXBlOiBhY3Rpb24uaWxsdW1pbmFudFR5cGUsXHJcbiAgICAgICAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5DdXN0b20sXHJcbiAgICAgICAgY29udmVyc2lvblBhcmFtZXRlcnM6IG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgICAgIGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycy5yZWRQb2ludCxcclxuICAgICAgICAgIGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycy5ncmVlblBvaW50LFxyXG4gICAgICAgICAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzLmJsdWVQb2ludCxcclxuICAgICAgICAgIGFjdGlvbi53aGl0ZVBvaW50LFxyXG4gICAgICAgICAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzLmdhbW1hXHJcbiAgICAgICAgKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbnZlcnNpb25BdmFpbGFibGUoc3RhdGU6IElucHV0U3RhdGUpOiBib29sZWFuIHtcclxuICByZXR1cm4gISFzdGF0ZS5vcmlnaW5hbEltYWdlICYmICFzdGF0ZS5jb252ZXJzaW9uSW5Qcm9ncmVzcztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9yZWR1Y2Vycy9pbnB1dFJlZHVjZXIudHMiLCJleHBvcnQgZnVuY3Rpb24gbWVyZ2VTdGF0ZTxUPihzdGF0ZTogVCwgLi4udXBkYXRlczogUGFydGlhbDxUPltdKTogVCB7XHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCAuLi51cGRhdGVzKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91dGlscy9tZXJnZVN0YXRlLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQ09OVkVSU0lPTl9GSU5JU0hFRCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3V0cHV0U3RhdGUge1xyXG4gIGNvbnZlcnNpb25SZXN1bHQ6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHwgbnVsbDtcclxuICByZXN1bHRJbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlOiBPdXRwdXRTdGF0ZSA9IHtcclxuICBjb252ZXJzaW9uUmVzdWx0OiBudWxsLFxyXG4gIHJlc3VsdEltYWdlczogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvdXRwdXRSZWR1Y2VyKHN0YXRlOiBPdXRwdXRTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBBbnlBY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENPTlZFUlNJT05fRklOSVNIRUQ6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNvbnZlcnNpb25SZXN1bHQ6IGFjdGlvbi5jb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgICAgIHJlc3VsdEltYWdlczogYWN0aW9uLnJlc3VsdEltYWdlc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3JlZHVjZXJzL291dHB1dFJlZHVjZXIudHMiLCJleHBvcnQgY2xhc3MgRmlsZVRvSW1hZ2VDb252ZXJ0ZXIge1xyXG4gIHB1YmxpYyBhc3luYyBjb252ZXJ0RmlsZShmaWxlOiBGaWxlKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gYXdhaXQgdGhpcy5nZXREYXRhVVJMRnJvbUZpbGUoZmlsZSk7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhVVJMRnJvbUZpbGUoZmlsZTogRmlsZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9GaWxlVG9JbWFnZUNvbnZlcnRlci50cyIsImltcG9ydCB7IEh5cGVyQ29udGFpbmVyIH0gZnJvbSAndXRpbHMvSHlwZXJDb250YWluZXInO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUsIGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZSc7XHJcbmltcG9ydCB7IExhYmVsZWRTZWxlY3QgfSBmcm9tICdjb21wb25lbnRzL0xhYmVsZWRTZWxlY3QnO1xyXG5pbXBvcnQgeyBMYWJlbGVkVmFsdWUgfSBmcm9tICd1dGlscy9MYWJlbGVkVmFsdWUnO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lclN0YXRlIHtcclxuICBzZWxlY3RlZENvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JTcGFjZVBpY2tlciBleHRlbmRzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlPiB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsYWJlbGVkQ29sb3JTcGFjZXM6IExhYmVsZWRWYWx1ZTxDb2xvclNwYWNlVHlwZT5bXSA9IFtcclxuICAgIHsgdmFsdWU6IENvbG9yU3BhY2VUeXBlLllDYkNyLCBsYWJlbDogJ1lDYkNyJyB9LFxyXG4gICAgeyB2YWx1ZTogQ29sb3JTcGFjZVR5cGUuSFNWLCBsYWJlbDogJ0hTVicgfSxcclxuICAgIHsgdmFsdWU6IENvbG9yU3BhY2VUeXBlLkxhYiwgbGFiZWw6ICdMYWInIH1cclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5vbkNvbG9yU3BhY2VDaGFuZ2UgPSB0aGlzLm9uQ29sb3JTcGFjZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWxlY3RlZENvbG9yU3BhY2U6IGFwcFN0YXRlLmlucHV0LnNlbGVjdGVkQ29sb3JTcGFjZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNlbGVjdGVkQ29sb3JTcGFjZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IG9uY29ubmVjdGVkPSR7dGhpc30gb25kaXNjb25uZWN0ZWQ9JHt0aGlzfT5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiY29sb3Itc3BhY2Utc2VsZWN0XCI+VGFyZ2V0IGNvbG9yIHNwYWNlOiA8L2xhYmVsPlxyXG4gICAgICAgICR7TGFiZWxlZFNlbGVjdChcclxuICAgICAgICAgICdjb2xvci1zcGFjZS1zZWxlY3QnLFxyXG4gICAgICAgICAgdGhpcy5sYWJlbGVkQ29sb3JTcGFjZXMsXHJcbiAgICAgICAgICBzZWxlY3RlZENvbG9yU3BhY2UsXHJcbiAgICAgICAgICB0aGlzLm9uQ29sb3JTcGFjZUNoYW5nZVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db2xvclNwYWNlQ2hhbmdlKG5ld0NvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlKSB7XHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UobmV3Q29sb3JTcGFjZSkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb250YWluZXJzL0NvbG9yU3BhY2VQaWNrZXIudHMiLCJpbXBvcnQgeyB3aXJlIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgJy4vT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBOb0ltYWdlTWVzc2FnZSgpIHtcclxuICByZXR1cm4gd2lyZSgpYFBsZWFzZSBzZWxlY3QgYW4gaW1hZ2UgZmlyc3QuYDtcclxufVxyXG5cclxuZnVuY3Rpb24gRGlzcGxheUltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBcclxuICAgIDxkaXYgY2xhc3M9XCJvcmlnaW5hbC1pbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICR7aW1hZ2V9XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yaWdpbmFsSW1hZ2VEaXNwbGF5IGV4dGVuZHMgSHlwZXJDb250YWluZXI8Q29udGFpbmVyU3RhdGU+IHtcclxuICBwcm90ZWN0ZWQgbWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0YXRlOiBBcHBTdGF0ZSk6IENvbnRhaW5lclN0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltYWdlOiBhcHBTdGF0ZS5pbnB1dC5vcmlnaW5hbEltYWdlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5zdGF0ZS5pbWFnZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IG9uY29ubmVjdGVkPSR7dGhpc30gb25kaXNjb25uZWN0ZWQ9JHt0aGlzfT5cclxuICAgICAgICAke2ltYWdlID8gRGlzcGxheUltYWdlKGltYWdlKSA6IE5vSW1hZ2VNZXNzYWdlKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vcmlnaW5hbC1pbWFnZS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWF4LWhlaWdodDogNDAwcHg7IH1cXG4gIC5vcmlnaW5hbC1pbWFnZS13cmFwcGVyIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHdpcmUgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBIeXBlckNvbnRhaW5lciB9IGZyb20gJ3V0aWxzL0h5cGVyQ29udGFpbmVyJztcclxuXHJcbmltcG9ydCAnLi9SZXN1bHRzRGlzcGxheS5zY3NzJztcclxuXHJcbmZ1bmN0aW9uIE5vUmVzdWx0cygpIHtcclxuICByZXR1cm4gd2lyZSgpYFBsZWFzZSBjbGljayA8ZW0+UlVOPC9lbT5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRzKGNvbnZlcnNpb25SZXN1bHQ6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0LCByZXN1bHRJbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXSkge1xyXG4gIHJldHVybiB3aXJlKGNvbnZlcnNpb25SZXN1bHQpYFxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdHNcIj5cclxuICAgICAgJHtjb252ZXJzaW9uUmVzdWx0LmNvbXBvbmVudHMubWFwKChwYXJ0aWFsUmVzdWx0LCBpbmRleCkgPT5cclxuICAgICAgICBSZXN1bHQocGFydGlhbFJlc3VsdCwgcmVzdWx0SW1hZ2VzW2luZGV4XSlcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlc3VsdChwYXJ0aWFsUmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICByZXR1cm4gd2lyZShwYXJ0aWFsUmVzdWx0KWBcclxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fbGFiZWxcIj4ke3BhcnRpYWxSZXN1bHQubGFiZWx9PC9kaXY+XHJcbiAgICAgICR7aW1hZ2V9XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIGNvbnZlcnNpb25SZXN1bHQ6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHwgbnVsbDtcclxuICByZXN1bHRJbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdHNEaXNwbGF5IGV4dGVuZHMgSHlwZXJDb250YWluZXI8Q29udGFpbmVyU3RhdGU+IHtcclxuICBwcm90ZWN0ZWQgbWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0YXRlOiBBcHBTdGF0ZSk6IENvbnRhaW5lclN0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnZlcnNpb25SZXN1bHQ6IGFwcFN0YXRlLm91dHB1dC5jb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgICByZXN1bHRJbWFnZXM6IGFwcFN0YXRlLm91dHB1dC5yZXN1bHRJbWFnZXNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjb252ZXJzaW9uUmVzdWx0LCByZXN1bHRJbWFnZXMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHRtbGBcclxuICAgICAgPGRpdiBvbmNvbm5lY3RlZD0ke3RoaXN9IG9uZGlzY29ubmVjdGVkPSR7dGhpc30+XHJcbiAgICAgICAgPGgyPlJlc3VsdHM8L2gyPlxyXG4gICAgICAgICR7Y29udmVyc2lvblJlc3VsdCA/IFJlc3VsdHMoY29udmVyc2lvblJlc3VsdCwgcmVzdWx0SW1hZ2VzKSA6IE5vUmVzdWx0cygpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbnRhaW5lcnMvUmVzdWx0c0Rpc3BsYXkudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9SZXN1bHRzRGlzcGxheS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1Jlc3VsdHNEaXNwbGF5LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUmVzdWx0c0Rpc3BsYXkuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVzdWx0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAucmVzdWx0cyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfSB9XFxuXFxuLnJlc3VsdCB7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAgbWF4LXdpZHRoOiA4MDBweDsgfVxcbiAgLnJlc3VsdCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcblxcbi5yZXN1bHRfX2xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2NvbnRhaW5lcnMvUmVzdWx0c0Rpc3BsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJzaW9uRmluaXNoZWQgfSBmcm9tICdhY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvbkZpbmlzaGVkJztcclxuaW1wb3J0IHsgY29udmVyc2lvblN0YXJ0ZWQgfSBmcm9tICdhY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSwgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9jcmVhdGVDb2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgSW1hZ2VEYXRhQ29udmVydGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEYXRhQ29udmVydGVyJztcclxuXHJcbmludGVyZmFjZSBDb250YWluZXJTdGF0ZSB7XHJcbiAgY29udmVyc2lvbkF2YWlsYWJsZTogYm9vbGVhbjtcclxuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudCB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydENvbnZlcnNpb25CdXR0b24gZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0Q29udmVyc2lvbiA9IHRoaXMuc3RhcnRDb252ZXJzaW9uLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0YXRlOiBBcHBTdGF0ZSk6IENvbnRhaW5lclN0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnZlcnNpb25BdmFpbGFibGU6IGFwcFN0YXRlLmlucHV0LmNvbnZlcnNpb25BdmFpbGFibGUsXHJcbiAgICAgIGltYWdlOiBhcHBTdGF0ZS5pbnB1dC5vcmlnaW5hbEltYWdlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY29udmVyc2lvbkF2YWlsYWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25jbGljaz0ke3RoaXMuc3RhcnRDb252ZXJzaW9ufVxyXG4gICAgICAgIG9uY29ubmVjdGVkPSR7dGhpc30gb25kaXNjb25uZWN0ZWQ9JHt0aGlzfVxyXG4gICAgICAgIGRpc2FibGVkPSR7IWNvbnZlcnNpb25BdmFpbGFibGV9PlJVTjwvYnV0dG9uPlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRDb252ZXJzaW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmltYWdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjb252ZXJzaW9uU3RhcnRlZCgpKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZURhdGFDb252ZXJ0ZXIgPSBuZXcgSW1hZ2VEYXRhQ29udmVydGVyKCk7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZURhdGFDb252ZXJ0ZXIuY29udmVydEltYWdlVG9JbWFnZURhdGEodGhpcy5zdGF0ZS5pbWFnZSk7XHJcbiAgICBjb25zdCBhcHBTdGF0ZSA9IGFwcFN0b3JlLmdldFN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgY29sb3JTcGFjZUNvbnZlcnRlciA9IGNyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXIoXHJcbiAgICAgIGFwcFN0YXRlLmlucHV0LnNlbGVjdGVkQ29sb3JTcGFjZSxcclxuICAgICAgYXBwU3RhdGUuaW5wdXQuY29udmVyc2lvblBhcmFtZXRlcnNcclxuICAgICk7XHJcbiAgICBjb25zdCBjb252ZXJzaW9uUmVzdWx0ID0gY29sb3JTcGFjZUNvbnZlcnRlci5jb252ZXJ0RnJvbUltYWdlRGF0YShpbWFnZURhdGEpO1xyXG4gICAgY29uc3QgcmVzdWx0SW1hZ2VzID0gY29udmVyc2lvblJlc3VsdC5jb252ZXJ0Q29tcG9uZW50c1RvSW1hZ2VEYXRhKClcclxuICAgICAgLm1hcChpbWFnZURhdGFDb252ZXJ0ZXIuY29udmVydEltYWdlRGF0YVRvSW1hZ2UpO1xyXG5cclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNvbnZlcnNpb25GaW5pc2hlZChjb252ZXJzaW9uUmVzdWx0LCByZXN1bHRJbWFnZXMpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9TdGFydENvbnZlcnNpb25CdXR0b24udHMiLCJpbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuaW1wb3J0IHsgSFNWQ29sb3JTcGFjZUNvbnZlcnRlciB9IGZyb20gJ21vZGVscy9jb252ZXJ0ZXJzL0hTVkNvbG9yU3BhY2VDb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBMYWJDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvTGFiQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcbmltcG9ydCB7IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnRlciB9IGZyb20gJ21vZGVscy9jb252ZXJ0ZXJzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcbmltcG9ydCB7IFhZWkNvbnZlcnRlciB9IGZyb20gJ3NlcnZpY2VzL1hZWkNvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlcihcclxuICBjb2xvclNwYWNlOiBDb2xvclNwYWNlVHlwZSxcclxuICBjb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnNcclxuKSB7XHJcbiAgc3dpdGNoIChjb2xvclNwYWNlKSB7XHJcbiAgICBjYXNlIENvbG9yU3BhY2VUeXBlLkhTVjpcclxuICAgICAgcmV0dXJuIG5ldyBIU1ZDb2xvclNwYWNlQ29udmVydGVyKCk7XHJcblxyXG4gICAgY2FzZSBDb2xvclNwYWNlVHlwZS5ZQ2JDcjpcclxuICAgICAgcmV0dXJuIG5ldyBZQ2JDckNvbG9yU3BhY2VDb252ZXJ0ZXIoKTtcclxuXHJcbiAgICBjYXNlIENvbG9yU3BhY2VUeXBlLkxhYjpcclxuICAgICAgY29uc3QgeHl6Q29udmVydGVyID0gbmV3IFhZWkNvbnZlcnRlcihjb252ZXJzaW9uUGFyYW1ldGVycyk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IExhYkNvbG9yU3BhY2VDb252ZXJ0ZXIoeHl6Q29udmVydGVyKTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gY29sb3Igc3BhY2UgdHlwZScpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVydGVycy9jcmVhdGVDb2xvclNwYWNlQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0hTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnRlciB9IGZyb20gJ21vZGVscy9jb252ZXJ0ZXJzL0NvbG9yU3BhY2VDb252ZXJ0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhTVkNvbG9yU3BhY2VDb252ZXJ0ZXIgaW1wbGVtZW50cyBDb2xvclNwYWNlQ29udmVydGVyIHtcclxuICBwdWJsaWMgY29udmVydEZyb21JbWFnZURhdGEoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGF0YTtcclxuICAgIGNvbnN0IGxhc3RQaXhlbEluZGV4ID0gd2lkdGggKiBoZWlnaHQgKiA0IC0gNDtcclxuICAgIGNvbnN0IGhWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBzVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgdlZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IGxhc3RQaXhlbEluZGV4OyBpbmRleCArPSA0KSB7XHJcbiAgICAgIGNvbnN0IHsgaCwgcywgdiB9ID0gdGhpcy5jb252ZXJ0U2luZ2xlUGl4ZWwoZGF0YVtpbmRleF0sIGRhdGFbaW5kZXggKyAxXSwgZGF0YVtpbmRleCArIDJdKTtcclxuICAgICAgaFZhbHVlcy5wdXNoKGgpO1xyXG4gICAgICBzVmFsdWVzLnB1c2gocyk7XHJcbiAgICAgIHZWYWx1ZXMucHVzaCh2KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KGhWYWx1ZXMsIHNWYWx1ZXMsIHZWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRGcm9tUkdCKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCB7IGgsIHMsIHYgfSA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKHIsIGcsIGIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoW2hdLCBbc10sIFt2XSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRTaW5nbGVQaXhlbChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogeyBoOiBudW1iZXI7IHM6IG51bWJlcjsgdjogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICBoOiAwLFxyXG4gICAgICBzOiAwLFxyXG4gICAgICB2OiBNYXRoLm1heChyLCBnLCBiKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuXHJcbiAgICBpZiAobWluID09PSByZXN1bHQudikge1xyXG4gICAgICByZXN1bHQuaCA9IDA7XHJcbiAgICAgIHJlc3VsdC5zID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyZXN1bHQudiA9PT0gcikge1xyXG4gICAgICAgIHJlc3VsdC5oID0gMCArIChnIC0gYikgKiA2MCAvIChyZXN1bHQudiAtIG1pbik7XHJcbiAgICAgIH0gZWxzZSBpZiAobWluID09PSBnKSB7XHJcbiAgICAgICAgcmVzdWx0LmggPSAxMjAgKyAoYiAtIHIpICogNjAgLyAocmVzdWx0LnYgLSBtaW4pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1pbiA9PT0gYikge1xyXG4gICAgICAgIHJlc3VsdC5oID0gMjQwICsgKHIgLSBnKSAqIDYwIC8gKHJlc3VsdC52IC0gbWluKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN1bHQuaCA8IDApIHtcclxuICAgICAgcmVzdWx0LmggKz0gMzYwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN1bHQudiA9PT0gMCkge1xyXG4gICAgICByZXN1bHQucyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQucyA9IChyZXN1bHQudiAtIG1pbikgKiAxMDAgLyByZXN1bHQudjtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQudiAqPSAxMDAgLyAyNTU7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29udmVyc2lvblJlc3VsdChcclxuICAgIGhWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgc1ZhbHVlczogbnVtYmVyW10sXHJcbiAgICB2VmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gICk6IEhTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IGhDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ0gnLCBoVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCBzQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdTJywgc1ZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgY29uc3QgdkNvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnVicsIHZWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQoaENvbXBvbmVudCwgc0NvbXBvbmVudCwgdkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL0hTVkNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBjb21wb25lbnRzOiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGhDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgc0NvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICB2Q29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFxyXG4gICkge1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gW2hDb21wb25lbnRSZXN1bHQsIHNDb21wb25lbnRSZXN1bHQsIHZDb21wb25lbnRSZXN1bHRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRDb21wb25lbnRzVG9JbWFnZURhdGEoKTogSW1hZ2VEYXRhW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLmdldEh1ZUltYWdlRGF0YSgpLCB0aGlzLmdldFNhdHVyYXRpb25JbWFnZURhdGEoKSwgdGhpcy5nZXRWYWx1ZUltYWdlRGF0YSgpXTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlIG5vLWluY3JlbWVudC1kZWNyZW1lbnRcclxuICBwcml2YXRlIGdldEh1ZUltYWdlRGF0YSgpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3QgaENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1swXTtcclxuICAgIGNvbnN0IGh1ZUltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEoaENvbXBvbmVudC53aWR0aCwgaENvbXBvbmVudC5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBoQ29tcG9uZW50LnZhbHVlcy5mb3JFYWNoKGh1ZSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRIdWUgPSBodWUgLyAzNjAgKiAyNTU7XHJcbiAgICAgIGh1ZUltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gbm9ybWFsaXplZEh1ZTtcclxuICAgICAgaHVlSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBub3JtYWxpemVkSHVlO1xyXG4gICAgICBodWVJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IG5vcm1hbGl6ZWRIdWU7XHJcbiAgICAgIGh1ZUltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gMjU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGh1ZUltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2F0dXJhdGlvbkltYWdlRGF0YSgpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3Qgc0NvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1sxXTtcclxuICAgIGNvbnN0IHNhdHVyYXRpb25JbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHNDb21wb25lbnQud2lkdGgsIHNDb21wb25lbnQuaGVpZ2h0KTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgc0NvbXBvbmVudC52YWx1ZXMuZm9yRWFjaChzYXR1cmF0aW9uID0+IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFNhdHVyYXRpb24gPSBzYXR1cmF0aW9uIC8gMTAwICogMjU1O1xyXG4gICAgICBzYXR1cmF0aW9uSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBub3JtYWxpemVkU2F0dXJhdGlvbjtcclxuICAgICAgc2F0dXJhdGlvbkltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gbm9ybWFsaXplZFNhdHVyYXRpb247XHJcbiAgICAgIHNhdHVyYXRpb25JbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IG5vcm1hbGl6ZWRTYXR1cmF0aW9uO1xyXG4gICAgICBzYXR1cmF0aW9uSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSAyNTU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2F0dXJhdGlvbkltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmFsdWVJbWFnZURhdGEoKTogSW1hZ2VEYXRhIHtcclxuICAgIGNvbnN0IHZDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbMl07XHJcbiAgICBjb25zdCB2YWx1ZUltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEodkNvbXBvbmVudC53aWR0aCwgdkNvbXBvbmVudC5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB2Q29tcG9uZW50LnZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgLyAxMDAgKiAyNTU7XHJcbiAgICAgIHZhbHVlSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBub3JtYWxpemVkVmFsdWU7XHJcbiAgICAgIHZhbHVlSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBub3JtYWxpemVkVmFsdWU7XHJcbiAgICAgIHZhbHVlSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBub3JtYWxpemVkVmFsdWU7XHJcbiAgICAgIHZhbHVlSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSAyNTU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVJbWFnZURhdGE7XHJcbiAgfVxyXG4gIC8vIHRzbGludDplbmFibGUgbm8taW5jcmVtZW50LWRlY3JlbWVudFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQudHMiLCJpbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBMYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvTGFiQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcbmltcG9ydCB7IFhZWkNvbnZlcnRlciB9IGZyb20gJ3NlcnZpY2VzL1hZWkNvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiQ29sb3JTcGFjZUNvbnZlcnRlciBpbXBsZW1lbnRzIENvbG9yU3BhY2VDb252ZXJ0ZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgeHl6Q29udmVydGVyOiBYWVpDb252ZXJ0ZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBYUiA9IDk0LjgxO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgWVIgPSAxMDA7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBaUiA9IDEwNy4zO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4eXpDb252ZXJ0ZXI6IFhZWkNvbnZlcnRlcikge1xyXG4gICAgdGhpcy54eXpDb252ZXJ0ZXIgPSB4eXpDb252ZXJ0ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEZyb21JbWFnZURhdGEoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGF0YTtcclxuICAgIGNvbnN0IGxhc3RQaXhlbEluZGV4ID0gd2lkdGggKiBoZWlnaHQgKiA0IC0gNDtcclxuICAgIGNvbnN0IGxWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBhVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgYlZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IGxhc3RQaXhlbEluZGV4OyBpbmRleCArPSA0KSB7XHJcbiAgICAgIGNvbnN0IHsgbCwgYSwgYiB9ID0gdGhpcy5jb252ZXJ0U2luZ2xlUGl4ZWwoZGF0YVtpbmRleF0sIGRhdGFbaW5kZXggKyAxXSwgZGF0YVtpbmRleCArIDJdKTtcclxuICAgICAgbFZhbHVlcy5wdXNoKGwpO1xyXG4gICAgICBhVmFsdWVzLnB1c2goYSk7XHJcbiAgICAgIGJWYWx1ZXMucHVzaChiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KGxWYWx1ZXMsIGFWYWx1ZXMsIGJWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRGcm9tUkdCKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChyLCBnLCBiKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KFtyZXN1bHQubF0sIFtyZXN1bHQuYV0sIFtyZXN1bHQuYl0sIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0U2luZ2xlUGl4ZWwocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IHsgbDogbnVtYmVyOyBhOiBudW1iZXI7IGI6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IHsgWCwgWSwgWiB9ID0gdGhpcy54eXpDb252ZXJ0ZXIucmdiVG9YWVoociwgZywgYik7XHJcblxyXG4gICAgY29uc3QgeFJhdGlvID0gWCAvIHRoaXMuWFI7XHJcbiAgICBjb25zdCB5UmF0aW8gPSBZIC8gdGhpcy5ZUjtcclxuICAgIGNvbnN0IHpSYXRpbyA9IFogLyB0aGlzLlpSO1xyXG5cclxuICAgIGxldCBsOiBudW1iZXI7XHJcbiAgICBpZiAoeVJhdGlvID4gMC4wMDg4NTYpIHtcclxuICAgICAgbCA9IDExNiAqIE1hdGguY2JydCh5UmF0aW8pIC0gMTY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsID0gOTAzLjMgKiB5UmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbCxcclxuICAgICAgYTogNTAwICogKE1hdGguY2JydCh4UmF0aW8pIC0gTWF0aC5jYnJ0KHlSYXRpbykpLFxyXG4gICAgICBiOiAyMDAgKiAoTWF0aC5jYnJ0KHlSYXRpbykgLSBNYXRoLmNicnQoelJhdGlvKSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoXHJcbiAgICBsVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIGFWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgYlZhbHVlczogbnVtYmVyW10sXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxuICApOiBMYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCBoQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdMJywgbFZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgY29uc3Qgc0NvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnYScsIGFWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHZDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ2InLCBiVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IExhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0KGhDb21wb25lbnQsIHNDb21wb25lbnQsIHZDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVydGVycy9MYWJDb2xvclNwYWNlQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCBpbXBsZW1lbnRzIENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50czogUGFydGlhbENvbnZlcnNpb25SZXN1bHRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsQ29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCxcclxuICAgIGFDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgYkNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHRcclxuICApIHtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFtsQ29tcG9uZW50UmVzdWx0LCBhQ29tcG9uZW50UmVzdWx0LCBiQ29tcG9uZW50UmVzdWx0XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb252ZXJ0Q29tcG9uZW50c1RvSW1hZ2VEYXRhKCk6IEltYWdlRGF0YVtdIHtcclxuICAgIHJldHVybiBbdGhpcy5nZXRMSW1hZ2VEYXRhKCksIHRoaXMuZ2V0QUltYWdlRGF0YSgpLCB0aGlzLmdldEJJbWFnZURhdGEoKV07XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZSBuby1pbmNyZW1lbnQtZGVjcmVtZW50XHJcbiAgcHJpdmF0ZSBnZXRMSW1hZ2VEYXRhKCk6IEltYWdlRGF0YSB7XHJcbiAgICBjb25zdCBsQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzWzBdO1xyXG4gICAgY29uc3QgbEltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEobENvbXBvbmVudC53aWR0aCwgbENvbXBvbmVudC5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBsQ29tcG9uZW50LnZhbHVlcy5mb3JFYWNoKGwgPT4ge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkTCA9IGwgLyAxMDAgKiAyNTU7XHJcbiAgICAgIGxJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IG5vcm1hbGl6ZWRMO1xyXG4gICAgICBsSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBub3JtYWxpemVkTDtcclxuICAgICAgbEltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gbm9ybWFsaXplZEw7XHJcbiAgICAgIGxJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IDI1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsSW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBSW1hZ2VEYXRhKCk6IEltYWdlRGF0YSB7XHJcbiAgICBjb25zdCBhQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzWzFdO1xyXG4gICAgY29uc3QgYUltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEoYUNvbXBvbmVudC53aWR0aCwgYUNvbXBvbmVudC5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBhQ29tcG9uZW50LnZhbHVlcy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICBhSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSAxMjcgKyBhO1xyXG4gICAgICBhSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSAxMjcgLSBhO1xyXG4gICAgICBhSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSAyNTU7XHJcbiAgICAgIGFJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IDI1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhSW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCSW1hZ2VEYXRhKCk6IEltYWdlRGF0YSB7XHJcbiAgICBjb25zdCBiQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzWzJdO1xyXG4gICAgY29uc3QgYkltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEoYkNvbXBvbmVudC53aWR0aCwgYkNvbXBvbmVudC5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBiQ29tcG9uZW50LnZhbHVlcy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICBiSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSAxMjcgKyBiO1xyXG4gICAgICBiSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSAxMjc7XHJcbiAgICAgIGJJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IDEyNyAtIGI7XHJcbiAgICAgIGJJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IDI1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBiSW1hZ2VEYXRhO1xyXG4gIH1cclxuICAvLyB0c2xpbnQ6ZW5hYmxlIG5vLWluY3JlbWVudC1kZWNyZW1lbnRcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0xhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0LnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9Db2xvclNwYWNlQ29udmVydGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBZQ2JDckNvbG9yU3BhY2VDb252ZXJ0ZXIgaW1wbGVtZW50cyBDb2xvclNwYWNlQ29udmVydGVyIHtcclxuICBwdWJsaWMgY29udmVydEZyb21JbWFnZURhdGEoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGF0YTtcclxuICAgIGNvbnN0IGxhc3RQaXhlbEluZGV4ID0gd2lkdGggKiBoZWlnaHQgKiA0IC0gNDtcclxuICAgIGNvbnN0IHlWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBjYlZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IGNyVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gbGFzdFBpeGVsSW5kZXg7IGluZGV4ICs9IDQpIHtcclxuICAgICAgY29uc3QgeyB5LCBjYiwgY3IgfSA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKGRhdGFbaW5kZXhdLCBkYXRhW2luZGV4ICsgMV0sIGRhdGFbaW5kZXggKyAyXSk7XHJcbiAgICAgIHlWYWx1ZXMucHVzaCh5KTtcclxuICAgICAgY2JWYWx1ZXMucHVzaChjYik7XHJcbiAgICAgIGNyVmFsdWVzLnB1c2goY3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoeVZhbHVlcywgY2JWYWx1ZXMsIGNyVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbVJHQihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeyB5LCBjYiwgY3IgfSA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKHIsIGcsIGIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoW3ldLCBbY2JdLCBbY3JdLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFNpbmdsZVBpeGVsKFxyXG4gICAgcjogbnVtYmVyLFxyXG4gICAgZzogbnVtYmVyLFxyXG4gICAgYjogbnVtYmVyXHJcbiAgKTogeyB5OiBudW1iZXI7IGNiOiBudW1iZXI7IGNyOiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCB5ID0gMC4yOTkgKiByICsgMC41ODcgKiBnICsgMC4xMTQgKiBiO1xyXG4gICAgY29uc3QgY2IgPSAoYiAtIHkpIC8gMS43NzIgKyAxMjg7XHJcbiAgICBjb25zdCBjciA9IChyIC0geSkgLyAxLjQwMiArIDEyODtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB5LFxyXG4gICAgICBjYixcclxuICAgICAgY3JcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoXHJcbiAgICB5VmFsdWVzOiBudW1iZXJbXSxcclxuICAgIGNiVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIGNyVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gICk6IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeUNvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnWScsIHlWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgY2JDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ0NiJywgY2JWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgY3JDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ0NyJywgY3JWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCh5Q29tcG9uZW50LCBjYkNvbXBvbmVudCwgY3JDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVydGVycy9ZQ2JDckNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgaW1wbGVtZW50cyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGNvbXBvbmVudHM6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgeUNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICBjYkNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICBjckNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHRcclxuICApIHtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFt5Q29tcG9uZW50UmVzdWx0LCBjYkNvbXBvbmVudFJlc3VsdCwgY3JDb21wb25lbnRSZXN1bHRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRDb21wb25lbnRzVG9JbWFnZURhdGEoKTogSW1hZ2VEYXRhW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLmdldFlJbWFnZURhdGEoKSwgdGhpcy5nZXRDYkltYWdlRGF0YSgpLCB0aGlzLmdldENySW1hZ2VEYXRhKCldO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUgbm8taW5jcmVtZW50LWRlY3JlbWVudFxyXG4gIHByaXZhdGUgZ2V0WUltYWdlRGF0YSgpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3QgeUNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1swXTtcclxuICAgIGNvbnN0IHlJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHlDb21wb25lbnQud2lkdGgsIHlDb21wb25lbnQuaGVpZ2h0KTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgeUNvbXBvbmVudC52YWx1ZXMuZm9yRWFjaCh5ID0+IHtcclxuICAgICAgeUltYWdlRGF0YS5kYXRhW2luZGV4KytdID0geTtcclxuICAgICAgeUltYWdlRGF0YS5kYXRhW2luZGV4KytdID0geTtcclxuICAgICAgeUltYWdlRGF0YS5kYXRhW2luZGV4KytdID0geTtcclxuICAgICAgeUltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gMjU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHlJbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENiSW1hZ2VEYXRhKCk6IEltYWdlRGF0YSB7XHJcbiAgICBjb25zdCBjYkNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1sxXTtcclxuICAgIGNvbnN0IGNiSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShjYkNvbXBvbmVudC53aWR0aCwgY2JDb21wb25lbnQuaGVpZ2h0KTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgY2JDb21wb25lbnQudmFsdWVzLmZvckVhY2goY2IgPT4ge1xyXG4gICAgICBjYkltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gMTI3O1xyXG4gICAgICBjYkltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gMjU1IC0gY2I7XHJcbiAgICAgIGNiSW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBjYjtcclxuICAgICAgY2JJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IDI1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYkltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q3JJbWFnZURhdGEoKTogSW1hZ2VEYXRhIHtcclxuICAgIGNvbnN0IGNyQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzWzJdO1xyXG4gICAgY29uc3QgY3JJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKGNyQ29tcG9uZW50LndpZHRoLCBjckNvbXBvbmVudC5oZWlnaHQpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBjckNvbXBvbmVudC52YWx1ZXMuZm9yRWFjaChjciA9PiB7XHJcbiAgICAgIGNySW1hZ2VEYXRhLmRhdGFbaW5kZXgrK10gPSBjcjtcclxuICAgICAgY3JJbWFnZURhdGEuZGF0YVtpbmRleCsrXSA9IDI1NSAtIGNyO1xyXG4gICAgICBjckltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gMTI3O1xyXG4gICAgICBjckltYWdlRGF0YS5kYXRhW2luZGV4KytdID0gMjU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNySW1hZ2VEYXRhO1xyXG4gIH1cclxuICAvLyB0c2xpbnQ6ZW5hYmxlIG5vLWluY3JlbWVudC1kZWNyZW1lbnRcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQudHMiLCJpbXBvcnQgeyBNYXRyaXgsIHNvbHZlIH0gZnJvbSAnbWwtbWF0cml4JztcclxuXHJcbmltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuXHJcbmludGVyZmFjZSBYWVoge1xyXG4gIFg6IG51bWJlcjtcclxuICBZOiBudW1iZXI7XHJcbiAgWjogbnVtYmVyO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSB2YXJpYWJsZS1uYW1lXHJcbmV4cG9ydCBjbGFzcyBYWVpDb252ZXJ0ZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVkUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBncmVlblBvaW50OiBDb2xvclBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYmx1ZVBvaW50OiBDb2xvclBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgd2hpdGVQb2ludDogQ29sb3JQb2ludDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGdhbW1hOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgcmdiTWF0cml4OiBNYXRyaXg7XHJcbiAgcHJpdmF0ZSBTVmVjdG9yOiBNYXRyaXg7XHJcbiAgcHJpdmF0ZSByZ2JUb1hZWk1hdHJpeDogTWF0cml4O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4gICkge1xyXG4gICAgdGhpcy5yZWRQb2ludCA9IGNvbnZlcnNpb25QYXJhbWV0ZXJzLnJlZFBvaW50O1xyXG4gICAgdGhpcy5ncmVlblBvaW50ID0gY29udmVyc2lvblBhcmFtZXRlcnMuZ3JlZW5Qb2ludDtcclxuICAgIHRoaXMuYmx1ZVBvaW50ID0gY29udmVyc2lvblBhcmFtZXRlcnMuYmx1ZVBvaW50O1xyXG4gICAgdGhpcy53aGl0ZVBvaW50ID0gY29udmVyc2lvblBhcmFtZXRlcnMud2hpdGVQb2ludDtcclxuICAgIHRoaXMuZ2FtbWEgPSBjb252ZXJzaW9uUGFyYW1ldGVycy5nYW1tYTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZ2JUb1hZWihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogWFlaIHtcclxuICAgIGNvbnN0IHJnYlZlY3RvciA9IE1hdHJpeC5jb2x1bW5WZWN0b3IoW1xyXG4gICAgICB0aGlzLmFwcGx5R2FtbWFDb3JyZWN0aW9uKHIgLyAyNTUpLFxyXG4gICAgICB0aGlzLmFwcGx5R2FtbWFDb3JyZWN0aW9uKGcgLyAyNTUpLFxyXG4gICAgICB0aGlzLmFwcGx5R2FtbWFDb3JyZWN0aW9uKGIgLyAyNTUpXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmdiVG9YWVpNYXRyaXgubW11bChyZ2JWZWN0b3IpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIFg6IHJlc3VsdC5nZXQoMCwgMCkgKiAxMDAsXHJcbiAgICAgIFk6IHJlc3VsdC5nZXQoMSwgMCkgKiAxMDAsXHJcbiAgICAgIFo6IHJlc3VsdC5nZXQoMiwgMCkgKiAxMDBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVSR0JNYXRyaXgoKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgWHcsIFl3LCBad1xyXG4gICAgY29uc3QgencgPSAxIC0gdGhpcy53aGl0ZVBvaW50LnggLSB0aGlzLndoaXRlUG9pbnQueTtcclxuICAgIGNvbnN0IFl3ID0gMTtcclxuICAgIGNvbnN0IFh3ID0gdGhpcy53aGl0ZVBvaW50LnggLyBZdyAvIHRoaXMud2hpdGVQb2ludC55O1xyXG4gICAgY29uc3QgWncgPSB6dyAvIHRoaXMud2hpdGVQb2ludC55O1xyXG4gICAgY29uc3QgWHdZd1p3ID0gTWF0cml4LmNvbHVtblZlY3RvcihbWHcsIFl3LCBad10pO1xyXG5cclxuICAgIHRoaXMuU1ZlY3RvciA9IHNvbHZlKHRoaXMucmdiTWF0cml4LCBYd1l3WncpO1xyXG5cclxuICAgIHRoaXMucmdiVG9YWVpNYXRyaXggPSB0aGlzLnJnYk1hdHJpeC5tdWxSb3dWZWN0b3IodGhpcy5TVmVjdG9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJHQk1hdHJpeCgpIHtcclxuICAgIGNvbnN0IHJlZFBvaW50WiA9IDEgLSB0aGlzLnJlZFBvaW50LnggLSB0aGlzLnJlZFBvaW50Lnk7XHJcbiAgICBjb25zdCBncmVlblBvaW50WiA9IDEgLSB0aGlzLmdyZWVuUG9pbnQueCAtIHRoaXMuZ3JlZW5Qb2ludC55O1xyXG4gICAgY29uc3QgYmx1ZVBvaW50WiA9IDEgLSB0aGlzLmJsdWVQb2ludC54IC0gdGhpcy5ibHVlUG9pbnQueTtcclxuXHJcbiAgICB0aGlzLnJnYk1hdHJpeCA9IG5ldyBNYXRyaXgoW1xyXG4gICAgICBbdGhpcy5yZWRQb2ludC54LCB0aGlzLmdyZWVuUG9pbnQueCwgdGhpcy5ncmVlblBvaW50LnhdLFxyXG4gICAgICBbdGhpcy5yZWRQb2ludC55LCB0aGlzLmdyZWVuUG9pbnQueSwgdGhpcy5ibHVlUG9pbnQueV0sXHJcbiAgICAgIFtyZWRQb2ludFosIGdyZWVuUG9pbnRaLCBibHVlUG9pbnRaXVxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5R2FtbWFDb3JyZWN0aW9uKHY6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5wb3codiwgdGhpcy5nYW1tYSk7XHJcbiAgfVxyXG59XHJcbi8vIHRzbGludDplbmFibGUgdmFyaWFibGUtbmFtZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9YWVpDb252ZXJ0ZXIudHMiLCJpZiAoIVN5bWJvbC5zcGVjaWVzKSB7XG4gICAgU3ltYm9sLnNwZWNpZXMgPSBTeW1ib2wuZm9yKCdAQHNwZWNpZXMnKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvc3ltYm9sLXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtYXggZnJvbSAnbWwtYXJyYXktbWF4JztcbmltcG9ydCBtaW4gZnJvbSAnbWwtYXJyYXktbWluJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzY2FsZShpbnB1dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnB1dCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgfSBlbHNlIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5wdXQgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgICB9XG5cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChvcHRpb25zLm91dHB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLm91dHB1dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ291dHB1dCBvcHRpb24gbXVzdCBiZSBhbiBhcnJheSBpZiBzcGVjaWZpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgPSBvcHRpb25zLm91dHB1dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBuZXcgQXJyYXkoaW5wdXQubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TWluID0gbWluKGlucHV0KTtcbiAgICBjb25zdCBjdXJyZW50TWF4ID0gbWF4KGlucHV0KTtcblxuICAgIGlmIChjdXJyZW50TWluID09PSBjdXJyZW50TWF4KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW5pbXVtIGFuZCBtYXhpbXVtIGlucHV0IHZhbHVlcyBhcmUgZXF1YWwuIENhbm5vdCByZXNjYWxlIGEgY29uc3RhbnQgYXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICAgIG1pbjogbWluVmFsdWUgPSBvcHRpb25zLmF1dG9NaW5NYXggPyBjdXJyZW50TWluIDogMCxcbiAgICAgICAgbWF4OiBtYXhWYWx1ZSA9IG9wdGlvbnMuYXV0b01pbk1heCA/IGN1cnJlbnRNYXggOiAxXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAobWluVmFsdWUgPj0gbWF4VmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbiBvcHRpb24gbXVzdCBiZSBzbWFsbGVyIHRoYW4gbWF4IG9wdGlvbicpO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvciA9IChtYXhWYWx1ZSAtIG1pblZhbHVlKSAvIChjdXJyZW50TWF4IC0gY3VycmVudE1pbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvdXRwdXRbaV0gPSAoaW5wdXRbaV0gLSBjdXJyZW50TWluKSAqIGZhY3RvciArIG1pblZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1hcnJheS1yZXNjYWxlL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb21wdXRlcyB0aGUgbWF4aW11bSBvZiB0aGUgZ2l2ZW4gdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heChpbnB1dCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnB1dCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgdmFyIG1heCA9IGlucHV0WzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlucHV0W2ldID4gbWF4KSBtYXggPSBpbnB1dFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIG1heDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1heC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29tcHV0ZXMgdGhlIG1pbmltdW0gb2YgdGhlIGdpdmVuIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaW4oaW5wdXQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5wdXQgbXVzdCBiZSBhbiBhcnJheScpO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnB1dCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICAgIH1cblxuICAgIHZhciBtaW4gPSBpbnB1dFswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbnB1dFtpXSA8IG1pbikgbWluID0gaW5wdXRbaV07XG4gICAgfVxuICAgIHJldHVybiBtaW47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1hcnJheS1taW4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4VHJhbnNwb3NlVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXguY29sdW1ucywgbWF0cml4LnJvd3MpO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChjb2x1bW5JbmRleCwgcm93SW5kZXgsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KGNvbHVtbkluZGV4LCByb3dJbmRleCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy90cmFuc3Bvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhSb3dWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCwgcm93KSB7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgMSwgbWF0cml4LmNvbHVtbnMpO1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hdHJpeC5zZXQodGhpcy5yb3csIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvdywgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvcm93LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Y2hlY2tSYW5nZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFN1YlZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgICAgIGNoZWNrUmFuZ2UobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCBlbmRSb3cgLSBzdGFydFJvdyArIDEsIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSk7XG4gICAgICAgIHRoaXMuc3RhcnRSb3cgPSBzdGFydFJvdztcbiAgICAgICAgdGhpcy5zdGFydENvbHVtbiA9IHN0YXJ0Q29sdW1uO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnN0YXJ0Um93ICsgcm93SW5kZXgsIHRoaXMuc3RhcnRDb2x1bW4gKyBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5zdGFydFJvdyArIHJvd0luZGV4LCB0aGlzLnN0YXJ0Q29sdW1uICsgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc3ViLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrSW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFNlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgIHZhciBpbmRpY2VzID0gY2hlY2tJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgaW5kaWNlcy5yb3cubGVuZ3RoLCBpbmRpY2VzLmNvbHVtbi5sZW5ndGgpO1xuICAgICAgICB0aGlzLnJvd0luZGljZXMgPSBpbmRpY2VzLnJvdztcbiAgICAgICAgdGhpcy5jb2x1bW5JbmRpY2VzID0gaW5kaWNlcy5jb2x1bW47XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0sIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrUm93SW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFJvd1NlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzKSB7XG4gICAgICAgIHJvd0luZGljZXMgPSBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCByb3dJbmRpY2VzLmxlbmd0aCwgbWF0cml4LmNvbHVtbnMpO1xuICAgICAgICB0aGlzLnJvd0luZGljZXMgPSByb3dJbmRpY2VzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvd0luZGljZXNbcm93SW5kZXhdLCBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5yb3dJbmRpY2VzW3Jvd0luZGV4XSwgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvcm93U2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrQ29sdW1uSW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgIGNvbHVtbkluZGljZXMgPSBjaGVja0NvbHVtbkluZGljZXMobWF0cml4LCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgY29sdW1uSW5kaWNlcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmNvbHVtbkluZGljZXMgPSBjb2x1bW5JbmRpY2VzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uU2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeENvbHVtblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW4pIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgMSk7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW4sIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1uKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2NvbHVtbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhGbGlwUm93VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgbWF0cml4LmNvbHVtbnMpO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBSb3cuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4RmxpcENvbHVtblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgbWF0cml4LnJvd3MsIG1hdHJpeC5jb2x1bW5zKTtcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hdHJpeC5zZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9mbGlwQ29sdW1uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFdyYXBwZXJNYXRyaXgxRCBmcm9tICcuL1dyYXBwZXJNYXRyaXgxRCc7XG5pbXBvcnQgV3JhcHBlck1hdHJpeDJEIGZyb20gJy4vV3JhcHBlck1hdHJpeDJEJztcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fEFycmF5PG51bWJlcj59IGFycmF5XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMucm93cyA9IDFdXG4gKiBAcmV0dXJuIHtXcmFwcGVyTWF0cml4MUR8V3JhcHBlck1hdHJpeDJEfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcChhcnJheSwgb3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICBpZiAoYXJyYXlbMF0gJiYgQXJyYXkuaXNBcnJheShhcnJheVswXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcHBlck1hdHJpeDJEKGFycmF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcHBlck1hdHJpeDFEKGFycmF5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGFyZ3VtZW50IGlzIG5vdCBhbiBhcnJheScpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvd3JhcC93cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCBMdURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9sdSc7XG5pbXBvcnQgUXJEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvcXInO1xuaW1wb3J0IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvc3ZkJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIE1hdHJpeFxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtib29sZWFufSBbdXNlU1ZEPWZhbHNlXVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShtYXRyaXgsIHVzZVNWRCA9IGZhbHNlKSB7XG4gICAgbWF0cml4ID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHVzZVNWRCkge1xuICAgICAgICByZXR1cm4gbmV3IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKG1hdHJpeCkuaW52ZXJzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzb2x2ZShtYXRyaXgsIE1hdHJpeC5leWUobWF0cml4LnJvd3MpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TWF0cml4fSBsZWZ0SGFuZFNpZGVcbiAqIEBwYXJhbSB7TWF0cml4fSByaWdodEhhbmRTaWRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VTVkQgPSBmYWxzZV1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvbHZlKGxlZnRIYW5kU2lkZSwgcmlnaHRIYW5kU2lkZSwgdXNlU1ZEID0gZmFsc2UpIHtcbiAgICBsZWZ0SGFuZFNpZGUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobGVmdEhhbmRTaWRlKTtcbiAgICByaWdodEhhbmRTaWRlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHJpZ2h0SGFuZFNpZGUpO1xuICAgIGlmICh1c2VTVkQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbihsZWZ0SGFuZFNpZGUpLnNvbHZlKHJpZ2h0SGFuZFNpZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZWZ0SGFuZFNpZGUuaXNTcXVhcmUoKSA/IG5ldyBMdURlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKSA6IG5ldyBRckRlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RlY29tcG9zaXRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtoeXBvdGVudXNlLCBnZXRGaWxsZWQyREFycmF5fSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzcyBFaWdlbnZhbHVlRGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9FaWdlbnZhbHVlRGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hc3N1bWVTeW1tZXRyaWM9ZmFsc2VdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhc3N1bWVTeW1tZXRyaWMgPSBmYWxzZVxuICAgICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgICBtYXRyaXggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICAgICAgaWYgKCFtYXRyaXguaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgbm90IGEgc3F1YXJlIG1hdHJpeCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG4gPSBtYXRyaXguY29sdW1ucztcbiAgICAgICAgdmFyIFYgPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICB2YXIgZCA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXkobik7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1hdHJpeDtcbiAgICAgICAgdmFyIGksIGo7XG5cbiAgICAgICAgdmFyIGlzU3ltbWV0cmljID0gZmFsc2U7XG4gICAgICAgIGlmIChhc3N1bWVTeW1tZXRyaWMpIHtcbiAgICAgICAgICAgIGlzU3ltbWV0cmljID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzU3ltbWV0cmljID0gbWF0cml4LmlzU3ltbWV0cmljKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTeW1tZXRyaWMpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbaV1bal0gPSB2YWx1ZS5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJlZDIobiwgZSwgZCwgVik7XG4gICAgICAgICAgICB0cWwyKG4sIGUsIGQsIFYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIEggPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICAgICAgdmFyIG9ydCA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEhbaV1bal0gPSB2YWx1ZS5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3J0aGVzKG4sIEgsIG9ydCwgVik7XG4gICAgICAgICAgICBocXIyKG4sIGUsIGQsIFYsIEgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uID0gbjtcbiAgICAgICAgdGhpcy5lID0gZTtcbiAgICAgICAgdGhpcy5kID0gZDtcbiAgICAgICAgdGhpcy5WID0gVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IHJlYWxFaWdlbnZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IGltYWdpbmFyeUVpZ2VudmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCBlaWdlbnZlY3Rvck1hdHJpeCgpIHtcbiAgICAgICAgaWYgKCFNYXRyaXguaXNNYXRyaXgodGhpcy5WKSkge1xuICAgICAgICAgICAgdGhpcy5WID0gbmV3IE1hdHJpeCh0aGlzLlYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGRpYWdvbmFsTWF0cml4KCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMubjtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmU7XG4gICAgICAgIHZhciBkID0gdGhpcy5kO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgICAgIHZhciBpLCBqO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgWFtpXVtqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYW2ldW2ldID0gZFtpXTtcbiAgICAgICAgICAgIGlmIChlW2ldID4gMCkge1xuICAgICAgICAgICAgICAgIFhbaV1baSArIDFdID0gZVtpXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgICAgICAgICBYW2ldW2kgLSAxXSA9IGVbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cmVkMihuLCBlLCBkLCBWKSB7XG4gICAgdmFyIGYsIGcsIGgsIGksIGosIGssXG4gICAgICAgIGhoLCBzY2FsZTtcblxuICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgZFtqXSA9IFZbbiAtIDFdW2pdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG4gLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHNjYWxlID0gMDtcbiAgICAgICAgaCA9IDA7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgICAgIHNjYWxlID0gc2NhbGUgKyBNYXRoLmFicyhkW2tdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FsZSA9PT0gMCkge1xuICAgICAgICAgICAgZVtpXSA9IGRbaSAtIDFdO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGRbal0gPSBWW2kgLSAxXVtqXTtcbiAgICAgICAgICAgICAgICBWW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICBWW2pdW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICBkW2tdIC89IHNjYWxlO1xuICAgICAgICAgICAgICAgIGggKz0gZFtrXSAqIGRba107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGYgPSBkW2kgLSAxXTtcbiAgICAgICAgICAgIGcgPSBNYXRoLnNxcnQoaCk7XG4gICAgICAgICAgICBpZiAoZiA+IDApIHtcbiAgICAgICAgICAgICAgICBnID0gLWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVbaV0gPSBzY2FsZSAqIGc7XG4gICAgICAgICAgICBoID0gaCAtIGYgKiBnO1xuICAgICAgICAgICAgZFtpIC0gMV0gPSBmIC0gZztcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBlW2pdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGYgPSBkW2pdO1xuICAgICAgICAgICAgICAgIFZbal1baV0gPSBmO1xuICAgICAgICAgICAgICAgIGcgPSBlW2pdICsgVltqXVtqXSAqIGY7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPD0gaSAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBnICs9IFZba11bal0gKiBkW2tdO1xuICAgICAgICAgICAgICAgICAgICBlW2tdICs9IFZba11bal0gKiBmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlW2pdID0gZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZiA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZVtqXSAvPSBoO1xuICAgICAgICAgICAgICAgIGYgKz0gZVtqXSAqIGRbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhoID0gZiAvIChoICsgaCk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZVtqXSAtPSBoaCAqIGRbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmID0gZFtqXTtcbiAgICAgICAgICAgICAgICBnID0gZVtqXTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBqOyBrIDw9IGkgLSAxOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrXVtqXSAtPSAoZiAqIGVba10gKyBnICogZFtrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRbal0gPSBWW2kgLSAxXVtqXTtcbiAgICAgICAgICAgICAgICBWW2ldW2pdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkW2ldID0gaDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICBWW24gLSAxXVtpXSA9IFZbaV1baV07XG4gICAgICAgIFZbaV1baV0gPSAxO1xuICAgICAgICBoID0gZFtpICsgMV07XG4gICAgICAgIGlmIChoICE9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgICAgICAgICAgIGRba10gPSBWW2tdW2kgKyAxXSAvIGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZyArPSBWW2tdW2kgKyAxXSAqIFZba11bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPD0gaTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZba11bal0gLT0gZyAqIGRba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICAgIFZba11baSArIDFdID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgZFtqXSA9IFZbbiAtIDFdW2pdO1xuICAgICAgICBWW24gLSAxXVtqXSA9IDA7XG4gICAgfVxuXG4gICAgVltuIC0gMV1bbiAtIDFdID0gMTtcbiAgICBlWzBdID0gMDtcbn1cblxuZnVuY3Rpb24gdHFsMihuLCBlLCBkLCBWKSB7XG5cbiAgICB2YXIgZywgaCwgaSwgaiwgaywgbCwgbSwgcCwgcixcbiAgICAgICAgZGwxLCBjLCBjMiwgYzMsIGVsMSwgcywgczIsXG4gICAgICAgIGl0ZXI7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGVbaSAtIDFdID0gZVtpXTtcbiAgICB9XG5cbiAgICBlW24gLSAxXSA9IDA7XG5cbiAgICB2YXIgZiA9IDA7XG4gICAgdmFyIHRzdDEgPSAwO1xuICAgIHZhciBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcblxuICAgIGZvciAobCA9IDA7IGwgPCBuOyBsKyspIHtcbiAgICAgICAgdHN0MSA9IE1hdGgubWF4KHRzdDEsIE1hdGguYWJzKGRbbF0pICsgTWF0aC5hYnMoZVtsXSkpO1xuICAgICAgICBtID0gbDtcbiAgICAgICAgd2hpbGUgKG0gPCBuKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZVttXSkgPD0gZXBzICogdHN0MSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG0gPiBsKSB7XG4gICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpdGVyID0gaXRlciArIDE7XG5cbiAgICAgICAgICAgICAgICBnID0gZFtsXTtcbiAgICAgICAgICAgICAgICBwID0gKGRbbCArIDFdIC0gZykgLyAoMiAqIGVbbF0pO1xuICAgICAgICAgICAgICAgIHIgPSBoeXBvdGVudXNlKHAsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChwIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByID0gLXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZFtsXSA9IGVbbF0gLyAocCArIHIpO1xuICAgICAgICAgICAgICAgIGRbbCArIDFdID0gZVtsXSAqIChwICsgcik7XG4gICAgICAgICAgICAgICAgZGwxID0gZFtsICsgMV07XG4gICAgICAgICAgICAgICAgaCA9IGcgLSBkW2xdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGwgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRbaV0gLT0gaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmID0gZiArIGg7XG5cbiAgICAgICAgICAgICAgICBwID0gZFttXTtcbiAgICAgICAgICAgICAgICBjID0gMTtcbiAgICAgICAgICAgICAgICBjMiA9IGM7XG4gICAgICAgICAgICAgICAgYzMgPSBjO1xuICAgICAgICAgICAgICAgIGVsMSA9IGVbbCArIDFdO1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtIC0gMTsgaSA+PSBsOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgYzMgPSBjMjtcbiAgICAgICAgICAgICAgICAgICAgYzIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBzMiA9IHM7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBjICogZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGMgKiBwO1xuICAgICAgICAgICAgICAgICAgICByID0gaHlwb3RlbnVzZShwLCBlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgZVtpICsgMV0gPSBzICogcjtcbiAgICAgICAgICAgICAgICAgICAgcyA9IGVbaV0gLyByO1xuICAgICAgICAgICAgICAgICAgICBjID0gcCAvIHI7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBjICogZFtpXSAtIHMgKiBnO1xuICAgICAgICAgICAgICAgICAgICBkW2kgKyAxXSA9IGggKyBzICogKGMgKiBnICsgcyAqIGRbaV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSBWW2tdW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZba11baSArIDFdID0gcyAqIFZba11baV0gKyBjICogaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZba11baV0gPSBjICogVltrXVtpXSAtIHMgKiBoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCA9IC1zICogczIgKiBjMyAqIGVsMSAqIGVbbF0gLyBkbDE7XG4gICAgICAgICAgICAgICAgZVtsXSA9IHMgKiBwO1xuICAgICAgICAgICAgICAgIGRbbF0gPSBjICogcDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKE1hdGguYWJzKGVbbF0pID4gZXBzICogdHN0MSk7XG4gICAgICAgIH1cbiAgICAgICAgZFtsXSA9IGRbbF0gKyBmO1xuICAgICAgICBlW2xdID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICBrID0gaTtcbiAgICAgICAgcCA9IGRbaV07XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZFtqXSA8IHApIHtcbiAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICBwID0gZFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrICE9PSBpKSB7XG4gICAgICAgICAgICBkW2tdID0gZFtpXTtcbiAgICAgICAgICAgIGRbaV0gPSBwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIHAgPSBWW2pdW2ldO1xuICAgICAgICAgICAgICAgIFZbal1baV0gPSBWW2pdW2tdO1xuICAgICAgICAgICAgICAgIFZbal1ba10gPSBwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcnRoZXMobiwgSCwgb3J0LCBWKSB7XG5cbiAgICB2YXIgbG93ID0gMDtcbiAgICB2YXIgaGlnaCA9IG4gLSAxO1xuICAgIHZhciBmLCBnLCBoLCBpLCBqLCBtO1xuICAgIHZhciBzY2FsZTtcblxuICAgIGZvciAobSA9IGxvdyArIDE7IG0gPD0gaGlnaCAtIDE7IG0rKykge1xuICAgICAgICBzY2FsZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICBzY2FsZSA9IHNjYWxlICsgTWF0aC5hYnMoSFtpXVttIC0gMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjYWxlICE9PSAwKSB7XG4gICAgICAgICAgICBoID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IGhpZ2g7IGkgPj0gbTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgb3J0W2ldID0gSFtpXVttIC0gMV0gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICBoICs9IG9ydFtpXSAqIG9ydFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZyA9IE1hdGguc3FydChoKTtcbiAgICAgICAgICAgIGlmIChvcnRbbV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgZyA9IC1nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoID0gaCAtIG9ydFttXSAqIGc7XG4gICAgICAgICAgICBvcnRbbV0gPSBvcnRbbV0gLSBnO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBtOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgZiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaGlnaDsgaSA+PSBtOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgZiArPSBvcnRbaV0gKiBIW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGYgPSBmIC8gaDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBIW2ldW2pdIC09IGYgKiBvcnRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGYgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGhpZ2g7IGogPj0gbTsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGYgKz0gb3J0W2pdICogSFtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmID0gZiAvIGg7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbTsgaiA8PSBoaWdoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtqXSAtPSBmICogb3J0W2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3J0W21dID0gc2NhbGUgKiBvcnRbbV07XG4gICAgICAgICAgICBIW21dW20gLSAxXSA9IHNjYWxlICogZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgVltpXVtqXSA9IChpID09PSBqID8gMSA6IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChtID0gaGlnaCAtIDE7IG0gPj0gbG93ICsgMTsgbS0tKSB7XG4gICAgICAgIGlmIChIW21dW20gLSAxXSAhPT0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gbSArIDE7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3J0W2ldID0gSFtpXVttIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IG07IGogPD0gaGlnaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZyArPSBvcnRbaV0gKiBWW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGcgPSAoZyAvIG9ydFttXSkgLyBIW21dW20gLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBWW2ldW2pdICs9IGcgKiBvcnRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBocXIyKG5uLCBlLCBkLCBWLCBIKSB7XG4gICAgdmFyIG4gPSBubiAtIDE7XG4gICAgdmFyIGxvdyA9IDA7XG4gICAgdmFyIGhpZ2ggPSBubiAtIDE7XG4gICAgdmFyIGVwcyA9IE51bWJlci5FUFNJTE9OO1xuICAgIHZhciBleHNoaWZ0ID0gMDtcbiAgICB2YXIgbm9ybSA9IDA7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBxID0gMDtcbiAgICB2YXIgciA9IDA7XG4gICAgdmFyIHMgPSAwO1xuICAgIHZhciB6ID0gMDtcbiAgICB2YXIgaXRlciA9IDA7XG4gICAgdmFyIGksIGosIGssIGwsIG0sIHQsIHcsIHgsIHk7XG4gICAgdmFyIHJhLCBzYSwgdnIsIHZpO1xuICAgIHZhciBub3RsYXN0LCBjZGl2cmVzO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG5uOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBsb3cgfHwgaSA+IGhpZ2gpIHtcbiAgICAgICAgICAgIGRbaV0gPSBIW2ldW2ldO1xuICAgICAgICAgICAgZVtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGogPSBNYXRoLm1heChpIC0gMSwgMCk7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICBub3JtID0gbm9ybSArIE1hdGguYWJzKEhbaV1bal0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKG4gPj0gbG93KSB7XG4gICAgICAgIGwgPSBuO1xuICAgICAgICB3aGlsZSAobCA+IGxvdykge1xuICAgICAgICAgICAgcyA9IE1hdGguYWJzKEhbbCAtIDFdW2wgLSAxXSkgKyBNYXRoLmFicyhIW2xdW2xdKTtcbiAgICAgICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcyA9IG5vcm07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoSFtsXVtsIC0gMV0pIDwgZXBzICogcykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGwgPT09IG4pIHtcbiAgICAgICAgICAgIEhbbl1bbl0gPSBIW25dW25dICsgZXhzaGlmdDtcbiAgICAgICAgICAgIGRbbl0gPSBIW25dW25dO1xuICAgICAgICAgICAgZVtuXSA9IDA7XG4gICAgICAgICAgICBuLS07XG4gICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChsID09PSBuIC0gMSkge1xuICAgICAgICAgICAgdyA9IEhbbl1bbiAtIDFdICogSFtuIC0gMV1bbl07XG4gICAgICAgICAgICBwID0gKEhbbiAtIDFdW24gLSAxXSAtIEhbbl1bbl0pIC8gMjtcbiAgICAgICAgICAgIHEgPSBwICogcCArIHc7XG4gICAgICAgICAgICB6ID0gTWF0aC5zcXJ0KE1hdGguYWJzKHEpKTtcbiAgICAgICAgICAgIEhbbl1bbl0gPSBIW25dW25dICsgZXhzaGlmdDtcbiAgICAgICAgICAgIEhbbiAtIDFdW24gLSAxXSA9IEhbbiAtIDFdW24gLSAxXSArIGV4c2hpZnQ7XG4gICAgICAgICAgICB4ID0gSFtuXVtuXTtcblxuICAgICAgICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICAgICAgICAgIHogPSAocCA+PSAwKSA/IChwICsgeikgOiAocCAtIHopO1xuICAgICAgICAgICAgICAgIGRbbiAtIDFdID0geCArIHo7XG4gICAgICAgICAgICAgICAgZFtuXSA9IGRbbiAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICh6ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRbbl0gPSB4IC0gdyAvIHo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVbbiAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICBlW25dID0gMDtcbiAgICAgICAgICAgICAgICB4ID0gSFtuXVtuIC0gMV07XG4gICAgICAgICAgICAgICAgcyA9IE1hdGguYWJzKHgpICsgTWF0aC5hYnMoeik7XG4gICAgICAgICAgICAgICAgcCA9IHggLyBzO1xuICAgICAgICAgICAgICAgIHEgPSB6IC8gcztcbiAgICAgICAgICAgICAgICByID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEpO1xuICAgICAgICAgICAgICAgIHAgPSBwIC8gcjtcbiAgICAgICAgICAgICAgICBxID0gcSAvIHI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSBuIC0gMTsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IEhbbiAtIDFdW2pdO1xuICAgICAgICAgICAgICAgICAgICBIW24gLSAxXVtqXSA9IHEgKiB6ICsgcCAqIEhbbl1bal07XG4gICAgICAgICAgICAgICAgICAgIEhbbl1bal0gPSBxICogSFtuXVtqXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHogPSBIW2ldW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtuIC0gMV0gPSBxICogeiArIHAgKiBIW2ldW25dO1xuICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gcSAqIEhbaV1bbl0gLSBwICogejtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHogPSBWW2ldW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgVltpXVtuIC0gMV0gPSBxICogeiArIHAgKiBWW2ldW25dO1xuICAgICAgICAgICAgICAgICAgICBWW2ldW25dID0gcSAqIFZbaV1bbl0gLSBwICogejtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRbbiAtIDFdID0geCArIHA7XG4gICAgICAgICAgICAgICAgZFtuXSA9IHggKyBwO1xuICAgICAgICAgICAgICAgIGVbbiAtIDFdID0gejtcbiAgICAgICAgICAgICAgICBlW25dID0gLXo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG4gPSBuIC0gMjtcbiAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IEhbbl1bbl07XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIHcgPSAwO1xuICAgICAgICAgICAgaWYgKGwgPCBuKSB7XG4gICAgICAgICAgICAgICAgeSA9IEhbbiAtIDFdW24gLSAxXTtcbiAgICAgICAgICAgICAgICB3ID0gSFtuXVtuIC0gMV0gKiBIW24gLSAxXVtuXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZXIgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgZXhzaGlmdCArPSB4O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtpXSAtPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5hYnMoSFtuXVtuIC0gMV0pICsgTWF0aC5hYnMoSFtuIC0gMV1bbiAtIDJdKTtcbiAgICAgICAgICAgICAgICB4ID0geSA9IDAuNzUgKiBzO1xuICAgICAgICAgICAgICAgIHcgPSAtMC40Mzc1ICogcyAqIHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVyID09PSAzMCkge1xuICAgICAgICAgICAgICAgIHMgPSAoeSAtIHgpIC8gMjtcbiAgICAgICAgICAgICAgICBzID0gcyAqIHMgKyB3O1xuICAgICAgICAgICAgICAgIGlmIChzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzID0geCAtIHcgLyAoKHkgLSB4KSAvIDIgKyBzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtpXSAtPSBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4c2hpZnQgKz0gcztcbiAgICAgICAgICAgICAgICAgICAgeCA9IHkgPSB3ID0gMC45NjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVyID0gaXRlciArIDE7XG5cbiAgICAgICAgICAgIG0gPSBuIC0gMjtcbiAgICAgICAgICAgIHdoaWxlIChtID49IGwpIHtcbiAgICAgICAgICAgICAgICB6ID0gSFttXVttXTtcbiAgICAgICAgICAgICAgICByID0geCAtIHo7XG4gICAgICAgICAgICAgICAgcyA9IHkgLSB6O1xuICAgICAgICAgICAgICAgIHAgPSAociAqIHMgLSB3KSAvIEhbbSArIDFdW21dICsgSFttXVttICsgMV07XG4gICAgICAgICAgICAgICAgcSA9IEhbbSArIDFdW20gKyAxXSAtIHogLSByIC0gcztcbiAgICAgICAgICAgICAgICByID0gSFttICsgMl1bbSArIDFdO1xuICAgICAgICAgICAgICAgIHMgPSBNYXRoLmFicyhwKSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMocik7XG4gICAgICAgICAgICAgICAgcCA9IHAgLyBzO1xuICAgICAgICAgICAgICAgIHEgPSBxIC8gcztcbiAgICAgICAgICAgICAgICByID0gciAvIHM7XG4gICAgICAgICAgICAgICAgaWYgKG0gPT09IGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhIW21dW20gLSAxXSkgKiAoTWF0aC5hYnMocSkgKyBNYXRoLmFicyhyKSkgPCBlcHMgKiAoTWF0aC5hYnMocCkgKiAoTWF0aC5hYnMoSFttIC0gMV1bbSAtIDFdKSArIE1hdGguYWJzKHopICsgTWF0aC5hYnMoSFttICsgMV1bbSArIDFdKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtLS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IG0gKyAyOyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgICAgIEhbaV1baSAtIDJdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IG0gKyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIEhbaV1baSAtIDNdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoayA9IG07IGsgPD0gbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgIG5vdGxhc3QgPSAoayAhPT0gbiAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChrICE9PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBIW2tdW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcSA9IEhbayArIDFdW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgciA9IChub3RsYXN0ID8gSFtrICsgMl1bayAtIDFdIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLmFicyhwKSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMocik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gcCAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBxID0gcSAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gciAvIHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEgKyByICogcik7XG4gICAgICAgICAgICAgICAgaWYgKHAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoayAhPT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrXVtrIC0gMV0gPSAtcyAqIHg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobCAhPT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrXVtrIC0gMV0gPSAtSFtrXVtrIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwID0gcCArIHM7XG4gICAgICAgICAgICAgICAgICAgIHggPSBwIC8gcztcbiAgICAgICAgICAgICAgICAgICAgeSA9IHEgLyBzO1xuICAgICAgICAgICAgICAgICAgICB6ID0gciAvIHM7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxIC8gcDtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgLyBwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGs7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gSFtrXVtqXSArIHEgKiBIW2sgKyAxXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHAgKyByICogSFtrICsgMl1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtrICsgMl1bal0gPSBIW2sgKyAyXVtqXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBIW2tdW2pdID0gSFtrXVtqXSAtIHAgKiB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrICsgMV1bal0gPSBIW2sgKyAxXVtqXSAtIHAgKiB5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBNYXRoLm1pbihuLCBrICsgMyk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHggKiBIW2ldW2tdICsgeSAqIEhbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gcCArIHogKiBIW2ldW2sgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2ldW2sgKyAyXSA9IEhbaV1bayArIDJdIC0gcCAqIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1ba10gPSBIW2ldW2tdIC0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bayArIDFdID0gSFtpXVtrICsgMV0gLSBwICogcTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB4ICogVltpXVtrXSArIHkgKiBWW2ldW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHAgKyB6ICogVltpXVtrICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtrICsgMl0gPSBWW2ldW2sgKyAyXSAtIHAgKiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gVltpXVtrXSAtIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2sgKyAxXSA9IFZbaV1bayArIDFdIC0gcCAqIHE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9ybSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChuID0gbm4gLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICBwID0gZFtuXTtcbiAgICAgICAgcSA9IGVbbl07XG5cbiAgICAgICAgaWYgKHEgPT09IDApIHtcbiAgICAgICAgICAgIGwgPSBuO1xuICAgICAgICAgICAgSFtuXVtuXSA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB3ID0gSFtpXVtpXSAtIHA7XG4gICAgICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbDsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgKyBIW2ldW2pdICogSFtqXVtuXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IHc7XG4gICAgICAgICAgICAgICAgICAgIHMgPSByO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtuXSA9ICh3ICE9PSAwKSA/ICgtciAvIHcpIDogKC1yIC8gKGVwcyAqIG5vcm0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBIW2ldW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBIW2kgKyAxXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEgPSAoZFtpXSAtIHApICogKGRbaV0gLSBwKSArIGVbaV0gKiBlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh4ICogcyAtIHogKiByKSAvIHE7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gKE1hdGguYWJzKHgpID4gTWF0aC5hYnMoeikpID8gKCgtciAtIHcgKiB0KSAvIHgpIDogKCgtcyAtIHkgKiB0KSAvIHopO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdCA9IE1hdGguYWJzKEhbaV1bbl0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVwcyAqIHQpICogdCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtqXVtuXSA9IEhbal1bbl0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHEgPCAwKSB7XG4gICAgICAgICAgICBsID0gbiAtIDE7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhIW25dW24gLSAxXSkgPiBNYXRoLmFicyhIW24gLSAxXVtuXSkpIHtcbiAgICAgICAgICAgICAgICBIW24gLSAxXVtuIC0gMV0gPSBxIC8gSFtuXVtuIC0gMV07XG4gICAgICAgICAgICAgICAgSFtuIC0gMV1bbl0gPSAtKEhbbl1bbl0gLSBwKSAvIEhbbl1bbiAtIDFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2RpdigwLCAtSFtuIC0gMV1bbl0sIEhbbiAtIDFdW24gLSAxXSAtIHAsIHEpO1xuICAgICAgICAgICAgICAgIEhbbiAtIDFdW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgSFtuIC0gMV1bbl0gPSBjZGl2cmVzWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBIW25dW24gLSAxXSA9IDA7XG4gICAgICAgICAgICBIW25dW25dID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHJhID0gMDtcbiAgICAgICAgICAgICAgICBzYSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbDsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmEgPSByYSArIEhbaV1bal0gKiBIW2pdW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgc2EgPSBzYSArIEhbaV1bal0gKiBIW2pdW25dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHcgPSBIW2ldW2ldIC0gcDtcblxuICAgICAgICAgICAgICAgIGlmIChlW2ldIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB6ID0gdztcbiAgICAgICAgICAgICAgICAgICAgciA9IHJhO1xuICAgICAgICAgICAgICAgICAgICBzID0gc2E7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW2ldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2RpdigtcmEsIC1zYSwgdywgcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBIW2ldW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBIW2kgKyAxXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZyID0gKGRbaV0gLSBwKSAqIChkW2ldIC0gcCkgKyBlW2ldICogZVtpXSAtIHEgKiBxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmkgPSAoZFtpXSAtIHApICogMiAqIHE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnIgPT09IDAgJiYgdmkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ciA9IGVwcyAqIG5vcm0gKiAoTWF0aC5hYnModykgKyBNYXRoLmFicyhxKSArIE1hdGguYWJzKHgpICsgTWF0aC5hYnMoeSkgKyBNYXRoLmFicyh6KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2Rpdih4ICogciAtIHogKiByYSArIHEgKiBzYSwgeCAqIHMgLSB6ICogc2EgLSBxICogcmEsIHZyLCB2aSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh4KSA+IChNYXRoLmFicyh6KSArIE1hdGguYWJzKHEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW24gLSAxXSA9ICgtcmEgLSB3ICogSFtpXVtuIC0gMV0gKyBxICogSFtpXVtuXSkgLyB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gKC1zYSAtIHcgKiBIW2ldW25dIC0gcSAqIEhbaV1bbiAtIDFdKSAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KC1yIC0geSAqIEhbaV1bbiAtIDFdLCAtcyAtIHkgKiBIW2ldW25dLCB6LCBxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2kgKyAxXVtuIC0gMV0gPSBjZGl2cmVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHQgPSBNYXRoLm1heChNYXRoLmFicyhIW2ldW24gLSAxXSksIE1hdGguYWJzKEhbaV1bbl0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlcHMgKiB0KSAqIHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDw9IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbal1bbiAtIDFdID0gSFtqXVtuIC0gMV0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbal1bbl0gPSBIW2pdW25dIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBubjsgaSsrKSB7XG4gICAgICAgIGlmIChpIDwgbG93IHx8IGkgPiBoaWdoKSB7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbm47IGorKykge1xuICAgICAgICAgICAgICAgIFZbaV1bal0gPSBIW2ldW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChqID0gbm4gLSAxOyBqID49IGxvdzsgai0tKSB7XG4gICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgIHogPSAwO1xuICAgICAgICAgICAgZm9yIChrID0gbG93OyBrIDw9IE1hdGgubWluKGosIGhpZ2gpOyBrKyspIHtcbiAgICAgICAgICAgICAgICB6ID0geiArIFZbaV1ba10gKiBIW2tdW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVltpXVtqXSA9IHo7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNkaXYoeHIsIHhpLCB5ciwgeWkpIHtcbiAgICB2YXIgciwgZDtcbiAgICBpZiAoTWF0aC5hYnMoeXIpID4gTWF0aC5hYnMoeWkpKSB7XG4gICAgICAgIHIgPSB5aSAvIHlyO1xuICAgICAgICBkID0geXIgKyByICogeWk7XG4gICAgICAgIHJldHVybiBbKHhyICsgciAqIHhpKSAvIGQsICh4aSAtIHIgKiB4cikgLyBkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByID0geXIgLyB5aTtcbiAgICAgICAgZCA9IHlpICsgciAqIHlyO1xuICAgICAgICByZXR1cm4gWyhyICogeHIgKyB4aSkgLyBkLCAociAqIHhpIC0geHIpIC8gZF07XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9ldmQuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeCwgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuLi9pbmRleCc7XG5cbi8qKlxuICogQGNsYXNzIENob2xlc2t5RGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9DaG9sZXNreURlY29tcG9zaXRpb24uY3NcbiAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9sZXNreURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcbiAgICAgICAgaWYgKCF2YWx1ZS5pc1N5bW1ldHJpYygpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3Qgc3ltbWV0cmljJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYSA9IHZhbHVlO1xuICAgICAgICB2YXIgZGltZW5zaW9uID0gYS5yb3dzO1xuICAgICAgICB2YXIgbCA9IG5ldyBNYXRyaXgoZGltZW5zaW9uLCBkaW1lbnNpb24pO1xuICAgICAgICB2YXIgcG9zaXRpdmVEZWZpbml0ZSA9IHRydWU7XG4gICAgICAgIHZhciBpLCBqLCBrO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBkaW1lbnNpb247IGorKykge1xuICAgICAgICAgICAgdmFyIExyb3dqID0gbFtqXTtcbiAgICAgICAgICAgIHZhciBkID0gMDtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBqOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgTHJvd2sgPSBsW2tdO1xuICAgICAgICAgICAgICAgIHZhciBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gTHJvd2tbaV0gKiBMcm93altpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTHJvd2pba10gPSBzID0gKGEuZ2V0KGosIGspIC0gcykgLyBsW2tdW2tdO1xuICAgICAgICAgICAgICAgIGQgPSBkICsgcyAqIHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSBhLmdldChqLCBqKSAtIGQ7XG5cbiAgICAgICAgICAgIHBvc2l0aXZlRGVmaW5pdGUgJj0gKGQgPiAwKTtcbiAgICAgICAgICAgIGxbal1bal0gPSBNYXRoLnNxcnQoTWF0aC5tYXgoZCwgMCkpO1xuICAgICAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgICAgICAgICAgIGxbal1ba10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3NpdGl2ZURlZmluaXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3QgcG9zaXRpdmUgZGVmaW5pdGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuTCA9IGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBsID0gdGhpcy5MO1xuICAgICAgICB2YXIgZGltZW5zaW9uID0gbC5yb3dzO1xuXG4gICAgICAgIGlmICh2YWx1ZS5yb3dzICE9PSBkaW1lbnNpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGRpbWVuc2lvbnMgZG8gbm90IG1hdGNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY291bnQgPSB2YWx1ZS5jb2x1bW5zO1xuICAgICAgICB2YXIgQiA9IHZhbHVlLmNsb25lKCk7XG4gICAgICAgIHZhciBpLCBqLCBrO1xuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEJba11bal0gLT0gQltpXVtqXSAqIGxba11baV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJba11bal0gLz0gbFtrXVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IGRpbWVuc2lvbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgZGltZW5zaW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQltrXVtqXSAtPSBCW2ldW2pdICogbFtpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQltrXVtqXSAvPSBsW2tdW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGxvd2VyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTDtcbiAgICB9XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvY2hvbGVza3kuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW1hZ2VEYXRhQ29udmVydGVyIHtcclxuICBwdWJsaWMgY29udmVydEltYWdlVG9JbWFnZURhdGEoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgZHJhd2luZyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRJbWFnZURhdGFUb0ltYWdlKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlRGF0YS53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyBkcmF3aW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKGltYWdlRGF0YS53aWR0aCwgaW1hZ2VEYXRhLmhlaWdodCk7XHJcbiAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlRGF0YUNvbnZlcnRlci50cyIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgcHVibGljIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xyXG5cclxuICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlTG9hZGVyLnRzIiwiaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgTGFiUGFyYW1ldGVyc0JveCB9IGZyb20gJ2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0JveCc7XHJcbmltcG9ydCB7IENvbG9yUHJvZmlsZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSB9IGZyb20gJ21vZGVscy9JbGx1bWluYW50VHlwZSc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIHNlbGVjdGVkQ29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGU7XHJcbiAgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzO1xyXG4gIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZTtcclxuICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblBhcmFtZXRlcnNCb3ggZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRDb2xvclNwYWNlOiBhcHBTdGF0ZS5pbnB1dC5zZWxlY3RlZENvbG9yU3BhY2UsXHJcbiAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBhcHBTdGF0ZS5pbnB1dC5jb252ZXJzaW9uUGFyYW1ldGVycyxcclxuICAgICAgaWxsdW1pbmFudFR5cGU6IGFwcFN0YXRlLmlucHV0LmlsbHVtaW5hbnRUeXBlLFxyXG4gICAgICBjb2xvclByb2ZpbGVUeXBlOiBhcHBTdGF0ZS5pbnB1dC5jb2xvclByb2ZpbGVUeXBlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9PlxyXG4gICAgICAgICR7dGhpcy5nZXRDb2xvclNwYWNlUGFyYW1ldGVyc0JveCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbG9yU3BhY2VQYXJhbWV0ZXJzQm94KCkge1xyXG4gICAgY29uc3QgeyBpbGx1bWluYW50VHlwZSwgY29sb3JQcm9maWxlVHlwZSwgY29udmVyc2lvblBhcmFtZXRlcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW0NvbG9yU3BhY2VUeXBlLkhTVl06ICgpID0+IG51bGwsXHJcbiAgICAgIFtDb2xvclNwYWNlVHlwZS5ZQ2JDcl06ICgpID0+IG51bGwsXHJcbiAgICAgIFtDb2xvclNwYWNlVHlwZS5MYWJdOiAoKSA9PlxyXG4gICAgICAgIExhYlBhcmFtZXRlcnNCb3goaWxsdW1pbmFudFR5cGUsIGNvbG9yUHJvZmlsZVR5cGUsIGNvbnZlcnNpb25QYXJhbWV0ZXJzKVxyXG4gICAgfVt0aGlzLnN0YXRlLnNlbGVjdGVkQ29sb3JTcGFjZV0oKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9Db252ZXJzaW9uUGFyYW1ldGVyc0JveC50cyIsImltcG9ydCB7IHdpcmUgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcbmltcG9ydCB7XHJcbiAgQ29sb3JQcm9maWxlVHlwZSxcclxuICBsYWJlbGVkQ29sb3JQcm9maWxlcyxcclxuICBwcmVkZWZpbmVkQ29sb3JQcm9maWxlc1xyXG59IGZyb20gJ21vZGVscy9Db2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSwgbGFiZWxlZElsbHVtaW5hbnRzLCBwcmVkZWZpbmVkSWxsdW1pbmFudHMgfSBmcm9tICdtb2RlbHMvSWxsdW1pbmFudFR5cGUnO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IGNoYW5nZUlsbHVtaW5hbnRUeXBlIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VJbGx1bWluYW50VHlwZSc7XHJcblxyXG5pbXBvcnQgeyBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgTGFiZWxlZFNlbGVjdCB9IGZyb20gJ2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdCc7XHJcbmltcG9ydCB7IExhYlBhcmFtZXRlcnNJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0lucHV0cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFiUGFyYW1ldGVyc0JveChcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUsXHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZSxcclxuICBjb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnNcclxuKSB7XHJcbiAgY29uc3QgbGFiUGFyYW1ldGVyc0lucHV0ID0gbmV3IExhYlBhcmFtZXRlcnNJbnB1dChjb252ZXJzaW9uUGFyYW1ldGVycyk7XHJcblxyXG4gIHJldHVybiB3aXJlKClgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgZm9yPVwiaWxsdW1pbmFudC10eXBlLXNlbGVjdFwiPklsbHVtaW5hbnQgdHlwZTogPC9sYWJlbD5cclxuICAgICAgJHtMYWJlbGVkU2VsZWN0KFxyXG4gICAgICAgICdpbGx1bWluYW50LXR5cGUtc2VsZWN0JyxcclxuICAgICAgICBsYWJlbGVkSWxsdW1pbmFudHMsXHJcbiAgICAgICAgaWxsdW1pbmFudFR5cGUsXHJcbiAgICAgICAgb25JbGx1bWluYW50Q2hhbmdlLmJpbmQobnVsbCwgY29udmVyc2lvblBhcmFtZXRlcnMud2hpdGVQb2ludClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJjb2xvci1wcm9maWxlLXNlbGVjdFwiPkNvbG9yIHByb2ZpbGU6IDwvbGFiZWw+XHJcbiAgICAgICR7TGFiZWxlZFNlbGVjdChcclxuICAgICAgICAnY29sb3ItcHJvZmlsZS1zZWxlY3QnLFxyXG4gICAgICAgIGxhYmVsZWRDb2xvclByb2ZpbGVzLFxyXG4gICAgICAgIGNvbG9yUHJvZmlsZVR5cGUsXHJcbiAgICAgICAgb25Db2xvclByb2ZpbGVDaGFuZ2UuYmluZChudWxsLCBjb252ZXJzaW9uUGFyYW1ldGVycylcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICR7bGFiUGFyYW1ldGVyc0lucHV0fVxyXG4gIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uSWxsdW1pbmFudENoYW5nZShjdXJyZW50V2hpdGVQb2ludDogQ29sb3JQb2ludCwgbmV3SWxsdW1pbmFudDogSWxsdW1pbmFudFR5cGUpIHtcclxuICBpZiAobmV3SWxsdW1pbmFudCA9PT0gSWxsdW1pbmFudFR5cGUuQ3VzdG9tKSB7XHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VJbGx1bWluYW50VHlwZShuZXdJbGx1bWluYW50LCBjdXJyZW50V2hpdGVQb2ludCkpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvdW5kSWxsdW1pbmFudCA9IHByZWRlZmluZWRJbGx1bWluYW50cy5maW5kKFxyXG4gICAgaWxsdW1pbmFudCA9PiBpbGx1bWluYW50LmlsbHVtaW5hbnRUeXBlID09PSBuZXdJbGx1bWluYW50XHJcbiAgKTtcclxuICBpZiAoIWZvdW5kSWxsdW1pbmFudCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBpbGx1bWluYW50IG5vdCBmb3VuZCBpbiBwcmVkZWZpbmVkIG9uZXMnKTtcclxuICB9XHJcblxyXG4gIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUlsbHVtaW5hbnRUeXBlKG5ld0lsbHVtaW5hbnQsIGZvdW5kSWxsdW1pbmFudC53aGl0ZVBvaW50KCkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Db2xvclByb2ZpbGVDaGFuZ2UoXHJcbiAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycyxcclxuICBuZXdDb2xvclByb2ZpbGU6IENvbG9yUHJvZmlsZVR5cGVcclxuKSB7XHJcbiAgaWYgKG5ld0NvbG9yUHJvZmlsZSA9PT0gQ29sb3JQcm9maWxlVHlwZS5DdXN0b20pIHtcclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUobmV3Q29sb3JQcm9maWxlLCBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMpKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3VuZENvbG9yUHJvZmlsZSA9IHByZWRlZmluZWRDb2xvclByb2ZpbGVzLmZpbmQoXHJcbiAgICBjb2xvclByb2ZpbGUgPT4gY29sb3JQcm9maWxlLmNvbG9yUHJvZmlsZVR5cGUgPT09IG5ld0NvbG9yUHJvZmlsZVxyXG4gICk7XHJcbiAgaWYgKCFmb3VuZENvbG9yUHJvZmlsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBjb2xvciBwcm9maWxlIG5vdCBmb3VuZCBpbiBwcmVkZWZpbmVkIG9uZXMnKTtcclxuICB9XHJcblxyXG4gIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUobmV3Q29sb3JQcm9maWxlLCBmb3VuZENvbG9yUHJvZmlsZS5wYXJhbWV0ZXJzKCkpKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0xhYlBhcmFtZXRlcnNCb3gudHMiLCJpbXBvcnQgeyB3aXJlIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcbmltcG9ydCB7IEh5cGVyQ29tcG9uZW50IH0gZnJvbSAndXRpbHMvSHlwZXJDb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQb2ludCB9IGZyb20gJ21vZGVscy9Db2xvclBvaW50JztcclxuaW1wb3J0IHsgQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5cclxuaW1wb3J0ICcuL0xhYlBhcmFtZXRlcnNJbnB1dHMuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgQ29tcG9uZW50U3RhdGUge1xyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhYlBhcmFtZXRlcnNJbnB1dCBleHRlbmRzIEh5cGVyQ29tcG9uZW50PENvbXBvbmVudFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub25HYW1tYUNoYW5nZSA9IHRoaXMub25HYW1tYUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbG9yUG9pbnRDaGFuZ2UgPSB0aGlzLm9uQ29sb3JQb2ludENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbnZlcnNpb25QYXJhbWV0ZXJzKGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbnZlcnNpb25QYXJhbWV0ZXJzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPkNocm9tYWNpdHk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD54PC90aD5cclxuICAgICAgICAgICAgICA8dGg+eTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgJHtbXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdSZWQgcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjb252ZXJzaW9uUGFyYW1ldGVycy5yZWRQb2ludCxcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db2xvclBvaW50Q2hhbmdlKCdyZWQnKVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdHcmVlbiBwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzLmdyZWVuUG9pbnQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29sb3JQb2ludENoYW5nZSgnZ3JlZW4nKVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdCbHVlIHByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY29udmVyc2lvblBhcmFtZXRlcnMuYmx1ZVBvaW50LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbG9yUG9pbnRDaGFuZ2UoJ2JsdWUnKVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdXaGl0ZSBwb2ludCcsXHJcbiAgICAgICAgICAgICAgICBjb252ZXJzaW9uUGFyYW1ldGVycy53aGl0ZVBvaW50LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbG9yUG9pbnRDaGFuZ2UoJ3doaXRlJylcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBHYW1tYTpcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9JHtjb252ZXJzaW9uUGFyYW1ldGVycy5nYW1tYX1cclxuICAgICAgICAgICAgb25ibHVyPSR7dGhpcy5vbkdhbW1hQ2hhbmdlfSBzdGVwPVwiMC4xXCIgY2xhc3M9XCJnYW1tYS1pbnB1dFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db2xvclBvaW50Q2hhbmdlKGNvbG9yUG9pbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoeE9yWTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGAke2NvbG9yUG9pbnROYW1lfVBvaW50YDtcclxuXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgY29uc3QgbmV3Q29sb3JQb2ludCA9IDxDb2xvclBvaW50Pk9iamVjdC5hc3NpZ24oe30sIDxDb2xvclBvaW50Pig8YW55PnRoaXMuc3RhdGVcclxuICAgICAgICAuY29udmVyc2lvblBhcmFtZXRlcnMpW3Byb3BlcnR5TmFtZV0pO1xyXG5cclxuICAgICAgaWYgKHhPclkgPT09ICd4Jykge1xyXG4gICAgICAgIG5ld0NvbG9yUG9pbnQueCA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHhPclkgPT09ICd5Jykge1xyXG4gICAgICAgIG5ld0NvbG9yUG9pbnQueSA9IHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdDb252ZXJzaW9uUGFyYW1ldGVycyA9IHRoaXMuc3RhdGUuY29udmVyc2lvblBhcmFtZXRlcnMucGF0Y2goe1xyXG4gICAgICAgIFtwcm9wZXJ0eU5hbWVdOiBuZXdDb2xvclBvaW50XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlQ29sb3JQcm9maWxlVHlwZShDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSwgbmV3Q29udmVyc2lvblBhcmFtZXRlcnMpKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uR2FtbWFDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBuZXdHYW1tYSA9IGdldFZhbHVlRnJvbUlucHV0RXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGNvbnN0IG5ld0NvbnZlcnNpb25QYXJhbWV0ZXJzID0gdGhpcy5zdGF0ZS5jb252ZXJzaW9uUGFyYW1ldGVycy5wYXRjaCh7XHJcbiAgICAgIGdhbW1hOiBuZXdHYW1tYVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlQ29sb3JQcm9maWxlVHlwZShDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSwgbmV3Q29udmVyc2lvblBhcmFtZXRlcnMpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbG9yUG9pbnRSb3coXHJcbiAgbGFiZWw6IHN0cmluZyxcclxuICBjb2xvclBvaW50OiBDb2xvclBvaW50LFxyXG4gIG9uQ29sb3JQb2ludENoYW5nZTogKHhPclk6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4gdm9pZFxyXG4pIHtcclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoeE9yWTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRnJvbUlucHV0RXZlbnQoZXZlbnQpO1xyXG4gICAgICBvbkNvbG9yUG9pbnRDaGFuZ2UoeE9yWSwgdmFsdWUpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aXJlKGNvbG9yUG9pbnQpYFxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+JHtsYWJlbH08L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cInBvaW50LXBvc2l0aW9uLWlucHV0XCJcclxuICAgICAgICAgIHZhbHVlPSR7Y29sb3JQb2ludC54fSBzdGVwPVwiMC4wMDFcIiBvbmJsdXI9JHtoYW5kbGVDaGFuZ2UoJ3gnKX1cclxuICAgICAgICA+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwicG9pbnQtcG9zaXRpb24taW5wdXRcIlxyXG4gICAgICAgICAgdmFsdWU9JHtjb2xvclBvaW50Lnl9IHN0ZXA9XCIwLjAwMVwiIG9uYmx1cj0ke2hhbmRsZUNoYW5nZSgneScpfVxyXG4gICAgICAgID5cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tSW5wdXRFdmVudChldmVudDogRXZlbnQpOiBudW1iZXIge1xyXG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldDtcclxuXHJcbiAgcmV0dXJuIHBhcnNlRmxvYXQoaW5wdXRFbGVtZW50LnZhbHVlKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0xhYlBhcmFtZXRlcnNJbnB1dHMudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9MYWJQYXJhbWV0ZXJzSW5wdXRzLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTGFiUGFyYW1ldGVyc0lucHV0cy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0xhYlBhcmFtZXRlcnNJbnB1dHMuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9MYWJQYXJhbWV0ZXJzSW5wdXRzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtbWEtaW5wdXQge1xcbiAgd2lkdGg6IDYwcHg7IH1cXG5cXG4ucG9pbnQtcG9zaXRpb24taW5wdXQge1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0lucHV0cy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==