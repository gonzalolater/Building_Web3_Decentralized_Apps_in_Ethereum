import React from 'react'

import about1 from '../../image/about1.png'
import about2 from '../../image/about2.png'
import about4 from '../../image/about4.png'

import { ReactComponent as About3 } from '../../icons/About3.svg'

import './about.css'

const About = () => {
  return (
    <div className='componentFirst aboutBC'>
      <div className='componentSecond'>
        <div className='about'>
          <div className='aboutLeft'>
            <div className='aboutBox'>
              <img src={about1} alt='' className='aboutBoxIMG' />
            </div>
          </div>
          <div className='aboutRight'>
            <div className='aboutRightTop'>
              <div className='aboutBox'>
                <img src={about2} alt='' className='aboutBoxIMG' />
              </div>
            </div>
            <div className='aboutRightBottom'>
              <div className='aboutRightBottomLeft'>
                <div className='aboutBox'>
                  <About3 style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
              <div className='aboutRightBottomRight'>
                <div className='aboutBox aboutBoxLast'>
                  <img src={about4} alt='' className='aboutBoxIMG' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutTextContainer'>
          <div className='aboutText'>
            On the edge of the world stands the progressive town of Binaryville, where technology is a way of life.
          </div>
          <div className='aboutText'>
            The robots who live, work, and play in Binaryville learn from an early age that magic is made simply by
            combining 0's and 1's.
          </div>
          <div className='aboutText'>
            For the Binaryville robots, every waking thought and every sleeping dream is consumed with unique
            permutations… and endless possibilities. This is our happy place, and we invite the dreamers, thinkers,
            and inventors of the world to unite in our passion for building something out of nothing.
          </div>
          <div className='aboutText'>
            (Well, nothing plus 1.) Visit Binaryville and let your imagination soar! This is our first collection
            of Binaryville Robot NFTs is uniquely handdrawn and gives you access to our community. Mint today and
            join us!
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
