'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/fred/a/bertiewright/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/fred/a/bertiewright/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styles = require('../utils/styles');

var _styles2 = _interopRequireDefault(_styles);

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
      '\n      html {\n        font-size: 100%;\n        overflow-y: scroll;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n      }\n      body {\n        background: ' + _styles2.default.color.background + ';\n        color: ' + _styles2.default.color.primary + ';\n        -webkit-font-smoothing: antialiased;\n        -webkit-text-size-adjust: 100%;\n        overflow-x: hidden;\n        font-family: ' + _styles2.default.font.default + ';\n        padding: 0;\n        font-size: 1.4rem;\n        line-height: 2rem;\n        margin: 0;\n      }\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n      ::-moz-selection, ::selection {\n        background: ' + _styles2.default.color.secondary + ';\n        color: ' + _styles2.default.color.light + ';\n      }\n      h1, h2, h3, h4, h5, h6 {\n        font-family: ' + _styles2.default.font.header + ';\n        font-weight: normal;\n        text-rendering: optimizelegibility;\n        a {\n          font-weight: inherit;\n        }\n      }\n      p {\n        font-size: 16px;\n        line-height: 24px;\n        margin: 0 0 3rem;\n        text-align: justify;\n      }\n      a {\n        color: ' + _styles2.default.color.secondary + ';\n        text-decoration: none;\n        transition: all 0.3s ease-out;\n        &:hover {\n          color: ' + _styles2.default.color.secondaryHover + ';\n          text-decoration: none;\n          transition: all 0.3s ease-out;\n        }\n      }\n      a, a:active, a:focus,\n      input, input:active, input:focus,\n      select, select:active, select:focus,\n      textarea, textarea:active, textarea:focus {\n        outline: 0 !important;\n      }\n      img {\n        -ms-interpolation-mode: bicubic;\n        max-width: 100%;\n        overflow-x: visible;\n        overflow-y: visible;\n        position: static;\n      }\n      ul {\n        padding: 0 0 0 0;\n        list-style: none;\n      }\n    '
    )
  );
};

exports.default = PageHead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9IZWFkLmpzIl0sIm5hbWVzIjpbIlBhZ2VIZWFkIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImZvbnQiLCJkZWZhdWx0Iiwic2Vjb25kYXJ5IiwibGlnaHQiLCJoZWFkZXIiLCJzZWNvbmRhcnlIb3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFLDRDQUFNLFNBQVEsT0FBZCxHQURGO0FBRUUsNENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEscUNBQTlCLEdBRkY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkY7QUFLRSw0Q0FBTSxVQUFTLFVBQWYsRUFBMEIsU0FBUSxlQUFsQyxHQUxGO0FBT0UsNENBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVEsNkpBQWpDLEdBUEY7QUFRRSw0Q0FBTSxVQUFTLGdCQUFmLEVBQWdDLFNBQVEsNkpBQXhDLEdBUkY7QUFVRSw0Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSxzRUFBOUIsR0FWRjtBQVlFO0FBQUE7QUFBQTtBQUFBLDJNQVFrQixpQkFBRUMsS0FBRixDQUFRQyxVQVIxQiwwQkFTYSxpQkFBRUQsS0FBRixDQUFRRSxPQVRyQixvSkFhbUIsaUJBQUVDLElBQUYsQ0FBT0MsT0FiMUIsOFFBeUJrQixpQkFBRUosS0FBRixDQUFRSyxTQXpCMUIsMEJBMEJhLGlCQUFFTCxLQUFGLENBQVFNLEtBMUJyQix5RUE2Qm1CLGlCQUFFSCxJQUFGLENBQU9JLE1BN0IxQixxVEEyQ2EsaUJBQUVQLEtBQUYsQ0FBUUssU0EzQ3JCLHVIQStDZSxpQkFBRUwsS0FBRixDQUFRUSxjQS9DdkI7QUFBQTtBQVpGLEdBRGU7QUFBQSxDQUFqQjs7a0JBc0ZlVCxRIiwiZmlsZSI6IkhlYWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWQvYS9iZXJ0aWV3cmlnaHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB2IGZyb20gJy4uL3V0aWxzL3N0eWxlcydcblxuY29uc3QgUGFnZUhlYWQgPSAoKSA9PiAoXG4gIDxIZWFkPlxuICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cblxuICAgIDx0aXRsZT5CZXJ0aWUgV3JpZ2h0PC90aXRsZT5cbiAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9J0JlcnRpZSBXcmlnaHQnIC8+XG5cbiAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nU2luY2Ugc3RhcnRpbmcgdG8gcGxheSB0aGUgbWVsb2Rlb24gYXQgdGhlIGFnZSBvZiA2LCBCZXJ0aWUgaGFzIHRyYXZlcnNlZCBiZXlvbmQgdHJhZGl0aW9uYWwgZm9sayB0byBpbmNvcnBvcmF0ZSBpbmZsdWVuY2VzIGZyb20gY29udGluZW50YWwgZm9sayBhbmQgamF6ei4nIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PSdTaW5jZSBzdGFydGluZyB0byBwbGF5IHRoZSBtZWxvZGVvbiBhdCB0aGUgYWdlIG9mIDYsIEJlcnRpZSBoYXMgdHJhdmVyc2VkIGJleW9uZCB0cmFkaXRpb25hbCBmb2xrIHRvIGluY29ycG9yYXRlIGluZmx1ZW5jZXMgZnJvbSBjb250aW5lbnRhbCBmb2xrIGFuZCBqYXp6LicgLz5cblxuICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdmb2xrIG1lbG9kZW9uIGluZGllIG1vZGVybiBlbmdsaXNoIGluZGVwZW5kZW50IHRyYWRpdGlvbmFsIGFjY29yZGlvbicgLz5cblxuICAgIDxzdHlsZT57YFxuICAgICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7di5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgICAgICAgY29sb3I6ICR7di5jb2xvci5wcmltYXJ5fTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBmb250LWZhbWlseTogJHt2LmZvbnQuZGVmYXVsdH07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIDo6LW1vei1zZWxlY3Rpb24sIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHt2LmNvbG9yLnNlY29uZGFyeX07XG4gICAgICAgIGNvbG9yOiAke3YuY29sb3IubGlnaHR9O1xuICAgICAgfVxuICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAke3YuZm9udC5oZWFkZXJ9O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIG1hcmdpbjogMCAwIDNyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICR7di5jb2xvci5zZWNvbmRhcnl9O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJHt2LmNvbG9yLnNlY29uZGFyeUhvdmVyfTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGEsIGE6YWN0aXZlLCBhOmZvY3VzLFxuICAgICAgaW5wdXQsIGlucHV0OmFjdGl2ZSwgaW5wdXQ6Zm9jdXMsXG4gICAgICBzZWxlY3QsIHNlbGVjdDphY3RpdmUsIHNlbGVjdDpmb2N1cyxcbiAgICAgIHRleHRhcmVhLCB0ZXh0YXJlYTphY3RpdmUsIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9IZWFkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZFxuIl19