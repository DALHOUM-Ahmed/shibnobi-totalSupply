var ethers = require("ethers");

var ethereumProvider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth"
);
var bscProvider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/bsc"
);
const abi = require("./abi.json");

async function main() {
  const ethereumShibnobi = new ethers.Contract(
    "0x7DAc25b1A665e1c70F25F1fC37d88C99274984ed",
    abi,
    ethereumProvider
  );
  const bscShibnobi = new ethers.Contract(
    "0x7DAc25b1A665e1c70F25F1fC37d88C99274984ed",
    abi,
    bscProvider
  );

  const totalSupplyInEthereumNetwork = parseInt(
    ethers.utils.formatUnits(await ethereumShibnobi.totalSupply(), "gwei")
  );
  const totalSupplyInBSCNetwork = parseInt(
    ethers.utils.formatUnits(await bscShibnobi.totalSupply(), "gwei")
  );

  const log1 =
    "totalSupply In Ethereum Network " + totalSupplyInEthereumNetwork;
  const log2 = "totalSupply In BSC Network " + totalSupplyInBSCNetwork;
  return [log1, log2];
}

main().then((res) => res.map((e) => console.log(e)));
