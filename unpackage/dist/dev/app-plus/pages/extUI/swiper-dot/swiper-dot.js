"use weex:vue";
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 449);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!***********************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/main.js?{"type":"appStyle"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 185:
/*!**********************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-section.vue?vue&type=template&id=65aef1ca&scoped=true& */ 186);\n/* harmony import */ var _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-section.vue?vue&type=script&lang=js& */ 188);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=65aef1ca&scoped=true&lang=css& */ 190).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=65aef1ca&scoped=true&lang=css& */ 190).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"65aef1ca\",\n  \"760182a7\",\n  false,\n  _uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFGQUE0RTtBQUNoSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUZBQTRFO0FBQ3JJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxODUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWFlZjFjYSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjVhZWYxY2Emc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY1YWVmMWNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY1YWVmMWNhXCIsXG4gIFwiNzYwMTgyYTdcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvZ3VvZ3VvL0Rlc2t0b3Avc3R1ZHkvc3RvcEFwcC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///185\n");

/***/ }),

/***/ 186:
/*!*****************************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue?vue&type=template&id=65aef1ca&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=template&id=65aef1ca&scoped=true& */ 187);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_65aef1ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 187:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue?vue&type=template&id=65aef1ca&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-section"], attrs: { nvue: true } },
    [
      _vm.type
        ? _c("view", { staticClass: ["uni-section__head"] }, [
            _c("view", {
              staticClass: ["uni-section__head-tag"],
              class: _vm.type
            })
          ])
        : _vm._e(),
      _c("view", { staticClass: ["uni-section__content"] }, [
        _c(
          "u-text",
          {
            staticClass: ["uni-section__content-title"],
            class: { distraction: !_vm.subTitle }
          },
          [_vm._v(_vm._s(_vm.title))]
        ),
        _vm.subTitle
          ? _c("u-text", { staticClass: ["uni-section__content-sub"] }, [
              _vm._v(_vm._s(_vm.subTitle))
            ])
          : _vm._e()
      ]),
      _vm._t("default")
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 188:
/*!***********************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=script&lang=js& */ 189);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlqQixDQUFnQiwyakJBQUcsRUFBQyIsImZpbGUiOiIxODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///188\n");

/***/ }),

/***/ 189:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/**\n * Section 标题栏\n * @description 标题栏\n * @property {String} type = [line|circle] 标题装饰类型\n * \t@value line 竖线\n * \t@value circle 圆形\n * @property {String} title 主标题\n * @property {String} subTitle 副标题\n */var _default =\n\n{\n  name: 'UniTitle',\n  props: {\n    type: {\n      type: String,\n      default: '' },\n\n    title: {\n      type: String,\n      default: '' },\n\n    subTitle: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {};\n  },\n  watch: {\n    title: function title(newVal) {\n      if (uni.report && newVal !== '') {\n        uni.report('title', newVal);\n      }\n    } },\n\n  methods: {\n    onClick: function onClick() {\n      this.$emit('click');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7OztBQVVBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQVRBLEVBRkE7OztBQWdCQSxNQWhCQSxrQkFnQkE7QUFDQTtBQUNBLEdBbEJBO0FBbUJBO0FBQ0EsU0FEQSxpQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLEVBbkJBOztBQTBCQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBLEtBSEEsRUExQkEsRSIsImZpbGUiOiIxODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktc2VjdGlvblwiIG52dWU+XHJcblx0XHQ8dmlldyB2LWlmPVwidHlwZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2hlYWRcIj5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwidHlwZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2hlYWQtdGFnXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIj5cclxuXHRcdFx0PHRleHQgOmNsYXNzPVwieydkaXN0cmFjdGlvbic6IXN1YlRpdGxlfVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGVcIj57eyB0aXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0PHRleHQgdi1pZj1cInN1YlRpdGxlXCIgY2xhc3M9XCJ1bmktc2VjdGlvbl9fY29udGVudC1zdWJcIj57eyBzdWJUaXRsZSB9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDxzbG90IC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuXHQgKiBTZWN0aW9uIOagh+mimOagj1xyXG5cdCAqIEBkZXNjcmlwdGlvbiDmoIfpopjmoI9cclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSA9IFtsaW5lfGNpcmNsZV0g5qCH6aKY6KOF6aWw57G75Z6LXHJcblx0ICogXHRAdmFsdWUgbGluZSDnq5bnur9cclxuXHQgKiBcdEB2YWx1ZSBjaXJjbGUg5ZyG5b2iXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHRpdGxlIOS4u+agh+mimFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdWJUaXRsZSDlia/moIfpophcclxuXHQgKi9cclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaVRpdGxlJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViVGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHRpdGxlKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmICh1bmkucmVwb3J0ICYmIG5ld1ZhbCAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHVuaS5yZXBvcnQoJ3RpdGxlJywgbmV3VmFsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b25DbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51bmktc2VjdGlvbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjZTVlNWU1O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwLjVweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHR9XHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHQudW5pLXNlY3Rpb246YWZ0ZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0aGVpZ2h0OiAxcHg7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cclxuXHQudW5pLXNlY3Rpb25fX2hlYWQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5saW5lIHtcclxuXHRcdGhlaWdodDogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHR3aWR0aDogM3B4O1xyXG5cdH1cclxuXHJcblx0LmNpcmNsZSB7XHJcblx0XHR3aWR0aDogOHB4O1xyXG5cdFx0aGVpZ2h0OiA4cHg7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudC10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cclxuXHQuZGlzdHJhY3Rpb24ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///189\n");

/***/ }),

/***/ 190:
/*!*******************************************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue?vue&type=style&index=0&id=65aef1ca&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_65aef1ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=style&index=0&id=65aef1ca&scoped=true&lang=css& */ 191);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_65aef1ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_65aef1ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_65aef1ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_65aef1ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_65aef1ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 191:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/components/uni-section/uni-section.vue?vue&type=style&index=0&id=65aef1ca&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-section": {
    "position": "relative",
    "marginTop": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "50",
    "backgroundColor": "#f8f8f8",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "0.5",
    "fontWeight": "normal"
  },
  "uni-section__head": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10"
  },
  "line": {
    "height": "15",
    "backgroundColor": "#c0c0c0",
    "borderRadius": "5",
    "width": "3"
  },
  "circle": {
    "width": "8",
    "height": "8",
    "borderTopRightRadius": "50",
    "borderTopLeftRadius": "50",
    "borderBottomLeftRadius": "50",
    "borderBottomRightRadius": "50",
    "backgroundColor": "#c0c0c0"
  },
  "uni-section__content": {
    "flex": 1,
    "color": "#333333"
  },
  "uni-section__content-title": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "distraction": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-section__content-sub": {
    "fontSize": "24rpx",
    "color": "#999999"
  }
}

/***/ }),

/***/ 2:
/*!***********************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 449:
/*!******************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/main.js?{"page":"pages%2FextUI%2Fswiper-dot%2Fswiper-dot"} ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_extUI_swiper_dot_swiper_dot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/extUI/swiper-dot/swiper-dot.nvue?mpType=page */ 450);\n\n        \n        \n        \n        _pages_extUI_swiper_dot_swiper_dot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_extUI_swiper_dot_swiper_dot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/extUI/swiper-dot/swiper-dot'\n        _pages_extUI_swiper_dot_swiper_dot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_extUI_swiper_dot_swiper_dot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThFO0FBQzlFLFFBQVEsMkZBQUc7QUFDWCxRQUFRLDJGQUFHO0FBQ1gsUUFBUSwyRkFBRztBQUNYLGdCQUFnQiwyRkFBRyIsImZpbGUiOiI0NDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2V4dFVJL3N3aXBlci1kb3Qvc3dpcGVyLWRvdC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9leHRVSS9zd2lwZXItZG90L3N3aXBlci1kb3QnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///449\n");

/***/ }),

/***/ 450:
/*!**********************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue?mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper-dot.nvue?vue&type=template&id=9e8da0f2&mpType=page */ 451);\n/* harmony import */ var _swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper-dot.nvue?vue&type=script&lang=js&mpType=page */ 460);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./swiper-dot.nvue?vue&type=style&index=0&lang=css&mpType=page */ 462).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./swiper-dot.nvue?vue&type=style&index=0&lang=css&mpType=page */ 462).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"86cd8dda\",\n  false,\n  _swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdFQUErRDtBQUNuSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0VBQStEO0FBQ3hIOztBQUVBOztBQUVBO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0NTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N3aXBlci1kb3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZThkYTBmMiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3dpcGVyLWRvdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N3aXBlci1kb3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vc3dpcGVyLWRvdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vc3dpcGVyLWRvdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI4NmNkOGRkYVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9ndW9ndW8vRGVza3RvcC9zdHVkeS9zdG9wQXBwL3BhZ2VzL2V4dFVJL3N3aXBlci1kb3Qvc3dpcGVyLWRvdC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///450\n");

/***/ }),

/***/ 451:
/*!****************************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue?vue&type=template&id=9e8da0f2&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-dot.nvue?vue&type=template&id=9e8da0f2&mpType=page */ 452);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_template_id_9e8da0f2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 452:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue?vue&type=template&id=9e8da0f2&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniSwiperDot: __webpack_require__(/*! @/components/uni-swiper-dot/uni-swiper-dot.vue */ 453)
    .default,
  uniSection: __webpack_require__(/*! @/components/uni-section/uni-section.vue */ 185).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["content"] },
        [
          _c(
            "uni-swiper-dot",
            {
              attrs: {
                info: _vm.info,
                current: _vm.current,
                mode: _vm.mode,
                dotsStyles: _vm.dotsStyles,
                field: "content"
              }
            },
            [
              _c(
                "swiper",
                { staticClass: ["swiper-box"], on: { change: _vm.change } },
                _vm._l(_vm.info, function(item, index) {
                  return _c("swiper-item", { key: index }, [
                    _c(
                      "view",
                      { staticClass: ["swiper-item"], class: item.colorClass },
                      [
                        _c("u-image", {
                          staticClass: ["image"],
                          attrs: { src: item.url, mode: "aspectFill" }
                        })
                      ],
                      1
                    )
                  ])
                }),
                1
              )
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "模式选择", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              {
                staticClass: ["example-body-item"],
                class: { active: _vm.modeIndex === 0 },
                on: {
                  click: function($event) {
                    _vm.selectMode("default", 0)
                  }
                }
              },
              [
                _c("u-text", { staticClass: ["example-body-item-text"] }, [
                  _vm._v("default")
                ])
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["example-body-item"],
                class: { active: _vm.modeIndex === 1 },
                on: {
                  click: function($event) {
                    _vm.selectMode("dot", 1)
                  }
                }
              },
              [
                _c("u-text", { staticClass: ["example-body-item-text"] }, [
                  _vm._v("dot")
                ])
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["example-body-item"],
                class: { active: _vm.modeIndex === 2 },
                on: {
                  click: function($event) {
                    _vm.selectMode("round", 2)
                  }
                }
              },
              [
                _c("u-text", { staticClass: ["example-body-item-text"] }, [
                  _vm._v("round")
                ])
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["example-body-item"],
                class: { active: _vm.modeIndex === 3 },
                on: {
                  click: function($event) {
                    _vm.selectMode("nav", 3)
                  }
                }
              },
              [
                _c("u-text", { staticClass: ["example-body-item-text"] }, [
                  _vm._v("nav")
                ])
              ]
            ),
            _c(
              "view",
              {
                staticClass: ["example-body-item"],
                class: { active: _vm.modeIndex === 4 },
                on: {
                  click: function($event) {
                    _vm.selectMode("indexes", 4)
                  }
                }
              },
              [
                _c("u-text", { staticClass: ["example-body-item-text"] }, [
                  _vm._v("indexes")
                ])
              ]
            )
          ]),
          _c("uni-section", { attrs: { title: "颜色样式选择", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _vm.mode !== "nav"
                ? _vm._l(_vm.dotStyle, function(item, index) {
                    return _c(
                      "view",
                      {
                        key: index,
                        staticClass: ["example-body-item"],
                        class: { active: _vm.styleIndex === index },
                        on: {
                          click: function($event) {
                            _vm.selectStyle(index)
                          }
                        }
                      },
                      [
                        _c("view", {
                          staticClass: ["example-body-dots"],
                          style: {
                            "background-color": item.selectedBackgroundColor,
                            border: item.selectedBorder
                          }
                        }),
                        _c("view", {
                          staticClass: ["example-body-dots"],
                          style: {
                            "background-color": item.backgroundColor,
                            border: item.border
                          }
                        }),
                        _c("view", {
                          staticClass: ["example-body-dots"],
                          style: {
                            "background-color": item.backgroundColor,
                            border: item.border
                          }
                        })
                      ]
                    )
                  })
                : _vm._e(),
              _vm.mode === "nav"
                ? _vm._l(_vm.dotStyle, function(item, index) {
                    return _c(
                      "view",
                      {
                        key: index,
                        staticClass: ["example-body-item"],
                        class: { active: _vm.styleIndex === index },
                        style: {
                          "background-color": item.selectedBackgroundColor
                        },
                        on: {
                          click: function($event) {
                            _vm.selectStyle(index)
                          }
                        }
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["example-body-item-text"],
                            style: { color: item.color }
                          },
                          [_vm._v("内容")]
                        )
                      ]
                    )
                  })
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 453:
/*!****************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-swiper-dot.vue?vue&type=template&id=2a4e4c2e&scoped=true& */ 454);\n/* harmony import */ var _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-swiper-dot.vue?vue&type=script&lang=js& */ 456);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-swiper-dot.vue?vue&type=style&index=0&id=2a4e4c2e&scoped=true&lang=css& */ 458).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-swiper-dot.vue?vue&type=style&index=0&id=2a4e4c2e&scoped=true&lang=css& */ 458).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2a4e4c2e\",\n  \"3bb1fc75\",\n  false,\n  _uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0NTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1zd2lwZXItZG90LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYTRlNGMyZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1zd2lwZXItZG90LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXN3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXN3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmE0ZTRjMmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1zd2lwZXItZG90LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhNGU0YzJlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJhNGU0YzJlXCIsXG4gIFwiM2JiMWZjNzVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvZ3VvZ3VvL0Rlc2t0b3Avc3R1ZHkvc3RvcEFwcC9jb21wb25lbnRzL3VuaS1zd2lwZXItZG90L3VuaS1zd2lwZXItZG90LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///453\n");

/***/ }),

/***/ 454:
/*!***********************************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=template&id=2a4e4c2e&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swiper-dot.vue?vue&type=template&id=2a4e4c2e&scoped=true& */ 455);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_template_id_2a4e4c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 455:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=template&id=2a4e4c2e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-swiper__warp"] },
    [
      _vm._t("default"),
      _vm.mode === "default"
        ? _c(
            "view",
            {
              key: "default",
              staticClass: ["uni-swiper__dots-box"],
              style: { bottom: _vm.dots.bottom + "px" }
            },
            _vm._l(_vm.info, function(item, index) {
              return _c("view", {
                key: index,
                staticClass: ["uni-swiper__dots-item", "uni-swiper__dots-bar"],
                style: {
                  width:
                    (index === _vm.current
                      ? _vm.dots.width * 2
                      : _vm.dots.width) + "px",
                  height: _vm.dots.width / 3 + "px",
                  "background-color":
                    index !== _vm.current
                      ? _vm.dots.backgroundColor
                      : _vm.dots.selectedBackgroundColor,
                  "border-radius": "0px"
                }
              })
            }),
            0
          )
        : _vm._e(),
      _vm.mode === "dot"
        ? _c(
            "view",
            {
              key: "dot",
              staticClass: ["uni-swiper__dots-box"],
              style: { bottom: _vm.dots.bottom + "px" }
            },
            _vm._l(_vm.info, function(item, index) {
              return _c("view", {
                key: index,
                staticClass: ["uni-swiper__dots-item"],
                style: {
                  width: _vm.dots.width + "px",
                  height: _vm.dots.height + "px",
                  "background-color":
                    index !== _vm.current
                      ? _vm.dots.backgroundColor
                      : _vm.dots.selectedBackgroundColor,
                  border:
                    index !== _vm.current
                      ? _vm.dots.border
                      : _vm.dots.selectedBorder
                }
              })
            }),
            0
          )
        : _vm._e(),
      _vm.mode === "round"
        ? _c(
            "view",
            {
              key: "round",
              staticClass: ["uni-swiper__dots-box"],
              style: { bottom: _vm.dots.bottom + "px" }
            },
            _vm._l(_vm.info, function(item, index) {
              return _c("view", {
                key: index,
                staticClass: ["uni-swiper__dots-item"],
                class: [index === _vm.current && "uni-swiper__dots-long"],
                style: {
                  width:
                    (index === _vm.current
                      ? _vm.dots.width * 3
                      : _vm.dots.width) + "px",
                  height: _vm.dots.height + "px",
                  "background-color":
                    index !== _vm.current
                      ? _vm.dots.backgroundColor
                      : _vm.dots.selectedBackgroundColor,
                  border:
                    index !== _vm.current
                      ? _vm.dots.border
                      : _vm.dots.selectedBorder
                }
              })
            }),
            0
          )
        : _vm._e(),
      _vm.mode === "nav"
        ? _c(
            "view",
            {
              key: "nav",
              staticClass: ["uni-swiper__dots-box", "uni-swiper__dots-nav"],
              style: {
                "background-color": _vm.dotsStyles.backgroundColor,
                bottom: "0"
              }
            },
            [
              _c(
                "u-text",
                {
                  staticClass: ["uni-swiper__dots-nav-item"],
                  style: { color: _vm.dotsStyles.color }
                },
                [
                  _vm._v(
                    _vm._s(
                      _vm.current +
                        1 +
                        "/" +
                        _vm.info.length +
                        " " +
                        _vm.info[_vm.current][_vm.field]
                    )
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm.mode === "indexes"
        ? _c(
            "view",
            {
              key: "indexes",
              staticClass: ["uni-swiper__dots-box"],
              style: { bottom: _vm.dots.bottom + "px" }
            },
            _vm._l(_vm.info, function(item, index) {
              return _c(
                "view",
                {
                  key: index,
                  staticClass: [
                    "uni-swiper__dots-item",
                    "uni-swiper__dots-indexes"
                  ],
                  style: {
                    width: _vm.dots.width + "px",
                    height: _vm.dots.height + "px",
                    color:
                      index === _vm.current
                        ? _vm.dots.selectedColor
                        : _vm.dots.color,
                    "background-color":
                      index !== _vm.current
                        ? _vm.dots.backgroundColor
                        : _vm.dots.selectedBackgroundColor,
                    border:
                      index !== _vm.current
                        ? _vm.dots.border
                        : _vm.dots.selectedBorder
                  }
                },
                [
                  _c(
                    "u-text",
                    { staticClass: ["uni-swiper__dots-indexes-text"] },
                    [_vm._v(_vm._s(index + 1))]
                  )
                ]
              )
            }),
            0
          )
        : _vm._e()
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 456:
/*!*****************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swiper-dot.vue?vue&type=script&lang=js& */ 457);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9qQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiI0NTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN3aXBlci1kb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///456\n");

/***/ }),

/***/ 457:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/**\n * SwiperDod 轮播图指示点\n * @description 自定义轮播图指示点\n * @tutorial https://ext.dcloud.net.cn/plugin?id=284\n * @property {Number} current 当前指示点索引，必须是通过 `swiper` 的 `change` 事件获取到的 `e.detail.current`\n * @property {String} mode = [default|round|nav|indexes] 指示点的类型\n * \t@value defualt 默认指示点\n * \t@value round 圆形指示点\n * \t@value nav 条形指示点\n * \t@value indexes 索引指示点\n * @property {String} field mode 为 nav 时，显示的内容字段（mode = nav 时必填）\n * @property {String} info 轮播图的数据，通过数组长度决定指示点个数\n * @property {Object} dotsStyles 指示点样式\n * @event {Function} clickItem 组件触发点击事件时触发，e={currentIndex}\n */var _default2 =\n\n{\n  name: 'UniSwiperDot',\n  props: {\n    info: {\n      type: Array,\n      default: function _default() {\n        return [];\n      } },\n\n    current: {\n      type: Number,\n      default: 0 },\n\n    dotsStyles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      } },\n\n    // 类型 ：default(默认) indexes long nav\n    mode: {\n      type: String,\n      default: 'default' },\n\n    // 只在 nav 模式下生效，变量名称\n    field: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      dots: {\n        width: 8,\n        height: 8,\n        bottom: 10,\n        color: '#fff',\n        backgroundColor: 'rgba(0, 0, 0, .3)',\n        border: '1px rgba(0, 0, 0, .3) solid',\n        selectedBackgroundColor: '#333',\n        selectedBorder: '1px rgba(0, 0, 0, .9) solid' } };\n\n\n  },\n  watch: {\n    dotsStyles: function dotsStyles(newVal) {\n      this.dots = Object.assign(this.dots, this.dotsStyles);\n    },\n    mode: function mode(newVal) {\n      if (newVal === 'indexes') {\n        this.dots.width = 20;\n        this.dots.height = 20;\n      } else {\n        this.dots.width = 8;\n        this.dots.height = 8;\n      }\n    } },\n\n\n  created: function created() {\n    if (this.mode === 'indexes') {\n      this.dots.width = 20;\n      this.dots.height = 20;\n    }\n    this.dots = Object.assign(this.dots, this.dotsStyles);\n  } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc3dpcGVyLWRvdC91bmktc3dpcGVyLWRvdC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGFBRkEsc0JBRUE7QUFDQTtBQUNBLE9BSkEsRUFEQTs7QUFPQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFQQTs7QUFXQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQVhBOztBQWlCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQWxCQTs7QUFzQkE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUF2QkEsRUFGQTs7O0FBOEJBLE1BOUJBLGtCQThCQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGlCQUZBO0FBR0Esa0JBSEE7QUFJQSxxQkFKQTtBQUtBLDRDQUxBO0FBTUEsNkNBTkE7QUFPQSx1Q0FQQTtBQVFBLHFEQVJBLEVBREE7OztBQVlBLEdBM0NBO0FBNENBO0FBQ0EsY0FEQSxzQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxRQUpBLGdCQUlBLE1BSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkEsRUE1Q0E7OztBQTJEQSxTQTNEQSxxQkEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqRUEsRSIsImZpbGUiOiI0NTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktc3dpcGVyX193YXJwXCI+XHJcblx0XHQ8c2xvdCAvPlxyXG5cdFx0PHZpZXcgdi1pZj1cIm1vZGUgPT09ICdkZWZhdWx0J1wiIDpzdHlsZT1cInsnYm90dG9tJzpkb3RzLmJvdHRvbSArICdweCd9XCIgY2xhc3M9XCJ1bmktc3dpcGVyX19kb3RzLWJveFwiIGtleT0nZGVmYXVsdCc+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGluZm9cIiA6c3R5bGU9XCJ7XHJcbiAgICAgICAgJ3dpZHRoJzogKGluZGV4ID09PSBjdXJyZW50PyBkb3RzLndpZHRoKjI6ZG90cy53aWR0aCApICsgJ3B4JywnaGVpZ2h0Jzpkb3RzLndpZHRoLzMgKydweCcgLCdiYWNrZ3JvdW5kLWNvbG9yJzppbmRleCAhPT0gY3VycmVudD9kb3RzLmJhY2tncm91bmRDb2xvcjpkb3RzLnNlbGVjdGVkQmFja2dyb3VuZENvbG9yLCdib3JkZXItcmFkaXVzJzonMHB4J31cIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtaXRlbSB1bmktc3dpcGVyX19kb3RzLWJhclwiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyB2LWlmPVwibW9kZSA9PT0gJ2RvdCdcIiA6c3R5bGU9XCJ7J2JvdHRvbSc6ZG90cy5ib3R0b20gKyAncHgnfVwiIGNsYXNzPVwidW5pLXN3aXBlcl9fZG90cy1ib3hcIiBrZXk9J2RvdCc+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGluZm9cIiA6c3R5bGU9XCJ7XHJcbiAgICAgICAgJ3dpZHRoJzogZG90cy53aWR0aCArICdweCcsJ2hlaWdodCc6ZG90cy5oZWlnaHQgKydweCcgLCdiYWNrZ3JvdW5kLWNvbG9yJzppbmRleCAhPT0gY3VycmVudD9kb3RzLmJhY2tncm91bmRDb2xvcjpkb3RzLnNlbGVjdGVkQmFja2dyb3VuZENvbG9yLCdib3JkZXInOmluZGV4ICE9PWN1cnJlbnQgPyBkb3RzLmJvcmRlcjpkb3RzLnNlbGVjdGVkQm9yZGVyfVwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwidW5pLXN3aXBlcl9fZG90cy1pdGVtXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCJtb2RlID09PSAncm91bmQnXCIgOnN0eWxlPVwieydib3R0b20nOmRvdHMuYm90dG9tICsgJ3B4J31cIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtYm94XCIga2V5PSdyb3VuZCc+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGluZm9cIiA6Y2xhc3M9XCJbaW5kZXggPT09IGN1cnJlbnQmJid1bmktc3dpcGVyX19kb3RzLWxvbmcnXVwiIDpzdHlsZT1cIntcclxuXHRcdCAgICAnd2lkdGgnOihpbmRleCA9PT0gY3VycmVudD8gZG90cy53aWR0aCozOmRvdHMud2lkdGggKSArICdweCcsJ2hlaWdodCc6ZG90cy5oZWlnaHQgKydweCcgLCdiYWNrZ3JvdW5kLWNvbG9yJzppbmRleCAhPT0gY3VycmVudD9kb3RzLmJhY2tncm91bmRDb2xvcjpkb3RzLnNlbGVjdGVkQmFja2dyb3VuZENvbG9yLCdib3JkZXInOmluZGV4ICE9PWN1cnJlbnQgPyBkb3RzLmJvcmRlcjpkb3RzLnNlbGVjdGVkQm9yZGVyfVwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwidW5pLXN3aXBlcl9fZG90cy1pdGVtIFwiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyB2LWlmPVwibW9kZSA9PT0gJ25hdidcIiBrZXk9J25hdicgOnN0eWxlPVwieydiYWNrZ3JvdW5kLWNvbG9yJzpkb3RzU3R5bGVzLmJhY2tncm91bmRDb2xvciwnYm90dG9tJzonMCd9XCIgY2xhc3M9XCJ1bmktc3dpcGVyX19kb3RzLWJveCB1bmktc3dpcGVyX19kb3RzLW5hdlwiPlxyXG5cdFx0XHQ8dGV4dCA6c3R5bGU9XCJ7J2NvbG9yJzpkb3RzU3R5bGVzLmNvbG9yfVwiIGNsYXNzPVwidW5pLXN3aXBlcl9fZG90cy1uYXYtaXRlbVwiPnt7IChjdXJyZW50KzEpK1wiL1wiK2luZm8ubGVuZ3RoICsnICcgK2luZm9bY3VycmVudF1bZmllbGRdIH19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cIm1vZGUgPT09ICdpbmRleGVzJ1wiIGtleT0naW5kZXhlcycgOnN0eWxlPVwieydib3R0b20nOmRvdHMuYm90dG9tICsgJ3B4J31cIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtYm94XCI+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGluZm9cIiA6c3R5bGU9XCJ7XHJcbiAgICAgICAgJ3dpZHRoJzpkb3RzLndpZHRoICsgJ3B4JywnaGVpZ2h0Jzpkb3RzLmhlaWdodCArJ3B4JyAsJ2NvbG9yJzppbmRleCA9PT0gY3VycmVudD9kb3RzLnNlbGVjdGVkQ29sb3I6ZG90cy5jb2xvciwnYmFja2dyb3VuZC1jb2xvcic6aW5kZXggIT09IGN1cnJlbnQ/ZG90cy5iYWNrZ3JvdW5kQ29sb3I6ZG90cy5zZWxlY3RlZEJhY2tncm91bmRDb2xvciwnYm9yZGVyJzppbmRleCAhPT1jdXJyZW50ID8gZG90cy5ib3JkZXI6ZG90cy5zZWxlY3RlZEJvcmRlcn1cIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtaXRlbSB1bmktc3dpcGVyX19kb3RzLWluZGV4ZXNcIj48dGV4dCBjbGFzcz1cInVuaS1zd2lwZXJfX2RvdHMtaW5kZXhlcy10ZXh0XCI+e3sgaW5kZXgrMSB9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuXHQgKiBTd2lwZXJEb2Qg6L2u5pKt5Zu+5oyH56S654K5XHJcblx0ICogQGRlc2NyaXB0aW9uIOiHquWumuS5iei9ruaSreWbvuaMh+ekuueCuVxyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0yODRcclxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gY3VycmVudCDlvZPliY3mjIfnpLrngrnntKLlvJXvvIzlv4XpobvmmK/pgJrov4cgYHN3aXBlcmAg55qEIGBjaGFuZ2VgIOS6i+S7tuiOt+WPluWIsOeahCBgZS5kZXRhaWwuY3VycmVudGBcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gbW9kZSA9IFtkZWZhdWx0fHJvdW5kfG5hdnxpbmRleGVzXSDmjIfnpLrngrnnmoTnsbvlnotcclxuXHQgKiBcdEB2YWx1ZSBkZWZ1YWx0IOm7mOiupOaMh+ekuueCuVxyXG5cdCAqIFx0QHZhbHVlIHJvdW5kIOWchuW9ouaMh+ekuueCuVxyXG5cdCAqIFx0QHZhbHVlIG5hdiDmnaHlvaLmjIfnpLrngrlcclxuXHQgKiBcdEB2YWx1ZSBpbmRleGVzIOe0ouW8leaMh+ekuueCuVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBmaWVsZCBtb2RlIOS4uiBuYXYg5pe277yM5pi+56S655qE5YaF5a655a2X5q6177yIbW9kZSA9IG5hdiDml7blv4XloavvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gaW5mbyDova7mkq3lm77nmoTmlbDmja7vvIzpgJrov4fmlbDnu4Tplb/luqblhrPlrprmjIfnpLrngrnkuKrmlbBcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gZG90c1N0eWxlcyDmjIfnpLrngrnmoLflvI9cclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGlja0l0ZW0g57uE5Lu26Kem5Y+R54K55Ye75LqL5Lu25pe26Kem5Y+R77yMZT17Y3VycmVudEluZGV4fVxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnVW5pU3dpcGVyRG90JyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGluZm86IHtcclxuXHRcdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VycmVudDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGRvdHNTdHlsZXM6IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOexu+WeiyDvvJpkZWZhdWx0KOm7mOiupCkgaW5kZXhlcyBsb25nIG5hdlxyXG5cdFx0XHRtb2RlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdkZWZhdWx0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj6rlnKggbmF2IOaooeW8j+S4i+eUn+aViO+8jOWPmOmHj+WQjeensFxyXG5cdFx0XHRmaWVsZDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkb3RzOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogOCxcclxuXHRcdFx0XHRcdGhlaWdodDogOCxcclxuXHRcdFx0XHRcdGJvdHRvbTogMTAsXHJcblx0XHRcdFx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuMyknLFxyXG5cdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHJnYmEoMCwgMCwgMCwgLjMpIHNvbGlkJyxcclxuXHRcdFx0XHRcdHNlbGVjdGVkQmFja2dyb3VuZENvbG9yOiAnIzMzMycsXHJcblx0XHRcdFx0XHRzZWxlY3RlZEJvcmRlcjogJzFweCByZ2JhKDAsIDAsIDAsIC45KSBzb2xpZCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRkb3RzU3R5bGVzKG5ld1ZhbCkge1xyXG5cdFx0XHRcdHRoaXMuZG90cyA9IE9iamVjdC5hc3NpZ24odGhpcy5kb3RzLCB0aGlzLmRvdHNTdHlsZXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGUobmV3VmFsKSB7XHJcblx0XHRcdFx0aWYgKG5ld1ZhbCA9PT0gJ2luZGV4ZXMnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRvdHMud2lkdGggPSAyMFxyXG5cdFx0XHRcdFx0dGhpcy5kb3RzLmhlaWdodCA9IDIwXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZG90cy53aWR0aCA9IDhcclxuXHRcdFx0XHRcdHRoaXMuZG90cy5oZWlnaHQgPSA4XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGlmICh0aGlzLm1vZGUgPT09ICdpbmRleGVzJykge1xyXG5cdFx0XHRcdHRoaXMuZG90cy53aWR0aCA9IDIwXHJcblx0XHRcdFx0dGhpcy5kb3RzLmhlaWdodCA9IDIwXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5kb3RzID0gT2JqZWN0LmFzc2lnbih0aGlzLmRvdHMsIHRoaXMuZG90c1N0eWxlcylcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLXN3aXBlcl9fd2FycCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlcl9fZG90cy1ib3gge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAxMHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlcl9fZG90cy1pdGVtIHtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA2cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblx0XHQvKiB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGxpbmVhcjsgIOS4jeimgeWPlua2iOazqOmHiu+8jOS4jeeEtuS8muS4jeiDveWPmOiJslxyXG4gKi9cclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVyX19kb3RzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZXJfX2RvdHMtZGVmYXVsdCB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVyX19kb3RzLWxvbmcge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVyX19kb3RzLWJhciB7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZXJfX2RvdHMtbmF2IHtcclxuXHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZXJfX2RvdHMtbmF2LWl0ZW0ge1xyXG5cdFx0Lyogb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdG1hcmdpbjogMCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZXJfX2RvdHMtaW5kZXhlcyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHQvKiBmbGV4OiAxO1xyXG4gKi9cclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVyX19kb3RzLWluZGV4ZXMtdGV4dCB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///457\n");

/***/ }),

/***/ 458:
/*!*************************************************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=style&index=0&id=2a4e4c2e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_style_index_0_id_2a4e4c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swiper-dot.vue?vue&type=style&index=0&id=2a4e4c2e&scoped=true&lang=css& */ 459);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_style_index_0_id_2a4e4c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_style_index_0_id_2a4e4c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_style_index_0_id_2a4e4c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_style_index_0_id_2a4e4c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swiper_dot_vue_vue_type_style_index_0_id_2a4e4c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 459:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/components/uni-swiper-dot/uni-swiper-dot.vue?vue&type=style&index=0&id=2a4e4c2e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-swiper__warp": {
    "flex": 1,
    "flexDirection": "column",
    "position": "relative",
    "overflow": "hidden"
  },
  "uni-swiper__dots-box": {
    "position": "absolute",
    "bottom": "10",
    "left": 0,
    "right": 0,
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-swiper__dots-item": {
    "width": "8",
    "borderRadius": "100",
    "marginLeft": "6",
    "backgroundColor": "rgba(0,0,0,0.4)",
    "marginTop:first-child": 0,
    "marginRight:first-child": 0,
    "marginBottom:first-child": 0,
    "marginLeft:first-child": 0
  },
  "uni-swiper__dots-default": {
    "borderRadius": "100"
  },
  "uni-swiper__dots-long": {
    "borderRadius": "50"
  },
  "uni-swiper__dots-bar": {
    "borderRadius": "50"
  },
  "uni-swiper__dots-nav": {
    "bottom": "0",
    "height": "40",
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "uni-swiper__dots-nav-item": {
    "fontSize": "28rpx",
    "color": "#ffffff",
    "marginTop": 0,
    "marginRight": "15",
    "marginBottom": 0,
    "marginLeft": "15"
  },
  "uni-swiper__dots-indexes": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-swiper__dots-indexes-text": {
    "color": "#ffffff",
    "fontSize": "24rpx"
  }
}

/***/ }),

/***/ 460:
/*!**********************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-dot.nvue?vue&type=script&lang=js&mpType=page */ 461);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFrQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI0NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3dpcGVyLWRvdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zd2lwZXItZG90Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///460\n");

/***/ }),

/***/ 461:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 185));\nvar _uniSwiperDot = _interopRequireDefault(__webpack_require__(/*! @/components/uni-swiper-dot/uni-swiper-dot.vue */ 453));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { uniSection: _uniSection.default, uniSwiperDot: _uniSwiperDot.default }, data: function data() {return { info: [{ colorClass: 'uni-bg-red', url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', content: '内容 A' }, { colorClass: 'uni-bg-green', url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg', content: '内容 B' }, { colorClass: 'uni-bg-blue', url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', content: '内容 C' }], dotStyle: [{ backgroundColor: 'rgba(0, 0, 0, .3)', border: '1px rgba(0, 0, 0, .3) solid', color: '#fff', selectedBackgroundColor: 'rgba(0, 0, 0, .9)', selectedBorder: '1px rgba(0, 0, 0, .9) solid' }, { backgroundColor: 'rgba(255, 90, 95,0.3)', border: '1px rgba(255, 90, 95,0.3) solid', color: '#fff', selectedBackgroundColor: 'rgba(255, 90, 95,0.9)', selectedBorder: '1px rgba(255, 90, 95,0.9) solid' },\n      {\n        backgroundColor: 'rgba(83, 200, 249,0.3)',\n        border: '1px rgba(83, 200, 249,0.3) solid',\n        color: '#fff',\n        selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',\n        selectedBorder: '1px rgba(83, 200, 249,0.9) solid' }],\n\n\n      modeIndex: -1,\n      styleIndex: -1,\n      current: 0,\n      mode: 'default',\n      dotsStyles: {} };\n\n  },\n  onLoad: function onLoad() {},\n  methods: {\n    change: function change(e) {\n      this.current = e.detail.current;\n    },\n    selectStyle: function selectStyle(index) {\n      this.dotsStyles = this.dotStyle[index];\n      this.styleIndex = index;\n    },\n    selectMode: function selectMode(mode, index) {\n      this.mode = mode;\n      this.modeIndex = index;\n      this.styleIndex = -1;\n      this.dotsStyles = this.dotStyle[0];\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZXh0VUkvc3dpcGVyLWRvdC9zd2lwZXItZG90Lm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQSwySDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsY0FDQSwrQkFEQSxFQUVBLG1DQUZBLEVBREEsRUFLQSxJQUxBLGtCQUtBLENBQ0EsU0FDQSxTQUNBLHdCQURBLEVBRUEscUVBRkEsRUFHQSxlQUhBLElBS0EsRUFDQSwwQkFEQSxFQUVBLGlFQUZBLEVBR0EsZUFIQSxFQUxBLEVBVUEsRUFDQSx5QkFEQSxFQUVBLGdFQUZBLEVBR0EsZUFIQSxFQVZBLENBREEsRUFpQkEsYUFDQSxvQ0FEQSxFQUVBLHFDQUZBLEVBR0EsYUFIQSxFQUlBLDRDQUpBLEVBS0EsNkNBTEEsSUFPQSxFQUNBLHdDQURBLEVBRUEseUNBRkEsRUFHQSxhQUhBLEVBSUEsZ0RBSkEsRUFLQSxpREFMQSxFQVBBO0FBY0E7QUFDQSxpREFEQTtBQUVBLGtEQUZBO0FBR0EscUJBSEE7QUFJQSx5REFKQTtBQUtBLDBEQUxBLEVBZEEsQ0FqQkE7OztBQXVDQSxtQkF2Q0E7QUF3Q0Esb0JBeENBO0FBeUNBLGdCQXpDQTtBQTBDQSxxQkExQ0E7QUEyQ0Esb0JBM0NBOztBQTZDQSxHQW5EQTtBQW9EQSxRQXBEQSxvQkFvREEsRUFwREE7QUFxREE7QUFDQSxVQURBLGtCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGVBSkEsdUJBSUEsS0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxjQVJBLHNCQVFBLElBUkEsRUFRQSxLQVJBLEVBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBYkEsRUFyREEsRSIsImZpbGUiOiI0NjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8dW5pLXN3aXBlci1kb3QgOmluZm89XCJpbmZvXCIgOmN1cnJlbnQ9XCJjdXJyZW50XCIgOm1vZGU9XCJtb2RlXCIgOmRvdHMtc3R5bGVzPVwiZG90c1N0eWxlc1wiIGZpZWxkPVwiY29udGVudFwiPlxyXG5cdFx0XHQ8c3dpcGVyIGNsYXNzPVwic3dpcGVyLWJveFwiIEBjaGFuZ2U9XCJjaGFuZ2VcIj5cclxuXHRcdFx0XHQ8c3dpcGVyLWl0ZW0gdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGluZm9cIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cIml0ZW0uY29sb3JDbGFzc1wiIGNsYXNzPVwic3dpcGVyLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1hZ2VcIiA6c3JjPVwiaXRlbS51cmxcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIC8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0PC9zd2lwZXI+XHJcblx0XHQ8L3VuaS1zd2lwZXItZG90PlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5qih5byP6YCJ5oupXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJleGFtcGxlLWJvZHlcIj5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwieyBhY3RpdmU6IG1vZGVJbmRleCA9PT0gMCB9XCIgY2xhc3M9XCJleGFtcGxlLWJvZHktaXRlbVwiIEBjbGljaz1cInNlbGVjdE1vZGUoJ2RlZmF1bHQnLCAwKVwiPjx0ZXh0IGNsYXNzPVwiZXhhbXBsZS1ib2R5LWl0ZW0tdGV4dFwiPmRlZmF1bHQ8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7IGFjdGl2ZTogbW9kZUluZGV4ID09PSAxIH1cIiBjbGFzcz1cImV4YW1wbGUtYm9keS1pdGVtXCIgQGNsaWNrPVwic2VsZWN0TW9kZSgnZG90JywgMSlcIj48dGV4dCBjbGFzcz1cImV4YW1wbGUtYm9keS1pdGVtLXRleHRcIj5kb3Q8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7IGFjdGl2ZTogbW9kZUluZGV4ID09PSAyIH1cIiBjbGFzcz1cImV4YW1wbGUtYm9keS1pdGVtXCIgQGNsaWNrPVwic2VsZWN0TW9kZSgncm91bmQnLCAyKVwiPjx0ZXh0IGNsYXNzPVwiZXhhbXBsZS1ib2R5LWl0ZW0tdGV4dFwiPnJvdW5kPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwieyBhY3RpdmU6IG1vZGVJbmRleCA9PT0gMyB9XCIgY2xhc3M9XCJleGFtcGxlLWJvZHktaXRlbVwiIEBjbGljaz1cInNlbGVjdE1vZGUoJ25hdicsIDMpXCI+PHRleHQgY2xhc3M9XCJleGFtcGxlLWJvZHktaXRlbS10ZXh0XCI+bmF2PC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwieyBhY3RpdmU6IG1vZGVJbmRleCA9PT0gNCB9XCIgY2xhc3M9XCJleGFtcGxlLWJvZHktaXRlbVwiIEBjbGljaz1cInNlbGVjdE1vZGUoJ2luZGV4ZXMnLCA0KVwiPjx0ZXh0IGNsYXNzPVwiZXhhbXBsZS1ib2R5LWl0ZW0tdGV4dFwiPmluZGV4ZXM8L3RleHQ+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi6aKc6Imy5qC35byP6YCJ5oupXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJleGFtcGxlLWJvZHlcIj5cclxuXHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJtb2RlICE9PSAnbmF2J1wiPlxyXG5cdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkb3RTdHlsZVwiIDpjbGFzcz1cInsgYWN0aXZlOiBzdHlsZUluZGV4ID09PSBpbmRleCB9XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJleGFtcGxlLWJvZHktaXRlbVwiIEBjbGljaz1cInNlbGVjdFN0eWxlKGluZGV4KVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGl0ZW0uc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3IsIGJvcmRlcjogaXRlbS5zZWxlY3RlZEJvcmRlciB9XCIgY2xhc3M9XCJleGFtcGxlLWJvZHktZG90c1wiIC8+XHJcblx0XHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogaXRlbS5iYWNrZ3JvdW5kQ29sb3IsIGJvcmRlcjogaXRlbS5ib3JkZXIgfVwiIGNsYXNzPVwiZXhhbXBsZS1ib2R5LWRvdHNcIiAvPlxyXG5cdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGl0ZW0uYmFja2dyb3VuZENvbG9yLCBib3JkZXI6IGl0ZW0uYm9yZGVyIH1cIiBjbGFzcz1cImV4YW1wbGUtYm9keS1kb3RzXCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwibW9kZSA9PT0gJ25hdidcIj5cclxuXHRcdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZG90U3R5bGVcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogc3R5bGVJbmRleCA9PT0gaW5kZXggfVwiIDprZXk9XCJpbmRleFwiIDpzdHlsZT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBpdGVtLnNlbGVjdGVkQmFja2dyb3VuZENvbG9yIH1cIiBjbGFzcz1cImV4YW1wbGUtYm9keS1pdGVtXCIgQGNsaWNrPVwic2VsZWN0U3R5bGUoaW5kZXgpXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImV4YW1wbGUtYm9keS1pdGVtLXRleHRcIiA6c3R5bGU9XCJ7IGNvbG9yOiBpdGVtLmNvbG9yIH1cIj7lhoXlrrk8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHVuaVNlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZSdcclxuXHRpbXBvcnQgdW5pU3dpcGVyRG90IGZyb20gJ0AvY29tcG9uZW50cy91bmktc3dpcGVyLWRvdC91bmktc3dpcGVyLWRvdC52dWUnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR1bmlTZWN0aW9uLFxyXG5cdFx0XHR1bmlTd2lwZXJEb3RcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGluZm86IFt7XHJcblx0XHRcdFx0XHRcdGNvbG9yQ2xhc3M6ICd1bmktYmctcmVkJyxcclxuXHRcdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9pbWctY2RuLXFpbml1LmRjbG91ZC5uZXQuY24vdW5pYXBwL2ltYWdlcy9zaHVpamlhby5qcGcnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn5YaF5a65IEEnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb2xvckNsYXNzOiAndW5pLWJnLWdyZWVuJyxcclxuXHRcdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9pbWctY2RuLXFpbml1LmRjbG91ZC5uZXQuY24vdW5pYXBwL2ltYWdlcy9tdXd1LmpwZycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICflhoXlrrkgQidcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbG9yQ2xhc3M6ICd1bmktYmctYmx1ZScsXHJcblx0XHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vaW1nLWNkbi1xaW5pdS5kY2xvdWQubmV0LmNuL3VuaWFwcC9pbWFnZXMvY2JkLmpwZycsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICflhoXlrrkgQydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGRvdFN0eWxlOiBbe1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4zKScsXHJcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCByZ2JhKDAsIDAsIDAsIC4zKSBzb2xpZCcsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnI2ZmZicsXHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuOSknLFxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZEJvcmRlcjogJzFweCByZ2JhKDAsIDAsIDAsIC45KSBzb2xpZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5MCwgOTUsMC4zKScsXHJcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCByZ2JhKDI1NSwgOTAsIDk1LDAuMykgc29saWQnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5MCwgOTUsMC45KScsXHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkQm9yZGVyOiAnMXB4IHJnYmEoMjU1LCA5MCwgOTUsMC45KSBzb2xpZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoODMsIDIwMCwgMjQ5LDAuMyknLFxyXG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggcmdiYSg4MywgMjAwLCAyNDksMC4zKSBzb2xpZCcsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnI2ZmZicsXHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkQmFja2dyb3VuZENvbG9yOiAncmdiYSg4MywgMjAwLCAyNDksMC45KScsXHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkQm9yZGVyOiAnMXB4IHJnYmEoODMsIDIwMCwgMjQ5LDAuOSkgc29saWQnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRtb2RlSW5kZXg6IC0xLFxyXG5cdFx0XHRcdHN0eWxlSW5kZXg6IC0xLFxyXG5cdFx0XHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRcdFx0bW9kZTogJ2RlZmF1bHQnLFxyXG5cdFx0XHRcdGRvdHNTdHlsZXM6IHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdFN0eWxlKGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5kb3RzU3R5bGVzID0gdGhpcy5kb3RTdHlsZVtpbmRleF1cclxuXHRcdFx0XHR0aGlzLnN0eWxlSW5kZXggPSBpbmRleFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3RNb2RlKG1vZGUsIGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5tb2RlID0gbW9kZVxyXG5cdFx0XHRcdHRoaXMubW9kZUluZGV4ID0gaW5kZXhcclxuXHRcdFx0XHR0aGlzLnN0eWxlSW5kZXggPSAtMVxyXG5cdFx0XHRcdHRoaXMuZG90c1N0eWxlcyA9IHRoaXMuZG90U3R5bGVbMF1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lyog5aS05p2h5bCP56iL5bqP57uE5Lu25YaF5LiN6IO95byV5YWl5a2X5L2TICovXHJcblx0LyogI2lmZGVmIE1QLVRPVVRJQU8gKi9cclxuXHRAZm9udC1mYWNlIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL3VuaS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdHBhZ2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZmNDtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cclxuXHR2aWV3IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4IDE1cHg7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1pbmZvIHtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRjb2xvcjogIzNiNDE0NDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mbyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGNvbG9yOiAjM2I0MTQ0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mby10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Y29sb3I6ICMzYjQxNDQ7XHJcblx0fVxyXG5cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4td2hpdGUge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHRcdG1hcmdpbjogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4tLWhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0Y2EyZmY7XHJcblx0fVxyXG5cclxuXHJcblx0LnN3aXBlci1ib3gge1xyXG5cdFx0aGVpZ2h0OiAyMDBweDtcclxuXHR9XHJcblxyXG5cdC5zd2lwZXItaXRlbSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzk5OTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0LmltYWdlIHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWJnLXJlZCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1YTVmO1xyXG5cdH1cclxuXHJcblx0LnVuaS1iZy1ncmVlbiB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDliYjA3O1xyXG5cdH1cclxuXHJcblx0LnVuaS1iZy1ibHVlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmY7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWJvZHktaXRlbSB7XHJcblxyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbjogMTVycHg7XHJcblx0XHRwYWRkaW5nOiAxNXJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZzogMCAxNXJweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJvcmRlci1jb2xvcjogI2U1ZTVlNTtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWJvZHktaXRlbS10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWJvZHktZG90cyB7XHJcblx0XHR3aWR0aDogMTZycHg7XHJcblx0XHRoZWlnaHQ6IDE2cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZlIHtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6ICMwMDdhZmY7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///461\n");

/***/ }),

/***/ 462:
/*!******************************************************************************************************************************!*\
  !*** /Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-dot.nvue?vue&type=style&index=0&lang=css&mpType=page */ 463);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_dot_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 463:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoguo/Desktop/study/stopApp/pages/extUI/swiper-dot/swiper-dot.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "example": {
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15"
  },
  "example-info": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#3b4144",
    "backgroundColor": "#ffffff",
    "fontSize": "14",
    "lineHeight": "20"
  },
  "example-info-text": {
    "fontSize": "14",
    "lineHeight": "20",
    "color": "#3b4144"
  },
  "example-body": {
    "flexDirection": "row",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "backgroundColor": "#ffffff"
  },
  "word-btn-white": {
    "fontSize": "18",
    "color": "#FFFFFF"
  },
  "word-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6",
    "height": "48",
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15",
    "backgroundColor": "#007AFF"
  },
  "word-btn--hover": {
    "backgroundColor": "#4ca2ff"
  },
  "swiper-box": {
    "height": "200"
  },
  "swiper-item": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#999999",
    "color": "#ffffff"
  },
  "image": {
    "width": "750rpx"
  },
  "uni-bg-red": {
    "backgroundColor": "#ff5a5f"
  },
  "uni-bg-green": {
    "backgroundColor": "#09bb07"
  },
  "uni-bg-blue": {
    "backgroundColor": "#007aff"
  },
  "example-body-item": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "15rpx",
    "marginRight": "15rpx",
    "marginBottom": "15rpx",
    "marginLeft": "15rpx",
    "paddingTop": "15rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "15rpx",
    "height": "60rpx",
    "flex": 1,
    "borderColor": "#e5e5e5",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderRadius": "5"
  },
  "example-body-item-text": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "example-body-dots": {
    "width": "16rpx",
    "height": "16rpx",
    "borderRadius": "50",
    "backgroundColor": "#333333",
    "marginLeft": "10rpx"
  },
  "active": {
    "borderStyle": "solid",
    "borderColor": "#007aff",
    "borderWidth": "1"
  }
}

/***/ })

/******/ });