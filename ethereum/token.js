import web3 from './web3'
// give web3 the interface, or ABI 
import KittenToken from './build/KittenToken.json'

const instance = new web3.eth.Contract(
    // the first argument is the contract ABI
    // the second argument is the address deployed to
    JSON.parse(KittenToken.interface),
    '0xc61DA43EC36e454dD1EC87703D009519C3C250A2'
)

export default instance
