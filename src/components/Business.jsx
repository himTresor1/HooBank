import React from 'react'
import styles from '../constants/styles'
import { features } from '../constants'
import { layout } from '../constants/styles'
import Button from './Button'
const Business = () => {
  return (
   <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2>You do business ,<br  className='sm:block-hidden'/> we'll handle the money . </h2>
    </div>
   </section>

  )
}

export default Business
