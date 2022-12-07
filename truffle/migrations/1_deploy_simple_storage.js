const Nft = artifacts.require("Nft");

module.exports = function (deployer) {
  deployer.deploy(Nft, "testLux", "testLux", "https://gateway.pinata.cloud/ipfs/QmXgxRVD4ZqNonnQBv57xtfrEC1AMRfUcrMyZa71eug8P9/");
};
