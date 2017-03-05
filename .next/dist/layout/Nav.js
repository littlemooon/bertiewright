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

var Nav = function Nav() {
  return _react2.default.createElement(
    'ul',
    { className: style.ul },
    _react2.default.createElement(
      'li',
      { className: style.li },
      'About'
    ),
    _react2.default.createElement(
      'li',
      { className: style.li },
      'Media'
    ),
    _react2.default.createElement(
      'li',
      { className: style.li },
      'Contact'
    )
  );
};

var style = {
  ul: (0, _css2.default)({
    display: 'flex',
    justifyContent: 'center',
    margin: '0 ' + _styleVars2.default.padding.page
  }),
  li: (0, _css2.default)({
    color: '#fff',
    padding: '2rem 0',
    flexWrap: 'nowrap',
    width: '8rem',
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
      background: 'rgba(255, 255, 255, .2)'
    }
  })
};

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9OYXYuanMiXSwibmFtZXMiOlsiTmF2Iiwic3R5bGUiLCJ1bCIsImxpIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwicGFkZGluZyIsInBhZ2UiLCJjb2xvciIsImZsZXhXcmFwIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sU0FBTkEsR0FBTTtBQUFBLFNBQ1Y7QUFBQTtBQUFBLE1BQUksV0FBV0MsTUFBTUMsRUFBckI7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFXRCxNQUFNRSxFQUFyQjtBQUEwQjtBQUExQixLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUksV0FBV0YsTUFBTUUsRUFBckI7QUFBMEI7QUFBMUIsS0FGRjtBQUdFO0FBQUE7QUFBQSxRQUFJLFdBQVdGLE1BQU1FLEVBQXJCO0FBQTBCO0FBQTFCO0FBSEYsR0FEVTtBQUFBLENBQVo7O0FBUUEsSUFBTUYsUUFBUTtBQUNaQyxNQUFJLG1CQUFJO0FBQ05FLGFBQVMsTUFESDtBQUVOQyxvQkFBZ0IsUUFGVjtBQUdOQyxtQkFBYSxvQkFBRUMsT0FBRixDQUFVQztBQUhqQixHQUFKLENBRFE7QUFNWkwsTUFBSSxtQkFBSTtBQUNOTSxXQUFPLE1BREQ7QUFFTkYsYUFBUyxRQUZIO0FBR05HLGNBQVUsUUFISjtBQUlOQyxXQUFPLE1BSkQ7QUFLTkMsZUFBVyxRQUxMO0FBTU5DLFlBQVEsU0FORjtBQU9OLGNBQVU7QUFDUkMsa0JBQVk7QUFESjtBQVBKLEdBQUo7QUFOUSxDQUFkOztrQkFtQmVkLEciLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmVkL2EvYmVydGlld3JpZ2h0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB2IGZyb20gJy4uL3V0aWxzL3N0eWxlLXZhcnMnXG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPHVsIGNsYXNzTmFtZT17c3R5bGUudWx9PlxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLmxpfT57J0Fib3V0J308L2xpPlxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLmxpfT57J01lZGlhJ308L2xpPlxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLmxpfT57J0NvbnRhY3QnfTwvbGk+XG4gIDwvdWw+XG4pXG5cbmNvbnN0IHN0eWxlID0ge1xuICB1bDogY3NzKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1hcmdpbjogYDAgJHt2LnBhZGRpbmcucGFnZX1gXG4gIH0pLFxuICBsaTogY3NzKHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHBhZGRpbmc6ICcycmVtIDAnLFxuICAgIGZsZXhXcmFwOiAnbm93cmFwJyxcbiAgICB3aWR0aDogJzhyZW0nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSdcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl19