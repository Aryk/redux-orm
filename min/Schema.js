"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _get=function(e,t,r){for(var o=!0;o;){var i=e,n=t,s=r;o=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,n);if(void 0!==a){if("value"in a)return a.value;var u=a.get;if(void 0===u)return;return u.call(s)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=n,r=s,o=!0,a=l=void 0}},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_lodashObjectForOwn=require("lodash/object/forOwn"),_lodashObjectForOwn2=_interopRequireDefault(_lodashObjectForOwn),_lodashCollectionFind=require("lodash/collection/find"),_lodashCollectionFind2=_interopRequireDefault(_lodashCollectionFind),_Session=require("./Session"),_Session2=_interopRequireDefault(_Session),_Model2=require("./Model"),_Model3=_interopRequireDefault(_Model2),_fields=require("./fields"),_descriptors=require("./descriptors"),_utils=require("./utils"),Schema=function(){function e(){_classCallCheck(this,e),this.registry=[],this.implicitThroughModels=[]}return _createClass(e,[{key:"define",value:function(e,t,r,o){var i=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return _inherits(t,e),t}(_Model3["default"]);return i.meta=Object.assign({name:e},o),i.fields=t,"function"==typeof r&&(i.reducer=r),this.register(i),i}},{key:"setReducer",value:function(e,t){var r=this.get(e);r.reducer=t}},{key:"register",value:function(){var e=this,t=Array.prototype.slice.call(arguments);t.forEach(function(t){var r;t.invalidateCaches();var o=t.getManyToManyModels();o.forEach(function(e){return e.invalidateCaches()}),(r=e.implicitThroughModels).push.apply(r,_toConsumableArray(o)),e.registry.push(t)})}},{key:"get",value:function(e){var t=(0,_lodashCollectionFind2["default"])(this.registry.concat(this.implicitThroughModels),function(t){return t.getName()===e});if("undefined"==typeof t)throw new Error("Did not find model "+e+" from registry.");return t}},{key:"getModelClasses",value:function(){return this.setupModelPrototypes(),this.registry.concat(this.implicitThroughModels)}},{key:"_attachQuerySetMethods",value:function(e){var t=e.querySetClass;(0,_utils.attachQuerySetMethods)(e,t)}},{key:"setupModelPrototypes",value:function(){var e=this;this.registry.forEach(function(t){if(!t._setupDone){var r=t.fields;(0,_lodashObjectForOwn2["default"])(r,function(r,o){var i=r.toModelName,n="this"===i?t:e.get(i);if(r instanceof _fields.ForeignKey){Object.defineProperty(t.prototype,o,(0,_descriptors.forwardManyToOneDescriptor)(o,n)),t.definedProperties[o]=!0;var s=(0,_utils.reverseFieldName)(t.getName());Object.defineProperty(n.prototype,s,(0,_descriptors.backwardManyToOneDescriptor)(o,t)),n.definedProperties[s]=!0}else if(r instanceof _fields.ManyToMany){var a=(0,_utils.m2mName)(t.getName(),o),u=e.get(a);Object.defineProperty(t.prototype,o,(0,_descriptors.manyToManyDescriptor)(t,n,u,!1)),t.definedProperties[o]=!0;var s=(0,_utils.reverseFieldName)(t.getName());Object.defineProperty(n.prototype,s,(0,_descriptors.manyToManyDescriptor)(t,n,u,!0)),n.definedProperties[s]=!0}else if(r instanceof _fields.OneToOne){Object.defineProperty(t.prototype,o,(0,_descriptors.forwardOneToOneDescriptor)(o,n)),t.definedProperties[o]=!0;var s=t.getName().toLowerCase();Object.defineProperty(n.prototype,s,(0,_descriptors.backwardOneToOneDescriptor)(o,t)),t.definedProperties[s]=!0}}),e._attachQuerySetMethods(t),t._setupDone=!0}}),this.implicitThroughModels.forEach(function(t){t._setupDone||((0,_lodashObjectForOwn2["default"])(t.fields,function(r,o){var i=r.toModelName,n="this"===i?t:e.get(i);Object.defineProperty(t.prototype,o,(0,_descriptors.forwardManyToOneDescriptor)(o,n)),t.definedProperties[o]=!0}),e._attachQuerySetMethods(t),t._setupDone=!0)})}},{key:"fromEmpty",value:function(e){return new _Session2["default"](this.getModelClasses(),this.getDefaultState(),e)}},{key:"from",value:function(e,t){return new _Session2["default"](this.getModelClasses(),e,t)}},{key:"reducer",value:function(){var e=this;return function(t,r){return e.from(t,r).reduce()}}}]),e}();exports["default"]=Schema,module.exports=exports["default"];