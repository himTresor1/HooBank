import React from 'react'
import { apple , bill , google  } from '../assets/assets'
import styles from '../constants/styles'

const Billing = () => {
  return (
   <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill}  alt="billing w-[100%] h-[100%] realtive z-[5] " />
           <div className='absolute z-[3]  -left-1/2  top-0  w-[50%] rounded-full white__gradient '/>
           <div className='absolute z-[3]  -left-1/2  bottom-0  w-[50%] rounded-full pink__gradient '/>
         
        </div>
        <div className={layout.sectionInfo}>
          <h2>Easily control you billing  & invoic</h2>
        </div>
   </section>
  )
}

export default Billing
