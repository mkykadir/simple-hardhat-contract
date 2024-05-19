// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract PriceOracle {
    uint256 public price;
    uint256 public lastUpdated;

    event PriceUpdated(uint256 indexed timeStamp, uint256 price);

    function updatePrice(uint256 _price) external {
        require(_price > 0, "Price is not positive!");

        require(block.timestamp - lastUpdated > 120, "Not enough time has passed, sorry");

        price = _price;
        lastUpdated = block.timestamp;

        emit PriceUpdated(block.timestamp, _price);
    }
}