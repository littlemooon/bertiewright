'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/fred/a/bertiewright/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _Background2.default,
    null,
    _react2.default.createElement(_Head2.default, null),
    _react2.default.createElement(_Title2.default, null),
    _react2.default.createElement(_Nav2.default, null),
    _react2.default.createElement(
      _Content2.default,
      null,
      children
    )
  );
};

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9QYWdlLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUNFLHVEQURGO0FBRUUsd0RBRkY7QUFHRSxzREFIRjtBQUlFO0FBQUE7QUFBQTtBQUFVQTtBQUFWO0FBSkYsR0FEVztBQUFBLENBQWI7O2tCQVNlRCxJIiwiZmlsZSI6IlBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWQvYS9iZXJ0aWV3cmlnaHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkIGZyb20gJy4vSGVhZCcgXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JyBcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZCcgXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZScgXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnIFxuXG5jb25zdCBQYWdlID0gKHtjaGlsZHJlbn0pID0+IChcbiAgPEJhY2tncm91bmQ+XG4gICAgPEhlYWQvPlxuICAgIDxUaXRsZS8+XG4gICAgPE5hdi8+XG4gICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgPC9CYWNrZ3JvdW5kPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXX0=