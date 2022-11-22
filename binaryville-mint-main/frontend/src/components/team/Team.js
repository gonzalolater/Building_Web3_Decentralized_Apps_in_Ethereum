import React from 'react'

import team1 from '../../image/team1.png'
import team2 from '../../image/team2.png'
import team3 from '../../image/team3.png'

import './team.css'

const Team = () => {
  return (
    <div className='componentFirst teamBackGround'>
      <div className='componentSecond'>
        <div className='roadmap'>
          <div className='roadmapTitle textHighlight'>OUR TEAM</div>
          <div className='roadmapSubTitle'>a collection of 5,000 unique NFTs</div>
          <div className='teamContainer'>
            <div className='teamItem'>
              <div className='teamItemImage'>
                <img src={team1} alt='' style={{ width: '100%' }} />
              </div>
              <div className='teamItemTitle'>@Ileana_d</div>
              <div className='teamItemName'>Ileana Dierdrich</div>
              <div className='teamItemPosition'>Artist</div>
            </div>
            <div className='teamItem'>
              <div className='teamItemImage'>
                <img src={team2} alt='' style={{ width: '100%' }} />
              </div>
              <div className='teamItemTitle'>@el_lobo_loco</div>
              <div className='teamItemName'>Jerod Pequot</div>
              <div className='teamItemPosition'>Dev</div>
            </div>
            <div className='teamItem'>
              <div className='teamItemImage'>
                <img src={team3} alt='' style={{ width: '100%' }} />
              </div>
              <div className='teamItemTitle'>@amoebaaaa</div>
              <div className='teamItemName'>Alfred Kensington</div>
              <div className='teamItemPosition'>Community</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
