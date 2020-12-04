/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0c9c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "119e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "208a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_id_4d4c28a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("119e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_id_4d4c28a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_id_4d4c28a3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "27b6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3878":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_style_index_0_id_6de710a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c9c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_style_index_0_id_6de710a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_style_index_0_id_6de710a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e5b1afe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=cb22fcb6&
var Appvue_type_template_id_cb22fcb6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"container"},[_c('StartScreen',{on:{"start":_vm.goToQuiz}}),(_vm.state != 'start')?_c('div',{staticClass:"questions"},_vm._l((_vm.questions),function(question,index){return _c('Question',{directives:[{name:"show",rawName:"v-show",value:(index <= _vm.stage),expression:"index <= stage"}],key:index,attrs:{"number":index + 1,"question":question,"totalCount":_vm.questions.length,"bus":_vm.bus},on:{"answer":_vm.getAnswer}})}),1):_vm._e(),(_vm.state == "results")?_c('FinalScreen',{attrs:{"result":_vm.testResult},on:{"restart":_vm.restart}}):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=cb22fcb6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e5b1afe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartScreen.vue?vue&type=template&id=4d4c28a3&scoped=true&
var StartScreenvue_type_template_id_4d4c28a3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"start-screen"},[_c('div',{staticClass:"logo"},[_c('a',{attrs:{"href":"http://pubads.g.doubleclick.net/gampad/clk?id=5552859541&iu=/81006599/hmiru-wday/counter","target":"_blank"},on:{"click":function($event){return _vm.sendGALocal('click_paulig')}}},[_c('img',{attrs:{"src":"img/logo.png","alt":"Paulig"}})])]),_vm._m(0),_c('div',{staticClass:"text"},[_vm._v(" Вы знаете о кофе все или только учитесь разбираться в тонкостях этого изумительного напитка?"),_c('br'),_vm._v(" Пора расставить точки над i. Пройдите тест, разработанный совместно с командой бариста компании "),_c('a',{attrs:{"href":"http://pubads.g.doubleclick.net/gampad/clk?id=5552859541&iu=/81006599/hmiru-wday/counter","target":"_blank"},on:{"click":function($event){return _vm.sendGALocal('click_paulig')}}},[_vm._v("Paulig")]),_vm._v(", и узнайте, кто вы в мире кофе. ")]),_c('button',{staticClass:"btn",on:{"click":function($event){$event.preventDefault();return _vm.start($event)}}},[_c('span',[_vm._v("Начать тест")])]),_vm._m(1),_vm._m(2)])}
var StartScreenvue_type_template_id_4d4c28a3_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"subtitle"},[_c('img',{attrs:{"src":"img/subtitle.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"left-part"},[_c('img',{attrs:{"src":"img/left.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"right-part"},[_c('img',{attrs:{"src":"img/right.png","alt":""}})])}]


// CONCATENATED MODULE: ./src/components/StartScreen.vue?vue&type=template&id=4d4c28a3&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var StartScreenvue_type_script_lang_js_ = ({
  name: "StartScreen",
  data: function data() {
    return {};
  },
  methods: {
    start: function start() {
      this.$emit('start');
    },
    sendGALocal: function sendGALocal(event) {
      window.sendGA(event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/StartScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StartScreenvue_type_script_lang_js_ = (StartScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/StartScreen.vue?vue&type=style&index=0&id=4d4c28a3&scoped=true&lang=css&
var StartScreenvue_type_style_index_0_id_4d4c28a3_scoped_true_lang_css_ = __webpack_require__("208a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/StartScreen.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_StartScreenvue_type_script_lang_js_,
  StartScreenvue_type_template_id_4d4c28a3_scoped_true_render,
  StartScreenvue_type_template_id_4d4c28a3_scoped_true_staticRenderFns,
  false,
  null,
  "4d4c28a3",
  null
  
)

/* harmony default export */ var StartScreen = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e5b1afe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Question.vue?vue&type=template&id=6de710a0&scoped=true&
var Questionvue_type_template_id_6de710a0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"question",class:{'answered': _vm.answered},attrs:{"id":_vm.rootId}},[(_vm.question.numberFile)?_c('div',{staticClass:"number-block"},[_c('div',{staticClass:"line"},[_c('div',{staticClass:"current-number"},[_vm._v(_vm._s(_vm.number)+"/"+_vm._s(_vm.totalCount))])]),_c('div',{staticClass:"number"},[_c('img',{attrs:{"src":_vm.question.numberFile,"alt":""}})]),_c('div',{staticClass:"line"})]):_vm._e(),_c('div',{staticClass:"question-text"},[_vm._v(_vm._s(_vm.question.question))]),_c('div',{staticClass:"answers"},_vm._l((_vm.question.answers),function(answer,answerKey){return _c('div',{key:answerKey,staticClass:"answer"},[((_vm.question.answerType)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userAnswer),expression:"userAnswer"}],key:answerKey,attrs:{"name":_vm.getAnswerName(),"id":_vm.getAnswerId(answerKey),"disabled":_vm.answered,"type":"checkbox"},domProps:{"value":answer,"checked":Array.isArray(_vm.userAnswer)?_vm._i(_vm.userAnswer,answer)>-1:(_vm.userAnswer)},on:{"change":[function($event){var $$a=_vm.userAnswer,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=answer,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.userAnswer=$$a.concat([$$v]))}else{$$i>-1&&(_vm.userAnswer=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.userAnswer=$$c}},function($event){$event.preventDefault();return _vm.sendUserData($event)}]}}):((_vm.question.answerType)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userAnswer),expression:"userAnswer"}],key:answerKey,attrs:{"name":_vm.getAnswerName(),"id":_vm.getAnswerId(answerKey),"disabled":_vm.answered,"type":"radio"},domProps:{"value":answer,"checked":_vm._q(_vm.userAnswer,answer)},on:{"change":[function($event){_vm.userAnswer=answer},function($event){$event.preventDefault();return _vm.sendUserData($event)}]}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userAnswer),expression:"userAnswer"}],key:answerKey,attrs:{"name":_vm.getAnswerName(),"id":_vm.getAnswerId(answerKey),"disabled":_vm.answered,"type":_vm.question.answerType},domProps:{"value":answer,"value":(_vm.userAnswer)},on:{"change":function($event){$event.preventDefault();return _vm.sendUserData($event)},"input":function($event){if($event.target.composing){ return; }_vm.userAnswer=$event.target.value}}}),_c('label',{attrs:{"for":_vm.getAnswerId(answerKey)}},[_c('div',{staticClass:"answer-text"},[_vm._v(_vm._s(answer))])])])}),0),(_vm.question.userAnswer.length)?_c('div',{staticClass:"question-result"},[(_vm.isCorrectAnswer())?_c('div',{staticClass:"result-title"},[_vm._v("Правильный ответ")]):_c('div',{staticClass:"result-title"},[_vm._v("Неправильный ответ")]),(_vm.isCorrectAnswer() && _vm.question.correctText)?_c('div',{staticClass:"result-text",domProps:{"innerHTML":_vm._s(_vm.question.correctText)}}):_vm._e()]):_vm._e()])}
var Questionvue_type_template_id_6de710a0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Question.vue?vue&type=template&id=6de710a0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Question.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Questionvue_type_script_lang_js_ = ({
  name: "Question",
  props: ['question', 'number', 'totalCount', 'bus'],
  data: function data() {
    return {
      userAnswer: [],
      answered: false
    };
  },
  computed: {
    rootId: function rootId() {
      return 'question-' + this.number;
    }
  },
  methods: {
    sendUserData: function sendUserData() {
      if (this.answered === false) {
        this.$emit('answer', {
          answer: this.userAnswer
        });
        this.answered = true;
      }
    },
    isCorrectAnswer: function isCorrectAnswer() {
      if (Array.isArray(this.question.userAnswer)) {
        return this.question.correctAnswer.join() == this.question.userAnswer.join();
      } else {
        return this.question.correctAnswer.indexOf(this.question.userAnswer) !== -1;
      }
    },
    getAnswerId: function getAnswerId(answerId) {
      return 'answer-' + this.number + '-' + answerId;
    },
    getAnswerName: function getAnswerName() {
      return 'answer-' + this.number;
    },
    restart: function restart() {
      this.userAnswer = [];
      this.answered = false;
    },
    sendGALocal: function sendGALocal(event) {
      window.sendGA(event);
    }
  },
  updated: function updated() {},
  mounted: function mounted() {
    this.bus.$on('restart', this.restart);
  }
});
// CONCATENATED MODULE: ./src/components/Question.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Questionvue_type_script_lang_js_ = (Questionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Question.vue?vue&type=style&index=0&id=6de710a0&scoped=true&lang=css&
var Questionvue_type_style_index_0_id_6de710a0_scoped_true_lang_css_ = __webpack_require__("3878");

// CONCATENATED MODULE: ./src/components/Question.vue






/* normalize component */

var Question_component = Object(componentNormalizer["a" /* default */])(
  components_Questionvue_type_script_lang_js_,
  Questionvue_type_template_id_6de710a0_scoped_true_render,
  Questionvue_type_template_id_6de710a0_scoped_true_staticRenderFns,
  false,
  null,
  "6de710a0",
  null
  
)

/* harmony default export */ var Question = (Question_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e5b1afe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FinalScreen.vue?vue&type=template&id=1bb1560e&scoped=true&
var FinalScreenvue_type_template_id_1bb1560e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"final-screen"},[_vm._m(0),_c('div',{staticClass:"result-title"},[_vm._v(_vm._s(_vm.result.title))]),_c('div',{staticClass:"result-text",domProps:{"innerHTML":_vm._s(_vm.result.html)}}),(_vm.result.img)?_c('div',{staticClass:"coffee-result",class:_vm.result.class},[_c('img',{attrs:{"src":_vm.result.img,"alt":_vm.result.title}})]):_vm._e(),_c('div',{staticClass:"coffee-one"},[_c('a',{attrs:{"href":"http://pubads.g.doubleclick.net/gampad/clk?id=5552859541&iu=/81006599/hmiru-wday/counter","target":"_blank"},on:{"click":function($event){return _vm.sendGALocal('click_paulig')}}},[_c('img',{attrs:{"src":"img/coffee.png","alt":""}})])]),_c('button',{staticClass:"btn",on:{"click":function($event){$event.preventDefault();return _vm.restart($event)}}},[_vm._v("Пройти еще раз")]),_c('div',{staticClass:"share-buttons"},[_vm._m(1),_c('a',{attrs:{"href":'https://vk.com/share.php?url=' + _vm.href,"onclick":"javascript:sendGALocal('share_vk');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;","target":"_blank"}},[_c('svg',{attrs:{"width":"50","height":"50","viewBox":"0 0 50 50","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"clip-path":"url(#clip0)"}},[_c('path',{attrs:{"d":"M24.511 5.44689L5.44689 24.511L24.511 43.5751L43.5751 24.511L24.511 5.44689ZM1.36172 23.1493L24.511 0L49.022 24.511L24.511 49.022L0 24.511L1.36172 23.1493Z","fill":"#820722"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M23.1668 31.6437H24.562C24.562 31.6437 24.9806 31.574 25.1899 31.3647C25.3991 31.1554 25.3991 30.7368 25.3991 30.7368C25.3991 30.7368 25.3991 28.923 26.2363 28.6439C27.0734 28.3649 28.1896 30.4578 29.3058 31.2251C30.143 31.853 30.7708 31.7135 30.7708 31.7135L33.8404 31.6437C33.8404 31.6437 35.4449 31.574 34.6775 30.2485C34.6077 30.1787 34.2589 29.3416 32.3754 27.5975C30.422 25.7837 30.7011 26.1325 33.0032 22.9932C34.3985 21.1096 34.9566 19.9934 34.817 19.4353C34.6775 18.947 33.6311 19.0865 33.6311 19.0865H30.143C30.143 19.0865 29.8639 19.0168 29.7244 19.1563C29.5151 19.2958 29.4453 19.5051 29.4453 19.5051C29.4453 19.5051 28.8873 20.9701 28.1896 22.2258C26.6549 24.807 26.027 24.9466 25.8177 24.807C25.2596 24.4582 25.3991 23.2723 25.3991 22.5049C25.3991 19.9934 25.8177 18.947 24.6318 18.668C24.283 18.5982 24.0039 18.5284 23.0272 18.5284C21.7715 18.5284 20.7251 18.5284 20.167 18.8075C19.7484 19.0168 19.4694 19.4353 19.6787 19.4353C19.8879 19.4353 20.446 19.5749 20.7251 19.9237C21.0041 20.5515 21.0041 21.598 21.0041 21.598C21.0041 21.598 21.2134 24.5977 20.5158 24.9466C20.0275 25.2256 19.3996 24.6675 18.0044 22.2956C17.3067 21.1096 16.7486 19.7144 16.7486 19.7144C16.7486 19.7144 16.6789 19.4354 16.4696 19.2958C16.2603 19.1563 15.9115 19.0865 15.9115 19.0865H12.6327C12.6327 19.0865 12.1443 19.0865 11.9351 19.2958C11.7955 19.5051 11.9351 19.8539 11.9351 19.8539C11.9351 19.8539 14.5163 25.8535 17.4463 28.923C20.167 31.853 23.1668 31.6437 23.1668 31.6437Z","fill":"#820722"}})]),_c('defs',[_c('clipPath',{attrs:{"id":"clip0"}},[_c('rect',{attrs:{"width":"49.022","height":"49.022","fill":"white"}})])])])]),_c('a',{attrs:{"href":'https://connect.ok.ru/offer?url=' + _vm.href,"onclick":"javascript:sendGALocal('share_ok');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;","target":"_blank"}},[_c('svg',{attrs:{"width":"50","height":"50","viewBox":"0 0 50 50","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"clip-path":"url(#clip0)"}},[_c('path',{attrs:{"d":"M25.1895 5.44689L6.12536 24.511L25.1895 43.5751L44.2536 24.511L25.1895 5.44689ZM2.04019 23.1493L25.1895 0L49.7005 24.511L25.1895 49.022L0.678467 24.511L2.04019 23.1493Z","fill":"#820722"}}),_c('path',{attrs:{"d":"M25.1899 12.2555C21.947 12.2555 19.3089 14.984 19.3089 18.3383C19.3089 21.6924 21.947 24.4197 25.1899 24.4197C28.4328 24.4197 31.0696 21.6924 31.0696 18.3383C31.0696 14.984 28.4328 12.2555 25.1899 12.2555ZM25.1899 15.8195C26.5321 15.8195 27.6235 16.95 27.6235 18.3383C27.6235 19.7261 26.5321 20.8557 25.1899 20.8557C23.8475 20.8557 22.7549 19.7261 22.7549 18.3383C22.7549 16.95 23.8475 15.8195 25.1899 15.8195ZM20.3413 24.6266C19.7594 24.6173 19.1873 24.9139 18.8554 25.4611C18.3481 26.2946 18.5911 27.3945 19.3951 27.9188C20.4585 28.6089 21.6124 29.0986 22.8091 29.3808L19.5225 32.782C18.8497 33.4783 18.8503 34.606 19.5232 35.3023C19.8605 35.6498 20.3004 35.8238 20.7414 35.8238C21.182 35.8238 21.6234 35.6496 21.9597 35.3016L25.1885 31.9601L28.4203 35.3016C29.0925 35.9977 30.1826 35.9977 30.856 35.3016C31.5291 34.6057 31.5291 33.4768 30.856 32.782L27.568 29.3816C28.765 29.0993 29.9193 28.6094 30.982 27.9188C31.7875 27.3946 32.0309 26.2934 31.5238 25.4611C31.0162 24.6274 29.9533 24.3762 29.1472 24.9014C26.7396 26.4679 23.6374 26.4669 21.2306 24.9014C20.9535 24.7209 20.6461 24.6316 20.3413 24.6267V24.6266Z","fill":"#820722"}})]),_c('defs',[_c('clipPath',{attrs:{"id":"clip0"}},[_c('rect',{attrs:{"width":"49.022","height":"49.022","fill":"white","transform":"translate(0.678467)"}})])])])]),_c('a',{attrs:{"href":'https://www.facebook.com/sharer/sharer.php?u=' + _vm.href,"onclick":"javascript:sendGALocal('share_fb');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;","target":"_blank"}},[_c('svg',{attrs:{"width":"50","height":"50","viewBox":"0 0 50 50","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"clip-path":"url(#clip0)"}},[_c('path',{attrs:{"d":"M24.8106 5.44689L5.74645 24.511L24.8106 43.5751L43.8747 24.511L24.8106 5.44689ZM1.66128 23.1493L24.8106 0L49.3216 24.511L24.8106 49.022L0.299561 24.511L1.66128 23.1493Z","fill":"#820722"}}),_c('g',{attrs:{"clip-path":"url(#clip1)"}},[_c('path',{attrs:{"d":"M21.2476 35.9034V24.8881H18.2512V20.9221H21.2476V17.5346C21.2476 14.8726 23.0175 12.4281 27.0959 12.4281C28.7472 12.4281 29.9682 12.582 29.9682 12.582L29.872 16.2856C29.872 16.2856 28.6267 16.2738 27.2678 16.2738C25.7971 16.2738 25.5615 16.9326 25.5615 18.0261V20.9221H29.9889L29.7962 24.8881H25.5615V35.9034H21.2476Z","fill":"#820722"}})])]),_c('defs',[_c('clipPath',{attrs:{"id":"clip0"}},[_c('rect',{attrs:{"width":"49.022","height":"49.022","fill":"white","transform":"translate(0.299561)"}})]),_c('clipPath',{attrs:{"id":"clip1"}},[_c('rect',{attrs:{"width":"11.7377","height":"23.4753","fill":"white","transform":"translate(18.2512 12.4281)"}})])])])]),_c('a',{attrs:{"href":'https://twitter.com/share?url=' + _vm.href + '&via=TWITTER_HANDLE',"onclick":"javascript:sendGALocal('share_tw');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;","target":"_blank"}},[_c('img',{attrs:{"src":"img/twitter.svg","alt":""}})])])])}
var FinalScreenvue_type_template_id_1bb1560e_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result-caption-block"},[_c('div',{staticClass:"line"}),_c('div',{staticClass:"result-caption"},[_vm._v("Результаты")]),_c('div',{staticClass:"line"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"share-text"},[_vm._v("поделись"),_c('br'),_vm._v("с друзьями")])}]


// CONCATENATED MODULE: ./src/components/FinalScreen.vue?vue&type=template&id=1bb1560e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FinalScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FinalScreenvue_type_script_lang_js_ = ({
  name: "FinalScreen",
  props: ['result'],
  data: function data() {
    return {};
  },
  computed: {
    href: function href() {
      return location.href;
    }
  },
  methods: {
    restart: function restart() {
      this.$emit('restart');
    },
    sendGALocal: function sendGALocal(event) {
      window.sendGA(event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/FinalScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FinalScreenvue_type_script_lang_js_ = (FinalScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FinalScreen.vue?vue&type=style&index=0&id=1bb1560e&scoped=true&lang=css&
var FinalScreenvue_type_style_index_0_id_1bb1560e_scoped_true_lang_css_ = __webpack_require__("765a");

// CONCATENATED MODULE: ./src/components/FinalScreen.vue






/* normalize component */

var FinalScreen_component = Object(componentNormalizer["a" /* default */])(
  components_FinalScreenvue_type_script_lang_js_,
  FinalScreenvue_type_template_id_1bb1560e_scoped_true_render,
  FinalScreenvue_type_template_id_1bb1560e_scoped_true_staticRenderFns,
  false,
  null,
  "1bb1560e",
  null
  
)

/* harmony default export */ var FinalScreen = (FinalScreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //Vue.use(VueSmoothScroll);

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  components: {
    StartScreen: StartScreen,
    Question: Question,
    FinalScreen: FinalScreen
  },
  data: function data() {
    return {
      questions: [],
      resultTexts: [],
      stage: 0,
      state: 'start',
      title: '',
      timeout: null,
      bus: new vue_runtime_esm["a" /* default */]()
    };
  },
  methods: {
    goToQuiz: function goToQuiz() {
      this.state = 'quiz';
      this.stage = 0;
      setTimeout(this.scrollToQuestion, 100);
      window.sendGA('click_start');
    },
    scrollToQuestion: function scrollToQuestion() {
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.stage + 1;
      var element = document.getElementById('question-' + number);
      console.log(number, element);

      if (element) {
        this.$smoothScroll({
          scrollTo: element,
          duration: 800,
          updateHistory: false,
          easingFunction: 'linear'
        });
      }
    },
    scrollToFinish: function scrollToFinish() {
      var element = document.querySelector('.final-screen');

      if (element) {
        this.$smoothScroll({
          scrollTo: element,
          duration: 800,
          updateHistory: false,
          easingFunction: 'linear'
        });
      }
    },
    getAnswer: function getAnswer(data) {
      var object = this.questions[this.stage];
      window.sendGA('quest_' + (this.stage + 1));

      if (Array.isArray(data.answer)) {
        object.userAnswer = data.answer;
      } else {
        object.userAnswer.push(data.answer);
      }

      object.userAnswer.sort();
      object.correctAnswer.sort();
      this.next();
    },
    next: function next() {
      if (this.stage == this.questions.length - 1) {
        this.state = 'results';
        setTimeout(this.scrollToFinish, 2000);
      } else {
        var timeout = this.questions[this.stage].correctText ? 2000 : 1000;
        this.stage++;
        setTimeout(this.scrollToQuestion, timeout);
      }
    },
    restart: function restart() {
      this.scrollToQuestion(1);
      window.sendGA('click_again');
      this.stage = 0;
      this.state = 'quiz';
      this.questions.forEach(function (item) {
        item.userAnswer.length = 0;
      });
      this.bus.$emit('restart');
    },
    checkAnswer: function checkAnswer(question) {
      if (Array.isArray(question.userAnswer)) {
        return question.correctAnswer.join() == question.userAnswer.join();
      } else {
        return question.correctAnswer.indexOf(question.userAnswer) !== -1;
      }
    }
  },
  computed: {
    currentQuestion: function currentQuestion() {
      return this.questions[this.stage] || {};
    },
    isMobile: function isMobile() {
      var isMobileVar = {
        Android: function Android() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function BlackBerry() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function iOS() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function Opera() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function Windows() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function any() {
          return isMobileVar.Android() || isMobileVar.BlackBerry() || isMobileVar.iOS() || isMobileVar.Opera() || isMobileVar.Windows();
        }
      };
      return isMobileVar.any();
    },
    correctAnswersCount: function correctAnswersCount() {
      return this.questions.filter(this.checkAnswer).length;
    },
    testResult: function testResult() {
      var _this = this;

      return this.resultTexts.filter(function (v) {
        return v.from <= _this.correctAnswersCount && _this.correctAnswersCount <= v.to;
      })[0];
    }
  },
  created: function created() {
    var testData = window.testData;

    if (typeof testData !== 'undefined') {
      if (Array.isArray(testData.questions) && testData.questions.length) {
        this.questions = testData.questions;
      }

      if (Array.isArray(testData.resultTexts) && testData.resultTexts.length) {
        this.resultTexts = testData.resultTexts;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_cb22fcb6_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/vue2-smooth-scroll/src/index.js
var src = __webpack_require__("45e3");

// CONCATENATED MODULE: ./src/main.js







vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].use(src["a" /* default */]);
new vue_runtime_esm["a" /* default */]({
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ "765a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalScreen_vue_vue_type_style_index_0_id_1bb1560e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27b6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalScreen_vue_vue_type_style_index_0_id_1bb1560e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalScreen_vue_vue_type_style_index_0_id_1bb1560e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.1c3c0c6b.js.map