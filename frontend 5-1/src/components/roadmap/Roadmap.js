import React from 'react'

import { ReactComponent as Roadmap1SVG } from '../../icons/Roadmap1.svg'
import { ReactComponent as Roadmap2SVG } from '../../icons/Roadmap2.svg'
import { ReactComponent as Roadmap3SVG } from '../../icons/Roadmap3.svg'
import { ReactComponent as Roadmap4SVG } from '../../icons/Roadmap4.svg'

import './roadmap.css'

const Roadmap = () => {
  return (
    <div className='componentFirst roadmapBC'>
      <div className='componentSecond'>
        <div className='roadmap'>
          <div className='roadmapTitle textHighlight'>ROADMAP</div>
          <div className='roadmapSubTitle'>a collection of 5,000 unique NFTs</div>

          <div className='roadmapList'>
            <div className='roadmapItemLeft'>
              <div className='roadmapIcon'>
                <Roadmap1SVG />
              </div>
              <div className='roadmapText'>One of Binaryville Robot NFT mint collection unit</div>
            </div>

            <div className='roadmapItemRight'>
              <div className='roadmapText'>One of Binaryville Robot NFT mint collection unit</div>
              <div className='roadmapIcon'>
                <Roadmap2SVG />
              </div>
            </div>

            <div className='roadmapItemLeft'>
              <div className='roadmapIcon'>
                <Roadmap3SVG />
              </div>
              <div className='roadmapText'>One of Binaryville Robot NFT mint collection unit</div>
            </div>

            <div className='roadmapItemRight'>
              <div className='roadmapText'>One of Binaryville Robot NFT mint collection unit</div>
              <div className='roadmapIcon'>
                <Roadmap4SVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
