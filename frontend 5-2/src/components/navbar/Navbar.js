import React, { useState } from 'react'

//import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
//import { ReactComponent as Close } from '../../icons/Close.svg'
import { ReactComponent as Logo } from '../../icons/Logo.svg'

import header1 from '../../image/header1.png'
import header2 from '../../image/header2.png'

import './navbar.css'

const { ethers } = require("ethers");

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

function mintNFT() { }

async function connectWallet() {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  setAddress( await signer.getAddress() );
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
