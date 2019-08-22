// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 277);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(1);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    supportsEB: function supportsEB() {
      var weexVersion = weex.config.env.weexVersion || '0';
      var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
      var expressionBinding = weex.requireModule('expressionBinding');
      return expressionBinding && expressionBinding.enableBinding && isHighWeex;
    },


    /**
     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
     * @returns {boolean}
     */
    supportsEBForAndroid: function supportsEBForAndroid() {
      return Utils.env.isAndroid() && Utils.env.supportsEB();
    },


    /**
     * 判断IOS容器是否支持是否支持expressionBinding
     * @returns {boolean}
     */
    supportsEBForIos: function supportsEBForIos() {
      return Utils.env.isIOS() && Utils.env.supportsEB();
    },


    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return { left: '750px', top: '0px', height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px' };
      } else if (animationType === 'model') {
        return { top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px', left: '0px', height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px' };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(2)
  , qs = __webpack_require__(3)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/node_modules/weex-ui/packages/wxc-lightbox/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a41033f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(159)
)

/* script */
__vue_exports__ = __webpack_require__(160)

/* template */
var __vue_template__ = __webpack_require__(161)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Inspect/inspect-check-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ae43c79e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF",
    "width": "702"
  },
  "check-container": {
    "flexDirection": "row",
    "borderTopWidth": "2",
    "borderTopStyle": "solid",
    "borderTopColor": "#F1EFEF",
    "justifyContent": "space-around",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0
  },
  "title-normal": {
    "color": "#666666",
    "fontSize": "30"
  },
  "index-title": {
    "width": "200",
    "color": "#666666",
    "fontSize": "30"
  },
  "btn-disabled": {
    "fontSize": "30",
    "color": "#FFFFFF",
    "backgroundColor": "#DCDCDC",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "borderRadius": "10",
    "textAlign": "center",
    "height": "68",
    "lineHeight": "68",
    "width": "240"
  },
  "btn-normal": {
    "fontSize": "30",
    "color": "#5ABECF",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#5ABECF",
    "textAlign": "center",
    "height": "68",
    "lineHeight": "68",
    "width": "240"
  },
  "btn-clicked": {
    "fontSize": "30",
    "color": "#FFFFFF",
    "backgroundColor": "#5ABECF",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#5ABECF",
    "borderRadius": "10",
    "textAlign": "center",
    "height": "68",
    "lineHeight": "68",
    "width": "240"
  },
  "checked-normal": {
    "backgroundColor": "#ffffff",
    "position": "relative"
  },
  "check-text": {
    "height": "64",
    "lineHeight": "64",
    "width": "160",
    "textAlign": "center",
    "color": "#999999",
    "fontSize": "30"
  },
  "checked-pass": {
    "color": "#44B393"
  },
  "checked-not-pass": {
    "color": "#FD7474"
  },
  "checked-icon": {
    "width": "160",
    "height": "64",
    "position": "absolute",
    "right": 0,
    "top": 0
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = {
  "indicator": {
    "position": "absolute",
    "itemColor": "rgba(255,195,0,0.5)",
    "itemSelectedColor": "#ffc300",
    "itemSize": "20",
    "height": "20",
    "bottom": "24"
  }
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridImageSelect = __webpack_require__(24);

var _gridImageSelect2 = _interopRequireDefault(_gridImageSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "inspect-check-item",
    components: { GridImageSelect: _gridImageSelect2.default },
    props: {
        pageOnlyViewFlag: {
            type: Boolean,
            default: false
        },
        itemIndex: {
            type: Number,
            required: true
        },
        //0 功能 1车内 2车外
        checkType: {
            type: Number,
            required: true
        },
        optionType: {
            type: Number
        },

        indexTitle: {
            type: String,
            default: ''
        },
        indexExist: {
            type: Boolean,
            default: true
        },
        nameExist: {
            type: Boolean,
            default: true
        },
        name: {
            type: String,
            default: ''
        },
        isOptionClicked: {
            type: Number,
            default: 0
        },
        indexStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        fault: {
            type: Number,
            default: 64
        },
        imgUrls: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        checkedNotPassFlag: function checkedNotPassFlag() {
            if (this.fault == 1) {
                return true;
            } else {
                return false;
            }
        }
    },
    data: function data() {
        return {
            checkedPassIcon: "local:///checked_pass.png",
            checkedPassNoramlIcon: "local:///checked_pass_normal_icon.png",
            checkedNotPassIcon: "local:///checked_not_pass.png",
            checkedNotPassNormalIcon: "local:///checked_not_pass_normal.png"
        };
    },

    methods: {
        inspectItemChecked: function inspectItemChecked() {
            if (this.pageOnlyViewFlag) return;
            this.$emit('inspectItemChecked', { index: this.itemIndex, type: this.optionType });
        },
        checkPassClicked: function checkPassClicked(state) {
            if (this.pageOnlyViewFlag) return;
            this.$emit('checkPassClicked', { index: this.itemIndex, state: state, checkType: this.checkType });
        }
    }
};

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["check-container"]
  }, [(_vm.indexExist) ? _c('text', {
    class: [_vm.nameExist ? 'title-normal' : 'index-title'],
    style: _vm.indexStyle
  }, [_vm._v(_vm._s(_vm.indexTitle))]) : _vm._e(), (_vm.nameExist) ? _c('text', {
    class: [_vm.pageOnlyViewFlag ? 'btn-disabled' : _vm.isOptionClicked == 1 ? 'btn-clicked' : 'btn-normal'],
    on: {
      "click": _vm.inspectItemChecked
    }
  }, [_vm._v(_vm._s(_vm.name))]) : _vm._e(), _c('div', {
    staticClass: ["checked-normal"],
    on: {
      "click": function($event) {
        _vm.checkPassClicked(0)
      }
    }
  }, [_c('text', {
    staticClass: ["check-text"],
    class: [_vm.fault == 0 ? 'checked-pass' : '']
  }, [_vm._v("正常")]), _c('image', {
    staticClass: ["checked-icon"],
    attrs: {
      "src": _vm.fault == 0 ? _vm.checkedPassIcon : _vm.checkedPassNoramlIcon,
      "resize": "contain"
    }
  })]), _c('div', {
    staticClass: ["checked-normal"],
    on: {
      "click": function($event) {
        _vm.checkPassClicked(1)
      }
    }
  }, [_c('text', {
    staticClass: ["check-text"],
    class: [_vm.fault == 1 ? 'checked-not-pass' : '']
  }, [_vm._v("异常")]), _c('image', {
    staticClass: ["checked-icon"],
    attrs: {
      "src": _vm.fault == 1 ? _vm.checkedNotPassIcon : _vm.checkedNotPassNormalIcon,
      "resize": "contain"
    }
  })])]), _c('grid-image-select', {
    attrs: {
      "orginImages": _vm.imgUrls,
      "pageOnlyViewFlag": _vm.pageOnlyViewFlag,
      "itemIndex": _vm.itemIndex,
      "checkedNotPassFlag": _vm.checkedNotPassFlag,
      "checkType": _vm.checkType
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _wxcMask = __webpack_require__(18);

var _wxcMask2 = _interopRequireDefault(_wxcMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    WxcMask: _wxcMask2.default
  },
  props: {
    width: {
      type: [Number, String],
      default: 750
    },
    height: {
      type: [Number, String],
      default: 750
    },
    show: {
      type: Boolean,
      default: false
    },
    imageList: Array,
    indicatorColor: {
      type: Object,
      default: function _default() {
        return {
          'item-color': 'rgba(255, 195, 0, .5)',
          'item-selected-color': '#ffc300',
          'item-size': '20px'
        };
      }
    }
  },
  computed: {
    indicatorStyle: function indicatorStyle() {
      return _extends({
        width: this.width + 'px'
      }, this.indicatorColor);
    }
  },
  methods: {
    maskOverlayClick: function maskOverlayClick() {
      this.$emit('wxcLightboxOverlayClicked', {});
    }
  }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(19);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/node_modules/weex-ui/packages/wxc-mask/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-419c27f6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "wxc-mask": {
    "position": "fixed",
    "top": "300",
    "left": "60",
    "width": "702",
    "height": "800"
  },
  "mask-bottom": {
    "width": "100",
    "height": "100",
    "backgroundColor": "rgba(0,0,0,0)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "mask-close-icon": {
    "width": "64",
    "height": "64"
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wxcOverlay = __webpack_require__(4);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    height: {
      type: [String, Number],
      default: 800
    },
    width: {
      type: [String, Number],
      default: 702
    },
    show: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    hasOverlay: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          canAutoClose: true,
          duration: 300,
          opacity: 0.6
        };
      }
    },
    borderRadius: {
      type: [String, Number],
      default: 0
    },
    overlayCanClose: {
      type: Boolean,
      default: true
    },
    maskBgColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data: function data() {
    return {
      closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
      maskTop: 264,
      opened: false
    };
  },
  computed: {
    mergeOverlayCfg: function mergeOverlayCfg() {
      return _extends({}, this.overlayCfg, {
        hasAnimation: this.hasAnimation
      });
    },
    maskStyle: function maskStyle() {
      var width = this.width,
          height = this.height,
          showClose = this.showClose,
          hasAnimation = this.hasAnimation,
          opened = this.opened;

      var newHeight = showClose ? height - 0 + 100 : height;
      var _weex$config$env = weex.config.env,
          deviceHeight = _weex$config$env.deviceHeight,
          deviceWidth = _weex$config$env.deviceWidth,
          platform = _weex$config$env.platform;

      var _deviceHeight = deviceHeight || 1334;
      var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
      var navHeight = isWeb ? 0 : 130;
      var pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
      return {
        width: width + 'px',
        height: newHeight + 'px',
        left: (750 - width) / 2 + 'px',
        top: (pageHeight - height) / 2 + 'px',
        opacity: hasAnimation && !opened ? 0 : 1
      };
    },
    contentStyle: function contentStyle() {
      return {
        width: this.width + 'px',
        backgroundColor: this.maskBgColor,
        height: this.height + 'px',
        borderRadius: this.borderRadius + 'px'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearMask(show);
      }, 50);
      return show;
    }
  },
  methods: {
    closeIconClicked: function closeIconClicked() {
      this.appearMask(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      if (this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicking', {});
      }
    },
    wxcOverlayBodyClicked: function wxcOverlayBodyClicked() {
      if (!this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicked', {});
      }
    },
    needEmit: function needEmit() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.opened = bool;
      !bool && this.$emit('wxcMaskSetHidden', {});
    },
    appearMask: function appearMask(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction;

      var maskEl = this.$refs['wxc-mask'];
      if (hasAnimation && maskEl) {
        animation.transition(maskEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          _this2.needEmit(bool);
        });
      } else {
        this.needEmit(bool);
      }
    }
  }
};

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    attrs: {
      "show": _vm.show && _vm.hasOverlay
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
    }
  }, 'wxc-overlay', _vm.mergeOverlayCfg, false)) : _vm._e(), (_vm.show) ? _c('div', {
    ref: "wxc-mask",
    staticClass: ["wxc-mask"],
    style: _vm.maskStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    style: _vm.contentStyle
  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
    staticClass: ["mask-bottom"],
    style: {
      width: _vm.width + 'px'
    },
    on: {
      "click": _vm.closeIconClicked
    }
  }, [_c('image', {
    staticClass: ["mask-close-icon"],
    attrs: {
      "src": _vm.closeIcon,
      "ariaLabel": "关闭"
    }
  })]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-mask', {
    attrs: {
      "width": _vm.width,
      "height": _vm.height,
      "ariaHidden": "true",
      "maskBgColor": "transparent",
      "overlayOpacity": "0.8",
      "show": _vm.show,
      "showClose": false
    },
    on: {
      "wxcMaskSetHidden": _vm.maskOverlayClick
    }
  }, [(_vm.show) ? _c('slider', {
    style: {
      height: _vm.height + 'px'
    },
    attrs: {
      "autoPlay": "false"
    }
  }, [_vm._l((_vm.imageList), function(v, index) {
    return _c('div', {
      key: index,
      style: {
        height: _vm.height + 'px'
      }
    }, [_c('image', {
      style: {
        height: _vm.height + 'px',
        width: _vm.width + 'px'
      },
      attrs: {
        "resize": "cover",
        "src": v.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"],
    style: _vm.indicatorStyle
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Components/grid-image-select.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-229d05be"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF",
    "width": "750",
    "borderBottomWidth": "2",
    "borderBottomColor": "#F1EFEF"
  },
  "image-controler": {
    "flexDirection": "row",
    "paddingTop": "0",
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "40"
  },
  "image-container": {
    "position": "relative",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "width": "750"
  },
  "images": {
    "position": "relative",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "marginTop": 0,
    "marginRight": "46",
    "marginBottom": "28",
    "marginLeft": 0
  },
  "delete-icon": {
    "width": "26",
    "height": "26",
    "position": "absolute",
    "right": "-13",
    "top": "-13"
  },
  "image-icon": {
    "borderRadius": "6",
    "width": "160",
    "height": "160"
  },
  "add-icon": {
    "borderRadius": "6",
    "width": "160",
    "height": "160",
    "marginTop": 0,
    "marginRight": "46",
    "marginBottom": "28",
    "marginLeft": 0
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _wxcLightbox = __webpack_require__(14);

var _wxcLightbox2 = _interopRequireDefault(_wxcLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "grid-image-select",
    components: {
        WxcLightbox: _wxcLightbox2.default
    },
    props: {
        pageOnlyViewFlag: {
            type: Boolean,
            default: false
        },
        //[{canDelete:false, src:''}]
        orginImages: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        itemIndex: {
            type: Number,
            required: true
        },
        //1车内检查，2车外检查
        checkType: {
            type: Number,
            required: true
        },
        checkedNotPassFlag: {
            type: Boolean,
            default: false
        }
    },
    created: function created() {

        for (var i = 0; i < this.orginImages.length; i++) {
            this.imageList.push(this.orginImages[i]);
        }

        this.uploadedCount = this.getUploadCount();
    },
    data: function data() {
        return {
            addIcon: _utils2.default.env.isIOS() ? "local:///add_image.png" : "local:///add_image",
            deleteIcon: _utils2.default.env.isIOS() ? "local:///delete_image.png" : "local:///delete_image",
            showZoomImage: false,
            indicatorStyle: { 'item-color': '#999999', 'item-selected-color': '#44B393', 'item-size': '12px' },
            imageList: []
        };
    },

    methods: {
        deleteImage: function deleteImage(item) {
            if (this.pageOnlyViewFlag) return;

            var index = this.orginImages.indexOf(item);
            this.orginImages.splice(index, 1);
            this.imageList = this.orginImages;

            this.uploadedCount = this.getUploadCount();
        },
        zoomImage: function zoomImage() {
            this.showZoomImage = true;
        },
        closeZoomImage: function closeZoomImage() {
            this.showZoomImage = false;
        },
        addImage: function addImage(uploadReturnData) {

            for (var i in uploadReturnData) {
                this.orginImages.push({ src: uploadReturnData[i].URL, canDelete: true });
            }
            this.imageList = this.orginImages;
            this.uploadedCount = this.getUploadCount();
        },
        uploadImage: function uploadImage() {

            if (this.pageOnlyViewFlag) return;

            this.uploadedCount = this.getUploadCount();
            var maxCount = 9 - this.uploadedCount;

            var self = this;
            weex.requireModule('hkImage') && weex.requireModule('hkImage').camera({

                maxCount: maxCount,
                allowCrop: false,
                allowUpload: true,
                allowSave: false

            }, function (res) {
                if (res.code == 0 && res.payload) {
                    var uploadReturnData = res.payload;
                    self.addImage(uploadReturnData);
                } else {
                    console.log('hkImage插件调用失败:');
                }
            });
        },
        getUploadCount: function getUploadCount() {
            var count = 0;
            for (var index in this.orginImages) {
                if (this.orginImages[index].canDelete) {
                    count += 1;
                }
            }
            return count;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return ((_vm.checkType == 1 || _vm.checkType == 2) && _vm.checkedNotPassFlag) ? _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["image-controler"]
  }, [_c('div', {
    staticClass: ["image-container"]
  }, [_vm._l((_vm.imageList), function(item, index) {
    return _c('div', {
      staticClass: ["images"]
    }, [_c('image', {
      staticClass: ["image-icon"],
      attrs: {
        "src": item.src,
        "placeholder": "local:///loading_placeholder.png"
      },
      on: {
        "click": _vm.zoomImage
      }
    }), (item.canDelete && !_vm.pageOnlyViewFlag) ? _c('image', {
      staticClass: ["delete-icon"],
      attrs: {
        "src": _vm.deleteIcon
      },
      on: {
        "click": function($event) {
          _vm.deleteImage(item)
        }
      }
    }) : _vm._e()])
  }), (_vm.uploadedCount < 9 && !_vm.pageOnlyViewFlag) ? _c('image', {
    staticClass: ["add-icon"],
    attrs: {
      "src": _vm.addIcon,
      "resize": "contain"
    },
    on: {
      "click": _vm.uploadImage
    }
  }) : _vm._e()], 2)]), _c('wxc-lightbox', {
    ref: "wxc-lightbox",
    attrs: {
      "height": "800",
      "show": _vm.showZoomImage,
      "imageList": _vm.imageList,
      "indicatorColor": _vm.indicatorStyle
    },
    on: {
      "wxcLightboxOverlayClicked": _vm.closeZoomImage
    }
  })], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HKInspecting = __webpack_require__(278);

var _HKInspecting2 = _interopRequireDefault(_HKInspecting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HKInspecting2.default.el = '#root';
new Vue(_HKInspecting2.default);

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(279)
)

/* script */
__vue_exports__ = __webpack_require__(280)

/* template */
var __vue_template__ = __webpack_require__(281)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Inspect/HKInspecting.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6bc0ead1"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = {
  "ws-detail-container": {
    "backgroundColor": "#F9F9F9"
  },
  "bottom-margin": {
    "paddingBottom": "120"
  },
  "reason-container": {
    "backgroundColor": "#FFFFFF",
    "marginBottom": "24",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "height": "134",
    "justifyContent": "center"
  },
  "reason-title": {
    "fontSize": "30",
    "color": "#333333"
  },
  "reason-detail": {
    "fontSize": "28",
    "color": "#999999",
    "marginTop": "12"
  },
  "detail-info-container": {
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "backgroundColor": "#FFFFFF"
  },
  "detail-row1": {
    "height": "38",
    "marginTop": "24",
    "marginRight": 0,
    "marginBottom": "24",
    "marginLeft": 0
  },
  "detail-row3": {
    "height": "38",
    "marginTop": "24",
    "marginRight": 0,
    "marginBottom": "24",
    "marginLeft": 0
  },
  "locate-icon": {
    "width": "22",
    "height": "28"
  },
  "arrow-icon": {
    "width": "20",
    "height": "20",
    "marginRight": "40"
  },
  "detail-info-address": {
    "fontSize": "28",
    "color": "#333333",
    "flex": 1,
    "marginLeft": "6",
    "width": "320",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "row": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "detail-info-normal-txt": {
    "color": "#999999",
    "fontSize": "26"
  },
  "detail-vno": {
    "color": "#333333",
    "fontSize": "38"
  },
  "detail-model": {
    "color": "#666666",
    "fontSize": "28",
    "flex": 1,
    "marginLeft": "20"
  },
  "detail-state": {
    "color": "#FFFFFF",
    "fontSize": "30",
    "backgroundColor": "#5ABECF",
    "borderStyle": "solid",
    "borderRadius": "6",
    "textAlign": "center",
    "height": "70",
    "lineHeight": "70",
    "width": "200"
  },
  "detail-reason": {
    "color": "#FD7474",
    "fontSize": "30"
  },
  "detail-state-disabled": {
    "color": "#FFFFFF",
    "backgroundColor": "#DCDCDC",
    "fontSize": "30",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "borderRadius": "6",
    "textAlign": "center",
    "height": "70",
    "lineHeight": "70",
    "width": "200"
  },
  "func-check-container": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": 0,
    "paddingRight": "24",
    "paddingBottom": 0,
    "paddingLeft": "24"
  },
  "detail-info-mile": {
    "paddingTop": "20",
    "paddingRight": "10",
    "paddingBottom": "20",
    "paddingLeft": "10",
    "width": "702",
    "borderTopWidth": "2",
    "borderTopStyle": "solid",
    "borderTopColor": "#F1EFEF"
  },
  "mile-text": {
    "fontSize": "30",
    "color": "#333333"
  },
  "mile-input": {
    "fontSize": "30",
    "color": "#333333",
    "flex": 1,
    "textAlign": "right",
    "marginRight": "10"
  },
  "incar-check-container": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": 0,
    "paddingRight": "24",
    "paddingBottom": 0,
    "paddingLeft": "24"
  },
  "outcar-check-container": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": 0,
    "paddingRight": "24",
    "paddingBottom": 0,
    "paddingLeft": "24"
  },
  "check-row": {
    "backgroundColor": "#FFFFFF",
    "height": "90",
    "lineHeight": "90",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "marginTop": "24"
  },
  "check-row-title": {
    "height": "100",
    "lineHeight": "100",
    "fontSize": "30",
    "color": "#333333",
    "marginLeft": "24"
  },
  "description-txt": {
    "width": "750",
    "color": "#666666",
    "fontSize": "30",
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "24",
    "paddingBottom": "24",
    "marginTop": "24",
    "textAlign": "left",
    "backgroundColor": "#FFFFFF"
  },
  "description-txt-auto": {
    "width": "750",
    "color": "#666666",
    "fontSize": "30",
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "24",
    "paddingBottom": "24",
    "marginTop": "24",
    "textAlign": "left",
    "backgroundColor": "#FFFFFF"
  },
  "workflow-container": {
    "backgroundColor": "#FFFFFF",
    "marginTop": "24"
  },
  "workflow-container-margin-bottom": {
    "marginBottom": "40"
  },
  "workflow": {
    "flexDirection": "row",
    "marginTop": "30",
    "marginRight": "74",
    "marginBottom": "40",
    "marginLeft": "74",
    "flexWrap": "wrap"
  },
  "workflow-imaga": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "workflow-circle-highlight": {
    "backgroundColor": "#44B393"
  },
  "line-white": {
    "backgroundColor": "#FFFFFF"
  },
  "workflow-line-up": {
    "height": "20",
    "width": "2",
    "backgroundColor": "#E2E2E2"
  },
  "workflow-line-dn": {
    "height": "100",
    "width": "2",
    "backgroundColor": "#E2E2E2"
  },
  "workflow-circle": {
    "width": "10",
    "height": "10",
    "borderRadius": "10",
    "backgroundColor": "#D8D8D8"
  },
  "workflow-txt": {
    "flexDirection": "column",
    "alignItems": "flex-start",
    "marginLeft": "22",
    "width": "400"
  },
  "workflow-txt-title": {
    "color": "#999999",
    "fontSize": "30"
  },
  "workflow-txt-highlight": {
    "color": "#333333"
  },
  "workflow-txt-node": {
    "color": "#999999",
    "fontSize": "26"
  },
  "workflow-time": {
    "flexDirection": "column",
    "alignItems": "flex-start",
    "marginLeft": "22"
  },
  "workflow-txt-time": {
    "fontSize": "26",
    "color": "#BFBFBF",
    "marginTop": "21",
    "textAlign": "right"
  },
  "bottom-opts": {
    "position": "fixed",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#F1EFEF",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "justifyContent": "space-around"
  },
  "btns": {
    "width": "210",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#5ABECF",
    "borderRadius": "6",
    "textAlign": "center",
    "height": "90",
    "lineHeight": "90",
    "color": "#5ABECF",
    "fontSize": "30",
    "marginTop": "20",
    "marginRight": 0,
    "marginBottom": "20",
    "marginLeft": 0
  },
  "btn-cancle-disabled": {
    "color": "#DCDCDC",
    "backgroundColor": "#FFFFFF",
    "fontSize": "30",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "borderRadius": "6"
  },
  "btn-submit-disabled": {
    "color": "#FFFFFF",
    "backgroundColor": "#DCDCDC",
    "fontSize": "30",
    "borderRadius": "6",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC"
  },
  "btn-submit": {
    "color": "#FFFFFF",
    "backgroundColor": "#5ABECF",
    "fontSize": "30",
    "borderStyle": "solid",
    "borderRadius": "6"
  }
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inspectCheckItem = __webpack_require__(158);

var _inspectCheckItem2 = _interopRequireDefault(_inspectCheckItem);

var _hkDialog = __webpack_require__(30);

var _hkDialog2 = _interopRequireDefault(_hkDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "worksheet-detail",
    components: { InspectCheckItem: _inspectCheckItem2.default, HkDialog: _hkDialog2.default },
    data: function data() {
        return {
            detail: {
                //是否可以放弃，0：可以，1：不可以
                quitFlag: 1,
                //1-查看自己 0-查看别人
                selfFlag: 1,
                //createFlag 1-客服创建 0-自己创建
                createType: 1,
                //巡检状态，(1：未开始，2：未完成)，4：已完成，8：已放弃
                inspectionStatus: 1,
                //是否发现问题，0:否，1：是 ,
                faultFlag: 0,
                //取消或放弃巡检原因
                quitReason: '',
                //工单编号
                workOrderNo: '',
                //本次巡检时间？
                inspectionTime: '',
                //车牌号
                vno: '',
                //车辆型号
                vehicleModelName: '',
                //定位
                rentalShopName: '',
                //上次巡检时间
                lastInspectionTime: '',
                //里程
                mileage: '',
                //续航里程
                rechargeMileage: '',
                ossPrefix: '',
                //fault 0-正常 1-异常 {optionType:0,name:'',isOptionClicked:0,fault:''}
                functionCheckRecord: [],
                //{name:'', fault:'', imgUrls:[], historyPics:[], pics:[], uploadImg:''}
                insideCheckRecord: [],
                outsideCheckRecord: [],
                problemDescription: '',
                //{name:"",operateUserName:'',operateTime:'', highlight:0}
                workFlowList: [],
                workOrderStatus: 1,
                cancelFlag: 1,
                cancelReason: ''
            },
            result: '', //巡检结果
            //当前是否选择过功能检查/车内检查/车外检查项，至少选择一项即置true
            //pageOnlyViewFlag:true,//true 页面仅可查看不可操作；false 页面是可操作状态
            isCheckOptionsClicked: false,
            //取消/放弃巡检是否禁用
            isCancleDisable: true,
            cancleOrQuilt: '',
            funcCheckFlag: true,
            incarCheckFlag: true,
            outcarCheckFlag: true,
            locateIcon: "local:///locate_icon.png",
            arrowUp: "local:///arrow_up.png",
            arrowDown: "local:///arrow_down.png",
            dialogTitle: "确认取消该工单吗？请填写取消原因",
            dialogConfirmTitle: "确认取消",
            dialogPlaceholder: "请输入取消原因",
            showDialogFlag: false
        };
    },

    computed: {
        //true 页面仅可查看不可操作；false 页面是可操作状态
        pageOnlyViewFlag: function pageOnlyViewFlag() {
            if ((this.detail.workOrderStatus == 1 || this.detail.workOrderStatus == 2 || this.detail.workOrderStatus == 4) && this.detail.selfFlag == 1) {
                return false;
            } else {
                return true;
            }
        },

        //是否展开true-不展开 false-展开
        canclePageViewFlag: function canclePageViewFlag() {
            if (this.detail.inspectionStatus == 8) return true;
            if (this.detail.workOrderStatus == 1 || this.detail.workOrderStatus == 2 || this.detail.workOrderStatus == 4 || this.detail.workOrderStatus == 8) {
                return false;
            } else {
                return true;
            }
        },

        ////提交是否禁用
        isSubmitDisable: function isSubmitDisable() {
            if (this.detail.mileage || this.detail.rechargeMileage || this.detail.problemDescription || this.isCheckOptionsClicked) {
                return false;
            } else {
                return true;
            }
        }
    },
    created: function created() {
        var self = this;
        weex.requireModule('hkInspect') && weex.requireModule('hkInspect').getWorksheetDetail(null, function (response) {
            if (response.code === 0) {

                response.payload.workFlowList ? response.payload.workFlowList.reverse() : response.payload.workFlowList;

                for (var i in response.payload.functionCheckRecord) {
                    response.payload.functionCheckRecord[i].isOptionClicked = false;
                }

                for (var _i in response.payload.workFlowList) {
                    response.payload.workFlowList[_i].highlight = _i == 0 ? true : false;
                }
                self.detail = response.payload;

                var insideArray = self.detail.insideCheckRecord;
                for (var _i2 in insideArray) {
                    self.detail.insideCheckRecord[_i2].imgUrls = [];
                    for (var j in insideArray[_i2].historyPics) {
                        var item = {
                            src: insideArray[_i2].historyPics[j],
                            canDelete: false
                        };
                        self.detail.insideCheckRecord[_i2].imgUrls.push(item);
                    }
                    for (var _j in insideArray[_i2].pics) {
                        var _item = {
                            src: insideArray[_i2].pics[_j],
                            canDelete: true
                        };
                        self.detail.insideCheckRecord[_i2].imgUrls.push(_item);
                    }
                }

                var outsideArray = self.detail.outsideCheckRecord;
                for (var _i3 in outsideArray) {
                    self.detail.outsideCheckRecord[_i3].imgUrls = new Array();
                    for (var _j2 in outsideArray[_i3].historyPics) {
                        var _item2 = {
                            src: outsideArray[_i3].historyPics[_j2],
                            canDelete: false
                        };
                        self.detail.outsideCheckRecord[_i3].imgUrls.push(_item2);
                    }
                    for (var _j3 in outsideArray[_i3].pics) {
                        var _item3 = {
                            src: outsideArray[_i3].pics[_j3],
                            canDelete: true
                        };
                        self.detail.outsideCheckRecord[_i3].imgUrls.push(_item3);
                    }
                }

                self.saveEffectiveDataBefore();

                if (self.detail.selfFlag == 1) {
                    if (self.detail.createType == 1) {
                        self.isCancleDisable = self.detail.quitFlag == 1;
                        self.cancleOrQuilt = "放弃巡检";
                        self.dialogTitle = "确认放弃巡检工单吗？请填写原因";
                        self.dialogConfirmTitle = "确认放弃";
                        self.dialogPlaceholder = "请输入放弃原因";
                    } else {
                        self.isCancleDisable = self.detail.cancelFlag == 1;
                        self.cancleOrQuilt = "取消";
                        self.dialogTitle = "确认取消该工单吗？请填写取消原因";
                        self.dialogConfirmTitle = "确认取消";
                        self.dialogPlaceholder = "请输入取消原因";
                    }
                }
                self.detail.rentalShopName = self.detail.rentalShopName.substr(0, 8) + '...';
                self.result = self.detail.faultFlag == 1 ? "巡检不合格" : '';
            } else {
                console.log('hkInspect 插件 getWorksheetDetail 调用失败 ');
            }
        });
    },

    methods: {
        saveEffectiveDataBefore: function saveEffectiveDataBefore() {
            var tmpList = this.detail.functionCheckRecord.concat(this.detail.insideCheckRecord).concat(this.detail.outsideCheckRecord);
            for (var i in tmpList) {
                if (tmpList[i].fault == 0 || tmpList[i].fault == 1) {
                    this.isCheckOptionsClicked = true;
                    break;
                }
            }
        },
        scanAndCharge: function scanAndCharge() {
            if (this.pageOnlyViewFlag) {
                return;
            }
            weex.requireModule('hkInspect') && weex.requireModule('hkInspect').scanAndCharge(null, function (response) {});
        },
        funcCheckToggle: function funcCheckToggle() {
            this.funcCheckFlag = !this.funcCheckFlag;
        },
        incarCheckToggle: function incarCheckToggle() {
            this.incarCheckFlag = !this.incarCheckFlag;
        },
        outcarCheckToggle: function outcarCheckToggle() {
            this.outcarCheckFlag = !this.outcarCheckFlag;
        },
        giveupOrCancle: function giveupOrCancle() {
            if (this.isCancleDisable) return;
            this.showDialogFlag = true;
        },
        excuteCancleOrGiveup: function excuteCancleOrGiveup(reason) {
            this.showDialogFlag = false;
            if (this.detail.createType == 1) {
                weex.requireModule('hkInspect') && weex.requireModule('hkInspect').excuteGiveUpInspect(reason, function (response) {});
            } else {
                weex.requireModule('hkInspect') && weex.requireModule('hkInspect').excuteCancleInspect(reason, function (response) {});
            }
        },
        hideDialog: function hideDialog() {
            this.showDialogFlag = false;
        },
        submit: function submit() {
            if (this.isSubmitDisable) return;
            this.transformPics();
            var self = this;
            weex.requireModule('hkInspect') && weex.requireModule('hkInspect').submitWorksheetDetail(self.detail, function (response) {});
        },
        save: function save() {
            this.transformPics();
            var self = this;
            weex.requireModule('hkInspect') && weex.requireModule('hkInspect').saveWorkSheetDetail(self.detail, function (response) {
                self.isCancleDisable = true;
            });
        },
        inspectOptionChecked: function inspectOptionChecked(data) {
            if (data.type == 0) {
                weex.requireModule('hkInspect') && weex.requireModule('hkInspect').unlockDoor(null, function (response) {});
            } else if (data.type == 1) {
                weex.requireModule('hkInspect') && weex.requireModule('hkInspect').lockDoor(null, function (response) {});
            } else if (data.type == 2) {
                weex.requireModule('hkInspect') && weex.requireModule('hkInspect').unlockEngine(null, function (response) {});
            } else if (data.type == 3) {
                weex.requireModule('hkInspect') && weex.requireModule('hkInspect').lockEngine(null, function (response) {});
            }
            this.detail.functionCheckRecord[data.index].isOptionClicked = 1;
        },
        checkPassClicked: function checkPassClicked(data) {
            this.isCheckOptionsClicked = true;
            var optionNama = [];
            if (data.checkType == 0) {
                optionNama = this.detail.functionCheckRecord;
            } else if (data.checkType == 1) {
                optionNama = this.detail.insideCheckRecord;
            } else {
                optionNama = this.detail.outsideCheckRecord;
            }
            if (data.state == 0) {
                optionNama[data.index].fault = 0;
            } else if (data.state == 1) {
                optionNama[data.index].fault = 1;
            }
        },
        transformPics: function transformPics() {
            for (var i in this.detail.insideCheckRecord) {
                var insidePics = [];
                var insideHisPics = [];
                //isUploaded 为true说明本次有新拍的照片，则保存和提交操作只上传本次新上传的图片
                //isUploaded 为true说明本次没有新拍的照片，如有历史图片则将历史图片上传作为本次图片
                var isUploaded = false;

                for (var j in this.detail.insideCheckRecord[i].imgUrls) {
                    if (this.detail.insideCheckRecord[i].imgUrls[j].canDelete) {
                        isUploaded = true;
                        insidePics.push(this.detail.insideCheckRecord[i].imgUrls[j].src);
                    } else {
                        insideHisPics.push(this.detail.insideCheckRecord[i].imgUrls[j].src);
                    }
                }

                if (isUploaded) {
                    this.detail.insideCheckRecord[i].uploadImg = insidePics.join(',').toString();
                } else {
                    this.detail.insideCheckRecord[i].uploadImg = insideHisPics.join(',').toString();
                }
            }

            for (var _i4 in this.detail.outsideCheckRecord) {
                var outsidePics = [];
                var outsideHisPics = [];
                var isUploaded = false;

                for (var _j4 in this.detail.outsideCheckRecord[_i4].imgUrls) {
                    if (this.detail.outsideCheckRecord[_i4].imgUrls[_j4].canDelete) {
                        isUploaded = true;
                        outsidePics.push(this.detail.outsideCheckRecord[_i4].imgUrls[_j4].src);
                    } else {
                        outsideHisPics.push(this.detail.outsideCheckRecord[_i4].imgUrls[_j4].src);
                    }
                }

                if (isUploaded) {
                    this.detail.outsideCheckRecord[_i4].uploadImg = outsidePics.join(',').toString();
                } else {
                    this.detail.outsideCheckRecord[_i4].uploadImg = outsideHisPics.join(',').toString();
                }
            }
        },
        transformDate: function transformDate(time) {
            if (!time) return '';
            var date = new Date(time);
            return date.getMonth() + 1 + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["ws-detail-container"],
    class: [!_vm.pageOnlyViewFlag ? 'bottom-margin' : '']
  }, [(_vm.detail.workOrderStatus == 64) ? _c('div', {
    staticClass: ["reason-container"]
  }, [_c('text', {
    staticClass: ["reason-title"]
  }, [_vm._v("已取消")]), _c('text', {
    staticClass: ["reason-detail"]
  }, [_vm._v("取消原因：" + _vm._s(_vm.detail.cancelReason))])]) : _vm._e(), (_vm.detail.workOrderStatus == 8 && _vm.detail.inspectionStatus == 8) ? _c('div', {
    staticClass: ["reason-container"]
  }, [_c('text', {
    staticClass: ["reason-title"]
  }, [_vm._v("放弃巡检")]), _c('text', {
    staticClass: ["reason-detail"]
  }, [_vm._v("放弃巡检原因：" + _vm._s(_vm.detail.quitReason))])]) : _vm._e(), _c('div', {
    staticClass: ["detail-info-container"]
  }, [_c('div', {
    staticClass: ["row", "detail-row1"]
  }, [_c('text', {
    staticClass: ["detail-info-normal-txt"]
  }, [_vm._v("工单编号：" + _vm._s(_vm.detail.workOrderNo))]), _c('text', {
    staticClass: ["detail-info-normal-txt"]
  }, [_vm._v(_vm._s(_vm.transformDate(_vm.detail.createTime)))])]), _c('div', {
    staticClass: ["row", "detail-row2"]
  }, [_c('text', {
    staticClass: ["detail-vno"]
  }, [_vm._v(_vm._s(_vm.detail.vno))]), _c('text', {
    staticClass: ["detail-model"]
  }, [_vm._v(_vm._s(_vm.detail.vehicleModelName))]), (_vm.detail.workOrderStatus == 8 && _vm.detail.inspectionStatus == 4 && _vm.detail.faultFlag == 1) ? _c('text', {
    staticClass: ["detail-reason"]
  }, [_vm._v(_vm._s(_vm.result))]) : (_vm.detail.selfFlag == 1 && (_vm.detail.workOrderStatus == 1 || _vm.detail.workOrderStatus == 2 || _vm.detail.workOrderStatus == 4) && (_vm.detail.inspectionStatus == 1 || _vm.detail.inspectionStatus == 2)) ? _c('text', {
    staticClass: ["detail-state"],
    on: {
      "click": _vm.scanAndCharge
    }
  }, [_vm._v("扫码充电")]) : _c('text', {
    staticClass: ["detail-state", "detail-state-disabled"],
    on: {
      "click": _vm.scanAndCharge
    }
  }, [_vm._v("扫码充电")])]), _c('div', {
    staticClass: ["row", "detail-row3"]
  }, [_c('image', {
    staticClass: ["locate-icon"],
    attrs: {
      "src": _vm.locateIcon,
      "resize": "contain"
    }
  }), _c('text', {
    staticClass: ["detail-info-address"]
  }, [_vm._v(_vm._s(_vm.detail.rentalShopName))]), _c('text', {
    staticClass: ["detail-info-normal-txt"]
  }, [_vm._v("上次巡检时间：" + _vm._s(_vm.transformDate(_vm.detail.lastInspectionTime)))])])]), _c('div', {
    staticClass: ["check-row"],
    on: {
      "click": _vm.funcCheckToggle
    }
  }, [_c('text', {
    staticClass: ["check-row-title"]
  }, [_vm._v("功能检查")]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": !_vm.canclePageViewFlag && _vm.funcCheckFlag ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (!_vm.canclePageViewFlag) ? _c('div', {
    staticClass: ["func-check-container"]
  }, [(_vm.funcCheckFlag) ? _c('div', [_vm._l((_vm.detail.functionCheckRecord), function(item, index) {
    return _c('div', {
      staticClass: ["func-check-rows"]
    }, [_c('inspect-check-item', {
      attrs: {
        "optionType": index,
        "name": item.name,
        "indexTitle": index + 1 + '.',
        "isOptionClicked": item.isOptionClicked,
        "fault": item.fault,
        "checkType": 0,
        "itemIndex": index,
        "pageOnlyViewFlag": _vm.pageOnlyViewFlag
      },
      on: {
        "inspectItemChecked": _vm.inspectOptionChecked,
        "checkPassClicked": _vm.checkPassClicked
      }
    })], 1)
  }), _c('div', {
    staticClass: ["row", "detail-info-mile"]
  }, [_c('text', {
    staticClass: ["mile-text"]
  }, [_vm._v("5.    里程：")]), _c('input', {
    staticClass: ["mile-input"],
    attrs: {
      "placeholder": "请输入里程",
      "returnKeyType": "done",
      "disabled": _vm.pageOnlyViewFlag,
      "type": "number",
      "value": (_vm.detail.mileage)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.detail, "mileage", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["mile-text"]
  }, [_vm._v("km")])]), _c('div', {
    staticClass: ["row", "detail-info-mile"]
  }, [_c('text', {
    staticClass: ["mile-text"]
  }, [_vm._v("6.    续航里程：")]), _c('input', {
    staticClass: ["mile-input"],
    attrs: {
      "placeholder": "请输入续航里程",
      "returnKeyType": "done",
      "disabled": _vm.pageOnlyViewFlag,
      "type": "number",
      "value": (_vm.detail.rechargeMileage)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.detail, "rechargeMileage", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["mile-text"]
  }, [_vm._v("km")])])], 2) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: ["check-row"],
    on: {
      "click": _vm.incarCheckToggle
    }
  }, [_c('text', {
    staticClass: ["check-row-title"]
  }, [_vm._v("车内检查")]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": !_vm.canclePageViewFlag && _vm.incarCheckFlag ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (!_vm.canclePageViewFlag) ? _c('div', {
    staticClass: ["incar-check-container"]
  }, [(_vm.incarCheckFlag) ? _c('div', _vm._l((_vm.detail.insideCheckRecord), function(item, index) {
    return _c('div', {
      staticClass: ["incar-check-rows"]
    }, [_c('inspect-check-item', {
      attrs: {
        "optionType": index,
        "nameExist": false,
        "indexTitle": index + 1 + '.' + item.name,
        "fault": item.fault,
        "itemIndex": index,
        "pageOnlyViewFlag": _vm.pageOnlyViewFlag,
        "checkType": 1,
        "imgUrls": item.imgUrls,
        "name": item.name
      },
      on: {
        "checkPassClicked": _vm.checkPassClicked
      }
    })], 1)
  })) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: ["check-row"],
    on: {
      "click": _vm.outcarCheckToggle
    }
  }, [_c('text', {
    staticClass: ["check-row-title"]
  }, [_vm._v("车外检查")]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": !_vm.canclePageViewFlag && _vm.outcarCheckFlag ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (!_vm.canclePageViewFlag) ? _c('div', {
    staticClass: ["outcar-check-container"]
  }, [(_vm.outcarCheckFlag) ? _c('div', _vm._l((_vm.detail.outsideCheckRecord), function(item, index) {
    return _c('div', {
      staticClass: ["outcar-check-rows"]
    }, [_c('inspect-check-item', {
      attrs: {
        "optionType": index,
        "nameExist": false,
        "indexTitle": index + 1 + '.' + item.name,
        "fault": item.fault,
        "itemIndex": index,
        "pageOnlyViewFlag": _vm.pageOnlyViewFlag,
        "checkType": 2,
        "imgUrls": item.imgUrls,
        "name": item.name
      },
      on: {
        "checkPassClicked": _vm.checkPassClicked
      }
    })], 1)
  })) : _vm._e()]) : _vm._e(), (!_vm.pageOnlyViewFlag) ? _c('textarea', {
    staticClass: ["description-txt"],
    attrs: {
      "rows": "3",
      "maxlength": "200",
      "autofocus": "false",
      "type": "text",
      "returnKeyType": "done",
      "placeholder": "请输入问题描述",
      "value": (_vm.detail.problemDescription)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.detail, "problemDescription", $event.target.attr.value)
      }
    }
  }) : _vm._e(), (_vm.pageOnlyViewFlag && _vm.detail.problemDescription) ? _c('text', {
    staticClass: ["description-txt-auto"]
  }, [_vm._v(_vm._s(_vm.detail.problemDescription))]) : _vm._e(), _c('div', {
    staticClass: ["workflow-container"],
    class: [_vm.pageOnlyViewFlag ? '' : 'workflow-container-margin-bottom']
  }, [_vm._m(0), _c('div', {
    staticClass: ["workflow"]
  }, _vm._l((_vm.detail.workFlowList), function(item, index) {
    return _c('div', {
      staticStyle: {
        flexDirection: "row",
        position: "relative"
      }
    }, [_c('div', {
      staticClass: ["workflow-imaga"]
    }, [_c('div', {
      staticClass: ["workflow-line-up"],
      class: [index == 0 ? 'line-white' : '']
    }), _c('div', {
      staticClass: ["workflow-circle"],
      class: [item.highlight == 1 ? 'workflow-circle-highlight' : '']
    }), (index < _vm.detail.workFlowList.length - 1) ? _c('div', {
      staticClass: ["workflow-line-dn"]
    }) : _vm._e()]), _c('div', {
      staticClass: ["workflow-txt"]
    }, [(item.operateUserName) ? _c('text', {
      staticClass: ["workflow-txt-title"],
      class: [item.highlight == 1 ? 'workflow-txt-highlight' : '']
    }, [_vm._v(_vm._s(item.operateUserName))]) : _vm._e(), (item.name) ? _c('text', {
      staticClass: ["workflow-txt-node"],
      class: [item.highlight == 1 ? 'workflow-txt-highlight' : '']
    }, [_vm._v(_vm._s(item.name))]) : _vm._e()]), _c('div', {
      staticClass: ["workflow-time"]
    }, [_c('text', {
      staticClass: ["workflow-txt-time"]
    }, [_vm._v(_vm._s(_vm.transformDate(item.operateTime)))])])])
  }))])]), (!_vm.pageOnlyViewFlag) ? _c('div', {
    staticClass: ["bottom-opts"]
  }, [_c('text', {
    staticClass: ["btns", "btn-left"],
    class: [_vm.isCancleDisable ? 'btn-cancle-disabled' : ''],
    on: {
      "click": _vm.giveupOrCancle
    }
  }, [_vm._v(_vm._s(_vm.cancleOrQuilt))]), _c('text', {
    staticClass: ["btns"],
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存")]), _c('text', {
    staticClass: ["btns", "btn-right"],
    class: [_vm.isSubmitDisable ? 'btn-submit-disabled' : 'btn-submit'],
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交工单")])]) : _vm._e(), _c('hk-dialog', {
    attrs: {
      "dialogType": "hkHouseKeeper",
      "title": _vm.dialogTitle,
      "placeholder": _vm.dialogPlaceholder,
      "show": _vm.showDialogFlag,
      "upBtnText": _vm.dialogConfirmTitle,
      "downBtnText": "我再想想"
    },
    on: {
      "hkDialogUpBtnClicked": _vm.excuteCancleOrGiveup,
      "hkDialogDownBtnClicked": _vm.hideDialog
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["check-row"]
  }, [_c('text', {
    staticClass: ["check-row-title"]
  }, [_vm._v("工作流程")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(33)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/components/hk-dialog.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f0734554"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "rgba(128,128,128,0.7)",
    "position": "fixed",
    "width": "750",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "dialog": {
    "backgroundColor": "#ffffff",
    "width": "560",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderRadius": "10"
  },
  "keeper-dialog": {
    "backgroundColor": "#ffffff",
    "width": "670",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderRadius": "10",
    "flexDirection": "column",
    "height": "474",
    "paddingTop": "50",
    "paddingRight": "68",
    "paddingBottom": "44",
    "paddingLeft": "68"
  },
  "oprate-btns": {
    "flexDirection": "row",
    "alignContent": "center",
    "alignItems": "center",
    "borderTopWidth": "2",
    "borderTopStyle": "solid",
    "borderTopColor": "#DDDDDD",
    "justifyContent": "space-around"
  },
  "cancelBtn": {
    "flex": 1,
    "borderRightWidth": "2",
    "borderRightStyle": "solid",
    "borderRightColor": "#DDDDDD",
    "height": "100",
    "lineHeight": "100",
    "justifyContent": "center"
  },
  "cancelBtnDefaultStyle": {
    "backgroundColor": "#ffffff",
    "color": "#B1B1B1",
    "textAlign": "center",
    "fontSize": "32"
  },
  "confirmBtn": {
    "flex": 1,
    "height": "100",
    "lineHeight": "100",
    "justifyContent": "center"
  },
  "confirmBtnDefaultStyle": {
    "backgroundColor": "#ffffff",
    "color": "#25BB82",
    "fontSize": "32",
    "textAlign": "center"
  },
  "titleStyle": {
    "backgroundColor": "#ffffff",
    "color": "#333333",
    "height": "100",
    "lineHeight": "100",
    "fontSize": "32",
    "textAlign": "center"
  },
  "contentStyle": {
    "backgroundColor": "#ffffff",
    "color": "#333333",
    "fontSize": "28",
    "paddingLeft": "34",
    "paddingRight": "34",
    "paddingTop": "20",
    "paddingBottom": "40",
    "fontWeight": "bold"
  },
  "keeper-title": {
    "color": "#333333",
    "fontSize": "28"
  },
  "keeper-input": {
    "color": "#333333",
    "fontSize": "28",
    "height": "80",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#EFEEEE",
    "borderRadius": "10",
    "marginTop": "40",
    "marginRight": 0,
    "marginBottom": "40",
    "marginLeft": 0,
    "paddingLeft": "20"
  },
  "up-btn-active": {
    "color": "#FFFFFF",
    "fontSize": "30",
    "backgroundColor": "#5ABECF",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#5ABECF",
    "borderRadius": "10",
    "height": "80",
    "marginBottom": "20",
    "lineHeight": "80",
    "textAlign": "center"
  },
  "up-btn-normal": {
    "color": "#FFFFFF",
    "fontSize": "30",
    "backgroundColor": "#DCDCDC",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "borderRadius": "10",
    "height": "80",
    "lineHeight": "80",
    "textAlign": "center",
    "marginBottom": "20"
  },
  "down-btn": {
    "color": "#5ABECF",
    "fontSize": "30",
    "backgroundColor": "#FFFFFF",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#5ABECF",
    "borderRadius": "10",
    "height": "80",
    "marginBottom": "40",
    "lineHeight": "80",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "hk-dialog",
    props: {
        show: {
            type: Boolean,
            default: false
        },
        dialogType: {
            type: String,
            default: 'hkGo'
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        upBtnText: {
            type: String,
            default: '确认取消'
        },
        downBtnText: {
            type: String,
            default: '我再想想'
        },
        title: {
            type: String,
            default: ''
        },
        noTitle: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        },
        noContent: {
            type: Boolean,
            default: false
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        confirmText: {
            type: String,
            default: '确定'
        },
        single: {
            type: Boolean,
            default: false
        },
        cancelBtnStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        confirmBtnStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        titleStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        contentStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    created: function created() {},
    mounted: function mounted() {},
    destroyed: function destroyed() {},
    data: function data() {
        return {
            keeperDescription: ""
        };
    },

    methods: {
        lfBtnClicked: function lfBtnClicked() {
            this.$emit('hkDialogCancelBtnClicked', {});
        },
        rtBtnClicked: function rtBtnClicked() {
            this.$emit('hkDialogConfirmBtnClicked', {});
        },
        upBtnClicked: function upBtnClicked() {
            if (this.keeperDescription.length == 0) {
                return;
            }
            this.$emit('hkDialogUpBtnClicked', this.keeperDescription);
            this.keeperDescription = "";
        },
        downBtnClicked: function downBtnClicked() {
            this.keeperDescription = "";
            this.$emit('hkDialogDownBtnClicked', {});
        },
        oninput: function oninput(e) {
            this.keeperDescription = e.value.replace(/^\s*/, '');
        }
    }

};

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.dialogType == 'hkGo') ? _c('div', {
    staticClass: ["dialog"]
  }, [(!_vm.noTitle) ? _c('text', {
    staticClass: ["titleStyle"],
    style: _vm.titleStyle
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (!_vm.noContent) ? _c('text', {
    staticClass: ["contentStyle"],
    style: _vm.contentStyle
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e(), _c('div', {
    staticClass: ["oprate-btns"]
  }, [(!_vm.single) ? _c('div', {
    staticClass: ["cancelBtn"],
    on: {
      "click": _vm.lfBtnClicked
    }
  }, [_c('text', {
    staticClass: ["cancelBtnDefaultStyle"],
    style: _vm.cancelBtnStyle
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["confirmBtn"],
    on: {
      "click": _vm.rtBtnClicked
    }
  }, [_c('text', {
    staticClass: ["confirmBtnDefaultStyle"],
    style: _vm.confirmBtnStyle
  }, [_vm._v(_vm._s(_vm.confirmText))])])])]) : _vm._e(), (_vm.dialogType == 'hkHouseKeeper') ? _c('div', {
    staticClass: ["keeper-dialog"]
  }, [_c('text', {
    staticClass: ["keeper-title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('input', {
    staticClass: ["keeper-input"],
    attrs: {
      "returnKeyType": "done",
      "maxlength": "50",
      "placeholder": _vm.placeholder
    },
    on: {
      "input": _vm.oninput
    }
  }), _c('text', {
    class: [_vm.keeperDescription.length > 0 ? 'up-btn-active' : 'up-btn-normal'],
    on: {
      "click": _vm.upBtnClicked
    }
  }, [_vm._v(_vm._s(_vm.upBtnText))]), _c('text', {
    staticClass: ["down-btn"],
    on: {
      "click": _vm.downBtnClicked
    }
  }, [_vm._v(_vm._s(_vm.downBtnText))])]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(5);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/node_modules/weex-ui/packages/wxc-overlay/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-389bbc1c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });