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
    padding: '1rem 2rem',
    background: _styles2.default.color.secondary
  }),
  h1: (0, _css2.default)({
    fontFamily: _styles2.default.font.default,
    color: _styles2.default.color.title,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9UaXRsZS5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZCIsImlubmVyIiwidGl0bGUiLCJoMSIsImgyIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwidG9wIiwibGVmdCIsInpJbmRleCIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJjb2xvciIsInNlY29uZGFyeSIsImZvbnRGYW1pbHkiLCJmb250IiwiZGVmYXVsdCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFFBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBV0MsTUFBTUMsU0FBdEI7QUFDRSwyQ0FBSyxXQUFXRCxNQUFNRSxVQUF0QixFQUFrQyxLQUFJLG1CQUF0QyxFQUEwRCxLQUFJLGVBQTlELEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFXRixNQUFNRyxLQUF0QjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdILE1BQU1JLEtBQXRCO0FBQTZCO0FBQUE7QUFBQSxZQUFJLFdBQVdKLE1BQU1LLEVBQXJCO0FBQTBCO0FBQTFCO0FBQTdCLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBSSxXQUFXTCxNQUFNTSxFQUFyQjtBQUEwQjtBQUExQixPQUZGO0FBR0U7QUFIRjtBQUZGLEdBRFk7QUFBQSxDQUFkOztBQVdBLElBQU1OLFFBQVE7QUFDWkMsYUFBVyxtQkFBSTtBQUNiTSxjQUFVLFVBREc7QUFFYkMsY0FBVTtBQUZHLEdBQUosQ0FEQztBQUtaTixjQUFZLG1CQUFJO0FBQ2RPLFdBQU8sTUFETztBQUVkRixjQUFVLE9BRkk7QUFHZEcsWUFBUSwwQkFITTtBQUlkQyxlQUFXLE9BSkc7QUFLZEMsU0FBSyxHQUxTO0FBTWRDLFVBQU0sR0FOUTtBQU9kQyxZQUFRLElBUE07QUFRZEMsYUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBWmMsR0FBSixDQUxBO0FBbUJaWixTQUFPLG1CQUFJO0FBQ1RNLFdBQU8sTUFERTtBQUVUQyxZQUFRLDBCQUZDO0FBR1RDLGVBQVcsT0FIRjtBQUlUSyxhQUFTLE1BSkE7QUFLVEMsbUJBQWUsUUFMTjtBQU1UQyxvQkFBZ0IsUUFOUDtBQU9UQyxnQkFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUyxHQUFKLENBbkJLO0FBb0NaZixTQUFPLG1CQUFJO0FBQ1RnQixhQUFTLFdBREE7QUFFVGxCLGdCQUFZLGlCQUFFbUIsS0FBRixDQUFRQztBQUZYLEdBQUosQ0FwQ0s7QUF3Q1pqQixNQUFJLG1CQUFJO0FBQ05rQixnQkFBWSxpQkFBRUMsSUFBRixDQUFPQyxPQURiO0FBRU5KLFdBQU8saUJBQUVBLEtBQUYsQ0FBUWpCLEtBRlQ7QUFHTnNCLGNBQVUsTUFISjtBQUlOQyxnQkFBWSxNQUpOO0FBS05DLFlBQVE7QUFMRixHQUFKLENBeENRO0FBK0NadEIsTUFBSSxtQkFBSTtBQUNOb0IsY0FBVSxRQURKO0FBRU5DLGdCQUFZO0FBRk4sR0FBSjtBQS9DUSxDQUFkOztrQkFxRGU1QixLIiwiZmlsZSI6IlRpdGxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmVkL2EvYmVydGlld3JpZ2h0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB2IGZyb20gJy4uL3V0aWxzL3N0eWxlcydcblxuaW1wb3J0IE5hdiBmcm9tICcuL05hdidcblxuY29uc3QgVGl0bGUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5iYWNrZ3JvdW5kfSBzcmM9J3N0YXRpYy90YXJ0YW4uanBnJyBhbHQ9J2JlcnRpZSB3cmlnaHQnIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlubmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+PGgxIGNsYXNzTmFtZT17c3R5bGUuaDF9PnsnQmVydGllJ308L2gxPjwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuaDJ9PnsnSW5kZXBlbmRlbnQgbW9kZXJuIGZvbGsgbXVzaWNpYW4gaGFpbGluZyBmcm9tIHRoZSBVSyd9PC9oMj5cbiAgICAgIDxOYXYgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IHN0eWxlID0ge1xuICBjb250YWluZXI6IGNzcyh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0pLFxuICBiYWNrZ3JvdW5kOiBjc3Moe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgaGVpZ2h0OiAnY2FsYygxMDB2dyAqIDcyMCAvIDEyODApJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzAnLFxuICAgIHpJbmRleDogJy0xJyxcbiAgICBvcGFjaXR5OiAnLjInXG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBjc3MoeyAvKiBTcGVjaWZpYyB0byB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UgKi9cbiAgICAvLyAgIGxlZnQ6IDUwJTtcbiAgICAvLyAgIG1hcmdpbi1sZWZ0OiAtNTEycHg7ICAvKiA1MCUgKi9cbiAgICAvLyB9KSxcbiAgfSksXG4gIGlubmVyOiBjc3Moe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnY2FsYygxMDB2dyAqIDcyMCAvIDEyODApJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQoYmFieS1iZWFyKSBjc3Moe1xuICAgIC8vICAgbWFyZ2luOiBhdXRvIDIwJSBhdXRvIDEwJTtcbiAgICAvLyAgIHdpZHRoOiA3MCU7XG4gICAgLy8gfSksXG4gICAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludChtYW1hLWJlYXIpIGNzcyh7XG4gICAgLy8gICBtYXJnaW46IGF1dG8gMzUlIGF1dG8gMTUlO1xuICAgIC8vICAgd2lkdGg6IDUwJTtcbiAgICAvLyB9KSxcbiAgfSksXG4gIHRpdGxlOiBjc3Moe1xuICAgIHBhZGRpbmc6ICcxcmVtIDJyZW0nLFxuICAgIGJhY2tncm91bmQ6IHYuY29sb3Iuc2Vjb25kYXJ5XG4gIH0pLFxuICBoMTogY3NzKHtcbiAgICBmb250RmFtaWx5OiB2LmZvbnQuZGVmYXVsdCxcbiAgICBjb2xvcjogdi5jb2xvci50aXRsZSxcbiAgICBmb250U2l6ZTogJzhyZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICc4cmVtJyxcbiAgICBtYXJnaW46ICcwJ1xuICB9KSxcbiAgaDI6IGNzcyh7XG4gICAgZm9udFNpemU6ICcxLjRyZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICc0cmVtJ1xuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZVxuIl19