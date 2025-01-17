const func = async function (hre:any) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer} = await getNamedAccounts();

  await deploy('Subs', {
    from: deployer,
    args: [24*60*60, "0x65343F414FFD6c97b0f6add33d16F6845Ac22BAc", deployer, Math.floor(Date.now()/1e3),
      deployer, "0xf8126ef025651e1b313a6893fcf4034f4f4bd2aa", "1000"+"000000000000000000"],
    log: true,
    autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
    //deterministicDeployment: true,
  });
};
module.exports = func;
func.tags = ['Subs'];