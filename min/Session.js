"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function t(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){a=!0,o=l}finally{try{!r&&u["return"]&&u["return"]()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_lodashCollectionPartition=require("lodash/collection/partition"),_lodashCollectionPartition2=_interopRequireDefault(_lodashCollectionPartition),Session=function(){function t(e,n,r){var a=this;_classCallCheck(this,t),this.action=r,this.state=n,this.models=e,this.mutations=[],e.forEach(function(t){Object.defineProperty(a,t.getName(),{get:function(){return t}}),t.connect(a)})}return _createClass(t,[{key:"addMutation",value:function(t){this.mutations.push(t)}},{key:"getMutationsFor",value:function(t){var e=t.getName(),n=(0,_lodashCollectionPartition2["default"])(this.mutations,"meta.name",e),r=_slicedToArray(n,2),a=r[0],o=r[1];return this.mutations=o,a}},{key:"getDefaultState",value:function(){var t={};return this.models.forEach(function(e){t[e.getName()]=e.getDefaultState()}),t}},{key:"getState",value:function(t){return this.state?this.state[t]:void 0}},{key:"reduce",value:function(){var t=this;this.mutations=[];var e={};return this.models.forEach(function(t){e[t.getName()]=t.callUserReducer()}),this.mutations.reduce(function(e,n){var r=n.meta.name;return e[r]=t[r].getNextState(),e},e)}}]),t}();exports["default"]=Session,module.exports=exports["default"];