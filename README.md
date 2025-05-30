```
npm install --save-dev hardhat@^2.24.0 @nomicfoundation/hardhat-toolbox@^5.0.0 @nomicfoundation/hardhat-verify@^2.0.13 @openzeppelin/contracts@^5.3.0 dotenv@^16.5.0
```

```
npx hardhat compile
```
```
npx hardhat run scripts/deploy.js --network sepolia
```
```
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS "0xYourERC20TokenAddress"
```
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract AirdropClaim is Context {
    IERC20 public immutable airdropToken;
    uint256 public constant CLAIM_AMOUNT = 1 * 10 ** 18;

    event TokenClaimed(address indexed user, uint256 amount);

    constructor(address tokenAddress) {
        require(tokenAddress != address(0), "Invalid token address");
        airdropToken = IERC20(tokenAddress);
    }

    function claim() external {
        address caller = _msgSender();

        require(
            airdropToken.transfer(caller, CLAIM_AMOUNT),
            "Transfer failed"
        );

        emit TokenClaimed(caller, CLAIM_AMOUNT);
    }
}
```
