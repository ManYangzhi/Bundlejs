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
/******/ 	return __webpack_require__(__webpack_require__.s = 286);
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

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(102)
)

/* script */
__vue_exports__ = __webpack_require__(103)

/* template */
var __vue_template__ = __webpack_require__(104)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Components/bottom.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-25e57f8f"
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

/***/ 102:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "paddingTop": "20",
    "paddingRight": "24",
    "paddingBottom": "20",
    "paddingLeft": "24",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#F9F9F9"
  },
  "txt-cancel-normal": {
    "width": "220",
    "height": "90",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "lineHeight": "90",
    "textAlign": "center",
    "borderRadius": "6",
    "color": "#5ABECF",
    "borderWidth": "2",
    "borderColor": "#5ABECF",
    "backgroundColor": "#FFFFFF"
  },
  "txt-cancel-disable": {
    "width": "220",
    "height": "90",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "lineHeight": "90",
    "textAlign": "center",
    "borderRadius": "6",
    "color": "#DCDCDC",
    "borderWidth": "2",
    "borderColor": "#DCDCDC",
    "backgroundColor": "#FFFFFF"
  },
  "txt-save-normal": {
    "width": "220",
    "height": "90",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "lineHeight": "90",
    "textAlign": "center",
    "borderRadius": "6",
    "color": "#5ABECF",
    "borderWidth": "2",
    "borderColor": "#5ABECF",
    "backgroundColor": "#FFFFFF"
  },
  "txt-save-disable": {
    "width": "220",
    "height": "90",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "lineHeight": "90",
    "textAlign": "center",
    "borderRadius": "6",
    "color": "#DCDCDC",
    "borderWidth": "2",
    "borderColor": "#DCDCDC",
    "backgroundColor": "#FFFFFF"
  },
  "txt-submit-normal": {
    "width": "220",
    "height": "90",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "lineHeight": "90",
    "textAlign": "center",
    "borderRadius": "6",
    "color": "#FFFFFF",
    "backgroundColor": "#5ABECF"
  },
  "txt-submit-disable": {
    "width": "220",
    "height": "90",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "lineHeight": "90",
    "textAlign": "center",
    "borderRadius": "6",
    "color": "#FFFFFF",
    "backgroundColor": "#DCDCDC"
  },
  "has-cancel-width": {
    "width": "339"
  }
}

/***/ }),

/***/ 103:
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

exports.default = {
	// isCancel		是否有取消按钮	 	0:没有 1:有
	// cancelFlag 	是否可以取消		0:可以 1:不可以 
	props: {
		hasCancel: {
			type: Boolean,
			default: false
		},
		cancelFlag: {
			type: Boolean,
			default: false
		}
	},
	data: function data() {
		return {};
	},

	methods: {
		cancelDidClick: function cancelDidClick() {
			if (this.cancelFlag == true) return;
			this.$emit('cancelWorksheet', null);
		},
		saveDidClick: function saveDidClick() {
			this.$emit('saveWorkSheet', null);
		},
		submitDidClick: function submitDidClick() {
			this.$emit('submitWorksheet', null);
		}
	}
};

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.hasCancel) ? _c('text', {
    class: [_vm.cancelFlag == true ? 'txt-cancel-disable' : 'txt-cancel-normal'],
    on: {
      "click": _vm.cancelDidClick
    }
  }, [_vm._v("取消")]) : _vm._e(), _c('text', {
    staticClass: ["txt-save-normal"],
    class: [_vm.hasCancel ? '' : 'has-cancel-width'],
    on: {
      "click": _vm.saveDidClick
    }
  }, [_vm._v("保存s")]), _c('text', {
    staticClass: ["txt-submit-normal"],
    class: [_vm.hasCancel ? '' : 'has-cancel-width'],
    on: {
      "click": _vm.submitDidClick
    }
  }, [_vm._v("提交工单")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(163)
)

/* script */
__vue_exports__ = __webpack_require__(164)

/* template */
var __vue_template__ = __webpack_require__(165)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Vehicle/block1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03987468"
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

/***/ 163:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#F9F9F9"
  },
  "bg": {
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "marginBottom": "12",
    "backgroundColor": "#FFFFFF"
  },
  "line": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0",
    "width": "750",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "border": {
    "width": "702",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "border-top": {
    "borderTopWidth": "2",
    "borderTopColor": "#F1EFEF"
  },
  "border-bottom": {
    "borderBottomWidth": "2",
    "borderBottomColor": "#F1EFEF"
  },
  "title-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "0",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-box-auto": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "title-txt": {
    "color": "#333333",
    "fontSize": "30"
  },
  "arrow-icon": {
    "width": "20",
    "height": "20"
  },
  "txt-left": {
    "color": "#666666",
    "fontSize": "30"
  },
  "txt-right": {
    "color": "#333333",
    "fontSize": "30"
  },
  "txt-right-auto": {
    "width": "480",
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "paddingBottom": "2"
  },
  "txt-textarea": {
    "width": "480",
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right"
  },
  "txt-holder": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10"
  },
  "txt-border-bg-green": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "0",
    "borderRadius": "10",
    "color": "#FFFFFF",
    "backgroundColor": "#44B393"
  },
  "txt-border-green": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#44B393",
    "borderColor": "#44B393"
  },
  "txt-border-gray": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#999999",
    "borderColor": "#999999"
  },
  "txt-border-light-gray": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#D8D8D8",
    "borderColor": "#D8D8D8"
  },
  "txt-border-holder": {
    "borderWidth": "0"
  },
  "txt-border-box": {
    "width": "286",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "cell-photo-box": {
    "paddingLeft": "0"
  },
  "cell-branch-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-branch-txt": {
    "marginRight": "10",
    "color": "#333333",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "right",
    "width": "450"
  },
  "cell-branch-txt-holder": {
    "marginRight": "10",
    "color": "#D1D1D1",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular"
  },
  "reason-box": {
    "flexDirection": "column",
    "paddingTop": "20",
    "paddingRight": "24",
    "paddingBottom": "20",
    "paddingLeft": "24",
    "marginBottom": "20",
    "backgroundColor": "#F9F9F9",
    "borderRadius": "6"
  },
  "reason-row1": {
    "fontSize": "28",
    "color": "#666666",
    "fontFamily": "PingFangSC-Regular"
  },
  "reason-row2": {
    "marginTop": "10",
    "fontSize": "26",
    "color": "#999999",
    "fontFamily": "PingFangSC-Regular"
  }
}

/***/ }),

/***/ 164:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: {
		//     power: '',        		剩余电量
		// 	mileage: '',         	可持续里程
		// 	powerStatus: '',        车辆电量状态，1：正常，2：低电量
		// 	vehicleStatus: ''    	车辆状态：1 维护，2 预约，4 行驶，8 泊位
		// 	maintainReason: ''		维护原因
		// 	maintainFlag: ''      	还车后维护开关,0:未开启,1:开启 
		// 	repairReason: ''		维修原因
		data: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	data: function data() {
		return {
			isExpandVehicleInfo: true,
			arrowIcon: "local:///arrow_light.png",
			arrowUp: "local:///arrow_up.png",
			arrowDown: "local:///arrow_down.png"
		};
	},
	created: function created() {},

	computed: {},
	methods: {
		getVehicleStatusString: function getVehicleStatusString() {
			if (this.data.vehicleStatus == 1) return "维护中";
			if (this.data.vehicleStatus == 2) return "预约";
			if (this.data.vehicleStatus == 4) return "行驶";
			if (this.data.vehicleStatus == 8) return "泊位中";
			return "";
		},
		getMaintainString: function getMaintainString(type) {
			if (type == 1) return "洗车";
			if (type == 2) return "充电";
			if (type == 4) return "调度";
			if (type == 8) return "事故";
			if (type == 16) return "修理";
			if (type == 32) return "保养";
			if (type == 64) return "故障";
			if (type == 128) return "其它";
			if (type == 256) return "违章";
			return "";
		},
		powerStatusDidClick: function powerStatusDidClick() {
			if (this.data.powerStatus == 1) return;
			var self = this;
			weex.requireModule('hkVehicleFeedback').vehiclePowerStatusChange(this.data, function (response) {
				self.data.powerStatus = 1;
				self.vehiceStatusDidChange();
			});
		},
		vehicleStatusMaintainDidClick: function vehicleStatusMaintainDidClick() {
			if (this.data.vehicleStatus == 1) return;
			var self = this;
			weex.requireModule('hkVehicleFeedback').vehicleStatusMaintainDidClick(this.data, function (response) {
				self.data.maintainDetail = response.info;
				self.data.maintainReason = response.type;
				self.data.vehicleStatus = 1;
				self.vehiceStatusDidChange();
			});
		},
		vehicleStatusBerthDidClick: function vehicleStatusBerthDidClick() {
			if (this.data.vehicleStatus == 8) return;
			var self = this;
			weex.requireModule('hkVehicleFeedback').vehicleStatusBerthDidClick(this.data, function (response) {
				self.data.maintainDetail = null;
				self.data.maintainReason = null;
				self.data.vehicleStatus = 8;
				self.vehiceStatusDidChange();
			});
		},
		vehicleRepairDidClick: function vehicleRepairDidClick() {
			if (this.data.maintainFlag == 1) return;
			var self = this;
			weex.requireModule('hkVehicleFeedback').vehicleRepairDidClick(this.data, function (response) {
				self.data.afterMaintainDetail = response.info;
				self.data.afterMaintainReason = response.type;
				self.data.maintainFlag = 1;
				self.vehiceStatusDidChange();
			});
		},
		vehicleUnRepairDidClick: function vehicleUnRepairDidClick() {
			if (this.data.maintainFlag == 0) return;
			var self = this;
			weex.requireModule('hkVehicleFeedback').vehicleUnRepairDidClick(this.data, function (response) {
				self.data.afterMaintainDetail = null;
				self.data.afterMaintainReason = null;
				self.data.maintainFlag = 0;
				self.vehiceStatusDidChange();
			});
		},

		//修改车辆状态后，工单不可取消
		vehiceStatusDidChange: function vehiceStatusDidChange() {
			if (this.data.cancelFlag == true) return;
			var self = this;
			weex.requireModule('hkVehicleFeedback').vehiceStatusDidChange(this.data, function (response) {
				self.data.cancelFlag = true;
			});
		},
		lookupVehicleInMapView: function lookupVehicleInMapView() {
			weex.requireModule('hkVehicleFeedback').lookupVehicleInMapView(this.data, function (response) {});
		},
		searchVehicle: function searchVehicle() {
			weex.requireModule('hkVehicle').searchVehicle(this.data.vehicleId, function (response) {});
		},
		vehicleInfoExpand: function vehicleInfoExpand() {
			this.isExpandVehicleInfo = !this.isExpandVehicleInfo;
		}
	}
};

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["bg", "border-top", "border-bottom"]
  }, [_c('div', {
    staticClass: ["title-box"],
    on: {
      "click": function($event) {
        _vm.vehicleInfoExpand()
      }
    }
  }, [_c('text', {
    staticClass: ["title-txt"]
  }, [_vm._v("车辆信息")]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": _vm.isExpandVehicleInfo ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (_vm.isExpandVehicleInfo) ? _c('div', {
    staticClass: ["vehicle-info"]
  }, [_c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("剩余电量：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.power) + "%")])]), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("可持续里程：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.mileage) + "km")])]), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("电量状态：")]), (_vm.data.isRewrite) ? _c('div', {
    staticClass: ["txt-border-box"]
  }, [(_vm.data.powerStatus == 1) ? _c('div', {
    staticClass: ["txt-border-box"]
  }, [_c('text', {
    staticClass: ["txt-border-holder"]
  }), _c('text', {
    staticClass: ["txt-border-gray"]
  }, [_vm._v("正常")])]) : _c('div', {
    staticClass: ["txt-border-box"]
  }, [_c('text', {
    class: [_vm.data.powerStatus == 1 ? 'txt-border-green' : 'txt-border-gray'],
    on: {
      "click": function($event) {
        _vm.powerStatusDidClick()
      }
    }
  }, [_vm._v("正常")]), _c('text', {
    class: [_vm.data.powerStatus == 2 ? 'txt-border-green' : 'txt-border-light-gray'],
    on: {
      "click": function($event) {
        _vm.powerStatusDidClick()
      }
    }
  }, [_vm._v("低电量")])])]) : _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.powerStatus == 1 ? '正常' : '低电量'))])]), _c('div', {
    staticClass: ["cell-box"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("车辆状态：")]), (_vm.data.isRewrite) ? _c('div', {
    staticClass: ["txt-border-box"]
  }, [(_vm.data.vehicleStatus != 1 && _vm.data.vehicleStatus != 8) ? _c('text', {
    staticClass: ["txt-border-holder"]
  }) : _vm._e(), (_vm.data.vehicleStatus != 1 && _vm.data.vehicleStatus != 8) ? _c('text', {
    staticClass: ["txt-border-gray"]
  }, [_vm._v(_vm._s(_vm.getVehicleStatusString()))]) : _vm._e(), (_vm.data.vehicleStatus == 1 || _vm.data.vehicleStatus == 8) ? _c('text', {
    class: [_vm.data.vehicleStatus == 8 ? 'txt-border-green' : 'txt-border-gray'],
    on: {
      "click": function($event) {
        _vm.vehicleStatusBerthDidClick()
      }
    }
  }, [_vm._v("泊位中")]) : _vm._e(), (_vm.data.vehicleStatus == 1 || _vm.data.vehicleStatus == 8) ? _c('text', {
    class: [_vm.data.vehicleStatus == 1 ? 'txt-border-green' : 'txt-border-gray'],
    on: {
      "click": function($event) {
        _vm.vehicleStatusMaintainDidClick()
      }
    }
  }, [_vm._v("维护中")]) : _vm._e()]) : _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.getVehicleStatusString()))])]), (_vm.data.vehicleStatus != 1) ? _c('div', {
    staticClass: ["border"]
  }) : _c('div', {
    staticClass: ["reason-box"]
  }, [_c('text', {
    staticClass: ["reason-row1"]
  }, [_vm._v("维护原因（" + _vm._s(_vm.getMaintainString(_vm.data.maintainReason)) + "）：")]), _c('text', {
    staticClass: ["reason-row2"]
  }, [_vm._v(_vm._s(_vm.data.maintainDetail))])]), (_vm.data.vehicleStatus == 1) ? _c('div', {
    staticClass: ["border"]
  }) : _vm._e(), _c('div', {
    staticClass: ["cell-box"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("还车后维护：")]), (_vm.data.isRewrite) ? _c('div', {
    staticClass: ["txt-border-box"]
  }, [_c('text', {
    class: [_vm.data.maintainFlag == true ? 'txt-border-green' : 'txt-border-gray'],
    on: {
      "click": function($event) {
        _vm.vehicleRepairDidClick()
      }
    }
  }, [_vm._v("是")]), _c('text', {
    class: [_vm.data.maintainFlag == false ? 'txt-border-green' : 'txt-border-gray'],
    on: {
      "click": function($event) {
        _vm.vehicleUnRepairDidClick()
      }
    }
  }, [_vm._v("否")])]) : _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.maintainFlag == true ? '是' : '否'))])]), (_vm.data.maintainFlag != 1) ? _c('div', {
    staticClass: ["border"]
  }) : _c('div', {
    staticClass: ["reason-box"]
  }, [_c('text', {
    staticClass: ["reason-row1"]
  }, [_vm._v("维修原因（" + _vm._s(_vm.getMaintainString(_vm.data.afterMaintainReason)) + "）：")]), _c('text', {
    staticClass: ["reason-row2"]
  }, [_vm._v(_vm._s(_vm.data.afterMaintainDetail))])]), (_vm.data.maintainFlag == 1) ? _c('div', {
    staticClass: ["border"]
  }) : _vm._e(), _c('div', {
    staticClass: ["cell-box"],
    on: {
      "click": function($event) {
        _vm.lookupVehicleInMapView()
      }
    }
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("地图上查看：")]), _c('div', {
    staticClass: ["cell-branch-box"]
  }, [_c('text', {
    staticClass: ["cell-branch-txt"]
  }, [_vm._v(_vm._s(_vm.data.formattedAddress))]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "resize": "contain"
    }
  })])]), (_vm.data.isRewrite) ? _c('div', {
    staticClass: ["border"]
  }) : _vm._e(), (_vm.data.isRewrite) ? _c('div', {
    staticClass: ["cell-box"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("车辆操作：")]), _c('text', {
    staticClass: ["txt-border-green"],
    on: {
      "click": function($event) {
        _vm.searchVehicle()
      }
    }
  }, [_vm._v("寻车")])]) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(167)
)

/* script */
__vue_exports__ = __webpack_require__(168)

/* template */
var __vue_template__ = __webpack_require__(169)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Vehicle/block2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-037c4566"
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

/***/ 167:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#F9F9F9"
  },
  "bg": {
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "marginBottom": "12",
    "backgroundColor": "#FFFFFF"
  },
  "line": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0",
    "width": "750",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "border": {
    "width": "702",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "border-top": {
    "borderTopWidth": "2",
    "borderTopColor": "#F1EFEF"
  },
  "border-bottom": {
    "borderBottomWidth": "2",
    "borderBottomColor": "#F1EFEF"
  },
  "title-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "0",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-box-auto": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "title-txt": {
    "color": "#333333",
    "fontSize": "30"
  },
  "arrow-icon": {
    "width": "20",
    "height": "20"
  },
  "txt-left": {
    "color": "#666666",
    "fontSize": "30"
  },
  "txt-right": {
    "color": "#333333",
    "fontSize": "30"
  },
  "txt-right-auto": {
    "width": "480",
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "paddingBottom": "2"
  },
  "txt-textarea": {
    "width": "480",
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right"
  },
  "txt-holder": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10"
  },
  "txt-border-bg-green": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "0",
    "borderRadius": "10",
    "color": "#FFFFFF",
    "backgroundColor": "#44B393"
  },
  "txt-border-green": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#44B393",
    "borderColor": "#44B393"
  },
  "txt-border-gray": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#999999",
    "borderColor": "#999999"
  },
  "txt-border-light-gray": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#D8D8D8",
    "borderColor": "#D8D8D8"
  },
  "txt-border-holder": {
    "borderWidth": "0"
  },
  "txt-border-box": {
    "width": "286",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "cell-photo-box": {
    "paddingLeft": "0"
  },
  "cell-branch-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-branch-txt": {
    "marginRight": "10",
    "color": "#333333",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "right",
    "width": "450"
  },
  "cell-branch-txt-holder": {
    "marginRight": "10",
    "color": "#D1D1D1",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular"
  },
  "reason-box": {
    "flexDirection": "column",
    "paddingTop": "20",
    "paddingRight": "24",
    "paddingBottom": "20",
    "paddingLeft": "24",
    "marginBottom": "20",
    "backgroundColor": "#F9F9F9",
    "borderRadius": "6"
  },
  "reason-row1": {
    "fontSize": "28",
    "color": "#666666",
    "fontFamily": "PingFangSC-Regular"
  },
  "reason-row2": {
    "marginTop": "10",
    "fontSize": "26",
    "color": "#999999",
    "fontFamily": "PingFangSC-Regular"
  }
}

/***/ }),

/***/ 168:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    // createType: ''			//题反馈创建类型，1：客服创建，2：自己创建
    // orderId: ''				//订单编号
    // orderUserName: ''		//姓名
    // orderPhoneNo				//联系电话
    // cityName: '',        	//所在城市（自己创建 可修改）
    // place: '',         		//所在地点 (自己创建 可修改)
    // problemDescription: '',  //问题描述 (自己创建 可修改)
    // demand: '',  			//需求
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isExpandFeedback: true,
      arrowUp: "local:///arrow_up.png",
      arrowDown: "local:///arrow_down.png"
    };
  },

  methods: {
    onPlaceDidChange: function onPlaceDidChange(e) {
      this.data.place = e.value;
    },
    onProblemDescriptionDidChange: function onProblemDescriptionDidChange(e) {
      this.data.problemDescription = e.value;
    },
    feedbackExpand: function feedbackExpand() {
      this.isExpandFeedback = !this.isExpandFeedback;
    },
    callTelephone: function callTelephone() {
      weex.requireModule('hkVehicleFeedback').callTelephone(this.data.orderPhoneNo, function (response) {});
    }
  }
};

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["bg", "border-top", "border-bottom"]
  }, [_c('div', {
    staticClass: ["title-box"],
    on: {
      "click": function($event) {
        _vm.feedbackExpand()
      }
    }
  }, [_c('text', {
    staticClass: ["title-txt"]
  }, [_vm._v("问题反馈记录")]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": _vm.isExpandFeedback ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (_vm.isExpandFeedback) ? _c('div', {
    staticClass: ["feedback"]
  }, [_c('div', {
    staticClass: ["line"]
  }), (_vm.data.createType == 1) ? _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("订单编号：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.orderId))])]) : _vm._e(), (_vm.data.createType == 1) ? _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("姓名：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.orderUserName))])]) : _vm._e(), (_vm.data.createType == 1) ? _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("联系电话：")]), _c('text', {
    staticClass: ["txt-right"],
    on: {
      "click": function($event) {
        _vm.callTelephone()
      }
    }
  }, [_vm._v(_vm._s(_vm.data.orderPhoneNo))])]) : _vm._e(), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("所在城市：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.cityName))])]), _c('div', {
    staticClass: ["cell-box-auto", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("所在网点(地点):")]), (_vm.data.isRewrite && _vm.data.createType == 2) ? _c('textarea', {
    staticClass: ["txt-textarea"],
    attrs: {
      "rows": "2",
      "maxlength": "50",
      "autofocus": "false",
      "value": _vm.data.place,
      "type": "text",
      "placeholder": "请输入最多50字文字说明"
    },
    on: {
      "change": _vm.onPlaceDidChange
    }
  }) : _c('text', {
    staticClass: ["txt-right-auto"]
  }, [_vm._v(_vm._s(_vm.data.place))])]), _c('div', {
    staticClass: ["cell-box-auto", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("问题描述：")]), (_vm.data.isRewrite && _vm.data.createType == 2) ? _c('textarea', {
    staticClass: ["txt-textarea"],
    attrs: {
      "rows": "2",
      "maxlength": "50",
      "autofocus": "false",
      "value": _vm.data.problemDescription,
      "type": "text",
      "placeholder": "请输入最多50字文字说明"
    },
    on: {
      "change": _vm.onProblemDescriptionDidChange
    }
  }) : _c('text', {
    staticClass: ["txt-right-auto"]
  }, [_vm._v(_vm._s(_vm.data.problemDescription))])]), (_vm.data.createType == 1) ? _c('div', {
    staticClass: ["cell-box-auto"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("需求：")]), _c('text', {
    staticClass: ["txt-right-auto"]
  }, [_vm._v(_vm._s(_vm.data.demand))])]) : _vm._e()]) : _vm._e()])])
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(171)
)

/* script */
__vue_exports__ = __webpack_require__(172)

/* template */
var __vue_template__ = __webpack_require__(173)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Vehicle/block3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03601664"
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

/***/ 171:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#F9F9F9"
  },
  "bg": {
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "marginBottom": "12",
    "backgroundColor": "#FFFFFF"
  },
  "line": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0",
    "width": "750",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "border": {
    "width": "702",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "border-top": {
    "borderTopWidth": "2",
    "borderTopColor": "#F1EFEF"
  },
  "border-bottom": {
    "borderBottomWidth": "2",
    "borderBottomColor": "#F1EFEF"
  },
  "title-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "0",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-box-auto": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "title-txt": {
    "color": "#333333",
    "fontSize": "30"
  },
  "arrow-icon": {
    "width": "20",
    "height": "20"
  },
  "txt-left": {
    "color": "#666666",
    "fontSize": "30"
  },
  "txt-right": {
    "color": "#333333",
    "fontSize": "30"
  },
  "txt-right-auto": {
    "width": "480",
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "paddingBottom": "2"
  },
  "txt-textarea": {
    "width": "480",
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right"
  },
  "txt-holder": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10"
  },
  "txt-border-bg-green": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "0",
    "borderRadius": "10",
    "color": "#FFFFFF",
    "backgroundColor": "#44B393"
  },
  "txt-border-green": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#44B393",
    "borderColor": "#44B393"
  },
  "txt-border-gray": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#999999",
    "borderColor": "#999999"
  },
  "txt-border-light-gray": {
    "width": "130",
    "height": "54",
    "lineHeight": "54",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "center",
    "borderWidth": "2",
    "borderRadius": "10",
    "color": "#D8D8D8",
    "borderColor": "#D8D8D8"
  },
  "txt-border-holder": {
    "borderWidth": "0"
  },
  "txt-border-box": {
    "width": "286",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "cell-photo-box": {
    "paddingLeft": "0"
  },
  "cell-branch-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "cell-branch-txt": {
    "marginRight": "10",
    "color": "#333333",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular",
    "textAlign": "right",
    "width": "450"
  },
  "cell-branch-txt-holder": {
    "marginRight": "10",
    "color": "#D1D1D1",
    "fontSize": "30",
    "fontFamily": "PingFangSC-Regular"
  },
  "reason-box": {
    "flexDirection": "column",
    "paddingTop": "20",
    "paddingRight": "24",
    "paddingBottom": "20",
    "paddingLeft": "24",
    "marginBottom": "20",
    "backgroundColor": "#F9F9F9",
    "borderRadius": "6"
  },
  "reason-row1": {
    "fontSize": "28",
    "color": "#666666",
    "fontFamily": "PingFangSC-Regular"
  },
  "reason-row2": {
    "marginTop": "10",
    "fontSize": "26",
    "color": "#999999",
    "fontFamily": "PingFangSC-Regular"
  }
}

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _gridImageSelect = __webpack_require__(24);

var _gridImageSelect2 = _interopRequireDefault(_gridImageSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
   components: { gridImageSelect: _gridImageSelect2.default },

   // rentalShopName: '',     	//挂靠网点
   // operationDetail: '',    	//操作详情
   // photos: [],       	   	//操作照片

   props: {
      data: {
         type: Object,
         default: function _default() {
            return {};
         }
      }
   },
   data: function data() {
      return {
         isExpandProblem: true,
         arrowIcon: "local:///arrow_light.png",
         arrowUp: "local:///arrow_up.png",
         arrowDown: "local:///arrow_down.png"
      };
   },
   created: function created() {},

   methods: {
      onChange: function onChange(e) {
         this.data.operationDetail = e.value;
      },
      choiceBranch: function choiceBranch() {
         var self = this;
         weex.requireModule('hkVehicleFeedback').choiceBranch(this.data, function (response) {
            self.data.rentalShopName = response.name;
            self.data.rentalShopId = response.ID;
         });
      },
      problemExpand: function problemExpand() {
         this.isExpandProblem = !this.isExpandProblem;
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

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["bg", "border-top", "border-bottom"]
  }, [_c('div', {
    staticClass: ["title-box"],
    on: {
      "click": function($event) {
        _vm.problemExpand()
      }
    }
  }, [_c('text', {
    staticClass: ["title-txt"]
  }, [_vm._v("问题反馈处理")]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": _vm.isExpandProblem ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (_vm.isExpandProblem) ? _c('div', {
    staticClass: ["problem-expand"]
  }, [_c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("车辆挂靠：")]), (_vm.data.isRewrite) ? _c('div', {
    staticClass: ["cell-branch-box"],
    on: {
      "click": function($event) {
        _vm.choiceBranch()
      }
    }
  }, [(!_vm.data.rentalShopName) ? _c('text', {
    staticClass: ["cell-branch-txt-holder"]
  }, [_vm._v("选择一个网点")]) : _c('text', {
    staticClass: ["cell-branch-txt"]
  }, [_vm._v(_vm._s(_vm.data.rentalShopName))]), _c('image', {
    staticClass: ["arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.rentalShopName))])]), _c('div', {
    staticClass: ["cell-box-auto", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("操作详情：")]), (_vm.data.isRewrite) ? _c('textarea', {
    staticClass: ["txt-textarea"],
    attrs: {
      "rows": "2",
      "maxlength": "200",
      "autofocus": "false",
      "value": _vm.data.operationDetail,
      "type": "text",
      "placeholder": "请输入最多200字文字说明"
    },
    on: {
      "change": _vm.onChange
    }
  }) : _c('text', {
    staticClass: ["txt-right-auto"]
  }, [_vm._v(_vm._s(_vm.data.operationDetail))])]), _vm._m(0), _c('div', {
    staticClass: ["cell-photo-box"]
  }, [_c('gridImageSelect', {
    attrs: {
      "orginImages": _vm.data.operationPic,
      "pageOnlyViewFlag": !_vm.data.isRewrite,
      "itemIndex": 0,
      "checkedNotPassFlag": true,
      "checkType": 1
    }
  })], 1)]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-box"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("操作照片：")])])
}]}
module.exports.render._withStripped = true

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

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HKVehicleFeedback = __webpack_require__(287);

var _HKVehicleFeedback2 = _interopRequireDefault(_HKVehicleFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HKVehicleFeedback2.default.el = '#root';
new Vue(_HKVehicleFeedback2.default);

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(288)
)

/* script */
__vue_exports__ = __webpack_require__(289)

/* template */
var __vue_template__ = __webpack_require__(290)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Vehicle/HKVehicleFeedback.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-391d98f6"
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

/***/ 288:
/***/ (function(module, exports) {

module.exports = {
  "feedback-container": {
    "backgroundColor": "#F9F9F9"
  },
  "bottom-margin": {
    "paddingBottom": "130"
  }
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vehicleHeader = __webpack_require__(70);

var _vehicleHeader2 = _interopRequireDefault(_vehicleHeader);

var _block = __webpack_require__(162);

var _block2 = _interopRequireDefault(_block);

var _block3 = __webpack_require__(166);

var _block4 = _interopRequireDefault(_block3);

var _block5 = __webpack_require__(170);

var _block6 = _interopRequireDefault(_block5);

var _workflowList = __webpack_require__(74);

var _workflowList2 = _interopRequireDefault(_workflowList);

var _bottom = __webpack_require__(101);

var _bottom2 = _interopRequireDefault(_bottom);

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

exports.default = {
	components: {
		'vehicle-header': _vehicleHeader2.default,
		'block1': _block2.default,
		'block2': _block4.default,
		'block3': _block6.default,
		'bottom': _bottom2.default,
		'work-flow': _workflowList2.default
	},
	data: function data() {
		return {
			feedback: {
				isShowScanButton: true,
				isRewrite: false,
				createType: 1, //题反馈创建类型，1：客服创建，2：自己创建
				selfWorkOrderFlag: 0, //是否是自己的工单 1-查看自己 0-查看别人
				workOrderStatus: 0, //工单状态，1：未开始，2：已领取，4：进行中，8：已完成，64：已取消 
				cancelFlag: 0, //是否可以取消，0：可以，1：不可以 
				flowList: [],
				operationPic: []
			},
			isShowBlock2: false,
			isShowBlock3: false
		};
	},
	created: function created() {
		var self = this;
		weex.requireModule('hkVehicleFeedback').getWorksheetDetail(null, function (response) {
			self.feedback = response.payload;
			self.feedback.isRewrite = self.isRewrite();

			self.isShowBlock2 = true;
			self.isShowBlock3 = true;
		});
	},

	methods: {
		isRewrite: function isRewrite() {
			if (this.feedback.selfWorkOrderFlag == 1) {
				if (this.feedback.workOrderStatus != 8 && this.feedback.workOrderStatus != 64) {
					return true;
				}
			}
			return false;
		},
		cancelWorksheet: function cancelWorksheet(res) {
			weex.requireModule('hkVehicleFeedback').cancelWorksheet(this.feedback, function (response) {});
		},
		saveWorkSheet: function saveWorkSheet(res) {
			var self = this;
			weex.requireModule('hkVehicleFeedback').saveWorkSheet(this.feedback, function (response) {
				self.feedback.cancelFlag = true;
			});
		},
		submitWorksheet: function submitWorksheet(res) {
			weex.requireModule('hkVehicleFeedback').submitWorksheet(this.feedback, function (response) {});
		},
		scanToCharger: function scanToCharger(e) {
			weex.requireModule('hkVehicleFeedback').scanToCharger(this.feedback.vehicleId, function (response) {});
		}
	}
};

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["feedback-container"],
    class: [_vm.feedback.isRewrite ? 'bottom-margin' : '']
  }, [_c('vehicle-header', {
    attrs: {
      "data": _vm.feedback
    },
    on: {
      "scanToCharger": _vm.scanToCharger
    }
  }), _c('block1', {
    attrs: {
      "data": _vm.feedback
    }
  }), (_vm.isShowBlock3) ? _c('block2', {
    attrs: {
      "data": _vm.feedback
    }
  }) : _vm._e(), (_vm.isShowBlock3) ? _c('block3', {
    attrs: {
      "data": _vm.feedback
    }
  }) : _vm._e(), _c('work-flow', {
    attrs: {
      "flowList": _vm.feedback.flowList
    }
  }), (_vm.feedback.isRewrite) ? _c('bottom', {
    attrs: {
      "hasCancel": _vm.feedback.createType != 1,
      "cancelFlag": _vm.feedback.cancelFlag
    },
    on: {
      "cancelWorksheet": _vm.cancelWorksheet,
      "saveWorkSheet": _vm.saveWorkSheet,
      "submitWorksheet": _vm.submitWorksheet
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(73)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Components/vehicle-header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0c10b79c"
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

/***/ 71:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#F9F9F9"
  },
  "bg": {
    "marginBottom": "12",
    "backgroundColor": "#FFFFFF",
    "borderBottomWidth": "2",
    "borderBottomColor": "#EEEEEE"
  },
  "wsn-box": {
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "24"
  },
  "vehicle-box": {
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "6",
    "alignItems": "center"
  },
  "a-box": {
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": "16"
  },
  "vehicle": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "operate": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "address-icon": {
    "width": "22",
    "height": "28"
  },
  "txt-number": {
    "color": "#999999",
    "fontSize": "26",
    "fontFamily": "PingFangSC-Regular"
  },
  "txt-time": {
    "color": "#999999",
    "fontSize": "26",
    "fontFamily": "PingFangSC-Regular"
  },
  "vehicle-number": {
    "maxWidth": "220",
    "fontSize": "38",
    "color": "#333333",
    "fontFamily": "PingFangSC-Regular",
    "lines": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "vehicle-name": {
    "maxWidth": "280",
    "marginLeft": "16",
    "fontSize": "28",
    "color": "#666666",
    "fontFamily": "PingFangSC-Regular",
    "lines": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "scan": {
    "width": "200",
    "height": "70",
    "lineHeight": "70",
    "color": "#FFFFFF",
    "fontSize": "30",
    "textAlign": "center",
    "fontFamily": "PingFangSC-Regular",
    "borderRadius": "6",
    "backgroundColor": "#5ABECF"
  },
  "adress": {
    "marginLeft": "20",
    "color": "#333333",
    "fontSize": "28",
    "textAlign": "left",
    "fontFamily": "PingFangSC-Regular",
    "width": "700",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "lines": 1
  },
  "model-name": {
    "paddingTop": "0",
    "paddingBottom": "16",
    "paddingLeft": "24",
    "paddingRight": "24",
    "fontSize": "28",
    "color": "#999999"
  },
  "operate-txt": {
    "width": "187",
    "color": "#5ABECF",
    "fontSize": "32",
    "textAlign": "center"
  },
  "operate-txt-1": {
    "width": "375",
    "color": "#5ABECF",
    "fontSize": "32",
    "textAlign": "center"
  },
  "right-border": {
    "borderRightWidth": "2",
    "borderRightColor": "#EEEEEE"
  },
  "slider": {
    "width": "750",
    "height": "86",
    "borderBottomWidth": "2",
    "borderBottomColor": "#EEEEEE",
    "borderTopWidth": "2",
    "borderTopColor": "#EEEEEE"
  },
  "banner-item": {
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "750",
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "height": "86"
  },
  "indicator": {
    "width": "750",
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "indicator-1": {
    "width": "46",
    "height": "10",
    "borderRadius": "5",
    "backgroundColor": "#E7E7E7"
  },
  "indicator-2": {
    "width": "46",
    "height": "10",
    "borderRadius": "5",
    "backgroundColor": "#E7E7E7",
    "marginLeft": "14"
  },
  "indicator-selected": {
    "backgroundColor": "#5ABECF"
  }
}

/***/ }),

/***/ 72:
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
//
//
//
//
//
//
//
//
//
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
    props: {
        /*
        workOrderNo: '',        //工单编号
        createTime: '',         //创建时间 
        vno: '',                //车牌号
        vehicleModelName: ''    //车型名
        handleAddress: ''       //网点地址rentalShopName
        */
        data: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            adressIcon: "local:///locate_icon.png",
            currentIndex: 0
        };
    },

    methods: {
        vehicleUnLock: function vehicleUnLock(index) {
            weex.requireModule('hkVehicle').vehicleUnLock(this.data, index, function (response) {});
        },
        vehicleLock: function vehicleLock(index) {
            weex.requireModule('hkVehicle').vehicleLock(this.data, index, function (response) {});
        },
        engineUnLock: function engineUnLock(index) {
            weex.requireModule('hkVehicle').enginUnLock(this.data, index, function (response) {});
        },
        engineLock: function engineLock(index) {
            weex.requireModule('hkVehicle').enginLock(this.data, index, function (response) {});
        },
        scanToCharger: function scanToCharger() {
            this.$emit('scanToCharger', this.data.vehicleId);
        },
        changeHandler: function changeHandler(e) {
            this.currentIndex = e.index;
        },
        getDeviceType: function getDeviceType() {
            var deviceType = this.data.deviceList[this.currentIndex].deviceType;
            if (deviceType == 1) return 'EVCC1.0';
            if (deviceType == 2) return 'EVCC2.0';
            if (deviceType == 4) return 'EVCC本田';
            if (deviceType == 8) return 'APN';
            if (deviceType == 16) return '苏灿';
            if (deviceType == 64) return '一汽X40';
            if (deviceType == 128) return '新特 DEV1';
            return '';
        },
        isSupportCommand: function isSupportCommand() {
            var arr = this.data.deviceList;
            for (var i in arr) {
                if (this.findOne(['1'], arr[i].supportCommand) || this.findOne(['2'], arr[i].supportCommand)) {
                    return true;
                }
            }
            return false;
        },
        isSupportDoorOnly: function isSupportDoorOnly(commands) {
            return this.findOne(['1'], commands) && !this.findOne(['2'], commands);
        },
        isSupportEngineOnly: function isSupportEngineOnly(commands) {
            return this.findOne(['2'], commands) && !this.findOne(['1'], commands);
        },
        isSupportDoorAndEngine: function isSupportDoorAndEngine(commands) {
            return this.findOne(['1'], commands) && this.findOne(['2'], commands);
        },
        findOne: function findOne(haystack, arr) {
            return arr.some(function (v) {
                return haystack.indexOf(v) >= 0;
            });
        }
    }
};

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["bg"]
  }, [_c('div', {
    staticClass: ["wsn-box"]
  }, [_c('text', {
    staticClass: ["txt-number"]
  }, [_vm._v("工单编号：" + _vm._s(_vm.data.workOrderNo))]), _c('text', {
    staticClass: ["txt-time"]
  }, [_vm._v(_vm._s(_vm.data.createTime))])]), _c('div', {
    staticClass: ["vehicle-box"]
  }, [_c('div', {
    staticClass: ["vehicle"]
  }, [_c('text', {
    staticClass: ["vehicle-number"]
  }, [_vm._v(_vm._s(_vm.data.vno))]), _c('text', {
    staticClass: ["vehicle-name"]
  }, [_vm._v(_vm._s(_vm.data.vehicleModelName))])]), (_vm.data.isRewrite && _vm.data.isShowScanButton) ? _c('text', {
    staticClass: ["scan"],
    on: {
      "click": function($event) {
        _vm.scanToCharger()
      }
    }
  }, [_vm._v("扫码充电")]) : _vm._e()]), _c('div', {
    staticClass: ["a-box"]
  }, [_c('image', {
    staticClass: ["address-icon"],
    attrs: {
      "src": _vm.adressIcon,
      "resize": "contain"
    }
  }), _c('text', {
    staticClass: ["adress"]
  }, [_vm._v(_vm._s(_vm.data.handleAddress))])]), (_vm.data.isRewrite && _vm.isSupportCommand()) ? _c('div', {
    staticClass: ["banner"]
  }, [_c('text', {
    staticClass: ["model-name"]
  }, [_vm._v("控车模块-" + _vm._s(_vm.getDeviceType()))]), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "false",
      "infinite": "false"
    },
    on: {
      "change": _vm.changeHandler
    }
  }, _vm._l((_vm.data.deviceList), function(device, index) {
    return _c('div', {
      staticClass: ["slider"]
    }, [(index < 2) ? _c('div', {
      staticClass: ["banner-item"]
    }, [(_vm.isSupportDoorAndEngine(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt", "right-border"],
      on: {
        "click": function($event) {
          _vm.vehicleUnLock(index)
        }
      }
    }, [_vm._v("车门解锁")]) : _vm._e(), (_vm.isSupportDoorAndEngine(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt", "right-border"],
      on: {
        "click": function($event) {
          _vm.vehicleLock(index)
        }
      }
    }, [_vm._v("车门落锁")]) : _vm._e(), (_vm.isSupportDoorAndEngine(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt", "right-border"],
      on: {
        "click": function($event) {
          _vm.engineUnLock(index)
        }
      }
    }, [_vm._v("引擎锁解锁")]) : _vm._e(), (_vm.isSupportDoorAndEngine(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt"],
      on: {
        "click": function($event) {
          _vm.engineLock(index)
        }
      }
    }, [_vm._v("引擎锁落锁")]) : _vm._e(), (_vm.isSupportEngineOnly(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt", "right-border"],
      on: {
        "click": function($event) {
          _vm.engineUnLock(index)
        }
      }
    }, [_vm._v("引擎锁解锁")]) : _vm._e(), (_vm.isSupportEngineOnly(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt"],
      on: {
        "click": function($event) {
          _vm.engineLock(index)
        }
      }
    }, [_vm._v("引擎锁落锁")]) : _vm._e(), (_vm.isSupportDoorOnly(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt-1", "right-border"],
      on: {
        "click": function($event) {
          _vm.vehicleUnLock(index)
        }
      }
    }, [_vm._v("车门解锁")]) : _vm._e(), (_vm.isSupportDoorOnly(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt-1"],
      on: {
        "click": function($event) {
          _vm.vehicleLock(index)
        }
      }
    }, [_vm._v("车门落锁")]) : _vm._e()]) : _vm._e()])
  })), (_vm.data.deviceList.length > 1) ? _c('div', {
    staticClass: ["indicator"]
  }, [_c('view', {
    staticClass: ["indicator-1"],
    class: [_vm.currentIndex == 0 ? 'indicator-selected' : '']
  }), _c('view', {
    staticClass: ["indicator-2"],
    class: [_vm.currentIndex == 1 ? 'indicator-selected' : '']
  })]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: ["border-bottom"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(75)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(77)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Components/workflow-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0d0de8b8"
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

/***/ 75:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "borderTop": "2",
    "borderBottom": "2",
    "borderColor": "#F1EFEF"
  },
  "workflow": {
    "flexDirection": "column",
    "marginLeft": "40",
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "20"
  },
  "workflow-container": {
    "flexDirection": "row"
  },
  "workflow-image": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "line-white": {
    "backgroundColor": "#FFFFFF"
  },
  "workflow-circle-highlight": {
    "backgroundColor": "#44B393"
  },
  "check-row-title": {
    "height": "90",
    "lineHeight": "90",
    "fontSize": "30",
    "color": "#333333"
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
    "marginLeft": "22"
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
    "position": "absolute",
    "right": 0
  },
  "workflow-txt-time": {
    "fontSize": "26",
    "color": "#BFBFBF",
    "marginTop": "21",
    "textAlign": "right"
  }
}

/***/ }),

/***/ 76:
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

exports.default = {
	props: {
		/*
  	highlight: false,
  	name: '',
  	operateTime: '',
  	operateUserName: ''
  */
		flowList: {
			type: Array
		}
	},
	data: function data() {
		return {};
	},

	methods: {}
};

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["check-row-title"]
  }, [_vm._v("工作流程")]), _c('div', {
    staticClass: ["workflow"]
  }, _vm._l((_vm.flowList), function(item, index) {
    return _c('div', {
      staticClass: ["workflow-container"]
    }, [_c('div', {
      staticClass: ["workflow-image"]
    }, [_c('div', {
      staticClass: ["workflow-line-up"],
      class: [index == 0 ? 'line-white' : '']
    }), _c('div', {
      staticClass: ["workflow-circle"],
      class: [item.highlight == 1 ? 'workflow-circle-highlight' : '']
    }), (index < _vm.flowList.length - 1) ? _c('div', {
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
    }, [_vm._v(_vm._s(item.operateTime))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

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