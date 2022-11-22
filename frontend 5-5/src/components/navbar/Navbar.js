import React, { useState } from 'react'

//import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
//import { ReactComponent as Close } from '../../icons/Close.svg'
import { ReactComponent as Logo } from '../../icons/Logo.svg'

import header1 from '../../image/header1.png'
import header2 from '../../image/header2.png'

import { FormatTypes, Interface } from "@ethersproject/abi";

import './navbar.css'

const { ethers } = require("ethers");

const jsonAbi = `[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mintNFT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`;

const iface = new Interface(jsonAbi);
iface.format(FormatTypes.full);

let address, signer, provider;

const Navbar = () => {

const [isConnected, toggleConnected] = useState(0);

function setAddress(ethaddy) {
    address = ethaddy;
    if (address != null) {  toggleConnected ( !isConnected ); }
    console.log("Account:", address);
    alert("Connected: " + address);
}

function handleButtonClick() {
  if (!isConnected) {connectWallet()}
    else {mintNFT()}
}

async function mintNFT() {
    const nftContract = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3',iface,signer);
    const nftdata = await nftContract.mintNFT(address,'https://gateway.pinata.cloud/ipfs/QmTXPAUBoL1shmLA6zwqFdtro9t4iz9M6g6UByjhnaGx7w');
    console.log(nftdata);
}

async function connectWallet() {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  setAddress( await signer.getAddress() );
  let balance = await signer.getBalance();
  console.log(await ethers.utils.formatEther(balance));
}


  //   const [Mobile, setMobile] = useState(false)
  //   useEffect(() => {
  //     WindowChange()
  //   }, [])

  //   //   const HandleMobileMenu = () => {
  //   //     setMobile(!Mobile)
  //   //   }

  //   const WindowChange = () => {
  //     if (window.innerWidth > 1050) {
  //       setMobile(false)
  //     }
  //   }

  //   window.addEventListener('resize', WindowChange)

  const handleMint = () => {}
  const handleAbout = () => {
    var scroll = document.getElementsByClassName('aboutBC')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop })
  }
  const handleRoadmap = () => {
    var scroll = document.getElementsByClassName('roadmapBC')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop - 20 })
  }
  const handleTeam = () => {
    var scroll = document.getElementsByClassName('teamBackGround')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop - 20 })
  }
  const handleFaq = () => {
    var scroll = document.getElementsByClassName('faqScroll')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop + 20 })
  }

  return (
    <div className='navbar'>
      {/* <div className='navbarMobile'>
        <div className='navbarCenterIcon'>
          <div className='navbarMobileTopRight '>MobileLeftTitle</div>
        </div>
      </div>
      <div className='navbarMobileButton'>
        <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen'>MobileMenuText</div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <div className='navbarCenterLink opacity7'>MobileMenuMiddleText</div>
                <div className='navbarCenterLink navbarRightButton'>MobileMenuButton</div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

      <div className='navbarContainer SlideRightAnimation'>
        <div className='navbarLeft'></div>
        <div className='navbarCenter'>
          <div className='navbarCenterTop'>
            <Logo />
          </div>
          <div className='navbarCenterBottom'>
            <div className='navbarCenterItem' onClick={handleMint}>
              Mint
            </div>
            <div className='navbarCenterItem' onClick={handleAbout}>
              About Binaryville
            </div>
            <div className='navbarCenterItem' onClick={handleRoadmap}>
              Roadmap
            </div>
            <div className='navbarCenterItem' onClick={handleTeam}>
              Team
            </div>
            <div className='navbarCenterItem' onClick={handleFaq}>
              FAQ
            </div>
          </div>
        </div>
        <div className='navbarRight'></div>
      </div>

      <div className='navbarContainer SlideRightAnimation'>
        <div className='navbarLeft'>
          <img src={header1} alt='' className='navbarBoxImage' />
        </div>
        <div className='navbarCenter'>
          <div className='navbarBox'>
            <div className='navbarBoxTitle'>
              <span className='textHighlight'>Welcome</span> to Binaryville
            </div>
            <div className='navbarBoxSubTitle'>a collection of 5,000 unique NFTs</div>
            <div id="nftButton" className='navbarBoxButton' onClick={handleButtonClick}>{(isConnected) ? 'MINT NOW' : 'CONNECT WALLET'}</div>
          </div>
        </div>
        <div className='navbarRight'>
          <img src={header2} alt='' className='navbarBoxImage' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
