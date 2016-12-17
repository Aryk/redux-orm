"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function match(e,t){var r=Object.keys(e);return r.every(function(r){return e[r]===t[r]})}function capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}function m2mName(e,t){return e+capitalize(t)}function m2mFromFieldName(e){return"from"+e+"Id"}function m2mToFieldName(e){return"to"+e+"Id"}function reverseFieldName(e){return e.toLowerCase()+"Set"}function querySetDelegatorFactory(e){return function(){var t;return(t=this.getQuerySet())[e].apply(t,arguments)}}function attachQuerySetMethods(e,t){var r=t.sharedMethods;r.forEach(function(r){var n=Object.getOwnPropertyDescriptor(t.prototype,r);"undefined"!=typeof n&&"undefined"!=typeof n.get?Object.defineProperty(e,r,n):e[r]=querySetDelegatorFactory(r)}),Object.defineProperties(e,{plain:{get:function(){return this._plain=!0,this}},models:{get:function(){return this._plain=!1,this}}})}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ListIterator=function(){function e(t,r,n){_classCallCheck(this,e),this.list=t,this.idx=r||0,"function"==typeof n&&(this.getValue=n)}return _createClass(e,[{key:"getValue",value:function(e,t){return t[e]}},{key:"next",value:function(){return this.idx<this.list.length-1?{value:this.getValue(this.list,this.idx++),done:!1}:this.idx<this.list.length?{value:this.getValue(this.list,this.idx++),done:!0}:void 0}}]),e}();exports.match=match,exports.attachQuerySetMethods=attachQuerySetMethods,exports.m2mName=m2mName,exports.m2mFromFieldName=m2mFromFieldName,exports.m2mToFieldName=m2mToFieldName,exports.reverseFieldName=reverseFieldName,exports.ListIterator=ListIterator;