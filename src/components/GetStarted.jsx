import React from 'react'
import styles from '../constants/styles'
import { arrowUp } from '../assets/assets'

const GetStarted = () => (
    <div className={` ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer` }>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={` ${styles.flexStart} flex-col `}>
                <p className='font-poppins foint-medium text-[18px]  flex flex-row mr-2 leading-[23px]'>
                    <span className='text-gradient'>
                        Get 
                    </span>
                    <img src={arrowUp} alt="arrow"  className='w-[28px] h-[28px] object-contain '/>
                </p>
                <p className='font-poppins foint-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>
                        Started 
                    </span>
                </p>
            </div>
        </div>
    </div>

)
export default GetStarted
