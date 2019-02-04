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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _token = require('../../ethereum/token');

var _token2 = _interopRequireDefault(_token);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ziwei/Documents/ethereum/ziwei_DAPPs/ico_crowd_sale/pages/actions/balance.js?entry';


var Balance = function (_Component) {
    (0, _inherits3.default)(Balance, _Component);

    function Balance() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Balance);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Balance.__proto__ || (0, _getPrototypeOf2.default)(Balance)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            address: '',
            accountBalance: 0,
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({
                                    loading: true,
                                    accountBalance: 0,
                                    errorMessage: ''
                                });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _token2.default.methods.balances(_this.state.address).call();

                            case 8:
                                res = _context.sent;

                                _this.setState({ accountBalance: res });
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Balance, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('div', { style: { width: "68%", margin: "0 auto" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('h3', { style: { textAlign: "center", margin: "30px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'View Balance'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, success: !!this.state.accountBalance, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Account Address'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'account address',
                labelPosition: 'right',
                value: this.state.address,
                onChange: function onChange(event) {
                    return _this3.setState({ address: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                success: true,
                header: 'Kitten Tokens in this account',
                content: this.state.accountBalance,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'View Balance'))));
        }
    }]);

    return Balance;
}(_react.Component);

exports.default = Balance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjdGlvbnMvYmFsYW5jZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJ0b2tlbiIsIndlYjMiLCJCYWxhbmNlIiwic3RhdGUiLCJhZGRyZXNzIiwiYWNjb3VudEJhbGFuY2UiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImJhbGFuY2VzIiwiY2FsbCIsInJlcyIsIm1lc3NhZ2UiLCJ3aWR0aCIsIm1hcmdpbiIsInRleHRBbGlnbiIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs7Ozs7a05BRUYsQTtxQkFBUSxBQUNLLEFBQ1Q7NEJBRkksQUFFWSxBQUNoQjswQkFISSxBQUdVLEFBQ2Q7cUJBSkksQSxBQUlLO0FBSkwsQUFDSixpQkFNSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBRU47O3NDQUFBLEFBQUs7NkNBQVMsQUFDRCxBQUNUO29EQUZVLEFBRU0sQUFDaEI7a0RBTkcsQUFHUCxBQUFjLEFBR0k7QUFISixBQUNWOztnREFKRztnREFBQTt1Q0FVb0IsY0FBQSxBQUFLLElBVnpCLEFBVW9CLEFBQVM7O2lDQUExQjtBQVZILG9EQUFBO2dEQUFBO3VDQVdlLGdCQUFBLEFBQU0sUUFBTixBQUNiLFNBQVMsTUFBQSxBQUFLLE1BREQsQUFDTyxTQVp0QixBQVdlLEFBQ2dCOztpQ0FENUI7QUFYSCwrQ0FjSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBZGIsQUFjSCxBQUFjLEFBQWtCO2dEQWQ3QjtBQUFBOztpQ0FBQTtnREFBQTtnRUFnQkg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFoQjNCLEFBZ0JILEFBQWMsQUFBb0I7O2lDQUV0QztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQWxCVCxBQWtCUCxBQUFjLEFBQVc7O2lDQWxCbEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FvQkY7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFGLEFBQVMsT0FBTyxRQUE1QixBQUFZLEFBQXdCOzhCQUFwQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLE9BQU8sRUFBRSxXQUFGLEFBQWEsVUFBVSxRQUFsQyxBQUFXLEFBQStCOzhCQUExQztnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLGlDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRCxjQUFjLFNBQVMsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFqRixBQUF1Rjs4QkFBdkY7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG9DQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsU0FBUyxNQUFBLEFBQU0sT0FBeEMsQUFBUyxBQUFjLEFBQXdCO0FBSjdEOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFRSjtBQVJJO0FBQ0ksaUNBT1IsQUFBQzt5QkFBRCxBQUVJO3dCQUZKLEFBRVksQUFDUjt5QkFBUyxLQUFBLEFBQUssTUFIbEIsQUFHd0I7OzhCQUh4QjtnQ0FYSixBQVdJLEFBS0E7QUFMQTtBQUNJLGdDQUlKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBaEJKLEFBZ0JJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckMsTUFBNkMsTUFBN0MsQUFBa0Q7OEJBQWxEO2dDQUFBO0FBQUE7ZUFyQmhCLEFBQ0ksQUFDSSxBQUVJLEFBaUJJLEFBS25COzs7OztBQXhEaUIsQSxBQTJEdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYmFsYW5jZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS96aXdlaS9Eb2N1bWVudHMvZXRoZXJldW0veml3ZWlfREFQUHMvaWNvX2Nyb3dkX3NhbGUifQ==