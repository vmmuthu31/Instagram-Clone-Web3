const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
module.exports = {
  networks: {
    loc_development_development: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1",
    },
    "inf_Media-dapp_goerli": {
      network_id: 5,
      gasPrice: 10,
      provider: new HDWalletProvider(
        fs.readFileSync(
          "c:\\Users\\mvair\\OneDrive\\Documents\\instagram-clone\\build\\contracts\\media.env",
          "utf-8"
        ),
        "https://goerli.infura.io/v3/57df90d6aba449359ddb768dd5fa36d0"
      ),
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.17",
    },
  },
};
