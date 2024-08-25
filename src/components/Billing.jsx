import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Customized GenAI and LLM <br className='sm:block hidden'/> Integration</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We will transform you Legacy Application through AI assisted Migration to any Modern Tech Stack of your Choice  
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We will automation various domain of your business with LLM and Generative AI enabling seamless automation and workflow optimization 
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          
          <Button styles='mt-10'/>
        </div>
      </div>  
    </section>
  )
}

export default Billing
