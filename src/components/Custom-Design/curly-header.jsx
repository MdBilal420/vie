/*

Draws text around a circule (the object).

Text is centered at the top of the circle.

Depends on styled-components, but can be adapted for other frameworks.

<CurvedText
  text="I'm curved"
  objectSize={100} // diameter of the circle to wrap the text around
  spacing={12} // padding between the circle and text
  offset={30} // ammount of space for text, make this bigger to stop larger text from being cropped
  overlap={true} // sets the bottom margin to negative so that the text is centered around the object
/>

*/

import React from 'react'

const CurlyHeader = () => {
 
  return (
    <svg viewBox="0 40 500 120">
    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" style={{fill:"transparent"}} />
    <text width="600" style={{fontSize:"22px",fill:"#C86EE1"}}>
      <textPath xlinkHref="#curve">
      International Corporations and Brands
      </textPath>
    </text>
  </svg>
  )
}

export default CurlyHeader