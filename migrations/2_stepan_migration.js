// var StepanToken = artifacts.require("./StepanToken2.sol");
var RewriteContract = artifacts.require("./SomeNAME.sol");

module.exports = function(deployer) {
  // deployer.deploy(StepanToken);
  deployer.deploy(RewriteContract);
};
