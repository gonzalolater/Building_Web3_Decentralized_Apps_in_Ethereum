import React, { useState } from 'react'

import { ReactComponent as PlusSVG } from '../../icons/Plus.svg'
import { ReactComponent as MinusSVG } from '../../icons/Minus.svg'

import './faq.css'

const FAQ = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  return (
    <div className='componentFirst faqScroll'>
      <div className='componentSecond'>
        <div className='faq'>
          <div className='roadmapTitle textHighlight'>FAQ</div>
          <div className='roadmapSubTitle'>a collection of 5,000 unique NFTs</div>
          <div className='faqContainer'>
            <div className='faqItem' onClick={() => setOne(!one)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>What is Binaryville?</div>
              </div>
              <div className='faqItemRight'>{one ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {one && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            )}
            <div className='faqItem' onClick={() => setTwo(!two)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>Where do I buy the NFTs?</div>
              </div>
              <div className='faqItemRight'>{two ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {two && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            )}
            <div className='faqItem' onClick={() => setThree(!three)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>When will the game be ready?</div>
              </div>
              <div className='faqItemRight'>{three ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {three && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            )}

            <div className='faqItem' onClick={() => setFour(!four)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>What do I get?</div>
              </div>
              <div className='faqItemRight'>{four ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {four && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
