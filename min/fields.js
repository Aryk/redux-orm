"use strict";function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _get=function(t,e,o){for(var r=!0;r;){var n=t,i=e,c=o;r=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,i);if(void 0!==s){if("value"in s)return s.value;var a=s.get;if(void 0===a)return;return a.call(c)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=i,o=c,r=!0,s=l=void 0}},Field=function t(e){_classCallCheck(this,t),this.toModelName=e},ForeignKey=function(t){function e(){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return _inherits(e,t),e}(Field),ManyToMany=function(t){function e(){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return _inherits(e,t),e}(Field),OneToOne=function(t){function e(){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return _inherits(e,t),e}(Field);exports.ForeignKey=ForeignKey,exports.ManyToMany=ManyToMany,exports.OneToOne=OneToOne;