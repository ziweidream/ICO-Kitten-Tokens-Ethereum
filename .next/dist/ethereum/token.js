'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _KittenToken = require('./build/KittenToken.json');

var _KittenToken2 = _interopRequireDefault(_KittenToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(
// the first argument is the contract ABI
// the second argument is the address deployed to
JSON.parse(_KittenToken2.default.interface), '0xc61DA43EC36e454dD1EC87703D009519C3C250A2');
// give web3 the interface, or ABI 
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3Rva2VuLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJLaXR0ZW5Ub2tlbiIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQWlCOzs7Ozs7QUFFeEIsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYTtBQUMxQjtBQUNBO0FBQ0EsS0FBQSxBQUFLLE1BQU0sc0JBSEUsQUFHYixBQUF1QixZQUgzQixBQUFpQixBQUliLEFBR0o7QUFWQTtrQkFVQSxBQUFlIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ppd2VpL0RvY3VtZW50cy9ldGhlcmV1bS96aXdlaV9EQVBQcy9pY29fY3Jvd2Rfc2FsZSJ9