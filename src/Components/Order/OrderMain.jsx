import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Bestsellers from '../Menu/bestsellers'
import Drinks from '../Menu/Drinks'
import Foods from '../Menu/Foods'

const OrderMain = () => {
  const orderSwitch = useSelector(state => state.counter.orderSwitch)
  const refOrderMain = useRef()
  useEffect(() => {
    if (refOrderMain.current) {
      
      refOrderMain.current.style.transition = 'none'
      refOrderMain.current.style.opacity = '0'

      // Force reflow to apply styles immediately before next transition
      // This tricks browser to apply opacity=0 immediately before starting fade in
      void refOrderMain.current.offsetWidth

      refOrderMain.current.style.transition = 'opacity 0.3s ease-in'
      setTimeout(() => {
        if (refOrderMain.current) {
          refOrderMain.current.style.opacity = '1'
        }
      }, 10)
    }
  }, [orderSwitch])

  return (
    <div ref={refOrderMain} style={{ opacity: '0' }}>
      {orderSwitch === 'Bestseller' && <Bestsellers />}
      {orderSwitch === 'Drinks' && <Drinks />}
      {orderSwitch === 'Food' && <Foods />}
       
    </div>
  )
}

export default OrderMain
