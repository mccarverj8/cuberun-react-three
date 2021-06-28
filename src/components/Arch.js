import { Cone } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import { useStore, mutation } from '../state/useStore'
import { PLANE_SIZE, WALL_RADIUS, COLORS, LEVEL_SIZE } from '../constants'

export default function Arch() {
  const ship = useStore((s) => s.ship)
  const level = useStore(s => s.level)

  const arches = useRef()

  const arch1 = useRef()
  const arch2 = useRef()
  const arch3 = useRef()
  const arch4 = useRef()
  const arch5 = useRef()
  const arch6 = useRef()

  useFrame((state, delta) => {
    if (ship.current) {
      if (ship.current.position.z < -PLANE_SIZE && ship.current.position.z < -(level * PLANE_SIZE * LEVEL_SIZE)) {
        arches.current.position.z = -(level * PLANE_SIZE * LEVEL_SIZE) - PLANE_SIZE * (LEVEL_SIZE - 2) - 300
      }
    }


    if (mutation.colorLevel === 6) {
      arch1.current.material.color = mutation.globalColor
      arch2.current.material.color = mutation.globalColor
      arch3.current.material.color = mutation.globalColor
      arch4.current.material.color = mutation.globalColor
      arch5.current.material.color = mutation.globalColor
      arch6.current.material.color = mutation.globalColor
    } else {
      arch1.current.material.color = COLORS[0].three
      arch2.current.material.color = COLORS[1].three
      arch3.current.material.color = COLORS[2].three
      arch4.current.material.color = COLORS[3].three
      arch5.current.material.color = COLORS[4].three
      arch6.current.material.color = COLORS[5].three
    }
  })

  return (
    <group ref={arches}>
      <mesh ref={arch1} position={[0, 0, -150]} rotation={[0, 0, Math.PI]}>
        <torusBufferGeometry args={[100, 20, 3, 30]} />
        <meshBasicMaterial fog={false} attach="material" color={COLORS[0].three} />
      </mesh>
      <mesh ref={arch2} position={[0, 0, -200]} rotation={[0, 0, Math.PI]}>
        <torusBufferGeometry args={[90, 16, 3, 30]} />
        <meshBasicMaterial fog={false} attach="material" color={COLORS[1].three} />
      </mesh>
      <mesh ref={arch3} position={[0, 0, -250]} rotation={[0, 0, Math.PI]}>
        <torusBufferGeometry args={[80, 12, 3, 30]} />
        <meshBasicMaterial fog={false} attach="material" color={COLORS[2].three} />
      </mesh>
      <mesh ref={arch4} position={[0, 0, -300]} rotation={[0, 0, Math.PI]}>
        <torusBufferGeometry args={[70, 10, 3, 30]} />
        <meshBasicMaterial fog={false} attach="material" color={COLORS[3].three} />
      </mesh>
      <mesh ref={arch5} position={[0, 0, -350]} rotation={[0, 0, Math.PI]}>
        <torusBufferGeometry args={[60, 8, 3, 30]} />
        <meshBasicMaterial fog={false} attach="material" color={COLORS[4].three} />
      </mesh>
      <mesh ref={arch6} position={[0, 0, -400]} rotation={[0, 0, Math.PI]}>
        <torusBufferGeometry args={[50, 6, 3, 30]} />
        <meshBasicMaterial fog={false} attach="material" color={COLORS[5].three} />
      </mesh>
    </group>
  )
}