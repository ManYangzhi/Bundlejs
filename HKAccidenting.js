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
/******/ 	return __webpack_require__(__webpack_require__.s = 260);
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

/***/ 100:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.maintainItem.isAdd && _vm.isRewrite) ? _c('image', {
    staticClass: ["delete"],
    attrs: {
      "src": _vm.image_count_delete
    },
    on: {
      "click": function($event) {
        _vm.deleteMaintainItem()
      }
    }
  }) : _vm._e(), _c('text', {
    class: [_vm.maintainItem.isAdd ? 'add-title' : 'title']
  }, [_vm._v(_vm._s(_vm.maintainItem.itemName))]), _c('div', {
    staticClass: ["operate-container"]
  }, [(_vm.isRewrite) ? _c('image', {
    staticClass: ["operate-image-down"],
    attrs: {
      "src": _vm.image_count_down
    },
    on: {
      "click": _vm.operateCountDown
    }
  }) : _c('div', {
    staticClass: ["operate-image-down"]
  }), _c('text', {
    staticClass: ["operate-count"]
  }, [_vm._v(_vm._s(_vm.maintainItem.itemCount))]), (_vm.isRewrite) ? _c('image', {
    staticClass: ["operate-image-up"],
    attrs: {
      "src": _vm.image_count_up
    },
    on: {
      "click": _vm.operateCountUp
    }
  }) : _c('div', {
    staticClass: ["operate-image-down"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(135)
)

/* script */
__vue_exports__ = __webpack_require__(136)

/* template */
var __vue_template__ = __webpack_require__(137)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Accident/accident-base.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5520c714"
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

/***/ 135:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF",
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24"
  },
  "border": {
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F1EFEF"
  },
  "item-container": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "0"
  },
  "item-container-auto": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "0"
  },
  "item-title": {
    "color": "#666666",
    "fontSize": "30"
  },
  "item-value-container": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "item-value": {
    "color": "#333333",
    "width": "400",
    "fontSize": "30",
    "textAlign": "right"
  },
  "item-value-auto": {
    "color": "#333333",
    "width": "540",
    "fontSize": "30",
    "textAlign": "right"
  },
  "item-icon": {
    "marginLeft": "5",
    "width": "20",
    "height": "20"
  },
  "accident-type-container": {
    "width": "670",
    "alignItems": "center"
  },
  "accident-type-item": {
    "width": "600",
    "height": "90"
  },
  "accident-type-title-normal": {
    "color": "#333333",
    "fontSize": "30",
    "height": "90",
    "lineHeight": "90"
  },
  "accident-type-title-light": {
    "color": "#5ABECF",
    "fontSize": "30",
    "height": "90",
    "lineHeight": "90"
  },
  "item-textarea": {
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "width": "550"
  }
}

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _eitherOr = __webpack_require__(65);

var _eitherOr2 = _interopRequireDefault(_eitherOr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: { eitherOr: _eitherOr2.default },
	props: {
		accidentItem: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	data: function data() {
		return {
			isExpandMethod: false,
			isExpandContact: false,
			arrowDown: "local:///arrow_down.png"
		};
	},

	methods: {
		accidentModelClick: function accidentModelClick() {
			this.isExpandMethod = !this.isExpandMethod;
		},
		modelItemClick: function modelItemClick(index) {
			for (var i = 0; i < this.accidentItem.methods.length; i++) {
				this.accidentItem.methods[i].selected = false;
			}
			this.accidentItem.methods[index].selected = true;
			this.accidentItem.currentMethod = this.accidentItem.methods[index].title;
			this.accidentModelClick();
		},
		accidentConnectClick: function accidentConnectClick() {
			this.isExpandContact = !this.isExpandContact;
		},
		connectItemClick: function connectItemClick(index) {
			for (var i = 0; i < this.accidentItem.contacts.length; i++) {
				this.accidentItem.contacts[i].selected = false;
			}
			this.accidentItem.contacts[index].selected = true;
			this.accidentItem.currentContact = this.accidentItem.contacts[index].title;
			this.accidentConnectClick();
		},
		eitherItemDidClick: function eitherItemDidClick(item) {
			this.accidentItem.payFlag = item.fault;
		},
		onRemarkChange: function onRemarkChange(e) {
			this.accidentItem.handleRemarks = e.value;
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

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故处理方式：")]), (_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["item-value-container"],
    on: {
      "click": function($event) {
        _vm.accidentModelClick()
      }
    }
  }, [_c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentMethod))]), _c('image', {
    staticClass: ["item-icon"],
    attrs: {
      "src": _vm.arrowDown,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentMethod))])]), (_vm.isExpandMethod) ? _c('div', {
    staticClass: ["accident-type-container"]
  }, _vm._l((_vm.accidentItem.methods), function(item, index) {
    return _c('div', {
      staticClass: ["accident-type-item", "border"],
      on: {
        "click": function($event) {
          _vm.modelItemClick(index)
        }
      }
    }, [_c('text', {
      class: [item.selected ? 'accident-type-title-light' : 'accident-type-title-normal']
    }, [_vm._v(_vm._s(item.title))])])
  })) : _vm._e(), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("是否联系责任人：")]), (_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["item-value-container"],
    on: {
      "click": function($event) {
        _vm.accidentConnectClick()
      }
    }
  }, [_c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentContact))]), _c('image', {
    staticClass: ["item-icon"],
    attrs: {
      "src": _vm.arrowDown,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentContact))])]), (_vm.isExpandContact) ? _c('div', {
    staticClass: ["accident-type-container"]
  }, _vm._l((_vm.accidentItem.contacts), function(item, index) {
    return _c('div', {
      staticClass: ["accident-type-item", "border"],
      on: {
        "click": function($event) {
          _vm.connectItemClick(index)
        }
      }
    }, [_c('text', {
      class: [item.selected ? 'accident-type-title-light' : 'accident-type-title-normal']
    }, [_vm._v(_vm._s(item.title))])])
  })) : _vm._e(), _c('either-or', {
    attrs: {
      "fault": _vm.accidentItem.payFlag,
      "isRewrite": _vm.accidentItem.isRewrite,
      "title": "责任人是否付款："
    },
    on: {
      "eitherItemDidClick": _vm.eitherItemDidClick
    }
  }), _c('div', {
    staticClass: ["item-container-auto", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故备注:")]), (_vm.accidentItem.isRewrite) ? _c('textarea', {
    staticClass: ["item-textarea"],
    attrs: {
      "maxlength": "50",
      "rows": "2",
      "autofocus": "false",
      "value": _vm.accidentItem.handleRemarks,
      "placeholder": "请输入最多50字文字说明",
      "type": "text"
    },
    on: {
      "change": _vm.onRemarkChange
    }
  }) : _c('text', {
    staticClass: ["item-value-auto"]
  }, [_vm._v(_vm._s(_vm.accidentItem.handleRemarks))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(139)
)

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(141)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Accident/accident-fee.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-70f33b93"
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

/***/ 139:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF",
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24"
  },
  "border": {
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F1EFEF"
  },
  "item-container": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "item-title-pre": {
    "color": "#FF0000",
    "fontSize": "30",
    "marginTop": "30"
  },
  "item-title": {
    "color": "#666666",
    "fontSize": "30",
    "marginTop": "20",
    "marginBottom": "20"
  },
  "item-input-container": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "item-input": {
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "width": "200",
    "backgroundColor": "#FFFFFF"
  },
  "item-suffix": {
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right"
  }
}

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

/***/ 140:
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

exports.default = {
	props: {
		accidentItem: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	data: function data() {
		return {};
	},

	methods: {
		onOneChange: function onOneChange(e) {
			this.accidentItem.damageAmount = this.toDecimal2(e.value);
		},
		onTwoChange: function onTwoChange(e) {
			this.accidentItem.insureClaimAmount = this.toDecimal2(e.value);
		},
		onThreeChange: function onThreeChange(e) {
			this.accidentItem.liabilityClaimAmount = this.toDecimal2(e.value);
		},
		onFourChange: function onFourChange(e) {
			this.accidentItem.companyUndertakeAmount = this.toDecimal2(e.value);
		},
		onFiveChange: function onFiveChange(e) {
			this.accidentItem.floatCost = this.toDecimal2(e.value);
		},
		onSixChange: function onSixChange(e) {
			this.accidentItem.delayCost = this.toDecimal2(e.value);
		},
		onSenvenChange: function onSenvenChange(e) {
			this.accidentItem.depreciateCost = this.toDecimal2(e.value);
		},
		onEightChange: function onEightChange(e) {
			this.accidentItem.actualCost = this.toDecimal2(e.value);
		},
		toDecimal2: function toDecimal2(x) {
			var f = parseFloat(x);
			if (isNaN(f)) return null;
			var f = Math.round(x * 100) / 100;
			var s = f.toString();
			var rs = s.indexOf('.');
			if (rs < 0) {
				rs = s.length;
				s += '.';
			}
			while (s.length <= rs + 2) {
				s += '0';
			}
			return s;
		}
	}
};

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.damageAmount),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onOneChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.damageAmount)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.insureClaimAmount),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onTwoChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.insureClaimAmount)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.liabilityClaimAmount),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onThreeChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.liabilityClaimAmount)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(3), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.companyUndertakeAmount),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onFourChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.companyUndertakeAmount)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("保险上浮费用：")]), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.floatCost),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onFiveChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.floatCost)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("误工费用：")]), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.delayCost),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onSixChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.delayCost)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("折旧费用：")]), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.depreciateCost),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onSenvenChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.depreciateCost)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("责任人实缴：")]), _c('div', {
    staticClass: ["item-input-container"]
  }, [(_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.toDecimal2(_vm.accidentItem.actualCost),
      "placeholder": "",
      "type": "number"
    },
    on: {
      "change": _vm.onEightChange
    }
  }) : _c('text', {
    staticClass: ["item-input"]
  }, [_vm._v(_vm._s(_vm.toDecimal2(_vm.accidentItem.actualCost)))]), _c('text', {
    staticClass: ["item-suffix"]
  }, [_vm._v("元")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("定损金额：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("保险理赔金额：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("责任理赔金额：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("公司承担金额：")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(143)
)

/* script */
__vue_exports__ = __webpack_require__(144)

/* template */
var __vue_template__ = __webpack_require__(145)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Accident/accident-maintain.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-91150964"
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

/***/ 143:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#FFFFFF"
  },
  "border": {
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F1EFEF"
  },
  "line": {
    "width": "750",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "item-container": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "overflow": "hidden",
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "0"
  },
  "item-value-container": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "overflow": "hidden",
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0"
  },
  "item-container-auto": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden",
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "0"
  },
  "maintainItem-container": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "paddingLeft": "40",
    "paddingRight": "40",
    "backgroundColor": "#FFFFFF"
  },
  "item-title": {
    "color": "#666666",
    "fontSize": "30"
  },
  "item-title-pre": {
    "color": "#FF0000",
    "fontSize": "30",
    "marginTop": "8"
  },
  "item-value": {
    "color": "#333333",
    "textAlign": "right",
    "width": "400",
    "fontSize": "30"
  },
  "item-value-auto": {
    "color": "#333333",
    "textAlign": "right",
    "width": "540",
    "fontSize": "30"
  },
  "item-icon": {
    "marginLeft": "5",
    "width": "20",
    "height": "20"
  },
  "item-add-btn": {
    "width": "90",
    "height": "46",
    "borderWidth": "2",
    "borderColor": "#5ABECF",
    "fontSize": "28",
    "color": "#5ABECF",
    "borderRadius": "8",
    "textAlign": "center"
  },
  "placeholder": {
    "color": "#BFBFBF",
    "fontSize": "30",
    "textAlign": "right",
    "width": "490",
    "backgroundColor": "#FFFFFF"
  },
  "item-textarea": {
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "width": "550"
  }
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gridImageSelect = __webpack_require__(24);

var _gridImageSelect2 = _interopRequireDefault(_gridImageSelect);

var _accidentMaintainItem = __webpack_require__(97);

var _accidentMaintainItem2 = _interopRequireDefault(_accidentMaintainItem);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { gridImageSelect: _gridImageSelect2.default, maintainItem: _accidentMaintainItem2.default },
	props: {
		accidentItem: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		maintenanceItemList: {
			type: Array(),
			default: function _default() {
				return [];
			}
		},
		maintainPicUrls: {
			type: Array(),
			default: function _default() {
				return [];
			}
		}
	},
	data: function data() {
		return {
			arrowDown: "local:///arrow_down.png"
		};
	},
	created: function created() {},

	methods: {
		onPlaceChange: function onPlaceChange(e) {
			this.accidentItem.maintainAddr = e.value;
		},
		onReasonChange: function onReasonChange(e) {
			this.accidentItem.maintainReason = e.value;
		},
		addMaintainItem: function addMaintainItem() {
			var self = this;
			weex.requireModule('hkAccident').addMaintainItemDidClick(null, function (response) {
				self.maintenanceItemList.push(response.payload);
			});
		},
		deleteMaintainItem: function deleteMaintainItem(item) {
			var index = this.maintenanceItemList.indexOf(item);
			this.maintenanceItemList.splice(index, 1);
		},

		// 送修日期点击
		repairDateDidClick: function repairDateDidClick() {
			this.$emit('repairDateDidClick', this.maintainItem);
		},
		pickupDateDidClick: function pickupDateDidClick() {
			this.$emit('pickupDateDidClick', this.maintainItem);
		}
	}
};

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(0), (_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["item-value-container"],
    on: {
      "click": function($event) {
        _vm.repairDateDidClick()
      }
    }
  }, [(_vm.accidentItem.repairDate) ? _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.repairDate))]) : _c('text', {
    staticClass: ["placeholder"]
  }, [_vm._v("请选择送修日期")]), _c('image', {
    staticClass: ["item-icon"],
    attrs: {
      "src": _vm.arrowDown,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.repairDate))])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(1), (_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["item-value-container"],
    on: {
      "click": function($event) {
        _vm.pickupDateDidClick()
      }
    }
  }, [(_vm.accidentItem.pickupDate) ? _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.pickupDate))]) : _c('text', {
    staticClass: ["placeholder"]
  }, [_vm._v("请选择取车日期")]), _c('image', {
    staticClass: ["item-icon"],
    attrs: {
      "src": _vm.arrowDown,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.pickupDate))])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("维修周期：")]), _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.maintainCycle) + "天")])]), _c('div', {
    staticClass: ["item-container-auto", "border"]
  }, [_vm._m(2), (_vm.accidentItem.isRewrite) ? _c('textarea', {
    staticClass: ["item-textarea"],
    attrs: {
      "maxlength": "50",
      "rows": "2",
      "autofocus": "false",
      "value": _vm.accidentItem.maintainAddr,
      "placeholder": "请输入最多50字文字说明",
      "type": "text"
    },
    on: {
      "change": _vm.onPlaceChange
    }
  }) : _c('text', {
    staticClass: ["item-value-auto"]
  }, [_vm._v(_vm._s(_vm.accidentItem.maintainAddr))])]), _c('div', {
    staticClass: ["item-container"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("维修项目:")]), (_vm.accidentItem.isRewrite) ? _c('text', {
    staticClass: ["item-add-btn"],
    on: {
      "click": function($event) {
        _vm.addMaintainItem()
      }
    }
  }, [_vm._v("添加")]) : _vm._e()]), _c('div', {
    staticClass: ["maintainItem-container"]
  }, _vm._l((_vm.maintenanceItemList), function(item, index) {
    return _c('div', {
      staticClass: ["maintainItem"]
    }, [_c('maintainItem', {
      attrs: {
        "maintainItem": item,
        "isRewrite": _vm.accidentItem.isRewrite
      },
      on: {
        "deleteMaintainItem": _vm.deleteMaintainItem
      }
    })], 1)
  })), _c('div', {
    staticClass: ["border"]
  }), _c('div', {
    staticClass: ["item-container-auto", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("维修原因:")]), (_vm.accidentItem.isRewrite) ? _c('textarea', {
    staticClass: ["item-textarea"],
    attrs: {
      "maxlength": "50",
      "rows": "2",
      "autofocus": "false",
      "value": _vm.accidentItem.maintainReason,
      "placeholder": "请输入最多50字文字说明",
      "type": "text"
    },
    on: {
      "change": _vm.onReasonChange
    }
  }) : _c('text', {
    staticClass: ["item-value-auto"]
  }, [_vm._v(_vm._s(_vm.accidentItem.maintainReason))])]), _c('div', {
    staticClass: ["item-container"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("维修照片:")]), (!_vm.maintainPicUrls && !_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["line"]
  }) : _vm._e()]), _c('gridImageSelect', {
    attrs: {
      "orginImages": _vm.maintainPicUrls,
      "pageOnlyViewFlag": !_vm.accidentItem.isRewrite,
      "itemIndex": 0,
      "checkedNotPassFlag": true,
      "checkType": 1
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("送修日期：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("取车日期：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("维修地点：")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(147)
)

/* script */
__vue_exports__ = __webpack_require__(148)

/* template */
var __vue_template__ = __webpack_require__(149)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Accident/accident-record.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b8b8dd4"
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

/***/ 147:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#FFFFFF"
  },
  "border": {
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F1EFEF"
  },
  "line": {
    "width": "750",
    "height": "2",
    "backgroundColor": "#F1EFEF"
  },
  "item-container": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "0",
    "overflow": "hidden"
  },
  "item-container-auto": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "paddingTop": "20",
    "paddingRight": "0",
    "paddingBottom": "20",
    "paddingLeft": "0",
    "overflow": "hidden"
  },
  "item-title": {
    "color": "#666666",
    "fontSize": "30"
  },
  "item-title-pre": {
    "color": "#FF0000",
    "fontSize": "30",
    "marginTop": "8"
  },
  "item-value-container": {
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "item-value": {
    "color": "#333333",
    "width": "500",
    "fontSize": "30",
    "textAlign": "right"
  },
  "item-value-auto": {
    "color": "#333333",
    "width": "540",
    "fontSize": "30",
    "textAlign": "right"
  },
  "item-input": {
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "width": "490",
    "backgroundColor": "#FFFFFF"
  },
  "item-icon": {
    "marginLeft": "5",
    "width": "20",
    "height": "20"
  },
  "accident-type-container": {
    "width": "670",
    "alignItems": "center"
  },
  "accident-type-item": {
    "width": "600",
    "height": "90"
  },
  "accident-type-title-normal": {
    "color": "#333333",
    "fontSize": "30",
    "height": "90",
    "lineHeight": "90"
  },
  "accident-type-title-light": {
    "color": "#5ABECF",
    "fontSize": "30",
    "height": "90",
    "lineHeight": "90"
  },
  "accident-level-container": {
    "width": "670",
    "alignItems": "center",
    "paddingBottom": "15"
  },
  "accident-level-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "600",
    "height": "90",
    "backgroundColor": "#FFFFFF"
  },
  "accident-level-icon": {
    "width": "32",
    "height": "32"
  },
  "accident-level-title": {
    "marginLeft": "20",
    "color": "#333333",
    "fontSize": "30"
  },
  "accident-level-confirm": {
    "marginTop": "15",
    "width": "250",
    "height": "88",
    "lineHeight": "88",
    "backgroundColor": "#5ABECF",
    "borderRadius": "6",
    "textAlign": "center",
    "color": "#FFFFFF"
  },
  "item-textarea": {
    "color": "#333333",
    "fontSize": "30",
    "textAlign": "right",
    "width": "540"
  }
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gridImageSelect = __webpack_require__(24);

var _gridImageSelect2 = _interopRequireDefault(_gridImageSelect);

var _eitherOr = __webpack_require__(65);

var _eitherOr2 = _interopRequireDefault(_eitherOr);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { GridImageSelect: _gridImageSelect2.default, eitherOr: _eitherOr2.default },
	props: {
		accidentItem: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	data: function data() {
		return {
			isExpandLevel: false,
			isExpandType: false,
			arrowDown: "local:///arrow_down.png",
			selectLevelIcon: "local:///inspect_filter_selected.png",
			unSelectLevelIcon: "local:///inspect_filter_un_selected.png",
			tempLevels: []
		};
	},
	created: function created() {
		for (var i in this.accidentItem.levels) {
			var object = { index: this.accidentItem.levels[i].index, title: this.accidentItem.levels[i].title, selected: this.accidentItem.levels[i].selected };
			this.tempLevels.push(object);
		}
	},

	computed: {},
	methods: {
		userEitherItemDidClick: function userEitherItemDidClick(item) {
			this.accidentItem.selfFlag = item.fault;
		},
		injureEitherItemDidClick: function injureEitherItemDidClick(item) {
			this.accidentItem.injureFlag = item.fault;
		},

		// 事故时间点击
		accidentTimeDidClick: function accidentTimeDidClick() {
			this.$emit('accidentTimeDidClick', this.maintainItem);
		},

		// 事故等级
		accidentLevelClick: function accidentLevelClick() {
			this.isExpandLevel = !this.isExpandLevel;
		},
		levelItemConfirm: function levelItemConfirm() {
			var temp = Array();
			for (var i in this.tempLevels) {
				if (this.tempLevels[i].selected) {
					temp.push(this.tempLevels[i].title);
				}
				this.accidentItem.levels[i].selected = this.tempLevels[i].selected;
			}
			this.accidentItem.currentLevel = temp.join("、");
			this.accidentLevelClick();
		},
		levelItemClick: function levelItemClick(index) {
			this.tempLevels[index].selected = !this.tempLevels[index].selected;
		},


		// 事故类型
		accidentTypeClick: function accidentTypeClick() {
			this.isExpandType = !this.isExpandType;
		},
		typeItemClick: function typeItemClick(index) {
			for (var i = 0; i < this.accidentItem.types.length; i++) {
				this.accidentItem.types[i].selected = false;
			}
			this.accidentItem.types[index].selected = true;
			this.accidentItem.currentType = this.accidentItem.types[index].title;
			this.accidentTypeClick();
		},
		onBranchNameChange: function onBranchNameChange(e) {
			this.accidentItem.place = e.value;
		},
		onDriverNameChange: function onDriverNameChange(e) {
			this.accidentItem.driverName = e.value;
		},
		onPhoneNoChange: function onPhoneNoChange(e) {
			this.accidentItem.phoneNo = e.value;
		},
		onHeaderChange: function onHeaderChange(e) {
			this.accidentItem.responsiblePerson = e.value;
		},
		onReasonChange: function onReasonChange(e) {
			this.accidentItem.reason = e.value;
		},
		onRemarkChange: function onRemarkChange(e) {
			this.accidentItem.remarks = e.value;
		}
	}
};

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.accidentItem.orderId) ? _c('div', {
    staticClass: ["item-container", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("订单编号：")]), _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.orderId))])]) : _vm._e(), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(0), (_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["item-value-container"],
    on: {
      "click": function($event) {
        _vm.accidentTimeDidClick()
      }
    }
  }, [_c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.accidentTime))]), _c('image', {
    staticClass: ["item-icon"],
    attrs: {
      "src": _vm.arrowDown,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.accidentTime))])]), _c('div', {
    staticClass: ["item-container-auto", "border"]
  }, [_vm._m(1), (_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "value": _vm.accidentItem.place,
      "maxlength": "50",
      "autofocus": "false",
      "type": "text",
      "placeholder": "请输入最多50字文字说明"
    },
    on: {
      "change": _vm.onBranchNameChange
    }
  }) : _c('text', {
    staticClass: ["item-value-auto"]
  }, [_vm._v(_vm._s(_vm.accidentItem.place))])]), _c('either-or', {
    attrs: {
      "fault": _vm.accidentItem.selfFlag,
      "isRewrite": _vm.accidentItem.isRewrite,
      "isRequire": true,
      "title": "用户本人肇事："
    },
    on: {
      "eitherItemDidClick": _vm.userEitherItemDidClick
    }
  }), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(2), (_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.accidentItem.driverName,
      "placeholder": "请输入司机姓名",
      "type": "text"
    },
    on: {
      "change": _vm.onDriverNameChange
    }
  }) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.driverName))])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(3), (_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.accidentItem.phoneNo,
      "placeholder": "请输入联系电话",
      "type": "number"
    },
    on: {
      "change": _vm.onPhoneNoChange
    }
  }) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.phoneNo))])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(4), (_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "autofocus": "false",
      "value": _vm.accidentItem.responsiblePerson,
      "placeholder": "请输入事故责任人",
      "type": "text"
    },
    on: {
      "change": _vm.onHeaderChange
    }
  }) : _c('text', {
    staticClass: ["tem-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.responsiblePerson))])]), _c('div', {
    staticClass: ["item-container-auto", "border"]
  }, [_vm._m(5), (_vm.accidentItem.isRewrite) ? _c('input', {
    staticClass: ["item-input"],
    attrs: {
      "value": _vm.accidentItem.place,
      "maxlength": "50",
      "autofocus": "false",
      "type": "text",
      "placeholder": "请输入最多50字文字说明"
    },
    on: {
      "change": _vm.onBranchNameChange
    }
  }) : _c('text', {
    staticClass: ["item-value-auto"]
  }, [_vm._v(_vm._s(_vm.accidentItem.reason))])]), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(6), (_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["item-value-container"],
    on: {
      "click": function($event) {
        _vm.accidentLevelClick()
      }
    }
  }, [_c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentLevel))]), _c('image', {
    staticClass: ["item-icon"],
    attrs: {
      "src": _vm.arrowDown,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentLevel))])]), (_vm.isExpandLevel) ? _c('div', {
    staticClass: ["accident-level-container", "border"]
  }, [_vm._l((_vm.tempLevels), function(item, index) {
    return _c('div', {
      staticClass: ["accident-level-item", "border"],
      on: {
        "click": function($event) {
          _vm.levelItemClick(index)
        }
      }
    }, [_c('image', {
      staticClass: ["accident-level-icon"],
      attrs: {
        "src": item.selected ? _vm.selectLevelIcon : _vm.unSelectLevelIcon,
        "resize": "contain"
      }
    }), _c('text', {
      staticClass: ["accident-level-title"]
    }, [_vm._v(_vm._s(item.title))])])
  }), _c('text', {
    staticClass: ["accident-level-confirm"],
    on: {
      "click": function($event) {
        _vm.levelItemConfirm()
      }
    }
  }, [_vm._v("确定")])], 2) : _vm._e(), _c('div', {
    staticClass: ["item-container", "border"]
  }, [_vm._m(7), (_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["item-value-container"],
    on: {
      "click": function($event) {
        _vm.accidentTypeClick()
      }
    }
  }, [_c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentType))]), _c('image', {
    staticClass: ["item-icon"],
    attrs: {
      "src": _vm.arrowDown,
      "resize": "contain"
    }
  })]) : _c('text', {
    staticClass: ["item-value"]
  }, [_vm._v(_vm._s(_vm.accidentItem.currentType))])]), (_vm.isExpandType) ? _c('div', {
    staticClass: ["accident-type-container"]
  }, _vm._l((_vm.accidentItem.types), function(item, index) {
    return _c('div', {
      staticClass: ["accident-type-item", "border"],
      on: {
        "click": function($event) {
          _vm.typeItemClick(index)
        }
      }
    }, [_c('text', {
      class: [item.selected ? 'accident-type-title-light' : 'accident-type-title-normal']
    }, [_vm._v(_vm._s(item.title))])])
  })) : _vm._e(), _c('either-or', {
    attrs: {
      "fault": _vm.accidentItem.injureFlag,
      "isRewrite": _vm.accidentItem.isRewrite,
      "isRequire": true,
      "title": "是否人员伤亡："
    },
    on: {
      "eitherItemDidClick": _vm.injureEitherItemDidClick
    }
  }), _c('div', {
    staticClass: ["item-container-auto", "border"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故备注:")]), (_vm.accidentItem.isRewrite) ? _c('textarea', {
    staticClass: ["item-textarea"],
    attrs: {
      "rows": "2",
      "maxlength": "50",
      "autofocus": "false",
      "value": _vm.accidentItem.remarks,
      "placeholder": "请输入最多50字文字说明",
      "type": "text"
    },
    on: {
      "change": _vm.onRemarkChange
    }
  }) : _c('text', {
    staticClass: ["item-value-auto"]
  }, [_vm._v(_vm._s(_vm.accidentItem.remarks))])]), _c('div', {
    staticClass: ["item-container"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故照片:")]), (!_vm.accidentItem.pictures && !_vm.accidentItem.isRewrite) ? _c('div', {
    staticClass: ["line"]
  }) : _vm._e()]), _c('grid-image-select', {
    attrs: {
      "orginImages": _vm.accidentItem.pictures,
      "pageOnlyViewFlag": !_vm.accidentItem.isRewrite,
      "itemIndex": 0,
      "checkedNotPassFlag": true,
      "checkType": 1
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故时间：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故地点：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("司机姓名：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("联系电话：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故责任人：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故原因：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故等级：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("事故类型：")])])
}]}
module.exports.render._withStripped = true

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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HKAccidenting = __webpack_require__(261);

var _HKAccidenting2 = _interopRequireDefault(_HKAccidenting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HKAccidenting2.default.el = '#root';
new Vue(_HKAccidenting2.default);

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(262)
)

/* script */
__vue_exports__ = __webpack_require__(263)

/* template */
var __vue_template__ = __webpack_require__(264)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Accident/HKAccidenting.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-94eee596"
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

/***/ 262:
/***/ (function(module, exports) {

module.exports = {
  "accident-container": {
    "backgroundColor": "#F9F9F9"
  },
  "bottom-margin": {
    "paddingBottom": "130"
  },
  "accident-check": {
    "backgroundColor": "#FFFFFF",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "marginTop": "10",
    "borderTopWidth": "2",
    "borderBottomWidth": "2",
    "borderColor": "#EEEEEE"
  },
  "accident-check-title": {
    "height": "90",
    "lineHeight": "90",
    "fontSize": "30",
    "color": "#333333",
    "marginLeft": "24"
  },
  "accident-check-icon": {
    "width": "20",
    "height": "20",
    "marginRight": "24"
  },
  "bottom-opts": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#F9F9F9",
    "justifyContent": "space-around",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "btns": {
    "width": "345",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#5ABECF",
    "borderRadius": "6",
    "textAlign": "center",
    "height": "90",
    "lineHeight": "90",
    "color": "#5ABECF",
    "fontSize": "30"
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
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "borderRadius": "6"
  },
  "btn-submit": {
    "color": "#FFFFFF",
    "backgroundColor": "#5ABECF",
    "fontSize": "30",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "borderRadius": "6"
  },
  "btn-save-disabled": {
    "color": "#DCDCDC",
    "fontSize": "30",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "borderRadius": "6"
  }
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vehicleHeader = __webpack_require__(70);

var _vehicleHeader2 = _interopRequireDefault(_vehicleHeader);

var _accidentRecord = __webpack_require__(146);

var _accidentRecord2 = _interopRequireDefault(_accidentRecord);

var _accidentMaintain = __webpack_require__(142);

var _accidentMaintain2 = _interopRequireDefault(_accidentMaintain);

var _accidentFee = __webpack_require__(138);

var _accidentFee2 = _interopRequireDefault(_accidentFee);

var _accidentBase = __webpack_require__(134);

var _accidentBase2 = _interopRequireDefault(_accidentBase);

var _workflowList = __webpack_require__(74);

var _workflowList2 = _interopRequireDefault(_workflowList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: "accident",
	components: {
		'vehicle-header': _vehicleHeader2.default,
		'accidentRecord': _accidentRecord2.default,
		'accidentMaintain': _accidentMaintain2.default,
		'accidentFee': _accidentFee2.default,
		'accidentBase': _accidentBase2.default,
		'flowList': _workflowList2.default
	},
	data: function data() {
		return {
			accident: {
				isShowScanButton: false,
				isRewrite: true,
				selfWorkOrderFlag: 0,
				// 事故状态 1：未受理，2：已受理，4：已完结
				accidentStatus: 1,
				vno: '',
				workOrderNo: '',
				createTime: '',
				vehicleModelName: '',
				handleAddress: '',
				result: '',

				// ----------事故记录---------
				orderId: '',
				accidentTime: '',
				place: '',
				selfFlag: 0,
				driverName: '',
				phoneNo: '',
				responsiblePerson: '',
				reason: '',
				currentLevel: '',
				// {title: '逃逸', selected: false, index: 1}
				levels: [],
				currentType: '',
				// {title: '独立事故', selected: false, index: 1}
				types: [],
				injureFlag: 1,
				remarks: '',
				pictures: [],

				// ----------基本信息---------
				currentMethod: '',
				// {index: 1, title: "用户承担", selected: true, index: 1}
				methods: [],
				currentContact: '',
				// {index: 1, title: "未联系", selected: true, index: 1}
				contacts: [],
				payFlag: 0,
				handleRemarks: '',

				// ----------维修信息---------
				repairDate: '',
				pickupDate: '',
				maintainCycle: '',
				maintainAddr: '',
				// {itemCount: 0, itemName: "前保险杠", isAdd: true}
				maintenanceItemList: [],
				maintainReason: '',
				maintainPicUrls: [],

				// ----------费用信息---------
				damageAmount: '',
				insureClaimAmount: '',
				liabilityClaimAmount: '',
				companyUndertakeAmount: '',
				floatCost: '',
				delayCost: '',
				depreciateCost: '',
				actualCost: '',

				// 时间轴
				// {highlight: true, operateUserName: '张三', name: '李四', operateTime: '123456'}, 
				flowList: [],
				deviceList: []
			},
			isShowAccident: false,
			isShowMaintain: false,
			isShowFee: true,
			isShowBase: true,
			locateIcon: "local:///locate_icon.png",
			arrowUp: "local:///arrow_up.png",
			arrowDown: "local:///arrow_down.png",
			maintenanceItemList: [],
			maintainPicUrls: []
		};
	},

	computed: {
		isSubmitDisable: function isSubmitDisable() {
			if (!this.accident.place) {
				return '必填项事故地点未填写';
			}
			if (!this.accident.driverName) {
				return '必填项司机姓名未填写';
			}
			if (!this.accident.phoneNo) {
				return '必填项联系电话未填写';
			}
			if (!this.accident.responsiblePerson) {
				return '必填项事故责任人未填写';
			}
			if (!this.accident.reason) {
				return '必填项事故原因未填写';
			}
			if (!this.accident.currentLevel) {
				return '必填项事故等级未填写';
			}
			if (!this.accident.currentType) {
				return '必填项事故类型未填写';
			}
			if (!this.accident.repairDate) {
				return '必填项送修日期未填写';
			}
			if (!this.accident.pickupDate) {
				return '必填项取车日期未填写';
			}
			if (!this.accident.maintainAddr) {
				return '必填项维修地点未填写';
			}
			if (!this.accident.damageAmount) {
				return '必填项定损金额未填写';
			}
			if (!this.accident.insureClaimAmount) {
				return '必填项保险理赔金额未填写';
			}
			if (!this.accident.liabilityClaimAmount) {
				return '必填项责任理赔金额未填写';
			}
			if (!this.accident.companyUndertakeAmount) {
				return '必填项公司承担金额未填写';
			}
			return null;
		}
	},
	created: function created() {
		var self = this;
		weex.requireModule('hkAccident').getWorksheetDetail(null, function (response) {
			for (var i in response.payload.maintenanceItemList) {
				self.maintenanceItemList.push(response.payload.maintenanceItemList[i]);
			}
			for (var i in response.payload.maintainPicUrls) {
				self.maintainPicUrls.push(response.payload.maintainPicUrls[i]);
			}
			self.accident = response.payload;
			self.isShowAccident = true;
			self.isShowMaintain = true;
		});
	},

	methods: {
		submit: function submit() {
			if (this.isSubmitDisable) {
				weex.requireModule('modal').toast({
					message: this.isSubmitDisable,
					duration: 1.5
				});
				return;
			};
			this.accident.maintenanceItemList = this.maintenanceItemList;
			this.accident.maintainPicUrls = this.maintainPicUrls;
			weex.requireModule('hkAccident').submitWorksheetDetail(this.accident, function (response) {});
		},
		save: function save() {
			this.accident.maintenanceItemList = this.maintenanceItemList;
			this.accident.maintainPicUrls = this.maintainPicUrls;
			weex.requireModule('hkAccident').saveWorkSheetDetail(this.accident, function (response) {});
		},

		// 事故时间点击
		accidentTimeDidClick: function accidentTimeDidClick(item) {
			var self = this;
			weex.requireModule('hkAccident').accidentTimeDidClick(null, function (response) {
				self.accident.accidentTime = response.payload;
			});
		},

		// 添加维修项目
		addMaintainItemDidClick: function addMaintainItemDidClick(item) {
			var self = this;
			weex.requireModule('hkAccident').addMaintainItemDidClick(null, function (response) {
				self.accident.maintenanceItemList.push(response.payload);
			});
		},

		// 送修日期点击
		repairDateDidClick: function repairDateDidClick(item) {
			var info = { repairDate: this.accident.repairDate, pickupDate: this.accident.pickupDate };
			var self = this;
			weex.requireModule('hkAccident').repairDateDidClick(info, function (response) {
				self.accident.repairDate = response.payload.repairDate;
				self.accident.maintainCycle = response.payload.maintainCycle;
			});
		},
		pickupDateDidClick: function pickupDateDidClick(item) {
			var info = { repairDate: this.accident.repairDate, pickupDate: this.accident.pickupDate };
			var self = this;
			weex.requireModule('hkAccident').pickupDateDidClick(info, function (response) {
				self.accident.pickupDate = response.payload.pickupDate;
				self.accident.maintainCycle = response.payload.maintainCycle;
			});
		},
		accidentRecordDidClick: function accidentRecordDidClick() {
			this.isShowAccident = !this.isShowAccident;
		},
		accidentBaseDidClick: function accidentBaseDidClick() {
			this.isShowBase = !this.isShowBase;
		},
		accidentMaintainDidClick: function accidentMaintainDidClick() {
			this.isShowMaintain = !this.isShowMaintain;
		},
		accidentFeeDidClick: function accidentFeeDidClick() {
			this.isShowFee = !this.isShowFee;
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

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["accident-container"],
    class: [_vm.accident.isRewrite ? 'bottom-margin' : '']
  }, [_c('vehicle-header', {
    attrs: {
      "data": _vm.accident
    }
  }), _c('div', {
    staticClass: ["accident-check"],
    on: {
      "click": function($event) {
        _vm.accidentRecordDidClick()
      }
    }
  }, [_c('text', {
    staticClass: ["accident-check-title"]
  }, [_vm._v("事故记录")]), _c('image', {
    staticClass: ["accident-check-icon"],
    attrs: {
      "src": _vm.isShowAccident ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (_vm.isShowAccident) ? _c('accidentRecord', {
    attrs: {
      "accidentItem": _vm.accident
    },
    on: {
      "accidentTimeDidClick": _vm.accidentTimeDidClick
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["accident-check"],
    on: {
      "click": function($event) {
        _vm.accidentBaseDidClick()
      }
    }
  }, [_c('text', {
    staticClass: ["accident-check-title"]
  }, [_vm._v("事故处理(基本信息)")]), _c('image', {
    staticClass: ["accident-check-icon"],
    attrs: {
      "src": _vm.isShowBase ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (_vm.isShowBase) ? _c('accidentBase', {
    attrs: {
      "accidentItem": _vm.accident
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["accident-check"],
    on: {
      "click": function($event) {
        _vm.accidentMaintainDidClick()
      }
    }
  }, [_c('text', {
    staticClass: ["accident-check-title"]
  }, [_vm._v("事故处理(维修信息)")]), _c('image', {
    staticClass: ["accident-check-icon"],
    attrs: {
      "src": _vm.isShowMaintain ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (_vm.isShowMaintain) ? _c('accidentMaintain', {
    attrs: {
      "accidentItem": _vm.accident,
      "maintenanceItemList": _vm.maintenanceItemList,
      "maintainPicUrls": _vm.maintainPicUrls
    },
    on: {
      "addMaintainItemDidClick": _vm.addMaintainItemDidClick,
      "repairDateDidClick": _vm.repairDateDidClick,
      "pickupDateDidClick": _vm.pickupDateDidClick
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["accident-check"],
    on: {
      "click": function($event) {
        _vm.accidentFeeDidClick()
      }
    }
  }, [_c('text', {
    staticClass: ["accident-check-title"]
  }, [_vm._v("事故处理(费用信息)")]), _c('image', {
    staticClass: ["accident-check-icon"],
    attrs: {
      "src": _vm.isShowFee ? _vm.arrowUp : _vm.arrowDown,
      "resize": "contain"
    }
  })]), (_vm.isShowFee) ? _c('accidentFee', {
    attrs: {
      "accidentItem": _vm.accident
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["accident-check"],
    staticStyle: {
      borderWidth: "0px"
    }
  }, [_c('flowList', {
    attrs: {
      "flowList": _vm.accident.flowList
    }
  })], 1)], 1), (_vm.accident.isRewrite) ? _c('div', {
    staticClass: ["bottom-opts"]
  }, [_c('text', {
    staticClass: ["btns"],
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存")]), _c('text', {
    staticClass: ["btns"],
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交工单")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(67)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(69)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Accident/either-or.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f030e8a0"
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

/***/ 67:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF"
  },
  "check-container": {
    "flexDirection": "row",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F1EFEF",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "90"
  },
  "item-title-pre": {
    "color": "#FF0000",
    "fontSize": "30",
    "marginTop": "30"
  },
  "title-normal": {
    "color": "#666666",
    "fontSize": "30",
    "marginTop": "20",
    "marginBottom": "20"
  },
  "checked-normal": {
    "backgroundColor": "#ffffff",
    "position": "relative"
  },
  "check-text": {
    "height": "54",
    "lineHeight": "54",
    "width": "130",
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
    "width": "130",
    "height": "54",
    "position": "absolute",
    "right": 0,
    "top": 0
  }
}

/***/ }),

/***/ 68:
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

exports.default = {
	name: "either-or",
	props: {
		title: {
			type: String
		},
		fault: {
			type: Number
		},
		index: {
			type: Number
		},
		isRewrite: {
			type: Boolean
		},
		isRequire: {
			type: Boolean,
			default: false
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
		eitherItemDidClick: function eitherItemDidClick(state) {
			this.fault = state;
			this.$emit('eitherItemDidClick', { index: this.index, fault: this.fault });
		}
	}
};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["check-container"]
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [(_vm.isRequire) ? _c('text', {
    staticClass: ["item-title-pre"]
  }, [_vm._v("*")]) : _vm._e(), _c('text', {
    staticClass: ["title-normal"]
  }, [_vm._v(_vm._s(_vm.title))])]), (_vm.isRewrite) ? _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('div', {
    staticClass: ["checked-normal"],
    on: {
      "click": function($event) {
        _vm.eitherItemDidClick(1)
      }
    }
  }, [_c('text', {
    staticClass: ["check-text"],
    class: [_vm.fault == 1 ? 'checked-pass' : '']
  }, [_vm._v("是")]), _c('image', {
    staticClass: ["checked-icon"],
    attrs: {
      "src": _vm.fault == 1 ? _vm.checkedPassIcon : _vm.checkedPassNoramlIcon,
      "resize": "contain"
    }
  })]), _c('div', {
    staticClass: ["checked-normal"],
    staticStyle: {
      marginLeft: "20px"
    },
    on: {
      "click": function($event) {
        _vm.eitherItemDidClick(0)
      }
    }
  }, [_c('text', {
    staticClass: ["check-text"],
    class: [_vm.fault == 0 ? 'checked-not-pass' : '']
  }, [_vm._v("否")]), _c('image', {
    staticClass: ["checked-icon"],
    attrs: {
      "src": _vm.fault == 0 ? _vm.checkedNotPassIcon : _vm.checkedNotPassNormalIcon,
      "resize": "contain"
    }
  })])]) : (_vm.fault == 1) ? _c('text', {
    staticClass: ["title-normal"]
  }, [_vm._v("是")]) : (_vm.fault == 0) ? _c('text', {
    staticClass: ["title-normal"]
  }, [_vm._v("否")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(98)
)

/* script */
__vue_exports__ = __webpack_require__(99)

/* template */
var __vue_template__ = __webpack_require__(100)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Accident/accident-maintain-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-09562862"
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

/***/ 98:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "height": "90",
    "backgroundColor": "#FFFFFF",
    "alignItems": "center"
  },
  "delete": {
    "width": "36",
    "height": "36"
  },
  "title": {
    "textAlign": "right",
    "fontSize": "30",
    "color": "#333333",
    "width": "144",
    "height": "90",
    "lineHeight": "90",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "add-title": {
    "minWidth": "144",
    "maxWidth": "445",
    "marginLeft": "8",
    "textAlign": "left",
    "fontSize": "30",
    "color": "#333333",
    "height": "90",
    "lineHeight": "90",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "operate-container": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "marginLeft": "34"
  },
  "operate-image-down": {
    "width": "36",
    "height": "36"
  },
  "operate-count": {
    "marginLeft": "4",
    "marginRight": "4",
    "fontSize": "30",
    "color": "#999999",
    "height": "90",
    "lineHeight": "90"
  },
  "operate-image-up": {
    "width": "36",
    "height": "36"
  }
}

/***/ }),

/***/ 99:
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

exports.default = {
	name: "accident-maintain-item",
	props: {
		maintainItem: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		isRewrite: {
			type: Boolean
		}
	},
	data: function data() {
		return {
			image_count_delete: 'local:///accident_count_delete.png',
			image_count_down: 'local:///accident_count_down.png',
			image_count_up: 'local:///accident_count_up.png'
		};
	},
	created: function created() {},

	methods: {
		operateCountDown: function operateCountDown() {
			if (this.maintainItem.itemCount == 0) return;
			this.maintainItem.itemCount -= 1;
		},
		operateCountUp: function operateCountUp() {
			this.maintainItem.itemCount += 1;
		},
		deleteMaintainItem: function deleteMaintainItem() {
			this.$emit('deleteMaintainItem', this.maintainItem);
		}
	}
};

/***/ })

/******/ });