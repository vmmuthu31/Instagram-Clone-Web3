const Media = artifacts.require("Media");

module.exports = async function (deployer) {
  await deployer.deploy(Media);
};
