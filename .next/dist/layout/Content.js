'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/fred/a/bertiewright/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/fred/a/bertiewright/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _styleVars = require('../utils/style-vars');

var _styleVars2 = _interopRequireDefault(_styleVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: style.container },
    _react2.default.createElement(
      'div',
      { className: style.inner },
      children
    )
  );
};

Content.propTypes = {
  children: _react.PropTypes.element
};

var style = {
  container: (0, _css2.default)({
    padding: '10rem 5% 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: _styleVars2.default.color.background
  }),
  inner: (0, _css2.default)({
    maxWidth: '30rem'
  })
};

exports.default = Content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJjaGlsZHJlbiIsInN0eWxlIiwiY29udGFpbmVyIiwiaW5uZXIiLCJwcm9wVHlwZXMiLCJlbGVtZW50IiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsU0FDZDtBQUFBO0FBQUEsTUFBSyxXQUFXQyxNQUFNQyxTQUF0QjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdELE1BQU1FLEtBQXRCO0FBQ0dIO0FBREg7QUFERixHQURjO0FBQUEsQ0FBaEI7O0FBUUFELFFBQVFLLFNBQVIsR0FBb0I7QUFDbEJKLFlBQVUsaUJBQVVLO0FBREYsQ0FBcEI7O0FBSUEsSUFBTUosUUFBUTtBQUNaQyxhQUFXLG1CQUFJO0FBQ2JJLHlCQURhO0FBRWJDLGFBQVMsTUFGSTtBQUdiQyxtQkFBZSxRQUhGO0FBSWJDLGdCQUFZLFFBSkM7QUFLYkMsb0JBQWdCLFFBTEg7QUFNYkMsZ0JBQVksb0JBQUVDLEtBQUYsQ0FBUUQ7QUFOUCxHQUFKLENBREM7QUFTWlIsU0FBTyxtQkFBSTtBQUNUVSxjQUFVO0FBREQsR0FBSjtBQVRLLENBQWQ7O2tCQWNlZCxPIiwiZmlsZSI6IkNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWQvYS9iZXJ0aWV3cmlnaHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IHYgZnJvbSAnLi4vdXRpbHMvc3R5bGUtdmFycydcblxuY29uc3QgQ29udGVudCA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbm5lcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50XG59XG5cbmNvbnN0IHN0eWxlID0ge1xuICBjb250YWluZXI6IGNzcyh7XG4gICAgcGFkZGluZzogYDEwcmVtIDUlIDBgLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogdi5jb2xvci5iYWNrZ3JvdW5kXG4gIH0pLFxuICBpbm5lcjogY3NzKHtcbiAgICBtYXhXaWR0aDogJzMwcmVtJ1xuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XG4iXX0=