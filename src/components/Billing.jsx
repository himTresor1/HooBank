import React from 'react'
import { apple , bill , google  } from '../assets/assets'
import styles from '../constants/styles'
import { layout } from '../constants/styles'

const Billing = () => {
  return (
   <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill}  alt="billing" className="w-[100%] h-[100%] relative z-[5] " />
         
        </div>
           <div className='absolute z-[3] top-[0] w-[50%] rounded-full white__gradient '/>
           <div className='  absolute  z-[3]   bottom-0  w-[50%] rounded-full pink__gradient '/>
        <div className={layout.sectionInfo}>
          <h2 className={` ${styles.heading2}`}>Easily control your <br  className='sm:block-hidden'/> billing  & invoice</h2>
          <p className={` ${styles.paragraph} max-w-[470px]  mt-5 `}>
             ELit enim sed massa ertiam . Mauris  eu adisciping ultrices ametodio aenean nwque .Fusce  ipsum orci rhoncus aliperttitoe integer pleatea placerat .
          </p>
        </div>
   </section>
  )
}

export default Billing
