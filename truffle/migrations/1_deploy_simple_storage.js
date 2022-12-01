const Nft = artifacts.require("Nft");

module.exports = function (deployer) {
  deployer.deploy(Nft, "test", "test", "https://website.com/CID/");
};
