import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Computer Vision based <br className='sm:block hidden'/>specialized solutions</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          AI Automation for various Tasks<br></br><br></br>
          <ul>
            <li>Manufacturing Quality Control</li>
            <li>Inventory Management</li>
            <li>Autonomous Supply Chain Management</li>
          </ul>
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
