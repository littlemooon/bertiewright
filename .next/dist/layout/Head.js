'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/fred/a/bertiewright/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/fred/a/bertiewright/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styleVars = require('../utils/style-vars');

var _styleVars2 = _interopRequireDefault(_styleVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHead = function PageHead() {
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    _react2.default.createElement(
      'title',
      null,
      'Bertie Wright'
    ),
    _react2.default.createElement('meta', { property: 'og:title', content: 'Bertie Wright' }),
    _react2.default.createElement('meta', { name: 'description', content: 'Since starting to play the melodeon at the age of 6, Bertie has traversed beyond traditional folk to incorporate influences from continental folk and jazz.' }),
    _react2.default.createElement('meta', { property: 'og:description', content: 'Since starting to play the melodeon at the age of 6, Bertie has traversed beyond traditional folk to incorporate influences from continental folk and jazz.' }),
    _react2.default.createElement('meta', { name: 'keywords', content: 'folk melodeon indie modern english independent traditional accordion' }),
    _react2.default.createElement(
      'style',
      null,
      '\n      html {\n        font-size: 100%;\n        overflow-y: scroll;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n      }\n      body {\n        background: ' + _styleVars2.default.color.background + ';\n        color: ' + _styleVars2.default.color.primary + ';\n        -webkit-font-smoothing: antialiased;\n        -webkit-text-size-adjust: 100%;\n        overflow-x: hidden;\n        font-family: ' + _styleVars2.default.font.default + ';\n        padding: 0;\n        font-size: 1.4rem;\n        line-height: 2rem;\n        margin: 0;\n      }\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n      ::-moz-selection, ::selection {\n        background: ' + _styleVars2.default.color.secondary + ';\n        color: ' + _styleVars2.default.color.light + ';\n      }\n      h1, h2, h3, h4, h5, h6 {\n        font-family: ' + _styleVars2.default.font.header + ';\n        font-weight: normal;\n        text-rendering: optimizelegibility;\n        a {\n          font-weight: inherit;\n        }\n      }\n      p {\n        font-size: 16px;\n        line-height: 24px;\n        margin: 0 0 3rem;\n        text-align: justify;\n      }\n      a {\n        color: ' + _styleVars2.default.color.secondary + ';\n        text-decoration: none;\n        transition: all 0.3s ease-out;\n        &:hover {\n          color: ' + _styleVars2.default.color.secondaryHover + ';\n          text-decoration: none;\n          transition: all 0.3s ease-out;\n        }\n      }\n      a, a:active, a:focus,\n      input, input:active, input:focus,\n      select, select:active, select:focus,\n      textarea, textarea:active, textarea:focus {\n        outline: 0 !important;\n      }\n      img {\n        -ms-interpolation-mode: bicubic;\n        max-width: 100%;\n        overflow-x: visible;\n        overflow-y: visible;\n        position: static;\n      }\n      ul {\n        padding: 0 0 0 0;\n        list-style: none;\n      }\n    '
    )
  );
};

exports.default = PageHead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9IZWFkLmpzIl0sIm5hbWVzIjpbIlBhZ2VIZWFkIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImZvbnQiLCJkZWZhdWx0Iiwic2Vjb25kYXJ5IiwibGlnaHQiLCJoZWFkZXIiLCJzZWNvbmRhcnlIb3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFLDRDQUFNLFNBQVEsT0FBZCxHQURGO0FBRUUsNENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEscUNBQTlCLEdBRkY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkY7QUFLRSw0Q0FBTSxVQUFTLFVBQWYsRUFBMEIsU0FBUSxlQUFsQyxHQUxGO0FBT0UsNENBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVEsNkpBQWpDLEdBUEY7QUFRRSw0Q0FBTSxVQUFTLGdCQUFmLEVBQWdDLFNBQVEsNkpBQXhDLEdBUkY7QUFVRSw0Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSxzRUFBOUIsR0FWRjtBQVlFO0FBQUE7QUFBQTtBQUFBLDJNQVFrQixvQkFBRUMsS0FBRixDQUFRQyxVQVIxQiwwQkFTYSxvQkFBRUQsS0FBRixDQUFRRSxPQVRyQixvSkFhbUIsb0JBQUVDLElBQUYsQ0FBT0MsT0FiMUIsOFFBeUJrQixvQkFBRUosS0FBRixDQUFRSyxTQXpCMUIsMEJBMEJhLG9CQUFFTCxLQUFGLENBQVFNLEtBMUJyQix5RUE2Qm1CLG9CQUFFSCxJQUFGLENBQU9JLE1BN0IxQixxVEEyQ2Esb0JBQUVQLEtBQUYsQ0FBUUssU0EzQ3JCLHVIQStDZSxvQkFBRUwsS0FBRixDQUFRUSxjQS9DdkI7QUFBQTtBQVpGLEdBRGU7QUFBQSxDQUFqQjs7a0JBc0ZlVCxRIiwiZmlsZSI6IkhlYWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWQvYS9iZXJ0aWV3cmlnaHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB2IGZyb20gJy4uL3V0aWxzL3N0eWxlLXZhcnMnXG5cbmNvbnN0IFBhZ2VIZWFkID0gKCkgPT4gKFxuICA8SGVhZD5cbiAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG5cbiAgICA8dGl0bGU+QmVydGllIFdyaWdodDwvdGl0bGU+XG4gICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PSdCZXJ0aWUgV3JpZ2h0JyAvPlxuXG4gICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1NpbmNlIHN0YXJ0aW5nIHRvIHBsYXkgdGhlIG1lbG9kZW9uIGF0IHRoZSBhZ2Ugb2YgNiwgQmVydGllIGhhcyB0cmF2ZXJzZWQgYmV5b25kIHRyYWRpdGlvbmFsIGZvbGsgdG8gaW5jb3Jwb3JhdGUgaW5mbHVlbmNlcyBmcm9tIGNvbnRpbmVudGFsIGZvbGsgYW5kIGphenouJyAvPlxuICAgIDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD0nU2luY2Ugc3RhcnRpbmcgdG8gcGxheSB0aGUgbWVsb2Rlb24gYXQgdGhlIGFnZSBvZiA2LCBCZXJ0aWUgaGFzIHRyYXZlcnNlZCBiZXlvbmQgdHJhZGl0aW9uYWwgZm9sayB0byBpbmNvcnBvcmF0ZSBpbmZsdWVuY2VzIGZyb20gY29udGluZW50YWwgZm9sayBhbmQgamF6ei4nIC8+XG5cbiAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nZm9sayBtZWxvZGVvbiBpbmRpZSBtb2Rlcm4gZW5nbGlzaCBpbmRlcGVuZGVudCB0cmFkaXRpb25hbCBhY2NvcmRpb24nIC8+XG5cbiAgICA8c3R5bGU+e2BcbiAgICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3YuY29sb3IuYmFja2dyb3VuZH07XG4gICAgICAgIGNvbG9yOiAke3YuY29sb3IucHJpbWFyeX07XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7di5mb250LmRlZmF1bHR9O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICA6Oi1tb3otc2VsZWN0aW9uLCA6OnNlbGVjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7di5jb2xvci5zZWNvbmRhcnl9O1xuICAgICAgICBjb2xvcjogJHt2LmNvbG9yLmxpZ2h0fTtcbiAgICAgIH1cbiAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICBmb250LWZhbWlseTogJHt2LmZvbnQuaGVhZGVyfTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBtYXJnaW46IDAgMCAzcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAke3YuY29sb3Iuc2Vjb25kYXJ5fTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7di5jb2xvci5zZWNvbmRhcnlIb3Zlcn07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhLCBhOmFjdGl2ZSwgYTpmb2N1cyxcbiAgICAgIGlucHV0LCBpbnB1dDphY3RpdmUsIGlucHV0OmZvY3VzLFxuICAgICAgc2VsZWN0LCBzZWxlY3Q6YWN0aXZlLCBzZWxlY3Q6Zm9jdXMsXG4gICAgICB0ZXh0YXJlYSwgdGV4dGFyZWE6YWN0aXZlLCB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcbiAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvSGVhZD5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRcbiJdfQ==