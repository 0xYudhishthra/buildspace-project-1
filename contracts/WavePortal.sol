//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves; //Declare variable totalWaves of type uint256. uint256 is a 256 bit unsigned integer. It is stored permanently in the contract storage.
    //Declare a dictionary of type mapping (address, uint256) to store the number of waves for each user.
    mapping (address => uint256) public userWaves;

    constructor() {
        //Do nothing.
    }

    //This function accepts the number of waves to be added to the total number of waves.
    function addWaves(uint256 _waves) public {
        //Add the number of waves to the total number of waves and also the userWave dictionary.
        console.log("%s is adding %d waves to the total number of waves", msg.sender, _waves);
        totalWaves += _waves;
        userWaves[msg.sender] += _waves;
    }


    function getTotalWaves() public view returns (uint256) {
        console.log("Total waves: %d", totalWaves);
        return totalWaves;
    }

    //Function that gets the number of waves for a specific user and append in the userWave dictionary.
    function showUserWavesByAddress(address user) public {
        userWaves[user]++;
        console.log("%s has waved %d times", user, userWaves[user]-1);
    }

}