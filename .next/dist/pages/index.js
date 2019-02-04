'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _token = require('../ethereum/token');

var _token2 = _interopRequireDefault(_token);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ziwei/Documents/ethereum/ziwei_DAPPs/ico_crowd_sale/pages/index.js?entry';


var TokenIndex = function (_Component) {
    (0, _inherits3.default)(TokenIndex, _Component);

    function TokenIndex() {
        (0, _classCallCheck3.default)(this, TokenIndex);

        return (0, _possibleConstructorReturn3.default)(this, (TokenIndex.__proto__ || (0, _getPrototypeOf2.default)(TokenIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(TokenIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('div', { style: { width: '68%', margin: '0 auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'green', style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { floated: 'right', size: 'mini', src: 'https://res.cloudinary.com/dpjg3yr24/image/upload/v1548944190/cat-1-.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Name: ', this.props.name), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'Symbol: ', this.props.symbol), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'Since: 2018'), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Total Supply: ', _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, this.props.totalSupply)))), _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'green', style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', { className: 'ui two buttons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/actions/approve' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'olive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Approve')), _react2.default.createElement(_link2.default, { href: { pathname: '/actions/transferfrom' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Transfer from'))), _react2.default.createElement('div', { className: 'ui two buttons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/actions/transfer' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Transfer')), _react2.default.createElement(_link2.default, { href: { pathname: '/actions/allowance' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'olive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'View Allowance'))), _react2.default.createElement('div', { className: 'ui two buttons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_link2.default, { href: { pathname: '/actions/balance' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'olive', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'View Balance')), _react2.default.createElement(_link2.default, { href: { pathname: '/actions/buy' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Buy/Sell (with ether)'))))), _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.List.Icon, { name: 'heart outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_semanticUiReact.List.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'Approve'), _react2.default.createElement(_semanticUiReact.List.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Apporve another account to have an allowance.'))), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.List.Icon, { name: 'heart outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_semanticUiReact.List.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'Transfer from'), _react2.default.createElement(_semanticUiReact.List.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'Transfer Kitten Tokens in allowance.'))), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.List.Icon, { name: 'heart outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_semanticUiReact.List.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, 'Transfer'), _react2.default.createElement(_semanticUiReact.List.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, 'Transfer Kitten Tokens to another account.')))))))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var name, symbol, totalSupply;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _token2.default.methods.name().call();

                            case 2:
                                name = _context.sent;
                                _context.next = 5;
                                return _token2.default.methods.symbol().call();

                            case 5:
                                symbol = _context.sent;
                                _context.next = 8;
                                return _token2.default.methods.totalSupply().call();

                            case 8:
                                totalSupply = _context.sent;
                                return _context.abrupt('return', { name: name, symbol: symbol, totalSupply: totalSupply });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return TokenIndex;
}(_react.Component);

exports.default = TokenIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiR3JpZCIsIkNhcmQiLCJCdXR0b24iLCJJbWFnZSIsIkxpc3QiLCJMaW5rIiwidG9rZW4iLCJMYXlvdXQiLCJUb2tlbkluZGV4Iiwid2lkdGgiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJwcm9wcyIsIm5hbWUiLCJzeW1ib2wiLCJ0b3RhbFN1cHBseSIsInBhdGhuYW1lIiwibWV0aG9kcyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFXLEFBQU0sQUFBTSxBQUFRLEFBQU87O0FBQy9DLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztpQ0FTTyxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFGLEFBQVMsT0FBTyxRQUE1QixBQUFZLEFBQXdCOzhCQUFwQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVDQUFLLE9BQU4sTUFBWSxPQUFaLEFBQWtCLFNBQVEsT0FBTyxFQUFFLFdBQW5DLEFBQWlDLEFBQWE7OEJBQTlDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsd0NBQU0sU0FBUCxBQUFlLFNBQVEsTUFBdkIsQUFBNEIsUUFBTyxLQUFuQyxBQUF1Qzs4QkFBdkM7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0MsY0FBRCxzQkFB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QVgsQUFBZ0I7OEJBQWhCO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNEJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFMWixBQUNJLEFBRUksQUFFSSxBQUtSLG9FQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsNkNBQ0ksQUFBQyxzQkFBRCxBQUFNLFFBQUssTUFBWCxBQUFnQjs4QkFBaEI7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxrQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQWRaLEFBVUksQUFFSSxBQUVJLEFBS1IsMkRBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSw2Q0FDSSxBQUFDLHNCQUFELEFBQU0sUUFBSyxNQUFYLEFBQWdCOzhCQUFoQjtnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBcEY1QyxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBc0RJLEFBQ0ksQUFDSSxBQUNJLEFBbUJJLEFBRUksQUFFSSxBQVkvQzs7Ozs7Ozs7Ozs7O3VDQXhHc0IsZ0JBQUEsQUFBTSxRQUFOLEFBQWMsT0FBZCxBQUFxQixBOztpQ0FBbEM7QTs7dUNBQ2UsZ0JBQUEsQUFBTSxRQUFOLEFBQWMsU0FBZCxBQUF1QixBOztpQ0FBdEM7QTs7dUNBQ29CLGdCQUFBLEFBQU0sUUFBTixBQUFjLGNBQWQsQSxBQUE0Qjs7aUNBQWhEO0E7aUVBRUMsRUFBRSxNQUFGLE1BQVEsUUFBUixRQUFnQixhQUFoQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTlUsQSxBQTZHekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUveml3ZWkvRG9jdW1lbnRzL2V0aGVyZXVtL3ppd2VpX0RBUFBzL2ljb19jcm93ZF9zYWxlIn0=