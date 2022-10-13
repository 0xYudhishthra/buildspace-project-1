const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); //Owner is address of contract owner
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //Compiles the contract and generate the files under the folder "artifacts"
    const waveContract = await waveContractFactory.deploy(); //Create local Ethereum network only for this contract, destroys the network after script completes
    await waveContract.deployed(); // Wait for the contract to be deployed on the local network
  
    console.log("Hello, %s! The contract has been deployed to: %s", owner.address, waveContract.address);
  
    let waveCount = await waveContract.getTotalWaves();
  
    waveTxn = await waveContract.connect(randomPerson).addWaves(5);
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
  
    userWavesCount = await waveContract.showUserWavesByAddress(randomPerson.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();