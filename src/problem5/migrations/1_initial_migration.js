const Migrations = artifacts.require("Migrations");
const BalanceGetter = artifacts.require("BalanceGetter");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(BalanceGetter);
  
};
