import React from 'react'
import { feedback } from '../constants'
import styles from '../constants/styles'

import FeedBackCard from './FeedBackCard'
 
const Testimonials = () => {
  return (
    
    <section id='clients' className={` ${styles.paddingY}  ${styles.flexCenter} flex-col relative`}>
      {/* TODO */}
     <div/>
      

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
         <h1 className={` ${styles.heading2}`}>What are people <br className='sm:block hidden'/>say about us</h1> 
         <div className="w-full md:mt-0 mt-6">
         <p className={` ${styles.paragraph} text-left max-[450px]`}> Everything you need t accept card payments and grow your business anywhere on the planet.</p>
         </div>


          <div className=" flex flex-wrap  sm:justify-start justify-center w-full feedback-container relative z-[1]" >
             {feedback.map((card)=>(
                <FeedBackCard key={card.id } {...card}/>
             ))}
          </div>
         </div>


    </section>
  )
}

export default Testimonials
