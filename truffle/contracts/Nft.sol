// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import "../node_modules/erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

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
contract Nft is ERC721A, Ownable, ReentrancyGuard{
  
  uint index = 0;
  bool _isMintOn = false;
  string uri = '';
  uint price = 790000000000000000 wei;
  uint mintPartnershipCount = 0;
  address public constant MAIN_WALLET = 0x47DcE4714629bE3410e33EF8E211D933859A64E4;

  constructor(string memory _collectionName, string memory _collectionSymbol, string memory _collectionBaserURI) ERC721A(_collectionName,_collectionSymbol) {
    uri = _collectionBaserURI;
  }
  
  /**
  * @dev return boolean that authorise 'mint' function to be called.
  */
  function isMintOn() external view returns(bool) {
    return _isMintOn;
  }

  /**
  * @dev return the price in wei to mint a NFT.
  */
  function checkPrice() external view returns(uint) {
    return price;
  }

  /**
  * @dev return the number of NFT minted.
  */
  function checkNumberOfNftMinted() external view returns(uint) {
    return index;   
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
    require(price != _newPrice, "This price is already set to the exact same price !");
    price = _newPrice;
  }

  /**
  * @dev Create NFT by minting.
  * Requirements:
  *
  * - Mint is active.
  * - Cannot mint more than 1000 NFT.
  * - User transfer enought ETH.
  */
  function mint(uint _quantity, address _to) external payable nonReentrant{
    require(_isMintOn == true, "Mint is not active !");
    require(index + _quantity <= 999, "All the NFT are already minted or too much NFT asked !");
    require(msg.value >= price, "Not enough ETH sent, check price!"); 
    (bool success, ) = payable(MAIN_WALLET).call{value: address(this).balance}("");
    require(success, "Transfer failed.");
    index += _quantity;
    _mint(_to, _quantity);
  }

  /**
  * @dev Mint NFT for partnership.
  */
  function mintPartnership(uint _quantity) external onlyOwner {
    require(index + _quantity <= 999, "All the NFT are already minted !");
    require(mintPartnershipCount + _quantity <= 9, "Cannot mint more than 9 partnership NFT");
    mintPartnershipCount += _quantity;
    index += _quantity;
    _mint(0xACCF528Dc85Ff62dF54074e4fB0cC059D86E13Fb, _quantity);
  }

  /**
  * @dev set a new base uri. 
  * example : https://website.com/ipfs/CID/
  */
  function setBaseURI(string memory _uri) external onlyOwner{
    require(keccak256(abi.encodePacked(_uri)) != keccak256(abi.encodePacked(uri)), "The URI is already set to the exact same URI !");
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