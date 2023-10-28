import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

 const Backdrop = () => {

  const shadow = useRef()
  return (
   <AccumulativeShadows
   ref={shadow}
   temporal
   frames={60}
   alphaTest={0.85}
   scale={10}
   rotation={[Math.PI/2,0,0]}
   position={[0,0,-0.14]}>
    <RandomizedLight  
    amount={4}
    radius={9}
    intensity={2.5}
    ambient={0.25}
    position={[5,5,-10]}
    
    />
      <RandomizedLight  
    amount={9}
    radius={9}
    intensity={1.25}
    ambient={0.55}
    position={[-5,5,-9]}
    
    />
   </AccumulativeShadows>
  )
}

export default Backdrop