// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Media {
    struct Image {
        uint256 id;
        string url;
        string caption;
        uint256 totalTipped;
        address payable author;
        address[] tripperAddresses;
    }

    uint256 public imageCount;
}
