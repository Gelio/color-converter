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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__ = __webpack_require__(54);
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
const redux_1 = __webpack_require__(59);
const inputReducer_1 = __webpack_require__(75);
const outputReducer_1 = __webpack_require__(77);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wrap_wrap__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return __WEBPACK_IMPORTED_MODULE_2__wrap_wrap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wrap_WrapperMatrix2D__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix2D", function() { return __WEBPACK_IMPORTED_MODULE_3__wrap_WrapperMatrix2D__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wrap_WrapperMatrix1D__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix1D", function() { return __WEBPACK_IMPORTED_MODULE_4__wrap_WrapperMatrix1D__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__decompositions__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return __WEBPACK_IMPORTED_MODULE_5__decompositions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return __WEBPACK_IMPORTED_MODULE_5__decompositions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SingularValueDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SVD", function() { return __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EigenvalueDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EVD", function() { return __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CholeskyDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CHO", function() { return __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LuDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LU", function() { return __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dc_qr_js__ = __webpack_require__(45);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_detection_js__ = __webpack_require__(52);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbol_species__ = __webpack_require__(95);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ml_array_rescale__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_transpose__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_row__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_sub__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_selection__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_rowSelection__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_columnSelection__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_column__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_flipRow__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_flipColumn__ = __webpack_require__(107);














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

var	fixUrls = __webpack_require__(49);

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
    getImageData() {
        const imageData = new ImageData(this.width, this.height);
        let imageDataIndex = 0;
        this.values.forEach(value => {
            // tslint:disable:no-increment-decrement
            imageData.data[imageDataIndex++] = value;
            imageData.data[imageDataIndex++] = value;
            imageData.data[imageDataIndex++] = value;
            imageData.data[imageDataIndex++] = 255;
            // tslint:disable:no-increment-decrement
        });
        return imageData;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Engine_js__ = __webpack_require__(53);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__ = __webpack_require__(55);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(68);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(67);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(61);


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mutateMap(array, callback) {
    const length = array.length;
    for (let i = 0; i < length; i += 1) {
        array[i] = callback(array[i], i, array);
    }
    return array;
}
exports.mutateMap = mutateMap;


/***/ }),
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(47);
__webpack_require__(50);
const Application_1 = __webpack_require__(51);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n.container {\n  margin: auto; }\n\n.footer {\n  margin: auto;\n  font-size: 0.8em;\n  margin-top: 3rem;\n  text-align: center; }\n", ""]);

// exports


/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
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
const ImagePicker_1 = __webpack_require__(58);
const ColorSpacePicker_1 = __webpack_require__(79);
const OriginalImageDisplay_1 = __webpack_require__(80);
const ResultsDisplay_1 = __webpack_require__(83);
const StartConversionButton_1 = __webpack_require__(86);
const appStore_1 = __webpack_require__(2);
const configuration_1 = __webpack_require__(36);
const ImageLoader_1 = __webpack_require__(113);
const changeOriginalImage_1 = __webpack_require__(20);
const ConversionParametersBox_1 = __webpack_require__(114);
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Megatron_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Path_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Style_js__ = __webpack_require__(57);
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
const FileToImageConverter_1 = __webpack_require__(78);
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(74);
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(64);




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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(62);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(33)))

/***/ }),
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(66);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 66 */
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
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(71);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), __webpack_require__(70)(module)))

/***/ }),
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
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
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(36);
const mergeState_1 = __webpack_require__(76);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mergeState(state, ...updates) {
    return Object.assign({}, state, ...updates);
}
exports.mergeState = mergeState;


/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const HyperContainer_1 = __webpack_require__(8);
__webpack_require__(81);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".original-image-wrapper {\n  margin: 1em auto;\n  max-width: 800px;\n  max-height: 400px; }\n  .original-image-wrapper img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n    max-height: 400px;\n    height: auto; }\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const HyperContainer_1 = __webpack_require__(8);
__webpack_require__(84);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".results {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column; }\n  @media (min-width: 1000px) {\n    .results {\n      flex-direction: row; } }\n\n.result {\n  margin: 0.5em;\n  max-width: 800px; }\n  .result img {\n    max-width: 100%;\n    max-height: 100%;\n    height: auto; }\n\n.result__label {\n  font-size: 2em; }\n", ""]);

// exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HyperContainer_1 = __webpack_require__(8);
const conversionFinished_1 = __webpack_require__(18);
const conversionStarted_1 = __webpack_require__(37);
const appStore_1 = __webpack_require__(2);
const createColorSpaceConverter_1 = __webpack_require__(87);
const ImageDataConverter_1 = __webpack_require__(112);
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
        conversionResult.normalizeComponents();
        const resultImages = conversionResult.components
            .map(component => component.getImageData())
            .map(imageDataConverter.convertImageDataToImage);
        appStore_1.appStore.dispatch(conversionFinished_1.conversionFinished(conversionResult, resultImages));
    }
}
exports.StartConversionButton = StartConversionButton;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorSpaceType_1 = __webpack_require__(13);
const HSVColorSpaceConverter_1 = __webpack_require__(88);
const LabColorSpaceConverter_1 = __webpack_require__(90);
const YCbCrColorSpaceConverter_1 = __webpack_require__(92);
const XYZConverter_1 = __webpack_require__(94);
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HSVColorSpaceConversionResult_1 = __webpack_require__(89);
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mutateMap_1 = __webpack_require__(42);
class HSVColorSpaceConversionResult {
    constructor(hComponentResult, sComponentResult, vComponentResult) {
        this.components = [hComponentResult, sComponentResult, vComponentResult];
    }
    normalizeComponents() {
        const [hComponent, sComponent, vComponent] = this.components;
        mutateMap_1.mutateMap(hComponent.values, hue => hue / 360 * 255);
        mutateMap_1.mutateMap(sComponent.values, saturation => saturation / 100 * 255);
        mutateMap_1.mutateMap(vComponent.values, saturation => saturation / 100 * 255);
    }
}
exports.HSVColorSpaceConversionResult = HSVColorSpaceConversionResult;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LabColorSpaceConversionResult_1 = __webpack_require__(91);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mutateMap_1 = __webpack_require__(42);
class LabColorSpaceConversionResult {
    constructor(lComponentResult, aComponentResult, bComponentResult) {
        this.components = [lComponentResult, aComponentResult, bComponentResult];
    }
    normalizeComponents() {
        const [lComponent, aComponent, bComponent] = this.components;
        mutateMap_1.mutateMap(lComponent.values, l => l / 100 * 255);
        mutateMap_1.mutateMap(aComponent.values, a => a + 128);
        mutateMap_1.mutateMap(bComponent.values, b => b + 128);
    }
}
exports.LabColorSpaceConversionResult = LabColorSpaceConversionResult;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PartialConversionResult_1 = __webpack_require__(22);
const YCbCrColorSpaceConversionResult_1 = __webpack_require__(93);
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class YCbCrColorSpaceConversionResult {
    constructor(yComponentResult, cbComponentResult, crComponentResult) {
        this.components = [yComponentResult, cbComponentResult, crComponentResult];
    }
    normalizeComponents() {
        // Already normalized
    }
}
exports.YCbCrColorSpaceConversionResult = YCbCrColorSpaceConversionResult;


/***/ }),
/* 94 */
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
/* 95 */
/***/ (function(module, exports) {

if (!Symbol.species) {
    Symbol.species = Symbol.for('@@species');
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rescale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ml_array_max__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ml_array_min__ = __webpack_require__(98);



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
/* 97 */
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
/* 98 */
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
/* 99 */
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
/* 100 */
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
/* 101 */
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
/* 102 */
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
/* 103 */
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
/* 104 */
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
/* 105 */
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
/* 106 */
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
/* 107 */
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
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WrapperMatrix1D__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WrapperMatrix2D__ = __webpack_require__(44);



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
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["b"] = solve;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dc_lu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dc_qr__ = __webpack_require__(45);
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
/* 110 */
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
/* 111 */
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
/* 112 */
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
/* 113 */
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HyperContainer_1 = __webpack_require__(8);
const LabParametersBox_1 = __webpack_require__(115);
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
/* 115 */
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
const LabParametersInputs_1 = __webpack_require__(116);
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const HyperComponent_1 = __webpack_require__(16);
const changeColorProfileType_1 = __webpack_require__(19);
const appStore_1 = __webpack_require__(2);
const ColorProfileType_1 = __webpack_require__(21);
__webpack_require__(117);
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".gamma-input {\n  width: 60px; }\n\n.point-position-input {\n  width: 100px; }\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDQ0YzY2YTJiMjVkZTgzNzUwMzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvZWFzeS1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0h5cGVyQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9hYnN0cmFjdE1hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29sb3JTcGFjZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL3Bvb3JseWZpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9IeXBlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvbkZpbmlzaGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2lucHV0L2NoYW5nZUNvbG9yUHJvZmlsZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvUGFydGlhbENvbnZlcnNpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvbHUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvc3ZkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9NZWdhdHJvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0ludGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlSWxsdW1pbmFudFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvSWxsdW1pbmFudFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbXV0YXRlTWFwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDFELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDJELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3FyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz80NDQ2Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2ZlYXR1cmVzLWRldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci93aXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbWFnZVBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tYmluZVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5wdXRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9tZXJnZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9vdXRwdXRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9GaWxlVG9JbWFnZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Db2xvclNwYWNlUGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3M/NGVjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnNjc3M/OGZiOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1N0YXJ0Q29udmVyc2lvbkJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvSFNWQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9IU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvTGFiQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9MYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1hZWkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9zeW1ib2wtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktcmVzY2FsZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1heC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1pbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvdHJhbnNwb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9zdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3Jvd1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9jb2x1bW5TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvZmxpcENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGVjb21wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvZXZkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL2Nob2xlc2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbWFnZURhdGFDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0NvbnZlcnNpb25QYXJhbWV0ZXJzQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xhYlBhcmFtZXRlcnNCb3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0lucHV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYWJQYXJhbWV0ZXJzSW5wdXRzLnNjc3M/MTE4OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYWJQYXJhbWV0ZXJzSW5wdXRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTs7QUFFQTtBQUN5QjtBQUN6QjtBQUM4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ1E7O0FBRVI7QUFD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QUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBLE9BQU8sNkJBQTZCO0FBQzVCOztBQUVSO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRSxjQUFjLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqTEE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUNEQSww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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ3FDO0FBQ3BCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDak9BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxxREFBcUQsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJxQjtBQUNSO0FBQ2I7QUFLQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUN0RixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUN0RixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUNwRixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUNyRixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUNyRixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtDQUN2RixDQUFDO0FBRVcsMEJBQWtCLEdBQW1DO0lBQ2hFLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDdkMsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDdkMsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQ3pDLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtJQUN6QyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0NBQ2xELENBQUM7Ozs7Ozs7Ozs7QUNsREYscUNBQXFDO0FBSXJDLHVCQUNFLEVBQVUsRUFDVixPQUErQixFQUMvQixjQUFzQixFQUN0QixRQUFvQztJQUVwQyxNQUFNLENBQUMsVUFBSSxFQUFFO2lCQUNFLEVBQUUsYUFBYSxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQzs7R0FFakUsQ0FBQztBQUNKLENBQUM7QUFYRCxzQ0FXQztBQUVELHVCQUEwQixhQUE4QixFQUFFLGFBQWdCO0lBQ3hFLE1BQU0sQ0FBQyxVQUFJLEVBQUU7O2NBRUQsYUFBYSxDQUFDLEtBQUs7aUJBQ2hCLGFBQWEsQ0FBQyxLQUFLLEtBQUssYUFBYTs7UUFFOUMsYUFBYSxDQUFDLEtBQUs7O0dBRXhCLENBQUM7QUFDSixDQUFDO0FBRUQsaUNBQWlDLE9BQStCLEVBQUUsS0FBWTtJQUM1RSxNQUFNLE1BQU0sR0FBc0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV6QyxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztJQUN0RSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUM5QixDQUFDOzs7Ozs7Ozs7O0FDdENELG1CQUNFLEtBQVUsRUFDVixRQUFzRDtJQUV0RCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBVkQsOEJBVUM7Ozs7Ozs7Ozs7QUNWRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDMUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQzNCZ0M7QUFDYjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUIsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QiwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsUUFBUTtBQUNyQyx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQzNLQSx3QkFBb0I7QUFDcEIsd0JBQXVCO0FBRXZCLDhDQUEwQztBQUMxQyxxQ0FBcUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFFMUI7SUFDRSxNQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFcEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUN0QyxnREFBZ0Q7SUFDaEQsVUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUcsV0FBVyxFQUFFLENBQUM7QUFDN0MsQ0FBQzs7Ozs7OztBQ2xCRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EscUNBQXNDLDJCQUEyQixFQUFFLDRCQUE0Qix3QkFBd0IsRUFBRSxnQkFBZ0IsaUJBQWlCLEVBQUUsYUFBYSxpQkFBaUIscUJBQXFCLHFCQUFxQix1QkFBdUIsRUFBRTs7QUFFN1A7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBLHlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHFDQUE0RDtBQUU1RCw4Q0FBcUQ7QUFFckQsbURBQStEO0FBQy9ELHVEQUF1RTtBQUN2RSxpREFBMkQ7QUFDM0Qsd0RBQXlFO0FBRXpFLDBDQUFvQztBQUNwQyxnREFBOEM7QUFDOUMsK0NBQW1EO0FBRW5ELHNEQUF3RTtBQUN4RSwyREFBNkU7QUFFN0UsaUJBQXlCLFNBQVEsZUFBYztJQVE3QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksaURBQXVCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSw2Q0FBcUIsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFFM0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVTLE1BQU07UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7OztVQUdWLElBQUksQ0FBQyxXQUFXO1VBQ2hCLElBQUksQ0FBQyxvQkFBb0I7VUFDekIsSUFBSSxDQUFDLGdCQUFnQjtVQUNyQixJQUFJLENBQUMsc0JBQXNCO1VBQzNCLElBQUksQ0FBQyxxQkFBcUI7VUFDMUIsSUFBSSxDQUFDLGNBQWM7Ozs7S0FJeEIsQ0FBQztJQUNKLENBQUM7SUFFYSxnQkFBZ0I7O1lBQzVCLE1BQU0sZUFBZSxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDO1lBRXRELE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sS0FBSyxHQUFHLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUUzRCxtQkFBUSxDQUFDLFFBQVEsQ0FBQyx5Q0FBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUNGO0FBN0NELGtDQTZDQzs7Ozs7Ozs7O0FDN0Q4Qjs7QUFFL0I7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNuQnNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQ3hEb0M7QUFDZDtBQUNMO0FBQ2E7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVUsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVRO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUN5QjtBQUNSOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLEtBQUs7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEtBQUssQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7QUN0SkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQTtBQUNBOzs7QUFHQTtBQUNBLHVDQUF3QyxnQkFBZ0IsRUFBRSwyQkFBMkIsaUJBQWlCLEVBQUU7O0FBRXhHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNDRjNjZhMmIyNWRlODM3NTAzMCIsImltcG9ydCBBYnN0cmFjdE1hdHJpeCBmcm9tICcuLi9hYnN0cmFjdE1hdHJpeCc7XG5pbXBvcnQgTWF0cml4IGZyb20gJy4uL21hdHJpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VWaWV3IGV4dGVuZHMgQWJzdHJhY3RNYXRyaXgoKSB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3dzLCBjb2x1bW5zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdHJpeDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2Jhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohIChjKSBBbmRyZWEgR2lhbW1hcmNoaSAoSVNDKSAqL1xuXG5pbXBvcnQgTWVnYXRyb24gZnJvbSAnLi9jbGFzc2VzL01lZ2F0cm9uLmpzJztcbmltcG9ydCBDb21wb25lbnQsIHtzZXR1cH0gZnJvbSAnLi9jbGFzc2VzL0NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSW50ZW50IGZyb20gJy4vb2JqZWN0cy9JbnRlbnQuanMnO1xuaW1wb3J0IHdpcmUsIHtjb250ZW50LCB3ZWFrbHl9IGZyb20gJy4vaHlwZXIvd2lyZS5qcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vaHlwZXIvcmVuZGVyLmpzJztcblxuLy8gYWxsIGZ1bmN0aW9ucyBhcmUgc2VsZiBib3VuZCB0byB0aGUgcmlnaHQgY29udGV4dFxuLy8geW91IGNhbiBkbyB0aGUgZm9sbG93aW5nXG4vLyBjb25zdCB7YmluZCwgd2lyZX0gPSBoeXBlckhUTUw7XG4vLyBhbmQgdXNlIHRoZW0gcmlnaHQgYXdheTogYmluZChub2RlKWBoZWxsbyFgO1xuY29uc3QgYmluZCA9IGNvbnRleHQgPT4gcmVuZGVyLmJpbmQoY29udGV4dCk7XG5jb25zdCBkZWZpbmUgPSBJbnRlbnQuZGVmaW5lO1xuXG5oeXBlci5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5oeXBlci5iaW5kID0gYmluZDtcbmh5cGVyLmRlZmluZSA9IGRlZmluZTtcbmh5cGVyLmh5cGVyID0gaHlwZXI7XG5oeXBlci53aXJlID0gd2lyZTtcblxuLy8gaXQgaXMgcG9zc2libGUgdG8gZGVmaW5lIGEgZGlmZmVyZW50IGVuZ2luZVxuLy8gdG8gcmVzb2x2ZSBub2RlcyBkaWZmaW5nLlxuLy8gVGhlIGVuZ2luZSBtdXN0IHByb3ZpZGUgYW4gdXBkYXRlIG1ldGhvZFxuLy8gY2FwYWJsZSBvZiBtdXRhdGluZyBsaXZlTm9kZXMgY29sbGVjdGlvblxuLy8gYW5kIHRoZSByZWxhdGVkIERPTS5cbi8vIFNlZSBoeXBlcmh0bWwtbWFqaW5idXUgdG8ga25vdyBtb3JlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaHlwZXIsICdlbmdpbmUnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBNZWdhdHJvbi5lbmdpbmU7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KGVuZ2luZSkge1xuICAgIE1lZ2F0cm9uLmVuZ2luZSA9IGVuZ2luZTtcbiAgfVxufSk7XG5cbi8vIHRoZSB3aXJlIGNvbnRlbnQgaXMgdGhlIGxhenkgZGVmaW5lZFxuLy8gaHRtbCBvciBzdmcgcHJvcGVydHkgb2YgZWFjaCBoeXBlci5Db21wb25lbnRcbnNldHVwKGNvbnRlbnQpO1xuXG4vLyBldmVyeXRoaW5nIGlzIGV4cG9ydGVkIGRpcmVjdGx5IG9yIHRocm91Z2ggdGhlXG4vLyBoeXBlckhUTUwgY2FsbGJhY2ssIHdoZW4gdXNlZCBhcyB0b3AgbGV2ZWwgc2NyaXB0XG5leHBvcnQge0NvbXBvbmVudCwgYmluZCwgZGVmaW5lLCBoeXBlciwgd2lyZX07XG5cbi8vIGJ5IGRlZmF1bHQsIGh5cGVySFRNTCBpcyBhIHNtYXJ0IGZ1bmN0aW9uXG4vLyB0aGF0IFwibWFnaWNhbGx5XCIgdW5kZXJzdGFuZHMgd2hhdCdzIHRoZSBiZXN0XG4vLyB0aGluZyB0byBkbyB3aXRoIHBhc3NlZCBhcmd1bWVudHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh5cGVyKEhUTUwpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID9cbiAgICAoSFRNTCA9PSBudWxsID9cbiAgICAgIGNvbnRlbnQoJ2h0bWwnKSA6XG4gICAgICAodHlwZW9mIEhUTUwgPT09ICdzdHJpbmcnID9cbiAgICAgICAgd2lyZShudWxsLCBIVE1MKSA6XG4gICAgICAgICgncmF3JyBpbiBIVE1MID9cbiAgICAgICAgICBjb250ZW50KCdodG1sJykoSFRNTCkgOlxuICAgICAgICAgICgnbm9kZVR5cGUnIGluIEhUTUwgP1xuICAgICAgICAgICAgcmVuZGVyLmJpbmQoSFRNTCkgOlxuICAgICAgICAgICAgd2Vha2x5KEhUTUwsICdodG1sJylcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICkpIDpcbiAgICAoJ3JhdycgaW4gSFRNTCA/XG4gICAgICBjb250ZW50KCdodG1sJykgOiB3aXJlXG4gICAgKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgaW5wdXRSZWR1Y2VyLCBJbnB1dFN0YXRlIH0gZnJvbSAncmVkdWNlcnMvaW5wdXRSZWR1Y2VyJztcclxuaW1wb3J0IHsgb3V0cHV0UmVkdWNlciwgT3V0cHV0U3RhdGUgfSBmcm9tICdyZWR1Y2Vycy9vdXRwdXRSZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG4gIGlucHV0OiBJbnB1dFN0YXRlO1xyXG4gIG91dHB1dDogT3V0cHV0U3RhdGU7XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8QXBwU3RhdGU+KHtcclxuICBpbnB1dDogaW5wdXRSZWR1Y2VyLFxyXG4gIG91dHB1dDogb3V0cHV0UmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBTdG9yZSA9IGNyZWF0ZVN0b3JlPEFwcFN0YXRlPihcclxuICByZWR1Y2VyLFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcFN0b3JlLnRzIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmF1bHQsIGRlZmF1bHQgYXMgTWF0cml4fSBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQge2RlZmF1bHQgYXMgYWJzdHJhY3RNYXRyaXh9IGZyb20gJy4vYWJzdHJhY3RNYXRyaXgnO1xuXG5leHBvcnQge3dyYXB9IGZyb20gJy4vd3JhcC93cmFwJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFdyYXBwZXJNYXRyaXgxRH0gZnJvbSAnLi93cmFwL1dyYXBwZXJNYXRyaXgxRCc7XG5cbmV4cG9ydCB7c29sdmUsIGludmVyc2V9IGZyb20gJy4vZGVjb21wb3NpdGlvbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIFNWRH0gZnJvbSAnLi9kYy9zdmQuanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIEVWRH0gZnJvbSAnLi9kYy9ldmQuanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIENob2xlc2t5RGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBDSE99IGZyb20gJy4vZGMvY2hvbGVza3kuanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEx1RGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBMVX0gZnJvbSAnLi9kYy9sdS5qcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgUXJEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIFFSfSBmcm9tICcuL2RjL3FyLmpzJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGdsb2JhbCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4vLyBOb2RlLkNPTlNUQU5UU1xuLy8gJ2NhdXNlIHNvbWUgZW5naW5lIGhhcyBubyBnbG9iYWwgTm9kZSBkZWZpbmVkXG4vLyAoaS5lLiBOb2RlLCBOYXRpdmVTY3JpcHQsIGJhc2ljSFRNTCAuLi4gKVxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfTk9ERSA9IDE7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX05PREUgPSAyO1xuZXhwb3J0IGNvbnN0IFRFWFRfTk9ERSA9IDM7XG5leHBvcnQgY29uc3QgQ09NTUVOVF9OT0RFID0gODtcbmV4cG9ydCBjb25zdCBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbi8vIFNWRyByZWxhdGVkIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IE9XTkVSX1NWR19FTEVNRU5UID0gJ293bmVyU1ZHRWxlbWVudCc7XG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIEN1c3RvbSBFbGVtZW50cyAvIE11dGF0aW9uT2JzZXJ2ZXIgY29uc3RhbnRzXG5leHBvcnQgY29uc3QgQ09OTkVDVEVEID0gJ2Nvbm5lY3RlZCc7XG5leHBvcnQgY29uc3QgRElTQ09OTkVDVEVEID0gJ2RpcycgKyBDT05ORUNURUQ7XG5cbi8vIGh5cGVySFRNTCByZWxhdGVkIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IEVYUEFORE8gPSAnX2h5cGVyOiAnO1xuZXhwb3J0IGNvbnN0IFNIT1VMRF9VU0VfVEVYVF9DT05URU5UID0gL15zdHlsZXx0ZXh0YXJlYSQvaTtcbmV4cG9ydCBjb25zdCBVSUQgPSBFWFBBTkRPICsgKChNYXRoLnJhbmRvbSgpICogbmV3IERhdGUpIHwgMCkgKyAnOyc7XG5leHBvcnQgY29uc3QgVUlEQyA9ICc8IS0tJyArIFVJRCArICctLT4nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNYXRyaXggZnJvbSAnLi9tYXRyaXgnO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IGEgcm93IGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRzXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW291dGVyXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSb3dJbmRleChtYXRyaXgsIGluZGV4LCBvdXRlcikge1xuICAgIHZhciBtYXggPSBvdXRlciA/IG1hdHJpeC5yb3dzIDogbWF0cml4LnJvd3MgLSAxO1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBtYXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1JvdyBpbmRleCBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgYSBjb2x1bW4gaW5kZXggaXMgbm90IG91dCBvZiBib3VuZHNcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtib29sZWFufSBbb3V0ZXJdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbHVtbkluZGV4KG1hdHJpeCwgaW5kZXgsIG91dGVyKSB7XG4gICAgdmFyIG1heCA9IG91dGVyID8gbWF0cml4LmNvbHVtbnMgOiBtYXRyaXguY29sdW1ucyAtIDE7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IG1heCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ29sdW1uIGluZGV4IG91dCBvZiByYW5nZScpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCB0aGUgcHJvdmlkZWQgdmVjdG9yIGlzIGFuIGFycmF5IHdpdGggdGhlIHJpZ2h0IGxlbmd0aFxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvclxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSb3dWZWN0b3IobWF0cml4LCB2ZWN0b3IpIHtcbiAgICBpZiAodmVjdG9yLnRvMURBcnJheSkge1xuICAgICAgICB2ZWN0b3IgPSB2ZWN0b3IudG8xREFycmF5KCk7XG4gICAgfVxuICAgIGlmICh2ZWN0b3IubGVuZ3RoICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmVjdG9yIHNpemUgbXVzdCBiZSB0aGUgc2FtZSBhcyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZlY3Rvcjtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCB0aGUgcHJvdmlkZWQgdmVjdG9yIGlzIGFuIGFycmF5IHdpdGggdGhlIHJpZ2h0IGxlbmd0aFxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvclxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb2x1bW5WZWN0b3IobWF0cml4LCB2ZWN0b3IpIHtcbiAgICBpZiAodmVjdG9yLnRvMURBcnJheSkge1xuICAgICAgICB2ZWN0b3IgPSB2ZWN0b3IudG8xREFycmF5KCk7XG4gICAgfVxuICAgIGlmICh2ZWN0b3IubGVuZ3RoICE9PSBtYXRyaXgucm93cykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmVjdG9yIHNpemUgbXVzdCBiZSB0aGUgc2FtZSBhcyB0aGUgbnVtYmVyIG9mIHJvd3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZlY3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByb3c6IGNoZWNrUm93SW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMpLFxuICAgICAgICBjb2x1bW46IGNoZWNrQ29sdW1uSW5kaWNlcyhtYXRyaXgsIGNvbHVtbkluZGljZXMpXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUm93SW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMpIHtcbiAgICBpZiAodHlwZW9mIHJvd0luZGljZXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZXhwZWN0ZWQgdHlwZSBmb3Igcm93IGluZGljZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgcm93T3V0ID0gcm93SW5kaWNlcy5zb21lKHIgPT4ge1xuICAgICAgICByZXR1cm4gciA8IDAgfHwgciA+PSBtYXRyaXgucm93cztcblxuICAgIH0pO1xuXG4gICAgaWYgKHJvd091dCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigncm93IGluZGljZXMgYXJlIG91dCBvZiByYW5nZScpO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb3dJbmRpY2VzKSkgcm93SW5kaWNlcyA9IEFycmF5LmZyb20ocm93SW5kaWNlcyk7XG5cbiAgICByZXR1cm4gcm93SW5kaWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sdW1uSW5kaWNlcyhtYXRyaXgsIGNvbHVtbkluZGljZXMpIHtcbiAgICBpZiAodHlwZW9mIGNvbHVtbkluZGljZXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZXhwZWN0ZWQgdHlwZSBmb3IgY29sdW1uIGluZGljZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uT3V0ID0gY29sdW1uSW5kaWNlcy5zb21lKGMgPT4ge1xuICAgICAgICByZXR1cm4gYyA8IDAgfHwgYyA+PSBtYXRyaXguY29sdW1ucztcbiAgICB9KTtcblxuICAgIGlmIChjb2x1bW5PdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2NvbHVtbiBpbmRpY2VzIGFyZSBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbHVtbkluZGljZXMpKSBjb2x1bW5JbmRpY2VzID0gQXJyYXkuZnJvbShjb2x1bW5JbmRpY2VzKTtcblxuICAgIHJldHVybiBjb2x1bW5JbmRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShtYXRyaXgsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gNSkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhcmd1bWVudCB0eXBlJyk7XG4gICAgdmFyIG5vdEFsbE51bWJlcnMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cykuc2xpY2UoMSkuc29tZShmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYXJnICE9PSAnbnVtYmVyJztcbiAgICB9KTtcbiAgICBpZiAobm90QWxsTnVtYmVycykgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhcmd1bWVudCB0eXBlJyk7XG4gICAgaWYgKHN0YXJ0Um93ID4gZW5kUm93IHx8IHN0YXJ0Q29sdW1uID4gZW5kQ29sdW1uIHx8IHN0YXJ0Um93IDwgMCB8fCBzdGFydFJvdyA+PSBtYXRyaXgucm93cyB8fCBlbmRSb3cgPCAwIHx8IGVuZFJvdyA+PSBtYXRyaXgucm93cyB8fCBzdGFydENvbHVtbiA8IDAgfHwgc3RhcnRDb2x1bW4gPj0gbWF0cml4LmNvbHVtbnMgfHwgZW5kQ29sdW1uIDwgMCB8fCBlbmRDb2x1bW4gPj0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1N1Ym1hdHJpeCBpbmRpY2VzIGFyZSBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZShmcm9tLCB0bykge1xuICAgIHZhciBhcnIgPSBuZXcgQXJyYXkodG8gLSBmcm9tICsgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyW2ldID0gZnJvbSArIGk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeVJvdyhtYXRyaXgpIHtcbiAgICB2YXIgc3VtID0gTWF0cml4Lnplcm9zKG1hdHJpeC5yb3dzLCAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyArK2kpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgKytqKSB7XG4gICAgICAgICAgICBzdW0uc2V0KGksIDAsIHN1bS5nZXQoaSwgMCkgKyBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQnlDb2x1bW4obWF0cml4KSB7XG4gICAgdmFyIHN1bSA9IE1hdHJpeC56ZXJvcygxLCBtYXRyaXguY29sdW1ucyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgKytpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7ICsraikge1xuICAgICAgICAgICAgc3VtLnNldCgwLCBqLCBzdW0uZ2V0KDAsIGopICsgbWF0cml4LmdldChpLCBqKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUFsbChtYXRyaXgpIHtcbiAgICB2YXIgdiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdiArPSBtYXRyaXguZ2V0KGksIGopO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG4gIGdsb2JhbCxcbiAgT1dORVJfU1ZHX0VMRU1FTlQsXG4gIFNWR19OQU1FU1BBQ0UsXG4gIFVJRCxcbiAgVUlEQ1xufSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmltcG9ydCB7XG4gIGhhc0FwcGVuZCxcbiAgaGFzQ29udGVudCxcbiAgaGFzRG9vbWVkQ2xvbmVOb2RlLFxuICBoYXNJbXBvcnROb2RlXG59IGZyb20gJy4vZmVhdHVyZXMtZGV0ZWN0aW9uLmpzJztcblxuaW1wb3J0IHtjcmVhdGUsIGRvYywgZnJhZ21lbnR9IGZyb20gJy4vZWFzeS1kb20uanMnO1xuXG4vLyBhcHBlbmRzIGFuIGFycmF5IG9mIG5vZGVzXG4vLyB0byBhIGdlbmVyaWMgbm9kZS9mcmFnbWVudFxuLy8gV2hlbiBhdmFpbGFibGUsIHVzZXMgYXBwZW5kIHBhc3NpbmcgYWxsIGFyZ3VtZW50cyBhdCBvbmNlXG4vLyBob3BpbmcgdGhhdCdzIHNvbWVob3cgZmFzdGVyLCBldmVuIGlmIGFwcGVuZCBoYXMgbW9yZSBjaGVja3Mgb24gdHlwZVxuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IGhhc0FwcGVuZCA/XG4gIChub2RlLCBjaGlsZE5vZGVzKSA9PiB7XG4gICAgbm9kZS5hcHBlbmQuYXBwbHkobm9kZSwgY2hpbGROb2Rlcyk7XG4gIH0gOlxuICAobm9kZSwgY2hpbGROb2RlcykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2Rlc1tpXSk7XG4gICAgfVxuICB9O1xuXG4vLyByZW1vdmUgY29tbWVudHMgcGFydHMgZnJvbSBhdHRyaWJ1dGVzIHRvIGF2b2lkIGlzc3Vlc1xuLy8gd2l0aCBlaXRoZXIgb2xkIGJyb3dzZXJzIG9yIFNWRyBlbGVtZW50c1xuLy8gZXhwb3J0IGNvbnN0IGNsZWFuQXR0cmlidXRlcyA9IGh0bWwgPT4gaHRtbC5yZXBsYWNlKG5vLCBjb21tZW50cyk7XG5jb25zdCBhdHRyTmFtZSA9ICdbXlxcXFxTXStbXiBcXFxcZlxcXFxuXFxcXHJcXFxcdFxcXFwvPlwiXFwnPV0rJztcbmNvbnN0IG5vID0gbmV3IFJlZ0V4cChcbiAgJyg8W2Etel0rW2EtejAtOTpfLV0qKSgoPzonICtcbiAgICBhdHRyTmFtZSArXG4gICcoPzo9KD86XFwnLio/XFwnfFwiLio/XCJ8PC4rPz58XFxcXFMrKSk/KSspKFteXFxcXFNdKi8/PiknLFxuICAnZ2knXG4pO1xuY29uc3QgZmluZEF0dHJpYnV0ZXMgPSBuZXcgUmVnRXhwKCcoJyArIGF0dHJOYW1lICsgJz0pKFtcXCdcIl0/KScgKyBVSURDICsgJ1xcXFwyJywgJ2dpJyk7XG5jb25zdCBjb21tZW50cyA9ICgkMCwgJDEsICQyLCAkMykgPT5cbiAgJDEgKyAkMi5yZXBsYWNlKGZpbmRBdHRyaWJ1dGVzLCByZXBsYWNlQXR0cmlidXRlcykgKyAkMztcbmNvbnN0IHJlcGxhY2VBdHRyaWJ1dGVzID0gKCQwLCAkMSwgJDIpID0+ICQxICsgKCQyIHx8ICdcIicpICsgVUlEICsgKCQyIHx8ICdcIicpO1xuXG4vLyBnaXZlbiBhIG5vZGUgYW5kIGEgZ2VuZXJpYyBIVE1MIGNvbnRlbnQsXG4vLyBjcmVhdGUgZWl0aGVyIGFuIFNWRyBvciBhbiBIVE1MIGZyYWdtZW50XG4vLyB3aGVyZSBzdWNoIGNvbnRlbnQgd2lsbCBiZSBpbmplY3RlZFxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gKG5vZGUsIGh0bWwpID0+XG4gIChPV05FUl9TVkdfRUxFTUVOVCBpbiBub2RlID9cbiAgICBTVkdGcmFnbWVudCA6XG4gICAgSFRNTEZyYWdtZW50XG4gICkobm9kZSwgaHRtbC5yZXBsYWNlKG5vLCBjb21tZW50cykpO1xuXG4vLyBJRS9FZGdlIHNoZW5hbmlnYW5zIHByb29mIGNsb25lTm9kZVxuLy8gaXQgZ29lcyB0aHJvdWdoIGFsbCBub2RlcyBtYW51YWxseVxuLy8gaW5zdGVhZCBvZiByZWx5aW5nIHRoZSBlbmdpbmUgdG8gc3VkZGVubHlcbi8vIG1lcmdlIG5vZGVzIHRvZ2V0aGVyXG5jb25zdCBjbG9uZU5vZGUgPSBoYXNEb29tZWRDbG9uZU5vZGUgP1xuICBub2RlID0+IHtcbiAgICBjb25zdCBjbG9uZSA9IG5vZGUuY2xvbmVOb2RlKCk7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcyB8fFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYW4gZXhjZXNzIG9mIGNhdXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgc29tZSBub2RlLCBpbiBJRSwgbWlnaHQgbm90XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGF2ZSBjaGlsZE5vZGVzIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZmFsbGJhY2sgZW5zdXJlIHdvcmtpbmcgY29kZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGluIG9sZGVyIElFIHdpdGhvdXQgY29tcHJvbWlzaW5nIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb3IgYW55IG90aGVyIGJyb3dzZXIvZW5naW5lIGludm9sdmVkLlxuICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgICAgICAgICAgW107XG4gICAgY29uc3QgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lO1xuICB9IDpcbiAgLy8gdGhlIGZvbGxvd2luZyBpZ25vcmUgaXMgZHVlIGNvZGUtY292ZXJhZ2VcbiAgLy8gY29tYmluYXRpb24gb2Ygbm90IGhhdmluZyBkb2N1bWVudC5pbXBvcnROb2RlXG4gIC8vIGJ1dCBoYXZpbmcgYSB3b3JraW5nIG5vZGUuY2xvbmVOb2RlLlxuICAvLyBUaGlzIHNoZW5hcmlvIGlzIGNvbW1vbiBvbiBvbGRlciBBbmRyb2lkL1dlYktpdCBicm93c2Vyc1xuICAvLyBidXQgYmFzaWNIVE1MIGhlcmUgdGVzdHMganVzdCB0d28gbWFqb3IgY2FzZXM6XG4gIC8vIHdpdGggZG9jdW1lbnQuaW1wb3J0Tm9kZSBvciB3aXRoIGJyb2tlbiBjbG9uZU5vZGUuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIG5vZGUgPT4gbm9kZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbi8vIHVzZWQgdG8gaW1wb3J0IGh0bWwgaW50byBmcmFnbWVudHNcbmV4cG9ydCBjb25zdCBpbXBvcnROb2RlID0gaGFzSW1wb3J0Tm9kZSA/XG4gIChkb2MsIG5vZGUpID0+IGRvYy5pbXBvcnROb2RlKG5vZGUsIHRydWUpIDpcbiAgKGRvYywgbm9kZSkgPT4gY2xvbmVOb2RlKG5vZGUpXG5cbi8vIGp1c3QgcmVjeWNsaW5nIGEgb25lLW9mZiBhcnJheSB0byB1c2Ugc2xpY2Uvc3BsaWNlXG4vLyBpbiBldmVyeSBuZWVkZWQgcGxhY2VcbmNvbnN0IHtwdXNoLCBzbGljZSwgc3BsaWNlLCB1bnNoaWZ0fSA9IFtdO1xuZXhwb3J0IHtwdXNoLCBzbGljZSwgc3BsaWNlLCB1bnNoaWZ0fTtcblxuLy8gbGF6eSBldmFsdWF0ZWQsIHJldHVybnMgdGhlIHVuaXF1ZSBpZGVudGl0eVxuLy8gb2YgYSB0ZW1wbGF0ZSBsaXRlcmFsLCBhcyB0ZW1wYWx0ZSBsaXRlcmFsIGl0c2VsZi5cbi8vIEJ5IGRlZmF1bHQsIEVTMjAxNSB0ZW1wbGF0ZSBsaXRlcmFscyBhcmUgdW5pcXVlXG4vLyB0YWdgYSR7MX16YCA9PT0gdGFnYGEkezJ9emBcbi8vIGV2ZW4gaWYgaW50ZXJwb2xhdGVkIHZhbHVlcyBhcmUgZGlmZmVyZW50XG4vLyB0aGUgdGVtcGxhdGUgY2h1bmtzIGFyZSBpbiBhIGZyb3plbiBBcnJheVxuLy8gdGhhdCBpcyBpZGVudGljYWwgZWFjaCB0aW1lIHlvdSB1c2UgdGhlIHNhbWVcbi8vIGxpdGVyYWwgdG8gcmVwcmVzZW50IHNhbWUgc3RhdGljIGNvbnRlbnRcbi8vIGFyb3VuZCBpdHMgb3duIGludGVycG9sYXRpb25zLlxuZXhwb3J0IGNvbnN0IHVuaXF1ZSA9IHRlbXBsYXRlID0+IFRMKHRlbXBsYXRlKTtcblxuLy8gVEwgcmV0dXJucyBhIHVuaXF1ZSB2ZXJzaW9uIG9mIHRoZSB0ZW1wbGF0ZVxuLy8gaXQgbmVlZHMgbGF6eSBmZWF0dXJlIGRldGVjdGlvblxuLy8gKGNhbm5vdCB0cnVzdCBsaXRlcmFscyB3aXRoIHRyYW5zcGlsZWQgY29kZSlcbmxldCBUTCA9IHRlbXBsYXRlID0+IHtcbiAgaWYgKFxuICAgIC8vIFR5cGVTY3JpcHQgdGVtcGxhdGUgbGl0ZXJhbHMgYXJlIG5vdCBzdGFuZGFyZFxuICAgIHRlbXBsYXRlLnByb3BlcnR5SXNFbnVtZXJhYmxlKCdyYXcnKSB8fFxuICAgIChcbiAgICAgIC8vIEZpcmVmb3ggPCA1NSBoYXMgbm90IHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIG5laXRoZXJcbiAgICAgIC9GaXJlZm94XFwvKFxcZCspLy50ZXN0KChnbG9iYWwubmF2aWdhdG9yIHx8IHt9KS51c2VyQWdlbnQpICYmXG4gICAgICBwYXJzZUZsb2F0KFJlZ0V4cC4kMSkgPCA1NVxuICAgIClcbiAgKSB7XG4gICAgLy8gaW4gdGhlc2UgY2FzZXMsIGFkZHJlc3MgdGVtcGxhdGVzIG9uY2VcbiAgICBjb25zdCB0ZW1wbGF0ZU9iamVjdHMgPSB7fTtcbiAgICAvLyBidXQgYWx3YXlzIHJldHVybiB0aGUgc2FtZSB0ZW1wbGF0ZVxuICAgIFRMID0gdGVtcGxhdGUgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gJ18nICsgdGVtcGxhdGUuam9pbihVSUQpO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlT2JqZWN0c1trZXldIHx8IChcbiAgICAgICAgdGVtcGxhdGVPYmplY3RzW2tleV0gPSB0ZW1wbGF0ZVxuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIG1ha2UgVEwgYW4gaWRlbnRpdHkgbGlrZSBmdW5jdGlvblxuICAgIFRMID0gdGVtcGxhdGUgPT4gdGVtcGxhdGU7XG4gIH1cbiAgcmV0dXJuIFRMKHRlbXBsYXRlKTtcbn07XG5cbi8vIGNyZWF0ZSBkb2N1bWVudCBmcmFnbWVudHMgdmlhIG5hdGl2ZSB0ZW1wbGF0ZVxuLy8gd2l0aCBhIGZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IHdvbid0IGJlIGFibGVcbi8vIHRvIGRlYWwgd2l0aCBzb21lIGluamVjdGVkIGVsZW1lbnQgc3VjaCA8dGQ+IG9yIG90aGVyc1xuY29uc3QgSFRNTEZyYWdtZW50ID0gaGFzQ29udGVudCA/XG4gIChub2RlLCBodG1sKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlKG5vZGUsICd0ZW1wbGF0ZScpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBjb250YWluZXIuY29udGVudDtcbiAgfSA6XG4gIChub2RlLCBodG1sKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlKG5vZGUsICd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmcmFnbWVudChub2RlKTtcbiAgICBpZiAoL15bXlxcU10qPzwoY29sKD86Z3JvdXApP3x0KD86aGVhZHxib2R5fGZvb3R8cnxkfGgpKS9pLnRlc3QoaHRtbCkpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gUmVnRXhwLiQxO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICc8dGFibGU+JyArIGh0bWwgKyAnPC90YWJsZT4nO1xuICAgICAgYXBwZW5kKGNvbnRlbnQsIHNsaWNlLmNhbGwoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgYXBwZW5kKGNvbnRlbnQsIHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cbi8vIGNyZWF0ZXMgU1ZHIGZyYWdtZW50IHdpdGggYSBmYWxsYmFjayBmb3IgSUUgdGhhdCBuZWVkcyBTVkdcbi8vIHdpdGhpbiB0aGUgSFRNTCBjb250ZW50XG5jb25zdCBTVkdGcmFnbWVudCA9IGhhc0NvbnRlbnQgP1xuICAobm9kZSwgaHRtbCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmcmFnbWVudChub2RlKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2Mobm9kZSkuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdzdmcnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBhcHBlbmQoY29udGVudCwgc2xpY2UuY2FsbChjb250YWluZXIuY2hpbGROb2RlcykpO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9IDpcbiAgKG5vZGUsIGh0bWwpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZnJhZ21lbnQobm9kZSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlKG5vZGUsICdkaXYnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCInICsgU1ZHX05BTUVTUEFDRSArICdcIj4nICsgaHRtbCArICc8L3N2Zz4nO1xuICAgIGFwcGVuZChjb250ZW50LCBzbGljZS5jYWxsKGNvbnRhaW5lci5maXJzdENoaWxkLmNoaWxkTm9kZXMpKTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRoZXNlIGFyZSB0aW55IGhlbHBlcnMgdG8gc2ltcGxpZnkgbW9zdCBjb21tb24gb3BlcmF0aW9ucyBuZWVkZWQgaGVyZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IChub2RlLCB0eXBlKSA9PiBkb2Mobm9kZSkuY3JlYXRlRWxlbWVudCh0eXBlKTtcbmV4cG9ydCBjb25zdCBkb2MgPSBub2RlID0+IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlO1xuZXhwb3J0IGNvbnN0IGZyYWdtZW50ID0gbm9kZSA9PiBkb2Mobm9kZSkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuZXhwb3J0IGNvbnN0IHRleHQgPSAobm9kZSwgdGV4dCkgPT4gZG9jKG5vZGUpLmNyZWF0ZVRleHROb2RlKHRleHQpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvZWFzeS1kb20uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5pbXBvcnQgeyBVbnN1YnNjcmliZSB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlLCBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgSHlwZXJDb21wb25lbnQgfSBmcm9tICd1dGlscy9IeXBlckNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHlwZXJDb250YWluZXI8Q29udGFpbmVyU3RhdGUgZXh0ZW5kcyBEaWN0aW9uYXJ5PiBleHRlbmRzIEh5cGVyQ29tcG9uZW50PFxyXG4gIENvbnRhaW5lclN0YXRlXHJcbj4ge1xyXG4gIHByaXZhdGUgc3RvcmVVbnN1YnNjcmliZUNhbGxiYWNrOiBVbnN1YnNjcmliZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMub25TdGF0ZVVwZGF0ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbmNvbm5lY3RlZCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9TdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uZGlzY29ubmVjdGVkKCkge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZUZyb21TdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZVRvU3RvcmUoKSB7XHJcbiAgICB0aGlzLnN0b3JlVW5zdWJzY3JpYmVDYWxsYmFjayA9IGFwcFN0b3JlLnN1YnNjcmliZSh0aGlzLm9uU3RhdGVVcGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdW5zdWJzY3JpYmVGcm9tU3RvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5zdG9yZVVuc3Vic2NyaWJlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5zdG9yZVVuc3Vic2NyaWJlQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGU7XHJcblxyXG4gIHByaXZhdGUgb25TdGF0ZVVwZGF0ZShpZ25vcmVSZW5kZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgbmV3Q29udGFpbmVyU3RhdGUgPSB0aGlzLm1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdG9yZS5nZXRTdGF0ZSgpKTtcclxuICAgIGNvbnN0IHJlbmRlck5lZWRlZCA9IHRoaXMucGF0Y2hTdGF0ZShuZXdDb250YWluZXJTdGF0ZSk7XHJcblxyXG4gICAgaWYgKHJlbmRlck5lZWRlZCAmJiAhaWdub3JlUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhdGNoU3RhdGUobmV3U3RhdGU6IFBhcnRpYWw8Q29udGFpbmVyU3RhdGU+KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcmVuZGVyTmVlZGVkID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobmV3U3RhdGUpKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbmV3U3RhdGVba2V5XTtcclxuXHJcbiAgICAgIGlmIChwcmV2aW91c1ZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN0YXRlW2tleV0gPSBuZXdWYWx1ZTtcclxuICAgICAgcmVuZGVyTmVlZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVuZGVyTmVlZGVkO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91dGlscy9IeXBlckNvbnRhaW5lci50cyIsImltcG9ydCAnLi9zeW1ib2wtc3BlY2llcyc7XG5pbXBvcnQgQWJzdHJhY3RNYXRyaXggZnJvbSAnLi9hYnN0cmFjdE1hdHJpeCc7XG5pbXBvcnQge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgsXG4gICAgY2hlY2tDb2x1bW5WZWN0b3IsXG4gICAgY2hlY2tSb3dJbmRleCxcbiAgICBjaGVja1Jvd1ZlY3RvclxufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXggZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeChBcnJheSkge1xuICAgIGNvbnN0cnVjdG9yKG5Sb3dzLCBuQ29sdW1ucykge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIG5Sb3dzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheShuUm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdHJpeC5pc01hdHJpeChuUm93cykpIHtcbiAgICAgICAgICAgIHJldHVybiBuUm93cy5jbG9uZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoblJvd3MpICYmIG5Sb3dzID4gMCkgeyAvLyBDcmVhdGUgYW4gZW1wdHkgbWF0cml4XG4gICAgICAgICAgICBzdXBlcihuUm93cyk7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihuQ29sdW1ucykgJiYgbkNvbHVtbnMgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5Sb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXSA9IG5ldyBBcnJheShuQ29sdW1ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduQ29sdW1ucyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoblJvd3MpKSB7IC8vIENvcHkgdGhlIHZhbHVlcyBmcm9tIHRoZSAyRCBhcnJheVxuICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gblJvd3M7XG4gICAgICAgICAgICBuUm93cyA9IG1hdHJpeC5sZW5ndGg7XG4gICAgICAgICAgICBuQ29sdW1ucyA9IG1hdHJpeFswXS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5Db2x1bW5zICE9PSAnbnVtYmVyJyB8fCBuQ29sdW1ucyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RhdGEgbXVzdCBiZSBhIDJEIGFycmF5IHdpdGggYXQgbGVhc3Qgb25lIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyKG5Sb3dzKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuUm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdHJpeFtpXS5sZW5ndGggIT09IG5Db2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmNvbnNpc3RlbnQgYXJyYXkgZGltZW5zaW9ucycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzW2ldID0gW10uY29uY2F0KG1hdHJpeFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyIG9yIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3dzID0gblJvd3M7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IG5Db2x1bW5zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpc1tyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSByb3cgZnJvbSB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBSb3cgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgKi9cbiAgICByZW1vdmVSb3coaW5kZXgpIHtcbiAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLnJvd3MgPT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBIG1hdHJpeCBjYW5ub3QgaGF2ZSBsZXNzIHRoYW4gb25lIHJvdycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5yb3dzIC09IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSByb3cgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleCA9IHRoaXMucm93c10gLSBSb3cgaW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gYXJyYXkgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgKi9cbiAgICBhZGRSb3coaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIGlmIChhcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhcnJheSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnJvd3M7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCwgdHJ1ZSk7XG4gICAgICAgIGFycmF5ID0gY2hlY2tSb3dWZWN0b3IodGhpcywgYXJyYXksIHRydWUpO1xuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMCwgYXJyYXkpO1xuICAgICAgICB0aGlzLnJvd3MgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbHVtbiBmcm9tIHRoZSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIENvbHVtbiBpbmRleFxuICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAqL1xuICAgIHJlbW92ZUNvbHVtbihpbmRleCkge1xuICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1ucyA9PT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0EgbWF0cml4IGNhbm5vdCBoYXZlIGxlc3MgdGhhbiBvbmUgY29sdW1uJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgdGhpc1tpXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1ucyAtPSAxO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29sdW1uIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXggPSB0aGlzLmNvbHVtbnNdIC0gQ29sdW1uIGluZGV4XG4gICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IGFycmF5IC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICovXG4gICAgYWRkQ29sdW1uKGluZGV4LCBhcnJheSkge1xuICAgICAgICBpZiAodHlwZW9mIGFycmF5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXJyYXkgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5jb2x1bW5zO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgsIHRydWUpO1xuICAgICAgICBhcnJheSA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIGFycmF5KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgdGhpc1tpXS5zcGxpY2UoaW5kZXgsIDAsIGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnMgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9tYXRyaXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEx1RGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL2x1JztcbmltcG9ydCBTdkRlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9zdmQnO1xuaW1wb3J0IHJlc2NhbGUgZnJvbSAnbWwtYXJyYXktcmVzY2FsZSc7XG5pbXBvcnQge1xuICAgIGNoZWNrUm93VmVjdG9yLCBjaGVja1Jvd0luZGV4LCBjaGVja0NvbHVtbkluZGV4LCBjaGVja0NvbHVtblZlY3RvcixcbiAgICBjaGVja1JhbmdlLCBjaGVja0luZGljZXMsXG4gICAgc3VtQnlSb3csIHN1bUJ5Q29sdW1uLCBzdW1BbGxcbn0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBNYXRyaXhUcmFuc3Bvc2VWaWV3IGZyb20gJy4vdmlld3MvdHJhbnNwb3NlJztcbmltcG9ydCBNYXRyaXhSb3dWaWV3IGZyb20gJy4vdmlld3Mvcm93JztcbmltcG9ydCBNYXRyaXhTdWJWaWV3IGZyb20gJy4vdmlld3Mvc3ViJztcbmltcG9ydCBNYXRyaXhTZWxlY3Rpb25WaWV3IGZyb20gJy4vdmlld3Mvc2VsZWN0aW9uJztcbmltcG9ydCBNYXRyaXhSb3dTZWxlY3Rpb25WaWV3IGZyb20gJy4vdmlld3Mvcm93U2VsZWN0aW9uJztcbmltcG9ydCBNYXRyaXhDb2x1bW5TZWxlY3Rpb25WaWV3IGZyb20gJy4vdmlld3MvY29sdW1uU2VsZWN0aW9uJztcbmltcG9ydCBNYXRyaXhDb2x1bW5WaWV3IGZyb20gJy4vdmlld3MvY29sdW1uJztcbmltcG9ydCBNYXRyaXhGbGlwUm93VmlldyBmcm9tICcuL3ZpZXdzL2ZsaXBSb3cnO1xuaW1wb3J0IE1hdHJpeEZsaXBDb2x1bW5WaWV3IGZyb20gJy4vdmlld3MvZmxpcENvbHVtbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFic3RyYWN0TWF0cml4KHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IgPT09IHVuZGVmaW5lZCkgc3VwZXJDdG9yID0gT2JqZWN0O1xuXG4gICAgLyoqXG4gICAgICogUmVhbCBtYXRyaXhcbiAgICAgKiBAY2xhc3MgTWF0cml4XG4gICAgICogQHBhcmFtIHtudW1iZXJ8QXJyYXl8TWF0cml4fSBuUm93cyAtIE51bWJlciBvZiByb3dzIG9mIHRoZSBuZXcgbWF0cml4LFxuICAgICAqIDJEIGFycmF5IGNvbnRhaW5pbmcgdGhlIGRhdGEgb3IgTWF0cml4IGluc3RhbmNlIHRvIGNsb25lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuQ29sdW1uc10gLSBOdW1iZXIgb2YgY29sdW1ucyBvZiB0aGUgbmV3IG1hdHJpeFxuICAgICAqL1xuICAgIGNsYXNzIE1hdHJpeCBleHRlbmRzIHN1cGVyQ3RvciB7XG4gICAgICAgIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBNYXRyaXggd2l0aCB0aGUgY2hvc2VuIGRpbWVuc2lvbnMgZnJvbSBhIDFEIGFycmF5XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdSb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0NvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBuZXdEYXRhIC0gQSAxRCBhcnJheSBjb250YWluaW5nIGRhdGEgZm9yIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZnJvbTFEQXJyYXkobmV3Um93cywgbmV3Q29sdW1ucywgbmV3RGF0YSkge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IG5ld1Jvd3MgKiBuZXdDb2x1bW5zO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCAhPT0gbmV3RGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRGF0YSBsZW5ndGggZG9lcyBub3QgbWF0Y2ggZ2l2ZW4gZGltZW5zaW9ucycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzKG5ld1Jvd3MsIG5ld0NvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbmV3Um93czsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBuZXdDb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXguc2V0KHJvdywgY29sdW1uLCBuZXdEYXRhW3JvdyAqIG5ld0NvbHVtbnMgKyBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSByb3cgdmVjdG9yLCBhIG1hdHJpeCB3aXRoIG9ubHkgb25lIHJvdy5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbmV3RGF0YSAtIEEgMUQgYXJyYXkgY29udGFpbmluZyBkYXRhIGZvciB0aGUgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHJvd1ZlY3RvcihuZXdEYXRhKSB7XG4gICAgICAgICAgICB2YXIgdmVjdG9yID0gbmV3IHRoaXMoMSwgbmV3RGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmVjdG9yLnNldCgwLCBpLCBuZXdEYXRhW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIGNvbHVtbiB2ZWN0b3IsIGEgbWF0cml4IHdpdGggb25seSBvbmUgY29sdW1uLlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBuZXdEYXRhIC0gQSAxRCBhcnJheSBjb250YWluaW5nIGRhdGEgZm9yIHRoZSB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgY29sdW1uVmVjdG9yKG5ld0RhdGEpIHtcbiAgICAgICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgdGhpcyhuZXdEYXRhLmxlbmd0aCwgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3Iuc2V0KGksIDAsIG5ld0RhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBkaW1lbnNpb25zLiBWYWx1ZXMgd2lsbCBiZSB1bmRlZmluZWQuIFNhbWUgYXMgdXNpbmcgbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGVtcHR5KHJvd3MsIGNvbHVtbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcyhyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbnMuIFZhbHVlcyB3aWxsIGJlIHNldCB0byB6ZXJvLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgemVyb3Mocm93cywgY29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHkocm93cywgY29sdW1ucykuZmlsbCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbnMuIFZhbHVlcyB3aWxsIGJlIHNldCB0byBvbmUuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBvbmVzKHJvd3MsIGNvbHVtbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5KHJvd3MsIGNvbHVtbnMpLmZpbGwoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBkaW1lbnNpb25zLiBWYWx1ZXMgd2lsbCBiZSByYW5kb21seSBzZXQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbcm5nPU1hdGgucmFuZG9tXSAtIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyByYW5kKHJvd3MsIGNvbHVtbnMsIHJuZykge1xuICAgICAgICAgICAgaWYgKHJuZyA9PT0gdW5kZWZpbmVkKSBybmcgPSBNYXRoLnJhbmRvbTtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSB0aGlzLmVtcHR5KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXguc2V0KGksIGosIHJuZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVmFsdWVzIHdpbGwgYmUgcmFuZG9tIGludGVnZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXhWYWx1ZT0xMDAwXSAtIE1heGltdW0gdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW3JuZz1NYXRoLnJhbmRvbV0gLSBSYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcmFuZEludChyb3dzLCBjb2x1bW5zLCBtYXhWYWx1ZSwgcm5nKSB7XG4gICAgICAgICAgICBpZiAobWF4VmFsdWUgPT09IHVuZGVmaW5lZCkgbWF4VmFsdWUgPSAxMDAwO1xuICAgICAgICAgICAgaWYgKHJuZyA9PT0gdW5kZWZpbmVkKSBybmcgPSBNYXRoLnJhbmRvbTtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSB0aGlzLmVtcHR5KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLmZsb29yKHJuZygpICogbWF4VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXguc2V0KGksIGosIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaWRlbnRpdHkgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbi4gVmFsdWVzIG9mIHRoZSBkaWFnb25hbCB3aWxsIGJlIDEgYW5kIG90aGVycyB3aWxsIGJlIDAuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb2x1bW5zPXJvd3NdIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZT0xXSAtIFZhbHVlIHRvIGZpbGwgdGhlIGRpYWdvbmFsIHdpdGhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgaWRlbnRpdHkgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZXllKHJvd3MsIGNvbHVtbnMsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1ucyA9PT0gdW5kZWZpbmVkKSBjb2x1bW5zID0gcm93cztcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB2YWx1ZSA9IDE7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gdGhpcy56ZXJvcyhyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtYXRyaXguc2V0KGksIGksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIGRpYWdvbmFsIG1hdHJpeCBiYXNlZCBvbiB0aGUgZ2l2ZW4gYXJyYXkuXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgLSBBcnJheSBjb250YWluaW5nIHRoZSBkYXRhIGZvciB0aGUgZGlhZ29uYWxcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtyb3dzXSAtIE51bWJlciBvZiByb3dzIChEZWZhdWx0OiBkYXRhLmxlbmd0aClcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb2x1bW5zXSAtIE51bWJlciBvZiBjb2x1bW5zIChEZWZhdWx0OiByb3dzKVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBkaWFnb25hbCBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBkaWFnKGRhdGEsIHJvd3MsIGNvbHVtbnMpIHtcbiAgICAgICAgICAgIHZhciBsID0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAocm93cyA9PT0gdW5kZWZpbmVkKSByb3dzID0gbDtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zID09PSB1bmRlZmluZWQpIGNvbHVtbnMgPSByb3dzO1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKGwsIHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuemVyb3Mocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWF0cml4LnNldChpLCBpLCBkYXRhW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG1hdHJpeCB3aG9zZSBlbGVtZW50cyBhcmUgdGhlIG1pbmltdW0gYmV0d2VlbiBtYXRyaXgxIGFuZCBtYXRyaXgyXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXgxXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXgyXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBtaW4obWF0cml4MSwgbWF0cml4Mikge1xuICAgICAgICAgICAgbWF0cml4MSA9IHRoaXMuY2hlY2tNYXRyaXgobWF0cml4MSk7XG4gICAgICAgICAgICBtYXRyaXgyID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgyKTtcbiAgICAgICAgICAgIHZhciByb3dzID0gbWF0cml4MS5yb3dzO1xuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSBtYXRyaXgxLmNvbHVtbnM7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgTWF0aC5taW4obWF0cml4MS5nZXQoaSwgaiksIG1hdHJpeDIuZ2V0KGksIGopKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbWF0cml4IHdob3NlIGVsZW1lbnRzIGFyZSB0aGUgbWF4aW11bSBiZXR3ZWVuIG1hdHJpeDEgYW5kIG1hdHJpeDJcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeDFcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeDJcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIG1heChtYXRyaXgxLCBtYXRyaXgyKSB7XG4gICAgICAgICAgICBtYXRyaXgxID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgxKTtcbiAgICAgICAgICAgIG1hdHJpeDIgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDIpO1xuICAgICAgICAgICAgdmFyIHJvd3MgPSBtYXRyaXgxLnJvd3M7XG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IG1hdHJpeDEuY29sdW1ucztcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcyhyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldChpLCBqLCBNYXRoLm1heChtYXRyaXgxLmdldChpLCBqKSwgbWF0cml4Mi5nZXQoaSwgaikpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGEgTWF0cml4IGFuZCB0cmllcyB0byBpbnN0YW50aWF0ZSBvbmUgaWYgbm90XG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGNoZWNrTWF0cml4KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0cml4LmlzTWF0cml4KHZhbHVlKSA/IHZhbHVlIDogbmV3IHRoaXModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXJndW1lbnQgaXMgYSBNYXRyaXgsIGZhbHNlIG90aGVyd2lzZVxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgaXNNYXRyaXgodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgIT0gbnVsbCkgJiYgKHZhbHVlLmtsYXNzID09PSAnTWF0cml4Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByb3Age251bWJlcn0gc2l6ZSAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIG1hdHJpeC5cbiAgICAgICAgICovXG4gICAgICAgIGdldCBzaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBsaWVzIGEgY2FsbGJhY2sgZm9yIGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4LiBUaGUgZnVuY3Rpb24gaXMgY2FsbGVkIGluIHRoZSBtYXRyaXggKHRoaXMpIGNvbnRleHQuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHR3byBwYXJhbWV0ZXJzIDogaSAocm93KSBhbmQgaiAoY29sdW1uKVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5KGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaWkgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB2YXIgamogPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGpqOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IDFEIGFycmF5IGZpbGxlZCByb3cgYnkgcm93IHdpdGggdGhlIG1hdHJpeCB2YWx1ZXNcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICB0bzFEQXJyYXkoKSB7XG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBuZXcgQXJyYXkodGhpcy5zaXplKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2kgKiB0aGlzLmNvbHVtbnMgKyBqXSA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgMkQgYXJyYXkgY29udGFpbmluZyBhIGNvcHkgb2YgdGhlIGRhdGFcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICB0bzJEQXJyYXkoKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IG5ldyBBcnJheSh0aGlzLnJvd3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcHlbaV0gPSBuZXcgQXJyYXkodGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcHlbaV1bal0gPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBtYXRyaXggaGFzIG9uZSByb3dcbiAgICAgICAgICovXG4gICAgICAgIGlzUm93VmVjdG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm93cyA9PT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBtYXRyaXggaGFzIG9uZSBjb2x1bW5cbiAgICAgICAgICovXG4gICAgICAgIGlzQ29sdW1uVmVjdG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1ucyA9PT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBtYXRyaXggaGFzIG9uZSByb3cgb3Igb25lIGNvbHVtblxuICAgICAgICAgKi9cbiAgICAgICAgaXNWZWN0b3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucm93cyA9PT0gMSkgfHwgKHRoaXMuY29sdW1ucyA9PT0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWF0cml4IGhhcyB0aGUgc2FtZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1uc1xuICAgICAgICAgKi9cbiAgICAgICAgaXNTcXVhcmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3dzID09PSB0aGlzLmNvbHVtbnM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWF0cml4IGlzIHNxdWFyZSBhbmQgaGFzIHRoZSBzYW1lIHZhbHVlcyBvbiBib3RoIHNpZGVzIG9mIHRoZSBkaWFnb25hbFxuICAgICAgICAgKi9cbiAgICAgICAgaXNTeW1tZXRyaWMoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NxdWFyZSgpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBqKSAhPT0gdGhpcy5nZXQoaiwgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIGdpdmVuIGVsZW1lbnQgb2YgdGhlIG1hdHJpeC4gbWF0LnNldCgzLDQsMSkgaXMgZXF1aXZhbGVudCB0byBtYXRbM11bNF09MVxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0luZGV4IC0gSW5kZXggb2YgdGhlIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uSW5kZXggLSBJbmRleCBvZiB0aGUgY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXQgbWV0aG9kIGlzIHVuaW1wbGVtZW50ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBlbGVtZW50IG9mIHRoZSBtYXRyaXguIG1hdC5nZXQoMyw0KSBpcyBlcXVpdmFsZW50IHRvIG1hdHJpeFszXVs0XVxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0luZGV4IC0gSW5kZXggb2YgdGhlIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uSW5kZXggLSBJbmRleCBvZiB0aGUgY29sdW1uXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgbWV0aG9kIGlzIHVuaW1wbGVtZW50ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IG1hdHJpeCB0aGF0IGlzIGEgcmVwZXRpdGlvbiBvZiB0aGUgY3VycmVudCBtYXRyaXguIE5ldyBtYXRyaXggaGFzIHJvd1JlcCB0aW1lcyB0aGUgbnVtYmVyIG9mXG4gICAgICAgICAqIHJvd3Mgb2YgdGhlIG1hdHJpeCwgYW5kIGNvbFJlcCB0aW1lcyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93UmVwIC0gTnVtYmVyIG9mIHRpbWVzIHRoZSByb3dzIHNob3VsZCBiZSByZXBlYXRlZFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sUmVwIC0gTnVtYmVyIG9mIHRpbWVzIHRoZSBjb2x1bW5zIHNob3VsZCBiZSByZVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHZhciBtYXRyaXggPSBuZXcgTWF0cml4KFtbMSwyXV0pO1xuICAgICAgICAgKiBtYXRyaXgucmVwZWF0KDIpOyAvLyBbWzEsMl0sWzEsMl1dXG4gICAgICAgICAqL1xuICAgICAgICByZXBlYXQocm93UmVwLCBjb2xSZXApIHtcbiAgICAgICAgICAgIHJvd1JlcCA9IHJvd1JlcCB8fCAxO1xuICAgICAgICAgICAgY29sUmVwID0gY29sUmVwIHx8IDE7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKHRoaXMucm93cyAqIHJvd1JlcCwgdGhpcy5jb2x1bW5zICogY29sUmVwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93UmVwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbFJlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXRTdWJNYXRyaXgodGhpcywgdGhpcy5yb3dzICogaSwgdGhpcy5jb2x1bW5zICogaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWxscyB0aGUgbWF0cml4IHdpdGggYSBnaXZlbiB2YWx1ZS4gQWxsIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIHRoaXMgdmFsdWUuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIE5ldyB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGZpbGwodmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOZWdhdGVzIHRoZSBtYXRyaXguIEFsbCBlbGVtZW50cyB3aWxsIGJlIG11bHRpcGxpZWQgYnkgKC0xKVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIG5lZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bFMoLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgYXJyYXkgZnJvbSB0aGUgZ2l2ZW4gcm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGdldFJvdyhpbmRleCkge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB2YXIgcm93ID0gbmV3IEFycmF5KHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm93W2ldID0gdGhpcy5nZXQoaW5kZXgsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IHJvdyB2ZWN0b3IgZnJvbSB0aGUgZ2l2ZW4gcm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRSb3dWZWN0b3IoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJvd1ZlY3Rvcih0aGlzLmdldFJvdyhpbmRleCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYSByb3cgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gYXJyYXkgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzZXRSb3coaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIGFycmF5ID0gY2hlY2tSb3dWZWN0b3IodGhpcywgYXJyYXkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGluZGV4LCBpLCBhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyB0d28gcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93MSAtIEZpcnN0IHJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93MiAtIFNlY29uZCByb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzd2FwUm93cyhyb3cxLCByb3cyKSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdzEpO1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cyKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHRoaXMuZ2V0KHJvdzEsIGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdzEsIGksIHRoaXMuZ2V0KHJvdzIsIGkpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3cyLCBpLCB0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgYXJyYXkgZnJvbSB0aGUgZ2l2ZW4gY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGdldENvbHVtbihpbmRleCkge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gbmV3IEFycmF5KHRoaXMucm93cyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uW2ldID0gdGhpcy5nZXQoaSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IGNvbHVtbiB2ZWN0b3IgZnJvbSB0aGUgZ2l2ZW4gY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRDb2x1bW5WZWN0b3IoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbHVtblZlY3Rvcih0aGlzLmdldENvbHVtbihpbmRleCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYSBjb2x1bW4gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gYXJyYXkgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzZXRDb2x1bW4oaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIGFycmF5ID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgYXJyYXkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGluZGV4LCBhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyB0d28gY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uMSAtIEZpcnN0IGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uMiAtIFNlY29uZCBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzd2FwQ29sdW1ucyhjb2x1bW4xLCBjb2x1bW4yKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbjEpO1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHRoaXMuZ2V0KGksIGNvbHVtbjEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGNvbHVtbjEsIHRoaXMuZ2V0KGksIGNvbHVtbjIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBjb2x1bW4yLCB0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciB0byBlYWNoIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgYWRkUm93VmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICsgdmVjdG9yW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJ0cmFjdHMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciBmcm9tIGVhY2ggcm93XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzdWJSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLSB2ZWN0b3Jbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpcGxpZXMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciB3aXRoIGVhY2ggcm93XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBtdWxSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKiB2ZWN0b3Jbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpdmlkZXMgdGhlIHZhbHVlcyBvZiBlYWNoIHJvdyBieSB0aG9zZSBvZiBhIHZlY3RvclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgZGl2Um93VmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC8gdmVjdG9yW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIHRoZSB2YWx1ZXMgb2YgYSB2ZWN0b3IgdG8gZWFjaCBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGFkZENvbHVtblZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSArIHZlY3RvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3VidHJhY3RzIHRoZSB2YWx1ZXMgb2YgYSB2ZWN0b3IgZnJvbSBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc3ViQ29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC0gdmVjdG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXBsaWVzIHRoZSB2YWx1ZXMgb2YgYSB2ZWN0b3Igd2l0aCBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgbXVsQ29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICogdmVjdG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXZpZGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjb2x1bW4gYnkgdGhvc2Ugb2YgYSB2ZWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGRpdkNvbHVtblZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAvIHZlY3RvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlwbGllcyB0aGUgdmFsdWVzIG9mIGEgcm93IHdpdGggYSBzY2FsYXJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIG11bFJvdyhpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGluZGV4LCBpLCB0aGlzLmdldChpbmRleCwgaSkgKiB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXBsaWVzIHRoZSB2YWx1ZXMgb2YgYSBjb2x1bW4gd2l0aCBhIHNjYWxhclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgbXVsQ29sdW1uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaW5kZXgsIHRoaXMuZ2V0KGksIGluZGV4KSAqIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtYXgoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopID4gdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1heGltdW0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtYXhJbmRleCgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICB2YXIgaWR4ID0gWzAsIDBdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopID4gdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4WzBdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeFsxXSA9IGo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtaW4oKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopIDwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1pbmltdW0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5JbmRleCgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICB2YXIgaWR4ID0gWzAsIDBdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopIDwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4WzBdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeFsxXSA9IGo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgb2Ygb25lIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1heFJvdyhyb3cpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1heGltdW0gdmFsdWUgb2Ygb25lIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Um93SW5kZXgocm93KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KHJvdywgMCk7XG4gICAgICAgICAgICB2YXIgaWR4ID0gW3JvdywgMF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgICAgICAgICAgICAgICBpZHhbMV0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBvZiBvbmUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWluUm93KHJvdykge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChyb3csIGkpIDwgdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF4aW11bSB2YWx1ZSBvZiBvbmUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5Sb3dJbmRleChyb3cpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbcm93LCAwXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA8IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlkeFsxXSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIG9mIG9uZSBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtYXhDb2x1bW4oY29sdW1uKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIGNvbHVtbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGNvbHVtbikgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXhpbXVtIHZhbHVlIG9mIG9uZSBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1heENvbHVtbkluZGV4KGNvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIGlkeCA9IFswLCBjb2x1bW5dO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pID4gdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgaWR4WzBdID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgb2Ygb25lIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uIC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1pbkNvbHVtbihjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA8IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1pbmltdW0gdmFsdWUgb2Ygb25lIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uIC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbWluQ29sdW1uSW5kZXgoY29sdW1uKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgaWR4ID0gWzAsIGNvbHVtbl07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGNvbHVtbikgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBkaWFnb25hbCB2YWx1ZXMgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGRpYWcoKSB7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgdmFyIGRpYWcgPSBuZXcgQXJyYXkobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkaWFnW2ldID0gdGhpcy5nZXQoaSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlhZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBzdW0gYnkgdGhlIGFyZ3VtZW50IGdpdmVuLCBpZiBubyBhcmd1bWVudCBnaXZlbixcbiAgICAgICAgICogaXQgcmV0dXJucyB0aGUgc3VtIG9mIGFsbCBlbGVtZW50cyBvZiB0aGUgbWF0cml4LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnkgLSBzdW0gYnkgJ3Jvdycgb3IgJ2NvbHVtbicuXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeHxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBzdW0oYnkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoYnkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyb3cnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtQnlSb3codGhpcyk7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bUJ5Q29sdW1uKHRoaXMpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW1BbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWVhbiBvZiBhbGwgZWxlbWVudHMgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtZWFuKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VtKCkgLyB0aGlzLnNpemU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgcHJvZHVjdCBvZiBhbGwgZWxlbWVudHMgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBwcm9kKCkge1xuICAgICAgICAgICAgdmFyIHByb2QgPSAxO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZCAqPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBub3JtIG9mIGEgbWF0cml4LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFwiZnJvYmVuaXVzXCIgKGRlZmF1bHQpIG9yIFwibWF4XCIgcmV0dXJuIHJlc3AuIHRoZSBGcm9iZW5pdXMgbm9ybSBhbmQgdGhlIG1heCBub3JtLlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBub3JtKHR5cGUgPSAnZnJvYmVuaXVzJykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ21heCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXgoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Zyb2Jlbml1cycpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHRoaXMuZ2V0KGksIGopICogdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChyZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgdW5rbm93biBub3JtIHR5cGU6ICR7dHlwZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wdXRlcyB0aGUgY3VtdWxhdGl2ZSBzdW0gb2YgdGhlIG1hdHJpeCBlbGVtZW50cyAoaW4gcGxhY2UsIHJvdyBieSByb3cpXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgY3VtdWxhdGl2ZVN1bSgpIHtcbiAgICAgICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCBzdW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBkb3QgKHNjYWxhcikgcHJvZHVjdCBiZXR3ZWVuIHRoZSBtYXRyaXggYW5kIGFub3RoZXJcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IHZlY3RvcjIgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGRvdCh2ZWN0b3IyKSB7XG4gICAgICAgICAgICBpZiAoTWF0cml4LmlzTWF0cml4KHZlY3RvcjIpKSB2ZWN0b3IyID0gdmVjdG9yMi50bzFEQXJyYXkoKTtcbiAgICAgICAgICAgIHZhciB2ZWN0b3IxID0gdGhpcy50bzFEQXJyYXkoKTtcbiAgICAgICAgICAgIGlmICh2ZWN0b3IxLmxlbmd0aCAhPT0gdmVjdG9yMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmVjdG9ycyBkbyBub3QgaGF2ZSB0aGUgc2FtZSBzaXplJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZG90ID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRvdCArPSB2ZWN0b3IxW2ldICogdmVjdG9yMltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWF0cml4IHByb2R1Y3QgYmV0d2VlbiB0aGlzIGFuZCBvdGhlclxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gb3RoZXJcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgbW11bChvdGhlcikge1xuICAgICAgICAgICAgb3RoZXIgPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG90aGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnMgIT09IG90aGVyLnJvd3MpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTnVtYmVyIG9mIGNvbHVtbnMgb2YgbGVmdCBtYXRyaXggYXJlIG5vdCBlcXVhbCB0byBudW1iZXIgb2Ygcm93cyBvZiByaWdodCBtYXRyaXguJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5yb3dzO1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICB2YXIgcCA9IG90aGVyLmNvbHVtbnM7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10obSwgcCk7XG5cbiAgICAgICAgICAgIHZhciBCY29saiA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQmNvbGpba10gPSBvdGhlci5nZXQoaywgaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzICs9IHRoaXMuZ2V0KGksIGspICogQmNvbGpba107XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2V0KGksIGosIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJhc3NlbjJ4MihvdGhlcikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSgyLCAyKTtcbiAgICAgICAgICAgIGNvbnN0IGExMSA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgY29uc3QgYjExID0gb3RoZXIuZ2V0KDAsIDApO1xuICAgICAgICAgICAgY29uc3QgYTEyID0gdGhpcy5nZXQoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMTIgPSBvdGhlci5nZXQoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBhMjEgPSB0aGlzLmdldCgxLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGIyMSA9IG90aGVyLmdldCgxLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGEyMiA9IHRoaXMuZ2V0KDEsIDEpO1xuICAgICAgICAgICAgY29uc3QgYjIyID0gb3RoZXIuZ2V0KDEsIDEpO1xuXG4gICAgICAgICAgICAvLyBDb21wdXRlIGludGVybWVkaWF0ZSB2YWx1ZXMuXG4gICAgICAgICAgICBjb25zdCBtMSA9IChhMTEgKyBhMjIpICogKGIxMSArIGIyMik7XG4gICAgICAgICAgICBjb25zdCBtMiA9IChhMjEgKyBhMjIpICogYjExO1xuICAgICAgICAgICAgY29uc3QgbTMgPSBhMTEgKiAoYjEyIC0gYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG00ID0gYTIyICogKGIyMSAtIGIxMSk7XG4gICAgICAgICAgICBjb25zdCBtNSA9IChhMTEgKyBhMTIpICogYjIyO1xuICAgICAgICAgICAgY29uc3QgbTYgPSAoYTIxIC0gYTExKSAqIChiMTEgKyBiMTIpO1xuICAgICAgICAgICAgY29uc3QgbTcgPSAoYTEyIC0gYTIyKSAqIChiMjEgKyBiMjIpO1xuXG4gICAgICAgICAgICAvLyBDb21iaW5lIGludGVybWVkaWF0ZSB2YWx1ZXMgaW50byB0aGUgb3V0cHV0LlxuICAgICAgICAgICAgY29uc3QgYzAwID0gbTEgKyBtNCAtIG01ICsgbTc7XG4gICAgICAgICAgICBjb25zdCBjMDEgPSBtMyArIG01O1xuICAgICAgICAgICAgY29uc3QgYzEwID0gbTIgKyBtNDtcbiAgICAgICAgICAgIGNvbnN0IGMxMSA9IG0xIC0gbTIgKyBtMyArIG02O1xuXG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDAsIGMwMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDEsIGMwMSk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDAsIGMxMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDEsIGMxMSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyYXNzZW4zeDMob3RoZXIpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oMywgMyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGEwMCA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgY29uc3QgYTAxID0gdGhpcy5nZXQoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBhMDIgPSB0aGlzLmdldCgwLCAyKTtcbiAgICAgICAgICAgIGNvbnN0IGExMCA9IHRoaXMuZ2V0KDEsIDApO1xuICAgICAgICAgICAgY29uc3QgYTExID0gdGhpcy5nZXQoMSwgMSk7XG4gICAgICAgICAgICBjb25zdCBhMTIgPSB0aGlzLmdldCgxLCAyKTtcbiAgICAgICAgICAgIGNvbnN0IGEyMCA9IHRoaXMuZ2V0KDIsIDApO1xuICAgICAgICAgICAgY29uc3QgYTIxID0gdGhpcy5nZXQoMiwgMSk7XG4gICAgICAgICAgICBjb25zdCBhMjIgPSB0aGlzLmdldCgyLCAyKTtcblxuICAgICAgICAgICAgY29uc3QgYjAwID0gb3RoZXIuZ2V0KDAsIDApO1xuICAgICAgICAgICAgY29uc3QgYjAxID0gb3RoZXIuZ2V0KDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgYjAyID0gb3RoZXIuZ2V0KDAsIDIpO1xuICAgICAgICAgICAgY29uc3QgYjEwID0gb3RoZXIuZ2V0KDEsIDApO1xuICAgICAgICAgICAgY29uc3QgYjExID0gb3RoZXIuZ2V0KDEsIDEpO1xuICAgICAgICAgICAgY29uc3QgYjEyID0gb3RoZXIuZ2V0KDEsIDIpO1xuICAgICAgICAgICAgY29uc3QgYjIwID0gb3RoZXIuZ2V0KDIsIDApO1xuICAgICAgICAgICAgY29uc3QgYjIxID0gb3RoZXIuZ2V0KDIsIDEpO1xuICAgICAgICAgICAgY29uc3QgYjIyID0gb3RoZXIuZ2V0KDIsIDIpO1xuXG4gICAgICAgICAgICBjb25zdCBtMSA9IChhMDAgKyBhMDEgKyBhMDIgLSBhMTAgLSBhMTEgLSBhMjEgLSBhMjIpICogYjExO1xuICAgICAgICAgICAgY29uc3QgbTIgPSAoYTAwIC0gYTEwKSAqICgtYjAxICsgYjExKTtcbiAgICAgICAgICAgIGNvbnN0IG0zID0gYTExICogKC1iMDAgKyBiMDEgKyBiMTAgLSBiMTEgLSBiMTIgLSBiMjAgKyBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTQgPSAoLWEwMCArIGExMCArIGExMSkgKiAoYjAwIC0gYjAxICsgYjExKTtcbiAgICAgICAgICAgIGNvbnN0IG01ID0gKGExMCArIGExMSkgKiAoLWIwMCArIGIwMSk7XG4gICAgICAgICAgICBjb25zdCBtNiA9IGEwMCAqIGIwMDtcbiAgICAgICAgICAgIGNvbnN0IG03ID0gKC1hMDAgKyBhMjAgKyBhMjEpICogKGIwMCAtIGIwMiArIGIxMik7XG4gICAgICAgICAgICBjb25zdCBtOCA9ICgtYTAwICsgYTIwKSAqIChiMDIgLSBiMTIpO1xuICAgICAgICAgICAgY29uc3QgbTkgPSAoYTIwICsgYTIxKSAqICgtYjAwICsgYjAyKTtcbiAgICAgICAgICAgIGNvbnN0IG0xMCA9IChhMDAgKyBhMDEgKyBhMDIgLSBhMTEgLSBhMTIgLSBhMjAgLSBhMjEpICogYjEyO1xuICAgICAgICAgICAgY29uc3QgbTExID0gYTIxICogKC1iMDAgKyBiMDIgKyBiMTAgLSBiMTEgLSBiMTIgLSBiMjAgKyBiMjEpO1xuICAgICAgICAgICAgY29uc3QgbTEyID0gKC1hMDIgKyBhMjEgKyBhMjIpICogKGIxMSArIGIyMCAtIGIyMSk7XG4gICAgICAgICAgICBjb25zdCBtMTMgPSAoYTAyIC0gYTIyKSAqIChiMTEgLSBiMjEpO1xuICAgICAgICAgICAgY29uc3QgbTE0ID0gYTAyICogYjIwO1xuICAgICAgICAgICAgY29uc3QgbTE1ID0gKGEyMSArIGEyMikgKiAoLWIyMCArIGIyMSk7XG4gICAgICAgICAgICBjb25zdCBtMTYgPSAoLWEwMiArIGExMSArIGExMikgKiAoYjEyICsgYjIwIC0gYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG0xNyA9IChhMDIgLSBhMTIpICogKGIxMiAtIGIyMik7XG4gICAgICAgICAgICBjb25zdCBtMTggPSAoYTExICsgYTEyKSAqICgtYjIwICsgYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG0xOSA9IGEwMSAqIGIxMDtcbiAgICAgICAgICAgIGNvbnN0IG0yMCA9IGExMiAqIGIyMTtcbiAgICAgICAgICAgIGNvbnN0IG0yMSA9IGExMCAqIGIwMjtcbiAgICAgICAgICAgIGNvbnN0IG0yMiA9IGEyMCAqIGIwMTtcbiAgICAgICAgICAgIGNvbnN0IG0yMyA9IGEyMiAqIGIyMjtcblxuICAgICAgICAgICAgY29uc3QgYzAwID0gbTYgKyBtMTQgKyBtMTk7XG4gICAgICAgICAgICBjb25zdCBjMDEgPSBtMSArIG00ICsgbTUgKyBtNiArIG0xMiArIG0xNCArIG0xNTtcbiAgICAgICAgICAgIGNvbnN0IGMwMiA9IG02ICsgbTcgKyBtOSArIG0xMCArIG0xNCArIG0xNiArIG0xODtcbiAgICAgICAgICAgIGNvbnN0IGMxMCA9IG0yICsgbTMgKyBtNCArIG02ICsgbTE0ICsgbTE2ICsgbTE3O1xuICAgICAgICAgICAgY29uc3QgYzExID0gbTIgKyBtNCArIG01ICsgbTYgKyBtMjA7XG4gICAgICAgICAgICBjb25zdCBjMTIgPSBtMTQgKyBtMTYgKyBtMTcgKyBtMTggKyBtMjE7XG4gICAgICAgICAgICBjb25zdCBjMjAgPSBtNiArIG03ICsgbTggKyBtMTEgKyBtMTIgKyBtMTMgKyBtMTQ7XG4gICAgICAgICAgICBjb25zdCBjMjEgPSBtMTIgKyBtMTMgKyBtMTQgKyBtMTUgKyBtMjI7XG4gICAgICAgICAgICBjb25zdCBjMjIgPSBtNiArIG03ICsgbTggKyBtOSArIG0yMztcblxuICAgICAgICAgICAgcmVzdWx0LnNldCgwLCAwLCBjMDApO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgwLCAxLCBjMDEpO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgwLCAyLCBjMDIpO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgxLCAwLCBjMTApO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgxLCAxLCBjMTEpO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgxLCAyLCBjMTIpO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgyLCAwLCBjMjApO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgyLCAxLCBjMjEpO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgyLCAyLCBjMjIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtYXRyaXggcHJvZHVjdCBiZXR3ZWVuIHggYW5kIHkuIE1vcmUgZWZmaWNpZW50IHRoYW4gbW11bChvdGhlcikgb25seSB3aGVuIHdlIG11bHRpcGx5IHNxdWFyZWQgbWF0cml4IGFuZCB3aGVuIHRoZSBzaXplIG9mIHRoZSBtYXRyaXggaXMgPiAxMDAwLlxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0geVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBtbXVsU3RyYXNzZW4oeSkge1xuICAgICAgICAgICAgdmFyIHggPSB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgcjEgPSB4LnJvd3M7XG4gICAgICAgICAgICB2YXIgYzEgPSB4LmNvbHVtbnM7XG4gICAgICAgICAgICB2YXIgcjIgPSB5LnJvd3M7XG4gICAgICAgICAgICB2YXIgYzIgPSB5LmNvbHVtbnM7XG4gICAgICAgICAgICBpZiAoYzEgIT09IHIyKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE11bHRpcGx5aW5nICR7cjF9IHggJHtjMX0gYW5kICR7cjJ9IHggJHtjMn0gbWF0cml4OiBkaW1lbnNpb25zIGRvIG5vdCBtYXRjaC5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHV0IGEgbWF0cml4IGludG8gdGhlIHRvcCBsZWZ0IG9mIGEgbWF0cml4IG9mIHplcm9zLlxuICAgICAgICAgICAgLy8gYHJvd3NgIGFuZCBgY29sc2AgYXJlIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBvdXRwdXQgbWF0cml4LlxuICAgICAgICAgICAgZnVuY3Rpb24gZW1iZWQobWF0LCByb3dzLCBjb2xzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBtYXQucm93cztcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG1hdC5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGlmICgociA9PT0gcm93cykgJiYgKGMgPT09IGNvbHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdGF0ID0gTWF0cml4Lnplcm9zKHJvd3MsIGNvbHMpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChtYXQsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBib3RoIG1hdHJpY2VzIGFyZSB0aGUgc2FtZSBzaXplLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBleGNsdXNpdmVseSBmb3Igc2ltcGxpY2l0eTpcbiAgICAgICAgICAgIC8vIHRoaXMgYWxnb3JpdGhtIGNhbiBiZSBpbXBsZW1lbnRlZCB3aXRoIG1hdHJpY2VzIG9mIGRpZmZlcmVudCBzaXplcy5cblxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLm1heChyMSwgcjIpO1xuICAgICAgICAgICAgdmFyIGMgPSBNYXRoLm1heChjMSwgYzIpO1xuICAgICAgICAgICAgeCA9IGVtYmVkKHgsIHIsIGMpO1xuICAgICAgICAgICAgeSA9IGVtYmVkKHksIHIsIGMpO1xuXG4gICAgICAgICAgICAvLyBPdXIgcmVjdXJzaXZlIG11bHRpcGxpY2F0aW9uIGZ1bmN0aW9uLlxuICAgICAgICAgICAgZnVuY3Rpb24gYmxvY2tNdWx0KGEsIGIsIHJvd3MsIGNvbHMpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3Igc21hbGwgbWF0cmljZXMsIHJlc29ydCB0byBuYWl2ZSBtdWx0aXBsaWNhdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAocm93cyA8PSA1MTIgfHwgY29scyA8PSA1MTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubW11bChiKTsgLy8gYSBpcyBlcXVpdmFsZW50IHRvIHRoaXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBkeW5hbWljIHBhZGRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKChyb3dzICUgMiA9PT0gMSkgJiYgKGNvbHMgJSAyID09PSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gZW1iZWQoYSwgcm93cyArIDEsIGNvbHMgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IGVtYmVkKGIsIHJvd3MgKyAxLCBjb2xzICsgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dzICUgMiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gZW1iZWQoYSwgcm93cyArIDEsIGNvbHMpO1xuICAgICAgICAgICAgICAgICAgICBiID0gZW1iZWQoYiwgcm93cyArIDEsIGNvbHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29scyAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGVtYmVkKGEsIHJvd3MsIGNvbHMgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IGVtYmVkKGIsIHJvd3MsIGNvbHMgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgaGFsZlJvd3MgPSBwYXJzZUludChhLnJvd3MgLyAyKTtcbiAgICAgICAgICAgICAgICB2YXIgaGFsZkNvbHMgPSBwYXJzZUludChhLmNvbHVtbnMgLyAyKTtcbiAgICAgICAgICAgICAgICAvLyBTdWJkaXZpZGUgaW5wdXQgbWF0cmljZXMuXG4gICAgICAgICAgICAgICAgdmFyIGExMSA9IGEuc3ViTWF0cml4KDAsIGhhbGZSb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcbiAgICAgICAgICAgICAgICB2YXIgYjExID0gYi5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGExMiA9IGEuc3ViTWF0cml4KDAsIGhhbGZSb3dzIC0gMSwgaGFsZkNvbHMsIGEuY29sdW1ucyAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBiMTIgPSBiLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIGhhbGZDb2xzLCBiLmNvbHVtbnMgLSAxKTtcblxuICAgICAgICAgICAgICAgIHZhciBhMjEgPSBhLnN1Yk1hdHJpeChoYWxmUm93cywgYS5yb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcbiAgICAgICAgICAgICAgICB2YXIgYjIxID0gYi5zdWJNYXRyaXgoaGFsZlJvd3MsIGIucm93cyAtIDEsIDAsIGhhbGZDb2xzIC0gMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYTIyID0gYS5zdWJNYXRyaXgoaGFsZlJvd3MsIGEucm93cyAtIDEsIGhhbGZDb2xzLCBhLmNvbHVtbnMgLSAxKTtcbiAgICAgICAgICAgICAgICB2YXIgYjIyID0gYi5zdWJNYXRyaXgoaGFsZlJvd3MsIGIucm93cyAtIDEsIGhhbGZDb2xzLCBiLmNvbHVtbnMgLSAxKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgaW50ZXJtZWRpYXRlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICB2YXIgbTEgPSBibG9ja011bHQoTWF0cml4LmFkZChhMTEsIGEyMiksIE1hdHJpeC5hZGQoYjExLCBiMjIpLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgICAgICAgICAgIHZhciBtMiA9IGJsb2NrTXVsdChNYXRyaXguYWRkKGEyMSwgYTIyKSwgYjExLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgICAgICAgICAgIHZhciBtMyA9IGJsb2NrTXVsdChhMTEsIE1hdHJpeC5zdWIoYjEyLCBiMjIpLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgICAgICAgICAgIHZhciBtNCA9IGJsb2NrTXVsdChhMjIsIE1hdHJpeC5zdWIoYjIxLCBiMTEpLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgICAgICAgICAgIHZhciBtNSA9IGJsb2NrTXVsdChNYXRyaXguYWRkKGExMSwgYTEyKSwgYjIyLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgICAgICAgICAgIHZhciBtNiA9IGJsb2NrTXVsdChNYXRyaXguc3ViKGEyMSwgYTExKSwgTWF0cml4LmFkZChiMTEsIGIxMiksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG03ID0gYmxvY2tNdWx0KE1hdHJpeC5zdWIoYTEyLCBhMjIpLCBNYXRyaXguYWRkKGIyMSwgYjIyKSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbWJpbmUgaW50ZXJtZWRpYXRlIHZhbHVlcyBpbnRvIHRoZSBvdXRwdXQuXG4gICAgICAgICAgICAgICAgdmFyIGMxMSA9IE1hdHJpeC5hZGQobTEsIG00KTtcbiAgICAgICAgICAgICAgICBjMTEuc3ViKG01KTtcbiAgICAgICAgICAgICAgICBjMTEuYWRkKG03KTtcbiAgICAgICAgICAgICAgICB2YXIgYzEyID0gTWF0cml4LmFkZChtMywgbTUpO1xuICAgICAgICAgICAgICAgIHZhciBjMjEgPSBNYXRyaXguYWRkKG0yLCBtNCk7XG4gICAgICAgICAgICAgICAgdmFyIGMyMiA9IE1hdHJpeC5zdWIobTEsIG0yKTtcbiAgICAgICAgICAgICAgICBjMjIuYWRkKG0zKTtcbiAgICAgICAgICAgICAgICBjMjIuYWRkKG02KTtcblxuICAgICAgICAgICAgICAgIC8vQ3JvcCBvdXRwdXQgdG8gdGhlIGRlc2lyZWQgc2l6ZSAodW5kbyBkeW5hbWljIHBhZGRpbmcpLlxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRhdCA9IE1hdHJpeC56ZXJvcygyICogYzExLnJvd3MsIDIgKiBjMTEuY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgoYzExLCAwLCAwKTtcbiAgICAgICAgICAgICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMTIsIGMxMS5yb3dzLCAwKTtcbiAgICAgICAgICAgICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMjEsIDAsIGMxMS5jb2x1bW5zKTtcbiAgICAgICAgICAgICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMjIsIGMxMS5yb3dzLCBjMTEuY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0LnN1Yk1hdHJpeCgwLCByb3dzIC0gMSwgMCwgY29scyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJsb2NrTXVsdCh4LCB5LCByLCBjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgcm93LWJ5LXJvdyBzY2FsZWQgbWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTWluaW11bSBzY2FsZWQgdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gLSBNYXhpbXVtIHNjYWxlZCB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIHNjYWxlZCBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHNjYWxlUm93cyhtaW4sIG1heCkge1xuICAgICAgICAgICAgbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogbWluO1xuICAgICAgICAgICAgbWF4ID0gbWF4ID09PSB1bmRlZmluZWQgPyAxIDogbWF4O1xuICAgICAgICAgICAgaWYgKG1pbiA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluIHNob3VsZCBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gbWF4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5lbXB0eSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZCA9IHJlc2NhbGUodGhpcy5nZXRSb3coaSksIHttaW4sIG1heH0pO1xuICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXRSb3coaSwgc2NhbGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyBjb2x1bW4tYnktY29sdW1uIHNjYWxlZCBtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gLSBNaW5pbXVtIHNjYWxlZCB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIE1heGltdW0gc2NhbGVkIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IHNjYWxlZCBtYXRyaXhcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDJdLFstMSwwXV0pO1xuICAgICAgICAgKiB2YXIgc2NhbGVkTWF0cml4ID0gbWF0cml4LnNjYWxlQ29sdW1ucygpOyAvLyBbWzEsMV0sWzAsMF1dXG4gICAgICAgICAqL1xuICAgICAgICBzY2FsZUNvbHVtbnMobWluLCBtYXgpIHtcbiAgICAgICAgICAgIG1pbiA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMCA6IG1pbjtcbiAgICAgICAgICAgIG1heCA9IG1heCA9PT0gdW5kZWZpbmVkID8gMSA6IG1heDtcbiAgICAgICAgICAgIGlmIChtaW4gPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbiBzaG91bGQgYmUgc3RyaWN0bHkgc21hbGxlciB0aGFuIG1heCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuZW1wdHkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZWQgPSByZXNjYWxlKHRoaXMuZ2V0Q29sdW1uKGkpLCB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IG1heFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXRDb2x1bW4oaSwgc2NhbGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBLcm9uZWNrZXIgcHJvZHVjdCAoYWxzbyBrbm93biBhcyB0ZW5zb3IgcHJvZHVjdCkgYmV0d2VlbiB0aGlzIGFuZCBvdGhlclxuICAgICAgICAgKiBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS3JvbmVja2VyX3Byb2R1Y3RcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG90aGVyXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIGtyb25lY2tlclByb2R1Y3Qob3RoZXIpIHtcbiAgICAgICAgICAgIG90aGVyID0gdGhpcy5jb25zdHJ1Y3Rvci5jaGVja01hdHJpeChvdGhlcik7XG5cbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5yb3dzO1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICB2YXIgcCA9IG90aGVyLnJvd3M7XG4gICAgICAgICAgICB2YXIgcSA9IG90aGVyLmNvbHVtbnM7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10obSAqIHAsIG4gKiBxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgcTsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3AgKiBpICsga11bcSAqIGogKyBsXSA9IHRoaXMuZ2V0KGksIGopICogb3RoZXIuZ2V0KGssIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFuc3Bvc2VzIHRoZSBtYXRyaXggYW5kIHJldHVybnMgYSBuZXcgb25lIGNvbnRhaW5pbmcgdGhlIHJlc3VsdFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc3Bvc2UoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKHRoaXMuY29sdW1ucywgdGhpcy5yb3dzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoaiwgaSwgdGhpcy5nZXQoaSwgaikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU29ydHMgdGhlIHJvd3MgKGluIHBsYWNlKVxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlRnVuY3Rpb24gLSB1c3VhbCBBcnJheS5wcm90b3R5cGUuc29ydCBjb21wYXJpc29uIGZ1bmN0aW9uXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc29ydFJvd3MoY29tcGFyZUZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZUZ1bmN0aW9uID09PSB1bmRlZmluZWQpIGNvbXBhcmVGdW5jdGlvbiA9IGNvbXBhcmVOdW1iZXJzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um93KGksIHRoaXMuZ2V0Um93KGkpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb3J0cyB0aGUgY29sdW1ucyAoaW4gcGxhY2UpXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVGdW5jdGlvbiAtIHVzdWFsIEFycmF5LnByb3RvdHlwZS5zb3J0IGNvbXBhcmlzb24gZnVuY3Rpb25cbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Q29sdW1ucyhjb21wYXJlRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkgY29tcGFyZUZ1bmN0aW9uID0gY29tcGFyZU51bWJlcnM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb2x1bW4oaSwgdGhpcy5nZXRDb2x1bW4oaSkuc29ydChjb21wYXJlRnVuY3Rpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBzdWJzZXQgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRSb3cgLSBGaXJzdCByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFJvdyAtIExhc3Qgcm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydENvbHVtbiAtIEZpcnN0IGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kQ29sdW1uIC0gTGFzdCBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3ViTWF0cml4KHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrUmFuZ2UodGhpcywgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbik7XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKGVuZFJvdyAtIHN0YXJ0Um93ICsgMSwgZW5kQ29sdW1uIC0gc3RhcnRDb2x1bW4gKyAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBzdGFydENvbHVtbjsgaiA8PSBlbmRDb2x1bW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXhbaSAtIHN0YXJ0Um93XVtqIC0gc3RhcnRDb2x1bW5dID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgc3Vic2V0IG9mIHRoZSBtYXRyaXggYmFzZWQgb24gYW4gYXJyYXkgb2Ygcm93IGluZGljZXNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gaW5kaWNlcyAtIEFycmF5IGNvbnRhaW5pbmcgdGhlIHJvdyBpbmRpY2VzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRDb2x1bW4gPSAwXSAtIEZpcnN0IGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZENvbHVtbiA9IHRoaXMuY29sdW1ucy0xXSAtIExhc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHN1Yk1hdHJpeFJvdyhpbmRpY2VzLCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRDb2x1bW4gPT09IHVuZGVmaW5lZCkgc3RhcnRDb2x1bW4gPSAwO1xuICAgICAgICAgICAgaWYgKGVuZENvbHVtbiA9PT0gdW5kZWZpbmVkKSBlbmRDb2x1bW4gPSB0aGlzLmNvbHVtbnMgLSAxO1xuICAgICAgICAgICAgaWYgKChzdGFydENvbHVtbiA+IGVuZENvbHVtbikgfHwgKHN0YXJ0Q29sdW1uIDwgMCkgfHwgKHN0YXJ0Q29sdW1uID49IHRoaXMuY29sdW1ucykgfHwgKGVuZENvbHVtbiA8IDApIHx8IChlbmRDb2x1bW4gPj0gdGhpcy5jb2x1bW5zKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBcmd1bWVudCBvdXQgb2YgcmFuZ2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShpbmRpY2VzLmxlbmd0aCwgZW5kQ29sdW1uIC0gc3RhcnRDb2x1bW4gKyAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBzdGFydENvbHVtbjsgaiA8PSBlbmRDb2x1bW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kaWNlc1tpXSA8IDAgfHwgaW5kaWNlc1tpXSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdSb3cgaW5kZXggb3V0IG9mIHJhbmdlOiAnICsgaW5kaWNlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldChpLCBqIC0gc3RhcnRDb2x1bW4sIHRoaXMuZ2V0KGluZGljZXNbaV0sIGopKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBzdWJzZXQgb2YgdGhlIG1hdHJpeCBiYXNlZCBvbiBhbiBhcnJheSBvZiBjb2x1bW4gaW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBpbmRpY2VzIC0gQXJyYXkgY29udGFpbmluZyB0aGUgY29sdW1uIGluZGljZXNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydFJvdyA9IDBdIC0gRmlyc3Qgcm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kUm93ID0gdGhpcy5yb3dzLTFdIC0gTGFzdCByb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3ViTWF0cml4Q29sdW1uKGluZGljZXMsIHN0YXJ0Um93LCBlbmRSb3cpIHtcbiAgICAgICAgICAgIGlmIChzdGFydFJvdyA9PT0gdW5kZWZpbmVkKSBzdGFydFJvdyA9IDA7XG4gICAgICAgICAgICBpZiAoZW5kUm93ID09PSB1bmRlZmluZWQpIGVuZFJvdyA9IHRoaXMucm93cyAtIDE7XG4gICAgICAgICAgICBpZiAoKHN0YXJ0Um93ID4gZW5kUm93KSB8fCAoc3RhcnRSb3cgPCAwKSB8fCAoc3RhcnRSb3cgPj0gdGhpcy5yb3dzKSB8fCAoZW5kUm93IDwgMCkgfHwgKGVuZFJvdyA+PSB0aGlzLnJvd3MpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0FyZ3VtZW50IG91dCBvZiByYW5nZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKGVuZFJvdyAtIHN0YXJ0Um93ICsgMSwgaW5kaWNlcy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHN0YXJ0Um93OyBqIDw9IGVuZFJvdzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRpY2VzW2ldIDwgMCB8fCBpbmRpY2VzW2ldID49IHRoaXMuY29sdW1ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0NvbHVtbiBpbmRleCBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRpY2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXguc2V0KGogLSBzdGFydFJvdywgaSwgdGhpcy5nZXQoaiwgaW5kaWNlc1tpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IGEgcGFydCBvZiB0aGUgbWF0cml4IHRvIHRoZSBnaXZlbiBzdWItbWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fEFycmF5PCBBcnJheSA+fSBtYXRyaXggLSBUaGUgc291cmNlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGV4dHJhY3QgdmFsdWVzLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRSb3cgLSBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IHJvdyB0byBzZXRcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Q29sdW1uIC0gVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBjb2x1bW4gdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHNldFN1Yk1hdHJpeChtYXRyaXgsIHN0YXJ0Um93LCBzdGFydENvbHVtbikge1xuICAgICAgICAgICAgbWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgICAgICAgICAgdmFyIGVuZFJvdyA9IHN0YXJ0Um93ICsgbWF0cml4LnJvd3MgLSAxO1xuICAgICAgICAgICAgdmFyIGVuZENvbHVtbiA9IHN0YXJ0Q29sdW1uICsgbWF0cml4LmNvbHVtbnMgLSAxO1xuICAgICAgICAgICAgY2hlY2tSYW5nZSh0aGlzLCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3N0YXJ0Um93ICsgaV1bc3RhcnRDb2x1bW4gKyBqXSA9IG1hdHJpeC5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIGEgbmV3IG1hdHJpeCBiYXNlZCBvbiBhIHNlbGVjdGlvbiBvZiByb3dzIGFuZCBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gcm93SW5kaWNlcyAtIFRoZSByb3cgaW5kaWNlcyB0byBzZWxlY3QuIE9yZGVyIG1hdHRlcnMgYW5kIGFuIGluZGV4IGNhbiBiZSBtb3JlIHRoYW4gb25jZS5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb2x1bW5JbmRpY2VzIC0gVGhlIGNvbHVtbiBpbmRpY2VzIHRvIHNlbGVjdC4gT3JkZXIgbWF0dGVycyBhbmQgYW4gaW5kZXggY2FuIGJlIHVzZSBtb3JlIHRoYW4gb25jZS5cbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uKHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgICAgICAgICAgIHZhciBpbmRpY2VzID0gY2hlY2tJbmRpY2VzKHRoaXMsIHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpO1xuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShyb3dJbmRpY2VzLmxlbmd0aCwgY29sdW1uSW5kaWNlcy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLnJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByb3dJbmRleCA9IGluZGljZXMucm93W2ldO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaW5kaWNlcy5jb2x1bW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbkluZGV4ID0gaW5kaWNlcy5jb2x1bW5bal07XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeFtpXVtqXSA9IHRoaXMuZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSB0cmFjZSBvZiB0aGUgbWF0cml4IChzdW0gb2YgdGhlIGRpYWdvbmFsIGVsZW1lbnRzKVxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0cmFjZSgpIHtcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICB2YXIgdHJhY2UgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgICAgICAgICAgIHRyYWNlICs9IHRoaXMuZ2V0KGksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRyYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgIE1hdHJpeCB2aWV3c1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIHRyYW5zcG9zaXRpb24gb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhUcmFuc3Bvc2VWaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNwb3NlVmlldygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4VHJhbnNwb3NlVmlldyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgcm93IHZlY3RvciB3aXRoIHRoZSBnaXZlbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gcm93IGluZGV4IG9mIHRoZSB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4Um93Vmlld31cbiAgICAgICAgICovXG4gICAgICAgIHJvd1ZpZXcocm93KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFJvd1ZpZXcodGhpcywgcm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgY29sdW1uIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uIC0gY29sdW1uIGluZGV4IG9mIHRoZSB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4Q29sdW1uVmlld31cbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtblZpZXcoY29sdW1uKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeENvbHVtblZpZXcodGhpcywgY29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgbWF0cml4IGZsaXBwZWQgaW4gdGhlIHJvdyBheGlzXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeEZsaXBSb3dWaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcFJvd1ZpZXcoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeEZsaXBSb3dWaWV3KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBtYXRyaXggZmxpcHBlZCBpbiB0aGUgY29sdW1uIGF4aXNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4RmxpcENvbHVtblZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBmbGlwQ29sdW1uVmlldygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4RmxpcENvbHVtblZpZXcodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgYSBzdWJtYXRyaXggZ2l2aW5nIHRoZSBpbmRleCBib3VuZGFyaWVzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFJvdyAtIGZpcnN0IHJvdyBpbmRleCBvZiB0aGUgc3VibWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmRSb3cgLSBsYXN0IHJvdyBpbmRleCBvZiB0aGUgc3VibWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydENvbHVtbiAtIGZpcnN0IGNvbHVtbiBpbmRleCBvZiB0aGUgc3VibWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmRDb2x1bW4gLSBsYXN0IGNvbHVtbiBpbmRleCBvZiB0aGUgc3VibWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFN1YlZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBzdWJNYXRyaXhWaWV3KHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4U3ViVmlldyh0aGlzLCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgY3Jvc3Mgb2YgdGhlIHJvdyBpbmRpY2VzIGFuZCB0aGUgY29sdW1uIGluZGljZXNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogLy8gcmVzdWx0aW5nIHZlY3RvciBpcyBbWzJdLCBbMl1dXG4gICAgICAgICAqIHZhciBtYXRyaXggPSBuZXcgTWF0cml4KFtbMSwyLDNdLCBbNCw1LDZdXSkuc2VsZWN0aW9uVmlldyhbMCwgMF0sIFsxXSlcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSByb3dJbmRpY2VzXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29sdW1uSW5kaWNlc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhTZWxlY3Rpb25WaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uVmlldyhyb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFNlbGVjdGlvblZpZXcodGhpcywgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIHJvdyBpbmRpY2VzXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIC8vIHJlc3VsdGluZyB2ZWN0b3IgaXMgW1sxLDIsM10sIFsxLDIsM11dXG4gICAgICAgICAqIHZhciBtYXRyaXggPSBuZXcgTWF0cml4KFtbMSwyLDNdLCBbNCw1LDZdXSkucm93U2VsZWN0aW9uVmlldyhbMCwgMF0pXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gcm93SW5kaWNlc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhSb3dTZWxlY3Rpb25WaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgcm93U2VsZWN0aW9uVmlldyhyb3dJbmRpY2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFJvd1NlbGVjdGlvblZpZXcodGhpcywgcm93SW5kaWNlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIGNvbHVtbiBpbmRpY2VzXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIC8vIHJlc3VsdGluZyB2ZWN0b3IgaXMgW1syLCAyXSwgWzUsIDVdXVxuICAgICAgICAgKiB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeChbWzEsMiwzXSwgWzQsNSw2XV0pLmNvbHVtblNlbGVjdGlvblZpZXcoWzEsIDFdKVxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbHVtbkluZGljZXNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4Q29sdW1uU2VsZWN0aW9uVmlld31cbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtblNlbGVjdGlvblZpZXcoY29sdW1uSW5kaWNlcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhDb2x1bW5TZWxlY3Rpb25WaWV3KHRoaXMsIGNvbHVtbkluZGljZXMpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgKiBDYWxjdWxhdGVzIGFuZCByZXR1cm5zIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeCBhcyBhIE51bWJlclxuICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICogICBuZXcgTWF0cml4KFtbMSwyLDNdLCBbNCw1LDZdXSkuZGV0KClcbiAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICovXG4gICAgICAgIGRldCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSwgYiwgYywgZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDIgeCAyIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICBhID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB0aGlzLmdldCgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYyA9IHRoaXMuZ2V0KDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkID0gdGhpcy5nZXQoMSwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKiBkIC0gKGIgKiBjKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1ucyA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAvLyAzIHggMyBtYXRyaXhcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Yk1hdHJpeDAsIHN1Yk1hdHJpeDEsIHN1Yk1hdHJpeDI7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1hdHJpeDAgPSB0aGlzLnNlbGVjdGlvblZpZXcoWzEsIDJdLCBbMSwgMl0pO1xuICAgICAgICAgICAgICAgICAgICBzdWJNYXRyaXgxID0gdGhpcy5zZWxlY3Rpb25WaWV3KFsxLCAyXSwgWzAsIDJdKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWF0cml4MiA9IHRoaXMuc2VsZWN0aW9uVmlldyhbMSwgMl0sIFswLCAxXSk7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHRoaXMuZ2V0KDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjID0gdGhpcy5nZXQoMCwgMik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKiBzdWJNYXRyaXgwLmRldCgpIC0gYiAqIHN1Yk1hdHJpeDEuZGV0KCkgKyBjICogc3ViTWF0cml4Mi5kZXQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZW5lcmFsIHB1cnBvc2UgZGV0ZXJtaW5hbnQgdXNpbmcgdGhlIExVIGRlY29tcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMdURlY29tcG9zaXRpb24odGhpcykuZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdEZXRlcm1pbmFudCBjYW4gb25seSBiZSBjYWxjdWxhdGVkIGZvciBhIHNxdWFyZSBtYXRyaXguJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpbnZlcnNlIG9mIGEgbWF0cml4IGlmIGl0IGV4aXN0cyBvciB0aGUgcHNldWRvaW52ZXJzZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGhyZXNob2xkIC0gdGhyZXNob2xkIGZvciB0YWtpbmcgaW52ZXJzZSBvZiBzaW5ndWxhciB2YWx1ZXMgKGRlZmF1bHQgPSAxZS0xNSlcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGUgKHBzZXVkbylpbnZlcnRlZCBtYXRyaXguXG4gICAgICAgICAqL1xuICAgICAgICBwc2V1ZG9JbnZlcnNlKHRocmVzaG9sZCkge1xuICAgICAgICAgICAgaWYgKHRocmVzaG9sZCA9PT0gdW5kZWZpbmVkKSB0aHJlc2hvbGQgPSBOdW1iZXIuRVBTSUxPTjtcbiAgICAgICAgICAgIHZhciBzdmRTb2x1dGlvbiA9IG5ldyBTdkRlY29tcG9zaXRpb24odGhpcywge2F1dG9UcmFuc3Bvc2U6IHRydWV9KTtcblxuICAgICAgICAgICAgdmFyIFUgPSBzdmRTb2x1dGlvbi5sZWZ0U2luZ3VsYXJWZWN0b3JzO1xuICAgICAgICAgICAgdmFyIFYgPSBzdmRTb2x1dGlvbi5yaWdodFNpbmd1bGFyVmVjdG9ycztcbiAgICAgICAgICAgIHZhciBzID0gc3ZkU29sdXRpb24uZGlhZ29uYWw7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzW2ldKSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBzW2ldID0gMS4wIC8gc1tpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzW2ldID0gMC4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29udmVydCBsaXN0IHRvIGRpYWdvbmFsXG4gICAgICAgICAgICBzID0gdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10uZGlhZyhzKTtcbiAgICAgICAgICAgIHJldHVybiBWLm1tdWwocy5tbXVsKFUudHJhbnNwb3NlVmlldygpKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhbiBleGFjdCBhbmQgaW5kZXBlbmRlbnQgY29weSBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIGNsb25lKCkge1xuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5jb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXguc2V0KHJvdywgY29sdW1uLCB0aGlzLmdldChyb3csIGNvbHVtbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBNYXRyaXgucHJvdG90eXBlLmtsYXNzID0gJ01hdHJpeCc7XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlTnVtYmVycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9XG5cbiAgICAvKlxuICAgICBTeW5vbnltc1xuICAgICAqL1xuXG4gICAgTWF0cml4LnJhbmRvbSA9IE1hdHJpeC5yYW5kO1xuICAgIE1hdHJpeC5kaWFnb25hbCA9IE1hdHJpeC5kaWFnO1xuICAgIE1hdHJpeC5wcm90b3R5cGUuZGlhZ29uYWwgPSBNYXRyaXgucHJvdG90eXBlLmRpYWc7XG4gICAgTWF0cml4LmlkZW50aXR5ID0gTWF0cml4LmV5ZTtcbiAgICBNYXRyaXgucHJvdG90eXBlLm5lZ2F0ZSA9IE1hdHJpeC5wcm90b3R5cGUubmVnO1xuICAgIE1hdHJpeC5wcm90b3R5cGUudGVuc29yUHJvZHVjdCA9IE1hdHJpeC5wcm90b3R5cGUua3JvbmVja2VyUHJvZHVjdDtcbiAgICBNYXRyaXgucHJvdG90eXBlLmRldGVybWluYW50ID0gTWF0cml4LnByb3RvdHlwZS5kZXQ7XG5cbiAgICAvKlxuICAgICBBZGQgZHluYW1pY2FsbHkgaW5zdGFuY2UgYW5kIHN0YXRpYyBtZXRob2RzIGZvciBtYXRoZW1hdGljYWwgb3BlcmF0aW9uc1xuICAgICAqL1xuXG4gICAgdmFyIGlucGxhY2VPcGVyYXRvciA9IGBcbihmdW5jdGlvbiAlbmFtZSUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMuJW5hbWUlUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJW5hbWUlTSh2YWx1ZSk7XG59KVxuYDtcblxuICAgIHZhciBpbnBsYWNlT3BlcmF0b3JTY2FsYXIgPSBgXG4oZnVuY3Rpb24gJW5hbWUlUyh2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgJW9wJSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcblxuICAgIHZhciBpbnBsYWNlT3BlcmF0b3JNYXRyaXggPSBgXG4oZnVuY3Rpb24gJW5hbWUlTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgJW9wJSBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuXG4gICAgdmFyIHN0YXRpY09wZXJhdG9yID0gYFxuKGZ1bmN0aW9uICVuYW1lJShtYXRyaXgsIHZhbHVlKSB7XG4gICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzW1N5bWJvbC5zcGVjaWVzXShtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguJW5hbWUlKHZhbHVlKTtcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VNZXRob2QgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgJW1ldGhvZCUodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuXG4gICAgdmFyIHN0YXRpY01ldGhvZCA9IGBcbihmdW5jdGlvbiAlbmFtZSUobWF0cml4KSB7XG4gICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzW1N5bWJvbC5zcGVjaWVzXShtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguJW5hbWUlKCk7XG59KVxuYDtcblxuICAgIHZhciBpbnBsYWNlTWV0aG9kV2l0aEFyZ3MgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKCVhcmdzJSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgJW1ldGhvZCUodGhpcy5nZXQoaSwgaiksICVhcmdzJSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG5cbiAgICB2YXIgc3RhdGljTWV0aG9kV2l0aEFyZ3MgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKG1hdHJpeCwgJWFyZ3MlKSB7XG4gICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzW1N5bWJvbC5zcGVjaWVzXShtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguJW5hbWUlKCVhcmdzJSk7XG59KVxuYDtcblxuXG4gICAgdmFyIGlucGxhY2VNZXRob2RXaXRoT25lQXJnU2NhbGFyID0gYFxuKGZ1bmN0aW9uICVuYW1lJVModmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGksIGosICVtZXRob2QlKHRoaXMuZ2V0KGksIGopLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG4gICAgdmFyIGlucGxhY2VNZXRob2RXaXRoT25lQXJnTWF0cml4ID0gYFxuKGZ1bmN0aW9uICVuYW1lJU0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGksIGosICVtZXRob2QlKHRoaXMuZ2V0KGksIGopLCBtYXRyaXguZ2V0KGksIGopKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcblxuICAgIHZhciBpbnBsYWNlTWV0aG9kV2l0aE9uZUFyZyA9IGBcbihmdW5jdGlvbiAlbmFtZSUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMuJW5hbWUlUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJW5hbWUlTSh2YWx1ZSk7XG59KVxuYDtcblxuICAgIHZhciBzdGF0aWNNZXRob2RXaXRoT25lQXJnID0gc3RhdGljTWV0aG9kV2l0aEFyZ3M7XG5cbiAgICB2YXIgb3BlcmF0b3JzID0gW1xuICAgICAgICAvLyBBcml0aG1ldGljIG9wZXJhdG9yc1xuICAgICAgICBbJysnLCAnYWRkJ10sXG4gICAgICAgIFsnLScsICdzdWInLCAnc3VidHJhY3QnXSxcbiAgICAgICAgWycqJywgJ211bCcsICdtdWx0aXBseSddLFxuICAgICAgICBbJy8nLCAnZGl2JywgJ2RpdmlkZSddLFxuICAgICAgICBbJyUnLCAnbW9kJywgJ21vZHVsdXMnXSxcbiAgICAgICAgLy8gQml0d2lzZSBvcGVyYXRvcnNcbiAgICAgICAgWycmJywgJ2FuZCddLFxuICAgICAgICBbJ3wnLCAnb3InXSxcbiAgICAgICAgWydeJywgJ3hvciddLFxuICAgICAgICBbJzw8JywgJ2xlZnRTaGlmdCddLFxuICAgICAgICBbJz4+JywgJ3NpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnQnXSxcbiAgICAgICAgWyc+Pj4nLCAncmlnaHRTaGlmdCcsICd6ZXJvRmlsbFJpZ2h0U2hpZnQnXVxuICAgIF07XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgZXZhbDIgPSBldmFsO1xuICAgIGZvciAodmFyIG9wZXJhdG9yIG9mIG9wZXJhdG9ycykge1xuICAgICAgICB2YXIgaW5wbGFjZU9wID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU9wZXJhdG9yLCB7bmFtZTogb3BlcmF0b3JbMV0sIG9wOiBvcGVyYXRvclswXX0pKTtcbiAgICAgICAgdmFyIGlucGxhY2VPcFMgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlT3BlcmF0b3JTY2FsYXIsIHtuYW1lOiBvcGVyYXRvclsxXSArICdTJywgb3A6IG9wZXJhdG9yWzBdfSkpO1xuICAgICAgICB2YXIgaW5wbGFjZU9wTSA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VPcGVyYXRvck1hdHJpeCwge25hbWU6IG9wZXJhdG9yWzFdICsgJ00nLCBvcDogb3BlcmF0b3JbMF19KSk7XG4gICAgICAgIHZhciBzdGF0aWNPcCA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKHN0YXRpY09wZXJhdG9yLCB7bmFtZTogb3BlcmF0b3JbMV19KSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBvcGVyYXRvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVtvcGVyYXRvcltpXV0gPSBpbnBsYWNlT3A7XG4gICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW29wZXJhdG9yW2ldICsgJ1MnXSA9IGlucGxhY2VPcFM7XG4gICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW29wZXJhdG9yW2ldICsgJ00nXSA9IGlucGxhY2VPcE07XG4gICAgICAgICAgICBNYXRyaXhbb3BlcmF0b3JbaV1dID0gc3RhdGljT3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICAgWyd+JywgJ25vdCddXG4gICAgXTtcblxuICAgIFtcbiAgICAgICAgJ2FicycsICdhY29zJywgJ2Fjb3NoJywgJ2FzaW4nLCAnYXNpbmgnLCAnYXRhbicsICdhdGFuaCcsICdjYnJ0JywgJ2NlaWwnLFxuICAgICAgICAnY2x6MzInLCAnY29zJywgJ2Nvc2gnLCAnZXhwJywgJ2V4cG0xJywgJ2Zsb29yJywgJ2Zyb3VuZCcsICdsb2cnLCAnbG9nMXAnLFxuICAgICAgICAnbG9nMTAnLCAnbG9nMicsICdyb3VuZCcsICdzaWduJywgJ3NpbicsICdzaW5oJywgJ3NxcnQnLCAndGFuJywgJ3RhbmgnLCAndHJ1bmMnXG4gICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRoTWV0aG9kKSB7XG4gICAgICAgIG1ldGhvZHMucHVzaChbJ01hdGguJyArIG1hdGhNZXRob2QsIG1hdGhNZXRob2RdKTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIG1ldGhvZCBvZiBtZXRob2RzKSB7XG4gICAgICAgIHZhciBpbnBsYWNlTWV0aCA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VNZXRob2QsIHtuYW1lOiBtZXRob2RbMV0sIG1ldGhvZDogbWV0aG9kWzBdfSkpO1xuICAgICAgICB2YXIgc3RhdGljTWV0aCA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKHN0YXRpY01ldGhvZCwge25hbWU6IG1ldGhvZFsxXX0pKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG1ldGhvZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVttZXRob2RbaV1dID0gaW5wbGFjZU1ldGg7XG4gICAgICAgICAgICBNYXRyaXhbbWV0aG9kW2ldXSA9IHN0YXRpY01ldGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbWV0aG9kc1dpdGhBcmdzID0gW1xuICAgICAgICBbJ01hdGgucG93JywgMSwgJ3BvdyddXG4gICAgXTtcblxuICAgIGZvciAodmFyIG1ldGhvZFdpdGhBcmcgb2YgbWV0aG9kc1dpdGhBcmdzKSB7XG4gICAgICAgIHZhciBhcmdzID0gJ2FyZzAnO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbWV0aG9kV2l0aEFyZ1sxXTsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzICs9IGAsIGFyZyR7aX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2RXaXRoQXJnWzFdICE9PSAxKSB7XG4gICAgICAgICAgICB2YXIgaW5wbGFjZU1ldGhXaXRoQXJncyA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VNZXRob2RXaXRoQXJncywge1xuICAgICAgICAgICAgICAgIG5hbWU6IG1ldGhvZFdpdGhBcmdbMl0sXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2RXaXRoQXJnWzBdLFxuICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciBzdGF0aWNNZXRoV2l0aEFyZ3MgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihzdGF0aWNNZXRob2RXaXRoQXJncywge25hbWU6IG1ldGhvZFdpdGhBcmdbMl0sIGFyZ3M6IGFyZ3N9KSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAyOyBpIDwgbWV0aG9kV2l0aEFyZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbbWV0aG9kV2l0aEFyZ1tpXV0gPSBpbnBsYWNlTWV0aFdpdGhBcmdzO1xuICAgICAgICAgICAgICAgIE1hdHJpeFttZXRob2RXaXRoQXJnW2ldXSA9IHN0YXRpY01ldGhXaXRoQXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0bXBsVmFyID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG1ldGhvZFdpdGhBcmdbMl0sXG4gICAgICAgICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZFdpdGhBcmdbMF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgaW5wbGFjZU1ldGhvZDIgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlTWV0aG9kV2l0aE9uZUFyZywgdG1wbFZhcikpO1xuICAgICAgICAgICAgdmFyIGlucGxhY2VNZXRob2RTID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmdTY2FsYXIsIHRtcGxWYXIpKTtcbiAgICAgICAgICAgIHZhciBpbnBsYWNlTWV0aG9kTSA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VNZXRob2RXaXRoT25lQXJnTWF0cml4LCB0bXBsVmFyKSk7XG4gICAgICAgICAgICB2YXIgc3RhdGljTWV0aG9kMiA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKHN0YXRpY01ldGhvZFdpdGhPbmVBcmcsIHRtcGxWYXIpKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDI7IGkgPCBtZXRob2RXaXRoQXJnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVttZXRob2RXaXRoQXJnW2ldXSA9IGlucGxhY2VNZXRob2QyO1xuICAgICAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbbWV0aG9kV2l0aEFyZ1tpXSArICdNJ10gPSBpbnBsYWNlTWV0aG9kTTtcbiAgICAgICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW21ldGhvZFdpdGhBcmdbaV0gKyAnUyddID0gaW5wbGFjZU1ldGhvZFM7XG4gICAgICAgICAgICAgICAgTWF0cml4W21ldGhvZFdpdGhBcmdbaV1dID0gc3RhdGljTWV0aG9kMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKHRlbXBsYXRlLCB2YWx1ZXMpIHtcbiAgICAgICAgZm9yICh2YXIgdmFsdWUgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cCgnJScgKyB2YWx1ZSArICclJywgJ2cnKSwgdmFsdWVzW3ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRyaXg7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2Fic3RyYWN0TWF0cml4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZW51bSBDb2xvclNwYWNlVHlwZSB7XHJcbiAgWUNiQ3IsXHJcbiAgSFNWLFxyXG4gIExhYlxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9Db2xvclNwYWNlVHlwZS50cyIsIi8vIGh5cGVySFRNTC5Db21wb25lbnQgaXMgYSB2ZXJ5IGJhc2ljIGNsYXNzXG4vLyBhYmxlIHRvIGNyZWF0ZSBDdXN0b20gRWxlbWVudHMgbGlrZSBjb21wb25lbnRzXG4vLyBpbmNsdWRpbmcgdGhlIGFiaWxpdHkgdG8gbGlzdGVuIHRvIGNvbm5lY3QvZGlzY29ubmVjdFxuLy8gZXZlbnRzIHZpYSBvbmNvbm5lY3Qvb25kaXNjb25uZWN0IGF0dHJpYnV0ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCgpIHt9XG5cbi8vIGNvbXBvbmVudHMgd2lsbCBsYXppbHkgZGVmaW5lIGh0bWwgb3Igc3ZnIHByb3BlcnRpZXNcbi8vIGFzIHNvb24gYXMgdGhlc2UgYXJlIGludm9rZWQgd2l0aGluIHRoZSAucmVuZGVyKCkgbWV0aG9kXG4vLyBTdWNoIHJlbmRlcigpIG1ldGhvZCBpcyBub3QgcHJvdmlkZWQgYnkgdGhlIGJhc2UgY2xhc3Ncbi8vIGJ1dCBpdCBtdXN0IGJlIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSBDb21wb25lbnQgZXh0ZW5kLlxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKGNvbnRlbnQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZSxcbiAgICB7XG4gICAgICBoYW5kbGVFdmVudDoge3ZhbHVlKGUpIHtcbiAgICAgICAgY29uc3QgY3QgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHRoaXNbXG4gICAgICAgICAgKCdnZXRBdHRyaWJ1dGUnIGluIGN0ICYmIGN0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsJykpIHx8XG4gICAgICAgICAgKCdvbicgKyBlLnR5cGUpXG4gICAgICAgIF0oZSk7XG4gICAgICB9fSxcbiAgICAgIGh0bWw6IGxhenlHZXR0ZXIoJ2h0bWwnLCBjb250ZW50KSxcbiAgICAgIHN2ZzogbGF6eUdldHRlcignc3ZnJywgY29udGVudCksXG4gICAgICBzdGF0ZTogbGF6eUdldHRlcignc3RhdGUnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmRlZmF1bHRTdGF0ZTsgfSksXG4gICAgICBkZWZhdWx0U3RhdGU6IHtnZXQoKSB7IHJldHVybiB7fTsgfX0sXG4gICAgICBzZXRTdGF0ZToge3ZhbHVlKHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHR5cGVvZiBzdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXRlLmNhbGwodGhpcywgdGFyZ2V0KSA6IHN0YXRlO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9fVxuICAgIH1cbiAgKTtcbn1cblxuLy8gaW5zdGVhZCBvZiBhIHNlY3JldCBrZXkgSSBjb3VsZCd2ZSB1c2VkIGEgV2Vha01hcFxuLy8gSG93ZXZlciwgYXR0YWNoaW5nIGEgcHJvcGVydHkgZGlyZWN0bHkgd2lsbCByZXN1bHRcbi8vIGludG8gYmV0dGVyIHBlcmZvcm1hbmNlIHdpdGggdGhvdXNhbmRzIG9mIGNvbXBvbmVudHNcbi8vIGhhbmdpbmcgYXJvdW5kLCBhbmQgbGVzcyBtZW1vcnkgcHJlc3N1cmUgY2F1c2VkIGJ5IHRoZSBXZWFrTWFwXG5jb25zdCBsYXp5R2V0dGVyID0gKHR5cGUsIGZuKSA9PiB7XG4gIGNvbnN0IHNlY3JldCA9ICdfJyArIHR5cGUgKyAnJCc7XG4gIHJldHVybiB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VjcmV0XSB8fCAodGhpc1t0eXBlXSA9IGZuLmNhbGwodGhpcywgdHlwZSkpO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgc2VjcmV0LCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZX0pO1xuICAgIH1cbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2NsYXNzZXMvQ29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dsb2JhbCwgVUlEfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbi8vIHlvdSBrbm93IHRoYXQga2luZCBvZiBiYXNpY3MgeW91IG5lZWQgdG8gY292ZXJcbi8vIHlvdXIgdXNlIGNhc2Ugb25seSBidXQgeW91IGRvbid0IHdhbnQgdG8gYmxvYXQgdGhlIGxpYnJhcnk/XG4vLyBUaGVyZSdzIGV2ZW4gYSBwYWNrYWdlIGluIGhlcmU6XG4vLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wb29ybHlmaWxsc1xuXG4vLyB1c2VkIHRvIGRpc3BhdGNoIHNpbXBsZSBldmVudHNcbmxldCBFdmVudCA9IGdsb2JhbC5FdmVudDtcbnRyeSB7XG4gIG5ldyBFdmVudCgnRXZlbnQnKTtcbn0gY2F0Y2gob19PKSB7XG4gIEV2ZW50ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZS5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgICByZXR1cm4gZTtcbiAgfTtcbn1cbmV4cG9ydCB7RXZlbnR9O1xuXG4vLyB1c2VkIHRvIHN0b3JlIHRlbXBsYXRlIGxpdGVyYWxzXG5leHBvcnQgY29uc3QgTWFwID0gZ2xvYmFsLk1hcCB8fCBmdW5jdGlvbiBNYXAoKSB7XG4gIGNvbnN0IGtleXMgPSBbXSwgdmFsdWVzID0gW107XG4gIHJldHVybiB7XG4gICAgZ2V0KG9iaikge1xuICAgICAgcmV0dXJuIHZhbHVlc1trZXlzLmluZGV4T2Yob2JqKV07XG4gICAgfSxcbiAgICBzZXQob2JqLCB2YWx1ZSkge1xuICAgICAgdmFsdWVzW2tleXMucHVzaChvYmopIC0gMV0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG59O1xuXG4vLyB1c2VkIHRvIHN0b3JlIHdpcmVkIGNvbnRlbnRcbmV4cG9ydCBjb25zdCBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXAgfHwgZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXQob2JqKSB7IHJldHVybiBvYmpbVUlEXTsgfSxcbiAgICBzZXQob2JqLCB2YWx1ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgVUlELCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbi8vIHVzZWQgdG8gc3RvcmUgaHlwZXIuQ29tcG9uZW50c1xuZXhwb3J0IGNvbnN0IFdlYWtTZXQgPSBnbG9iYWwuV2Vha1NldCB8fCBmdW5jdGlvbiBXZWFrU2V0KCkge1xuICBjb25zdCB3bSA9IG5ldyBXZWFrTWFwO1xuICByZXR1cm4ge1xuICAgIGFkZChvYmopIHsgd20uc2V0KG9iaiwgdHJ1ZSk7IH0sXG4gICAgaGFzKG9iaikgeyByZXR1cm4gd20uZ2V0KG9iaikgPT09IHRydWU7IH1cbiAgfTtcbn07XG5cbi8vIHVzZWQgdG8gYmUgc3VyZSBJRTkgb3Igb2xkZXIgQW5kcm9pZHMgd29yayBhcyBleHBlY3RlZFxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8ICh0b1N0cmluZyA9PlxuICBhcnIgPT4gdG9TdHJpbmcuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nXG4pKHt9LnRvU3RyaW5nKTtcblxuZXhwb3J0IGNvbnN0IHRyaW0gPSBVSUQudHJpbSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC9wb29ybHlmaWxscy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IGFzIEh5cGVyQ29tcG9uZW50IH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5leHBvcnQgeyBIeXBlckNvbXBvbmVudCB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91dGlscy9IeXBlckNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gIHB1YmxpYyByZWFkb25seSByZWRQb2ludDogQ29sb3JQb2ludDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZ3JlZW5Qb2ludDogQ29sb3JQb2ludDtcclxuICBwdWJsaWMgcmVhZG9ubHkgYmx1ZVBvaW50OiBDb2xvclBvaW50O1xyXG4gIHB1YmxpYyByZWFkb25seSB3aGl0ZVBvaW50OiBDb2xvclBvaW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBnYW1tYTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlZFBvaW50OiBDb2xvclBvaW50LFxyXG4gICAgZ3JlZW5Qb2ludDogQ29sb3JQb2ludCxcclxuICAgIGJsdWVQb2ludDogQ29sb3JQb2ludCxcclxuICAgIHdoaXRlUG9pbnQ6IENvbG9yUG9pbnQsXHJcbiAgICBnYW1tYTogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlZFBvaW50ID0gcmVkUG9pbnQ7XHJcbiAgICB0aGlzLmdyZWVuUG9pbnQgPSBncmVlblBvaW50O1xyXG4gICAgdGhpcy5ibHVlUG9pbnQgPSBibHVlUG9pbnQ7XHJcbiAgICB0aGlzLndoaXRlUG9pbnQgPSB3aGl0ZVBvaW50O1xyXG4gICAgdGhpcy5nYW1tYSA9IGdhbW1hO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzUkdCKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC42NCwgeTogMC4zMyB9LFxyXG4gICAgICB7IHg6IDAuMywgeTogMC42IH0sXHJcbiAgICAgIHsgeDogMC4xNSwgeTogMC4wNiB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMi4yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZG9iZVJHQigpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNjQsIHk6IDAuMzMgfSxcclxuICAgICAgeyB4OiAwLjIxLCB5OiAwLjcxIH0sXHJcbiAgICAgIHsgeDogMC4xNSwgeTogMC4wNiB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMi4yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhcHBsZVJHQigpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNjI1LCB5OiAwLjM0IH0sXHJcbiAgICAgIHsgeDogMC4yOCwgeTogMC41OTUgfSxcclxuICAgICAgeyB4OiAwLjE1NSwgeTogMC4wNyB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMS44XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaWVSR0IoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjczNSwgeTogMC4yNjUgfSxcclxuICAgICAgeyB4OiAwLjI3NCwgeTogMC43MTcgfSxcclxuICAgICAgeyB4OiAwLjE2NywgeTogMC4wMDkgfSxcclxuICAgICAgeyB4OiAwLjMzMzMsIHk6IDAuMzMzMyB9LFxyXG4gICAgICAyLjJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHdpZGVHYW11dCgpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNzM0NywgeTogMC4yNjUzIH0sXHJcbiAgICAgIHsgeDogMC4xMTUyLCB5OiAwLjgyNjQgfSxcclxuICAgICAgeyB4OiAwLjE1NjYsIHk6IDAuMDE3NyB9LFxyXG4gICAgICB7IHg6IDAuMzQ1NywgeTogMC4zNTg1IH0sXHJcbiAgICAgIDEuMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGFsKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC42NCwgeTogMC4zMyB9LFxyXG4gICAgICB7IHg6IDAuMjksIHk6IDAuNiB9LFxyXG4gICAgICB7IHg6IDAuMTUsIHk6IDAuMDYgfSxcclxuICAgICAgeyB4OiAwLjMxMjcsIHk6IDAuMzI5IH0sXHJcbiAgICAgIDEuOTVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGF0Y2gocGF0Y2g6IFBhcnRpYWw8Q29udmVyc2lvblBhcmFtZXRlcnM+KTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICByZWRQb2ludCxcclxuICAgICAgZ3JlZW5Qb2ludCxcclxuICAgICAgYmx1ZVBvaW50LFxyXG4gICAgICB3aGl0ZVBvaW50LFxyXG4gICAgICBnYW1tYVxyXG4gICAgfSA9IDxDb252ZXJzaW9uUGFyYW1ldGVycz5PYmplY3QuYXNzaWduKHt9LCB0aGlzLCBwYXRjaCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhyZWRQb2ludCwgZ3JlZW5Qb2ludCwgYmx1ZVBvaW50LCB3aGl0ZVBvaW50LCBnYW1tYSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycy50cyIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVkVSU0lPTl9GSU5JU0hFRCA9ICdDT05WRVJTSU9OX0ZJTklTSEVEJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJzaW9uRmluaXNoZWQoXHJcbiAgY29udmVyc2lvblJlc3VsdDogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQsXHJcbiAgcmVzdWx0SW1hZ2VzOiBIVE1MSW1hZ2VFbGVtZW50W11cclxuKTogQW55QWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ09OVkVSU0lPTl9GSU5JU0hFRCxcclxuICAgIGNvbnZlcnNpb25SZXN1bHQsXHJcbiAgICByZXN1bHRJbWFnZXNcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclByb2ZpbGVUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0NPTE9SX1BST0ZJTEVfVFlQRSA9ICdDSEFOR0VfQ09MT1JfUFJPRklMRV9UWVBFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb2xvclByb2ZpbGVUeXBlKGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUsIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycyk6IEFueUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9DT0xPUl9QUk9GSUxFX1RZUEUsXHJcbiAgICBjb2xvclByb2ZpbGVUeXBlLFxyXG4gICAgY29udmVyc2lvblBhcmFtZXRlcnNcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZS50cyIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfT1JJR0lOQUxfSU1BR0UgPSAnQ0hBTkdFX09SSUdJTkFMX0lNQUdFJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlT3JpZ2luYWxJbWFnZUFjdGlvbiBleHRlbmRzIEFueUFjdGlvbiB7XHJcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VPcmlnaW5hbEltYWdlKFxyXG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50XHJcbik6IENoYW5nZU9yaWdpbmFsSW1hZ2VBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDSEFOR0VfT1JJR0lOQUxfSU1BR0UsXHJcbiAgICBpbWFnZVxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VPcmlnaW5hbEltYWdlLnRzIiwiaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBMYWJlbGVkVmFsdWUgfSBmcm9tICd1dGlscy9MYWJlbGVkVmFsdWUnO1xyXG5cclxuZXhwb3J0IGVudW0gQ29sb3JQcm9maWxlVHlwZSB7XHJcbiAgc1JHQixcclxuICBBZG9iZVJHQixcclxuICBBcHBsZVJHQixcclxuICBDSUVSR0IsXHJcbiAgV2lkZUdhbXV0LFxyXG4gIFBBTCxcclxuICBDdXN0b21cclxufVxyXG5cclxuaW50ZXJmYWNlIFByZWRlZmluZWRDb2xvclByb2ZpbGUge1xyXG4gIGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGU7XHJcbiAgcGFyYW1ldGVycygpOiBDb252ZXJzaW9uUGFyYW1ldGVycztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByZWRlZmluZWRDb2xvclByb2ZpbGVzOiBQcmVkZWZpbmVkQ29sb3JQcm9maWxlW10gPSBbXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLkFkb2JlUkdCLCBwYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycy5hZG9iZVJHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5BcHBsZVJHQiwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuYXBwbGVSR0IgfSxcclxuICB7IGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUuc1JHQiwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuc1JHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5DSUVSR0IsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLmNpZVJHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5XaWRlR2FtdXQsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLndpZGVHYW11dCB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5QQUwsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLnBhbCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbGFiZWxlZENvbG9yUHJvZmlsZXM6IExhYmVsZWRWYWx1ZTxDb2xvclByb2ZpbGVUeXBlPltdID0gW1xyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuQWRvYmVSR0IsIGxhYmVsOiAnQWRvYmVSR0InIH0sXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5BcHBsZVJHQiwgbGFiZWw6ICdBcHBsZVJHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLnNSR0IsIGxhYmVsOiAnc1JHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLkNJRVJHQiwgbGFiZWw6ICdDSUVSR0InIH0sXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5XaWRlR2FtdXQsIGxhYmVsOiAnV2lkZUdhbXV0JyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuUEFMLCBsYWJlbDogJ1BBTCcgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSwgbGFiZWw6ICdDdXN0b20nIH1cclxuXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUudHMiLCJleHBvcnQgY2xhc3MgUGFydGlhbENvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBsYWJlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZXM6IG51bWJlcltdO1xyXG4gIHB1YmxpYyByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZywgdmFsdWVzOiBudW1iZXJbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SW1hZ2VEYXRhKCk6IEltYWdlRGF0YSB7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICBsZXQgaW1hZ2VEYXRhSW5kZXggPSAwO1xyXG5cclxuICAgIHRoaXMudmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbmNyZW1lbnQtZGVjcmVtZW50XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gdmFsdWU7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gdmFsdWU7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gdmFsdWU7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gMjU1O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbmNyZW1lbnQtZGVjcmVtZW50XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0LnRzIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuXG4vKipcbiAqIEBjbGFzcyBMdURlY29tcG9zaXRpb25cbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sdXR6cm9lZGVyL01hcGFjay9ibG9iL21hc3Rlci9Tb3VyY2UvTHVEZWNvbXBvc2l0aW9uLmNzXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEx1RGVjb21wb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgICAgIG1hdHJpeCA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChtYXRyaXgpO1xuXG4gICAgICAgIHZhciBsdSA9IG1hdHJpeC5jbG9uZSgpO1xuICAgICAgICB2YXIgcm93cyA9IGx1LnJvd3M7XG4gICAgICAgIHZhciBjb2x1bW5zID0gbHUuY29sdW1ucztcbiAgICAgICAgdmFyIHBpdm90VmVjdG9yID0gbmV3IEFycmF5KHJvd3MpO1xuICAgICAgICB2YXIgcGl2b3RTaWduID0gMTtcbiAgICAgICAgdmFyIGksIGosIGssIHAsIHMsIHQsIHY7XG4gICAgICAgIHZhciBMVWNvbGosIGttYXg7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgcGl2b3RWZWN0b3JbaV0gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgTFVjb2xqID0gbmV3IEFycmF5KHJvd3MpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIExVY29saltpXSA9IGx1LmdldChpLCBqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGttYXggPSBNYXRoLm1pbihpLCBqKTtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwga21heDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gbHUuZ2V0KGksIGspICogTFVjb2xqW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBMVWNvbGpbaV0gLT0gcztcbiAgICAgICAgICAgICAgICBsdS5zZXQoaSwgaiwgTFVjb2xqW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCA9IGo7XG4gICAgICAgICAgICBmb3IgKGkgPSBqICsgMTsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhMVWNvbGpbaV0pID4gTWF0aC5hYnMoTFVjb2xqW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICBwID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGNvbHVtbnM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gbHUuZ2V0KHAsIGspO1xuICAgICAgICAgICAgICAgICAgICBsdS5zZXQocCwgaywgbHUuZ2V0KGosIGspKTtcbiAgICAgICAgICAgICAgICAgICAgbHUuc2V0KGosIGssIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHYgPSBwaXZvdFZlY3RvcltwXTtcbiAgICAgICAgICAgICAgICBwaXZvdFZlY3RvcltwXSA9IHBpdm90VmVjdG9yW2pdO1xuICAgICAgICAgICAgICAgIHBpdm90VmVjdG9yW2pdID0gdjtcblxuICAgICAgICAgICAgICAgIHBpdm90U2lnbiA9IC1waXZvdFNpZ247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChqIDwgcm93cyAmJiBsdS5nZXQoaiwgaikgIT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBqICsgMTsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsdS5zZXQoaSwgaiwgbHUuZ2V0KGksIGopIC8gbHUuZ2V0KGosIGopKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkxVID0gbHU7XG4gICAgICAgIHRoaXMucGl2b3RWZWN0b3IgPSBwaXZvdFZlY3RvcjtcbiAgICAgICAgdGhpcy5waXZvdFNpZ24gPSBwaXZvdFNpZ247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzU2luZ3VsYXIoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5MVTtcbiAgICAgICAgdmFyIGNvbCA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgICAgICAgaWYgKGRhdGFbal1bal0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRyaXguY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBsdSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciByb3dzID0gbHUucm93cztcblxuICAgICAgICBpZiAocm93cyAhPT0gdmFsdWUucm93cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1hdHJpeCBkaW1lbnNpb25zJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5ndWxhcigpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xVIG1hdHJpeCBpcyBzaW5ndWxhcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSB2YWx1ZS5zdWJNYXRyaXhSb3codGhpcy5waXZvdFZlY3RvciwgMCwgY291bnQgLSAxKTtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBsdS5jb2x1bW5zO1xuICAgICAgICB2YXIgaSwgaiwgaztcblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgY29sdW1uczsgaysrKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gLT0gWFtrXVtqXSAqIGx1W2ldW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGsgPSBjb2x1bW5zIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgWFtrXVtqXSAvPSBsdVtrXVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdIC09IFhba11bal0gKiBsdVtpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGRldGVybWluYW50KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIGlmICghZGF0YS5pc1NxdWFyZSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBtdXN0IGJlIHNxdWFyZScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZXRlcm1pbmFudCA9IHRoaXMucGl2b3RTaWduO1xuICAgICAgICB2YXIgY29sID0gZGF0YS5jb2x1bW5zO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbDsgaisrKSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCAqPSBkYXRhW2pdW2pdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXRlcm1pbmFudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgbG93ZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciByb3dzID0gZGF0YS5yb3dzO1xuICAgICAgICB2YXIgY29sdW1ucyA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IGRhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgdXBwZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciByb3dzID0gZGF0YS5yb3dzO1xuICAgICAgICB2YXIgY29sdW1ucyA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSBkYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IHBpdm90UGVybXV0YXRpb25WZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpdm90VmVjdG9yLnNsaWNlKCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9sdS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtoeXBvdGVudXNlLCBnZXRGaWxsZWQyREFycmF5fSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzcyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9TaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNvbXB1dGVMZWZ0U2luZ3VsYXJWZWN0b3JzPXRydWVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycz10cnVlXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvVHJhbnNwb3NlPWZhbHNlXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB2YWx1ZSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIG0gPSB2YWx1ZS5yb3dzO1xuICAgICAgICB2YXIgbiA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICAgIHZhciBudSA9IE1hdGgubWluKG0sIG4pO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvbXB1dGVMZWZ0U2luZ3VsYXJWZWN0b3JzID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycyA9IHRydWUsXG4gICAgICAgICAgICBhdXRvVHJhbnNwb3NlID0gZmFsc2VcbiAgICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgdmFyIHdhbnR1ID0gQm9vbGVhbihjb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycyk7XG4gICAgICAgIHZhciB3YW50diA9IEJvb2xlYW4oY29tcHV0ZVJpZ2h0U2luZ3VsYXJWZWN0b3JzKTtcblxuICAgICAgICB2YXIgc3dhcHBlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgYTtcbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBpZiAoIWF1dG9UcmFuc3Bvc2UpIHtcbiAgICAgICAgICAgICAgICBhID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcHV0aW5nIFNWRCBvbiBhIG1hdHJpeCB3aXRoIG1vcmUgY29sdW1ucyB0aGFuIHJvd3MuIENvbnNpZGVyIGVuYWJsaW5nIGF1dG9UcmFuc3Bvc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYSA9IHZhbHVlLnRyYW5zcG9zZSgpO1xuICAgICAgICAgICAgICAgIG0gPSBhLnJvd3M7XG4gICAgICAgICAgICAgICAgbiA9IGEuY29sdW1ucztcbiAgICAgICAgICAgICAgICBzd2FwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgYXV4ID0gd2FudHU7XG4gICAgICAgICAgICAgICAgd2FudHUgPSB3YW50djtcbiAgICAgICAgICAgICAgICB3YW50diA9IGF1eDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGEgPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHMgPSBuZXcgQXJyYXkoTWF0aC5taW4obSArIDEsIG4pKTtcbiAgICAgICAgdmFyIFUgPSBnZXRGaWxsZWQyREFycmF5KG0sIG51LCAwKTtcbiAgICAgICAgdmFyIFYgPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICB2YXIgZSA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgdmFyIHdvcmsgPSBuZXcgQXJyYXkobSk7XG5cbiAgICAgICAgdmFyIG5jdCA9IE1hdGgubWluKG0gLSAxLCBuKTtcbiAgICAgICAgdmFyIG5ydCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG4gLSAyLCBtKSk7XG5cbiAgICAgICAgdmFyIGksIGosIGssIHAsIHQsIGtzLCBmLCBjcywgc24sIG1heCwga2FzZSxcbiAgICAgICAgICAgIHNjYWxlLCBzcCwgc3BtMSwgZXBtMSwgc2ssIGVrLCBiLCBjLCBzaGlmdCwgZztcblxuICAgICAgICBmb3IgKGsgPSAwLCBtYXggPSBNYXRoLm1heChuY3QsIG5ydCk7IGsgPCBtYXg7IGsrKykge1xuICAgICAgICAgICAgaWYgKGsgPCBuY3QpIHtcbiAgICAgICAgICAgICAgICBzW2tdID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNba10gPSBoeXBvdGVudXNlKHNba10sIGFbaV1ba10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc1trXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYVtrXVtrXSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba10gPSAtc1trXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhW2ldW2tdIC89IHNba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYVtrXVtrXSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzW2tdID0gLXNba107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGsgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChrIDwgbmN0KSAmJiAoc1trXSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gYVtpXVtrXSAqIGFbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdCA9IC10IC8gYVtrXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYVtpXVtqXSArPSB0ICogYVtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlW2pdID0gYVtrXVtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdhbnR1ICYmIChrIDwgbmN0KSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IGFbaV1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayA8IG5ydCkge1xuICAgICAgICAgICAgICAgIGVba10gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVba10gPSBoeXBvdGVudXNlKGVba10sIGVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZVtrXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtrICsgMV0gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlW2tdID0gMCAtIGVba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbaV0gLz0gZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlW2sgKyAxXSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlW2tdID0gLWVba107XG4gICAgICAgICAgICAgICAgaWYgKChrICsgMSA8IG0pICYmIChlW2tdICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya1tpXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1tpXSArPSBlW2pdICogYVtpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IC1lW2pdIC8gZVtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbaV1bal0gKz0gdCAqIHdvcmtbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAgPSBNYXRoLm1pbihuLCBtICsgMSk7XG4gICAgICAgIGlmIChuY3QgPCBuKSB7XG4gICAgICAgICAgICBzW25jdF0gPSBhW25jdF1bbmN0XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobSA8IHApIHtcbiAgICAgICAgICAgIHNbcCAtIDFdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnJ0ICsgMSA8IHApIHtcbiAgICAgICAgICAgIGVbbnJ0XSA9IGFbbnJ0XVtwIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgZVtwIC0gMV0gPSAwO1xuXG4gICAgICAgIGlmICh3YW50dSkge1xuICAgICAgICAgICAgZm9yIChqID0gbmN0OyBqIDwgbnU7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVVtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFVbal1bal0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChrID0gbmN0IC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc1trXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG51OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gVVtpXVtrXSAqIFVbaV1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gLXQgLyBVW2tdW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bal0gKz0gdCAqIFVbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IC1VW2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFVba11ba10gPSAxICsgVVtrXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGsgLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVVtrXVtrXSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICBmb3IgKGsgPSBuIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoKGsgPCBucnQpICYmIChlW2tdICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gVltpXVtrXSAqIFZbaV1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gLXQgLyBWW2sgKyAxXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtqXSArPSB0ICogVltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbaV1ba10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWW2tdW2tdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcCA9IHAgLSAxO1xuICAgICAgICB2YXIgaXRlciA9IDA7XG4gICAgICAgIHZhciBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcbiAgICAgICAgd2hpbGUgKHAgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSBwIC0gMjsgayA+PSAtMTsgay0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGsgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZVtrXSkgPD0gZXBzICogKE1hdGguYWJzKHNba10pICsgTWF0aC5hYnMoc1trICsgMV0pKSkge1xuICAgICAgICAgICAgICAgICAgICBlW2tdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPT09IHAgLSAyKSB7XG4gICAgICAgICAgICAgICAga2FzZSA9IDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoa3MgPSBwIC0gMTsga3MgPj0gazsga3MtLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa3MgPT09IGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQgPSAoa3MgIT09IHAgPyBNYXRoLmFicyhlW2tzXSkgOiAwKSArIChrcyAhPT0gayArIDEgPyBNYXRoLmFicyhlW2tzIC0gMV0pIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzW2tzXSkgPD0gZXBzICogdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc1trc10gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtzID09PSBrKSB7XG4gICAgICAgICAgICAgICAgICAgIGthc2UgPSAzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa3MgPT09IHAgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGthc2UgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGthc2UgPSAyO1xuICAgICAgICAgICAgICAgICAgICBrID0ga3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrKys7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2FzZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgICAgICBmID0gZVtwIC0gMl07XG4gICAgICAgICAgICAgICAgICAgIGVbcCAtIDJdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gcCAtIDI7IGogPj0gazsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaHlwb3RlbnVzZShzW2pdLCBmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzID0gc1tqXSAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbiA9IGYgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAtc24gKiBlW2ogLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW2ogLSAxXSA9IGNzICogZVtqIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FudHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBjcyAqIFZbaV1bal0gKyBzbiAqIFZbaV1bcCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW3AgLSAxXSA9IC1zbiAqIFZbaV1bal0gKyBjcyAqIFZbaV1bcCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMiA6IHtcbiAgICAgICAgICAgICAgICAgICAgZiA9IGVbayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBlW2sgLSAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGs7IGogPCBwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBoeXBvdGVudXNlKHNbal0sIGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3MgPSBzW2pdIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuID0gZiAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAtc24gKiBlW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZVtqXSA9IGNzICogZVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGNzICogVVtpXVtqXSArIHNuICogVVtpXVtrIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bayAtIDFdID0gLXNuICogVVtpXVtqXSArIGNzICogVVtpXVtrIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAzIDoge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IE1hdGgubWF4KE1hdGguYWJzKHNbcCAtIDFdKSwgTWF0aC5hYnMoc1twIC0gMl0pLCBNYXRoLmFicyhlW3AgLSAyXSksIE1hdGguYWJzKHNba10pLCBNYXRoLmFicyhlW2tdKSk7XG4gICAgICAgICAgICAgICAgICAgIHNwID0gc1twIC0gMV0gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3BtMSA9IHNbcCAtIDJdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGVwbTEgPSBlW3AgLSAyXSAvIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzayA9IHNba10gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgZWsgPSBlW2tdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGIgPSAoKHNwbTEgKyBzcCkgKiAoc3BtMSAtIHNwKSArIGVwbTEgKiBlcG0xKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAoc3AgKiBlcG0xKSAqIChzcCAqIGVwbTEpO1xuICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoYiAhPT0gMCkgfHwgKGMgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IE1hdGguc3FydChiICogYiArIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSAtc2hpZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IGMgLyAoYiArIHNoaWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmID0gKHNrICsgc3ApICogKHNrIC0gc3ApICsgc2hpZnQ7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBzayAqIGVrO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrOyBqIDwgcCAtIDE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGh5cG90ZW51c2UoZiwgZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcyA9IGYgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc24gPSBnIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqICE9PSBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtqIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IGNzICogc1tqXSArIHNuICogZVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbal0gPSBjcyAqIGVbal0gLSBzbiAqIHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gc24gKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbaiArIDFdID0gY3MgKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGNzICogVltpXVtqXSArIHNuICogVltpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1baiArIDFdID0gLXNuICogVltpXVtqXSArIGNzICogVltpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1bal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBoeXBvdGVudXNlKGYsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3MgPSBmIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuID0gZyAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBjcyAqIGVbal0gKyBzbiAqIHNbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqICsgMV0gPSAtc24gKiBlW2pdICsgY3MgKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBzbiAqIGVbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZVtqICsgMV0gPSBjcyAqIGVbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR1ICYmIChqIDwgbSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gY3MgKiBVW2ldW2pdICsgc24gKiBVW2ldW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtqICsgMV0gPSAtc24gKiBVW2ldW2pdICsgY3MgKiBVW2ldW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVbcCAtIDJdID0gZjtcbiAgICAgICAgICAgICAgICAgICAgaXRlciA9IGl0ZXIgKyAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzW2tdIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba10gPSAoc1trXSA8IDAgPyAtc1trXSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBwcDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1ba10gPSAtVltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGsgPCBwcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNba10gPj0gc1trICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1trXSA9IHNbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1trICsgMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR2ICYmIChrIDwgbiAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gVltpXVtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1bayArIDFdID0gVltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR1ICYmIChrIDwgbSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gVVtpXVtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bayArIDFdID0gVVtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBwLS07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3dhcHBlZCkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IFY7XG4gICAgICAgICAgICBWID0gVTtcbiAgICAgICAgICAgIFUgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm0gPSBtO1xuICAgICAgICB0aGlzLm4gPSBuO1xuICAgICAgICB0aGlzLnMgPSBzO1xuICAgICAgICB0aGlzLlUgPSBVO1xuICAgICAgICB0aGlzLlYgPSBWO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvbHZlIGEgcHJvYmxlbSBvZiBsZWFzdCBzcXVhcmUgKEF4PWIpIGJ5IHVzaW5nIHRoZSBTVkQuIFVzZWZ1bCB3aGVuIEEgaXMgc2luZ3VsYXIuIFdoZW4gQSBpcyBub3Qgc2luZ3VsYXIsIGl0IHdvdWxkIGJlIGJldHRlciB0byB1c2UgcXIuc29sdmUodmFsdWUpLlxuICAgICAqIEV4YW1wbGUgOiBXZSBzZWFyY2ggdG8gYXBwcm94aW1hdGUgeCwgd2l0aCBBIG1hdHJpeCBzaGFwZSBtKm4sIHggdmVjdG9yIHNpemUgbiwgYiB2ZWN0b3Igc2l6ZSBtIChtID4gbikuIFdlIHdpbGwgdXNlIDpcbiAgICAgKiB2YXIgc3ZkID0gU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24oQSk7XG4gICAgICogdmFyIHggPSBzdmQuc29sdmUoYik7XG4gICAgICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlIC0gTWF0cml4IDFEIHdoaWNoIGlzIHRoZSB2ZWN0b3IgYiAoaW4gdGhlIGVxdWF0aW9uIEF4ID0gYilcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIHZlY3RvciB4XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcblxuICAgICAgICB2YXIgWSA9IHZhbHVlO1xuICAgICAgICB2YXIgZSA9IHRoaXMudGhyZXNob2xkO1xuICAgICAgICB2YXIgc2NvbHMgPSB0aGlzLnMubGVuZ3RoO1xuICAgICAgICB2YXIgTHMgPSBNYXRyaXguemVyb3Moc2NvbHMsIHNjb2xzKTtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjb2xzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNbaV0pIDw9IGUpIHtcbiAgICAgICAgICAgICAgICBMc1tpXVtpXSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExzW2ldW2ldID0gMSAvIHRoaXMuc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBVID0gdGhpcy5VO1xuICAgICAgICB2YXIgViA9IHRoaXMucmlnaHRTaW5ndWxhclZlY3RvcnM7XG5cbiAgICAgICAgdmFyIFZMID0gVi5tbXVsKExzKTtcbiAgICAgICAgdmFyIHZyb3dzID0gVi5yb3dzO1xuICAgICAgICB2YXIgdXJvd3MgPSBVLmxlbmd0aDtcbiAgICAgICAgdmFyIFZMVSA9IE1hdHJpeC56ZXJvcyh2cm93cywgdXJvd3MpO1xuICAgICAgICB2YXIgaiwgaywgc3VtO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdXJvd3M7IGorKykge1xuICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHNjb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IFZMW2ldW2tdICogVVtqXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVkxVW2ldW2pdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZMVS5tbXVsKFkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBzb2x2ZUZvckRpYWdvbmFsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvbHZlKE1hdHJpeC5kaWFnKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbnZlcnNlIG9mIHRoZSBtYXRyaXguIFdlIGNvbXB1dGUgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXggdXNpbmcgU1ZEIHdoZW4gdGhpcyBtYXRyaXggaXMgc2luZ3VsYXIgb3IgaWxsLWNvbmRpdGlvbmVkLiBFeGFtcGxlIDpcbiAgICAgKiB2YXIgc3ZkID0gU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24oQSk7XG4gICAgICogdmFyIGludmVyc2VBID0gc3ZkLmludmVyc2UoKTtcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIGFwcHJveGltYXRpb24gb2YgdGhlIGludmVyc2Ugb2YgdGhlIG1hdHJpeFxuICAgICAqL1xuICAgIGludmVyc2UoKSB7XG4gICAgICAgIHZhciBWID0gdGhpcy5WO1xuICAgICAgICB2YXIgZSA9IHRoaXMudGhyZXNob2xkO1xuICAgICAgICB2YXIgdnJvd3MgPSBWLmxlbmd0aDtcbiAgICAgICAgdmFyIHZjb2xzID0gVlswXS5sZW5ndGg7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeCh2cm93cywgdGhpcy5zLmxlbmd0aCk7XG4gICAgICAgIHZhciBpLCBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNbal0pID4gZSkge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gVltpXVtqXSAvIHRoaXMuc1tqXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgVSA9IHRoaXMuVTtcblxuICAgICAgICB2YXIgdXJvd3MgPSBVLmxlbmd0aDtcbiAgICAgICAgdmFyIHVjb2xzID0gVVswXS5sZW5ndGg7XG4gICAgICAgIHZhciBZID0gbmV3IE1hdHJpeCh2cm93cywgdXJvd3MpO1xuICAgICAgICB2YXIgaywgc3VtO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdXJvd3M7IGorKykge1xuICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHVjb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IFhbaV1ba10gKiBVW2pdW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBZW2ldW2pdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGNvbmRpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc1swXSAvIHRoaXMuc1tNYXRoLm1pbih0aGlzLm0sIHRoaXMubikgLSAxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgbm9ybTIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHJhbmsoKSB7XG4gICAgICAgIHZhciB0b2wgPSBNYXRoLm1heCh0aGlzLm0sIHRoaXMubikgKiB0aGlzLnNbMF0gKiBOdW1iZXIuRVBTSUxPTjtcbiAgICAgICAgdmFyIHIgPSAwO1xuICAgICAgICB2YXIgcyA9IHRoaXMucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc1tpXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgIHIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IGRpYWdvbmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB0aHJlc2hvbGQoKSB7XG4gICAgICAgIHJldHVybiAoTnVtYmVyLkVQU0lMT04gLyAyKSAqIE1hdGgubWF4KHRoaXMubSwgdGhpcy5uKSAqIHRoaXMuc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgbGVmdFNpbmd1bGFyVmVjdG9ycygpIHtcbiAgICAgICAgaWYgKCFNYXRyaXguaXNNYXRyaXgodGhpcy5VKSkge1xuICAgICAgICAgICAgdGhpcy5VID0gbmV3IE1hdHJpeCh0aGlzLlUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IHJpZ2h0U2luZ3VsYXJWZWN0b3JzKCkge1xuICAgICAgICBpZiAoIU1hdHJpeC5pc01hdHJpeCh0aGlzLlYpKSB7XG4gICAgICAgICAgICB0aGlzLlYgPSBuZXcgTWF0cml4KHRoaXMuVik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgZGlhZ29uYWxNYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiBNYXRyaXguZGlhZyh0aGlzLnMpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvc3ZkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gaHlwb3RlbnVzZShhLCBiKSB7XG4gICAgdmFyIHIgPSAwO1xuICAgIGlmIChNYXRoLmFicyhhKSA+IE1hdGguYWJzKGIpKSB7XG4gICAgICAgIHIgPSBiIC8gYTtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGEpICogTWF0aC5zcXJ0KDEgKyByICogcik7XG4gICAgfVxuICAgIGlmIChiICE9PSAwKSB7XG4gICAgICAgIHIgPSBhIC8gYjtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGIpICogTWF0aC5zcXJ0KDEgKyByICogcik7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsbGVkMkRBcnJheShyb3dzLCBjb2x1bW5zLCB2YWx1ZSkge1xuICAgIHZhciBhcnJheSA9IG5ldyBBcnJheShyb3dzKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICBhcnJheVtpXSA9IG5ldyBBcnJheShjb2x1bW5zKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIGFycmF5W2ldW2pdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0aGlzIGlzIGFuIG92ZXJseSBkZWZlbnNpdmUgYXBwcm9hY2ggdG8gYXZvaWQgYW55IHBvc3NpYmxlXG4vLyBzaWRlLWVmZmVjdCB3aGVuIHRoZSBsaXZlIGNvbGxlY3Rpb24gb2Ygbm9kZXMgaXMgcGFzc2VkIGFyb3VuZFxuaW1wb3J0IHtwdXNoLCBzbGljZSwgc3BsaWNlLCB1bnNoaWZ0fSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHtmcmFnbWVudH0gZnJvbSAnLi4vc2hhcmVkL2Vhc3ktZG9tLmpzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQuanMnO1xuaW1wb3J0IGVuZ2luZSBmcm9tICcuLi9vYmplY3RzL0VuZ2luZS5qcyc7XG5cbi8qICAgICAgICAgICAgICAgIDAgICAgICAgICAgICAgICAgICAgICAgIDAgICAgICAgICAgICAgICAgIDBcbjAwMCAgICAgICAgICAgICAgICAwMCAgICAgICAgICAgICAgICAgICAwMCAgICAgICAgICAgICAgICAwMDBcbiAwMDAwICAgICAgICAgICAgICAwMDAwICAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAgMDAwMCBcbiAgMDAwMDAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAwMDAwICAgICAgICAgICAgICAwMDAwICBcbiAgMDAwMDAwICAgICAgICAgICAgMDAwMDAwICAgICAgICAgMDAwMDAwICAgICAgICAgICAgMDAwMDAwICBcbiAgIDAwMDAwMDAgICAgICAgICAgIDAwMDAwMDAgICAgICAwMDAwMDAwICAgICAgICAgIDAwMDAwMDAgICBcbiAgIDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAgICBcbiAgIDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAgICBcbiAgIDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAwMCAgICBcbiAgICAwMDAwMDAwICAgICAgICAgICAgMDAwMDAwICAgMDAwMDAwMCAgICAgICAgICAgMDAwMDAwMCAgICBcbiAgICAwMDAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMCAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwICAgICBcbiAgICAgMDAwMDAwMDAwMDAwMDAwMCAgMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAgICAgICBcbiAgICAgIDAwMDAwMCAgICAgICAgICAgIDAwMDAwMDAwMDAwMCAgICAgICAgICAgICAwMDAwMDAgICAgICBcbiAgICAgICAwMDAwMDAwMDAwMDAwICAgICAgMDAwMDAwMDAgICAgICAgMDAwMDAwMDAwMDAwMCAgICAgICBcbiAgICAgIDAgIDAwMDAwMDAwMDAwMDAwMDAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAgIDAgICAgICBcbiAgICAgICAwMCAgMDAwMDAwMDAwMDAwMDAwMDAgICAgICAgMDAwMDAwMDAwMDAwMDAwMCAgMDAgICAgICBcbiAgICAgICAwMDAgICAwMDAwMCAgICAgMDAwMDAwICAgMDAwMDAwMCAgICAwMDAwMCAgIDAwMCAgICAgICBcbiAgICAgICAgMDAwMCAgIDAwMDAwICAgICAgICAwMDAwMDAgICAgICAgMDAwMDAwICAwMDAwMCAgICAgICBcbiAgICAgICAgMDAwMDAwICAwMDAwMDAgICAgIDAwMDAwMDAgICAgIDAwMDAwMCAgMDAwMDAwICAgICAgICBcbiAgICAgICAgIDAwMDAwMDAgIDAwMDAwMCAgIDAwMDAwMDAwICAgMDAwMDAgIDAwMDAwMDAgICAgICAgICBcbiAgICAgICAgIDAwMDAwMDAwICAgMDAwMDAgMDAwMDAwMDAwIDAwMDAwICAwMDAwMDAwMDAgICAgICAgICBcbiAgICAgICAgIDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAgICAgICAgICBcbiAgICAgICAgICAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMCAgICAgICAgICBcbiAgICAgICAgICAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMCAgICAgICAgICBcbiAgICAgICAgICAgICAgICAwMDAwMDAwMDAgICAwMDAwMCAgIDAwMDAwMDAwMDAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgMDAwMCAgMDAwICAwMDAwICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2x5ZXIwLmRldmlhbnRhcnQuY29tICAgICAgICAgICAgICAgICAgKi9cblxuLy8gTWVnYXRyb24gaXMgYSB0cmFuc2Zvcm1lciBpbiBjaGFyZ2Ugb2YgbXV0YXRpbmdcbi8vIGEgbGlzdCBvZiBsaXZlIERPTSBub2RlcyBpbnRvIGEgbmV3IGxpc3QuXG5mdW5jdGlvbiBNZWdhdHJvbihub2RlLCBjaGlsZE5vZGVzKSB7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG59XG5cbi8vIGl0IGNhcnJpZXMgdGhlIGRlZmF1bHQgbWVyZ2UvZGlmZiBlbmdpbmVcbi8vIHRoYXQgY2FuIGJlIHN3YXBwZWQgdmlhIGh5cGVySFRNTC5lbmdpbmUgPSB7Li4ufVxuLy8gU2VlIGh5cGVyaHRtbC1tYWppbmJ1dSB0byBrbm93IG1vcmVcbk1lZ2F0cm9uLmVuZ2luZSA9IGVuZ2luZTtcblxuLy8gcXVpY2tseSBlcmFzZSB0aGUgcmVsYXRlZCBjb250ZW50XG4vLyBvcHRpb25hbGx5IGFkZCBhIHNpbmdsZSBub2RlL2NvbXBvbmVudCBhcyB2YWx1ZVxuTWVnYXRyb24ucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gZW1wdHkodmFsdWUpIHtcbiAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZTtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2RlcztcbiAgbGV0IGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICBpZiAobGVuZ3RoKSB7XG4gICAgY29uc3QgcG4gPSBub2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmVtb3ZlID0gc3BsaWNlLmNhbGwoY2hpbGROb2RlcywgMCwgbGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHBuLnJlbW92ZUNoaWxkKHV0aWxzLmdldE5vZGUocmVtb3ZlW2xlbmd0aF0pKTtcbiAgfVxuICBpZiAodmFsdWUpIHtcbiAgICBwdXNoLmNhbGwoY2hpbGROb2RlcywgdmFsdWUpO1xuICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodXRpbHMuZ2V0Tm9kZSh2YWx1ZSksIG5vZGUpO1xuICB9XG59O1xuXG4vLyB0aGVyZSBhcmUgbnVtZXJvdXMgd2F5cyB0byBvcHRpbWl6ZSBhIGxpc3Qgb2Ygbm9kZXNcbi8vIHRoYXQgaXMgZ29pbmcgdG8gcmVwcmVzZW50IGFub3RoZXIgbGlzdCAob3IgZXZlbiB0aGUgc2FtZSlcbk1lZ2F0cm9uLnByb3RvdHlwZS5iZWNvbWUgPSBmdW5jdGlvbiBiZWNvbWUodmlydHVhbCkge1xuICBjb25zdCB2bGVuZ3RoID0gdmlydHVhbC5sZW5ndGg7XG4gIC8vIGlmIHRoZXJlIGFyZSBuZXcgZWxlbWVudHMgdG8gcHVzaCAuLlxuICBpZiAoMCA8IHZsZW5ndGgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IGxpdmUgPSB0aGlzLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgcG4gPSBub2RlLnBhcmVudE5vZGU7XG4gICAgbGV0IGxsZW5ndGggPSBsaXZlLmxlbmd0aDtcbiAgICBsZXQgbCA9IDA7XG4gICAgbGV0IHYgPSAwO1xuICAgIC8vIGlmIHRoZSBjdXJyZW50IGxpc3QgaXMgZW1wdHksIGFwcGVuZCBhbGwgbm9kZXNcbiAgICBpZiAobGxlbmd0aCA8IDEpIHtcbiAgICAgIHB1c2guYXBwbHkoXG4gICAgICAgIGxpdmUsXG4gICAgICAgIHV0aWxzLmluc2VydChwbiwgdmlydHVhbCwgbm9kZSlcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGFsbCBlbGVtZW50cyBhcmUgdGhlIHNhbWUsIGRvIHByZXR0eSBtdWNoIG5vdGhpbmdcbiAgICB3aGlsZSAobCA8IGxsZW5ndGggJiYgdiA8IHZsZW5ndGgpIHtcbiAgICAgIC8vIGFwcGVuZGluZyBub2Rlcy9jb21wb25lbnRzIGNvdWxkIGJlIGp1c3QgZmluZVxuICAgICAgaWYgKGxpdmVbbF0gIT09IHZpcnR1YWxbdl0pIGJyZWFrO1xuICAgICAgbCsrO1xuICAgICAgdisrO1xuICAgIH1cbiAgICAvLyBpZiB3ZSByZWFjaGVkIHRoZSBsaXZlIGxlbmd0aCBkZXN0aW5hdGlvblxuICAgIGlmIChsID09PSBsbGVuZ3RoKSB7XG4gICAgICAvLyB0aGVyZSBjb3VsZCBiZSBhIHRpZSAobm90aGluZyB0byBkbylcbiAgICAgIGlmICh2bGVuZ3RoID09PSBsbGVuZ3RoKSByZXR1cm47XG4gICAgICAvLyBvciB0aGVyZSdzIG9ubHkgdG8gYXBwZW5kXG4gICAgICBwdXNoLmFwcGx5KFxuICAgICAgICBsaXZlLFxuICAgICAgICB1dGlscy5pbnNlcnQocG4sIHNsaWNlLmNhbGwodmlydHVhbCwgdiksIG5vZGUpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgbmV3IGxlbmd0aCBpcyByZWFjaGVkIHRob3VnaFxuICAgIGlmICh2ID09PSB2bGVuZ3RoKSB7XG4gICAgICAvLyB0aGVyZSBhcmUgbm9kZXMgdG8gcmVtb3ZlXG4gICAgICB1dGlscy5yZW1vdmUocG4sIHNwbGljZS5jYWxsKGxpdmUsIGwsIGxsZW5ndGgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gb3RoZXJ3aXNlIGxldCdzIGNoZWNrIGJhY2t3YXJkXG4gICAgbGV0IHJsID0gbGxlbmd0aDtcbiAgICBsZXQgcnYgPSB2bGVuZ3RoO1xuICAgIHdoaWxlIChybCAmJiBydikge1xuICAgICAgaWYgKGxpdmVbLS1ybF0gIT09IHZpcnR1YWxbLS1ydl0pIHtcbiAgICAgICAgKytybDtcbiAgICAgICAgKytydjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vdyAuLi4gbGlzdHMgYXJlIG5vdCBpZGVudGljYWwsIHdlIGtub3cgdGhhdCxcbiAgICAvLyBidXQgbWF5YmUgaXQgd2FzIGEgcHJlcGVuZCAuLi4gc28gaWYgbGl2ZSBsZW5ndGggaXMgY292ZXJlZFxuICAgIGlmIChybCA8IDEpIHtcbiAgICAgIC8vIHJldHVybiBhZnRlciBwcmUtcGVuZGluZyBhbGwgbm9kZXNcbiAgICAgIHVuc2hpZnQuYXBwbHkoXG4gICAgICAgIGxpdmUsXG4gICAgICAgIHV0aWxzLmluc2VydChwbiwgc2xpY2UuY2FsbCh2aXJ0dWFsLCAwLCBydiksIHV0aWxzLmdldE5vZGUobGl2ZVswXSkpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBvciBtYXliZSwgaXQgd2FzIGEgcmVtb3ZhbCBvZiBub2RlcyBhdCB0aGUgYmVnaW5uaW5nXG4gICAgaWYgKHJ2IDwgMSkge1xuICAgICAgLy8gcmV0dXJuIGFmdGVyIHJlbW92aW5nIGFsbCBwcmUtbm9kZXNcbiAgICAgIHV0aWxzLnJlbW92ZShwbiwgc3BsaWNlLmNhbGwobGl2ZSwgbCwgcmwpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbm93IHdlIGhhdmUgYSBib3VuZGFyeSBvZiBub2RlcyB0aGF0IG5lZWQgdG8gYmUgY2hhbmdlZFxuICAgIC8vIGFsbCB0aGUgZGlzY292ZXJlZCBpbmZvIGFyIHBhc3NlZCB0byB0aGUgZW5naW5lXG4gICAgTWVnYXRyb24uZW5naW5lLnVwZGF0ZShcbiAgICAgIHV0aWxzLCBwbiwgbm9kZSxcbiAgICAgIGxpdmUsIGwsIHJsLCBsbGVuZ3RoLFxuICAgICAgdmlydHVhbCwgdiwgcnYsIHZsZW5ndGhcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgfVxufTtcblxuY29uc3QgdXRpbHMgPSB7XG5cbiAgLy8gdGhlIGJhc2ljIGRlZmF1bHQgZW5naW5lIGlzIGFsd2F5cyBwcm92aWRlZFxuICAvLyBpbiBjYXNlIHRoZXJlIGFyZSBjb25kaXRpb25zIHRoYXQgbmVlZCBpdFxuICBlbmdpbmUsXG5cbiAgLy8gYW4gaXRlbSBjb3VsZCBiZSBhbiBoeXBlckhUTUwuQ29tcG9uZW50IGFuZCwgaW4gc3VjaCBjYXNlLFxuICAvLyBpdCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgbm9kZVxuICBnZXROb2RlOiBub2RlID0+IG5vZGUgaW5zdGFuY2VvZiBDb21wb25lbnQgPyBub2RlLnJlbmRlcigpIDogbm9kZSxcblxuICAvLyBhcHBlbmQgYSBsaXN0IG9mIG5vZGVzIGJlZm9yZSBhbm90aGVyIG5vZGVcbiAgaW5zZXJ0OiAocGFyZW50Tm9kZSwgbm9kZXMsIG5vZGUpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBub2Rlcy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodXRpbHMuZ2V0Tm9kZShub2Rlc1swXSksIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCB0bXAgPSBmcmFnbWVudChwYXJlbnROb2RlKTtcbiAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKVxuICAgICAgICB0bXAuYXBwZW5kQ2hpbGQodXRpbHMuZ2V0Tm9kZShub2Rlc1tpKytdKSk7XG4gICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZSh0bXAsIG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH0sXG5cbiAgLy8gZHJvcCBhIGxpc3Qgb2Ygbm9kZXMgZnJvbSB0aGVpciBwYXJlbnROb2RlXG4gIHJlbW92ZTogKHBhcmVudE5vZGUsIG5vZGVzKSA9PiB7XG4gICAgbGV0IGkgPSBub2Rlcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh1dGlscy5nZXROb2RlKG5vZGVzW2ldKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKiAgICAgICAgICAgICAgICAgIF9fX19fXG4gICAgICAgICAgICAgICAgX19fLyAgfCAgXFxfX19cbiAgICAgICAgICAgICBfXy8gICAgICB8ICAgICAgXFxfX1xuICAgICAgICAgIF9fLyAgICAgICAgIHwgICAgICAgICBcXF9fXG4gICAgICAgICAvfCAgICAgICAgICAgfCAgICAgICAgICAgfFxcXG4gICAgICAgIHwgfCAgICAgICAgICAgfCAgICAgICAgICAgfCB8XG4gICAgICAgIHwgfCAgICAgICAgICAgfCAgICAgICAgICAgfCB8XG4gICAgICAgfCAgfCAgICAgICAgICAgfCAgICAgICAgICAgfCAgfFxuICAgICAgIHwgIHwgICAgICAgIF9fX3xfX18gICAgICAgIHwgIHxcbiAgICAgIC8gICB8ICAgIF9fXy8gIF9fXyAgXFxfX18gICAgfCAgIFxcXG4gICAgICB8ICAgfF9fXy8gIF9fXy98IHxcXF9fXyAgXFxfX198ICAgfFxuICAgICAgfCAgIC8gICBfXy9fIFxcX3wgfF8vIF9cXF9fICAgXFwgICB8XG4gICAgIHwgICB8X19fL1xcXyAgXFxfX19fX19fLyAgXy9cXF9fX3wgICB8XG4gICAgLyAgIC9fX18vICAgXFxfX19cXF9fXy9fX18vICAgXFxfX19cXCAgIFxcXG4gICAvICAgIHwgICB8ICAgICAgIHwgICB8ICAgICAgIHwgICB8ICAgIFxcXG4gIC8gICAgIHwgICB8XyAgICAgIHwgICB8ICAgICAgX3wgICB8ICAgICBcXFxuIHxfX18gICB8X19ffF9cXCAgIF8vfF9fX3xcXF8gICAvX3xfX198ICAgX19ffFxuIHxfICBcXCAgICB8ICAgfFxcIC8gIHxfX198ICBcXCAvfCAgIHwgICAgLyAgX3xcbiB8fHwgfCAgICB8ICAgfCB8ICBfX19fX19fICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgXFxfX19fXy8gIHwgfCAgIHwgICAgfCB8fHxcbiB8fHwgfCAgICB8ICAgfCB8ICAgIF9fXyAgICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgICAgICAgICAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8IHwgICAgICAgICAgIHwgfCAgIHwgICAgfCB8fHxcbiB8fHwgfCAgICB8ICAgfCB8ICAgICAgICAgICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHxcXHwgICAgICAgICAgIHwvfCAgIHwgICAgfCB8fHxcbiBcXHx8X3xfX19ffF9fX3wtXFxfX19fX19fX19fXy8tfF9fX3xfX19ffF98fC9cblxuICAgIGN5YmVydHJvbmNocm9uaWNsZS5mcmVld2Vic3BhY2UuY29tICAgKi9cblxuZXhwb3J0IGRlZmF1bHQgTWVnYXRyb247XG5cbi8qIFRPRE86IGJlbmNobWFyayB0aGlzIGlzIG5lZWRlZCBhdCBhbGxcbi8vIGluc3RlYWQgb2YgY2hlY2tpbmcgaW5zdGFuY2VvZiBlYWNoIHRpbWUgYW5kIHJlbmRlciBwb3RlbnRpYWxseSB0d2ljZVxuLy8gdXNlIGEgbWFwIHRvIHJldHJpZXZlIG5vZGVzIGZyb20gYSBnZW5lcmljIGl0ZW1cblxuaW1wb3J0IHtNYXB9IGZyb20gJy4uL3NoYXJlZC9wb29ybHlmaWxscy5qcyc7XG5jb25zdCBnZXQgPSAobWFwLCBub2RlKSA9PiBtYXAuZ2V0KG5vZGUpIHx8IHNldChtYXAsIG5vZGUpO1xuY29uc3Qgc2V0ID0gKG1hcCwgbm9kZSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHV0aWxzLmdldE5vZGUobm9kZSk7XG4gIG1hcC5zZXQobm9kZSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4qL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9jbGFzc2VzL01lZ2F0cm9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBpbnRlbnRzID0ge307XG5jb25zdCBrZXlzID0gW107XG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IGludGVudHMuaGFzT3duUHJvcGVydHk7XG5cbmxldCBsZW5ndGggPSAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgLy8gaHlwZXJIVE1MLmRlZmluZSgnaW50ZW50JywgKG9iamVjdCwgdXBkYXRlKSA9PiB7Li4ufSlcbiAgLy8gY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgdGhpcmQgcGFydHMgdXBkYXRlIG1lY2hhbmlzbVxuICAvLyB3aGVuIGV2ZXJ5IG90aGVyIGtub3duIG1lY2hhbmlzbSBmYWlsZWQuXG4gIC8vIGh5cGVyLmRlZmluZSgndXNlcicsIGluZm8gPT4gaW5mby5uYW1lKTtcbiAgLy8gaHlwZXIobm9kZSlgPHA+JHt7dXNlcn19PC9wPmA7XG4gIGRlZmluZTogKGludGVudCwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoIShpbnRlbnQgaW4gaW50ZW50cykpIHtcbiAgICAgIGxlbmd0aCA9IGtleXMucHVzaChpbnRlbnQpO1xuICAgIH1cbiAgICBpbnRlbnRzW2ludGVudF0gPSBjYWxsYmFjaztcbiAgfSxcblxuICAvLyB0aGlzIG1ldGhvZCBpcyB1c2VkIGludGVybmFsbHkgYXMgbGFzdCByZXNvcnRcbiAgLy8gdG8gcmV0cmlldmUgYSB2YWx1ZSBvdXQgb2YgYW4gb2JqZWN0XG4gIGludm9rZTogKG9iamVjdCwgY2FsbGJhY2spID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICByZXR1cm4gaW50ZW50c1trZXldKG9iamVjdFtrZXldLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0ludGVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXAsIFdlYWtNYXB9IGZyb20gJy4uL3NoYXJlZC9wb29ybHlmaWxscy5qcyc7XG5pbXBvcnQge1VJREN9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMuanMnO1xuaW1wb3J0IFVwZGF0ZXMgZnJvbSAnLi4vb2JqZWN0cy9VcGRhdGVzLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUZyYWdtZW50LFxuICBpbXBvcnROb2RlLFxuICB1bmlxdWVcbn0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuLy8gYSB3ZWFrIGNvbGxlY3Rpb24gb2YgY29udGV4dHMgdGhhdFxuLy8gYXJlIGFscmVhZHkga25vd24gdG8gaHlwZXJIVE1MXG5jb25zdCBiZXdpdGNoZWQgPSBuZXcgV2Vha01hcDtcblxuLy8gdGhlIGNvbGxlY3Rpb24gb2YgYWxsIHRlbXBsYXRlIGxpdGVyYWxzXG4vLyBzaW5jZSB0aGVzZSBhcmUgdW5pcXVlIGFuZCBpbW11dGFibGVcbi8vIGZvciB0aGUgd2hvbGUgYXBwbGljYXRpb24gbGlmZS1jeWNsZVxuY29uc3QgdGVtcGxhdGVzID0gbmV3IE1hcDtcblxuLy8gYmV0dGVyIGtub3duIGFzIGh5cGVyLmJpbmQobm9kZSksIHRoZSByZW5kZXIgaXNcbi8vIHRoZSBtYWluIHRhZyBmdW5jdGlvbiBpbiBjaGFyZ2Ugb2YgZnVsbHkgdXBncmFkaW5nXG4vLyBvciBzaW1wbHkgdXBkYXRpbmcsIGNvbnRleHRzIHVzZWQgYXMgaHlwZXJIVE1MIHRhcmdldHMuXG4vLyBUaGUgYHRoaXNgIGNvbnRleHQgaXMgZWl0aGVyIGEgcmVndWxhciBET00gbm9kZSBvciBhIGZyYWdtZW50LlxuZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHdpY2tlZCA9IGJld2l0Y2hlZC5nZXQodGhpcyk7XG4gIGlmICh3aWNrZWQgJiYgd2lja2VkLnRlbXBsYXRlID09PSB1bmlxdWUodGVtcGxhdGUpKSB7XG4gICAgdXBkYXRlLmFwcGx5KHdpY2tlZC51cGRhdGVzLCBhcmd1bWVudHMpO1xuICB9IGVsc2Uge1xuICAgIHVwZ3JhZGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gYW4gdXBncmFkZSBpcyBpbiBjaGFyZ2Ugb2YgY29sbGVjdGluZyB0ZW1wbGF0ZSBpbmZvLFxuLy8gcGFyc2UgaXQgb25jZSwgaWYgdW5rbm93biwgdG8gbWFwIGFsbCBpbnRlcnBvbGF0aW9uc1xuLy8gYXMgc2luZ2xlIERPTSBjYWxsYmFja3MsIHJlbGF0ZSBzdWNoIHRlbXBsYXRlXG4vLyB0byB0aGUgY3VycmVudCBjb250ZXh0LCBhbmQgcmVuZGVyIGl0IGFmdGVyIGNsZWFuaW5nIHRoZSBjb250ZXh0IHVwXG5mdW5jdGlvbiB1cGdyYWRlKHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdW5pcXVlKHRlbXBsYXRlKTtcbiAgY29uc3QgaW5mbyA9ICB0ZW1wbGF0ZXMuZ2V0KHRlbXBsYXRlKSB8fFxuICAgICAgICAgICAgICAgIGNyZWF0ZVRlbXBsYXRlLmNhbGwodGhpcywgdGVtcGxhdGUpO1xuICBjb25zdCBmcmFnbWVudCA9IGltcG9ydE5vZGUodGhpcy5vd25lckRvY3VtZW50LCBpbmZvLmZyYWdtZW50KTtcbiAgY29uc3QgdXBkYXRlcyA9IFVwZGF0ZXMuY3JlYXRlKGZyYWdtZW50LCBpbmZvLnBhdGhzKTtcbiAgYmV3aXRjaGVkLnNldCh0aGlzLCB7dGVtcGxhdGUsIHVwZGF0ZXN9KTtcbiAgdXBkYXRlLmFwcGx5KHVwZGF0ZXMsIGFyZ3VtZW50cyk7XG4gIHRoaXMudGV4dENvbnRlbnQgPSAnJztcbiAgdGhpcy5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbi8vIGFuIHVwZGF0ZSBzaW1wbHkgbG9vcHMgb3ZlciBhbGwgbWFwcGVkIERPTSBvcGVyYXRpb25zXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzW2kgLSAxXShhcmd1bWVudHNbaV0pO1xuICB9XG59XG5cbi8vIGEgdGVtcGxhdGUgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcbi8vIGF3YXJlIG9mIGFsbCBpbnRlcnBvbGF0aW9ucyBhbmQgd2l0aCBhIGxpc3Rcbi8vIG9mIHBhdGhzIHVzZWQgdG8gZmluZCBvbmNlIHRob3NlIG5vZGVzIHRoYXQgbmVlZCB1cGRhdGVzLFxuLy8gbm8gbWF0dGVyIGlmIHRoZXNlIGFyZSBhdHRyaWJ1dGVzLCB0ZXh0IG5vZGVzLCBvciByZWd1bGFyIG9uZVxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUodGVtcGxhdGUpIHtcbiAgY29uc3QgcGF0aHMgPSBbXTtcbiAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGcmFnbWVudCh0aGlzLCB0ZW1wbGF0ZS5qb2luKFVJREMpKTtcbiAgVXBkYXRlcy5maW5kKGZyYWdtZW50LCBwYXRocywgdGVtcGxhdGUuc2xpY2UoKSk7XG4gIGNvbnN0IGluZm8gPSB7ZnJhZ21lbnQsIHBhdGhzfTtcbiAgdGVtcGxhdGVzLnNldCh0ZW1wbGF0ZSwgaW5mbyk7XG4gIHJldHVybiBpbmZvO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2h5cGVyL3JlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0ICQkb2JzZXJ2YWJsZSBmcm9tICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG5leHBvcnQgdmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAgICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gICAqXG4gICAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAgICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICAgKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAgICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICAgKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICAgKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gICAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gICAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAgICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAgICpcbiAgICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAgICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICAgKi9cbn07ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH1cblxuICAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cbiAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQbGFpbk9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XG59IGNhdGNoKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcblx0XHRnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbXBvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB7XHJcbiAgZGVmYXVsdEltYWdlVXJsOiAnaW1hZ2VzLzctY29sb3JmdWwtcGhvdG9ncmFwaHkuanBnJyxcclxuICBkZWZhdWx0Q29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGUuWUNiQ3IsXHJcbiAgZGVmYXVsdENvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycy5zUkdCKClcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29uZmlndXJhdGlvbi50cyIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05WRVJTSU9OX1NUQVJURUQgPSAnQ09OVkVSU0lPTl9TVEFSVEVEJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJzaW9uU3RhcnRlZCgpOiBBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDT05WRVJTSU9OX1NUQVJURURcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uU3RhcnRlZC50cyIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcbmltcG9ydCB7IElsbHVtaW5hbnRUeXBlIH0gZnJvbSAnbW9kZWxzL0lsbHVtaW5hbnRUeXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSUxMVU1JTkFOVF9UWVBFID0gJ0NIQU5HRV9JTExVTUlOQU5UX1RZUEUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUlsbHVtaW5hbnRUeXBlKGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZSwgd2hpdGVQb2ludDogQ29sb3JQb2ludCk6IEFueUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9JTExVTUlOQU5UX1RZUEUsXHJcbiAgICBpbGx1bWluYW50VHlwZSxcclxuICAgIHdoaXRlUG9pbnRcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlSWxsdW1pbmFudFR5cGUudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1NFTEVDVEVEX0NPTE9SX1NQQUNFID0gJ0NIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZUFjdGlvbiBleHRlbmRzIEFueUFjdGlvbiB7XHJcbiAgY29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UoXHJcbiAgY29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGVcclxuKTogQ2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlQWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ0hBTkdFX1NFTEVDVEVEX0NPTE9SX1NQQUNFLFxyXG4gICAgY29sb3JTcGFjZVxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UudHMiLCJpbXBvcnQgeyBDb2xvclBvaW50IH0gZnJvbSAnbW9kZWxzL0NvbG9yUG9pbnQnO1xyXG5pbXBvcnQgeyBMYWJlbGVkVmFsdWUgfSBmcm9tICd1dGlscy9MYWJlbGVkVmFsdWUnO1xyXG5cclxuZXhwb3J0IGVudW0gSWxsdW1pbmFudFR5cGUge1xyXG4gIEEsXHJcbiAgQixcclxuICBDLFxyXG4gIEQ1MCxcclxuICBENTUsXHJcbiAgRDY1LFxyXG4gIEQ3NSxcclxuICBFLFxyXG4gIEYyLFxyXG4gIEY3LFxyXG4gIEYxMSxcclxuICBDdXN0b21cclxufVxyXG5cclxuaW50ZXJmYWNlIFByZWRlZmluZWRJbGx1bWluYW50IHtcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGU7XHJcbiAgd2hpdGVQb2ludCgpOiBDb2xvclBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJlZGVmaW5lZElsbHVtaW5hbnRzOiBQcmVkZWZpbmVkSWxsdW1pbmFudFtdID0gW1xyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkEsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuNDQ3NTcsIHk6IDAuNDA3MzMgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5CLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjM0ODQsIHk6IDAuMzUxNiB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkMsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzEwMDYsIHk6IDAuMzE2MTUgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5ENTAsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzQ1NjcsIHk6IDAuMzU4NSB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkQ1NSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zMzI0MiwgeTogMC4zNDc0MyB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkQ2NSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zMTI3MywgeTogMC4zMjkwMiB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkQ3NSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4yOTkwMiwgeTogMC4zMTQ4NSB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkUsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzMzMzMsIHk6IDAuMzMzMzMgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5GMiwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zNzIwNywgeTogMC4zNzUxMiB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkY3LCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjMxMjg1LCB5OiAwLjMyOTE4IH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRjExLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjM4MDU0LCB5OiAwLjM3NjkxIH0pIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYWJlbGVkSWxsdW1pbmFudHM6IExhYmVsZWRWYWx1ZTxJbGx1bWluYW50VHlwZT5bXSA9IFtcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5BLCBsYWJlbDogJ0EnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuQiwgbGFiZWw6ICdCJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkMsIGxhYmVsOiAnQycgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5ENTAsIGxhYmVsOiAnRDUwJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkQ1NSwgbGFiZWw6ICdENTUnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRDY1LCBsYWJlbDogJ0Q2NScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5ENzUsIGxhYmVsOiAnRDc1JyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkUsIGxhYmVsOiAnRScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5GMiwgbGFiZWw6ICdGMicgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5GNywgbGFiZWw6ICdGNycgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5GMTEsIGxhYmVsOiAnRjExJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkN1c3RvbSwgbGFiZWw6ICdDdXN0b20nIH1cclxuXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0lsbHVtaW5hbnRUeXBlLnRzIiwiaW1wb3J0IHsgd2lyZSB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuaW1wb3J0IHsgTGFiZWxlZFZhbHVlIH0gZnJvbSAndXRpbHMvTGFiZWxlZFZhbHVlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYWJlbGVkU2VsZWN0KFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgb3B0aW9uczogTGFiZWxlZFZhbHVlPG51bWJlcj5bXSxcclxuICBzZWxlY3RlZE9wdGlvbjogbnVtYmVyLFxyXG4gIG9uQ2hhbmdlOiAobmV3VmFsdWU6IG51bWJlcikgPT4gdm9pZFxyXG4pIHtcclxuICByZXR1cm4gd2lyZSgpYFxyXG4gICAgPHNlbGVjdCBpZD0ke2lkfSBvbmNoYW5nZT0keyhldmVudDogRXZlbnQpID0+IG9uQ2hhbmdlKGdldFZhbHVlRnJvbVNlbGVjdEV2ZW50KG9wdGlvbnMsIGV2ZW50KSl9PlxyXG4gICAgICAke29wdGlvbnMubWFwKG9wdGlvbiA9PiBMYWJlbGVkT3B0aW9uKG9wdGlvbiwgc2VsZWN0ZWRPcHRpb24pKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhYmVsZWRPcHRpb248VD4obGFiZWxlZE9wdGlvbjogTGFiZWxlZFZhbHVlPFQ+LCBzZWxlY3RlZFZhbHVlOiBUKSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBcclxuICAgIDxvcHRpb25cclxuICAgICAgdmFsdWU9JHtsYWJlbGVkT3B0aW9uLnZhbHVlfVxyXG4gICAgICBzZWxlY3RlZD0ke2xhYmVsZWRPcHRpb24udmFsdWUgPT09IHNlbGVjdGVkVmFsdWV9XHJcbiAgICA+XHJcbiAgICAgICR7bGFiZWxlZE9wdGlvbi5sYWJlbH1cclxuICAgIDwvb3B0aW9uPlxyXG4gIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlRnJvbVNlbGVjdEV2ZW50KG9wdGlvbnM6IExhYmVsZWRWYWx1ZTxudW1iZXI+W10sIGV2ZW50OiBFdmVudCkge1xyXG4gIGNvbnN0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD5ldmVudC50YXJnZXQ7XHJcbiAgY29uc3QgdmFsdWUgPSBwYXJzZUludChzZWxlY3QudmFsdWUsIDEwKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpO1xyXG4gIGlmICghc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignU2VsZWN0ZWQgPG9wdGlvbj4gbm90IGZvdW5kIGluIG9wdGlvbnMgcGFyYW1ldGVyJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VsZWN0ZWRPcHRpb24udmFsdWU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9MYWJlbGVkU2VsZWN0LnRzIiwiZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZU1hcDxUPihcclxuICBhcnJheTogVFtdLFxyXG4gIGNhbGxiYWNrOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gVFxyXG4pOiBUW10ge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBhcnJheVtpXSA9IGNhbGxiYWNrKGFycmF5W2ldLCBpLCBhcnJheSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdXRpbHMvbXV0YXRlTWFwLnRzIiwiaW1wb3J0IEFic3RyYWN0TWF0cml4IGZyb20gJy4uL2Fic3RyYWN0TWF0cml4JztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JhcHBlck1hdHJpeDFEIGV4dGVuZHMgQWJzdHJhY3RNYXRyaXgoKSB7XG4gICAgLyoqXG4gICAgICogQGNsYXNzIFdyYXBwZXJNYXRyaXgxRFxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZGF0YVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMucm93cyA9IDFdXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJvd3MgPSAxXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCAlIHJvd3MgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGRhdGEgbGVuZ3RoIGlzIG5vdCBkaXZpc2libGUgYnkgdGhlIG51bWJlciBvZiByb3dzJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gZGF0YS5sZW5ndGggLyByb3dzO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2NhbGN1bGF0ZUluZGV4KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9jYWxjdWxhdGVJbmRleChyb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB9XG5cbiAgICBfY2FsY3VsYXRlSW5kZXgocm93LCBjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIChyb3cgKiB0aGlzLmNvbHVtbnMpICsgY29sdW1uO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdHJpeDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDFELmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQWJzdHJhY3RNYXRyaXggZnJvbSAnLi4vYWJzdHJhY3RNYXRyaXgnO1xuaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcmFwcGVyTWF0cml4MkQgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCgpIHtcbiAgICAvKipcbiAgICAgKiBAY2xhc3MgV3JhcHBlck1hdHJpeDJEXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yb3dzID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGRhdGFbMF0ubGVuZ3RoO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YVtyb3dJbmRleF1bY29sdW1uSW5kZXhdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdHJpeDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDJELmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeCwgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge2h5cG90ZW51c2V9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGNsYXNzIFFyRGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9RckRlY29tcG9zaXRpb24uY3NcbiAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRckRlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgICAgICB2YXIgcXIgPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgICB2YXIgbSA9IHZhbHVlLnJvd3M7XG4gICAgICAgIHZhciBuID0gdmFsdWUuY29sdW1ucztcbiAgICAgICAgdmFyIHJkaWFnID0gbmV3IEFycmF5KG4pO1xuICAgICAgICB2YXIgaSwgaiwgaywgcztcblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICB2YXIgbnJtID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBucm0gPSBoeXBvdGVudXNlKG5ybSwgcXIuZ2V0KGksIGspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChucm0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocXIuZ2V0KGssIGspIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBucm0gPSAtbnJtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHFyLnNldChpLCBrLCBxci5nZXQoaSwgaykgLyBucm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxci5zZXQoaywgaywgcXIuZ2V0KGssIGspICsgMSk7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gcXIuZ2V0KGksIGspICogcXIuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMgPSAtcyAvIHFyLmdldChrLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXIuc2V0KGksIGosIHFyLmdldChpLCBqKSArIHMgKiBxci5nZXQoaSwgaykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmRpYWdba10gPSAtbnJtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5RUiA9IHFyO1xuICAgICAgICB0aGlzLlJkaWFnID0gcmRpYWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29sdmUgYSBwcm9ibGVtIG9mIGxlYXN0IHNxdWFyZSAoQXg9YikgYnkgdXNpbmcgdGhlIFFSIGRlY29tcG9zaXRpb24uIFVzZWZ1bCB3aGVuIEEgaXMgcmVjdGFuZ3VsYXIsIGJ1dCBub3Qgd29ya2luZyB3aGVuIEEgaXMgc2luZ3VsYXIuXG4gICAgICogRXhhbXBsZSA6IFdlIHNlYXJjaCB0byBhcHByb3hpbWF0ZSB4LCB3aXRoIEEgbWF0cml4IHNoYXBlIG0qbiwgeCB2ZWN0b3Igc2l6ZSBuLCBiIHZlY3RvciBzaXplIG0gKG0gPiBuKS4gV2Ugd2lsbCB1c2UgOlxuICAgICAqIHZhciBxciA9IFFyRGVjb21wb3NpdGlvbihBKTtcbiAgICAgKiB2YXIgeCA9IHFyLnNvbHZlKGIpO1xuICAgICAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZSAtIE1hdHJpeCAxRCB3aGljaCBpcyB0aGUgdmVjdG9yIGIgKGluIHRoZSBlcXVhdGlvbiBBeCA9IGIpXG4gICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSB2ZWN0b3IgeFxuICAgICAqL1xuICAgIHNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0cml4LmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgICAgICB2YXIgcXIgPSB0aGlzLlFSO1xuICAgICAgICB2YXIgbSA9IHFyLnJvd3M7XG5cbiAgICAgICAgaWYgKHZhbHVlLnJvd3MgIT09IG0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IHJvdyBkaW1lbnNpb25zIG11c3QgYWdyZWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNGdWxsUmFuaygpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyByYW5rIGRlZmljaWVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgICB2YXIgbiA9IHFyLmNvbHVtbnM7XG4gICAgICAgIHZhciBpLCBqLCBrLCBzO1xuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHFyW2ldW2tdICogWFtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcyA9IC1zIC8gcXJba11ba107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdICs9IHMgKiBxcltpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrID0gbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIFhba11bal0gLz0gdGhpcy5SZGlhZ1trXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdIC09IFhba11bal0gKiBxcltpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gWC5zdWJNYXRyaXgoMCwgbiAtIDEsIDAsIGNvdW50IC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRnVsbFJhbmsoKSB7XG4gICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5RUi5jb2x1bW5zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuUmRpYWdbaV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IHVwcGVyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgdmFyIHFyID0gdGhpcy5RUjtcbiAgICAgICAgdmFyIG4gPSBxci5jb2x1bW5zO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgICAgIHZhciBpLCBqO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSBxcltpXVtqXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGopIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IHRoaXMuUmRpYWdbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCBvcnRob2dvbmFsTWF0cml4KCkge1xuICAgICAgICB2YXIgcXIgPSB0aGlzLlFSO1xuICAgICAgICB2YXIgcm93cyA9IHFyLnJvd3M7XG4gICAgICAgIHZhciBjb2x1bW5zID0gcXIuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICB2YXIgaSwgaiwgaywgcztcblxuICAgICAgICBmb3IgKGsgPSBjb2x1bW5zIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBYW2ldW2tdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFhba11ba10gPSAxO1xuICAgICAgICAgICAgZm9yIChqID0gazsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChxcltrXVtrXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyArPSBxcltpXVtrXSAqIFhbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzID0gLXMgLyBxcltrXVtrXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBYW2ldW2pdICs9IHMgKiBxcltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3FyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdBcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IGJpbmQgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBib290c3RyYXA7XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgY29uc3QgYXBwbGljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwbGljYXRpb24nKTtcclxuXHJcbiAgaWYgKCFhcHBsaWNhdGlvbkNvbnRhaW5lcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdBcHBsaWNhdGlvbiBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gIGJpbmQoYXBwbGljYXRpb25Db250YWluZXIpYCR7YXBwbGljYXRpb259YDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9pbmRleC50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5mb290ZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgYXMgSHlwZXJDb21wb25lbnQgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmltcG9ydCB7IEltYWdlUGlja2VyIH0gZnJvbSAnY29tcG9uZW50cy9JbWFnZVBpY2tlcic7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlUGlja2VyIH0gZnJvbSAnY29udGFpbmVycy9Db2xvclNwYWNlUGlja2VyJztcclxuaW1wb3J0IHsgT3JpZ2luYWxJbWFnZURpc3BsYXkgfSBmcm9tICdjb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5JztcclxuaW1wb3J0IHsgUmVzdWx0c0Rpc3BsYXkgfSBmcm9tICdjb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5JztcclxuaW1wb3J0IHsgU3RhcnRDb252ZXJzaW9uQnV0dG9uIH0gZnJvbSAnY29udGFpbmVycy9TdGFydENvbnZlcnNpb25CdXR0b24nO1xyXG5cclxuaW1wb3J0IHsgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZUxvYWRlcic7XHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VPcmlnaW5hbEltYWdlIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VPcmlnaW5hbEltYWdlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnNCb3ggfSBmcm9tICdjb250YWluZXJzL0NvbnZlcnNpb25QYXJhbWV0ZXJzQm94JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIEh5cGVyQ29tcG9uZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlUGlja2VyOiBJbWFnZVBpY2tlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IG9yaWdpbmFsSW1hZ2VEaXNwbGF5OiBPcmlnaW5hbEltYWdlRGlzcGxheTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbG9yU3BhY2VQaWNrZXI6IENvbG9yU3BhY2VQaWNrZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb252ZXJzaW9uUGFyYW1ldGVyQm94OiBDb252ZXJzaW9uUGFyYW1ldGVyc0JveDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0Q29udmVyc2lvbkJ1dHRvbjogU3RhcnRDb252ZXJzaW9uQnV0dG9uO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzdWx0c0Rpc3BsYXk6IFJlc3VsdHNEaXNwbGF5O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5pbWFnZVBpY2tlciA9IG5ldyBJbWFnZVBpY2tlcigpO1xyXG4gICAgdGhpcy5vcmlnaW5hbEltYWdlRGlzcGxheSA9IG5ldyBPcmlnaW5hbEltYWdlRGlzcGxheSgpO1xyXG4gICAgdGhpcy5jb2xvclNwYWNlUGlja2VyID0gbmV3IENvbG9yU3BhY2VQaWNrZXIoKTtcclxuICAgIHRoaXMuY29udmVyc2lvblBhcmFtZXRlckJveCA9IG5ldyBDb252ZXJzaW9uUGFyYW1ldGVyc0JveCgpO1xyXG4gICAgdGhpcy5zdGFydENvbnZlcnNpb25CdXR0b24gPSBuZXcgU3RhcnRDb252ZXJzaW9uQnV0dG9uKCk7XHJcbiAgICB0aGlzLnJlc3VsdHNEaXNwbGF5ID0gbmV3IFJlc3VsdHNEaXNwbGF5KCk7XHJcblxyXG4gICAgdGhpcy5sb2FkRGVmYXVsdEltYWdlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5Db2xvciBjb252ZXJ0ZXI8L2gxPlxyXG4gICAgICAgICR7dGhpcy5pbWFnZVBpY2tlcn1cclxuICAgICAgICAke3RoaXMub3JpZ2luYWxJbWFnZURpc3BsYXl9XHJcbiAgICAgICAgJHt0aGlzLmNvbG9yU3BhY2VQaWNrZXJ9XHJcbiAgICAgICAgJHt0aGlzLmNvbnZlcnNpb25QYXJhbWV0ZXJCb3h9XHJcbiAgICAgICAgJHt0aGlzLnN0YXJ0Q29udmVyc2lvbkJ1dHRvbn1cclxuICAgICAgICAke3RoaXMucmVzdWx0c0Rpc3BsYXl9XHJcblxyXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5DcmVhdGVkIGJ5IEdyemVnb3J6IFJvemR6aWFsaWsgQCAyMDE3PC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgbG9hZERlZmF1bHRJbWFnZSgpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRJbWFnZVVybCA9IGNvbmZpZ3VyYXRpb24uZGVmYXVsdEltYWdlVXJsO1xyXG5cclxuICAgIGNvbnN0IGltYWdlTG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKCk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGltYWdlTG9hZGVyLmxvYWRJbWFnZShkZWZhdWx0SW1hZ2VVcmwpO1xyXG5cclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yaWdpbmFsSW1hZ2UoaW1hZ2UpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvQXBwbGljYXRpb24udHMiLCJpbXBvcnQge2NyZWF0ZSwgZnJhZ21lbnQsIHRleHR9IGZyb20gJy4vZWFzeS1kb20uanMnO1xuXG5jb25zdCB0ZXN0RnJhZ21lbnQgPSBmcmFnbWVudChkb2N1bWVudCk7XG5cbi8vIERPTTQgbm9kZS5hcHBlbmQoLi4ubWFueSlcbmV4cG9ydCBjb25zdCBoYXNBcHBlbmQgPSAnYXBwZW5kJyBpbiB0ZXN0RnJhZ21lbnQ7XG5cbi8vIGRldGVjdCBvbGQgYnJvd3NlcnMgd2l0aG91dCBIVE1MVGVtcGxhdGVFbGVtZW50IGNvbnRlbnQgc3VwcG9ydFxuZXhwb3J0IGNvbnN0IGhhc0NvbnRlbnQgPSAnY29udGVudCcgaW4gY3JlYXRlKGRvY3VtZW50LCAndGVtcGxhdGUnKTtcblxuLy8gSUUgMTEgaGFzIHByb2JsZW1zIHdpdGggY2xvbmluZyB0ZW1wbGF0ZXM6IGl0IFwiZm9yZ2V0c1wiIGVtcHR5IGNoaWxkTm9kZXNcbnRlc3RGcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0KHRlc3RGcmFnbWVudCwgJ2cnKSk7XG50ZXN0RnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dCh0ZXN0RnJhZ21lbnQsICcnKSk7XG5leHBvcnQgY29uc3QgaGFzRG9vbWVkQ2xvbmVOb2RlID0gdGVzdEZyYWdtZW50LmNsb25lTm9kZSh0cnVlKS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMTtcblxuLy8gb2xkIGJyb3dzZXJzIG5lZWQgdG8gZmFsbGJhY2sgdG8gY2xvbmVOb2RlXG4vLyBDdXN0b20gRWxlbWVudHMgVjAgYW5kIFYxIHdpbGwgd29yayBwb2x5ZmlsbGVkXG4vLyBidXQgbmF0aXZlIGltcGxlbWVudGF0aW9ucyBuZWVkIGltcG9ydE5vZGUgaW5zdGVhZFxuLy8gKHNwZWNpYWxseSBDaHJvbWl1bSBhbmQgaXRzIG9sZCBWMCBpbXBsZW1lbnRhdGlvbilcbmV4cG9ydCBjb25zdCBoYXNJbXBvcnROb2RlID0gJ2ltcG9ydE5vZGUnIGluIGRvY3VtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvZmVhdHVyZXMtZGV0ZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3NsaWNlLCBzcGxpY2V9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXBkYXRlOiAoXG4gICAgdXRpbHMsIHBhcmVudE5vZGUsIGNvbW1lbnROb2RlLFxuICAgIGxpdmVOb2RlcywgbGl2ZVN0YXJ0LCBsaXZlRW5kLCBsaXZlTGVuZ3RoLFxuICAgIHZpcnR1YWxOb2RlcywgdmlydHVhbFN0YXJ0LCB2aXJ0dWFsRW5kIC8qLCB2aXJ0dWFsTGVuZ3RoICovXG4gICkgPT4ge1xuICAgIHdoaWxlIChsaXZlU3RhcnQgPCBsaXZlRW5kICYmIHZpcnR1YWxTdGFydCA8IHZpcnR1YWxFbmQpIHtcbiAgICAgIGNvbnN0IGxpdmVWYWx1ZSA9IGxpdmVOb2Rlc1tsaXZlU3RhcnRdO1xuICAgICAgY29uc3QgdmlydHVhbFZhbHVlID0gdmlydHVhbE5vZGVzW3ZpcnR1YWxTdGFydF07XG4gICAgICBjb25zdCBzdGF0dXMgPSBsaXZlVmFsdWUgPT09IHZpcnR1YWxWYWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgMCA6IChsaXZlTm9kZXMuaW5kZXhPZih2aXJ0dWFsVmFsdWUpIDwgMCA/IDEgOiAtMSk7XG4gICAgICAvLyBub2RlcyBjYW4gYmUgZWl0aGVyIHJlbW92ZWQgLi4uXG4gICAgICBpZiAoc3RhdHVzIDwgMCkge1xuICAgICAgICBzcGxpY2UuY2FsbChsaXZlTm9kZXMsIGxpdmVTdGFydCwgMSk7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodXRpbHMuZ2V0Tm9kZShsaXZlVmFsdWUpKTtcbiAgICAgICAgbGl2ZUVuZC0tO1xuICAgICAgICBsaXZlTGVuZ3RoLS07XG4gICAgICB9XG4gICAgICAvLyAuLi4gYXBwZW5kZWQgLi4uXG4gICAgICBlbHNlIGlmICgwIDwgc3RhdHVzKSB7XG4gICAgICAgIHNwbGljZS5jYWxsKGxpdmVOb2RlcywgbGl2ZVN0YXJ0LCAwLCB2aXJ0dWFsVmFsdWUpO1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZSh1dGlscy5nZXROb2RlKHZpcnR1YWxWYWx1ZSksIHV0aWxzLmdldE5vZGUobGl2ZVZhbHVlKSk7XG4gICAgICAgIGxpdmVTdGFydCsrO1xuICAgICAgICBsaXZlRW5kKys7XG4gICAgICAgIGxpdmVMZW5ndGgrKztcbiAgICAgICAgdmlydHVhbFN0YXJ0Kys7XG4gICAgICB9XG4gICAgICAvLyAuLi4gb3IgaWdub3JlZCwgc2luY2UgaXQncyB0aGUgc2FtZSAuLi5cbiAgICAgIGVsc2Uge1xuICAgICAgICBsaXZlU3RhcnQrKztcbiAgICAgICAgdmlydHVhbFN0YXJ0Kys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsaXZlU3RhcnQgPCBsaXZlRW5kKSB7XG4gICAgICBjb25zdCByZW1vdmUgPSBzcGxpY2UuY2FsbChsaXZlTm9kZXMsIGxpdmVTdGFydCwgbGl2ZUVuZCAtIGxpdmVTdGFydCk7XG4gICAgICBsaXZlU3RhcnQgPSByZW1vdmUubGVuZ3RoO1xuICAgICAgd2hpbGUgKGxpdmVTdGFydC0tKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodXRpbHMuZ2V0Tm9kZShyZW1vdmVbbGl2ZVN0YXJ0XSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmlydHVhbFN0YXJ0IDwgdmlydHVhbEVuZCkge1xuICAgICAgc3BsaWNlLmFwcGx5KFxuICAgICAgICBsaXZlTm9kZXMsXG4gICAgICAgIFtsaXZlRW5kLCAwXS5jb25jYXQoXG4gICAgICAgICAgdXRpbHMuaW5zZXJ0KFxuICAgICAgICAgICAgcGFyZW50Tm9kZSxcbiAgICAgICAgICAgIHNsaWNlLmNhbGwodmlydHVhbE5vZGVzLCB2aXJ0dWFsU3RhcnQsIHZpcnR1YWxFbmQpLFxuICAgICAgICAgICAgbGl2ZUVuZCA8IGxpdmVMZW5ndGggP1xuICAgICAgICAgICAgICB1dGlscy5nZXROb2RlKGxpdmVOb2Rlc1tsaXZlRW5kXSkgOiBjb21tZW50Tm9kZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0VuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtFTEVNRU5UX05PREUsIFNWR19OQU1FU1BBQ0V9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtXZWFrTWFwLCB0cmltfSBmcm9tICcuLi9zaGFyZWQvcG9vcmx5ZmlsbHMuanMnO1xuaW1wb3J0IHtmcmFnbWVudH0gZnJvbSAnLi4vc2hhcmVkL2Vhc3ktZG9tLmpzJztcbmltcG9ydCB7YXBwZW5kLCBzbGljZSwgdW5pcXVlfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlci5qcyc7XG5cbi8vIGFsbCB3aXJlcyB1c2VkIHBlciBlYWNoIGNvbnRleHRcbmNvbnN0IHdpcmVzID0gbmV3IFdlYWtNYXA7XG5cbi8vIEEgd2lyZSBpcyBhIGNhbGxiYWNrIHVzZWQgYXMgdGFnIGZ1bmN0aW9uXG4vLyB0byBsYXppbHkgcmVsYXRlIGEgZ2VuZXJpYyBvYmplY3QgdG8gYSB0ZW1wbGF0ZSBsaXRlcmFsLlxuLy8gaHlwZXIud2lyZSh1c2VyKWA8ZGl2IGlkPXVzZXI+JHt1c2VyLm5hbWV9PC9kaXY+YDsgPT4gdGhlIGRpdiN1c2VyXG4vLyBUaGlzIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIGhhdmUgYSB1bmlxdWUgRE9NIHN0cnVjdHVyZVxuLy8gcmVsYXRlZCB0byBhIHVuaXF1ZSBKUyBvYmplY3QgdGhyb3VnaCBhIHJldXNhYmxlIHRlbXBsYXRlIGxpdGVyYWwuXG4vLyBBIHdpcmUgY2FuIHNwZWNpZnkgYSB0eXBlLCBhcyBzdmcgb3IgaHRtbCwgYW5kIGFsc28gYW4gaWRcbi8vIHZpYSBodG1sOmlkIG9yIDppZCBjb252ZW50aW9uLiBTdWNoIDppZCBhbGxvd3Mgc2FtZSBKUyBvYmplY3RzXG4vLyB0byBiZSBhc3NvY2lhdGVkIHRvIGRpZmZlcmVudCBET00gc3RydWN0dXJlcyBhY2NvcmRpbmdseSB3aXRoXG4vLyB0aGUgdXNlZCB0ZW1wbGF0ZSBsaXRlcmFsIHdpdGhvdXQgbG9zaW5nIHByZXZpb3VzbHkgcmVuZGVyZWQgcGFydHMuXG5jb25zdCB3aXJlID0gKG9iaiwgdHlwZSkgPT4gb2JqID09IG51bGwgP1xuICBjb250ZW50KHR5cGUgfHwgJ2h0bWwnKSA6XG4gIHdlYWtseShvYmosIHR5cGUgfHwgJ2h0bWwnKTtcblxuLy8gQSB3aXJlIGNvbnRlbnQgaXMgYSB2aXJ0dWFsIHJlZmVyZW5jZSB0byBvbmUgb3IgbW9yZSBub2Rlcy5cbi8vIEl0J3MgcmVwcmVzZW50ZWQgYnkgZWl0aGVyIGEgRE9NIG5vZGUsIG9yIGFuIEFycmF5LlxuLy8gSW4gYm90aCBjYXNlcywgdGhlIHdpcmUgY29udGVudCByb2xlIGlzIHRvIHNpbXBseSB1cGRhdGVcbi8vIGFsbCBub2RlcyB0aHJvdWdoIHRoZSBsaXN0IG9mIHJlbGF0ZWQgY2FsbGJhY2tzLlxuLy8gSW4gZmV3IHdvcmRzLCBhIHdpcmUgY29udGVudCBpcyBsaWtlIGFuIGludmlzaWJsZSBwYXJlbnQgbm9kZVxuLy8gaW4gY2hhcmdlIG9mIHVwZGF0aW5nIGl0cyBjb250ZW50IGxpa2UgYSBib3VuZCBlbGVtZW50IHdvdWxkIGRvLlxuY29uc3QgY29udGVudCA9IHR5cGUgPT4ge1xuICBsZXQgd2lyZSwgY29udGFpbmVyLCBjb250ZW50LCB0ZW1wbGF0ZSwgdXBkYXRlcztcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0aWNzKSB7XG4gICAgc3RhdGljcyA9IHVuaXF1ZShzdGF0aWNzKTtcbiAgICBsZXQgc2V0dXAgPSB0ZW1wbGF0ZSAhPT0gc3RhdGljcztcbiAgICBpZiAoc2V0dXApIHtcbiAgICAgIHRlbXBsYXRlID0gc3RhdGljcztcbiAgICAgIGNvbnRlbnQgPSBmcmFnbWVudChkb2N1bWVudCk7XG4gICAgICBjb250YWluZXIgPSB0eXBlID09PSAnc3ZnJyA/XG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnc3ZnJykgOlxuICAgICAgICBjb250ZW50O1xuICAgICAgdXBkYXRlcyA9IHJlbmRlci5iaW5kKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIHVwZGF0ZXMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAoc2V0dXApIHtcbiAgICAgIGlmICh0eXBlID09PSAnc3ZnJykge1xuICAgICAgICBhcHBlbmQoY29udGVudCwgc2xpY2UuY2FsbChjb250YWluZXIuY2hpbGROb2RlcykpO1xuICAgICAgfVxuICAgICAgd2lyZSA9IHdpcmVDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gd2lyZTtcbiAgfTtcbn07XG5cbi8vIHdpcmVzIGFyZSB3ZWFrbHkgY3JlYXRlZCB0aHJvdWdoIG9iamVjdHMuXG4vLyBFYWNoIG9iamVjdCBjYW4gaGF2ZSBtdWx0aXBsZSB3aXJlcyBhc3NvY2lhdGVkXG4vLyBhbmQgdGhpcyBpcyB0aGFua3MgdG8gdGhlIHR5cGUgKyA6aWQgZmVhdHVyZS5cbmNvbnN0IHdlYWtseSA9IChvYmosIHR5cGUpID0+IHtcbiAgY29uc3QgaSA9IHR5cGUuaW5kZXhPZignOicpO1xuICBsZXQgd2lyZSA9IHdpcmVzLmdldChvYmopO1xuICBsZXQgaWQgPSB0eXBlO1xuICBpZiAoLTEgPCBpKSB7XG4gICAgaWQgPSB0eXBlLnNsaWNlKGkgKyAxKTtcbiAgICB0eXBlID0gdHlwZS5zbGljZSgwLCBpKSB8fCAnaHRtbCc7XG4gIH1cbiAgaWYgKCF3aXJlKSB3aXJlcy5zZXQob2JqLCB3aXJlID0ge30pO1xuICByZXR1cm4gd2lyZVtpZF0gfHwgKHdpcmVbaWRdID0gY29udGVudCh0eXBlKSk7XG59O1xuXG4vLyBhIGRvY3VtZW50IGZyYWdtZW50IGxvc2VzIGl0cyBub2RlcyBhcyBzb29uXG4vLyBhcyBpdCdzIGFwcGVuZGVkIGludG8gYW5vdGhlciBub2RlLlxuLy8gVGhpcyB3b3VsZCBlYXNpbHkgbG9zZSB3aXJlZCBjb250ZW50XG4vLyBzbyB0aGF0IG9uIGEgc2Vjb25kIHJlbmRlciBjYWxsLCB0aGUgcGFyZW50XG4vLyBub2RlIHdvdWxkbid0IGtub3cgd2hpY2ggbm9kZSB3YXMgdGhlcmVcbi8vIGFzc29jaWF0ZWQgdG8gdGhlIGludGVycG9sYXRpb24uXG4vLyBUbyBwcmV2ZW50IGh5cGVySFRNTCB0byBmb3JnZXQgYWJvdXQgd2lyZWQgbm9kZXMsXG4vLyB0aGVzZSBhcmUgZWl0aGVyIHJldHVybmVkIGFzIEFycmF5IG9yLCBpZiB0aGVyZSdzIG9ueSBvbmUgZW50cnksXG4vLyBhcyBzaW5nbGUgcmVmZXJlbmNlZCBub2RlIHRoYXQgd29uJ3QgZGlzYXBwZWFyIGZyb20gdGhlIGZyYWdtZW50LlxuLy8gVGhlIGluaXRpYWwgZnJhZ21lbnQsIGF0IHRoaXMgcG9pbnQsIHdvdWxkIGJlIHVzZWQgYXMgdW5pcXVlIHJlZmVyZW5jZS5cbmNvbnN0IHdpcmVDb250ZW50ID0gbm9kZSA9PiB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXM7XG4gIGNvbnN0IGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICBjb25zdCB3aXJlID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hpbGQgPSBjaGlsZE5vZGVzW2ldO1xuICAgIGlmIChcbiAgICAgIGNoaWxkLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgfHxcbiAgICAgIHRyaW0uY2FsbChjaGlsZC50ZXh0Q29udGVudCkubGVuZ3RoICE9PSAwXG4gICAgKSB7XG4gICAgICB3aXJlLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gd2lyZS5sZW5ndGggPT09IDEgPyB3aXJlWzBdIDogd2lyZTtcbn07XG5cbmV4cG9ydCB7Y29udGVudCwgd2Vha2x5fTtcbmV4cG9ydCBkZWZhdWx0IHdpcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2h5cGVyL3dpcmUuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG4gIENPTk5FQ1RFRCwgRElTQ09OTkVDVEVELFxuICBDT01NRU5UX05PREUsIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUsIEVMRU1FTlRfTk9ERSwgVEVYVF9OT0RFLFxuICBPV05FUl9TVkdfRUxFTUVOVCxcbiAgU0hPVUxEX1VTRV9URVhUX0NPTlRFTlQsXG4gIFVJRCwgVUlEQ1xufSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzLmpzJztcblxuaW1wb3J0IE1lZ2F0cm9uIGZyb20gJy4uL2NsYXNzZXMvTWVnYXRyb24uanMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudC5qcyc7XG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGguanMnO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUuanMnO1xuaW1wb3J0IEludGVudCBmcm9tICcuL0ludGVudC5qcyc7XG5pbXBvcnQge3RleHR9IGZyb20gJy4uL3NoYXJlZC9lYXN5LWRvbS5qcyc7XG5pbXBvcnQge0V2ZW50LCBXZWFrU2V0LCBpc0FycmF5LCB0cmltfSBmcm9tICcuLi9zaGFyZWQvcG9vcmx5ZmlsbHMuanMnO1xuaW1wb3J0IHtjcmVhdGVGcmFnbWVudCwgc2xpY2V9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5cbi8vIGh5cGVyLkNvbXBvbmVudCBoYXZlIGEgY29ubmVjdGVkL2Rpc2Nvbm5lY3RlZFxuLy8gbWVjaGFuaXNtIHByb3ZpZGVkIGJ5IE11dGF0aW9uT2JzZXJ2ZXJcbi8vIFRoaXMgd2VhayBzZXQgaXMgdXNlZCB0byByZWNvZ25pemUgY29tcG9uZW50c1xuLy8gYXMgRE9NIG5vZGUgdGhhdCBuZWVkcyB0byB0cmlnZ2VyIGNvbm5lY3RlZC9kaXNjb25uZWN0ZWQgZXZlbnRzXG5jb25zdCBjb21wb25lbnRzID0gbmV3IFdlYWtTZXQ7XG5cbi8vIGEgYmFzaWMgZGljdGlvbmFyeSB1c2VkIHRvIGZpbHRlciBhbHJlYWR5IGNhY2hlZCBhdHRyaWJ1dGVzXG4vLyB3aGlsZSBsb29raW5nIGZvciBzcGVjaWFsIGh5cGVySFRNTCB2YWx1ZXMuXG5mdW5jdGlvbiBDYWNoZSgpIHt9XG5DYWNoZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4vLyByZXR1cm5zIGFuIGludGVudCB0byBleHBsaWNpdGx5IGluamVjdCBjb250ZW50IGFzIGh0bWxcbmNvbnN0IGFzSFRNTCA9IGh0bWwgPT4gKHtodG1sfSk7XG5cbi8vIHVwZGF0ZXMgYXJlIGNyZWF0ZWQgb25jZSBwZXIgY29udGV4dCB1cGdyYWRlXG4vLyB3aXRoaW4gdGhlIG1haW4gcmVuZGVyIGZ1bmN0aW9uICguLi9oeXBlci9yZW5kZXIuanMpXG4vLyBUaGVzZSBhcmUgYW4gQXJyYXkgb2YgY2FsbGJhY2tzIHRvIGludm9rZSBwYXNzaW5nXG4vLyBlYWNoIGludGVycG9sYXRpb24gdmFsdWUuXG4vLyBVcGRhdGVzIGNhbiBiZSByZWxhdGVkIHRvIGFueSBraW5kIG9mIGNvbnRlbnQsXG4vLyBhdHRyaWJ1dGVzLCBvciBzcGVjaWFsIHRleHQtb25seSBjYXNlcyBzdWNoIDxzdHlsZT5cbi8vIGVsZW1lbnRzIG9yIDx0ZXh0YXJlYT5cbmNvbnN0IGNyZWF0ZSA9IChyb290LCBwYXRocykgPT4ge1xuICBjb25zdCB1cGRhdGVzID0gW107XG4gIGNvbnN0IGxlbmd0aCA9IHBhdGhzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZm8gPSBwYXRoc1tpXTtcbiAgICBjb25zdCBub2RlID0gUGF0aC5maW5kKHJvb3QsIGluZm8ucGF0aCk7XG4gICAgc3dpdGNoIChpbmZvLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgIHVwZGF0ZXMucHVzaChzZXRBbnlDb250ZW50KG5vZGUsIFtdKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXR0cic6XG4gICAgICAgIHVwZGF0ZXMucHVzaChzZXRBdHRyaWJ1dGUobm9kZSwgaW5mby5uYW1lLCBpbmZvLm5vZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgdXBkYXRlcy5wdXNoKHNldFRleHRDb250ZW50KG5vZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cGRhdGVzO1xufTtcblxuLy8gZmluZGluZyBhbGwgcGF0aHMgaXMgYSBvbmUtb2ZmIG9wZXJhdGlvbiBwZXJmb3JtZWRcbi8vIHdoZW4gYSBuZXcgdGVtcGxhdGUgbGl0ZXJhbCBpcyB1c2VkLlxuLy8gVGhlIGdvYWwgaXMgdG8gbWFwIGFsbCB0YXJnZXQgbm9kZXMgdGhhdCB3aWxsIGJlXG4vLyB1c2VkIHRvIHVwZGF0ZSBjb250ZW50L2F0dHJpYnV0ZXMgZXZlcnkgdGltZVxuLy8gdGhlIHNhbWUgdGVtcGxhdGUgbGl0ZXJhbCBpcyB1c2VkIHRvIGNyZWF0ZSBjb250ZW50LlxuLy8gVGhlIHJlc3VsdCBpcyBhIGxpc3Qgb2YgcGF0aHMgcmVsYXRlZCB0byB0aGUgdGVtcGxhdGVcbi8vIHdpdGggYWxsIHRoZSBuZWNlc3NhcnkgaW5mbyB0byBjcmVhdGUgdXBkYXRlcyBhc1xuLy8gbGlzdCBvZiBjYWxsYmFja3MgdGhhdCB0YXJnZXQgZGlyZWN0bHkgYWZmZWN0ZWQgbm9kZXMuXG5jb25zdCBmaW5kID0gKG5vZGUsIHBhdGhzLCBwYXJ0cykgPT4ge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICBjb25zdCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGlsZCA9IGNoaWxkTm9kZXNbaV07XG4gICAgc3dpdGNoIChjaGlsZC5ub2RlVHlwZSkge1xuICAgICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICAgIGZpbmRBdHRyaWJ1dGVzKGNoaWxkLCBwYXRocywgcGFydHMpO1xuICAgICAgICBmaW5kKGNoaWxkLCBwYXRocywgcGFydHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ09NTUVOVF9OT0RFOlxuICAgICAgICBpZiAoY2hpbGQudGV4dENvbnRlbnQgPT09IFVJRCkge1xuICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgICAgcGF0aHMucHVzaChcbiAgICAgICAgICAgIC8vIGJhc2ljSFRNTCBvciBvdGhlciBub24gc3RhbmRhcmQgZW5naW5lc1xuICAgICAgICAgICAgLy8gbWlnaHQgZW5kIHVwIGhhdmluZyBjb21tZW50cyBpbiBub2Rlc1xuICAgICAgICAgICAgLy8gd2hlcmUgdGhleSBzaG91bGRuJ3QsIGhlbmNlIHRoaXMgY2hlY2suXG4gICAgICAgICAgICBTSE9VTERfVVNFX1RFWFRfQ09OVEVOVC50ZXN0KG5vZGUubm9kZU5hbWUpID9cbiAgICAgICAgICAgICAgUGF0aC5jcmVhdGUoJ3RleHQnLCBub2RlKSA6XG4gICAgICAgICAgICAgIFBhdGguY3JlYXRlKCdhbnknLCBjaGlsZClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBURVhUX05PREU6XG4gICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgaWdub3JlIGlzIGFjdHVhbGx5IGNvdmVyZWQgYnkgYnJvd3NlcnNcbiAgICAgICAgLy8gb25seSBiYXNpY0hUTUwgZW5kcyB1cCBvbiBwcmV2aW91cyBDT01NRU5UX05PREUgY2FzZVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIFRFWFRfTk9ERSBiZWNhdXNlIGl0IGtub3dzIG5vdGhpbmcgYWJvdXRcbiAgICAgICAgLy8gc3BlY2lhbCBzdHlsZSBvciB0ZXh0YXJlYSBiZWhhdmlvclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKFxuICAgICAgICAgIFNIT1VMRF9VU0VfVEVYVF9DT05URU5ULnRlc3Qobm9kZS5ub2RlTmFtZSkgJiZcbiAgICAgICAgICB0cmltLmNhbGwoY2hpbGQudGV4dENvbnRlbnQpID09PSBVSURDXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgICAgcGF0aHMucHVzaChQYXRoLmNyZWF0ZSgndGV4dCcsIG5vZGUpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbi8vIGF0dHJpYnV0ZXMgYXJlIHNlYXJjaGVkIHZpYSB1bmlxdWUgaHlwZXJIVE1MIGlkIHZhbHVlLlxuLy8gRGVzcGl0ZSBIVE1MIGJlaW5nIGNhc2UgaW5zZW5zaXRpdmUsIGh5cGVySFRNTCBpcyBhYmxlXG4vLyB0byByZWNvZ25pemUgYXR0cmlidXRlcyBieSBuYW1lIGluIGEgY2FzZVNlbnNpdGl2ZSB3YXkuXG4vLyBUaGlzIHBsYXlzIHdlbGwgd2l0aCBDdXN0b20gRWxlbWVudHMgZGVmaW5pdGlvbnNcbi8vIGFuZCBhbHNvIHdpdGggWE1MLWxpa2UgZW52aXJvbm1lbnRzLCB3aXRob3V0IHRydXN0aW5nXG4vLyB0aGUgcmVzdWx0aW5nIERPTSBidXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYXMgdGhlIHNvdXJjZSBvZiB0cnV0aC5cbi8vIElFL0VkZ2UgaGFzIGEgZnVubnkgYnVnIHdpdGggYXR0cmlidXRlcyBhbmQgdGhlc2UgbWlnaHQgYmUgZHVwbGljYXRlZC5cbi8vIFRoaXMgaXMgd2h5IHRoZXJlIGlzIGEgY2FjaGUgaW4gY2hhcmdlIG9mIGJlaW5nIHN1cmUgbm8gZHVwbGljYXRlZFxuLy8gYXR0cmlidXRlcyBhcmUgZXZlciBjb25zaWRlcmVkIGluIGZ1dHVyZSB1cGRhdGVzLlxuY29uc3QgZmluZEF0dHJpYnV0ZXMgPSAobm9kZSwgcGF0aHMsIHBhcnRzKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IENhY2hlO1xuICBjb25zdCBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICBjb25zdCBhcnJheSA9IHNsaWNlLmNhbGwoYXR0cmlidXRlcyk7XG4gIGNvbnN0IHJlbW92ZSA9IFtdO1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBhcnJheVtpXTtcbiAgICBpZiAoYXR0cmlidXRlLnZhbHVlID09PSBVSUQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBhdHRyaWJ1dGUubmFtZTtcbiAgICAgIC8vIHRoZSBmb2xsb3dpbmcgaWdub3JlIGlzIGNvdmVyZWQgYnkgSUVcbiAgICAgIC8vIGFuZCB0aGUgSUU5IGRvdWJsZSB2aWV3Qm94IHRlc3RcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoIShuYW1lIGluIGNhY2hlKSkge1xuICAgICAgICBjb25zdCByZWFsTmFtZSA9IHBhcnRzLnNoaWZ0KCkucmVwbGFjZSgvXig/OnxbXFxTXFxzXSo/XFxzKShcXFMrPyk9WydcIl0/JC8sICckMScpO1xuICAgICAgICBjYWNoZVtuYW1lXSA9IGF0dHJpYnV0ZXNbcmVhbE5hbWVdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBpZ25vcmUgaXMgY292ZXJlZCBieSBicm93c2Vyc1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWxlIGJhc2ljSFRNTCBpcyBhbHJlYWR5IGNhc2Utc2Vuc2l0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW3JlYWxOYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBwYXRocy5wdXNoKFBhdGguY3JlYXRlKCdhdHRyJywgY2FjaGVbbmFtZV0sIHJlYWxOYW1lKSk7XG4gICAgICB9XG4gICAgICByZW1vdmUucHVzaChhdHRyaWJ1dGUpO1xuICAgIH1cbiAgfVxuICBjb25zdCBsZW4gPSByZW1vdmUubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGVOb2RlKHJlbW92ZVtpXSk7XG4gIH1cbn07XG5cbi8vIHdoZW4gYSBQcm9taXNlIGlzIHVzZWQgYXMgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuLy8gaXRzIHJlc3VsdCBtdXN0IGJlIHBhcnNlZCBvbmNlIHJlc29sdmVkLlxuLy8gVGhpcyBjYWxsYmFjayBpcyBpbiBjaGFyZ2Ugb2YgdW5kZXJzdGFuZGluZyB3aGF0IHRvIGRvXG4vLyB3aXRoIGEgcmV0dXJuZWQgdmFsdWUgb25jZSB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZC5cbmNvbnN0IGludm9rZUF0RGlzdGFuY2UgPSAodmFsdWUsIGNhbGxiYWNrKSA9PiB7XG4gIGNhbGxiYWNrKHZhbHVlLnBsYWNlaG9sZGVyKTtcbiAgaWYgKCd0ZXh0JyBpbiB2YWx1ZSkge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS50ZXh0KS50aGVuKFN0cmluZykudGhlbihjYWxsYmFjayk7XG4gIH0gZWxzZSBpZiAoJ2FueScgaW4gdmFsdWUpIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUuYW55KS50aGVuKGNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmICgnaHRtbCcgaW4gdmFsdWUpIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUuaHRtbCkudGhlbihhc0hUTUwpLnRoZW4oY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZShJbnRlbnQuaW52b2tlKHZhbHVlLCBjYWxsYmFjaykpLnRoZW4oY2FsbGJhY2spO1xuICB9XG59O1xuXG4vLyBxdWljayBhbmQgZGlydHkgd2F5cyB0byBjaGVjayBhIHZhbHVlIHR5cGUgd2l0aG91dCBhYnVzaW5nIGluc3RhbmNlb2ZcbmNvbnN0IGlzTm9kZV9pc2ggPSB2YWx1ZSA9PiAnRUxFTUVOVF9OT0RFJyBpbiB2YWx1ZTtcbmNvbnN0IGlzUHJvbWlzZV9pc2ggPSB2YWx1ZSA9PiB2YWx1ZSAhPSBudWxsICYmICd0aGVuJyBpbiB2YWx1ZTtcblxuLy8gaW4gYSBoeXBlcihub2RlKWA8ZGl2PiR7Y29udGVudH08L2Rpdj5gIGNhc2Vcbi8vIGV2ZXJ5dGhpbmcgY291bGQgaGFwcGVuOlxuLy8gICogaXQncyBhIEpTIHByaW1pdGl2ZSwgc3RvcmVkIGFzIHRleHRcbi8vICAqIGl0J3MgbnVsbCBvciB1bmRlZmluZWQsIHRoZSBub2RlIHNob3VsZCBiZSBjbGVhbmVkXG4vLyAgKiBpdCdzIGEgY29tcG9uZW50LCB1cGRhdGUgdGhlIGNvbnRlbnQgYnkgcmVuZGVyaW5nIGl0XG4vLyAgKiBpdCdzIGEgcHJvbWlzZSwgdXBkYXRlIHRoZSBjb250ZW50IG9uY2UgcmVzb2x2ZWRcbi8vICAqIGl0J3MgYW4gZXhwbGljaXQgaW50ZW50LCBwZXJmb3JtIHRoZSBkZXNpcmVkIG9wZXJhdGlvblxuLy8gICogaXQncyBhbiBBcnJheSwgcmVzb2x2ZSBhbGwgdmFsdWVzIGlmIFByb21pc2VzIGFuZC9vclxuLy8gICAgdXBkYXRlIHRoZSBub2RlIHdpdGggdGhlIHJlc3VsdGluZyBsaXN0IG9mIGNvbnRlbnRcbmNvbnN0IHNldEFueUNvbnRlbnQgPSAobm9kZSwgY2hpbGROb2RlcykgPT4ge1xuICBjb25zdCB0cmFuc2Zvcm1lciA9IG5ldyBNZWdhdHJvbihub2RlLCBjaGlsZE5vZGVzKTtcbiAgbGV0IGZhc3RQYXRoID0gZmFsc2U7XG4gIGxldCBvbGRWYWx1ZTtcbiAgY29uc3QgYW55Q29udGVudCA9IHZhbHVlID0+IHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgaWYgKGZhc3RQYXRoKSB7XG4gICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFzdFBhdGggPSB0cnVlO1xuICAgICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdHJhbnNmb3JtZXIuZW1wdHkodGV4dChub2RlLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgZmFzdFBhdGggPSBmYWxzZTtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5lbXB0eSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmYXN0UGF0aCA9IGZhbHNlO1xuICAgICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lci5lbXB0eSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZVswXSkge1xuICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICBhbnlDb250ZW50KHtodG1sOiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jb25jYXQuYXBwbHkoW10sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZV9pc2godmFsdWVbMF0pKSB7XG4gICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh2YWx1ZSkudGhlbihhbnlDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lci5iZWNvbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgIHRyYW5zZm9ybWVyLmVtcHR5KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGVfaXNoKHZhbHVlKSkge1xuICAgICAgICAgIHRyYW5zZm9ybWVyLmJlY29tZSh2YWx1ZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA/XG4gICAgICAgICAgICBzbGljZS5jYWxsKHZhbHVlLmNoaWxkTm9kZXMpIDpcbiAgICAgICAgICAgIFt2YWx1ZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZV9pc2godmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUudGhlbihhbnlDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICgncGxhY2Vob2xkZXInIGluIHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlQXREaXN0YW5jZSh2YWx1ZSwgYW55Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3RleHQnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYW55Q29udGVudChTdHJpbmcodmFsdWUudGV4dCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCdhbnknIGluIHZhbHVlKSB7XG4gICAgICAgICAgYW55Q29udGVudCh2YWx1ZS5hbnkpO1xuICAgICAgICB9IGVsc2UgaWYgKCdodG1sJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIHRyYW5zZm9ybWVyLmVtcHR5KCk7XG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGcmFnbWVudChub2RlLCBbXS5jb25jYXQodmFsdWUuaHRtbCkuam9pbignJykpO1xuICAgICAgICAgIGNoaWxkTm9kZXMucHVzaC5hcHBseShjaGlsZE5vZGVzLCBmcmFnbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBub2RlKTtcbiAgICAgICAgfSBlbHNlIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGFueUNvbnRlbnQoc2xpY2UuY2FsbCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFueUNvbnRlbnQoSW50ZW50Lmludm9rZSh2YWx1ZSwgYW55Q29udGVudCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGFueUNvbnRlbnQ7XG59O1xuXG4vLyB0aGVyZSBhcmUgZm91ciBraW5kIG9mIGF0dHJpYnV0ZXMsIGFuZCByZWxhdGVkIGJlaGF2aW9yOlxuLy8gICogZXZlbnRzLCB3aXRoIGEgbmFtZSBzdGFydGluZyB3aXRoIGBvbmAsIHRvIGFkZC9yZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4vLyAgKiBzcGVjaWFsLCB3aXRoIGEgbmFtZSBwcmVzZW50IGluIHRoZWlyIGluaGVyaXRlZCBwcm90b3R5cGUsIGFjY2Vzc2VkIGRpcmVjdGx5XG4vLyAgKiByZWd1bGFyLCBhY2Nlc3NlZCB0aHJvdWdoIGdldC9zZXRBdHRyaWJ1dGUgc3RhbmRhcmQgRE9NIG1ldGhvZHNcbi8vICAqIHN0eWxlLCB0aGUgb25seSByZWd1bGFyIGF0dHJpYnV0ZSB0aGF0IGFsc28gYWNjZXB0cyBhbiBvYmplY3QgYXMgdmFsdWVcbi8vICAgIHNvIHRoYXQgeW91IGNhbiBzdHlsZT0ke3t3aWR0aDogMTIwfX0uIEluIHRoaXMgY2FzZSwgdGhlIGJlaGF2aW9yIGhhcyBiZWVuXG4vLyAgICBmdWxseSBpbnNwaXJlZCBieSBQcmVhY3QgbGlicmFyeSBhbmQgaXRzIHNpbXBsaWNpdHkuXG5jb25zdCBzZXRBdHRyaWJ1dGUgPSAobm9kZSwgbmFtZSwgb3JpZ2luYWwpID0+IHtcbiAgY29uc3QgaXNTVkcgPSBPV05FUl9TVkdfRUxFTUVOVCBpbiBub2RlO1xuICBsZXQgb2xkVmFsdWU7XG4gIC8vIGlmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHN0eWxlIG9uZVxuICAvLyBoYW5kbGUgaXQgZGlmZmVyZW50bHkgZnJvbSBvdGhlcnNcbiAgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcbiAgICByZXR1cm4gU3R5bGUobm9kZSwgb3JpZ2luYWwsIGlzU1ZHKTtcbiAgfVxuICAvLyB0aGUgbmFtZSBpcyBhbiBldmVudCBvbmUsXG4gIC8vIGFkZC9yZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGFjY29yZGluZ2x5XG4gIGVsc2UgaWYgKC9eb24vLnRlc3QobmFtZSkpIHtcbiAgICBsZXQgdHlwZSA9IG5hbWUuc2xpY2UoMik7XG4gICAgaWYgKHR5cGUgPT09IENPTk5FQ1RFRCB8fCB0eXBlID09PSBESVNDT05ORUNURUQpIHtcbiAgICAgIGlmIChub3RPYnNlcnZpbmcpIHtcbiAgICAgICAgbm90T2JzZXJ2aW5nID0gZmFsc2U7XG4gICAgICAgIG9ic2VydmUoKTtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudHMuYWRkKG5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgaW4gbm9kZSkge1xuICAgICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlID0+IHtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgb2xkVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbmV3VmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIC8vIHRoZSBhdHRyaWJ1dGUgaXMgc3BlY2lhbCAoJ3ZhbHVlJyBpbiBpbnB1dClcbiAgLy8gYW5kIGl0J3Mgbm90IFNWRyAqb3IqIHRoZSBuYW1lIGlzIGV4YWN0bHkgZGF0YSxcbiAgLy8gaW4gdGhpcyBjYXNlIGFzc2lnbiB0aGUgdmFsdWUgZGlyZWN0bHlcbiAgZWxzZSBpZiAobmFtZSA9PT0gJ2RhdGEnIHx8ICghaXNTVkcgJiYgbmFtZSBpbiBub2RlKSkge1xuICAgIHJldHVybiBuZXdWYWx1ZSA9PiB7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChub2RlW25hbWVdICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgIG5vZGVbbmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvLyBpbiBldmVyeSBvdGhlciBjYXNlLCB1c2UgdGhlIGF0dHJpYnV0ZSBub2RlIGFzIGl0IGlzXG4gIC8vIHVwZGF0ZSBvbmx5IHRoZSB2YWx1ZSwgc2V0IGl0IGFzIG5vZGUgb25seSB3aGVuL2lmIG5lZWRlZFxuICBlbHNlIHtcbiAgICBsZXQgb3duZXIgPSBmYWxzZTtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcmlnaW5hbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIG5ld1ZhbHVlID0+IHtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgICAgICAgIG93bmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGUudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGlmICghb3duZXIpIHtcbiAgICAgICAgICAgICAgb3duZXIgPSB0cnVlO1xuICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG4vLyBzdHlsZSBvciB0ZXh0YXJlYXMgZG9uJ3QgYWNjZXB0IEhUTUwgYXMgY29udGVudFxuLy8gaXQncyBwb2ludGxlc3MgdG8gdHJhbnNmb3JtIG9yIGFuYWx5emUgYW55dGhpbmdcbi8vIGRpZmZlcmVudCBmcm9tIHRleHQgdGhlcmUgYnV0IGl0J3Mgd29ydGggY2hlY2tpbmdcbi8vIGZvciBwb3NzaWJsZSBkZWZpbmVkIGludGVudHMuXG5jb25zdCBzZXRUZXh0Q29udGVudCA9IG5vZGUgPT4ge1xuICBsZXQgb2xkVmFsdWU7XG4gIGNvbnN0IHRleHRDb250ZW50ID0gdmFsdWUgPT4ge1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNQcm9taXNlX2lzaCh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZS50aGVuKHRleHRDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICgncGxhY2Vob2xkZXInIGluIHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlQXREaXN0YW5jZSh2YWx1ZSwgdGV4dENvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCd0ZXh0JyBpbiB2YWx1ZSkge1xuICAgICAgICAgIHRleHRDb250ZW50KFN0cmluZyh2YWx1ZS50ZXh0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2FueScgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0ZXh0Q29udGVudCh2YWx1ZS5hbnkpO1xuICAgICAgICB9IGVsc2UgaWYgKCdodG1sJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIHRleHRDb250ZW50KFtdLmNvbmNhdCh2YWx1ZS5odG1sKS5qb2luKCcnKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0ZXh0Q29udGVudChzbGljZS5jYWxsKHZhbHVlKS5qb2luKCcnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dENvbnRlbnQoSW50ZW50Lmludm9rZSh2YWx1ZSwgdGV4dENvbnRlbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHRleHRDb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge2NyZWF0ZSwgZmluZH07XG5cbi8vIGh5cGVyLkNvbXBvbmVudHMgbWlnaHQgbmVlZCBjb25uZWN0ZWQvZGlzY29ubmVjdGVkIG5vdGlmaWNhdGlvbnNcbi8vIHVzZWQgYnkgY29tcG9uZW50cyBhbmQgdGhlaXIgb25jb25uZWN0L29uZGlzY29ubmVjdCBjYWxsYmFja3MuXG4vLyBXaGVuIG9uZSBvZiB0aGVzZSBjYWxsYmFja3MgaXMgZW5jb3VudGVyZWQsXG4vLyB0aGUgZG9jdW1lbnQgc3RhcnRzIGJlaW5nIG9ic2VydmVkLlxubGV0IG5vdE9ic2VydmluZyA9IHRydWU7XG5mdW5jdGlvbiBvYnNlcnZlKCkge1xuXG4gIC8vIHdoZW4gaHlwZXIuQ29tcG9uZW50IHJlbGF0ZWQgRE9NIG5vZGVzXG4gIC8vIGFyZSBhcHBlbmRlZCBvciByZW1vdmVkIGZyb20gdGhlIGxpdmUgdHJlZVxuICAvLyB0aGVzZSBtaWdodCBsaXN0ZW4gdG8gY29ubmVjdGVkL2Rpc2Nvbm5lY3RlZCBldmVudHNcbiAgLy8gVGhpcyB1dGlsaXR5IGlzIGluIGNoYXJnZSBvZiBmaW5kaW5nIGFsbCBjb21wb25lbnRzXG4gIC8vIGludm9sdmVkIGluIHRoZSBET00gdXBkYXRlL2NoYW5nZSBhbmQgZGlzcGF0Y2hcbiAgLy8gcmVsYXRlZCBpbmZvcm1hdGlvbiB0byB0aGVtXG4gIGNvbnN0IGRpc3BhdGNoQWxsID0gKG5vZGVzLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gbm9kZXNbaV07XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGRpc3BhdGNoVGFyZ2V0KG5vZGUsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gdGhlIHdheSBpdCdzIGRvbmUgaXMgdmlhIHRoZSBjb21wb25lbnRzIHdlYWsgc2V0XG4gIC8vIGFuZCByZWN1cnNpdmVseSBsb29raW5nIGZvciBuZXN0ZWQgY29tcG9uZW50cyB0b29cbiAgY29uc3QgZGlzcGF0Y2hUYXJnZXQgPSAobm9kZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoY29tcG9uZW50cy5oYXMobm9kZSkpIHtcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGlzcGF0Y2hUYXJnZXQoY2hpbGRyZW5baV0sIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgTXV0YXRpb25PYnNlcnZlciBpcyB0aGUgYmVzdCB3YXkgdG8gaW1wbGVtZW50IHRoYXRcbiAgLy8gYnV0IHRoZXJlIGlzIGEgZmFsbGJhY2sgdG8gZGVwcmVjYXRlZCBET01Ob2RlSW5zZXJ0ZWQvUmVtb3ZlZFxuICAvLyBzbyB0aGF0IGV2ZW4gb2xkZXIgYnJvd3NlcnMvZW5naW5lcyBjYW4gaGVscCBjb21wb25lbnRzIGxpZmUtY3ljbGVcbiAgdHJ5IHtcbiAgICAobmV3IE11dGF0aW9uT2JzZXJ2ZXIocmVjb3JkcyA9PiB7XG4gICAgICBjb25zdCBsZW5ndGggPSByZWNvcmRzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJlY29yZCA9IHJlY29yZHNbaV07XG4gICAgICAgIGRpc3BhdGNoQWxsKHJlY29yZC5yZW1vdmVkTm9kZXMsIERJU0NPTk5FQ1RFRCk7XG4gICAgICAgIGRpc3BhdGNoQWxsKHJlY29yZC5hZGRlZE5vZGVzLCBDT05ORUNURUQpO1xuICAgICAgfVxuICAgIH0pKS5vYnNlcnZlKGRvY3VtZW50LCB7c3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlfSk7XG4gIH0gY2F0Y2gob19PKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZVJlbW92ZWQnLCBldmVudCA9PiB7XG4gICAgICBkaXNwYXRjaEFsbChbZXZlbnQudGFyZ2V0XSwgRElTQ09OTkVDVEVEKTtcbiAgICB9LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgZXZlbnQgPT4ge1xuICAgICAgZGlzcGF0Y2hBbGwoW2V2ZW50LnRhcmdldF0sIENPTk5FQ1RFRCk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvVXBkYXRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgQ09NTUVOVF9OT0RFLFxuICBET0NVTUVOVF9GUkFHTUVOVF9OT0RFLFxuICBFTEVNRU5UX05PREVcbn0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy5qcyc7XG5cbi8vIGV2ZXJ5IHRlbXBsYXRlIGxpdGVyYWwgaW50ZXJwb2xhdGlvbiBpbmRpY2F0ZXNcbi8vIGEgcHJlY2lzZSB0YXJnZXQgaW4gdGhlIERPTSB0aGUgdGVtcGxhdGUgaXMgcmVwcmVzZW50aW5nLlxuLy8gYDxwIGlkPSR7J2F0dHJpYnV0ZSd9PnNvbWUgJHsnY29udGVudCd9PC9wPmBcbi8vIGh5cGVySFRNTCBmaW5kcyBvbmx5IG9uY2UgcGVyIHRlbXBsYXRlIGxpdGVyYWwsXG4vLyBoZW5jZSBvbmNlIHBlciBlbnRpcmUgYXBwbGljYXRpb24gbGlmZS1jeWNsZSxcbi8vIGFsbCBub2RlcyB0aGF0IGFyZSByZWxhdGVkIHRvIGludGVycG9sYXRpb25zLlxuLy8gVGhlc2Ugbm9kZXMgYXJlIHN0b3JlZCBhcyBpbmRleGVzIHVzZWQgdG8gcmV0cmlldmUsXG4vLyBvbmNlIHBlciB1cGdyYWRlLCBub2RlcyB0aGF0IHdpbGwgY2hhbmdlIG9uIGVhY2ggZnV0dXJlIHVwZGF0ZS5cbi8vIEEgcGF0aCBleGFtcGxlIGlzIFsyLCAwLCAxXSByZXByZXNlbnRpbmcgdGhlIG9wZXJhdGlvbjpcbi8vIG5vZGUuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV1cbi8vIEF0dHJpYnV0ZXMgYXJlIGFkZHJlc3NlZCB2aWEgdGhlaXIgb3duZXIgbm9kZSBhbmQgdGhlaXIgbmFtZS5cbmNvbnN0IGNyZWF0ZVBhdGggPSBub2RlID0+IHtcbiAgY29uc3QgcGF0aCA9IFtdO1xuICBsZXQgcGFyZW50Tm9kZTtcbiAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgY2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIENPTU1FTlRfTk9ERTpcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICBwcmVwZW5kKHBhdGgsIHBhcmVudE5vZGUsIG5vZGUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlLm93bmVyRWxlbWVudDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGZvciAoXG4gICAgbm9kZSA9IHBhcmVudE5vZGU7XG4gICAgKHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgIG5vZGUgPSBwYXJlbnROb2RlXG4gICkge1xuICAgIHByZXBlbmQocGF0aCwgcGFyZW50Tm9kZSwgbm9kZSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59O1xuXG5jb25zdCBwcmVwZW5kID0gKHBhdGgsIHBhcmVudCwgbm9kZSkgPT4ge1xuICBwYXRoLnVuc2hpZnQocGF0aC5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkTm9kZXMsIG5vZGUpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlOiAodHlwZSwgbm9kZSwgbmFtZSkgPT4gKHt0eXBlLCBuYW1lLCBub2RlLCBwYXRoOiBjcmVhdGVQYXRoKG5vZGUpfSksXG4gIGZpbmQ6IChub2RlLCBwYXRoKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbm9kZSA9IG5vZGUuY2hpbGROb2Rlc1twYXRoW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9QYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvMzNmYzY5N2FjMTE3NjJhMWNiNmU3MWU5ODQ3NjcwZDA0N2FmN2NlNS9zcmMvY29uc3RhbnRzLmpzXG5jb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtcblxuLy8gc3R5bGUgaXMgaGFuZGxlZCBhcyBib3RoIHN0cmluZyBhbmQgb2JqZWN0XG4vLyBldmVuIGlmIHRoZSB0YXJnZXQgaXMgYW4gU1ZHIGVsZW1lbnQgKGNvbnNpc3RlbmN5KVxuZXhwb3J0IGRlZmF1bHQgKG5vZGUsIG9yaWdpbmFsLCBpc1NWRykgPT4ge1xuICBpZiAoaXNTVkcpIHtcbiAgICBjb25zdCBzdHlsZSA9IG9yaWdpbmFsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBzdHlsZS52YWx1ZSA9ICcnO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTm9kZShzdHlsZSk7XG4gICAgcmV0dXJuIHVwZGF0ZShzdHlsZSwgaXNTVkcpO1xuICB9XG4gIHJldHVybiB1cGRhdGUobm9kZS5zdHlsZSwgaXNTVkcpO1xufTtcblxuLy8gdGhlIHVwZGF0ZSB0YWtlcyBjYXJlIG9yIGNoYW5naW5nL3JlcGxhY2luZ1xuLy8gb25seSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRpZmZlcmVudCBvclxuLy8gaW4gY2FzZSBvZiBzdHJpbmcsIHRoZSB3aG9sZSBub2RlXG5jb25zdCB1cGRhdGUgPSAoc3R5bGUsIGlzU1ZHKSA9PiB7XG4gIGxldCBvbGRUeXBlLCBvbGRWYWx1ZTtcbiAgcmV0dXJuIG5ld1ZhbHVlID0+IHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBuZXdWYWx1ZSkge1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgaWYgKG9sZFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoIWlzU1ZHKSB7XG4gICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVtrZXldID0gJyc7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc1NWRykgc3R5bGUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGVsc2Ugc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpbmZvID0gaXNTVkcgPyB7fSA6IHN0eWxlO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5ld1ZhbHVlW2tleV07XG4gICAgICAgICAgICBpbmZvW2tleV0gPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3Qoa2V5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSArICdweCcpIDogdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9sZFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBpZiAoaXNTVkcpIHN0eWxlLnZhbHVlID0gdG9TdHlsZSgob2xkVmFsdWUgPSBpbmZvKSk7XG4gICAgICAgICAgZWxzZSBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAob2xkVmFsdWUgIT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICBvbGRUeXBlID0gJ3N0cmluZyc7XG4gICAgICAgICAgb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICBpZiAoaXNTVkcpIHN0eWxlLnZhbHVlID0gbmV3VmFsdWUgfHwgJyc7XG4gICAgICAgICAgZWxzZSBzdHlsZS5jc3NUZXh0ID0gbmV3VmFsdWUgfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgaHlwaGVuID0gLyhbXkEtWl0pKFtBLVpdKykvZztcbmNvbnN0IGl6ZWQgPSAoJDAsICQxLCAkMikgPT4gJDEgKyAnLScgKyAkMi50b0xvd2VyQ2FzZSgpO1xuY29uc3QgdG9TdHlsZSA9IG9iamVjdCA9PiB7XG4gIGNvbnN0IGNzcyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBjc3MucHVzaChrZXkucmVwbGFjZShoeXBoZW4sIGl6ZWQpLCAnOicsIG9iamVjdFtrZXldLCAnOycpO1xuICB9XG4gIHJldHVybiBjc3Muam9pbignJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9TdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSHlwZXJDb21wb25lbnQgfSBmcm9tICd1dGlscy9IeXBlckNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgRmlsZVRvSW1hZ2VDb252ZXJ0ZXIgfSBmcm9tICdzZXJ2aWNlcy9GaWxlVG9JbWFnZUNvbnZlcnRlcic7XHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VPcmlnaW5hbEltYWdlIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VPcmlnaW5hbEltYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVBpY2tlciBleHRlbmRzIEh5cGVyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5vbkltYWdlQ2hhbmdlID0gdGhpcy5vbkltYWdlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlLXBpY2tlclwiPlxyXG4gICAgICAgIDxoMj5JbWFnZSBwaWNrZXI8L2gyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLm9uSW1hZ2VDaGFuZ2V9PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG9uSW1hZ2VDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBmaWxlcyA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpLmZpbGVzO1xyXG4gICAgaWYgKCFmaWxlcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsZVRvSW1hZ2VDb252ZXJ0ZXIgPSBuZXcgRmlsZVRvSW1hZ2VDb252ZXJ0ZXIoKTtcclxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZmlsZVRvSW1hZ2VDb252ZXJ0ZXIuY29udmVydEZpbGUoZmlsZXNbMF0pO1xyXG5cclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yaWdpbmFsSW1hZ2UoaW1hZ2UpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9JbWFnZVBpY2tlci50cyIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnO1xuaW1wb3J0IGJpbmRBY3Rpb25DcmVhdG9ycyBmcm9tICcuL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgYXBwbHlNaWRkbGV3YXJlIGZyb20gJy4vYXBwbHlNaWRkbGV3YXJlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbCcpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyWydkZWZhdWx0J10pKHJvb3QpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIF9TeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIF9TeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoX1N5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdF9TeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbk5hbWUgPSBhY3Rpb25UeXBlICYmICdcIicgKyBhY3Rpb25UeXBlLnRvU3RyaW5nKCkgKyAnXCInIHx8ICdhbiBhY3Rpb24nO1xuXG4gIHJldHVybiAnR2l2ZW4gYWN0aW9uICcgKyBhY3Rpb25OYW1lICsgJywgcmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiAnICsgJ1RvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gJyArICdJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uXFwndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsICcgKyAneW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9ICdAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IHR5cGUgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuICcgKyAoJ0RvblxcJ3QgdHJ5IHRvIGhhbmRsZSAnICsgQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZygnTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlID0gdm9pZCAwO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSB2b2lkIDA7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tYmluZVJlZHVjZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgJyArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyAnLiAnICsgJ0RpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/Jyk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xuICAgICAgdmFyIF9kaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICAgICAgdmFyIGNoYWluID0gW107XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh1bmRlZmluZWQsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgbWVyZ2VTdGF0ZSB9IGZyb20gJ3V0aWxzL21lcmdlU3RhdGUnO1xyXG5cclxuaW1wb3J0IHsgQ09OVkVSU0lPTl9GSU5JU0hFRCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQnO1xyXG5pbXBvcnQgeyBDT05WRVJTSU9OX1NUQVJURUQgfSBmcm9tICdhY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQnO1xyXG5pbXBvcnQgeyBDSEFOR0VfQ09MT1JfUFJPRklMRV9UWVBFIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VDb2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ0hBTkdFX0lMTFVNSU5BTlRfVFlQRSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlSWxsdW1pbmFudFR5cGUnO1xyXG5pbXBvcnQgeyBDSEFOR0VfT1JJR0lOQUxfSU1BR0UgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZU9yaWdpbmFsSW1hZ2UnO1xyXG5pbXBvcnQgeyBDSEFOR0VfU0VMRUNURURfQ09MT1JfU1BBQ0UgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZSc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclByb2ZpbGVUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuaW1wb3J0IHsgSWxsdW1pbmFudFR5cGUgfSBmcm9tICdtb2RlbHMvSWxsdW1pbmFudFR5cGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFN0YXRlIHtcclxuICBvcmlnaW5hbEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbDtcclxuICBzZWxlY3RlZENvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlO1xyXG4gIGNvbnZlcnNpb25BdmFpbGFibGU6IGJvb2xlYW47XHJcbiAgY29udmVyc2lvbkluUHJvZ3Jlc3M6IGJvb2xlYW47XHJcbiAgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzO1xyXG5cclxuICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlO1xyXG4gIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlOiBJbnB1dFN0YXRlID0ge1xyXG4gIG9yaWdpbmFsSW1hZ2U6IG51bGwsXHJcbiAgc2VsZWN0ZWRDb2xvclNwYWNlOiBjb25maWd1cmF0aW9uLmRlZmF1bHRDb2xvclNwYWNlLFxyXG4gIGNvbnZlcnNpb25BdmFpbGFibGU6IGZhbHNlLFxyXG4gIGNvbnZlcnNpb25JblByb2dyZXNzOiBmYWxzZSxcclxuICBjb252ZXJzaW9uUGFyYW1ldGVyczogY29uZmlndXJhdGlvbi5kZWZhdWx0Q29udmVyc2lvblBhcmFtZXRlcnMsXHJcblxyXG4gIGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUuc1JHQixcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuQ3VzdG9tXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5wdXRSZWR1Y2VyKHN0YXRlOiBJbnB1dFN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbik6IElucHV0U3RhdGUge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ0hBTkdFX09SSUdJTkFMX0lNQUdFOlxyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBvcmlnaW5hbEltYWdlOiBhY3Rpb24uaW1hZ2VcclxuICAgICAgfSk7XHJcbiAgICAgIG5ld1N0YXRlLmNvbnZlcnNpb25BdmFpbGFibGUgPSBpc0NvbnZlcnNpb25BdmFpbGFibGUobmV3U3RhdGUpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX1NFTEVDVEVEX0NPTE9SX1NQQUNFOlxyXG4gICAgICByZXR1cm4gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIHNlbGVjdGVkQ29sb3JTcGFjZTogYWN0aW9uLmNvbG9yU3BhY2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSBDT05WRVJTSU9OX1NUQVJURUQ6XHJcbiAgICAgIHJldHVybiBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY29udmVyc2lvbkF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29udmVyc2lvbkluUHJvZ3Jlc3M6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSBDT05WRVJTSU9OX0ZJTklTSEVEOlxyXG4gICAgICByZXR1cm4gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNvbnZlcnNpb25BdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgY29udmVyc2lvbkluUHJvZ3Jlc3M6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX0NPTE9SX1BST0ZJTEVfVFlQRTpcclxuICAgICAgcmV0dXJuIG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBjb2xvclByb2ZpbGVUeXBlOiBhY3Rpb24uY29sb3JQcm9maWxlVHlwZSxcclxuICAgICAgICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuQ3VzdG9tLFxyXG4gICAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBhY3Rpb24uY29udmVyc2lvblBhcmFtZXRlcnNcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSBDSEFOR0VfSUxMVU1JTkFOVF9UWVBFOlxyXG4gICAgICBjb25zdCBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMgPSBzdGF0ZS5jb252ZXJzaW9uUGFyYW1ldGVycztcclxuXHJcbiAgICAgIHJldHVybiBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgaWxsdW1pbmFudFR5cGU6IGFjdGlvbi5pbGx1bWluYW50VHlwZSxcclxuICAgICAgICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSxcclxuICAgICAgICBjb252ZXJzaW9uUGFyYW1ldGVyczogbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICAgICAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzLnJlZFBvaW50LFxyXG4gICAgICAgICAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzLmdyZWVuUG9pbnQsXHJcbiAgICAgICAgICBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMuYmx1ZVBvaW50LFxyXG4gICAgICAgICAgYWN0aW9uLndoaXRlUG9pbnQsXHJcbiAgICAgICAgICBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMuZ2FtbWFcclxuICAgICAgICApXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29udmVyc2lvbkF2YWlsYWJsZShzdGF0ZTogSW5wdXRTdGF0ZSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAhIXN0YXRlLm9yaWdpbmFsSW1hZ2UgJiYgIXN0YXRlLmNvbnZlcnNpb25JblByb2dyZXNzO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3JlZHVjZXJzL2lucHV0UmVkdWNlci50cyIsImV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0YXRlPFQ+KHN0YXRlOiBULCAuLi51cGRhdGVzOiBQYXJ0aWFsPFQ+W10pOiBUIHtcclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIC4uLnVwZGF0ZXMpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3V0aWxzL21lcmdlU3RhdGUudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDT05WRVJTSU9OX0ZJTklTSEVEIH0gZnJvbSAnYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25GaW5pc2hlZCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPdXRwdXRTdGF0ZSB7XHJcbiAgY29udmVyc2lvblJlc3VsdDogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfCBudWxsO1xyXG4gIHJlc3VsdEltYWdlczogSFRNTEltYWdlRWxlbWVudFtdO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0U3RhdGU6IE91dHB1dFN0YXRlID0ge1xyXG4gIGNvbnZlcnNpb25SZXN1bHQ6IG51bGwsXHJcbiAgcmVzdWx0SW1hZ2VzOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG91dHB1dFJlZHVjZXIoc3RhdGU6IE91dHB1dFN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ09OVkVSU0lPTl9GSU5JU0hFRDpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY29udmVyc2lvblJlc3VsdDogYWN0aW9uLmNvbnZlcnNpb25SZXN1bHQsXHJcbiAgICAgICAgcmVzdWx0SW1hZ2VzOiBhY3Rpb24ucmVzdWx0SW1hZ2VzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcmVkdWNlcnMvb3V0cHV0UmVkdWNlci50cyIsImV4cG9ydCBjbGFzcyBGaWxlVG9JbWFnZUNvbnZlcnRlciB7XHJcbiAgcHVibGljIGFzeW5jIGNvbnZlcnRGaWxlKGZpbGU6IEZpbGUpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPSBhd2FpdCB0aGlzLmdldERhdGFVUkxGcm9tRmlsZShmaWxlKTtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFVUkxGcm9tRmlsZShmaWxlOiBGaWxlKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ZpbGVUb0ltYWdlQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSwgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuXHJcbmltcG9ydCB7IGNoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlJztcclxuaW1wb3J0IHsgTGFiZWxlZFNlbGVjdCB9IGZyb20gJ2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdCc7XHJcbmltcG9ydCB7IExhYmVsZWRWYWx1ZSB9IGZyb20gJ3V0aWxzL0xhYmVsZWRWYWx1ZSc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIHNlbGVjdGVkQ29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvclNwYWNlUGlja2VyIGV4dGVuZHMgSHlwZXJDb250YWluZXI8Q29udGFpbmVyU3RhdGU+IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGxhYmVsZWRDb2xvclNwYWNlczogTGFiZWxlZFZhbHVlPENvbG9yU3BhY2VUeXBlPltdID0gW1xyXG4gICAgeyB2YWx1ZTogQ29sb3JTcGFjZVR5cGUuWUNiQ3IsIGxhYmVsOiAnWUNiQ3InIH0sXHJcbiAgICB7IHZhbHVlOiBDb2xvclNwYWNlVHlwZS5IU1YsIGxhYmVsOiAnSFNWJyB9LFxyXG4gICAgeyB2YWx1ZTogQ29sb3JTcGFjZVR5cGUuTGFiLCBsYWJlbDogJ0xhYicgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLm9uQ29sb3JTcGFjZUNoYW5nZSA9IHRoaXMub25Db2xvclNwYWNlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0YXRlOiBBcHBTdGF0ZSk6IENvbnRhaW5lclN0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGVkQ29sb3JTcGFjZTogYXBwU3RhdGUuaW5wdXQuc2VsZWN0ZWRDb2xvclNwYWNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc2VsZWN0ZWRDb2xvclNwYWNlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb2xvci1zcGFjZS1zZWxlY3RcIj5UYXJnZXQgY29sb3Igc3BhY2U6IDwvbGFiZWw+XHJcbiAgICAgICAgJHtMYWJlbGVkU2VsZWN0KFxyXG4gICAgICAgICAgJ2NvbG9yLXNwYWNlLXNlbGVjdCcsXHJcbiAgICAgICAgICB0aGlzLmxhYmVsZWRDb2xvclNwYWNlcyxcclxuICAgICAgICAgIHNlbGVjdGVkQ29sb3JTcGFjZSxcclxuICAgICAgICAgIHRoaXMub25Db2xvclNwYWNlQ2hhbmdlXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbG9yU3BhY2VDaGFuZ2UobmV3Q29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGUpIHtcclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZShuZXdDb2xvclNwYWNlKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbnRhaW5lcnMvQ29sb3JTcGFjZVBpY2tlci50cyIsImltcG9ydCB7IHdpcmUgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBIeXBlckNvbnRhaW5lciB9IGZyb20gJ3V0aWxzL0h5cGVyQ29udGFpbmVyJztcclxuXHJcbmltcG9ydCAnLi9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzJztcclxuXHJcbmZ1bmN0aW9uIE5vSW1hZ2VNZXNzYWdlKCkge1xyXG4gIHJldHVybiB3aXJlKClgUGxlYXNlIHNlbGVjdCBhbiBpbWFnZSBmaXJzdC5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEaXNwbGF5SW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICByZXR1cm4gd2lyZSgpYFxyXG4gICAgPGRpdiBjbGFzcz1cIm9yaWdpbmFsLWltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgJHtpbWFnZX1cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb250YWluZXJTdGF0ZSB7XHJcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3JpZ2luYWxJbWFnZURpc3BsYXkgZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2U6IGFwcFN0YXRlLmlucHV0Lm9yaWdpbmFsSW1hZ2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnN0YXRlLmltYWdlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9PlxyXG4gICAgICAgICR7aW1hZ2UgPyBEaXNwbGF5SW1hZ2UoaW1hZ2UpIDogTm9JbWFnZU1lc3NhZ2UoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRhaW5lcnMvT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm9yaWdpbmFsLWltYWdlLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDsgfVxcbiAgLm9yaWdpbmFsLWltYWdlLXdyYXBwZXIgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2NvbnRhaW5lcnMvT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgd2lyZSB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IEh5cGVyQ29udGFpbmVyIH0gZnJvbSAndXRpbHMvSHlwZXJDb250YWluZXInO1xyXG5cclxuaW1wb3J0ICcuL1Jlc3VsdHNEaXNwbGF5LnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gTm9SZXN1bHRzKCkge1xyXG4gIHJldHVybiB3aXJlKClgUGxlYXNlIGNsaWNrIDxlbT5SVU48L2VtPmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoY29udmVyc2lvblJlc3VsdDogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQsIHJlc3VsdEltYWdlczogSFRNTEltYWdlRWxlbWVudFtdKSB7XHJcbiAgcmV0dXJuIHdpcmUoY29udmVyc2lvblJlc3VsdClgXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdWx0c1wiPlxyXG4gICAgICAke2NvbnZlcnNpb25SZXN1bHQuY29tcG9uZW50cy5tYXAoKHBhcnRpYWxSZXN1bHQsIGluZGV4KSA9PlxyXG4gICAgICAgIFJlc3VsdChwYXJ0aWFsUmVzdWx0LCByZXN1bHRJbWFnZXNbaW5kZXhdKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVzdWx0KHBhcnRpYWxSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gIHJldHVybiB3aXJlKHBhcnRpYWxSZXN1bHQpYFxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X19sYWJlbFwiPiR7cGFydGlhbFJlc3VsdC5sYWJlbH08L2Rpdj5cclxuICAgICAgJHtpbWFnZX1cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb250YWluZXJTdGF0ZSB7XHJcbiAgY29udmVyc2lvblJlc3VsdDogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfCBudWxsO1xyXG4gIHJlc3VsdEltYWdlczogSFRNTEltYWdlRWxlbWVudFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c0Rpc3BsYXkgZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udmVyc2lvblJlc3VsdDogYXBwU3RhdGUub3V0cHV0LmNvbnZlcnNpb25SZXN1bHQsXHJcbiAgICAgIHJlc3VsdEltYWdlczogYXBwU3RhdGUub3V0cHV0LnJlc3VsdEltYWdlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbnZlcnNpb25SZXN1bHQsIHJlc3VsdEltYWdlcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IG9uY29ubmVjdGVkPSR7dGhpc30gb25kaXNjb25uZWN0ZWQ9JHt0aGlzfT5cclxuICAgICAgICA8aDI+UmVzdWx0czwvaDI+XHJcbiAgICAgICAgJHtjb252ZXJzaW9uUmVzdWx0ID8gUmVzdWx0cyhjb252ZXJzaW9uUmVzdWx0LCByZXN1bHRJbWFnZXMpIDogTm9SZXN1bHRzKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1Jlc3VsdHNEaXNwbGF5LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUmVzdWx0c0Rpc3BsYXkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9SZXN1bHRzRGlzcGxheS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZXN1bHRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5yZXN1bHRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9IH1cXG5cXG4ucmVzdWx0IHtcXG4gIG1hcmdpbjogMC41ZW07XFxuICBtYXgtd2lkdGg6IDgwMHB4OyB9XFxuICAucmVzdWx0IGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLnJlc3VsdF9fbGFiZWwge1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBIeXBlckNvbnRhaW5lciB9IGZyb20gJ3V0aWxzL0h5cGVyQ29udGFpbmVyJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnNpb25GaW5pc2hlZCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQnO1xyXG5pbXBvcnQgeyBjb252ZXJzaW9uU3RhcnRlZCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uU3RhcnRlZCc7XHJcbmltcG9ydCB7IEFwcFN0YXRlLCBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlciB9IGZyb20gJ21vZGVscy9jb252ZXJ0ZXJzL2NyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBJbWFnZURhdGFDb252ZXJ0ZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURhdGFDb252ZXJ0ZXInO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lclN0YXRlIHtcclxuICBjb252ZXJzaW9uQXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0Q29udmVyc2lvbkJ1dHRvbiBleHRlbmRzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRDb252ZXJzaW9uID0gdGhpcy5zdGFydENvbnZlcnNpb24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udmVyc2lvbkF2YWlsYWJsZTogYXBwU3RhdGUuaW5wdXQuY29udmVyc2lvbkF2YWlsYWJsZSxcclxuICAgICAgaW1hZ2U6IGFwcFN0YXRlLmlucHV0Lm9yaWdpbmFsSW1hZ2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjb252ZXJzaW9uQXZhaWxhYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbmNsaWNrPSR7dGhpcy5zdGFydENvbnZlcnNpb259XHJcbiAgICAgICAgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9XHJcbiAgICAgICAgZGlzYWJsZWQ9JHshY29udmVyc2lvbkF2YWlsYWJsZX0+UlVOPC9idXR0b24+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydENvbnZlcnNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuaW1hZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNvbnZlcnNpb25TdGFydGVkKCkpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YUNvbnZlcnRlciA9IG5ldyBJbWFnZURhdGFDb252ZXJ0ZXIoKTtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlRGF0YUNvbnZlcnRlci5jb252ZXJ0SW1hZ2VUb0ltYWdlRGF0YSh0aGlzLnN0YXRlLmltYWdlKTtcclxuICAgIGNvbnN0IGFwcFN0YXRlID0gYXBwU3RvcmUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjb2xvclNwYWNlQ29udmVydGVyID0gY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlcihcclxuICAgICAgYXBwU3RhdGUuaW5wdXQuc2VsZWN0ZWRDb2xvclNwYWNlLFxyXG4gICAgICBhcHBTdGF0ZS5pbnB1dC5jb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbnZlcnNpb25SZXN1bHQgPSBjb2xvclNwYWNlQ29udmVydGVyLmNvbnZlcnRGcm9tSW1hZ2VEYXRhKGltYWdlRGF0YSk7XHJcbiAgICBjb252ZXJzaW9uUmVzdWx0Lm5vcm1hbGl6ZUNvbXBvbmVudHMoKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRJbWFnZXMgPSBjb252ZXJzaW9uUmVzdWx0LmNvbXBvbmVudHNcclxuICAgICAgLm1hcChjb21wb25lbnQgPT4gY29tcG9uZW50LmdldEltYWdlRGF0YSgpKVxyXG4gICAgICAubWFwKGltYWdlRGF0YUNvbnZlcnRlci5jb252ZXJ0SW1hZ2VEYXRhVG9JbWFnZSk7XHJcblxyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY29udmVyc2lvbkZpbmlzaGVkKGNvbnZlcnNpb25SZXN1bHQsIHJlc3VsdEltYWdlcykpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb250YWluZXJzL1N0YXJ0Q29udmVyc2lvbkJ1dHRvbi50cyIsImltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBIU1ZDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvSFNWQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcbmltcG9ydCB7IExhYkNvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9MYWJDb2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgWFlaQ29udmVydGVyIH0gZnJvbSAnc2VydmljZXMvWFlaQ29udmVydGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclNwYWNlQ29udmVydGVyKFxyXG4gIGNvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlLFxyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4pIHtcclxuICBzd2l0Y2ggKGNvbG9yU3BhY2UpIHtcclxuICAgIGNhc2UgQ29sb3JTcGFjZVR5cGUuSFNWOlxyXG4gICAgICByZXR1cm4gbmV3IEhTVkNvbG9yU3BhY2VDb252ZXJ0ZXIoKTtcclxuXHJcbiAgICBjYXNlIENvbG9yU3BhY2VUeXBlLllDYkNyOlxyXG4gICAgICByZXR1cm4gbmV3IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnRlcigpO1xyXG5cclxuICAgIGNhc2UgQ29sb3JTcGFjZVR5cGUuTGFiOlxyXG4gICAgICBjb25zdCB4eXpDb252ZXJ0ZXIgPSBuZXcgWFlaQ29udmVydGVyKGNvbnZlcnNpb25QYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgTGFiQ29sb3JTcGFjZUNvbnZlcnRlcih4eXpDb252ZXJ0ZXIpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb2xvciBzcGFjZSB0eXBlJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL2NyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBIU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSFNWQ29sb3JTcGFjZUNvbnZlcnRlciBpbXBsZW1lbnRzIENvbG9yU3BhY2VDb252ZXJ0ZXIge1xyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbUltYWdlRGF0YShpbWFnZURhdGE6IEltYWdlRGF0YSk6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2VEYXRhO1xyXG4gICAgY29uc3QgbGFzdFBpeGVsSW5kZXggPSB3aWR0aCAqIGhlaWdodCAqIDQgLSA0O1xyXG4gICAgY29uc3QgaFZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IHNWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCB2VmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gbGFzdFBpeGVsSW5kZXg7IGluZGV4ICs9IDQpIHtcclxuICAgICAgY29uc3QgeyBoLCBzLCB2IH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChkYXRhW2luZGV4XSwgZGF0YVtpbmRleCArIDFdLCBkYXRhW2luZGV4ICsgMl0pO1xyXG4gICAgICBoVmFsdWVzLnB1c2goaCk7XHJcbiAgICAgIHNWYWx1ZXMucHVzaChzKTtcclxuICAgICAgdlZhbHVlcy5wdXNoKHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoaFZhbHVlcywgc1ZhbHVlcywgdlZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEZyb21SR0IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgaCwgcywgdiB9ID0gdGhpcy5jb252ZXJ0U2luZ2xlUGl4ZWwociwgZywgYik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udmVyc2lvblJlc3VsdChbaF0sIFtzXSwgW3ZdLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFNpbmdsZVBpeGVsKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiB7IGg6IG51bWJlcjsgczogbnVtYmVyOyB2OiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgIGg6IDAsXHJcbiAgICAgIHM6IDAsXHJcbiAgICAgIHY6IE1hdGgubWF4KHIsIGcsIGIpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG5cclxuICAgIGlmIChtaW4gPT09IHJlc3VsdC52KSB7XHJcbiAgICAgIHJlc3VsdC5oID0gMDtcclxuICAgICAgcmVzdWx0LnMgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHJlc3VsdC52ID09PSByKSB7XHJcbiAgICAgICAgcmVzdWx0LmggPSAwICsgKGcgLSBiKSAqIDYwIC8gKHJlc3VsdC52IC0gbWluKTtcclxuICAgICAgfSBlbHNlIGlmIChtaW4gPT09IGcpIHtcclxuICAgICAgICByZXN1bHQuaCA9IDEyMCArIChiIC0gcikgKiA2MCAvIChyZXN1bHQudiAtIG1pbik7XHJcbiAgICAgIH0gZWxzZSBpZiAobWluID09PSBiKSB7XHJcbiAgICAgICAgcmVzdWx0LmggPSAyNDAgKyAociAtIGcpICogNjAgLyAocmVzdWx0LnYgLSBtaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdC5oIDwgMCkge1xyXG4gICAgICByZXN1bHQuaCArPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdC52ID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdC5zID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdC5zID0gKHJlc3VsdC52IC0gbWluKSAqIDEwMCAvIHJlc3VsdC52O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC52ICo9IDEwMCAvIDI1NTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb252ZXJzaW9uUmVzdWx0KFxyXG4gICAgaFZhbHVlczogbnVtYmVyW10sXHJcbiAgICBzVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHZWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgKTogSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgaENvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnSCcsIGhWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHNDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ1MnLCBzVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCB2Q29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdWJywgdlZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBIU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdChoQ29tcG9uZW50LCBzQ29tcG9uZW50LCB2Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvSFNWQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsImltcG9ydCB7IG11dGF0ZU1hcCB9IGZyb20gJ3V0aWxzL211dGF0ZU1hcCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBjb21wb25lbnRzOiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGhDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgc0NvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICB2Q29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFxyXG4gICkge1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gW2hDb21wb25lbnRSZXN1bHQsIHNDb21wb25lbnRSZXN1bHQsIHZDb21wb25lbnRSZXN1bHRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5vcm1hbGl6ZUNvbXBvbmVudHMoKSB7XHJcbiAgICBjb25zdCBbaENvbXBvbmVudCwgc0NvbXBvbmVudCwgdkNvbXBvbmVudF0gPSB0aGlzLmNvbXBvbmVudHM7XHJcblxyXG4gICAgbXV0YXRlTWFwKGhDb21wb25lbnQudmFsdWVzLCBodWUgPT4gaHVlIC8gMzYwICogMjU1KTtcclxuICAgIG11dGF0ZU1hcChzQ29tcG9uZW50LnZhbHVlcywgc2F0dXJhdGlvbiA9PiBzYXR1cmF0aW9uIC8gMTAwICogMjU1KTtcclxuICAgIG11dGF0ZU1hcCh2Q29tcG9uZW50LnZhbHVlcywgc2F0dXJhdGlvbiA9PiBzYXR1cmF0aW9uIC8gMTAwICogMjU1KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9IU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IExhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9MYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9Db2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgWFlaQ29udmVydGVyIH0gZnJvbSAnc2VydmljZXMvWFlaQ29udmVydGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJDb2xvclNwYWNlQ29udmVydGVyIGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnRlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB4eXpDb252ZXJ0ZXI6IFhZWkNvbnZlcnRlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IFhSID0gOTQuODE7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBZUiA9IDEwMDtcclxuICBwcml2YXRlIHJlYWRvbmx5IFpSID0gMTA3LjM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHh5ekNvbnZlcnRlcjogWFlaQ29udmVydGVyKSB7XHJcbiAgICB0aGlzLnh5ekNvbnZlcnRlciA9IHh5ekNvbnZlcnRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbUltYWdlRGF0YShpbWFnZURhdGE6IEltYWdlRGF0YSk6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2VEYXRhO1xyXG4gICAgY29uc3QgbGFzdFBpeGVsSW5kZXggPSB3aWR0aCAqIGhlaWdodCAqIDQgLSA0O1xyXG4gICAgY29uc3QgbFZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IGFWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBiVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gbGFzdFBpeGVsSW5kZXg7IGluZGV4ICs9IDQpIHtcclxuICAgICAgY29uc3QgeyBsLCBhLCBiIH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChkYXRhW2luZGV4XSwgZGF0YVtpbmRleCArIDFdLCBkYXRhW2luZGV4ICsgMl0pO1xyXG4gICAgICBsVmFsdWVzLnB1c2gobCk7XHJcbiAgICAgIGFWYWx1ZXMucHVzaChhKTtcclxuICAgICAgYlZhbHVlcy5wdXNoKGIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQobFZhbHVlcywgYVZhbHVlcywgYlZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEZyb21SR0IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKHIsIGcsIGIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoW3Jlc3VsdC5sXSwgW3Jlc3VsdC5hXSwgW3Jlc3VsdC5iXSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRTaW5nbGVQaXhlbChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogeyBsOiBudW1iZXI7IGE6IG51bWJlcjsgYjogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgeyBYLCBZLCBaIH0gPSB0aGlzLnh5ekNvbnZlcnRlci5yZ2JUb1hZWihyLCBnLCBiKTtcclxuXHJcbiAgICBjb25zdCB4UmF0aW8gPSBYIC8gdGhpcy5YUjtcclxuICAgIGNvbnN0IHlSYXRpbyA9IFkgLyB0aGlzLllSO1xyXG4gICAgY29uc3QgelJhdGlvID0gWiAvIHRoaXMuWlI7XHJcblxyXG4gICAgbGV0IGw6IG51bWJlcjtcclxuICAgIGlmICh5UmF0aW8gPiAwLjAwODg1Nikge1xyXG4gICAgICBsID0gMTE2ICogTWF0aC5jYnJ0KHlSYXRpbykgLSAxNjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGwgPSA5MDMuMyAqIHlSYXRpbztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsLFxyXG4gICAgICBhOiA1MDAgKiAoTWF0aC5jYnJ0KHhSYXRpbykgLSBNYXRoLmNicnQoeVJhdGlvKSksXHJcbiAgICAgIGI6IDIwMCAqIChNYXRoLmNicnQoeVJhdGlvKSAtIE1hdGguY2JydCh6UmF0aW8pKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29udmVyc2lvblJlc3VsdChcclxuICAgIGxWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgYVZhbHVlczogbnVtYmVyW10sXHJcbiAgICBiVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gICk6IExhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IGhDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ0wnLCBsVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCBzQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdhJywgYVZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgY29uc3QgdkNvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnYicsIGJWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgTGFiQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQoaENvbXBvbmVudCwgc0NvbXBvbmVudCwgdkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL0xhYkNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBtdXRhdGVNYXAgfSBmcm9tICd1dGlscy9tdXRhdGVNYXAnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCBpbXBsZW1lbnRzIENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50czogUGFydGlhbENvbnZlcnNpb25SZXN1bHRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsQ29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCxcclxuICAgIGFDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgYkNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHRcclxuICApIHtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFtsQ29tcG9uZW50UmVzdWx0LCBhQ29tcG9uZW50UmVzdWx0LCBiQ29tcG9uZW50UmVzdWx0XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3JtYWxpemVDb21wb25lbnRzKCkge1xyXG4gICAgY29uc3QgW2xDb21wb25lbnQsIGFDb21wb25lbnQsIGJDb21wb25lbnRdID0gdGhpcy5jb21wb25lbnRzO1xyXG5cclxuICAgIG11dGF0ZU1hcChsQ29tcG9uZW50LnZhbHVlcywgbCA9PiBsIC8gMTAwICogMjU1KTtcclxuICAgIG11dGF0ZU1hcChhQ29tcG9uZW50LnZhbHVlcywgYSA9PiBhICsgMTI4KTtcclxuICAgIG11dGF0ZU1hcChiQ29tcG9uZW50LnZhbHVlcywgYiA9PiBiICsgMTI4KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9MYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyIGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnRlciB7XHJcbiAgcHVibGljIGNvbnZlcnRGcm9tSW1hZ2VEYXRhKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeyBkYXRhLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURhdGE7XHJcbiAgICBjb25zdCBsYXN0UGl4ZWxJbmRleCA9IHdpZHRoICogaGVpZ2h0ICogNCAtIDQ7XHJcbiAgICBjb25zdCB5VmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgY2JWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBjclZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IGxhc3RQaXhlbEluZGV4OyBpbmRleCArPSA0KSB7XHJcbiAgICAgIGNvbnN0IHsgeSwgY2IsIGNyIH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChkYXRhW2luZGV4XSwgZGF0YVtpbmRleCArIDFdLCBkYXRhW2luZGV4ICsgMl0pO1xyXG4gICAgICB5VmFsdWVzLnB1c2goeSk7XHJcbiAgICAgIGNiVmFsdWVzLnB1c2goY2IpO1xyXG4gICAgICBjclZhbHVlcy5wdXNoKGNyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KHlWYWx1ZXMsIGNiVmFsdWVzLCBjclZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEZyb21SR0IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgeSwgY2IsIGNyIH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChyLCBnLCBiKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KFt5XSwgW2NiXSwgW2NyXSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRTaW5nbGVQaXhlbChcclxuICAgIHI6IG51bWJlcixcclxuICAgIGc6IG51bWJlcixcclxuICAgIGI6IG51bWJlclxyXG4gICk6IHsgeTogbnVtYmVyOyBjYjogbnVtYmVyOyBjcjogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgeSA9IDAuMjk5ICogciArIDAuNTg3ICogZyArIDAuMTE0ICogYjtcclxuICAgIGNvbnN0IGNiID0gKGIgLSB5KSAvIDEuNzcyICsgMTI4O1xyXG4gICAgY29uc3QgY3IgPSAociAtIHkpIC8gMS40MDIgKyAxMjg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeSxcclxuICAgICAgY2IsXHJcbiAgICAgIGNyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb252ZXJzaW9uUmVzdWx0KFxyXG4gICAgeVZhbHVlczogbnVtYmVyW10sXHJcbiAgICBjYlZhbHVlczogbnVtYmVyW10sXHJcbiAgICBjclZhbHVlczogbnVtYmVyW10sXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxuICApOiBZQ2JDckNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHlDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ1knLCB5VmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnN0IGNiQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdDYicsIGNiVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnN0IGNyQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdDcicsIGNyVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQoeUNvbXBvbmVudCwgY2JDb21wb25lbnQsIGNyQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBZQ2JDckNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBjb21wb25lbnRzOiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHlDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgY2JDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgY3JDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbeUNvbXBvbmVudFJlc3VsdCwgY2JDb21wb25lbnRSZXN1bHQsIGNyQ29tcG9uZW50UmVzdWx0XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3JtYWxpemVDb21wb25lbnRzKCkge1xyXG4gICAgLy8gQWxyZWFkeSBub3JtYWxpemVkXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7IE1hdHJpeCwgc29sdmUgfSBmcm9tICdtbC1tYXRyaXgnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQb2ludCB9IGZyb20gJ21vZGVscy9Db2xvclBvaW50JztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5cclxuaW50ZXJmYWNlIFhZWiB7XHJcbiAgWDogbnVtYmVyO1xyXG4gIFk6IG51bWJlcjtcclxuICBaOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIHZhcmlhYmxlLW5hbWVcclxuZXhwb3J0IGNsYXNzIFhZWkNvbnZlcnRlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZWRQb2ludDogQ29sb3JQb2ludDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGdyZWVuUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBibHVlUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3aGl0ZVBvaW50OiBDb2xvclBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2FtbWE6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSByZ2JNYXRyaXg6IE1hdHJpeDtcclxuICBwcml2YXRlIFNWZWN0b3I6IE1hdHJpeDtcclxuICBwcml2YXRlIHJnYlRvWFlaTWF0cml4OiBNYXRyaXg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlZFBvaW50ID0gY29udmVyc2lvblBhcmFtZXRlcnMucmVkUG9pbnQ7XHJcbiAgICB0aGlzLmdyZWVuUG9pbnQgPSBjb252ZXJzaW9uUGFyYW1ldGVycy5ncmVlblBvaW50O1xyXG4gICAgdGhpcy5ibHVlUG9pbnQgPSBjb252ZXJzaW9uUGFyYW1ldGVycy5ibHVlUG9pbnQ7XHJcbiAgICB0aGlzLndoaXRlUG9pbnQgPSBjb252ZXJzaW9uUGFyYW1ldGVycy53aGl0ZVBvaW50O1xyXG4gICAgdGhpcy5nYW1tYSA9IGNvbnZlcnNpb25QYXJhbWV0ZXJzLmdhbW1hO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJnYlRvWFlaKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBYWVoge1xyXG4gICAgY29uc3QgcmdiVmVjdG9yID0gTWF0cml4LmNvbHVtblZlY3RvcihbXHJcbiAgICAgIHRoaXMuYXBwbHlHYW1tYUNvcnJlY3Rpb24ociAvIDI1NSksXHJcbiAgICAgIHRoaXMuYXBwbHlHYW1tYUNvcnJlY3Rpb24oZyAvIDI1NSksXHJcbiAgICAgIHRoaXMuYXBwbHlHYW1tYUNvcnJlY3Rpb24oYiAvIDI1NSlcclxuICAgIF0pO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZ2JUb1hZWk1hdHJpeC5tbXVsKHJnYlZlY3Rvcik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgWDogcmVzdWx0LmdldCgwLCAwKSAqIDEwMCxcclxuICAgICAgWTogcmVzdWx0LmdldCgxLCAwKSAqIDEwMCxcclxuICAgICAgWjogcmVzdWx0LmdldCgyLCAwKSAqIDEwMFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVJHQk1hdHJpeCgpO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBYdywgWXcsIFp3XHJcbiAgICBjb25zdCB6dyA9IDEgLSB0aGlzLndoaXRlUG9pbnQueCAtIHRoaXMud2hpdGVQb2ludC55O1xyXG4gICAgY29uc3QgWXcgPSAxO1xyXG4gICAgY29uc3QgWHcgPSB0aGlzLndoaXRlUG9pbnQueCAvIFl3IC8gdGhpcy53aGl0ZVBvaW50Lnk7XHJcbiAgICBjb25zdCBadyA9IHp3IC8gdGhpcy53aGl0ZVBvaW50Lnk7XHJcbiAgICBjb25zdCBYd1l3WncgPSBNYXRyaXguY29sdW1uVmVjdG9yKFtYdywgWXcsIFp3XSk7XHJcblxyXG4gICAgdGhpcy5TVmVjdG9yID0gc29sdmUodGhpcy5yZ2JNYXRyaXgsIFh3WXdadyk7XHJcblxyXG4gICAgdGhpcy5yZ2JUb1hZWk1hdHJpeCA9IHRoaXMucmdiTWF0cml4Lm11bFJvd1ZlY3Rvcih0aGlzLlNWZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplUkdCTWF0cml4KCkge1xyXG4gICAgY29uc3QgcmVkUG9pbnRaID0gMSAtIHRoaXMucmVkUG9pbnQueCAtIHRoaXMucmVkUG9pbnQueTtcclxuICAgIGNvbnN0IGdyZWVuUG9pbnRaID0gMSAtIHRoaXMuZ3JlZW5Qb2ludC54IC0gdGhpcy5ncmVlblBvaW50Lnk7XHJcbiAgICBjb25zdCBibHVlUG9pbnRaID0gMSAtIHRoaXMuYmx1ZVBvaW50LnggLSB0aGlzLmJsdWVQb2ludC55O1xyXG5cclxuICAgIHRoaXMucmdiTWF0cml4ID0gbmV3IE1hdHJpeChbXHJcbiAgICAgIFt0aGlzLnJlZFBvaW50LngsIHRoaXMuZ3JlZW5Qb2ludC54LCB0aGlzLmdyZWVuUG9pbnQueF0sXHJcbiAgICAgIFt0aGlzLnJlZFBvaW50LnksIHRoaXMuZ3JlZW5Qb2ludC55LCB0aGlzLmJsdWVQb2ludC55XSxcclxuICAgICAgW3JlZFBvaW50WiwgZ3JlZW5Qb2ludFosIGJsdWVQb2ludFpdXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwbHlHYW1tYUNvcnJlY3Rpb24odjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyh2LCB0aGlzLmdhbW1hKTtcclxuICB9XHJcbn1cclxuLy8gdHNsaW50OmVuYWJsZSB2YXJpYWJsZS1uYW1lXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL1hZWkNvbnZlcnRlci50cyIsImlmICghU3ltYm9sLnNwZWNpZXMpIHtcbiAgICBTeW1ib2wuc3BlY2llcyA9IFN5bWJvbC5mb3IoJ0BAc3BlY2llcycpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9zeW1ib2wtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1heCBmcm9tICdtbC1hcnJheS1tYXgnO1xuaW1wb3J0IG1pbiBmcm9tICdtbC1hcnJheS1taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNjYWxlKGlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnB1dCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICAgIH1cblxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKG9wdGlvbnMub3V0cHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMub3V0cHV0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3V0cHV0IG9wdGlvbiBtdXN0IGJlIGFuIGFycmF5IGlmIHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCA9IG9wdGlvbnMub3V0cHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IG5ldyBBcnJheShpbnB1dC5sZW5ndGgpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRNaW4gPSBtaW4oaW5wdXQpO1xuICAgIGNvbnN0IGN1cnJlbnRNYXggPSBtYXgoaW5wdXQpO1xuXG4gICAgaWYgKGN1cnJlbnRNaW4gPT09IGN1cnJlbnRNYXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbmltdW0gYW5kIG1heGltdW0gaW5wdXQgdmFsdWVzIGFyZSBlcXVhbC4gQ2Fubm90IHJlc2NhbGUgYSBjb25zdGFudCBhcnJheScpO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgbWluOiBtaW5WYWx1ZSA9IG9wdGlvbnMuYXV0b01pbk1heCA/IGN1cnJlbnRNaW4gOiAwLFxuICAgICAgICBtYXg6IG1heFZhbHVlID0gb3B0aW9ucy5hdXRvTWluTWF4ID8gY3VycmVudE1heCA6IDFcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmIChtaW5WYWx1ZSA+PSBtYXhWYWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluIG9wdGlvbiBtdXN0IGJlIHNtYWxsZXIgdGhhbiBtYXggb3B0aW9uJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZmFjdG9yID0gKG1heFZhbHVlIC0gbWluVmFsdWUpIC8gKGN1cnJlbnRNYXggLSBjdXJyZW50TWluKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG91dHB1dFtpXSA9IChpbnB1dFtpXSAtIGN1cnJlbnRNaW4pICogZmFjdG9yICsgbWluVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLWFycmF5LXJlc2NhbGUvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbXB1dGVzIHRoZSBtYXhpbXVtIG9mIHRoZSBnaXZlbiB2YWx1ZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW5wdXRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4KGlucHV0KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lucHV0IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5wdXQgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgICB9XG5cbiAgICB2YXIgbWF4ID0gaW5wdXRbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5wdXRbaV0gPiBtYXgpIG1heCA9IGlucHV0W2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWF4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktbWF4L3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb21wdXRlcyB0aGUgbWluaW11bSBvZiB0aGUgZ2l2ZW4gdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbihpbnB1dCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnB1dCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgdmFyIG1pbiA9IGlucHV0WzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlucHV0W2ldIDwgbWluKSBtaW4gPSBpbnB1dFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1pbi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhUcmFuc3Bvc2VWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgICAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5jb2x1bW5zLCBtYXRyaXgucm93cyk7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KGNvbHVtbkluZGV4LCByb3dJbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQoY29sdW1uSW5kZXgsIHJvd0luZGV4KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3RyYW5zcG9zZS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFJvd1ZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3cpIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCAxLCBtYXRyaXguY29sdW1ucyk7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvdywgY29sdW1uSW5kZXgsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93LCBjb2x1bW5JbmRleCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9yb3cuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Y2hlY2tSYW5nZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFN1YlZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgICAgIGNoZWNrUmFuZ2UobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCBlbmRSb3cgLSBzdGFydFJvdyArIDEsIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSk7XG4gICAgICAgIHRoaXMuc3RhcnRSb3cgPSBzdGFydFJvdztcbiAgICAgICAgdGhpcy5zdGFydENvbHVtbiA9IHN0YXJ0Q29sdW1uO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnN0YXJ0Um93ICsgcm93SW5kZXgsIHRoaXMuc3RhcnRDb2x1bW4gKyBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5zdGFydFJvdyArIHJvd0luZGV4LCB0aGlzLnN0YXJ0Q29sdW1uICsgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc3ViLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrSW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFNlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgIHZhciBpbmRpY2VzID0gY2hlY2tJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgaW5kaWNlcy5yb3cubGVuZ3RoLCBpbmRpY2VzLmNvbHVtbi5sZW5ndGgpO1xuICAgICAgICB0aGlzLnJvd0luZGljZXMgPSBpbmRpY2VzLnJvdztcbiAgICAgICAgdGhpcy5jb2x1bW5JbmRpY2VzID0gaW5kaWNlcy5jb2x1bW47XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0sIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrUm93SW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFJvd1NlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzKSB7XG4gICAgICAgIHJvd0luZGljZXMgPSBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCByb3dJbmRpY2VzLmxlbmd0aCwgbWF0cml4LmNvbHVtbnMpO1xuICAgICAgICB0aGlzLnJvd0luZGljZXMgPSByb3dJbmRpY2VzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvd0luZGljZXNbcm93SW5kZXhdLCBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5yb3dJbmRpY2VzW3Jvd0luZGV4XSwgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvcm93U2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrQ29sdW1uSW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgIGNvbHVtbkluZGljZXMgPSBjaGVja0NvbHVtbkluZGljZXMobWF0cml4LCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgY29sdW1uSW5kaWNlcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmNvbHVtbkluZGljZXMgPSBjb2x1bW5JbmRpY2VzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uU2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeENvbHVtblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW4pIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgMSk7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW4sIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1uKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2NvbHVtbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhGbGlwUm93VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgbWF0cml4LmNvbHVtbnMpO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBSb3cuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4RmxpcENvbHVtblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgbWF0cml4LnJvd3MsIG1hdHJpeC5jb2x1bW5zKTtcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hdHJpeC5zZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9mbGlwQ29sdW1uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFdyYXBwZXJNYXRyaXgxRCBmcm9tICcuL1dyYXBwZXJNYXRyaXgxRCc7XG5pbXBvcnQgV3JhcHBlck1hdHJpeDJEIGZyb20gJy4vV3JhcHBlck1hdHJpeDJEJztcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fEFycmF5PG51bWJlcj59IGFycmF5XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMucm93cyA9IDFdXG4gKiBAcmV0dXJuIHtXcmFwcGVyTWF0cml4MUR8V3JhcHBlck1hdHJpeDJEfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcChhcnJheSwgb3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICBpZiAoYXJyYXlbMF0gJiYgQXJyYXkuaXNBcnJheShhcnJheVswXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcHBlck1hdHJpeDJEKGFycmF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcHBlck1hdHJpeDFEKGFycmF5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGFyZ3VtZW50IGlzIG5vdCBhbiBhcnJheScpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvd3JhcC93cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCBMdURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9sdSc7XG5pbXBvcnQgUXJEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvcXInO1xuaW1wb3J0IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvc3ZkJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIE1hdHJpeFxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtib29sZWFufSBbdXNlU1ZEPWZhbHNlXVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShtYXRyaXgsIHVzZVNWRCA9IGZhbHNlKSB7XG4gICAgbWF0cml4ID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHVzZVNWRCkge1xuICAgICAgICByZXR1cm4gbmV3IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKG1hdHJpeCkuaW52ZXJzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzb2x2ZShtYXRyaXgsIE1hdHJpeC5leWUobWF0cml4LnJvd3MpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TWF0cml4fSBsZWZ0SGFuZFNpZGVcbiAqIEBwYXJhbSB7TWF0cml4fSByaWdodEhhbmRTaWRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VTVkQgPSBmYWxzZV1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvbHZlKGxlZnRIYW5kU2lkZSwgcmlnaHRIYW5kU2lkZSwgdXNlU1ZEID0gZmFsc2UpIHtcbiAgICBsZWZ0SGFuZFNpZGUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobGVmdEhhbmRTaWRlKTtcbiAgICByaWdodEhhbmRTaWRlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHJpZ2h0SGFuZFNpZGUpO1xuICAgIGlmICh1c2VTVkQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbihsZWZ0SGFuZFNpZGUpLnNvbHZlKHJpZ2h0SGFuZFNpZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZWZ0SGFuZFNpZGUuaXNTcXVhcmUoKSA/IG5ldyBMdURlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKSA6IG5ldyBRckRlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RlY29tcG9zaXRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtoeXBvdGVudXNlLCBnZXRGaWxsZWQyREFycmF5fSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzcyBFaWdlbnZhbHVlRGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9FaWdlbnZhbHVlRGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hc3N1bWVTeW1tZXRyaWM9ZmFsc2VdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhc3N1bWVTeW1tZXRyaWMgPSBmYWxzZVxuICAgICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgICBtYXRyaXggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICAgICAgaWYgKCFtYXRyaXguaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgbm90IGEgc3F1YXJlIG1hdHJpeCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG4gPSBtYXRyaXguY29sdW1ucztcbiAgICAgICAgdmFyIFYgPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICB2YXIgZCA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXkobik7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1hdHJpeDtcbiAgICAgICAgdmFyIGksIGo7XG5cbiAgICAgICAgdmFyIGlzU3ltbWV0cmljID0gZmFsc2U7XG4gICAgICAgIGlmIChhc3N1bWVTeW1tZXRyaWMpIHtcbiAgICAgICAgICAgIGlzU3ltbWV0cmljID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzU3ltbWV0cmljID0gbWF0cml4LmlzU3ltbWV0cmljKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTeW1tZXRyaWMpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbaV1bal0gPSB2YWx1ZS5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJlZDIobiwgZSwgZCwgVik7XG4gICAgICAgICAgICB0cWwyKG4sIGUsIGQsIFYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIEggPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICAgICAgdmFyIG9ydCA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEhbaV1bal0gPSB2YWx1ZS5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3J0aGVzKG4sIEgsIG9ydCwgVik7XG4gICAgICAgICAgICBocXIyKG4sIGUsIGQsIFYsIEgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uID0gbjtcbiAgICAgICAgdGhpcy5lID0gZTtcbiAgICAgICAgdGhpcy5kID0gZDtcbiAgICAgICAgdGhpcy5WID0gVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IHJlYWxFaWdlbnZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IGltYWdpbmFyeUVpZ2VudmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCBlaWdlbnZlY3Rvck1hdHJpeCgpIHtcbiAgICAgICAgaWYgKCFNYXRyaXguaXNNYXRyaXgodGhpcy5WKSkge1xuICAgICAgICAgICAgdGhpcy5WID0gbmV3IE1hdHJpeCh0aGlzLlYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGRpYWdvbmFsTWF0cml4KCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMubjtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmU7XG4gICAgICAgIHZhciBkID0gdGhpcy5kO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgICAgIHZhciBpLCBqO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgWFtpXVtqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYW2ldW2ldID0gZFtpXTtcbiAgICAgICAgICAgIGlmIChlW2ldID4gMCkge1xuICAgICAgICAgICAgICAgIFhbaV1baSArIDFdID0gZVtpXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgICAgICAgICBYW2ldW2kgLSAxXSA9IGVbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cmVkMihuLCBlLCBkLCBWKSB7XG4gICAgdmFyIGYsIGcsIGgsIGksIGosIGssXG4gICAgICAgIGhoLCBzY2FsZTtcblxuICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgZFtqXSA9IFZbbiAtIDFdW2pdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG4gLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHNjYWxlID0gMDtcbiAgICAgICAgaCA9IDA7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgICAgIHNjYWxlID0gc2NhbGUgKyBNYXRoLmFicyhkW2tdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FsZSA9PT0gMCkge1xuICAgICAgICAgICAgZVtpXSA9IGRbaSAtIDFdO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGRbal0gPSBWW2kgLSAxXVtqXTtcbiAgICAgICAgICAgICAgICBWW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICBWW2pdW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICBkW2tdIC89IHNjYWxlO1xuICAgICAgICAgICAgICAgIGggKz0gZFtrXSAqIGRba107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGYgPSBkW2kgLSAxXTtcbiAgICAgICAgICAgIGcgPSBNYXRoLnNxcnQoaCk7XG4gICAgICAgICAgICBpZiAoZiA+IDApIHtcbiAgICAgICAgICAgICAgICBnID0gLWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVbaV0gPSBzY2FsZSAqIGc7XG4gICAgICAgICAgICBoID0gaCAtIGYgKiBnO1xuICAgICAgICAgICAgZFtpIC0gMV0gPSBmIC0gZztcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBlW2pdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGYgPSBkW2pdO1xuICAgICAgICAgICAgICAgIFZbal1baV0gPSBmO1xuICAgICAgICAgICAgICAgIGcgPSBlW2pdICsgVltqXVtqXSAqIGY7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPD0gaSAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBnICs9IFZba11bal0gKiBkW2tdO1xuICAgICAgICAgICAgICAgICAgICBlW2tdICs9IFZba11bal0gKiBmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlW2pdID0gZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZiA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZVtqXSAvPSBoO1xuICAgICAgICAgICAgICAgIGYgKz0gZVtqXSAqIGRbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhoID0gZiAvIChoICsgaCk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZVtqXSAtPSBoaCAqIGRbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmID0gZFtqXTtcbiAgICAgICAgICAgICAgICBnID0gZVtqXTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBqOyBrIDw9IGkgLSAxOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrXVtqXSAtPSAoZiAqIGVba10gKyBnICogZFtrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRbal0gPSBWW2kgLSAxXVtqXTtcbiAgICAgICAgICAgICAgICBWW2ldW2pdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkW2ldID0gaDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICBWW24gLSAxXVtpXSA9IFZbaV1baV07XG4gICAgICAgIFZbaV1baV0gPSAxO1xuICAgICAgICBoID0gZFtpICsgMV07XG4gICAgICAgIGlmIChoICE9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgICAgICAgICAgIGRba10gPSBWW2tdW2kgKyAxXSAvIGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZyArPSBWW2tdW2kgKyAxXSAqIFZba11bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPD0gaTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZba11bal0gLT0gZyAqIGRba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICAgIFZba11baSArIDFdID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgZFtqXSA9IFZbbiAtIDFdW2pdO1xuICAgICAgICBWW24gLSAxXVtqXSA9IDA7XG4gICAgfVxuXG4gICAgVltuIC0gMV1bbiAtIDFdID0gMTtcbiAgICBlWzBdID0gMDtcbn1cblxuZnVuY3Rpb24gdHFsMihuLCBlLCBkLCBWKSB7XG5cbiAgICB2YXIgZywgaCwgaSwgaiwgaywgbCwgbSwgcCwgcixcbiAgICAgICAgZGwxLCBjLCBjMiwgYzMsIGVsMSwgcywgczIsXG4gICAgICAgIGl0ZXI7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGVbaSAtIDFdID0gZVtpXTtcbiAgICB9XG5cbiAgICBlW24gLSAxXSA9IDA7XG5cbiAgICB2YXIgZiA9IDA7XG4gICAgdmFyIHRzdDEgPSAwO1xuICAgIHZhciBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcblxuICAgIGZvciAobCA9IDA7IGwgPCBuOyBsKyspIHtcbiAgICAgICAgdHN0MSA9IE1hdGgubWF4KHRzdDEsIE1hdGguYWJzKGRbbF0pICsgTWF0aC5hYnMoZVtsXSkpO1xuICAgICAgICBtID0gbDtcbiAgICAgICAgd2hpbGUgKG0gPCBuKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZVttXSkgPD0gZXBzICogdHN0MSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG0gPiBsKSB7XG4gICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpdGVyID0gaXRlciArIDE7XG5cbiAgICAgICAgICAgICAgICBnID0gZFtsXTtcbiAgICAgICAgICAgICAgICBwID0gKGRbbCArIDFdIC0gZykgLyAoMiAqIGVbbF0pO1xuICAgICAgICAgICAgICAgIHIgPSBoeXBvdGVudXNlKHAsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChwIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByID0gLXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZFtsXSA9IGVbbF0gLyAocCArIHIpO1xuICAgICAgICAgICAgICAgIGRbbCArIDFdID0gZVtsXSAqIChwICsgcik7XG4gICAgICAgICAgICAgICAgZGwxID0gZFtsICsgMV07XG4gICAgICAgICAgICAgICAgaCA9IGcgLSBkW2xdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGwgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRbaV0gLT0gaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmID0gZiArIGg7XG5cbiAgICAgICAgICAgICAgICBwID0gZFttXTtcbiAgICAgICAgICAgICAgICBjID0gMTtcbiAgICAgICAgICAgICAgICBjMiA9IGM7XG4gICAgICAgICAgICAgICAgYzMgPSBjO1xuICAgICAgICAgICAgICAgIGVsMSA9IGVbbCArIDFdO1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtIC0gMTsgaSA+PSBsOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgYzMgPSBjMjtcbiAgICAgICAgICAgICAgICAgICAgYzIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBzMiA9IHM7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBjICogZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGMgKiBwO1xuICAgICAgICAgICAgICAgICAgICByID0gaHlwb3RlbnVzZShwLCBlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgZVtpICsgMV0gPSBzICogcjtcbiAgICAgICAgICAgICAgICAgICAgcyA9IGVbaV0gLyByO1xuICAgICAgICAgICAgICAgICAgICBjID0gcCAvIHI7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBjICogZFtpXSAtIHMgKiBnO1xuICAgICAgICAgICAgICAgICAgICBkW2kgKyAxXSA9IGggKyBzICogKGMgKiBnICsgcyAqIGRbaV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSBWW2tdW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZba11baSArIDFdID0gcyAqIFZba11baV0gKyBjICogaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZba11baV0gPSBjICogVltrXVtpXSAtIHMgKiBoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCA9IC1zICogczIgKiBjMyAqIGVsMSAqIGVbbF0gLyBkbDE7XG4gICAgICAgICAgICAgICAgZVtsXSA9IHMgKiBwO1xuICAgICAgICAgICAgICAgIGRbbF0gPSBjICogcDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKE1hdGguYWJzKGVbbF0pID4gZXBzICogdHN0MSk7XG4gICAgICAgIH1cbiAgICAgICAgZFtsXSA9IGRbbF0gKyBmO1xuICAgICAgICBlW2xdID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICBrID0gaTtcbiAgICAgICAgcCA9IGRbaV07XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZFtqXSA8IHApIHtcbiAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICBwID0gZFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrICE9PSBpKSB7XG4gICAgICAgICAgICBkW2tdID0gZFtpXTtcbiAgICAgICAgICAgIGRbaV0gPSBwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIHAgPSBWW2pdW2ldO1xuICAgICAgICAgICAgICAgIFZbal1baV0gPSBWW2pdW2tdO1xuICAgICAgICAgICAgICAgIFZbal1ba10gPSBwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcnRoZXMobiwgSCwgb3J0LCBWKSB7XG5cbiAgICB2YXIgbG93ID0gMDtcbiAgICB2YXIgaGlnaCA9IG4gLSAxO1xuICAgIHZhciBmLCBnLCBoLCBpLCBqLCBtO1xuICAgIHZhciBzY2FsZTtcblxuICAgIGZvciAobSA9IGxvdyArIDE7IG0gPD0gaGlnaCAtIDE7IG0rKykge1xuICAgICAgICBzY2FsZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICBzY2FsZSA9IHNjYWxlICsgTWF0aC5hYnMoSFtpXVttIC0gMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjYWxlICE9PSAwKSB7XG4gICAgICAgICAgICBoID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IGhpZ2g7IGkgPj0gbTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgb3J0W2ldID0gSFtpXVttIC0gMV0gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICBoICs9IG9ydFtpXSAqIG9ydFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZyA9IE1hdGguc3FydChoKTtcbiAgICAgICAgICAgIGlmIChvcnRbbV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgZyA9IC1nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoID0gaCAtIG9ydFttXSAqIGc7XG4gICAgICAgICAgICBvcnRbbV0gPSBvcnRbbV0gLSBnO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBtOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgZiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaGlnaDsgaSA+PSBtOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgZiArPSBvcnRbaV0gKiBIW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGYgPSBmIC8gaDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBIW2ldW2pdIC09IGYgKiBvcnRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGYgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGhpZ2g7IGogPj0gbTsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGYgKz0gb3J0W2pdICogSFtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmID0gZiAvIGg7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbTsgaiA8PSBoaWdoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtqXSAtPSBmICogb3J0W2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3J0W21dID0gc2NhbGUgKiBvcnRbbV07XG4gICAgICAgICAgICBIW21dW20gLSAxXSA9IHNjYWxlICogZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgVltpXVtqXSA9IChpID09PSBqID8gMSA6IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChtID0gaGlnaCAtIDE7IG0gPj0gbG93ICsgMTsgbS0tKSB7XG4gICAgICAgIGlmIChIW21dW20gLSAxXSAhPT0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gbSArIDE7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3J0W2ldID0gSFtpXVttIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IG07IGogPD0gaGlnaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZyArPSBvcnRbaV0gKiBWW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGcgPSAoZyAvIG9ydFttXSkgLyBIW21dW20gLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBWW2ldW2pdICs9IGcgKiBvcnRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBocXIyKG5uLCBlLCBkLCBWLCBIKSB7XG4gICAgdmFyIG4gPSBubiAtIDE7XG4gICAgdmFyIGxvdyA9IDA7XG4gICAgdmFyIGhpZ2ggPSBubiAtIDE7XG4gICAgdmFyIGVwcyA9IE51bWJlci5FUFNJTE9OO1xuICAgIHZhciBleHNoaWZ0ID0gMDtcbiAgICB2YXIgbm9ybSA9IDA7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBxID0gMDtcbiAgICB2YXIgciA9IDA7XG4gICAgdmFyIHMgPSAwO1xuICAgIHZhciB6ID0gMDtcbiAgICB2YXIgaXRlciA9IDA7XG4gICAgdmFyIGksIGosIGssIGwsIG0sIHQsIHcsIHgsIHk7XG4gICAgdmFyIHJhLCBzYSwgdnIsIHZpO1xuICAgIHZhciBub3RsYXN0LCBjZGl2cmVzO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG5uOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBsb3cgfHwgaSA+IGhpZ2gpIHtcbiAgICAgICAgICAgIGRbaV0gPSBIW2ldW2ldO1xuICAgICAgICAgICAgZVtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGogPSBNYXRoLm1heChpIC0gMSwgMCk7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICBub3JtID0gbm9ybSArIE1hdGguYWJzKEhbaV1bal0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKG4gPj0gbG93KSB7XG4gICAgICAgIGwgPSBuO1xuICAgICAgICB3aGlsZSAobCA+IGxvdykge1xuICAgICAgICAgICAgcyA9IE1hdGguYWJzKEhbbCAtIDFdW2wgLSAxXSkgKyBNYXRoLmFicyhIW2xdW2xdKTtcbiAgICAgICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcyA9IG5vcm07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoSFtsXVtsIC0gMV0pIDwgZXBzICogcykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGwgPT09IG4pIHtcbiAgICAgICAgICAgIEhbbl1bbl0gPSBIW25dW25dICsgZXhzaGlmdDtcbiAgICAgICAgICAgIGRbbl0gPSBIW25dW25dO1xuICAgICAgICAgICAgZVtuXSA9IDA7XG4gICAgICAgICAgICBuLS07XG4gICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChsID09PSBuIC0gMSkge1xuICAgICAgICAgICAgdyA9IEhbbl1bbiAtIDFdICogSFtuIC0gMV1bbl07XG4gICAgICAgICAgICBwID0gKEhbbiAtIDFdW24gLSAxXSAtIEhbbl1bbl0pIC8gMjtcbiAgICAgICAgICAgIHEgPSBwICogcCArIHc7XG4gICAgICAgICAgICB6ID0gTWF0aC5zcXJ0KE1hdGguYWJzKHEpKTtcbiAgICAgICAgICAgIEhbbl1bbl0gPSBIW25dW25dICsgZXhzaGlmdDtcbiAgICAgICAgICAgIEhbbiAtIDFdW24gLSAxXSA9IEhbbiAtIDFdW24gLSAxXSArIGV4c2hpZnQ7XG4gICAgICAgICAgICB4ID0gSFtuXVtuXTtcblxuICAgICAgICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICAgICAgICAgIHogPSAocCA+PSAwKSA/IChwICsgeikgOiAocCAtIHopO1xuICAgICAgICAgICAgICAgIGRbbiAtIDFdID0geCArIHo7XG4gICAgICAgICAgICAgICAgZFtuXSA9IGRbbiAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICh6ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRbbl0gPSB4IC0gdyAvIHo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVbbiAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICBlW25dID0gMDtcbiAgICAgICAgICAgICAgICB4ID0gSFtuXVtuIC0gMV07XG4gICAgICAgICAgICAgICAgcyA9IE1hdGguYWJzKHgpICsgTWF0aC5hYnMoeik7XG4gICAgICAgICAgICAgICAgcCA9IHggLyBzO1xuICAgICAgICAgICAgICAgIHEgPSB6IC8gcztcbiAgICAgICAgICAgICAgICByID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEpO1xuICAgICAgICAgICAgICAgIHAgPSBwIC8gcjtcbiAgICAgICAgICAgICAgICBxID0gcSAvIHI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSBuIC0gMTsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IEhbbiAtIDFdW2pdO1xuICAgICAgICAgICAgICAgICAgICBIW24gLSAxXVtqXSA9IHEgKiB6ICsgcCAqIEhbbl1bal07XG4gICAgICAgICAgICAgICAgICAgIEhbbl1bal0gPSBxICogSFtuXVtqXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHogPSBIW2ldW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtuIC0gMV0gPSBxICogeiArIHAgKiBIW2ldW25dO1xuICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gcSAqIEhbaV1bbl0gLSBwICogejtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHogPSBWW2ldW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgVltpXVtuIC0gMV0gPSBxICogeiArIHAgKiBWW2ldW25dO1xuICAgICAgICAgICAgICAgICAgICBWW2ldW25dID0gcSAqIFZbaV1bbl0gLSBwICogejtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRbbiAtIDFdID0geCArIHA7XG4gICAgICAgICAgICAgICAgZFtuXSA9IHggKyBwO1xuICAgICAgICAgICAgICAgIGVbbiAtIDFdID0gejtcbiAgICAgICAgICAgICAgICBlW25dID0gLXo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG4gPSBuIC0gMjtcbiAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IEhbbl1bbl07XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIHcgPSAwO1xuICAgICAgICAgICAgaWYgKGwgPCBuKSB7XG4gICAgICAgICAgICAgICAgeSA9IEhbbiAtIDFdW24gLSAxXTtcbiAgICAgICAgICAgICAgICB3ID0gSFtuXVtuIC0gMV0gKiBIW24gLSAxXVtuXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZXIgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgZXhzaGlmdCArPSB4O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtpXSAtPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5hYnMoSFtuXVtuIC0gMV0pICsgTWF0aC5hYnMoSFtuIC0gMV1bbiAtIDJdKTtcbiAgICAgICAgICAgICAgICB4ID0geSA9IDAuNzUgKiBzO1xuICAgICAgICAgICAgICAgIHcgPSAtMC40Mzc1ICogcyAqIHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVyID09PSAzMCkge1xuICAgICAgICAgICAgICAgIHMgPSAoeSAtIHgpIC8gMjtcbiAgICAgICAgICAgICAgICBzID0gcyAqIHMgKyB3O1xuICAgICAgICAgICAgICAgIGlmIChzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzID0geCAtIHcgLyAoKHkgLSB4KSAvIDIgKyBzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtpXSAtPSBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4c2hpZnQgKz0gcztcbiAgICAgICAgICAgICAgICAgICAgeCA9IHkgPSB3ID0gMC45NjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVyID0gaXRlciArIDE7XG5cbiAgICAgICAgICAgIG0gPSBuIC0gMjtcbiAgICAgICAgICAgIHdoaWxlIChtID49IGwpIHtcbiAgICAgICAgICAgICAgICB6ID0gSFttXVttXTtcbiAgICAgICAgICAgICAgICByID0geCAtIHo7XG4gICAgICAgICAgICAgICAgcyA9IHkgLSB6O1xuICAgICAgICAgICAgICAgIHAgPSAociAqIHMgLSB3KSAvIEhbbSArIDFdW21dICsgSFttXVttICsgMV07XG4gICAgICAgICAgICAgICAgcSA9IEhbbSArIDFdW20gKyAxXSAtIHogLSByIC0gcztcbiAgICAgICAgICAgICAgICByID0gSFttICsgMl1bbSArIDFdO1xuICAgICAgICAgICAgICAgIHMgPSBNYXRoLmFicyhwKSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMocik7XG4gICAgICAgICAgICAgICAgcCA9IHAgLyBzO1xuICAgICAgICAgICAgICAgIHEgPSBxIC8gcztcbiAgICAgICAgICAgICAgICByID0gciAvIHM7XG4gICAgICAgICAgICAgICAgaWYgKG0gPT09IGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhIW21dW20gLSAxXSkgKiAoTWF0aC5hYnMocSkgKyBNYXRoLmFicyhyKSkgPCBlcHMgKiAoTWF0aC5hYnMocCkgKiAoTWF0aC5hYnMoSFttIC0gMV1bbSAtIDFdKSArIE1hdGguYWJzKHopICsgTWF0aC5hYnMoSFttICsgMV1bbSArIDFdKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtLS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IG0gKyAyOyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgICAgIEhbaV1baSAtIDJdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IG0gKyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIEhbaV1baSAtIDNdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoayA9IG07IGsgPD0gbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgIG5vdGxhc3QgPSAoayAhPT0gbiAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChrICE9PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBIW2tdW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcSA9IEhbayArIDFdW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgciA9IChub3RsYXN0ID8gSFtrICsgMl1bayAtIDFdIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLmFicyhwKSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMocik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gcCAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBxID0gcSAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gciAvIHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEgKyByICogcik7XG4gICAgICAgICAgICAgICAgaWYgKHAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoayAhPT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrXVtrIC0gMV0gPSAtcyAqIHg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobCAhPT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrXVtrIC0gMV0gPSAtSFtrXVtrIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwID0gcCArIHM7XG4gICAgICAgICAgICAgICAgICAgIHggPSBwIC8gcztcbiAgICAgICAgICAgICAgICAgICAgeSA9IHEgLyBzO1xuICAgICAgICAgICAgICAgICAgICB6ID0gciAvIHM7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxIC8gcDtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgLyBwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGs7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gSFtrXVtqXSArIHEgKiBIW2sgKyAxXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHAgKyByICogSFtrICsgMl1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtrICsgMl1bal0gPSBIW2sgKyAyXVtqXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBIW2tdW2pdID0gSFtrXVtqXSAtIHAgKiB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrICsgMV1bal0gPSBIW2sgKyAxXVtqXSAtIHAgKiB5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBNYXRoLm1pbihuLCBrICsgMyk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHggKiBIW2ldW2tdICsgeSAqIEhbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gcCArIHogKiBIW2ldW2sgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2ldW2sgKyAyXSA9IEhbaV1bayArIDJdIC0gcCAqIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1ba10gPSBIW2ldW2tdIC0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bayArIDFdID0gSFtpXVtrICsgMV0gLSBwICogcTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB4ICogVltpXVtrXSArIHkgKiBWW2ldW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHAgKyB6ICogVltpXVtrICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtrICsgMl0gPSBWW2ldW2sgKyAyXSAtIHAgKiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gVltpXVtrXSAtIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2sgKyAxXSA9IFZbaV1bayArIDFdIC0gcCAqIHE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9ybSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChuID0gbm4gLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICBwID0gZFtuXTtcbiAgICAgICAgcSA9IGVbbl07XG5cbiAgICAgICAgaWYgKHEgPT09IDApIHtcbiAgICAgICAgICAgIGwgPSBuO1xuICAgICAgICAgICAgSFtuXVtuXSA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB3ID0gSFtpXVtpXSAtIHA7XG4gICAgICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbDsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgKyBIW2ldW2pdICogSFtqXVtuXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IHc7XG4gICAgICAgICAgICAgICAgICAgIHMgPSByO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtuXSA9ICh3ICE9PSAwKSA/ICgtciAvIHcpIDogKC1yIC8gKGVwcyAqIG5vcm0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBIW2ldW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBIW2kgKyAxXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEgPSAoZFtpXSAtIHApICogKGRbaV0gLSBwKSArIGVbaV0gKiBlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh4ICogcyAtIHogKiByKSAvIHE7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gKE1hdGguYWJzKHgpID4gTWF0aC5hYnMoeikpID8gKCgtciAtIHcgKiB0KSAvIHgpIDogKCgtcyAtIHkgKiB0KSAvIHopO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdCA9IE1hdGguYWJzKEhbaV1bbl0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVwcyAqIHQpICogdCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtqXVtuXSA9IEhbal1bbl0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHEgPCAwKSB7XG4gICAgICAgICAgICBsID0gbiAtIDE7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhIW25dW24gLSAxXSkgPiBNYXRoLmFicyhIW24gLSAxXVtuXSkpIHtcbiAgICAgICAgICAgICAgICBIW24gLSAxXVtuIC0gMV0gPSBxIC8gSFtuXVtuIC0gMV07XG4gICAgICAgICAgICAgICAgSFtuIC0gMV1bbl0gPSAtKEhbbl1bbl0gLSBwKSAvIEhbbl1bbiAtIDFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2RpdigwLCAtSFtuIC0gMV1bbl0sIEhbbiAtIDFdW24gLSAxXSAtIHAsIHEpO1xuICAgICAgICAgICAgICAgIEhbbiAtIDFdW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgSFtuIC0gMV1bbl0gPSBjZGl2cmVzWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBIW25dW24gLSAxXSA9IDA7XG4gICAgICAgICAgICBIW25dW25dID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHJhID0gMDtcbiAgICAgICAgICAgICAgICBzYSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbDsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmEgPSByYSArIEhbaV1bal0gKiBIW2pdW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgc2EgPSBzYSArIEhbaV1bal0gKiBIW2pdW25dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHcgPSBIW2ldW2ldIC0gcDtcblxuICAgICAgICAgICAgICAgIGlmIChlW2ldIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB6ID0gdztcbiAgICAgICAgICAgICAgICAgICAgciA9IHJhO1xuICAgICAgICAgICAgICAgICAgICBzID0gc2E7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW2ldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2RpdigtcmEsIC1zYSwgdywgcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBIW2ldW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBIW2kgKyAxXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZyID0gKGRbaV0gLSBwKSAqIChkW2ldIC0gcCkgKyBlW2ldICogZVtpXSAtIHEgKiBxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmkgPSAoZFtpXSAtIHApICogMiAqIHE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnIgPT09IDAgJiYgdmkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ciA9IGVwcyAqIG5vcm0gKiAoTWF0aC5hYnModykgKyBNYXRoLmFicyhxKSArIE1hdGguYWJzKHgpICsgTWF0aC5hYnMoeSkgKyBNYXRoLmFicyh6KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2Rpdih4ICogciAtIHogKiByYSArIHEgKiBzYSwgeCAqIHMgLSB6ICogc2EgLSBxICogcmEsIHZyLCB2aSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh4KSA+IChNYXRoLmFicyh6KSArIE1hdGguYWJzKHEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW24gLSAxXSA9ICgtcmEgLSB3ICogSFtpXVtuIC0gMV0gKyBxICogSFtpXVtuXSkgLyB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gKC1zYSAtIHcgKiBIW2ldW25dIC0gcSAqIEhbaV1bbiAtIDFdKSAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KC1yIC0geSAqIEhbaV1bbiAtIDFdLCAtcyAtIHkgKiBIW2ldW25dLCB6LCBxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2kgKyAxXVtuIC0gMV0gPSBjZGl2cmVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHQgPSBNYXRoLm1heChNYXRoLmFicyhIW2ldW24gLSAxXSksIE1hdGguYWJzKEhbaV1bbl0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlcHMgKiB0KSAqIHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDw9IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbal1bbiAtIDFdID0gSFtqXVtuIC0gMV0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbal1bbl0gPSBIW2pdW25dIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBubjsgaSsrKSB7XG4gICAgICAgIGlmIChpIDwgbG93IHx8IGkgPiBoaWdoKSB7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbm47IGorKykge1xuICAgICAgICAgICAgICAgIFZbaV1bal0gPSBIW2ldW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChqID0gbm4gLSAxOyBqID49IGxvdzsgai0tKSB7XG4gICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgIHogPSAwO1xuICAgICAgICAgICAgZm9yIChrID0gbG93OyBrIDw9IE1hdGgubWluKGosIGhpZ2gpOyBrKyspIHtcbiAgICAgICAgICAgICAgICB6ID0geiArIFZbaV1ba10gKiBIW2tdW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVltpXVtqXSA9IHo7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNkaXYoeHIsIHhpLCB5ciwgeWkpIHtcbiAgICB2YXIgciwgZDtcbiAgICBpZiAoTWF0aC5hYnMoeXIpID4gTWF0aC5hYnMoeWkpKSB7XG4gICAgICAgIHIgPSB5aSAvIHlyO1xuICAgICAgICBkID0geXIgKyByICogeWk7XG4gICAgICAgIHJldHVybiBbKHhyICsgciAqIHhpKSAvIGQsICh4aSAtIHIgKiB4cikgLyBkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByID0geXIgLyB5aTtcbiAgICAgICAgZCA9IHlpICsgciAqIHlyO1xuICAgICAgICByZXR1cm4gWyhyICogeHIgKyB4aSkgLyBkLCAociAqIHhpIC0geHIpIC8gZF07XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9ldmQuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeCwgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuLi9pbmRleCc7XG5cbi8qKlxuICogQGNsYXNzIENob2xlc2t5RGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9DaG9sZXNreURlY29tcG9zaXRpb24uY3NcbiAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9sZXNreURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcbiAgICAgICAgaWYgKCF2YWx1ZS5pc1N5bW1ldHJpYygpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3Qgc3ltbWV0cmljJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYSA9IHZhbHVlO1xuICAgICAgICB2YXIgZGltZW5zaW9uID0gYS5yb3dzO1xuICAgICAgICB2YXIgbCA9IG5ldyBNYXRyaXgoZGltZW5zaW9uLCBkaW1lbnNpb24pO1xuICAgICAgICB2YXIgcG9zaXRpdmVEZWZpbml0ZSA9IHRydWU7XG4gICAgICAgIHZhciBpLCBqLCBrO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBkaW1lbnNpb247IGorKykge1xuICAgICAgICAgICAgdmFyIExyb3dqID0gbFtqXTtcbiAgICAgICAgICAgIHZhciBkID0gMDtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBqOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgTHJvd2sgPSBsW2tdO1xuICAgICAgICAgICAgICAgIHZhciBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gTHJvd2tbaV0gKiBMcm93altpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTHJvd2pba10gPSBzID0gKGEuZ2V0KGosIGspIC0gcykgLyBsW2tdW2tdO1xuICAgICAgICAgICAgICAgIGQgPSBkICsgcyAqIHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSBhLmdldChqLCBqKSAtIGQ7XG5cbiAgICAgICAgICAgIHBvc2l0aXZlRGVmaW5pdGUgJj0gKGQgPiAwKTtcbiAgICAgICAgICAgIGxbal1bal0gPSBNYXRoLnNxcnQoTWF0aC5tYXgoZCwgMCkpO1xuICAgICAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgICAgICAgICAgIGxbal1ba10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3NpdGl2ZURlZmluaXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3QgcG9zaXRpdmUgZGVmaW5pdGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuTCA9IGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBsID0gdGhpcy5MO1xuICAgICAgICB2YXIgZGltZW5zaW9uID0gbC5yb3dzO1xuXG4gICAgICAgIGlmICh2YWx1ZS5yb3dzICE9PSBkaW1lbnNpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGRpbWVuc2lvbnMgZG8gbm90IG1hdGNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY291bnQgPSB2YWx1ZS5jb2x1bW5zO1xuICAgICAgICB2YXIgQiA9IHZhbHVlLmNsb25lKCk7XG4gICAgICAgIHZhciBpLCBqLCBrO1xuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEJba11bal0gLT0gQltpXVtqXSAqIGxba11baV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJba11bal0gLz0gbFtrXVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IGRpbWVuc2lvbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgZGltZW5zaW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQltrXVtqXSAtPSBCW2ldW2pdICogbFtpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQltrXVtqXSAvPSBsW2tdW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGxvd2VyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTDtcbiAgICB9XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvY2hvbGVza3kuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW1hZ2VEYXRhQ29udmVydGVyIHtcclxuICBwdWJsaWMgY29udmVydEltYWdlVG9JbWFnZURhdGEoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgZHJhd2luZyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRJbWFnZURhdGFUb0ltYWdlKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlRGF0YS53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyBkcmF3aW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKGltYWdlRGF0YS53aWR0aCwgaW1hZ2VEYXRhLmhlaWdodCk7XHJcbiAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlRGF0YUNvbnZlcnRlci50cyIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgcHVibGljIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xyXG5cclxuICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlTG9hZGVyLnRzIiwiaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgTGFiUGFyYW1ldGVyc0JveCB9IGZyb20gJ2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0JveCc7XHJcbmltcG9ydCB7IENvbG9yUHJvZmlsZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSB9IGZyb20gJ21vZGVscy9JbGx1bWluYW50VHlwZSc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIHNlbGVjdGVkQ29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGU7XHJcbiAgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzO1xyXG4gIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZTtcclxuICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblBhcmFtZXRlcnNCb3ggZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRDb2xvclNwYWNlOiBhcHBTdGF0ZS5pbnB1dC5zZWxlY3RlZENvbG9yU3BhY2UsXHJcbiAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBhcHBTdGF0ZS5pbnB1dC5jb252ZXJzaW9uUGFyYW1ldGVycyxcclxuICAgICAgaWxsdW1pbmFudFR5cGU6IGFwcFN0YXRlLmlucHV0LmlsbHVtaW5hbnRUeXBlLFxyXG4gICAgICBjb2xvclByb2ZpbGVUeXBlOiBhcHBTdGF0ZS5pbnB1dC5jb2xvclByb2ZpbGVUeXBlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9PlxyXG4gICAgICAgICR7dGhpcy5nZXRDb2xvclNwYWNlUGFyYW1ldGVyc0JveCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbG9yU3BhY2VQYXJhbWV0ZXJzQm94KCkge1xyXG4gICAgY29uc3QgeyBpbGx1bWluYW50VHlwZSwgY29sb3JQcm9maWxlVHlwZSwgY29udmVyc2lvblBhcmFtZXRlcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW0NvbG9yU3BhY2VUeXBlLkhTVl06ICgpID0+IG51bGwsXHJcbiAgICAgIFtDb2xvclNwYWNlVHlwZS5ZQ2JDcl06ICgpID0+IG51bGwsXHJcbiAgICAgIFtDb2xvclNwYWNlVHlwZS5MYWJdOiAoKSA9PlxyXG4gICAgICAgIExhYlBhcmFtZXRlcnNCb3goaWxsdW1pbmFudFR5cGUsIGNvbG9yUHJvZmlsZVR5cGUsIGNvbnZlcnNpb25QYXJhbWV0ZXJzKVxyXG4gICAgfVt0aGlzLnN0YXRlLnNlbGVjdGVkQ29sb3JTcGFjZV0oKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9Db252ZXJzaW9uUGFyYW1ldGVyc0JveC50cyIsImltcG9ydCB7IHdpcmUgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcbmltcG9ydCB7XHJcbiAgQ29sb3JQcm9maWxlVHlwZSxcclxuICBsYWJlbGVkQ29sb3JQcm9maWxlcyxcclxuICBwcmVkZWZpbmVkQ29sb3JQcm9maWxlc1xyXG59IGZyb20gJ21vZGVscy9Db2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSwgbGFiZWxlZElsbHVtaW5hbnRzLCBwcmVkZWZpbmVkSWxsdW1pbmFudHMgfSBmcm9tICdtb2RlbHMvSWxsdW1pbmFudFR5cGUnO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IGNoYW5nZUlsbHVtaW5hbnRUeXBlIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VJbGx1bWluYW50VHlwZSc7XHJcblxyXG5pbXBvcnQgeyBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgTGFiZWxlZFNlbGVjdCB9IGZyb20gJ2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdCc7XHJcbmltcG9ydCB7IExhYlBhcmFtZXRlcnNJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0lucHV0cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFiUGFyYW1ldGVyc0JveChcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUsXHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZSxcclxuICBjb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnNcclxuKSB7XHJcbiAgY29uc3QgbGFiUGFyYW1ldGVyc0lucHV0ID0gbmV3IExhYlBhcmFtZXRlcnNJbnB1dChjb252ZXJzaW9uUGFyYW1ldGVycyk7XHJcblxyXG4gIHJldHVybiB3aXJlKClgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgZm9yPVwiaWxsdW1pbmFudC10eXBlLXNlbGVjdFwiPklsbHVtaW5hbnQgdHlwZTogPC9sYWJlbD5cclxuICAgICAgJHtMYWJlbGVkU2VsZWN0KFxyXG4gICAgICAgICdpbGx1bWluYW50LXR5cGUtc2VsZWN0JyxcclxuICAgICAgICBsYWJlbGVkSWxsdW1pbmFudHMsXHJcbiAgICAgICAgaWxsdW1pbmFudFR5cGUsXHJcbiAgICAgICAgb25JbGx1bWluYW50Q2hhbmdlLmJpbmQobnVsbCwgY29udmVyc2lvblBhcmFtZXRlcnMud2hpdGVQb2ludClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJjb2xvci1wcm9maWxlLXNlbGVjdFwiPkNvbG9yIHByb2ZpbGU6IDwvbGFiZWw+XHJcbiAgICAgICR7TGFiZWxlZFNlbGVjdChcclxuICAgICAgICAnY29sb3ItcHJvZmlsZS1zZWxlY3QnLFxyXG4gICAgICAgIGxhYmVsZWRDb2xvclByb2ZpbGVzLFxyXG4gICAgICAgIGNvbG9yUHJvZmlsZVR5cGUsXHJcbiAgICAgICAgb25Db2xvclByb2ZpbGVDaGFuZ2UuYmluZChudWxsLCBjb252ZXJzaW9uUGFyYW1ldGVycylcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICR7bGFiUGFyYW1ldGVyc0lucHV0fVxyXG4gIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uSWxsdW1pbmFudENoYW5nZShjdXJyZW50V2hpdGVQb2ludDogQ29sb3JQb2ludCwgbmV3SWxsdW1pbmFudDogSWxsdW1pbmFudFR5cGUpIHtcclxuICBpZiAobmV3SWxsdW1pbmFudCA9PT0gSWxsdW1pbmFudFR5cGUuQ3VzdG9tKSB7XHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VJbGx1bWluYW50VHlwZShuZXdJbGx1bWluYW50LCBjdXJyZW50V2hpdGVQb2ludCkpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvdW5kSWxsdW1pbmFudCA9IHByZWRlZmluZWRJbGx1bWluYW50cy5maW5kKFxyXG4gICAgaWxsdW1pbmFudCA9PiBpbGx1bWluYW50LmlsbHVtaW5hbnRUeXBlID09PSBuZXdJbGx1bWluYW50XHJcbiAgKTtcclxuICBpZiAoIWZvdW5kSWxsdW1pbmFudCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBpbGx1bWluYW50IG5vdCBmb3VuZCBpbiBwcmVkZWZpbmVkIG9uZXMnKTtcclxuICB9XHJcblxyXG4gIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUlsbHVtaW5hbnRUeXBlKG5ld0lsbHVtaW5hbnQsIGZvdW5kSWxsdW1pbmFudC53aGl0ZVBvaW50KCkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Db2xvclByb2ZpbGVDaGFuZ2UoXHJcbiAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycyxcclxuICBuZXdDb2xvclByb2ZpbGU6IENvbG9yUHJvZmlsZVR5cGVcclxuKSB7XHJcbiAgaWYgKG5ld0NvbG9yUHJvZmlsZSA9PT0gQ29sb3JQcm9maWxlVHlwZS5DdXN0b20pIHtcclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUobmV3Q29sb3JQcm9maWxlLCBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMpKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3VuZENvbG9yUHJvZmlsZSA9IHByZWRlZmluZWRDb2xvclByb2ZpbGVzLmZpbmQoXHJcbiAgICBjb2xvclByb2ZpbGUgPT4gY29sb3JQcm9maWxlLmNvbG9yUHJvZmlsZVR5cGUgPT09IG5ld0NvbG9yUHJvZmlsZVxyXG4gICk7XHJcbiAgaWYgKCFmb3VuZENvbG9yUHJvZmlsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBjb2xvciBwcm9maWxlIG5vdCBmb3VuZCBpbiBwcmVkZWZpbmVkIG9uZXMnKTtcclxuICB9XHJcblxyXG4gIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUobmV3Q29sb3JQcm9maWxlLCBmb3VuZENvbG9yUHJvZmlsZS5wYXJhbWV0ZXJzKCkpKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0xhYlBhcmFtZXRlcnNCb3gudHMiLCJpbXBvcnQgeyB3aXJlIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcbmltcG9ydCB7IEh5cGVyQ29tcG9uZW50IH0gZnJvbSAndXRpbHMvSHlwZXJDb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQb2ludCB9IGZyb20gJ21vZGVscy9Db2xvclBvaW50JztcclxuaW1wb3J0IHsgQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5cclxuaW1wb3J0ICcuL0xhYlBhcmFtZXRlcnNJbnB1dHMuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgQ29tcG9uZW50U3RhdGUge1xyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhYlBhcmFtZXRlcnNJbnB1dCBleHRlbmRzIEh5cGVyQ29tcG9uZW50PENvbXBvbmVudFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub25HYW1tYUNoYW5nZSA9IHRoaXMub25HYW1tYUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbG9yUG9pbnRDaGFuZ2UgPSB0aGlzLm9uQ29sb3JQb2ludENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbnZlcnNpb25QYXJhbWV0ZXJzKGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbnZlcnNpb25QYXJhbWV0ZXJzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPkNocm9tYWNpdHk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD54PC90aD5cclxuICAgICAgICAgICAgICA8dGg+eTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgJHtbXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdSZWQgcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjb252ZXJzaW9uUGFyYW1ldGVycy5yZWRQb2ludCxcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db2xvclBvaW50Q2hhbmdlKCdyZWQnKVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdHcmVlbiBwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzLmdyZWVuUG9pbnQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29sb3JQb2ludENoYW5nZSgnZ3JlZW4nKVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdCbHVlIHByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY29udmVyc2lvblBhcmFtZXRlcnMuYmx1ZVBvaW50LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbG9yUG9pbnRDaGFuZ2UoJ2JsdWUnKVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgQ29sb3JQb2ludFJvdyhcclxuICAgICAgICAgICAgICAgICdXaGl0ZSBwb2ludCcsXHJcbiAgICAgICAgICAgICAgICBjb252ZXJzaW9uUGFyYW1ldGVycy53aGl0ZVBvaW50LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbG9yUG9pbnRDaGFuZ2UoJ3doaXRlJylcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBHYW1tYTpcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9JHtjb252ZXJzaW9uUGFyYW1ldGVycy5nYW1tYX1cclxuICAgICAgICAgICAgb25ibHVyPSR7dGhpcy5vbkdhbW1hQ2hhbmdlfSBzdGVwPVwiMC4xXCIgY2xhc3M9XCJnYW1tYS1pbnB1dFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db2xvclBvaW50Q2hhbmdlKGNvbG9yUG9pbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoeE9yWTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGAke2NvbG9yUG9pbnROYW1lfVBvaW50YDtcclxuXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgY29uc3QgbmV3Q29sb3JQb2ludCA9IDxDb2xvclBvaW50Pk9iamVjdC5hc3NpZ24oe30sIDxDb2xvclBvaW50Pig8YW55PnRoaXMuc3RhdGVcclxuICAgICAgICAuY29udmVyc2lvblBhcmFtZXRlcnMpW3Byb3BlcnR5TmFtZV0pO1xyXG5cclxuICAgICAgaWYgKHhPclkgPT09ICd4Jykge1xyXG4gICAgICAgIG5ld0NvbG9yUG9pbnQueCA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHhPclkgPT09ICd5Jykge1xyXG4gICAgICAgIG5ld0NvbG9yUG9pbnQueSA9IHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdDb252ZXJzaW9uUGFyYW1ldGVycyA9IHRoaXMuc3RhdGUuY29udmVyc2lvblBhcmFtZXRlcnMucGF0Y2goe1xyXG4gICAgICAgIFtwcm9wZXJ0eU5hbWVdOiBuZXdDb2xvclBvaW50XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlQ29sb3JQcm9maWxlVHlwZShDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSwgbmV3Q29udmVyc2lvblBhcmFtZXRlcnMpKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uR2FtbWFDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBuZXdHYW1tYSA9IGdldFZhbHVlRnJvbUlucHV0RXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGNvbnN0IG5ld0NvbnZlcnNpb25QYXJhbWV0ZXJzID0gdGhpcy5zdGF0ZS5jb252ZXJzaW9uUGFyYW1ldGVycy5wYXRjaCh7XHJcbiAgICAgIGdhbW1hOiBuZXdHYW1tYVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlQ29sb3JQcm9maWxlVHlwZShDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSwgbmV3Q29udmVyc2lvblBhcmFtZXRlcnMpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbG9yUG9pbnRSb3coXHJcbiAgbGFiZWw6IHN0cmluZyxcclxuICBjb2xvclBvaW50OiBDb2xvclBvaW50LFxyXG4gIG9uQ29sb3JQb2ludENoYW5nZTogKHhPclk6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4gdm9pZFxyXG4pIHtcclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoeE9yWTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlRnJvbUlucHV0RXZlbnQoZXZlbnQpO1xyXG4gICAgICBvbkNvbG9yUG9pbnRDaGFuZ2UoeE9yWSwgdmFsdWUpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aXJlKGNvbG9yUG9pbnQpYFxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+JHtsYWJlbH08L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cInBvaW50LXBvc2l0aW9uLWlucHV0XCJcclxuICAgICAgICAgIHZhbHVlPSR7Y29sb3JQb2ludC54fSBzdGVwPVwiMC4wMDFcIiBvbmJsdXI9JHtoYW5kbGVDaGFuZ2UoJ3gnKX1cclxuICAgICAgICA+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwicG9pbnQtcG9zaXRpb24taW5wdXRcIlxyXG4gICAgICAgICAgdmFsdWU9JHtjb2xvclBvaW50Lnl9IHN0ZXA9XCIwLjAwMVwiIG9uYmx1cj0ke2hhbmRsZUNoYW5nZSgneScpfVxyXG4gICAgICAgID5cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tSW5wdXRFdmVudChldmVudDogRXZlbnQpOiBudW1iZXIge1xyXG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldDtcclxuXHJcbiAgcmV0dXJuIHBhcnNlRmxvYXQoaW5wdXRFbGVtZW50LnZhbHVlKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0xhYlBhcmFtZXRlcnNJbnB1dHMudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9MYWJQYXJhbWV0ZXJzSW5wdXRzLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTGFiUGFyYW1ldGVyc0lucHV0cy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0xhYlBhcmFtZXRlcnNJbnB1dHMuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9MYWJQYXJhbWV0ZXJzSW5wdXRzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtbWEtaW5wdXQge1xcbiAgd2lkdGg6IDYwcHg7IH1cXG5cXG4ucG9pbnQtcG9zaXRpb24taW5wdXQge1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyc0lucHV0cy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==