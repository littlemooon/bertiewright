'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/fred/a/bertiewright/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/fred/a/bertiewright/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _styles = require('../utils/styles');

var _styles2 = _interopRequireDefault(_styles);

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
    padding: _styles2.default.padding.content + ' 5% 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: _styles2.default.color.background,
    ':first-child': {
      background: 'red'
    },
    ':last-child': {
      background: 'blue'
    }
  }),
  inner: (0, _css2.default)({
    maxWidth: '30rem'
  })
};

exports.default = Content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9Db250ZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJjaGlsZHJlbiIsInN0eWxlIiwiY29udGFpbmVyIiwiaW5uZXIiLCJwcm9wVHlwZXMiLCJlbGVtZW50IiwicGFkZGluZyIsImNvbnRlbnQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJjb2xvciIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsU0FBVkEsT0FBVTtBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLFNBQ2Q7QUFBQTtBQUFBLE1BQUssV0FBV0MsTUFBTUMsU0FBdEI7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFXRCxNQUFNRSxLQUF0QjtBQUNHSDtBQURIO0FBREYsR0FEYztBQUFBLENBQWhCOztBQVFBRCxRQUFRSyxTQUFSLEdBQW9CO0FBQ2xCSixZQUFVLGlCQUFVSztBQURGLENBQXBCOztBQUlBLElBQU1KLFFBQVE7QUFDWkMsYUFBVyxtQkFBSTtBQUNiSSxhQUFZLGlCQUFFQSxPQUFGLENBQVVDLE9BQXRCLFVBRGE7QUFFYkMsYUFBUyxNQUZJO0FBR2JDLG1CQUFlLFFBSEY7QUFJYkMsZ0JBQVksUUFKQztBQUtiQyxvQkFBZ0IsUUFMSDtBQU1iQyxnQkFBWSxpQkFBRUMsS0FBRixDQUFRRCxVQU5QO0FBT2Isb0JBQWdCO0FBQ2RBLGtCQUFZO0FBREUsS0FQSDtBQVViLG1CQUFlO0FBQ2JBLGtCQUFZO0FBREM7QUFWRixHQUFKLENBREM7QUFlWlQsU0FBTyxtQkFBSTtBQUNUVyxjQUFVO0FBREQsR0FBSjtBQWZLLENBQWQ7O2tCQW9CZWYsTyIsImZpbGUiOiJDb250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmVkL2EvYmVydGlld3JpZ2h0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB2IGZyb20gJy4uL3V0aWxzL3N0eWxlcydcblxuY29uc3QgQ29udGVudCA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbm5lcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50XG59XG5cbmNvbnN0IHN0eWxlID0ge1xuICBjb250YWluZXI6IGNzcyh7XG4gICAgcGFkZGluZzogYCR7di5wYWRkaW5nLmNvbnRlbnR9IDUlIDBgLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogdi5jb2xvci5iYWNrZ3JvdW5kLFxuICAgICc6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmVkJ1xuICAgIH0sXG4gICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgYmFja2dyb3VuZDogJ2JsdWUnXG4gICAgfVxuICB9KSxcbiAgaW5uZXI6IGNzcyh7XG4gICAgbWF4V2lkdGg6ICczMHJlbSdcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFxuIl19