import React from 'react'
import { card } from '../assets/assets'
import { layout } from '../constants/styles'
import styles from '../constants/styles'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
       <div className={layout.sectionInfo}>
        <h2 className=''>
           Find a better card deal <br className=' sm:block hidden'/> in few  easy steps
        </h2>
        <p className={ `  ${styles.paragraph} max-w-[470px]  mt-5`}> Arcu ator , purus in mattis at sed integer faucibus .Aliquet quis aliquet eget mauris tortor
        Arcu ator , purus in mattis at sed integer faucibus .Aliquet quis aliquet eget mauris tortor </p>

       <Button styles="mt-10"/>
       </div>
        <div className={layout.sectionImg}>
          <img src={card } alt=" card "  className=' w-[100%] h-[100%] '/>
        </div>
    </section>
)


export default CardDeal
