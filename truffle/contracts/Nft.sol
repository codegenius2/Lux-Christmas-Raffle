// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import "../node_modules/erc721a/contracts/ERC721A.sol";

contract Nft is ERC721A{
  constructor() ERC721A("test","test") {}
  mapping (address=>uint) Qty;
  uint index = 0;
  function mint(uint _quantity) external payable {
    require(Qty[msg.sender] + _quantity <= 4, "Cannot mint more than 4 NFT");
    require(index+ _quantity <= 999);
    Qty[msg.sender] = Qty[msg.sender] + _quantity;
    index += _quantity;
    _mint(msg.sender, _quantity);
  }
 
}