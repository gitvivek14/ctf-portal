import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const ZeroLevel = () => {
  return (
    <div className='w-screen h-screen max-w-max p-8 flex justify-center items-center mx-auto text-white'>
        <TypeAnimation

        sequence={[
            
            'Jake, a struggling artist and orphan, stumbles upon his ancestral home nestled deep in the woods. Curiosity sparked, he explores the abandoned house and discovers a dusty old paintbrush.Intrigued, Jake begins to sketch with the brush, hoping to capture the essence of the forgotten memories within the walls.',
            1000,
            'With each stroke, he feels a strange energy coursing through him, until suddenly, he finds himself engulfed in a cascade of colors.As the colors swirl around him, Jake realizes he has been transported to a surreal dimension where the landscapes are painted with the dreams of lost souls.',
            1000,
            'Armed with the enchanted paintbrush, Jake embarks on a journey through this otherworldly realm, where he must navigate through fantastical landscapes and confront his deepest fears. Will he be able to unravel the secrets of his parents mysterious past and the enigmatic teleportation that brought him here, all while finding his way back home',
            1000
        ]}
        wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color:"white",fontFamily:"Hack" }}
      repeat={Infinity}
        >
            
        </TypeAnimation>
    </div>
  )
}

export default ZeroLevel