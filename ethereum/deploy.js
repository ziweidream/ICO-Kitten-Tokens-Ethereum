const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledToken = require("./build/KittenToken.json");

const provider = new HDWalletProvider(
  "melt animal sleep wink sound stem artwork crash mobile junior fatigue pact",
  "https://rinkeby.infura.io/v3/f2e6f5bf8bac405ab171ef1957f81da3"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledToken.interface)
  )
    .deploy({ data: compiledToken.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};

deploy();