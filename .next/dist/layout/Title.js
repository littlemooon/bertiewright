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

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title() {
  return _react2.default.createElement(
    'div',
    { className: style.container },
    _react2.default.createElement('img', { className: style.background, src: 'static/tartan.jpg', alt: 'bertie wright' }),
    _react2.default.createElement(
      'div',
      { className: style.inner },
      _react2.default.createElement(
        'div',
        { className: style.title },
        _react2.default.createElement(
          'h1',
          { className: style.h1 },
          'Bertie'
        )
      ),
      _react2.default.createElement(
        'h2',
        { className: style.h2 },
        'Independent modern folk musician hailing from the UK'
      ),
      _react2.default.createElement(_Nav2.default, null)
    )
  );
};

var style = {
  container: (0, _css2.default)({
    position: 'relative',
    overflow: 'hidden'
  }),
  background: (0, _css2.default)({
    width: '100%',
    position: 'fixed',
    height: 'calc(100vw * 720 / 1280)',
    maxHeight: '100vh',
    top: '0',
    left: '0',
    zIndex: '-1',
    opacity: '.2'
    // @media screen and (max-width: 1024px) css({ /* Specific to this particular image */
    //   left: 50%;
    //   margin-left: -512px;  /* 50% */
    // }),
  }),
  inner: (0, _css2.default)({
    width: '100%',
    height: 'calc(100vw * 720 / 1280)',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    // @include breakpoint(baby-bear) css({
    //   margin: auto 20% auto 10%;
    //   width: 70%;
    // }),
    // @include breakpoint(mama-bear) css({
    //   margin: auto 35% auto 15%;
    //   width: 50%;
    // }),
  }),
  title: (0, _css2.default)({
    background: 'green',
    padding: '1rem 2rem'
  }),
  h1: (0, _css2.default)({
    fontFamily: _styleVars2.default.font.default,
    fontSize: '8rem',
    lineHeight: '8rem',
    margin: '0'
  }),
  h2: (0, _css2.default)({
    fontSize: '1.4rem',
    lineHeight: '4rem'
  })
};

exports.default = Title;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9UaXRsZS5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZCIsImlubmVyIiwidGl0bGUiLCJoMSIsImgyIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwidG9wIiwibGVmdCIsInpJbmRleCIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiZm9udCIsImRlZmF1bHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdDLE1BQU1DLFNBQXRCO0FBQ0UsMkNBQUssV0FBV0QsTUFBTUUsVUFBdEIsRUFBa0MsS0FBSSxtQkFBdEMsRUFBMEQsS0FBSSxlQUE5RCxHQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBV0YsTUFBTUcsS0FBdEI7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXSCxNQUFNSSxLQUF0QjtBQUE2QjtBQUFBO0FBQUEsWUFBSSxXQUFXSixNQUFNSyxFQUFyQjtBQUEwQjtBQUExQjtBQUE3QixPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUksV0FBV0wsTUFBTU0sRUFBckI7QUFBMEI7QUFBMUIsT0FGRjtBQUdFO0FBSEY7QUFGRixHQURZO0FBQUEsQ0FBZDs7QUFXQSxJQUFNTixRQUFRO0FBQ1pDLGFBQVcsbUJBQUk7QUFDYk0sY0FBVSxVQURHO0FBRWJDLGNBQVU7QUFGRyxHQUFKLENBREM7QUFLWk4sY0FBWSxtQkFBSTtBQUNkTyxXQUFPLE1BRE87QUFFZEYsY0FBVSxPQUZJO0FBR2RHLFlBQVEsMEJBSE07QUFJZEMsZUFBVyxPQUpHO0FBS2RDLFNBQUssR0FMUztBQU1kQyxVQUFNLEdBTlE7QUFPZEMsWUFBUSxJQVBNO0FBUWRDLGFBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQVpjLEdBQUosQ0FMQTtBQW1CWlosU0FBTyxtQkFBSTtBQUNUTSxXQUFPLE1BREU7QUFFVEMsWUFBUSwwQkFGQztBQUdUQyxlQUFXLE9BSEY7QUFJVEssYUFBUyxNQUpBO0FBS1RDLG1CQUFlLFFBTE47QUFNVEMsb0JBQWdCLFFBTlA7QUFPVEMsZ0JBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlMsR0FBSixDQW5CSztBQW9DWmYsU0FBTyxtQkFBSTtBQUNURixnQkFBWSxPQURIO0FBRVRrQixhQUFTO0FBRkEsR0FBSixDQXBDSztBQXdDWmYsTUFBSSxtQkFBSTtBQUNOZ0IsZ0JBQVksb0JBQUVDLElBQUYsQ0FBT0MsT0FEYjtBQUVOQyxjQUFVLE1BRko7QUFHTkMsZ0JBQVksTUFITjtBQUlOQyxZQUFRO0FBSkYsR0FBSixDQXhDUTtBQThDWnBCLE1BQUksbUJBQUk7QUFDTmtCLGNBQVUsUUFESjtBQUVOQyxnQkFBWTtBQUZOLEdBQUo7QUE5Q1EsQ0FBZDs7a0JBb0RlMUIsSyIsImZpbGUiOiJUaXRsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZnJlZC9hL2JlcnRpZXdyaWdodCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgdiBmcm9tICcuLi91dGlscy9zdHlsZS12YXJzJ1xuXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xuXG5jb25zdCBUaXRsZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmJhY2tncm91bmR9IHNyYz0nc3RhdGljL3RhcnRhbi5qcGcnIGFsdD0nYmVydGllIHdyaWdodCcgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5uZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRpdGxlfT48aDEgY2xhc3NOYW1lPXtzdHlsZS5oMX0+eydCZXJ0aWUnfTwvaDE+PC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5oMn0+eydJbmRlcGVuZGVudCBtb2Rlcm4gZm9sayBtdXNpY2lhbiBoYWlsaW5nIGZyb20gdGhlIFVLJ308L2gyPlxuICAgICAgPE5hdiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGNvbnRhaW5lcjogY3NzKHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSksXG4gIGJhY2tncm91bmQ6IGNzcyh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBoZWlnaHQ6ICdjYWxjKDEwMHZ3ICogNzIwIC8gMTI4MCknLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICB0b3A6ICcwJyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgekluZGV4OiAnLTEnLFxuICAgIG9wYWNpdHk6ICcuMidcbiAgICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGNzcyh7IC8qIFNwZWNpZmljIHRvIHRoaXMgcGFydGljdWxhciBpbWFnZSAqL1xuICAgIC8vICAgbGVmdDogNTAlO1xuICAgIC8vICAgbWFyZ2luLWxlZnQ6IC01MTJweDsgIC8qIDUwJSAqL1xuICAgIC8vIH0pLFxuICB9KSxcbiAgaW5uZXI6IGNzcyh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICdjYWxjKDEwMHZ3ICogNzIwIC8gMTI4MCknLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludChiYWJ5LWJlYXIpIGNzcyh7XG4gICAgLy8gICBtYXJnaW46IGF1dG8gMjAlIGF1dG8gMTAlO1xuICAgIC8vICAgd2lkdGg6IDcwJTtcbiAgICAvLyB9KSxcbiAgICAvLyBAaW5jbHVkZSBicmVha3BvaW50KG1hbWEtYmVhcikgY3NzKHtcbiAgICAvLyAgIG1hcmdpbjogYXV0byAzNSUgYXV0byAxNSU7XG4gICAgLy8gICB3aWR0aDogNTAlO1xuICAgIC8vIH0pLFxuICB9KSxcbiAgdGl0bGU6IGNzcyh7XG4gICAgYmFja2dyb3VuZDogJ2dyZWVuJyxcbiAgICBwYWRkaW5nOiAnMXJlbSAycmVtJ1xuICB9KSxcbiAgaDE6IGNzcyh7XG4gICAgZm9udEZhbWlseTogdi5mb250LmRlZmF1bHQsXG4gICAgZm9udFNpemU6ICc4cmVtJyxcbiAgICBsaW5lSGVpZ2h0OiAnOHJlbScsXG4gICAgbWFyZ2luOiAnMCdcbiAgfSksXG4gIGgyOiBjc3Moe1xuICAgIGZvbnRTaXplOiAnMS40cmVtJyxcbiAgICBsaW5lSGVpZ2h0OiAnNHJlbSdcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcbiJdfQ==