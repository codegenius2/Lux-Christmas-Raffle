// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import "../node_modules/erc721a/contracts/ERC721A.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol/";

/// @title LUX* Christmas Raffle NFT 
/// @author JWMatheo - JW Corp
/**
*  @notice LUX* is releasing a unique and exclusive collection to celebrate the end of the year. By purchasing a collectible,
*          you will randomly win one of the 6 tailor-made experiences in our hotels. You will have to wait until Christmas Day
*          to discover your gift. You can't choose one, it's random.
*          Discover more on our website :
*          https://www.luxresorts-nft.com/ 
*/
/// @dev Custom ERC721A 
contract Nft is ERC721A, Ownable{
  
  // mapping (address=>uint) Qty;
  uint index = 0;
  bool _isMintOn = true;
  string uri = '';
  uint price = 1000000000000000000 wei;
  
  
  constructor(string memory _collectionName, string memory _collectionSymbol, string memory _collectionBaserURI) ERC721A(_collectionName,_collectionSymbol) {
    uri = _collectionBaserURI;
  }
  
  /**
  * @dev return boolean that authorise 'mint' function to be called.
  */
  function isMintOn() public view returns(bool) {
    return _isMintOn;
  }

  /**
  * @dev return the price in wei to mint a NFT.
  */
  function checkPrice() public view returns(uint) {
    return price;
  }

  /**
  * @dev disable 'mint' function.
  *
  * Requirements:
  *
  * - Cannot disable mint if mint is already disabled.
  */
  function stopMint() external onlyOwner {
    require(_isMintOn == true, "Mint is already stopped !");
    _isMintOn = false;
  }

  /**
  * @dev enable to use 'mint' function.
  *
  * Requirements:
  *
  * - Cannot enable mint if mint is already enabled.
  */
  function enableMint() external onlyOwner {
    require(_isMintOn == false, "Mint is already live !");
    _isMintOn = true;
  }
  
  /**
  * @dev set the price for mint in wei.
  */
  function changePrice(uint _newPrice) external onlyOwner {
    require(price != _newPrice, "This price is already set !");
    price = _newPrice;
  }

  /**
  * @dev Create NFT by minting.
  */
  function mint(uint _quantity) external payable {
    // require(Qty[msg.sender] + _quantity <= 4, "Cannot mint more than 4 NFT");
    require(_isMintOn == true, "Mint is not active !");
    require(index + _quantity <= 999, "All the NFT are already minted !");
    require(msg.value >= price, "Not enough ETH sent; check price!"); 
    // Qty[msg.sender] = Qty[msg.sender] + _quantity;
    index += _quantity;
    _mint(msg.sender, _quantity);
  }

  /**
  * @dev Mint NFT for partnership.
  */
  function mintPartnership(uint _quantity) external onlyOwner {
    require(index + _quantity <= 999, "All the NFT are already minted !");
    index += _quantity;
    _mint(msg.sender, _quantity);
  }

  /**
  * @dev set a new base uri. 
  * example : https://website.com/ipfs/CID/
  */
  function setBaseURI(string memory _uri) external onlyOwner{
    uri = _uri;
  }
  
  /**
  * @dev see chiru-labs ERC721A documentation
  */
  function _baseURI() internal view override returns (string memory) {
      return uri;
  }

  /**
  * @dev return the tokenURI of a NFT
  *
  * Requirements:
  *
  * - Cannot get the URI of unexistent tokenID.
  */
  function tokenURI(uint256 tokenId) public view override returns (string memory) {
      if (!_exists(tokenId)) revert URIQueryForNonexistentToken();

      string memory baseURI = _baseURI();
      return bytes(baseURI).length != 0 ? string(abi.encodePacked(baseURI, _toString(tokenId), '.json')) : '';
  }
}