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
/******/ 	return __webpack_require__(__webpack_require__.s = 257);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(18)
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

/***/ 11:
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

/***/ 12:
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

var _wxcMask = __webpack_require__(13);

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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(14);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/WX/charger.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-21487d96"
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
    "backgroundColor": "#FFFFFF",
    "marginTop": "18"
  },
  "arrow": {
    "width": "16",
    "height": "10"
  },
  "arrow-light": {
    "width": "10",
    "height": "20"
  },
  "icon": {
    "width": "32",
    "height": "32"
  },
  "header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": "96",
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "borderTopWidth": "2",
    "borderBottomWidth": "2",
    "borderTopColor": "#EEEEEE",
    "borderBottomColor": "#EEEEEE"
  },
  "row": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "title": {
    "height": "32",
    "lineHeight": "32",
    "marginLeft": "10",
    "fontSize": "28",
    "color": "#333333"
  },
  "content": {
    "paddingTop": "24",
    "paddingRight": "42",
    "paddingBottom": "24",
    "paddingLeft": "24"
  },
  "tips": {
    "fontSize": "28",
    "color": "#999999"
  },
  "branch": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "694",
    "height": "80",
    "marginTop": "0",
    "marginRight": "28",
    "marginBottom": "24",
    "marginLeft": "28",
    "paddingTop": "0",
    "paddingRight": "14",
    "paddingBottom": "0",
    "paddingLeft": "14",
    "borderWidth": "2",
    "borderColor": "#EBEBEB",
    "backgroundColor": "#FCFCFC",
    "borderRadius": "10"
  },
  "branch-name": {
    "width": "600",
    "height": "80",
    "fontSize": "28",
    "color": "#333333"
  }
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newGridImageSelect = __webpack_require__(31);

var _newGridImageSelect2 = _interopRequireDefault(_newGridImageSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { GridImageSelect: _newGridImageSelect2.default },
    props: {
        data: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        chargerImageList: {
            type: Array(),
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            arrowDown: "local:///arrow_down.png",
            arrowUp: "local:///arrow_up.png"
        };
    },
    mounted: function mounted() {},

    methods: {
        isExpandDidClick: function isExpandDidClick() {
            if (!this.data.isRewrite) return;
            this.data.isCharger = !this.data.isCharger;
        },
        getSelectIcon: function getSelectIcon() {
            if (this.data.isCharger) return 'local:///inspect_filter_selected.png';
            return 'local:///inspect_filter_un_selected.png';
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

/***/ 145:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"],
    on: {
      "click": function($event) {
        _vm.isExpandDidClick()
      }
    }
  }, [_c('div', {
    staticClass: ["row"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.getSelectIcon()
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("充电")])]), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": _vm.data.isCharger ? _vm.arrowDown : _vm.arrowUp
    }
  })]), (_vm.data.isCharger) ? _c('div', {
    staticClass: ["col"]
  }, [_vm._m(0), _c('grid-image-select', {
    attrs: {
      "orginImages": _vm.chargerImageList,
      "pageOnlyViewFlag": !_vm.data.isRewrite,
      "itemIndex": 0,
      "isShow": true
    }
  })], 1) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["tips"]
  }, [_vm._v("请上传充电缴费信息截屏")])])
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/WX/clean.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1de71180"
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
    "backgroundColor": "#FFFFFF",
    "marginTop": "18"
  },
  "arrow": {
    "width": "16",
    "height": "10"
  },
  "arrow-light": {
    "width": "10",
    "height": "20"
  },
  "icon": {
    "width": "32",
    "height": "32"
  },
  "header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": "96",
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "borderTopWidth": "2",
    "borderBottomWidth": "2",
    "borderTopColor": "#EEEEEE",
    "borderBottomColor": "#EEEEEE"
  },
  "row": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "title": {
    "height": "32",
    "lineHeight": "32",
    "marginLeft": "10",
    "fontSize": "28",
    "color": "#333333"
  },
  "content": {
    "paddingTop": "24",
    "paddingRight": "42",
    "paddingBottom": "24",
    "paddingLeft": "24"
  },
  "tips": {
    "fontSize": "28",
    "color": "#999999"
  },
  "branch": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "694",
    "height": "80",
    "marginTop": "0",
    "marginRight": "28",
    "marginBottom": "24",
    "marginLeft": "28",
    "paddingTop": "0",
    "paddingRight": "14",
    "paddingBottom": "0",
    "paddingLeft": "14",
    "borderWidth": "2",
    "borderColor": "#EBEBEB",
    "backgroundColor": "#FCFCFC",
    "borderRadius": "10"
  },
  "branch-name": {
    "width": "600",
    "height": "80",
    "fontSize": "28",
    "color": "#333333"
  }
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newGridImageSelect = __webpack_require__(31);

var _newGridImageSelect2 = _interopRequireDefault(_newGridImageSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { GridImageSelect: _newGridImageSelect2.default },
    props: {
        data: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        cleanImageList: {
            type: Array(),
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            arrowDown: "local:///arrow_down.png",
            arrowUp: "local:///arrow_up.png"
        };
    },
    mounted: function mounted() {},

    methods: {
        isExpandDidClick: function isExpandDidClick() {
            if (!this.data.isRewrite) return;
            this.data.isClean = !this.data.isClean;
        },
        getSelectIcon: function getSelectIcon() {
            if (this.data.isClean) return 'local:///inspect_filter_selected.png';
            return 'local:///inspect_filter_un_selected.png';
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

/***/ 149:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"],
    on: {
      "click": function($event) {
        _vm.isExpandDidClick()
      }
    }
  }, [_c('div', {
    staticClass: ["row"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.getSelectIcon()
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("清洁")])]), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": _vm.data.isClean ? _vm.arrowDown : _vm.arrowUp
    }
  })]), (_vm.data.isClean) ? _c('div', {
    staticClass: ["col"]
  }, [_vm._m(0), _c('grid-image-select', {
    attrs: {
      "orginImages": _vm.cleanImageList,
      "pageOnlyViewFlag": !_vm.data.isRewrite,
      "itemIndex": 0,
      "isShow": true
    }
  })], 1) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["tips"]
  }, [_vm._v("请上传前后对比照")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 15:
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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(151)
)

/* script */
__vue_exports__ = __webpack_require__(152)

/* template */
var __vue_template__ = __webpack_require__(153)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/WX/dispatch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-31022c93"
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

/***/ 151:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF",
    "marginTop": "18"
  },
  "arrow": {
    "width": "16",
    "height": "10"
  },
  "arrow-light": {
    "width": "10",
    "height": "20"
  },
  "icon": {
    "width": "32",
    "height": "32"
  },
  "header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": "96",
    "paddingTop": "0",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "borderTopWidth": "2",
    "borderBottomWidth": "2",
    "borderTopColor": "#EEEEEE",
    "borderBottomColor": "#EEEEEE"
  },
  "row": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "title": {
    "height": "32",
    "lineHeight": "32",
    "marginLeft": "10",
    "fontSize": "28",
    "color": "#333333"
  },
  "content": {
    "paddingTop": "24",
    "paddingRight": "42",
    "paddingBottom": "24",
    "paddingLeft": "24"
  },
  "tips": {
    "fontSize": "28",
    "color": "#999999"
  },
  "branch": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "694",
    "height": "80",
    "marginTop": "0",
    "marginRight": "28",
    "marginBottom": "24",
    "marginLeft": "28",
    "paddingTop": "0",
    "paddingRight": "14",
    "paddingBottom": "0",
    "paddingLeft": "14",
    "borderWidth": "2",
    "borderColor": "#EBEBEB",
    "backgroundColor": "#FCFCFC",
    "borderRadius": "10"
  },
  "branch-name": {
    "width": "600",
    "height": "80",
    "fontSize": "28",
    "color": "#333333"
  }
}

/***/ }),

/***/ 152:
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
    components: {},
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
            arrowDown: "local:///arrow_down.png",
            arrowUp: "local:///arrow_up.png",
            arrowLight: "local:///arrow_light.png"
        };
    },
    mounted: function mounted() {},

    methods: {
        isExpandDidClick: function isExpandDidClick() {
            if (!this.data.isRewrite) return;
            this.data.isDispatch = !this.data.isDispatch;
        },
        branchDidClick: function branchDidClick() {
            if (!this.data.isRewrite) return;
            var self = this;
            weex.requireModule('hkWXWorkSheet').choiceBranch(this.data, function (response) {
                self.data.dispatchRentalShopName = response.name;
                self.data.dispatchRentalShopId = response.ID;
            });
        },
        getSelectIcon: function getSelectIcon() {
            if (this.data.isDispatch) return 'local:///inspect_filter_selected.png';
            return 'local:///inspect_filter_un_selected.png';
        }
    }
};

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"],
    on: {
      "click": function($event) {
        _vm.isExpandDidClick()
      }
    }
  }, [_c('div', {
    staticClass: ["row"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.getSelectIcon()
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("调度")])]), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": _vm.data.isDispatch ? _vm.arrowDown : _vm.arrowUp
    }
  })]), (_vm.data.isDispatch) ? _c('div', {
    staticClass: ["col"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["branch"],
    on: {
      "click": function($event) {
        _vm.branchDidClick()
      }
    }
  }, [_c('input', {
    staticClass: ["branch-name"],
    attrs: {
      "disabled": true,
      "placeholder": "请选择网点",
      "value": (_vm.data.dispatchRentalShopName)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.data, "dispatchRentalShopName", $event.target.attr.value)
      }
    }
  }), _c('image', {
    staticClass: ["arrow-light"],
    attrs: {
      "src": _vm.arrowLight
    }
  })])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["tips"]
  }, [_vm._v("将车调度到网点")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(155)
)

/* script */
__vue_exports__ = __webpack_require__(156)

/* template */
var __vue_template__ = __webpack_require__(158)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/WX/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-49fb3566"
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

/***/ 155:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "borderBottomWidth": "2",
    "borderBottomColor": "#EEEEEE",
    "backgroundColor": "#FFFFFF"
  },
  "border": {
    "marginTop": "14",
    "width": "750",
    "height": "2",
    "backgroundColor": "#EEEEEE"
  },
  "vehicle-box": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "0",
    "paddingLeft": "24",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "a-box": {
    "paddingTop": "16",
    "paddingRight": "24",
    "paddingBottom": "16",
    "paddingLeft": "24",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "vehicle-left": {
    "flexDirection": "row"
  },
  "a-box-left": {
    "flexDirection": "row"
  },
  "operate": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "address-icon": {
    "width": "22",
    "height": "28"
  },
  "vehicle-number": {
    "height": "52",
    "lineHeight": "52",
    "lines": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "fontFamily": "PingFangSC-Regular",
    "maxWidth": "220",
    "fontSize": "38",
    "color": "#333333"
  },
  "vehicle-name": {
    "height": "52",
    "lineHeight": "52",
    "lines": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "fontFamily": "PingFangSC-Regular",
    "maxWidth": "148",
    "marginLeft": "8",
    "fontSize": "28",
    "color": "#666666"
  },
  "txt-number": {
    "height": "52",
    "lineHeight": "52",
    "color": "#999999",
    "fontSize": "26",
    "fontFamily": "PingFangSC-Regular"
  },
  "txt-time": {
    "color": "#999999",
    "fontSize": "26",
    "fontFamily": "PingFangSC-Regular",
    "height": "28",
    "lineHeight": "28"
  },
  "adress": {
    "lines": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "fontFamily": "PingFangSC-Regular",
    "marginLeft": "20",
    "color": "#333333",
    "fontSize": "28",
    "textAlign": "left",
    "maxWidth": "280",
    "height": "28",
    "lineHeight": "28"
  },
  "operate-box": {
    "width": "750",
    "height": "86",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "operate-txt-1": {
    "width": "375",
    "color": "#5ABECF",
    "fontSize": "32",
    "textAlign": "center",
    "borderRightWidth": "2",
    "borderColor": "#EEEEEE"
  },
  "operate-txt-2": {
    "width": "375",
    "color": "#5ABECF",
    "fontSize": "32",
    "textAlign": "center",
    "borderRightWidth": "2",
    "borderColor": "#EEEEEE"
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(157);

exports.default = {
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
            adressIcon: "local:///locate_icon.png"
        };
    },

    computed: {
        startTime: function startTime() {
            return (0, _utils.format)(this.data.startTime, 'YYYY-MM-DD HH:mm');
        }
    },
    methods: {
        vehicleUnLock: function vehicleUnLock() {
            if (!this.data.isRewrite) return;
            weex.requireModule('hkVehicle').vehicleUnLock(this.data, function (response) {});
        },
        vehicleLock: function vehicleLock() {
            if (!this.data.isRewrite) return;
            weex.requireModule('hkVehicle').vehicleLock(this.data, function (response) {});
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

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dateType = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss'];
var dateMap = {
    YYYY: 'getYear',
    MM: 'getMonth',
    DD: 'getDate',
    HH: 'getHours',
    mm: 'getMinutes',
    ss: 'getSeconds'
};

var dateFn = {
    getYear: function getYear(time) {
        return time.getFullYear();
    },
    getMonth: function getMonth(time) {
        var month = time.getMonth() + 1;
        return addZero(month);
    },
    getDate: function getDate(time) {
        var day = time.getDate();
        return addZero(day);
    },
    getHours: function getHours(time) {
        var hour = time.getHours();
        return addZero(hour);
    },
    getMinutes: function getMinutes(time) {
        var minute = time.getMinutes();
        return addZero(minute);
    },
    getSeconds: function getSeconds(time) {
        var second = time.getSeconds();
        return addZero(second);
    }
};

function addZero(num) {
    if (num < 10) num = '0' + num;
    return num;
}

var format = function format(date, type) {
    var time = date ? new Date(date) : new Date();
    var placeholder = type;
    dateType.forEach(function (val) {
        if (type.indexOf(val) > -1) {
            var trueValue = dateFn[dateMap[val]](time);
            placeholder = placeholder.replace(val, trueValue);
        }
    });
    return placeholder;
};

var setDays = function setDays(date, type, num) {
    var time = date ? new Date(date) : new Date();
    type === 'add' ? time.setDate(time.getDate() + num) : time.setDate(time.getDate() - num);
    return time;
};

exports.format = format;
exports.setDays = setDays;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["vehicle-box"]
  }, [_c('div', {
    staticClass: ["vehicle-left"]
  }, [_c('text', {
    staticClass: ["vehicle-number"]
  }, [_vm._v(_vm._s(_vm.data.vno))]), _c('text', {
    staticClass: ["vehicle-name"]
  }, [_vm._v(_vm._s(_vm.data.vehicleModelName))])]), _c('text', {
    staticClass: ["txt-number"]
  }, [_vm._v("工单号:" + _vm._s(_vm.data.number))])]), _c('div', {
    staticClass: ["a-box"]
  }, [_c('div', {
    staticClass: ["a-box-left"]
  }, [_c('image', {
    staticClass: ["address-icon"],
    attrs: {
      "src": _vm.adressIcon,
      "resize": "contain"
    }
  }), _c('text', {
    staticClass: ["adress"]
  }, [_vm._v(_vm._s(_vm.data.pickupRentalShopName))])]), _c('text', {
    staticClass: ["txt-time"]
  }, [_vm._v(_vm._s(_vm.startTime))])]), _c('div', {
    staticClass: ["border"]
  }), _c('div', {
    staticClass: ["operate-box"]
  }, [_c('text', {
    staticClass: ["operate-txt-1"],
    on: {
      "click": function($event) {
        _vm.vehicleUnLock()
      }
    }
  }, [_vm._v("解锁")]), _c('text', {
    staticClass: ["operate-txt-2"],
    on: {
      "click": function($event) {
        _vm.vehicleLock()
      }
    }
  }, [_vm._v("落锁")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 16:
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

/***/ 17:
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

/***/ 18:
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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HKWXWorkSheetDetail = __webpack_require__(258);

var _HKWXWorkSheetDetail2 = _interopRequireDefault(_HKWXWorkSheetDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HKWXWorkSheetDetail2.default.el = '#root';
new Vue(_HKWXWorkSheetDetail2.default);

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(259)
)

/* script */
__vue_exports__ = __webpack_require__(260)

/* template */
var __vue_template__ = __webpack_require__(261)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/WX/HKWXWorkSheetDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5e5716f2"
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

/***/ 259:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#F9F9F9"
  },
  "bottom-margin": {
    "paddingBottom": "120"
  },
  "cancel": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24",
    "backgroundColor": "#FFFFFF",
    "borderBottomWidth": "2",
    "borderBottomColor": "#EEEEEE"
  },
  "cancel-title": {
    "fontSize": "30",
    "color": "#333333"
  },
  "cancel-reason": {
    "marginTop": "10",
    "fontSize": "28",
    "color": "#999999"
  }
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = __webpack_require__(154);

var _header2 = _interopRequireDefault(_header);

var _clean = __webpack_require__(146);

var _clean2 = _interopRequireDefault(_clean);

var _charger = __webpack_require__(142);

var _charger2 = _interopRequireDefault(_charger);

var _dispatch = __webpack_require__(150);

var _dispatch2 = _interopRequireDefault(_dispatch);

var _bottom = __webpack_require__(74);

var _bottom2 = _interopRequireDefault(_bottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		'vehicle-header': _header2.default,
		'clean': _clean2.default,
		'charger': _charger2.default,
		'dispatch': _dispatch2.default,
		'bottom': _bottom2.default
	},
	data: function data() {
		return {
			data: {
				isRewrite: false,
				dispatchRentalShopId: '',
				dispatchRentalShopName: '',
				isClean: false,
				isCharger: false,
				isDispatch: false,
				cancelReason: '',
				cleanImageList: [],
				chargerImageList: [],
				workOrderImageList: []
			},
			cleanImageList: [],
			chargerImageList: [],
			isShowClean: false,
			isShowCharger: false,
			isShowDispatch: false
		};
	},
	created: function created() {
		var self = this;
		weex.requireModule('hkWXWorkSheet').getWorksheetDetail(null, function (response) {

			self.data = response.payload;
			self.filterWorkSheetImageList();

			self.isShowClean = true;
			self.isShowCharger = true;
			self.isShowDispatch = true;
		});
	},

	methods: {
		filterWorkSheetImageList: function filterWorkSheetImageList() {
			this.cleanImageList = this.data.cleanImageList.concat();
			this.chargerImageList = this.data.chargerImageList.concat();
		},
		cancelWorksheet: function cancelWorksheet(res) {
			weex.requireModule('hkWXWorkSheet').cancelWorksheet(this.data, function (response) {});
		},
		saveWorkSheet: function saveWorkSheet(res) {
			this.data.cleanImageList = this.cleanImageList;
			this.data.chargerImageList = this.chargerImageList;
			weex.requireModule('hkWXWorkSheet').saveWorkSheet(this.data, function (response) {});
		},
		submitWorksheet: function submitWorksheet(res) {
			this.data.cleanImageList = this.cleanImageList;
			this.data.chargerImageList = this.chargerImageList;
			weex.requireModule('hkWXWorkSheet').submitWorksheet(this.data, function (response) {});
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

/***/ 261:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["container"],
    class: [_vm.data.isRewrite ? 'bottom-margin' : '']
  }, [(_vm.data.completeFlg == 64) ? _c('div', {
    staticClass: ["cancel"]
  }, [_c('text', {
    staticClass: ["cancel-title"]
  }, [_vm._v("已取消")]), _c('text', {
    staticClass: ["cancel-reason"]
  }, [_vm._v("取消原因:" + _vm._s(_vm.data.cancelReason))])]) : _vm._e(), _c('vehicle-header', {
    attrs: {
      "data": _vm.data
    }
  }), (_vm.isShowClean) ? _c('clean', {
    attrs: {
      "data": _vm.data,
      "cleanImageList": _vm.cleanImageList
    }
  }) : _vm._e(), (_vm.isShowCharger) ? _c('charger', {
    attrs: {
      "data": _vm.data,
      "chargerImageList": _vm.chargerImageList
    }
  }) : _vm._e(), (_vm.isShowDispatch) ? _c('dispatch', {
    attrs: {
      "data": _vm.data
    }
  }) : _vm._e(), (_vm.data.isRewrite) ? _c('bottom', {
    attrs: {
      "hasCancel": true,
      "cancelFlag": false
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Components/new-grid-image-select.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2750c2b4"
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

/***/ 43:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexWrap": "wrap",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF"
  },
  "images": {
    "position": "relative",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "marginBottom": "24",
    "marginLeft": "24"
  },
  "image-icon": {
    "width": "218",
    "height": "218",
    "borderRadius": "6"
  },
  "add-icon": {
    "width": "218",
    "height": "218",
    "marginBottom": "24",
    "marginLeft": "24",
    "borderRadius": "6"
  },
  "delete-icon": {
    "width": "26",
    "height": "26",
    "position": "absolute",
    "right": "-13",
    "top": "-13"
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcLightbox = __webpack_require__(9);

var _wxcLightbox2 = _interopRequireDefault(_wxcLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "new-grid-image-select",
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
    isShow: {
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
      addIcon: "local:///add_image.png",
      deleteIcon: "local:///delete_image.png",
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

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isShow) ? _c('div', {
    staticClass: ["wrapper"]
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
  }) : _vm._e(), _c('wxc-lightbox', {
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
  })], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ 75:
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

/***/ 77:
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
  }, [_vm._v("保存")]), _c('text', {
    staticClass: ["txt-submit-normal"],
    class: [_vm.hasCancel ? '' : 'has-cancel-width'],
    on: {
      "click": _vm.submitDidClick
    }
  }, [_vm._v("提交工单")])])
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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(10);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });