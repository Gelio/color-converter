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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Megatron_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Intent_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hyper_wire_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hyper_render_js__ = __webpack_require__(25);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SingularValueDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SVD", function() { return __WEBPACK_IMPORTED_MODULE_6__dc_svd_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EigenvalueDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EVD", function() { return __WEBPACK_IMPORTED_MODULE_7__dc_evd_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CholeskyDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CHO", function() { return __WEBPACK_IMPORTED_MODULE_8__dc_cholesky_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LuDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LU", function() { return __WEBPACK_IMPORTED_MODULE_9__dc_lu_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dc_qr_js__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QrDecomposition", function() { return __WEBPACK_IMPORTED_MODULE_10__dc_qr_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QR", function() { return __WEBPACK_IMPORTED_MODULE_10__dc_qr_js__["a"]; });















/***/ }),
/* 3 */
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
/* 4 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(3);
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
const appStore_1 = __webpack_require__(4);
const HyperComponent_1 = __webpack_require__(26);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dc_lu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dc_svd__ = __webpack_require__(21);
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
/* 12 */
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
/* 13 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(3);


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
        return new ConversionParameters({ x: 0.735, y: 0.2650 }, { x: 0.274, y: 0.717 }, { x: 0.167, y: 0.009 }, { x: 0.3333, y: 0.3333 }, 2.2);
    }
    static wideGamut() {
        return new ConversionParameters({ x: 0.7347, y: 0.2653 }, { x: 0.1152, y: 0.8264 }, { x: 0.1566, y: 0.0177 }, { x: 0.3457, y: 0.3585 }, 1.2);
    }
    static pal() {
        return new ConversionParameters({ x: 0.64, y: 0.33 }, { x: 0.29, y: 0.6 }, { x: 0.15, y: 0.06 }, { x: 0.3127, y: 0.329 }, 1.95);
    }
}
exports.ConversionParameters = ConversionParameters;


/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(22);



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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_js__ = __webpack_require__(3);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
exports.HyperComponent = esm_1.Component;


/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(29);
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
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(61);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorSpaceType_1 = __webpack_require__(11);
const ConversionParameters_1 = __webpack_require__(16);
exports.configuration = {
    defaultImageUrl: 'images/7-colorful-photography.jpg',
    defaultColorSpace: ColorSpaceType_1.ColorSpaceType.YCbCr,
    defaultConversionParameters: ConversionParameters_1.ConversionParameters.sRGB()
};


/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ConversionParameters_1 = __webpack_require__(16);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(22);



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
var update = __webpack_require__(13)(content, options);
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

exports = module.exports = __webpack_require__(12)(undefined);
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
const appStore_1 = __webpack_require__(4);
const configuration_1 = __webpack_require__(34);
const ImageLoader_1 = __webpack_require__(113);
const changeOriginalImage_1 = __webpack_require__(18);
const ConversionParameterBox_1 = __webpack_require__(114);
class Application extends esm_1.Component {
    constructor() {
        super();
        this.imagePicker = new ImagePicker_1.ImagePicker();
        this.originalImageDisplay = new OriginalImageDisplay_1.OriginalImageDisplay();
        this.colorSpacePicker = new ColorSpacePicker_1.ColorSpacePicker();
        this.conversionParameterBox = new ConversionParameterBox_1.ConversionParameterBox();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_easy_dom_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_js__ = __webpack_require__(25);






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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Megatron_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Path_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Style_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Intent_js__ = __webpack_require__(24);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(3);


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
const HyperComponent_1 = __webpack_require__(26);
const appStore_1 = __webpack_require__(4);
const FileToImageConverter_1 = __webpack_require__(78);
const changeOriginalImage_1 = __webpack_require__(18);
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
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(32);
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


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(27)))

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(30);
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(31)))

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(30);


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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31), __webpack_require__(70)(module)))

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(32);




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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(27)))

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(33);
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
const configuration_1 = __webpack_require__(34);
const mergeState_1 = __webpack_require__(76);
const conversionFinished_1 = __webpack_require__(17);
const conversionStarted_1 = __webpack_require__(35);
const changeColorProfileType_1 = __webpack_require__(36);
const changeIlluminantType_1 = __webpack_require__(37);
const changeOriginalImage_1 = __webpack_require__(18);
const changeSelectedColorSpace_1 = __webpack_require__(38);
const ColorProfileType_1 = __webpack_require__(39);
const ConversionParameters_1 = __webpack_require__(16);
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
const conversionFinished_1 = __webpack_require__(17);
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
const appStore_1 = __webpack_require__(4);
const ColorSpaceType_1 = __webpack_require__(11);
const changeSelectedColorSpace_1 = __webpack_require__(38);
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
var update = __webpack_require__(13)(content, options);
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

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, ".original-image-wrapper {\n  margin: 1em auto;\n  max-width: 800px;\n  max-height: 400px; }\n  .original-image-wrapper img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n    max-height: 100%;\n    height: auto; }\n", ""]);

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
var update = __webpack_require__(13)(content, options);
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

exports = module.exports = __webpack_require__(12)(undefined);
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
const conversionFinished_1 = __webpack_require__(17);
const conversionStarted_1 = __webpack_require__(35);
const appStore_1 = __webpack_require__(4);
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
const ColorSpaceType_1 = __webpack_require__(11);
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
const PartialConversionResult_1 = __webpack_require__(19);
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
const PartialConversionResult_1 = __webpack_require__(19);
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
const PartialConversionResult_1 = __webpack_require__(19);
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
const ml_matrix_1 = __webpack_require__(2);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dc_lu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dc_qr__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dc_svd__ = __webpack_require__(21);






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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(22);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


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
const LabParameterBox_1 = __webpack_require__(115);
const ColorSpaceType_1 = __webpack_require__(11);
class ConversionParameterBox extends HyperContainer_1.HyperContainer {
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
        ${this.getColorSpaceParameterBox()}
      </div>
    `;
    }
    getColorSpaceParameterBox() {
        const { illuminantType, colorProfileType, conversionParameters } = this.state;
        return {
            [ColorSpaceType_1.ColorSpaceType.HSV]: () => null,
            [ColorSpaceType_1.ColorSpaceType.YCbCr]: () => null,
            [ColorSpaceType_1.ColorSpaceType.Lab]: () => LabParameterBox_1.LabParameterBox(illuminantType, colorProfileType, conversionParameters)
        }[this.state.selectedColorSpace]();
    }
}
exports.ConversionParameterBox = ConversionParameterBox;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(1);
const ColorProfileType_1 = __webpack_require__(39);
const IlluminantType_1 = __webpack_require__(40);
const changeColorProfileType_1 = __webpack_require__(36);
const changeIlluminantType_1 = __webpack_require__(37);
const appStore_1 = __webpack_require__(4);
const LabeledSelect_1 = __webpack_require__(41);
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
function LabParameterBox(illuminantType, colorProfileType, conversionParameters) {
    return esm_1.wire() `
    <div>
      <label for="illuminant-type-select">Illuminant type: </label>
      ${LabeledSelect_1.LabeledSelect('illuminant-type-select', IlluminantType_1.labeledIlluminants, illuminantType, onIlluminantChange.bind(null, conversionParameters.whitePoint))}
    </div>

    <div>
      <label for="color-profile-select">Color profile: </label>
      ${LabeledSelect_1.LabeledSelect('color-profile-select', ColorProfileType_1.labeledColorProfiles, colorProfileType, onColorProfileChange.bind(null, conversionParameters))}
    </div>

    <pre>${JSON.stringify(conversionParameters, null, 2)}</pre>
  `;
}
exports.LabParameterBox = LabParameterBox;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzEzNDExNTg4NTQ4NWFhZTA5MjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvZWFzeS1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0h5cGVyQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9hYnN0cmFjdE1hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvbG9yU3BhY2VUeXBlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL3Bvb3JseWZpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9sdS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9zdmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9jbGFzc2VzL01lZ2F0cm9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvSW50ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2h5cGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvSHlwZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VJbGx1bWluYW50VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Db2xvclByb2ZpbGVUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvSWxsdW1pbmFudFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbXV0YXRlTWFwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDFELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDJELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3FyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz80NDQ2Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2ZlYXR1cmVzLWRldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci93aXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbWFnZVBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tYmluZVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5wdXRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9tZXJnZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9vdXRwdXRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9GaWxlVG9JbWFnZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Db2xvclNwYWNlUGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3M/NGVjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnNjc3M/OGZiOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1N0YXJ0Q29udmVyc2lvbkJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvSFNWQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9IU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvTGFiQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9MYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1hZWkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9zeW1ib2wtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktcmVzY2FsZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1heC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1pbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvdHJhbnNwb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9zdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3Jvd1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9jb2x1bW5TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvZmxpcENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGVjb21wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvZXZkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL2Nob2xlc2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbWFnZURhdGFDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0NvbnZlcnNpb25QYXJhbWV0ZXJCb3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7O0FBRUE7QUFDeUI7QUFDekI7QUFDOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRThDO0FBQ1o7O0FBRXJCO0FBQ3NCO0FBQ0E7O0FBRVo7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN1dBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLDhDQUE4QywwQkFBMEIsRUFBRTtBQUMxRSxxQkFBcUIsT0FBTyxXQUFXLEdBQUc7QUFDMUMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqRG9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3RUFBaUIsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBbUIsRUFBRTtBQUNuQyxjQUFjLDZCQUE2QjtBQUMzQztBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQUE7QUFBQTs7QUFFSjtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDNURBO0lBT0UsWUFDRSxRQUFvQixFQUNwQixVQUFzQixFQUN0QixTQUFxQixFQUNyQixVQUFzQixFQUN0QixLQUFhO1FBRWIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUM3QixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUNwQixFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUNsQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUNwQixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUN2QixHQUFHLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUTtRQUNwQixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FDN0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFDcEIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFDcEIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFDcEIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFDdkIsR0FBRyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVE7UUFDcEIsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQzdCLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQ3JCLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQ3JCLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQ3JCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQ3ZCLEdBQUcsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUM3QixFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUN2QixFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUN0QixFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUN0QixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUN4QixHQUFHLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUztRQUNyQixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FDN0IsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFDeEIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFDeEIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFDeEIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFDeEIsR0FBRyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUc7UUFDZixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FDN0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFDcEIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFDbkIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFDcEIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFDdkIsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoRkQsb0RBZ0ZDOzs7Ozs7Ozs7O0FDOUVZLDJCQUFtQixHQUFHLHFCQUFxQixDQUFDO0FBRXpELDRCQUNFLGdCQUE0QyxFQUM1QyxZQUFnQztJQUVoQyxNQUFNLENBQUM7UUFDTCxJQUFJLEVBQUUsMkJBQW1CO1FBQ3pCLGdCQUFnQjtRQUNoQixZQUFZO0tBQ2IsQ0FBQztBQUNKLENBQUM7QUFURCxnREFTQzs7Ozs7Ozs7OztBQ2JZLDZCQUFxQixHQUFHLHVCQUF1QixDQUFDO0FBTTdELDZCQUNFLEtBQXVCO0lBRXZCLE1BQU0sQ0FBQztRQUNMLElBQUksRUFBRSw2QkFBcUI7UUFDM0IsS0FBSztLQUNOLENBQUM7QUFDSixDQUFDO0FBUEQsa0RBT0M7Ozs7Ozs7Ozs7QUNmRDtJQU1FLFlBQVksS0FBYSxFQUFFLE1BQWdCLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLFlBQVk7UUFDakIsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekQsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLHdDQUF3QztZQUN4QyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDekMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3ZDLHdDQUF3QztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBN0JELDBEQTZCQzs7Ozs7Ozs7O0FDN0IrQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGFBQWE7O0FBRWhDLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7O0FBRUEsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEMsMkJBQTJCLGFBQWE7QUFDeEMsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQyx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakMsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQywyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDeE1nQztBQUNLOztBQUVyQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUMsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakMsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixXQUFXO0FBQzlCLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsV0FBVztBQUM5Qix1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixXQUFXO0FBQzlCLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDN2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ3FDO0FBQ3BCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDak9BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxxREFBcUQsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJxQjtBQUNSO0FBQ2I7QUFLQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVBLHFDQUE0RDtBQUVuRCx5QkFGYSxlQUFjLENBRWI7Ozs7Ozs7QUNGdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJB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QUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDbEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDcEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDckYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDcEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUs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O0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtB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QyxRQUFRLENBQUMsK0NBQXNCLENBQUMsZUFBZSxFQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUV4RixNQUFNLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxpQkFBaUIsR0FBRywwQ0FBdUIsQ0FBQyxJQUFJLENBQ3BELFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGdCQUFnQixLQUFLLGVBQWUsQ0FDbEUsQ0FBQztJQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsbUJBQVEsQ0FBQyxRQUFRLENBQUMsK0NBQXNCLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RixDQUFDO0FBRUQseUJBQ0UsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQ2xDLG9CQUEwQztJQUUxQyxNQUFNLENBQUMsVUFBSSxFQUFFOzs7UUFHUCw2QkFBYSxDQUNiLHdCQUF3QixFQUN4QixtQ0FBa0IsRUFDbEIsY0FBYyxFQUNkLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQy9EOzs7OztRQUtDLDZCQUFhLENBQ2Isc0JBQXNCLEVBQ3RCLHVDQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUN0RDs7O1dBR0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQ3JELENBQUM7QUFDSixDQUFDO0FBNUJELDBDQTRCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzEzNDExNTg4NTQ4NWFhZTA5MjIiLCJpbXBvcnQgQWJzdHJhY3RNYXRyaXggZnJvbSAnLi4vYWJzdHJhY3RNYXRyaXgnO1xuaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVmlldyBleHRlbmRzIEFic3RyYWN0TWF0cml4KCkge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCwgcm93cywgY29sdW1ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFtTeW1ib2wuc3BlY2llc10oKSB7XG4gICAgICAgIHJldHVybiBNYXRyaXg7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qISAoYykgQW5kcmVhIEdpYW1tYXJjaGkgKElTQykgKi9cblxuaW1wb3J0IE1lZ2F0cm9uIGZyb20gJy4vY2xhc3Nlcy9NZWdhdHJvbi5qcyc7XG5pbXBvcnQgQ29tcG9uZW50LCB7c2V0dXB9IGZyb20gJy4vY2xhc3Nlcy9Db21wb25lbnQuanMnO1xuaW1wb3J0IEludGVudCBmcm9tICcuL29iamVjdHMvSW50ZW50LmpzJztcbmltcG9ydCB3aXJlLCB7Y29udGVudCwgd2Vha2x5fSBmcm9tICcuL2h5cGVyL3dpcmUuanMnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2h5cGVyL3JlbmRlci5qcyc7XG5cbi8vIGFsbCBmdW5jdGlvbnMgYXJlIHNlbGYgYm91bmQgdG8gdGhlIHJpZ2h0IGNvbnRleHRcbi8vIHlvdSBjYW4gZG8gdGhlIGZvbGxvd2luZ1xuLy8gY29uc3Qge2JpbmQsIHdpcmV9ID0gaHlwZXJIVE1MO1xuLy8gYW5kIHVzZSB0aGVtIHJpZ2h0IGF3YXk6IGJpbmQobm9kZSlgaGVsbG8hYDtcbmNvbnN0IGJpbmQgPSBjb250ZXh0ID0+IHJlbmRlci5iaW5kKGNvbnRleHQpO1xuY29uc3QgZGVmaW5lID0gSW50ZW50LmRlZmluZTtcblxuaHlwZXIuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuaHlwZXIuYmluZCA9IGJpbmQ7XG5oeXBlci5kZWZpbmUgPSBkZWZpbmU7XG5oeXBlci5oeXBlciA9IGh5cGVyO1xuaHlwZXIud2lyZSA9IHdpcmU7XG5cbi8vIGl0IGlzIHBvc3NpYmxlIHRvIGRlZmluZSBhIGRpZmZlcmVudCBlbmdpbmVcbi8vIHRvIHJlc29sdmUgbm9kZXMgZGlmZmluZy5cbi8vIFRoZSBlbmdpbmUgbXVzdCBwcm92aWRlIGFuIHVwZGF0ZSBtZXRob2Rcbi8vIGNhcGFibGUgb2YgbXV0YXRpbmcgbGl2ZU5vZGVzIGNvbGxlY3Rpb25cbi8vIGFuZCB0aGUgcmVsYXRlZCBET00uXG4vLyBTZWUgaHlwZXJodG1sLW1hamluYnV1IHRvIGtub3cgbW9yZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGh5cGVyLCAnZW5naW5lJywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gTWVnYXRyb24uZW5naW5lO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldChlbmdpbmUpIHtcbiAgICBNZWdhdHJvbi5lbmdpbmUgPSBlbmdpbmU7XG4gIH1cbn0pO1xuXG4vLyB0aGUgd2lyZSBjb250ZW50IGlzIHRoZSBsYXp5IGRlZmluZWRcbi8vIGh0bWwgb3Igc3ZnIHByb3BlcnR5IG9mIGVhY2ggaHlwZXIuQ29tcG9uZW50XG5zZXR1cChjb250ZW50KTtcblxuLy8gZXZlcnl0aGluZyBpcyBleHBvcnRlZCBkaXJlY3RseSBvciB0aHJvdWdoIHRoZVxuLy8gaHlwZXJIVE1MIGNhbGxiYWNrLCB3aGVuIHVzZWQgYXMgdG9wIGxldmVsIHNjcmlwdFxuZXhwb3J0IHtDb21wb25lbnQsIGJpbmQsIGRlZmluZSwgaHlwZXIsIHdpcmV9O1xuXG4vLyBieSBkZWZhdWx0LCBoeXBlckhUTUwgaXMgYSBzbWFydCBmdW5jdGlvblxuLy8gdGhhdCBcIm1hZ2ljYWxseVwiIHVuZGVyc3RhbmRzIHdoYXQncyB0aGUgYmVzdFxuLy8gdGhpbmcgdG8gZG8gd2l0aCBwYXNzZWQgYXJndW1lbnRzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeXBlcihIVE1MKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/XG4gICAgKEhUTUwgPT0gbnVsbCA/XG4gICAgICBjb250ZW50KCdodG1sJykgOlxuICAgICAgKHR5cGVvZiBIVE1MID09PSAnc3RyaW5nJyA/XG4gICAgICAgIHdpcmUobnVsbCwgSFRNTCkgOlxuICAgICAgICAoJ3JhdycgaW4gSFRNTCA/XG4gICAgICAgICAgY29udGVudCgnaHRtbCcpKEhUTUwpIDpcbiAgICAgICAgICAoJ25vZGVUeXBlJyBpbiBIVE1MID9cbiAgICAgICAgICAgIHJlbmRlci5iaW5kKEhUTUwpIDpcbiAgICAgICAgICAgIHdlYWtseShIVE1MLCAnaHRtbCcpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApKSA6XG4gICAgKCdyYXcnIGluIEhUTUwgP1xuICAgICAgY29udGVudCgnaHRtbCcpIDogd2lyZVxuICAgICkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmF1bHQsIGRlZmF1bHQgYXMgTWF0cml4fSBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQge2RlZmF1bHQgYXMgYWJzdHJhY3RNYXRyaXh9IGZyb20gJy4vYWJzdHJhY3RNYXRyaXgnO1xuXG5leHBvcnQge3dyYXB9IGZyb20gJy4vd3JhcC93cmFwJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFdyYXBwZXJNYXRyaXgxRH0gZnJvbSAnLi93cmFwL1dyYXBwZXJNYXRyaXgxRCc7XG5cbmV4cG9ydCB7c29sdmUsIGludmVyc2V9IGZyb20gJy4vZGVjb21wb3NpdGlvbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIFNWRH0gZnJvbSAnLi9kYy9zdmQuanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIEVWRH0gZnJvbSAnLi9kYy9ldmQuanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIENob2xlc2t5RGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBDSE99IGZyb20gJy4vZGMvY2hvbGVza3kuanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEx1RGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBMVX0gZnJvbSAnLi9kYy9sdS5qcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgUXJEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIFFSfSBmcm9tICcuL2RjL3FyLmpzJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGdsb2JhbCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4vLyBOb2RlLkNPTlNUQU5UU1xuLy8gJ2NhdXNlIHNvbWUgZW5naW5lIGhhcyBubyBnbG9iYWwgTm9kZSBkZWZpbmVkXG4vLyAoaS5lLiBOb2RlLCBOYXRpdmVTY3JpcHQsIGJhc2ljSFRNTCAuLi4gKVxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfTk9ERSA9IDE7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX05PREUgPSAyO1xuZXhwb3J0IGNvbnN0IFRFWFRfTk9ERSA9IDM7XG5leHBvcnQgY29uc3QgQ09NTUVOVF9OT0RFID0gODtcbmV4cG9ydCBjb25zdCBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbi8vIFNWRyByZWxhdGVkIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IE9XTkVSX1NWR19FTEVNRU5UID0gJ293bmVyU1ZHRWxlbWVudCc7XG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIEN1c3RvbSBFbGVtZW50cyAvIE11dGF0aW9uT2JzZXJ2ZXIgY29uc3RhbnRzXG5leHBvcnQgY29uc3QgQ09OTkVDVEVEID0gJ2Nvbm5lY3RlZCc7XG5leHBvcnQgY29uc3QgRElTQ09OTkVDVEVEID0gJ2RpcycgKyBDT05ORUNURUQ7XG5cbi8vIGh5cGVySFRNTCByZWxhdGVkIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IEVYUEFORE8gPSAnX2h5cGVyOiAnO1xuZXhwb3J0IGNvbnN0IFNIT1VMRF9VU0VfVEVYVF9DT05URU5UID0gL15zdHlsZXx0ZXh0YXJlYSQvaTtcbmV4cG9ydCBjb25zdCBVSUQgPSBFWFBBTkRPICsgKChNYXRoLnJhbmRvbSgpICogbmV3IERhdGUpIHwgMCkgKyAnOyc7XG5leHBvcnQgY29uc3QgVUlEQyA9ICc8IS0tJyArIFVJRCArICctLT4nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBpbnB1dFJlZHVjZXIsIElucHV0U3RhdGUgfSBmcm9tICdyZWR1Y2Vycy9pbnB1dFJlZHVjZXInO1xyXG5pbXBvcnQgeyBvdXRwdXRSZWR1Y2VyLCBPdXRwdXRTdGF0ZSB9IGZyb20gJ3JlZHVjZXJzL291dHB1dFJlZHVjZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcbiAgaW5wdXQ6IElucHV0U3RhdGU7XHJcbiAgb3V0cHV0OiBPdXRwdXRTdGF0ZTtcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyczxBcHBTdGF0ZT4oe1xyXG4gIGlucHV0OiBpbnB1dFJlZHVjZXIsXHJcbiAgb3V0cHV0OiBvdXRwdXRSZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFN0b3JlID0gY3JlYXRlU3RvcmU8QXBwU3RhdGU+KFxyXG4gIHJlZHVjZXIsXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYXBwU3RvcmUudHMiLCJpbXBvcnQgTWF0cml4IGZyb20gJy4vbWF0cml4JztcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCBhIHJvdyBpbmRleCBpcyBub3Qgb3V0IG9mIGJvdW5kc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvdXRlcl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUm93SW5kZXgobWF0cml4LCBpbmRleCwgb3V0ZXIpIHtcbiAgICB2YXIgbWF4ID0gb3V0ZXIgPyBtYXRyaXgucm93cyA6IG1hdHJpeC5yb3dzIC0gMTtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbWF4KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdSb3cgaW5kZXggb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IGEgY29sdW1uIGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRzXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW291dGVyXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb2x1bW5JbmRleChtYXRyaXgsIGluZGV4LCBvdXRlcikge1xuICAgIHZhciBtYXggPSBvdXRlciA/IG1hdHJpeC5jb2x1bW5zIDogbWF0cml4LmNvbHVtbnMgLSAxO1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBtYXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0NvbHVtbiBpbmRleCBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIHZlY3RvciBpcyBhbiBhcnJheSB3aXRoIHRoZSByaWdodCBsZW5ndGhcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3JcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUm93VmVjdG9yKG1hdHJpeCwgdmVjdG9yKSB7XG4gICAgaWYgKHZlY3Rvci50bzFEQXJyYXkpIHtcbiAgICAgICAgdmVjdG9yID0gdmVjdG9yLnRvMURBcnJheSgpO1xuICAgIH1cbiAgICBpZiAodmVjdG9yLmxlbmd0aCAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZlY3RvciBzaXplIG11c3QgYmUgdGhlIHNhbWUgYXMgdGhlIG51bWJlciBvZiBjb2x1bW5zJyk7XG4gICAgfVxuICAgIHJldHVybiB2ZWN0b3I7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIHZlY3RvciBpcyBhbiBhcnJheSB3aXRoIHRoZSByaWdodCBsZW5ndGhcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3JcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sdW1uVmVjdG9yKG1hdHJpeCwgdmVjdG9yKSB7XG4gICAgaWYgKHZlY3Rvci50bzFEQXJyYXkpIHtcbiAgICAgICAgdmVjdG9yID0gdmVjdG9yLnRvMURBcnJheSgpO1xuICAgIH1cbiAgICBpZiAodmVjdG9yLmxlbmd0aCAhPT0gbWF0cml4LnJvd3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZlY3RvciBzaXplIG11c3QgYmUgdGhlIHNhbWUgYXMgdGhlIG51bWJlciBvZiByb3dzJyk7XG4gICAgfVxuICAgIHJldHVybiB2ZWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm93OiBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKSxcbiAgICAgICAgY29sdW1uOiBjaGVja0NvbHVtbkluZGljZXMobWF0cml4LCBjb2x1bW5JbmRpY2VzKVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKSB7XG4gICAgaWYgKHR5cGVvZiByb3dJbmRpY2VzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmV4cGVjdGVkIHR5cGUgZm9yIHJvdyBpbmRpY2VzJyk7XG4gICAgfVxuXG4gICAgdmFyIHJvd091dCA9IHJvd0luZGljZXMuc29tZShyID0+IHtcbiAgICAgICAgcmV0dXJuIHIgPCAwIHx8IHIgPj0gbWF0cml4LnJvd3M7XG5cbiAgICB9KTtcblxuICAgIGlmIChyb3dPdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3JvdyBpbmRpY2VzIGFyZSBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93SW5kaWNlcykpIHJvd0luZGljZXMgPSBBcnJheS5mcm9tKHJvd0luZGljZXMpO1xuXG4gICAgcmV0dXJuIHJvd0luZGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbHVtbkluZGljZXMobWF0cml4LCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW5JbmRpY2VzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmV4cGVjdGVkIHR5cGUgZm9yIGNvbHVtbiBpbmRpY2VzJyk7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbk91dCA9IGNvbHVtbkluZGljZXMuc29tZShjID0+IHtcbiAgICAgICAgcmV0dXJuIGMgPCAwIHx8IGMgPj0gbWF0cml4LmNvbHVtbnM7XG4gICAgfSk7XG5cbiAgICBpZiAoY29sdW1uT3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdjb2x1bW4gaW5kaWNlcyBhcmUgb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShjb2x1bW5JbmRpY2VzKSkgY29sdW1uSW5kaWNlcyA9IEFycmF5LmZyb20oY29sdW1uSW5kaWNlcyk7XG5cbiAgICByZXR1cm4gY29sdW1uSW5kaWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmFuZ2UobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDUpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgdHlwZScpO1xuICAgIHZhciBub3RBbGxOdW1iZXJzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpLnNsaWNlKDEpLnNvbWUoZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGFyZyAhPT0gJ251bWJlcic7XG4gICAgfSk7XG4gICAgaWYgKG5vdEFsbE51bWJlcnMpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgdHlwZScpO1xuICAgIGlmIChzdGFydFJvdyA+IGVuZFJvdyB8fCBzdGFydENvbHVtbiA+IGVuZENvbHVtbiB8fCBzdGFydFJvdyA8IDAgfHwgc3RhcnRSb3cgPj0gbWF0cml4LnJvd3MgfHwgZW5kUm93IDwgMCB8fCBlbmRSb3cgPj0gbWF0cml4LnJvd3MgfHwgc3RhcnRDb2x1bW4gPCAwIHx8IHN0YXJ0Q29sdW1uID49IG1hdHJpeC5jb2x1bW5zIHx8IGVuZENvbHVtbiA8IDAgfHwgZW5kQ29sdW1uID49IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdTdWJtYXRyaXggaW5kaWNlcyBhcmUgb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2UoZnJvbSwgdG8pIHtcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5KHRvIC0gZnJvbSArIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycltpXSA9IGZyb20gKyBpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQnlSb3cobWF0cml4KSB7XG4gICAgdmFyIHN1bSA9IE1hdHJpeC56ZXJvcyhtYXRyaXgucm93cywgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgKytpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7ICsraikge1xuICAgICAgICAgICAgc3VtLnNldChpLCAwLCBzdW0uZ2V0KGksIDApICsgbWF0cml4LmdldChpLCBqKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5Q29sdW1uKG1hdHJpeCkge1xuICAgIHZhciBzdW0gPSBNYXRyaXguemVyb3MoMSwgbWF0cml4LmNvbHVtbnMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7ICsraSkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyArK2opIHtcbiAgICAgICAgICAgIHN1bS5zZXQoMCwgaiwgc3VtLmdldCgwLCBqKSArIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1BbGwobWF0cml4KSB7XG4gICAgdmFyIHYgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHYgKz0gbWF0cml4LmdldChpLCBqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICBnbG9iYWwsXG4gIE9XTkVSX1NWR19FTEVNRU5ULFxuICBTVkdfTkFNRVNQQUNFLFxuICBVSUQsXG4gIFVJRENcbn0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5pbXBvcnQge1xuICBoYXNBcHBlbmQsXG4gIGhhc0NvbnRlbnQsXG4gIGhhc0Rvb21lZENsb25lTm9kZSxcbiAgaGFzSW1wb3J0Tm9kZVxufSBmcm9tICcuL2ZlYXR1cmVzLWRldGVjdGlvbi5qcyc7XG5cbmltcG9ydCB7Y3JlYXRlLCBkb2MsIGZyYWdtZW50fSBmcm9tICcuL2Vhc3ktZG9tLmpzJztcblxuLy8gYXBwZW5kcyBhbiBhcnJheSBvZiBub2Rlc1xuLy8gdG8gYSBnZW5lcmljIG5vZGUvZnJhZ21lbnRcbi8vIFdoZW4gYXZhaWxhYmxlLCB1c2VzIGFwcGVuZCBwYXNzaW5nIGFsbCBhcmd1bWVudHMgYXQgb25jZVxuLy8gaG9waW5nIHRoYXQncyBzb21laG93IGZhc3RlciwgZXZlbiBpZiBhcHBlbmQgaGFzIG1vcmUgY2hlY2tzIG9uIHR5cGVcbmV4cG9ydCBjb25zdCBhcHBlbmQgPSBoYXNBcHBlbmQgP1xuICAobm9kZSwgY2hpbGROb2RlcykgPT4ge1xuICAgIG5vZGUuYXBwZW5kLmFwcGx5KG5vZGUsIGNoaWxkTm9kZXMpO1xuICB9IDpcbiAgKG5vZGUsIGNoaWxkTm9kZXMpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZXNbaV0pO1xuICAgIH1cbiAgfTtcblxuLy8gcmVtb3ZlIGNvbW1lbnRzIHBhcnRzIGZyb20gYXR0cmlidXRlcyB0byBhdm9pZCBpc3N1ZXNcbi8vIHdpdGggZWl0aGVyIG9sZCBicm93c2VycyBvciBTVkcgZWxlbWVudHNcbi8vIGV4cG9ydCBjb25zdCBjbGVhbkF0dHJpYnV0ZXMgPSBodG1sID0+IGh0bWwucmVwbGFjZShubywgY29tbWVudHMpO1xuY29uc3QgYXR0ck5hbWUgPSAnW15cXFxcU10rW14gXFxcXGZcXFxcblxcXFxyXFxcXHRcXFxcLz5cIlxcJz1dKyc7XG5jb25zdCBubyA9IG5ldyBSZWdFeHAoXG4gICcoPFthLXpdK1thLXowLTk6Xy1dKikoKD86JyArXG4gICAgYXR0ck5hbWUgK1xuICAnKD86PSg/OlxcJy4qP1xcJ3xcIi4qP1wifDwuKz8+fFxcXFxTKykpPykrKShbXlxcXFxTXSovPz4pJyxcbiAgJ2dpJ1xuKTtcbmNvbnN0IGZpbmRBdHRyaWJ1dGVzID0gbmV3IFJlZ0V4cCgnKCcgKyBhdHRyTmFtZSArICc9KShbXFwnXCJdPyknICsgVUlEQyArICdcXFxcMicsICdnaScpO1xuY29uc3QgY29tbWVudHMgPSAoJDAsICQxLCAkMiwgJDMpID0+XG4gICQxICsgJDIucmVwbGFjZShmaW5kQXR0cmlidXRlcywgcmVwbGFjZUF0dHJpYnV0ZXMpICsgJDM7XG5jb25zdCByZXBsYWNlQXR0cmlidXRlcyA9ICgkMCwgJDEsICQyKSA9PiAkMSArICgkMiB8fCAnXCInKSArIFVJRCArICgkMiB8fCAnXCInKTtcblxuLy8gZ2l2ZW4gYSBub2RlIGFuZCBhIGdlbmVyaWMgSFRNTCBjb250ZW50LFxuLy8gY3JlYXRlIGVpdGhlciBhbiBTVkcgb3IgYW4gSFRNTCBmcmFnbWVudFxuLy8gd2hlcmUgc3VjaCBjb250ZW50IHdpbGwgYmUgaW5qZWN0ZWRcbmV4cG9ydCBjb25zdCBjcmVhdGVGcmFnbWVudCA9IChub2RlLCBodG1sKSA9PlxuICAoT1dORVJfU1ZHX0VMRU1FTlQgaW4gbm9kZSA/XG4gICAgU1ZHRnJhZ21lbnQgOlxuICAgIEhUTUxGcmFnbWVudFxuICApKG5vZGUsIGh0bWwucmVwbGFjZShubywgY29tbWVudHMpKTtcblxuLy8gSUUvRWRnZSBzaGVuYW5pZ2FucyBwcm9vZiBjbG9uZU5vZGVcbi8vIGl0IGdvZXMgdGhyb3VnaCBhbGwgbm9kZXMgbWFudWFsbHlcbi8vIGluc3RlYWQgb2YgcmVseWluZyB0aGUgZW5naW5lIHRvIHN1ZGRlbmx5XG4vLyBtZXJnZSBub2RlcyB0b2dldGhlclxuY29uc3QgY2xvbmVOb2RlID0gaGFzRG9vbWVkQ2xvbmVOb2RlID9cbiAgbm9kZSA9PiB7XG4gICAgY29uc3QgY2xvbmUgPSBub2RlLmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXMgfHxcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGFuIGV4Y2VzcyBvZiBjYXV0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHNvbWUgbm9kZSwgaW4gSUUsIG1pZ2h0IG5vdFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhhdmUgY2hpbGROb2RlcyBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZhbGxiYWNrIGVuc3VyZSB3b3JraW5nIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpbiBvbGRlciBJRSB3aXRob3V0IGNvbXByb21pc2luZyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIGFueSBvdGhlciBicm93c2VyL2VuZ2luZSBpbnZvbHZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICAgICAgICAgIFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZE5vZGVzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZTtcbiAgfSA6XG4gIC8vIHRoZSBmb2xsb3dpbmcgaWdub3JlIGlzIGR1ZSBjb2RlLWNvdmVyYWdlXG4gIC8vIGNvbWJpbmF0aW9uIG9mIG5vdCBoYXZpbmcgZG9jdW1lbnQuaW1wb3J0Tm9kZVxuICAvLyBidXQgaGF2aW5nIGEgd29ya2luZyBub2RlLmNsb25lTm9kZS5cbiAgLy8gVGhpcyBzaGVuYXJpbyBpcyBjb21tb24gb24gb2xkZXIgQW5kcm9pZC9XZWJLaXQgYnJvd3NlcnNcbiAgLy8gYnV0IGJhc2ljSFRNTCBoZXJlIHRlc3RzIGp1c3QgdHdvIG1ham9yIGNhc2VzOlxuICAvLyB3aXRoIGRvY3VtZW50LmltcG9ydE5vZGUgb3Igd2l0aCBicm9rZW4gY2xvbmVOb2RlLlxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBub2RlID0+IG5vZGUuY2xvbmVOb2RlKHRydWUpO1xuXG4vLyB1c2VkIHRvIGltcG9ydCBodG1sIGludG8gZnJhZ21lbnRzXG5leHBvcnQgY29uc3QgaW1wb3J0Tm9kZSA9IGhhc0ltcG9ydE5vZGUgP1xuICAoZG9jLCBub2RlKSA9PiBkb2MuaW1wb3J0Tm9kZShub2RlLCB0cnVlKSA6XG4gIChkb2MsIG5vZGUpID0+IGNsb25lTm9kZShub2RlKVxuXG4vLyBqdXN0IHJlY3ljbGluZyBhIG9uZS1vZmYgYXJyYXkgdG8gdXNlIHNsaWNlL3NwbGljZVxuLy8gaW4gZXZlcnkgbmVlZGVkIHBsYWNlXG5jb25zdCB7cHVzaCwgc2xpY2UsIHNwbGljZSwgdW5zaGlmdH0gPSBbXTtcbmV4cG9ydCB7cHVzaCwgc2xpY2UsIHNwbGljZSwgdW5zaGlmdH07XG5cbi8vIGxhenkgZXZhbHVhdGVkLCByZXR1cm5zIHRoZSB1bmlxdWUgaWRlbnRpdHlcbi8vIG9mIGEgdGVtcGxhdGUgbGl0ZXJhbCwgYXMgdGVtcGFsdGUgbGl0ZXJhbCBpdHNlbGYuXG4vLyBCeSBkZWZhdWx0LCBFUzIwMTUgdGVtcGxhdGUgbGl0ZXJhbHMgYXJlIHVuaXF1ZVxuLy8gdGFnYGEkezF9emAgPT09IHRhZ2BhJHsyfXpgXG4vLyBldmVuIGlmIGludGVycG9sYXRlZCB2YWx1ZXMgYXJlIGRpZmZlcmVudFxuLy8gdGhlIHRlbXBsYXRlIGNodW5rcyBhcmUgaW4gYSBmcm96ZW4gQXJyYXlcbi8vIHRoYXQgaXMgaWRlbnRpY2FsIGVhY2ggdGltZSB5b3UgdXNlIHRoZSBzYW1lXG4vLyBsaXRlcmFsIHRvIHJlcHJlc2VudCBzYW1lIHN0YXRpYyBjb250ZW50XG4vLyBhcm91bmQgaXRzIG93biBpbnRlcnBvbGF0aW9ucy5cbmV4cG9ydCBjb25zdCB1bmlxdWUgPSB0ZW1wbGF0ZSA9PiBUTCh0ZW1wbGF0ZSk7XG5cbi8vIFRMIHJldHVybnMgYSB1bmlxdWUgdmVyc2lvbiBvZiB0aGUgdGVtcGxhdGVcbi8vIGl0IG5lZWRzIGxhenkgZmVhdHVyZSBkZXRlY3Rpb25cbi8vIChjYW5ub3QgdHJ1c3QgbGl0ZXJhbHMgd2l0aCB0cmFuc3BpbGVkIGNvZGUpXG5sZXQgVEwgPSB0ZW1wbGF0ZSA9PiB7XG4gIGlmIChcbiAgICAvLyBUeXBlU2NyaXB0IHRlbXBsYXRlIGxpdGVyYWxzIGFyZSBub3Qgc3RhbmRhcmRcbiAgICB0ZW1wbGF0ZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgncmF3JykgfHxcbiAgICAoXG4gICAgICAvLyBGaXJlZm94IDwgNTUgaGFzIG5vdCBzdGFuZGFyZCBpbXBsZW1lbnRhdGlvbiBuZWl0aGVyXG4gICAgICAvRmlyZWZveFxcLyhcXGQrKS8udGVzdCgoZ2xvYmFsLm5hdmlnYXRvciB8fCB7fSkudXNlckFnZW50KSAmJlxuICAgICAgcGFyc2VGbG9hdChSZWdFeHAuJDEpIDwgNTVcbiAgICApXG4gICkge1xuICAgIC8vIGluIHRoZXNlIGNhc2VzLCBhZGRyZXNzIHRlbXBsYXRlcyBvbmNlXG4gICAgY29uc3QgdGVtcGxhdGVPYmplY3RzID0ge307XG4gICAgLy8gYnV0IGFsd2F5cyByZXR1cm4gdGhlIHNhbWUgdGVtcGxhdGVcbiAgICBUTCA9IHRlbXBsYXRlID0+IHtcbiAgICAgIGNvbnN0IGtleSA9ICdfJyArIHRlbXBsYXRlLmpvaW4oVUlEKTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZU9iamVjdHNba2V5XSB8fCAoXG4gICAgICAgIHRlbXBsYXRlT2JqZWN0c1trZXldID0gdGVtcGxhdGVcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBtYWtlIFRMIGFuIGlkZW50aXR5IGxpa2UgZnVuY3Rpb25cbiAgICBUTCA9IHRlbXBsYXRlID0+IHRlbXBsYXRlO1xuICB9XG4gIHJldHVybiBUTCh0ZW1wbGF0ZSk7XG59O1xuXG4vLyBjcmVhdGUgZG9jdW1lbnQgZnJhZ21lbnRzIHZpYSBuYXRpdmUgdGVtcGxhdGVcbi8vIHdpdGggYSBmYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCB3b24ndCBiZSBhYmxlXG4vLyB0byBkZWFsIHdpdGggc29tZSBpbmplY3RlZCBlbGVtZW50IHN1Y2ggPHRkPiBvciBvdGhlcnNcbmNvbnN0IEhUTUxGcmFnbWVudCA9IGhhc0NvbnRlbnQgP1xuICAobm9kZSwgaHRtbCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShub2RlLCAndGVtcGxhdGUnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gY29udGFpbmVyLmNvbnRlbnQ7XG4gIH0gOlxuICAobm9kZSwgaHRtbCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShub2RlLCAndGVtcGxhdGUnKTtcbiAgICBjb25zdCBjb250ZW50ID0gZnJhZ21lbnQobm9kZSk7XG4gICAgaWYgKC9eW15cXFNdKj88KGNvbCg/Omdyb3VwKT98dCg/OmhlYWR8Ym9keXxmb290fHJ8ZHxoKSkvaS50ZXN0KGh0bWwpKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IFJlZ0V4cC4kMTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHRhYmxlPicgKyBodG1sICsgJzwvdGFibGU+JztcbiAgICAgIGFwcGVuZChjb250ZW50LCBzbGljZS5jYWxsKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIGFwcGVuZChjb250ZW50LCBzbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZE5vZGVzKSk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG4vLyBjcmVhdGVzIFNWRyBmcmFnbWVudCB3aXRoIGEgZmFsbGJhY2sgZm9yIElFIHRoYXQgbmVlZHMgU1ZHXG4vLyB3aXRoaW4gdGhlIEhUTUwgY29udGVudFxuY29uc3QgU1ZHRnJhZ21lbnQgPSBoYXNDb250ZW50ID9cbiAgKG5vZGUsIGh0bWwpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZnJhZ21lbnQobm9kZSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jKG5vZGUpLmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFLCAnc3ZnJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgYXBwZW5kKGNvbnRlbnQsIHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpKTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfSA6XG4gIChub2RlLCBodG1sKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGZyYWdtZW50KG5vZGUpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZShub2RlLCAnZGl2Jyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiJyArIFNWR19OQU1FU1BBQ0UgKyAnXCI+JyArIGh0bWwgKyAnPC9zdmc+JztcbiAgICBhcHBlbmQoY29udGVudCwgc2xpY2UuY2FsbChjb250YWluZXIuZmlyc3RDaGlsZC5jaGlsZE5vZGVzKSk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0aGVzZSBhcmUgdGlueSBoZWxwZXJzIHRvIHNpbXBsaWZ5IG1vc3QgY29tbW9uIG9wZXJhdGlvbnMgbmVlZGVkIGhlcmVcbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAobm9kZSwgdHlwZSkgPT4gZG9jKG5vZGUpLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5leHBvcnQgY29uc3QgZG9jID0gbm9kZSA9PiBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IG5vZGUgPT4gZG9jKG5vZGUpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbmV4cG9ydCBjb25zdCB0ZXh0ID0gKG5vZGUsIHRleHQpID0+IGRvYyhub2RlKS5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2Vhc3ktZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuaW1wb3J0IHsgVW5zdWJzY3JpYmUgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSwgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IEh5cGVyQ29tcG9uZW50IH0gZnJvbSAndXRpbHMvSHlwZXJDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlIGV4dGVuZHMgRGljdGlvbmFyeT4gZXh0ZW5kcyBIeXBlckNvbXBvbmVudDxcclxuICBDb250YWluZXJTdGF0ZVxyXG4+IHtcclxuICBwcml2YXRlIHN0b3JlVW5zdWJzY3JpYmVDYWxsYmFjazogVW5zdWJzY3JpYmUgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLm9uU3RhdGVVcGRhdGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25jb25uZWN0ZWQoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvU3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbmRpc2Nvbm5lY3RlZCgpIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb1N0b3JlKCkge1xyXG4gICAgdGhpcy5zdG9yZVVuc3Vic2NyaWJlQ2FsbGJhY2sgPSBhcHBTdG9yZS5zdWJzY3JpYmUodGhpcy5vblN0YXRlVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVuc3Vic2NyaWJlRnJvbVN0b3JlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RvcmVVbnN1YnNjcmliZUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuc3RvcmVVbnN1YnNjcmliZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0YXRlOiBBcHBTdGF0ZSk6IENvbnRhaW5lclN0YXRlO1xyXG5cclxuICBwcml2YXRlIG9uU3RhdGVVcGRhdGUoaWdub3JlUmVuZGVyOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG5ld0NvbnRhaW5lclN0YXRlID0gdGhpcy5tYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RvcmUuZ2V0U3RhdGUoKSk7XHJcbiAgICBjb25zdCByZW5kZXJOZWVkZWQgPSB0aGlzLnBhdGNoU3RhdGUobmV3Q29udGFpbmVyU3RhdGUpO1xyXG5cclxuICAgIGlmIChyZW5kZXJOZWVkZWQgJiYgIWlnbm9yZVJlbmRlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXRjaFN0YXRlKG5ld1N0YXRlOiBQYXJ0aWFsPENvbnRhaW5lclN0YXRlPik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHJlbmRlck5lZWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld1N0YXRlKSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IG5ld1N0YXRlW2tleV07XHJcblxyXG4gICAgICBpZiAocHJldmlvdXNWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdGF0ZVtrZXldID0gbmV3VmFsdWU7XHJcbiAgICAgIHJlbmRlck5lZWRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlck5lZWRlZDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdXRpbHMvSHlwZXJDb250YWluZXIudHMiLCJpbXBvcnQgJy4vc3ltYm9sLXNwZWNpZXMnO1xuaW1wb3J0IEFic3RyYWN0TWF0cml4IGZyb20gJy4vYWJzdHJhY3RNYXRyaXgnO1xuaW1wb3J0IHtcbiAgICBjaGVja0NvbHVtbkluZGV4LFxuICAgIGNoZWNrQ29sdW1uVmVjdG9yLFxuICAgIGNoZWNrUm93SW5kZXgsXG4gICAgY2hlY2tSb3dWZWN0b3Jcbn0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IGV4dGVuZHMgQWJzdHJhY3RNYXRyaXgoQXJyYXkpIHtcbiAgICBjb25zdHJ1Y3RvcihuUm93cywgbkNvbHVtbnMpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBuUm93cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkoblJvd3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRyaXguaXNNYXRyaXgoblJvd3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gblJvd3MuY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG5Sb3dzKSAmJiBuUm93cyA+IDApIHsgLy8gQ3JlYXRlIGFuIGVtcHR5IG1hdHJpeFxuICAgICAgICAgICAgc3VwZXIoblJvd3MpO1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIobkNvbHVtbnMpICYmIG5Db2x1bW5zID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuUm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBuZXcgQXJyYXkobkNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbkNvbHVtbnMgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5Sb3dzKSkgeyAvLyBDb3B5IHRoZSB2YWx1ZXMgZnJvbSB0aGUgMkQgYXJyYXlcbiAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5Sb3dzO1xuICAgICAgICAgICAgblJvd3MgPSBtYXRyaXgubGVuZ3RoO1xuICAgICAgICAgICAgbkNvbHVtbnMgPSBtYXRyaXhbMF0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuQ29sdW1ucyAhPT0gJ251bWJlcicgfHwgbkNvbHVtbnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdEYXRhIG11c3QgYmUgYSAyRCBhcnJheSB3aXRoIGF0IGxlYXN0IG9uZSBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlcihuUm93cyk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgblJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChtYXRyaXhbaV0ubGVuZ3RoICE9PSBuQ29sdW1ucykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5jb25zaXN0ZW50IGFycmF5IGRpbWVuc2lvbnMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1tpXSA9IFtdLmNvbmNhdChtYXRyaXhbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlciBvciBhbiBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm93cyA9IG5Sb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBuQ29sdW1ucztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpc1tyb3dJbmRleF1bY29sdW1uSW5kZXhdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbcm93SW5kZXhdW2NvbHVtbkluZGV4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcm93IGZyb20gdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICovXG4gICAgcmVtb3ZlUm93KGluZGV4KSB7XG4gICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5yb3dzID09PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQSBtYXRyaXggY2Fubm90IGhhdmUgbGVzcyB0aGFuIG9uZSByb3cnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMucm93cyAtPSAxO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcm93IGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXggPSB0aGlzLnJvd3NdIC0gUm93IGluZGV4XG4gICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IGFycmF5IC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICovXG4gICAgYWRkUm93KGluZGV4LCBhcnJheSkge1xuICAgICAgICBpZiAoYXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXJyYXkgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5yb3dzO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgsIHRydWUpO1xuICAgICAgICBhcnJheSA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIGFycmF5LCB0cnVlKTtcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGFycmF5KTtcbiAgICAgICAgdGhpcy5yb3dzICs9IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb2x1bW4gZnJvbSB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDb2x1bW4gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgKi9cbiAgICByZW1vdmVDb2x1bW4oaW5kZXgpIHtcbiAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnMgPT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBIG1hdHJpeCBjYW5ub3QgaGF2ZSBsZXNzIHRoYW4gb25lIGNvbHVtbicpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbaV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnMgLT0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbHVtbiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4ID0gdGhpcy5jb2x1bW5zXSAtIENvbHVtbiBpbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSBhcnJheSAtIEFycmF5IG9yIHZlY3RvclxuICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAqL1xuICAgIGFkZENvbHVtbihpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcnJheSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFycmF5ID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgfVxuICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4LCB0cnVlKTtcbiAgICAgICAgYXJyYXkgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCBhcnJheSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbaV0uc3BsaWNlKGluZGV4LCAwLCBhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zICs9IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvbWF0cml4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBMdURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9sdSc7XG5pbXBvcnQgU3ZEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvc3ZkJztcbmltcG9ydCByZXNjYWxlIGZyb20gJ21sLWFycmF5LXJlc2NhbGUnO1xuaW1wb3J0IHtcbiAgICBjaGVja1Jvd1ZlY3RvciwgY2hlY2tSb3dJbmRleCwgY2hlY2tDb2x1bW5JbmRleCwgY2hlY2tDb2x1bW5WZWN0b3IsXG4gICAgY2hlY2tSYW5nZSwgY2hlY2tJbmRpY2VzLFxuICAgIHN1bUJ5Um93LCBzdW1CeUNvbHVtbiwgc3VtQWxsXG59IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgTWF0cml4VHJhbnNwb3NlVmlldyBmcm9tICcuL3ZpZXdzL3RyYW5zcG9zZSc7XG5pbXBvcnQgTWF0cml4Um93VmlldyBmcm9tICcuL3ZpZXdzL3Jvdyc7XG5pbXBvcnQgTWF0cml4U3ViVmlldyBmcm9tICcuL3ZpZXdzL3N1Yic7XG5pbXBvcnQgTWF0cml4U2VsZWN0aW9uVmlldyBmcm9tICcuL3ZpZXdzL3NlbGVjdGlvbic7XG5pbXBvcnQgTWF0cml4Um93U2VsZWN0aW9uVmlldyBmcm9tICcuL3ZpZXdzL3Jvd1NlbGVjdGlvbic7XG5pbXBvcnQgTWF0cml4Q29sdW1uU2VsZWN0aW9uVmlldyBmcm9tICcuL3ZpZXdzL2NvbHVtblNlbGVjdGlvbic7XG5pbXBvcnQgTWF0cml4Q29sdW1uVmlldyBmcm9tICcuL3ZpZXdzL2NvbHVtbic7XG5pbXBvcnQgTWF0cml4RmxpcFJvd1ZpZXcgZnJvbSAnLi92aWV3cy9mbGlwUm93JztcbmltcG9ydCBNYXRyaXhGbGlwQ29sdW1uVmlldyBmcm9tICcuL3ZpZXdzL2ZsaXBDb2x1bW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYnN0cmFjdE1hdHJpeChzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yID09PSB1bmRlZmluZWQpIHN1cGVyQ3RvciA9IE9iamVjdDtcblxuICAgIC8qKlxuICAgICAqIFJlYWwgbWF0cml4XG4gICAgICogQGNsYXNzIE1hdHJpeFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfEFycmF5fE1hdHJpeH0gblJvd3MgLSBOdW1iZXIgb2Ygcm93cyBvZiB0aGUgbmV3IG1hdHJpeCxcbiAgICAgKiAyRCBhcnJheSBjb250YWluaW5nIHRoZSBkYXRhIG9yIE1hdHJpeCBpbnN0YW5jZSB0byBjbG9uZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbkNvbHVtbnNdIC0gTnVtYmVyIG9mIGNvbHVtbnMgb2YgdGhlIG5ldyBtYXRyaXhcbiAgICAgKi9cbiAgICBjbGFzcyBNYXRyaXggZXh0ZW5kcyBzdXBlckN0b3Ige1xuICAgICAgICBzdGF0aWMgZ2V0IFtTeW1ib2wuc3BlY2llc10oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgTWF0cml4IHdpdGggdGhlIGNob3NlbiBkaW1lbnNpb25zIGZyb20gYSAxRCBhcnJheVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbmV3Um93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdDb2x1bW5zIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbmV3RGF0YSAtIEEgMUQgYXJyYXkgY29udGFpbmluZyBkYXRhIGZvciB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGZyb20xREFycmF5KG5ld1Jvd3MsIG5ld0NvbHVtbnMsIG5ld0RhdGEpIHtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBuZXdSb3dzICogbmV3Q29sdW1ucztcbiAgICAgICAgICAgIGlmIChsZW5ndGggIT09IG5ld0RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0RhdGEgbGVuZ3RoIGRvZXMgbm90IG1hdGNoIGdpdmVuIGRpbWVuc2lvbnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcyhuZXdSb3dzLCBuZXdDb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG5ld1Jvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgbmV3Q29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldChyb3csIGNvbHVtbiwgbmV3RGF0YVtyb3cgKiBuZXdDb2x1bW5zICsgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgcm93IHZlY3RvciwgYSBtYXRyaXggd2l0aCBvbmx5IG9uZSByb3cuXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5ld0RhdGEgLSBBIDFEIGFycmF5IGNvbnRhaW5pbmcgZGF0YSBmb3IgdGhlIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyByb3dWZWN0b3IobmV3RGF0YSkge1xuICAgICAgICAgICAgdmFyIHZlY3RvciA9IG5ldyB0aGlzKDEsIG5ld0RhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlY3Rvci5zZXQoMCwgaSwgbmV3RGF0YVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBjb2x1bW4gdmVjdG9yLCBhIG1hdHJpeCB3aXRoIG9ubHkgb25lIGNvbHVtbi5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbmV3RGF0YSAtIEEgMUQgYXJyYXkgY29udGFpbmluZyBkYXRhIGZvciB0aGUgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGNvbHVtblZlY3RvcihuZXdEYXRhKSB7XG4gICAgICAgICAgICB2YXIgdmVjdG9yID0gbmV3IHRoaXMobmV3RGF0YS5sZW5ndGgsIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmVjdG9yLnNldChpLCAwLCBuZXdEYXRhW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhbiBlbXB0eSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVmFsdWVzIHdpbGwgYmUgdW5kZWZpbmVkLiBTYW1lIGFzIHVzaW5nIG5ldyBNYXRyaXgocm93cywgY29sdW1ucykuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBlbXB0eShyb3dzLCBjb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMocm93cywgY29sdW1ucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBkaW1lbnNpb25zLiBWYWx1ZXMgd2lsbCBiZSBzZXQgdG8gemVyby5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHplcm9zKHJvd3MsIGNvbHVtbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5KHJvd3MsIGNvbHVtbnMpLmZpbGwoMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBkaW1lbnNpb25zLiBWYWx1ZXMgd2lsbCBiZSBzZXQgdG8gb25lLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgb25lcyhyb3dzLCBjb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbXB0eShyb3dzLCBjb2x1bW5zKS5maWxsKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVmFsdWVzIHdpbGwgYmUgcmFuZG9tbHkgc2V0LlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW3JuZz1NYXRoLnJhbmRvbV0gLSBSYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcmFuZChyb3dzLCBjb2x1bW5zLCBybmcpIHtcbiAgICAgICAgICAgIGlmIChybmcgPT09IHVuZGVmaW5lZCkgcm5nID0gTWF0aC5yYW5kb207XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gdGhpcy5lbXB0eShyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldChpLCBqLCBybmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbnMuIFZhbHVlcyB3aWxsIGJlIHJhbmRvbSBpbnRlZ2Vycy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4VmFsdWU9MTAwMF0gLSBNYXhpbXVtIHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtybmc9TWF0aC5yYW5kb21dIC0gUmFuZG9tIG51bWJlciBnZW5lcmF0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHJhbmRJbnQocm93cywgY29sdW1ucywgbWF4VmFsdWUsIHJuZykge1xuICAgICAgICAgICAgaWYgKG1heFZhbHVlID09PSB1bmRlZmluZWQpIG1heFZhbHVlID0gMTAwMDtcbiAgICAgICAgICAgIGlmIChybmcgPT09IHVuZGVmaW5lZCkgcm5nID0gTWF0aC5yYW5kb207XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gdGhpcy5lbXB0eShyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5mbG9vcihybmcoKSAqIG1heFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldChpLCBqLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIGlkZW50aXR5IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBkaW1lbnNpb24uIFZhbHVlcyBvZiB0aGUgZGlhZ29uYWwgd2lsbCBiZSAxIGFuZCBvdGhlcnMgd2lsbCBiZSAwLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29sdW1ucz1yb3dzXSAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdmFsdWU9MV0gLSBWYWx1ZSB0byBmaWxsIHRoZSBkaWFnb25hbCB3aXRoXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IGlkZW50aXR5IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGV5ZShyb3dzLCBjb2x1bW5zLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMgPT09IHVuZGVmaW5lZCkgY29sdW1ucyA9IHJvd3M7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgdmFsdWUgPSAxO1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuemVyb3Mocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWF0cml4LnNldChpLCBpLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBkaWFnb25hbCBtYXRyaXggYmFzZWQgb24gdGhlIGdpdmVuIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gQXJyYXkgY29udGFpbmluZyB0aGUgZGF0YSBmb3IgdGhlIGRpYWdvbmFsXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcm93c10gLSBOdW1iZXIgb2Ygcm93cyAoRGVmYXVsdDogZGF0YS5sZW5ndGgpXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29sdW1uc10gLSBOdW1iZXIgb2YgY29sdW1ucyAoRGVmYXVsdDogcm93cylcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgZGlhZ29uYWwgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZGlhZyhkYXRhLCByb3dzLCBjb2x1bW5zKSB7XG4gICAgICAgICAgICB2YXIgbCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHJvd3MgPT09IHVuZGVmaW5lZCkgcm93cyA9IGw7XG4gICAgICAgICAgICBpZiAoY29sdW1ucyA9PT0gdW5kZWZpbmVkKSBjb2x1bW5zID0gcm93cztcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihsLCByb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSB0aGlzLnplcm9zKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgaSwgZGF0YVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBtYXRyaXggd2hvc2UgZWxlbWVudHMgYXJlIHRoZSBtaW5pbXVtIGJldHdlZW4gbWF0cml4MSBhbmQgbWF0cml4MlxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4MVxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4MlxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgbWluKG1hdHJpeDEsIG1hdHJpeDIpIHtcbiAgICAgICAgICAgIG1hdHJpeDEgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDEpO1xuICAgICAgICAgICAgbWF0cml4MiA9IHRoaXMuY2hlY2tNYXRyaXgobWF0cml4Mik7XG4gICAgICAgICAgICB2YXIgcm93cyA9IG1hdHJpeDEucm93cztcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gbWF0cml4MS5jb2x1bW5zO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2V0KGksIGosIE1hdGgubWluKG1hdHJpeDEuZ2V0KGksIGopLCBtYXRyaXgyLmdldChpLCBqKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG1hdHJpeCB3aG9zZSBlbGVtZW50cyBhcmUgdGhlIG1heGltdW0gYmV0d2VlbiBtYXRyaXgxIGFuZCBtYXRyaXgyXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXgxXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXgyXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBtYXgobWF0cml4MSwgbWF0cml4Mikge1xuICAgICAgICAgICAgbWF0cml4MSA9IHRoaXMuY2hlY2tNYXRyaXgobWF0cml4MSk7XG4gICAgICAgICAgICBtYXRyaXgyID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgyKTtcbiAgICAgICAgICAgIHZhciByb3dzID0gbWF0cml4MS5yb3dzO1xuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSBtYXRyaXgxLmNvbHVtbnM7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgTWF0aC5tYXgobWF0cml4MS5nZXQoaSwgaiksIG1hdHJpeDIuZ2V0KGksIGopKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB0aGF0IHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBhIE1hdHJpeCBhbmQgdHJpZXMgdG8gaW5zdGFudGlhdGUgb25lIGlmIG5vdFxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBjaGVja01hdHJpeCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeC5pc01hdHJpeCh2YWx1ZSkgPyB2YWx1ZSA6IG5ldyB0aGlzKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGFyZ3VtZW50IGlzIGEgTWF0cml4LCBmYWxzZSBvdGhlcndpc2VcbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGlzTWF0cml4KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlICE9IG51bGwpICYmICh2YWx1ZS5rbGFzcyA9PT0gJ01hdHJpeCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcm9wIHtudW1iZXJ9IHNpemUgLSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBtYXRyaXguXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbGllcyBhIGNhbGxiYWNrIGZvciBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeC4gVGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiB0aGUgbWF0cml4ICh0aGlzKSBjb250ZXh0LlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gcGFyYW1ldGVycyA6IGkgKHJvdykgYW5kIGogKGNvbHVtbilcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBhcHBseShjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlpID0gdGhpcy5yb3dzO1xuICAgICAgICAgICAgdmFyIGpqID0gdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBqajsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyAxRCBhcnJheSBmaWxsZWQgcm93IGJ5IHJvdyB3aXRoIHRoZSBtYXRyaXggdmFsdWVzXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgdG8xREFycmF5KCkge1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gbmV3IEFycmF5KHRoaXMuc2l6ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtpICogdGhpcy5jb2x1bW5zICsgal0gPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIDJEIGFycmF5IGNvbnRhaW5pbmcgYSBjb3B5IG9mIHRoZSBkYXRhXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgdG8yREFycmF5KCkge1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBuZXcgQXJyYXkodGhpcy5yb3dzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3B5W2ldID0gbmV3IEFycmF5KHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb3B5W2ldW2pdID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWF0cml4IGhhcyBvbmUgcm93XG4gICAgICAgICAqL1xuICAgICAgICBpc1Jvd1ZlY3RvcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvd3MgPT09IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWF0cml4IGhhcyBvbmUgY29sdW1uXG4gICAgICAgICAqL1xuICAgICAgICBpc0NvbHVtblZlY3RvcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbHVtbnMgPT09IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWF0cml4IGhhcyBvbmUgcm93IG9yIG9uZSBjb2x1bW5cbiAgICAgICAgICovXG4gICAgICAgIGlzVmVjdG9yKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnJvd3MgPT09IDEpIHx8ICh0aGlzLmNvbHVtbnMgPT09IDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBoYXMgdGhlIHNhbWUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnNcbiAgICAgICAgICovXG4gICAgICAgIGlzU3F1YXJlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm93cyA9PT0gdGhpcy5jb2x1bW5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBpcyBzcXVhcmUgYW5kIGhhcyB0aGUgc2FtZSB2YWx1ZXMgb24gYm90aCBzaWRlcyBvZiB0aGUgZGlhZ29uYWxcbiAgICAgICAgICovXG4gICAgICAgIGlzU3ltbWV0cmljKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgIT09IHRoaXMuZ2V0KGosIGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYSBnaXZlbiBlbGVtZW50IG9mIHRoZSBtYXRyaXguIG1hdC5zZXQoMyw0LDEpIGlzIGVxdWl2YWxlbnQgdG8gbWF0WzNdWzRdPTFcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dJbmRleCAtIEluZGV4IG9mIHRoZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkluZGV4IC0gSW5kZXggb2YgdGhlIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2V0IG1ldGhvZCBpcyB1bmltcGxlbWVudGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gZWxlbWVudCBvZiB0aGUgbWF0cml4LiBtYXQuZ2V0KDMsNCkgaXMgZXF1aXZhbGVudCB0byBtYXRyaXhbM11bNF1cbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dJbmRleCAtIEluZGV4IG9mIHRoZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkluZGV4IC0gSW5kZXggb2YgdGhlIGNvbHVtblxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IG1ldGhvZCBpcyB1bmltcGxlbWVudGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBtYXRyaXggdGhhdCBpcyBhIHJlcGV0aXRpb24gb2YgdGhlIGN1cnJlbnQgbWF0cml4LiBOZXcgbWF0cml4IGhhcyByb3dSZXAgdGltZXMgdGhlIG51bWJlciBvZlxuICAgICAgICAgKiByb3dzIG9mIHRoZSBtYXRyaXgsIGFuZCBjb2xSZXAgdGltZXMgdGhlIG51bWJlciBvZiBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd1JlcCAtIE51bWJlciBvZiB0aW1lcyB0aGUgcm93cyBzaG91bGQgYmUgcmVwZWF0ZWRcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbFJlcCAtIE51bWJlciBvZiB0aW1lcyB0aGUgY29sdW1ucyBzaG91bGQgYmUgcmVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeChbWzEsMl1dKTtcbiAgICAgICAgICogbWF0cml4LnJlcGVhdCgyKTsgLy8gW1sxLDJdLFsxLDJdXVxuICAgICAgICAgKi9cbiAgICAgICAgcmVwZWF0KHJvd1JlcCwgY29sUmVwKSB7XG4gICAgICAgICAgICByb3dSZXAgPSByb3dSZXAgfHwgMTtcbiAgICAgICAgICAgIGNvbFJlcCA9IGNvbFJlcCB8fCAxO1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSh0aGlzLnJvd3MgKiByb3dSZXAsIHRoaXMuY29sdW1ucyAqIGNvbFJlcCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd1JlcDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2xSZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXguc2V0U3ViTWF0cml4KHRoaXMsIHRoaXMucm93cyAqIGksIHRoaXMuY29sdW1ucyAqIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRmlsbHMgdGhlIG1hdHJpeCB3aXRoIGEgZ2l2ZW4gdmFsdWUuIEFsbCBlbGVtZW50cyB3aWxsIGJlIHNldCB0byB0aGlzIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBOZXcgdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBmaWxsKHZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTmVnYXRlcyB0aGUgbWF0cml4LiBBbGwgZWxlbWVudHMgd2lsbCBiZSBtdWx0aXBsaWVkIGJ5ICgtMSlcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBuZWcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tdWxTKC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IGFycmF5IGZyb20gdGhlIGdpdmVuIHJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRSb3coaW5kZXgpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgdmFyIHJvdyA9IG5ldyBBcnJheSh0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHJvd1tpXSA9IHRoaXMuZ2V0KGluZGV4LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyByb3cgdmVjdG9yIGZyb20gdGhlIGdpdmVuIHJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Um93VmVjdG9yKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yb3dWZWN0b3IodGhpcy5nZXRSb3coaW5kZXgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGEgcm93IGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IGFycmF5IC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc2V0Um93KGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICBhcnJheSA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIGFycmF5KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChpbmRleCwgaSwgYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgdHdvIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdzEgLSBGaXJzdCByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdzIgLSBTZWNvbmQgcm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc3dhcFJvd3Mocm93MSwgcm93Mikge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cxKTtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93Mik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSB0aGlzLmdldChyb3cxLCBpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3cxLCBpLCB0aGlzLmdldChyb3cyLCBpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm93MiwgaSwgdGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IGFycmF5IGZyb20gdGhlIGdpdmVuIGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRDb2x1bW4oaW5kZXgpIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IG5ldyBBcnJheSh0aGlzLnJvd3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbHVtbltpXSA9IHRoaXMuZ2V0KGksIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyBjb2x1bW4gdmVjdG9yIGZyb20gdGhlIGdpdmVuIGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q29sdW1uVmVjdG9yKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jb2x1bW5WZWN0b3IodGhpcy5nZXRDb2x1bW4oaW5kZXgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGEgY29sdW1uIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IGFycmF5IC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc2V0Q29sdW1uKGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICBhcnJheSA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIGFycmF5KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBpbmRleCwgYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgdHdvIGNvbHVtbnNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbjEgLSBGaXJzdCBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbjIgLSBTZWNvbmQgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc3dhcENvbHVtbnMoY29sdW1uMSwgY29sdW1uMikge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4xKTtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uMik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSB0aGlzLmdldChpLCBjb2x1bW4xKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBjb2x1bW4xLCB0aGlzLmdldChpLCBjb2x1bW4yKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgY29sdW1uMiwgdGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIHRoZSB2YWx1ZXMgb2YgYSB2ZWN0b3IgdG8gZWFjaCByb3dcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGFkZFJvd1ZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSArIHZlY3RvcltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3VidHJhY3RzIHRoZSB2YWx1ZXMgb2YgYSB2ZWN0b3IgZnJvbSBlYWNoIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc3ViUm93VmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC0gdmVjdG9yW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXBsaWVzIHRoZSB2YWx1ZXMgb2YgYSB2ZWN0b3Igd2l0aCBlYWNoIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgbXVsUm93VmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICogdmVjdG9yW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXZpZGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCByb3cgYnkgdGhvc2Ugb2YgYSB2ZWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGRpdlJvd1ZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAvIHZlY3RvcltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIHRvIGVhY2ggY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBhZGRDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKyB2ZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN1YnRyYWN0cyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIGZyb20gZWFjaCBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHN1YkNvbHVtblZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAtIHZlY3RvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlwbGllcyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIHdpdGggZWFjaCBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIG11bENvbHVtblZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAqIHZlY3RvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGl2aWRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY29sdW1uIGJ5IHRob3NlIG9mIGEgdmVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBkaXZDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLyB2ZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpcGxpZXMgdGhlIHZhbHVlcyBvZiBhIHJvdyB3aXRoIGEgc2NhbGFyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBtdWxSb3coaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChpbmRleCwgaSwgdGhpcy5nZXQoaW5kZXgsIGkpICogdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlwbGllcyB0aGUgdmFsdWVzIG9mIGEgY29sdW1uIHdpdGggYSBzY2FsYXJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIG11bENvbHVtbihpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGluZGV4LCB0aGlzLmdldChpLCBpbmRleCkgKiB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4KCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBqKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXhpbXVtIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SW5kZXgoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgdmFyIGlkeCA9IFswLCAwXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBqKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeFswXSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhbMV0gPSBqO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWluKCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBqKSA8IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtaW5pbXVtIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbWluSW5kZXgoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgdmFyIGlkeCA9IFswLCAwXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBqKSA8IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeFswXSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhbMV0gPSBqO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIG9mIG9uZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtYXhSb3cocm93KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KHJvdywgMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXhpbXVtIHZhbHVlIG9mIG9uZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1heFJvd0luZGV4KHJvdykge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgICAgICAgICAgdmFyIGlkeCA9IFtyb3csIDBdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChyb3csIGkpID4gdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgaWR4WzFdID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgb2Ygb25lIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1pblJvdyhyb3cpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA8IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1heGltdW0gdmFsdWUgb2Ygb25lIHJvd1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbWluUm93SW5kZXgocm93KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KHJvdywgMCk7XG4gICAgICAgICAgICB2YXIgaWR4ID0gW3JvdywgMF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgICAgICAgICAgICAgICBpZHhbMV0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBvZiBvbmUgY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Q29sdW1uKGNvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pID4gdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF4aW11bSB2YWx1ZSBvZiBvbmUgY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtYXhDb2x1bW5JbmRleChjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbMCwgY29sdW1uXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIGlkeFswXSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIG9mIG9uZSBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5Db2x1bW4oY29sdW1uKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIGNvbHVtbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGNvbHVtbikgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtaW5pbXVtIHZhbHVlIG9mIG9uZSBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1pbkNvbHVtbkluZGV4KGNvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIGlkeCA9IFswLCBjb2x1bW5dO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pIDwgdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgaWR4WzBdID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgZGlhZ29uYWwgdmFsdWVzIG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBkaWFnKCkge1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIHZhciBkaWFnID0gbmV3IEFycmF5KG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGlhZ1tpXSA9IHRoaXMuZ2V0KGksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpYWc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgc3VtIGJ5IHRoZSBhcmd1bWVudCBnaXZlbiwgaWYgbm8gYXJndW1lbnQgZ2l2ZW4sXG4gICAgICAgICAqIGl0IHJldHVybnMgdGhlIHN1bSBvZiBhbGwgZWxlbWVudHMgb2YgdGhlIG1hdHJpeC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJ5IC0gc3VtIGJ5ICdyb3cnIG9yICdjb2x1bW4nLlxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgc3VtKGJ5KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGJ5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncm93JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bUJ5Um93KHRoaXMpO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW1CeUNvbHVtbih0aGlzKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtQWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1lYW4gb2YgYWxsIGVsZW1lbnRzIG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWVhbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bSgpIC8gdGhpcy5zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgYWxsIGVsZW1lbnRzIG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgcHJvZCgpIHtcbiAgICAgICAgICAgIHZhciBwcm9kID0gMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2QgKj0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbm9ybSBvZiBhIG1hdHJpeC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBcImZyb2Jlbml1c1wiIChkZWZhdWx0KSBvciBcIm1heFwiIHJldHVybiByZXNwLiB0aGUgRnJvYmVuaXVzIG5vcm0gYW5kIHRoZSBtYXggbm9ybS5cbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbm9ybSh0eXBlID0gJ2Zyb2Jlbml1cycpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtYXgnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmcm9iZW5pdXMnKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyB0aGlzLmdldChpLCBqKSAqIHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQocmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYHVua25vd24gbm9ybSB0eXBlOiAke3R5cGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcHV0ZXMgdGhlIGN1bXVsYXRpdmUgc3VtIG9mIHRoZSBtYXRyaXggZWxlbWVudHMgKGluIHBsYWNlLCByb3cgYnkgcm93KVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGN1bXVsYXRpdmVTdW0oKSB7XG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgc3VtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wdXRlcyB0aGUgZG90IChzY2FsYXIpIHByb2R1Y3QgYmV0d2VlbiB0aGUgbWF0cml4IGFuZCBhbm90aGVyXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSB2ZWN0b3IyIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBkb3QodmVjdG9yMikge1xuICAgICAgICAgICAgaWYgKE1hdHJpeC5pc01hdHJpeCh2ZWN0b3IyKSkgdmVjdG9yMiA9IHZlY3RvcjIudG8xREFycmF5KCk7XG4gICAgICAgICAgICB2YXIgdmVjdG9yMSA9IHRoaXMudG8xREFycmF5KCk7XG4gICAgICAgICAgICBpZiAodmVjdG9yMS5sZW5ndGggIT09IHZlY3RvcjIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZlY3RvcnMgZG8gbm90IGhhdmUgdGhlIHNhbWUgc2l6ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRvdCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkb3QgKz0gdmVjdG9yMVtpXSAqIHZlY3RvcjJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG90O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1hdHJpeCBwcm9kdWN0IGJldHdlZW4gdGhpcyBhbmQgb3RoZXJcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG90aGVyXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIG1tdWwob3RoZXIpIHtcbiAgICAgICAgICAgIG90aGVyID0gdGhpcy5jb25zdHJ1Y3Rvci5jaGVja01hdHJpeChvdGhlcik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zICE9PSBvdGhlci5yb3dzKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ051bWJlciBvZiBjb2x1bW5zIG9mIGxlZnQgbWF0cml4IGFyZSBub3QgZXF1YWwgdG8gbnVtYmVyIG9mIHJvd3Mgb2YgcmlnaHQgbWF0cml4LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbSA9IHRoaXMucm93cztcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgdmFyIHAgPSBvdGhlci5jb2x1bW5zO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKG0sIHApO1xuXG4gICAgICAgICAgICB2YXIgQmNvbGogPSBuZXcgQXJyYXkobik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHA7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIEJjb2xqW2tdID0gb3RoZXIuZ2V0KGssIGopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyArPSB0aGlzLmdldChpLCBrKSAqIEJjb2xqW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldChpLCBqLCBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyYXNzZW4yeDIob3RoZXIpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oMiwgMik7XG4gICAgICAgICAgICBjb25zdCBhMTEgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGIxMSA9IG90aGVyLmdldCgwLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGExMiA9IHRoaXMuZ2V0KDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgYjEyID0gb3RoZXIuZ2V0KDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgYTIxID0gdGhpcy5nZXQoMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMjEgPSBvdGhlci5nZXQoMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMjIgPSB0aGlzLmdldCgxLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGIyMiA9IG90aGVyLmdldCgxLCAxKTtcblxuICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnRlcm1lZGlhdGUgdmFsdWVzLlxuICAgICAgICAgICAgY29uc3QgbTEgPSAoYTExICsgYTIyKSAqIChiMTEgKyBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTIgPSAoYTIxICsgYTIyKSAqIGIxMTtcbiAgICAgICAgICAgIGNvbnN0IG0zID0gYTExICogKGIxMiAtIGIyMik7XG4gICAgICAgICAgICBjb25zdCBtNCA9IGEyMiAqIChiMjEgLSBiMTEpO1xuICAgICAgICAgICAgY29uc3QgbTUgPSAoYTExICsgYTEyKSAqIGIyMjtcbiAgICAgICAgICAgIGNvbnN0IG02ID0gKGEyMSAtIGExMSkgKiAoYjExICsgYjEyKTtcbiAgICAgICAgICAgIGNvbnN0IG03ID0gKGExMiAtIGEyMikgKiAoYjIxICsgYjIyKTtcblxuICAgICAgICAgICAgLy8gQ29tYmluZSBpbnRlcm1lZGlhdGUgdmFsdWVzIGludG8gdGhlIG91dHB1dC5cbiAgICAgICAgICAgIGNvbnN0IGMwMCA9IG0xICsgbTQgLSBtNSArIG03O1xuICAgICAgICAgICAgY29uc3QgYzAxID0gbTMgKyBtNTtcbiAgICAgICAgICAgIGNvbnN0IGMxMCA9IG0yICsgbTQ7XG4gICAgICAgICAgICBjb25zdCBjMTEgPSBtMSAtIG0yICsgbTMgKyBtNjtcblxuICAgICAgICAgICAgcmVzdWx0LnNldCgwLCAwLCBjMDApO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgwLCAxLCBjMDEpO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgxLCAwLCBjMTApO1xuICAgICAgICAgICAgcmVzdWx0LnNldCgxLCAxLCBjMTEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmFzc2VuM3gzKG90aGVyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKDMsIDMpO1xuXG4gICAgICAgICAgICBjb25zdCBhMDAgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGEwMSA9IHRoaXMuZ2V0KDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgYTAyID0gdGhpcy5nZXQoMCwgMik7XG4gICAgICAgICAgICBjb25zdCBhMTAgPSB0aGlzLmdldCgxLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGExMSA9IHRoaXMuZ2V0KDEsIDEpO1xuICAgICAgICAgICAgY29uc3QgYTEyID0gdGhpcy5nZXQoMSwgMik7XG4gICAgICAgICAgICBjb25zdCBhMjAgPSB0aGlzLmdldCgyLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGEyMSA9IHRoaXMuZ2V0KDIsIDEpO1xuICAgICAgICAgICAgY29uc3QgYTIyID0gdGhpcy5nZXQoMiwgMik7XG5cbiAgICAgICAgICAgIGNvbnN0IGIwMCA9IG90aGVyLmdldCgwLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGIwMSA9IG90aGVyLmdldCgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGIwMiA9IG90aGVyLmdldCgwLCAyKTtcbiAgICAgICAgICAgIGNvbnN0IGIxMCA9IG90aGVyLmdldCgxLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGIxMSA9IG90aGVyLmdldCgxLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGIxMiA9IG90aGVyLmdldCgxLCAyKTtcbiAgICAgICAgICAgIGNvbnN0IGIyMCA9IG90aGVyLmdldCgyLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGIyMSA9IG90aGVyLmdldCgyLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGIyMiA9IG90aGVyLmdldCgyLCAyKTtcblxuICAgICAgICAgICAgY29uc3QgbTEgPSAoYTAwICsgYTAxICsgYTAyIC0gYTEwIC0gYTExIC0gYTIxIC0gYTIyKSAqIGIxMTtcbiAgICAgICAgICAgIGNvbnN0IG0yID0gKGEwMCAtIGExMCkgKiAoLWIwMSArIGIxMSk7XG4gICAgICAgICAgICBjb25zdCBtMyA9IGExMSAqICgtYjAwICsgYjAxICsgYjEwIC0gYjExIC0gYjEyIC0gYjIwICsgYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG00ID0gKC1hMDAgKyBhMTAgKyBhMTEpICogKGIwMCAtIGIwMSArIGIxMSk7XG4gICAgICAgICAgICBjb25zdCBtNSA9IChhMTAgKyBhMTEpICogKC1iMDAgKyBiMDEpO1xuICAgICAgICAgICAgY29uc3QgbTYgPSBhMDAgKiBiMDA7XG4gICAgICAgICAgICBjb25zdCBtNyA9ICgtYTAwICsgYTIwICsgYTIxKSAqIChiMDAgLSBiMDIgKyBiMTIpO1xuICAgICAgICAgICAgY29uc3QgbTggPSAoLWEwMCArIGEyMCkgKiAoYjAyIC0gYjEyKTtcbiAgICAgICAgICAgIGNvbnN0IG05ID0gKGEyMCArIGEyMSkgKiAoLWIwMCArIGIwMik7XG4gICAgICAgICAgICBjb25zdCBtMTAgPSAoYTAwICsgYTAxICsgYTAyIC0gYTExIC0gYTEyIC0gYTIwIC0gYTIxKSAqIGIxMjtcbiAgICAgICAgICAgIGNvbnN0IG0xMSA9IGEyMSAqICgtYjAwICsgYjAyICsgYjEwIC0gYjExIC0gYjEyIC0gYjIwICsgYjIxKTtcbiAgICAgICAgICAgIGNvbnN0IG0xMiA9ICgtYTAyICsgYTIxICsgYTIyKSAqIChiMTEgKyBiMjAgLSBiMjEpO1xuICAgICAgICAgICAgY29uc3QgbTEzID0gKGEwMiAtIGEyMikgKiAoYjExIC0gYjIxKTtcbiAgICAgICAgICAgIGNvbnN0IG0xNCA9IGEwMiAqIGIyMDtcbiAgICAgICAgICAgIGNvbnN0IG0xNSA9IChhMjEgKyBhMjIpICogKC1iMjAgKyBiMjEpO1xuICAgICAgICAgICAgY29uc3QgbTE2ID0gKC1hMDIgKyBhMTEgKyBhMTIpICogKGIxMiArIGIyMCAtIGIyMik7XG4gICAgICAgICAgICBjb25zdCBtMTcgPSAoYTAyIC0gYTEyKSAqIChiMTIgLSBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTE4ID0gKGExMSArIGExMikgKiAoLWIyMCArIGIyMik7XG4gICAgICAgICAgICBjb25zdCBtMTkgPSBhMDEgKiBiMTA7XG4gICAgICAgICAgICBjb25zdCBtMjAgPSBhMTIgKiBiMjE7XG4gICAgICAgICAgICBjb25zdCBtMjEgPSBhMTAgKiBiMDI7XG4gICAgICAgICAgICBjb25zdCBtMjIgPSBhMjAgKiBiMDE7XG4gICAgICAgICAgICBjb25zdCBtMjMgPSBhMjIgKiBiMjI7XG5cbiAgICAgICAgICAgIGNvbnN0IGMwMCA9IG02ICsgbTE0ICsgbTE5O1xuICAgICAgICAgICAgY29uc3QgYzAxID0gbTEgKyBtNCArIG01ICsgbTYgKyBtMTIgKyBtMTQgKyBtMTU7XG4gICAgICAgICAgICBjb25zdCBjMDIgPSBtNiArIG03ICsgbTkgKyBtMTAgKyBtMTQgKyBtMTYgKyBtMTg7XG4gICAgICAgICAgICBjb25zdCBjMTAgPSBtMiArIG0zICsgbTQgKyBtNiArIG0xNCArIG0xNiArIG0xNztcbiAgICAgICAgICAgIGNvbnN0IGMxMSA9IG0yICsgbTQgKyBtNSArIG02ICsgbTIwO1xuICAgICAgICAgICAgY29uc3QgYzEyID0gbTE0ICsgbTE2ICsgbTE3ICsgbTE4ICsgbTIxO1xuICAgICAgICAgICAgY29uc3QgYzIwID0gbTYgKyBtNyArIG04ICsgbTExICsgbTEyICsgbTEzICsgbTE0O1xuICAgICAgICAgICAgY29uc3QgYzIxID0gbTEyICsgbTEzICsgbTE0ICsgbTE1ICsgbTIyO1xuICAgICAgICAgICAgY29uc3QgYzIyID0gbTYgKyBtNyArIG04ICsgbTkgKyBtMjM7XG5cbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMCwgMCwgYzAwKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMCwgMSwgYzAxKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMCwgMiwgYzAyKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMSwgMCwgYzEwKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMSwgMSwgYzExKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMSwgMiwgYzEyKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMiwgMCwgYzIwKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMiwgMSwgYzIxKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMiwgMiwgYzIyKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWF0cml4IHByb2R1Y3QgYmV0d2VlbiB4IGFuZCB5LiBNb3JlIGVmZmljaWVudCB0aGFuIG1tdWwob3RoZXIpIG9ubHkgd2hlbiB3ZSBtdWx0aXBseSBzcXVhcmVkIG1hdHJpeCBhbmQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgbWF0cml4IGlzID4gMTAwMC5cbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IHlcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgbW11bFN0cmFzc2VuKHkpIHtcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIHIxID0geC5yb3dzO1xuICAgICAgICAgICAgdmFyIGMxID0geC5jb2x1bW5zO1xuICAgICAgICAgICAgdmFyIHIyID0geS5yb3dzO1xuICAgICAgICAgICAgdmFyIGMyID0geS5jb2x1bW5zO1xuICAgICAgICAgICAgaWYgKGMxICE9PSByMikge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNdWx0aXBseWluZyAke3IxfSB4ICR7YzF9IGFuZCAke3IyfSB4ICR7YzJ9IG1hdHJpeDogZGltZW5zaW9ucyBkbyBub3QgbWF0Y2guYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFB1dCBhIG1hdHJpeCBpbnRvIHRoZSB0b3AgbGVmdCBvZiBhIG1hdHJpeCBvZiB6ZXJvcy5cbiAgICAgICAgICAgIC8vIGByb3dzYCBhbmQgYGNvbHNgIGFyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgb3V0cHV0IG1hdHJpeC5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGVtYmVkKG1hdCwgcm93cywgY29scykge1xuICAgICAgICAgICAgICAgIHZhciByID0gbWF0LnJvd3M7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBtYXQuY29sdW1ucztcbiAgICAgICAgICAgICAgICBpZiAoKHIgPT09IHJvd3MpICYmIChjID09PSBjb2xzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRhdCA9IE1hdHJpeC56ZXJvcyhyb3dzLCBjb2xzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgobWF0LCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgYm90aCBtYXRyaWNlcyBhcmUgdGhlIHNhbWUgc2l6ZS5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhjbHVzaXZlbHkgZm9yIHNpbXBsaWNpdHk6XG4gICAgICAgICAgICAvLyB0aGlzIGFsZ29yaXRobSBjYW4gYmUgaW1wbGVtZW50ZWQgd2l0aCBtYXRyaWNlcyBvZiBkaWZmZXJlbnQgc2l6ZXMuXG5cbiAgICAgICAgICAgIHZhciByID0gTWF0aC5tYXgocjEsIHIyKTtcbiAgICAgICAgICAgIHZhciBjID0gTWF0aC5tYXgoYzEsIGMyKTtcbiAgICAgICAgICAgIHggPSBlbWJlZCh4LCByLCBjKTtcbiAgICAgICAgICAgIHkgPSBlbWJlZCh5LCByLCBjKTtcblxuICAgICAgICAgICAgLy8gT3VyIHJlY3Vyc2l2ZSBtdWx0aXBsaWNhdGlvbiBmdW5jdGlvbi5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGJsb2NrTXVsdChhLCBiLCByb3dzLCBjb2xzKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHNtYWxsIG1hdHJpY2VzLCByZXNvcnQgdG8gbmFpdmUgbXVsdGlwbGljYXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHJvd3MgPD0gNTEyIHx8IGNvbHMgPD0gNTEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm1tdWwoYik7IC8vIGEgaXMgZXF1aXZhbGVudCB0byB0aGlzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgZHluYW1pYyBwYWRkaW5nLlxuICAgICAgICAgICAgICAgIGlmICgocm93cyAlIDIgPT09IDEpICYmIChjb2xzICUgMiA9PT0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGVtYmVkKGEsIHJvd3MgKyAxLCBjb2xzICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBlbWJlZChiLCByb3dzICsgMSwgY29scyArIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93cyAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGVtYmVkKGEsIHJvd3MgKyAxLCBjb2xzKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IGVtYmVkKGIsIHJvd3MgKyAxLCBjb2xzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbHMgJSAyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBlbWJlZChhLCByb3dzLCBjb2xzICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBlbWJlZChiLCByb3dzLCBjb2xzICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGhhbGZSb3dzID0gcGFyc2VJbnQoYS5yb3dzIC8gMik7XG4gICAgICAgICAgICAgICAgdmFyIGhhbGZDb2xzID0gcGFyc2VJbnQoYS5jb2x1bW5zIC8gMik7XG4gICAgICAgICAgICAgICAgLy8gU3ViZGl2aWRlIGlucHV0IG1hdHJpY2VzLlxuICAgICAgICAgICAgICAgIHZhciBhMTEgPSBhLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIDAsIGhhbGZDb2xzIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFyIGIxMSA9IGIuc3ViTWF0cml4KDAsIGhhbGZSb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcblxuICAgICAgICAgICAgICAgIHZhciBhMTIgPSBhLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIGhhbGZDb2xzLCBhLmNvbHVtbnMgLSAxKTtcbiAgICAgICAgICAgICAgICB2YXIgYjEyID0gYi5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCBoYWxmQ29scywgYi5jb2x1bW5zIC0gMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYTIxID0gYS5zdWJNYXRyaXgoaGFsZlJvd3MsIGEucm93cyAtIDEsIDAsIGhhbGZDb2xzIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFyIGIyMSA9IGIuc3ViTWF0cml4KGhhbGZSb3dzLCBiLnJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGEyMiA9IGEuc3ViTWF0cml4KGhhbGZSb3dzLCBhLnJvd3MgLSAxLCBoYWxmQ29scywgYS5jb2x1bW5zIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFyIGIyMiA9IGIuc3ViTWF0cml4KGhhbGZSb3dzLCBiLnJvd3MgLSAxLCBoYWxmQ29scywgYi5jb2x1bW5zIC0gMSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb21wdXRlIGludGVybWVkaWF0ZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgdmFyIG0xID0gYmxvY2tNdWx0KE1hdHJpeC5hZGQoYTExLCBhMjIpLCBNYXRyaXguYWRkKGIxMSwgYjIyKSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgICAgICAgICAgICB2YXIgbTIgPSBibG9ja011bHQoTWF0cml4LmFkZChhMjEsIGEyMiksIGIxMSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgICAgICAgICAgICB2YXIgbTMgPSBibG9ja011bHQoYTExLCBNYXRyaXguc3ViKGIxMiwgYjIyKSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgICAgICAgICAgICB2YXIgbTQgPSBibG9ja011bHQoYTIyLCBNYXRyaXguc3ViKGIyMSwgYjExKSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgICAgICAgICAgICB2YXIgbTUgPSBibG9ja011bHQoTWF0cml4LmFkZChhMTEsIGExMiksIGIyMiwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgICAgICAgICAgICB2YXIgbTYgPSBibG9ja011bHQoTWF0cml4LnN1YihhMjEsIGExMSksIE1hdHJpeC5hZGQoYjExLCBiMTIpLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgICAgICAgICAgIHZhciBtNyA9IGJsb2NrTXVsdChNYXRyaXguc3ViKGExMiwgYTIyKSwgTWF0cml4LmFkZChiMjEsIGIyMiksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb21iaW5lIGludGVybWVkaWF0ZSB2YWx1ZXMgaW50byB0aGUgb3V0cHV0LlxuICAgICAgICAgICAgICAgIHZhciBjMTEgPSBNYXRyaXguYWRkKG0xLCBtNCk7XG4gICAgICAgICAgICAgICAgYzExLnN1YihtNSk7XG4gICAgICAgICAgICAgICAgYzExLmFkZChtNyk7XG4gICAgICAgICAgICAgICAgdmFyIGMxMiA9IE1hdHJpeC5hZGQobTMsIG01KTtcbiAgICAgICAgICAgICAgICB2YXIgYzIxID0gTWF0cml4LmFkZChtMiwgbTQpO1xuICAgICAgICAgICAgICAgIHZhciBjMjIgPSBNYXRyaXguc3ViKG0xLCBtMik7XG4gICAgICAgICAgICAgICAgYzIyLmFkZChtMyk7XG4gICAgICAgICAgICAgICAgYzIyLmFkZChtNik7XG5cbiAgICAgICAgICAgICAgICAvL0Nyb3Agb3V0cHV0IHRvIHRoZSBkZXNpcmVkIHNpemUgKHVuZG8gZHluYW1pYyBwYWRkaW5nKS5cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0YXQgPSBNYXRyaXguemVyb3MoMiAqIGMxMS5yb3dzLCAyICogYzExLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMxMSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgoYzEyLCBjMTEucm93cywgMCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgoYzIxLCAwLCBjMTEuY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgoYzIyLCBjMTEucm93cywgYzExLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5zdWJNYXRyaXgoMCwgcm93cyAtIDEsIDAsIGNvbHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBibG9ja011bHQoeCwgeSwgciwgYyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHJvdy1ieS1yb3cgc2NhbGVkIG1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSAtIE1pbmltdW0gc2NhbGVkIHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIC0gTWF4aW11bSBzY2FsZWQgdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBzY2FsZWQgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzY2FsZVJvd3MobWluLCBtYXgpIHtcbiAgICAgICAgICAgIG1pbiA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMCA6IG1pbjtcbiAgICAgICAgICAgIG1heCA9IG1heCA9PT0gdW5kZWZpbmVkID8gMSA6IG1heDtcbiAgICAgICAgICAgIGlmIChtaW4gPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbiBzaG91bGQgYmUgc3RyaWN0bHkgc21hbGxlciB0aGFuIG1heCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuZW1wdHkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZWQgPSByZXNjYWxlKHRoaXMuZ2V0Um93KGkpLCB7bWluLCBtYXh9KTtcbiAgICAgICAgICAgICAgICBuZXdNYXRyaXguc2V0Um93KGksIHNjYWxlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgY29sdW1uLWJ5LWNvbHVtbiBzY2FsZWQgbWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTWluaW11bSBzY2FsZWQgdmFsdWVcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gLSBNYXhpbXVtIHNjYWxlZCB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBzY2FsZWQgbWF0cml4XG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHZhciBtYXRyaXggPSBuZXcgTWF0cml4KFtbMSwyXSxbLTEsMF1dKTtcbiAgICAgICAgICogdmFyIHNjYWxlZE1hdHJpeCA9IG1hdHJpeC5zY2FsZUNvbHVtbnMoKTsgLy8gW1sxLDFdLFswLDBdXVxuICAgICAgICAgKi9cbiAgICAgICAgc2NhbGVDb2x1bW5zKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICBtaW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBtaW47XG4gICAgICAgICAgICBtYXggPSBtYXggPT09IHVuZGVmaW5lZCA/IDEgOiBtYXg7XG4gICAgICAgICAgICBpZiAobWluID49IG1heCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW4gc2hvdWxkIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBtYXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmVtcHR5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGVkID0gcmVzY2FsZSh0aGlzLmdldENvbHVtbihpKSwge1xuICAgICAgICAgICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZXdNYXRyaXguc2V0Q29sdW1uKGksIHNjYWxlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgS3JvbmVja2VyIHByb2R1Y3QgKGFsc28ga25vd24gYXMgdGVuc29yIHByb2R1Y3QpIGJldHdlZW4gdGhpcyBhbmQgb3RoZXJcbiAgICAgICAgICogU2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0tyb25lY2tlcl9wcm9kdWN0XG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSBvdGhlclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBrcm9uZWNrZXJQcm9kdWN0KG90aGVyKSB7XG4gICAgICAgICAgICBvdGhlciA9IHRoaXMuY29uc3RydWN0b3IuY2hlY2tNYXRyaXgob3RoZXIpO1xuXG4gICAgICAgICAgICB2YXIgbSA9IHRoaXMucm93cztcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgdmFyIHAgPSBvdGhlci5yb3dzO1xuICAgICAgICAgICAgdmFyIHEgPSBvdGhlci5jb2x1bW5zO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKG0gKiBwLCBuICogcSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHE7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwICogaSArIGtdW3EgKiBqICsgbF0gPSB0aGlzLmdldChpLCBqKSAqIG90aGVyLmdldChrLCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhbnNwb3NlcyB0aGUgbWF0cml4IGFuZCByZXR1cm5zIGEgbmV3IG9uZSBjb250YWluaW5nIHRoZSByZXN1bHRcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNwb3NlKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSh0aGlzLmNvbHVtbnMsIHRoaXMucm93cyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2V0KGosIGksIHRoaXMuZ2V0KGksIGopKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvcnRzIHRoZSByb3dzIChpbiBwbGFjZSlcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZUZ1bmN0aW9uIC0gdXN1YWwgQXJyYXkucHJvdG90eXBlLnNvcnQgY29tcGFyaXNvbiBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRSb3dzKGNvbXBhcmVGdW5jdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSBjb21wYXJlRnVuY3Rpb24gPSBjb21wYXJlTnVtYmVycztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJvdyhpLCB0aGlzLmdldFJvdyhpKS5zb3J0KGNvbXBhcmVGdW5jdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU29ydHMgdGhlIGNvbHVtbnMgKGluIHBsYWNlKVxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJlRnVuY3Rpb24gLSB1c3VhbCBBcnJheS5wcm90b3R5cGUuc29ydCBjb21wYXJpc29uIGZ1bmN0aW9uXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgc29ydENvbHVtbnMoY29tcGFyZUZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZUZ1bmN0aW9uID09PSB1bmRlZmluZWQpIGNvbXBhcmVGdW5jdGlvbiA9IGNvbXBhcmVOdW1iZXJzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uKGksIHRoaXMuZ2V0Q29sdW1uKGkpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgc3Vic2V0IG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Um93IC0gRmlyc3Qgcm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmRSb3cgLSBMYXN0IHJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRDb2x1bW4gLSBGaXJzdCBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZENvbHVtbiAtIExhc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHN1Yk1hdHJpeChzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICBjaGVja1JhbmdlKHRoaXMsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pO1xuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShlbmRSb3cgLSBzdGFydFJvdyArIDEsIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gc3RhcnRDb2x1bW47IGogPD0gZW5kQ29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4W2kgLSBzdGFydFJvd11baiAtIHN0YXJ0Q29sdW1uXSA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN1YnNldCBvZiB0aGUgbWF0cml4IGJhc2VkIG9uIGFuIGFycmF5IG9mIHJvdyBpbmRpY2VzXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGluZGljZXMgLSBBcnJheSBjb250YWluaW5nIHRoZSByb3cgaW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0Q29sdW1uID0gMF0gLSBGaXJzdCBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRDb2x1bW4gPSB0aGlzLmNvbHVtbnMtMV0gLSBMYXN0IGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdWJNYXRyaXhSb3coaW5kaWNlcywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Q29sdW1uID09PSB1bmRlZmluZWQpIHN0YXJ0Q29sdW1uID0gMDtcbiAgICAgICAgICAgIGlmIChlbmRDb2x1bW4gPT09IHVuZGVmaW5lZCkgZW5kQ29sdW1uID0gdGhpcy5jb2x1bW5zIC0gMTtcbiAgICAgICAgICAgIGlmICgoc3RhcnRDb2x1bW4gPiBlbmRDb2x1bW4pIHx8IChzdGFydENvbHVtbiA8IDApIHx8IChzdGFydENvbHVtbiA+PSB0aGlzLmNvbHVtbnMpIHx8IChlbmRDb2x1bW4gPCAwKSB8fCAoZW5kQ29sdW1uID49IHRoaXMuY29sdW1ucykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXJndW1lbnQgb3V0IG9mIHJhbmdlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oaW5kaWNlcy5sZW5ndGgsIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gc3RhcnRDb2x1bW47IGogPD0gZW5kQ29sdW1uOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGljZXNbaV0gPCAwIHx8IGluZGljZXNbaV0gPj0gdGhpcy5yb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignUm93IGluZGV4IG91dCBvZiByYW5nZTogJyArIGluZGljZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXQoaSwgaiAtIHN0YXJ0Q29sdW1uLCB0aGlzLmdldChpbmRpY2VzW2ldLCBqKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgc3Vic2V0IG9mIHRoZSBtYXRyaXggYmFzZWQgb24gYW4gYXJyYXkgb2YgY29sdW1uIGluZGljZXNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gaW5kaWNlcyAtIEFycmF5IGNvbnRhaW5pbmcgdGhlIGNvbHVtbiBpbmRpY2VzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRSb3cgPSAwXSAtIEZpcnN0IHJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZFJvdyA9IHRoaXMucm93cy0xXSAtIExhc3Qgcm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHN1Yk1hdHJpeENvbHVtbihpbmRpY2VzLCBzdGFydFJvdywgZW5kUm93KSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRSb3cgPT09IHVuZGVmaW5lZCkgc3RhcnRSb3cgPSAwO1xuICAgICAgICAgICAgaWYgKGVuZFJvdyA9PT0gdW5kZWZpbmVkKSBlbmRSb3cgPSB0aGlzLnJvd3MgLSAxO1xuICAgICAgICAgICAgaWYgKChzdGFydFJvdyA+IGVuZFJvdykgfHwgKHN0YXJ0Um93IDwgMCkgfHwgKHN0YXJ0Um93ID49IHRoaXMucm93cykgfHwgKGVuZFJvdyA8IDApIHx8IChlbmRSb3cgPj0gdGhpcy5yb3dzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBcmd1bWVudCBvdXQgb2YgcmFuZ2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5ld01hdHJpeCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShlbmRSb3cgLSBzdGFydFJvdyArIDEsIGluZGljZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBzdGFydFJvdzsgaiA8PSBlbmRSb3c7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kaWNlc1tpXSA8IDAgfHwgaW5kaWNlc1tpXSA+PSB0aGlzLmNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb2x1bW4gaW5kZXggb3V0IG9mIHJhbmdlOiAnICsgaW5kaWNlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldChqIC0gc3RhcnRSb3csIGksIHRoaXMuZ2V0KGosIGluZGljZXNbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBhIHBhcnQgb2YgdGhlIG1hdHJpeCB0byB0aGUgZ2l2ZW4gc3ViLW1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeHxBcnJheTwgQXJyYXkgPn0gbWF0cml4IC0gVGhlIHNvdXJjZSBtYXRyaXggZnJvbSB3aGljaCB0byBleHRyYWN0IHZhbHVlcy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Um93IC0gVGhlIGluZGV4IG9mIHRoZSBmaXJzdCByb3cgdG8gc2V0XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydENvbHVtbiAtIFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgY29sdW1uIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzZXRTdWJNYXRyaXgobWF0cml4LCBzdGFydFJvdywgc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgICAgIG1hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICAgICAgICAgIHZhciBlbmRSb3cgPSBzdGFydFJvdyArIG1hdHJpeC5yb3dzIC0gMTtcbiAgICAgICAgICAgIHZhciBlbmRDb2x1bW4gPSBzdGFydENvbHVtbiArIG1hdHJpeC5jb2x1bW5zIC0gMTtcbiAgICAgICAgICAgIGNoZWNrUmFuZ2UodGhpcywgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzdGFydFJvdyArIGldW3N0YXJ0Q29sdW1uICsgal0gPSBtYXRyaXguZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiBhIG5ldyBtYXRyaXggYmFzZWQgb24gYSBzZWxlY3Rpb24gb2Ygcm93cyBhbmQgY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHJvd0luZGljZXMgLSBUaGUgcm93IGluZGljZXMgdG8gc2VsZWN0LiBPcmRlciBtYXR0ZXJzIGFuZCBhbiBpbmRleCBjYW4gYmUgbW9yZSB0aGFuIG9uY2UuXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29sdW1uSW5kaWNlcyAtIFRoZSBjb2x1bW4gaW5kaWNlcyB0byBzZWxlY3QuIE9yZGVyIG1hdHRlcnMgYW5kIGFuIGluZGV4IGNhbiBiZSB1c2UgbW9yZSB0aGFuIG9uY2UuXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGlvbihyb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgICAgICB2YXIgaW5kaWNlcyA9IGNoZWNrSW5kaWNlcyh0aGlzLCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10ocm93SW5kaWNlcy5sZW5ndGgsIGNvbHVtbkluZGljZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kaWNlcy5yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcm93SW5kZXggPSBpbmRpY2VzLnJvd1tpXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGluZGljZXMuY29sdW1uLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5JbmRleCA9IGluZGljZXMuY29sdW1uW2pdO1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXhbaV1bal0gPSB0aGlzLmdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgdHJhY2Ugb2YgdGhlIG1hdHJpeCAoc3VtIG9mIHRoZSBkaWFnb25hbCBlbGVtZW50cylcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdHJhY2UoKSB7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgdmFyIHRyYWNlID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0cmFjZSArPSB0aGlzLmdldChpLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICBNYXRyaXggdmlld3NcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSB0cmFuc3Bvc2l0aW9uIG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4VHJhbnNwb3NlVmlld31cbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zcG9zZVZpZXcoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFRyYW5zcG9zZVZpZXcodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIHJvdyB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIHJvdyBpbmRleCBvZiB0aGUgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFJvd1ZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICByb3dWaWV3KHJvdykge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhSb3dWaWV3KHRoaXMsIHJvdyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIGNvbHVtbiB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIGNvbHVtbiBpbmRleCBvZiB0aGUgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeENvbHVtblZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5WaWV3KGNvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhDb2x1bW5WaWV3KHRoaXMsIGNvbHVtbik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIG1hdHJpeCBmbGlwcGVkIGluIHRoZSByb3cgYXhpc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhGbGlwUm93Vmlld31cbiAgICAgICAgICovXG4gICAgICAgIGZsaXBSb3dWaWV3KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhGbGlwUm93Vmlldyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgbWF0cml4IGZsaXBwZWQgaW4gdGhlIGNvbHVtbiBheGlzXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeEZsaXBDb2x1bW5WaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcENvbHVtblZpZXcoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeEZsaXBDb2x1bW5WaWV3KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIGEgc3VibWF0cml4IGdpdmluZyB0aGUgaW5kZXggYm91bmRhcmllc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRSb3cgLSBmaXJzdCByb3cgaW5kZXggb2YgdGhlIHN1Ym1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kUm93IC0gbGFzdCByb3cgaW5kZXggb2YgdGhlIHN1Ym1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRDb2x1bW4gLSBmaXJzdCBjb2x1bW4gaW5kZXggb2YgdGhlIHN1Ym1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kQ29sdW1uIC0gbGFzdCBjb2x1bW4gaW5kZXggb2YgdGhlIHN1Ym1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhTdWJWaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgc3ViTWF0cml4VmlldyhzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFN1YlZpZXcodGhpcywgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIGNyb3NzIG9mIHRoZSByb3cgaW5kaWNlcyBhbmQgdGhlIGNvbHVtbiBpbmRpY2VzXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIC8vIHJlc3VsdGluZyB2ZWN0b3IgaXMgW1syXSwgWzJdXVxuICAgICAgICAgKiB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeChbWzEsMiwzXSwgWzQsNSw2XV0pLnNlbGVjdGlvblZpZXcoWzAsIDBdLCBbMV0pXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gcm93SW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbHVtbkluZGljZXNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4U2VsZWN0aW9uVmlld31cbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGlvblZpZXcocm93SW5kaWNlcywgY29sdW1uSW5kaWNlcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhTZWxlY3Rpb25WaWV3KHRoaXMsIHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSByb3cgaW5kaWNlc1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAvLyByZXN1bHRpbmcgdmVjdG9yIGlzIFtbMSwyLDNdLCBbMSwyLDNdXVxuICAgICAgICAgKiB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeChbWzEsMiwzXSwgWzQsNSw2XV0pLnJvd1NlbGVjdGlvblZpZXcoWzAsIDBdKVxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHJvd0luZGljZXNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4Um93U2VsZWN0aW9uVmlld31cbiAgICAgICAgICovXG4gICAgICAgIHJvd1NlbGVjdGlvblZpZXcocm93SW5kaWNlcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhSb3dTZWxlY3Rpb25WaWV3KHRoaXMsIHJvd0luZGljZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBjb2x1bW4gaW5kaWNlc1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAvLyByZXN1bHRpbmcgdmVjdG9yIGlzIFtbMiwgMl0sIFs1LCA1XV1cbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDIsM10sIFs0LDUsNl1dKS5jb2x1bW5TZWxlY3Rpb25WaWV3KFsxLCAxXSlcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb2x1bW5JbmRpY2VzXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeENvbHVtblNlbGVjdGlvblZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5TZWxlY3Rpb25WaWV3KGNvbHVtbkluZGljZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4Q29sdW1uU2VsZWN0aW9uVmlldyh0aGlzLCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICogQ2FsY3VsYXRlcyBhbmQgcmV0dXJucyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXggYXMgYSBOdW1iZXJcbiAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAqICAgbmV3IE1hdHJpeChbWzEsMiwzXSwgWzQsNSw2XV0pLmRldCgpXG4gICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAqL1xuICAgICAgICBkZXQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NxdWFyZSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEsIGIsIGMsIGQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1ucyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAvLyAyIHggMiBtYXRyaXhcbiAgICAgICAgICAgICAgICAgICAgYSA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBiID0gdGhpcy5nZXQoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGMgPSB0aGlzLmdldCgxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZCA9IHRoaXMuZ2V0KDEsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICogZCAtIChiICogYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbHVtbnMgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMyB4IDMgbWF0cml4XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJNYXRyaXgwLCBzdWJNYXRyaXgxLCBzdWJNYXRyaXgyO1xuICAgICAgICAgICAgICAgICAgICBzdWJNYXRyaXgwID0gdGhpcy5zZWxlY3Rpb25WaWV3KFsxLCAyXSwgWzEsIDJdKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWF0cml4MSA9IHRoaXMuc2VsZWN0aW9uVmlldyhbMSwgMl0sIFswLCAyXSk7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1hdHJpeDIgPSB0aGlzLnNlbGVjdGlvblZpZXcoWzEsIDJdLCBbMCwgMV0pO1xuICAgICAgICAgICAgICAgICAgICBhID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB0aGlzLmdldCgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYyA9IHRoaXMuZ2V0KDAsIDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICogc3ViTWF0cml4MC5kZXQoKSAtIGIgKiBzdWJNYXRyaXgxLmRldCgpICsgYyAqIHN1Yk1hdHJpeDIuZGV0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2VuZXJhbCBwdXJwb3NlIGRldGVybWluYW50IHVzaW5nIHRoZSBMVSBkZWNvbXBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTHVEZWNvbXBvc2l0aW9uKHRoaXMpLmRldGVybWluYW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignRGV0ZXJtaW5hbnQgY2FuIG9ubHkgYmUgY2FsY3VsYXRlZCBmb3IgYSBzcXVhcmUgbWF0cml4LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaW52ZXJzZSBvZiBhIG1hdHJpeCBpZiBpdCBleGlzdHMgb3IgdGhlIHBzZXVkb2ludmVyc2VcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHRocmVzaG9sZCAtIHRocmVzaG9sZCBmb3IgdGFraW5nIGludmVyc2Ugb2Ygc2luZ3VsYXIgdmFsdWVzIChkZWZhdWx0ID0gMWUtMTUpXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhlIChwc2V1ZG8paW52ZXJ0ZWQgbWF0cml4LlxuICAgICAgICAgKi9cbiAgICAgICAgcHNldWRvSW52ZXJzZSh0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGlmICh0aHJlc2hvbGQgPT09IHVuZGVmaW5lZCkgdGhyZXNob2xkID0gTnVtYmVyLkVQU0lMT047XG4gICAgICAgICAgICB2YXIgc3ZkU29sdXRpb24gPSBuZXcgU3ZEZWNvbXBvc2l0aW9uKHRoaXMsIHthdXRvVHJhbnNwb3NlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgIHZhciBVID0gc3ZkU29sdXRpb24ubGVmdFNpbmd1bGFyVmVjdG9ycztcbiAgICAgICAgICAgIHZhciBWID0gc3ZkU29sdXRpb24ucmlnaHRTaW5ndWxhclZlY3RvcnM7XG4gICAgICAgICAgICB2YXIgcyA9IHN2ZFNvbHV0aW9uLmRpYWdvbmFsO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc1tpXSkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgc1tpXSA9IDEuMCAvIHNbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc1tpXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgbGlzdCB0byBkaWFnb25hbFxuICAgICAgICAgICAgcyA9IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdLmRpYWcocyk7XG4gICAgICAgICAgICByZXR1cm4gVi5tbXVsKHMubW11bChVLnRyYW5zcG9zZVZpZXcoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYW4gZXhhY3QgYW5kIGluZGVwZW5kZW50IGNvcHkgb2YgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBjbG9uZSgpIHtcbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10odGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMuY29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldChyb3csIGNvbHVtbiwgdGhpcy5nZXQocm93LCBjb2x1bW4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgTWF0cml4LnByb3RvdHlwZS5rbGFzcyA9ICdNYXRyaXgnO1xuXG4gICAgZnVuY3Rpb24gY29tcGFyZU51bWJlcnMoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgfVxuXG4gICAgLypcbiAgICAgU3lub255bXNcbiAgICAgKi9cblxuICAgIE1hdHJpeC5yYW5kb20gPSBNYXRyaXgucmFuZDtcbiAgICBNYXRyaXguZGlhZ29uYWwgPSBNYXRyaXguZGlhZztcbiAgICBNYXRyaXgucHJvdG90eXBlLmRpYWdvbmFsID0gTWF0cml4LnByb3RvdHlwZS5kaWFnO1xuICAgIE1hdHJpeC5pZGVudGl0eSA9IE1hdHJpeC5leWU7XG4gICAgTWF0cml4LnByb3RvdHlwZS5uZWdhdGUgPSBNYXRyaXgucHJvdG90eXBlLm5lZztcbiAgICBNYXRyaXgucHJvdG90eXBlLnRlbnNvclByb2R1Y3QgPSBNYXRyaXgucHJvdG90eXBlLmtyb25lY2tlclByb2R1Y3Q7XG4gICAgTWF0cml4LnByb3RvdHlwZS5kZXRlcm1pbmFudCA9IE1hdHJpeC5wcm90b3R5cGUuZGV0O1xuXG4gICAgLypcbiAgICAgQWRkIGR5bmFtaWNhbGx5IGluc3RhbmNlIGFuZCBzdGF0aWMgbWV0aG9kcyBmb3IgbWF0aGVtYXRpY2FsIG9wZXJhdGlvbnNcbiAgICAgKi9cblxuICAgIHZhciBpbnBsYWNlT3BlcmF0b3IgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLiVuYW1lJVModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLiVuYW1lJU0odmFsdWUpO1xufSlcbmA7XG5cbiAgICB2YXIgaW5wbGFjZU9wZXJhdG9yU2NhbGFyID0gYFxuKGZ1bmN0aW9uICVuYW1lJVModmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICVvcCUgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG5cbiAgICB2YXIgaW5wbGFjZU9wZXJhdG9yTWF0cml4ID0gYFxuKGZ1bmN0aW9uICVuYW1lJU0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICVvcCUgbWF0cml4LmdldChpLCBqKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcblxuICAgIHZhciBzdGF0aWNPcGVyYXRvciA9IGBcbihmdW5jdGlvbiAlbmFtZSUobWF0cml4LCB2YWx1ZSkge1xuICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpc1tTeW1ib2wuc3BlY2llc10obWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LiVuYW1lJSh2YWx1ZSk7XG59KVxuYDtcblxuICAgIHZhciBpbnBsYWNlTWV0aG9kID0gYFxuKGZ1bmN0aW9uICVuYW1lJSgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGksIGosICVtZXRob2QlKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcblxuICAgIHZhciBzdGF0aWNNZXRob2QgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKG1hdHJpeCkge1xuICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpc1tTeW1ib2wuc3BlY2llc10obWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LiVuYW1lJSgpO1xufSlcbmA7XG5cbiAgICB2YXIgaW5wbGFjZU1ldGhvZFdpdGhBcmdzID0gYFxuKGZ1bmN0aW9uICVuYW1lJSglYXJncyUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGksIGosICVtZXRob2QlKHRoaXMuZ2V0KGksIGopLCAlYXJncyUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuXG4gICAgdmFyIHN0YXRpY01ldGhvZFdpdGhBcmdzID0gYFxuKGZ1bmN0aW9uICVuYW1lJShtYXRyaXgsICVhcmdzJSkge1xuICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpc1tTeW1ib2wuc3BlY2llc10obWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LiVuYW1lJSglYXJncyUpO1xufSlcbmA7XG5cblxuICAgIHZhciBpbnBsYWNlTWV0aG9kV2l0aE9uZUFyZ1NjYWxhciA9IGBcbihmdW5jdGlvbiAlbmFtZSVTKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCAlbWV0aG9kJSh0aGlzLmdldChpLCBqKSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuICAgIHZhciBpbnBsYWNlTWV0aG9kV2l0aE9uZUFyZ01hdHJpeCA9IGBcbihmdW5jdGlvbiAlbmFtZSVNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCAlbWV0aG9kJSh0aGlzLmdldChpLCBqKSwgbWF0cml4LmdldChpLCBqKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG5cbiAgICB2YXIgaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmcgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLiVuYW1lJVModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLiVuYW1lJU0odmFsdWUpO1xufSlcbmA7XG5cbiAgICB2YXIgc3RhdGljTWV0aG9kV2l0aE9uZUFyZyA9IHN0YXRpY01ldGhvZFdpdGhBcmdzO1xuXG4gICAgdmFyIG9wZXJhdG9ycyA9IFtcbiAgICAgICAgLy8gQXJpdGhtZXRpYyBvcGVyYXRvcnNcbiAgICAgICAgWycrJywgJ2FkZCddLFxuICAgICAgICBbJy0nLCAnc3ViJywgJ3N1YnRyYWN0J10sXG4gICAgICAgIFsnKicsICdtdWwnLCAnbXVsdGlwbHknXSxcbiAgICAgICAgWycvJywgJ2RpdicsICdkaXZpZGUnXSxcbiAgICAgICAgWyclJywgJ21vZCcsICdtb2R1bHVzJ10sXG4gICAgICAgIC8vIEJpdHdpc2Ugb3BlcmF0b3JzXG4gICAgICAgIFsnJicsICdhbmQnXSxcbiAgICAgICAgWyd8JywgJ29yJ10sXG4gICAgICAgIFsnXicsICd4b3InXSxcbiAgICAgICAgWyc8PCcsICdsZWZ0U2hpZnQnXSxcbiAgICAgICAgWyc+PicsICdzaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0J10sXG4gICAgICAgIFsnPj4+JywgJ3JpZ2h0U2hpZnQnLCAnemVyb0ZpbGxSaWdodFNoaWZ0J11cbiAgICBdO1xuXG4gICAgdmFyIGk7XG4gICAgdmFyIGV2YWwyID0gZXZhbDtcbiAgICBmb3IgKHZhciBvcGVyYXRvciBvZiBvcGVyYXRvcnMpIHtcbiAgICAgICAgdmFyIGlucGxhY2VPcCA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VPcGVyYXRvciwge25hbWU6IG9wZXJhdG9yWzFdLCBvcDogb3BlcmF0b3JbMF19KSk7XG4gICAgICAgIHZhciBpbnBsYWNlT3BTID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU9wZXJhdG9yU2NhbGFyLCB7bmFtZTogb3BlcmF0b3JbMV0gKyAnUycsIG9wOiBvcGVyYXRvclswXX0pKTtcbiAgICAgICAgdmFyIGlucGxhY2VPcE0gPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlT3BlcmF0b3JNYXRyaXgsIHtuYW1lOiBvcGVyYXRvclsxXSArICdNJywgb3A6IG9wZXJhdG9yWzBdfSkpO1xuICAgICAgICB2YXIgc3RhdGljT3AgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihzdGF0aWNPcGVyYXRvciwge25hbWU6IG9wZXJhdG9yWzFdfSkpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgb3BlcmF0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbb3BlcmF0b3JbaV1dID0gaW5wbGFjZU9wO1xuICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVtvcGVyYXRvcltpXSArICdTJ10gPSBpbnBsYWNlT3BTO1xuICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVtvcGVyYXRvcltpXSArICdNJ10gPSBpbnBsYWNlT3BNO1xuICAgICAgICAgICAgTWF0cml4W29wZXJhdG9yW2ldXSA9IHN0YXRpY09wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAgIFsnficsICdub3QnXVxuICAgIF07XG5cbiAgICBbXG4gICAgICAgICdhYnMnLCAnYWNvcycsICdhY29zaCcsICdhc2luJywgJ2FzaW5oJywgJ2F0YW4nLCAnYXRhbmgnLCAnY2JydCcsICdjZWlsJyxcbiAgICAgICAgJ2NsejMyJywgJ2NvcycsICdjb3NoJywgJ2V4cCcsICdleHBtMScsICdmbG9vcicsICdmcm91bmQnLCAnbG9nJywgJ2xvZzFwJyxcbiAgICAgICAgJ2xvZzEwJywgJ2xvZzInLCAncm91bmQnLCAnc2lnbicsICdzaW4nLCAnc2luaCcsICdzcXJ0JywgJ3RhbicsICd0YW5oJywgJ3RydW5jJ1xuICAgIF0uZm9yRWFjaChmdW5jdGlvbiAobWF0aE1ldGhvZCkge1xuICAgICAgICBtZXRob2RzLnB1c2goWydNYXRoLicgKyBtYXRoTWV0aG9kLCBtYXRoTWV0aG9kXSk7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBtZXRob2Qgb2YgbWV0aG9kcykge1xuICAgICAgICB2YXIgaW5wbGFjZU1ldGggPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlTWV0aG9kLCB7bmFtZTogbWV0aG9kWzFdLCBtZXRob2Q6IG1ldGhvZFswXX0pKTtcbiAgICAgICAgdmFyIHN0YXRpY01ldGggPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihzdGF0aWNNZXRob2QsIHtuYW1lOiBtZXRob2RbMV19KSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBtZXRob2QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbbWV0aG9kW2ldXSA9IGlucGxhY2VNZXRoO1xuICAgICAgICAgICAgTWF0cml4W21ldGhvZFtpXV0gPSBzdGF0aWNNZXRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1ldGhvZHNXaXRoQXJncyA9IFtcbiAgICAgICAgWydNYXRoLnBvdycsIDEsICdwb3cnXVxuICAgIF07XG5cbiAgICBmb3IgKHZhciBtZXRob2RXaXRoQXJnIG9mIG1ldGhvZHNXaXRoQXJncykge1xuICAgICAgICB2YXIgYXJncyA9ICdhcmcwJztcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG1ldGhvZFdpdGhBcmdbMV07IGkrKykge1xuICAgICAgICAgICAgYXJncyArPSBgLCBhcmcke2l9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kV2l0aEFyZ1sxXSAhPT0gMSkge1xuICAgICAgICAgICAgdmFyIGlucGxhY2VNZXRoV2l0aEFyZ3MgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlTWV0aG9kV2l0aEFyZ3MsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXRob2RXaXRoQXJnWzJdLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kV2l0aEFyZ1swXSxcbiAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB2YXIgc3RhdGljTWV0aFdpdGhBcmdzID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oc3RhdGljTWV0aG9kV2l0aEFyZ3MsIHtuYW1lOiBtZXRob2RXaXRoQXJnWzJdLCBhcmdzOiBhcmdzfSkpO1xuICAgICAgICAgICAgZm9yIChpID0gMjsgaSA8IG1ldGhvZFdpdGhBcmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW21ldGhvZFdpdGhBcmdbaV1dID0gaW5wbGFjZU1ldGhXaXRoQXJncztcbiAgICAgICAgICAgICAgICBNYXRyaXhbbWV0aG9kV2l0aEFyZ1tpXV0gPSBzdGF0aWNNZXRoV2l0aEFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdG1wbFZhciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXRob2RXaXRoQXJnWzJdLFxuICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2RXaXRoQXJnWzBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGlucGxhY2VNZXRob2QyID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmcsIHRtcGxWYXIpKTtcbiAgICAgICAgICAgIHZhciBpbnBsYWNlTWV0aG9kUyA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VNZXRob2RXaXRoT25lQXJnU2NhbGFyLCB0bXBsVmFyKSk7XG4gICAgICAgICAgICB2YXIgaW5wbGFjZU1ldGhvZE0gPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlTWV0aG9kV2l0aE9uZUFyZ01hdHJpeCwgdG1wbFZhcikpO1xuICAgICAgICAgICAgdmFyIHN0YXRpY01ldGhvZDIgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihzdGF0aWNNZXRob2RXaXRoT25lQXJnLCB0bXBsVmFyKSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAyOyBpIDwgbWV0aG9kV2l0aEFyZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbbWV0aG9kV2l0aEFyZ1tpXV0gPSBpbnBsYWNlTWV0aG9kMjtcbiAgICAgICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW21ldGhvZFdpdGhBcmdbaV0gKyAnTSddID0gaW5wbGFjZU1ldGhvZE07XG4gICAgICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVttZXRob2RXaXRoQXJnW2ldICsgJ1MnXSA9IGlucGxhY2VNZXRob2RTO1xuICAgICAgICAgICAgICAgIE1hdHJpeFttZXRob2RXaXRoQXJnW2ldXSA9IHN0YXRpY01ldGhvZDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWxsVGVtcGxhdGVGdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzKSB7XG4gICAgICAgIGZvciAodmFyIHZhbHVlIGluIHZhbHVlcykge1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyUnICsgdmFsdWUgKyAnJScsICdnJyksIHZhbHVlc1t2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0cml4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9hYnN0cmFjdE1hdHJpeC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGVudW0gQ29sb3JTcGFjZVR5cGUge1xyXG4gIFlDYkNyLFxyXG4gIEhTVixcclxuICBMYWJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvQ29sb3JTcGFjZVR5cGUudHMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBoeXBlckhUTUwuQ29tcG9uZW50IGlzIGEgdmVyeSBiYXNpYyBjbGFzc1xuLy8gYWJsZSB0byBjcmVhdGUgQ3VzdG9tIEVsZW1lbnRzIGxpa2UgY29tcG9uZW50c1xuLy8gaW5jbHVkaW5nIHRoZSBhYmlsaXR5IHRvIGxpc3RlbiB0byBjb25uZWN0L2Rpc2Nvbm5lY3Rcbi8vIGV2ZW50cyB2aWEgb25jb25uZWN0L29uZGlzY29ubmVjdCBhdHRyaWJ1dGVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoKSB7fVxuXG4vLyBjb21wb25lbnRzIHdpbGwgbGF6aWx5IGRlZmluZSBodG1sIG9yIHN2ZyBwcm9wZXJ0aWVzXG4vLyBhcyBzb29uIGFzIHRoZXNlIGFyZSBpbnZva2VkIHdpdGhpbiB0aGUgLnJlbmRlcigpIG1ldGhvZFxuLy8gU3VjaCByZW5kZXIoKSBtZXRob2QgaXMgbm90IHByb3ZpZGVkIGJ5IHRoZSBiYXNlIGNsYXNzXG4vLyBidXQgaXQgbXVzdCBiZSBhdmFpbGFibGUgdGhyb3VnaCB0aGUgQ29tcG9uZW50IGV4dGVuZC5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cChjb250ZW50KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIENvbXBvbmVudC5wcm90b3R5cGUsXG4gICAge1xuICAgICAgaGFuZGxlRXZlbnQ6IHt2YWx1ZShlKSB7XG4gICAgICAgIGNvbnN0IGN0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICB0aGlzW1xuICAgICAgICAgICgnZ2V0QXR0cmlidXRlJyBpbiBjdCAmJiBjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbCcpKSB8fFxuICAgICAgICAgICgnb24nICsgZS50eXBlKVxuICAgICAgICBdKGUpO1xuICAgICAgfX0sXG4gICAgICBodG1sOiBsYXp5R2V0dGVyKCdodG1sJywgY29udGVudCksXG4gICAgICBzdmc6IGxhenlHZXR0ZXIoJ3N2ZycsIGNvbnRlbnQpLFxuICAgICAgc3RhdGU6IGxhenlHZXR0ZXIoJ3N0YXRlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5kZWZhdWx0U3RhdGU7IH0pLFxuICAgICAgZGVmYXVsdFN0YXRlOiB7Z2V0KCkgeyByZXR1cm4ge307IH19LFxuICAgICAgc2V0U3RhdGU6IHt2YWx1ZShzdGF0ZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSB0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicgPyBzdGF0ZS5jYWxsKHRoaXMsIHRhcmdldCkgOiBzdGF0ZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfX1cbiAgICB9XG4gICk7XG59XG5cbi8vIGluc3RlYWQgb2YgYSBzZWNyZXQga2V5IEkgY291bGQndmUgdXNlZCBhIFdlYWtNYXBcbi8vIEhvd2V2ZXIsIGF0dGFjaGluZyBhIHByb3BlcnR5IGRpcmVjdGx5IHdpbGwgcmVzdWx0XG4vLyBpbnRvIGJldHRlciBwZXJmb3JtYW5jZSB3aXRoIHRob3VzYW5kcyBvZiBjb21wb25lbnRzXG4vLyBoYW5naW5nIGFyb3VuZCwgYW5kIGxlc3MgbWVtb3J5IHByZXNzdXJlIGNhdXNlZCBieSB0aGUgV2Vha01hcFxuY29uc3QgbGF6eUdldHRlciA9ICh0eXBlLCBmbikgPT4ge1xuICBjb25zdCBzZWNyZXQgPSAnXycgKyB0eXBlICsgJyQnO1xuICByZXR1cm4ge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlY3JldF0gfHwgKHRoaXNbdHlwZV0gPSBmbi5jYWxsKHRoaXMsIHR5cGUpKTtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHNlY3JldCwge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWV9KTtcbiAgICB9XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9jbGFzc2VzL0NvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnbG9iYWwsIFVJRH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG4vLyB5b3Uga25vdyB0aGF0IGtpbmQgb2YgYmFzaWNzIHlvdSBuZWVkIHRvIGNvdmVyXG4vLyB5b3VyIHVzZSBjYXNlIG9ubHkgYnV0IHlvdSBkb24ndCB3YW50IHRvIGJsb2F0IHRoZSBsaWJyYXJ5P1xuLy8gVGhlcmUncyBldmVuIGEgcGFja2FnZSBpbiBoZXJlOlxuLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcG9vcmx5ZmlsbHNcblxuLy8gdXNlZCB0byBkaXNwYXRjaCBzaW1wbGUgZXZlbnRzXG5sZXQgRXZlbnQgPSBnbG9iYWwuRXZlbnQ7XG50cnkge1xuICBuZXcgRXZlbnQoJ0V2ZW50Jyk7XG59IGNhdGNoKG9fTykge1xuICBFdmVudCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGUuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSk7XG4gICAgcmV0dXJuIGU7XG4gIH07XG59XG5leHBvcnQge0V2ZW50fTtcblxuLy8gdXNlZCB0byBzdG9yZSB0ZW1wbGF0ZSBsaXRlcmFsc1xuZXhwb3J0IGNvbnN0IE1hcCA9IGdsb2JhbC5NYXAgfHwgZnVuY3Rpb24gTWFwKCkge1xuICBjb25zdCBrZXlzID0gW10sIHZhbHVlcyA9IFtdO1xuICByZXR1cm4ge1xuICAgIGdldChvYmopIHtcbiAgICAgIHJldHVybiB2YWx1ZXNba2V5cy5pbmRleE9mKG9iaildO1xuICAgIH0sXG4gICAgc2V0KG9iaiwgdmFsdWUpIHtcbiAgICAgIHZhbHVlc1trZXlzLnB1c2gob2JqKSAtIDFdID0gdmFsdWU7XG4gICAgfVxuICB9O1xufTtcblxuLy8gdXNlZCB0byBzdG9yZSB3aXJlZCBjb250ZW50XG5leHBvcnQgY29uc3QgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwIHx8IGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0KG9iaikgeyByZXR1cm4gb2JqW1VJRF07IH0sXG4gICAgc2V0KG9iaiwgdmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFVJRCwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG4vLyB1c2VkIHRvIHN0b3JlIGh5cGVyLkNvbXBvbmVudHNcbmV4cG9ydCBjb25zdCBXZWFrU2V0ID0gZ2xvYmFsLldlYWtTZXQgfHwgZnVuY3Rpb24gV2Vha1NldCgpIHtcbiAgY29uc3Qgd20gPSBuZXcgV2Vha01hcDtcbiAgcmV0dXJuIHtcbiAgICBhZGQob2JqKSB7IHdtLnNldChvYmosIHRydWUpOyB9LFxuICAgIGhhcyhvYmopIHsgcmV0dXJuIHdtLmdldChvYmopID09PSB0cnVlOyB9XG4gIH07XG59O1xuXG4vLyB1c2VkIHRvIGJlIHN1cmUgSUU5IG9yIG9sZGVyIEFuZHJvaWRzIHdvcmsgYXMgZXhwZWN0ZWRcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCAodG9TdHJpbmcgPT5cbiAgYXJyID0+IHRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuKSh7fS50b1N0cmluZyk7XG5cbmV4cG9ydCBjb25zdCB0cmltID0gVUlELnRyaW0gfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvcG9vcmx5ZmlsbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gIHB1YmxpYyByZWFkb25seSByZWRQb2ludDogQ29sb3JQb2ludDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZ3JlZW5Qb2ludDogQ29sb3JQb2ludDtcclxuICBwdWJsaWMgcmVhZG9ubHkgYmx1ZVBvaW50OiBDb2xvclBvaW50O1xyXG4gIHB1YmxpYyByZWFkb25seSB3aGl0ZVBvaW50OiBDb2xvclBvaW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBnYW1tYTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlZFBvaW50OiBDb2xvclBvaW50LFxyXG4gICAgZ3JlZW5Qb2ludDogQ29sb3JQb2ludCxcclxuICAgIGJsdWVQb2ludDogQ29sb3JQb2ludCxcclxuICAgIHdoaXRlUG9pbnQ6IENvbG9yUG9pbnQsXHJcbiAgICBnYW1tYTogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlZFBvaW50ID0gcmVkUG9pbnQ7XHJcbiAgICB0aGlzLmdyZWVuUG9pbnQgPSBncmVlblBvaW50O1xyXG4gICAgdGhpcy5ibHVlUG9pbnQgPSBibHVlUG9pbnQ7XHJcbiAgICB0aGlzLndoaXRlUG9pbnQgPSB3aGl0ZVBvaW50O1xyXG4gICAgdGhpcy5nYW1tYSA9IGdhbW1hO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzUkdCKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC42NCwgeTogMC4zMyB9LFxyXG4gICAgICB7IHg6IDAuMywgeTogMC42IH0sXHJcbiAgICAgIHsgeDogMC4xNSwgeTogMC4wNiB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMi4yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZG9iZVJHQigpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNjQsIHk6IDAuMzMgfSxcclxuICAgICAgeyB4OiAwLjIxLCB5OiAwLjcxIH0sXHJcbiAgICAgIHsgeDogMC4xNSwgeTogMC4wNiB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMi4yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhcHBsZVJHQigpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNjI1LCB5OiAwLjM0IH0sXHJcbiAgICAgIHsgeDogMC4yOCwgeTogMC41OTUgfSxcclxuICAgICAgeyB4OiAwLjE1NSwgeTogMC4wNyB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMS44XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaWVSR0IoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjczNSwgeTogMC4yNjUwIH0sXHJcbiAgICAgIHsgeDogMC4yNzQsIHk6IDAuNzE3IH0sXHJcbiAgICAgIHsgeDogMC4xNjcsIHk6IDAuMDA5IH0sXHJcbiAgICAgIHsgeDogMC4zMzMzLCB5OiAwLjMzMzMgfSxcclxuICAgICAgMi4yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB3aWRlR2FtdXQoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjczNDcsIHk6IDAuMjY1MyB9LFxyXG4gICAgICB7IHg6IDAuMTE1MiwgeTogMC44MjY0IH0sXHJcbiAgICAgIHsgeDogMC4xNTY2LCB5OiAwLjAxNzcgfSxcclxuICAgICAgeyB4OiAwLjM0NTcsIHk6IDAuMzU4NSB9LFxyXG4gICAgICAxLjJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBhbCgpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNjQsIHk6IDAuMzMgfSxcclxuICAgICAgeyB4OiAwLjI5LCB5OiAwLjYgfSxcclxuICAgICAgeyB4OiAwLjE1LCB5OiAwLjA2IH0sXHJcbiAgICAgIHsgeDogMC4zMTI3LCB5OiAwLjMyOSB9LFxyXG4gICAgICAxLjk1XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlZFUlNJT05fRklOSVNIRUQgPSAnQ09OVkVSU0lPTl9GSU5JU0hFRCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVyc2lvbkZpbmlzaGVkKFxyXG4gIGNvbnZlcnNpb25SZXN1bHQ6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0LFxyXG4gIHJlc3VsdEltYWdlczogSFRNTEltYWdlRWxlbWVudFtdXHJcbik6IEFueUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENPTlZFUlNJT05fRklOSVNIRUQsXHJcbiAgICBjb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgcmVzdWx0SW1hZ2VzXHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvbkZpbmlzaGVkLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9PUklHSU5BTF9JTUFHRSA9ICdDSEFOR0VfT1JJR0lOQUxfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VPcmlnaW5hbEltYWdlQWN0aW9uIGV4dGVuZHMgQW55QWN0aW9uIHtcclxuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU9yaWdpbmFsSW1hZ2UoXHJcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcclxuKTogQ2hhbmdlT3JpZ2luYWxJbWFnZUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9PUklHSU5BTF9JTUFHRSxcclxuICAgIGltYWdlXHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2lucHV0L2NoYW5nZU9yaWdpbmFsSW1hZ2UudHMiLCJleHBvcnQgY2xhc3MgUGFydGlhbENvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBsYWJlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZXM6IG51bWJlcltdO1xyXG4gIHB1YmxpYyByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZywgdmFsdWVzOiBudW1iZXJbXSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SW1hZ2VEYXRhKCk6IEltYWdlRGF0YSB7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICBsZXQgaW1hZ2VEYXRhSW5kZXggPSAwO1xyXG5cclxuICAgIHRoaXMudmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbmNyZW1lbnQtZGVjcmVtZW50XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gdmFsdWU7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gdmFsdWU7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gdmFsdWU7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ltYWdlRGF0YUluZGV4KytdID0gMjU1O1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbmNyZW1lbnQtZGVjcmVtZW50XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0LnRzIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuXG4vKipcbiAqIEBjbGFzcyBMdURlY29tcG9zaXRpb25cbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sdXR6cm9lZGVyL01hcGFjay9ibG9iL21hc3Rlci9Tb3VyY2UvTHVEZWNvbXBvc2l0aW9uLmNzXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEx1RGVjb21wb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgICAgIG1hdHJpeCA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChtYXRyaXgpO1xuXG4gICAgICAgIHZhciBsdSA9IG1hdHJpeC5jbG9uZSgpO1xuICAgICAgICB2YXIgcm93cyA9IGx1LnJvd3M7XG4gICAgICAgIHZhciBjb2x1bW5zID0gbHUuY29sdW1ucztcbiAgICAgICAgdmFyIHBpdm90VmVjdG9yID0gbmV3IEFycmF5KHJvd3MpO1xuICAgICAgICB2YXIgcGl2b3RTaWduID0gMTtcbiAgICAgICAgdmFyIGksIGosIGssIHAsIHMsIHQsIHY7XG4gICAgICAgIHZhciBMVWNvbGosIGttYXg7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgcGl2b3RWZWN0b3JbaV0gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgTFVjb2xqID0gbmV3IEFycmF5KHJvd3MpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIExVY29saltpXSA9IGx1LmdldChpLCBqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGttYXggPSBNYXRoLm1pbihpLCBqKTtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwga21heDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gbHUuZ2V0KGksIGspICogTFVjb2xqW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBMVWNvbGpbaV0gLT0gcztcbiAgICAgICAgICAgICAgICBsdS5zZXQoaSwgaiwgTFVjb2xqW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCA9IGo7XG4gICAgICAgICAgICBmb3IgKGkgPSBqICsgMTsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhMVWNvbGpbaV0pID4gTWF0aC5hYnMoTFVjb2xqW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICBwID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGNvbHVtbnM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gbHUuZ2V0KHAsIGspO1xuICAgICAgICAgICAgICAgICAgICBsdS5zZXQocCwgaywgbHUuZ2V0KGosIGspKTtcbiAgICAgICAgICAgICAgICAgICAgbHUuc2V0KGosIGssIHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHYgPSBwaXZvdFZlY3RvcltwXTtcbiAgICAgICAgICAgICAgICBwaXZvdFZlY3RvcltwXSA9IHBpdm90VmVjdG9yW2pdO1xuICAgICAgICAgICAgICAgIHBpdm90VmVjdG9yW2pdID0gdjtcblxuICAgICAgICAgICAgICAgIHBpdm90U2lnbiA9IC1waXZvdFNpZ247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChqIDwgcm93cyAmJiBsdS5nZXQoaiwgaikgIT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBqICsgMTsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsdS5zZXQoaSwgaiwgbHUuZ2V0KGksIGopIC8gbHUuZ2V0KGosIGopKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkxVID0gbHU7XG4gICAgICAgIHRoaXMucGl2b3RWZWN0b3IgPSBwaXZvdFZlY3RvcjtcbiAgICAgICAgdGhpcy5waXZvdFNpZ24gPSBwaXZvdFNpZ247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzU2luZ3VsYXIoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5MVTtcbiAgICAgICAgdmFyIGNvbCA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgICAgICAgaWYgKGRhdGFbal1bal0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRyaXguY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBsdSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciByb3dzID0gbHUucm93cztcblxuICAgICAgICBpZiAocm93cyAhPT0gdmFsdWUucm93cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1hdHJpeCBkaW1lbnNpb25zJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5ndWxhcigpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xVIG1hdHJpeCBpcyBzaW5ndWxhcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSB2YWx1ZS5zdWJNYXRyaXhSb3codGhpcy5waXZvdFZlY3RvciwgMCwgY291bnQgLSAxKTtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBsdS5jb2x1bW5zO1xuICAgICAgICB2YXIgaSwgaiwgaztcblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgY29sdW1uczsgaysrKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gLT0gWFtrXVtqXSAqIGx1W2ldW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGsgPSBjb2x1bW5zIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgWFtrXVtqXSAvPSBsdVtrXVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdIC09IFhba11bal0gKiBsdVtpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGRldGVybWluYW50KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIGlmICghZGF0YS5pc1NxdWFyZSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBtdXN0IGJlIHNxdWFyZScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZXRlcm1pbmFudCA9IHRoaXMucGl2b3RTaWduO1xuICAgICAgICB2YXIgY29sID0gZGF0YS5jb2x1bW5zO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbDsgaisrKSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCAqPSBkYXRhW2pdW2pdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXRlcm1pbmFudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgbG93ZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciByb3dzID0gZGF0YS5yb3dzO1xuICAgICAgICB2YXIgY29sdW1ucyA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IGRhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgdXBwZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciByb3dzID0gZGF0YS5yb3dzO1xuICAgICAgICB2YXIgY29sdW1ucyA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSBkYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IHBpdm90UGVybXV0YXRpb25WZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpdm90VmVjdG9yLnNsaWNlKCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9sdS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtoeXBvdGVudXNlLCBnZXRGaWxsZWQyREFycmF5fSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzcyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9TaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNvbXB1dGVMZWZ0U2luZ3VsYXJWZWN0b3JzPXRydWVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycz10cnVlXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvVHJhbnNwb3NlPWZhbHNlXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB2YWx1ZSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIG0gPSB2YWx1ZS5yb3dzO1xuICAgICAgICB2YXIgbiA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICAgIHZhciBudSA9IE1hdGgubWluKG0sIG4pO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvbXB1dGVMZWZ0U2luZ3VsYXJWZWN0b3JzID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycyA9IHRydWUsXG4gICAgICAgICAgICBhdXRvVHJhbnNwb3NlID0gZmFsc2VcbiAgICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgdmFyIHdhbnR1ID0gQm9vbGVhbihjb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycyk7XG4gICAgICAgIHZhciB3YW50diA9IEJvb2xlYW4oY29tcHV0ZVJpZ2h0U2luZ3VsYXJWZWN0b3JzKTtcblxuICAgICAgICB2YXIgc3dhcHBlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgYTtcbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBpZiAoIWF1dG9UcmFuc3Bvc2UpIHtcbiAgICAgICAgICAgICAgICBhID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcHV0aW5nIFNWRCBvbiBhIG1hdHJpeCB3aXRoIG1vcmUgY29sdW1ucyB0aGFuIHJvd3MuIENvbnNpZGVyIGVuYWJsaW5nIGF1dG9UcmFuc3Bvc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYSA9IHZhbHVlLnRyYW5zcG9zZSgpO1xuICAgICAgICAgICAgICAgIG0gPSBhLnJvd3M7XG4gICAgICAgICAgICAgICAgbiA9IGEuY29sdW1ucztcbiAgICAgICAgICAgICAgICBzd2FwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgYXV4ID0gd2FudHU7XG4gICAgICAgICAgICAgICAgd2FudHUgPSB3YW50djtcbiAgICAgICAgICAgICAgICB3YW50diA9IGF1eDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGEgPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHMgPSBuZXcgQXJyYXkoTWF0aC5taW4obSArIDEsIG4pKTtcbiAgICAgICAgdmFyIFUgPSBnZXRGaWxsZWQyREFycmF5KG0sIG51LCAwKTtcbiAgICAgICAgdmFyIFYgPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICB2YXIgZSA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgdmFyIHdvcmsgPSBuZXcgQXJyYXkobSk7XG5cbiAgICAgICAgdmFyIG5jdCA9IE1hdGgubWluKG0gLSAxLCBuKTtcbiAgICAgICAgdmFyIG5ydCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG4gLSAyLCBtKSk7XG5cbiAgICAgICAgdmFyIGksIGosIGssIHAsIHQsIGtzLCBmLCBjcywgc24sIG1heCwga2FzZSxcbiAgICAgICAgICAgIHNjYWxlLCBzcCwgc3BtMSwgZXBtMSwgc2ssIGVrLCBiLCBjLCBzaGlmdCwgZztcblxuICAgICAgICBmb3IgKGsgPSAwLCBtYXggPSBNYXRoLm1heChuY3QsIG5ydCk7IGsgPCBtYXg7IGsrKykge1xuICAgICAgICAgICAgaWYgKGsgPCBuY3QpIHtcbiAgICAgICAgICAgICAgICBzW2tdID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNba10gPSBoeXBvdGVudXNlKHNba10sIGFbaV1ba10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc1trXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYVtrXVtrXSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba10gPSAtc1trXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhW2ldW2tdIC89IHNba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYVtrXVtrXSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzW2tdID0gLXNba107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGsgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChrIDwgbmN0KSAmJiAoc1trXSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gYVtpXVtrXSAqIGFbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdCA9IC10IC8gYVtrXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYVtpXVtqXSArPSB0ICogYVtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlW2pdID0gYVtrXVtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdhbnR1ICYmIChrIDwgbmN0KSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IGFbaV1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayA8IG5ydCkge1xuICAgICAgICAgICAgICAgIGVba10gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVba10gPSBoeXBvdGVudXNlKGVba10sIGVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZVtrXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtrICsgMV0gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlW2tdID0gMCAtIGVba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbaV0gLz0gZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlW2sgKyAxXSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlW2tdID0gLWVba107XG4gICAgICAgICAgICAgICAgaWYgKChrICsgMSA8IG0pICYmIChlW2tdICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya1tpXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1tpXSArPSBlW2pdICogYVtpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IC1lW2pdIC8gZVtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbaV1bal0gKz0gdCAqIHdvcmtbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAgPSBNYXRoLm1pbihuLCBtICsgMSk7XG4gICAgICAgIGlmIChuY3QgPCBuKSB7XG4gICAgICAgICAgICBzW25jdF0gPSBhW25jdF1bbmN0XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobSA8IHApIHtcbiAgICAgICAgICAgIHNbcCAtIDFdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnJ0ICsgMSA8IHApIHtcbiAgICAgICAgICAgIGVbbnJ0XSA9IGFbbnJ0XVtwIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgZVtwIC0gMV0gPSAwO1xuXG4gICAgICAgIGlmICh3YW50dSkge1xuICAgICAgICAgICAgZm9yIChqID0gbmN0OyBqIDwgbnU7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVVtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFVbal1bal0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChrID0gbmN0IC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc1trXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG51OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gVVtpXVtrXSAqIFVbaV1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gLXQgLyBVW2tdW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bal0gKz0gdCAqIFVbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IC1VW2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFVba11ba10gPSAxICsgVVtrXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGsgLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVVtrXVtrXSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICBmb3IgKGsgPSBuIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoKGsgPCBucnQpICYmIChlW2tdICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gVltpXVtrXSAqIFZbaV1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gLXQgLyBWW2sgKyAxXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtqXSArPSB0ICogVltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbaV1ba10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWW2tdW2tdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcCA9IHAgLSAxO1xuICAgICAgICB2YXIgaXRlciA9IDA7XG4gICAgICAgIHZhciBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcbiAgICAgICAgd2hpbGUgKHAgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSBwIC0gMjsgayA+PSAtMTsgay0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGsgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZVtrXSkgPD0gZXBzICogKE1hdGguYWJzKHNba10pICsgTWF0aC5hYnMoc1trICsgMV0pKSkge1xuICAgICAgICAgICAgICAgICAgICBlW2tdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPT09IHAgLSAyKSB7XG4gICAgICAgICAgICAgICAga2FzZSA9IDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoa3MgPSBwIC0gMTsga3MgPj0gazsga3MtLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa3MgPT09IGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQgPSAoa3MgIT09IHAgPyBNYXRoLmFicyhlW2tzXSkgOiAwKSArIChrcyAhPT0gayArIDEgPyBNYXRoLmFicyhlW2tzIC0gMV0pIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzW2tzXSkgPD0gZXBzICogdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc1trc10gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtzID09PSBrKSB7XG4gICAgICAgICAgICAgICAgICAgIGthc2UgPSAzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa3MgPT09IHAgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGthc2UgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGthc2UgPSAyO1xuICAgICAgICAgICAgICAgICAgICBrID0ga3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrKys7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2FzZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgICAgICBmID0gZVtwIC0gMl07XG4gICAgICAgICAgICAgICAgICAgIGVbcCAtIDJdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gcCAtIDI7IGogPj0gazsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaHlwb3RlbnVzZShzW2pdLCBmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzID0gc1tqXSAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbiA9IGYgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAtc24gKiBlW2ogLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW2ogLSAxXSA9IGNzICogZVtqIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FudHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBjcyAqIFZbaV1bal0gKyBzbiAqIFZbaV1bcCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW3AgLSAxXSA9IC1zbiAqIFZbaV1bal0gKyBjcyAqIFZbaV1bcCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMiA6IHtcbiAgICAgICAgICAgICAgICAgICAgZiA9IGVbayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBlW2sgLSAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGs7IGogPCBwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBoeXBvdGVudXNlKHNbal0sIGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3MgPSBzW2pdIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuID0gZiAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAtc24gKiBlW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZVtqXSA9IGNzICogZVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGNzICogVVtpXVtqXSArIHNuICogVVtpXVtrIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bayAtIDFdID0gLXNuICogVVtpXVtqXSArIGNzICogVVtpXVtrIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAzIDoge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IE1hdGgubWF4KE1hdGguYWJzKHNbcCAtIDFdKSwgTWF0aC5hYnMoc1twIC0gMl0pLCBNYXRoLmFicyhlW3AgLSAyXSksIE1hdGguYWJzKHNba10pLCBNYXRoLmFicyhlW2tdKSk7XG4gICAgICAgICAgICAgICAgICAgIHNwID0gc1twIC0gMV0gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3BtMSA9IHNbcCAtIDJdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGVwbTEgPSBlW3AgLSAyXSAvIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzayA9IHNba10gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgZWsgPSBlW2tdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGIgPSAoKHNwbTEgKyBzcCkgKiAoc3BtMSAtIHNwKSArIGVwbTEgKiBlcG0xKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAoc3AgKiBlcG0xKSAqIChzcCAqIGVwbTEpO1xuICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoYiAhPT0gMCkgfHwgKGMgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IE1hdGguc3FydChiICogYiArIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSAtc2hpZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IGMgLyAoYiArIHNoaWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmID0gKHNrICsgc3ApICogKHNrIC0gc3ApICsgc2hpZnQ7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBzayAqIGVrO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrOyBqIDwgcCAtIDE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGh5cG90ZW51c2UoZiwgZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcyA9IGYgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc24gPSBnIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqICE9PSBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtqIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IGNzICogc1tqXSArIHNuICogZVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbal0gPSBjcyAqIGVbal0gLSBzbiAqIHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gc24gKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbaiArIDFdID0gY3MgKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGNzICogVltpXVtqXSArIHNuICogVltpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1baiArIDFdID0gLXNuICogVltpXVtqXSArIGNzICogVltpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1bal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBoeXBvdGVudXNlKGYsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3MgPSBmIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuID0gZyAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBjcyAqIGVbal0gKyBzbiAqIHNbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqICsgMV0gPSAtc24gKiBlW2pdICsgY3MgKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBzbiAqIGVbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZVtqICsgMV0gPSBjcyAqIGVbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR1ICYmIChqIDwgbSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gY3MgKiBVW2ldW2pdICsgc24gKiBVW2ldW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtqICsgMV0gPSAtc24gKiBVW2ldW2pdICsgY3MgKiBVW2ldW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVbcCAtIDJdID0gZjtcbiAgICAgICAgICAgICAgICAgICAgaXRlciA9IGl0ZXIgKyAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzW2tdIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba10gPSAoc1trXSA8IDAgPyAtc1trXSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBwcDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1ba10gPSAtVltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGsgPCBwcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNba10gPj0gc1trICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1trXSA9IHNbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1trICsgMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR2ICYmIChrIDwgbiAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gVltpXVtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1bayArIDFdID0gVltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR1ICYmIChrIDwgbSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gVVtpXVtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bayArIDFdID0gVVtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVtpXVtrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBwLS07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3dhcHBlZCkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IFY7XG4gICAgICAgICAgICBWID0gVTtcbiAgICAgICAgICAgIFUgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm0gPSBtO1xuICAgICAgICB0aGlzLm4gPSBuO1xuICAgICAgICB0aGlzLnMgPSBzO1xuICAgICAgICB0aGlzLlUgPSBVO1xuICAgICAgICB0aGlzLlYgPSBWO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvbHZlIGEgcHJvYmxlbSBvZiBsZWFzdCBzcXVhcmUgKEF4PWIpIGJ5IHVzaW5nIHRoZSBTVkQuIFVzZWZ1bCB3aGVuIEEgaXMgc2luZ3VsYXIuIFdoZW4gQSBpcyBub3Qgc2luZ3VsYXIsIGl0IHdvdWxkIGJlIGJldHRlciB0byB1c2UgcXIuc29sdmUodmFsdWUpLlxuICAgICAqIEV4YW1wbGUgOiBXZSBzZWFyY2ggdG8gYXBwcm94aW1hdGUgeCwgd2l0aCBBIG1hdHJpeCBzaGFwZSBtKm4sIHggdmVjdG9yIHNpemUgbiwgYiB2ZWN0b3Igc2l6ZSBtIChtID4gbikuIFdlIHdpbGwgdXNlIDpcbiAgICAgKiB2YXIgc3ZkID0gU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24oQSk7XG4gICAgICogdmFyIHggPSBzdmQuc29sdmUoYik7XG4gICAgICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlIC0gTWF0cml4IDFEIHdoaWNoIGlzIHRoZSB2ZWN0b3IgYiAoaW4gdGhlIGVxdWF0aW9uIEF4ID0gYilcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIHZlY3RvciB4XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcblxuICAgICAgICB2YXIgWSA9IHZhbHVlO1xuICAgICAgICB2YXIgZSA9IHRoaXMudGhyZXNob2xkO1xuICAgICAgICB2YXIgc2NvbHMgPSB0aGlzLnMubGVuZ3RoO1xuICAgICAgICB2YXIgTHMgPSBNYXRyaXguemVyb3Moc2NvbHMsIHNjb2xzKTtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjb2xzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNbaV0pIDw9IGUpIHtcbiAgICAgICAgICAgICAgICBMc1tpXVtpXSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExzW2ldW2ldID0gMSAvIHRoaXMuc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBVID0gdGhpcy5VO1xuICAgICAgICB2YXIgViA9IHRoaXMucmlnaHRTaW5ndWxhclZlY3RvcnM7XG5cbiAgICAgICAgdmFyIFZMID0gVi5tbXVsKExzKTtcbiAgICAgICAgdmFyIHZyb3dzID0gVi5yb3dzO1xuICAgICAgICB2YXIgdXJvd3MgPSBVLmxlbmd0aDtcbiAgICAgICAgdmFyIFZMVSA9IE1hdHJpeC56ZXJvcyh2cm93cywgdXJvd3MpO1xuICAgICAgICB2YXIgaiwgaywgc3VtO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdXJvd3M7IGorKykge1xuICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHNjb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IFZMW2ldW2tdICogVVtqXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVkxVW2ldW2pdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZMVS5tbXVsKFkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBzb2x2ZUZvckRpYWdvbmFsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvbHZlKE1hdHJpeC5kaWFnKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbnZlcnNlIG9mIHRoZSBtYXRyaXguIFdlIGNvbXB1dGUgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXggdXNpbmcgU1ZEIHdoZW4gdGhpcyBtYXRyaXggaXMgc2luZ3VsYXIgb3IgaWxsLWNvbmRpdGlvbmVkLiBFeGFtcGxlIDpcbiAgICAgKiB2YXIgc3ZkID0gU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24oQSk7XG4gICAgICogdmFyIGludmVyc2VBID0gc3ZkLmludmVyc2UoKTtcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIGFwcHJveGltYXRpb24gb2YgdGhlIGludmVyc2Ugb2YgdGhlIG1hdHJpeFxuICAgICAqL1xuICAgIGludmVyc2UoKSB7XG4gICAgICAgIHZhciBWID0gdGhpcy5WO1xuICAgICAgICB2YXIgZSA9IHRoaXMudGhyZXNob2xkO1xuICAgICAgICB2YXIgdnJvd3MgPSBWLmxlbmd0aDtcbiAgICAgICAgdmFyIHZjb2xzID0gVlswXS5sZW5ndGg7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeCh2cm93cywgdGhpcy5zLmxlbmd0aCk7XG4gICAgICAgIHZhciBpLCBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNbal0pID4gZSkge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gVltpXVtqXSAvIHRoaXMuc1tqXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgVSA9IHRoaXMuVTtcblxuICAgICAgICB2YXIgdXJvd3MgPSBVLmxlbmd0aDtcbiAgICAgICAgdmFyIHVjb2xzID0gVVswXS5sZW5ndGg7XG4gICAgICAgIHZhciBZID0gbmV3IE1hdHJpeCh2cm93cywgdXJvd3MpO1xuICAgICAgICB2YXIgaywgc3VtO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdXJvd3M7IGorKykge1xuICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHVjb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IFhbaV1ba10gKiBVW2pdW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBZW2ldW2pdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGNvbmRpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc1swXSAvIHRoaXMuc1tNYXRoLm1pbih0aGlzLm0sIHRoaXMubikgLSAxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgbm9ybTIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHJhbmsoKSB7XG4gICAgICAgIHZhciB0b2wgPSBNYXRoLm1heCh0aGlzLm0sIHRoaXMubikgKiB0aGlzLnNbMF0gKiBOdW1iZXIuRVBTSUxPTjtcbiAgICAgICAgdmFyIHIgPSAwO1xuICAgICAgICB2YXIgcyA9IHRoaXMucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc1tpXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgIHIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IGRpYWdvbmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB0aHJlc2hvbGQoKSB7XG4gICAgICAgIHJldHVybiAoTnVtYmVyLkVQU0lMT04gLyAyKSAqIE1hdGgubWF4KHRoaXMubSwgdGhpcy5uKSAqIHRoaXMuc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgbGVmdFNpbmd1bGFyVmVjdG9ycygpIHtcbiAgICAgICAgaWYgKCFNYXRyaXguaXNNYXRyaXgodGhpcy5VKSkge1xuICAgICAgICAgICAgdGhpcy5VID0gbmV3IE1hdHJpeCh0aGlzLlUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IHJpZ2h0U2luZ3VsYXJWZWN0b3JzKCkge1xuICAgICAgICBpZiAoIU1hdHJpeC5pc01hdHJpeCh0aGlzLlYpKSB7XG4gICAgICAgICAgICB0aGlzLlYgPSBuZXcgTWF0cml4KHRoaXMuVik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgZGlhZ29uYWxNYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiBNYXRyaXguZGlhZyh0aGlzLnMpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvc3ZkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gaHlwb3RlbnVzZShhLCBiKSB7XG4gICAgdmFyIHIgPSAwO1xuICAgIGlmIChNYXRoLmFicyhhKSA+IE1hdGguYWJzKGIpKSB7XG4gICAgICAgIHIgPSBiIC8gYTtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGEpICogTWF0aC5zcXJ0KDEgKyByICogcik7XG4gICAgfVxuICAgIGlmIChiICE9PSAwKSB7XG4gICAgICAgIHIgPSBhIC8gYjtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGIpICogTWF0aC5zcXJ0KDEgKyByICogcik7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsbGVkMkRBcnJheShyb3dzLCBjb2x1bW5zLCB2YWx1ZSkge1xuICAgIHZhciBhcnJheSA9IG5ldyBBcnJheShyb3dzKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICBhcnJheVtpXSA9IG5ldyBBcnJheShjb2x1bW5zKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIGFycmF5W2ldW2pdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0aGlzIGlzIGFuIG92ZXJseSBkZWZlbnNpdmUgYXBwcm9hY2ggdG8gYXZvaWQgYW55IHBvc3NpYmxlXG4vLyBzaWRlLWVmZmVjdCB3aGVuIHRoZSBsaXZlIGNvbGxlY3Rpb24gb2Ygbm9kZXMgaXMgcGFzc2VkIGFyb3VuZFxuaW1wb3J0IHtwdXNoLCBzbGljZSwgc3BsaWNlLCB1bnNoaWZ0fSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHtmcmFnbWVudH0gZnJvbSAnLi4vc2hhcmVkL2Vhc3ktZG9tLmpzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQuanMnO1xuaW1wb3J0IGVuZ2luZSBmcm9tICcuLi9vYmplY3RzL0VuZ2luZS5qcyc7XG5cbi8qICAgICAgICAgICAgICAgIDAgICAgICAgICAgICAgICAgICAgICAgIDAgICAgICAgICAgICAgICAgIDBcbjAwMCAgICAgICAgICAgICAgICAwMCAgICAgICAgICAgICAgICAgICAwMCAgICAgICAgICAgICAgICAwMDBcbiAwMDAwICAgICAgICAgICAgICAwMDAwICAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAgMDAwMCBcbiAgMDAwMDAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAwMDAwICAgICAgICAgICAgICAwMDAwICBcbiAgMDAwMDAwICAgICAgICAgICAgMDAwMDAwICAgICAgICAgMDAwMDAwICAgICAgICAgICAgMDAwMDAwICBcbiAgIDAwMDAwMDAgICAgICAgICAgIDAwMDAwMDAgICAgICAwMDAwMDAwICAgICAgICAgIDAwMDAwMDAgICBcbiAgIDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAgICBcbiAgIDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAgICBcbiAgIDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAwMCAgICBcbiAgICAwMDAwMDAwICAgICAgICAgICAgMDAwMDAwICAgMDAwMDAwMCAgICAgICAgICAgMDAwMDAwMCAgICBcbiAgICAwMDAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMCAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwICAgICBcbiAgICAgMDAwMDAwMDAwMDAwMDAwMCAgMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwMDAgICAgICBcbiAgICAgIDAwMDAwMCAgICAgICAgICAgIDAwMDAwMDAwMDAwMCAgICAgICAgICAgICAwMDAwMDAgICAgICBcbiAgICAgICAwMDAwMDAwMDAwMDAwICAgICAgMDAwMDAwMDAgICAgICAgMDAwMDAwMDAwMDAwMCAgICAgICBcbiAgICAgIDAgIDAwMDAwMDAwMDAwMDAwMDAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAgIDAgICAgICBcbiAgICAgICAwMCAgMDAwMDAwMDAwMDAwMDAwMDAgICAgICAgMDAwMDAwMDAwMDAwMDAwMCAgMDAgICAgICBcbiAgICAgICAwMDAgICAwMDAwMCAgICAgMDAwMDAwICAgMDAwMDAwMCAgICAwMDAwMCAgIDAwMCAgICAgICBcbiAgICAgICAgMDAwMCAgIDAwMDAwICAgICAgICAwMDAwMDAgICAgICAgMDAwMDAwICAwMDAwMCAgICAgICBcbiAgICAgICAgMDAwMDAwICAwMDAwMDAgICAgIDAwMDAwMDAgICAgIDAwMDAwMCAgMDAwMDAwICAgICAgICBcbiAgICAgICAgIDAwMDAwMDAgIDAwMDAwMCAgIDAwMDAwMDAwICAgMDAwMDAgIDAwMDAwMDAgICAgICAgICBcbiAgICAgICAgIDAwMDAwMDAwICAgMDAwMDAgMDAwMDAwMDAwIDAwMDAwICAwMDAwMDAwMDAgICAgICAgICBcbiAgICAgICAgIDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAgICAgICAgICBcbiAgICAgICAgICAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMCAgICAgICAgICBcbiAgICAgICAgICAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMCAgICAgICAgICBcbiAgICAgICAgICAgICAgICAwMDAwMDAwMDAgICAwMDAwMCAgIDAwMDAwMDAwMDAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgMDAwMCAgMDAwICAwMDAwICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2x5ZXIwLmRldmlhbnRhcnQuY29tICAgICAgICAgICAgICAgICAgKi9cblxuLy8gTWVnYXRyb24gaXMgYSB0cmFuc2Zvcm1lciBpbiBjaGFyZ2Ugb2YgbXV0YXRpbmdcbi8vIGEgbGlzdCBvZiBsaXZlIERPTSBub2RlcyBpbnRvIGEgbmV3IGxpc3QuXG5mdW5jdGlvbiBNZWdhdHJvbihub2RlLCBjaGlsZE5vZGVzKSB7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG59XG5cbi8vIGl0IGNhcnJpZXMgdGhlIGRlZmF1bHQgbWVyZ2UvZGlmZiBlbmdpbmVcbi8vIHRoYXQgY2FuIGJlIHN3YXBwZWQgdmlhIGh5cGVySFRNTC5lbmdpbmUgPSB7Li4ufVxuLy8gU2VlIGh5cGVyaHRtbC1tYWppbmJ1dSB0byBrbm93IG1vcmVcbk1lZ2F0cm9uLmVuZ2luZSA9IGVuZ2luZTtcblxuLy8gcXVpY2tseSBlcmFzZSB0aGUgcmVsYXRlZCBjb250ZW50XG4vLyBvcHRpb25hbGx5IGFkZCBhIHNpbmdsZSBub2RlL2NvbXBvbmVudCBhcyB2YWx1ZVxuTWVnYXRyb24ucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gZW1wdHkodmFsdWUpIHtcbiAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZTtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2RlcztcbiAgbGV0IGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICBpZiAobGVuZ3RoKSB7XG4gICAgY29uc3QgcG4gPSBub2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmVtb3ZlID0gc3BsaWNlLmNhbGwoY2hpbGROb2RlcywgMCwgbGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHBuLnJlbW92ZUNoaWxkKHV0aWxzLmdldE5vZGUocmVtb3ZlW2xlbmd0aF0pKTtcbiAgfVxuICBpZiAodmFsdWUpIHtcbiAgICBwdXNoLmNhbGwoY2hpbGROb2RlcywgdmFsdWUpO1xuICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodXRpbHMuZ2V0Tm9kZSh2YWx1ZSksIG5vZGUpO1xuICB9XG59O1xuXG4vLyB0aGVyZSBhcmUgbnVtZXJvdXMgd2F5cyB0byBvcHRpbWl6ZSBhIGxpc3Qgb2Ygbm9kZXNcbi8vIHRoYXQgaXMgZ29pbmcgdG8gcmVwcmVzZW50IGFub3RoZXIgbGlzdCAob3IgZXZlbiB0aGUgc2FtZSlcbk1lZ2F0cm9uLnByb3RvdHlwZS5iZWNvbWUgPSBmdW5jdGlvbiBiZWNvbWUodmlydHVhbCkge1xuICBjb25zdCB2bGVuZ3RoID0gdmlydHVhbC5sZW5ndGg7XG4gIC8vIGlmIHRoZXJlIGFyZSBuZXcgZWxlbWVudHMgdG8gcHVzaCAuLlxuICBpZiAoMCA8IHZsZW5ndGgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IGxpdmUgPSB0aGlzLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgcG4gPSBub2RlLnBhcmVudE5vZGU7XG4gICAgbGV0IGxsZW5ndGggPSBsaXZlLmxlbmd0aDtcbiAgICBsZXQgbCA9IDA7XG4gICAgbGV0IHYgPSAwO1xuICAgIC8vIGlmIHRoZSBjdXJyZW50IGxpc3QgaXMgZW1wdHksIGFwcGVuZCBhbGwgbm9kZXNcbiAgICBpZiAobGxlbmd0aCA8IDEpIHtcbiAgICAgIHB1c2guYXBwbHkoXG4gICAgICAgIGxpdmUsXG4gICAgICAgIHV0aWxzLmluc2VydChwbiwgdmlydHVhbCwgbm9kZSlcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGFsbCBlbGVtZW50cyBhcmUgdGhlIHNhbWUsIGRvIHByZXR0eSBtdWNoIG5vdGhpbmdcbiAgICB3aGlsZSAobCA8IGxsZW5ndGggJiYgdiA8IHZsZW5ndGgpIHtcbiAgICAgIC8vIGFwcGVuZGluZyBub2Rlcy9jb21wb25lbnRzIGNvdWxkIGJlIGp1c3QgZmluZVxuICAgICAgaWYgKGxpdmVbbF0gIT09IHZpcnR1YWxbdl0pIGJyZWFrO1xuICAgICAgbCsrO1xuICAgICAgdisrO1xuICAgIH1cbiAgICAvLyBpZiB3ZSByZWFjaGVkIHRoZSBsaXZlIGxlbmd0aCBkZXN0aW5hdGlvblxuICAgIGlmIChsID09PSBsbGVuZ3RoKSB7XG4gICAgICAvLyB0aGVyZSBjb3VsZCBiZSBhIHRpZSAobm90aGluZyB0byBkbylcbiAgICAgIGlmICh2bGVuZ3RoID09PSBsbGVuZ3RoKSByZXR1cm47XG4gICAgICAvLyBvciB0aGVyZSdzIG9ubHkgdG8gYXBwZW5kXG4gICAgICBwdXNoLmFwcGx5KFxuICAgICAgICBsaXZlLFxuICAgICAgICB1dGlscy5pbnNlcnQocG4sIHNsaWNlLmNhbGwodmlydHVhbCwgdiksIG5vZGUpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgbmV3IGxlbmd0aCBpcyByZWFjaGVkIHRob3VnaFxuICAgIGlmICh2ID09PSB2bGVuZ3RoKSB7XG4gICAgICAvLyB0aGVyZSBhcmUgbm9kZXMgdG8gcmVtb3ZlXG4gICAgICB1dGlscy5yZW1vdmUocG4sIHNwbGljZS5jYWxsKGxpdmUsIGwsIGxsZW5ndGgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gb3RoZXJ3aXNlIGxldCdzIGNoZWNrIGJhY2t3YXJkXG4gICAgbGV0IHJsID0gbGxlbmd0aDtcbiAgICBsZXQgcnYgPSB2bGVuZ3RoO1xuICAgIHdoaWxlIChybCAmJiBydikge1xuICAgICAgaWYgKGxpdmVbLS1ybF0gIT09IHZpcnR1YWxbLS1ydl0pIHtcbiAgICAgICAgKytybDtcbiAgICAgICAgKytydjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vdyAuLi4gbGlzdHMgYXJlIG5vdCBpZGVudGljYWwsIHdlIGtub3cgdGhhdCxcbiAgICAvLyBidXQgbWF5YmUgaXQgd2FzIGEgcHJlcGVuZCAuLi4gc28gaWYgbGl2ZSBsZW5ndGggaXMgY292ZXJlZFxuICAgIGlmIChybCA8IDEpIHtcbiAgICAgIC8vIHJldHVybiBhZnRlciBwcmUtcGVuZGluZyBhbGwgbm9kZXNcbiAgICAgIHVuc2hpZnQuYXBwbHkoXG4gICAgICAgIGxpdmUsXG4gICAgICAgIHV0aWxzLmluc2VydChwbiwgc2xpY2UuY2FsbCh2aXJ0dWFsLCAwLCBydiksIHV0aWxzLmdldE5vZGUobGl2ZVswXSkpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBvciBtYXliZSwgaXQgd2FzIGEgcmVtb3ZhbCBvZiBub2RlcyBhdCB0aGUgYmVnaW5uaW5nXG4gICAgaWYgKHJ2IDwgMSkge1xuICAgICAgLy8gcmV0dXJuIGFmdGVyIHJlbW92aW5nIGFsbCBwcmUtbm9kZXNcbiAgICAgIHV0aWxzLnJlbW92ZShwbiwgc3BsaWNlLmNhbGwobGl2ZSwgbCwgcmwpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbm93IHdlIGhhdmUgYSBib3VuZGFyeSBvZiBub2RlcyB0aGF0IG5lZWQgdG8gYmUgY2hhbmdlZFxuICAgIC8vIGFsbCB0aGUgZGlzY292ZXJlZCBpbmZvIGFyIHBhc3NlZCB0byB0aGUgZW5naW5lXG4gICAgTWVnYXRyb24uZW5naW5lLnVwZGF0ZShcbiAgICAgIHV0aWxzLCBwbiwgbm9kZSxcbiAgICAgIGxpdmUsIGwsIHJsLCBsbGVuZ3RoLFxuICAgICAgdmlydHVhbCwgdiwgcnYsIHZsZW5ndGhcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgfVxufTtcblxuY29uc3QgdXRpbHMgPSB7XG5cbiAgLy8gdGhlIGJhc2ljIGRlZmF1bHQgZW5naW5lIGlzIGFsd2F5cyBwcm92aWRlZFxuICAvLyBpbiBjYXNlIHRoZXJlIGFyZSBjb25kaXRpb25zIHRoYXQgbmVlZCBpdFxuICBlbmdpbmUsXG5cbiAgLy8gYW4gaXRlbSBjb3VsZCBiZSBhbiBoeXBlckhUTUwuQ29tcG9uZW50IGFuZCwgaW4gc3VjaCBjYXNlLFxuICAvLyBpdCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgbm9kZVxuICBnZXROb2RlOiBub2RlID0+IG5vZGUgaW5zdGFuY2VvZiBDb21wb25lbnQgPyBub2RlLnJlbmRlcigpIDogbm9kZSxcblxuICAvLyBhcHBlbmQgYSBsaXN0IG9mIG5vZGVzIGJlZm9yZSBhbm90aGVyIG5vZGVcbiAgaW5zZXJ0OiAocGFyZW50Tm9kZSwgbm9kZXMsIG5vZGUpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBub2Rlcy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodXRpbHMuZ2V0Tm9kZShub2Rlc1swXSksIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCB0bXAgPSBmcmFnbWVudChwYXJlbnROb2RlKTtcbiAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKVxuICAgICAgICB0bXAuYXBwZW5kQ2hpbGQodXRpbHMuZ2V0Tm9kZShub2Rlc1tpKytdKSk7XG4gICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZSh0bXAsIG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH0sXG5cbiAgLy8gZHJvcCBhIGxpc3Qgb2Ygbm9kZXMgZnJvbSB0aGVpciBwYXJlbnROb2RlXG4gIHJlbW92ZTogKHBhcmVudE5vZGUsIG5vZGVzKSA9PiB7XG4gICAgbGV0IGkgPSBub2Rlcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh1dGlscy5nZXROb2RlKG5vZGVzW2ldKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKiAgICAgICAgICAgICAgICAgIF9fX19fXG4gICAgICAgICAgICAgICAgX19fLyAgfCAgXFxfX19cbiAgICAgICAgICAgICBfXy8gICAgICB8ICAgICAgXFxfX1xuICAgICAgICAgIF9fLyAgICAgICAgIHwgICAgICAgICBcXF9fXG4gICAgICAgICAvfCAgICAgICAgICAgfCAgICAgICAgICAgfFxcXG4gICAgICAgIHwgfCAgICAgICAgICAgfCAgICAgICAgICAgfCB8XG4gICAgICAgIHwgfCAgICAgICAgICAgfCAgICAgICAgICAgfCB8XG4gICAgICAgfCAgfCAgICAgICAgICAgfCAgICAgICAgICAgfCAgfFxuICAgICAgIHwgIHwgICAgICAgIF9fX3xfX18gICAgICAgIHwgIHxcbiAgICAgIC8gICB8ICAgIF9fXy8gIF9fXyAgXFxfX18gICAgfCAgIFxcXG4gICAgICB8ICAgfF9fXy8gIF9fXy98IHxcXF9fXyAgXFxfX198ICAgfFxuICAgICAgfCAgIC8gICBfXy9fIFxcX3wgfF8vIF9cXF9fICAgXFwgICB8XG4gICAgIHwgICB8X19fL1xcXyAgXFxfX19fX19fLyAgXy9cXF9fX3wgICB8XG4gICAgLyAgIC9fX18vICAgXFxfX19cXF9fXy9fX18vICAgXFxfX19cXCAgIFxcXG4gICAvICAgIHwgICB8ICAgICAgIHwgICB8ICAgICAgIHwgICB8ICAgIFxcXG4gIC8gICAgIHwgICB8XyAgICAgIHwgICB8ICAgICAgX3wgICB8ICAgICBcXFxuIHxfX18gICB8X19ffF9cXCAgIF8vfF9fX3xcXF8gICAvX3xfX198ICAgX19ffFxuIHxfICBcXCAgICB8ICAgfFxcIC8gIHxfX198ICBcXCAvfCAgIHwgICAgLyAgX3xcbiB8fHwgfCAgICB8ICAgfCB8ICBfX19fX19fICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgXFxfX19fXy8gIHwgfCAgIHwgICAgfCB8fHxcbiB8fHwgfCAgICB8ICAgfCB8ICAgIF9fXyAgICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgICAgICAgICAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8IHwgICAgICAgICAgIHwgfCAgIHwgICAgfCB8fHxcbiB8fHwgfCAgICB8ICAgfCB8ICAgICAgICAgICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHxcXHwgICAgICAgICAgIHwvfCAgIHwgICAgfCB8fHxcbiBcXHx8X3xfX19ffF9fX3wtXFxfX19fX19fX19fXy8tfF9fX3xfX19ffF98fC9cblxuICAgIGN5YmVydHJvbmNocm9uaWNsZS5mcmVld2Vic3BhY2UuY29tICAgKi9cblxuZXhwb3J0IGRlZmF1bHQgTWVnYXRyb247XG5cbi8qIFRPRE86IGJlbmNobWFyayB0aGlzIGlzIG5lZWRlZCBhdCBhbGxcbi8vIGluc3RlYWQgb2YgY2hlY2tpbmcgaW5zdGFuY2VvZiBlYWNoIHRpbWUgYW5kIHJlbmRlciBwb3RlbnRpYWxseSB0d2ljZVxuLy8gdXNlIGEgbWFwIHRvIHJldHJpZXZlIG5vZGVzIGZyb20gYSBnZW5lcmljIGl0ZW1cblxuaW1wb3J0IHtNYXB9IGZyb20gJy4uL3NoYXJlZC9wb29ybHlmaWxscy5qcyc7XG5jb25zdCBnZXQgPSAobWFwLCBub2RlKSA9PiBtYXAuZ2V0KG5vZGUpIHx8IHNldChtYXAsIG5vZGUpO1xuY29uc3Qgc2V0ID0gKG1hcCwgbm9kZSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHV0aWxzLmdldE5vZGUobm9kZSk7XG4gIG1hcC5zZXQobm9kZSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4qL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9jbGFzc2VzL01lZ2F0cm9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBpbnRlbnRzID0ge307XG5jb25zdCBrZXlzID0gW107XG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IGludGVudHMuaGFzT3duUHJvcGVydHk7XG5cbmxldCBsZW5ndGggPSAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgLy8gaHlwZXJIVE1MLmRlZmluZSgnaW50ZW50JywgKG9iamVjdCwgdXBkYXRlKSA9PiB7Li4ufSlcbiAgLy8gY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgdGhpcmQgcGFydHMgdXBkYXRlIG1lY2hhbmlzbVxuICAvLyB3aGVuIGV2ZXJ5IG90aGVyIGtub3duIG1lY2hhbmlzbSBmYWlsZWQuXG4gIC8vIGh5cGVyLmRlZmluZSgndXNlcicsIGluZm8gPT4gaW5mby5uYW1lKTtcbiAgLy8gaHlwZXIobm9kZSlgPHA+JHt7dXNlcn19PC9wPmA7XG4gIGRlZmluZTogKGludGVudCwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAoIShpbnRlbnQgaW4gaW50ZW50cykpIHtcbiAgICAgIGxlbmd0aCA9IGtleXMucHVzaChpbnRlbnQpO1xuICAgIH1cbiAgICBpbnRlbnRzW2ludGVudF0gPSBjYWxsYmFjaztcbiAgfSxcblxuICAvLyB0aGlzIG1ldGhvZCBpcyB1c2VkIGludGVybmFsbHkgYXMgbGFzdCByZXNvcnRcbiAgLy8gdG8gcmV0cmlldmUgYSB2YWx1ZSBvdXQgb2YgYW4gb2JqZWN0XG4gIGludm9rZTogKG9iamVjdCwgY2FsbGJhY2spID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICByZXR1cm4gaW50ZW50c1trZXldKG9iamVjdFtrZXldLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0ludGVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXAsIFdlYWtNYXB9IGZyb20gJy4uL3NoYXJlZC9wb29ybHlmaWxscy5qcyc7XG5pbXBvcnQge1VJREN9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMuanMnO1xuaW1wb3J0IFVwZGF0ZXMgZnJvbSAnLi4vb2JqZWN0cy9VcGRhdGVzLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUZyYWdtZW50LFxuICBpbXBvcnROb2RlLFxuICB1bmlxdWVcbn0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuLy8gYSB3ZWFrIGNvbGxlY3Rpb24gb2YgY29udGV4dHMgdGhhdFxuLy8gYXJlIGFscmVhZHkga25vd24gdG8gaHlwZXJIVE1MXG5jb25zdCBiZXdpdGNoZWQgPSBuZXcgV2Vha01hcDtcblxuLy8gdGhlIGNvbGxlY3Rpb24gb2YgYWxsIHRlbXBsYXRlIGxpdGVyYWxzXG4vLyBzaW5jZSB0aGVzZSBhcmUgdW5pcXVlIGFuZCBpbW11dGFibGVcbi8vIGZvciB0aGUgd2hvbGUgYXBwbGljYXRpb24gbGlmZS1jeWNsZVxuY29uc3QgdGVtcGxhdGVzID0gbmV3IE1hcDtcblxuLy8gYmV0dGVyIGtub3duIGFzIGh5cGVyLmJpbmQobm9kZSksIHRoZSByZW5kZXIgaXNcbi8vIHRoZSBtYWluIHRhZyBmdW5jdGlvbiBpbiBjaGFyZ2Ugb2YgZnVsbHkgdXBncmFkaW5nXG4vLyBvciBzaW1wbHkgdXBkYXRpbmcsIGNvbnRleHRzIHVzZWQgYXMgaHlwZXJIVE1MIHRhcmdldHMuXG4vLyBUaGUgYHRoaXNgIGNvbnRleHQgaXMgZWl0aGVyIGEgcmVndWxhciBET00gbm9kZSBvciBhIGZyYWdtZW50LlxuZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHdpY2tlZCA9IGJld2l0Y2hlZC5nZXQodGhpcyk7XG4gIGlmICh3aWNrZWQgJiYgd2lja2VkLnRlbXBsYXRlID09PSB1bmlxdWUodGVtcGxhdGUpKSB7XG4gICAgdXBkYXRlLmFwcGx5KHdpY2tlZC51cGRhdGVzLCBhcmd1bWVudHMpO1xuICB9IGVsc2Uge1xuICAgIHVwZ3JhZGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gYW4gdXBncmFkZSBpcyBpbiBjaGFyZ2Ugb2YgY29sbGVjdGluZyB0ZW1wbGF0ZSBpbmZvLFxuLy8gcGFyc2UgaXQgb25jZSwgaWYgdW5rbm93biwgdG8gbWFwIGFsbCBpbnRlcnBvbGF0aW9uc1xuLy8gYXMgc2luZ2xlIERPTSBjYWxsYmFja3MsIHJlbGF0ZSBzdWNoIHRlbXBsYXRlXG4vLyB0byB0aGUgY3VycmVudCBjb250ZXh0LCBhbmQgcmVuZGVyIGl0IGFmdGVyIGNsZWFuaW5nIHRoZSBjb250ZXh0IHVwXG5mdW5jdGlvbiB1cGdyYWRlKHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdW5pcXVlKHRlbXBsYXRlKTtcbiAgY29uc3QgaW5mbyA9ICB0ZW1wbGF0ZXMuZ2V0KHRlbXBsYXRlKSB8fFxuICAgICAgICAgICAgICAgIGNyZWF0ZVRlbXBsYXRlLmNhbGwodGhpcywgdGVtcGxhdGUpO1xuICBjb25zdCBmcmFnbWVudCA9IGltcG9ydE5vZGUodGhpcy5vd25lckRvY3VtZW50LCBpbmZvLmZyYWdtZW50KTtcbiAgY29uc3QgdXBkYXRlcyA9IFVwZGF0ZXMuY3JlYXRlKGZyYWdtZW50LCBpbmZvLnBhdGhzKTtcbiAgYmV3aXRjaGVkLnNldCh0aGlzLCB7dGVtcGxhdGUsIHVwZGF0ZXN9KTtcbiAgdXBkYXRlLmFwcGx5KHVwZGF0ZXMsIGFyZ3VtZW50cyk7XG4gIHRoaXMudGV4dENvbnRlbnQgPSAnJztcbiAgdGhpcy5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbi8vIGFuIHVwZGF0ZSBzaW1wbHkgbG9vcHMgb3ZlciBhbGwgbWFwcGVkIERPTSBvcGVyYXRpb25zXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzW2kgLSAxXShhcmd1bWVudHNbaV0pO1xuICB9XG59XG5cbi8vIGEgdGVtcGxhdGUgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcbi8vIGF3YXJlIG9mIGFsbCBpbnRlcnBvbGF0aW9ucyBhbmQgd2l0aCBhIGxpc3Rcbi8vIG9mIHBhdGhzIHVzZWQgdG8gZmluZCBvbmNlIHRob3NlIG5vZGVzIHRoYXQgbmVlZCB1cGRhdGVzLFxuLy8gbm8gbWF0dGVyIGlmIHRoZXNlIGFyZSBhdHRyaWJ1dGVzLCB0ZXh0IG5vZGVzLCBvciByZWd1bGFyIG9uZVxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUodGVtcGxhdGUpIHtcbiAgY29uc3QgcGF0aHMgPSBbXTtcbiAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGcmFnbWVudCh0aGlzLCB0ZW1wbGF0ZS5qb2luKFVJREMpKTtcbiAgVXBkYXRlcy5maW5kKGZyYWdtZW50LCBwYXRocywgdGVtcGxhdGUuc2xpY2UoKSk7XG4gIGNvbnN0IGluZm8gPSB7ZnJhZ21lbnQsIHBhdGhzfTtcbiAgdGVtcGxhdGVzLnNldCh0ZW1wbGF0ZSwgaW5mbyk7XG4gIHJldHVybiBpbmZvO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2h5cGVyL3JlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IGFzIEh5cGVyQ29tcG9uZW50IH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5leHBvcnQgeyBIeXBlckNvbXBvbmVudCB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91dGlscy9IeXBlckNvbXBvbmVudC50cyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xuZXhwb3J0IHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gICAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICAgKlxuICAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAgICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gICAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAgICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICAgKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAgICovXG59O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXG5cdFx0ZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uID0ge1xyXG4gIGRlZmF1bHRJbWFnZVVybDogJ2ltYWdlcy83LWNvbG9yZnVsLXBob3RvZ3JhcGh5LmpwZycsXHJcbiAgZGVmYXVsdENvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlLllDYkNyLFxyXG4gIGRlZmF1bHRDb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuc1JHQigpXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVkVSU0lPTl9TVEFSVEVEID0gJ0NPTlZFUlNJT05fU1RBUlRFRCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVyc2lvblN0YXJ0ZWQoKTogQWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ09OVkVSU0lPTl9TVEFSVEVEXHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclByb2ZpbGVUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0NPTE9SX1BST0ZJTEVfVFlQRSA9ICdDSEFOR0VfQ09MT1JfUFJPRklMRV9UWVBFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb2xvclByb2ZpbGVUeXBlKGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUsIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycyk6IEFueUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9DT0xPUl9QUk9GSUxFX1RZUEUsXHJcbiAgICBjb2xvclByb2ZpbGVUeXBlLFxyXG4gICAgY29udmVyc2lvblBhcmFtZXRlcnNcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZS50cyIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcbmltcG9ydCB7IElsbHVtaW5hbnRUeXBlIH0gZnJvbSAnbW9kZWxzL0lsbHVtaW5hbnRUeXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSUxMVU1JTkFOVF9UWVBFID0gJ0NIQU5HRV9JTExVTUlOQU5UX1RZUEUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUlsbHVtaW5hbnRUeXBlKGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZSwgd2hpdGVQb2ludDogQ29sb3JQb2ludCk6IEFueUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9JTExVTUlOQU5UX1RZUEUsXHJcbiAgICBpbGx1bWluYW50VHlwZSxcclxuICAgIHdoaXRlUG9pbnRcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlSWxsdW1pbmFudFR5cGUudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1NFTEVDVEVEX0NPTE9SX1NQQUNFID0gJ0NIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZUFjdGlvbiBleHRlbmRzIEFueUFjdGlvbiB7XHJcbiAgY29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UoXHJcbiAgY29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGVcclxuKTogQ2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlQWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ0hBTkdFX1NFTEVDVEVEX0NPTE9SX1NQQUNFLFxyXG4gICAgY29sb3JTcGFjZVxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UudHMiLCJpbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcbmltcG9ydCB7IExhYmVsZWRWYWx1ZSB9IGZyb20gJ3V0aWxzL0xhYmVsZWRWYWx1ZSc7XHJcblxyXG5leHBvcnQgZW51bSBDb2xvclByb2ZpbGVUeXBlIHtcclxuICBzUkdCLFxyXG4gIEFkb2JlUkdCLFxyXG4gIEFwcGxlUkdCLFxyXG4gIENJRVJHQixcclxuICBXaWRlR2FtdXQsXHJcbiAgUEFMLFxyXG4gIEN1c3RvbVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJlZGVmaW5lZENvbG9yUHJvZmlsZSB7XHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZTtcclxuICBwYXJhbWV0ZXJzKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJlZGVmaW5lZENvbG9yUHJvZmlsZXM6IFByZWRlZmluZWRDb2xvclByb2ZpbGVbXSA9IFtcclxuICB7IGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUuQWRvYmVSR0IsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLmFkb2JlUkdCIH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLkFwcGxlUkdCLCBwYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycy5hcHBsZVJHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5zUkdCLCBwYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycy5zUkdCIH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLkNJRVJHQiwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuY2llUkdCIH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLldpZGVHYW11dCwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMud2lkZUdhbXV0IH0sXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLlBBTCwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMucGFsIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYWJlbGVkQ29sb3JQcm9maWxlczogTGFiZWxlZFZhbHVlPENvbG9yUHJvZmlsZVR5cGU+W10gPSBbXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5BZG9iZVJHQiwgbGFiZWw6ICdBZG9iZVJHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLkFwcGxlUkdCLCBsYWJlbDogJ0FwcGxlUkdCJyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuc1JHQiwgbGFiZWw6ICdzUkdCJyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuQ0lFUkdCLCBsYWJlbDogJ0NJRVJHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLldpZGVHYW11dCwgbGFiZWw6ICdXaWRlR2FtdXQnIH0sXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5QQUwsIGxhYmVsOiAnUEFMJyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuQ3VzdG9tLCBsYWJlbDogJ0N1c3RvbScgfVxyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvQ29sb3JQcm9maWxlVHlwZS50cyIsImltcG9ydCB7IENvbG9yUG9pbnQgfSBmcm9tICdtb2RlbHMvQ29sb3JQb2ludCc7XHJcbmltcG9ydCB7IExhYmVsZWRWYWx1ZSB9IGZyb20gJ3V0aWxzL0xhYmVsZWRWYWx1ZSc7XHJcblxyXG5leHBvcnQgZW51bSBJbGx1bWluYW50VHlwZSB7XHJcbiAgQSxcclxuICBCLFxyXG4gIEMsXHJcbiAgRDUwLFxyXG4gIEQ1NSxcclxuICBENjUsXHJcbiAgRDc1LFxyXG4gIEUsXHJcbiAgRjIsXHJcbiAgRjcsXHJcbiAgRjExLFxyXG4gIEN1c3RvbVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJlZGVmaW5lZElsbHVtaW5hbnQge1xyXG4gIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZTtcclxuICB3aGl0ZVBvaW50KCk6IENvbG9yUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmVkZWZpbmVkSWxsdW1pbmFudHM6IFByZWRlZmluZWRJbGx1bWluYW50W10gPSBbXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuQSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC40NDc1NywgeTogMC40MDczMyB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkIsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzQ4NCwgeTogMC4zNTE2IH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuQywgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zMTAwNiwgeTogMC4zMTYxNSB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkQ1MCwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zNDU2NywgeTogMC4zNTg1IH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRDU1LCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjMzMjQyLCB5OiAwLjM0NzQzIH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRDY1LCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjMxMjczLCB5OiAwLjMyOTAyIH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRDc1LCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjI5OTAyLCB5OiAwLjMxNDg1IH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zMzMzMywgeTogMC4zMzMzMyB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkYyLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjM3MjA3LCB5OiAwLjM3NTEyIH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRjcsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzEyODUsIHk6IDAuMzI5MTggfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5GMTEsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzgwNTQsIHk6IDAuMzc2OTEgfSkgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhYmVsZWRJbGx1bWluYW50czogTGFiZWxlZFZhbHVlPElsbHVtaW5hbnRUeXBlPltdID0gW1xyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkEsIGxhYmVsOiAnQScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5CLCBsYWJlbDogJ0InIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuQywgbGFiZWw6ICdDJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkQ1MCwgbGFiZWw6ICdENTAnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRDU1LCBsYWJlbDogJ0Q1NScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5ENjUsIGxhYmVsOiAnRDY1JyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkQ3NSwgbGFiZWw6ICdENzUnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRSwgbGFiZWw6ICdFJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkYyLCBsYWJlbDogJ0YyJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkY3LCBsYWJlbDogJ0Y3JyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkYxMSwgbGFiZWw6ICdGMTEnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuQ3VzdG9tLCBsYWJlbDogJ0N1c3RvbScgfVxyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvSWxsdW1pbmFudFR5cGUudHMiLCJpbXBvcnQgeyB3aXJlIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5pbXBvcnQgeyBMYWJlbGVkVmFsdWUgfSBmcm9tICd1dGlscy9MYWJlbGVkVmFsdWUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhYmVsZWRTZWxlY3QoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBvcHRpb25zOiBMYWJlbGVkVmFsdWU8bnVtYmVyPltdLFxyXG4gIHNlbGVjdGVkT3B0aW9uOiBudW1iZXIsXHJcbiAgb25DaGFuZ2U6IChuZXdWYWx1ZTogbnVtYmVyKSA9PiB2b2lkXHJcbikge1xyXG4gIHJldHVybiB3aXJlKClgXHJcbiAgICA8c2VsZWN0IGlkPSR7aWR9IG9uY2hhbmdlPSR7KGV2ZW50OiBFdmVudCkgPT4gb25DaGFuZ2UoZ2V0VmFsdWVGcm9tU2VsZWN0RXZlbnQob3B0aW9ucywgZXZlbnQpKX0+XHJcbiAgICAgICR7b3B0aW9ucy5tYXAob3B0aW9uID0+IExhYmVsZWRPcHRpb24ob3B0aW9uLCBzZWxlY3RlZE9wdGlvbikpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFiZWxlZE9wdGlvbjxUPihsYWJlbGVkT3B0aW9uOiBMYWJlbGVkVmFsdWU8VD4sIHNlbGVjdGVkVmFsdWU6IFQpIHtcclxuICByZXR1cm4gd2lyZSgpYFxyXG4gICAgPG9wdGlvblxyXG4gICAgICB2YWx1ZT0ke2xhYmVsZWRPcHRpb24udmFsdWV9XHJcbiAgICAgIHNlbGVjdGVkPSR7bGFiZWxlZE9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZX1cclxuICAgID5cclxuICAgICAgJHtsYWJlbGVkT3B0aW9uLmxhYmVsfVxyXG4gICAgPC9vcHRpb24+XHJcbiAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tU2VsZWN0RXZlbnQob3B0aW9uczogTGFiZWxlZFZhbHVlPG51bWJlcj5bXSwgZXZlbnQ6IEV2ZW50KSB7XHJcbiAgY29uc3Qgc2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PmV2ZW50LnRhcmdldDtcclxuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHNlbGVjdC52YWx1ZSwgMTApO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZSk7XHJcbiAgaWYgKCFzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCA8b3B0aW9uPiBub3QgZm91bmQgaW4gb3B0aW9ucyBwYXJhbWV0ZXInKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWxlY3RlZE9wdGlvbi52YWx1ZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0xhYmVsZWRTZWxlY3QudHMiLCJleHBvcnQgZnVuY3Rpb24gbXV0YXRlTWFwPFQ+KFxyXG4gIGFycmF5OiBUW10sXHJcbiAgY2FsbGJhY2s6IChlbGVtZW50OiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBUXHJcbik6IFRbXSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGFycmF5W2ldID0gY2FsbGJhY2soYXJyYXlbaV0sIGksIGFycmF5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcnJheTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91dGlscy9tdXRhdGVNYXAudHMiLCJpbXBvcnQgQWJzdHJhY3RNYXRyaXggZnJvbSAnLi4vYWJzdHJhY3RNYXRyaXgnO1xuaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcmFwcGVyTWF0cml4MUQgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCgpIHtcbiAgICAvKipcbiAgICAgKiBAY2xhc3MgV3JhcHBlck1hdHJpeDFEXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBkYXRhXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5yb3dzID0gMV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcm93cyA9IDFcbiAgICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoICUgcm93cyAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgZGF0YSBsZW5ndGggaXMgbm90IGRpdmlzaWJsZSBieSB0aGUgbnVtYmVyIG9mIHJvd3MnKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBkYXRhLmxlbmd0aCAvIHJvd3M7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fY2FsY3VsYXRlSW5kZXgocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgdGhpcy5kYXRhW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2NhbGN1bGF0ZUluZGV4KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdO1xuICAgIH1cblxuICAgIF9jYWxjdWxhdGVJbmRleChyb3csIGNvbHVtbikge1xuICAgICAgICByZXR1cm4gKHJvdyAqIHRoaXMuY29sdW1ucykgKyBjb2x1bW47XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkge1xuICAgICAgICByZXR1cm4gTWF0cml4O1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvd3JhcC9XcmFwcGVyTWF0cml4MUQuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBYnN0cmFjdE1hdHJpeCBmcm9tICcuLi9hYnN0cmFjdE1hdHJpeCc7XG5pbXBvcnQgTWF0cml4IGZyb20gJy4uL21hdHJpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyYXBwZXJNYXRyaXgyRCBleHRlbmRzIEFic3RyYWN0TWF0cml4KCkge1xuICAgIC8qKlxuICAgICAqIEBjbGFzcyBXcmFwcGVyTWF0cml4MkRcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBkYXRhXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnJvd3MgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gZGF0YVswXS5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkge1xuICAgICAgICByZXR1cm4gTWF0cml4O1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvd3JhcC9XcmFwcGVyTWF0cml4MkQuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWF0cml4LCBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7aHlwb3RlbnVzZX0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAY2xhc3MgUXJEZWNvbXBvc2l0aW9uXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbHV0enJvZWRlci9NYXBhY2svYmxvYi9tYXN0ZXIvU291cmNlL1FyRGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFyRGVjb21wb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBxciA9IHZhbHVlLmNsb25lKCk7XG4gICAgICAgIHZhciBtID0gdmFsdWUucm93cztcbiAgICAgICAgdmFyIG4gPSB2YWx1ZS5jb2x1bW5zO1xuICAgICAgICB2YXIgcmRpYWcgPSBuZXcgQXJyYXkobik7XG4gICAgICAgIHZhciBpLCBqLCBrLCBzO1xuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIHZhciBucm0gPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgIG5ybSA9IGh5cG90ZW51c2UobnJtLCBxci5nZXQoaSwgaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ybSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChxci5nZXQoaywgaykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ybSA9IC1ucm07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcXIuc2V0KGksIGssIHFyLmdldChpLCBrKSAvIG5ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHFyLnNldChrLCBrLCBxci5nZXQoaywgaykgKyAxKTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyArPSBxci5nZXQoaSwgaykgKiBxci5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcyA9IC1zIC8gcXIuZ2V0KGssIGspO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxci5zZXQoaSwgaiwgcXIuZ2V0KGksIGopICsgcyAqIHFyLmdldChpLCBrKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZGlhZ1trXSA9IC1ucm07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlFSID0gcXI7XG4gICAgICAgIHRoaXMuUmRpYWcgPSByZGlhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb2x2ZSBhIHByb2JsZW0gb2YgbGVhc3Qgc3F1YXJlIChBeD1iKSBieSB1c2luZyB0aGUgUVIgZGVjb21wb3NpdGlvbi4gVXNlZnVsIHdoZW4gQSBpcyByZWN0YW5ndWxhciwgYnV0IG5vdCB3b3JraW5nIHdoZW4gQSBpcyBzaW5ndWxhci5cbiAgICAgKiBFeGFtcGxlIDogV2Ugc2VhcmNoIHRvIGFwcHJveGltYXRlIHgsIHdpdGggQSBtYXRyaXggc2hhcGUgbSpuLCB4IHZlY3RvciBzaXplIG4sIGIgdmVjdG9yIHNpemUgbSAobSA+IG4pLiBXZSB3aWxsIHVzZSA6XG4gICAgICogdmFyIHFyID0gUXJEZWNvbXBvc2l0aW9uKEEpO1xuICAgICAqIHZhciB4ID0gcXIuc29sdmUoYik7XG4gICAgICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlIC0gTWF0cml4IDFEIHdoaWNoIGlzIHRoZSB2ZWN0b3IgYiAoaW4gdGhlIGVxdWF0aW9uIEF4ID0gYilcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIHZlY3RvciB4XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRyaXguY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBxciA9IHRoaXMuUVI7XG4gICAgICAgIHZhciBtID0gcXIucm93cztcblxuICAgICAgICBpZiAodmFsdWUucm93cyAhPT0gbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggcm93IGRpbWVuc2lvbnMgbXVzdCBhZ3JlZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc0Z1bGxSYW5rKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGlzIHJhbmsgZGVmaWNpZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY291bnQgPSB2YWx1ZS5jb2x1bW5zO1xuICAgICAgICB2YXIgWCA9IHZhbHVlLmNsb25lKCk7XG4gICAgICAgIHZhciBuID0gcXIuY29sdW1ucztcbiAgICAgICAgdmFyIGksIGosIGssIHM7XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gcXJbaV1ba10gKiBYW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzID0gLXMgLyBxcltrXVtrXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gKz0gcyAqIHFyW2ldW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGsgPSBuIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgWFtrXVtqXSAvPSB0aGlzLlJkaWFnW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gLT0gWFtrXVtqXSAqIHFyW2ldW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBYLnN1Yk1hdHJpeCgwLCBuIC0gMSwgMCwgY291bnQgLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGdWxsUmFuaygpIHtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLlFSLmNvbHVtbnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5SZGlhZ1tpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgdXBwZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgICAgICB2YXIgcXIgPSB0aGlzLlFSO1xuICAgICAgICB2YXIgbiA9IHFyLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeChuLCBuKTtcbiAgICAgICAgdmFyIGksIGo7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGopIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IHFyW2ldW2pdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gdGhpcy5SZGlhZ1tpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IG9ydGhvZ29uYWxNYXRyaXgoKSB7XG4gICAgICAgIHZhciBxciA9IHRoaXMuUVI7XG4gICAgICAgIHZhciByb3dzID0gcXIucm93cztcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBxci5jb2x1bW5zO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgICAgIHZhciBpLCBqLCBrLCBzO1xuXG4gICAgICAgIGZvciAoayA9IGNvbHVtbnMgLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIFhbaV1ba10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWFtrXVtrXSA9IDE7XG4gICAgICAgICAgICBmb3IgKGogPSBrOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHFyW2tdW2tdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzICs9IHFyW2ldW2tdICogWFtpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHMgPSAtcyAvIHFyW2tdW2tdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFhbaV1bal0gKz0gcyAqIHFyW2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBYO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvcXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnaW5kZXguc2Nzcyc7XHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgYmluZCB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGJvb3RzdHJhcDtcclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcclxuICBjb25zdCBhcHBsaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBsaWNhdGlvbicpO1xyXG5cclxuICBpZiAoIWFwcGxpY2F0aW9uQ29udGFpbmVyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGxpY2F0aW9uIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcGxpY2F0aW9uKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgYmluZChhcHBsaWNhdGlvbkNvbnRhaW5lcilgJHthcHBsaWNhdGlvbn1gO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCBhcyBIeXBlckNvbXBvbmVudCB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VQaWNrZXIgfSBmcm9tICdjb21wb25lbnRzL0ltYWdlUGlja2VyJztcclxuXHJcbmltcG9ydCB7IENvbG9yU3BhY2VQaWNrZXIgfSBmcm9tICdjb250YWluZXJzL0NvbG9yU3BhY2VQaWNrZXInO1xyXG5pbXBvcnQgeyBPcmlnaW5hbEltYWdlRGlzcGxheSB9IGZyb20gJ2NvbnRhaW5lcnMvT3JpZ2luYWxJbWFnZURpc3BsYXknO1xyXG5pbXBvcnQgeyBSZXN1bHRzRGlzcGxheSB9IGZyb20gJ2NvbnRhaW5lcnMvUmVzdWx0c0Rpc3BsYXknO1xyXG5pbXBvcnQgeyBTdGFydENvbnZlcnNpb25CdXR0b24gfSBmcm9tICdjb250YWluZXJzL1N0YXJ0Q29udmVyc2lvbkJ1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlTG9hZGVyJztcclxuXHJcbmltcG9ydCB7IGNoYW5nZU9yaWdpbmFsSW1hZ2UgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZU9yaWdpbmFsSW1hZ2UnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVyQm94IH0gZnJvbSAnY29udGFpbmVycy9Db252ZXJzaW9uUGFyYW1ldGVyQm94JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIEh5cGVyQ29tcG9uZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlUGlja2VyOiBJbWFnZVBpY2tlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IG9yaWdpbmFsSW1hZ2VEaXNwbGF5OiBPcmlnaW5hbEltYWdlRGlzcGxheTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbG9yU3BhY2VQaWNrZXI6IENvbG9yU3BhY2VQaWNrZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb252ZXJzaW9uUGFyYW1ldGVyQm94OiBDb252ZXJzaW9uUGFyYW1ldGVyQm94O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRDb252ZXJzaW9uQnV0dG9uOiBTdGFydENvbnZlcnNpb25CdXR0b247XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZXN1bHRzRGlzcGxheTogUmVzdWx0c0Rpc3BsYXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmltYWdlUGlja2VyID0gbmV3IEltYWdlUGlja2VyKCk7XHJcbiAgICB0aGlzLm9yaWdpbmFsSW1hZ2VEaXNwbGF5ID0gbmV3IE9yaWdpbmFsSW1hZ2VEaXNwbGF5KCk7XHJcbiAgICB0aGlzLmNvbG9yU3BhY2VQaWNrZXIgPSBuZXcgQ29sb3JTcGFjZVBpY2tlcigpO1xyXG4gICAgdGhpcy5jb252ZXJzaW9uUGFyYW1ldGVyQm94ID0gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJCb3goKTtcclxuICAgIHRoaXMuc3RhcnRDb252ZXJzaW9uQnV0dG9uID0gbmV3IFN0YXJ0Q29udmVyc2lvbkJ1dHRvbigpO1xyXG4gICAgdGhpcy5yZXN1bHRzRGlzcGxheSA9IG5ldyBSZXN1bHRzRGlzcGxheSgpO1xyXG5cclxuICAgIHRoaXMubG9hZERlZmF1bHRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+Q29sb3IgY29udmVydGVyPC9oMT5cclxuICAgICAgICAke3RoaXMuaW1hZ2VQaWNrZXJ9XHJcbiAgICAgICAgJHt0aGlzLm9yaWdpbmFsSW1hZ2VEaXNwbGF5fVxyXG4gICAgICAgICR7dGhpcy5jb2xvclNwYWNlUGlja2VyfVxyXG4gICAgICAgICR7dGhpcy5jb252ZXJzaW9uUGFyYW1ldGVyQm94fVxyXG4gICAgICAgICR7dGhpcy5zdGFydENvbnZlcnNpb25CdXR0b259XHJcbiAgICAgICAgJHt0aGlzLnJlc3VsdHNEaXNwbGF5fVxyXG5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+Q3JlYXRlZCBieSBHcnplZ29yeiBSb3pkemlhbGlrIEAgMjAxNzwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGxvYWREZWZhdWx0SW1hZ2UoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0SW1hZ2VVcmwgPSBjb25maWd1cmF0aW9uLmRlZmF1bHRJbWFnZVVybDtcclxuXHJcbiAgICBjb25zdCBpbWFnZUxvYWRlciA9IG5ldyBJbWFnZUxvYWRlcigpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBpbWFnZUxvYWRlci5sb2FkSW1hZ2UoZGVmYXVsdEltYWdlVXJsKTtcclxuXHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmlnaW5hbEltYWdlKGltYWdlKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL0FwcGxpY2F0aW9uLnRzIiwiaW1wb3J0IHtjcmVhdGUsIGZyYWdtZW50LCB0ZXh0fSBmcm9tICcuL2Vhc3ktZG9tLmpzJztcblxuY29uc3QgdGVzdEZyYWdtZW50ID0gZnJhZ21lbnQoZG9jdW1lbnQpO1xuXG4vLyBET000IG5vZGUuYXBwZW5kKC4uLm1hbnkpXG5leHBvcnQgY29uc3QgaGFzQXBwZW5kID0gJ2FwcGVuZCcgaW4gdGVzdEZyYWdtZW50O1xuXG4vLyBkZXRlY3Qgb2xkIGJyb3dzZXJzIHdpdGhvdXQgSFRNTFRlbXBsYXRlRWxlbWVudCBjb250ZW50IHN1cHBvcnRcbmV4cG9ydCBjb25zdCBoYXNDb250ZW50ID0gJ2NvbnRlbnQnIGluIGNyZWF0ZShkb2N1bWVudCwgJ3RlbXBsYXRlJyk7XG5cbi8vIElFIDExIGhhcyBwcm9ibGVtcyB3aXRoIGNsb25pbmcgdGVtcGxhdGVzOiBpdCBcImZvcmdldHNcIiBlbXB0eSBjaGlsZE5vZGVzXG50ZXN0RnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dCh0ZXN0RnJhZ21lbnQsICdnJykpO1xudGVzdEZyYWdtZW50LmFwcGVuZENoaWxkKHRleHQodGVzdEZyYWdtZW50LCAnJykpO1xuZXhwb3J0IGNvbnN0IGhhc0Rvb21lZENsb25lTm9kZSA9IHRlc3RGcmFnbWVudC5jbG9uZU5vZGUodHJ1ZSkuY2hpbGROb2Rlcy5sZW5ndGggPT09IDE7XG5cbi8vIG9sZCBicm93c2VycyBuZWVkIHRvIGZhbGxiYWNrIHRvIGNsb25lTm9kZVxuLy8gQ3VzdG9tIEVsZW1lbnRzIFYwIGFuZCBWMSB3aWxsIHdvcmsgcG9seWZpbGxlZFxuLy8gYnV0IG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgbmVlZCBpbXBvcnROb2RlIGluc3RlYWRcbi8vIChzcGVjaWFsbHkgQ2hyb21pdW0gYW5kIGl0cyBvbGQgVjAgaW1wbGVtZW50YXRpb24pXG5leHBvcnQgY29uc3QgaGFzSW1wb3J0Tm9kZSA9ICdpbXBvcnROb2RlJyBpbiBkb2N1bWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2ZlYXR1cmVzLWRldGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtzbGljZSwgc3BsaWNlfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHVwZGF0ZTogKFxuICAgIHV0aWxzLCBwYXJlbnROb2RlLCBjb21tZW50Tm9kZSxcbiAgICBsaXZlTm9kZXMsIGxpdmVTdGFydCwgbGl2ZUVuZCwgbGl2ZUxlbmd0aCxcbiAgICB2aXJ0dWFsTm9kZXMsIHZpcnR1YWxTdGFydCwgdmlydHVhbEVuZCAvKiwgdmlydHVhbExlbmd0aCAqL1xuICApID0+IHtcbiAgICB3aGlsZSAobGl2ZVN0YXJ0IDwgbGl2ZUVuZCAmJiB2aXJ0dWFsU3RhcnQgPCB2aXJ0dWFsRW5kKSB7XG4gICAgICBjb25zdCBsaXZlVmFsdWUgPSBsaXZlTm9kZXNbbGl2ZVN0YXJ0XTtcbiAgICAgIGNvbnN0IHZpcnR1YWxWYWx1ZSA9IHZpcnR1YWxOb2Rlc1t2aXJ0dWFsU3RhcnRdO1xuICAgICAgY29uc3Qgc3RhdHVzID0gbGl2ZVZhbHVlID09PSB2aXJ0dWFsVmFsdWUgP1xuICAgICAgICAgICAgICAgICAgICAgIDAgOiAobGl2ZU5vZGVzLmluZGV4T2YodmlydHVhbFZhbHVlKSA8IDAgPyAxIDogLTEpO1xuICAgICAgLy8gbm9kZXMgY2FuIGJlIGVpdGhlciByZW1vdmVkIC4uLlxuICAgICAgaWYgKHN0YXR1cyA8IDApIHtcbiAgICAgICAgc3BsaWNlLmNhbGwobGl2ZU5vZGVzLCBsaXZlU3RhcnQsIDEpO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHV0aWxzLmdldE5vZGUobGl2ZVZhbHVlKSk7XG4gICAgICAgIGxpdmVFbmQtLTtcbiAgICAgICAgbGl2ZUxlbmd0aC0tO1xuICAgICAgfVxuICAgICAgLy8gLi4uIGFwcGVuZGVkIC4uLlxuICAgICAgZWxzZSBpZiAoMCA8IHN0YXR1cykge1xuICAgICAgICBzcGxpY2UuY2FsbChsaXZlTm9kZXMsIGxpdmVTdGFydCwgMCwgdmlydHVhbFZhbHVlKTtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodXRpbHMuZ2V0Tm9kZSh2aXJ0dWFsVmFsdWUpLCB1dGlscy5nZXROb2RlKGxpdmVWYWx1ZSkpO1xuICAgICAgICBsaXZlU3RhcnQrKztcbiAgICAgICAgbGl2ZUVuZCsrO1xuICAgICAgICBsaXZlTGVuZ3RoKys7XG4gICAgICAgIHZpcnR1YWxTdGFydCsrO1xuICAgICAgfVxuICAgICAgLy8gLi4uIG9yIGlnbm9yZWQsIHNpbmNlIGl0J3MgdGhlIHNhbWUgLi4uXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGl2ZVN0YXJ0Kys7XG4gICAgICAgIHZpcnR1YWxTdGFydCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGl2ZVN0YXJ0IDwgbGl2ZUVuZCkge1xuICAgICAgY29uc3QgcmVtb3ZlID0gc3BsaWNlLmNhbGwobGl2ZU5vZGVzLCBsaXZlU3RhcnQsIGxpdmVFbmQgLSBsaXZlU3RhcnQpO1xuICAgICAgbGl2ZVN0YXJ0ID0gcmVtb3ZlLmxlbmd0aDtcbiAgICAgIHdoaWxlIChsaXZlU3RhcnQtLSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHV0aWxzLmdldE5vZGUocmVtb3ZlW2xpdmVTdGFydF0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZpcnR1YWxTdGFydCA8IHZpcnR1YWxFbmQpIHtcbiAgICAgIHNwbGljZS5hcHBseShcbiAgICAgICAgbGl2ZU5vZGVzLFxuICAgICAgICBbbGl2ZUVuZCwgMF0uY29uY2F0KFxuICAgICAgICAgIHV0aWxzLmluc2VydChcbiAgICAgICAgICAgIHBhcmVudE5vZGUsXG4gICAgICAgICAgICBzbGljZS5jYWxsKHZpcnR1YWxOb2RlcywgdmlydHVhbFN0YXJ0LCB2aXJ0dWFsRW5kKSxcbiAgICAgICAgICAgIGxpdmVFbmQgPCBsaXZlTGVuZ3RoID9cbiAgICAgICAgICAgICAgdXRpbHMuZ2V0Tm9kZShsaXZlTm9kZXNbbGl2ZUVuZF0pIDogY29tbWVudE5vZGVcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9FbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7RUxFTUVOVF9OT0RFLCBTVkdfTkFNRVNQQUNFfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7V2Vha01hcCwgdHJpbX0gZnJvbSAnLi4vc2hhcmVkL3Bvb3JseWZpbGxzLmpzJztcbmltcG9ydCB7ZnJhZ21lbnR9IGZyb20gJy4uL3NoYXJlZC9lYXN5LWRvbS5qcyc7XG5pbXBvcnQge2FwcGVuZCwgc2xpY2UsIHVuaXF1ZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXIuanMnO1xuXG4vLyBhbGwgd2lyZXMgdXNlZCBwZXIgZWFjaCBjb250ZXh0XG5jb25zdCB3aXJlcyA9IG5ldyBXZWFrTWFwO1xuXG4vLyBBIHdpcmUgaXMgYSBjYWxsYmFjayB1c2VkIGFzIHRhZyBmdW5jdGlvblxuLy8gdG8gbGF6aWx5IHJlbGF0ZSBhIGdlbmVyaWMgb2JqZWN0IHRvIGEgdGVtcGxhdGUgbGl0ZXJhbC5cbi8vIGh5cGVyLndpcmUodXNlcilgPGRpdiBpZD11c2VyPiR7dXNlci5uYW1lfTwvZGl2PmA7ID0+IHRoZSBkaXYjdXNlclxuLy8gVGhpcyBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBoYXZlIGEgdW5pcXVlIERPTSBzdHJ1Y3R1cmVcbi8vIHJlbGF0ZWQgdG8gYSB1bmlxdWUgSlMgb2JqZWN0IHRocm91Z2ggYSByZXVzYWJsZSB0ZW1wbGF0ZSBsaXRlcmFsLlxuLy8gQSB3aXJlIGNhbiBzcGVjaWZ5IGEgdHlwZSwgYXMgc3ZnIG9yIGh0bWwsIGFuZCBhbHNvIGFuIGlkXG4vLyB2aWEgaHRtbDppZCBvciA6aWQgY29udmVudGlvbi4gU3VjaCA6aWQgYWxsb3dzIHNhbWUgSlMgb2JqZWN0c1xuLy8gdG8gYmUgYXNzb2NpYXRlZCB0byBkaWZmZXJlbnQgRE9NIHN0cnVjdHVyZXMgYWNjb3JkaW5nbHkgd2l0aFxuLy8gdGhlIHVzZWQgdGVtcGxhdGUgbGl0ZXJhbCB3aXRob3V0IGxvc2luZyBwcmV2aW91c2x5IHJlbmRlcmVkIHBhcnRzLlxuY29uc3Qgd2lyZSA9IChvYmosIHR5cGUpID0+IG9iaiA9PSBudWxsID9cbiAgY29udGVudCh0eXBlIHx8ICdodG1sJykgOlxuICB3ZWFrbHkob2JqLCB0eXBlIHx8ICdodG1sJyk7XG5cbi8vIEEgd2lyZSBjb250ZW50IGlzIGEgdmlydHVhbCByZWZlcmVuY2UgdG8gb25lIG9yIG1vcmUgbm9kZXMuXG4vLyBJdCdzIHJlcHJlc2VudGVkIGJ5IGVpdGhlciBhIERPTSBub2RlLCBvciBhbiBBcnJheS5cbi8vIEluIGJvdGggY2FzZXMsIHRoZSB3aXJlIGNvbnRlbnQgcm9sZSBpcyB0byBzaW1wbHkgdXBkYXRlXG4vLyBhbGwgbm9kZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiByZWxhdGVkIGNhbGxiYWNrcy5cbi8vIEluIGZldyB3b3JkcywgYSB3aXJlIGNvbnRlbnQgaXMgbGlrZSBhbiBpbnZpc2libGUgcGFyZW50IG5vZGVcbi8vIGluIGNoYXJnZSBvZiB1cGRhdGluZyBpdHMgY29udGVudCBsaWtlIGEgYm91bmQgZWxlbWVudCB3b3VsZCBkby5cbmNvbnN0IGNvbnRlbnQgPSB0eXBlID0+IHtcbiAgbGV0IHdpcmUsIGNvbnRhaW5lciwgY29udGVudCwgdGVtcGxhdGUsIHVwZGF0ZXM7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGljcykge1xuICAgIHN0YXRpY3MgPSB1bmlxdWUoc3RhdGljcyk7XG4gICAgbGV0IHNldHVwID0gdGVtcGxhdGUgIT09IHN0YXRpY3M7XG4gICAgaWYgKHNldHVwKSB7XG4gICAgICB0ZW1wbGF0ZSA9IHN0YXRpY3M7XG4gICAgICBjb250ZW50ID0gZnJhZ21lbnQoZG9jdW1lbnQpO1xuICAgICAgY29udGFpbmVyID0gdHlwZSA9PT0gJ3N2ZycgP1xuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ3N2ZycpIDpcbiAgICAgICAgY29udGVudDtcbiAgICAgIHVwZGF0ZXMgPSByZW5kZXIuYmluZChjb250YWluZXIpO1xuICAgIH1cbiAgICB1cGRhdGVzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHNldHVwKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgYXBwZW5kKGNvbnRlbnQsIHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpKTtcbiAgICAgIH1cbiAgICAgIHdpcmUgPSB3aXJlQ29udGVudChjb250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHdpcmU7XG4gIH07XG59O1xuXG4vLyB3aXJlcyBhcmUgd2Vha2x5IGNyZWF0ZWQgdGhyb3VnaCBvYmplY3RzLlxuLy8gRWFjaCBvYmplY3QgY2FuIGhhdmUgbXVsdGlwbGUgd2lyZXMgYXNzb2NpYXRlZFxuLy8gYW5kIHRoaXMgaXMgdGhhbmtzIHRvIHRoZSB0eXBlICsgOmlkIGZlYXR1cmUuXG5jb25zdCB3ZWFrbHkgPSAob2JqLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGkgPSB0eXBlLmluZGV4T2YoJzonKTtcbiAgbGV0IHdpcmUgPSB3aXJlcy5nZXQob2JqKTtcbiAgbGV0IGlkID0gdHlwZTtcbiAgaWYgKC0xIDwgaSkge1xuICAgIGlkID0gdHlwZS5zbGljZShpICsgMSk7XG4gICAgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkgfHwgJ2h0bWwnO1xuICB9XG4gIGlmICghd2lyZSkgd2lyZXMuc2V0KG9iaiwgd2lyZSA9IHt9KTtcbiAgcmV0dXJuIHdpcmVbaWRdIHx8ICh3aXJlW2lkXSA9IGNvbnRlbnQodHlwZSkpO1xufTtcblxuLy8gYSBkb2N1bWVudCBmcmFnbWVudCBsb3NlcyBpdHMgbm9kZXMgYXMgc29vblxuLy8gYXMgaXQncyBhcHBlbmRlZCBpbnRvIGFub3RoZXIgbm9kZS5cbi8vIFRoaXMgd291bGQgZWFzaWx5IGxvc2Ugd2lyZWQgY29udGVudFxuLy8gc28gdGhhdCBvbiBhIHNlY29uZCByZW5kZXIgY2FsbCwgdGhlIHBhcmVudFxuLy8gbm9kZSB3b3VsZG4ndCBrbm93IHdoaWNoIG5vZGUgd2FzIHRoZXJlXG4vLyBhc3NvY2lhdGVkIHRvIHRoZSBpbnRlcnBvbGF0aW9uLlxuLy8gVG8gcHJldmVudCBoeXBlckhUTUwgdG8gZm9yZ2V0IGFib3V0IHdpcmVkIG5vZGVzLFxuLy8gdGhlc2UgYXJlIGVpdGhlciByZXR1cm5lZCBhcyBBcnJheSBvciwgaWYgdGhlcmUncyBvbnkgb25lIGVudHJ5LFxuLy8gYXMgc2luZ2xlIHJlZmVyZW5jZWQgbm9kZSB0aGF0IHdvbid0IGRpc2FwcGVhciBmcm9tIHRoZSBmcmFnbWVudC5cbi8vIFRoZSBpbml0aWFsIGZyYWdtZW50LCBhdCB0aGlzIHBvaW50LCB3b3VsZCBiZSB1c2VkIGFzIHVuaXF1ZSByZWZlcmVuY2UuXG5jb25zdCB3aXJlQ29udGVudCA9IG5vZGUgPT4ge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICBjb25zdCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgY29uc3Qgd2lyZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGROb2Rlc1tpXTtcbiAgICBpZiAoXG4gICAgICBjaGlsZC5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8XG4gICAgICB0cmltLmNhbGwoY2hpbGQudGV4dENvbnRlbnQpLmxlbmd0aCAhPT0gMFxuICAgICkge1xuICAgICAgd2lyZS5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdpcmUubGVuZ3RoID09PSAxID8gd2lyZVswXSA6IHdpcmU7XG59O1xuXG5leHBvcnQge2NvbnRlbnQsIHdlYWtseX07XG5leHBvcnQgZGVmYXVsdCB3aXJlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci93aXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICBDT05ORUNURUQsIERJU0NPTk5FQ1RFRCxcbiAgQ09NTUVOVF9OT0RFLCBET0NVTUVOVF9GUkFHTUVOVF9OT0RFLCBFTEVNRU5UX05PREUsIFRFWFRfTk9ERSxcbiAgT1dORVJfU1ZHX0VMRU1FTlQsXG4gIFNIT1VMRF9VU0VfVEVYVF9DT05URU5ULFxuICBVSUQsIFVJRENcbn0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy5qcyc7XG5cbmltcG9ydCBNZWdhdHJvbiBmcm9tICcuLi9jbGFzc2VzL01lZ2F0cm9uLmpzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQuanMnO1xuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoLmpzJztcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlLmpzJztcbmltcG9ydCBJbnRlbnQgZnJvbSAnLi9JbnRlbnQuanMnO1xuaW1wb3J0IHt0ZXh0fSBmcm9tICcuLi9zaGFyZWQvZWFzeS1kb20uanMnO1xuaW1wb3J0IHtFdmVudCwgV2Vha1NldCwgaXNBcnJheSwgdHJpbX0gZnJvbSAnLi4vc2hhcmVkL3Bvb3JseWZpbGxzLmpzJztcbmltcG9ydCB7Y3JlYXRlRnJhZ21lbnQsIHNsaWNlfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuXG4vLyBoeXBlci5Db21wb25lbnQgaGF2ZSBhIGNvbm5lY3RlZC9kaXNjb25uZWN0ZWRcbi8vIG1lY2hhbmlzbSBwcm92aWRlZCBieSBNdXRhdGlvbk9ic2VydmVyXG4vLyBUaGlzIHdlYWsgc2V0IGlzIHVzZWQgdG8gcmVjb2duaXplIGNvbXBvbmVudHNcbi8vIGFzIERPTSBub2RlIHRoYXQgbmVlZHMgdG8gdHJpZ2dlciBjb25uZWN0ZWQvZGlzY29ubmVjdGVkIGV2ZW50c1xuY29uc3QgY29tcG9uZW50cyA9IG5ldyBXZWFrU2V0O1xuXG4vLyBhIGJhc2ljIGRpY3Rpb25hcnkgdXNlZCB0byBmaWx0ZXIgYWxyZWFkeSBjYWNoZWQgYXR0cmlidXRlc1xuLy8gd2hpbGUgbG9va2luZyBmb3Igc3BlY2lhbCBoeXBlckhUTUwgdmFsdWVzLlxuZnVuY3Rpb24gQ2FjaGUoKSB7fVxuQ2FjaGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuLy8gcmV0dXJucyBhbiBpbnRlbnQgdG8gZXhwbGljaXRseSBpbmplY3QgY29udGVudCBhcyBodG1sXG5jb25zdCBhc0hUTUwgPSBodG1sID0+ICh7aHRtbH0pO1xuXG4vLyB1cGRhdGVzIGFyZSBjcmVhdGVkIG9uY2UgcGVyIGNvbnRleHQgdXBncmFkZVxuLy8gd2l0aGluIHRoZSBtYWluIHJlbmRlciBmdW5jdGlvbiAoLi4vaHlwZXIvcmVuZGVyLmpzKVxuLy8gVGhlc2UgYXJlIGFuIEFycmF5IG9mIGNhbGxiYWNrcyB0byBpbnZva2UgcGFzc2luZ1xuLy8gZWFjaCBpbnRlcnBvbGF0aW9uIHZhbHVlLlxuLy8gVXBkYXRlcyBjYW4gYmUgcmVsYXRlZCB0byBhbnkga2luZCBvZiBjb250ZW50LFxuLy8gYXR0cmlidXRlcywgb3Igc3BlY2lhbCB0ZXh0LW9ubHkgY2FzZXMgc3VjaCA8c3R5bGU+XG4vLyBlbGVtZW50cyBvciA8dGV4dGFyZWE+XG5jb25zdCBjcmVhdGUgPSAocm9vdCwgcGF0aHMpID0+IHtcbiAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICBjb25zdCBsZW5ndGggPSBwYXRocy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbmZvID0gcGF0aHNbaV07XG4gICAgY29uc3Qgbm9kZSA9IFBhdGguZmluZChyb290LCBpbmZvLnBhdGgpO1xuICAgIHN3aXRjaCAoaW5mby50eXBlKSB7XG4gICAgICBjYXNlICdhbnknOlxuICAgICAgICB1cGRhdGVzLnB1c2goc2V0QW55Q29udGVudChub2RlLCBbXSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0dHInOlxuICAgICAgICB1cGRhdGVzLnB1c2goc2V0QXR0cmlidXRlKG5vZGUsIGluZm8ubmFtZSwgaW5mby5ub2RlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIHVwZGF0ZXMucHVzaChzZXRUZXh0Q29udGVudChub2RlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXBkYXRlcztcbn07XG5cbi8vIGZpbmRpbmcgYWxsIHBhdGhzIGlzIGEgb25lLW9mZiBvcGVyYXRpb24gcGVyZm9ybWVkXG4vLyB3aGVuIGEgbmV3IHRlbXBsYXRlIGxpdGVyYWwgaXMgdXNlZC5cbi8vIFRoZSBnb2FsIGlzIHRvIG1hcCBhbGwgdGFyZ2V0IG5vZGVzIHRoYXQgd2lsbCBiZVxuLy8gdXNlZCB0byB1cGRhdGUgY29udGVudC9hdHRyaWJ1dGVzIGV2ZXJ5IHRpbWVcbi8vIHRoZSBzYW1lIHRlbXBsYXRlIGxpdGVyYWwgaXMgdXNlZCB0byBjcmVhdGUgY29udGVudC5cbi8vIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIHBhdGhzIHJlbGF0ZWQgdG8gdGhlIHRlbXBsYXRlXG4vLyB3aXRoIGFsbCB0aGUgbmVjZXNzYXJ5IGluZm8gdG8gY3JlYXRlIHVwZGF0ZXMgYXNcbi8vIGxpc3Qgb2YgY2FsbGJhY2tzIHRoYXQgdGFyZ2V0IGRpcmVjdGx5IGFmZmVjdGVkIG5vZGVzLlxuY29uc3QgZmluZCA9IChub2RlLCBwYXRocywgcGFydHMpID0+IHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgY29uc3QgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hpbGQgPSBjaGlsZE5vZGVzW2ldO1xuICAgIHN3aXRjaCAoY2hpbGQubm9kZVR5cGUpIHtcbiAgICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgICBmaW5kQXR0cmlidXRlcyhjaGlsZCwgcGF0aHMsIHBhcnRzKTtcbiAgICAgICAgZmluZChjaGlsZCwgcGF0aHMsIHBhcnRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENPTU1FTlRfTk9ERTpcbiAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50ID09PSBVSUQpIHtcbiAgICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgIHBhdGhzLnB1c2goXG4gICAgICAgICAgICAvLyBiYXNpY0hUTUwgb3Igb3RoZXIgbm9uIHN0YW5kYXJkIGVuZ2luZXNcbiAgICAgICAgICAgIC8vIG1pZ2h0IGVuZCB1cCBoYXZpbmcgY29tbWVudHMgaW4gbm9kZXNcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZXkgc2hvdWxkbid0LCBoZW5jZSB0aGlzIGNoZWNrLlxuICAgICAgICAgICAgU0hPVUxEX1VTRV9URVhUX0NPTlRFTlQudGVzdChub2RlLm5vZGVOYW1lKSA/XG4gICAgICAgICAgICAgIFBhdGguY3JlYXRlKCd0ZXh0Jywgbm9kZSkgOlxuICAgICAgICAgICAgICBQYXRoLmNyZWF0ZSgnYW55JywgY2hpbGQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEVYVF9OT0RFOlxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGlnbm9yZSBpcyBhY3R1YWxseSBjb3ZlcmVkIGJ5IGJyb3dzZXJzXG4gICAgICAgIC8vIG9ubHkgYmFzaWNIVE1MIGVuZHMgdXAgb24gcHJldmlvdXMgQ09NTUVOVF9OT0RFIGNhc2VcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBURVhUX05PREUgYmVjYXVzZSBpdCBrbm93cyBub3RoaW5nIGFib3V0XG4gICAgICAgIC8vIHNwZWNpYWwgc3R5bGUgb3IgdGV4dGFyZWEgYmVoYXZpb3JcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICBTSE9VTERfVVNFX1RFWFRfQ09OVEVOVC50ZXN0KG5vZGUubm9kZU5hbWUpICYmXG4gICAgICAgICAgdHJpbS5jYWxsKGNoaWxkLnRleHRDb250ZW50KSA9PT0gVUlEQ1xuICAgICAgICApIHtcbiAgICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgIHBhdGhzLnB1c2goUGF0aC5jcmVhdGUoJ3RleHQnLCBub2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vLyBhdHRyaWJ1dGVzIGFyZSBzZWFyY2hlZCB2aWEgdW5pcXVlIGh5cGVySFRNTCBpZCB2YWx1ZS5cbi8vIERlc3BpdGUgSFRNTCBiZWluZyBjYXNlIGluc2Vuc2l0aXZlLCBoeXBlckhUTUwgaXMgYWJsZVxuLy8gdG8gcmVjb2duaXplIGF0dHJpYnV0ZXMgYnkgbmFtZSBpbiBhIGNhc2VTZW5zaXRpdmUgd2F5LlxuLy8gVGhpcyBwbGF5cyB3ZWxsIHdpdGggQ3VzdG9tIEVsZW1lbnRzIGRlZmluaXRpb25zXG4vLyBhbmQgYWxzbyB3aXRoIFhNTC1saWtlIGVudmlyb25tZW50cywgd2l0aG91dCB0cnVzdGluZ1xuLy8gdGhlIHJlc3VsdGluZyBET00gYnV0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGguXG4vLyBJRS9FZGdlIGhhcyBhIGZ1bm55IGJ1ZyB3aXRoIGF0dHJpYnV0ZXMgYW5kIHRoZXNlIG1pZ2h0IGJlIGR1cGxpY2F0ZWQuXG4vLyBUaGlzIGlzIHdoeSB0aGVyZSBpcyBhIGNhY2hlIGluIGNoYXJnZSBvZiBiZWluZyBzdXJlIG5vIGR1cGxpY2F0ZWRcbi8vIGF0dHJpYnV0ZXMgYXJlIGV2ZXIgY29uc2lkZXJlZCBpbiBmdXR1cmUgdXBkYXRlcy5cbmNvbnN0IGZpbmRBdHRyaWJ1dGVzID0gKG5vZGUsIHBhdGhzLCBwYXJ0cykgPT4ge1xuICBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZTtcbiAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcbiAgY29uc3QgYXJyYXkgPSBzbGljZS5jYWxsKGF0dHJpYnV0ZXMpO1xuICBjb25zdCByZW1vdmUgPSBbXTtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXR0cmlidXRlID0gYXJyYXlbaV07XG4gICAgaWYgKGF0dHJpYnV0ZS52YWx1ZSA9PT0gVUlEKSB7XG4gICAgICBjb25zdCBuYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAvLyB0aGUgZm9sbG93aW5nIGlnbm9yZSBpcyBjb3ZlcmVkIGJ5IElFXG4gICAgICAvLyBhbmQgdGhlIElFOSBkb3VibGUgdmlld0JveCB0ZXN0XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKCEobmFtZSBpbiBjYWNoZSkpIHtcbiAgICAgICAgY29uc3QgcmVhbE5hbWUgPSBwYXJ0cy5zaGlmdCgpLnJlcGxhY2UoL14oPzp8W1xcU1xcc10qP1xccykoXFxTKz8pPVsnXCJdPyQvLCAnJDEnKTtcbiAgICAgICAgY2FjaGVbbmFtZV0gPSBhdHRyaWJ1dGVzW3JlYWxOYW1lXSB8fFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgaWdub3JlIGlzIGNvdmVyZWQgYnkgYnJvd3NlcnNcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3aGlsZSBiYXNpY0hUTUwgaXMgYWxyZWFkeSBjYXNlLXNlbnNpdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1tyZWFsTmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgcGF0aHMucHVzaChQYXRoLmNyZWF0ZSgnYXR0cicsIGNhY2hlW25hbWVdLCByZWFsTmFtZSkpO1xuICAgICAgfVxuICAgICAgcmVtb3ZlLnB1c2goYXR0cmlidXRlKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgbGVuID0gcmVtb3ZlLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlTm9kZShyZW1vdmVbaV0pO1xuICB9XG59O1xuXG4vLyB3aGVuIGEgUHJvbWlzZSBpcyB1c2VkIGFzIGludGVycG9sYXRpb24gdmFsdWVcbi8vIGl0cyByZXN1bHQgbXVzdCBiZSBwYXJzZWQgb25jZSByZXNvbHZlZC5cbi8vIFRoaXMgY2FsbGJhY2sgaXMgaW4gY2hhcmdlIG9mIHVuZGVyc3RhbmRpbmcgd2hhdCB0byBkb1xuLy8gd2l0aCBhIHJldHVybmVkIHZhbHVlIG9uY2UgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQuXG5jb25zdCBpbnZva2VBdERpc3RhbmNlID0gKHZhbHVlLCBjYWxsYmFjaykgPT4ge1xuICBjYWxsYmFjayh2YWx1ZS5wbGFjZWhvbGRlcik7XG4gIGlmICgndGV4dCcgaW4gdmFsdWUpIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudGV4dCkudGhlbihTdHJpbmcpLnRoZW4oY2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKCdhbnknIGluIHZhbHVlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFueSkudGhlbihjYWxsYmFjayk7XG4gIH0gZWxzZSBpZiAoJ2h0bWwnIGluIHZhbHVlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmh0bWwpLnRoZW4oYXNIVE1MKS50aGVuKGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUoSW50ZW50Lmludm9rZSh2YWx1ZSwgY2FsbGJhY2spKS50aGVuKGNhbGxiYWNrKTtcbiAgfVxufTtcblxuLy8gcXVpY2sgYW5kIGRpcnR5IHdheXMgdG8gY2hlY2sgYSB2YWx1ZSB0eXBlIHdpdGhvdXQgYWJ1c2luZyBpbnN0YW5jZW9mXG5jb25zdCBpc05vZGVfaXNoID0gdmFsdWUgPT4gJ0VMRU1FTlRfTk9ERScgaW4gdmFsdWU7XG5jb25zdCBpc1Byb21pc2VfaXNoID0gdmFsdWUgPT4gdmFsdWUgIT0gbnVsbCAmJiAndGhlbicgaW4gdmFsdWU7XG5cbi8vIGluIGEgaHlwZXIobm9kZSlgPGRpdj4ke2NvbnRlbnR9PC9kaXY+YCBjYXNlXG4vLyBldmVyeXRoaW5nIGNvdWxkIGhhcHBlbjpcbi8vICAqIGl0J3MgYSBKUyBwcmltaXRpdmUsIHN0b3JlZCBhcyB0ZXh0XG4vLyAgKiBpdCdzIG51bGwgb3IgdW5kZWZpbmVkLCB0aGUgbm9kZSBzaG91bGQgYmUgY2xlYW5lZFxuLy8gICogaXQncyBhIGNvbXBvbmVudCwgdXBkYXRlIHRoZSBjb250ZW50IGJ5IHJlbmRlcmluZyBpdFxuLy8gICogaXQncyBhIHByb21pc2UsIHVwZGF0ZSB0aGUgY29udGVudCBvbmNlIHJlc29sdmVkXG4vLyAgKiBpdCdzIGFuIGV4cGxpY2l0IGludGVudCwgcGVyZm9ybSB0aGUgZGVzaXJlZCBvcGVyYXRpb25cbi8vICAqIGl0J3MgYW4gQXJyYXksIHJlc29sdmUgYWxsIHZhbHVlcyBpZiBQcm9taXNlcyBhbmQvb3Jcbi8vICAgIHVwZGF0ZSB0aGUgbm9kZSB3aXRoIHRoZSByZXN1bHRpbmcgbGlzdCBvZiBjb250ZW50XG5jb25zdCBzZXRBbnlDb250ZW50ID0gKG5vZGUsIGNoaWxkTm9kZXMpID0+IHtcbiAgY29uc3QgdHJhbnNmb3JtZXIgPSBuZXcgTWVnYXRyb24obm9kZSwgY2hpbGROb2Rlcyk7XG4gIGxldCBmYXN0UGF0aCA9IGZhbHNlO1xuICBsZXQgb2xkVmFsdWU7XG4gIGNvbnN0IGFueUNvbnRlbnQgPSB2YWx1ZSA9PiB7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGlmIChmYXN0UGF0aCkge1xuICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBjaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhc3RQYXRoID0gdHJ1ZTtcbiAgICAgICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHRyYW5zZm9ybWVyLmVtcHR5KHRleHQobm9kZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIGZhc3RQYXRoID0gZmFsc2U7XG4gICAgICAgICAgdHJhbnNmb3JtZXIuZW1wdHkoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZmFzdFBhdGggPSBmYWxzZTtcbiAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtZXIuZW1wdHkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWVbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgYW55Q29udGVudCh7aHRtbDogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY29uY2F0LmFwcGx5KFtdLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2VfaXNoKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodmFsdWUpLnRoZW4oYW55Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZXIuYmVjb21lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5lbXB0eSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOb2RlX2lzaCh2YWx1ZSkpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5iZWNvbWUodmFsdWUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgP1xuICAgICAgICAgICAgc2xpY2UuY2FsbCh2YWx1ZS5jaGlsZE5vZGVzKSA6XG4gICAgICAgICAgICBbdmFsdWVdKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2VfaXNoKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlLnRoZW4oYW55Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3BsYWNlaG9sZGVyJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGludm9rZUF0RGlzdGFuY2UodmFsdWUsIGFueUNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCd0ZXh0JyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGFueUNvbnRlbnQoU3RyaW5nKHZhbHVlLnRleHQpKTtcbiAgICAgICAgfSBlbHNlIGlmICgnYW55JyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGFueUNvbnRlbnQodmFsdWUuYW55KTtcbiAgICAgICAgfSBlbHNlIGlmICgnaHRtbCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5lbXB0eSgpO1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQobm9kZSwgW10uY29uY2F0KHZhbHVlLmh0bWwpLmpvaW4oJycpKTtcbiAgICAgICAgICBjaGlsZE5vZGVzLnB1c2guYXBwbHkoY2hpbGROb2RlcywgZnJhZ21lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICBhbnlDb250ZW50KHNsaWNlLmNhbGwodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbnlDb250ZW50KEludGVudC5pbnZva2UodmFsdWUsIGFueUNvbnRlbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG4gIHJldHVybiBhbnlDb250ZW50O1xufTtcblxuLy8gdGhlcmUgYXJlIGZvdXIga2luZCBvZiBhdHRyaWJ1dGVzLCBhbmQgcmVsYXRlZCBiZWhhdmlvcjpcbi8vICAqIGV2ZW50cywgd2l0aCBhIG5hbWUgc3RhcnRpbmcgd2l0aCBgb25gLCB0byBhZGQvcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuLy8gICogc3BlY2lhbCwgd2l0aCBhIG5hbWUgcHJlc2VudCBpbiB0aGVpciBpbmhlcml0ZWQgcHJvdG90eXBlLCBhY2Nlc3NlZCBkaXJlY3RseVxuLy8gICogcmVndWxhciwgYWNjZXNzZWQgdGhyb3VnaCBnZXQvc2V0QXR0cmlidXRlIHN0YW5kYXJkIERPTSBtZXRob2RzXG4vLyAgKiBzdHlsZSwgdGhlIG9ubHkgcmVndWxhciBhdHRyaWJ1dGUgdGhhdCBhbHNvIGFjY2VwdHMgYW4gb2JqZWN0IGFzIHZhbHVlXG4vLyAgICBzbyB0aGF0IHlvdSBjYW4gc3R5bGU9JHt7d2lkdGg6IDEyMH19LiBJbiB0aGlzIGNhc2UsIHRoZSBiZWhhdmlvciBoYXMgYmVlblxuLy8gICAgZnVsbHkgaW5zcGlyZWQgYnkgUHJlYWN0IGxpYnJhcnkgYW5kIGl0cyBzaW1wbGljaXR5LlxuY29uc3Qgc2V0QXR0cmlidXRlID0gKG5vZGUsIG5hbWUsIG9yaWdpbmFsKSA9PiB7XG4gIGNvbnN0IGlzU1ZHID0gT1dORVJfU1ZHX0VMRU1FTlQgaW4gbm9kZTtcbiAgbGV0IG9sZFZhbHVlO1xuICAvLyBpZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzdHlsZSBvbmVcbiAgLy8gaGFuZGxlIGl0IGRpZmZlcmVudGx5IGZyb20gb3RoZXJzXG4gIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG4gICAgcmV0dXJuIFN0eWxlKG5vZGUsIG9yaWdpbmFsLCBpc1NWRyk7XG4gIH1cbiAgLy8gdGhlIG5hbWUgaXMgYW4gZXZlbnQgb25lLFxuICAvLyBhZGQvcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhY2NvcmRpbmdseVxuICBlbHNlIGlmICgvXm9uLy50ZXN0KG5hbWUpKSB7XG4gICAgbGV0IHR5cGUgPSBuYW1lLnNsaWNlKDIpO1xuICAgIGlmICh0eXBlID09PSBDT05ORUNURUQgfHwgdHlwZSA9PT0gRElTQ09OTkVDVEVEKSB7XG4gICAgICBpZiAobm90T2JzZXJ2aW5nKSB7XG4gICAgICAgIG5vdE9ic2VydmluZyA9IGZhbHNlO1xuICAgICAgICBvYnNlcnZlKCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRzLmFkZChub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZS50b0xvd2VyQ2FzZSgpIGluIG5vZGUpIHtcbiAgICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZSA9PiB7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIG9sZFZhbHVlLCBmYWxzZSk7XG4gICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvLyB0aGUgYXR0cmlidXRlIGlzIHNwZWNpYWwgKCd2YWx1ZScgaW4gaW5wdXQpXG4gIC8vIGFuZCBpdCdzIG5vdCBTVkcgKm9yKiB0aGUgbmFtZSBpcyBleGFjdGx5IGRhdGEsXG4gIC8vIGluIHRoaXMgY2FzZSBhc3NpZ24gdGhlIHZhbHVlIGRpcmVjdGx5XG4gIGVsc2UgaWYgKG5hbWUgPT09ICdkYXRhJyB8fCAoIWlzU1ZHICYmIG5hbWUgaW4gbm9kZSkpIHtcbiAgICByZXR1cm4gbmV3VmFsdWUgPT4ge1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAobm9kZVtuYW1lXSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICBub2RlW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgLy8gaW4gZXZlcnkgb3RoZXIgY2FzZSwgdXNlIHRoZSBhdHRyaWJ1dGUgbm9kZSBhcyBpdCBpc1xuICAvLyB1cGRhdGUgb25seSB0aGUgdmFsdWUsIHNldCBpdCBhcyBub2RlIG9ubHkgd2hlbi9pZiBuZWVkZWRcbiAgZWxzZSB7XG4gICAgbGV0IG93bmVyID0gZmFsc2U7XG4gICAgY29uc3QgYXR0cmlidXRlID0gb3JpZ2luYWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBuZXdWYWx1ZSA9PiB7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChvd25lcikge1xuICAgICAgICAgICAgICBvd25lciA9IGZhbHNlO1xuICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cmlidXRlLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAoIW93bmVyKSB7XG4gICAgICAgICAgICAgIG93bmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuLy8gc3R5bGUgb3IgdGV4dGFyZWFzIGRvbid0IGFjY2VwdCBIVE1MIGFzIGNvbnRlbnRcbi8vIGl0J3MgcG9pbnRsZXNzIHRvIHRyYW5zZm9ybSBvciBhbmFseXplIGFueXRoaW5nXG4vLyBkaWZmZXJlbnQgZnJvbSB0ZXh0IHRoZXJlIGJ1dCBpdCdzIHdvcnRoIGNoZWNraW5nXG4vLyBmb3IgcG9zc2libGUgZGVmaW5lZCBpbnRlbnRzLlxuY29uc3Qgc2V0VGV4dENvbnRlbnQgPSBub2RlID0+IHtcbiAgbGV0IG9sZFZhbHVlO1xuICBjb25zdCB0ZXh0Q29udGVudCA9IHZhbHVlID0+IHtcbiAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUHJvbWlzZV9pc2godmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUudGhlbih0ZXh0Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3BsYWNlaG9sZGVyJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGludm9rZUF0RGlzdGFuY2UodmFsdWUsIHRleHRDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICgndGV4dCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0ZXh0Q29udGVudChTdHJpbmcodmFsdWUudGV4dCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCdhbnknIGluIHZhbHVlKSB7XG4gICAgICAgICAgdGV4dENvbnRlbnQodmFsdWUuYW55KTtcbiAgICAgICAgfSBlbHNlIGlmICgnaHRtbCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICB0ZXh0Q29udGVudChbXS5jb25jYXQodmFsdWUuaHRtbCkuam9pbignJykpO1xuICAgICAgICB9IGVsc2UgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgdGV4dENvbnRlbnQoc2xpY2UuY2FsbCh2YWx1ZSkuam9pbignJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHRDb250ZW50KEludGVudC5pbnZva2UodmFsdWUsIHRleHRDb250ZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiB0ZXh0Q29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtjcmVhdGUsIGZpbmR9O1xuXG4vLyBoeXBlci5Db21wb25lbnRzIG1pZ2h0IG5lZWQgY29ubmVjdGVkL2Rpc2Nvbm5lY3RlZCBub3RpZmljYXRpb25zXG4vLyB1c2VkIGJ5IGNvbXBvbmVudHMgYW5kIHRoZWlyIG9uY29ubmVjdC9vbmRpc2Nvbm5lY3QgY2FsbGJhY2tzLlxuLy8gV2hlbiBvbmUgb2YgdGhlc2UgY2FsbGJhY2tzIGlzIGVuY291bnRlcmVkLFxuLy8gdGhlIGRvY3VtZW50IHN0YXJ0cyBiZWluZyBvYnNlcnZlZC5cbmxldCBub3RPYnNlcnZpbmcgPSB0cnVlO1xuZnVuY3Rpb24gb2JzZXJ2ZSgpIHtcblxuICAvLyB3aGVuIGh5cGVyLkNvbXBvbmVudCByZWxhdGVkIERPTSBub2Rlc1xuICAvLyBhcmUgYXBwZW5kZWQgb3IgcmVtb3ZlZCBmcm9tIHRoZSBsaXZlIHRyZWVcbiAgLy8gdGhlc2UgbWlnaHQgbGlzdGVuIHRvIGNvbm5lY3RlZC9kaXNjb25uZWN0ZWQgZXZlbnRzXG4gIC8vIFRoaXMgdXRpbGl0eSBpcyBpbiBjaGFyZ2Ugb2YgZmluZGluZyBhbGwgY29tcG9uZW50c1xuICAvLyBpbnZvbHZlZCBpbiB0aGUgRE9NIHVwZGF0ZS9jaGFuZ2UgYW5kIGRpc3BhdGNoXG4gIC8vIHJlbGF0ZWQgaW5mb3JtYXRpb24gdG8gdGhlbVxuICBjb25zdCBkaXNwYXRjaEFsbCA9IChub2RlcywgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUpO1xuICAgIGNvbnN0IGxlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICBkaXNwYXRjaFRhcmdldChub2RlLCBldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIHRoZSB3YXkgaXQncyBkb25lIGlzIHZpYSB0aGUgY29tcG9uZW50cyB3ZWFrIHNldFxuICAvLyBhbmQgcmVjdXJzaXZlbHkgbG9va2luZyBmb3IgbmVzdGVkIGNvbXBvbmVudHMgdG9vXG4gIGNvbnN0IGRpc3BhdGNoVGFyZ2V0ID0gKG5vZGUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKGNvbXBvbmVudHMuaGFzKG5vZGUpKSB7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICBjb25zdCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc3BhdGNoVGFyZ2V0KGNoaWxkcmVuW2ldLCBldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIE11dGF0aW9uT2JzZXJ2ZXIgaXMgdGhlIGJlc3Qgd2F5IHRvIGltcGxlbWVudCB0aGF0XG4gIC8vIGJ1dCB0aGVyZSBpcyBhIGZhbGxiYWNrIHRvIGRlcHJlY2F0ZWQgRE9NTm9kZUluc2VydGVkL1JlbW92ZWRcbiAgLy8gc28gdGhhdCBldmVuIG9sZGVyIGJyb3dzZXJzL2VuZ2luZXMgY2FuIGhlbHAgY29tcG9uZW50cyBsaWZlLWN5Y2xlXG4gIHRyeSB7XG4gICAgKG5ldyBNdXRhdGlvbk9ic2VydmVyKHJlY29yZHMgPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoID0gcmVjb3Jkcy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICBkaXNwYXRjaEFsbChyZWNvcmQucmVtb3ZlZE5vZGVzLCBESVNDT05ORUNURUQpO1xuICAgICAgICBkaXNwYXRjaEFsbChyZWNvcmQuYWRkZWROb2RlcywgQ09OTkVDVEVEKTtcbiAgICAgIH1cbiAgICB9KSkub2JzZXJ2ZShkb2N1bWVudCwge3N1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZX0pO1xuICB9IGNhdGNoKG9fTykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVSZW1vdmVkJywgZXZlbnQgPT4ge1xuICAgICAgZGlzcGF0Y2hBbGwoW2V2ZW50LnRhcmdldF0sIERJU0NPTk5FQ1RFRCk7XG4gICAgfSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIGV2ZW50ID0+IHtcbiAgICAgIGRpc3BhdGNoQWxsKFtldmVudC50YXJnZXRdLCBDT05ORUNURUQpO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1VwZGF0ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG4gIENPTU1FTlRfTk9ERSxcbiAgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSxcbiAgRUxFTUVOVF9OT0RFXG59IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMuanMnO1xuXG4vLyBldmVyeSB0ZW1wbGF0ZSBsaXRlcmFsIGludGVycG9sYXRpb24gaW5kaWNhdGVzXG4vLyBhIHByZWNpc2UgdGFyZ2V0IGluIHRoZSBET00gdGhlIHRlbXBsYXRlIGlzIHJlcHJlc2VudGluZy5cbi8vIGA8cCBpZD0keydhdHRyaWJ1dGUnfT5zb21lICR7J2NvbnRlbnQnfTwvcD5gXG4vLyBoeXBlckhUTUwgZmluZHMgb25seSBvbmNlIHBlciB0ZW1wbGF0ZSBsaXRlcmFsLFxuLy8gaGVuY2Ugb25jZSBwZXIgZW50aXJlIGFwcGxpY2F0aW9uIGxpZmUtY3ljbGUsXG4vLyBhbGwgbm9kZXMgdGhhdCBhcmUgcmVsYXRlZCB0byBpbnRlcnBvbGF0aW9ucy5cbi8vIFRoZXNlIG5vZGVzIGFyZSBzdG9yZWQgYXMgaW5kZXhlcyB1c2VkIHRvIHJldHJpZXZlLFxuLy8gb25jZSBwZXIgdXBncmFkZSwgbm9kZXMgdGhhdCB3aWxsIGNoYW5nZSBvbiBlYWNoIGZ1dHVyZSB1cGRhdGUuXG4vLyBBIHBhdGggZXhhbXBsZSBpcyBbMiwgMCwgMV0gcmVwcmVzZW50aW5nIHRoZSBvcGVyYXRpb246XG4vLyBub2RlLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdXG4vLyBBdHRyaWJ1dGVzIGFyZSBhZGRyZXNzZWQgdmlhIHRoZWlyIG93bmVyIG5vZGUgYW5kIHRoZWlyIG5hbWUuXG5jb25zdCBjcmVhdGVQYXRoID0gbm9kZSA9PiB7XG4gIGNvbnN0IHBhdGggPSBbXTtcbiAgbGV0IHBhcmVudE5vZGU7XG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDT01NRU5UX05PREU6XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgcHJlcGVuZChwYXRoLCBwYXJlbnROb2RlLCBub2RlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5vd25lckVsZW1lbnQ7XG4gICAgICBicmVhaztcbiAgfVxuICBmb3IgKFxuICAgIG5vZGUgPSBwYXJlbnROb2RlO1xuICAgIChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICBub2RlID0gcGFyZW50Tm9kZVxuICApIHtcbiAgICBwcmVwZW5kKHBhdGgsIHBhcmVudE5vZGUsIG5vZGUpO1xuICB9XG4gIHJldHVybiBwYXRoO1xufTtcblxuY29uc3QgcHJlcGVuZCA9IChwYXRoLCBwYXJlbnQsIG5vZGUpID0+IHtcbiAgcGF0aC51bnNoaWZ0KHBhdGguaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZE5vZGVzLCBub2RlKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZTogKHR5cGUsIG5vZGUsIG5hbWUpID0+ICh7dHlwZSwgbmFtZSwgbm9kZSwgcGF0aDogY3JlYXRlUGF0aChub2RlKX0pLFxuICBmaW5kOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkTm9kZXNbcGF0aFtpXV07XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvUGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9ibG9iLzMzZmM2OTdhYzExNzYyYTFjYjZlNzFlOTg0NzY3MGQwNDdhZjdjZTUvc3JjL2NvbnN0YW50cy5qc1xuY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7XG5cbi8vIHN0eWxlIGlzIGhhbmRsZWQgYXMgYm90aCBzdHJpbmcgYW5kIG9iamVjdFxuLy8gZXZlbiBpZiB0aGUgdGFyZ2V0IGlzIGFuIFNWRyBlbGVtZW50IChjb25zaXN0ZW5jeSlcbmV4cG9ydCBkZWZhdWx0IChub2RlLCBvcmlnaW5hbCwgaXNTVkcpID0+IHtcbiAgaWYgKGlzU1ZHKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBvcmlnaW5hbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgc3R5bGUudmFsdWUgPSAnJztcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5vZGUoc3R5bGUpO1xuICAgIHJldHVybiB1cGRhdGUoc3R5bGUsIGlzU1ZHKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlKG5vZGUuc3R5bGUsIGlzU1ZHKTtcbn07XG5cbi8vIHRoZSB1cGRhdGUgdGFrZXMgY2FyZSBvciBjaGFuZ2luZy9yZXBsYWNpbmdcbi8vIG9ubHkgcHJvcGVydGllcyB0aGF0IGFyZSBkaWZmZXJlbnQgb3Jcbi8vIGluIGNhc2Ugb2Ygc3RyaW5nLCB0aGUgd2hvbGUgbm9kZVxuY29uc3QgdXBkYXRlID0gKHN0eWxlLCBpc1NWRykgPT4ge1xuICBsZXQgb2xkVHlwZSwgb2xkVmFsdWU7XG4gIHJldHVybiBuZXdWYWx1ZSA9PiB7XG4gICAgc3dpdGNoICh0eXBlb2YgbmV3VmFsdWUpIHtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgIGlmIChvbGRUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKCFpc1NWRykge1xuICAgICAgICAgICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVba2V5XSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNTVkcpIHN0eWxlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBlbHNlIHN0eWxlLmNzc1RleHQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaW5mbyA9IGlzU1ZHID8ge30gOiBzdHlsZTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBuZXdWYWx1ZVtrZXldO1xuICAgICAgICAgICAgaW5mb1trZXldID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgKyAncHgnKSA6IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbGRUeXBlID0gJ29iamVjdCc7XG4gICAgICAgICAgaWYgKGlzU1ZHKSBzdHlsZS52YWx1ZSA9IHRvU3R5bGUoKG9sZFZhbHVlID0gaW5mbykpO1xuICAgICAgICAgIGVsc2Ugb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgb2xkVHlwZSA9ICdzdHJpbmcnO1xuICAgICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgaWYgKGlzU1ZHKSBzdHlsZS52YWx1ZSA9IG5ld1ZhbHVlIHx8ICcnO1xuICAgICAgICAgIGVsc2Ugc3R5bGUuY3NzVGV4dCA9IG5ld1ZhbHVlIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IGh5cGhlbiA9IC8oW15BLVpdKShbQS1aXSspL2c7XG5jb25zdCBpemVkID0gKCQwLCAkMSwgJDIpID0+ICQxICsgJy0nICsgJDIudG9Mb3dlckNhc2UoKTtcbmNvbnN0IHRvU3R5bGUgPSBvYmplY3QgPT4ge1xuICBjb25zdCBjc3MgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgY3NzLnB1c2goa2V5LnJlcGxhY2UoaHlwaGVuLCBpemVkKSwgJzonLCBvYmplY3Rba2V5XSwgJzsnKTtcbiAgfVxuICByZXR1cm4gY3NzLmpvaW4oJycpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEh5cGVyQ29tcG9uZW50IH0gZnJvbSAndXRpbHMvSHlwZXJDb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IEZpbGVUb0ltYWdlQ29udmVydGVyIH0gZnJvbSAnc2VydmljZXMvRmlsZVRvSW1hZ2VDb252ZXJ0ZXInO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlT3JpZ2luYWxJbWFnZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VQaWNrZXIgZXh0ZW5kcyBIeXBlckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMub25JbWFnZUNoYW5nZSA9IHRoaXMub25JbWFnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1waWNrZXJcIj5cclxuICAgICAgICA8aDI+SW1hZ2UgcGlja2VyPC9oMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5vbkltYWdlQ2hhbmdlfT5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbkltYWdlQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgZmlsZXMgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5maWxlcztcclxuICAgIGlmICghZmlsZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVUb0ltYWdlQ29udmVydGVyID0gbmV3IEZpbGVUb0ltYWdlQ29udmVydGVyKCk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGZpbGVUb0ltYWdlQ29udmVydGVyLmNvbnZlcnRGaWxlKGZpbGVzWzBdKTtcclxuXHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmlnaW5hbEltYWdlKGltYWdlKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvSW1hZ2VQaWNrZXIudHMiLCJpbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgY29tYmluZVJlZHVjZXJzIGZyb20gJy4vY29tYmluZVJlZHVjZXJzJztcbmltcG9ydCBiaW5kQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnO1xuaW1wb3J0IGFwcGx5TWlkZGxld2FyZSBmcm9tICcuL2FwcGx5TWlkZGxld2FyZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi91dGlscy93YXJuaW5nJztcblxuLypcbiogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4qL1xuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcXCdwcm9kdWN0aW9uXFwnLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3IgRGVmaW5lUGx1Z2luIGZvciB3ZWJwYWNrIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMDMwMDMxKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGJpbmRBY3Rpb25DcmVhdG9ycywgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBvdmVyQXJnIGZyb20gJy4vX292ZXJBcmcuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBfU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBfU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKF9TeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25OYW1lID0gYWN0aW9uVHlwZSAmJiAnXCInICsgYWN0aW9uVHlwZS50b1N0cmluZygpICsgJ1wiJyB8fCAnYW4gYWN0aW9uJztcblxuICByZXR1cm4gJ0dpdmVuIGFjdGlvbiAnICsgYWN0aW9uTmFtZSArICcsIHJlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZC4gJyArICdUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuICcgKyAnSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJztcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuICdUaGUgJyArIGFyZ3VtZW50TmFtZSArICcgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcIicgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArICdcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyAnICsgKCdrZXlzOiBcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIicpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcblxuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICdVbmV4cGVjdGVkICcgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArICcgJyArICgnXCInICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyAnXCIgZm91bmQgaW4gJyArIGFyZ3VtZW50TmFtZSArICcuICcpICsgJ0V4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogJyArICgnXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvblxcJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCAnICsgJ3lvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIEFjdGlvblR5cGVzLklOSVQgKyAnIG9yIG90aGVyIGFjdGlvbnMgaW4gXCJyZWR1eC8qXCIgJykgKyAnbmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgJyArICdjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCAnICsgJ2luIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSAnICsgJ2FjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLicpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoJ05vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIicgKyBrZXkgKyAnXCInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHZvaWQgMDtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yID0gdm9pZCAwO1xuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKF9rZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkICcgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgJy4gJyArICdEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25DcmVhdG9ycyk7XG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodW5kZWZpbmVkLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYXBwbHlNaWRkbGV3YXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IG1lcmdlU3RhdGUgfSBmcm9tICd1dGlscy9tZXJnZVN0YXRlJztcclxuXHJcbmltcG9ydCB7IENPTlZFUlNJT05fRklOSVNIRUQgfSBmcm9tICdhY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvbkZpbmlzaGVkJztcclxuaW1wb3J0IHsgQ09OVkVSU0lPTl9TVEFSVEVEIH0gZnJvbSAnYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25TdGFydGVkJztcclxuaW1wb3J0IHsgQ0hBTkdFX0NPTE9SX1BST0ZJTEVfVFlQRSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENIQU5HRV9JTExVTUlOQU5UX1RZUEUgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZUlsbHVtaW5hbnRUeXBlJztcclxuaW1wb3J0IHsgQ0hBTkdFX09SSUdJTkFMX0lNQUdFIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VPcmlnaW5hbEltYWdlJztcclxuaW1wb3J0IHsgQ0hBTkdFX1NFTEVDVEVEX0NPTE9SX1NQQUNFIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ29sb3JTcGFjZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JTcGFjZVR5cGUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcbmltcG9ydCB7IElsbHVtaW5hbnRUeXBlIH0gZnJvbSAnbW9kZWxzL0lsbHVtaW5hbnRUeXBlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRTdGF0ZSB7XHJcbiAgb3JpZ2luYWxJbWFnZTogSFRNTEltYWdlRWxlbWVudCB8IG51bGw7XHJcbiAgc2VsZWN0ZWRDb2xvclNwYWNlOiBDb2xvclNwYWNlVHlwZTtcclxuICBjb252ZXJzaW9uQXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIGNvbnZlcnNpb25JblByb2dyZXNzOiBib29sZWFuO1xyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycztcclxuXHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZTtcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGU7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZTogSW5wdXRTdGF0ZSA9IHtcclxuICBvcmlnaW5hbEltYWdlOiBudWxsLFxyXG4gIHNlbGVjdGVkQ29sb3JTcGFjZTogY29uZmlndXJhdGlvbi5kZWZhdWx0Q29sb3JTcGFjZSxcclxuICBjb252ZXJzaW9uQXZhaWxhYmxlOiBmYWxzZSxcclxuICBjb252ZXJzaW9uSW5Qcm9ncmVzczogZmFsc2UsXHJcbiAgY29udmVyc2lvblBhcmFtZXRlcnM6IGNvbmZpZ3VyYXRpb24uZGVmYXVsdENvbnZlcnNpb25QYXJhbWV0ZXJzLFxyXG5cclxuICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLnNSR0IsXHJcbiAgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkN1c3RvbVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0UmVkdWNlcihzdGF0ZTogSW5wdXRTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBBbnlBY3Rpb24pOiBJbnB1dFN0YXRlIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENIQU5HRV9PUklHSU5BTF9JTUFHRTpcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgb3JpZ2luYWxJbWFnZTogYWN0aW9uLmltYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgICBuZXdTdGF0ZS5jb252ZXJzaW9uQXZhaWxhYmxlID0gaXNDb252ZXJzaW9uQXZhaWxhYmxlKG5ld1N0YXRlKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuXHJcbiAgICBjYXNlIENIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRTpcclxuICAgICAgcmV0dXJuIG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBzZWxlY3RlZENvbG9yU3BhY2U6IGFjdGlvbi5jb2xvclNwYWNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgQ09OVkVSU0lPTl9TVEFSVEVEOlxyXG4gICAgICByZXR1cm4gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNvbnZlcnNpb25BdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbnZlcnNpb25JblByb2dyZXNzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgQ09OVkVSU0lPTl9GSU5JU0hFRDpcclxuICAgICAgcmV0dXJuIG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBjb252ZXJzaW9uQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbnZlcnNpb25JblByb2dyZXNzOiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIENIQU5HRV9DT0xPUl9QUk9GSUxFX1RZUEU6XHJcbiAgICAgIHJldHVybiBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY29sb3JQcm9maWxlVHlwZTogYWN0aW9uLmNvbG9yUHJvZmlsZVR5cGUsXHJcbiAgICAgICAgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkN1c3RvbSxcclxuICAgICAgICBjb252ZXJzaW9uUGFyYW1ldGVyczogYWN0aW9uLmNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX0lMTFVNSU5BTlRfVFlQRTpcclxuICAgICAgY29uc3QgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzID0gc3RhdGUuY29udmVyc2lvblBhcmFtZXRlcnM7XHJcblxyXG4gICAgICByZXR1cm4gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGlsbHVtaW5hbnRUeXBlOiBhY3Rpb24uaWxsdW1pbmFudFR5cGUsXHJcbiAgICAgICAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5DdXN0b20sXHJcbiAgICAgICAgY29udmVyc2lvblBhcmFtZXRlcnM6IG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgICAgIGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycy5yZWRQb2ludCxcclxuICAgICAgICAgIGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycy5ncmVlblBvaW50LFxyXG4gICAgICAgICAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzLmJsdWVQb2ludCxcclxuICAgICAgICAgIGFjdGlvbi53aGl0ZVBvaW50LFxyXG4gICAgICAgICAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzLmdhbW1hXHJcbiAgICAgICAgKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbnZlcnNpb25BdmFpbGFibGUoc3RhdGU6IElucHV0U3RhdGUpOiBib29sZWFuIHtcclxuICByZXR1cm4gISFzdGF0ZS5vcmlnaW5hbEltYWdlICYmICFzdGF0ZS5jb252ZXJzaW9uSW5Qcm9ncmVzcztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9yZWR1Y2Vycy9pbnB1dFJlZHVjZXIudHMiLCJleHBvcnQgZnVuY3Rpb24gbWVyZ2VTdGF0ZTxUPihzdGF0ZTogVCwgLi4udXBkYXRlczogUGFydGlhbDxUPltdKTogVCB7XHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCAuLi51cGRhdGVzKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91dGlscy9tZXJnZVN0YXRlLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQ09OVkVSU0lPTl9GSU5JU0hFRCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3V0cHV0U3RhdGUge1xyXG4gIGNvbnZlcnNpb25SZXN1bHQ6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHwgbnVsbDtcclxuICByZXN1bHRJbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlOiBPdXRwdXRTdGF0ZSA9IHtcclxuICBjb252ZXJzaW9uUmVzdWx0OiBudWxsLFxyXG4gIHJlc3VsdEltYWdlczogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvdXRwdXRSZWR1Y2VyKHN0YXRlOiBPdXRwdXRTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBBbnlBY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENPTlZFUlNJT05fRklOSVNIRUQ6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNvbnZlcnNpb25SZXN1bHQ6IGFjdGlvbi5jb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgICAgIHJlc3VsdEltYWdlczogYWN0aW9uLnJlc3VsdEltYWdlc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3JlZHVjZXJzL291dHB1dFJlZHVjZXIudHMiLCJleHBvcnQgY2xhc3MgRmlsZVRvSW1hZ2VDb252ZXJ0ZXIge1xyXG4gIHB1YmxpYyBhc3luYyBjb252ZXJ0RmlsZShmaWxlOiBGaWxlKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gYXdhaXQgdGhpcy5nZXREYXRhVVJMRnJvbUZpbGUoZmlsZSk7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhVVJMRnJvbUZpbGUoZmlsZTogRmlsZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9GaWxlVG9JbWFnZUNvbnZlcnRlci50cyIsImltcG9ydCB7IEh5cGVyQ29udGFpbmVyIH0gZnJvbSAndXRpbHMvSHlwZXJDb250YWluZXInO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUsIGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZSc7XHJcbmltcG9ydCB7IExhYmVsZWRTZWxlY3QgfSBmcm9tICdjb21wb25lbnRzL0xhYmVsZWRTZWxlY3QnO1xyXG5pbXBvcnQgeyBMYWJlbGVkVmFsdWUgfSBmcm9tICd1dGlscy9MYWJlbGVkVmFsdWUnO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lclN0YXRlIHtcclxuICBzZWxlY3RlZENvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JTcGFjZVBpY2tlciBleHRlbmRzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlPiB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsYWJlbGVkQ29sb3JTcGFjZXM6IExhYmVsZWRWYWx1ZTxDb2xvclNwYWNlVHlwZT5bXSA9IFtcclxuICAgIHsgdmFsdWU6IENvbG9yU3BhY2VUeXBlLllDYkNyLCBsYWJlbDogJ1lDYkNyJyB9LFxyXG4gICAgeyB2YWx1ZTogQ29sb3JTcGFjZVR5cGUuSFNWLCBsYWJlbDogJ0hTVicgfSxcclxuICAgIHsgdmFsdWU6IENvbG9yU3BhY2VUeXBlLkxhYiwgbGFiZWw6ICdMYWInIH1cclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5vbkNvbG9yU3BhY2VDaGFuZ2UgPSB0aGlzLm9uQ29sb3JTcGFjZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWxlY3RlZENvbG9yU3BhY2U6IGFwcFN0YXRlLmlucHV0LnNlbGVjdGVkQ29sb3JTcGFjZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNlbGVjdGVkQ29sb3JTcGFjZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IG9uY29ubmVjdGVkPSR7dGhpc30gb25kaXNjb25uZWN0ZWQ9JHt0aGlzfT5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiY29sb3Itc3BhY2Utc2VsZWN0XCI+VGFyZ2V0IGNvbG9yIHNwYWNlOiA8L2xhYmVsPlxyXG4gICAgICAgICR7TGFiZWxlZFNlbGVjdChcclxuICAgICAgICAgICdjb2xvci1zcGFjZS1zZWxlY3QnLFxyXG4gICAgICAgICAgdGhpcy5sYWJlbGVkQ29sb3JTcGFjZXMsXHJcbiAgICAgICAgICBzZWxlY3RlZENvbG9yU3BhY2UsXHJcbiAgICAgICAgICB0aGlzLm9uQ29sb3JTcGFjZUNoYW5nZVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db2xvclNwYWNlQ2hhbmdlKG5ld0NvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlKSB7XHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UobmV3Q29sb3JTcGFjZSkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb250YWluZXJzL0NvbG9yU3BhY2VQaWNrZXIudHMiLCJpbXBvcnQgeyB3aXJlIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgJy4vT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBOb0ltYWdlTWVzc2FnZSgpIHtcclxuICByZXR1cm4gd2lyZSgpYFBsZWFzZSBzZWxlY3QgYW4gaW1hZ2UgZmlyc3QuYDtcclxufVxyXG5cclxuZnVuY3Rpb24gRGlzcGxheUltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBcclxuICAgIDxkaXYgY2xhc3M9XCJvcmlnaW5hbC1pbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICR7aW1hZ2V9XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yaWdpbmFsSW1hZ2VEaXNwbGF5IGV4dGVuZHMgSHlwZXJDb250YWluZXI8Q29udGFpbmVyU3RhdGU+IHtcclxuICBwcm90ZWN0ZWQgbWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0YXRlOiBBcHBTdGF0ZSk6IENvbnRhaW5lclN0YXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltYWdlOiBhcHBTdGF0ZS5pbnB1dC5vcmlnaW5hbEltYWdlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5zdGF0ZS5pbWFnZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IG9uY29ubmVjdGVkPSR7dGhpc30gb25kaXNjb25uZWN0ZWQ9JHt0aGlzfT5cclxuICAgICAgICAke2ltYWdlID8gRGlzcGxheUltYWdlKGltYWdlKSA6IE5vSW1hZ2VNZXNzYWdlKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vcmlnaW5hbC1pbWFnZS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWF4LWhlaWdodDogNDAwcHg7IH1cXG4gIC5vcmlnaW5hbC1pbWFnZS13cmFwcGVyIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2NvbnRhaW5lcnMvT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgd2lyZSB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IEh5cGVyQ29udGFpbmVyIH0gZnJvbSAndXRpbHMvSHlwZXJDb250YWluZXInO1xyXG5cclxuaW1wb3J0ICcuL1Jlc3VsdHNEaXNwbGF5LnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gTm9SZXN1bHRzKCkge1xyXG4gIHJldHVybiB3aXJlKClgUGxlYXNlIGNsaWNrIDxlbT5SVU48L2VtPmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoY29udmVyc2lvblJlc3VsdDogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQsIHJlc3VsdEltYWdlczogSFRNTEltYWdlRWxlbWVudFtdKSB7XHJcbiAgcmV0dXJuIHdpcmUoY29udmVyc2lvblJlc3VsdClgXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdWx0c1wiPlxyXG4gICAgICAke2NvbnZlcnNpb25SZXN1bHQuY29tcG9uZW50cy5tYXAoKHBhcnRpYWxSZXN1bHQsIGluZGV4KSA9PlxyXG4gICAgICAgIFJlc3VsdChwYXJ0aWFsUmVzdWx0LCByZXN1bHRJbWFnZXNbaW5kZXhdKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVzdWx0KHBhcnRpYWxSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gIHJldHVybiB3aXJlKHBhcnRpYWxSZXN1bHQpYFxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0X19sYWJlbFwiPiR7cGFydGlhbFJlc3VsdC5sYWJlbH08L2Rpdj5cclxuICAgICAgJHtpbWFnZX1cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb250YWluZXJTdGF0ZSB7XHJcbiAgY29udmVyc2lvblJlc3VsdDogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfCBudWxsO1xyXG4gIHJlc3VsdEltYWdlczogSFRNTEltYWdlRWxlbWVudFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c0Rpc3BsYXkgZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udmVyc2lvblJlc3VsdDogYXBwU3RhdGUub3V0cHV0LmNvbnZlcnNpb25SZXN1bHQsXHJcbiAgICAgIHJlc3VsdEltYWdlczogYXBwU3RhdGUub3V0cHV0LnJlc3VsdEltYWdlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbnZlcnNpb25SZXN1bHQsIHJlc3VsdEltYWdlcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IG9uY29ubmVjdGVkPSR7dGhpc30gb25kaXNjb25uZWN0ZWQ9JHt0aGlzfT5cclxuICAgICAgICA8aDI+UmVzdWx0czwvaDI+XHJcbiAgICAgICAgJHtjb252ZXJzaW9uUmVzdWx0ID8gUmVzdWx0cyhjb252ZXJzaW9uUmVzdWx0LCByZXN1bHRJbWFnZXMpIDogTm9SZXN1bHRzKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1Jlc3VsdHNEaXNwbGF5LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUmVzdWx0c0Rpc3BsYXkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9SZXN1bHRzRGlzcGxheS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZXN1bHRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5yZXN1bHRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9IH1cXG5cXG4ucmVzdWx0IHtcXG4gIG1hcmdpbjogMC41ZW07XFxuICBtYXgtd2lkdGg6IDgwMHB4OyB9XFxuICAucmVzdWx0IGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLnJlc3VsdF9fbGFiZWwge1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBIeXBlckNvbnRhaW5lciB9IGZyb20gJ3V0aWxzL0h5cGVyQ29udGFpbmVyJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnNpb25GaW5pc2hlZCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQnO1xyXG5pbXBvcnQgeyBjb252ZXJzaW9uU3RhcnRlZCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uU3RhcnRlZCc7XHJcbmltcG9ydCB7IEFwcFN0YXRlLCBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlciB9IGZyb20gJ21vZGVscy9jb252ZXJ0ZXJzL2NyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBJbWFnZURhdGFDb252ZXJ0ZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURhdGFDb252ZXJ0ZXInO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lclN0YXRlIHtcclxuICBjb252ZXJzaW9uQXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0Q29udmVyc2lvbkJ1dHRvbiBleHRlbmRzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRDb252ZXJzaW9uID0gdGhpcy5zdGFydENvbnZlcnNpb24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udmVyc2lvbkF2YWlsYWJsZTogYXBwU3RhdGUuaW5wdXQuY29udmVyc2lvbkF2YWlsYWJsZSxcclxuICAgICAgaW1hZ2U6IGFwcFN0YXRlLmlucHV0Lm9yaWdpbmFsSW1hZ2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjb252ZXJzaW9uQXZhaWxhYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbmNsaWNrPSR7dGhpcy5zdGFydENvbnZlcnNpb259XHJcbiAgICAgICAgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9XHJcbiAgICAgICAgZGlzYWJsZWQ9JHshY29udmVyc2lvbkF2YWlsYWJsZX0+UlVOPC9idXR0b24+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydENvbnZlcnNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuaW1hZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNvbnZlcnNpb25TdGFydGVkKCkpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YUNvbnZlcnRlciA9IG5ldyBJbWFnZURhdGFDb252ZXJ0ZXIoKTtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlRGF0YUNvbnZlcnRlci5jb252ZXJ0SW1hZ2VUb0ltYWdlRGF0YSh0aGlzLnN0YXRlLmltYWdlKTtcclxuICAgIGNvbnN0IGFwcFN0YXRlID0gYXBwU3RvcmUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjb2xvclNwYWNlQ29udmVydGVyID0gY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlcihcclxuICAgICAgYXBwU3RhdGUuaW5wdXQuc2VsZWN0ZWRDb2xvclNwYWNlLFxyXG4gICAgICBhcHBTdGF0ZS5pbnB1dC5jb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbnZlcnNpb25SZXN1bHQgPSBjb2xvclNwYWNlQ29udmVydGVyLmNvbnZlcnRGcm9tSW1hZ2VEYXRhKGltYWdlRGF0YSk7XHJcbiAgICBjb252ZXJzaW9uUmVzdWx0Lm5vcm1hbGl6ZUNvbXBvbmVudHMoKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRJbWFnZXMgPSBjb252ZXJzaW9uUmVzdWx0LmNvbXBvbmVudHNcclxuICAgICAgLm1hcChjb21wb25lbnQgPT4gY29tcG9uZW50LmdldEltYWdlRGF0YSgpKVxyXG4gICAgICAubWFwKGltYWdlRGF0YUNvbnZlcnRlci5jb252ZXJ0SW1hZ2VEYXRhVG9JbWFnZSk7XHJcblxyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY29udmVyc2lvbkZpbmlzaGVkKGNvbnZlcnNpb25SZXN1bHQsIHJlc3VsdEltYWdlcykpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb250YWluZXJzL1N0YXJ0Q29udmVyc2lvbkJ1dHRvbi50cyIsImltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBIU1ZDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvSFNWQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcbmltcG9ydCB7IExhYkNvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9MYWJDb2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgWFlaQ29udmVydGVyIH0gZnJvbSAnc2VydmljZXMvWFlaQ29udmVydGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclNwYWNlQ29udmVydGVyKFxyXG4gIGNvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlLFxyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4pIHtcclxuICBzd2l0Y2ggKGNvbG9yU3BhY2UpIHtcclxuICAgIGNhc2UgQ29sb3JTcGFjZVR5cGUuSFNWOlxyXG4gICAgICByZXR1cm4gbmV3IEhTVkNvbG9yU3BhY2VDb252ZXJ0ZXIoKTtcclxuXHJcbiAgICBjYXNlIENvbG9yU3BhY2VUeXBlLllDYkNyOlxyXG4gICAgICByZXR1cm4gbmV3IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnRlcigpO1xyXG5cclxuICAgIGNhc2UgQ29sb3JTcGFjZVR5cGUuTGFiOlxyXG4gICAgICBjb25zdCB4eXpDb252ZXJ0ZXIgPSBuZXcgWFlaQ29udmVydGVyKGNvbnZlcnNpb25QYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgTGFiQ29sb3JTcGFjZUNvbnZlcnRlcih4eXpDb252ZXJ0ZXIpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb2xvciBzcGFjZSB0eXBlJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL2NyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBIU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSFNWQ29sb3JTcGFjZUNvbnZlcnRlciBpbXBsZW1lbnRzIENvbG9yU3BhY2VDb252ZXJ0ZXIge1xyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbUltYWdlRGF0YShpbWFnZURhdGE6IEltYWdlRGF0YSk6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2VEYXRhO1xyXG4gICAgY29uc3QgbGFzdFBpeGVsSW5kZXggPSB3aWR0aCAqIGhlaWdodCAqIDQgLSA0O1xyXG4gICAgY29uc3QgaFZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IHNWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCB2VmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gbGFzdFBpeGVsSW5kZXg7IGluZGV4ICs9IDQpIHtcclxuICAgICAgY29uc3QgeyBoLCBzLCB2IH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChkYXRhW2luZGV4XSwgZGF0YVtpbmRleCArIDFdLCBkYXRhW2luZGV4ICsgMl0pO1xyXG4gICAgICBoVmFsdWVzLnB1c2goaCk7XHJcbiAgICAgIHNWYWx1ZXMucHVzaChzKTtcclxuICAgICAgdlZhbHVlcy5wdXNoKHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoaFZhbHVlcywgc1ZhbHVlcywgdlZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEZyb21SR0IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgaCwgcywgdiB9ID0gdGhpcy5jb252ZXJ0U2luZ2xlUGl4ZWwociwgZywgYik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udmVyc2lvblJlc3VsdChbaF0sIFtzXSwgW3ZdLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFNpbmdsZVBpeGVsKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiB7IGg6IG51bWJlcjsgczogbnVtYmVyOyB2OiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgIGg6IDAsXHJcbiAgICAgIHM6IDAsXHJcbiAgICAgIHY6IE1hdGgubWF4KHIsIGcsIGIpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG5cclxuICAgIGlmIChtaW4gPT09IHJlc3VsdC52KSB7XHJcbiAgICAgIHJlc3VsdC5oID0gMDtcclxuICAgICAgcmVzdWx0LnMgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHJlc3VsdC52ID09PSByKSB7XHJcbiAgICAgICAgcmVzdWx0LmggPSAwICsgKGcgLSBiKSAqIDYwIC8gKHJlc3VsdC52IC0gbWluKTtcclxuICAgICAgfSBlbHNlIGlmIChtaW4gPT09IGcpIHtcclxuICAgICAgICByZXN1bHQuaCA9IDEyMCArIChiIC0gcikgKiA2MCAvIChyZXN1bHQudiAtIG1pbik7XHJcbiAgICAgIH0gZWxzZSBpZiAobWluID09PSBiKSB7XHJcbiAgICAgICAgcmVzdWx0LmggPSAyNDAgKyAociAtIGcpICogNjAgLyAocmVzdWx0LnYgLSBtaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdC5oIDwgMCkge1xyXG4gICAgICByZXN1bHQuaCArPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdC52ID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdC5zID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdC5zID0gKHJlc3VsdC52IC0gbWluKSAqIDEwMCAvIHJlc3VsdC52O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC52ICo9IDEwMCAvIDI1NTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb252ZXJzaW9uUmVzdWx0KFxyXG4gICAgaFZhbHVlczogbnVtYmVyW10sXHJcbiAgICBzVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHZWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgKTogSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgaENvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnSCcsIGhWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHNDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ1MnLCBzVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCB2Q29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdWJywgdlZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBIU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdChoQ29tcG9uZW50LCBzQ29tcG9uZW50LCB2Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvSFNWQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsImltcG9ydCB7IG11dGF0ZU1hcCB9IGZyb20gJ3V0aWxzL211dGF0ZU1hcCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBjb21wb25lbnRzOiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGhDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgc0NvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICB2Q29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFxyXG4gICkge1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gW2hDb21wb25lbnRSZXN1bHQsIHNDb21wb25lbnRSZXN1bHQsIHZDb21wb25lbnRSZXN1bHRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5vcm1hbGl6ZUNvbXBvbmVudHMoKSB7XHJcbiAgICBjb25zdCBbaENvbXBvbmVudCwgc0NvbXBvbmVudCwgdkNvbXBvbmVudF0gPSB0aGlzLmNvbXBvbmVudHM7XHJcblxyXG4gICAgbXV0YXRlTWFwKGhDb21wb25lbnQudmFsdWVzLCBodWUgPT4gaHVlIC8gMzYwICogMjU1KTtcclxuICAgIG11dGF0ZU1hcChzQ29tcG9uZW50LnZhbHVlcywgc2F0dXJhdGlvbiA9PiBzYXR1cmF0aW9uIC8gMTAwICogMjU1KTtcclxuICAgIG11dGF0ZU1hcCh2Q29tcG9uZW50LnZhbHVlcywgc2F0dXJhdGlvbiA9PiBzYXR1cmF0aW9uIC8gMTAwICogMjU1KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9IU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IExhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9MYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9Db2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgWFlaQ29udmVydGVyIH0gZnJvbSAnc2VydmljZXMvWFlaQ29udmVydGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJDb2xvclNwYWNlQ29udmVydGVyIGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnRlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB4eXpDb252ZXJ0ZXI6IFhZWkNvbnZlcnRlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IFhSID0gOTQuODE7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBZUiA9IDEwMDtcclxuICBwcml2YXRlIHJlYWRvbmx5IFpSID0gMTA3LjM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHh5ekNvbnZlcnRlcjogWFlaQ29udmVydGVyKSB7XHJcbiAgICB0aGlzLnh5ekNvbnZlcnRlciA9IHh5ekNvbnZlcnRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbUltYWdlRGF0YShpbWFnZURhdGE6IEltYWdlRGF0YSk6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2VEYXRhO1xyXG4gICAgY29uc3QgbGFzdFBpeGVsSW5kZXggPSB3aWR0aCAqIGhlaWdodCAqIDQgLSA0O1xyXG4gICAgY29uc3QgbFZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IGFWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBiVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gbGFzdFBpeGVsSW5kZXg7IGluZGV4ICs9IDQpIHtcclxuICAgICAgY29uc3QgeyBsLCBhLCBiIH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChkYXRhW2luZGV4XSwgZGF0YVtpbmRleCArIDFdLCBkYXRhW2luZGV4ICsgMl0pO1xyXG4gICAgICBsVmFsdWVzLnB1c2gobCk7XHJcbiAgICAgIGFWYWx1ZXMucHVzaChhKTtcclxuICAgICAgYlZhbHVlcy5wdXNoKGIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQobFZhbHVlcywgYVZhbHVlcywgYlZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEZyb21SR0IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKHIsIGcsIGIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoW3Jlc3VsdC5sXSwgW3Jlc3VsdC5hXSwgW3Jlc3VsdC5iXSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRTaW5nbGVQaXhlbChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogeyBsOiBudW1iZXI7IGE6IG51bWJlcjsgYjogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgeyBYLCBZLCBaIH0gPSB0aGlzLnh5ekNvbnZlcnRlci5yZ2JUb1hZWihyLCBnLCBiKTtcclxuXHJcbiAgICBjb25zdCB4UmF0aW8gPSBYIC8gdGhpcy5YUjtcclxuICAgIGNvbnN0IHlSYXRpbyA9IFkgLyB0aGlzLllSO1xyXG4gICAgY29uc3QgelJhdGlvID0gWiAvIHRoaXMuWlI7XHJcblxyXG4gICAgbGV0IGw6IG51bWJlcjtcclxuICAgIGlmICh5UmF0aW8gPiAwLjAwODg1Nikge1xyXG4gICAgICBsID0gMTE2ICogTWF0aC5jYnJ0KHlSYXRpbykgLSAxNjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGwgPSA5MDMuMyAqIHlSYXRpbztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsLFxyXG4gICAgICBhOiA1MDAgKiAoTWF0aC5jYnJ0KHhSYXRpbykgLSBNYXRoLmNicnQoeVJhdGlvKSksXHJcbiAgICAgIGI6IDIwMCAqIChNYXRoLmNicnQoeVJhdGlvKSAtIE1hdGguY2JydCh6UmF0aW8pKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29udmVyc2lvblJlc3VsdChcclxuICAgIGxWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgYVZhbHVlczogbnVtYmVyW10sXHJcbiAgICBiVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gICk6IExhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IGhDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ0wnLCBsVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCBzQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdhJywgYVZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgY29uc3QgdkNvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnYicsIGJWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgTGFiQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQoaENvbXBvbmVudCwgc0NvbXBvbmVudCwgdkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJ0ZXJzL0xhYkNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBtdXRhdGVNYXAgfSBmcm9tICd1dGlscy9tdXRhdGVNYXAnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCBpbXBsZW1lbnRzIENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgY29tcG9uZW50czogUGFydGlhbENvbnZlcnNpb25SZXN1bHRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsQ29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCxcclxuICAgIGFDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgYkNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHRcclxuICApIHtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFtsQ29tcG9uZW50UmVzdWx0LCBhQ29tcG9uZW50UmVzdWx0LCBiQ29tcG9uZW50UmVzdWx0XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3JtYWxpemVDb21wb25lbnRzKCkge1xyXG4gICAgY29uc3QgW2xDb21wb25lbnQsIGFDb21wb25lbnQsIGJDb21wb25lbnRdID0gdGhpcy5jb21wb25lbnRzO1xyXG5cclxuICAgIG11dGF0ZU1hcChsQ29tcG9uZW50LnZhbHVlcywgbCA9PiBsIC8gMTAwICogMjU1KTtcclxuICAgIG11dGF0ZU1hcChhQ29tcG9uZW50LnZhbHVlcywgYSA9PiBhICsgMTI4KTtcclxuICAgIG11dGF0ZU1hcChiQ29tcG9uZW50LnZhbHVlcywgYiA9PiBiICsgMTI4KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9MYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyIGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnRlciB7XHJcbiAgcHVibGljIGNvbnZlcnRGcm9tSW1hZ2VEYXRhKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeyBkYXRhLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURhdGE7XHJcbiAgICBjb25zdCBsYXN0UGl4ZWxJbmRleCA9IHdpZHRoICogaGVpZ2h0ICogNCAtIDQ7XHJcbiAgICBjb25zdCB5VmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgY2JWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBjclZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IGxhc3RQaXhlbEluZGV4OyBpbmRleCArPSA0KSB7XHJcbiAgICAgIGNvbnN0IHsgeSwgY2IsIGNyIH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChkYXRhW2luZGV4XSwgZGF0YVtpbmRleCArIDFdLCBkYXRhW2luZGV4ICsgMl0pO1xyXG4gICAgICB5VmFsdWVzLnB1c2goeSk7XHJcbiAgICAgIGNiVmFsdWVzLnB1c2goY2IpO1xyXG4gICAgICBjclZhbHVlcy5wdXNoKGNyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KHlWYWx1ZXMsIGNiVmFsdWVzLCBjclZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEZyb21SR0IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHsgeSwgY2IsIGNyIH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChyLCBnLCBiKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KFt5XSwgW2NiXSwgW2NyXSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRTaW5nbGVQaXhlbChcclxuICAgIHI6IG51bWJlcixcclxuICAgIGc6IG51bWJlcixcclxuICAgIGI6IG51bWJlclxyXG4gICk6IHsgeTogbnVtYmVyOyBjYjogbnVtYmVyOyBjcjogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgeSA9IDAuMjk5ICogciArIDAuNTg3ICogZyArIDAuMTE0ICogYjtcclxuICAgIGNvbnN0IGNiID0gKGIgLSB5KSAvIDEuNzcyICsgMTI4O1xyXG4gICAgY29uc3QgY3IgPSAociAtIHkpIC8gMS40MDIgKyAxMjg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeSxcclxuICAgICAgY2IsXHJcbiAgICAgIGNyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb252ZXJzaW9uUmVzdWx0KFxyXG4gICAgeVZhbHVlczogbnVtYmVyW10sXHJcbiAgICBjYlZhbHVlczogbnVtYmVyW10sXHJcbiAgICBjclZhbHVlczogbnVtYmVyW10sXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxuICApOiBZQ2JDckNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IHtcclxuICAgIGNvbnN0IHlDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ1knLCB5VmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnN0IGNiQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdDYicsIGNiVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnN0IGNyQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdDcicsIGNyVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQoeUNvbXBvbmVudCwgY2JDb21wb25lbnQsIGNyQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICcuL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBZQ2JDckNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBjb21wb25lbnRzOiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHlDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgY2JDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgY3JDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbeUNvbXBvbmVudFJlc3VsdCwgY2JDb21wb25lbnRSZXN1bHQsIGNyQ29tcG9uZW50UmVzdWx0XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3JtYWxpemVDb21wb25lbnRzKCkge1xyXG4gICAgLy8gQWxyZWFkeSBub3JtYWxpemVkXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7IE1hdHJpeCwgc29sdmUgfSBmcm9tICdtbC1tYXRyaXgnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQb2ludCB9IGZyb20gJ21vZGVscy9Db2xvclBvaW50JztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5cclxuaW50ZXJmYWNlIFhZWiB7XHJcbiAgWDogbnVtYmVyO1xyXG4gIFk6IG51bWJlcjtcclxuICBaOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIHZhcmlhYmxlLW5hbWVcclxuZXhwb3J0IGNsYXNzIFhZWkNvbnZlcnRlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZWRQb2ludDogQ29sb3JQb2ludDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGdyZWVuUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBibHVlUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3aGl0ZVBvaW50OiBDb2xvclBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2FtbWE6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSByZ2JNYXRyaXg6IE1hdHJpeDtcclxuICBwcml2YXRlIFNWZWN0b3I6IE1hdHJpeDtcclxuICBwcml2YXRlIHJnYlRvWFlaTWF0cml4OiBNYXRyaXg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlZFBvaW50ID0gY29udmVyc2lvblBhcmFtZXRlcnMucmVkUG9pbnQ7XHJcbiAgICB0aGlzLmdyZWVuUG9pbnQgPSBjb252ZXJzaW9uUGFyYW1ldGVycy5ncmVlblBvaW50O1xyXG4gICAgdGhpcy5ibHVlUG9pbnQgPSBjb252ZXJzaW9uUGFyYW1ldGVycy5ibHVlUG9pbnQ7XHJcbiAgICB0aGlzLndoaXRlUG9pbnQgPSBjb252ZXJzaW9uUGFyYW1ldGVycy53aGl0ZVBvaW50O1xyXG4gICAgdGhpcy5nYW1tYSA9IGNvbnZlcnNpb25QYXJhbWV0ZXJzLmdhbW1hO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJnYlRvWFlaKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBYWVoge1xyXG4gICAgY29uc3QgcmdiVmVjdG9yID0gTWF0cml4LmNvbHVtblZlY3RvcihbXHJcbiAgICAgIHRoaXMuYXBwbHlHYW1tYUNvcnJlY3Rpb24ociAvIDI1NSksXHJcbiAgICAgIHRoaXMuYXBwbHlHYW1tYUNvcnJlY3Rpb24oZyAvIDI1NSksXHJcbiAgICAgIHRoaXMuYXBwbHlHYW1tYUNvcnJlY3Rpb24oYiAvIDI1NSlcclxuICAgIF0pO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZ2JUb1hZWk1hdHJpeC5tbXVsKHJnYlZlY3Rvcik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgWDogcmVzdWx0LmdldCgwLCAwKSAqIDEwMCxcclxuICAgICAgWTogcmVzdWx0LmdldCgxLCAwKSAqIDEwMCxcclxuICAgICAgWjogcmVzdWx0LmdldCgyLCAwKSAqIDEwMFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVJHQk1hdHJpeCgpO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBYdywgWXcsIFp3XHJcbiAgICBjb25zdCB6dyA9IDEgLSB0aGlzLndoaXRlUG9pbnQueCAtIHRoaXMud2hpdGVQb2ludC55O1xyXG4gICAgY29uc3QgWXcgPSAxO1xyXG4gICAgY29uc3QgWHcgPSB0aGlzLndoaXRlUG9pbnQueCAvIFl3IC8gdGhpcy53aGl0ZVBvaW50Lnk7XHJcbiAgICBjb25zdCBadyA9IHp3IC8gdGhpcy53aGl0ZVBvaW50Lnk7XHJcbiAgICBjb25zdCBYd1l3WncgPSBNYXRyaXguY29sdW1uVmVjdG9yKFtYdywgWXcsIFp3XSk7XHJcblxyXG4gICAgdGhpcy5TVmVjdG9yID0gc29sdmUodGhpcy5yZ2JNYXRyaXgsIFh3WXdadyk7XHJcblxyXG4gICAgdGhpcy5yZ2JUb1hZWk1hdHJpeCA9IHRoaXMucmdiTWF0cml4Lm11bFJvd1ZlY3Rvcih0aGlzLlNWZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplUkdCTWF0cml4KCkge1xyXG4gICAgY29uc3QgcmVkUG9pbnRaID0gMSAtIHRoaXMucmVkUG9pbnQueCAtIHRoaXMucmVkUG9pbnQueTtcclxuICAgIGNvbnN0IGdyZWVuUG9pbnRaID0gMSAtIHRoaXMuZ3JlZW5Qb2ludC54IC0gdGhpcy5ncmVlblBvaW50Lnk7XHJcbiAgICBjb25zdCBibHVlUG9pbnRaID0gMSAtIHRoaXMuYmx1ZVBvaW50LnggLSB0aGlzLmJsdWVQb2ludC55O1xyXG5cclxuICAgIHRoaXMucmdiTWF0cml4ID0gbmV3IE1hdHJpeChbXHJcbiAgICAgIFt0aGlzLnJlZFBvaW50LngsIHRoaXMuZ3JlZW5Qb2ludC54LCB0aGlzLmdyZWVuUG9pbnQueF0sXHJcbiAgICAgIFt0aGlzLnJlZFBvaW50LnksIHRoaXMuZ3JlZW5Qb2ludC55LCB0aGlzLmJsdWVQb2ludC55XSxcclxuICAgICAgW3JlZFBvaW50WiwgZ3JlZW5Qb2ludFosIGJsdWVQb2ludFpdXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwbHlHYW1tYUNvcnJlY3Rpb24odjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyh2LCB0aGlzLmdhbW1hKTtcclxuICB9XHJcbn1cclxuLy8gdHNsaW50OmVuYWJsZSB2YXJpYWJsZS1uYW1lXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL1hZWkNvbnZlcnRlci50cyIsImlmICghU3ltYm9sLnNwZWNpZXMpIHtcbiAgICBTeW1ib2wuc3BlY2llcyA9IFN5bWJvbC5mb3IoJ0BAc3BlY2llcycpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9zeW1ib2wtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1heCBmcm9tICdtbC1hcnJheS1tYXgnO1xuaW1wb3J0IG1pbiBmcm9tICdtbC1hcnJheS1taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNjYWxlKGlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnB1dCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICAgIH1cblxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKG9wdGlvbnMub3V0cHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMub3V0cHV0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3V0cHV0IG9wdGlvbiBtdXN0IGJlIGFuIGFycmF5IGlmIHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCA9IG9wdGlvbnMub3V0cHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IG5ldyBBcnJheShpbnB1dC5sZW5ndGgpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRNaW4gPSBtaW4oaW5wdXQpO1xuICAgIGNvbnN0IGN1cnJlbnRNYXggPSBtYXgoaW5wdXQpO1xuXG4gICAgaWYgKGN1cnJlbnRNaW4gPT09IGN1cnJlbnRNYXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbmltdW0gYW5kIG1heGltdW0gaW5wdXQgdmFsdWVzIGFyZSBlcXVhbC4gQ2Fubm90IHJlc2NhbGUgYSBjb25zdGFudCBhcnJheScpO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgbWluOiBtaW5WYWx1ZSA9IG9wdGlvbnMuYXV0b01pbk1heCA/IGN1cnJlbnRNaW4gOiAwLFxuICAgICAgICBtYXg6IG1heFZhbHVlID0gb3B0aW9ucy5hdXRvTWluTWF4ID8gY3VycmVudE1heCA6IDFcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmIChtaW5WYWx1ZSA+PSBtYXhWYWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluIG9wdGlvbiBtdXN0IGJlIHNtYWxsZXIgdGhhbiBtYXggb3B0aW9uJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZmFjdG9yID0gKG1heFZhbHVlIC0gbWluVmFsdWUpIC8gKGN1cnJlbnRNYXggLSBjdXJyZW50TWluKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG91dHB1dFtpXSA9IChpbnB1dFtpXSAtIGN1cnJlbnRNaW4pICogZmFjdG9yICsgbWluVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLWFycmF5LXJlc2NhbGUvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbXB1dGVzIHRoZSBtYXhpbXVtIG9mIHRoZSBnaXZlbiB2YWx1ZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW5wdXRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4KGlucHV0KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lucHV0IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5wdXQgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgICB9XG5cbiAgICB2YXIgbWF4ID0gaW5wdXRbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5wdXRbaV0gPiBtYXgpIG1heCA9IGlucHV0W2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWF4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktbWF4L3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb21wdXRlcyB0aGUgbWluaW11bSBvZiB0aGUgZ2l2ZW4gdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbihpbnB1dCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnB1dCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgdmFyIG1pbiA9IGlucHV0WzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlucHV0W2ldIDwgbWluKSBtaW4gPSBpbnB1dFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1pbi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhUcmFuc3Bvc2VWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgICAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5jb2x1bW5zLCBtYXRyaXgucm93cyk7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KGNvbHVtbkluZGV4LCByb3dJbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQoY29sdW1uSW5kZXgsIHJvd0luZGV4KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3RyYW5zcG9zZS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFJvd1ZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3cpIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCAxLCBtYXRyaXguY29sdW1ucyk7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvdywgY29sdW1uSW5kZXgsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93LCBjb2x1bW5JbmRleCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9yb3cuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Y2hlY2tSYW5nZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFN1YlZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgICAgIGNoZWNrUmFuZ2UobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCBlbmRSb3cgLSBzdGFydFJvdyArIDEsIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSk7XG4gICAgICAgIHRoaXMuc3RhcnRSb3cgPSBzdGFydFJvdztcbiAgICAgICAgdGhpcy5zdGFydENvbHVtbiA9IHN0YXJ0Q29sdW1uO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnN0YXJ0Um93ICsgcm93SW5kZXgsIHRoaXMuc3RhcnRDb2x1bW4gKyBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5zdGFydFJvdyArIHJvd0luZGV4LCB0aGlzLnN0YXJ0Q29sdW1uICsgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc3ViLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrSW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFNlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgIHZhciBpbmRpY2VzID0gY2hlY2tJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgaW5kaWNlcy5yb3cubGVuZ3RoLCBpbmRpY2VzLmNvbHVtbi5sZW5ndGgpO1xuICAgICAgICB0aGlzLnJvd0luZGljZXMgPSBpbmRpY2VzLnJvdztcbiAgICAgICAgdGhpcy5jb2x1bW5JbmRpY2VzID0gaW5kaWNlcy5jb2x1bW47XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0sIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrUm93SW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFJvd1NlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzKSB7XG4gICAgICAgIHJvd0luZGljZXMgPSBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCByb3dJbmRpY2VzLmxlbmd0aCwgbWF0cml4LmNvbHVtbnMpO1xuICAgICAgICB0aGlzLnJvd0luZGljZXMgPSByb3dJbmRpY2VzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvd0luZGljZXNbcm93SW5kZXhdLCBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5yb3dJbmRpY2VzW3Jvd0luZGV4XSwgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvcm93U2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2NoZWNrQ29sdW1uSW5kaWNlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgIGNvbHVtbkluZGljZXMgPSBjaGVja0NvbHVtbkluZGljZXMobWF0cml4LCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgY29sdW1uSW5kaWNlcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmNvbHVtbkluZGljZXMgPSBjb2x1bW5JbmRpY2VzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uU2VsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeENvbHVtblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW4pIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgMSk7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW4sIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1uKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2NvbHVtbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhGbGlwUm93VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgbWF0cml4LmNvbHVtbnMpO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBSb3cuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4RmxpcENvbHVtblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgbWF0cml4LnJvd3MsIG1hdHJpeC5jb2x1bW5zKTtcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hdHJpeC5zZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9mbGlwQ29sdW1uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFdyYXBwZXJNYXRyaXgxRCBmcm9tICcuL1dyYXBwZXJNYXRyaXgxRCc7XG5pbXBvcnQgV3JhcHBlck1hdHJpeDJEIGZyb20gJy4vV3JhcHBlck1hdHJpeDJEJztcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fEFycmF5PG51bWJlcj59IGFycmF5XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMucm93cyA9IDFdXG4gKiBAcmV0dXJuIHtXcmFwcGVyTWF0cml4MUR8V3JhcHBlck1hdHJpeDJEfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcChhcnJheSwgb3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICBpZiAoYXJyYXlbMF0gJiYgQXJyYXkuaXNBcnJheShhcnJheVswXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcHBlck1hdHJpeDJEKGFycmF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcHBlck1hdHJpeDFEKGFycmF5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGFyZ3VtZW50IGlzIG5vdCBhbiBhcnJheScpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvd3JhcC93cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCBMdURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9sdSc7XG5pbXBvcnQgUXJEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvcXInO1xuaW1wb3J0IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvc3ZkJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIE1hdHJpeFxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtib29sZWFufSBbdXNlU1ZEPWZhbHNlXVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShtYXRyaXgsIHVzZVNWRCA9IGZhbHNlKSB7XG4gICAgbWF0cml4ID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHVzZVNWRCkge1xuICAgICAgICByZXR1cm4gbmV3IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKG1hdHJpeCkuaW52ZXJzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzb2x2ZShtYXRyaXgsIE1hdHJpeC5leWUobWF0cml4LnJvd3MpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TWF0cml4fSBsZWZ0SGFuZFNpZGVcbiAqIEBwYXJhbSB7TWF0cml4fSByaWdodEhhbmRTaWRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VTVkQgPSBmYWxzZV1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvbHZlKGxlZnRIYW5kU2lkZSwgcmlnaHRIYW5kU2lkZSwgdXNlU1ZEID0gZmFsc2UpIHtcbiAgICBsZWZ0SGFuZFNpZGUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobGVmdEhhbmRTaWRlKTtcbiAgICByaWdodEhhbmRTaWRlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHJpZ2h0SGFuZFNpZGUpO1xuICAgIGlmICh1c2VTVkQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbihsZWZ0SGFuZFNpZGUpLnNvbHZlKHJpZ2h0SGFuZFNpZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZWZ0SGFuZFNpZGUuaXNTcXVhcmUoKSA/IG5ldyBMdURlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKSA6IG5ldyBRckRlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RlY29tcG9zaXRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXgsIFdyYXBwZXJNYXRyaXgyRH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtoeXBvdGVudXNlLCBnZXRGaWxsZWQyREFycmF5fSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzcyBFaWdlbnZhbHVlRGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9FaWdlbnZhbHVlRGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hc3N1bWVTeW1tZXRyaWM9ZmFsc2VdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhc3N1bWVTeW1tZXRyaWMgPSBmYWxzZVxuICAgICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgICBtYXRyaXggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICAgICAgaWYgKCFtYXRyaXguaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgbm90IGEgc3F1YXJlIG1hdHJpeCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG4gPSBtYXRyaXguY29sdW1ucztcbiAgICAgICAgdmFyIFYgPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICB2YXIgZCA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXkobik7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1hdHJpeDtcbiAgICAgICAgdmFyIGksIGo7XG5cbiAgICAgICAgdmFyIGlzU3ltbWV0cmljID0gZmFsc2U7XG4gICAgICAgIGlmIChhc3N1bWVTeW1tZXRyaWMpIHtcbiAgICAgICAgICAgIGlzU3ltbWV0cmljID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzU3ltbWV0cmljID0gbWF0cml4LmlzU3ltbWV0cmljKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTeW1tZXRyaWMpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbaV1bal0gPSB2YWx1ZS5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJlZDIobiwgZSwgZCwgVik7XG4gICAgICAgICAgICB0cWwyKG4sIGUsIGQsIFYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIEggPSBnZXRGaWxsZWQyREFycmF5KG4sIG4sIDApO1xuICAgICAgICAgICAgdmFyIG9ydCA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEhbaV1bal0gPSB2YWx1ZS5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3J0aGVzKG4sIEgsIG9ydCwgVik7XG4gICAgICAgICAgICBocXIyKG4sIGUsIGQsIFYsIEgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uID0gbjtcbiAgICAgICAgdGhpcy5lID0gZTtcbiAgICAgICAgdGhpcy5kID0gZDtcbiAgICAgICAgdGhpcy5WID0gVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IHJlYWxFaWdlbnZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0IGltYWdpbmFyeUVpZ2VudmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCBlaWdlbnZlY3Rvck1hdHJpeCgpIHtcbiAgICAgICAgaWYgKCFNYXRyaXguaXNNYXRyaXgodGhpcy5WKSkge1xuICAgICAgICAgICAgdGhpcy5WID0gbmV3IE1hdHJpeCh0aGlzLlYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGRpYWdvbmFsTWF0cml4KCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMubjtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmU7XG4gICAgICAgIHZhciBkID0gdGhpcy5kO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgICAgIHZhciBpLCBqO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgWFtpXVtqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYW2ldW2ldID0gZFtpXTtcbiAgICAgICAgICAgIGlmIChlW2ldID4gMCkge1xuICAgICAgICAgICAgICAgIFhbaV1baSArIDFdID0gZVtpXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgICAgICAgICBYW2ldW2kgLSAxXSA9IGVbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cmVkMihuLCBlLCBkLCBWKSB7XG4gICAgdmFyIGYsIGcsIGgsIGksIGosIGssXG4gICAgICAgIGhoLCBzY2FsZTtcblxuICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgZFtqXSA9IFZbbiAtIDFdW2pdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG4gLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHNjYWxlID0gMDtcbiAgICAgICAgaCA9IDA7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgICAgIHNjYWxlID0gc2NhbGUgKyBNYXRoLmFicyhkW2tdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FsZSA9PT0gMCkge1xuICAgICAgICAgICAgZVtpXSA9IGRbaSAtIDFdO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGRbal0gPSBWW2kgLSAxXVtqXTtcbiAgICAgICAgICAgICAgICBWW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICBWW2pdW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICBkW2tdIC89IHNjYWxlO1xuICAgICAgICAgICAgICAgIGggKz0gZFtrXSAqIGRba107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGYgPSBkW2kgLSAxXTtcbiAgICAgICAgICAgIGcgPSBNYXRoLnNxcnQoaCk7XG4gICAgICAgICAgICBpZiAoZiA+IDApIHtcbiAgICAgICAgICAgICAgICBnID0gLWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVbaV0gPSBzY2FsZSAqIGc7XG4gICAgICAgICAgICBoID0gaCAtIGYgKiBnO1xuICAgICAgICAgICAgZFtpIC0gMV0gPSBmIC0gZztcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBlW2pdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGYgPSBkW2pdO1xuICAgICAgICAgICAgICAgIFZbal1baV0gPSBmO1xuICAgICAgICAgICAgICAgIGcgPSBlW2pdICsgVltqXVtqXSAqIGY7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPD0gaSAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBnICs9IFZba11bal0gKiBkW2tdO1xuICAgICAgICAgICAgICAgICAgICBlW2tdICs9IFZba11bal0gKiBmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlW2pdID0gZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZiA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZVtqXSAvPSBoO1xuICAgICAgICAgICAgICAgIGYgKz0gZVtqXSAqIGRbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhoID0gZiAvIChoICsgaCk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZVtqXSAtPSBoaCAqIGRbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmID0gZFtqXTtcbiAgICAgICAgICAgICAgICBnID0gZVtqXTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBqOyBrIDw9IGkgLSAxOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrXVtqXSAtPSAoZiAqIGVba10gKyBnICogZFtrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRbal0gPSBWW2kgLSAxXVtqXTtcbiAgICAgICAgICAgICAgICBWW2ldW2pdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkW2ldID0gaDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICBWW24gLSAxXVtpXSA9IFZbaV1baV07XG4gICAgICAgIFZbaV1baV0gPSAxO1xuICAgICAgICBoID0gZFtpICsgMV07XG4gICAgICAgIGlmIChoICE9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgICAgICAgICAgIGRba10gPSBWW2tdW2kgKyAxXSAvIGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZyArPSBWW2tdW2kgKyAxXSAqIFZba11bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPD0gaTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZba11bal0gLT0gZyAqIGRba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICAgIFZba11baSArIDFdID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgZFtqXSA9IFZbbiAtIDFdW2pdO1xuICAgICAgICBWW24gLSAxXVtqXSA9IDA7XG4gICAgfVxuXG4gICAgVltuIC0gMV1bbiAtIDFdID0gMTtcbiAgICBlWzBdID0gMDtcbn1cblxuZnVuY3Rpb24gdHFsMihuLCBlLCBkLCBWKSB7XG5cbiAgICB2YXIgZywgaCwgaSwgaiwgaywgbCwgbSwgcCwgcixcbiAgICAgICAgZGwxLCBjLCBjMiwgYzMsIGVsMSwgcywgczIsXG4gICAgICAgIGl0ZXI7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGVbaSAtIDFdID0gZVtpXTtcbiAgICB9XG5cbiAgICBlW24gLSAxXSA9IDA7XG5cbiAgICB2YXIgZiA9IDA7XG4gICAgdmFyIHRzdDEgPSAwO1xuICAgIHZhciBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcblxuICAgIGZvciAobCA9IDA7IGwgPCBuOyBsKyspIHtcbiAgICAgICAgdHN0MSA9IE1hdGgubWF4KHRzdDEsIE1hdGguYWJzKGRbbF0pICsgTWF0aC5hYnMoZVtsXSkpO1xuICAgICAgICBtID0gbDtcbiAgICAgICAgd2hpbGUgKG0gPCBuKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZVttXSkgPD0gZXBzICogdHN0MSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG0gPiBsKSB7XG4gICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpdGVyID0gaXRlciArIDE7XG5cbiAgICAgICAgICAgICAgICBnID0gZFtsXTtcbiAgICAgICAgICAgICAgICBwID0gKGRbbCArIDFdIC0gZykgLyAoMiAqIGVbbF0pO1xuICAgICAgICAgICAgICAgIHIgPSBoeXBvdGVudXNlKHAsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChwIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByID0gLXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZFtsXSA9IGVbbF0gLyAocCArIHIpO1xuICAgICAgICAgICAgICAgIGRbbCArIDFdID0gZVtsXSAqIChwICsgcik7XG4gICAgICAgICAgICAgICAgZGwxID0gZFtsICsgMV07XG4gICAgICAgICAgICAgICAgaCA9IGcgLSBkW2xdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGwgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRbaV0gLT0gaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmID0gZiArIGg7XG5cbiAgICAgICAgICAgICAgICBwID0gZFttXTtcbiAgICAgICAgICAgICAgICBjID0gMTtcbiAgICAgICAgICAgICAgICBjMiA9IGM7XG4gICAgICAgICAgICAgICAgYzMgPSBjO1xuICAgICAgICAgICAgICAgIGVsMSA9IGVbbCArIDFdO1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtIC0gMTsgaSA+PSBsOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgYzMgPSBjMjtcbiAgICAgICAgICAgICAgICAgICAgYzIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBzMiA9IHM7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBjICogZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGMgKiBwO1xuICAgICAgICAgICAgICAgICAgICByID0gaHlwb3RlbnVzZShwLCBlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgZVtpICsgMV0gPSBzICogcjtcbiAgICAgICAgICAgICAgICAgICAgcyA9IGVbaV0gLyByO1xuICAgICAgICAgICAgICAgICAgICBjID0gcCAvIHI7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBjICogZFtpXSAtIHMgKiBnO1xuICAgICAgICAgICAgICAgICAgICBkW2kgKyAxXSA9IGggKyBzICogKGMgKiBnICsgcyAqIGRbaV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSBWW2tdW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZba11baSArIDFdID0gcyAqIFZba11baV0gKyBjICogaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZba11baV0gPSBjICogVltrXVtpXSAtIHMgKiBoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCA9IC1zICogczIgKiBjMyAqIGVsMSAqIGVbbF0gLyBkbDE7XG4gICAgICAgICAgICAgICAgZVtsXSA9IHMgKiBwO1xuICAgICAgICAgICAgICAgIGRbbF0gPSBjICogcDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKE1hdGguYWJzKGVbbF0pID4gZXBzICogdHN0MSk7XG4gICAgICAgIH1cbiAgICAgICAgZFtsXSA9IGRbbF0gKyBmO1xuICAgICAgICBlW2xdID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICBrID0gaTtcbiAgICAgICAgcCA9IGRbaV07XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZFtqXSA8IHApIHtcbiAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICBwID0gZFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrICE9PSBpKSB7XG4gICAgICAgICAgICBkW2tdID0gZFtpXTtcbiAgICAgICAgICAgIGRbaV0gPSBwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIHAgPSBWW2pdW2ldO1xuICAgICAgICAgICAgICAgIFZbal1baV0gPSBWW2pdW2tdO1xuICAgICAgICAgICAgICAgIFZbal1ba10gPSBwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcnRoZXMobiwgSCwgb3J0LCBWKSB7XG5cbiAgICB2YXIgbG93ID0gMDtcbiAgICB2YXIgaGlnaCA9IG4gLSAxO1xuICAgIHZhciBmLCBnLCBoLCBpLCBqLCBtO1xuICAgIHZhciBzY2FsZTtcblxuICAgIGZvciAobSA9IGxvdyArIDE7IG0gPD0gaGlnaCAtIDE7IG0rKykge1xuICAgICAgICBzY2FsZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICBzY2FsZSA9IHNjYWxlICsgTWF0aC5hYnMoSFtpXVttIC0gMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjYWxlICE9PSAwKSB7XG4gICAgICAgICAgICBoID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IGhpZ2g7IGkgPj0gbTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgb3J0W2ldID0gSFtpXVttIC0gMV0gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICBoICs9IG9ydFtpXSAqIG9ydFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZyA9IE1hdGguc3FydChoKTtcbiAgICAgICAgICAgIGlmIChvcnRbbV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgZyA9IC1nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoID0gaCAtIG9ydFttXSAqIGc7XG4gICAgICAgICAgICBvcnRbbV0gPSBvcnRbbV0gLSBnO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBtOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgZiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaGlnaDsgaSA+PSBtOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgZiArPSBvcnRbaV0gKiBIW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGYgPSBmIC8gaDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBIW2ldW2pdIC09IGYgKiBvcnRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGYgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGhpZ2g7IGogPj0gbTsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGYgKz0gb3J0W2pdICogSFtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmID0gZiAvIGg7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbTsgaiA8PSBoaWdoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtqXSAtPSBmICogb3J0W2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3J0W21dID0gc2NhbGUgKiBvcnRbbV07XG4gICAgICAgICAgICBIW21dW20gLSAxXSA9IHNjYWxlICogZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgVltpXVtqXSA9IChpID09PSBqID8gMSA6IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChtID0gaGlnaCAtIDE7IG0gPj0gbG93ICsgMTsgbS0tKSB7XG4gICAgICAgIGlmIChIW21dW20gLSAxXSAhPT0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gbSArIDE7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3J0W2ldID0gSFtpXVttIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IG07IGogPD0gaGlnaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZyArPSBvcnRbaV0gKiBWW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGcgPSAoZyAvIG9ydFttXSkgLyBIW21dW20gLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBWW2ldW2pdICs9IGcgKiBvcnRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBocXIyKG5uLCBlLCBkLCBWLCBIKSB7XG4gICAgdmFyIG4gPSBubiAtIDE7XG4gICAgdmFyIGxvdyA9IDA7XG4gICAgdmFyIGhpZ2ggPSBubiAtIDE7XG4gICAgdmFyIGVwcyA9IE51bWJlci5FUFNJTE9OO1xuICAgIHZhciBleHNoaWZ0ID0gMDtcbiAgICB2YXIgbm9ybSA9IDA7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBxID0gMDtcbiAgICB2YXIgciA9IDA7XG4gICAgdmFyIHMgPSAwO1xuICAgIHZhciB6ID0gMDtcbiAgICB2YXIgaXRlciA9IDA7XG4gICAgdmFyIGksIGosIGssIGwsIG0sIHQsIHcsIHgsIHk7XG4gICAgdmFyIHJhLCBzYSwgdnIsIHZpO1xuICAgIHZhciBub3RsYXN0LCBjZGl2cmVzO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG5uOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBsb3cgfHwgaSA+IGhpZ2gpIHtcbiAgICAgICAgICAgIGRbaV0gPSBIW2ldW2ldO1xuICAgICAgICAgICAgZVtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGogPSBNYXRoLm1heChpIC0gMSwgMCk7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICBub3JtID0gbm9ybSArIE1hdGguYWJzKEhbaV1bal0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKG4gPj0gbG93KSB7XG4gICAgICAgIGwgPSBuO1xuICAgICAgICB3aGlsZSAobCA+IGxvdykge1xuICAgICAgICAgICAgcyA9IE1hdGguYWJzKEhbbCAtIDFdW2wgLSAxXSkgKyBNYXRoLmFicyhIW2xdW2xdKTtcbiAgICAgICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcyA9IG5vcm07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoSFtsXVtsIC0gMV0pIDwgZXBzICogcykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGwgPT09IG4pIHtcbiAgICAgICAgICAgIEhbbl1bbl0gPSBIW25dW25dICsgZXhzaGlmdDtcbiAgICAgICAgICAgIGRbbl0gPSBIW25dW25dO1xuICAgICAgICAgICAgZVtuXSA9IDA7XG4gICAgICAgICAgICBuLS07XG4gICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChsID09PSBuIC0gMSkge1xuICAgICAgICAgICAgdyA9IEhbbl1bbiAtIDFdICogSFtuIC0gMV1bbl07XG4gICAgICAgICAgICBwID0gKEhbbiAtIDFdW24gLSAxXSAtIEhbbl1bbl0pIC8gMjtcbiAgICAgICAgICAgIHEgPSBwICogcCArIHc7XG4gICAgICAgICAgICB6ID0gTWF0aC5zcXJ0KE1hdGguYWJzKHEpKTtcbiAgICAgICAgICAgIEhbbl1bbl0gPSBIW25dW25dICsgZXhzaGlmdDtcbiAgICAgICAgICAgIEhbbiAtIDFdW24gLSAxXSA9IEhbbiAtIDFdW24gLSAxXSArIGV4c2hpZnQ7XG4gICAgICAgICAgICB4ID0gSFtuXVtuXTtcblxuICAgICAgICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICAgICAgICAgIHogPSAocCA+PSAwKSA/IChwICsgeikgOiAocCAtIHopO1xuICAgICAgICAgICAgICAgIGRbbiAtIDFdID0geCArIHo7XG4gICAgICAgICAgICAgICAgZFtuXSA9IGRbbiAtIDFdO1xuICAgICAgICAgICAgICAgIGlmICh6ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRbbl0gPSB4IC0gdyAvIHo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVbbiAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICBlW25dID0gMDtcbiAgICAgICAgICAgICAgICB4ID0gSFtuXVtuIC0gMV07XG4gICAgICAgICAgICAgICAgcyA9IE1hdGguYWJzKHgpICsgTWF0aC5hYnMoeik7XG4gICAgICAgICAgICAgICAgcCA9IHggLyBzO1xuICAgICAgICAgICAgICAgIHEgPSB6IC8gcztcbiAgICAgICAgICAgICAgICByID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEpO1xuICAgICAgICAgICAgICAgIHAgPSBwIC8gcjtcbiAgICAgICAgICAgICAgICBxID0gcSAvIHI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSBuIC0gMTsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IEhbbiAtIDFdW2pdO1xuICAgICAgICAgICAgICAgICAgICBIW24gLSAxXVtqXSA9IHEgKiB6ICsgcCAqIEhbbl1bal07XG4gICAgICAgICAgICAgICAgICAgIEhbbl1bal0gPSBxICogSFtuXVtqXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHogPSBIW2ldW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtuIC0gMV0gPSBxICogeiArIHAgKiBIW2ldW25dO1xuICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gcSAqIEhbaV1bbl0gLSBwICogejtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHogPSBWW2ldW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgVltpXVtuIC0gMV0gPSBxICogeiArIHAgKiBWW2ldW25dO1xuICAgICAgICAgICAgICAgICAgICBWW2ldW25dID0gcSAqIFZbaV1bbl0gLSBwICogejtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRbbiAtIDFdID0geCArIHA7XG4gICAgICAgICAgICAgICAgZFtuXSA9IHggKyBwO1xuICAgICAgICAgICAgICAgIGVbbiAtIDFdID0gejtcbiAgICAgICAgICAgICAgICBlW25dID0gLXo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG4gPSBuIC0gMjtcbiAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IEhbbl1bbl07XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIHcgPSAwO1xuICAgICAgICAgICAgaWYgKGwgPCBuKSB7XG4gICAgICAgICAgICAgICAgeSA9IEhbbiAtIDFdW24gLSAxXTtcbiAgICAgICAgICAgICAgICB3ID0gSFtuXVtuIC0gMV0gKiBIW24gLSAxXVtuXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZXIgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgZXhzaGlmdCArPSB4O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtpXSAtPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5hYnMoSFtuXVtuIC0gMV0pICsgTWF0aC5hYnMoSFtuIC0gMV1bbiAtIDJdKTtcbiAgICAgICAgICAgICAgICB4ID0geSA9IDAuNzUgKiBzO1xuICAgICAgICAgICAgICAgIHcgPSAtMC40Mzc1ICogcyAqIHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVyID09PSAzMCkge1xuICAgICAgICAgICAgICAgIHMgPSAoeSAtIHgpIC8gMjtcbiAgICAgICAgICAgICAgICBzID0gcyAqIHMgKyB3O1xuICAgICAgICAgICAgICAgIGlmIChzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzID0geCAtIHcgLyAoKHkgLSB4KSAvIDIgKyBzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtpXSAtPSBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4c2hpZnQgKz0gcztcbiAgICAgICAgICAgICAgICAgICAgeCA9IHkgPSB3ID0gMC45NjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVyID0gaXRlciArIDE7XG5cbiAgICAgICAgICAgIG0gPSBuIC0gMjtcbiAgICAgICAgICAgIHdoaWxlIChtID49IGwpIHtcbiAgICAgICAgICAgICAgICB6ID0gSFttXVttXTtcbiAgICAgICAgICAgICAgICByID0geCAtIHo7XG4gICAgICAgICAgICAgICAgcyA9IHkgLSB6O1xuICAgICAgICAgICAgICAgIHAgPSAociAqIHMgLSB3KSAvIEhbbSArIDFdW21dICsgSFttXVttICsgMV07XG4gICAgICAgICAgICAgICAgcSA9IEhbbSArIDFdW20gKyAxXSAtIHogLSByIC0gcztcbiAgICAgICAgICAgICAgICByID0gSFttICsgMl1bbSArIDFdO1xuICAgICAgICAgICAgICAgIHMgPSBNYXRoLmFicyhwKSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMocik7XG4gICAgICAgICAgICAgICAgcCA9IHAgLyBzO1xuICAgICAgICAgICAgICAgIHEgPSBxIC8gcztcbiAgICAgICAgICAgICAgICByID0gciAvIHM7XG4gICAgICAgICAgICAgICAgaWYgKG0gPT09IGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhIW21dW20gLSAxXSkgKiAoTWF0aC5hYnMocSkgKyBNYXRoLmFicyhyKSkgPCBlcHMgKiAoTWF0aC5hYnMocCkgKiAoTWF0aC5hYnMoSFttIC0gMV1bbSAtIDFdKSArIE1hdGguYWJzKHopICsgTWF0aC5hYnMoSFttICsgMV1bbSArIDFdKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtLS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IG0gKyAyOyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgICAgIEhbaV1baSAtIDJdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IG0gKyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIEhbaV1baSAtIDNdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoayA9IG07IGsgPD0gbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgIG5vdGxhc3QgPSAoayAhPT0gbiAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChrICE9PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBIW2tdW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcSA9IEhbayArIDFdW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgciA9IChub3RsYXN0ID8gSFtrICsgMl1bayAtIDFdIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLmFicyhwKSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMocik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gcCAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBxID0gcSAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gciAvIHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEgKyByICogcik7XG4gICAgICAgICAgICAgICAgaWYgKHAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoayAhPT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrXVtrIC0gMV0gPSAtcyAqIHg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobCAhPT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrXVtrIC0gMV0gPSAtSFtrXVtrIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwID0gcCArIHM7XG4gICAgICAgICAgICAgICAgICAgIHggPSBwIC8gcztcbiAgICAgICAgICAgICAgICAgICAgeSA9IHEgLyBzO1xuICAgICAgICAgICAgICAgICAgICB6ID0gciAvIHM7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxIC8gcDtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgLyBwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGs7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gSFtrXVtqXSArIHEgKiBIW2sgKyAxXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHAgKyByICogSFtrICsgMl1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtrICsgMl1bal0gPSBIW2sgKyAyXVtqXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBIW2tdW2pdID0gSFtrXVtqXSAtIHAgKiB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtrICsgMV1bal0gPSBIW2sgKyAxXVtqXSAtIHAgKiB5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBNYXRoLm1pbihuLCBrICsgMyk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHggKiBIW2ldW2tdICsgeSAqIEhbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gcCArIHogKiBIW2ldW2sgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2ldW2sgKyAyXSA9IEhbaV1bayArIDJdIC0gcCAqIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1ba10gPSBIW2ldW2tdIC0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bayArIDFdID0gSFtpXVtrICsgMV0gLSBwICogcTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB4ICogVltpXVtrXSArIHkgKiBWW2ldW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3RsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHAgKyB6ICogVltpXVtrICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtrICsgMl0gPSBWW2ldW2sgKyAyXSAtIHAgKiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gVltpXVtrXSAtIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2sgKyAxXSA9IFZbaV1bayArIDFdIC0gcCAqIHE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9ybSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChuID0gbm4gLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICBwID0gZFtuXTtcbiAgICAgICAgcSA9IGVbbl07XG5cbiAgICAgICAgaWYgKHEgPT09IDApIHtcbiAgICAgICAgICAgIGwgPSBuO1xuICAgICAgICAgICAgSFtuXVtuXSA9IDE7XG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB3ID0gSFtpXVtpXSAtIHA7XG4gICAgICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbDsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIgKyBIW2ldW2pdICogSFtqXVtuXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IHc7XG4gICAgICAgICAgICAgICAgICAgIHMgPSByO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtuXSA9ICh3ICE9PSAwKSA/ICgtciAvIHcpIDogKC1yIC8gKGVwcyAqIG5vcm0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBIW2ldW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBIW2kgKyAxXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEgPSAoZFtpXSAtIHApICogKGRbaV0gLSBwKSArIGVbaV0gKiBlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh4ICogcyAtIHogKiByKSAvIHE7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gKE1hdGguYWJzKHgpID4gTWF0aC5hYnMoeikpID8gKCgtciAtIHcgKiB0KSAvIHgpIDogKCgtcyAtIHkgKiB0KSAvIHopO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdCA9IE1hdGguYWJzKEhbaV1bbl0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVwcyAqIHQpICogdCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtqXVtuXSA9IEhbal1bbl0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHEgPCAwKSB7XG4gICAgICAgICAgICBsID0gbiAtIDE7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhIW25dW24gLSAxXSkgPiBNYXRoLmFicyhIW24gLSAxXVtuXSkpIHtcbiAgICAgICAgICAgICAgICBIW24gLSAxXVtuIC0gMV0gPSBxIC8gSFtuXVtuIC0gMV07XG4gICAgICAgICAgICAgICAgSFtuIC0gMV1bbl0gPSAtKEhbbl1bbl0gLSBwKSAvIEhbbl1bbiAtIDFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2RpdigwLCAtSFtuIC0gMV1bbl0sIEhbbiAtIDFdW24gLSAxXSAtIHAsIHEpO1xuICAgICAgICAgICAgICAgIEhbbiAtIDFdW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgSFtuIC0gMV1bbl0gPSBjZGl2cmVzWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBIW25dW24gLSAxXSA9IDA7XG4gICAgICAgICAgICBIW25dW25dID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHJhID0gMDtcbiAgICAgICAgICAgICAgICBzYSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gbDsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmEgPSByYSArIEhbaV1bal0gKiBIW2pdW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgc2EgPSBzYSArIEhbaV1bal0gKiBIW2pdW25dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHcgPSBIW2ldW2ldIC0gcDtcblxuICAgICAgICAgICAgICAgIGlmIChlW2ldIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB6ID0gdztcbiAgICAgICAgICAgICAgICAgICAgciA9IHJhO1xuICAgICAgICAgICAgICAgICAgICBzID0gc2E7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW2ldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2RpdigtcmEsIC1zYSwgdywgcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBIW2ldW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBIW2kgKyAxXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZyID0gKGRbaV0gLSBwKSAqIChkW2ldIC0gcCkgKyBlW2ldICogZVtpXSAtIHEgKiBxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmkgPSAoZFtpXSAtIHApICogMiAqIHE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnIgPT09IDAgJiYgdmkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ciA9IGVwcyAqIG5vcm0gKiAoTWF0aC5hYnModykgKyBNYXRoLmFicyhxKSArIE1hdGguYWJzKHgpICsgTWF0aC5hYnMoeSkgKyBNYXRoLmFicyh6KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZGl2cmVzID0gY2Rpdih4ICogciAtIHogKiByYSArIHEgKiBzYSwgeCAqIHMgLSB6ICogc2EgLSBxICogcmEsIHZyLCB2aSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh4KSA+IChNYXRoLmFicyh6KSArIE1hdGguYWJzKHEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW24gLSAxXSA9ICgtcmEgLSB3ICogSFtpXVtuIC0gMV0gKyBxICogSFtpXVtuXSkgLyB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gKC1zYSAtIHcgKiBIW2ldW25dIC0gcSAqIEhbaV1bbiAtIDFdKSAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KC1yIC0geSAqIEhbaV1bbiAtIDFdLCAtcyAtIHkgKiBIW2ldW25dLCB6LCBxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2kgKyAxXVtuIC0gMV0gPSBjZGl2cmVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW25dID0gY2RpdnJlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHQgPSBNYXRoLm1heChNYXRoLmFicyhIW2ldW24gLSAxXSksIE1hdGguYWJzKEhbaV1bbl0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlcHMgKiB0KSAqIHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDw9IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbal1bbiAtIDFdID0gSFtqXVtuIC0gMV0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbal1bbl0gPSBIW2pdW25dIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBubjsgaSsrKSB7XG4gICAgICAgIGlmIChpIDwgbG93IHx8IGkgPiBoaWdoKSB7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbm47IGorKykge1xuICAgICAgICAgICAgICAgIFZbaV1bal0gPSBIW2ldW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChqID0gbm4gLSAxOyBqID49IGxvdzsgai0tKSB7XG4gICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgIHogPSAwO1xuICAgICAgICAgICAgZm9yIChrID0gbG93OyBrIDw9IE1hdGgubWluKGosIGhpZ2gpOyBrKyspIHtcbiAgICAgICAgICAgICAgICB6ID0geiArIFZbaV1ba10gKiBIW2tdW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVltpXVtqXSA9IHo7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNkaXYoeHIsIHhpLCB5ciwgeWkpIHtcbiAgICB2YXIgciwgZDtcbiAgICBpZiAoTWF0aC5hYnMoeXIpID4gTWF0aC5hYnMoeWkpKSB7XG4gICAgICAgIHIgPSB5aSAvIHlyO1xuICAgICAgICBkID0geXIgKyByICogeWk7XG4gICAgICAgIHJldHVybiBbKHhyICsgciAqIHhpKSAvIGQsICh4aSAtIHIgKiB4cikgLyBkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByID0geXIgLyB5aTtcbiAgICAgICAgZCA9IHlpICsgciAqIHlyO1xuICAgICAgICByZXR1cm4gWyhyICogeHIgKyB4aSkgLyBkLCAociAqIHhpIC0geHIpIC8gZF07XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9ldmQuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeCwgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuLi9pbmRleCc7XG5cbi8qKlxuICogQGNsYXNzIENob2xlc2t5RGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9DaG9sZXNreURlY29tcG9zaXRpb24uY3NcbiAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9sZXNreURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcbiAgICAgICAgaWYgKCF2YWx1ZS5pc1N5bW1ldHJpYygpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3Qgc3ltbWV0cmljJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYSA9IHZhbHVlO1xuICAgICAgICB2YXIgZGltZW5zaW9uID0gYS5yb3dzO1xuICAgICAgICB2YXIgbCA9IG5ldyBNYXRyaXgoZGltZW5zaW9uLCBkaW1lbnNpb24pO1xuICAgICAgICB2YXIgcG9zaXRpdmVEZWZpbml0ZSA9IHRydWU7XG4gICAgICAgIHZhciBpLCBqLCBrO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBkaW1lbnNpb247IGorKykge1xuICAgICAgICAgICAgdmFyIExyb3dqID0gbFtqXTtcbiAgICAgICAgICAgIHZhciBkID0gMDtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBqOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgTHJvd2sgPSBsW2tdO1xuICAgICAgICAgICAgICAgIHZhciBzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gTHJvd2tbaV0gKiBMcm93altpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTHJvd2pba10gPSBzID0gKGEuZ2V0KGosIGspIC0gcykgLyBsW2tdW2tdO1xuICAgICAgICAgICAgICAgIGQgPSBkICsgcyAqIHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSBhLmdldChqLCBqKSAtIGQ7XG5cbiAgICAgICAgICAgIHBvc2l0aXZlRGVmaW5pdGUgJj0gKGQgPiAwKTtcbiAgICAgICAgICAgIGxbal1bal0gPSBNYXRoLnNxcnQoTWF0aC5tYXgoZCwgMCkpO1xuICAgICAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgICAgICAgICAgIGxbal1ba10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3NpdGl2ZURlZmluaXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3QgcG9zaXRpdmUgZGVmaW5pdGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuTCA9IGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgc29sdmUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBsID0gdGhpcy5MO1xuICAgICAgICB2YXIgZGltZW5zaW9uID0gbC5yb3dzO1xuXG4gICAgICAgIGlmICh2YWx1ZS5yb3dzICE9PSBkaW1lbnNpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGRpbWVuc2lvbnMgZG8gbm90IG1hdGNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY291bnQgPSB2YWx1ZS5jb2x1bW5zO1xuICAgICAgICB2YXIgQiA9IHZhbHVlLmNsb25lKCk7XG4gICAgICAgIHZhciBpLCBqLCBrO1xuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEJba11bal0gLT0gQltpXVtqXSAqIGxba11baV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJba11bal0gLz0gbFtrXVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IGRpbWVuc2lvbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgZGltZW5zaW9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQltrXVtqXSAtPSBCW2ldW2pdICogbFtpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQltrXVtqXSAvPSBsW2tdW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGxvd2VyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTDtcbiAgICB9XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvY2hvbGVza3kuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSW1hZ2VEYXRhQ29udmVydGVyIHtcclxuICBwdWJsaWMgY29udmVydEltYWdlVG9JbWFnZURhdGEoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgZHJhd2luZyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRJbWFnZURhdGFUb0ltYWdlKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlRGF0YS53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyBkcmF3aW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKGltYWdlRGF0YS53aWR0aCwgaW1hZ2VEYXRhLmhlaWdodCk7XHJcbiAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlRGF0YUNvbnZlcnRlci50cyIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgcHVibGljIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xyXG5cclxuICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlTG9hZGVyLnRzIiwiaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgTGFiUGFyYW1ldGVyQm94IH0gZnJvbSAnY29tcG9uZW50cy9MYWJQYXJhbWV0ZXJCb3gnO1xyXG5pbXBvcnQgeyBDb2xvclByb2ZpbGVUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUnO1xyXG5pbXBvcnQgeyBDb2xvclNwYWNlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclNwYWNlVHlwZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuaW1wb3J0IHsgSWxsdW1pbmFudFR5cGUgfSBmcm9tICdtb2RlbHMvSWxsdW1pbmFudFR5cGUnO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lclN0YXRlIHtcclxuICBzZWxlY3RlZENvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlO1xyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycztcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGU7XHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25QYXJhbWV0ZXJCb3ggZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRDb2xvclNwYWNlOiBhcHBTdGF0ZS5pbnB1dC5zZWxlY3RlZENvbG9yU3BhY2UsXHJcbiAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBhcHBTdGF0ZS5pbnB1dC5jb252ZXJzaW9uUGFyYW1ldGVycyxcclxuICAgICAgaWxsdW1pbmFudFR5cGU6IGFwcFN0YXRlLmlucHV0LmlsbHVtaW5hbnRUeXBlLFxyXG4gICAgICBjb2xvclByb2ZpbGVUeXBlOiBhcHBTdGF0ZS5pbnB1dC5jb2xvclByb2ZpbGVUeXBlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9PlxyXG4gICAgICAgICR7dGhpcy5nZXRDb2xvclNwYWNlUGFyYW1ldGVyQm94KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29sb3JTcGFjZVBhcmFtZXRlckJveCgpIHtcclxuICAgIGNvbnN0IHsgaWxsdW1pbmFudFR5cGUsIGNvbG9yUHJvZmlsZVR5cGUsIGNvbnZlcnNpb25QYXJhbWV0ZXJzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtDb2xvclNwYWNlVHlwZS5IU1ZdOiAoKSA9PiBudWxsLFxyXG4gICAgICBbQ29sb3JTcGFjZVR5cGUuWUNiQ3JdOiAoKSA9PiBudWxsLFxyXG4gICAgICBbQ29sb3JTcGFjZVR5cGUuTGFiXTogKCkgPT5cclxuICAgICAgICBMYWJQYXJhbWV0ZXJCb3goaWxsdW1pbmFudFR5cGUsIGNvbG9yUHJvZmlsZVR5cGUsIGNvbnZlcnNpb25QYXJhbWV0ZXJzKVxyXG4gICAgfVt0aGlzLnN0YXRlLnNlbGVjdGVkQ29sb3JTcGFjZV0oKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9Db252ZXJzaW9uUGFyYW1ldGVyQm94LnRzIiwiaW1wb3J0IHsgd2lyZSB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb2xvclByb2ZpbGVUeXBlLFxyXG4gIGxhYmVsZWRDb2xvclByb2ZpbGVzLFxyXG4gIHByZWRlZmluZWRDb2xvclByb2ZpbGVzXHJcbn0gZnJvbSAnbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcbmltcG9ydCB7IElsbHVtaW5hbnRUeXBlLCBsYWJlbGVkSWxsdW1pbmFudHMsIHByZWRlZmluZWRJbGx1bWluYW50cyB9IGZyb20gJ21vZGVscy9JbGx1bWluYW50VHlwZSc7XHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VDb2xvclByb2ZpbGVUeXBlIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VDb2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgY2hhbmdlSWxsdW1pbmFudFR5cGUgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZUlsbHVtaW5hbnRUeXBlJztcclxuXHJcbmltcG9ydCB7IGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBMYWJlbGVkU2VsZWN0IH0gZnJvbSAnY29tcG9uZW50cy9MYWJlbGVkU2VsZWN0JztcclxuaW1wb3J0IHsgQ29sb3JQb2ludCB9IGZyb20gJ21vZGVscy9Db2xvclBvaW50JztcclxuXHJcbmZ1bmN0aW9uIG9uSWxsdW1pbmFudENoYW5nZShjdXJyZW50V2hpdGVQb2ludDogQ29sb3JQb2ludCwgbmV3SWxsdW1pbmFudDogSWxsdW1pbmFudFR5cGUpIHtcclxuICBpZiAobmV3SWxsdW1pbmFudCA9PT0gSWxsdW1pbmFudFR5cGUuQ3VzdG9tKSB7XHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjaGFuZ2VJbGx1bWluYW50VHlwZShuZXdJbGx1bWluYW50LCBjdXJyZW50V2hpdGVQb2ludCkpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvdW5kSWxsdW1pbmFudCA9IHByZWRlZmluZWRJbGx1bWluYW50cy5maW5kKFxyXG4gICAgaWxsdW1pbmFudCA9PiBpbGx1bWluYW50LmlsbHVtaW5hbnRUeXBlID09PSBuZXdJbGx1bWluYW50XHJcbiAgKTtcclxuICBpZiAoIWZvdW5kSWxsdW1pbmFudCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBpbGx1bWluYW50IG5vdCBmb3VuZCBpbiBwcmVkZWZpbmVkIG9uZXMnKTtcclxuICB9XHJcblxyXG4gIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUlsbHVtaW5hbnRUeXBlKG5ld0lsbHVtaW5hbnQsIGZvdW5kSWxsdW1pbmFudC53aGl0ZVBvaW50KCkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Db2xvclByb2ZpbGVDaGFuZ2UoXHJcbiAgY3VycmVudENvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycyxcclxuICBuZXdDb2xvclByb2ZpbGU6IENvbG9yUHJvZmlsZVR5cGVcclxuKSB7XHJcbiAgaWYgKG5ld0NvbG9yUHJvZmlsZSA9PT0gQ29sb3JQcm9maWxlVHlwZS5DdXN0b20pIHtcclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUobmV3Q29sb3JQcm9maWxlLCBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMpKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3VuZENvbG9yUHJvZmlsZSA9IHByZWRlZmluZWRDb2xvclByb2ZpbGVzLmZpbmQoXHJcbiAgICBjb2xvclByb2ZpbGUgPT4gY29sb3JQcm9maWxlLmNvbG9yUHJvZmlsZVR5cGUgPT09IG5ld0NvbG9yUHJvZmlsZVxyXG4gICk7XHJcbiAgaWYgKCFmb3VuZENvbG9yUHJvZmlsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBjb2xvciBwcm9maWxlIG5vdCBmb3VuZCBpbiBwcmVkZWZpbmVkIG9uZXMnKTtcclxuICB9XHJcblxyXG4gIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUobmV3Q29sb3JQcm9maWxlLCBmb3VuZENvbG9yUHJvZmlsZS5wYXJhbWV0ZXJzKCkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhYlBhcmFtZXRlckJveChcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUsXHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZSxcclxuICBjb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnNcclxuKSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJpbGx1bWluYW50LXR5cGUtc2VsZWN0XCI+SWxsdW1pbmFudCB0eXBlOiA8L2xhYmVsPlxyXG4gICAgICAke0xhYmVsZWRTZWxlY3QoXHJcbiAgICAgICAgJ2lsbHVtaW5hbnQtdHlwZS1zZWxlY3QnLFxyXG4gICAgICAgIGxhYmVsZWRJbGx1bWluYW50cyxcclxuICAgICAgICBpbGx1bWluYW50VHlwZSxcclxuICAgICAgICBvbklsbHVtaW5hbnRDaGFuZ2UuYmluZChudWxsLCBjb252ZXJzaW9uUGFyYW1ldGVycy53aGl0ZVBvaW50KVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGZvcj1cImNvbG9yLXByb2ZpbGUtc2VsZWN0XCI+Q29sb3IgcHJvZmlsZTogPC9sYWJlbD5cclxuICAgICAgJHtMYWJlbGVkU2VsZWN0KFxyXG4gICAgICAgICdjb2xvci1wcm9maWxlLXNlbGVjdCcsXHJcbiAgICAgICAgbGFiZWxlZENvbG9yUHJvZmlsZXMsXHJcbiAgICAgICAgY29sb3JQcm9maWxlVHlwZSxcclxuICAgICAgICBvbkNvbG9yUHJvZmlsZUNoYW5nZS5iaW5kKG51bGwsIGNvbnZlcnNpb25QYXJhbWV0ZXJzKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHByZT4ke0pTT04uc3RyaW5naWZ5KGNvbnZlcnNpb25QYXJhbWV0ZXJzLCBudWxsLCAyKX08L3ByZT5cclxuICBgO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyQm94LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==