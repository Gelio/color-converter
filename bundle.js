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
exports.push([module.i, ".original-image-wrapper {\n  margin: 1em auto;\n  width: 800px;\n  height: 400px; }\n  .original-image-wrapper img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n    max-height: 100%;\n    height: auto; }\n", ""]);

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
      <div>${partialResult.label}</div>
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
exports.push([module.i, ".results {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around; }\n\n.result {\n  margin: 0.5em; }\n  .result img {\n    max-width: 100%;\n    max-height: 100%;\n    height: auto; }\n", ""]);

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
            X: result.get(0, 0) * 255,
            Y: result.get(1, 0) * 255,
            Z: result.get(2, 0) * 255
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzM4MzEwMTU0NWI3YzU0NzViYTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvZWFzeS1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0h5cGVyQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL21hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9hYnN0cmFjdE1hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvbG9yU3BhY2VUeXBlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL3Bvb3JseWZpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uRmluaXNoZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9sdS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9zdmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9jbGFzc2VzL01lZ2F0cm9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvSW50ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2h5cGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvSHlwZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvblN0YXJ0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlQ29sb3JQcm9maWxlVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VJbGx1bWluYW50VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Db2xvclByb2ZpbGVUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvSWxsdW1pbmFudFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiZWxlZFNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbXV0YXRlTWFwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDFELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDJELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3FyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz80NDQ2Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2ZlYXR1cmVzLWRldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL0VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci93aXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbWFnZVBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tYmluZVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5wdXRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9tZXJnZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9vdXRwdXRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9GaWxlVG9JbWFnZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Db2xvclNwYWNlUGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3M/NGVjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnNjc3M/OGZiOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXN1bHRzRGlzcGxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1N0YXJ0Q29udmVyc2lvbkJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvSFNWQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9IU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvTGFiQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9MYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1lDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1hZWkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9zeW1ib2wtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktcmVzY2FsZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1heC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1pbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvdHJhbnNwb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9zdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3Jvd1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9jb2x1bW5TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvZmxpcENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGVjb21wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvZXZkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL2Nob2xlc2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbWFnZURhdGFDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0NvbnZlcnNpb25QYXJhbWV0ZXJCb3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFiUGFyYW1ldGVyQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7O0FBRUE7QUFDeUI7QUFDekI7QUFDOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRThDO0FBQ1o7O0FBRXJCO0FBQ3NCO0FBQ0E7O0FBRVo7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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dUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ3FDO0FBQ3BCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDak9BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxxREFBcUQsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJxQjtBQUNSO0FBQ2I7QUFLQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVBLHFDQUE0RDtBQUVuRCx5QkFGYSxlQUFjLENBRWI7Ozs7Ozs7QUNGdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJB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QUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDbEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDcEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDckYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDdEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDcEYsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUs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O0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtB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TSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0saUJBQWlCLEdBQUcsMENBQXVCLENBQUMsSUFBSSxDQUNwRCxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsS0FBSyxlQUFlLENBQ2xFLENBQUM7SUFDRixFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELG1CQUFRLENBQUMsUUFBUSxDQUFDLCtDQUFzQixDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0YsQ0FBQztBQUVELHlCQUNFLGNBQThCLEVBQzlCLGdCQUFrQyxFQUNsQyxvQkFBMEM7SUFFMUMsTUFBTSxDQUFDLFVBQUksRUFBRTs7O1FBR1AsNkJBQWEsQ0FDYix3QkFBd0IsRUFDeEIsbUNBQWtCLEVBQ2xCLGNBQWMsRUFDZCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUMvRDs7Ozs7UUFLQyw2QkFBYSxDQUNiLHNCQUFzQixFQUN0Qix1Q0FBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FDdEQ7OztXQUdJLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUNyRCxDQUFDO0FBQ0osQ0FBQztBQTVCRCwwQ0E0QkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMzODMxMDE1NDViN2M1NDc1YmE1IiwiaW1wb3J0IEFic3RyYWN0TWF0cml4IGZyb20gJy4uL2Fic3RyYWN0TWF0cml4JztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCgpIHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvd3MsIGNvbHVtbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkge1xuICAgICAgICByZXR1cm4gTWF0cml4O1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiEgKGMpIEFuZHJlYSBHaWFtbWFyY2hpIChJU0MpICovXG5cbmltcG9ydCBNZWdhdHJvbiBmcm9tICcuL2NsYXNzZXMvTWVnYXRyb24uanMnO1xuaW1wb3J0IENvbXBvbmVudCwge3NldHVwfSBmcm9tICcuL2NsYXNzZXMvQ29tcG9uZW50LmpzJztcbmltcG9ydCBJbnRlbnQgZnJvbSAnLi9vYmplY3RzL0ludGVudC5qcyc7XG5pbXBvcnQgd2lyZSwge2NvbnRlbnQsIHdlYWtseX0gZnJvbSAnLi9oeXBlci93aXJlLmpzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9oeXBlci9yZW5kZXIuanMnO1xuXG4vLyBhbGwgZnVuY3Rpb25zIGFyZSBzZWxmIGJvdW5kIHRvIHRoZSByaWdodCBjb250ZXh0XG4vLyB5b3UgY2FuIGRvIHRoZSBmb2xsb3dpbmdcbi8vIGNvbnN0IHtiaW5kLCB3aXJlfSA9IGh5cGVySFRNTDtcbi8vIGFuZCB1c2UgdGhlbSByaWdodCBhd2F5OiBiaW5kKG5vZGUpYGhlbGxvIWA7XG5jb25zdCBiaW5kID0gY29udGV4dCA9PiByZW5kZXIuYmluZChjb250ZXh0KTtcbmNvbnN0IGRlZmluZSA9IEludGVudC5kZWZpbmU7XG5cbmh5cGVyLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmh5cGVyLmJpbmQgPSBiaW5kO1xuaHlwZXIuZGVmaW5lID0gZGVmaW5lO1xuaHlwZXIuaHlwZXIgPSBoeXBlcjtcbmh5cGVyLndpcmUgPSB3aXJlO1xuXG4vLyBpdCBpcyBwb3NzaWJsZSB0byBkZWZpbmUgYSBkaWZmZXJlbnQgZW5naW5lXG4vLyB0byByZXNvbHZlIG5vZGVzIGRpZmZpbmcuXG4vLyBUaGUgZW5naW5lIG11c3QgcHJvdmlkZSBhbiB1cGRhdGUgbWV0aG9kXG4vLyBjYXBhYmxlIG9mIG11dGF0aW5nIGxpdmVOb2RlcyBjb2xsZWN0aW9uXG4vLyBhbmQgdGhlIHJlbGF0ZWQgRE9NLlxuLy8gU2VlIGh5cGVyaHRtbC1tYWppbmJ1dSB0byBrbm93IG1vcmVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShoeXBlciwgJ2VuZ2luZScsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIE1lZ2F0cm9uLmVuZ2luZTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoZW5naW5lKSB7XG4gICAgTWVnYXRyb24uZW5naW5lID0gZW5naW5lO1xuICB9XG59KTtcblxuLy8gdGhlIHdpcmUgY29udGVudCBpcyB0aGUgbGF6eSBkZWZpbmVkXG4vLyBodG1sIG9yIHN2ZyBwcm9wZXJ0eSBvZiBlYWNoIGh5cGVyLkNvbXBvbmVudFxuc2V0dXAoY29udGVudCk7XG5cbi8vIGV2ZXJ5dGhpbmcgaXMgZXhwb3J0ZWQgZGlyZWN0bHkgb3IgdGhyb3VnaCB0aGVcbi8vIGh5cGVySFRNTCBjYWxsYmFjaywgd2hlbiB1c2VkIGFzIHRvcCBsZXZlbCBzY3JpcHRcbmV4cG9ydCB7Q29tcG9uZW50LCBiaW5kLCBkZWZpbmUsIGh5cGVyLCB3aXJlfTtcblxuLy8gYnkgZGVmYXVsdCwgaHlwZXJIVE1MIGlzIGEgc21hcnQgZnVuY3Rpb25cbi8vIHRoYXQgXCJtYWdpY2FsbHlcIiB1bmRlcnN0YW5kcyB3aGF0J3MgdGhlIGJlc3Rcbi8vIHRoaW5nIHRvIGRvIHdpdGggcGFzc2VkIGFyZ3VtZW50c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwZXIoSFRNTCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgP1xuICAgIChIVE1MID09IG51bGwgP1xuICAgICAgY29udGVudCgnaHRtbCcpIDpcbiAgICAgICh0eXBlb2YgSFRNTCA9PT0gJ3N0cmluZycgP1xuICAgICAgICB3aXJlKG51bGwsIEhUTUwpIDpcbiAgICAgICAgKCdyYXcnIGluIEhUTUwgP1xuICAgICAgICAgIGNvbnRlbnQoJ2h0bWwnKShIVE1MKSA6XG4gICAgICAgICAgKCdub2RlVHlwZScgaW4gSFRNTCA/XG4gICAgICAgICAgICByZW5kZXIuYmluZChIVE1MKSA6XG4gICAgICAgICAgICB3ZWFrbHkoSFRNTCwgJ2h0bWwnKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSkgOlxuICAgICgncmF3JyBpbiBIVE1MID9cbiAgICAgIGNvbnRlbnQoJ2h0bWwnKSA6IHdpcmVcbiAgICApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZhdWx0LCBkZWZhdWx0IGFzIE1hdHJpeH0gZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFic3RyYWN0TWF0cml4fSBmcm9tICcuL2Fic3RyYWN0TWF0cml4JztcblxuZXhwb3J0IHt3cmFwfSBmcm9tICcuL3dyYXAvd3JhcCc7XG5leHBvcnQge2RlZmF1bHQgYXMgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuL3dyYXAvV3JhcHBlck1hdHJpeDJEJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBXcmFwcGVyTWF0cml4MUR9IGZyb20gJy4vd3JhcC9XcmFwcGVyTWF0cml4MUQnO1xuXG5leHBvcnQge3NvbHZlLCBpbnZlcnNlfSBmcm9tICcuL2RlY29tcG9zaXRpb25zJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBTVkR9IGZyb20gJy4vZGMvc3ZkLmpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBFaWdlbnZhbHVlRGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBFVkR9IGZyb20gJy4vZGMvZXZkLmpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBDaG9sZXNreURlY29tcG9zaXRpb24sIGRlZmF1bHQgYXMgQ0hPfSBmcm9tICcuL2RjL2Nob2xlc2t5LmpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMdURlY29tcG9zaXRpb24sIGRlZmF1bHQgYXMgTFV9IGZyb20gJy4vZGMvbHUuanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFFyRGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBRUn0gZnJvbSAnLi9kYy9xci5qcyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBnbG9iYWwgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcblxuLy8gTm9kZS5DT05TVEFOVFNcbi8vICdjYXVzZSBzb21lIGVuZ2luZSBoYXMgbm8gZ2xvYmFsIE5vZGUgZGVmaW5lZFxuLy8gKGkuZS4gTm9kZSwgTmF0aXZlU2NyaXB0LCBiYXNpY0hUTUwgLi4uIClcbmV4cG9ydCBjb25zdCBFTEVNRU5UX05PREUgPSAxO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9OT0RFID0gMjtcbmV4cG9ydCBjb25zdCBURVhUX05PREUgPSAzO1xuZXhwb3J0IGNvbnN0IENPTU1FTlRfTk9ERSA9IDg7XG5leHBvcnQgY29uc3QgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA9IDExO1xuXG4vLyBTVkcgcmVsYXRlZCBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBPV05FUl9TVkdfRUxFTUVOVCA9ICdvd25lclNWR0VsZW1lbnQnO1xuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4vLyBDdXN0b20gRWxlbWVudHMgLyBNdXRhdGlvbk9ic2VydmVyIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IENPTk5FQ1RFRCA9ICdjb25uZWN0ZWQnO1xuZXhwb3J0IGNvbnN0IERJU0NPTk5FQ1RFRCA9ICdkaXMnICsgQ09OTkVDVEVEO1xuXG4vLyBoeXBlckhUTUwgcmVsYXRlZCBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBFWFBBTkRPID0gJ19oeXBlcjogJztcbmV4cG9ydCBjb25zdCBTSE9VTERfVVNFX1RFWFRfQ09OVEVOVCA9IC9ec3R5bGV8dGV4dGFyZWEkL2k7XG5leHBvcnQgY29uc3QgVUlEID0gRVhQQU5ETyArICgoTWF0aC5yYW5kb20oKSAqIG5ldyBEYXRlKSB8IDApICsgJzsnO1xuZXhwb3J0IGNvbnN0IFVJREMgPSAnPCEtLScgKyBVSUQgKyAnLS0+JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgaW5wdXRSZWR1Y2VyLCBJbnB1dFN0YXRlIH0gZnJvbSAncmVkdWNlcnMvaW5wdXRSZWR1Y2VyJztcclxuaW1wb3J0IHsgb3V0cHV0UmVkdWNlciwgT3V0cHV0U3RhdGUgfSBmcm9tICdyZWR1Y2Vycy9vdXRwdXRSZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG4gIGlucHV0OiBJbnB1dFN0YXRlO1xyXG4gIG91dHB1dDogT3V0cHV0U3RhdGU7XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8QXBwU3RhdGU+KHtcclxuICBpbnB1dDogaW5wdXRSZWR1Y2VyLFxyXG4gIG91dHB1dDogb3V0cHV0UmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBTdG9yZSA9IGNyZWF0ZVN0b3JlPEFwcFN0YXRlPihcclxuICByZWR1Y2VyLFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FwcFN0b3JlLnRzIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgYSByb3cgaW5kZXggaXMgbm90IG91dCBvZiBib3VuZHNcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtib29sZWFufSBbb3V0ZXJdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jvd0luZGV4KG1hdHJpeCwgaW5kZXgsIG91dGVyKSB7XG4gICAgdmFyIG1heCA9IG91dGVyID8gbWF0cml4LnJvd3MgOiBtYXRyaXgucm93cyAtIDE7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IG1heCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignUm93IGluZGV4IG91dCBvZiByYW5nZScpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCBhIGNvbHVtbiBpbmRleCBpcyBub3Qgb3V0IG9mIGJvdW5kc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvdXRlcl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sdW1uSW5kZXgobWF0cml4LCBpbmRleCwgb3V0ZXIpIHtcbiAgICB2YXIgbWF4ID0gb3V0ZXIgPyBtYXRyaXguY29sdW1ucyA6IG1hdHJpeC5jb2x1bW5zIC0gMTtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbWF4KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb2x1bW4gaW5kZXggb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IHRoZSBwcm92aWRlZCB2ZWN0b3IgaXMgYW4gYXJyYXkgd2l0aCB0aGUgcmlnaHQgbGVuZ3RoXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jvd1ZlY3RvcihtYXRyaXgsIHZlY3Rvcikge1xuICAgIGlmICh2ZWN0b3IudG8xREFycmF5KSB7XG4gICAgICAgIHZlY3RvciA9IHZlY3Rvci50bzFEQXJyYXkoKTtcbiAgICB9XG4gICAgaWYgKHZlY3Rvci5sZW5ndGggIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd2ZWN0b3Igc2l6ZSBtdXN0IGJlIHRoZSBzYW1lIGFzIHRoZSBudW1iZXIgb2YgY29sdW1ucycpO1xuICAgIH1cbiAgICByZXR1cm4gdmVjdG9yO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IHRoZSBwcm92aWRlZCB2ZWN0b3IgaXMgYW4gYXJyYXkgd2l0aCB0aGUgcmlnaHQgbGVuZ3RoXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbHVtblZlY3RvcihtYXRyaXgsIHZlY3Rvcikge1xuICAgIGlmICh2ZWN0b3IudG8xREFycmF5KSB7XG4gICAgICAgIHZlY3RvciA9IHZlY3Rvci50bzFEQXJyYXkoKTtcbiAgICB9XG4gICAgaWYgKHZlY3Rvci5sZW5ndGggIT09IG1hdHJpeC5yb3dzKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd2ZWN0b3Igc2l6ZSBtdXN0IGJlIHRoZSBzYW1lIGFzIHRoZSBudW1iZXIgb2Ygcm93cycpO1xuICAgIH1cbiAgICByZXR1cm4gdmVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdzogY2hlY2tSb3dJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcyksXG4gICAgICAgIGNvbHVtbjogY2hlY2tDb2x1bW5JbmRpY2VzKG1hdHJpeCwgY29sdW1uSW5kaWNlcylcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSb3dJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcykge1xuICAgIGlmICh0eXBlb2Ygcm93SW5kaWNlcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5leHBlY3RlZCB0eXBlIGZvciByb3cgaW5kaWNlcycpO1xuICAgIH1cblxuICAgIHZhciByb3dPdXQgPSByb3dJbmRpY2VzLnNvbWUociA9PiB7XG4gICAgICAgIHJldHVybiByIDwgMCB8fCByID49IG1hdHJpeC5yb3dzO1xuXG4gICAgfSk7XG5cbiAgICBpZiAocm93T3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdyb3cgaW5kaWNlcyBhcmUgb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvd0luZGljZXMpKSByb3dJbmRpY2VzID0gQXJyYXkuZnJvbShyb3dJbmRpY2VzKTtcblxuICAgIHJldHVybiByb3dJbmRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb2x1bW5JbmRpY2VzKG1hdHJpeCwgY29sdW1uSW5kaWNlcykge1xuICAgIGlmICh0eXBlb2YgY29sdW1uSW5kaWNlcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5leHBlY3RlZCB0eXBlIGZvciBjb2x1bW4gaW5kaWNlcycpO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5PdXQgPSBjb2x1bW5JbmRpY2VzLnNvbWUoYyA9PiB7XG4gICAgICAgIHJldHVybiBjIDwgMCB8fCBjID49IG1hdHJpeC5jb2x1bW5zO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbHVtbk91dCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignY29sdW1uIGluZGljZXMgYXJlIG91dCBvZiByYW5nZScpO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29sdW1uSW5kaWNlcykpIGNvbHVtbkluZGljZXMgPSBBcnJheS5mcm9tKGNvbHVtbkluZGljZXMpO1xuXG4gICAgcmV0dXJuIGNvbHVtbkluZGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKG1hdHJpeCwgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSA1KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHR5cGUnKTtcbiAgICB2YXIgbm90QWxsTnVtYmVycyA9IEFycmF5LmZyb20oYXJndW1lbnRzKS5zbGljZSgxKS5zb21lKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmcgIT09ICdudW1iZXInO1xuICAgIH0pO1xuICAgIGlmIChub3RBbGxOdW1iZXJzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHR5cGUnKTtcbiAgICBpZiAoc3RhcnRSb3cgPiBlbmRSb3cgfHwgc3RhcnRDb2x1bW4gPiBlbmRDb2x1bW4gfHwgc3RhcnRSb3cgPCAwIHx8IHN0YXJ0Um93ID49IG1hdHJpeC5yb3dzIHx8IGVuZFJvdyA8IDAgfHwgZW5kUm93ID49IG1hdHJpeC5yb3dzIHx8IHN0YXJ0Q29sdW1uIDwgMCB8fCBzdGFydENvbHVtbiA+PSBtYXRyaXguY29sdW1ucyB8fCBlbmRDb2x1bW4gPCAwIHx8IGVuZENvbHVtbiA+PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignU3VibWF0cml4IGluZGljZXMgYXJlIG91dCBvZiByYW5nZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlKGZyb20sIHRvKSB7XG4gICAgdmFyIGFyciA9IG5ldyBBcnJheSh0byAtIGZyb20gKyAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJbaV0gPSBmcm9tICsgaTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5Um93KG1hdHJpeCkge1xuICAgIHZhciBzdW0gPSBNYXRyaXguemVyb3MobWF0cml4LnJvd3MsIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7ICsraSkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyArK2opIHtcbiAgICAgICAgICAgIHN1bS5zZXQoaSwgMCwgc3VtLmdldChpLCAwKSArIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeUNvbHVtbihtYXRyaXgpIHtcbiAgICB2YXIgc3VtID0gTWF0cml4Lnplcm9zKDEsIG1hdHJpeC5jb2x1bW5zKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyArK2kpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgKytqKSB7XG4gICAgICAgICAgICBzdW0uc2V0KDAsIGosIHN1bS5nZXQoMCwgaikgKyBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQWxsKG1hdHJpeCkge1xuICAgIHZhciB2ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB2ICs9IG1hdHJpeC5nZXQoaSwgaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgZ2xvYmFsLFxuICBPV05FUl9TVkdfRUxFTUVOVCxcbiAgU1ZHX05BTUVTUEFDRSxcbiAgVUlELFxuICBVSURDXG59IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuaW1wb3J0IHtcbiAgaGFzQXBwZW5kLFxuICBoYXNDb250ZW50LFxuICBoYXNEb29tZWRDbG9uZU5vZGUsXG4gIGhhc0ltcG9ydE5vZGVcbn0gZnJvbSAnLi9mZWF0dXJlcy1kZXRlY3Rpb24uanMnO1xuXG5pbXBvcnQge2NyZWF0ZSwgZG9jLCBmcmFnbWVudH0gZnJvbSAnLi9lYXN5LWRvbS5qcyc7XG5cbi8vIGFwcGVuZHMgYW4gYXJyYXkgb2Ygbm9kZXNcbi8vIHRvIGEgZ2VuZXJpYyBub2RlL2ZyYWdtZW50XG4vLyBXaGVuIGF2YWlsYWJsZSwgdXNlcyBhcHBlbmQgcGFzc2luZyBhbGwgYXJndW1lbnRzIGF0IG9uY2Vcbi8vIGhvcGluZyB0aGF0J3Mgc29tZWhvdyBmYXN0ZXIsIGV2ZW4gaWYgYXBwZW5kIGhhcyBtb3JlIGNoZWNrcyBvbiB0eXBlXG5leHBvcnQgY29uc3QgYXBwZW5kID0gaGFzQXBwZW5kID9cbiAgKG5vZGUsIGNoaWxkTm9kZXMpID0+IHtcbiAgICBub2RlLmFwcGVuZC5hcHBseShub2RlLCBjaGlsZE5vZGVzKTtcbiAgfSA6XG4gIChub2RlLCBjaGlsZE5vZGVzKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGVzW2ldKTtcbiAgICB9XG4gIH07XG5cbi8vIHJlbW92ZSBjb21tZW50cyBwYXJ0cyBmcm9tIGF0dHJpYnV0ZXMgdG8gYXZvaWQgaXNzdWVzXG4vLyB3aXRoIGVpdGhlciBvbGQgYnJvd3NlcnMgb3IgU1ZHIGVsZW1lbnRzXG4vLyBleHBvcnQgY29uc3QgY2xlYW5BdHRyaWJ1dGVzID0gaHRtbCA9PiBodG1sLnJlcGxhY2Uobm8sIGNvbW1lbnRzKTtcbmNvbnN0IGF0dHJOYW1lID0gJ1teXFxcXFNdK1teIFxcXFxmXFxcXG5cXFxcclxcXFx0XFxcXC8+XCJcXCc9XSsnO1xuY29uc3Qgbm8gPSBuZXcgUmVnRXhwKFxuICAnKDxbYS16XStbYS16MC05Ol8tXSopKCg/OicgK1xuICAgIGF0dHJOYW1lICtcbiAgJyg/Oj0oPzpcXCcuKj9cXCd8XCIuKj9cInw8Lis/PnxcXFxcUyspKT8pKykoW15cXFxcU10qLz8+KScsXG4gICdnaSdcbik7XG5jb25zdCBmaW5kQXR0cmlidXRlcyA9IG5ldyBSZWdFeHAoJygnICsgYXR0ck5hbWUgKyAnPSkoW1xcJ1wiXT8pJyArIFVJREMgKyAnXFxcXDInLCAnZ2knKTtcbmNvbnN0IGNvbW1lbnRzID0gKCQwLCAkMSwgJDIsICQzKSA9PlxuICAkMSArICQyLnJlcGxhY2UoZmluZEF0dHJpYnV0ZXMsIHJlcGxhY2VBdHRyaWJ1dGVzKSArICQzO1xuY29uc3QgcmVwbGFjZUF0dHJpYnV0ZXMgPSAoJDAsICQxLCAkMikgPT4gJDEgKyAoJDIgfHwgJ1wiJykgKyBVSUQgKyAoJDIgfHwgJ1wiJyk7XG5cbi8vIGdpdmVuIGEgbm9kZSBhbmQgYSBnZW5lcmljIEhUTUwgY29udGVudCxcbi8vIGNyZWF0ZSBlaXRoZXIgYW4gU1ZHIG9yIGFuIEhUTUwgZnJhZ21lbnRcbi8vIHdoZXJlIHN1Y2ggY29udGVudCB3aWxsIGJlIGluamVjdGVkXG5leHBvcnQgY29uc3QgY3JlYXRlRnJhZ21lbnQgPSAobm9kZSwgaHRtbCkgPT5cbiAgKE9XTkVSX1NWR19FTEVNRU5UIGluIG5vZGUgP1xuICAgIFNWR0ZyYWdtZW50IDpcbiAgICBIVE1MRnJhZ21lbnRcbiAgKShub2RlLCBodG1sLnJlcGxhY2Uobm8sIGNvbW1lbnRzKSk7XG5cbi8vIElFL0VkZ2Ugc2hlbmFuaWdhbnMgcHJvb2YgY2xvbmVOb2RlXG4vLyBpdCBnb2VzIHRocm91Z2ggYWxsIG5vZGVzIG1hbnVhbGx5XG4vLyBpbnN0ZWFkIG9mIHJlbHlpbmcgdGhlIGVuZ2luZSB0byBzdWRkZW5seVxuLy8gbWVyZ2Ugbm9kZXMgdG9nZXRoZXJcbmNvbnN0IGNsb25lTm9kZSA9IGhhc0Rvb21lZENsb25lTm9kZSA/XG4gIG5vZGUgPT4ge1xuICAgIGNvbnN0IGNsb25lID0gbm9kZS5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzIHx8XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiBleGNlc3Mgb2YgY2F1dGlvblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBzb21lIG5vZGUsIGluIElFLCBtaWdodCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIGNoaWxkTm9kZXMgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmYWxsYmFjayBlbnN1cmUgd29ya2luZyBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaW4gb2xkZXIgSUUgd2l0aG91dCBjb21wcm9taXNpbmcgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvciBhbnkgb3RoZXIgYnJvd3Nlci9lbmdpbmUgaW52b2x2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICBbXTtcbiAgICBjb25zdCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGROb2Rlc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG4gIH0gOlxuICAvLyB0aGUgZm9sbG93aW5nIGlnbm9yZSBpcyBkdWUgY29kZS1jb3ZlcmFnZVxuICAvLyBjb21iaW5hdGlvbiBvZiBub3QgaGF2aW5nIGRvY3VtZW50LmltcG9ydE5vZGVcbiAgLy8gYnV0IGhhdmluZyBhIHdvcmtpbmcgbm9kZS5jbG9uZU5vZGUuXG4gIC8vIFRoaXMgc2hlbmFyaW8gaXMgY29tbW9uIG9uIG9sZGVyIEFuZHJvaWQvV2ViS2l0IGJyb3dzZXJzXG4gIC8vIGJ1dCBiYXNpY0hUTUwgaGVyZSB0ZXN0cyBqdXN0IHR3byBtYWpvciBjYXNlczpcbiAgLy8gd2l0aCBkb2N1bWVudC5pbXBvcnROb2RlIG9yIHdpdGggYnJva2VuIGNsb25lTm9kZS5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgbm9kZSA9PiBub2RlLmNsb25lTm9kZSh0cnVlKTtcblxuLy8gdXNlZCB0byBpbXBvcnQgaHRtbCBpbnRvIGZyYWdtZW50c1xuZXhwb3J0IGNvbnN0IGltcG9ydE5vZGUgPSBoYXNJbXBvcnROb2RlID9cbiAgKGRvYywgbm9kZSkgPT4gZG9jLmltcG9ydE5vZGUobm9kZSwgdHJ1ZSkgOlxuICAoZG9jLCBub2RlKSA9PiBjbG9uZU5vZGUobm9kZSlcblxuLy8ganVzdCByZWN5Y2xpbmcgYSBvbmUtb2ZmIGFycmF5IHRvIHVzZSBzbGljZS9zcGxpY2Vcbi8vIGluIGV2ZXJ5IG5lZWRlZCBwbGFjZVxuY29uc3Qge3B1c2gsIHNsaWNlLCBzcGxpY2UsIHVuc2hpZnR9ID0gW107XG5leHBvcnQge3B1c2gsIHNsaWNlLCBzcGxpY2UsIHVuc2hpZnR9O1xuXG4vLyBsYXp5IGV2YWx1YXRlZCwgcmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aXR5XG4vLyBvZiBhIHRlbXBsYXRlIGxpdGVyYWwsIGFzIHRlbXBhbHRlIGxpdGVyYWwgaXRzZWxmLlxuLy8gQnkgZGVmYXVsdCwgRVMyMDE1IHRlbXBsYXRlIGxpdGVyYWxzIGFyZSB1bmlxdWVcbi8vIHRhZ2BhJHsxfXpgID09PSB0YWdgYSR7Mn16YFxuLy8gZXZlbiBpZiBpbnRlcnBvbGF0ZWQgdmFsdWVzIGFyZSBkaWZmZXJlbnRcbi8vIHRoZSB0ZW1wbGF0ZSBjaHVua3MgYXJlIGluIGEgZnJvemVuIEFycmF5XG4vLyB0aGF0IGlzIGlkZW50aWNhbCBlYWNoIHRpbWUgeW91IHVzZSB0aGUgc2FtZVxuLy8gbGl0ZXJhbCB0byByZXByZXNlbnQgc2FtZSBzdGF0aWMgY29udGVudFxuLy8gYXJvdW5kIGl0cyBvd24gaW50ZXJwb2xhdGlvbnMuXG5leHBvcnQgY29uc3QgdW5pcXVlID0gdGVtcGxhdGUgPT4gVEwodGVtcGxhdGUpO1xuXG4vLyBUTCByZXR1cm5zIGEgdW5pcXVlIHZlcnNpb24gb2YgdGhlIHRlbXBsYXRlXG4vLyBpdCBuZWVkcyBsYXp5IGZlYXR1cmUgZGV0ZWN0aW9uXG4vLyAoY2Fubm90IHRydXN0IGxpdGVyYWxzIHdpdGggdHJhbnNwaWxlZCBjb2RlKVxubGV0IFRMID0gdGVtcGxhdGUgPT4ge1xuICBpZiAoXG4gICAgLy8gVHlwZVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFscyBhcmUgbm90IHN0YW5kYXJkXG4gICAgdGVtcGxhdGUucHJvcGVydHlJc0VudW1lcmFibGUoJ3JhdycpIHx8XG4gICAgKFxuICAgICAgLy8gRmlyZWZveCA8IDU1IGhhcyBub3Qgc3RhbmRhcmQgaW1wbGVtZW50YXRpb24gbmVpdGhlclxuICAgICAgL0ZpcmVmb3hcXC8oXFxkKykvLnRlc3QoKGdsb2JhbC5uYXZpZ2F0b3IgfHwge30pLnVzZXJBZ2VudCkgJiZcbiAgICAgIHBhcnNlRmxvYXQoUmVnRXhwLiQxKSA8IDU1XG4gICAgKVxuICApIHtcbiAgICAvLyBpbiB0aGVzZSBjYXNlcywgYWRkcmVzcyB0ZW1wbGF0ZXMgb25jZVxuICAgIGNvbnN0IHRlbXBsYXRlT2JqZWN0cyA9IHt9O1xuICAgIC8vIGJ1dCBhbHdheXMgcmV0dXJuIHRoZSBzYW1lIHRlbXBsYXRlXG4gICAgVEwgPSB0ZW1wbGF0ZSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSAnXycgKyB0ZW1wbGF0ZS5qb2luKFVJRCk7XG4gICAgICByZXR1cm4gdGVtcGxhdGVPYmplY3RzW2tleV0gfHwgKFxuICAgICAgICB0ZW1wbGF0ZU9iamVjdHNba2V5XSA9IHRlbXBsYXRlXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gbWFrZSBUTCBhbiBpZGVudGl0eSBsaWtlIGZ1bmN0aW9uXG4gICAgVEwgPSB0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZTtcbiAgfVxuICByZXR1cm4gVEwodGVtcGxhdGUpO1xufTtcblxuLy8gY3JlYXRlIGRvY3VtZW50IGZyYWdtZW50cyB2aWEgbmF0aXZlIHRlbXBsYXRlXG4vLyB3aXRoIGEgZmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgd29uJ3QgYmUgYWJsZVxuLy8gdG8gZGVhbCB3aXRoIHNvbWUgaW5qZWN0ZWQgZWxlbWVudCBzdWNoIDx0ZD4gb3Igb3RoZXJzXG5jb25zdCBIVE1MRnJhZ21lbnQgPSBoYXNDb250ZW50ID9cbiAgKG5vZGUsIGh0bWwpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUobm9kZSwgJ3RlbXBsYXRlJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jb250ZW50O1xuICB9IDpcbiAgKG5vZGUsIGh0bWwpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUobm9kZSwgJ3RlbXBsYXRlJyk7XG4gICAgY29uc3QgY29udGVudCA9IGZyYWdtZW50KG5vZGUpO1xuICAgIGlmICgvXlteXFxTXSo/PChjb2woPzpncm91cCk/fHQoPzpoZWFkfGJvZHl8Zm9vdHxyfGR8aCkpL2kudGVzdChodG1sKSkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBSZWdFeHAuJDE7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzx0YWJsZT4nICsgaHRtbCArICc8L3RhYmxlPic7XG4gICAgICBhcHBlbmQoY29udGVudCwgc2xpY2UuY2FsbChjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICBhcHBlbmQoY29udGVudCwgc2xpY2UuY2FsbChjb250YWluZXIuY2hpbGROb2RlcykpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuLy8gY3JlYXRlcyBTVkcgZnJhZ21lbnQgd2l0aCBhIGZhbGxiYWNrIGZvciBJRSB0aGF0IG5lZWRzIFNWR1xuLy8gd2l0aGluIHRoZSBIVE1MIGNvbnRlbnRcbmNvbnN0IFNWR0ZyYWdtZW50ID0gaGFzQ29udGVudCA/XG4gIChub2RlLCBodG1sKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGZyYWdtZW50KG5vZGUpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvYyhub2RlKS5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRSwgJ3N2ZycpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICAgIGFwcGVuZChjb250ZW50LCBzbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZE5vZGVzKSk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0gOlxuICAobm9kZSwgaHRtbCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmcmFnbWVudChub2RlKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUobm9kZSwgJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cIicgKyBTVkdfTkFNRVNQQUNFICsgJ1wiPicgKyBodG1sICsgJzwvc3ZnPic7XG4gICAgYXBwZW5kKGNvbnRlbnQsIHNsaWNlLmNhbGwoY29udGFpbmVyLmZpcnN0Q2hpbGQuY2hpbGROb2RlcykpO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9zaGFyZWQvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdGhlc2UgYXJlIHRpbnkgaGVscGVycyB0byBzaW1wbGlmeSBtb3N0IGNvbW1vbiBvcGVyYXRpb25zIG5lZWRlZCBoZXJlXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKG5vZGUsIHR5cGUpID0+IGRvYyhub2RlKS5jcmVhdGVFbGVtZW50KHR5cGUpO1xuZXhwb3J0IGNvbnN0IGRvYyA9IG5vZGUgPT4gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSBub2RlID0+IGRvYyhub2RlKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5leHBvcnQgY29uc3QgdGV4dCA9IChub2RlLCB0ZXh0KSA9PiBkb2Mobm9kZSkuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC9lYXN5LWRvbS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcbmltcG9ydCB7IFVuc3Vic2NyaWJlIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUsIGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBIeXBlckNvbXBvbmVudCB9IGZyb20gJ3V0aWxzL0h5cGVyQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZSBleHRlbmRzIERpY3Rpb25hcnk+IGV4dGVuZHMgSHlwZXJDb21wb25lbnQ8XHJcbiAgQ29udGFpbmVyU3RhdGVcclxuPiB7XHJcbiAgcHJpdmF0ZSBzdG9yZVVuc3Vic2NyaWJlQ2FsbGJhY2s6IFVuc3Vic2NyaWJlIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5vblN0YXRlVXBkYXRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uY29ubmVjdGVkKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1N0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25kaXNjb25uZWN0ZWQoKSB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9TdG9yZSgpIHtcclxuICAgIHRoaXMuc3RvcmVVbnN1YnNjcmliZUNhbGxiYWNrID0gYXBwU3RvcmUuc3Vic2NyaWJlKHRoaXMub25TdGF0ZVVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1bnN1YnNjcmliZUZyb21TdG9yZSgpIHtcclxuICAgIGlmICh0aGlzLnN0b3JlVW5zdWJzY3JpYmVDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLnN0b3JlVW5zdWJzY3JpYmVDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZTtcclxuXHJcbiAgcHJpdmF0ZSBvblN0YXRlVXBkYXRlKGlnbm9yZVJlbmRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBuZXdDb250YWluZXJTdGF0ZSA9IHRoaXMubWFwQXBwU3RhdGVUb0NvbnRhaW5lclN0YXRlKGFwcFN0b3JlLmdldFN0YXRlKCkpO1xyXG4gICAgY29uc3QgcmVuZGVyTmVlZGVkID0gdGhpcy5wYXRjaFN0YXRlKG5ld0NvbnRhaW5lclN0YXRlKTtcclxuXHJcbiAgICBpZiAocmVuZGVyTmVlZGVkICYmICFpZ25vcmVSZW5kZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGF0Y2hTdGF0ZShuZXdTdGF0ZTogUGFydGlhbDxDb250YWluZXJTdGF0ZT4pOiBib29sZWFuIHtcclxuICAgIGxldCByZW5kZXJOZWVkZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdTdGF0ZVtrZXldO1xyXG5cclxuICAgICAgaWYgKHByZXZpb3VzVmFsdWUgPT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3RhdGVba2V5XSA9IG5ld1ZhbHVlO1xyXG4gICAgICByZW5kZXJOZWVkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZW5kZXJOZWVkZWQ7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3V0aWxzL0h5cGVyQ29udGFpbmVyLnRzIiwiaW1wb3J0ICcuL3N5bWJvbC1zcGVjaWVzJztcbmltcG9ydCBBYnN0cmFjdE1hdHJpeCBmcm9tICcuL2Fic3RyYWN0TWF0cml4JztcbmltcG9ydCB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCxcbiAgICBjaGVja0NvbHVtblZlY3RvcixcbiAgICBjaGVja1Jvd0luZGV4LFxuICAgIGNoZWNrUm93VmVjdG9yXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCBleHRlbmRzIEFic3RyYWN0TWF0cml4KEFycmF5KSB7XG4gICAgY29uc3RydWN0b3IoblJvd3MsIG5Db2x1bW5zKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgblJvd3MgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KG5Sb3dzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTWF0cml4LmlzTWF0cml4KG5Sb3dzKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5Sb3dzLmNsb25lKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihuUm93cykgJiYgblJvd3MgPiAwKSB7IC8vIENyZWF0ZSBhbiBlbXB0eSBtYXRyaXhcbiAgICAgICAgICAgIHN1cGVyKG5Sb3dzKTtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG5Db2x1bW5zKSAmJiBuQ29sdW1ucyA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgblJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gbmV3IEFycmF5KG5Db2x1bW5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25Db2x1bW5zIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuUm93cykpIHsgLy8gQ29weSB0aGUgdmFsdWVzIGZyb20gdGhlIDJEIGFycmF5XG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBuUm93cztcbiAgICAgICAgICAgIG5Sb3dzID0gbWF0cml4Lmxlbmd0aDtcbiAgICAgICAgICAgIG5Db2x1bW5zID0gbWF0cml4WzBdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbkNvbHVtbnMgIT09ICdudW1iZXInIHx8IG5Db2x1bW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGF0YSBtdXN0IGJlIGEgMkQgYXJyYXkgd2l0aCBhdCBsZWFzdCBvbmUgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIoblJvd3MpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5Sb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0cml4W2ldLmxlbmd0aCAhPT0gbkNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luY29uc2lzdGVudCBhcnJheSBkaW1lbnNpb25zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBbXS5jb25jYXQobWF0cml4W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIgb3IgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvd3MgPSBuUm93cztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gbkNvbHVtbnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXNbcm93SW5kZXhdW2NvbHVtbkluZGV4XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzW3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHJvdyBmcm9tIHRoZSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFJvdyBpbmRleFxuICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAqL1xuICAgIHJlbW92ZVJvdyhpbmRleCkge1xuICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMucm93cyA9PT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0EgbWF0cml4IGNhbm5vdCBoYXZlIGxlc3MgdGhhbiBvbmUgcm93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnJvd3MgLT0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHJvdyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4ID0gdGhpcy5yb3dzXSAtIFJvdyBpbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSBhcnJheSAtIEFycmF5IG9yIHZlY3RvclxuICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAqL1xuICAgIGFkZFJvdyhpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgaWYgKGFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFycmF5ID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMucm93cztcbiAgICAgICAgfVxuICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4LCB0cnVlKTtcbiAgICAgICAgYXJyYXkgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCBhcnJheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAwLCBhcnJheSk7XG4gICAgICAgIHRoaXMucm93cyArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29sdW1uIGZyb20gdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICovXG4gICAgcmVtb3ZlQ29sdW1uKGluZGV4KSB7XG4gICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5zID09PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQSBtYXRyaXggY2Fubm90IGhhdmUgbGVzcyB0aGFuIG9uZSBjb2x1bW4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zIC09IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb2x1bW4gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleCA9IHRoaXMuY29sdW1uc10gLSBDb2x1bW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gYXJyYXkgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgKi9cbiAgICBhZGRDb2x1bW4oaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJyYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhcnJheSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCwgdHJ1ZSk7XG4gICAgICAgIGFycmF5ID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgYXJyYXkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldLnNwbGljZShpbmRleCwgMCwgYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1ucyArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL21hdHJpeC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTHVEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvbHUnO1xuaW1wb3J0IFN2RGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL3N2ZCc7XG5pbXBvcnQgcmVzY2FsZSBmcm9tICdtbC1hcnJheS1yZXNjYWxlJztcbmltcG9ydCB7XG4gICAgY2hlY2tSb3dWZWN0b3IsIGNoZWNrUm93SW5kZXgsIGNoZWNrQ29sdW1uSW5kZXgsIGNoZWNrQ29sdW1uVmVjdG9yLFxuICAgIGNoZWNrUmFuZ2UsIGNoZWNrSW5kaWNlcyxcbiAgICBzdW1CeVJvdywgc3VtQnlDb2x1bW4sIHN1bUFsbFxufSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IE1hdHJpeFRyYW5zcG9zZVZpZXcgZnJvbSAnLi92aWV3cy90cmFuc3Bvc2UnO1xuaW1wb3J0IE1hdHJpeFJvd1ZpZXcgZnJvbSAnLi92aWV3cy9yb3cnO1xuaW1wb3J0IE1hdHJpeFN1YlZpZXcgZnJvbSAnLi92aWV3cy9zdWInO1xuaW1wb3J0IE1hdHJpeFNlbGVjdGlvblZpZXcgZnJvbSAnLi92aWV3cy9zZWxlY3Rpb24nO1xuaW1wb3J0IE1hdHJpeFJvd1NlbGVjdGlvblZpZXcgZnJvbSAnLi92aWV3cy9yb3dTZWxlY3Rpb24nO1xuaW1wb3J0IE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcgZnJvbSAnLi92aWV3cy9jb2x1bW5TZWxlY3Rpb24nO1xuaW1wb3J0IE1hdHJpeENvbHVtblZpZXcgZnJvbSAnLi92aWV3cy9jb2x1bW4nO1xuaW1wb3J0IE1hdHJpeEZsaXBSb3dWaWV3IGZyb20gJy4vdmlld3MvZmxpcFJvdyc7XG5pbXBvcnQgTWF0cml4RmxpcENvbHVtblZpZXcgZnJvbSAnLi92aWV3cy9mbGlwQ29sdW1uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJzdHJhY3RNYXRyaXgoc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3RvciA9PT0gdW5kZWZpbmVkKSBzdXBlckN0b3IgPSBPYmplY3Q7XG5cbiAgICAvKipcbiAgICAgKiBSZWFsIG1hdHJpeFxuICAgICAqIEBjbGFzcyBNYXRyaXhcbiAgICAgKiBAcGFyYW0ge251bWJlcnxBcnJheXxNYXRyaXh9IG5Sb3dzIC0gTnVtYmVyIG9mIHJvd3Mgb2YgdGhlIG5ldyBtYXRyaXgsXG4gICAgICogMkQgYXJyYXkgY29udGFpbmluZyB0aGUgZGF0YSBvciBNYXRyaXggaW5zdGFuY2UgdG8gY2xvbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW25Db2x1bW5zXSAtIE51bWJlciBvZiBjb2x1bW5zIG9mIHRoZSBuZXcgbWF0cml4XG4gICAgICovXG4gICAgY2xhc3MgTWF0cml4IGV4dGVuZHMgc3VwZXJDdG9yIHtcbiAgICAgICAgc3RhdGljIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIE1hdHJpeCB3aXRoIHRoZSBjaG9zZW4gZGltZW5zaW9ucyBmcm9tIGEgMUQgYXJyYXlcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1Jvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbmV3Q29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5ld0RhdGEgLSBBIDFEIGFycmF5IGNvbnRhaW5pbmcgZGF0YSBmb3IgdGhlIG1hdHJpeFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBmcm9tMURBcnJheShuZXdSb3dzLCBuZXdDb2x1bW5zLCBuZXdEYXRhKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gbmV3Um93cyAqIG5ld0NvbHVtbnM7XG4gICAgICAgICAgICBpZiAobGVuZ3RoICE9PSBuZXdEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdEYXRhIGxlbmd0aCBkb2VzIG5vdCBtYXRjaCBnaXZlbiBkaW1lbnNpb25zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMobmV3Um93cywgbmV3Q29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBuZXdSb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IG5ld0NvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXQocm93LCBjb2x1bW4sIG5ld0RhdGFbcm93ICogbmV3Q29sdW1ucyArIGNvbHVtbl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHJvdyB2ZWN0b3IsIGEgbWF0cml4IHdpdGggb25seSBvbmUgcm93LlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBuZXdEYXRhIC0gQSAxRCBhcnJheSBjb250YWluaW5nIGRhdGEgZm9yIHRoZSB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcm93VmVjdG9yKG5ld0RhdGEpIHtcbiAgICAgICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgdGhpcygxLCBuZXdEYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3Iuc2V0KDAsIGksIG5ld0RhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgY29sdW1uIHZlY3RvciwgYSBtYXRyaXggd2l0aCBvbmx5IG9uZSBjb2x1bW4uXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG5ld0RhdGEgLSBBIDFEIGFycmF5IGNvbnRhaW5pbmcgZGF0YSBmb3IgdGhlIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBjb2x1bW5WZWN0b3IobmV3RGF0YSkge1xuICAgICAgICAgICAgdmFyIHZlY3RvciA9IG5ldyB0aGlzKG5ld0RhdGEubGVuZ3RoLCAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlY3Rvci5zZXQoaSwgMCwgbmV3RGF0YVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYW4gZW1wdHkgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbnMuIFZhbHVlcyB3aWxsIGJlIHVuZGVmaW5lZC4gU2FtZSBhcyB1c2luZyBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zIC0gTnVtYmVyIG9mIGNvbHVtbnNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZW1wdHkocm93cywgY29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVmFsdWVzIHdpbGwgYmUgc2V0IHRvIHplcm8uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyB6ZXJvcyhyb3dzLCBjb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbXB0eShyb3dzLCBjb2x1bW5zKS5maWxsKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVmFsdWVzIHdpbGwgYmUgc2V0IHRvIG9uZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIG9uZXMocm93cywgY29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHkocm93cywgY29sdW1ucykuZmlsbCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbWF0cml4IHdpdGggdGhlIGdpdmVuIGRpbWVuc2lvbnMuIFZhbHVlcyB3aWxsIGJlIHJhbmRvbWx5IHNldC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1ucyAtIE51bWJlciBvZiBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtybmc9TWF0aC5yYW5kb21dIC0gUmFuZG9tIG51bWJlciBnZW5lcmF0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSBUaGUgbmV3IG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHJhbmQocm93cywgY29sdW1ucywgcm5nKSB7XG4gICAgICAgICAgICBpZiAocm5nID09PSB1bmRlZmluZWQpIHJuZyA9IE1hdGgucmFuZG9tO1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuZW1wdHkocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgaiwgcm5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBkaW1lbnNpb25zLiBWYWx1ZXMgd2lsbCBiZSByYW5kb20gaW50ZWdlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzIC0gTnVtYmVyIG9mIHJvd3NcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFZhbHVlPTEwMDBdIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbcm5nPU1hdGgucmFuZG9tXSAtIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gVGhlIG5ldyBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyByYW5kSW50KHJvd3MsIGNvbHVtbnMsIG1heFZhbHVlLCBybmcpIHtcbiAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA9PT0gdW5kZWZpbmVkKSBtYXhWYWx1ZSA9IDEwMDA7XG4gICAgICAgICAgICBpZiAocm5nID09PSB1bmRlZmluZWQpIHJuZyA9IE1hdGgucmFuZG9tO1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuZW1wdHkocm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguZmxvb3Iocm5nKCkgKiBtYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpZGVudGl0eSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9uLiBWYWx1ZXMgb2YgdGhlIGRpYWdvbmFsIHdpbGwgYmUgMSBhbmQgb3RoZXJzIHdpbGwgYmUgMC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgLSBOdW1iZXIgb2Ygcm93c1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbHVtbnM9cm93c10gLSBOdW1iZXIgb2YgY29sdW1uc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlPTFdIC0gVmFsdWUgdG8gZmlsbCB0aGUgZGlhZ29uYWwgd2l0aFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IC0gVGhlIG5ldyBpZGVudGl0eSBtYXRyaXhcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBleWUocm93cywgY29sdW1ucywgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zID09PSB1bmRlZmluZWQpIGNvbHVtbnMgPSByb3dzO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHZhbHVlID0gMTtcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSB0aGlzLnplcm9zKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoaSwgaSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgZGlhZ29uYWwgbWF0cml4IGJhc2VkIG9uIHRoZSBnaXZlbiBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIEFycmF5IGNvbnRhaW5pbmcgdGhlIGRhdGEgZm9yIHRoZSBkaWFnb25hbFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Jvd3NdIC0gTnVtYmVyIG9mIHJvd3MgKERlZmF1bHQ6IGRhdGEubGVuZ3RoKVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbHVtbnNdIC0gTnVtYmVyIG9mIGNvbHVtbnMgKERlZmF1bHQ6IHJvd3MpXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgbmV3IGRpYWdvbmFsIG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRpYWcoZGF0YSwgcm93cywgY29sdW1ucykge1xuICAgICAgICAgICAgdmFyIGwgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChyb3dzID09PSB1bmRlZmluZWQpIHJvd3MgPSBsO1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMgPT09IHVuZGVmaW5lZCkgY29sdW1ucyA9IHJvd3M7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5taW4obCwgcm93cywgY29sdW1ucyk7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gdGhpcy56ZXJvcyhyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtYXRyaXguc2V0KGksIGksIGRhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbWF0cml4IHdob3NlIGVsZW1lbnRzIGFyZSB0aGUgbWluaW11bSBiZXR3ZWVuIG1hdHJpeDEgYW5kIG1hdHJpeDJcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeDFcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeDJcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIG1pbihtYXRyaXgxLCBtYXRyaXgyKSB7XG4gICAgICAgICAgICBtYXRyaXgxID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgxKTtcbiAgICAgICAgICAgIG1hdHJpeDIgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDIpO1xuICAgICAgICAgICAgdmFyIHJvd3MgPSBtYXRyaXgxLnJvd3M7XG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IG1hdHJpeDEuY29sdW1ucztcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcyhyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldChpLCBqLCBNYXRoLm1pbihtYXRyaXgxLmdldChpLCBqKSwgbWF0cml4Mi5nZXQoaSwgaikpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBtYXRyaXggd2hvc2UgZWxlbWVudHMgYXJlIHRoZSBtYXhpbXVtIGJldHdlZW4gbWF0cml4MSBhbmQgbWF0cml4MlxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4MVxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4MlxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgbWF4KG1hdHJpeDEsIG1hdHJpeDIpIHtcbiAgICAgICAgICAgIG1hdHJpeDEgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDEpO1xuICAgICAgICAgICAgbWF0cml4MiA9IHRoaXMuY2hlY2tNYXRyaXgobWF0cml4Mik7XG4gICAgICAgICAgICB2YXIgcm93cyA9IG1hdHJpeDEucm93cztcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gbWF0cml4MS5jb2x1bW5zO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzKHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2V0KGksIGosIE1hdGgubWF4KG1hdHJpeDEuZ2V0KGksIGopLCBtYXRyaXgyLmdldChpLCBqKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdGhhdCB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSBNYXRyaXggYW5kIHRyaWVzIHRvIGluc3RhbnRpYXRlIG9uZSBpZiBub3RcbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgY2hlY2tNYXRyaXgodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXguaXNNYXRyaXgodmFsdWUpID8gdmFsdWUgOiBuZXcgdGhpcyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBhcmd1bWVudCBpcyBhIE1hdHJpeCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBpc01hdHJpeCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPSBudWxsKSAmJiAodmFsdWUua2xhc3MgPT09ICdNYXRyaXgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJvcCB7bnVtYmVyfSBzaXplIC0gVGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgbWF0cml4LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3dzICogdGhpcy5jb2x1bW5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGxpZXMgYSBjYWxsYmFjayBmb3IgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXguIFRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgaW4gdGhlIG1hdHJpeCAodGhpcykgY29udGV4dC5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdHdvIHBhcmFtZXRlcnMgOiBpIChyb3cpIGFuZCBqIChjb2x1bW4pXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHkoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpaSA9IHRoaXMucm93cztcbiAgICAgICAgICAgIHZhciBqaiA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgMUQgYXJyYXkgZmlsbGVkIHJvdyBieSByb3cgd2l0aCB0aGUgbWF0cml4IHZhbHVlc1xuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRvMURBcnJheSgpIHtcbiAgICAgICAgICAgIHZhciBhcnJheSA9IG5ldyBBcnJheSh0aGlzLnNpemUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaSAqIHRoaXMuY29sdW1ucyArIGpdID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSAyRCBhcnJheSBjb250YWluaW5nIGEgY29weSBvZiB0aGUgZGF0YVxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRvMkRBcnJheSgpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gbmV3IEFycmF5KHRoaXMucm93cyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29weVtpXSA9IG5ldyBBcnJheSh0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29weVtpXVtqXSA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBoYXMgb25lIHJvd1xuICAgICAgICAgKi9cbiAgICAgICAgaXNSb3dWZWN0b3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3dzID09PSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBoYXMgb25lIGNvbHVtblxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb2x1bW5WZWN0b3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5zID09PSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1hdHJpeCBoYXMgb25lIHJvdyBvciBvbmUgY29sdW1uXG4gICAgICAgICAqL1xuICAgICAgICBpc1ZlY3RvcigpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5yb3dzID09PSAxKSB8fCAodGhpcy5jb2x1bW5zID09PSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBtYXRyaXggaGFzIHRoZSBzYW1lIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zXG4gICAgICAgICAqL1xuICAgICAgICBpc1NxdWFyZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvd3MgPT09IHRoaXMuY29sdW1ucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBtYXRyaXggaXMgc3F1YXJlIGFuZCBoYXMgdGhlIHNhbWUgdmFsdWVzIG9uIGJvdGggc2lkZXMgb2YgdGhlIGRpYWdvbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpc1N5bW1ldHJpYygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDw9IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopICE9PSB0aGlzLmdldChqLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGEgZ2l2ZW4gZWxlbWVudCBvZiB0aGUgbWF0cml4LiBtYXQuc2V0KDMsNCwxKSBpcyBlcXVpdmFsZW50IHRvIG1hdFszXVs0XT0xXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93SW5kZXggLSBJbmRleCBvZiB0aGUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5JbmRleCAtIEluZGV4IG9mIHRoZSBjb2x1bW5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldCBtZXRob2QgaXMgdW5pbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIGVsZW1lbnQgb2YgdGhlIG1hdHJpeC4gbWF0LmdldCgzLDQpIGlzIGVxdWl2YWxlbnQgdG8gbWF0cml4WzNdWzRdXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93SW5kZXggLSBJbmRleCBvZiB0aGUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5JbmRleCAtIEluZGV4IG9mIHRoZSBjb2x1bW5cbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBtZXRob2QgaXMgdW5pbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgbWF0cml4IHRoYXQgaXMgYSByZXBldGl0aW9uIG9mIHRoZSBjdXJyZW50IG1hdHJpeC4gTmV3IG1hdHJpeCBoYXMgcm93UmVwIHRpbWVzIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgICogcm93cyBvZiB0aGUgbWF0cml4LCBhbmQgY29sUmVwIHRpbWVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dSZXAgLSBOdW1iZXIgb2YgdGltZXMgdGhlIHJvd3Mgc2hvdWxkIGJlIHJlcGVhdGVkXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xSZXAgLSBOdW1iZXIgb2YgdGltZXMgdGhlIGNvbHVtbnMgc2hvdWxkIGJlIHJlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDJdXSk7XG4gICAgICAgICAqIG1hdHJpeC5yZXBlYXQoMik7IC8vIFtbMSwyXSxbMSwyXV1cbiAgICAgICAgICovXG4gICAgICAgIHJlcGVhdChyb3dSZXAsIGNvbFJlcCkge1xuICAgICAgICAgICAgcm93UmVwID0gcm93UmVwIHx8IDE7XG4gICAgICAgICAgICBjb2xSZXAgPSBjb2xSZXAgfHwgMTtcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10odGhpcy5yb3dzICogcm93UmVwLCB0aGlzLmNvbHVtbnMgKiBjb2xSZXApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dSZXA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sUmVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldFN1Yk1hdHJpeCh0aGlzLCB0aGlzLnJvd3MgKiBpLCB0aGlzLmNvbHVtbnMgKiBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbGxzIHRoZSBtYXRyaXggd2l0aCBhIGdpdmVuIHZhbHVlLiBBbGwgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gdGhpcyB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gTmV3IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgZmlsbCh2YWx1ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lZ2F0ZXMgdGhlIG1hdHJpeC4gQWxsIGVsZW1lbnRzIHdpbGwgYmUgbXVsdGlwbGllZCBieSAoLTEpXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgbmVnKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsUygtMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyBhcnJheSBmcm9tIHRoZSBnaXZlbiByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Um93KGluZGV4KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIHZhciByb3cgPSBuZXcgQXJyYXkodGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb3dbaV0gPSB0aGlzLmdldChpbmRleCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgcm93IHZlY3RvciBmcm9tIHRoZSBnaXZlbiByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIGdldFJvd1ZlY3RvcihpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Iucm93VmVjdG9yKHRoaXMuZ2V0Um93KGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIHJvdyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gUm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSBhcnJheSAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNldFJvdyhpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgYXJyYXkgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCBhcnJheSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaW5kZXgsIGksIGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIHR3byByb3dzXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cxIC0gRmlyc3Qgcm93IGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cyIC0gU2Vjb25kIHJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHN3YXBSb3dzKHJvdzEsIHJvdzIpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93MSk7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdzIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gdGhpcy5nZXQocm93MSwgaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm93MSwgaSwgdGhpcy5nZXQocm93MiwgaSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdzIsIGksIHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyBhcnJheSBmcm9tIHRoZSBnaXZlbiBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q29sdW1uKGluZGV4KSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSBuZXcgQXJyYXkodGhpcy5yb3dzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5baV0gPSB0aGlzLmdldChpLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBuZXcgY29sdW1uIHZlY3RvciBmcm9tIHRoZSBnaXZlbiBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIGdldENvbHVtblZlY3RvcihpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY29sdW1uVmVjdG9yKHRoaXMuZ2V0Q29sdW1uKGluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIGNvbHVtbiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSBhcnJheSAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNldENvbHVtbihpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgYXJyYXkgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCBhcnJheSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaW5kZXgsIGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIHR3byBjb2x1bW5zXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4xIC0gRmlyc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4yIC0gU2Vjb25kIGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHN3YXBDb2x1bW5zKGNvbHVtbjEsIGNvbHVtbjIpIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uMSk7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbjIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gdGhpcy5nZXQoaSwgY29sdW1uMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgY29sdW1uMSwgdGhpcy5nZXQoaSwgY29sdW1uMikpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGNvbHVtbjIsIHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIHRvIGVhY2ggcm93XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBhZGRSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKyB2ZWN0b3Jbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN1YnRyYWN0cyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIGZyb20gZWFjaCByb3dcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHN1YlJvd1ZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAtIHZlY3RvcltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlwbGllcyB0aGUgdmFsdWVzIG9mIGEgdmVjdG9yIHdpdGggZWFjaCByb3dcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvciAtIEFycmF5IG9yIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIG11bFJvd1ZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAqIHZlY3RvcltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGl2aWRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggcm93IGJ5IHRob3NlIG9mIGEgdmVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBkaXZSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLyB2ZWN0b3Jbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciB0byBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgYWRkQ29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICsgdmVjdG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJ0cmFjdHMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciBmcm9tIGVhY2ggY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzdWJDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLSB2ZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpcGxpZXMgdGhlIHZhbHVlcyBvZiBhIHZlY3RvciB3aXRoIGVhY2ggY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3IgLSBBcnJheSBvciB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBtdWxDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgICAgICAgICB2ZWN0b3IgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCB2ZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKiB2ZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpdmlkZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNvbHVtbiBieSB0aG9zZSBvZiBhIHZlY3RvclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE1hdHJpeH0gdmVjdG9yIC0gQXJyYXkgb3IgdmVjdG9yXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgZGl2Q29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgICAgICAgICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC8gdmVjdG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXBsaWVzIHRoZSB2YWx1ZXMgb2YgYSByb3cgd2l0aCBhIHNjYWxhclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgbXVsUm93KGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoaW5kZXgsIGksIHRoaXMuZ2V0KGluZGV4LCBpKSAqIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpcGxpZXMgdGhlIHZhbHVlcyBvZiBhIGNvbHVtbiB3aXRoIGEgc2NhbGFyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIENvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBtdWxDb2x1bW4oaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChpLCBpbmRleCwgdGhpcy5nZXQoaSwgaW5kZXgpICogdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1heCgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF4aW11bSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1heEluZGV4KCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbMCwgMF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4WzFdID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1pbigpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWluaW11bSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1pbkluZGV4KCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbMCwgMF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4WzFdID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBvZiBvbmUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Um93KHJvdykge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChyb3csIGkpID4gdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF4aW11bSB2YWx1ZSBvZiBvbmUgcm93XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtYXhSb3dJbmRleChyb3cpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbcm93LCAwXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlkeFsxXSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIG9mIG9uZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5Sb3cocm93KSB7XG4gICAgICAgICAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KHJvdywgMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXhpbXVtIHZhbHVlIG9mIG9uZSByb3dcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1pblJvd0luZGV4KHJvdykge1xuICAgICAgICAgICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgICAgICAgICAgdmFyIGlkeCA9IFtyb3csIDBdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChyb3csIGkpIDwgdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgaWR4WzFdID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgb2Ygb25lIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uIC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1heENvbHVtbihjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA+IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1heGltdW0gdmFsdWUgb2Ygb25lIGNvbHVtblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uIC0gQ29sdW1uIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Q29sdW1uSW5kZXgoY29sdW1uKSB7XG4gICAgICAgICAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KDAsIGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgaWR4ID0gWzAsIGNvbHVtbl07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGNvbHVtbikgPiB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBvZiBvbmUgY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgbWluQ29sdW1uKGNvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pIDwgdikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWluaW11bSB2YWx1ZSBvZiBvbmUgY29sdW1uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5Db2x1bW5JbmRleChjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBbMCwgY29sdW1uXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA8IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIGlkeFswXSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGRpYWdvbmFsIHZhbHVlcyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZGlhZygpIHtcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICB2YXIgZGlhZyA9IG5ldyBBcnJheShtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgICAgICAgICAgIGRpYWdbaV0gPSB0aGlzLmdldChpLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaWFnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHN1bSBieSB0aGUgYXJndW1lbnQgZ2l2ZW4sIGlmIG5vIGFyZ3VtZW50IGdpdmVuLFxuICAgICAgICAgKiBpdCByZXR1cm5zIHRoZSBzdW0gb2YgYWxsIGVsZW1lbnRzIG9mIHRoZSBtYXRyaXguXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBieSAtIHN1bSBieSAncm93JyBvciAnY29sdW1uJy5cbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHN1bShieSkge1xuICAgICAgICAgICAgc3dpdGNoIChieSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Jvdyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW1CeVJvdyh0aGlzKTtcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtQnlDb2x1bW4odGhpcyk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bUFsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtZWFuIG9mIGFsbCBlbGVtZW50cyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG1lYW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW0oKSAvIHRoaXMuc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIGFsbCBlbGVtZW50cyBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHByb2QoKSB7XG4gICAgICAgICAgICB2YXIgcHJvZCA9IDE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwcm9kICo9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9kO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG5vcm0gb2YgYSBtYXRyaXguXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gXCJmcm9iZW5pdXNcIiAoZGVmYXVsdCkgb3IgXCJtYXhcIiByZXR1cm4gcmVzcC4gdGhlIEZyb2Jlbml1cyBub3JtIGFuZCB0aGUgbWF4IG5vcm0uXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIG5vcm0odHlwZSA9ICdmcm9iZW5pdXMnKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbWF4Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1heCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnJvYmVuaXVzJykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgdGhpcy5nZXQoaSwgaikgKiB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGB1bmtub3duIG5vcm0gdHlwZTogJHt0eXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBjdW11bGF0aXZlIHN1bSBvZiB0aGUgbWF0cml4IGVsZW1lbnRzIChpbiBwbGFjZSwgcm93IGJ5IHJvdylcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBjdW11bGF0aXZlU3VtKCkge1xuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGksIGosIHN1bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcHV0ZXMgdGhlIGRvdCAoc2NhbGFyKSBwcm9kdWN0IGJldHdlZW4gdGhlIG1hdHJpeCBhbmQgYW5vdGhlclxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gdmVjdG9yMiB2ZWN0b3JcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgZG90KHZlY3RvcjIpIHtcbiAgICAgICAgICAgIGlmIChNYXRyaXguaXNNYXRyaXgodmVjdG9yMikpIHZlY3RvcjIgPSB2ZWN0b3IyLnRvMURBcnJheSgpO1xuICAgICAgICAgICAgdmFyIHZlY3RvcjEgPSB0aGlzLnRvMURBcnJheSgpO1xuICAgICAgICAgICAgaWYgKHZlY3RvcjEubGVuZ3RoICE9PSB2ZWN0b3IyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd2ZWN0b3JzIGRvIG5vdCBoYXZlIHRoZSBzYW1lIHNpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb3QgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZG90ICs9IHZlY3RvcjFbaV0gKiB2ZWN0b3IyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtYXRyaXggcHJvZHVjdCBiZXR3ZWVuIHRoaXMgYW5kIG90aGVyXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSBvdGhlclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBtbXVsKG90aGVyKSB7XG4gICAgICAgICAgICBvdGhlciA9IHRoaXMuY29uc3RydWN0b3IuY2hlY2tNYXRyaXgob3RoZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1ucyAhPT0gb3RoZXIucm93cykge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOdW1iZXIgb2YgY29sdW1ucyBvZiBsZWZ0IG1hdHJpeCBhcmUgbm90IGVxdWFsIHRvIG51bWJlciBvZiByb3dzIG9mIHJpZ2h0IG1hdHJpeC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG0gPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIHZhciBwID0gb3RoZXIuY29sdW1ucztcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShtLCBwKTtcblxuICAgICAgICAgICAgdmFyIEJjb2xqID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBCY29saltrXSA9IG90aGVyLmdldChrLCBqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gdGhpcy5nZXQoaSwgaykgKiBCY29saltrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmFzc2VuMngyKG90aGVyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKDIsIDIpO1xuICAgICAgICAgICAgY29uc3QgYTExID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMTEgPSBvdGhlci5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMTIgPSB0aGlzLmdldCgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGIxMiA9IG90aGVyLmdldCgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGEyMSA9IHRoaXMuZ2V0KDEsIDApO1xuICAgICAgICAgICAgY29uc3QgYjIxID0gb3RoZXIuZ2V0KDEsIDApO1xuICAgICAgICAgICAgY29uc3QgYTIyID0gdGhpcy5nZXQoMSwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMjIgPSBvdGhlci5nZXQoMSwgMSk7XG5cbiAgICAgICAgICAgIC8vIENvbXB1dGUgaW50ZXJtZWRpYXRlIHZhbHVlcy5cbiAgICAgICAgICAgIGNvbnN0IG0xID0gKGExMSArIGEyMikgKiAoYjExICsgYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG0yID0gKGEyMSArIGEyMikgKiBiMTE7XG4gICAgICAgICAgICBjb25zdCBtMyA9IGExMSAqIChiMTIgLSBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTQgPSBhMjIgKiAoYjIxIC0gYjExKTtcbiAgICAgICAgICAgIGNvbnN0IG01ID0gKGExMSArIGExMikgKiBiMjI7XG4gICAgICAgICAgICBjb25zdCBtNiA9IChhMjEgLSBhMTEpICogKGIxMSArIGIxMik7XG4gICAgICAgICAgICBjb25zdCBtNyA9IChhMTIgLSBhMjIpICogKGIyMSArIGIyMik7XG5cbiAgICAgICAgICAgIC8vIENvbWJpbmUgaW50ZXJtZWRpYXRlIHZhbHVlcyBpbnRvIHRoZSBvdXRwdXQuXG4gICAgICAgICAgICBjb25zdCBjMDAgPSBtMSArIG00IC0gbTUgKyBtNztcbiAgICAgICAgICAgIGNvbnN0IGMwMSA9IG0zICsgbTU7XG4gICAgICAgICAgICBjb25zdCBjMTAgPSBtMiArIG00O1xuICAgICAgICAgICAgY29uc3QgYzExID0gbTEgLSBtMiArIG0zICsgbTY7XG5cbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMCwgMCwgYzAwKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMCwgMSwgYzAxKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMSwgMCwgYzEwKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoMSwgMSwgYzExKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJhc3NlbjN4MyhvdGhlcikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSgzLCAzKTtcblxuICAgICAgICAgICAgY29uc3QgYTAwID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMDEgPSB0aGlzLmdldCgwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGEwMiA9IHRoaXMuZ2V0KDAsIDIpO1xuICAgICAgICAgICAgY29uc3QgYTEwID0gdGhpcy5nZXQoMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMTEgPSB0aGlzLmdldCgxLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGExMiA9IHRoaXMuZ2V0KDEsIDIpO1xuICAgICAgICAgICAgY29uc3QgYTIwID0gdGhpcy5nZXQoMiwgMCk7XG4gICAgICAgICAgICBjb25zdCBhMjEgPSB0aGlzLmdldCgyLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGEyMiA9IHRoaXMuZ2V0KDIsIDIpO1xuXG4gICAgICAgICAgICBjb25zdCBiMDAgPSBvdGhlci5nZXQoMCwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMDEgPSBvdGhlci5nZXQoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMDIgPSBvdGhlci5nZXQoMCwgMik7XG4gICAgICAgICAgICBjb25zdCBiMTAgPSBvdGhlci5nZXQoMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMTEgPSBvdGhlci5nZXQoMSwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMTIgPSBvdGhlci5nZXQoMSwgMik7XG4gICAgICAgICAgICBjb25zdCBiMjAgPSBvdGhlci5nZXQoMiwgMCk7XG4gICAgICAgICAgICBjb25zdCBiMjEgPSBvdGhlci5nZXQoMiwgMSk7XG4gICAgICAgICAgICBjb25zdCBiMjIgPSBvdGhlci5nZXQoMiwgMik7XG5cbiAgICAgICAgICAgIGNvbnN0IG0xID0gKGEwMCArIGEwMSArIGEwMiAtIGExMCAtIGExMSAtIGEyMSAtIGEyMikgKiBiMTE7XG4gICAgICAgICAgICBjb25zdCBtMiA9IChhMDAgLSBhMTApICogKC1iMDEgKyBiMTEpO1xuICAgICAgICAgICAgY29uc3QgbTMgPSBhMTEgKiAoLWIwMCArIGIwMSArIGIxMCAtIGIxMSAtIGIxMiAtIGIyMCArIGIyMik7XG4gICAgICAgICAgICBjb25zdCBtNCA9ICgtYTAwICsgYTEwICsgYTExKSAqIChiMDAgLSBiMDEgKyBiMTEpO1xuICAgICAgICAgICAgY29uc3QgbTUgPSAoYTEwICsgYTExKSAqICgtYjAwICsgYjAxKTtcbiAgICAgICAgICAgIGNvbnN0IG02ID0gYTAwICogYjAwO1xuICAgICAgICAgICAgY29uc3QgbTcgPSAoLWEwMCArIGEyMCArIGEyMSkgKiAoYjAwIC0gYjAyICsgYjEyKTtcbiAgICAgICAgICAgIGNvbnN0IG04ID0gKC1hMDAgKyBhMjApICogKGIwMiAtIGIxMik7XG4gICAgICAgICAgICBjb25zdCBtOSA9IChhMjAgKyBhMjEpICogKC1iMDAgKyBiMDIpO1xuICAgICAgICAgICAgY29uc3QgbTEwID0gKGEwMCArIGEwMSArIGEwMiAtIGExMSAtIGExMiAtIGEyMCAtIGEyMSkgKiBiMTI7XG4gICAgICAgICAgICBjb25zdCBtMTEgPSBhMjEgKiAoLWIwMCArIGIwMiArIGIxMCAtIGIxMSAtIGIxMiAtIGIyMCArIGIyMSk7XG4gICAgICAgICAgICBjb25zdCBtMTIgPSAoLWEwMiArIGEyMSArIGEyMikgKiAoYjExICsgYjIwIC0gYjIxKTtcbiAgICAgICAgICAgIGNvbnN0IG0xMyA9IChhMDIgLSBhMjIpICogKGIxMSAtIGIyMSk7XG4gICAgICAgICAgICBjb25zdCBtMTQgPSBhMDIgKiBiMjA7XG4gICAgICAgICAgICBjb25zdCBtMTUgPSAoYTIxICsgYTIyKSAqICgtYjIwICsgYjIxKTtcbiAgICAgICAgICAgIGNvbnN0IG0xNiA9ICgtYTAyICsgYTExICsgYTEyKSAqIChiMTIgKyBiMjAgLSBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTE3ID0gKGEwMiAtIGExMikgKiAoYjEyIC0gYjIyKTtcbiAgICAgICAgICAgIGNvbnN0IG0xOCA9IChhMTEgKyBhMTIpICogKC1iMjAgKyBiMjIpO1xuICAgICAgICAgICAgY29uc3QgbTE5ID0gYTAxICogYjEwO1xuICAgICAgICAgICAgY29uc3QgbTIwID0gYTEyICogYjIxO1xuICAgICAgICAgICAgY29uc3QgbTIxID0gYTEwICogYjAyO1xuICAgICAgICAgICAgY29uc3QgbTIyID0gYTIwICogYjAxO1xuICAgICAgICAgICAgY29uc3QgbTIzID0gYTIyICogYjIyO1xuXG4gICAgICAgICAgICBjb25zdCBjMDAgPSBtNiArIG0xNCArIG0xOTtcbiAgICAgICAgICAgIGNvbnN0IGMwMSA9IG0xICsgbTQgKyBtNSArIG02ICsgbTEyICsgbTE0ICsgbTE1O1xuICAgICAgICAgICAgY29uc3QgYzAyID0gbTYgKyBtNyArIG05ICsgbTEwICsgbTE0ICsgbTE2ICsgbTE4O1xuICAgICAgICAgICAgY29uc3QgYzEwID0gbTIgKyBtMyArIG00ICsgbTYgKyBtMTQgKyBtMTYgKyBtMTc7XG4gICAgICAgICAgICBjb25zdCBjMTEgPSBtMiArIG00ICsgbTUgKyBtNiArIG0yMDtcbiAgICAgICAgICAgIGNvbnN0IGMxMiA9IG0xNCArIG0xNiArIG0xNyArIG0xOCArIG0yMTtcbiAgICAgICAgICAgIGNvbnN0IGMyMCA9IG02ICsgbTcgKyBtOCArIG0xMSArIG0xMiArIG0xMyArIG0xNDtcbiAgICAgICAgICAgIGNvbnN0IGMyMSA9IG0xMiArIG0xMyArIG0xNCArIG0xNSArIG0yMjtcbiAgICAgICAgICAgIGNvbnN0IGMyMiA9IG02ICsgbTcgKyBtOCArIG05ICsgbTIzO1xuXG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDAsIGMwMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDEsIGMwMSk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDAsIDIsIGMwMik7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDAsIGMxMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDEsIGMxMSk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDEsIDIsIGMxMik7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDIsIDAsIGMyMCk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDIsIDEsIGMyMSk7XG4gICAgICAgICAgICByZXN1bHQuc2V0KDIsIDIsIGMyMik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG1hdHJpeCBwcm9kdWN0IGJldHdlZW4geCBhbmQgeS4gTW9yZSBlZmZpY2llbnQgdGhhbiBtbXVsKG90aGVyKSBvbmx5IHdoZW4gd2UgbXVsdGlwbHkgc3F1YXJlZCBtYXRyaXggYW5kIHdoZW4gdGhlIHNpemUgb2YgdGhlIG1hdHJpeCBpcyA+IDEwMDAuXG4gICAgICAgICAqIEBwYXJhbSB7TWF0cml4fSB5XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIG1tdWxTdHJhc3Nlbih5KSB7XG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciByMSA9IHgucm93cztcbiAgICAgICAgICAgIHZhciBjMSA9IHguY29sdW1ucztcbiAgICAgICAgICAgIHZhciByMiA9IHkucm93cztcbiAgICAgICAgICAgIHZhciBjMiA9IHkuY29sdW1ucztcbiAgICAgICAgICAgIGlmIChjMSAhPT0gcjIpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTXVsdGlwbHlpbmcgJHtyMX0geCAke2MxfSBhbmQgJHtyMn0geCAke2MyfSBtYXRyaXg6IGRpbWVuc2lvbnMgZG8gbm90IG1hdGNoLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQdXQgYSBtYXRyaXggaW50byB0aGUgdG9wIGxlZnQgb2YgYSBtYXRyaXggb2YgemVyb3MuXG4gICAgICAgICAgICAvLyBgcm93c2AgYW5kIGBjb2xzYCBhcmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIG91dHB1dCBtYXRyaXguXG4gICAgICAgICAgICBmdW5jdGlvbiBlbWJlZChtYXQsIHJvd3MsIGNvbHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG1hdC5yb3dzO1xuICAgICAgICAgICAgICAgIHZhciBjID0gbWF0LmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaWYgKChyID09PSByb3dzKSAmJiAoYyA9PT0gY29scykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0YXQgPSBNYXRyaXguemVyb3Mocm93cywgY29scyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KG1hdCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGJvdGggbWF0cmljZXMgYXJlIHRoZSBzYW1lIHNpemUuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4Y2x1c2l2ZWx5IGZvciBzaW1wbGljaXR5OlxuICAgICAgICAgICAgLy8gdGhpcyBhbGdvcml0aG0gY2FuIGJlIGltcGxlbWVudGVkIHdpdGggbWF0cmljZXMgb2YgZGlmZmVyZW50IHNpemVzLlxuXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgubWF4KHIxLCByMik7XG4gICAgICAgICAgICB2YXIgYyA9IE1hdGgubWF4KGMxLCBjMik7XG4gICAgICAgICAgICB4ID0gZW1iZWQoeCwgciwgYyk7XG4gICAgICAgICAgICB5ID0gZW1iZWQoeSwgciwgYyk7XG5cbiAgICAgICAgICAgIC8vIE91ciByZWN1cnNpdmUgbXVsdGlwbGljYXRpb24gZnVuY3Rpb24uXG4gICAgICAgICAgICBmdW5jdGlvbiBibG9ja011bHQoYSwgYiwgcm93cywgY29scykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBzbWFsbCBtYXRyaWNlcywgcmVzb3J0IHRvIG5haXZlIG11bHRpcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGlmIChyb3dzIDw9IDUxMiB8fCBjb2xzIDw9IDUxMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5tbXVsKGIpOyAvLyBhIGlzIGVxdWl2YWxlbnQgdG8gdGhpc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGR5bmFtaWMgcGFkZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoKHJvd3MgJSAyID09PSAxKSAmJiAoY29scyAlIDIgPT09IDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBlbWJlZChhLCByb3dzICsgMSwgY29scyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBiID0gZW1iZWQoYiwgcm93cyArIDEsIGNvbHMgKyAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd3MgJSAyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBlbWJlZChhLCByb3dzICsgMSwgY29scyk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBlbWJlZChiLCByb3dzICsgMSwgY29scyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xzICUgMiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gZW1iZWQoYSwgcm93cywgY29scyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBiID0gZW1iZWQoYiwgcm93cywgY29scyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBoYWxmUm93cyA9IHBhcnNlSW50KGEucm93cyAvIDIpO1xuICAgICAgICAgICAgICAgIHZhciBoYWxmQ29scyA9IHBhcnNlSW50KGEuY29sdW1ucyAvIDIpO1xuICAgICAgICAgICAgICAgIC8vIFN1YmRpdmlkZSBpbnB1dCBtYXRyaWNlcy5cbiAgICAgICAgICAgICAgICB2YXIgYTExID0gYS5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBiMTEgPSBiLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIDAsIGhhbGZDb2xzIC0gMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYTEyID0gYS5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCBoYWxmQ29scywgYS5jb2x1bW5zIC0gMSk7XG4gICAgICAgICAgICAgICAgdmFyIGIxMiA9IGIuc3ViTWF0cml4KDAsIGhhbGZSb3dzIC0gMSwgaGFsZkNvbHMsIGIuY29sdW1ucyAtIDEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGEyMSA9IGEuc3ViTWF0cml4KGhhbGZSb3dzLCBhLnJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBiMjEgPSBiLnN1Yk1hdHJpeChoYWxmUm93cywgYi5yb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcblxuICAgICAgICAgICAgICAgIHZhciBhMjIgPSBhLnN1Yk1hdHJpeChoYWxmUm93cywgYS5yb3dzIC0gMSwgaGFsZkNvbHMsIGEuY29sdW1ucyAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBiMjIgPSBiLnN1Yk1hdHJpeChoYWxmUm93cywgYi5yb3dzIC0gMSwgaGFsZkNvbHMsIGIuY29sdW1ucyAtIDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnRlcm1lZGlhdGUgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHZhciBtMSA9IGJsb2NrTXVsdChNYXRyaXguYWRkKGExMSwgYTIyKSwgTWF0cml4LmFkZChiMTEsIGIyMiksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG0yID0gYmxvY2tNdWx0KE1hdHJpeC5hZGQoYTIxLCBhMjIpLCBiMTEsIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG0zID0gYmxvY2tNdWx0KGExMSwgTWF0cml4LnN1YihiMTIsIGIyMiksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG00ID0gYmxvY2tNdWx0KGEyMiwgTWF0cml4LnN1YihiMjEsIGIxMSksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG01ID0gYmxvY2tNdWx0KE1hdHJpeC5hZGQoYTExLCBhMTIpLCBiMjIsIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICAgICAgICAgICAgdmFyIG02ID0gYmxvY2tNdWx0KE1hdHJpeC5zdWIoYTIxLCBhMTEpLCBNYXRyaXguYWRkKGIxMSwgYjEyKSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgICAgICAgICAgICB2YXIgbTcgPSBibG9ja011bHQoTWF0cml4LnN1YihhMTIsIGEyMiksIE1hdHJpeC5hZGQoYjIxLCBiMjIpLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29tYmluZSBpbnRlcm1lZGlhdGUgdmFsdWVzIGludG8gdGhlIG91dHB1dC5cbiAgICAgICAgICAgICAgICB2YXIgYzExID0gTWF0cml4LmFkZChtMSwgbTQpO1xuICAgICAgICAgICAgICAgIGMxMS5zdWIobTUpO1xuICAgICAgICAgICAgICAgIGMxMS5hZGQobTcpO1xuICAgICAgICAgICAgICAgIHZhciBjMTIgPSBNYXRyaXguYWRkKG0zLCBtNSk7XG4gICAgICAgICAgICAgICAgdmFyIGMyMSA9IE1hdHJpeC5hZGQobTIsIG00KTtcbiAgICAgICAgICAgICAgICB2YXIgYzIyID0gTWF0cml4LnN1YihtMSwgbTIpO1xuICAgICAgICAgICAgICAgIGMyMi5hZGQobTMpO1xuICAgICAgICAgICAgICAgIGMyMi5hZGQobTYpO1xuXG4gICAgICAgICAgICAgICAgLy9Dcm9wIG91dHB1dCB0byB0aGUgZGVzaXJlZCBzaXplICh1bmRvIGR5bmFtaWMgcGFkZGluZykuXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdGF0ID0gTWF0cml4Lnplcm9zKDIgKiBjMTEucm93cywgMiAqIGMxMS5jb2x1bW5zKTtcbiAgICAgICAgICAgICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMTEsIDAsIDApO1xuICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMxMiwgYzExLnJvd3MsIDApO1xuICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMyMSwgMCwgYzExLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMyMiwgYzExLnJvd3MsIGMxMS5jb2x1bW5zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuc3ViTWF0cml4KDAsIHJvd3MgLSAxLCAwLCBjb2xzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmxvY2tNdWx0KHgsIHksIHIsIGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSByb3ctYnktcm93IHNjYWxlZCBtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gLSBNaW5pbXVtIHNjYWxlZCB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIE1heGltdW0gc2NhbGVkIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH0gLSBUaGUgc2NhbGVkIG1hdHJpeFxuICAgICAgICAgKi9cbiAgICAgICAgc2NhbGVSb3dzKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICBtaW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBtaW47XG4gICAgICAgICAgICBtYXggPSBtYXggPT09IHVuZGVmaW5lZCA/IDEgOiBtYXg7XG4gICAgICAgICAgICBpZiAobWluID49IG1heCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW4gc2hvdWxkIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBtYXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmVtcHR5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGVkID0gcmVzY2FsZSh0aGlzLmdldFJvdyhpKSwge21pbiwgbWF4fSk7XG4gICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldFJvdyhpLCBzY2FsZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IGNvbHVtbi1ieS1jb2x1bW4gc2NhbGVkIG1hdHJpeFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSAtIE1pbmltdW0gc2NhbGVkIHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIC0gTWF4aW11bSBzY2FsZWQgdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBuZXcgc2NhbGVkIG1hdHJpeFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeChbWzEsMl0sWy0xLDBdXSk7XG4gICAgICAgICAqIHZhciBzY2FsZWRNYXRyaXggPSBtYXRyaXguc2NhbGVDb2x1bW5zKCk7IC8vIFtbMSwxXSxbMCwwXV1cbiAgICAgICAgICovXG4gICAgICAgIHNjYWxlQ29sdW1ucyhtaW4sIG1heCkge1xuICAgICAgICAgICAgbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogbWluO1xuICAgICAgICAgICAgbWF4ID0gbWF4ID09PSB1bmRlZmluZWQgPyAxIDogbWF4O1xuICAgICAgICAgICAgaWYgKG1pbiA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluIHNob3VsZCBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gbWF4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gdGhpcy5jb25zdHJ1Y3Rvci5lbXB0eSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZCA9IHJlc2NhbGUodGhpcy5nZXRDb2x1bW4oaSksIHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbmV3TWF0cml4LnNldENvbHVtbihpLCBzY2FsZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIEtyb25lY2tlciBwcm9kdWN0IChhbHNvIGtub3duIGFzIHRlbnNvciBwcm9kdWN0KSBiZXR3ZWVuIHRoaXMgYW5kIG90aGVyXG4gICAgICAgICAqIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Lcm9uZWNrZXJfcHJvZHVjdFxuICAgICAgICAgKiBAcGFyYW0ge01hdHJpeH0gb3RoZXJcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAga3JvbmVja2VyUHJvZHVjdChvdGhlcikge1xuICAgICAgICAgICAgb3RoZXIgPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG90aGVyKTtcblxuICAgICAgICAgICAgdmFyIG0gPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIHZhciBwID0gb3RoZXIucm93cztcbiAgICAgICAgICAgIHZhciBxID0gb3RoZXIuY29sdW1ucztcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShtICogcCwgbiAqIHEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBxOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcCAqIGkgKyBrXVtxICogaiArIGxdID0gdGhpcy5nZXQoaSwgaikgKiBvdGhlci5nZXQoaywgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYW5zcG9zZXMgdGhlIG1hdHJpeCBhbmQgcmV0dXJucyBhIG5ldyBvbmUgY29udGFpbmluZyB0aGUgcmVzdWx0XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zcG9zZSgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10odGhpcy5jb2x1bW5zLCB0aGlzLnJvd3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldChqLCBpLCB0aGlzLmdldChpLCBqKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb3J0cyB0aGUgcm93cyAoaW4gcGxhY2UpXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVGdW5jdGlvbiAtIHVzdWFsIEFycmF5LnByb3RvdHlwZS5zb3J0IGNvbXBhcmlzb24gZnVuY3Rpb25cbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fSB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Um93cyhjb21wYXJlRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkgY29tcGFyZUZ1bmN0aW9uID0gY29tcGFyZU51bWJlcnM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSb3coaSwgdGhpcy5nZXRSb3coaSkuc29ydChjb21wYXJlRnVuY3Rpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvcnRzIHRoZSBjb2x1bW5zIChpbiBwbGFjZSlcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyZUZ1bmN0aW9uIC0gdXN1YWwgQXJyYXkucHJvdG90eXBlLnNvcnQgY29tcGFyaXNvbiBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRDb2x1bW5zKGNvbXBhcmVGdW5jdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSBjb21wYXJlRnVuY3Rpb24gPSBjb21wYXJlTnVtYmVycztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbHVtbihpLCB0aGlzLmdldENvbHVtbihpKS5zb3J0KGNvbXBhcmVGdW5jdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN1YnNldCBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFJvdyAtIEZpcnN0IHJvdyBpbmRleFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kUm93IC0gTGFzdCByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Q29sdW1uIC0gRmlyc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmRDb2x1bW4gLSBMYXN0IGNvbHVtbiBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdWJNYXRyaXgoc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgICAgICAgICAgY2hlY2tSYW5nZSh0aGlzLCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oZW5kUm93IC0gc3RhcnRSb3cgKyAxLCBlbmRDb2x1bW4gLSBzdGFydENvbHVtbiArIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHN0YXJ0Q29sdW1uOyBqIDw9IGVuZENvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeFtpIC0gc3RhcnRSb3ddW2ogLSBzdGFydENvbHVtbl0gPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBzdWJzZXQgb2YgdGhlIG1hdHJpeCBiYXNlZCBvbiBhbiBhcnJheSBvZiByb3cgaW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBpbmRpY2VzIC0gQXJyYXkgY29udGFpbmluZyB0aGUgcm93IGluZGljZXNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydENvbHVtbiA9IDBdIC0gRmlyc3QgY29sdW1uIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kQ29sdW1uID0gdGhpcy5jb2x1bW5zLTFdIC0gTGFzdCBjb2x1bW4gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc3ViTWF0cml4Um93KGluZGljZXMsIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICAgICAgICAgIGlmIChzdGFydENvbHVtbiA9PT0gdW5kZWZpbmVkKSBzdGFydENvbHVtbiA9IDA7XG4gICAgICAgICAgICBpZiAoZW5kQ29sdW1uID09PSB1bmRlZmluZWQpIGVuZENvbHVtbiA9IHRoaXMuY29sdW1ucyAtIDE7XG4gICAgICAgICAgICBpZiAoKHN0YXJ0Q29sdW1uID4gZW5kQ29sdW1uKSB8fCAoc3RhcnRDb2x1bW4gPCAwKSB8fCAoc3RhcnRDb2x1bW4gPj0gdGhpcy5jb2x1bW5zKSB8fCAoZW5kQ29sdW1uIDwgMCkgfHwgKGVuZENvbHVtbiA+PSB0aGlzLmNvbHVtbnMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0FyZ3VtZW50IG91dCBvZiByYW5nZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKGluZGljZXMubGVuZ3RoLCBlbmRDb2x1bW4gLSBzdGFydENvbHVtbiArIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHN0YXJ0Q29sdW1uOyBqIDw9IGVuZENvbHVtbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRpY2VzW2ldIDwgMCB8fCBpbmRpY2VzW2ldID49IHRoaXMucm93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1JvdyBpbmRleCBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRpY2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXguc2V0KGksIGogLSBzdGFydENvbHVtbiwgdGhpcy5nZXQoaW5kaWNlc1tpXSwgaikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN1YnNldCBvZiB0aGUgbWF0cml4IGJhc2VkIG9uIGFuIGFycmF5IG9mIGNvbHVtbiBpbmRpY2VzXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGluZGljZXMgLSBBcnJheSBjb250YWluaW5nIHRoZSBjb2x1bW4gaW5kaWNlc1xuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0Um93ID0gMF0gLSBGaXJzdCByb3cgaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRSb3cgPSB0aGlzLnJvd3MtMV0gLSBMYXN0IHJvdyBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICAgICAqL1xuICAgICAgICBzdWJNYXRyaXhDb2x1bW4oaW5kaWNlcywgc3RhcnRSb3csIGVuZFJvdykge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Um93ID09PSB1bmRlZmluZWQpIHN0YXJ0Um93ID0gMDtcbiAgICAgICAgICAgIGlmIChlbmRSb3cgPT09IHVuZGVmaW5lZCkgZW5kUm93ID0gdGhpcy5yb3dzIC0gMTtcbiAgICAgICAgICAgIGlmICgoc3RhcnRSb3cgPiBlbmRSb3cpIHx8IChzdGFydFJvdyA8IDApIHx8IChzdGFydFJvdyA+PSB0aGlzLnJvd3MpIHx8IChlbmRSb3cgPCAwKSB8fCAoZW5kUm93ID49IHRoaXMucm93cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXJndW1lbnQgb3V0IG9mIHJhbmdlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBuZXdNYXRyaXggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oZW5kUm93IC0gc3RhcnRSb3cgKyAxLCBpbmRpY2VzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gc3RhcnRSb3c7IGogPD0gZW5kUm93OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGljZXNbaV0gPCAwIHx8IGluZGljZXNbaV0gPj0gdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ29sdW1uIGluZGV4IG91dCBvZiByYW5nZTogJyArIGluZGljZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXQoaiAtIHN0YXJ0Um93LCBpLCB0aGlzLmdldChqLCBpbmRpY2VzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgYSBwYXJ0IG9mIHRoZSBtYXRyaXggdG8gdGhlIGdpdmVuIHN1Yi1tYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtNYXRyaXh8QXJyYXk8IEFycmF5ID59IG1hdHJpeCAtIFRoZSBzb3VyY2UgbWF0cml4IGZyb20gd2hpY2ggdG8gZXh0cmFjdCB2YWx1ZXMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFJvdyAtIFRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgcm93IHRvIHNldFxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRDb2x1bW4gLSBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGNvbHVtbiB0byBzZXRcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0U3ViTWF0cml4KG1hdHJpeCwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSB7XG4gICAgICAgICAgICBtYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgICAgICAgICB2YXIgZW5kUm93ID0gc3RhcnRSb3cgKyBtYXRyaXgucm93cyAtIDE7XG4gICAgICAgICAgICB2YXIgZW5kQ29sdW1uID0gc3RhcnRDb2x1bW4gKyBtYXRyaXguY29sdW1ucyAtIDE7XG4gICAgICAgICAgICBjaGVja1JhbmdlKHRoaXMsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3RhcnRSb3cgKyBpXVtzdGFydENvbHVtbiArIGpdID0gbWF0cml4LmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gYSBuZXcgbWF0cml4IGJhc2VkIG9uIGEgc2VsZWN0aW9uIG9mIHJvd3MgYW5kIGNvbHVtbnNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSByb3dJbmRpY2VzIC0gVGhlIHJvdyBpbmRpY2VzIHRvIHNlbGVjdC4gT3JkZXIgbWF0dGVycyBhbmQgYW4gaW5kZXggY2FuIGJlIG1vcmUgdGhhbiBvbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbHVtbkluZGljZXMgLSBUaGUgY29sdW1uIGluZGljZXMgdG8gc2VsZWN0LiBPcmRlciBtYXR0ZXJzIGFuZCBhbiBpbmRleCBjYW4gYmUgdXNlIG1vcmUgdGhhbiBvbmNlLlxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IFRoZSBuZXcgbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb24ocm93SW5kaWNlcywgY29sdW1uSW5kaWNlcykge1xuICAgICAgICAgICAgdmFyIGluZGljZXMgPSBjaGVja0luZGljZXModGhpcywgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKHJvd0luZGljZXMubGVuZ3RoLCBjb2x1bW5JbmRpY2VzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGljZXMucm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvd0luZGV4ID0gaW5kaWNlcy5yb3dbaV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbmRpY2VzLmNvbHVtbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uSW5kZXggPSBpbmRpY2VzLmNvbHVtbltqXTtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4W2ldW2pdID0gdGhpcy5nZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHRyYWNlIG9mIHRoZSBtYXRyaXggKHN1bSBvZiB0aGUgZGlhZ29uYWwgZWxlbWVudHMpXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRyYWNlKCkge1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIHZhciB0cmFjZSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdHJhY2UgKz0gdGhpcy5nZXQoaSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgTWF0cml4IHZpZXdzXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgdHJhbnNwb3NpdGlvbiBvZiB0aGUgbWF0cml4XG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFRyYW5zcG9zZVZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc3Bvc2VWaWV3KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhUcmFuc3Bvc2VWaWV3KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSByb3cgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSByb3cgaW5kZXggb2YgdGhlIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhSb3dWaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgcm93Vmlldyhyb3cpIHtcbiAgICAgICAgICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4Um93Vmlldyh0aGlzLCByb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBjb2x1bW4gdmVjdG9yIHdpdGggdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBjb2x1bW4gaW5kZXggb2YgdGhlIHZlY3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhDb2x1bW5WaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uVmlldyhjb2x1bW4pIHtcbiAgICAgICAgICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4Q29sdW1uVmlldyh0aGlzLCBjb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBtYXRyaXggZmxpcHBlZCBpbiB0aGUgcm93IGF4aXNcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4RmxpcFJvd1ZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBmbGlwUm93VmlldygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4RmxpcFJvd1ZpZXcodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHZpZXcgb2YgdGhlIG1hdHJpeCBmbGlwcGVkIGluIHRoZSBjb2x1bW4gYXhpc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhGbGlwQ29sdW1uVmlld31cbiAgICAgICAgICovXG4gICAgICAgIGZsaXBDb2x1bW5WaWV3KCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhGbGlwQ29sdW1uVmlldyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiBhIHN1Ym1hdHJpeCBnaXZpbmcgdGhlIGluZGV4IGJvdW5kYXJpZXNcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Um93IC0gZmlyc3Qgcm93IGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFJvdyAtIGxhc3Qgcm93IGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0Q29sdW1uIC0gZmlyc3QgY29sdW1uIGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZENvbHVtbiAtIGxhc3QgY29sdW1uIGluZGV4IG9mIHRoZSBzdWJtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4U3ViVmlld31cbiAgICAgICAgICovXG4gICAgICAgIHN1Yk1hdHJpeFZpZXcoc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhTdWJWaWV3KHRoaXMsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSB2aWV3IG9mIHRoZSBjcm9zcyBvZiB0aGUgcm93IGluZGljZXMgYW5kIHRoZSBjb2x1bW4gaW5kaWNlc1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAvLyByZXN1bHRpbmcgdmVjdG9yIGlzIFtbMl0sIFsyXV1cbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDIsM10sIFs0LDUsNl1dKS5zZWxlY3Rpb25WaWV3KFswLCAwXSwgWzFdKVxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHJvd0luZGljZXNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb2x1bW5JbmRpY2VzXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFNlbGVjdGlvblZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb25WaWV3KHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4U2VsZWN0aW9uVmlldyh0aGlzLCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgcm93IGluZGljZXNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogLy8gcmVzdWx0aW5nIHZlY3RvciBpcyBbWzEsMiwzXSwgWzEsMiwzXV1cbiAgICAgICAgICogdmFyIG1hdHJpeCA9IG5ldyBNYXRyaXgoW1sxLDIsM10sIFs0LDUsNl1dKS5yb3dTZWxlY3Rpb25WaWV3KFswLCAwXSlcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSByb3dJbmRpY2VzXG4gICAgICAgICAqIEByZXR1cm4ge01hdHJpeFJvd1NlbGVjdGlvblZpZXd9XG4gICAgICAgICAqL1xuICAgICAgICByb3dTZWxlY3Rpb25WaWV3KHJvd0luZGljZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4Um93U2VsZWN0aW9uVmlldyh0aGlzLCByb3dJbmRpY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgdmlldyBvZiB0aGUgY29sdW1uIGluZGljZXNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogLy8gcmVzdWx0aW5nIHZlY3RvciBpcyBbWzIsIDJdLCBbNSwgNV1dXG4gICAgICAgICAqIHZhciBtYXRyaXggPSBuZXcgTWF0cml4KFtbMSwyLDNdLCBbNCw1LDZdXSkuY29sdW1uU2VsZWN0aW9uVmlldyhbMSwgMV0pXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29sdW1uSW5kaWNlc1xuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXhDb2x1bW5TZWxlY3Rpb25WaWV3fVxuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uU2VsZWN0aW9uVmlldyhjb2x1bW5JbmRpY2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcodGhpcywgY29sdW1uSW5kaWNlcyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIENhbGN1bGF0ZXMgYW5kIHJldHVybnMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4IGFzIGEgTnVtYmVyXG4gICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgKiAgIG5ldyBNYXRyaXgoW1sxLDIsM10sIFs0LDUsNl1dKS5kZXQoKVxuICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgKi9cbiAgICAgICAgZGV0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgICAgIHZhciBhLCBiLCBjLCBkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMiB4IDIgbWF0cml4XG4gICAgICAgICAgICAgICAgICAgIGEgPSB0aGlzLmdldCgwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHRoaXMuZ2V0KDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjID0gdGhpcy5nZXQoMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGQgPSB0aGlzLmdldCgxLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAqIGQgLSAoYiAqIGMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5zID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDMgeCAzIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ViTWF0cml4MCwgc3ViTWF0cml4MSwgc3ViTWF0cml4MjtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWF0cml4MCA9IHRoaXMuc2VsZWN0aW9uVmlldyhbMSwgMl0sIFsxLCAyXSk7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1hdHJpeDEgPSB0aGlzLnNlbGVjdGlvblZpZXcoWzEsIDJdLCBbMCwgMl0pO1xuICAgICAgICAgICAgICAgICAgICBzdWJNYXRyaXgyID0gdGhpcy5zZWxlY3Rpb25WaWV3KFsxLCAyXSwgWzAsIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHRoaXMuZ2V0KDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBiID0gdGhpcy5nZXQoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGMgPSB0aGlzLmdldCgwLCAyKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAqIHN1Yk1hdHJpeDAuZGV0KCkgLSBiICogc3ViTWF0cml4MS5kZXQoKSArIGMgKiBzdWJNYXRyaXgyLmRldCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdlbmVyYWwgcHVycG9zZSBkZXRlcm1pbmFudCB1c2luZyB0aGUgTFUgZGVjb21wb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEx1RGVjb21wb3NpdGlvbih0aGlzKS5kZXRlcm1pbmFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0RldGVybWluYW50IGNhbiBvbmx5IGJlIGNhbGN1bGF0ZWQgZm9yIGEgc3F1YXJlIG1hdHJpeC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGludmVyc2Ugb2YgYSBtYXRyaXggaWYgaXQgZXhpc3RzIG9yIHRoZSBwc2V1ZG9pbnZlcnNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aHJlc2hvbGQgLSB0aHJlc2hvbGQgZm9yIHRha2luZyBpbnZlcnNlIG9mIHNpbmd1bGFyIHZhbHVlcyAoZGVmYXVsdCA9IDFlLTE1KVxuICAgICAgICAgKiBAcmV0dXJuIHtNYXRyaXh9IHRoZSAocHNldWRvKWludmVydGVkIG1hdHJpeC5cbiAgICAgICAgICovXG4gICAgICAgIHBzZXVkb0ludmVyc2UodGhyZXNob2xkKSB7XG4gICAgICAgICAgICBpZiAodGhyZXNob2xkID09PSB1bmRlZmluZWQpIHRocmVzaG9sZCA9IE51bWJlci5FUFNJTE9OO1xuICAgICAgICAgICAgdmFyIHN2ZFNvbHV0aW9uID0gbmV3IFN2RGVjb21wb3NpdGlvbih0aGlzLCB7YXV0b1RyYW5zcG9zZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICB2YXIgVSA9IHN2ZFNvbHV0aW9uLmxlZnRTaW5ndWxhclZlY3RvcnM7XG4gICAgICAgICAgICB2YXIgViA9IHN2ZFNvbHV0aW9uLnJpZ2h0U2luZ3VsYXJWZWN0b3JzO1xuICAgICAgICAgICAgdmFyIHMgPSBzdmRTb2x1dGlvbi5kaWFnb25hbDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNbaV0pID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNbaV0gPSAxLjAgLyBzW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNbaV0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb252ZXJ0IGxpc3QgdG8gZGlhZ29uYWxcbiAgICAgICAgICAgIHMgPSB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXS5kaWFnKHMpO1xuICAgICAgICAgICAgcmV0dXJuIFYubW11bChzLm1tdWwoVS50cmFuc3Bvc2VWaWV3KCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIGV4YWN0IGFuZCBpbmRlcGVuZGVudCBjb3B5IG9mIHRoZSBtYXRyaXhcbiAgICAgICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAgICAgKi9cbiAgICAgICAgY2xvbmUoKSB7XG4gICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRoaXMucm93czsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC5zZXQocm93LCBjb2x1bW4sIHRoaXMuZ2V0KHJvdywgY29sdW1uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE1hdHJpeC5wcm90b3R5cGUua2xhc3MgPSAnTWF0cml4JztcblxuICAgIGZ1bmN0aW9uIGNvbXBhcmVOdW1iZXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH1cblxuICAgIC8qXG4gICAgIFN5bm9ueW1zXG4gICAgICovXG5cbiAgICBNYXRyaXgucmFuZG9tID0gTWF0cml4LnJhbmQ7XG4gICAgTWF0cml4LmRpYWdvbmFsID0gTWF0cml4LmRpYWc7XG4gICAgTWF0cml4LnByb3RvdHlwZS5kaWFnb25hbCA9IE1hdHJpeC5wcm90b3R5cGUuZGlhZztcbiAgICBNYXRyaXguaWRlbnRpdHkgPSBNYXRyaXguZXllO1xuICAgIE1hdHJpeC5wcm90b3R5cGUubmVnYXRlID0gTWF0cml4LnByb3RvdHlwZS5uZWc7XG4gICAgTWF0cml4LnByb3RvdHlwZS50ZW5zb3JQcm9kdWN0ID0gTWF0cml4LnByb3RvdHlwZS5rcm9uZWNrZXJQcm9kdWN0O1xuICAgIE1hdHJpeC5wcm90b3R5cGUuZGV0ZXJtaW5hbnQgPSBNYXRyaXgucHJvdG90eXBlLmRldDtcblxuICAgIC8qXG4gICAgIEFkZCBkeW5hbWljYWxseSBpbnN0YW5jZSBhbmQgc3RhdGljIG1ldGhvZHMgZm9yIG1hdGhlbWF0aWNhbCBvcGVyYXRpb25zXG4gICAgICovXG5cbiAgICB2YXIgaW5wbGFjZU9wZXJhdG9yID0gYFxuKGZ1bmN0aW9uICVuYW1lJSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy4lbmFtZSVTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy4lbmFtZSVNKHZhbHVlKTtcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VPcGVyYXRvclNjYWxhciA9IGBcbihmdW5jdGlvbiAlbmFtZSVTKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAlb3AlIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VPcGVyYXRvck1hdHJpeCA9IGBcbihmdW5jdGlvbiAlbmFtZSVNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IHRoaXMuY29uc3RydWN0b3IuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAlb3AlIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG5cbiAgICB2YXIgc3RhdGljT3BlcmF0b3IgPSBgXG4oZnVuY3Rpb24gJW5hbWUlKG1hdHJpeCwgdmFsdWUpIHtcbiAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXNbU3ltYm9sLnNwZWNpZXNdKG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC4lbmFtZSUodmFsdWUpO1xufSlcbmA7XG5cbiAgICB2YXIgaW5wbGFjZU1ldGhvZCA9IGBcbihmdW5jdGlvbiAlbmFtZSUoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCAlbWV0aG9kJSh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufSlcbmA7XG5cbiAgICB2YXIgc3RhdGljTWV0aG9kID0gYFxuKGZ1bmN0aW9uICVuYW1lJShtYXRyaXgpIHtcbiAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXNbU3ltYm9sLnNwZWNpZXNdKG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC4lbmFtZSUoKTtcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VNZXRob2RXaXRoQXJncyA9IGBcbihmdW5jdGlvbiAlbmFtZSUoJWFyZ3MlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnNldChpLCBqLCAlbWV0aG9kJSh0aGlzLmdldChpLCBqKSwgJWFyZ3MlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcblxuICAgIHZhciBzdGF0aWNNZXRob2RXaXRoQXJncyA9IGBcbihmdW5jdGlvbiAlbmFtZSUobWF0cml4LCAlYXJncyUpIHtcbiAgICB2YXIgbmV3TWF0cml4ID0gbmV3IHRoaXNbU3ltYm9sLnNwZWNpZXNdKG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC4lbmFtZSUoJWFyZ3MlKTtcbn0pXG5gO1xuXG5cbiAgICB2YXIgaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmdTY2FsYXIgPSBgXG4oZnVuY3Rpb24gJW5hbWUlUyh2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgJW1ldGhvZCUodGhpcy5nZXQoaSwgaiksIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59KVxuYDtcbiAgICB2YXIgaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmdNYXRyaXggPSBgXG4oZnVuY3Rpb24gJW5hbWUlTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSB0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zZXQoaSwgaiwgJW1ldGhvZCUodGhpcy5nZXQoaSwgaiksIG1hdHJpeC5nZXQoaSwgaikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn0pXG5gO1xuXG4gICAgdmFyIGlucGxhY2VNZXRob2RXaXRoT25lQXJnID0gYFxuKGZ1bmN0aW9uICVuYW1lJSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy4lbmFtZSVTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy4lbmFtZSVNKHZhbHVlKTtcbn0pXG5gO1xuXG4gICAgdmFyIHN0YXRpY01ldGhvZFdpdGhPbmVBcmcgPSBzdGF0aWNNZXRob2RXaXRoQXJncztcblxuICAgIHZhciBvcGVyYXRvcnMgPSBbXG4gICAgICAgIC8vIEFyaXRobWV0aWMgb3BlcmF0b3JzXG4gICAgICAgIFsnKycsICdhZGQnXSxcbiAgICAgICAgWyctJywgJ3N1YicsICdzdWJ0cmFjdCddLFxuICAgICAgICBbJyonLCAnbXVsJywgJ211bHRpcGx5J10sXG4gICAgICAgIFsnLycsICdkaXYnLCAnZGl2aWRlJ10sXG4gICAgICAgIFsnJScsICdtb2QnLCAnbW9kdWx1cyddLFxuICAgICAgICAvLyBCaXR3aXNlIG9wZXJhdG9yc1xuICAgICAgICBbJyYnLCAnYW5kJ10sXG4gICAgICAgIFsnfCcsICdvciddLFxuICAgICAgICBbJ14nLCAneG9yJ10sXG4gICAgICAgIFsnPDwnLCAnbGVmdFNoaWZ0J10sXG4gICAgICAgIFsnPj4nLCAnc2lnblByb3BhZ2F0aW5nUmlnaHRTaGlmdCddLFxuICAgICAgICBbJz4+PicsICdyaWdodFNoaWZ0JywgJ3plcm9GaWxsUmlnaHRTaGlmdCddXG4gICAgXTtcblxuICAgIHZhciBpO1xuICAgIHZhciBldmFsMiA9IGV2YWw7XG4gICAgZm9yICh2YXIgb3BlcmF0b3Igb2Ygb3BlcmF0b3JzKSB7XG4gICAgICAgIHZhciBpbnBsYWNlT3AgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlT3BlcmF0b3IsIHtuYW1lOiBvcGVyYXRvclsxXSwgb3A6IG9wZXJhdG9yWzBdfSkpO1xuICAgICAgICB2YXIgaW5wbGFjZU9wUyA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VPcGVyYXRvclNjYWxhciwge25hbWU6IG9wZXJhdG9yWzFdICsgJ1MnLCBvcDogb3BlcmF0b3JbMF19KSk7XG4gICAgICAgIHZhciBpbnBsYWNlT3BNID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU9wZXJhdG9yTWF0cml4LCB7bmFtZTogb3BlcmF0b3JbMV0gKyAnTScsIG9wOiBvcGVyYXRvclswXX0pKTtcbiAgICAgICAgdmFyIHN0YXRpY09wID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oc3RhdGljT3BlcmF0b3IsIHtuYW1lOiBvcGVyYXRvclsxXX0pKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG9wZXJhdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW29wZXJhdG9yW2ldXSA9IGlucGxhY2VPcDtcbiAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbb3BlcmF0b3JbaV0gKyAnUyddID0gaW5wbGFjZU9wUztcbiAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbb3BlcmF0b3JbaV0gKyAnTSddID0gaW5wbGFjZU9wTTtcbiAgICAgICAgICAgIE1hdHJpeFtvcGVyYXRvcltpXV0gPSBzdGF0aWNPcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgICBbJ34nLCAnbm90J11cbiAgICBdO1xuXG4gICAgW1xuICAgICAgICAnYWJzJywgJ2Fjb3MnLCAnYWNvc2gnLCAnYXNpbicsICdhc2luaCcsICdhdGFuJywgJ2F0YW5oJywgJ2NicnQnLCAnY2VpbCcsXG4gICAgICAgICdjbHozMicsICdjb3MnLCAnY29zaCcsICdleHAnLCAnZXhwbTEnLCAnZmxvb3InLCAnZnJvdW5kJywgJ2xvZycsICdsb2cxcCcsXG4gICAgICAgICdsb2cxMCcsICdsb2cyJywgJ3JvdW5kJywgJ3NpZ24nLCAnc2luJywgJ3NpbmgnLCAnc3FydCcsICd0YW4nLCAndGFuaCcsICd0cnVuYydcbiAgICBdLmZvckVhY2goZnVuY3Rpb24gKG1hdGhNZXRob2QpIHtcbiAgICAgICAgbWV0aG9kcy5wdXNoKFsnTWF0aC4nICsgbWF0aE1ldGhvZCwgbWF0aE1ldGhvZF0pO1xuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgbWV0aG9kIG9mIG1ldGhvZHMpIHtcbiAgICAgICAgdmFyIGlucGxhY2VNZXRoID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZCwge25hbWU6IG1ldGhvZFsxXSwgbWV0aG9kOiBtZXRob2RbMF19KSk7XG4gICAgICAgIHZhciBzdGF0aWNNZXRoID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oc3RhdGljTWV0aG9kLCB7bmFtZTogbWV0aG9kWzFdfSkpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbWV0aG9kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW21ldGhvZFtpXV0gPSBpbnBsYWNlTWV0aDtcbiAgICAgICAgICAgIE1hdHJpeFttZXRob2RbaV1dID0gc3RhdGljTWV0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtZXRob2RzV2l0aEFyZ3MgPSBbXG4gICAgICAgIFsnTWF0aC5wb3cnLCAxLCAncG93J11cbiAgICBdO1xuXG4gICAgZm9yICh2YXIgbWV0aG9kV2l0aEFyZyBvZiBtZXRob2RzV2l0aEFyZ3MpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSAnYXJnMCc7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBtZXRob2RXaXRoQXJnWzFdOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3MgKz0gYCwgYXJnJHtpfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZFdpdGhBcmdbMV0gIT09IDEpIHtcbiAgICAgICAgICAgIHZhciBpbnBsYWNlTWV0aFdpdGhBcmdzID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZFdpdGhBcmdzLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogbWV0aG9kV2l0aEFyZ1syXSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZFdpdGhBcmdbMF0sXG4gICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIHN0YXRpY01ldGhXaXRoQXJncyA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKHN0YXRpY01ldGhvZFdpdGhBcmdzLCB7bmFtZTogbWV0aG9kV2l0aEFyZ1syXSwgYXJnczogYXJnc30pKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDI7IGkgPCBtZXRob2RXaXRoQXJnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVttZXRob2RXaXRoQXJnW2ldXSA9IGlucGxhY2VNZXRoV2l0aEFyZ3M7XG4gICAgICAgICAgICAgICAgTWF0cml4W21ldGhvZFdpdGhBcmdbaV1dID0gc3RhdGljTWV0aFdpdGhBcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRtcGxWYXIgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbWV0aG9kV2l0aEFyZ1syXSxcbiAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kV2l0aEFyZ1swXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBpbnBsYWNlTWV0aG9kMiA9IGV2YWwyKGZpbGxUZW1wbGF0ZUZ1bmN0aW9uKGlucGxhY2VNZXRob2RXaXRoT25lQXJnLCB0bXBsVmFyKSk7XG4gICAgICAgICAgICB2YXIgaW5wbGFjZU1ldGhvZFMgPSBldmFsMihmaWxsVGVtcGxhdGVGdW5jdGlvbihpbnBsYWNlTWV0aG9kV2l0aE9uZUFyZ1NjYWxhciwgdG1wbFZhcikpO1xuICAgICAgICAgICAgdmFyIGlucGxhY2VNZXRob2RNID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oaW5wbGFjZU1ldGhvZFdpdGhPbmVBcmdNYXRyaXgsIHRtcGxWYXIpKTtcbiAgICAgICAgICAgIHZhciBzdGF0aWNNZXRob2QyID0gZXZhbDIoZmlsbFRlbXBsYXRlRnVuY3Rpb24oc3RhdGljTWV0aG9kV2l0aE9uZUFyZywgdG1wbFZhcikpO1xuICAgICAgICAgICAgZm9yIChpID0gMjsgaSA8IG1ldGhvZFdpdGhBcmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBNYXRyaXgucHJvdG90eXBlW21ldGhvZFdpdGhBcmdbaV1dID0gaW5wbGFjZU1ldGhvZDI7XG4gICAgICAgICAgICAgICAgTWF0cml4LnByb3RvdHlwZVttZXRob2RXaXRoQXJnW2ldICsgJ00nXSA9IGlucGxhY2VNZXRob2RNO1xuICAgICAgICAgICAgICAgIE1hdHJpeC5wcm90b3R5cGVbbWV0aG9kV2l0aEFyZ1tpXSArICdTJ10gPSBpbnBsYWNlTWV0aG9kUztcbiAgICAgICAgICAgICAgICBNYXRyaXhbbWV0aG9kV2l0aEFyZ1tpXV0gPSBzdGF0aWNNZXRob2QyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsbFRlbXBsYXRlRnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcykge1xuICAgICAgICBmb3IgKHZhciB2YWx1ZSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKCclJyArIHZhbHVlICsgJyUnLCAnZycpLCB2YWx1ZXNbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdHJpeDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvYWJzdHJhY3RNYXRyaXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBlbnVtIENvbG9yU3BhY2VUeXBlIHtcclxuICBZQ2JDcixcclxuICBIU1YsXHJcbiAgTGFiXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0NvbG9yU3BhY2VUeXBlLnRzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHlwZXJIVE1MLkNvbXBvbmVudCBpcyBhIHZlcnkgYmFzaWMgY2xhc3Ncbi8vIGFibGUgdG8gY3JlYXRlIEN1c3RvbSBFbGVtZW50cyBsaWtlIGNvbXBvbmVudHNcbi8vIGluY2x1ZGluZyB0aGUgYWJpbGl0eSB0byBsaXN0ZW4gdG8gY29ubmVjdC9kaXNjb25uZWN0XG4vLyBldmVudHMgdmlhIG9uY29ubmVjdC9vbmRpc2Nvbm5lY3QgYXR0cmlidXRlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KCkge31cblxuLy8gY29tcG9uZW50cyB3aWxsIGxhemlseSBkZWZpbmUgaHRtbCBvciBzdmcgcHJvcGVydGllc1xuLy8gYXMgc29vbiBhcyB0aGVzZSBhcmUgaW52b2tlZCB3aXRoaW4gdGhlIC5yZW5kZXIoKSBtZXRob2Rcbi8vIFN1Y2ggcmVuZGVyKCkgbWV0aG9kIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgYmFzZSBjbGFzc1xuLy8gYnV0IGl0IG11c3QgYmUgYXZhaWxhYmxlIHRocm91Z2ggdGhlIENvbXBvbmVudCBleHRlbmQuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoY29udGVudCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBDb21wb25lbnQucHJvdG90eXBlLFxuICAgIHtcbiAgICAgIGhhbmRsZUV2ZW50OiB7dmFsdWUoZSkge1xuICAgICAgICBjb25zdCBjdCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgdGhpc1tcbiAgICAgICAgICAoJ2dldEF0dHJpYnV0ZScgaW4gY3QgJiYgY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGwnKSkgfHxcbiAgICAgICAgICAoJ29uJyArIGUudHlwZSlcbiAgICAgICAgXShlKTtcbiAgICAgIH19LFxuICAgICAgaHRtbDogbGF6eUdldHRlcignaHRtbCcsIGNvbnRlbnQpLFxuICAgICAgc3ZnOiBsYXp5R2V0dGVyKCdzdmcnLCBjb250ZW50KSxcbiAgICAgIHN0YXRlOiBsYXp5R2V0dGVyKCdzdGF0ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGVmYXVsdFN0YXRlOyB9KSxcbiAgICAgIGRlZmF1bHRTdGF0ZToge2dldCgpIHsgcmV0dXJuIHt9OyB9fSxcbiAgICAgIHNldFN0YXRlOiB7dmFsdWUoc3RhdGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qgc291cmNlID0gdHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nID8gc3RhdGUuY2FsbCh0aGlzLCB0YXJnZXQpIDogc3RhdGU7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH19XG4gICAgfVxuICApO1xufVxuXG4vLyBpbnN0ZWFkIG9mIGEgc2VjcmV0IGtleSBJIGNvdWxkJ3ZlIHVzZWQgYSBXZWFrTWFwXG4vLyBIb3dldmVyLCBhdHRhY2hpbmcgYSBwcm9wZXJ0eSBkaXJlY3RseSB3aWxsIHJlc3VsdFxuLy8gaW50byBiZXR0ZXIgcGVyZm9ybWFuY2Ugd2l0aCB0aG91c2FuZHMgb2YgY29tcG9uZW50c1xuLy8gaGFuZ2luZyBhcm91bmQsIGFuZCBsZXNzIG1lbW9yeSBwcmVzc3VyZSBjYXVzZWQgYnkgdGhlIFdlYWtNYXBcbmNvbnN0IGxhenlHZXR0ZXIgPSAodHlwZSwgZm4pID0+IHtcbiAgY29uc3Qgc2VjcmV0ID0gJ18nICsgdHlwZSArICckJztcbiAgcmV0dXJuIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWNyZXRdIHx8ICh0aGlzW3R5cGVdID0gZm4uY2FsbCh0aGlzLCB0eXBlKSk7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBzZWNyZXQsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlfSk7XG4gICAgfVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9Db21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2xvYmFsLCBVSUR9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuLy8geW91IGtub3cgdGhhdCBraW5kIG9mIGJhc2ljcyB5b3UgbmVlZCB0byBjb3ZlclxuLy8geW91ciB1c2UgY2FzZSBvbmx5IGJ1dCB5b3UgZG9uJ3Qgd2FudCB0byBibG9hdCB0aGUgbGlicmFyeT9cbi8vIFRoZXJlJ3MgZXZlbiBhIHBhY2thZ2UgaW4gaGVyZTpcbi8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3Bvb3JseWZpbGxzXG5cbi8vIHVzZWQgdG8gZGlzcGF0Y2ggc2ltcGxlIGV2ZW50c1xubGV0IEV2ZW50ID0gZ2xvYmFsLkV2ZW50O1xudHJ5IHtcbiAgbmV3IEV2ZW50KCdFdmVudCcpO1xufSBjYXRjaChvX08pIHtcbiAgRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBlLmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICAgIHJldHVybiBlO1xuICB9O1xufVxuZXhwb3J0IHtFdmVudH07XG5cbi8vIHVzZWQgdG8gc3RvcmUgdGVtcGxhdGUgbGl0ZXJhbHNcbmV4cG9ydCBjb25zdCBNYXAgPSBnbG9iYWwuTWFwIHx8IGZ1bmN0aW9uIE1hcCgpIHtcbiAgY29uc3Qga2V5cyA9IFtdLCB2YWx1ZXMgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBnZXQob2JqKSB7XG4gICAgICByZXR1cm4gdmFsdWVzW2tleXMuaW5kZXhPZihvYmopXTtcbiAgICB9LFxuICAgIHNldChvYmosIHZhbHVlKSB7XG4gICAgICB2YWx1ZXNba2V5cy5wdXNoKG9iaikgLSAxXSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcbn07XG5cbi8vIHVzZWQgdG8gc3RvcmUgd2lyZWQgY29udGVudFxuZXhwb3J0IGNvbnN0IFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcCB8fCBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICByZXR1cm4ge1xuICAgIGdldChvYmopIHsgcmV0dXJuIG9ialtVSURdOyB9LFxuICAgIHNldChvYmosIHZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBVSUQsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxuLy8gdXNlZCB0byBzdG9yZSBoeXBlci5Db21wb25lbnRzXG5leHBvcnQgY29uc3QgV2Vha1NldCA9IGdsb2JhbC5XZWFrU2V0IHx8IGZ1bmN0aW9uIFdlYWtTZXQoKSB7XG4gIGNvbnN0IHdtID0gbmV3IFdlYWtNYXA7XG4gIHJldHVybiB7XG4gICAgYWRkKG9iaikgeyB3bS5zZXQob2JqLCB0cnVlKTsgfSxcbiAgICBoYXMob2JqKSB7IHJldHVybiB3bS5nZXQob2JqKSA9PT0gdHJ1ZTsgfVxuICB9O1xufTtcblxuLy8gdXNlZCB0byBiZSBzdXJlIElFOSBvciBvbGRlciBBbmRyb2lkcyB3b3JrIGFzIGV4cGVjdGVkXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgKHRvU3RyaW5nID0+XG4gIGFyciA9PiB0b1N0cmluZy5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSdcbikoe30udG9TdHJpbmcpO1xuXG5leHBvcnQgY29uc3QgdHJpbSA9IFVJRC50cmltIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vc2hhcmVkL3Bvb3JseWZpbGxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb2xvclBvaW50IH0gZnJvbSAnbW9kZWxzL0NvbG9yUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcmVkUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGdyZWVuUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGJsdWVQb2ludDogQ29sb3JQb2ludDtcclxuICBwdWJsaWMgcmVhZG9ubHkgd2hpdGVQb2ludDogQ29sb3JQb2ludDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZ2FtbWE6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWRQb2ludDogQ29sb3JQb2ludCxcclxuICAgIGdyZWVuUG9pbnQ6IENvbG9yUG9pbnQsXHJcbiAgICBibHVlUG9pbnQ6IENvbG9yUG9pbnQsXHJcbiAgICB3aGl0ZVBvaW50OiBDb2xvclBvaW50LFxyXG4gICAgZ2FtbWE6IG51bWJlclxyXG4gICkge1xyXG4gICAgdGhpcy5yZWRQb2ludCA9IHJlZFBvaW50O1xyXG4gICAgdGhpcy5ncmVlblBvaW50ID0gZ3JlZW5Qb2ludDtcclxuICAgIHRoaXMuYmx1ZVBvaW50ID0gYmx1ZVBvaW50O1xyXG4gICAgdGhpcy53aGl0ZVBvaW50ID0gd2hpdGVQb2ludDtcclxuICAgIHRoaXMuZ2FtbWEgPSBnYW1tYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc1JHQigpOiBDb252ZXJzaW9uUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4gbmV3IENvbnZlcnNpb25QYXJhbWV0ZXJzKFxyXG4gICAgICB7IHg6IDAuNjQsIHk6IDAuMzMgfSxcclxuICAgICAgeyB4OiAwLjMsIHk6IDAuNiB9LFxyXG4gICAgICB7IHg6IDAuMTUsIHk6IDAuMDYgfSxcclxuICAgICAgeyB4OiAwLjMxMjcsIHk6IDAuMzI5IH0sXHJcbiAgICAgIDIuMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRvYmVSR0IoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjY0LCB5OiAwLjMzIH0sXHJcbiAgICAgIHsgeDogMC4yMSwgeTogMC43MSB9LFxyXG4gICAgICB7IHg6IDAuMTUsIHk6IDAuMDYgfSxcclxuICAgICAgeyB4OiAwLjMxMjcsIHk6IDAuMzI5IH0sXHJcbiAgICAgIDIuMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXBwbGVSR0IoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjYyNSwgeTogMC4zNCB9LFxyXG4gICAgICB7IHg6IDAuMjgsIHk6IDAuNTk1IH0sXHJcbiAgICAgIHsgeDogMC4xNTUsIHk6IDAuMDcgfSxcclxuICAgICAgeyB4OiAwLjMxMjcsIHk6IDAuMzI5IH0sXHJcbiAgICAgIDEuOFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2llUkdCKCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC43MzUsIHk6IDAuMjY1MCB9LFxyXG4gICAgICB7IHg6IDAuMjc0LCB5OiAwLjcxNyB9LFxyXG4gICAgICB7IHg6IDAuMTY3LCB5OiAwLjAwOSB9LFxyXG4gICAgICB7IHg6IDAuMzMzMywgeTogMC4zMzMzIH0sXHJcbiAgICAgIDIuMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2lkZUdhbXV0KCk6IENvbnZlcnNpb25QYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgIHsgeDogMC43MzQ3LCB5OiAwLjI2NTMgfSxcclxuICAgICAgeyB4OiAwLjExNTIsIHk6IDAuODI2NCB9LFxyXG4gICAgICB7IHg6IDAuMTU2NiwgeTogMC4wMTc3IH0sXHJcbiAgICAgIHsgeDogMC4zNDU3LCB5OiAwLjM1ODUgfSxcclxuICAgICAgMS4yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwYWwoKTogQ29udmVyc2lvblBhcmFtZXRlcnMge1xyXG4gICAgcmV0dXJuIG5ldyBDb252ZXJzaW9uUGFyYW1ldGVycyhcclxuICAgICAgeyB4OiAwLjY0LCB5OiAwLjMzIH0sXHJcbiAgICAgIHsgeDogMC4yOSwgeTogMC42IH0sXHJcbiAgICAgIHsgeDogMC4xNSwgeTogMC4wNiB9LFxyXG4gICAgICB7IHg6IDAuMzEyNywgeTogMC4zMjkgfSxcclxuICAgICAgMS45NVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05WRVJTSU9OX0ZJTklTSEVEID0gJ0NPTlZFUlNJT05fRklOSVNIRUQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnNpb25GaW5pc2hlZChcclxuICBjb252ZXJzaW9uUmVzdWx0OiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCxcclxuICByZXN1bHRJbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXVxyXG4pOiBBbnlBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDT05WRVJTSU9OX0ZJTklTSEVELFxyXG4gICAgY29udmVyc2lvblJlc3VsdCxcclxuICAgIHJlc3VsdEltYWdlc1xyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25GaW5pc2hlZC50cyIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfT1JJR0lOQUxfSU1BR0UgPSAnQ0hBTkdFX09SSUdJTkFMX0lNQUdFJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlT3JpZ2luYWxJbWFnZUFjdGlvbiBleHRlbmRzIEFueUFjdGlvbiB7XHJcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VPcmlnaW5hbEltYWdlKFxyXG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50XHJcbik6IENoYW5nZU9yaWdpbmFsSW1hZ2VBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDSEFOR0VfT1JJR0lOQUxfSU1BR0UsXHJcbiAgICBpbWFnZVxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9pbnB1dC9jaGFuZ2VPcmlnaW5hbEltYWdlLnRzIiwiZXhwb3J0IGNsYXNzIFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgdmFsdWVzOiBudW1iZXJbXTtcclxuICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIHZhbHVlczogbnVtYmVyW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEltYWdlRGF0YSgpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgbGV0IGltYWdlRGF0YUluZGV4ID0gMDtcclxuXHJcbiAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8taW5jcmVtZW50LWRlY3JlbWVudFxyXG4gICAgICBpbWFnZURhdGEuZGF0YVtpbWFnZURhdGFJbmRleCsrXSA9IHZhbHVlO1xyXG4gICAgICBpbWFnZURhdGEuZGF0YVtpbWFnZURhdGFJbmRleCsrXSA9IHZhbHVlO1xyXG4gICAgICBpbWFnZURhdGEuZGF0YVtpbWFnZURhdGFJbmRleCsrXSA9IHZhbHVlO1xyXG4gICAgICBpbWFnZURhdGEuZGF0YVtpbWFnZURhdGFJbmRleCsrXSA9IDI1NTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8taW5jcmVtZW50LWRlY3JlbWVudFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdC50cyIsImltcG9ydCB7TWF0cml4LCBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4uL2luZGV4JztcblxuLyoqXG4gKiBAY2xhc3MgTHVEZWNvbXBvc2l0aW9uXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbHV0enJvZWRlci9NYXBhY2svYmxvYi9tYXN0ZXIvU291cmNlL0x1RGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMdURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgICAgICBtYXRyaXggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobWF0cml4KTtcblxuICAgICAgICB2YXIgbHUgPSBtYXRyaXguY2xvbmUoKTtcbiAgICAgICAgdmFyIHJvd3MgPSBsdS5yb3dzO1xuICAgICAgICB2YXIgY29sdW1ucyA9IGx1LmNvbHVtbnM7XG4gICAgICAgIHZhciBwaXZvdFZlY3RvciA9IG5ldyBBcnJheShyb3dzKTtcbiAgICAgICAgdmFyIHBpdm90U2lnbiA9IDE7XG4gICAgICAgIHZhciBpLCBqLCBrLCBwLCBzLCB0LCB2O1xuICAgICAgICB2YXIgTFVjb2xqLCBrbWF4O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHBpdm90VmVjdG9yW2ldID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIExVY29saiA9IG5ldyBBcnJheShyb3dzKTtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBMVWNvbGpbaV0gPSBsdS5nZXQoaSwgaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrbWF4ID0gTWF0aC5taW4oaSwgaik7XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGttYXg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzICs9IGx1LmdldChpLCBrKSAqIExVY29saltrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTFVjb2xqW2ldIC09IHM7XG4gICAgICAgICAgICAgICAgbHUuc2V0KGksIGosIExVY29saltpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBqO1xuICAgICAgICAgICAgZm9yIChpID0gaiArIDE7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoTFVjb2xqW2ldKSA+IE1hdGguYWJzKExVY29saltwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocCAhPT0gaikge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBjb2x1bW5zOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IGx1LmdldChwLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgbHUuc2V0KHAsIGssIGx1LmdldChqLCBrKSk7XG4gICAgICAgICAgICAgICAgICAgIGx1LnNldChqLCBrLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2ID0gcGl2b3RWZWN0b3JbcF07XG4gICAgICAgICAgICAgICAgcGl2b3RWZWN0b3JbcF0gPSBwaXZvdFZlY3RvcltqXTtcbiAgICAgICAgICAgICAgICBwaXZvdFZlY3RvcltqXSA9IHY7XG5cbiAgICAgICAgICAgICAgICBwaXZvdFNpZ24gPSAtcGl2b3RTaWduO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaiA8IHJvd3MgJiYgbHUuZ2V0KGosIGopICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaiArIDE7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbHUuc2V0KGksIGosIGx1LmdldChpLCBqKSAvIGx1LmdldChqLCBqKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5MVSA9IGx1O1xuICAgICAgICB0aGlzLnBpdm90VmVjdG9yID0gcGl2b3RWZWN0b3I7XG4gICAgICAgIHRoaXMucGl2b3RTaWduID0gcGl2b3RTaWduO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1Npbmd1bGFyKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuTFU7XG4gICAgICAgIHZhciBjb2wgPSBkYXRhLmNvbHVtbnM7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2pdW2pdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIHNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0cml4LmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgICAgICB2YXIgbHUgPSB0aGlzLkxVO1xuICAgICAgICB2YXIgcm93cyA9IGx1LnJvd3M7XG5cbiAgICAgICAgaWYgKHJvd3MgIT09IHZhbHVlLnJvd3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXRyaXggZGltZW5zaW9ucycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2luZ3VsYXIoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMVSBtYXRyaXggaXMgc2luZ3VsYXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gdmFsdWUuc3ViTWF0cml4Um93KHRoaXMucGl2b3RWZWN0b3IsIDAsIGNvdW50IC0gMSk7XG4gICAgICAgIHZhciBjb2x1bW5zID0gbHUuY29sdW1ucztcbiAgICAgICAgdmFyIGksIGosIGs7XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IGNvbHVtbnM7IGsrKykge1xuICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdIC09IFhba11bal0gKiBsdVtpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrID0gY29sdW1ucyAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIFhba11bal0gLz0gbHVba11ba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSAtPSBYW2tdW2pdICogbHVbaV1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBkZXRlcm1pbmFudCgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLkxVO1xuICAgICAgICBpZiAoIWRhdGEuaXNTcXVhcmUoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggbXVzdCBiZSBzcXVhcmUnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGV0ZXJtaW5hbnQgPSB0aGlzLnBpdm90U2lnbjtcbiAgICAgICAgdmFyIGNvbCA9IGRhdGEuY29sdW1ucztcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgKj0gZGF0YVtqXVtqXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGV0ZXJtaW5hbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGxvd2VyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLkxVO1xuICAgICAgICB2YXIgcm93cyA9IGRhdGEucm93cztcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBkYXRhLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSBkYXRhW2ldW2pdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IHVwcGVyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLkxVO1xuICAgICAgICB2YXIgcm93cyA9IGRhdGEucm93cztcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBkYXRhLmNvbHVtbnM7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gaikge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gZGF0YVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldCBwaXZvdFBlcm11dGF0aW9uVmVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waXZvdFZlY3Rvci5zbGljZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvbHUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWF0cml4LCBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7aHlwb3RlbnVzZSwgZ2V0RmlsbGVkMkRBcnJheX0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAY2xhc3MgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb25cbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sdXR6cm9lZGVyL01hcGFjay9ibG9iL21hc3Rlci9Tb3VyY2UvU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24uY3NcbiAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycz10cnVlXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb21wdXRlUmlnaHRTaW5ndWxhclZlY3RvcnM9dHJ1ZV1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b1RyYW5zcG9zZT1mYWxzZV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgICAgIHZhciBtID0gdmFsdWUucm93cztcbiAgICAgICAgdmFyIG4gPSB2YWx1ZS5jb2x1bW5zO1xuICAgICAgICB2YXIgbnUgPSBNYXRoLm1pbihtLCBuKTtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycyA9IHRydWUsXG4gICAgICAgICAgICBjb21wdXRlUmlnaHRTaW5ndWxhclZlY3RvcnMgPSB0cnVlLFxuICAgICAgICAgICAgYXV0b1RyYW5zcG9zZSA9IGZhbHNlXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciB3YW50dSA9IEJvb2xlYW4oY29tcHV0ZUxlZnRTaW5ndWxhclZlY3RvcnMpO1xuICAgICAgICB2YXIgd2FudHYgPSBCb29sZWFuKGNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycyk7XG5cbiAgICAgICAgdmFyIHN3YXBwZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGE7XG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgaWYgKCFhdXRvVHJhbnNwb3NlKSB7XG4gICAgICAgICAgICAgICAgYSA9IHZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvbXB1dGluZyBTVkQgb24gYSBtYXRyaXggd2l0aCBtb3JlIGNvbHVtbnMgdGhhbiByb3dzLiBDb25zaWRlciBlbmFibGluZyBhdXRvVHJhbnNwb3NlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGEgPSB2YWx1ZS50cmFuc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBtID0gYS5yb3dzO1xuICAgICAgICAgICAgICAgIG4gPSBhLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgc3dhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGF1eCA9IHdhbnR1O1xuICAgICAgICAgICAgICAgIHdhbnR1ID0gd2FudHY7XG4gICAgICAgICAgICAgICAgd2FudHYgPSBhdXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzID0gbmV3IEFycmF5KE1hdGgubWluKG0gKyAxLCBuKSk7XG4gICAgICAgIHZhciBVID0gZ2V0RmlsbGVkMkRBcnJheShtLCBudSwgMCk7XG4gICAgICAgIHZhciBWID0gZ2V0RmlsbGVkMkRBcnJheShuLCBuLCAwKTtcbiAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXkobik7XG4gICAgICAgIHZhciB3b3JrID0gbmV3IEFycmF5KG0pO1xuXG4gICAgICAgIHZhciBuY3QgPSBNYXRoLm1pbihtIC0gMSwgbik7XG4gICAgICAgIHZhciBucnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMiwgbSkpO1xuXG4gICAgICAgIHZhciBpLCBqLCBrLCBwLCB0LCBrcywgZiwgY3MsIHNuLCBtYXgsIGthc2UsXG4gICAgICAgICAgICBzY2FsZSwgc3AsIHNwbTEsIGVwbTEsIHNrLCBlaywgYiwgYywgc2hpZnQsIGc7XG5cbiAgICAgICAgZm9yIChrID0gMCwgbWF4ID0gTWF0aC5tYXgobmN0LCBucnQpOyBrIDwgbWF4OyBrKyspIHtcbiAgICAgICAgICAgIGlmIChrIDwgbmN0KSB7XG4gICAgICAgICAgICAgICAgc1trXSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzW2tdID0gaHlwb3RlbnVzZShzW2tdLCBhW2ldW2tdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNba10gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFba11ba10gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2tdID0gLXNba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYVtpXVtrXSAvPSBzW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFba11ba10gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc1trXSA9IC1zW2tdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGlmICgoayA8IG5jdCkgJiYgKHNba10gIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ICs9IGFbaV1ba10gKiBhW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQgPSAtdCAvIGFba11ba107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbaV1bal0gKz0gdCAqIGFbaV1ba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZVtqXSA9IGFba11bal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3YW50dSAmJiAoayA8IG5jdCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSBhW2ldW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGsgPCBucnQpIHtcbiAgICAgICAgICAgICAgICBlW2tdID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlW2tdID0gaHlwb3RlbnVzZShlW2tdLCBlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVba10gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbayArIDFdIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZVtrXSA9IDAgLSBlW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlW2ldIC89IGVba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZVtrICsgMV0gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZVtrXSA9IC1lW2tdO1xuICAgICAgICAgICAgICAgIGlmICgoayArIDEgPCBtKSAmJiAoZVtrXSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtbaV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGsgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtbaV0gKz0gZVtqXSAqIGFbaV1bal07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAtZVtqXSAvIGVbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2ldW2pdICs9IHQgKiB3b3JrW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtrXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwID0gTWF0aC5taW4obiwgbSArIDEpO1xuICAgICAgICBpZiAobmN0IDwgbikge1xuICAgICAgICAgICAgc1tuY3RdID0gYVtuY3RdW25jdF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0gPCBwKSB7XG4gICAgICAgICAgICBzW3AgLSAxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ydCArIDEgPCBwKSB7XG4gICAgICAgICAgICBlW25ydF0gPSBhW25ydF1bcCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGVbcCAtIDFdID0gMDtcblxuICAgICAgICBpZiAod2FudHUpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IG5jdDsgaiA8IG51OyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFVbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBVW2pdW2pdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoayA9IG5jdCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNba10gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBudTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9IFVbaV1ba10gKiBVW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IC10IC8gVVtrXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2pdICs9IHQgKiBVW2ldW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSAtVVtpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBVW2tdW2tdID0gMSArIFVba11ba107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2tdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFVba11ba10gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgZm9yIChrID0gbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKChrIDwgbnJ0KSAmJiAoZVtrXSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9IFZbaV1ba10gKiBWW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IC10IC8gVltrICsgMV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1bal0gKz0gdCAqIFZbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrXVtrXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHAgPSBwIC0gMTtcbiAgICAgICAgdmFyIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgZXBzID0gTnVtYmVyLkVQU0lMT047XG4gICAgICAgIHdoaWxlIChwID4gMCkge1xuICAgICAgICAgICAgZm9yIChrID0gcCAtIDI7IGsgPj0gLTE7IGstLSkge1xuICAgICAgICAgICAgICAgIGlmIChrID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVba10pIDw9IGVwcyAqIChNYXRoLmFicyhzW2tdKSArIE1hdGguYWJzKHNbayArIDFdKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZVtrXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID09PSBwIC0gMikge1xuICAgICAgICAgICAgICAgIGthc2UgPSA0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtzID0gcCAtIDE7IGtzID49IGs7IGtzLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtzID09PSBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ID0gKGtzICE9PSBwID8gTWF0aC5hYnMoZVtrc10pIDogMCkgKyAoa3MgIT09IGsgKyAxID8gTWF0aC5hYnMoZVtrcyAtIDFdKSA6IDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc1trc10pIDw9IGVwcyAqIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba3NdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrcyA9PT0gaykge1xuICAgICAgICAgICAgICAgICAgICBrYXNlID0gMztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtzID09PSBwIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBrYXNlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrYXNlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgayA9IGtzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaysrO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGthc2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICAgICAgZiA9IGVbcCAtIDJdO1xuICAgICAgICAgICAgICAgICAgICBlW3AgLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IHAgLSAyOyBqID49IGs7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGh5cG90ZW51c2Uoc1tqXSwgZik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcyA9IHNbal0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc24gPSBmIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogIT09IGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gLXNuICogZVtqIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtqIC0gMV0gPSBjcyAqIGVbaiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gY3MgKiBWW2ldW2pdICsgc24gKiBWW2ldW3AgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtwIC0gMV0gPSAtc24gKiBWW2ldW2pdICsgY3MgKiBWW2ldW3AgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVltpXVtqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIDIgOiB7XG4gICAgICAgICAgICAgICAgICAgIGYgPSBlW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgZVtrIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBrOyBqIDwgcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaHlwb3RlbnVzZShzW2pdLCBmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzID0gc1tqXSAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbiA9IGYgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gLXNuICogZVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbal0gPSBjcyAqIGVbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FudHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBjcyAqIFVbaV1bal0gKyBzbiAqIFVbaV1bayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2sgLSAxXSA9IC1zbiAqIFVbaV1bal0gKyBjcyAqIFVbaV1bayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMyA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1heChNYXRoLmFicyhzW3AgLSAxXSksIE1hdGguYWJzKHNbcCAtIDJdKSwgTWF0aC5hYnMoZVtwIC0gMl0pLCBNYXRoLmFicyhzW2tdKSwgTWF0aC5hYnMoZVtrXSkpO1xuICAgICAgICAgICAgICAgICAgICBzcCA9IHNbcCAtIDFdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHNwbTEgPSBzW3AgLSAyXSAvIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBlcG0xID0gZVtwIC0gMl0gLyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc2sgPSBzW2tdIC8gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGVrID0gZVtrXSAvIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBiID0gKChzcG0xICsgc3ApICogKHNwbTEgLSBzcCkgKyBlcG0xICogZXBtMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICBjID0gKHNwICogZXBtMSkgKiAoc3AgKiBlcG0xKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGIgIT09IDApIHx8IChjICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBNYXRoLnNxcnQoYiAqIGIgKyBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ID0gLXNoaWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBjIC8gKGIgKyBzaGlmdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZiA9IChzayArIHNwKSAqIChzayAtIHNwKSArIHNoaWZ0O1xuICAgICAgICAgICAgICAgICAgICBnID0gc2sgKiBlaztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gazsgaiA8IHAgLSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBoeXBvdGVudXNlKGYsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3MgPSBmIC8gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuID0gZyAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbaiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBjcyAqIHNbal0gKyBzbiAqIGVbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBlW2pdID0gY3MgKiBlW2pdIC0gc24gKiBzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZyA9IHNuICogc1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2ogKyAxXSA9IGNzICogc1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FudHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBjcyAqIFZbaV1bal0gKyBzbiAqIFZbaV1baiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2ogKyAxXSA9IC1zbiAqIFZbaV1bal0gKyBjcyAqIFZbaV1baiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2pdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaHlwb3RlbnVzZShmLCBnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzID0gZiAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbiA9IGcgLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gY3MgKiBlW2pdICsgc24gKiBzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbaiArIDFdID0gLXNuICogZVtqXSArIGNzICogc1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gc24gKiBlW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbaiArIDFdID0gY3MgKiBlW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dSAmJiAoaiA8IG0gLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGNzICogVVtpXVtqXSArIHNuICogVVtpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1baiArIDFdID0gLXNuICogVVtpXVtqXSArIGNzICogVVtpXVtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1bal0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlW3AgLSAyXSA9IGY7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXIgPSBpdGVyICsgMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgNDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc1trXSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2tdID0gKHNba10gPCAwID8gLXNba10gOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gcHA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2tdID0gLVZbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgcHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzW2tdID49IHNbayArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gc1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNba10gPSBzW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbayArIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50diAmJiAoayA8IG4gLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IFZbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2sgKyAxXSA9IFZbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1ba10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YW50dSAmJiAoayA8IG0gLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IFVbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVW2ldW2sgKyAxXSA9IFVbaV1ba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVbaV1ba10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcC0tO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN3YXBwZWQpIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBWO1xuICAgICAgICAgICAgViA9IFU7XG4gICAgICAgICAgICBVID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tID0gbTtcbiAgICAgICAgdGhpcy5uID0gbjtcbiAgICAgICAgdGhpcy5zID0gcztcbiAgICAgICAgdGhpcy5VID0gVTtcbiAgICAgICAgdGhpcy5WID0gVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb2x2ZSBhIHByb2JsZW0gb2YgbGVhc3Qgc3F1YXJlIChBeD1iKSBieSB1c2luZyB0aGUgU1ZELiBVc2VmdWwgd2hlbiBBIGlzIHNpbmd1bGFyLiBXaGVuIEEgaXMgbm90IHNpbmd1bGFyLCBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gdXNlIHFyLnNvbHZlKHZhbHVlKS5cbiAgICAgKiBFeGFtcGxlIDogV2Ugc2VhcmNoIHRvIGFwcHJveGltYXRlIHgsIHdpdGggQSBtYXRyaXggc2hhcGUgbSpuLCB4IHZlY3RvciBzaXplIG4sIGIgdmVjdG9yIHNpemUgbSAobSA+IG4pLiBXZSB3aWxsIHVzZSA6XG4gICAgICogdmFyIHN2ZCA9IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKEEpO1xuICAgICAqIHZhciB4ID0gc3ZkLnNvbHZlKGIpO1xuICAgICAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZSAtIE1hdHJpeCAxRCB3aGljaCBpcyB0aGUgdmVjdG9yIGIgKGluIHRoZSBlcXVhdGlvbiBBeCA9IGIpXG4gICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSB2ZWN0b3IgeFxuICAgICAqL1xuICAgIHNvbHZlKHZhbHVlKSB7XG5cbiAgICAgICAgdmFyIFkgPSB2YWx1ZTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnRocmVzaG9sZDtcbiAgICAgICAgdmFyIHNjb2xzID0gdGhpcy5zLmxlbmd0aDtcbiAgICAgICAgdmFyIExzID0gTWF0cml4Lnplcm9zKHNjb2xzLCBzY29scyk7XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY29sczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zW2ldKSA8PSBlKSB7XG4gICAgICAgICAgICAgICAgTHNbaV1baV0gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMc1tpXVtpXSA9IDEgLyB0aGlzLnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgVSA9IHRoaXMuVTtcbiAgICAgICAgdmFyIFYgPSB0aGlzLnJpZ2h0U2luZ3VsYXJWZWN0b3JzO1xuXG4gICAgICAgIHZhciBWTCA9IFYubW11bChMcyk7XG4gICAgICAgIHZhciB2cm93cyA9IFYucm93cztcbiAgICAgICAgdmFyIHVyb3dzID0gVS5sZW5ndGg7XG4gICAgICAgIHZhciBWTFUgPSBNYXRyaXguemVyb3ModnJvd3MsIHVyb3dzKTtcbiAgICAgICAgdmFyIGosIGssIHN1bTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdnJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHVyb3dzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBzY29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBWTFtpXVtrXSAqIFVbal1ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZMVVtpXVtqXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBWTFUubW11bChZKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgc29sdmVGb3JEaWFnb25hbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb2x2ZShNYXRyaXguZGlhZyh2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW52ZXJzZSBvZiB0aGUgbWF0cml4LiBXZSBjb21wdXRlIHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4IHVzaW5nIFNWRCB3aGVuIHRoaXMgbWF0cml4IGlzIHNpbmd1bGFyIG9yIGlsbC1jb25kaXRpb25lZC4gRXhhbXBsZSA6XG4gICAgICogdmFyIHN2ZCA9IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKEEpO1xuICAgICAqIHZhciBpbnZlcnNlQSA9IHN2ZC5pbnZlcnNlKCk7XG4gICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSBhcHByb3hpbWF0aW9uIG9mIHRoZSBpbnZlcnNlIG9mIHRoZSBtYXRyaXhcbiAgICAgKi9cbiAgICBpbnZlcnNlKCkge1xuICAgICAgICB2YXIgViA9IHRoaXMuVjtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnRocmVzaG9sZDtcbiAgICAgICAgdmFyIHZyb3dzID0gVi5sZW5ndGg7XG4gICAgICAgIHZhciB2Y29scyA9IFZbMF0ubGVuZ3RoO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgodnJvd3MsIHRoaXMucy5sZW5ndGgpO1xuICAgICAgICB2YXIgaSwgajtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdnJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHZjb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zW2pdKSA+IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IFZbaV1bal0gLyB0aGlzLnNbal07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIFUgPSB0aGlzLlU7XG5cbiAgICAgICAgdmFyIHVyb3dzID0gVS5sZW5ndGg7XG4gICAgICAgIHZhciB1Y29scyA9IFVbMF0ubGVuZ3RoO1xuICAgICAgICB2YXIgWSA9IG5ldyBNYXRyaXgodnJvd3MsIHVyb3dzKTtcbiAgICAgICAgdmFyIGssIHN1bTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdnJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHVyb3dzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCB1Y29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBYW2ldW2tdICogVVtqXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgWVtpXVtqXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBjb25kaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNbMF0gLyB0aGlzLnNbTWF0aC5taW4odGhpcy5tLCB0aGlzLm4pIC0gMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IG5vcm0yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCByYW5rKCkge1xuICAgICAgICB2YXIgdG9sID0gTWF0aC5tYXgodGhpcy5tLCB0aGlzLm4pICogdGhpcy5zWzBdICogTnVtYmVyLkVQU0lMT047XG4gICAgICAgIHZhciByID0gMDtcbiAgICAgICAgdmFyIHMgPSB0aGlzLnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNbaV0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICByKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldCBkaWFnb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgdGhyZXNob2xkKCkge1xuICAgICAgICByZXR1cm4gKE51bWJlci5FUFNJTE9OIC8gMikgKiBNYXRoLm1heCh0aGlzLm0sIHRoaXMubikgKiB0aGlzLnNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGxlZnRTaW5ndWxhclZlY3RvcnMoKSB7XG4gICAgICAgIGlmICghTWF0cml4LmlzTWF0cml4KHRoaXMuVSkpIHtcbiAgICAgICAgICAgIHRoaXMuVSA9IG5ldyBNYXRyaXgodGhpcy5VKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5VO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCByaWdodFNpbmd1bGFyVmVjdG9ycygpIHtcbiAgICAgICAgaWYgKCFNYXRyaXguaXNNYXRyaXgodGhpcy5WKSkge1xuICAgICAgICAgICAgdGhpcy5WID0gbmV3IE1hdHJpeCh0aGlzLlYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGRpYWdvbmFsTWF0cml4KCkge1xuICAgICAgICByZXR1cm4gTWF0cml4LmRpYWcodGhpcy5zKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3N2ZC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGh5cG90ZW51c2UoYSwgYikge1xuICAgIHZhciByID0gMDtcbiAgICBpZiAoTWF0aC5hYnMoYSkgPiBNYXRoLmFicyhiKSkge1xuICAgICAgICByID0gYiAvIGE7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhKSAqIE1hdGguc3FydCgxICsgciAqIHIpO1xuICAgIH1cbiAgICBpZiAoYiAhPT0gMCkge1xuICAgICAgICByID0gYSAvIGI7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhiKSAqIE1hdGguc3FydCgxICsgciAqIHIpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGxlZDJEQXJyYXkocm93cywgY29sdW1ucywgdmFsdWUpIHtcbiAgICB2YXIgYXJyYXkgPSBuZXcgQXJyYXkocm93cyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgYXJyYXlbaV0gPSBuZXcgQXJyYXkoY29sdW1ucyk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICBhcnJheVtpXVtqXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdGhpcyBpcyBhbiBvdmVybHkgZGVmZW5zaXZlIGFwcHJvYWNoIHRvIGF2b2lkIGFueSBwb3NzaWJsZVxuLy8gc2lkZS1lZmZlY3Qgd2hlbiB0aGUgbGl2ZSBjb2xsZWN0aW9uIG9mIG5vZGVzIGlzIHBhc3NlZCBhcm91bmRcbmltcG9ydCB7cHVzaCwgc2xpY2UsIHNwbGljZSwgdW5zaGlmdH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7ZnJhZ21lbnR9IGZyb20gJy4uL3NoYXJlZC9lYXN5LWRvbS5qcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50LmpzJztcbmltcG9ydCBlbmdpbmUgZnJvbSAnLi4vb2JqZWN0cy9FbmdpbmUuanMnO1xuXG4vKiAgICAgICAgICAgICAgICAwICAgICAgICAgICAgICAgICAgICAgICAwICAgICAgICAgICAgICAgICAwXG4wMDAgICAgICAgICAgICAgICAgMDAgICAgICAgICAgICAgICAgICAgMDAgICAgICAgICAgICAgICAgMDAwXG4gMDAwMCAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAgIDAwMDAgICAgICAgICAgICAgIDAwMDAgXG4gIDAwMDAwICAgICAgICAgICAgIDAwMDAgICAgICAgICAgICAgMDAwMCAgICAgICAgICAgICAgMDAwMCAgXG4gIDAwMDAwMCAgICAgICAgICAgIDAwMDAwMCAgICAgICAgIDAwMDAwMCAgICAgICAgICAgIDAwMDAwMCAgXG4gICAwMDAwMDAwICAgICAgICAgICAwMDAwMDAwICAgICAgMDAwMDAwMCAgICAgICAgICAwMDAwMDAwICAgXG4gICAwMDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwICAgXG4gICAwMDAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwICAgXG4gICAwMDAwMDAwMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMDAgICAgXG4gICAgMDAwMDAwMCAgICAgICAgICAgIDAwMDAwMCAgIDAwMDAwMDAgICAgICAgICAgIDAwMDAwMDAgICAgXG4gICAgMDAwMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAgMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAwMCAgICAgXG4gICAgIDAwMDAwMDAwMDAwMDAwMDAgIDAwMDAwMDAwMDAwMDAwICAwMDAwMDAwMDAwMDAwMDAwICAgICAgXG4gICAgICAwMDAwMDAgICAgICAgICAgICAwMDAwMDAwMDAwMDAgICAgICAgICAgICAgMDAwMDAwICAgICAgXG4gICAgICAgMDAwMDAwMDAwMDAwMCAgICAgIDAwMDAwMDAwICAgICAgIDAwMDAwMDAwMDAwMDAgICAgICAgXG4gICAgICAwICAwMDAwMDAwMDAwMDAwMDAwICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwICAwICAgICAgXG4gICAgICAgMDAgIDAwMDAwMDAwMDAwMDAwMDAwICAgICAgIDAwMDAwMDAwMDAwMDAwMDAgIDAwICAgICAgXG4gICAgICAgMDAwICAgMDAwMDAgICAgIDAwMDAwMCAgIDAwMDAwMDAgICAgMDAwMDAgICAwMDAgICAgICAgXG4gICAgICAgIDAwMDAgICAwMDAwMCAgICAgICAgMDAwMDAwICAgICAgIDAwMDAwMCAgMDAwMDAgICAgICAgXG4gICAgICAgIDAwMDAwMCAgMDAwMDAwICAgICAwMDAwMDAwICAgICAwMDAwMDAgIDAwMDAwMCAgICAgICAgXG4gICAgICAgICAwMDAwMDAwICAwMDAwMDAgICAwMDAwMDAwMCAgIDAwMDAwICAwMDAwMDAwICAgICAgICAgXG4gICAgICAgICAwMDAwMDAwMCAgIDAwMDAwIDAwMDAwMDAwMCAwMDAwMCAgMDAwMDAwMDAwICAgICAgICAgXG4gICAgICAgICAwMDAwMDAwMDAwICAgMDAwMDAwMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwICAgICAgICAgXG4gICAgICAgICAgMDAwMDAwMDAwMDAgICAwMDAwMDAwMDAwMDAwMCAgMDAwMDAwMDAwMDAgICAgICAgICAgXG4gICAgICAgICAgMDAwMDAwMDAwMDAwMCAgIDAwMDAwMDAwMCAgIDAwMDAwMDAwMDAwMDAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgMDAwMDAwMDAwICAgMDAwMDAgICAwMDAwMDAwMDAwICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIDAwMDAgIDAwMCAgMDAwMCAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNseWVyMC5kZXZpYW50YXJ0LmNvbSAgICAgICAgICAgICAgICAgICovXG5cbi8vIE1lZ2F0cm9uIGlzIGEgdHJhbnNmb3JtZXIgaW4gY2hhcmdlIG9mIG11dGF0aW5nXG4vLyBhIGxpc3Qgb2YgbGl2ZSBET00gbm9kZXMgaW50byBhIG5ldyBsaXN0LlxuZnVuY3Rpb24gTWVnYXRyb24obm9kZSwgY2hpbGROb2Rlcykge1xuICB0aGlzLm5vZGUgPSBub2RlO1xuICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xufVxuXG4vLyBpdCBjYXJyaWVzIHRoZSBkZWZhdWx0IG1lcmdlL2RpZmYgZW5naW5lXG4vLyB0aGF0IGNhbiBiZSBzd2FwcGVkIHZpYSBoeXBlckhUTUwuZW5naW5lID0gey4uLn1cbi8vIFNlZSBoeXBlcmh0bWwtbWFqaW5idXUgdG8ga25vdyBtb3JlXG5NZWdhdHJvbi5lbmdpbmUgPSBlbmdpbmU7XG5cbi8vIHF1aWNrbHkgZXJhc2UgdGhlIHJlbGF0ZWQgY29udGVudFxuLy8gb3B0aW9uYWxseSBhZGQgYSBzaW5nbGUgbm9kZS9jb21wb25lbnQgYXMgdmFsdWVcbk1lZ2F0cm9uLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uIGVtcHR5KHZhbHVlKSB7XG4gIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGU7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXM7XG4gIGxldCBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCkge1xuICAgIGNvbnN0IHBuID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHJlbW92ZSA9IHNwbGljZS5jYWxsKGNoaWxkTm9kZXMsIDAsIGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBwbi5yZW1vdmVDaGlsZCh1dGlscy5nZXROb2RlKHJlbW92ZVtsZW5ndGhdKSk7XG4gIH1cbiAgaWYgKHZhbHVlKSB7XG4gICAgcHVzaC5jYWxsKGNoaWxkTm9kZXMsIHZhbHVlKTtcbiAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHV0aWxzLmdldE5vZGUodmFsdWUpLCBub2RlKTtcbiAgfVxufTtcblxuLy8gdGhlcmUgYXJlIG51bWVyb3VzIHdheXMgdG8gb3B0aW1pemUgYSBsaXN0IG9mIG5vZGVzXG4vLyB0aGF0IGlzIGdvaW5nIHRvIHJlcHJlc2VudCBhbm90aGVyIGxpc3QgKG9yIGV2ZW4gdGhlIHNhbWUpXG5NZWdhdHJvbi5wcm90b3R5cGUuYmVjb21lID0gZnVuY3Rpb24gYmVjb21lKHZpcnR1YWwpIHtcbiAgY29uc3Qgdmxlbmd0aCA9IHZpcnR1YWwubGVuZ3RoO1xuICAvLyBpZiB0aGVyZSBhcmUgbmV3IGVsZW1lbnRzIHRvIHB1c2ggLi5cbiAgaWYgKDAgPCB2bGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZTtcbiAgICBjb25zdCBsaXZlID0gdGhpcy5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IHBuID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGxldCBsbGVuZ3RoID0gbGl2ZS5sZW5ndGg7XG4gICAgbGV0IGwgPSAwO1xuICAgIGxldCB2ID0gMDtcbiAgICAvLyBpZiB0aGUgY3VycmVudCBsaXN0IGlzIGVtcHR5LCBhcHBlbmQgYWxsIG5vZGVzXG4gICAgaWYgKGxsZW5ndGggPCAxKSB7XG4gICAgICBwdXNoLmFwcGx5KFxuICAgICAgICBsaXZlLFxuICAgICAgICB1dGlscy5pbnNlcnQocG4sIHZpcnR1YWwsIG5vZGUpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBhbGwgZWxlbWVudHMgYXJlIHRoZSBzYW1lLCBkbyBwcmV0dHkgbXVjaCBub3RoaW5nXG4gICAgd2hpbGUgKGwgPCBsbGVuZ3RoICYmIHYgPCB2bGVuZ3RoKSB7XG4gICAgICAvLyBhcHBlbmRpbmcgbm9kZXMvY29tcG9uZW50cyBjb3VsZCBiZSBqdXN0IGZpbmVcbiAgICAgIGlmIChsaXZlW2xdICE9PSB2aXJ0dWFsW3ZdKSBicmVhaztcbiAgICAgIGwrKztcbiAgICAgIHYrKztcbiAgICB9XG4gICAgLy8gaWYgd2UgcmVhY2hlZCB0aGUgbGl2ZSBsZW5ndGggZGVzdGluYXRpb25cbiAgICBpZiAobCA9PT0gbGxlbmd0aCkge1xuICAgICAgLy8gdGhlcmUgY291bGQgYmUgYSB0aWUgKG5vdGhpbmcgdG8gZG8pXG4gICAgICBpZiAodmxlbmd0aCA9PT0gbGxlbmd0aCkgcmV0dXJuO1xuICAgICAgLy8gb3IgdGhlcmUncyBvbmx5IHRvIGFwcGVuZFxuICAgICAgcHVzaC5hcHBseShcbiAgICAgICAgbGl2ZSxcbiAgICAgICAgdXRpbHMuaW5zZXJ0KHBuLCBzbGljZS5jYWxsKHZpcnR1YWwsIHYpLCBub2RlKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgdGhlIG5ldyBsZW5ndGggaXMgcmVhY2hlZCB0aG91Z2hcbiAgICBpZiAodiA9PT0gdmxlbmd0aCkge1xuICAgICAgLy8gdGhlcmUgYXJlIG5vZGVzIHRvIHJlbW92ZVxuICAgICAgdXRpbHMucmVtb3ZlKHBuLCBzcGxpY2UuY2FsbChsaXZlLCBsLCBsbGVuZ3RoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG90aGVyd2lzZSBsZXQncyBjaGVjayBiYWNrd2FyZFxuICAgIGxldCBybCA9IGxsZW5ndGg7XG4gICAgbGV0IHJ2ID0gdmxlbmd0aDtcbiAgICB3aGlsZSAocmwgJiYgcnYpIHtcbiAgICAgIGlmIChsaXZlWy0tcmxdICE9PSB2aXJ0dWFsWy0tcnZdKSB7XG4gICAgICAgICsrcmw7XG4gICAgICAgICsrcnY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBub3cgLi4uIGxpc3RzIGFyZSBub3QgaWRlbnRpY2FsLCB3ZSBrbm93IHRoYXQsXG4gICAgLy8gYnV0IG1heWJlIGl0IHdhcyBhIHByZXBlbmQgLi4uIHNvIGlmIGxpdmUgbGVuZ3RoIGlzIGNvdmVyZWRcbiAgICBpZiAocmwgPCAxKSB7XG4gICAgICAvLyByZXR1cm4gYWZ0ZXIgcHJlLXBlbmRpbmcgYWxsIG5vZGVzXG4gICAgICB1bnNoaWZ0LmFwcGx5KFxuICAgICAgICBsaXZlLFxuICAgICAgICB1dGlscy5pbnNlcnQocG4sIHNsaWNlLmNhbGwodmlydHVhbCwgMCwgcnYpLCB1dGlscy5nZXROb2RlKGxpdmVbMF0pKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gb3IgbWF5YmUsIGl0IHdhcyBhIHJlbW92YWwgb2Ygbm9kZXMgYXQgdGhlIGJlZ2lubmluZ1xuICAgIGlmIChydiA8IDEpIHtcbiAgICAgIC8vIHJldHVybiBhZnRlciByZW1vdmluZyBhbGwgcHJlLW5vZGVzXG4gICAgICB1dGlscy5yZW1vdmUocG4sIHNwbGljZS5jYWxsKGxpdmUsIGwsIHJsKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5vdyB3ZSBoYXZlIGEgYm91bmRhcnkgb2Ygbm9kZXMgdGhhdCBuZWVkIHRvIGJlIGNoYW5nZWRcbiAgICAvLyBhbGwgdGhlIGRpc2NvdmVyZWQgaW5mbyBhciBwYXNzZWQgdG8gdGhlIGVuZ2luZVxuICAgIE1lZ2F0cm9uLmVuZ2luZS51cGRhdGUoXG4gICAgICB1dGlscywgcG4sIG5vZGUsXG4gICAgICBsaXZlLCBsLCBybCwgbGxlbmd0aCxcbiAgICAgIHZpcnR1YWwsIHYsIHJ2LCB2bGVuZ3RoXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVtcHR5KCk7XG4gIH1cbn07XG5cbmNvbnN0IHV0aWxzID0ge1xuXG4gIC8vIHRoZSBiYXNpYyBkZWZhdWx0IGVuZ2luZSBpcyBhbHdheXMgcHJvdmlkZWRcbiAgLy8gaW4gY2FzZSB0aGVyZSBhcmUgY29uZGl0aW9ucyB0aGF0IG5lZWQgaXRcbiAgZW5naW5lLFxuXG4gIC8vIGFuIGl0ZW0gY291bGQgYmUgYW4gaHlwZXJIVE1MLkNvbXBvbmVudCBhbmQsIGluIHN1Y2ggY2FzZSxcbiAgLy8gaXQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIG5vZGVcbiAgZ2V0Tm9kZTogbm9kZSA9PiBub2RlIGluc3RhbmNlb2YgQ29tcG9uZW50ID8gbm9kZS5yZW5kZXIoKSA6IG5vZGUsXG5cbiAgLy8gYXBwZW5kIGEgbGlzdCBvZiBub2RlcyBiZWZvcmUgYW5vdGhlciBub2RlXG4gIGluc2VydDogKHBhcmVudE5vZGUsIG5vZGVzLCBub2RlKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHV0aWxzLmdldE5vZGUobm9kZXNbMF0pLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgdG1wID0gZnJhZ21lbnQocGFyZW50Tm9kZSk7XG4gICAgICB3aGlsZSAoaSA8IGxlbmd0aClcbiAgICAgICAgdG1wLmFwcGVuZENoaWxkKHV0aWxzLmdldE5vZGUobm9kZXNbaSsrXSkpO1xuICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodG1wLCBub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9LFxuXG4gIC8vIGRyb3AgYSBsaXN0IG9mIG5vZGVzIGZyb20gdGhlaXIgcGFyZW50Tm9kZVxuICByZW1vdmU6IChwYXJlbnROb2RlLCBub2RlcykgPT4ge1xuICAgIGxldCBpID0gbm9kZXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodXRpbHMuZ2V0Tm9kZShub2Rlc1tpXSkpO1xuICAgIH1cbiAgfVxufTtcblxuLyogICAgICAgICAgICAgICAgICBfX19fX1xuICAgICAgICAgICAgICAgIF9fXy8gIHwgIFxcX19fXG4gICAgICAgICAgICAgX18vICAgICAgfCAgICAgIFxcX19cbiAgICAgICAgICBfXy8gICAgICAgICB8ICAgICAgICAgXFxfX1xuICAgICAgICAgL3wgICAgICAgICAgIHwgICAgICAgICAgIHxcXFxuICAgICAgICB8IHwgICAgICAgICAgIHwgICAgICAgICAgIHwgfFxuICAgICAgICB8IHwgICAgICAgICAgIHwgICAgICAgICAgIHwgfFxuICAgICAgIHwgIHwgICAgICAgICAgIHwgICAgICAgICAgIHwgIHxcbiAgICAgICB8ICB8ICAgICAgICBfX198X19fICAgICAgICB8ICB8XG4gICAgICAvICAgfCAgICBfX18vICBfX18gIFxcX19fICAgIHwgICBcXFxuICAgICAgfCAgIHxfX18vICBfX18vfCB8XFxfX18gIFxcX19ffCAgIHxcbiAgICAgIHwgICAvICAgX18vXyBcXF98IHxfLyBfXFxfXyAgIFxcICAgfFxuICAgICB8ICAgfF9fXy9cXF8gIFxcX19fX19fXy8gIF8vXFxfX198ICAgfFxuICAgIC8gICAvX19fLyAgIFxcX19fXFxfX18vX19fLyAgIFxcX19fXFwgICBcXFxuICAgLyAgICB8ICAgfCAgICAgICB8ICAgfCAgICAgICB8ICAgfCAgICBcXFxuICAvICAgICB8ICAgfF8gICAgICB8ICAgfCAgICAgIF98ICAgfCAgICAgXFxcbiB8X19fICAgfF9fX3xfXFwgICBfL3xfX198XFxfICAgL198X19ffCAgIF9fX3xcbiB8XyAgXFwgICAgfCAgIHxcXCAvICB8X19ffCAgXFwgL3wgICB8ICAgIC8gIF98XG4gfHx8IHwgICAgfCAgIHwgfCAgX19fX19fXyAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8IHwgIFxcX19fX18vICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgICBfX18gICAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8IHwgICAgICAgICAgIHwgfCAgIHwgICAgfCB8fHxcbiB8fHwgfCAgICB8ICAgfCB8ICAgICAgICAgICB8IHwgICB8ICAgIHwgfHx8XG4gfHx8IHwgICAgfCAgIHwgfCAgICAgICAgICAgfCB8ICAgfCAgICB8IHx8fFxuIHx8fCB8ICAgIHwgICB8XFx8ICAgICAgICAgICB8L3wgICB8ICAgIHwgfHx8XG4gXFx8fF98X19fX3xfX198LVxcX19fX19fX19fX18vLXxfX198X19fX3xffHwvXG5cbiAgICBjeWJlcnRyb25jaHJvbmljbGUuZnJlZXdlYnNwYWNlLmNvbSAgICovXG5cbmV4cG9ydCBkZWZhdWx0IE1lZ2F0cm9uO1xuXG4vKiBUT0RPOiBiZW5jaG1hcmsgdGhpcyBpcyBuZWVkZWQgYXQgYWxsXG4vLyBpbnN0ZWFkIG9mIGNoZWNraW5nIGluc3RhbmNlb2YgZWFjaCB0aW1lIGFuZCByZW5kZXIgcG90ZW50aWFsbHkgdHdpY2Vcbi8vIHVzZSBhIG1hcCB0byByZXRyaWV2ZSBub2RlcyBmcm9tIGEgZ2VuZXJpYyBpdGVtXG5cbmltcG9ydCB7TWFwfSBmcm9tICcuLi9zaGFyZWQvcG9vcmx5ZmlsbHMuanMnO1xuY29uc3QgZ2V0ID0gKG1hcCwgbm9kZSkgPT4gbWFwLmdldChub2RlKSB8fCBzZXQobWFwLCBub2RlKTtcbmNvbnN0IHNldCA9IChtYXAsIG5vZGUpID0+IHtcbiAgY29uc3QgdmFsdWUgPSB1dGlscy5nZXROb2RlKG5vZGUpO1xuICBtYXAuc2V0KG5vZGUsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuKi9cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vY2xhc3Nlcy9NZWdhdHJvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgaW50ZW50cyA9IHt9O1xuY29uc3Qga2V5cyA9IFtdO1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBpbnRlbnRzLmhhc093blByb3BlcnR5O1xuXG5sZXQgbGVuZ3RoID0gMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8vIGh5cGVySFRNTC5kZWZpbmUoJ2ludGVudCcsIChvYmplY3QsIHVwZGF0ZSkgPT4gey4uLn0pXG4gIC8vIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIHRoaXJkIHBhcnRzIHVwZGF0ZSBtZWNoYW5pc21cbiAgLy8gd2hlbiBldmVyeSBvdGhlciBrbm93biBtZWNoYW5pc20gZmFpbGVkLlxuICAvLyBoeXBlci5kZWZpbmUoJ3VzZXInLCBpbmZvID0+IGluZm8ubmFtZSk7XG4gIC8vIGh5cGVyKG5vZGUpYDxwPiR7e3VzZXJ9fTwvcD5gO1xuICBkZWZpbmU6IChpbnRlbnQsIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKCEoaW50ZW50IGluIGludGVudHMpKSB7XG4gICAgICBsZW5ndGggPSBrZXlzLnB1c2goaW50ZW50KTtcbiAgICB9XG4gICAgaW50ZW50c1tpbnRlbnRdID0gY2FsbGJhY2s7XG4gIH0sXG5cbiAgLy8gdGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IGFzIGxhc3QgcmVzb3J0XG4gIC8vIHRvIHJldHJpZXZlIGEgdmFsdWUgb3V0IG9mIGFuIG9iamVjdFxuICBpbnZva2U6IChvYmplY3QsIGNhbGxiYWNrKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGludGVudHNba2V5XShvYmplY3Rba2V5XSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9JbnRlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWFwLCBXZWFrTWFwfSBmcm9tICcuLi9zaGFyZWQvcG9vcmx5ZmlsbHMuanMnO1xuaW1wb3J0IHtVSURDfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzLmpzJztcbmltcG9ydCBVcGRhdGVzIGZyb20gJy4uL29iamVjdHMvVXBkYXRlcy5qcyc7XG5pbXBvcnQge1xuICBjcmVhdGVGcmFnbWVudCxcbiAgaW1wb3J0Tm9kZSxcbiAgdW5pcXVlXG59IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5cbi8vIGEgd2VhayBjb2xsZWN0aW9uIG9mIGNvbnRleHRzIHRoYXRcbi8vIGFyZSBhbHJlYWR5IGtub3duIHRvIGh5cGVySFRNTFxuY29uc3QgYmV3aXRjaGVkID0gbmV3IFdlYWtNYXA7XG5cbi8vIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCB0ZW1wbGF0ZSBsaXRlcmFsc1xuLy8gc2luY2UgdGhlc2UgYXJlIHVuaXF1ZSBhbmQgaW1tdXRhYmxlXG4vLyBmb3IgdGhlIHdob2xlIGFwcGxpY2F0aW9uIGxpZmUtY3ljbGVcbmNvbnN0IHRlbXBsYXRlcyA9IG5ldyBNYXA7XG5cbi8vIGJldHRlciBrbm93biBhcyBoeXBlci5iaW5kKG5vZGUpLCB0aGUgcmVuZGVyIGlzXG4vLyB0aGUgbWFpbiB0YWcgZnVuY3Rpb24gaW4gY2hhcmdlIG9mIGZ1bGx5IHVwZ3JhZGluZ1xuLy8gb3Igc2ltcGx5IHVwZGF0aW5nLCBjb250ZXh0cyB1c2VkIGFzIGh5cGVySFRNTCB0YXJnZXRzLlxuLy8gVGhlIGB0aGlzYCBjb250ZXh0IGlzIGVpdGhlciBhIHJlZ3VsYXIgRE9NIG5vZGUgb3IgYSBmcmFnbWVudC5cbmZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSkge1xuICBjb25zdCB3aWNrZWQgPSBiZXdpdGNoZWQuZ2V0KHRoaXMpO1xuICBpZiAod2lja2VkICYmIHdpY2tlZC50ZW1wbGF0ZSA9PT0gdW5pcXVlKHRlbXBsYXRlKSkge1xuICAgIHVwZGF0ZS5hcHBseSh3aWNrZWQudXBkYXRlcywgYXJndW1lbnRzKTtcbiAgfSBlbHNlIHtcbiAgICB1cGdyYWRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIGFuIHVwZ3JhZGUgaXMgaW4gY2hhcmdlIG9mIGNvbGxlY3RpbmcgdGVtcGxhdGUgaW5mbyxcbi8vIHBhcnNlIGl0IG9uY2UsIGlmIHVua25vd24sIHRvIG1hcCBhbGwgaW50ZXJwb2xhdGlvbnNcbi8vIGFzIHNpbmdsZSBET00gY2FsbGJhY2tzLCByZWxhdGUgc3VjaCB0ZW1wbGF0ZVxuLy8gdG8gdGhlIGN1cnJlbnQgY29udGV4dCwgYW5kIHJlbmRlciBpdCBhZnRlciBjbGVhbmluZyB0aGUgY29udGV4dCB1cFxuZnVuY3Rpb24gdXBncmFkZSh0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHVuaXF1ZSh0ZW1wbGF0ZSk7XG4gIGNvbnN0IGluZm8gPSAgdGVtcGxhdGVzLmdldCh0ZW1wbGF0ZSkgfHxcbiAgICAgICAgICAgICAgICBjcmVhdGVUZW1wbGF0ZS5jYWxsKHRoaXMsIHRlbXBsYXRlKTtcbiAgY29uc3QgZnJhZ21lbnQgPSBpbXBvcnROb2RlKHRoaXMub3duZXJEb2N1bWVudCwgaW5mby5mcmFnbWVudCk7XG4gIGNvbnN0IHVwZGF0ZXMgPSBVcGRhdGVzLmNyZWF0ZShmcmFnbWVudCwgaW5mby5wYXRocyk7XG4gIGJld2l0Y2hlZC5zZXQodGhpcywge3RlbXBsYXRlLCB1cGRhdGVzfSk7XG4gIHVwZGF0ZS5hcHBseSh1cGRhdGVzLCBhcmd1bWVudHMpO1xuICB0aGlzLnRleHRDb250ZW50ID0gJyc7XG4gIHRoaXMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG4vLyBhbiB1cGRhdGUgc2ltcGx5IGxvb3BzIG92ZXIgYWxsIG1hcHBlZCBET00gb3BlcmF0aW9uc1xuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdGhpc1tpIC0gMV0oYXJndW1lbnRzW2ldKTtcbiAgfVxufVxuXG4vLyBhIHRlbXBsYXRlIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XG4vLyBhd2FyZSBvZiBhbGwgaW50ZXJwb2xhdGlvbnMgYW5kIHdpdGggYSBsaXN0XG4vLyBvZiBwYXRocyB1c2VkIHRvIGZpbmQgb25jZSB0aG9zZSBub2RlcyB0aGF0IG5lZWQgdXBkYXRlcyxcbi8vIG5vIG1hdHRlciBpZiB0aGVzZSBhcmUgYXR0cmlidXRlcywgdGV4dCBub2Rlcywgb3IgcmVndWxhciBvbmVcbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHBhdGhzID0gW107XG4gIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQodGhpcywgdGVtcGxhdGUuam9pbihVSURDKSk7XG4gIFVwZGF0ZXMuZmluZChmcmFnbWVudCwgcGF0aHMsIHRlbXBsYXRlLnNsaWNlKCkpO1xuICBjb25zdCBpbmZvID0ge2ZyYWdtZW50LCBwYXRoc307XG4gIHRlbXBsYXRlcy5zZXQodGVtcGxhdGUsIGluZm8pO1xuICByZXR1cm4gaW5mbztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9oeXBlci9yZW5kZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCBhcyBIeXBlckNvbXBvbmVudCB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuZXhwb3J0IHsgSHlwZXJDb21wb25lbnQgfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdXRpbHMvSHlwZXJDb21wb25lbnQudHMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbmV4cG9ydCB2YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6ICdAQHJlZHV4L0lOSVQnXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICAgKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAgICpcbiAgICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICAgKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gICAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICAgKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gICAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gICAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gICAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAgICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gICAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAgICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICAgKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICAgKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gICAqL1xufTtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jcmVhdGVTdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1BsYWluT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2goZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxuXHRcdGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tcG9zZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29sb3JTcGFjZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JTcGFjZVR5cGUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbiA9IHtcclxuICBkZWZhdWx0SW1hZ2VVcmw6ICdpbWFnZXMvNy1jb2xvcmZ1bC1waG90b2dyYXBoeS5qcGcnLFxyXG4gIGRlZmF1bHRDb2xvclNwYWNlOiBDb2xvclNwYWNlVHlwZS5ZQ2JDcixcclxuICBkZWZhdWx0Q29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLnNSR0IoKVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb25maWd1cmF0aW9uLnRzIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlZFUlNJT05fU1RBUlRFRCA9ICdDT05WRVJTSU9OX1NUQVJURUQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnNpb25TdGFydGVkKCk6IEFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENPTlZFUlNJT05fU1RBUlRFRFxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25TdGFydGVkLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQcm9maWxlVHlwZSB9IGZyb20gJ21vZGVscy9Db2xvclByb2ZpbGVUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9DT0xPUl9QUk9GSUxFX1RZUEUgPSAnQ0hBTkdFX0NPTE9SX1BST0ZJTEVfVFlQRSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29sb3JQcm9maWxlVHlwZShjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLCBjb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMpOiBBbnlBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDSEFOR0VfQ09MT1JfUFJPRklMRV9UWVBFLFxyXG4gICAgY29sb3JQcm9maWxlVHlwZSxcclxuICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2lucHV0L2NoYW5nZUNvbG9yUHJvZmlsZVR5cGUudHMiLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclBvaW50IH0gZnJvbSAnbW9kZWxzL0NvbG9yUG9pbnQnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSB9IGZyb20gJ21vZGVscy9JbGx1bWluYW50VHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lMTFVNSU5BTlRfVFlQRSA9ICdDSEFOR0VfSUxMVU1JTkFOVF9UWVBFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VJbGx1bWluYW50VHlwZShpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUsIHdoaXRlUG9pbnQ6IENvbG9yUG9pbnQpOiBBbnlBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDSEFOR0VfSUxMVU1JTkFOVF9UWVBFLFxyXG4gICAgaWxsdW1pbmFudFR5cGUsXHJcbiAgICB3aGl0ZVBvaW50XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9hY3Rpb25zL2lucHV0L2NoYW5nZUlsbHVtaW5hbnRUeXBlLnRzIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTcGFjZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JTcGFjZVR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRSA9ICdDSEFOR0VfU0VMRUNURURfQ09MT1JfU1BBQ0UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2VBY3Rpb24gZXh0ZW5kcyBBbnlBY3Rpb24ge1xyXG4gIGNvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlKFxyXG4gIGNvbG9yU3BhY2U6IENvbG9yU3BhY2VUeXBlXHJcbik6IENoYW5nZVNlbGVjdGVkQ29sb3JTcGFjZUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRSxcclxuICAgIGNvbG9yU3BhY2VcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2FjdGlvbnMvaW5wdXQvY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlLnRzIiwiaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBMYWJlbGVkVmFsdWUgfSBmcm9tICd1dGlscy9MYWJlbGVkVmFsdWUnO1xyXG5cclxuZXhwb3J0IGVudW0gQ29sb3JQcm9maWxlVHlwZSB7XHJcbiAgc1JHQixcclxuICBBZG9iZVJHQixcclxuICBBcHBsZVJHQixcclxuICBDSUVSR0IsXHJcbiAgV2lkZUdhbXV0LFxyXG4gIFBBTCxcclxuICBDdXN0b21cclxufVxyXG5cclxuaW50ZXJmYWNlIFByZWRlZmluZWRDb2xvclByb2ZpbGUge1xyXG4gIGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGU7XHJcbiAgcGFyYW1ldGVycygpOiBDb252ZXJzaW9uUGFyYW1ldGVycztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByZWRlZmluZWRDb2xvclByb2ZpbGVzOiBQcmVkZWZpbmVkQ29sb3JQcm9maWxlW10gPSBbXHJcbiAgeyBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLkFkb2JlUkdCLCBwYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVycy5hZG9iZVJHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5BcHBsZVJHQiwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuYXBwbGVSR0IgfSxcclxuICB7IGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUuc1JHQiwgcGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnMuc1JHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5DSUVSR0IsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLmNpZVJHQiB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5XaWRlR2FtdXQsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLndpZGVHYW11dCB9LFxyXG4gIHsgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5QQUwsIHBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLnBhbCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbGFiZWxlZENvbG9yUHJvZmlsZXM6IExhYmVsZWRWYWx1ZTxDb2xvclByb2ZpbGVUeXBlPltdID0gW1xyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuQWRvYmVSR0IsIGxhYmVsOiAnQWRvYmVSR0InIH0sXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5BcHBsZVJHQiwgbGFiZWw6ICdBcHBsZVJHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLnNSR0IsIGxhYmVsOiAnc1JHQicgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLkNJRVJHQiwgbGFiZWw6ICdDSUVSR0InIH0sXHJcbiAgeyB2YWx1ZTogQ29sb3JQcm9maWxlVHlwZS5XaWRlR2FtdXQsIGxhYmVsOiAnV2lkZUdhbXV0JyB9LFxyXG4gIHsgdmFsdWU6IENvbG9yUHJvZmlsZVR5cGUuUEFMLCBsYWJlbDogJ1BBTCcgfSxcclxuICB7IHZhbHVlOiBDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSwgbGFiZWw6ICdDdXN0b20nIH1cclxuXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0NvbG9yUHJvZmlsZVR5cGUudHMiLCJpbXBvcnQgeyBDb2xvclBvaW50IH0gZnJvbSAnbW9kZWxzL0NvbG9yUG9pbnQnO1xyXG5pbXBvcnQgeyBMYWJlbGVkVmFsdWUgfSBmcm9tICd1dGlscy9MYWJlbGVkVmFsdWUnO1xyXG5cclxuZXhwb3J0IGVudW0gSWxsdW1pbmFudFR5cGUge1xyXG4gIEEsXHJcbiAgQixcclxuICBDLFxyXG4gIEQ1MCxcclxuICBENTUsXHJcbiAgRDY1LFxyXG4gIEQ3NSxcclxuICBFLFxyXG4gIEYyLFxyXG4gIEY3LFxyXG4gIEYxMSxcclxuICBDdXN0b21cclxufVxyXG5cclxuaW50ZXJmYWNlIFByZWRlZmluZWRJbGx1bWluYW50IHtcclxuICBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGU7XHJcbiAgd2hpdGVQb2ludCgpOiBDb2xvclBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJlZGVmaW5lZElsbHVtaW5hbnRzOiBQcmVkZWZpbmVkSWxsdW1pbmFudFtdID0gW1xyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkEsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuNDQ3NTcsIHk6IDAuNDA3MzMgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5CLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjM0ODQsIHk6IDAuMzUxNiB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkMsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzEwMDYsIHk6IDAuMzE2MTUgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5ENTAsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzQ1NjcsIHk6IDAuMzU4NSB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkQ1NSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zMzI0MiwgeTogMC4zNDc0MyB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkQ2NSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zMTI3MywgeTogMC4zMjkwMiB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkQ3NSwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4yOTkwMiwgeTogMC4zMTQ4NSB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkUsIHdoaXRlUG9pbnQ6ICgpID0+ICh7IHg6IDAuMzMzMzMsIHk6IDAuMzMzMzMgfSkgfSxcclxuICB7IGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5GMiwgd2hpdGVQb2ludDogKCkgPT4gKHsgeDogMC4zNzIwNywgeTogMC4zNzUxMiB9KSB9LFxyXG4gIHsgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlLkY3LCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjMxMjg1LCB5OiAwLjMyOTE4IH0pIH0sXHJcbiAgeyBpbGx1bWluYW50VHlwZTogSWxsdW1pbmFudFR5cGUuRjExLCB3aGl0ZVBvaW50OiAoKSA9PiAoeyB4OiAwLjM4MDU0LCB5OiAwLjM3NjkxIH0pIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYWJlbGVkSWxsdW1pbmFudHM6IExhYmVsZWRWYWx1ZTxJbGx1bWluYW50VHlwZT5bXSA9IFtcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5BLCBsYWJlbDogJ0EnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuQiwgbGFiZWw6ICdCJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkMsIGxhYmVsOiAnQycgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5ENTAsIGxhYmVsOiAnRDUwJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkQ1NSwgbGFiZWw6ICdENTUnIH0sXHJcbiAgeyB2YWx1ZTogSWxsdW1pbmFudFR5cGUuRDY1LCBsYWJlbDogJ0Q2NScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5ENzUsIGxhYmVsOiAnRDc1JyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkUsIGxhYmVsOiAnRScgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5GMiwgbGFiZWw6ICdGMicgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5GNywgbGFiZWw6ICdGNycgfSxcclxuICB7IHZhbHVlOiBJbGx1bWluYW50VHlwZS5GMTEsIGxhYmVsOiAnRjExJyB9LFxyXG4gIHsgdmFsdWU6IElsbHVtaW5hbnRUeXBlLkN1c3RvbSwgbGFiZWw6ICdDdXN0b20nIH1cclxuXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL0lsbHVtaW5hbnRUeXBlLnRzIiwiaW1wb3J0IHsgd2lyZSB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuaW1wb3J0IHsgTGFiZWxlZFZhbHVlIH0gZnJvbSAndXRpbHMvTGFiZWxlZFZhbHVlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYWJlbGVkU2VsZWN0KFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgb3B0aW9uczogTGFiZWxlZFZhbHVlPG51bWJlcj5bXSxcclxuICBzZWxlY3RlZE9wdGlvbjogbnVtYmVyLFxyXG4gIG9uQ2hhbmdlOiAobmV3VmFsdWU6IG51bWJlcikgPT4gdm9pZFxyXG4pIHtcclxuICByZXR1cm4gd2lyZSgpYFxyXG4gICAgPHNlbGVjdCBpZD0ke2lkfSBvbmNoYW5nZT0keyhldmVudDogRXZlbnQpID0+IG9uQ2hhbmdlKGdldFZhbHVlRnJvbVNlbGVjdEV2ZW50KG9wdGlvbnMsIGV2ZW50KSl9PlxyXG4gICAgICAke29wdGlvbnMubWFwKG9wdGlvbiA9PiBMYWJlbGVkT3B0aW9uKG9wdGlvbiwgc2VsZWN0ZWRPcHRpb24pKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhYmVsZWRPcHRpb248VD4obGFiZWxlZE9wdGlvbjogTGFiZWxlZFZhbHVlPFQ+LCBzZWxlY3RlZFZhbHVlOiBUKSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBcclxuICAgIDxvcHRpb25cclxuICAgICAgdmFsdWU9JHtsYWJlbGVkT3B0aW9uLnZhbHVlfVxyXG4gICAgICBzZWxlY3RlZD0ke2xhYmVsZWRPcHRpb24udmFsdWUgPT09IHNlbGVjdGVkVmFsdWV9XHJcbiAgICA+XHJcbiAgICAgICR7bGFiZWxlZE9wdGlvbi5sYWJlbH1cclxuICAgIDwvb3B0aW9uPlxyXG4gIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlRnJvbVNlbGVjdEV2ZW50KG9wdGlvbnM6IExhYmVsZWRWYWx1ZTxudW1iZXI+W10sIGV2ZW50OiBFdmVudCkge1xyXG4gIGNvbnN0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD5ldmVudC50YXJnZXQ7XHJcbiAgY29uc3QgdmFsdWUgPSBwYXJzZUludChzZWxlY3QudmFsdWUsIDEwKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpO1xyXG4gIGlmICghc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignU2VsZWN0ZWQgPG9wdGlvbj4gbm90IGZvdW5kIGluIG9wdGlvbnMgcGFyYW1ldGVyJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VsZWN0ZWRPcHRpb24udmFsdWU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9MYWJlbGVkU2VsZWN0LnRzIiwiZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZU1hcDxUPihcclxuICBhcnJheTogVFtdLFxyXG4gIGNhbGxiYWNrOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gVFxyXG4pOiBUW10ge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBhcnJheVtpXSA9IGNhbGxiYWNrKGFycmF5W2ldLCBpLCBhcnJheSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdXRpbHMvbXV0YXRlTWFwLnRzIiwiaW1wb3J0IEFic3RyYWN0TWF0cml4IGZyb20gJy4uL2Fic3RyYWN0TWF0cml4JztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JhcHBlck1hdHJpeDFEIGV4dGVuZHMgQWJzdHJhY3RNYXRyaXgoKSB7XG4gICAgLyoqXG4gICAgICogQGNsYXNzIFdyYXBwZXJNYXRyaXgxRFxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZGF0YVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMucm93cyA9IDFdXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJvd3MgPSAxXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCAlIHJvd3MgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGRhdGEgbGVuZ3RoIGlzIG5vdCBkaXZpc2libGUgYnkgdGhlIG51bWJlciBvZiByb3dzJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gZGF0YS5sZW5ndGggLyByb3dzO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2NhbGN1bGF0ZUluZGV4KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9jYWxjdWxhdGVJbmRleChyb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB9XG5cbiAgICBfY2FsY3VsYXRlSW5kZXgocm93LCBjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIChyb3cgKiB0aGlzLmNvbHVtbnMpICsgY29sdW1uO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdHJpeDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDFELmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQWJzdHJhY3RNYXRyaXggZnJvbSAnLi4vYWJzdHJhY3RNYXRyaXgnO1xuaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcmFwcGVyTWF0cml4MkQgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCgpIHtcbiAgICAvKipcbiAgICAgKiBAY2xhc3MgV3JhcHBlck1hdHJpeDJEXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yb3dzID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGRhdGFbMF0ubGVuZ3RoO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YVtyb3dJbmRleF1bY29sdW1uSW5kZXhdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdHJpeDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDJELmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeCwgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge2h5cG90ZW51c2V9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGNsYXNzIFFyRGVjb21wb3NpdGlvblxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2x1dHpyb2VkZXIvTWFwYWNrL2Jsb2IvbWFzdGVyL1NvdXJjZS9RckRlY29tcG9zaXRpb24uY3NcbiAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRckRlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgICAgICB2YXIgcXIgPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgICB2YXIgbSA9IHZhbHVlLnJvd3M7XG4gICAgICAgIHZhciBuID0gdmFsdWUuY29sdW1ucztcbiAgICAgICAgdmFyIHJkaWFnID0gbmV3IEFycmF5KG4pO1xuICAgICAgICB2YXIgaSwgaiwgaywgcztcblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICB2YXIgbnJtID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBucm0gPSBoeXBvdGVudXNlKG5ybSwgcXIuZ2V0KGksIGspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChucm0gIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocXIuZ2V0KGssIGspIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBucm0gPSAtbnJtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHFyLnNldChpLCBrLCBxci5nZXQoaSwgaykgLyBucm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxci5zZXQoaywgaywgcXIuZ2V0KGssIGspICsgMSk7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gcXIuZ2V0KGksIGspICogcXIuZ2V0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMgPSAtcyAvIHFyLmdldChrLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXIuc2V0KGksIGosIHFyLmdldChpLCBqKSArIHMgKiBxci5nZXQoaSwgaykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmRpYWdba10gPSAtbnJtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5RUiA9IHFyO1xuICAgICAgICB0aGlzLlJkaWFnID0gcmRpYWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29sdmUgYSBwcm9ibGVtIG9mIGxlYXN0IHNxdWFyZSAoQXg9YikgYnkgdXNpbmcgdGhlIFFSIGRlY29tcG9zaXRpb24uIFVzZWZ1bCB3aGVuIEEgaXMgcmVjdGFuZ3VsYXIsIGJ1dCBub3Qgd29ya2luZyB3aGVuIEEgaXMgc2luZ3VsYXIuXG4gICAgICogRXhhbXBsZSA6IFdlIHNlYXJjaCB0byBhcHByb3hpbWF0ZSB4LCB3aXRoIEEgbWF0cml4IHNoYXBlIG0qbiwgeCB2ZWN0b3Igc2l6ZSBuLCBiIHZlY3RvciBzaXplIG0gKG0gPiBuKS4gV2Ugd2lsbCB1c2UgOlxuICAgICAqIHZhciBxciA9IFFyRGVjb21wb3NpdGlvbihBKTtcbiAgICAgKiB2YXIgeCA9IHFyLnNvbHZlKGIpO1xuICAgICAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZSAtIE1hdHJpeCAxRCB3aGljaCBpcyB0aGUgdmVjdG9yIGIgKGluIHRoZSBlcXVhdGlvbiBBeCA9IGIpXG4gICAgICogQHJldHVybiB7TWF0cml4fSAtIFRoZSB2ZWN0b3IgeFxuICAgICAqL1xuICAgIHNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0cml4LmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgICAgICB2YXIgcXIgPSB0aGlzLlFSO1xuICAgICAgICB2YXIgbSA9IHFyLnJvd3M7XG5cbiAgICAgICAgaWYgKHZhbHVlLnJvd3MgIT09IG0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IHJvdyBkaW1lbnNpb25zIG11c3QgYWdyZWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNGdWxsUmFuaygpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyByYW5rIGRlZmljaWVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgICB2YXIgbiA9IHFyLmNvbHVtbnM7XG4gICAgICAgIHZhciBpLCBqLCBrLCBzO1xuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHFyW2ldW2tdICogWFtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcyA9IC1zIC8gcXJba11ba107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdICs9IHMgKiBxcltpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrID0gbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIFhba11bal0gLz0gdGhpcy5SZGlhZ1trXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBYW2ldW2pdIC09IFhba11bal0gKiBxcltpXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gWC5zdWJNYXRyaXgoMCwgbiAtIDEsIDAsIGNvdW50IC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRnVsbFJhbmsoKSB7XG4gICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5RUi5jb2x1bW5zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuUmRpYWdbaV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IHVwcGVyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICAgICAgdmFyIHFyID0gdGhpcy5RUjtcbiAgICAgICAgdmFyIG4gPSBxci5jb2x1bW5zO1xuICAgICAgICB2YXIgWCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgICAgIHZhciBpLCBqO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBqKSB7XG4gICAgICAgICAgICAgICAgICAgIFhbaV1bal0gPSBxcltpXVtqXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGopIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IHRoaXMuUmRpYWdbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgWFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWF0cml4fVxuICAgICAqL1xuICAgIGdldCBvcnRob2dvbmFsTWF0cml4KCkge1xuICAgICAgICB2YXIgcXIgPSB0aGlzLlFSO1xuICAgICAgICB2YXIgcm93cyA9IHFyLnJvd3M7XG4gICAgICAgIHZhciBjb2x1bW5zID0gcXIuY29sdW1ucztcbiAgICAgICAgdmFyIFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICB2YXIgaSwgaiwgaywgcztcblxuICAgICAgICBmb3IgKGsgPSBjb2x1bW5zIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBYW2ldW2tdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFhba11ba10gPSAxO1xuICAgICAgICAgICAgZm9yIChqID0gazsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChxcltrXVtrXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gazsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyArPSBxcltpXVtrXSAqIFhbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzID0gLXMgLyBxcltrXVtrXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBYW2ldW2pdICs9IHMgKiBxcltpXVtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL3FyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdBcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IGJpbmQgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBib290c3RyYXA7XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgY29uc3QgYXBwbGljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwbGljYXRpb24nKTtcclxuXHJcbiAgaWYgKCFhcHBsaWNhdGlvbkNvbnRhaW5lcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdBcHBsaWNhdGlvbiBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gIGJpbmQoYXBwbGljYXRpb25Db250YWluZXIpYCR7YXBwbGljYXRpb259YDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9pbmRleC50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5mb290ZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgYXMgSHlwZXJDb21wb25lbnQgfSBmcm9tICdoeXBlcmh0bWwvZXNtJztcclxuXHJcbmltcG9ydCB7IEltYWdlUGlja2VyIH0gZnJvbSAnY29tcG9uZW50cy9JbWFnZVBpY2tlcic7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlUGlja2VyIH0gZnJvbSAnY29udGFpbmVycy9Db2xvclNwYWNlUGlja2VyJztcclxuaW1wb3J0IHsgT3JpZ2luYWxJbWFnZURpc3BsYXkgfSBmcm9tICdjb250YWluZXJzL09yaWdpbmFsSW1hZ2VEaXNwbGF5JztcclxuaW1wb3J0IHsgUmVzdWx0c0Rpc3BsYXkgfSBmcm9tICdjb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5JztcclxuaW1wb3J0IHsgU3RhcnRDb252ZXJzaW9uQnV0dG9uIH0gZnJvbSAnY29udGFpbmVycy9TdGFydENvbnZlcnNpb25CdXR0b24nO1xyXG5cclxuaW1wb3J0IHsgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZUxvYWRlcic7XHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VPcmlnaW5hbEltYWdlIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VPcmlnaW5hbEltYWdlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlckJveCB9IGZyb20gJ2NvbnRhaW5lcnMvQ29udmVyc2lvblBhcmFtZXRlckJveCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBIeXBlckNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZVBpY2tlcjogSW1hZ2VQaWNrZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBvcmlnaW5hbEltYWdlRGlzcGxheTogT3JpZ2luYWxJbWFnZURpc3BsYXk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb2xvclNwYWNlUGlja2VyOiBDb2xvclNwYWNlUGlja2VyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udmVyc2lvblBhcmFtZXRlckJveDogQ29udmVyc2lvblBhcmFtZXRlckJveDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0Q29udmVyc2lvbkJ1dHRvbjogU3RhcnRDb252ZXJzaW9uQnV0dG9uO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzdWx0c0Rpc3BsYXk6IFJlc3VsdHNEaXNwbGF5O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5pbWFnZVBpY2tlciA9IG5ldyBJbWFnZVBpY2tlcigpO1xyXG4gICAgdGhpcy5vcmlnaW5hbEltYWdlRGlzcGxheSA9IG5ldyBPcmlnaW5hbEltYWdlRGlzcGxheSgpO1xyXG4gICAgdGhpcy5jb2xvclNwYWNlUGlja2VyID0gbmV3IENvbG9yU3BhY2VQaWNrZXIoKTtcclxuICAgIHRoaXMuY29udmVyc2lvblBhcmFtZXRlckJveCA9IG5ldyBDb252ZXJzaW9uUGFyYW1ldGVyQm94KCk7XHJcbiAgICB0aGlzLnN0YXJ0Q29udmVyc2lvbkJ1dHRvbiA9IG5ldyBTdGFydENvbnZlcnNpb25CdXR0b24oKTtcclxuICAgIHRoaXMucmVzdWx0c0Rpc3BsYXkgPSBuZXcgUmVzdWx0c0Rpc3BsYXkoKTtcclxuXHJcbiAgICB0aGlzLmxvYWREZWZhdWx0SW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPkNvbG9yIGNvbnZlcnRlcjwvaDE+XHJcbiAgICAgICAgJHt0aGlzLmltYWdlUGlja2VyfVxyXG4gICAgICAgICR7dGhpcy5vcmlnaW5hbEltYWdlRGlzcGxheX1cclxuICAgICAgICAke3RoaXMuY29sb3JTcGFjZVBpY2tlcn1cclxuICAgICAgICAke3RoaXMuY29udmVyc2lvblBhcmFtZXRlckJveH1cclxuICAgICAgICAke3RoaXMuc3RhcnRDb252ZXJzaW9uQnV0dG9ufVxyXG4gICAgICAgICR7dGhpcy5yZXN1bHRzRGlzcGxheX1cclxuXHJcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPkNyZWF0ZWQgYnkgR3J6ZWdvcnogUm96ZHppYWxpayBAIDIwMTc8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkRGVmYXVsdEltYWdlKCkge1xyXG4gICAgY29uc3QgZGVmYXVsdEltYWdlVXJsID0gY29uZmlndXJhdGlvbi5kZWZhdWx0SW1hZ2VVcmw7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VMb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoKTtcclxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgaW1hZ2VMb2FkZXIubG9hZEltYWdlKGRlZmF1bHRJbWFnZVVybCk7XHJcblxyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlT3JpZ2luYWxJbWFnZShpbWFnZSkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9BcHBsaWNhdGlvbi50cyIsImltcG9ydCB7Y3JlYXRlLCBmcmFnbWVudCwgdGV4dH0gZnJvbSAnLi9lYXN5LWRvbS5qcyc7XG5cbmNvbnN0IHRlc3RGcmFnbWVudCA9IGZyYWdtZW50KGRvY3VtZW50KTtcblxuLy8gRE9NNCBub2RlLmFwcGVuZCguLi5tYW55KVxuZXhwb3J0IGNvbnN0IGhhc0FwcGVuZCA9ICdhcHBlbmQnIGluIHRlc3RGcmFnbWVudDtcblxuLy8gZGV0ZWN0IG9sZCBicm93c2VycyB3aXRob3V0IEhUTUxUZW1wbGF0ZUVsZW1lbnQgY29udGVudCBzdXBwb3J0XG5leHBvcnQgY29uc3QgaGFzQ29udGVudCA9ICdjb250ZW50JyBpbiBjcmVhdGUoZG9jdW1lbnQsICd0ZW1wbGF0ZScpO1xuXG4vLyBJRSAxMSBoYXMgcHJvYmxlbXMgd2l0aCBjbG9uaW5nIHRlbXBsYXRlczogaXQgXCJmb3JnZXRzXCIgZW1wdHkgY2hpbGROb2Rlc1xudGVzdEZyYWdtZW50LmFwcGVuZENoaWxkKHRleHQodGVzdEZyYWdtZW50LCAnZycpKTtcbnRlc3RGcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0KHRlc3RGcmFnbWVudCwgJycpKTtcbmV4cG9ydCBjb25zdCBoYXNEb29tZWRDbG9uZU5vZGUgPSB0ZXN0RnJhZ21lbnQuY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxO1xuXG4vLyBvbGQgYnJvd3NlcnMgbmVlZCB0byBmYWxsYmFjayB0byBjbG9uZU5vZGVcbi8vIEN1c3RvbSBFbGVtZW50cyBWMCBhbmQgVjEgd2lsbCB3b3JrIHBvbHlmaWxsZWRcbi8vIGJ1dCBuYXRpdmUgaW1wbGVtZW50YXRpb25zIG5lZWQgaW1wb3J0Tm9kZSBpbnN0ZWFkXG4vLyAoc3BlY2lhbGx5IENocm9taXVtIGFuZCBpdHMgb2xkIFYwIGltcGxlbWVudGF0aW9uKVxuZXhwb3J0IGNvbnN0IGhhc0ltcG9ydE5vZGUgPSAnaW1wb3J0Tm9kZScgaW4gZG9jdW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL3NoYXJlZC9mZWF0dXJlcy1kZXRlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7c2xpY2UsIHNwbGljZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB1cGRhdGU6IChcbiAgICB1dGlscywgcGFyZW50Tm9kZSwgY29tbWVudE5vZGUsXG4gICAgbGl2ZU5vZGVzLCBsaXZlU3RhcnQsIGxpdmVFbmQsIGxpdmVMZW5ndGgsXG4gICAgdmlydHVhbE5vZGVzLCB2aXJ0dWFsU3RhcnQsIHZpcnR1YWxFbmQgLyosIHZpcnR1YWxMZW5ndGggKi9cbiAgKSA9PiB7XG4gICAgd2hpbGUgKGxpdmVTdGFydCA8IGxpdmVFbmQgJiYgdmlydHVhbFN0YXJ0IDwgdmlydHVhbEVuZCkge1xuICAgICAgY29uc3QgbGl2ZVZhbHVlID0gbGl2ZU5vZGVzW2xpdmVTdGFydF07XG4gICAgICBjb25zdCB2aXJ0dWFsVmFsdWUgPSB2aXJ0dWFsTm9kZXNbdmlydHVhbFN0YXJ0XTtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGxpdmVWYWx1ZSA9PT0gdmlydHVhbFZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgICAwIDogKGxpdmVOb2Rlcy5pbmRleE9mKHZpcnR1YWxWYWx1ZSkgPCAwID8gMSA6IC0xKTtcbiAgICAgIC8vIG5vZGVzIGNhbiBiZSBlaXRoZXIgcmVtb3ZlZCAuLi5cbiAgICAgIGlmIChzdGF0dXMgPCAwKSB7XG4gICAgICAgIHNwbGljZS5jYWxsKGxpdmVOb2RlcywgbGl2ZVN0YXJ0LCAxKTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh1dGlscy5nZXROb2RlKGxpdmVWYWx1ZSkpO1xuICAgICAgICBsaXZlRW5kLS07XG4gICAgICAgIGxpdmVMZW5ndGgtLTtcbiAgICAgIH1cbiAgICAgIC8vIC4uLiBhcHBlbmRlZCAuLi5cbiAgICAgIGVsc2UgaWYgKDAgPCBzdGF0dXMpIHtcbiAgICAgICAgc3BsaWNlLmNhbGwobGl2ZU5vZGVzLCBsaXZlU3RhcnQsIDAsIHZpcnR1YWxWYWx1ZSk7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHV0aWxzLmdldE5vZGUodmlydHVhbFZhbHVlKSwgdXRpbHMuZ2V0Tm9kZShsaXZlVmFsdWUpKTtcbiAgICAgICAgbGl2ZVN0YXJ0Kys7XG4gICAgICAgIGxpdmVFbmQrKztcbiAgICAgICAgbGl2ZUxlbmd0aCsrO1xuICAgICAgICB2aXJ0dWFsU3RhcnQrKztcbiAgICAgIH1cbiAgICAgIC8vIC4uLiBvciBpZ25vcmVkLCBzaW5jZSBpdCdzIHRoZSBzYW1lIC4uLlxuICAgICAgZWxzZSB7XG4gICAgICAgIGxpdmVTdGFydCsrO1xuICAgICAgICB2aXJ0dWFsU3RhcnQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxpdmVTdGFydCA8IGxpdmVFbmQpIHtcbiAgICAgIGNvbnN0IHJlbW92ZSA9IHNwbGljZS5jYWxsKGxpdmVOb2RlcywgbGl2ZVN0YXJ0LCBsaXZlRW5kIC0gbGl2ZVN0YXJ0KTtcbiAgICAgIGxpdmVTdGFydCA9IHJlbW92ZS5sZW5ndGg7XG4gICAgICB3aGlsZSAobGl2ZVN0YXJ0LS0pIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh1dGlscy5nZXROb2RlKHJlbW92ZVtsaXZlU3RhcnRdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2aXJ0dWFsU3RhcnQgPCB2aXJ0dWFsRW5kKSB7XG4gICAgICBzcGxpY2UuYXBwbHkoXG4gICAgICAgIGxpdmVOb2RlcyxcbiAgICAgICAgW2xpdmVFbmQsIDBdLmNvbmNhdChcbiAgICAgICAgICB1dGlscy5pbnNlcnQoXG4gICAgICAgICAgICBwYXJlbnROb2RlLFxuICAgICAgICAgICAgc2xpY2UuY2FsbCh2aXJ0dWFsTm9kZXMsIHZpcnR1YWxTdGFydCwgdmlydHVhbEVuZCksXG4gICAgICAgICAgICBsaXZlRW5kIDwgbGl2ZUxlbmd0aCA/XG4gICAgICAgICAgICAgIHV0aWxzLmdldE5vZGUobGl2ZU5vZGVzW2xpdmVFbmRdKSA6IGNvbW1lbnROb2RlXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oeXBlcmh0bWwvZXNtL29iamVjdHMvRW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0VMRU1FTlRfTk9ERSwgU1ZHX05BTUVTUEFDRX0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge1dlYWtNYXAsIHRyaW19IGZyb20gJy4uL3NoYXJlZC9wb29ybHlmaWxscy5qcyc7XG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuLi9zaGFyZWQvZWFzeS1kb20uanMnO1xuaW1wb3J0IHthcHBlbmQsIHNsaWNlLCB1bmlxdWV9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyLmpzJztcblxuLy8gYWxsIHdpcmVzIHVzZWQgcGVyIGVhY2ggY29udGV4dFxuY29uc3Qgd2lyZXMgPSBuZXcgV2Vha01hcDtcblxuLy8gQSB3aXJlIGlzIGEgY2FsbGJhY2sgdXNlZCBhcyB0YWcgZnVuY3Rpb25cbi8vIHRvIGxhemlseSByZWxhdGUgYSBnZW5lcmljIG9iamVjdCB0byBhIHRlbXBsYXRlIGxpdGVyYWwuXG4vLyBoeXBlci53aXJlKHVzZXIpYDxkaXYgaWQ9dXNlcj4ke3VzZXIubmFtZX08L2Rpdj5gOyA9PiB0aGUgZGl2I3VzZXJcbi8vIFRoaXMgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gaGF2ZSBhIHVuaXF1ZSBET00gc3RydWN0dXJlXG4vLyByZWxhdGVkIHRvIGEgdW5pcXVlIEpTIG9iamVjdCB0aHJvdWdoIGEgcmV1c2FibGUgdGVtcGxhdGUgbGl0ZXJhbC5cbi8vIEEgd2lyZSBjYW4gc3BlY2lmeSBhIHR5cGUsIGFzIHN2ZyBvciBodG1sLCBhbmQgYWxzbyBhbiBpZFxuLy8gdmlhIGh0bWw6aWQgb3IgOmlkIGNvbnZlbnRpb24uIFN1Y2ggOmlkIGFsbG93cyBzYW1lIEpTIG9iamVjdHNcbi8vIHRvIGJlIGFzc29jaWF0ZWQgdG8gZGlmZmVyZW50IERPTSBzdHJ1Y3R1cmVzIGFjY29yZGluZ2x5IHdpdGhcbi8vIHRoZSB1c2VkIHRlbXBsYXRlIGxpdGVyYWwgd2l0aG91dCBsb3NpbmcgcHJldmlvdXNseSByZW5kZXJlZCBwYXJ0cy5cbmNvbnN0IHdpcmUgPSAob2JqLCB0eXBlKSA9PiBvYmogPT0gbnVsbCA/XG4gIGNvbnRlbnQodHlwZSB8fCAnaHRtbCcpIDpcbiAgd2Vha2x5KG9iaiwgdHlwZSB8fCAnaHRtbCcpO1xuXG4vLyBBIHdpcmUgY29udGVudCBpcyBhIHZpcnR1YWwgcmVmZXJlbmNlIHRvIG9uZSBvciBtb3JlIG5vZGVzLlxuLy8gSXQncyByZXByZXNlbnRlZCBieSBlaXRoZXIgYSBET00gbm9kZSwgb3IgYW4gQXJyYXkuXG4vLyBJbiBib3RoIGNhc2VzLCB0aGUgd2lyZSBjb250ZW50IHJvbGUgaXMgdG8gc2ltcGx5IHVwZGF0ZVxuLy8gYWxsIG5vZGVzIHRocm91Z2ggdGhlIGxpc3Qgb2YgcmVsYXRlZCBjYWxsYmFja3MuXG4vLyBJbiBmZXcgd29yZHMsIGEgd2lyZSBjb250ZW50IGlzIGxpa2UgYW4gaW52aXNpYmxlIHBhcmVudCBub2RlXG4vLyBpbiBjaGFyZ2Ugb2YgdXBkYXRpbmcgaXRzIGNvbnRlbnQgbGlrZSBhIGJvdW5kIGVsZW1lbnQgd291bGQgZG8uXG5jb25zdCBjb250ZW50ID0gdHlwZSA9PiB7XG4gIGxldCB3aXJlLCBjb250YWluZXIsIGNvbnRlbnQsIHRlbXBsYXRlLCB1cGRhdGVzO1xuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRpY3MpIHtcbiAgICBzdGF0aWNzID0gdW5pcXVlKHN0YXRpY3MpO1xuICAgIGxldCBzZXR1cCA9IHRlbXBsYXRlICE9PSBzdGF0aWNzO1xuICAgIGlmIChzZXR1cCkge1xuICAgICAgdGVtcGxhdGUgPSBzdGF0aWNzO1xuICAgICAgY29udGVudCA9IGZyYWdtZW50KGRvY3VtZW50KTtcbiAgICAgIGNvbnRhaW5lciA9IHR5cGUgPT09ICdzdmcnID9cbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0UsICdzdmcnKSA6XG4gICAgICAgIGNvbnRlbnQ7XG4gICAgICB1cGRhdGVzID0gcmVuZGVyLmJpbmQoY29udGFpbmVyKTtcbiAgICB9XG4gICAgdXBkYXRlcy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChzZXR1cCkge1xuICAgICAgaWYgKHR5cGUgPT09ICdzdmcnKSB7XG4gICAgICAgIGFwcGVuZChjb250ZW50LCBzbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZE5vZGVzKSk7XG4gICAgICB9XG4gICAgICB3aXJlID0gd2lyZUNvbnRlbnQoY29udGVudCk7XG4gICAgfVxuICAgIHJldHVybiB3aXJlO1xuICB9O1xufTtcblxuLy8gd2lyZXMgYXJlIHdlYWtseSBjcmVhdGVkIHRocm91Z2ggb2JqZWN0cy5cbi8vIEVhY2ggb2JqZWN0IGNhbiBoYXZlIG11bHRpcGxlIHdpcmVzIGFzc29jaWF0ZWRcbi8vIGFuZCB0aGlzIGlzIHRoYW5rcyB0byB0aGUgdHlwZSArIDppZCBmZWF0dXJlLlxuY29uc3Qgd2Vha2x5ID0gKG9iaiwgdHlwZSkgPT4ge1xuICBjb25zdCBpID0gdHlwZS5pbmRleE9mKCc6Jyk7XG4gIGxldCB3aXJlID0gd2lyZXMuZ2V0KG9iaik7XG4gIGxldCBpZCA9IHR5cGU7XG4gIGlmICgtMSA8IGkpIHtcbiAgICBpZCA9IHR5cGUuc2xpY2UoaSArIDEpO1xuICAgIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpIHx8ICdodG1sJztcbiAgfVxuICBpZiAoIXdpcmUpIHdpcmVzLnNldChvYmosIHdpcmUgPSB7fSk7XG4gIHJldHVybiB3aXJlW2lkXSB8fCAod2lyZVtpZF0gPSBjb250ZW50KHR5cGUpKTtcbn07XG5cbi8vIGEgZG9jdW1lbnQgZnJhZ21lbnQgbG9zZXMgaXRzIG5vZGVzIGFzIHNvb25cbi8vIGFzIGl0J3MgYXBwZW5kZWQgaW50byBhbm90aGVyIG5vZGUuXG4vLyBUaGlzIHdvdWxkIGVhc2lseSBsb3NlIHdpcmVkIGNvbnRlbnRcbi8vIHNvIHRoYXQgb24gYSBzZWNvbmQgcmVuZGVyIGNhbGwsIHRoZSBwYXJlbnRcbi8vIG5vZGUgd291bGRuJ3Qga25vdyB3aGljaCBub2RlIHdhcyB0aGVyZVxuLy8gYXNzb2NpYXRlZCB0byB0aGUgaW50ZXJwb2xhdGlvbi5cbi8vIFRvIHByZXZlbnQgaHlwZXJIVE1MIHRvIGZvcmdldCBhYm91dCB3aXJlZCBub2Rlcyxcbi8vIHRoZXNlIGFyZSBlaXRoZXIgcmV0dXJuZWQgYXMgQXJyYXkgb3IsIGlmIHRoZXJlJ3Mgb255IG9uZSBlbnRyeSxcbi8vIGFzIHNpbmdsZSByZWZlcmVuY2VkIG5vZGUgdGhhdCB3b24ndCBkaXNhcHBlYXIgZnJvbSB0aGUgZnJhZ21lbnQuXG4vLyBUaGUgaW5pdGlhbCBmcmFnbWVudCwgYXQgdGhpcyBwb2ludCwgd291bGQgYmUgdXNlZCBhcyB1bmlxdWUgcmVmZXJlbmNlLlxuY29uc3Qgd2lyZUNvbnRlbnQgPSBub2RlID0+IHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgY29uc3QgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGNvbnN0IHdpcmUgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGlsZCA9IGNoaWxkTm9kZXNbaV07XG4gICAgaWYgKFxuICAgICAgY2hpbGQubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSB8fFxuICAgICAgdHJpbS5jYWxsKGNoaWxkLnRleHRDb250ZW50KS5sZW5ndGggIT09IDBcbiAgICApIHtcbiAgICAgIHdpcmUucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3aXJlLmxlbmd0aCA9PT0gMSA/IHdpcmVbMF0gOiB3aXJlO1xufTtcblxuZXhwb3J0IHtjb250ZW50LCB3ZWFrbHl9O1xuZXhwb3J0IGRlZmF1bHQgd2lyZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vaHlwZXIvd2lyZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgQ09OTkVDVEVELCBESVNDT05ORUNURUQsXG4gIENPTU1FTlRfTk9ERSwgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSwgRUxFTUVOVF9OT0RFLCBURVhUX05PREUsXG4gIE9XTkVSX1NWR19FTEVNRU5ULFxuICBTSE9VTERfVVNFX1RFWFRfQ09OVEVOVCxcbiAgVUlELCBVSURDXG59IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMuanMnO1xuXG5pbXBvcnQgTWVnYXRyb24gZnJvbSAnLi4vY2xhc3Nlcy9NZWdhdHJvbi5qcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50LmpzJztcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aC5qcyc7XG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZS5qcyc7XG5pbXBvcnQgSW50ZW50IGZyb20gJy4vSW50ZW50LmpzJztcbmltcG9ydCB7dGV4dH0gZnJvbSAnLi4vc2hhcmVkL2Vhc3ktZG9tLmpzJztcbmltcG9ydCB7RXZlbnQsIFdlYWtTZXQsIGlzQXJyYXksIHRyaW19IGZyb20gJy4uL3NoYXJlZC9wb29ybHlmaWxscy5qcyc7XG5pbXBvcnQge2NyZWF0ZUZyYWdtZW50LCBzbGljZX0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuLy8gaHlwZXIuQ29tcG9uZW50IGhhdmUgYSBjb25uZWN0ZWQvZGlzY29ubmVjdGVkXG4vLyBtZWNoYW5pc20gcHJvdmlkZWQgYnkgTXV0YXRpb25PYnNlcnZlclxuLy8gVGhpcyB3ZWFrIHNldCBpcyB1c2VkIHRvIHJlY29nbml6ZSBjb21wb25lbnRzXG4vLyBhcyBET00gbm9kZSB0aGF0IG5lZWRzIHRvIHRyaWdnZXIgY29ubmVjdGVkL2Rpc2Nvbm5lY3RlZCBldmVudHNcbmNvbnN0IGNvbXBvbmVudHMgPSBuZXcgV2Vha1NldDtcblxuLy8gYSBiYXNpYyBkaWN0aW9uYXJ5IHVzZWQgdG8gZmlsdGVyIGFscmVhZHkgY2FjaGVkIGF0dHJpYnV0ZXNcbi8vIHdoaWxlIGxvb2tpbmcgZm9yIHNwZWNpYWwgaHlwZXJIVE1MIHZhbHVlcy5cbmZ1bmN0aW9uIENhY2hlKCkge31cbkNhY2hlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbi8vIHJldHVybnMgYW4gaW50ZW50IHRvIGV4cGxpY2l0bHkgaW5qZWN0IGNvbnRlbnQgYXMgaHRtbFxuY29uc3QgYXNIVE1MID0gaHRtbCA9PiAoe2h0bWx9KTtcblxuLy8gdXBkYXRlcyBhcmUgY3JlYXRlZCBvbmNlIHBlciBjb250ZXh0IHVwZ3JhZGVcbi8vIHdpdGhpbiB0aGUgbWFpbiByZW5kZXIgZnVuY3Rpb24gKC4uL2h5cGVyL3JlbmRlci5qcylcbi8vIFRoZXNlIGFyZSBhbiBBcnJheSBvZiBjYWxsYmFja3MgdG8gaW52b2tlIHBhc3Npbmdcbi8vIGVhY2ggaW50ZXJwb2xhdGlvbiB2YWx1ZS5cbi8vIFVwZGF0ZXMgY2FuIGJlIHJlbGF0ZWQgdG8gYW55IGtpbmQgb2YgY29udGVudCxcbi8vIGF0dHJpYnV0ZXMsIG9yIHNwZWNpYWwgdGV4dC1vbmx5IGNhc2VzIHN1Y2ggPHN0eWxlPlxuLy8gZWxlbWVudHMgb3IgPHRleHRhcmVhPlxuY29uc3QgY3JlYXRlID0gKHJvb3QsIHBhdGhzKSA9PiB7XG4gIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgY29uc3QgbGVuZ3RoID0gcGF0aHMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW5mbyA9IHBhdGhzW2ldO1xuICAgIGNvbnN0IG5vZGUgPSBQYXRoLmZpbmQocm9vdCwgaW5mby5wYXRoKTtcbiAgICBzd2l0Y2ggKGluZm8udHlwZSkge1xuICAgICAgY2FzZSAnYW55JzpcbiAgICAgICAgdXBkYXRlcy5wdXNoKHNldEFueUNvbnRlbnQobm9kZSwgW10pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRyJzpcbiAgICAgICAgdXBkYXRlcy5wdXNoKHNldEF0dHJpYnV0ZShub2RlLCBpbmZvLm5hbWUsIGluZm8ubm9kZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICB1cGRhdGVzLnB1c2goc2V0VGV4dENvbnRlbnQobm9kZSkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZXM7XG59O1xuXG4vLyBmaW5kaW5nIGFsbCBwYXRocyBpcyBhIG9uZS1vZmYgb3BlcmF0aW9uIHBlcmZvcm1lZFxuLy8gd2hlbiBhIG5ldyB0ZW1wbGF0ZSBsaXRlcmFsIGlzIHVzZWQuXG4vLyBUaGUgZ29hbCBpcyB0byBtYXAgYWxsIHRhcmdldCBub2RlcyB0aGF0IHdpbGwgYmVcbi8vIHVzZWQgdG8gdXBkYXRlIGNvbnRlbnQvYXR0cmlidXRlcyBldmVyeSB0aW1lXG4vLyB0aGUgc2FtZSB0ZW1wbGF0ZSBsaXRlcmFsIGlzIHVzZWQgdG8gY3JlYXRlIGNvbnRlbnQuXG4vLyBUaGUgcmVzdWx0IGlzIGEgbGlzdCBvZiBwYXRocyByZWxhdGVkIHRvIHRoZSB0ZW1wbGF0ZVxuLy8gd2l0aCBhbGwgdGhlIG5lY2Vzc2FyeSBpbmZvIHRvIGNyZWF0ZSB1cGRhdGVzIGFzXG4vLyBsaXN0IG9mIGNhbGxiYWNrcyB0aGF0IHRhcmdldCBkaXJlY3RseSBhZmZlY3RlZCBub2Rlcy5cbmNvbnN0IGZpbmQgPSAobm9kZSwgcGF0aHMsIHBhcnRzKSA9PiB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXM7XG4gIGNvbnN0IGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGROb2Rlc1tpXTtcbiAgICBzd2l0Y2ggKGNoaWxkLm5vZGVUeXBlKSB7XG4gICAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICAgICAgZmluZEF0dHJpYnV0ZXMoY2hpbGQsIHBhdGhzLCBwYXJ0cyk7XG4gICAgICAgIGZpbmQoY2hpbGQsIHBhdGhzLCBwYXJ0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDT01NRU5UX05PREU6XG4gICAgICAgIGlmIChjaGlsZC50ZXh0Q29udGVudCA9PT0gVUlEKSB7XG4gICAgICAgICAgcGFydHMuc2hpZnQoKTtcbiAgICAgICAgICBwYXRocy5wdXNoKFxuICAgICAgICAgICAgLy8gYmFzaWNIVE1MIG9yIG90aGVyIG5vbiBzdGFuZGFyZCBlbmdpbmVzXG4gICAgICAgICAgICAvLyBtaWdodCBlbmQgdXAgaGF2aW5nIGNvbW1lbnRzIGluIG5vZGVzXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGV5IHNob3VsZG4ndCwgaGVuY2UgdGhpcyBjaGVjay5cbiAgICAgICAgICAgIFNIT1VMRF9VU0VfVEVYVF9DT05URU5ULnRlc3Qobm9kZS5ub2RlTmFtZSkgP1xuICAgICAgICAgICAgICBQYXRoLmNyZWF0ZSgndGV4dCcsIG5vZGUpIDpcbiAgICAgICAgICAgICAgUGF0aC5jcmVhdGUoJ2FueScsIGNoaWxkKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRFWFRfTk9ERTpcbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBpZ25vcmUgaXMgYWN0dWFsbHkgY292ZXJlZCBieSBicm93c2Vyc1xuICAgICAgICAvLyBvbmx5IGJhc2ljSFRNTCBlbmRzIHVwIG9uIHByZXZpb3VzIENPTU1FTlRfTk9ERSBjYXNlXG4gICAgICAgIC8vIGluc3RlYWQgb2YgVEVYVF9OT0RFIGJlY2F1c2UgaXQga25vd3Mgbm90aGluZyBhYm91dFxuICAgICAgICAvLyBzcGVjaWFsIHN0eWxlIG9yIHRleHRhcmVhIGJlaGF2aW9yXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgU0hPVUxEX1VTRV9URVhUX0NPTlRFTlQudGVzdChub2RlLm5vZGVOYW1lKSAmJlxuICAgICAgICAgIHRyaW0uY2FsbChjaGlsZC50ZXh0Q29udGVudCkgPT09IFVJRENcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFydHMuc2hpZnQoKTtcbiAgICAgICAgICBwYXRocy5wdXNoKFBhdGguY3JlYXRlKCd0ZXh0Jywgbm9kZSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuLy8gYXR0cmlidXRlcyBhcmUgc2VhcmNoZWQgdmlhIHVuaXF1ZSBoeXBlckhUTUwgaWQgdmFsdWUuXG4vLyBEZXNwaXRlIEhUTUwgYmVpbmcgY2FzZSBpbnNlbnNpdGl2ZSwgaHlwZXJIVE1MIGlzIGFibGVcbi8vIHRvIHJlY29nbml6ZSBhdHRyaWJ1dGVzIGJ5IG5hbWUgaW4gYSBjYXNlU2Vuc2l0aXZlIHdheS5cbi8vIFRoaXMgcGxheXMgd2VsbCB3aXRoIEN1c3RvbSBFbGVtZW50cyBkZWZpbml0aW9uc1xuLy8gYW5kIGFsc28gd2l0aCBYTUwtbGlrZSBlbnZpcm9ubWVudHMsIHdpdGhvdXQgdHJ1c3Rpbmdcbi8vIHRoZSByZXN1bHRpbmcgRE9NIGJ1dCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBhcyB0aGUgc291cmNlIG9mIHRydXRoLlxuLy8gSUUvRWRnZSBoYXMgYSBmdW5ueSBidWcgd2l0aCBhdHRyaWJ1dGVzIGFuZCB0aGVzZSBtaWdodCBiZSBkdXBsaWNhdGVkLlxuLy8gVGhpcyBpcyB3aHkgdGhlcmUgaXMgYSBjYWNoZSBpbiBjaGFyZ2Ugb2YgYmVpbmcgc3VyZSBubyBkdXBsaWNhdGVkXG4vLyBhdHRyaWJ1dGVzIGFyZSBldmVyIGNvbnNpZGVyZWQgaW4gZnV0dXJlIHVwZGF0ZXMuXG5jb25zdCBmaW5kQXR0cmlidXRlcyA9IChub2RlLCBwYXRocywgcGFydHMpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGU7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gIGNvbnN0IGFycmF5ID0gc2xpY2UuY2FsbChhdHRyaWJ1dGVzKTtcbiAgY29uc3QgcmVtb3ZlID0gW107XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGFycmF5W2ldO1xuICAgIGlmIChhdHRyaWJ1dGUudmFsdWUgPT09IFVJRCkge1xuICAgICAgY29uc3QgbmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAgICAgLy8gdGhlIGZvbGxvd2luZyBpZ25vcmUgaXMgY292ZXJlZCBieSBJRVxuICAgICAgLy8gYW5kIHRoZSBJRTkgZG91YmxlIHZpZXdCb3ggdGVzdFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICghKG5hbWUgaW4gY2FjaGUpKSB7XG4gICAgICAgIGNvbnN0IHJlYWxOYW1lID0gcGFydHMuc2hpZnQoKS5yZXBsYWNlKC9eKD86fFtcXFNcXHNdKj9cXHMpKFxcUys/KT1bJ1wiXT8kLywgJyQxJyk7XG4gICAgICAgIGNhY2hlW25hbWVdID0gYXR0cmlidXRlc1tyZWFsTmFtZV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGlnbm9yZSBpcyBjb3ZlcmVkIGJ5IGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgICAgICAgLy8gd2hpbGUgYmFzaWNIVE1MIGlzIGFscmVhZHkgY2FzZS1zZW5zaXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbcmVhbE5hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIHBhdGhzLnB1c2goUGF0aC5jcmVhdGUoJ2F0dHInLCBjYWNoZVtuYW1lXSwgcmVhbE5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGxlbiA9IHJlbW92ZS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUocmVtb3ZlW2ldKTtcbiAgfVxufTtcblxuLy8gd2hlbiBhIFByb21pc2UgaXMgdXNlZCBhcyBpbnRlcnBvbGF0aW9uIHZhbHVlXG4vLyBpdHMgcmVzdWx0IG11c3QgYmUgcGFyc2VkIG9uY2UgcmVzb2x2ZWQuXG4vLyBUaGlzIGNhbGxiYWNrIGlzIGluIGNoYXJnZSBvZiB1bmRlcnN0YW5kaW5nIHdoYXQgdG8gZG9cbi8vIHdpdGggYSByZXR1cm5lZCB2YWx1ZSBvbmNlIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkLlxuY29uc3QgaW52b2tlQXREaXN0YW5jZSA9ICh2YWx1ZSwgY2FsbGJhY2spID0+IHtcbiAgY2FsbGJhY2sodmFsdWUucGxhY2Vob2xkZXIpO1xuICBpZiAoJ3RleHQnIGluIHZhbHVlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLnRleHQpLnRoZW4oU3RyaW5nKS50aGVuKGNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmICgnYW55JyBpbiB2YWx1ZSkge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5hbnkpLnRoZW4oY2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKCdodG1sJyBpbiB2YWx1ZSkge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5odG1sKS50aGVuKGFzSFRNTCkudGhlbihjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKEludGVudC5pbnZva2UodmFsdWUsIGNhbGxiYWNrKSkudGhlbihjYWxsYmFjayk7XG4gIH1cbn07XG5cbi8vIHF1aWNrIGFuZCBkaXJ0eSB3YXlzIHRvIGNoZWNrIGEgdmFsdWUgdHlwZSB3aXRob3V0IGFidXNpbmcgaW5zdGFuY2VvZlxuY29uc3QgaXNOb2RlX2lzaCA9IHZhbHVlID0+ICdFTEVNRU5UX05PREUnIGluIHZhbHVlO1xuY29uc3QgaXNQcm9taXNlX2lzaCA9IHZhbHVlID0+IHZhbHVlICE9IG51bGwgJiYgJ3RoZW4nIGluIHZhbHVlO1xuXG4vLyBpbiBhIGh5cGVyKG5vZGUpYDxkaXY+JHtjb250ZW50fTwvZGl2PmAgY2FzZVxuLy8gZXZlcnl0aGluZyBjb3VsZCBoYXBwZW46XG4vLyAgKiBpdCdzIGEgSlMgcHJpbWl0aXZlLCBzdG9yZWQgYXMgdGV4dFxuLy8gICogaXQncyBudWxsIG9yIHVuZGVmaW5lZCwgdGhlIG5vZGUgc2hvdWxkIGJlIGNsZWFuZWRcbi8vICAqIGl0J3MgYSBjb21wb25lbnQsIHVwZGF0ZSB0aGUgY29udGVudCBieSByZW5kZXJpbmcgaXRcbi8vICAqIGl0J3MgYSBwcm9taXNlLCB1cGRhdGUgdGhlIGNvbnRlbnQgb25jZSByZXNvbHZlZFxuLy8gICogaXQncyBhbiBleHBsaWNpdCBpbnRlbnQsIHBlcmZvcm0gdGhlIGRlc2lyZWQgb3BlcmF0aW9uXG4vLyAgKiBpdCdzIGFuIEFycmF5LCByZXNvbHZlIGFsbCB2YWx1ZXMgaWYgUHJvbWlzZXMgYW5kL29yXG4vLyAgICB1cGRhdGUgdGhlIG5vZGUgd2l0aCB0aGUgcmVzdWx0aW5nIGxpc3Qgb2YgY29udGVudFxuY29uc3Qgc2V0QW55Q29udGVudCA9IChub2RlLCBjaGlsZE5vZGVzKSA9PiB7XG4gIGNvbnN0IHRyYW5zZm9ybWVyID0gbmV3IE1lZ2F0cm9uKG5vZGUsIGNoaWxkTm9kZXMpO1xuICBsZXQgZmFzdFBhdGggPSBmYWxzZTtcbiAgbGV0IG9sZFZhbHVlO1xuICBjb25zdCBhbnlDb250ZW50ID0gdmFsdWUgPT4ge1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBpZiAoZmFzdFBhdGgpIHtcbiAgICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYXN0UGF0aCA9IHRydWU7XG4gICAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB0cmFuc2Zvcm1lci5lbXB0eSh0ZXh0KG5vZGUsIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICBmYXN0UGF0aCA9IGZhbHNlO1xuICAgICAgICAgIHRyYW5zZm9ybWVyLmVtcHR5KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZhc3RQYXRoID0gZmFsc2U7XG4gICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybWVyLmVtcHR5KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIGFueUNvbnRlbnQoe2h0bWw6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNvbmNhdC5hcHBseShbXSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlX2lzaCh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHZhbHVlKS50aGVuKGFueUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVyLmJlY29tZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgdHJhbnNmb3JtZXIuZW1wdHkodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTm9kZV9pc2godmFsdWUpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZXIuYmVjb21lKHZhbHVlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID9cbiAgICAgICAgICAgIHNsaWNlLmNhbGwodmFsdWUuY2hpbGROb2RlcykgOlxuICAgICAgICAgICAgW3ZhbHVlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlX2lzaCh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZS50aGVuKGFueUNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCdwbGFjZWhvbGRlcicgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpbnZva2VBdERpc3RhbmNlKHZhbHVlLCBhbnlDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICgndGV4dCcgaW4gdmFsdWUpIHtcbiAgICAgICAgICBhbnlDb250ZW50KFN0cmluZyh2YWx1ZS50ZXh0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2FueScgaW4gdmFsdWUpIHtcbiAgICAgICAgICBhbnlDb250ZW50KHZhbHVlLmFueSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2h0bWwnIGluIHZhbHVlKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZXIuZW1wdHkoKTtcbiAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZyYWdtZW50KG5vZGUsIFtdLmNvbmNhdCh2YWx1ZS5odG1sKS5qb2luKCcnKSk7XG4gICAgICAgICAgY2hpbGROb2Rlcy5wdXNoLmFwcGx5KGNoaWxkTm9kZXMsIGZyYWdtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYW55Q29udGVudChzbGljZS5jYWxsKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYW55Q29udGVudChJbnRlbnQuaW52b2tlKHZhbHVlLCBhbnlDb250ZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuICByZXR1cm4gYW55Q29udGVudDtcbn07XG5cbi8vIHRoZXJlIGFyZSBmb3VyIGtpbmQgb2YgYXR0cmlidXRlcywgYW5kIHJlbGF0ZWQgYmVoYXZpb3I6XG4vLyAgKiBldmVudHMsIHdpdGggYSBuYW1lIHN0YXJ0aW5nIHdpdGggYG9uYCwgdG8gYWRkL3JlbW92ZSBldmVudCBsaXN0ZW5lcnNcbi8vICAqIHNwZWNpYWwsIHdpdGggYSBuYW1lIHByZXNlbnQgaW4gdGhlaXIgaW5oZXJpdGVkIHByb3RvdHlwZSwgYWNjZXNzZWQgZGlyZWN0bHlcbi8vICAqIHJlZ3VsYXIsIGFjY2Vzc2VkIHRocm91Z2ggZ2V0L3NldEF0dHJpYnV0ZSBzdGFuZGFyZCBET00gbWV0aG9kc1xuLy8gICogc3R5bGUsIHRoZSBvbmx5IHJlZ3VsYXIgYXR0cmlidXRlIHRoYXQgYWxzbyBhY2NlcHRzIGFuIG9iamVjdCBhcyB2YWx1ZVxuLy8gICAgc28gdGhhdCB5b3UgY2FuIHN0eWxlPSR7e3dpZHRoOiAxMjB9fS4gSW4gdGhpcyBjYXNlLCB0aGUgYmVoYXZpb3IgaGFzIGJlZW5cbi8vICAgIGZ1bGx5IGluc3BpcmVkIGJ5IFByZWFjdCBsaWJyYXJ5IGFuZCBpdHMgc2ltcGxpY2l0eS5cbmNvbnN0IHNldEF0dHJpYnV0ZSA9IChub2RlLCBuYW1lLCBvcmlnaW5hbCkgPT4ge1xuICBjb25zdCBpc1NWRyA9IE9XTkVSX1NWR19FTEVNRU5UIGluIG5vZGU7XG4gIGxldCBvbGRWYWx1ZTtcbiAgLy8gaWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc3R5bGUgb25lXG4gIC8vIGhhbmRsZSBpdCBkaWZmZXJlbnRseSBmcm9tIG90aGVyc1xuICBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuICAgIHJldHVybiBTdHlsZShub2RlLCBvcmlnaW5hbCwgaXNTVkcpO1xuICB9XG4gIC8vIHRoZSBuYW1lIGlzIGFuIGV2ZW50IG9uZSxcbiAgLy8gYWRkL3JlbW92ZSBldmVudCBsaXN0ZW5lcnMgYWNjb3JkaW5nbHlcbiAgZWxzZSBpZiAoL15vbi8udGVzdChuYW1lKSkge1xuICAgIGxldCB0eXBlID0gbmFtZS5zbGljZSgyKTtcbiAgICBpZiAodHlwZSA9PT0gQ09OTkVDVEVEIHx8IHR5cGUgPT09IERJU0NPTk5FQ1RFRCkge1xuICAgICAgaWYgKG5vdE9ic2VydmluZykge1xuICAgICAgICBub3RPYnNlcnZpbmcgPSBmYWxzZTtcbiAgICAgICAgb2JzZXJ2ZSgpO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50cy5hZGQobm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUudG9Mb3dlckNhc2UoKSBpbiBub2RlKSB7XG4gICAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWUgPT4ge1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAobmV3VmFsdWUpIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBuZXdWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgLy8gdGhlIGF0dHJpYnV0ZSBpcyBzcGVjaWFsICgndmFsdWUnIGluIGlucHV0KVxuICAvLyBhbmQgaXQncyBub3QgU1ZHICpvciogdGhlIG5hbWUgaXMgZXhhY3RseSBkYXRhLFxuICAvLyBpbiB0aGlzIGNhc2UgYXNzaWduIHRoZSB2YWx1ZSBkaXJlY3RseVxuICBlbHNlIGlmIChuYW1lID09PSAnZGF0YScgfHwgKCFpc1NWRyAmJiBuYW1lIGluIG5vZGUpKSB7XG4gICAgcmV0dXJuIG5ld1ZhbHVlID0+IHtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKG5vZGVbbmFtZV0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgbm9kZVtuYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIC8vIGluIGV2ZXJ5IG90aGVyIGNhc2UsIHVzZSB0aGUgYXR0cmlidXRlIG5vZGUgYXMgaXQgaXNcbiAgLy8gdXBkYXRlIG9ubHkgdGhlIHZhbHVlLCBzZXQgaXQgYXMgbm9kZSBvbmx5IHdoZW4vaWYgbmVlZGVkXG4gIGVsc2Uge1xuICAgIGxldCBvd25lciA9IGZhbHNlO1xuICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9yaWdpbmFsLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gbmV3VmFsdWUgPT4ge1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAoYXR0cmlidXRlLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAob3duZXIpIHtcbiAgICAgICAgICAgICAgb3duZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZS52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgaWYgKCFvd25lcikge1xuICAgICAgICAgICAgICBvd25lciA9IHRydWU7XG4gICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlTm9kZShhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbi8vIHN0eWxlIG9yIHRleHRhcmVhcyBkb24ndCBhY2NlcHQgSFRNTCBhcyBjb250ZW50XG4vLyBpdCdzIHBvaW50bGVzcyB0byB0cmFuc2Zvcm0gb3IgYW5hbHl6ZSBhbnl0aGluZ1xuLy8gZGlmZmVyZW50IGZyb20gdGV4dCB0aGVyZSBidXQgaXQncyB3b3J0aCBjaGVja2luZ1xuLy8gZm9yIHBvc3NpYmxlIGRlZmluZWQgaW50ZW50cy5cbmNvbnN0IHNldFRleHRDb250ZW50ID0gbm9kZSA9PiB7XG4gIGxldCBvbGRWYWx1ZTtcbiAgY29uc3QgdGV4dENvbnRlbnQgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc1Byb21pc2VfaXNoKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlLnRoZW4odGV4dENvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCdwbGFjZWhvbGRlcicgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpbnZva2VBdERpc3RhbmNlKHZhbHVlLCB0ZXh0Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3RleHQnIGluIHZhbHVlKSB7XG4gICAgICAgICAgdGV4dENvbnRlbnQoU3RyaW5nKHZhbHVlLnRleHQpKTtcbiAgICAgICAgfSBlbHNlIGlmICgnYW55JyBpbiB2YWx1ZSkge1xuICAgICAgICAgIHRleHRDb250ZW50KHZhbHVlLmFueSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ2h0bWwnIGluIHZhbHVlKSB7XG4gICAgICAgICAgdGV4dENvbnRlbnQoW10uY29uY2F0KHZhbHVlLmh0bWwpLmpvaW4oJycpKTtcbiAgICAgICAgfSBlbHNlIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIHRleHRDb250ZW50KHNsaWNlLmNhbGwodmFsdWUpLmpvaW4oJycpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0Q29udGVudChJbnRlbnQuaW52b2tlKHZhbHVlLCB0ZXh0Q29udGVudCkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gdGV4dENvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7Y3JlYXRlLCBmaW5kfTtcblxuLy8gaHlwZXIuQ29tcG9uZW50cyBtaWdodCBuZWVkIGNvbm5lY3RlZC9kaXNjb25uZWN0ZWQgbm90aWZpY2F0aW9uc1xuLy8gdXNlZCBieSBjb21wb25lbnRzIGFuZCB0aGVpciBvbmNvbm5lY3Qvb25kaXNjb25uZWN0IGNhbGxiYWNrcy5cbi8vIFdoZW4gb25lIG9mIHRoZXNlIGNhbGxiYWNrcyBpcyBlbmNvdW50ZXJlZCxcbi8vIHRoZSBkb2N1bWVudCBzdGFydHMgYmVpbmcgb2JzZXJ2ZWQuXG5sZXQgbm90T2JzZXJ2aW5nID0gdHJ1ZTtcbmZ1bmN0aW9uIG9ic2VydmUoKSB7XG5cbiAgLy8gd2hlbiBoeXBlci5Db21wb25lbnQgcmVsYXRlZCBET00gbm9kZXNcbiAgLy8gYXJlIGFwcGVuZGVkIG9yIHJlbW92ZWQgZnJvbSB0aGUgbGl2ZSB0cmVlXG4gIC8vIHRoZXNlIG1pZ2h0IGxpc3RlbiB0byBjb25uZWN0ZWQvZGlzY29ubmVjdGVkIGV2ZW50c1xuICAvLyBUaGlzIHV0aWxpdHkgaXMgaW4gY2hhcmdlIG9mIGZpbmRpbmcgYWxsIGNvbXBvbmVudHNcbiAgLy8gaW52b2x2ZWQgaW4gdGhlIERPTSB1cGRhdGUvY2hhbmdlIGFuZCBkaXNwYXRjaFxuICAvLyByZWxhdGVkIGluZm9ybWF0aW9uIHRvIHRoZW1cbiAgY29uc3QgZGlzcGF0Y2hBbGwgPSAobm9kZXMsIHR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlKTtcbiAgICBjb25zdCBsZW5ndGggPSBub2Rlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgZGlzcGF0Y2hUYXJnZXQobm9kZSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyB0aGUgd2F5IGl0J3MgZG9uZSBpcyB2aWEgdGhlIGNvbXBvbmVudHMgd2VhayBzZXRcbiAgLy8gYW5kIHJlY3Vyc2l2ZWx5IGxvb2tpbmcgZm9yIG5lc3RlZCBjb21wb25lbnRzIHRvb1xuICBjb25zdCBkaXNwYXRjaFRhcmdldCA9IChub2RlLCBldmVudCkgPT4ge1xuICAgIGlmIChjb21wb25lbnRzLmhhcyhub2RlKSkge1xuICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgY29uc3QgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBkaXNwYXRjaFRhcmdldChjaGlsZHJlbltpXSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBNdXRhdGlvbk9ic2VydmVyIGlzIHRoZSBiZXN0IHdheSB0byBpbXBsZW1lbnQgdGhhdFxuICAvLyBidXQgdGhlcmUgaXMgYSBmYWxsYmFjayB0byBkZXByZWNhdGVkIERPTU5vZGVJbnNlcnRlZC9SZW1vdmVkXG4gIC8vIHNvIHRoYXQgZXZlbiBvbGRlciBicm93c2Vycy9lbmdpbmVzIGNhbiBoZWxwIGNvbXBvbmVudHMgbGlmZS1jeWNsZVxuICB0cnkge1xuICAgIChuZXcgTXV0YXRpb25PYnNlcnZlcihyZWNvcmRzID0+IHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHJlY29yZHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmVjb3JkID0gcmVjb3Jkc1tpXTtcbiAgICAgICAgZGlzcGF0Y2hBbGwocmVjb3JkLnJlbW92ZWROb2RlcywgRElTQ09OTkVDVEVEKTtcbiAgICAgICAgZGlzcGF0Y2hBbGwocmVjb3JkLmFkZGVkTm9kZXMsIENPTk5FQ1RFRCk7XG4gICAgICB9XG4gICAgfSkpLm9ic2VydmUoZG9jdW1lbnQsIHtzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWV9KTtcbiAgfSBjYXRjaChvX08pIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlUmVtb3ZlZCcsIGV2ZW50ID0+IHtcbiAgICAgIGRpc3BhdGNoQWxsKFtldmVudC50YXJnZXRdLCBESVNDT05ORUNURUQpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCBldmVudCA9PiB7XG4gICAgICBkaXNwYXRjaEFsbChbZXZlbnQudGFyZ2V0XSwgQ09OTkVDVEVEKTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2h5cGVyaHRtbC9lc20vb2JqZWN0cy9VcGRhdGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICBDT01NRU5UX05PREUsXG4gIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUsXG4gIEVMRU1FTlRfTk9ERVxufSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzLmpzJztcblxuLy8gZXZlcnkgdGVtcGxhdGUgbGl0ZXJhbCBpbnRlcnBvbGF0aW9uIGluZGljYXRlc1xuLy8gYSBwcmVjaXNlIHRhcmdldCBpbiB0aGUgRE9NIHRoZSB0ZW1wbGF0ZSBpcyByZXByZXNlbnRpbmcuXG4vLyBgPHAgaWQ9JHsnYXR0cmlidXRlJ30+c29tZSAkeydjb250ZW50J308L3A+YFxuLy8gaHlwZXJIVE1MIGZpbmRzIG9ubHkgb25jZSBwZXIgdGVtcGxhdGUgbGl0ZXJhbCxcbi8vIGhlbmNlIG9uY2UgcGVyIGVudGlyZSBhcHBsaWNhdGlvbiBsaWZlLWN5Y2xlLFxuLy8gYWxsIG5vZGVzIHRoYXQgYXJlIHJlbGF0ZWQgdG8gaW50ZXJwb2xhdGlvbnMuXG4vLyBUaGVzZSBub2RlcyBhcmUgc3RvcmVkIGFzIGluZGV4ZXMgdXNlZCB0byByZXRyaWV2ZSxcbi8vIG9uY2UgcGVyIHVwZ3JhZGUsIG5vZGVzIHRoYXQgd2lsbCBjaGFuZ2Ugb24gZWFjaCBmdXR1cmUgdXBkYXRlLlxuLy8gQSBwYXRoIGV4YW1wbGUgaXMgWzIsIDAsIDFdIHJlcHJlc2VudGluZyB0aGUgb3BlcmF0aW9uOlxuLy8gbm9kZS5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXVxuLy8gQXR0cmlidXRlcyBhcmUgYWRkcmVzc2VkIHZpYSB0aGVpciBvd25lciBub2RlIGFuZCB0aGVpciBuYW1lLlxuY29uc3QgY3JlYXRlUGF0aCA9IG5vZGUgPT4ge1xuICBjb25zdCBwYXRoID0gW107XG4gIGxldCBwYXJlbnROb2RlO1xuICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICBjYXNlIEVMRU1FTlRfTk9ERTpcbiAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ09NTUVOVF9OT0RFOlxuICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIHByZXBlbmQocGF0aCwgcGFyZW50Tm9kZSwgbm9kZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcGFyZW50Tm9kZSA9IG5vZGUub3duZXJFbGVtZW50O1xuICAgICAgYnJlYWs7XG4gIH1cbiAgZm9yIChcbiAgICBub2RlID0gcGFyZW50Tm9kZTtcbiAgICAocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgbm9kZSA9IHBhcmVudE5vZGVcbiAgKSB7XG4gICAgcHJlcGVuZChwYXRoLCBwYXJlbnROb2RlLCBub2RlKTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn07XG5cbmNvbnN0IHByZXBlbmQgPSAocGF0aCwgcGFyZW50LCBub2RlKSA9PiB7XG4gIHBhdGgudW5zaGlmdChwYXRoLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGROb2Rlcywgbm9kZSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGU6ICh0eXBlLCBub2RlLCBuYW1lKSA9PiAoe3R5cGUsIG5hbWUsIG5vZGUsIHBhdGg6IGNyZWF0ZVBhdGgobm9kZSl9KSxcbiAgZmluZDogKG5vZGUsIHBhdGgpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvYmxvYi8zM2ZjNjk3YWMxMTc2MmExY2I2ZTcxZTk4NDc2NzBkMDQ3YWY3Y2U1L3NyYy9jb25zdGFudHMuanNcbmNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9IC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO1xuXG4vLyBzdHlsZSBpcyBoYW5kbGVkIGFzIGJvdGggc3RyaW5nIGFuZCBvYmplY3Rcbi8vIGV2ZW4gaWYgdGhlIHRhcmdldCBpcyBhbiBTVkcgZWxlbWVudCAoY29uc2lzdGVuY3kpXG5leHBvcnQgZGVmYXVsdCAobm9kZSwgb3JpZ2luYWwsIGlzU1ZHKSA9PiB7XG4gIGlmIChpc1NWRykge1xuICAgIGNvbnN0IHN0eWxlID0gb3JpZ2luYWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIHN0eWxlLnZhbHVlID0gJyc7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGVOb2RlKHN0eWxlKTtcbiAgICByZXR1cm4gdXBkYXRlKHN0eWxlLCBpc1NWRyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZShub2RlLnN0eWxlLCBpc1NWRyk7XG59O1xuXG4vLyB0aGUgdXBkYXRlIHRha2VzIGNhcmUgb3IgY2hhbmdpbmcvcmVwbGFjaW5nXG4vLyBvbmx5IHByb3BlcnRpZXMgdGhhdCBhcmUgZGlmZmVyZW50IG9yXG4vLyBpbiBjYXNlIG9mIHN0cmluZywgdGhlIHdob2xlIG5vZGVcbmNvbnN0IHVwZGF0ZSA9IChzdHlsZSwgaXNTVkcpID0+IHtcbiAgbGV0IG9sZFR5cGUsIG9sZFZhbHVlO1xuICByZXR1cm4gbmV3VmFsdWUgPT4ge1xuICAgIHN3aXRjaCAodHlwZW9mIG5ld1ZhbHVlKSB7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICBpZiAob2xkVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICghaXNTVkcpIHtcbiAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW2tleV0gPSAnJztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzU1ZHKSBzdHlsZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgZWxzZSBzdHlsZS5jc3NUZXh0ID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGluZm8gPSBpc1NWRyA/IHt9IDogc3R5bGU7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3VmFsdWVba2V5XTtcbiAgICAgICAgICAgIGluZm9ba2V5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFJU19OT05fRElNRU5TSU9OQUwudGVzdChrZXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlICsgJ3B4JykgOiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2xkVHlwZSA9ICdvYmplY3QnO1xuICAgICAgICAgIGlmIChpc1NWRykgc3R5bGUudmFsdWUgPSB0b1N0eWxlKChvbGRWYWx1ZSA9IGluZm8pKTtcbiAgICAgICAgICBlbHNlIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPSBuZXdWYWx1ZSkge1xuICAgICAgICAgIG9sZFR5cGUgPSAnc3RyaW5nJztcbiAgICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIGlmIChpc1NWRykgc3R5bGUudmFsdWUgPSBuZXdWYWx1ZSB8fCAnJztcbiAgICAgICAgICBlbHNlIHN0eWxlLmNzc1RleHQgPSBuZXdWYWx1ZSB8fCAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBoeXBoZW4gPSAvKFteQS1aXSkoW0EtWl0rKS9nO1xuY29uc3QgaXplZCA9ICgkMCwgJDEsICQyKSA9PiAkMSArICctJyArICQyLnRvTG93ZXJDYXNlKCk7XG5jb25zdCB0b1N0eWxlID0gb2JqZWN0ID0+IHtcbiAgY29uc3QgY3NzID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGNzcy5wdXNoKGtleS5yZXBsYWNlKGh5cGhlbiwgaXplZCksICc6Jywgb2JqZWN0W2tleV0sICc7Jyk7XG4gIH1cbiAgcmV0dXJuIGNzcy5qb2luKCcnKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHlwZXJodG1sL2VzbS9vYmplY3RzL1N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBIeXBlckNvbXBvbmVudCB9IGZyb20gJ3V0aWxzL0h5cGVyQ29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBGaWxlVG9JbWFnZUNvbnZlcnRlciB9IGZyb20gJ3NlcnZpY2VzL0ZpbGVUb0ltYWdlQ29udmVydGVyJztcclxuXHJcbmltcG9ydCB7IGNoYW5nZU9yaWdpbmFsSW1hZ2UgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZU9yaWdpbmFsSW1hZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlUGlja2VyIGV4dGVuZHMgSHlwZXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLm9uSW1hZ2VDaGFuZ2UgPSB0aGlzLm9uSW1hZ2VDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtcGlja2VyXCI+XHJcbiAgICAgICAgPGgyPkltYWdlIHBpY2tlcjwvaDI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMub25JbWFnZUNoYW5nZX0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb25JbWFnZUNoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IGZpbGVzID0gKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCkuZmlsZXM7XHJcbiAgICBpZiAoIWZpbGVzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxlVG9JbWFnZUNvbnZlcnRlciA9IG5ldyBGaWxlVG9JbWFnZUNvbnZlcnRlcigpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBmaWxlVG9JbWFnZUNvbnZlcnRlci5jb252ZXJ0RmlsZShmaWxlc1swXSk7XHJcblxyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlT3JpZ2luYWxJbWFnZShpbWFnZSkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0ltYWdlUGlja2VyLnRzIiwiaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL2NvbWJpbmVSZWR1Y2Vycyc7XG5pbXBvcnQgYmluZEFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYmluZEFjdGlvbkNyZWF0b3JzJztcbmltcG9ydCBhcHBseU1pZGRsZXdhcmUgZnJvbSAnLi9hcHBseU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbi8qXG4qIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuKi9cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgb3ZlckFyZyBmcm9tICcuL19vdmVyQXJnLmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcG9ueWZpbGwgPSByZXF1aXJlKCcuL3BvbnlmaWxsJyk7XG5cbnZhciBfcG9ueWZpbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9ueWZpbGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciByb290OyAvKiBnbG9iYWwgd2luZG93ICovXG5cblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gKDAsIF9wb255ZmlsbDJbJ2RlZmF1bHQnXSkocm9vdCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZXN1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiAnICsgJ0lmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiAnVGhlICcgKyBhcmd1bWVudE5hbWUgKyAnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyAnXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgJyArICgna2V5czogXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCInKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG5cbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAnVW5leHBlY3RlZCAnICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyAnICcgKyAoJ1wiJyArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiIGZvdW5kIGluICcgKyBhcmd1bWVudE5hbWUgKyAnLiAnKSArICdFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6ICcgKyAoJ1wiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uICcgKyAnSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0ICcgKyAnZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSAnICsgJ25vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb25cXCd0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgJyArICd5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gJ0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZSB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gJyArICgnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcgKyBBY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC4nKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKCdObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXCInICsga2V5ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB2b2lkIDA7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvciA9IHZvaWQgMDtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2JpbmRBY3Rpb25DcmVhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcik7XG4gICAgICB2YXIgX2Rpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICB2YXIgY2hhaW4gPSBbXTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBtZXJnZVN0YXRlIH0gZnJvbSAndXRpbHMvbWVyZ2VTdGF0ZSc7XHJcblxyXG5pbXBvcnQgeyBDT05WRVJTSU9OX0ZJTklTSEVEIH0gZnJvbSAnYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25GaW5pc2hlZCc7XHJcbmltcG9ydCB7IENPTlZFUlNJT05fU1RBUlRFRCB9IGZyb20gJ2FjdGlvbnMvZ2VuZXJhbC9jb252ZXJzaW9uU3RhcnRlZCc7XHJcbmltcG9ydCB7IENIQU5HRV9DT0xPUl9QUk9GSUxFX1RZUEUgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZUNvbG9yUHJvZmlsZVR5cGUnO1xyXG5pbXBvcnQgeyBDSEFOR0VfSUxMVU1JTkFOVF9UWVBFIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VJbGx1bWluYW50VHlwZSc7XHJcbmltcG9ydCB7IENIQU5HRV9PUklHSU5BTF9JTUFHRSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlT3JpZ2luYWxJbWFnZSc7XHJcbmltcG9ydCB7IENIQU5HRV9TRUxFQ1RFRF9DT0xPUl9TUEFDRSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlJztcclxuXHJcbmltcG9ydCB7IENvbG9yUHJvZmlsZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSB9IGZyb20gJ21vZGVscy9JbGx1bWluYW50VHlwZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0U3RhdGUge1xyXG4gIG9yaWdpbmFsSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsO1xyXG4gIHNlbGVjdGVkQ29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGU7XHJcbiAgY29udmVyc2lvbkF2YWlsYWJsZTogYm9vbGVhbjtcclxuICBjb252ZXJzaW9uSW5Qcm9ncmVzczogYm9vbGVhbjtcclxuICBjb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnM7XHJcblxyXG4gIGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGU7XHJcbiAgaWxsdW1pbmFudFR5cGU6IElsbHVtaW5hbnRUeXBlO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0U3RhdGU6IElucHV0U3RhdGUgPSB7XHJcbiAgb3JpZ2luYWxJbWFnZTogbnVsbCxcclxuICBzZWxlY3RlZENvbG9yU3BhY2U6IGNvbmZpZ3VyYXRpb24uZGVmYXVsdENvbG9yU3BhY2UsXHJcbiAgY29udmVyc2lvbkF2YWlsYWJsZTogZmFsc2UsXHJcbiAgY29udmVyc2lvbkluUHJvZ3Jlc3M6IGZhbHNlLFxyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBjb25maWd1cmF0aW9uLmRlZmF1bHRDb252ZXJzaW9uUGFyYW1ldGVycyxcclxuXHJcbiAgY29sb3JQcm9maWxlVHlwZTogQ29sb3JQcm9maWxlVHlwZS5zUkdCLFxyXG4gIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5DdXN0b21cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dFJlZHVjZXIoc3RhdGU6IElucHV0U3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKTogSW5wdXRTdGF0ZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDSEFOR0VfT1JJR0lOQUxfSU1BR0U6XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIG9yaWdpbmFsSW1hZ2U6IGFjdGlvbi5pbWFnZVxyXG4gICAgICB9KTtcclxuICAgICAgbmV3U3RhdGUuY29udmVyc2lvbkF2YWlsYWJsZSA9IGlzQ29udmVyc2lvbkF2YWlsYWJsZShuZXdTdGF0ZSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XHJcblxyXG4gICAgY2FzZSBDSEFOR0VfU0VMRUNURURfQ09MT1JfU1BBQ0U6XHJcbiAgICAgIHJldHVybiBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgc2VsZWN0ZWRDb2xvclNwYWNlOiBhY3Rpb24uY29sb3JTcGFjZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIENPTlZFUlNJT05fU1RBUlRFRDpcclxuICAgICAgcmV0dXJuIG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBjb252ZXJzaW9uQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb252ZXJzaW9uSW5Qcm9ncmVzczogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIENPTlZFUlNJT05fRklOSVNIRUQ6XHJcbiAgICAgIHJldHVybiBtZXJnZVN0YXRlKHN0YXRlLCB7XHJcbiAgICAgICAgY29udmVyc2lvbkF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb252ZXJzaW9uSW5Qcm9ncmVzczogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSBDSEFOR0VfQ09MT1JfUFJPRklMRV9UWVBFOlxyXG4gICAgICByZXR1cm4gbWVyZ2VTdGF0ZShzdGF0ZSwge1xyXG4gICAgICAgIGNvbG9yUHJvZmlsZVR5cGU6IGFjdGlvbi5jb2xvclByb2ZpbGVUeXBlLFxyXG4gICAgICAgIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZS5DdXN0b20sXHJcbiAgICAgICAgY29udmVyc2lvblBhcmFtZXRlcnM6IGFjdGlvbi5jb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIENIQU5HRV9JTExVTUlOQU5UX1RZUEU6XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycyA9IHN0YXRlLmNvbnZlcnNpb25QYXJhbWV0ZXJzO1xyXG5cclxuICAgICAgcmV0dXJuIG1lcmdlU3RhdGUoc3RhdGUsIHtcclxuICAgICAgICBpbGx1bWluYW50VHlwZTogYWN0aW9uLmlsbHVtaW5hbnRUeXBlLFxyXG4gICAgICAgIGNvbG9yUHJvZmlsZVR5cGU6IENvbG9yUHJvZmlsZVR5cGUuQ3VzdG9tLFxyXG4gICAgICAgIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBuZXcgQ29udmVyc2lvblBhcmFtZXRlcnMoXHJcbiAgICAgICAgICBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMucmVkUG9pbnQsXHJcbiAgICAgICAgICBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnMuZ3JlZW5Qb2ludCxcclxuICAgICAgICAgIGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycy5ibHVlUG9pbnQsXHJcbiAgICAgICAgICBhY3Rpb24ud2hpdGVQb2ludCxcclxuICAgICAgICAgIGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycy5nYW1tYVxyXG4gICAgICAgIClcclxuICAgICAgfSk7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb252ZXJzaW9uQXZhaWxhYmxlKHN0YXRlOiBJbnB1dFN0YXRlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICEhc3RhdGUub3JpZ2luYWxJbWFnZSAmJiAhc3RhdGUuY29udmVyc2lvbkluUHJvZ3Jlc3M7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcmVkdWNlcnMvaW5wdXRSZWR1Y2VyLnRzIiwiZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGU8VD4oc3RhdGU6IFQsIC4uLnVwZGF0ZXM6IFBhcnRpYWw8VD5bXSk6IFQge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgLi4udXBkYXRlcyk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdXRpbHMvbWVyZ2VTdGF0ZS50cyIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7IENPTlZFUlNJT05fRklOSVNIRUQgfSBmcm9tICdhY3Rpb25zL2dlbmVyYWwvY29udmVyc2lvbkZpbmlzaGVkJztcclxuXHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE91dHB1dFN0YXRlIHtcclxuICBjb252ZXJzaW9uUmVzdWx0OiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB8IG51bGw7XHJcbiAgcmVzdWx0SW1hZ2VzOiBIVE1MSW1hZ2VFbGVtZW50W107XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZTogT3V0cHV0U3RhdGUgPSB7XHJcbiAgY29udmVyc2lvblJlc3VsdDogbnVsbCxcclxuICByZXN1bHRJbWFnZXM6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3V0cHV0UmVkdWNlcihzdGF0ZTogT3V0cHV0U3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDT05WRVJTSU9OX0ZJTklTSEVEOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjb252ZXJzaW9uUmVzdWx0OiBhY3Rpb24uY29udmVyc2lvblJlc3VsdCxcclxuICAgICAgICByZXN1bHRJbWFnZXM6IGFjdGlvbi5yZXN1bHRJbWFnZXNcclxuICAgICAgfSk7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9yZWR1Y2Vycy9vdXRwdXRSZWR1Y2VyLnRzIiwiZXhwb3J0IGNsYXNzIEZpbGVUb0ltYWdlQ29udmVydGVyIHtcclxuICBwdWJsaWMgYXN5bmMgY29udmVydEZpbGUoZmlsZTogRmlsZSk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IGF3YWl0IHRoaXMuZ2V0RGF0YVVSTEZyb21GaWxlKGZpbGUpO1xyXG5cclxuICAgIHJldHVybiBpbWFnZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YVVSTEZyb21GaWxlKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvRmlsZVRvSW1hZ2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBIeXBlckNvbnRhaW5lciB9IGZyb20gJ3V0aWxzL0h5cGVyQ29udGFpbmVyJztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlLCBhcHBTdG9yZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgQ29sb3JTcGFjZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JTcGFjZVR5cGUnO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlIH0gZnJvbSAnYWN0aW9ucy9pbnB1dC9jaGFuZ2VTZWxlY3RlZENvbG9yU3BhY2UnO1xyXG5pbXBvcnQgeyBMYWJlbGVkU2VsZWN0IH0gZnJvbSAnY29tcG9uZW50cy9MYWJlbGVkU2VsZWN0JztcclxuaW1wb3J0IHsgTGFiZWxlZFZhbHVlIH0gZnJvbSAndXRpbHMvTGFiZWxlZFZhbHVlJztcclxuXHJcbmludGVyZmFjZSBDb250YWluZXJTdGF0ZSB7XHJcbiAgc2VsZWN0ZWRDb2xvclNwYWNlOiBDb2xvclNwYWNlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yU3BhY2VQaWNrZXIgZXh0ZW5kcyBIeXBlckNvbnRhaW5lcjxDb250YWluZXJTdGF0ZT4ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbGFiZWxlZENvbG9yU3BhY2VzOiBMYWJlbGVkVmFsdWU8Q29sb3JTcGFjZVR5cGU+W10gPSBbXHJcbiAgICB7IHZhbHVlOiBDb2xvclNwYWNlVHlwZS5ZQ2JDciwgbGFiZWw6ICdZQ2JDcicgfSxcclxuICAgIHsgdmFsdWU6IENvbG9yU3BhY2VUeXBlLkhTViwgbGFiZWw6ICdIU1YnIH0sXHJcbiAgICB7IHZhbHVlOiBDb2xvclNwYWNlVHlwZS5MYWIsIGxhYmVsOiAnTGFiJyB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMub25Db2xvclNwYWNlQ2hhbmdlID0gdGhpcy5vbkNvbG9yU3BhY2VDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtYXBBcHBTdGF0ZVRvQ29udGFpbmVyU3RhdGUoYXBwU3RhdGU6IEFwcFN0YXRlKTogQ29udGFpbmVyU3RhdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRDb2xvclNwYWNlOiBhcHBTdGF0ZS5pbnB1dC5zZWxlY3RlZENvbG9yU3BhY2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzZWxlY3RlZENvbG9yU3BhY2UgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHRtbGBcclxuICAgICAgPGRpdiBvbmNvbm5lY3RlZD0ke3RoaXN9IG9uZGlzY29ubmVjdGVkPSR7dGhpc30+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImNvbG9yLXNwYWNlLXNlbGVjdFwiPlRhcmdldCBjb2xvciBzcGFjZTogPC9sYWJlbD5cclxuICAgICAgICAke0xhYmVsZWRTZWxlY3QoXHJcbiAgICAgICAgICAnY29sb3Itc3BhY2Utc2VsZWN0JyxcclxuICAgICAgICAgIHRoaXMubGFiZWxlZENvbG9yU3BhY2VzLFxyXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvclNwYWNlLFxyXG4gICAgICAgICAgdGhpcy5vbkNvbG9yU3BhY2VDaGFuZ2VcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29sb3JTcGFjZUNoYW5nZShuZXdDb2xvclNwYWNlOiBDb2xvclNwYWNlVHlwZSkge1xyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlU2VsZWN0ZWRDb2xvclNwYWNlKG5ld0NvbG9yU3BhY2UpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29udGFpbmVycy9Db2xvclNwYWNlUGlja2VyLnRzIiwiaW1wb3J0IHsgd2lyZSB9IGZyb20gJ2h5cGVyaHRtbC9lc20nO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IEh5cGVyQ29udGFpbmVyIH0gZnJvbSAndXRpbHMvSHlwZXJDb250YWluZXInO1xyXG5cclxuaW1wb3J0ICcuL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gTm9JbWFnZU1lc3NhZ2UoKSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBQbGVhc2Ugc2VsZWN0IGFuIGltYWdlIGZpcnN0LmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gIHJldHVybiB3aXJlKClgXHJcbiAgICA8ZGl2IGNsYXNzPVwib3JpZ2luYWwtaW1hZ2Utd3JhcHBlclwiPlxyXG4gICAgICAke2ltYWdlfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lclN0YXRlIHtcclxuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudCB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcmlnaW5hbEltYWdlRGlzcGxheSBleHRlbmRzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlPiB7XHJcbiAgcHJvdGVjdGVkIG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZTogYXBwU3RhdGUuaW5wdXQub3JpZ2luYWxJbWFnZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuc3RhdGUuaW1hZ2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHRtbGBcclxuICAgICAgPGRpdiBvbmNvbm5lY3RlZD0ke3RoaXN9IG9uZGlzY29ubmVjdGVkPSR7dGhpc30+XHJcbiAgICAgICAgJHtpbWFnZSA/IERpc3BsYXlJbWFnZShpbWFnZSkgOiBOb0ltYWdlTWVzc2FnZSgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbnRhaW5lcnMvT3JpZ2luYWxJbWFnZURpc3BsYXkudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL09yaWdpbmFsSW1hZ2VEaXNwbGF5LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vT3JpZ2luYWxJbWFnZURpc3BsYXkuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIub3JpZ2luYWwtaW1hZ2Utd3JhcHBlciB7XFxuICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDsgfVxcbiAgLm9yaWdpbmFsLWltYWdlLXdyYXBwZXIgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvY29udGFpbmVycy9PcmlnaW5hbEltYWdlRGlzcGxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB3aXJlIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJ2FwcFN0b3JlJztcclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgSHlwZXJDb250YWluZXIgfSBmcm9tICd1dGlscy9IeXBlckNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgJy4vUmVzdWx0c0Rpc3BsYXkuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBOb1Jlc3VsdHMoKSB7XHJcbiAgcmV0dXJuIHdpcmUoKWBQbGVhc2UgY2xpY2sgPGVtPlJVTjwvZW0+YDtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVzdWx0cyhjb252ZXJzaW9uUmVzdWx0OiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCwgcmVzdWx0SW1hZ2VzOiBIVE1MSW1hZ2VFbGVtZW50W10pIHtcclxuICByZXR1cm4gd2lyZShjb252ZXJzaW9uUmVzdWx0KWBcclxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRzXCI+XHJcbiAgICAgICR7Y29udmVyc2lvblJlc3VsdC5jb21wb25lbnRzLm1hcCgocGFydGlhbFJlc3VsdCwgaW5kZXgpID0+XHJcbiAgICAgICAgUmVzdWx0KHBhcnRpYWxSZXN1bHQsIHJlc3VsdEltYWdlc1tpbmRleF0pXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXN1bHQocGFydGlhbFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgcmV0dXJuIHdpcmUocGFydGlhbFJlc3VsdClgXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdWx0XCI+XHJcbiAgICAgIDxkaXY+JHtwYXJ0aWFsUmVzdWx0LmxhYmVsfTwvZGl2PlxyXG4gICAgICAke2ltYWdlfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lclN0YXRlIHtcclxuICBjb252ZXJzaW9uUmVzdWx0OiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB8IG51bGw7XHJcbiAgcmVzdWx0SW1hZ2VzOiBIVE1MSW1hZ2VFbGVtZW50W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRzRGlzcGxheSBleHRlbmRzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlPiB7XHJcbiAgcHJvdGVjdGVkIG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb252ZXJzaW9uUmVzdWx0OiBhcHBTdGF0ZS5vdXRwdXQuY29udmVyc2lvblJlc3VsdCxcclxuICAgICAgcmVzdWx0SW1hZ2VzOiBhcHBTdGF0ZS5vdXRwdXQucmVzdWx0SW1hZ2VzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY29udmVyc2lvblJlc3VsdCwgcmVzdWx0SW1hZ2VzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0bWxgXHJcbiAgICAgIDxkaXYgb25jb25uZWN0ZWQ9JHt0aGlzfSBvbmRpc2Nvbm5lY3RlZD0ke3RoaXN9PlxyXG4gICAgICAgIDxoMj5SZXN1bHRzPC9oMj5cclxuICAgICAgICAke2NvbnZlcnNpb25SZXN1bHQgPyBSZXN1bHRzKGNvbnZlcnNpb25SZXN1bHQsIHJlc3VsdEltYWdlcykgOiBOb1Jlc3VsdHMoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUmVzdWx0c0Rpc3BsYXkuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9SZXN1bHRzRGlzcGxheS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1Jlc3VsdHNEaXNwbGF5LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRhaW5lcnMvUmVzdWx0c0Rpc3BsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlc3VsdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5yZXN1bHQge1xcbiAgbWFyZ2luOiAwLjVlbTsgfVxcbiAgLnJlc3VsdCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9jb250YWluZXJzL1Jlc3VsdHNEaXNwbGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEh5cGVyQ29udGFpbmVyIH0gZnJvbSAndXRpbHMvSHlwZXJDb250YWluZXInO1xyXG5cclxuaW1wb3J0IHsgY29udmVyc2lvbkZpbmlzaGVkIH0gZnJvbSAnYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25GaW5pc2hlZCc7XHJcbmltcG9ydCB7IGNvbnZlcnNpb25TdGFydGVkIH0gZnJvbSAnYWN0aW9ucy9nZW5lcmFsL2NvbnZlcnNpb25TdGFydGVkJztcclxuaW1wb3J0IHsgQXBwU3RhdGUsIGFwcFN0b3JlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb2xvclNwYWNlQ29udmVydGVyIH0gZnJvbSAnbW9kZWxzL2NvbnZlcnRlcnMvY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlcic7XHJcbmltcG9ydCB7IEltYWdlRGF0YUNvbnZlcnRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRGF0YUNvbnZlcnRlcic7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIGNvbnZlcnNpb25BdmFpbGFibGU6IGJvb2xlYW47XHJcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRDb252ZXJzaW9uQnV0dG9uIGV4dGVuZHMgSHlwZXJDb250YWluZXI8Q29udGFpbmVyU3RhdGU+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGFydENvbnZlcnNpb24gPSB0aGlzLnN0YXJ0Q29udmVyc2lvbi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb252ZXJzaW9uQXZhaWxhYmxlOiBhcHBTdGF0ZS5pbnB1dC5jb252ZXJzaW9uQXZhaWxhYmxlLFxyXG4gICAgICBpbWFnZTogYXBwU3RhdGUuaW5wdXQub3JpZ2luYWxJbWFnZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbnZlcnNpb25BdmFpbGFibGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHRtbGBcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uY2xpY2s9JHt0aGlzLnN0YXJ0Q29udmVyc2lvbn1cclxuICAgICAgICBvbmNvbm5lY3RlZD0ke3RoaXN9IG9uZGlzY29ubmVjdGVkPSR7dGhpc31cclxuICAgICAgICBkaXNhYmxlZD0keyFjb252ZXJzaW9uQXZhaWxhYmxlfT5SVU48L2J1dHRvbj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0Q29udmVyc2lvbigpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5pbWFnZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY29udmVyc2lvblN0YXJ0ZWQoKSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VEYXRhQ29udmVydGVyID0gbmV3IEltYWdlRGF0YUNvbnZlcnRlcigpO1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VEYXRhQ29udmVydGVyLmNvbnZlcnRJbWFnZVRvSW1hZ2VEYXRhKHRoaXMuc3RhdGUuaW1hZ2UpO1xyXG4gICAgY29uc3QgYXBwU3RhdGUgPSBhcHBTdG9yZS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yU3BhY2VDb252ZXJ0ZXIgPSBjcmVhdGVDb2xvclNwYWNlQ29udmVydGVyKFxyXG4gICAgICBhcHBTdGF0ZS5pbnB1dC5zZWxlY3RlZENvbG9yU3BhY2UsXHJcbiAgICAgIGFwcFN0YXRlLmlucHV0LmNvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29udmVyc2lvblJlc3VsdCA9IGNvbG9yU3BhY2VDb252ZXJ0ZXIuY29udmVydEZyb21JbWFnZURhdGEoaW1hZ2VEYXRhKTtcclxuICAgIGNvbnZlcnNpb25SZXN1bHQubm9ybWFsaXplQ29tcG9uZW50cygpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdEltYWdlcyA9IGNvbnZlcnNpb25SZXN1bHQuY29tcG9uZW50c1xyXG4gICAgICAubWFwKGNvbXBvbmVudCA9PiBjb21wb25lbnQuZ2V0SW1hZ2VEYXRhKCkpXHJcbiAgICAgIC5tYXAoaW1hZ2VEYXRhQ29udmVydGVyLmNvbnZlcnRJbWFnZURhdGFUb0ltYWdlKTtcclxuXHJcbiAgICBhcHBTdG9yZS5kaXNwYXRjaChjb252ZXJzaW9uRmluaXNoZWQoY29udmVyc2lvblJlc3VsdCwgcmVzdWx0SW1hZ2VzKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbnRhaW5lcnMvU3RhcnRDb252ZXJzaW9uQnV0dG9uLnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JTcGFjZVR5cGUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcbmltcG9ydCB7IEhTVkNvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9IU1ZDb2xvclNwYWNlQ29udmVydGVyJztcclxuaW1wb3J0IHsgTGFiQ29sb3JTcGFjZUNvbnZlcnRlciB9IGZyb20gJ21vZGVscy9jb252ZXJ0ZXJzL0xhYkNvbG9yU3BhY2VDb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBZQ2JDckNvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9ZQ2JDckNvbG9yU3BhY2VDb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBYWVpDb252ZXJ0ZXIgfSBmcm9tICdzZXJ2aWNlcy9YWVpDb252ZXJ0ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yU3BhY2VDb252ZXJ0ZXIoXHJcbiAgY29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGUsXHJcbiAgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzXHJcbikge1xyXG4gIHN3aXRjaCAoY29sb3JTcGFjZSkge1xyXG4gICAgY2FzZSBDb2xvclNwYWNlVHlwZS5IU1Y6XHJcbiAgICAgIHJldHVybiBuZXcgSFNWQ29sb3JTcGFjZUNvbnZlcnRlcigpO1xyXG5cclxuICAgIGNhc2UgQ29sb3JTcGFjZVR5cGUuWUNiQ3I6XHJcbiAgICAgIHJldHVybiBuZXcgWUNiQ3JDb2xvclNwYWNlQ29udmVydGVyKCk7XHJcblxyXG4gICAgY2FzZSBDb2xvclNwYWNlVHlwZS5MYWI6XHJcbiAgICAgIGNvbnN0IHh5ekNvbnZlcnRlciA9IG5ldyBYWVpDb252ZXJ0ZXIoY29udmVyc2lvblBhcmFtZXRlcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBMYWJDb2xvclNwYWNlQ29udmVydGVyKHh5ekNvbnZlcnRlcik7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbG9yIHNwYWNlIHR5cGUnKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvY3JlYXRlQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsImltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IEhTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9IU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9Db2xvclNwYWNlQ29udmVydGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIU1ZDb2xvclNwYWNlQ29udmVydGVyIGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnRlciB7XHJcbiAgcHVibGljIGNvbnZlcnRGcm9tSW1hZ2VEYXRhKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeyBkYXRhLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURhdGE7XHJcbiAgICBjb25zdCBsYXN0UGl4ZWxJbmRleCA9IHdpZHRoICogaGVpZ2h0ICogNCAtIDQ7XHJcbiAgICBjb25zdCBoVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3Qgc1ZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IHZWYWx1ZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSBsYXN0UGl4ZWxJbmRleDsgaW5kZXggKz0gNCkge1xyXG4gICAgICBjb25zdCB7IGgsIHMsIHYgfSA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKGRhdGFbaW5kZXhdLCBkYXRhW2luZGV4ICsgMV0sIGRhdGFbaW5kZXggKyAyXSk7XHJcbiAgICAgIGhWYWx1ZXMucHVzaChoKTtcclxuICAgICAgc1ZhbHVlcy5wdXNoKHMpO1xyXG4gICAgICB2VmFsdWVzLnB1c2godik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udmVyc2lvblJlc3VsdChoVmFsdWVzLCBzVmFsdWVzLCB2VmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbVJHQihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeyBoLCBzLCB2IH0gPSB0aGlzLmNvbnZlcnRTaW5nbGVQaXhlbChyLCBnLCBiKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb252ZXJzaW9uUmVzdWx0KFtoXSwgW3NdLCBbdl0sIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0U2luZ2xlUGl4ZWwocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IHsgaDogbnVtYmVyOyBzOiBudW1iZXI7IHY6IG51bWJlciB9IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgaDogMCxcclxuICAgICAgczogMCxcclxuICAgICAgdjogTWF0aC5tYXgociwgZywgYilcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XHJcblxyXG4gICAgaWYgKG1pbiA9PT0gcmVzdWx0LnYpIHtcclxuICAgICAgcmVzdWx0LmggPSAwO1xyXG4gICAgICByZXN1bHQucyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocmVzdWx0LnYgPT09IHIpIHtcclxuICAgICAgICByZXN1bHQuaCA9IDAgKyAoZyAtIGIpICogNjAgLyAocmVzdWx0LnYgLSBtaW4pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1pbiA9PT0gZykge1xyXG4gICAgICAgIHJlc3VsdC5oID0gMTIwICsgKGIgLSByKSAqIDYwIC8gKHJlc3VsdC52IC0gbWluKTtcclxuICAgICAgfSBlbHNlIGlmIChtaW4gPT09IGIpIHtcclxuICAgICAgICByZXN1bHQuaCA9IDI0MCArIChyIC0gZykgKiA2MCAvIChyZXN1bHQudiAtIG1pbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0LmggPCAwKSB7XHJcbiAgICAgIHJlc3VsdC5oICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0LnYgPT09IDApIHtcclxuICAgICAgcmVzdWx0LnMgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0LnMgPSAocmVzdWx0LnYgLSBtaW4pICogMTAwIC8gcmVzdWx0LnY7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0LnYgKj0gMTAwIC8gMjU1O1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoXHJcbiAgICBoVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHNWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgdlZhbHVlczogbnVtYmVyW10sXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxuICApOiBIU1ZDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCBoQ29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdIJywgaFZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgY29uc3Qgc0NvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnUycsIHNWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHZDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ1YnLCB2VmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEhTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0KGhDb21wb25lbnQsIHNDb21wb25lbnQsIHZDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVydGVycy9IU1ZDb2xvclNwYWNlQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgbXV0YXRlTWFwIH0gZnJvbSAndXRpbHMvbXV0YXRlTWFwJztcclxuXHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnLi9Db2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0IH0gZnJvbSAnLi9QYXJ0aWFsQ29udmVyc2lvblJlc3VsdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSFNWQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgaW1wbGVtZW50cyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGNvbXBvbmVudHM6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaENvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICBzQ29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCxcclxuICAgIHZDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbaENvbXBvbmVudFJlc3VsdCwgc0NvbXBvbmVudFJlc3VsdCwgdkNvbXBvbmVudFJlc3VsdF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9ybWFsaXplQ29tcG9uZW50cygpIHtcclxuICAgIGNvbnN0IFtoQ29tcG9uZW50LCBzQ29tcG9uZW50LCB2Q29tcG9uZW50XSA9IHRoaXMuY29tcG9uZW50cztcclxuXHJcbiAgICBtdXRhdGVNYXAoaENvbXBvbmVudC52YWx1ZXMsIGh1ZSA9PiBodWUgLyAzNjAgKiAyNTUpO1xyXG4gICAgbXV0YXRlTWFwKHNDb21wb25lbnQudmFsdWVzLCBzYXR1cmF0aW9uID0+IHNhdHVyYXRpb24gLyAxMDAgKiAyNTUpO1xyXG4gICAgbXV0YXRlTWFwKHZDb21wb25lbnQudmFsdWVzLCBzYXR1cmF0aW9uID0+IHNhdHVyYXRpb24gLyAxMDAgKiAyNTUpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0hTVkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0LnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgTGFiQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0xhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnRlciB9IGZyb20gJ21vZGVscy9jb252ZXJ0ZXJzL0NvbG9yU3BhY2VDb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBYWVpDb252ZXJ0ZXIgfSBmcm9tICdzZXJ2aWNlcy9YWVpDb252ZXJ0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYkNvbG9yU3BhY2VDb252ZXJ0ZXIgaW1wbGVtZW50cyBDb2xvclNwYWNlQ29udmVydGVyIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHh5ekNvbnZlcnRlcjogWFlaQ29udmVydGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgWFIgPSA5NC44MTtcclxuICBwcml2YXRlIHJlYWRvbmx5IFlSID0gMTAwO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgWlIgPSAxMDcuMztcclxuXHJcbiAgY29uc3RydWN0b3IoeHl6Q29udmVydGVyOiBYWVpDb252ZXJ0ZXIpIHtcclxuICAgIHRoaXMueHl6Q29udmVydGVyID0geHl6Q29udmVydGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnZlcnRGcm9tSW1hZ2VEYXRhKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeyBkYXRhLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURhdGE7XHJcbiAgICBjb25zdCBsYXN0UGl4ZWxJbmRleCA9IHdpZHRoICogaGVpZ2h0ICogNCAtIDQ7XHJcbiAgICBjb25zdCBsVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgYVZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IGJWYWx1ZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSBsYXN0UGl4ZWxJbmRleDsgaW5kZXggKz0gNCkge1xyXG4gICAgICBjb25zdCB7IGwsIGEsIGIgfSA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKGRhdGFbaW5kZXhdLCBkYXRhW2luZGV4ICsgMV0sIGRhdGFbaW5kZXggKyAyXSk7XHJcbiAgICAgIGxWYWx1ZXMucHVzaChsKTtcclxuICAgICAgYVZhbHVlcy5wdXNoKGEpO1xyXG4gICAgICBiVmFsdWVzLnB1c2goYik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udmVyc2lvblJlc3VsdChsVmFsdWVzLCBhVmFsdWVzLCBiVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbVJHQihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jb252ZXJ0U2luZ2xlUGl4ZWwociwgZywgYik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udmVyc2lvblJlc3VsdChbcmVzdWx0LmxdLCBbcmVzdWx0LmFdLCBbcmVzdWx0LmJdLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFNpbmdsZVBpeGVsKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiB7IGw6IG51bWJlcjsgYTogbnVtYmVyOyBiOiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCB7IFgsIFksIFogfSA9IHRoaXMueHl6Q29udmVydGVyLnJnYlRvWFlaKHIsIGcsIGIpO1xyXG5cclxuICAgIGNvbnN0IHhSYXRpbyA9IFggLyB0aGlzLlhSO1xyXG4gICAgY29uc3QgeVJhdGlvID0gWSAvIHRoaXMuWVI7XHJcbiAgICBjb25zdCB6UmF0aW8gPSBaIC8gdGhpcy5aUjtcclxuXHJcbiAgICBsZXQgbDogbnVtYmVyO1xyXG4gICAgaWYgKHlSYXRpbyA+IDAuMDA4ODU2KSB7XHJcbiAgICAgIGwgPSAxMTYgKiBNYXRoLmNicnQoeVJhdGlvKSAtIDE2O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbCA9IDkwMy4zICogeVJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGwsXHJcbiAgICAgIGE6IDUwMCAqIChNYXRoLmNicnQoeFJhdGlvKSAtIE1hdGguY2JydCh5UmF0aW8pKSxcclxuICAgICAgYjogMjAwICogKE1hdGguY2JydCh5UmF0aW8pIC0gTWF0aC5jYnJ0KHpSYXRpbykpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb252ZXJzaW9uUmVzdWx0KFxyXG4gICAgbFZhbHVlczogbnVtYmVyW10sXHJcbiAgICBhVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIGJWYWx1ZXM6IG51bWJlcltdLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgKTogTGFiQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgaENvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnTCcsIGxWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHNDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ2EnLCBhVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCB2Q29tcG9uZW50ID0gbmV3IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0KCdiJywgYlZhbHVlcywgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBMYWJDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdChoQ29tcG9uZW50LCBzQ29tcG9uZW50LCB2Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnRlcnMvTGFiQ29sb3JTcGFjZUNvbnZlcnRlci50cyIsImltcG9ydCB7IG11dGF0ZU1hcCB9IGZyb20gJ3V0aWxzL211dGF0ZU1hcCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0IGltcGxlbWVudHMgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBjb21wb25lbnRzOiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGxDb21wb25lbnRSZXN1bHQ6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0LFxyXG4gICAgYUNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICBiQ29tcG9uZW50UmVzdWx0OiBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdFxyXG4gICkge1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gW2xDb21wb25lbnRSZXN1bHQsIGFDb21wb25lbnRSZXN1bHQsIGJDb21wb25lbnRSZXN1bHRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5vcm1hbGl6ZUNvbXBvbmVudHMoKSB7XHJcbiAgICBjb25zdCBbbENvbXBvbmVudCwgYUNvbXBvbmVudCwgYkNvbXBvbmVudF0gPSB0aGlzLmNvbXBvbmVudHM7XHJcblxyXG4gICAgbXV0YXRlTWFwKGxDb21wb25lbnQudmFsdWVzLCBsID0+IGwgLyAxMDAgKiAyNTUpO1xyXG4gICAgbXV0YXRlTWFwKGFDb21wb25lbnQudmFsdWVzLCBhID0+IGEgKyAxMjgpO1xyXG4gICAgbXV0YXRlTWFwKGJDb21wb25lbnQudmFsdWVzLCBiID0+IGIgKyAxMjgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0xhYkNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0LnRzIiwiaW1wb3J0IHsgQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL0NvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgUGFydGlhbENvbnZlcnNpb25SZXN1bHQgfSBmcm9tICdtb2RlbHMvY29udmVyc2lvbi1yZXN1bHRzL1BhcnRpYWxDb252ZXJzaW9uUmVzdWx0JztcclxuaW1wb3J0IHsgWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJ21vZGVscy9jb252ZXJzaW9uLXJlc3VsdHMvWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VDb252ZXJ0ZXIgfSBmcm9tICdtb2RlbHMvY29udmVydGVycy9Db2xvclNwYWNlQ29udmVydGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBZQ2JDckNvbG9yU3BhY2VDb252ZXJ0ZXIgaW1wbGVtZW50cyBDb2xvclNwYWNlQ29udmVydGVyIHtcclxuICBwdWJsaWMgY29udmVydEZyb21JbWFnZURhdGEoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGF0YTtcclxuICAgIGNvbnN0IGxhc3RQaXhlbEluZGV4ID0gd2lkdGggKiBoZWlnaHQgKiA0IC0gNDtcclxuICAgIGNvbnN0IHlWYWx1ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBjYlZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IGNyVmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gbGFzdFBpeGVsSW5kZXg7IGluZGV4ICs9IDQpIHtcclxuICAgICAgY29uc3QgeyB5LCBjYiwgY3IgfSA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKGRhdGFbaW5kZXhdLCBkYXRhW2luZGV4ICsgMV0sIGRhdGFbaW5kZXggKyAyXSk7XHJcbiAgICAgIHlWYWx1ZXMucHVzaCh5KTtcclxuICAgICAgY2JWYWx1ZXMucHVzaChjYik7XHJcbiAgICAgIGNyVmFsdWVzLnB1c2goY3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoeVZhbHVlcywgY2JWYWx1ZXMsIGNyVmFsdWVzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb252ZXJ0RnJvbVJHQihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeyB5LCBjYiwgY3IgfSA9IHRoaXMuY29udmVydFNpbmdsZVBpeGVsKHIsIGcsIGIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoW3ldLCBbY2JdLCBbY3JdLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFNpbmdsZVBpeGVsKFxyXG4gICAgcjogbnVtYmVyLFxyXG4gICAgZzogbnVtYmVyLFxyXG4gICAgYjogbnVtYmVyXHJcbiAgKTogeyB5OiBudW1iZXI7IGNiOiBudW1iZXI7IGNyOiBudW1iZXIgfSB7XHJcbiAgICBjb25zdCB5ID0gMC4yOTkgKiByICsgMC41ODcgKiBnICsgMC4xMTQgKiBiO1xyXG4gICAgY29uc3QgY2IgPSAoYiAtIHkpIC8gMS43NzIgKyAxMjg7XHJcbiAgICBjb25zdCBjciA9IChyIC0geSkgLyAxLjQwMiArIDEyODtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB5LFxyXG4gICAgICBjYixcclxuICAgICAgY3JcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbnZlcnNpb25SZXN1bHQoXHJcbiAgICB5VmFsdWVzOiBudW1iZXJbXSxcclxuICAgIGNiVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIGNyVmFsdWVzOiBudW1iZXJbXSxcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gICk6IFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQge1xyXG4gICAgY29uc3QgeUNvbXBvbmVudCA9IG5ldyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCgnWScsIHlWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgY2JDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ0NiJywgY2JWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgY3JDb21wb25lbnQgPSBuZXcgUGFydGlhbENvbnZlcnNpb25SZXN1bHQoJ0NyJywgY3JWYWx1ZXMsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgWUNiQ3JDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCh5Q29tcG9uZW50LCBjYkNvbXBvbmVudCwgY3JDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvY29udmVydGVycy9ZQ2JDckNvbG9yU3BhY2VDb252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsQ29udmVyc2lvblJlc3VsdCB9IGZyb20gJy4vUGFydGlhbENvbnZlcnNpb25SZXN1bHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFlDYkNyQ29sb3JTcGFjZUNvbnZlcnNpb25SZXN1bHQgaW1wbGVtZW50cyBDb2xvclNwYWNlQ29udmVyc2lvblJlc3VsdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGNvbXBvbmVudHM6IFBhcnRpYWxDb252ZXJzaW9uUmVzdWx0W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgeUNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICBjYkNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHQsXHJcbiAgICBjckNvbXBvbmVudFJlc3VsdDogUGFydGlhbENvbnZlcnNpb25SZXN1bHRcclxuICApIHtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFt5Q29tcG9uZW50UmVzdWx0LCBjYkNvbXBvbmVudFJlc3VsdCwgY3JDb21wb25lbnRSZXN1bHRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5vcm1hbGl6ZUNvbXBvbmVudHMoKSB7XHJcbiAgICAvLyBBbHJlYWR5IG5vcm1hbGl6ZWRcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL2NvbnZlcnNpb24tcmVzdWx0cy9ZQ2JDckNvbG9yU3BhY2VDb252ZXJzaW9uUmVzdWx0LnRzIiwiaW1wb3J0IHsgTWF0cml4LCBzb2x2ZSB9IGZyb20gJ21sLW1hdHJpeCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclBvaW50IH0gZnJvbSAnbW9kZWxzL0NvbG9yUG9pbnQnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uUGFyYW1ldGVycyB9IGZyb20gJ21vZGVscy9Db252ZXJzaW9uUGFyYW1ldGVycyc7XHJcblxyXG5pbnRlcmZhY2UgWFlaIHtcclxuICBYOiBudW1iZXI7XHJcbiAgWTogbnVtYmVyO1xyXG4gIFo6IG51bWJlcjtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgdmFyaWFibGUtbmFtZVxyXG5leHBvcnQgY2xhc3MgWFlaQ29udmVydGVyIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlZFBvaW50OiBDb2xvclBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZ3JlZW5Qb2ludDogQ29sb3JQb2ludDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGJsdWVQb2ludDogQ29sb3JQb2ludDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHdoaXRlUG9pbnQ6IENvbG9yUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBnYW1tYTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHJnYk1hdHJpeDogTWF0cml4O1xyXG4gIHByaXZhdGUgU1ZlY3RvcjogTWF0cml4O1xyXG4gIHByaXZhdGUgcmdiVG9YWVpNYXRyaXg6IE1hdHJpeDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb252ZXJzaW9uUGFyYW1ldGVyczogQ29udmVyc2lvblBhcmFtZXRlcnNcclxuICApIHtcclxuICAgIHRoaXMucmVkUG9pbnQgPSBjb252ZXJzaW9uUGFyYW1ldGVycy5yZWRQb2ludDtcclxuICAgIHRoaXMuZ3JlZW5Qb2ludCA9IGNvbnZlcnNpb25QYXJhbWV0ZXJzLmdyZWVuUG9pbnQ7XHJcbiAgICB0aGlzLmJsdWVQb2ludCA9IGNvbnZlcnNpb25QYXJhbWV0ZXJzLmJsdWVQb2ludDtcclxuICAgIHRoaXMud2hpdGVQb2ludCA9IGNvbnZlcnNpb25QYXJhbWV0ZXJzLndoaXRlUG9pbnQ7XHJcbiAgICB0aGlzLmdhbW1hID0gY29udmVyc2lvblBhcmFtZXRlcnMuZ2FtbWE7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmdiVG9YWVoocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IFhZWiB7XHJcbiAgICBjb25zdCByZ2JWZWN0b3IgPSBNYXRyaXguY29sdW1uVmVjdG9yKFtcclxuICAgICAgdGhpcy5hcHBseUdhbW1hQ29ycmVjdGlvbihyIC8gMjU1KSxcclxuICAgICAgdGhpcy5hcHBseUdhbW1hQ29ycmVjdGlvbihnIC8gMjU1KSxcclxuICAgICAgdGhpcy5hcHBseUdhbW1hQ29ycmVjdGlvbihiIC8gMjU1KVxyXG4gICAgXSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJnYlRvWFlaTWF0cml4Lm1tdWwocmdiVmVjdG9yKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBYOiByZXN1bHQuZ2V0KDAsIDApICogMjU1LFxyXG4gICAgICBZOiByZXN1bHQuZ2V0KDEsIDApICogMjU1LFxyXG4gICAgICBaOiByZXN1bHQuZ2V0KDIsIDApICogMjU1XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplKCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplUkdCTWF0cml4KCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIFh3LCBZdywgWndcclxuICAgIGNvbnN0IHp3ID0gMSAtIHRoaXMud2hpdGVQb2ludC54IC0gdGhpcy53aGl0ZVBvaW50Lnk7XHJcbiAgICBjb25zdCBZdyA9IDE7XHJcbiAgICBjb25zdCBYdyA9IHRoaXMud2hpdGVQb2ludC54IC8gWXcgLyB0aGlzLndoaXRlUG9pbnQueTtcclxuICAgIGNvbnN0IFp3ID0gencgLyB0aGlzLndoaXRlUG9pbnQueTtcclxuICAgIGNvbnN0IFh3WXdadyA9IE1hdHJpeC5jb2x1bW5WZWN0b3IoW1h3LCBZdywgWnddKTtcclxuXHJcbiAgICB0aGlzLlNWZWN0b3IgPSBzb2x2ZSh0aGlzLnJnYk1hdHJpeCwgWHdZd1p3KTtcclxuXHJcbiAgICB0aGlzLnJnYlRvWFlaTWF0cml4ID0gdGhpcy5yZ2JNYXRyaXgubXVsUm93VmVjdG9yKHRoaXMuU1ZlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVSR0JNYXRyaXgoKSB7XHJcbiAgICBjb25zdCByZWRQb2ludFogPSAxIC0gdGhpcy5yZWRQb2ludC54IC0gdGhpcy5yZWRQb2ludC55O1xyXG4gICAgY29uc3QgZ3JlZW5Qb2ludFogPSAxIC0gdGhpcy5ncmVlblBvaW50LnggLSB0aGlzLmdyZWVuUG9pbnQueTtcclxuICAgIGNvbnN0IGJsdWVQb2ludFogPSAxIC0gdGhpcy5ibHVlUG9pbnQueCAtIHRoaXMuYmx1ZVBvaW50Lnk7XHJcblxyXG4gICAgdGhpcy5yZ2JNYXRyaXggPSBuZXcgTWF0cml4KFtcclxuICAgICAgW3RoaXMucmVkUG9pbnQueCwgdGhpcy5ncmVlblBvaW50LngsIHRoaXMuZ3JlZW5Qb2ludC54XSxcclxuICAgICAgW3RoaXMucmVkUG9pbnQueSwgdGhpcy5ncmVlblBvaW50LnksIHRoaXMuYmx1ZVBvaW50LnldLFxyXG4gICAgICBbcmVkUG9pbnRaLCBncmVlblBvaW50WiwgYmx1ZVBvaW50Wl1cclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUdhbW1hQ29ycmVjdGlvbih2OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucG93KHYsIHRoaXMuZ2FtbWEpO1xyXG4gIH1cclxufVxyXG4vLyB0c2xpbnQ6ZW5hYmxlIHZhcmlhYmxlLW5hbWVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvWFlaQ29udmVydGVyLnRzIiwiaWYgKCFTeW1ib2wuc3BlY2llcykge1xuICAgIFN5bWJvbC5zcGVjaWVzID0gU3ltYm9sLmZvcignQEBzcGVjaWVzJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3N5bWJvbC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbWF4IGZyb20gJ21sLWFycmF5LW1heCc7XG5pbXBvcnQgbWluIGZyb20gJ21sLWFycmF5LW1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2NhbGUoaW5wdXQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5wdXQgbXVzdCBiZSBhbiBhcnJheScpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAob3B0aW9ucy5vdXRwdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5vdXRwdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvdXRwdXQgb3B0aW9uIG11c3QgYmUgYW4gYXJyYXkgaWYgc3BlY2lmaWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gbmV3IEFycmF5KGlucHV0Lmxlbmd0aCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudE1pbiA9IG1pbihpbnB1dCk7XG4gICAgY29uc3QgY3VycmVudE1heCA9IG1heChpbnB1dCk7XG5cbiAgICBpZiAoY3VycmVudE1pbiA9PT0gY3VycmVudE1heCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluaW11bSBhbmQgbWF4aW11bSBpbnB1dCB2YWx1ZXMgYXJlIGVxdWFsLiBDYW5ub3QgcmVzY2FsZSBhIGNvbnN0YW50IGFycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgICBtaW46IG1pblZhbHVlID0gb3B0aW9ucy5hdXRvTWluTWF4ID8gY3VycmVudE1pbiA6IDAsXG4gICAgICAgIG1heDogbWF4VmFsdWUgPSBvcHRpb25zLmF1dG9NaW5NYXggPyBjdXJyZW50TWF4IDogMVxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKG1pblZhbHVlID49IG1heFZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW4gb3B0aW9uIG11c3QgYmUgc21hbGxlciB0aGFuIG1heCBvcHRpb24nKTtcbiAgICB9XG5cbiAgICBjb25zdCBmYWN0b3IgPSAobWF4VmFsdWUgLSBtaW5WYWx1ZSkgLyAoY3VycmVudE1heCAtIGN1cnJlbnRNaW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0cHV0W2ldID0gKGlucHV0W2ldIC0gY3VycmVudE1pbikgKiBmYWN0b3IgKyBtaW5WYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktcmVzY2FsZS9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29tcHV0ZXMgdGhlIG1heGltdW0gb2YgdGhlIGdpdmVuIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXgoaW5wdXQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5wdXQgbXVzdCBiZSBhbiBhcnJheScpO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnB1dCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICAgIH1cblxuICAgIHZhciBtYXggPSBpbnB1dFswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbnB1dFtpXSA+IG1heCkgbWF4ID0gaW5wdXRbaV07XG4gICAgfVxuICAgIHJldHVybiBtYXg7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1hcnJheS1tYXgvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbXB1dGVzIHRoZSBtaW5pbXVtIG9mIHRoZSBnaXZlbiB2YWx1ZXNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW5wdXRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWluKGlucHV0KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lucHV0IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5wdXQgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgICB9XG5cbiAgICB2YXIgbWluID0gaW5wdXRbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5wdXRbaV0gPCBtaW4pIG1pbiA9IGlucHV0W2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWluO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktbWluL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFRyYW5zcG9zZVZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gICAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgICAgIHN1cGVyKG1hdHJpeCwgbWF0cml4LmNvbHVtbnMsIG1hdHJpeC5yb3dzKTtcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hdHJpeC5zZXQoY29sdW1uSW5kZXgsIHJvd0luZGV4LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChjb2x1bW5JbmRleCwgcm93SW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvdHJhbnNwb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4Um93VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvdykge1xuICAgICAgICBzdXBlcihtYXRyaXgsIDEsIG1hdHJpeC5jb2x1bW5zKTtcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHRoaXMucm93LCBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5yb3csIGNvbHVtbkluZGV4KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3Jvdy5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtjaGVja1JhbmdlfSBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4U3ViVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICAgICAgY2hlY2tSYW5nZShtYXRyaXgsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pO1xuICAgICAgICBzdXBlcihtYXRyaXgsIGVuZFJvdyAtIHN0YXJ0Um93ICsgMSwgZW5kQ29sdW1uIC0gc3RhcnRDb2x1bW4gKyAxKTtcbiAgICAgICAgdGhpcy5zdGFydFJvdyA9IHN0YXJ0Um93O1xuICAgICAgICB0aGlzLnN0YXJ0Q29sdW1uID0gc3RhcnRDb2x1bW47XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHRoaXMuc3RhcnRSb3cgKyByb3dJbmRleCwgdGhpcy5zdGFydENvbHVtbiArIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnN0YXJ0Um93ICsgcm93SW5kZXgsIHRoaXMuc3RhcnRDb2x1bW4gKyBjb2x1bW5JbmRleCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9zdWIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Y2hlY2tJbmRpY2VzfSBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4U2VsZWN0aW9uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgICAgICAgdmFyIGluZGljZXMgPSBjaGVja0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKTtcbiAgICAgICAgc3VwZXIobWF0cml4LCBpbmRpY2VzLnJvdy5sZW5ndGgsIGluZGljZXMuY29sdW1uLmxlbmd0aCk7XG4gICAgICAgIHRoaXMucm93SW5kaWNlcyA9IGluZGljZXMucm93O1xuICAgICAgICB0aGlzLmNvbHVtbkluZGljZXMgPSBpbmRpY2VzLmNvbHVtbjtcbiAgICB9XG5cbiAgICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hdHJpeC5zZXQodGhpcy5yb3dJbmRpY2VzW3Jvd0luZGV4XSwgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5yb3dJbmRpY2VzW3Jvd0luZGV4XSwgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9zZWxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Y2hlY2tSb3dJbmRpY2VzfSBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4Um93U2VsZWN0aW9uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvd0luZGljZXMpIHtcbiAgICAgICAgcm93SW5kaWNlcyA9IGNoZWNrUm93SW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMpO1xuICAgICAgICBzdXBlcihtYXRyaXgsIHJvd0luZGljZXMubGVuZ3RoLCBtYXRyaXguY29sdW1ucyk7XG4gICAgICAgIHRoaXMucm93SW5kaWNlcyA9IHJvd0luZGljZXM7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvd0luZGljZXNbcm93SW5kZXhdLCBjb2x1bW5JbmRleCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9yb3dTZWxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Y2hlY2tDb2x1bW5JbmRpY2VzfSBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4Q29sdW1uU2VsZWN0aW9uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIGNvbHVtbkluZGljZXMpIHtcbiAgICAgICAgY29sdW1uSW5kaWNlcyA9IGNoZWNrQ29sdW1uSW5kaWNlcyhtYXRyaXgsIGNvbHVtbkluZGljZXMpO1xuICAgICAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5yb3dzLCBjb2x1bW5JbmRpY2VzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuY29sdW1uSW5kaWNlcyA9IGNvbHVtbkluZGljZXM7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHJvd0luZGV4LCB0aGlzLmNvbHVtbkluZGljZXNbY29sdW1uSW5kZXhdLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChyb3dJbmRleCwgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9jb2x1bW5TZWxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4Q29sdW1uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIGNvbHVtbikge1xuICAgICAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5yb3dzLCAxKTtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHJvd0luZGV4LCB0aGlzLmNvbHVtbiwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQocm93SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChyb3dJbmRleCwgdGhpcy5jb2x1bW4pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeEZsaXBSb3dWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgICAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5yb3dzLCBtYXRyaXguY29sdW1ucyk7XG4gICAgfVxuXG4gICAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguc2V0KHRoaXMucm93cyAtIHJvd0luZGV4IC0gMSwgY29sdW1uSW5kZXgsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93cyAtIHJvd0luZGV4IC0gMSwgY29sdW1uSW5kZXgpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvZmxpcFJvdy5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhGbGlwQ29sdW1uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICAgICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgbWF0cml4LmNvbHVtbnMpO1xuICAgIH1cblxuICAgIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW5zIC0gY29sdW1uSW5kZXggLSAxLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChyb3dJbmRleCwgdGhpcy5jb2x1bW5zIC0gY29sdW1uSW5kZXggLSAxKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBDb2x1bW4uanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgV3JhcHBlck1hdHJpeDFEIGZyb20gJy4vV3JhcHBlck1hdHJpeDFEJztcbmltcG9ydCBXcmFwcGVyTWF0cml4MkQgZnJvbSAnLi9XcmFwcGVyTWF0cml4MkQnO1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj58QXJyYXk8bnVtYmVyPn0gYXJyYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5yb3dzID0gMV1cbiAqIEByZXR1cm4ge1dyYXBwZXJNYXRyaXgxRHxXcmFwcGVyTWF0cml4MkR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwKGFycmF5LCBvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIGlmIChhcnJheVswXSAmJiBBcnJheS5pc0FycmF5KGFycmF5WzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXcmFwcGVyTWF0cml4MkQoYXJyYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXcmFwcGVyTWF0cml4MUQoYXJyYXksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgYXJndW1lbnQgaXMgbm90IGFuIGFycmF5Jyk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy93cmFwL3dyYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeCwgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IEx1RGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL2x1JztcbmltcG9ydCBRckRlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9xcic7XG5pbXBvcnQgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9zdmQnO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBpbnZlcnNlIG9mIGEgTWF0cml4XG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VTVkQ9ZmFsc2VdXG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG1hdHJpeCwgdXNlU1ZEID0gZmFsc2UpIHtcbiAgICBtYXRyaXggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodXNlU1ZEKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24obWF0cml4KS5pbnZlcnNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNvbHZlKG1hdHJpeCwgTWF0cml4LmV5ZShtYXRyaXgucm93cykpO1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtNYXRyaXh9IGxlZnRIYW5kU2lkZVxuICogQHBhcmFtIHtNYXRyaXh9IHJpZ2h0SGFuZFNpZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZVNWRCA9IGZhbHNlXVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc29sdmUobGVmdEhhbmRTaWRlLCByaWdodEhhbmRTaWRlLCB1c2VTVkQgPSBmYWxzZSkge1xuICAgIGxlZnRIYW5kU2lkZSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChsZWZ0SGFuZFNpZGUpO1xuICAgIHJpZ2h0SGFuZFNpZGUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgocmlnaHRIYW5kU2lkZSk7XG4gICAgaWYgKHVzZVNWRCkge1xuICAgICAgICByZXR1cm4gbmV3IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKGxlZnRIYW5kU2lkZSkuc29sdmUocmlnaHRIYW5kU2lkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlZnRIYW5kU2lkZS5pc1NxdWFyZSgpID8gbmV3IEx1RGVjb21wb3NpdGlvbihsZWZ0SGFuZFNpZGUpLnNvbHZlKHJpZ2h0SGFuZFNpZGUpIDogbmV3IFFyRGVjb21wb3NpdGlvbihsZWZ0SGFuZFNpZGUpLnNvbHZlKHJpZ2h0SGFuZFNpZGUpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGVjb21wb3NpdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeCwgV3JhcHBlck1hdHJpeDJEfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge2h5cG90ZW51c2UsIGdldEZpbGxlZDJEQXJyYXl9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGNsYXNzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbHV0enJvZWRlci9NYXBhY2svYmxvYi9tYXN0ZXIvU291cmNlL0VpZ2VudmFsdWVEZWNvbXBvc2l0aW9uLmNzXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmFzc3VtZVN5bW1ldHJpYz1mYWxzZV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWlnZW52YWx1ZURlY29tcG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFzc3VtZVN5bW1ldHJpYyA9IGZhbHNlXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIG1hdHJpeCA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgICAgICBpZiAoIW1hdHJpeC5pc1NxdWFyZSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3QgYSBzcXVhcmUgbWF0cml4Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbiA9IG1hdHJpeC5jb2x1bW5zO1xuICAgICAgICB2YXIgViA9IGdldEZpbGxlZDJEQXJyYXkobiwgbiwgMCk7XG4gICAgICAgIHZhciBkID0gbmV3IEFycmF5KG4pO1xuICAgICAgICB2YXIgZSA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgdmFyIHZhbHVlID0gbWF0cml4O1xuICAgICAgICB2YXIgaSwgajtcblxuICAgICAgICB2YXIgaXNTeW1tZXRyaWMgPSBmYWxzZTtcbiAgICAgICAgaWYgKGFzc3VtZVN5bW1ldHJpYykge1xuICAgICAgICAgICAgaXNTeW1tZXRyaWMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNTeW1tZXRyaWMgPSBtYXRyaXguaXNTeW1tZXRyaWMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1N5bW1ldHJpYykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltpXVtqXSA9IHZhbHVlLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmVkMihuLCBlLCBkLCBWKTtcbiAgICAgICAgICAgIHRxbDIobiwgZSwgZCwgVik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgSCA9IGdldEZpbGxlZDJEQXJyYXkobiwgbiwgMCk7XG4gICAgICAgICAgICB2YXIgb3J0ID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtqXSA9IHZhbHVlLmdldChpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcnRoZXMobiwgSCwgb3J0LCBWKTtcbiAgICAgICAgICAgIGhxcjIobiwgZSwgZCwgViwgSCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm4gPSBuO1xuICAgICAgICB0aGlzLmUgPSBlO1xuICAgICAgICB0aGlzLmQgPSBkO1xuICAgICAgICB0aGlzLlYgPSBWO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXQgcmVhbEVpZ2VudmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXQgaW1hZ2luYXJ5RWlnZW52YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXRyaXh9XG4gICAgICovXG4gICAgZ2V0IGVpZ2VudmVjdG9yTWF0cml4KCkge1xuICAgICAgICBpZiAoIU1hdHJpeC5pc01hdHJpeCh0aGlzLlYpKSB7XG4gICAgICAgICAgICB0aGlzLlYgPSBuZXcgTWF0cml4KHRoaXMuVik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgZGlhZ29uYWxNYXRyaXgoKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5uO1xuICAgICAgICB2YXIgZSA9IHRoaXMuZTtcbiAgICAgICAgdmFyIGQgPSB0aGlzLmQ7XG4gICAgICAgIHZhciBYID0gbmV3IE1hdHJpeChuLCBuKTtcbiAgICAgICAgdmFyIGksIGo7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBYW2ldW2pdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFhbaV1baV0gPSBkW2ldO1xuICAgICAgICAgICAgaWYgKGVbaV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgWFtpXVtpICsgMV0gPSBlW2ldO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlW2ldIDwgMCkge1xuICAgICAgICAgICAgICAgIFhbaV1baSAtIDFdID0gZVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyZWQyKG4sIGUsIGQsIFYpIHtcbiAgICB2YXIgZiwgZywgaCwgaSwgaiwgayxcbiAgICAgICAgaGgsIHNjYWxlO1xuXG4gICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICBkW2pdID0gVltuIC0gMV1bal07XG4gICAgfVxuXG4gICAgZm9yIChpID0gbiAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc2NhbGUgPSAwO1xuICAgICAgICBoID0gMDtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGk7IGsrKykge1xuICAgICAgICAgICAgc2NhbGUgPSBzY2FsZSArIE1hdGguYWJzKGRba10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjYWxlID09PSAwKSB7XG4gICAgICAgICAgICBlW2ldID0gZFtpIC0gMV07XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZFtqXSA9IFZbaSAtIDFdW2pdO1xuICAgICAgICAgICAgICAgIFZbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIFZbal1baV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGk7IGsrKykge1xuICAgICAgICAgICAgICAgIGRba10gLz0gc2NhbGU7XG4gICAgICAgICAgICAgICAgaCArPSBkW2tdICogZFtrXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZiA9IGRbaSAtIDFdO1xuICAgICAgICAgICAgZyA9IE1hdGguc3FydChoKTtcbiAgICAgICAgICAgIGlmIChmID4gMCkge1xuICAgICAgICAgICAgICAgIGcgPSAtZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZVtpXSA9IHNjYWxlICogZztcbiAgICAgICAgICAgIGggPSBoIC0gZiAqIGc7XG4gICAgICAgICAgICBkW2kgLSAxXSA9IGYgLSBnO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGVbal0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgZiA9IGRbal07XG4gICAgICAgICAgICAgICAgVltqXVtpXSA9IGY7XG4gICAgICAgICAgICAgICAgZyA9IGVbal0gKyBWW2pdW2pdICogZjtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBqICsgMTsgayA8PSBpIC0gMTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGcgKz0gVltrXVtqXSAqIGRba107XG4gICAgICAgICAgICAgICAgICAgIGVba10gKz0gVltrXVtqXSAqIGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVbal0gPSBnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmID0gMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBlW2pdIC89IGg7XG4gICAgICAgICAgICAgICAgZiArPSBlW2pdICogZFtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGggPSBmIC8gKGggKyBoKTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBlW2pdIC09IGhoICogZFtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgIGYgPSBkW2pdO1xuICAgICAgICAgICAgICAgIGcgPSBlW2pdO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IGo7IGsgPD0gaSAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBWW2tdW2pdIC09IChmICogZVtrXSArIGcgKiBkW2tdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZFtqXSA9IFZbaSAtIDFdW2pdO1xuICAgICAgICAgICAgICAgIFZbaV1bal0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRbaV0gPSBoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgIFZbbiAtIDFdW2ldID0gVltpXVtpXTtcbiAgICAgICAgVltpXVtpXSA9IDE7XG4gICAgICAgIGggPSBkW2kgKyAxXTtcbiAgICAgICAgaWYgKGggIT09IDApIHtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPD0gaTsgaysrKSB7XG4gICAgICAgICAgICAgICAgZFtrXSA9IFZba11baSArIDFdIC8gaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8PSBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBnID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBnICs9IFZba11baSArIDFdICogVltrXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrXVtqXSAtPSBnICogZFtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgICAgICAgVltrXVtpICsgMV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICBkW2pdID0gVltuIC0gMV1bal07XG4gICAgICAgIFZbbiAtIDFdW2pdID0gMDtcbiAgICB9XG5cbiAgICBWW24gLSAxXVtuIC0gMV0gPSAxO1xuICAgIGVbMF0gPSAwO1xufVxuXG5mdW5jdGlvbiB0cWwyKG4sIGUsIGQsIFYpIHtcblxuICAgIHZhciBnLCBoLCBpLCBqLCBrLCBsLCBtLCBwLCByLFxuICAgICAgICBkbDEsIGMsIGMyLCBjMywgZWwxLCBzLCBzMixcbiAgICAgICAgaXRlcjtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgZVtpIC0gMV0gPSBlW2ldO1xuICAgIH1cblxuICAgIGVbbiAtIDFdID0gMDtcblxuICAgIHZhciBmID0gMDtcbiAgICB2YXIgdHN0MSA9IDA7XG4gICAgdmFyIGVwcyA9IE51bWJlci5FUFNJTE9OO1xuXG4gICAgZm9yIChsID0gMDsgbCA8IG47IGwrKykge1xuICAgICAgICB0c3QxID0gTWF0aC5tYXgodHN0MSwgTWF0aC5hYnMoZFtsXSkgKyBNYXRoLmFicyhlW2xdKSk7XG4gICAgICAgIG0gPSBsO1xuICAgICAgICB3aGlsZSAobSA8IG4pIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlW21dKSA8PSBlcHMgKiB0c3QxKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobSA+IGwpIHtcbiAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGl0ZXIgPSBpdGVyICsgMTtcblxuICAgICAgICAgICAgICAgIGcgPSBkW2xdO1xuICAgICAgICAgICAgICAgIHAgPSAoZFtsICsgMV0gLSBnKSAvICgyICogZVtsXSk7XG4gICAgICAgICAgICAgICAgciA9IGh5cG90ZW51c2UocCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSAtcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkW2xdID0gZVtsXSAvIChwICsgcik7XG4gICAgICAgICAgICAgICAgZFtsICsgMV0gPSBlW2xdICogKHAgKyByKTtcbiAgICAgICAgICAgICAgICBkbDEgPSBkW2wgKyAxXTtcbiAgICAgICAgICAgICAgICBoID0gZyAtIGRbbF07XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZFtpXSAtPSBoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGYgPSBmICsgaDtcblxuICAgICAgICAgICAgICAgIHAgPSBkW21dO1xuICAgICAgICAgICAgICAgIGMgPSAxO1xuICAgICAgICAgICAgICAgIGMyID0gYztcbiAgICAgICAgICAgICAgICBjMyA9IGM7XG4gICAgICAgICAgICAgICAgZWwxID0gZVtsICsgMV07XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICAgICAgczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IG0gLSAxOyBpID49IGw7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjMyA9IGMyO1xuICAgICAgICAgICAgICAgICAgICBjMiA9IGM7XG4gICAgICAgICAgICAgICAgICAgIHMyID0gcztcbiAgICAgICAgICAgICAgICAgICAgZyA9IGMgKiBlW2ldO1xuICAgICAgICAgICAgICAgICAgICBoID0gYyAqIHA7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBoeXBvdGVudXNlKHAsIGVbaV0pO1xuICAgICAgICAgICAgICAgICAgICBlW2kgKyAxXSA9IHMgKiByO1xuICAgICAgICAgICAgICAgICAgICBzID0gZVtpXSAvIHI7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBwIC8gcjtcbiAgICAgICAgICAgICAgICAgICAgcCA9IGMgKiBkW2ldIC0gcyAqIGc7XG4gICAgICAgICAgICAgICAgICAgIGRbaSArIDFdID0gaCArIHMgKiAoYyAqIGcgKyBzICogZFtpXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IFZba11baSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVltrXVtpICsgMV0gPSBzICogVltrXVtpXSArIGMgKiBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgVltrXVtpXSA9IGMgKiBWW2tdW2ldIC0gcyAqIGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwID0gLXMgKiBzMiAqIGMzICogZWwxICogZVtsXSAvIGRsMTtcbiAgICAgICAgICAgICAgICBlW2xdID0gcyAqIHA7XG4gICAgICAgICAgICAgICAgZFtsXSA9IGMgKiBwO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoTWF0aC5hYnMoZVtsXSkgPiBlcHMgKiB0c3QxKTtcbiAgICAgICAgfVxuICAgICAgICBkW2xdID0gZFtsXSArIGY7XG4gICAgICAgIGVbbF0gPSAwO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBwID0gZFtpXTtcbiAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChkW2pdIDwgcCkge1xuICAgICAgICAgICAgICAgIGsgPSBqO1xuICAgICAgICAgICAgICAgIHAgPSBkW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGsgIT09IGkpIHtcbiAgICAgICAgICAgIGRba10gPSBkW2ldO1xuICAgICAgICAgICAgZFtpXSA9IHA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgcCA9IFZbal1baV07XG4gICAgICAgICAgICAgICAgVltqXVtpXSA9IFZbal1ba107XG4gICAgICAgICAgICAgICAgVltqXVtrXSA9IHA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9ydGhlcyhuLCBILCBvcnQsIFYpIHtcblxuICAgIHZhciBsb3cgPSAwO1xuICAgIHZhciBoaWdoID0gbiAtIDE7XG4gICAgdmFyIGYsIGcsIGgsIGksIGosIG07XG4gICAgdmFyIHNjYWxlO1xuXG4gICAgZm9yIChtID0gbG93ICsgMTsgbSA8PSBoaWdoIC0gMTsgbSsrKSB7XG4gICAgICAgIHNjYWxlID0gMDtcbiAgICAgICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgIHNjYWxlID0gc2NhbGUgKyBNYXRoLmFicyhIW2ldW20gLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2NhbGUgIT09IDApIHtcbiAgICAgICAgICAgIGggPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gaGlnaDsgaSA+PSBtOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBvcnRbaV0gPSBIW2ldW20gLSAxXSAvIHNjYWxlO1xuICAgICAgICAgICAgICAgIGggKz0gb3J0W2ldICogb3J0W2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnID0gTWF0aC5zcXJ0KGgpO1xuICAgICAgICAgICAgaWYgKG9ydFttXSA+IDApIHtcbiAgICAgICAgICAgICAgICBnID0gLWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGggPSBoIC0gb3J0W21dICogZztcbiAgICAgICAgICAgIG9ydFttXSA9IG9ydFttXSAtIGc7XG5cbiAgICAgICAgICAgIGZvciAoaiA9IG07IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBoaWdoOyBpID49IG07IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBmICs9IG9ydFtpXSAqIEhbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZiA9IGYgLyBoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIEhbaV1bal0gLT0gZiAqIG9ydFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaGlnaDsgaiA+PSBtOyBqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgZiArPSBvcnRbal0gKiBIW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGYgPSBmIC8gaDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBtOyBqIDw9IGhpZ2g7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBIW2ldW2pdIC09IGYgKiBvcnRbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcnRbbV0gPSBzY2FsZSAqIG9ydFttXTtcbiAgICAgICAgICAgIEhbbV1bbSAtIDFdID0gc2NhbGUgKiBnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBWW2ldW2pdID0gKGkgPT09IGogPyAxIDogMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKG0gPSBoaWdoIC0gMTsgbSA+PSBsb3cgKyAxOyBtLS0pIHtcbiAgICAgICAgaWYgKEhbbV1bbSAtIDFdICE9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSBtICsgMTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcnRbaV0gPSBIW2ldW20gLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gbTsgaiA8PSBoaWdoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBnID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBnICs9IG9ydFtpXSAqIFZbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZyA9IChnIC8gb3J0W21dKSAvIEhbbV1bbSAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbaV1bal0gKz0gZyAqIG9ydFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhxcjIobm4sIGUsIGQsIFYsIEgpIHtcbiAgICB2YXIgbiA9IG5uIC0gMTtcbiAgICB2YXIgbG93ID0gMDtcbiAgICB2YXIgaGlnaCA9IG5uIC0gMTtcbiAgICB2YXIgZXBzID0gTnVtYmVyLkVQU0lMT047XG4gICAgdmFyIGV4c2hpZnQgPSAwO1xuICAgIHZhciBub3JtID0gMDtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIHEgPSAwO1xuICAgIHZhciByID0gMDtcbiAgICB2YXIgcyA9IDA7XG4gICAgdmFyIHogPSAwO1xuICAgIHZhciBpdGVyID0gMDtcbiAgICB2YXIgaSwgaiwgaywgbCwgbSwgdCwgdywgeCwgeTtcbiAgICB2YXIgcmEsIHNhLCB2ciwgdmk7XG4gICAgdmFyIG5vdGxhc3QsIGNkaXZyZXM7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbm47IGkrKykge1xuICAgICAgICBpZiAoaSA8IGxvdyB8fCBpID4gaGlnaCkge1xuICAgICAgICAgICAgZFtpXSA9IEhbaV1baV07XG4gICAgICAgICAgICBlW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaiA9IE1hdGgubWF4KGkgLSAxLCAwKTsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgICAgIG5vcm0gPSBub3JtICsgTWF0aC5hYnMoSFtpXVtqXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAobiA+PSBsb3cpIHtcbiAgICAgICAgbCA9IG47XG4gICAgICAgIHdoaWxlIChsID4gbG93KSB7XG4gICAgICAgICAgICBzID0gTWF0aC5hYnMoSFtsIC0gMV1bbCAtIDFdKSArIE1hdGguYWJzKEhbbF1bbF0pO1xuICAgICAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzID0gbm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhIW2xdW2wgLSAxXSkgPCBlcHMgKiBzKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobCA9PT0gbikge1xuICAgICAgICAgICAgSFtuXVtuXSA9IEhbbl1bbl0gKyBleHNoaWZ0O1xuICAgICAgICAgICAgZFtuXSA9IEhbbl1bbl07XG4gICAgICAgICAgICBlW25dID0gMDtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGwgPT09IG4gLSAxKSB7XG4gICAgICAgICAgICB3ID0gSFtuXVtuIC0gMV0gKiBIW24gLSAxXVtuXTtcbiAgICAgICAgICAgIHAgPSAoSFtuIC0gMV1bbiAtIDFdIC0gSFtuXVtuXSkgLyAyO1xuICAgICAgICAgICAgcSA9IHAgKiBwICsgdztcbiAgICAgICAgICAgIHogPSBNYXRoLnNxcnQoTWF0aC5hYnMocSkpO1xuICAgICAgICAgICAgSFtuXVtuXSA9IEhbbl1bbl0gKyBleHNoaWZ0O1xuICAgICAgICAgICAgSFtuIC0gMV1bbiAtIDFdID0gSFtuIC0gMV1bbiAtIDFdICsgZXhzaGlmdDtcbiAgICAgICAgICAgIHggPSBIW25dW25dO1xuXG4gICAgICAgICAgICBpZiAocSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgeiA9IChwID49IDApID8gKHAgKyB6KSA6IChwIC0geik7XG4gICAgICAgICAgICAgICAgZFtuIC0gMV0gPSB4ICsgejtcbiAgICAgICAgICAgICAgICBkW25dID0gZFtuIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKHogIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZFtuXSA9IHggLSB3IC8gejtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZVtuIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgIGVbbl0gPSAwO1xuICAgICAgICAgICAgICAgIHggPSBIW25dW24gLSAxXTtcbiAgICAgICAgICAgICAgICBzID0gTWF0aC5hYnMoeCkgKyBNYXRoLmFicyh6KTtcbiAgICAgICAgICAgICAgICBwID0geCAvIHM7XG4gICAgICAgICAgICAgICAgcSA9IHogLyBzO1xuICAgICAgICAgICAgICAgIHIgPSBNYXRoLnNxcnQocCAqIHAgKyBxICogcSk7XG4gICAgICAgICAgICAgICAgcCA9IHAgLyByO1xuICAgICAgICAgICAgICAgIHEgPSBxIC8gcjtcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IG4gLSAxOyBqIDwgbm47IGorKykge1xuICAgICAgICAgICAgICAgICAgICB6ID0gSFtuIC0gMV1bal07XG4gICAgICAgICAgICAgICAgICAgIEhbbiAtIDFdW2pdID0gcSAqIHogKyBwICogSFtuXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgSFtuXVtqXSA9IHEgKiBIW25dW2pdIC0gcCAqIHo7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IEhbaV1bbiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBIW2ldW24gLSAxXSA9IHEgKiB6ICsgcCAqIEhbaV1bbl07XG4gICAgICAgICAgICAgICAgICAgIEhbaV1bbl0gPSBxICogSFtpXVtuXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgeiA9IFZbaV1bbiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBWW2ldW24gLSAxXSA9IHEgKiB6ICsgcCAqIFZbaV1bbl07XG4gICAgICAgICAgICAgICAgICAgIFZbaV1bbl0gPSBxICogVltpXVtuXSAtIHAgKiB6O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZFtuIC0gMV0gPSB4ICsgcDtcbiAgICAgICAgICAgICAgICBkW25dID0geCArIHA7XG4gICAgICAgICAgICAgICAgZVtuIC0gMV0gPSB6O1xuICAgICAgICAgICAgICAgIGVbbl0gPSAtejtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbiA9IG4gLSAyO1xuICAgICAgICAgICAgaXRlciA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gSFtuXVtuXTtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgdyA9IDA7XG4gICAgICAgICAgICBpZiAobCA8IG4pIHtcbiAgICAgICAgICAgICAgICB5ID0gSFtuIC0gMV1bbiAtIDFdO1xuICAgICAgICAgICAgICAgIHcgPSBIW25dW24gLSAxXSAqIEhbbiAtIDFdW25dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlciA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICBleHNoaWZ0ICs9IHg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBIW2ldW2ldIC09IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMgPSBNYXRoLmFicyhIW25dW24gLSAxXSkgKyBNYXRoLmFicyhIW24gLSAxXVtuIC0gMl0pO1xuICAgICAgICAgICAgICAgIHggPSB5ID0gMC43NSAqIHM7XG4gICAgICAgICAgICAgICAgdyA9IC0wLjQzNzUgKiBzICogcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZXIgPT09IDMwKSB7XG4gICAgICAgICAgICAgICAgcyA9ICh5IC0geCkgLyAyO1xuICAgICAgICAgICAgICAgIHMgPSBzICogcyArIHc7XG4gICAgICAgICAgICAgICAgaWYgKHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQocyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5IDwgeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IC1zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMgPSB4IC0gdyAvICgoeSAtIHgpIC8gMiArIHMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW2ldIC09IHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXhzaGlmdCArPSBzO1xuICAgICAgICAgICAgICAgICAgICB4ID0geSA9IHcgPSAwLjk2NDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZXIgPSBpdGVyICsgMTtcblxuICAgICAgICAgICAgbSA9IG4gLSAyO1xuICAgICAgICAgICAgd2hpbGUgKG0gPj0gbCkge1xuICAgICAgICAgICAgICAgIHogPSBIW21dW21dO1xuICAgICAgICAgICAgICAgIHIgPSB4IC0gejtcbiAgICAgICAgICAgICAgICBzID0geSAtIHo7XG4gICAgICAgICAgICAgICAgcCA9IChyICogcyAtIHcpIC8gSFttICsgMV1bbV0gKyBIW21dW20gKyAxXTtcbiAgICAgICAgICAgICAgICBxID0gSFttICsgMV1bbSArIDFdIC0geiAtIHIgLSBzO1xuICAgICAgICAgICAgICAgIHIgPSBIW20gKyAyXVttICsgMV07XG4gICAgICAgICAgICAgICAgcyA9IE1hdGguYWJzKHApICsgTWF0aC5hYnMocSkgKyBNYXRoLmFicyhyKTtcbiAgICAgICAgICAgICAgICBwID0gcCAvIHM7XG4gICAgICAgICAgICAgICAgcSA9IHEgLyBzO1xuICAgICAgICAgICAgICAgIHIgPSByIC8gcztcbiAgICAgICAgICAgICAgICBpZiAobSA9PT0gbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKEhbbV1bbSAtIDFdKSAqIChNYXRoLmFicyhxKSArIE1hdGguYWJzKHIpKSA8IGVwcyAqIChNYXRoLmFicyhwKSAqIChNYXRoLmFicyhIW20gLSAxXVttIC0gMV0pICsgTWF0aC5hYnMoeikgKyBNYXRoLmFicyhIW20gKyAxXVttICsgMV0pKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG0tLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gbSArIDI7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgSFtpXVtpIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChpID4gbSArIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgSFtpXVtpIC0gM10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChrID0gbTsgayA8PSBuIC0gMTsgaysrKSB7XG4gICAgICAgICAgICAgICAgbm90bGFzdCA9IChrICE9PSBuIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGsgIT09IG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IEhba11bayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBxID0gSFtrICsgMV1bayAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByID0gKG5vdGxhc3QgPyBIW2sgKyAyXVtrIC0gMV0gOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgeCA9IE1hdGguYWJzKHApICsgTWF0aC5hYnMocSkgKyBNYXRoLmFicyhyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBwIC8geDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEgPSBxIC8geDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSByIC8geDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQocCAqIHAgKyBxICogcSArIHIgKiByKTtcbiAgICAgICAgICAgICAgICBpZiAocCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9IC1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrICE9PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2tdW2sgLSAxXSA9IC1zICogeDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsICE9PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2tdW2sgLSAxXSA9IC1IW2tdW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAgPSBwICsgcztcbiAgICAgICAgICAgICAgICAgICAgeCA9IHAgLyBzO1xuICAgICAgICAgICAgICAgICAgICB5ID0gcSAvIHM7XG4gICAgICAgICAgICAgICAgICAgIHogPSByIC8gcztcbiAgICAgICAgICAgICAgICAgICAgcSA9IHEgLyBwO1xuICAgICAgICAgICAgICAgICAgICByID0gciAvIHA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gazsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBIW2tdW2pdICsgcSAqIEhbayArIDFdW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gcCArIHIgKiBIW2sgKyAyXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2sgKyAyXVtqXSA9IEhbayArIDJdW2pdIC0gcCAqIHo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhba11bal0gPSBIW2tdW2pdIC0gcCAqIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2sgKyAxXVtqXSA9IEhbayArIDFdW2pdIC0gcCAqIHk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IE1hdGgubWluKG4sIGsgKyAzKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0geCAqIEhbaV1ba10gKyB5ICogSFtpXVtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90bGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBwICsgeiAqIEhbaV1bayArIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bayArIDJdID0gSFtpXVtrICsgMl0gLSBwICogcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtrXSA9IEhbaV1ba10gLSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpXVtrICsgMV0gPSBIW2ldW2sgKyAxXSAtIHAgKiBxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHggKiBWW2ldW2tdICsgeSAqIFZbaV1bayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gcCArIHogKiBWW2ldW2sgKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWW2ldW2sgKyAyXSA9IFZbaV1bayArIDJdIC0gcCAqIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1ba10gPSBWW2ldW2tdIC0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZbaV1bayArIDFdID0gVltpXVtrICsgMV0gLSBwICogcTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub3JtID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKG4gPSBubiAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgIHAgPSBkW25dO1xuICAgICAgICBxID0gZVtuXTtcblxuICAgICAgICBpZiAocSA9PT0gMCkge1xuICAgICAgICAgICAgbCA9IG47XG4gICAgICAgICAgICBIW25dW25dID0gMTtcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHcgPSBIW2ldW2ldIC0gcDtcbiAgICAgICAgICAgICAgICByID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBsOyBqIDw9IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICByID0gciArIEhbaV1bal0gKiBIW2pdW25dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlW2ldIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB6ID0gdztcbiAgICAgICAgICAgICAgICAgICAgcyA9IHI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW2ldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIW2ldW25dID0gKHcgIT09IDApID8gKC1yIC8gdykgOiAoLXIgLyAoZXBzICogbm9ybSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IEhbaV1baSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IEhbaSArIDFdW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcSA9IChkW2ldIC0gcCkgKiAoZFtpXSAtIHApICsgZVtpXSAqIGVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gKHggKiBzIC0geiAqIHIpIC8gcTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bbl0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgSFtpICsgMV1bbl0gPSAoTWF0aC5hYnMoeCkgPiBNYXRoLmFicyh6KSkgPyAoKC1yIC0gdyAqIHQpIC8geCkgOiAoKC1zIC0geSAqIHQpIC8geik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0ID0gTWF0aC5hYnMoSFtpXVtuXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZXBzICogdCkgKiB0ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIW2pdW25dID0gSFtqXVtuXSAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocSA8IDApIHtcbiAgICAgICAgICAgIGwgPSBuIC0gMTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKEhbbl1bbiAtIDFdKSA+IE1hdGguYWJzKEhbbiAtIDFdW25dKSkge1xuICAgICAgICAgICAgICAgIEhbbiAtIDFdW24gLSAxXSA9IHEgLyBIW25dW24gLSAxXTtcbiAgICAgICAgICAgICAgICBIW24gLSAxXVtuXSA9IC0oSFtuXVtuXSAtIHApIC8gSFtuXVtuIC0gMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KDAsIC1IW24gLSAxXVtuXSwgSFtuIC0gMV1bbiAtIDFdIC0gcCwgcSk7XG4gICAgICAgICAgICAgICAgSFtuIC0gMV1bbiAtIDFdID0gY2RpdnJlc1swXTtcbiAgICAgICAgICAgICAgICBIW24gLSAxXVtuXSA9IGNkaXZyZXNbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEhbbl1bbiAtIDFdID0gMDtcbiAgICAgICAgICAgIEhbbl1bbl0gPSAxO1xuICAgICAgICAgICAgZm9yIChpID0gbiAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgcmEgPSAwO1xuICAgICAgICAgICAgICAgIHNhID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBsOyBqIDw9IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICByYSA9IHJhICsgSFtpXVtqXSAqIEhbal1bbiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBzYSA9IHNhICsgSFtpXVtqXSAqIEhbal1bbl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdyA9IEhbaV1baV0gLSBwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVbaV0gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHogPSB3O1xuICAgICAgICAgICAgICAgICAgICByID0gcmE7XG4gICAgICAgICAgICAgICAgICAgIHMgPSBzYTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbaV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KC1yYSwgLXNhLCB3LCBxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bbiAtIDFdID0gY2RpdnJlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bbl0gPSBjZGl2cmVzWzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IEhbaV1baSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IEhbaSArIDFdW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdnIgPSAoZFtpXSAtIHApICogKGRbaV0gLSBwKSArIGVbaV0gKiBlW2ldIC0gcSAqIHE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aSA9IChkW2ldIC0gcCkgKiAyICogcTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ciA9PT0gMCAmJiB2aSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZyID0gZXBzICogbm9ybSAqIChNYXRoLmFicyh3KSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMoeCkgKyBNYXRoLmFicyh5KSArIE1hdGguYWJzKHopKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KHggKiByIC0geiAqIHJhICsgcSAqIHNhLCB4ICogcyAtIHogKiBzYSAtIHEgKiByYSwgdnIsIHZpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bbiAtIDFdID0gY2RpdnJlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhbaV1bbl0gPSBjZGl2cmVzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHgpID4gKE1hdGguYWJzKHopICsgTWF0aC5hYnMocSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtpICsgMV1bbiAtIDFdID0gKC1yYSAtIHcgKiBIW2ldW24gLSAxXSArIHEgKiBIW2ldW25dKSAvIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtpICsgMV1bbl0gPSAoLXNhIC0gdyAqIEhbaV1bbl0gLSBxICogSFtpXVtuIC0gMV0pIC8geDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2RpdnJlcyA9IGNkaXYoLXIgLSB5ICogSFtpXVtuIC0gMV0sIC1zIC0geSAqIEhbaV1bbl0sIHosIHEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhbaSArIDFdW24gLSAxXSA9IGNkaXZyZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtpICsgMV1bbl0gPSBjZGl2cmVzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdCA9IE1hdGgubWF4KE1hdGguYWJzKEhbaV1bbiAtIDFdKSwgTWF0aC5hYnMoSFtpXVtuXSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVwcyAqIHQpICogdCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtqXVtuIC0gMV0gPSBIW2pdW24gLSAxXSAvIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSFtqXVtuXSA9IEhbal1bbl0gLyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG5uOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBsb3cgfHwgaSA+IGhpZ2gpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICAgICAgVltpXVtqXSA9IEhbaV1bal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGogPSBubiAtIDE7IGogPj0gbG93OyBqLS0pIHtcbiAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgeiA9IDA7XG4gICAgICAgICAgICBmb3IgKGsgPSBsb3c7IGsgPD0gTWF0aC5taW4oaiwgaGlnaCk7IGsrKykge1xuICAgICAgICAgICAgICAgIHogPSB6ICsgVltpXVtrXSAqIEhba11bal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBWW2ldW2pdID0gejtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2Rpdih4ciwgeGksIHlyLCB5aSkge1xuICAgIHZhciByLCBkO1xuICAgIGlmIChNYXRoLmFicyh5cikgPiBNYXRoLmFicyh5aSkpIHtcbiAgICAgICAgciA9IHlpIC8geXI7XG4gICAgICAgIGQgPSB5ciArIHIgKiB5aTtcbiAgICAgICAgcmV0dXJuIFsoeHIgKyByICogeGkpIC8gZCwgKHhpIC0gciAqIHhyKSAvIGRdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHIgPSB5ciAvIHlpO1xuICAgICAgICBkID0geWkgKyByICogeXI7XG4gICAgICAgIHJldHVybiBbKHIgKiB4ciArIHhpKSAvIGQsIChyICogeGkgLSB4cikgLyBkXTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL2V2ZC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWF0cml4LCBXcmFwcGVyTWF0cml4MkR9IGZyb20gJy4uL2luZGV4JztcblxuLyoqXG4gKiBAY2xhc3MgQ2hvbGVza3lEZWNvbXBvc2l0aW9uXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbHV0enJvZWRlci9NYXBhY2svYmxvYi9tYXN0ZXIvU291cmNlL0Nob2xlc2t5RGVjb21wb3NpdGlvbi5jc1xuICogQHBhcmFtIHtNYXRyaXh9IHZhbHVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2xlc2t5RGVjb21wb3NpdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuICAgICAgICBpZiAoIXZhbHVlLmlzU3ltbWV0cmljKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGlzIG5vdCBzeW1tZXRyaWMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhID0gdmFsdWU7XG4gICAgICAgIHZhciBkaW1lbnNpb24gPSBhLnJvd3M7XG4gICAgICAgIHZhciBsID0gbmV3IE1hdHJpeChkaW1lbnNpb24sIGRpbWVuc2lvbik7XG4gICAgICAgIHZhciBwb3NpdGl2ZURlZmluaXRlID0gdHJ1ZTtcbiAgICAgICAgdmFyIGksIGosIGs7XG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGRpbWVuc2lvbjsgaisrKSB7XG4gICAgICAgICAgICB2YXIgTHJvd2ogPSBsW2pdO1xuICAgICAgICAgICAgdmFyIGQgPSAwO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGo7IGsrKykge1xuICAgICAgICAgICAgICAgIHZhciBMcm93ayA9IGxba107XG4gICAgICAgICAgICAgICAgdmFyIHMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBMcm93a1tpXSAqIExyb3dqW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBMcm93altrXSA9IHMgPSAoYS5nZXQoaiwgaykgLSBzKSAvIGxba11ba107XG4gICAgICAgICAgICAgICAgZCA9IGQgKyBzICogcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZCA9IGEuZ2V0KGosIGopIC0gZDtcblxuICAgICAgICAgICAgcG9zaXRpdmVEZWZpbml0ZSAmPSAoZCA+IDApO1xuICAgICAgICAgICAgbFtqXVtqXSA9IE1hdGguc3FydChNYXRoLm1heChkLCAwKSk7XG4gICAgICAgICAgICBmb3IgKGsgPSBqICsgMTsgayA8IGRpbWVuc2lvbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgbFtqXVtrXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvc2l0aXZlRGVmaW5pdGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGlzIG5vdCBwb3NpdGl2ZSBkZWZpbml0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5MID0gbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWF0cml4fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBzb2x2ZSh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIGwgPSB0aGlzLkw7XG4gICAgICAgIHZhciBkaW1lbnNpb24gPSBsLnJvd3M7XG5cbiAgICAgICAgaWYgKHZhbHVlLnJvd3MgIT09IGRpbWVuc2lvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggZGltZW5zaW9ucyBkbyBub3QgbWF0Y2gnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICAgIHZhciBCID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgdmFyIGksIGosIGs7XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IGRpbWVuc2lvbjsgaysrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQltrXVtqXSAtPSBCW2ldW2pdICogbFtrXVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQltrXVtqXSAvPSBsW2tdW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gZGltZW5zaW9uIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBkaW1lbnNpb247IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBCW2tdW2pdIC09IEJbaV1bal0gKiBsW2ldW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCW2tdW2pdIC89IGxba11ba107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hdHJpeH1cbiAgICAgKi9cbiAgICBnZXQgbG93ZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5MO1xuICAgIH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9jaG9sZXNreS5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBJbWFnZURhdGFDb252ZXJ0ZXIge1xyXG4gIHB1YmxpYyBjb252ZXJ0SW1hZ2VUb0ltYWdlRGF0YShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IEltYWdlRGF0YSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyBkcmF3aW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udmVydEltYWdlRGF0YVRvSW1hZ2UoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW1hZ2VEYXRhLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltYWdlRGF0YS5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FudmFzIGRyYXdpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoaW1hZ2VEYXRhLndpZHRoLCBpbWFnZURhdGEuaGVpZ2h0KTtcclxuICAgIGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG5cclxuICAgIHJldHVybiBpbWFnZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvSW1hZ2VEYXRhQ29udmVydGVyLnRzIiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICBwdWJsaWMgbG9hZEltYWdlKHVybDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgIGltYWdlLm9uZXJyb3IgPSByZWplY3Q7XHJcblxyXG4gICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvSW1hZ2VMb2FkZXIudHMiLCJpbXBvcnQgeyBIeXBlckNvbnRhaW5lciB9IGZyb20gJ3V0aWxzL0h5cGVyQ29udGFpbmVyJztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnYXBwU3RvcmUnO1xyXG5pbXBvcnQgeyBMYWJQYXJhbWV0ZXJCb3ggfSBmcm9tICdjb21wb25lbnRzL0xhYlBhcmFtZXRlckJveCc7XHJcbmltcG9ydCB7IENvbG9yUHJvZmlsZVR5cGUgfSBmcm9tICdtb2RlbHMvQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENvbG9yU3BhY2VUeXBlIH0gZnJvbSAnbW9kZWxzL0NvbG9yU3BhY2VUeXBlJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblBhcmFtZXRlcnMgfSBmcm9tICdtb2RlbHMvQ29udmVyc2lvblBhcmFtZXRlcnMnO1xyXG5pbXBvcnQgeyBJbGx1bWluYW50VHlwZSB9IGZyb20gJ21vZGVscy9JbGx1bWluYW50VHlwZSc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyU3RhdGUge1xyXG4gIHNlbGVjdGVkQ29sb3JTcGFjZTogQ29sb3JTcGFjZVR5cGU7XHJcbiAgY29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzO1xyXG4gIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZTtcclxuICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblBhcmFtZXRlckJveCBleHRlbmRzIEh5cGVyQ29udGFpbmVyPENvbnRhaW5lclN0YXRlPiB7XHJcbiAgcHJvdGVjdGVkIG1hcEFwcFN0YXRlVG9Db250YWluZXJTdGF0ZShhcHBTdGF0ZTogQXBwU3RhdGUpOiBDb250YWluZXJTdGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWxlY3RlZENvbG9yU3BhY2U6IGFwcFN0YXRlLmlucHV0LnNlbGVjdGVkQ29sb3JTcGFjZSxcclxuICAgICAgY29udmVyc2lvblBhcmFtZXRlcnM6IGFwcFN0YXRlLmlucHV0LmNvbnZlcnNpb25QYXJhbWV0ZXJzLFxyXG4gICAgICBpbGx1bWluYW50VHlwZTogYXBwU3RhdGUuaW5wdXQuaWxsdW1pbmFudFR5cGUsXHJcbiAgICAgIGNvbG9yUHJvZmlsZVR5cGU6IGFwcFN0YXRlLmlucHV0LmNvbG9yUHJvZmlsZVR5cGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHRtbGBcclxuICAgICAgPGRpdiBvbmNvbm5lY3RlZD0ke3RoaXN9IG9uZGlzY29ubmVjdGVkPSR7dGhpc30+XHJcbiAgICAgICAgJHt0aGlzLmdldENvbG9yU3BhY2VQYXJhbWV0ZXJCb3goKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2xvclNwYWNlUGFyYW1ldGVyQm94KCkge1xyXG4gICAgY29uc3QgeyBpbGx1bWluYW50VHlwZSwgY29sb3JQcm9maWxlVHlwZSwgY29udmVyc2lvblBhcmFtZXRlcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW0NvbG9yU3BhY2VUeXBlLkhTVl06ICgpID0+IG51bGwsXHJcbiAgICAgIFtDb2xvclNwYWNlVHlwZS5ZQ2JDcl06ICgpID0+IG51bGwsXHJcbiAgICAgIFtDb2xvclNwYWNlVHlwZS5MYWJdOiAoKSA9PlxyXG4gICAgICAgIExhYlBhcmFtZXRlckJveChpbGx1bWluYW50VHlwZSwgY29sb3JQcm9maWxlVHlwZSwgY29udmVyc2lvblBhcmFtZXRlcnMpXHJcbiAgICB9W3RoaXMuc3RhdGUuc2VsZWN0ZWRDb2xvclNwYWNlXSgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb250YWluZXJzL0NvbnZlcnNpb25QYXJhbWV0ZXJCb3gudHMiLCJpbXBvcnQgeyB3aXJlIH0gZnJvbSAnaHlwZXJodG1sL2VzbSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENvbG9yUHJvZmlsZVR5cGUsXHJcbiAgbGFiZWxlZENvbG9yUHJvZmlsZXMsXHJcbiAgcHJlZGVmaW5lZENvbG9yUHJvZmlsZXNcclxufSBmcm9tICdtb2RlbHMvQ29sb3JQcm9maWxlVHlwZSc7XHJcbmltcG9ydCB7IENvbnZlcnNpb25QYXJhbWV0ZXJzIH0gZnJvbSAnbW9kZWxzL0NvbnZlcnNpb25QYXJhbWV0ZXJzJztcclxuaW1wb3J0IHsgSWxsdW1pbmFudFR5cGUsIGxhYmVsZWRJbGx1bWluYW50cywgcHJlZGVmaW5lZElsbHVtaW5hbnRzIH0gZnJvbSAnbW9kZWxzL0lsbHVtaW5hbnRUeXBlJztcclxuXHJcbmltcG9ydCB7IGNoYW5nZUNvbG9yUHJvZmlsZVR5cGUgfSBmcm9tICdhY3Rpb25zL2lucHV0L2NoYW5nZUNvbG9yUHJvZmlsZVR5cGUnO1xyXG5pbXBvcnQgeyBjaGFuZ2VJbGx1bWluYW50VHlwZSB9IGZyb20gJ2FjdGlvbnMvaW5wdXQvY2hhbmdlSWxsdW1pbmFudFR5cGUnO1xyXG5cclxuaW1wb3J0IHsgYXBwU3RvcmUgfSBmcm9tICdhcHBTdG9yZSc7XHJcbmltcG9ydCB7IExhYmVsZWRTZWxlY3QgfSBmcm9tICdjb21wb25lbnRzL0xhYmVsZWRTZWxlY3QnO1xyXG5pbXBvcnQgeyBDb2xvclBvaW50IH0gZnJvbSAnbW9kZWxzL0NvbG9yUG9pbnQnO1xyXG5cclxuZnVuY3Rpb24gb25JbGx1bWluYW50Q2hhbmdlKGN1cnJlbnRXaGl0ZVBvaW50OiBDb2xvclBvaW50LCBuZXdJbGx1bWluYW50OiBJbGx1bWluYW50VHlwZSkge1xyXG4gIGlmIChuZXdJbGx1bWluYW50ID09PSBJbGx1bWluYW50VHlwZS5DdXN0b20pIHtcclxuICAgIGFwcFN0b3JlLmRpc3BhdGNoKGNoYW5nZUlsbHVtaW5hbnRUeXBlKG5ld0lsbHVtaW5hbnQsIGN1cnJlbnRXaGl0ZVBvaW50KSk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm91bmRJbGx1bWluYW50ID0gcHJlZGVmaW5lZElsbHVtaW5hbnRzLmZpbmQoXHJcbiAgICBpbGx1bWluYW50ID0+IGlsbHVtaW5hbnQuaWxsdW1pbmFudFR5cGUgPT09IG5ld0lsbHVtaW5hbnRcclxuICApO1xyXG4gIGlmICghZm91bmRJbGx1bWluYW50KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdGVkIGlsbHVtaW5hbnQgbm90IGZvdW5kIGluIHByZWRlZmluZWQgb25lcycpO1xyXG4gIH1cclxuXHJcbiAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlSWxsdW1pbmFudFR5cGUobmV3SWxsdW1pbmFudCwgZm91bmRJbGx1bWluYW50LndoaXRlUG9pbnQoKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNvbG9yUHJvZmlsZUNoYW5nZShcclxuICBjdXJyZW50Q29udmVyc2lvblBhcmFtZXRlcnM6IENvbnZlcnNpb25QYXJhbWV0ZXJzLFxyXG4gIG5ld0NvbG9yUHJvZmlsZTogQ29sb3JQcm9maWxlVHlwZVxyXG4pIHtcclxuICBpZiAobmV3Q29sb3JQcm9maWxlID09PSBDb2xvclByb2ZpbGVUeXBlLkN1c3RvbSkge1xyXG4gICAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlQ29sb3JQcm9maWxlVHlwZShuZXdDb2xvclByb2ZpbGUsIGN1cnJlbnRDb252ZXJzaW9uUGFyYW1ldGVycykpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvdW5kQ29sb3JQcm9maWxlID0gcHJlZGVmaW5lZENvbG9yUHJvZmlsZXMuZmluZChcclxuICAgIGNvbG9yUHJvZmlsZSA9PiBjb2xvclByb2ZpbGUuY29sb3JQcm9maWxlVHlwZSA9PT0gbmV3Q29sb3JQcm9maWxlXHJcbiAgKTtcclxuICBpZiAoIWZvdW5kQ29sb3JQcm9maWxlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdGVkIGNvbG9yIHByb2ZpbGUgbm90IGZvdW5kIGluIHByZWRlZmluZWQgb25lcycpO1xyXG4gIH1cclxuXHJcbiAgYXBwU3RvcmUuZGlzcGF0Y2goY2hhbmdlQ29sb3JQcm9maWxlVHlwZShuZXdDb2xvclByb2ZpbGUsIGZvdW5kQ29sb3JQcm9maWxlLnBhcmFtZXRlcnMoKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFiUGFyYW1ldGVyQm94KFxyXG4gIGlsbHVtaW5hbnRUeXBlOiBJbGx1bWluYW50VHlwZSxcclxuICBjb2xvclByb2ZpbGVUeXBlOiBDb2xvclByb2ZpbGVUeXBlLFxyXG4gIGNvbnZlcnNpb25QYXJhbWV0ZXJzOiBDb252ZXJzaW9uUGFyYW1ldGVyc1xyXG4pIHtcclxuICByZXR1cm4gd2lyZSgpYFxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGZvcj1cImlsbHVtaW5hbnQtdHlwZS1zZWxlY3RcIj5JbGx1bWluYW50IHR5cGU6IDwvbGFiZWw+XHJcbiAgICAgICR7TGFiZWxlZFNlbGVjdChcclxuICAgICAgICAnaWxsdW1pbmFudC10eXBlLXNlbGVjdCcsXHJcbiAgICAgICAgbGFiZWxlZElsbHVtaW5hbnRzLFxyXG4gICAgICAgIGlsbHVtaW5hbnRUeXBlLFxyXG4gICAgICAgIG9uSWxsdW1pbmFudENoYW5nZS5iaW5kKG51bGwsIGNvbnZlcnNpb25QYXJhbWV0ZXJzLndoaXRlUG9pbnQpXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgZm9yPVwiY29sb3ItcHJvZmlsZS1zZWxlY3RcIj5Db2xvciBwcm9maWxlOiA8L2xhYmVsPlxyXG4gICAgICAke0xhYmVsZWRTZWxlY3QoXHJcbiAgICAgICAgJ2NvbG9yLXByb2ZpbGUtc2VsZWN0JyxcclxuICAgICAgICBsYWJlbGVkQ29sb3JQcm9maWxlcyxcclxuICAgICAgICBjb2xvclByb2ZpbGVUeXBlLFxyXG4gICAgICAgIG9uQ29sb3JQcm9maWxlQ2hhbmdlLmJpbmQobnVsbCwgY29udmVyc2lvblBhcmFtZXRlcnMpXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8cHJlPiR7SlNPTi5zdHJpbmdpZnkoY29udmVyc2lvblBhcmFtZXRlcnMsIG51bGwsIDIpfTwvcHJlPlxyXG4gIGA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9MYWJQYXJhbWV0ZXJCb3gudHMiXSwic291cmNlUm9vdCI6IiJ9