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

    mapping(uint256 => Image) public images;

    event ImageCreated(
        uint256 id,
        string url,
        string caption,
        address payable author
    );

    event ImageTipped(
        uint256 id,
        string url,
        string caption,
        uint256 currentTip,
        uint256 totalTipped,
        address payable author
    );

    function uploadImage(string memory _imgUrl, string memory _caption) public {
        require(msg.sender != address(0), "Invalid wallet address");
        imageCount++;

        images[imageCount] = Image(
            imageCount,
            _imgUrl,
            _caption,
            0,
            payable(msg.sender),
            new address[](0)
        );

        function tipImageOwner(uint256 id) public payable{
            Image memory _image = images[_id];
            require(0<=_id);
        }
    }
}
