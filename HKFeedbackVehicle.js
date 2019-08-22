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
/******/ 	return __webpack_require__(__webpack_require__.s = 272);
/******/ })
/************************************************************************/
/******/ ({

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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Components/bottom-start.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-06965024"
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
    "backgroundColor": "#F9F9F9"
  },
  "manager": {
    "width": "702",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "txt-grab-normal": {
    "textAlign": "center",
    "height": "98",
    "lineHeight": "98",
    "color": "#FFFFFF",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "borderRadius": "6",
    "width": "710",
    "backgroundColor": "#5ABECF"
  },
  "txt-grab-disable": {
    "textAlign": "center",
    "height": "98",
    "lineHeight": "98",
    "color": "#FFFFFF",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "borderRadius": "6",
    "width": "710",
    "backgroundColor": "#DCDCDC"
  },
  "txt-assgin-normal": {
    "textAlign": "center",
    "height": "98",
    "lineHeight": "98",
    "color": "#5ABECF",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "borderRadius": "6",
    "width": "340",
    "borderWidth": "1",
    "borderColor": "#5ABECF",
    "backgroundColor": "#FFFFFF"
  },
  "txt-assgin-disable": {
    "textAlign": "center",
    "height": "98",
    "lineHeight": "98",
    "color": "#DCDCDC",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "borderRadius": "6",
    "width": "340",
    "borderWidth": "1",
    "borderColor": "#DCDCDC",
    "backgroundColor": "#FFFFFF"
  },
  "txt-start-normal": {
    "textAlign": "center",
    "height": "98",
    "lineHeight": "98",
    "color": "#FFFFFF",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "borderRadius": "6",
    "width": "340",
    "backgroundColor": "#5ABECF"
  },
  "txt-start-disable": {
    "textAlign": "center",
    "height": "98",
    "lineHeight": "98",
    "color": "#FFFFFF",
    "fontSize": "34",
    "fontFamily": "PingFangSC-Regular",
    "borderRadius": "6",
    "width": "340",
    "backgroundColor": "#DCDCDC"
  }
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var WorkSheetStatusUnBegin = 1; //
//
//
//
//
//
//
//
//
//


var WorkSheetStatusReceived = 2;
var WorkSheetStatusProcessing = 4;
var WorkSheetStatusComplected = 8;
var WorkSheetStatusCanceled = 16;

exports.default = {
	// status 工单状态，1：未开始，2：已领取，4：进行中，8：已完成，64：已取消
	// isAdministrator 0-地勤 1-城市经理 
	props: {
		isAdministrator: {
			type: Boolean,
			default: 0
		},
		status: {
			type: Number,
			default: 0
		}
	},
	data: function data() {
		return {};
	},

	methods: {
		isCanStart: function isCanStart() {
			return this.status == WorkSheetStatusUnBegin;
		},
		grabDidClick: function grabDidClick() {
			if (this.isCanStart() == false) return;
			this.$emit('grabDidClick', null);
		},
		assginDidClick: function assginDidClick() {
			if (this.isCanStart() == false) return;
			this.$emit('assginDidClick', null);
		},
		startDidClick: function startDidClick() {
			if (this.isCanStart() == false) return;
			this.$emit('startDidClick', null);
		}
	}
};

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(!_vm.isAdministrator) ? _c('text', {
    class: [_vm.isCanStart() == true ? 'txt-grab-normal' : 'txt-grab-disable'],
    on: {
      "click": _vm.grabDidClick
    }
  }, [_vm._v("抢单")]) : _c('div', {
    staticClass: ["manager"]
  }, [_c('text', {
    class: [_vm.isCanStart() == true ? 'txt-assgin-normal' : 'txt-assgin-disable'],
    on: {
      "click": _vm.assginDidClick
    }
  }, [_vm._v("派单")]), _c('text', {
    class: [_vm.isCanStart() == true ? 'txt-start-normal' : 'txt-start-disable'],
    on: {
      "click": _vm.startDidClick
    }
  }, [_vm._v("开始工单")])])])
},staticRenderFns: []}
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
var __vue_template__ = __webpack_require__(157)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Feedback/block1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1f251b19"
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
  "type-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "0",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "type-icon": {
    "width": "32",
    "height": "32"
  },
  "type-title": {
    "marginLeft": "4",
    "color": "#333333",
    "fontSize": "30"
  },
  "title-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "0",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "cell-box": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "cell-box-auto": {
    "paddingTop": "24",
    "paddingRight": "0",
    "paddingBottom": "24",
    "paddingLeft": "10",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "space-between",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
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
  }
}

/***/ }),

/***/ 156:
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

exports.default = {
  props: {
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
    feedbackExpand: function feedbackExpand() {
      this.isExpandFeedback = !this.isExpandFeedback;
    }
  }
};

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["bg", "border-top", "border-bottom"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["line"]
  }), _c('div', {
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
  }), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("订单编号：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.orderId))])]), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("姓名：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.orderUserName))])]), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("联系电话：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.orderPhoneNo))])]), _c('div', {
    staticClass: ["cell-box", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("所在城市：")]), _c('text', {
    staticClass: ["txt-right"]
  }, [_vm._v(_vm._s(_vm.data.cityName))])]), _c('div', {
    staticClass: ["cell-box-auto", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("所在网点(地点):")]), _c('text', {
    staticClass: ["txt-right-auto"]
  }, [_vm._v(_vm._s(_vm.data.place))])]), _c('div', {
    staticClass: ["cell-box-auto", "border-bottom"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("问题描述:")]), _c('text', {
    staticClass: ["txt-right-auto"]
  }, [_vm._v(_vm._s(_vm.data.problemDescription))])]), _c('div', {
    staticClass: ["cell-box-auto"]
  }, [_c('text', {
    staticClass: ["txt-left"]
  }, [_vm._v("需求：")]), _c('text', {
    staticClass: ["txt-right-auto"]
  }, [_vm._v(_vm._s(_vm.data.demand))])])]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["type-box"]
  }, [_c('image', {
    staticClass: ["type-icon"],
    attrs: {
      "src": "local:///inspect_filter_selected.png",
      "resize": "contain"
    }
  }), _c('text', {
    staticClass: ["type-title"]
  }, [_vm._v("问题反馈")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HKFeedbackVehicle = __webpack_require__(273);

var _HKFeedbackVehicle2 = _interopRequireDefault(_HKFeedbackVehicle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HKFeedbackVehicle2.default.el = '#root';
new Vue(_HKFeedbackVehicle2.default);

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(274)
)

/* script */
__vue_exports__ = __webpack_require__(275)

/* template */
var __vue_template__ = __webpack_require__(276)
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
__vue_options__.__file = "/Users/yangzhi/Documents/WeexGenerator/src/js/pages/Housekeeper/Feedback/HKFeedbackVehicle.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f5cc0c2"
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

/***/ 274:
/***/ (function(module, exports) {

module.exports = {
  "feedback-container": {
    "backgroundColor": "#F9F9F9",
    "marginBottom": "140"
  }
}

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vehicleHeader = __webpack_require__(70);

var _vehicleHeader2 = _interopRequireDefault(_vehicleHeader);

var _block = __webpack_require__(154);

var _block2 = _interopRequireDefault(_block);

var _workflowList = __webpack_require__(74);

var _workflowList2 = _interopRequireDefault(_workflowList);

var _bottomStart = __webpack_require__(150);

var _bottomStart2 = _interopRequireDefault(_bottomStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		'vehicle-header': _vehicleHeader2.default,
		'block1': _block2.default,
		'work-flow': _workflowList2.default,
		'bottom': _bottomStart2.default
	},
	data: function data() {
		return {
			isAdministrator: false,
			data: {}
		};
	},
	created: function created() {
		var self = this;
		weex.requireModule('hkFeedbackVehicle').loadData(null, function (response) {
			self.isAdministrator = response.payload.isAdministrator;
			self.data = response.payload;
		});
	},

	methods: {
		grabDidClick: function grabDidClick() {
			var self = this;
			weex.requireModule('hkFeedbackVehicle').grabWorkSheet(null, function (response) {
				self.reloadData();
			});
		},
		assginDidClick: function assginDidClick() {
			var self = this;
			weex.requireModule('hkFeedbackVehicle').assignWorkSheet(null, function (response) {
				self.reloadData();
			});
		},
		startDidClick: function startDidClick() {
			var self = this;
			weex.requireModule('hkFeedbackVehicle').startWorkSheet(null, function (response) {
				self.reloadData();
			});
		},
		reloadData: function reloadData() {
			var self = this;
			weex.requireModule('hkFeedbackVehicle').reloadData(null, function (response) {
				self.data = response.payload;
			});
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

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["feedback-container"]
  }, [_c('vehicle-header', {
    attrs: {
      "data": _vm.data
    }
  }), _c('block1', {
    attrs: {
      "data": _vm.data
    }
  }), _c('work-flow', {
    attrs: {
      "flowList": _vm.data.flowList
    }
  }), _c('bottom', {
    attrs: {
      "isAdministrator": _vm.isAdministrator,
      "status": _vm.data.workOrderStatus
    },
    on: {
      "grabDidClick": _vm.grabDidClick,
      "assginDidClick": _vm.assginDidClick,
      "startDidClick": _vm.startDidClick
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

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
    "height": "86",
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
        engineUnLock: function engineUnLock(index) {
            weex.requireModule('hkVehicle').enginUnLock(this.data, index, function (response) {});
        },
        vehicleLock: function vehicleLock(index) {
            weex.requireModule('hkVehicle').vehicleLock(this.data, index, function (response) {});
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
  }, [_vm._v("新特车")]), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "false"
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
          _vm.vehicleUnLock(index)
        }
      }
    }, [_vm._v("引擎锁解锁")]) : _vm._e(), (_vm.isSupportDoorAndEngine(device.supportCommand)) ? _c('text', {
      staticClass: ["operate-txt"],
      on: {
        "click": function($event) {
          _vm.vehicleLock(index)
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

/***/ })

/******/ });
