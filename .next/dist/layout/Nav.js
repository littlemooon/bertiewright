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
    margin: '0 ' + _styles2.default.padding.page
  }),
  li: (0, _css2.default)({
    color: '#fff',
    padding: '2rem 0',
    flexWrap: 'nowrap',
    width: '8rem',
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
      // background: 'rgba(255, 255, 255, .2)'
      color: _styles2.default.color.secondary
    }
  })
};

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9OYXYuanMiXSwibmFtZXMiOlsiTmF2Iiwic3R5bGUiLCJ1bCIsImxpIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwicGFkZGluZyIsInBhZ2UiLCJjb2xvciIsImZsZXhXcmFwIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJzZWNvbmRhcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxTQUFOQSxHQUFNO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBSSxXQUFXQyxNQUFNQyxFQUFyQjtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVdELE1BQU1FLEVBQXJCO0FBQTBCO0FBQTFCLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBSSxXQUFXRixNQUFNRSxFQUFyQjtBQUEwQjtBQUExQixLQUZGO0FBR0U7QUFBQTtBQUFBLFFBQUksV0FBV0YsTUFBTUUsRUFBckI7QUFBMEI7QUFBMUI7QUFIRixHQURVO0FBQUEsQ0FBWjs7QUFRQSxJQUFNRixRQUFRO0FBQ1pDLE1BQUksbUJBQUk7QUFDTkUsYUFBUyxNQURIO0FBRU5DLG9CQUFnQixRQUZWO0FBR05DLG1CQUFhLGlCQUFFQyxPQUFGLENBQVVDO0FBSGpCLEdBQUosQ0FEUTtBQU1aTCxNQUFJLG1CQUFJO0FBQ05NLFdBQU8sTUFERDtBQUVORixhQUFTLFFBRkg7QUFHTkcsY0FBVSxRQUhKO0FBSU5DLFdBQU8sTUFKRDtBQUtOQyxlQUFXLFFBTEw7QUFNTkMsWUFBUSxTQU5GO0FBT04sY0FBVTtBQUNSO0FBQ0FKLGFBQU8saUJBQUVBLEtBQUYsQ0FBUUs7QUFGUDtBQVBKLEdBQUo7QUFOUSxDQUFkOztrQkFvQmVkLEciLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmVkL2EvYmVydGlld3JpZ2h0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB2IGZyb20gJy4uL3V0aWxzL3N0eWxlcydcblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuICA8dWwgY2xhc3NOYW1lPXtzdHlsZS51bH0+XG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGl9PnsnQWJvdXQnfTwvbGk+XG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGl9PnsnTWVkaWEnfTwvbGk+XG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGl9PnsnQ29udGFjdCd9PC9saT5cbiAgPC91bD5cbilcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHVsOiBjc3Moe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiBgMCAke3YucGFkZGluZy5wYWdlfWBcbiAgfSksXG4gIGxpOiBjc3Moe1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgcGFkZGluZzogJzJyZW0gMCcsXG4gICAgZmxleFdyYXA6ICdub3dyYXAnLFxuICAgIHdpZHRoOiAnOHJlbScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgLy8gYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjIpJ1xuICAgICAgY29sb3I6IHYuY29sb3Iuc2Vjb25kYXJ5XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ==