import React from 'react'
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import { incrementVisitorCount, getVisitorCount } from '../utils/visitorCount';


import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Homeinfo from '../components/Homeinfo';

const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [visitorCount, setVisitorCount] = useState(null);

  React.useEffect(() => {
    async function updateVisitorCount() {
      await incrementVisitorCount();
      const count = await getVisitorCount();
      setVisitorCount(count);
    }
    updateVisitorCount();
  }, []);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
    }


    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;


    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4]
    }


    return [screenScale, screenPosition]
  }




  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [PlaneScale, PlanePosition] = adjustPlaneForScreenSize();



  return (
      <section className='w-full h-screen relative'>
        {/* Visitor Count Display */}
        <div className='absolute top-8 left-0 right-0 z-20 flex items-center justify-center'>
          <div className='bg-white/80 rounded-lg px-4 py-2 shadow text-black font-semibold'>
            {visitorCount !== null ? `Total Visitors: ${visitorCount}` : 'Loading visitor count...'}
          </div>
        </div>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <Homeinfo currentStage={currentStage}/>}
        </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skycolor="#b1e1ff" groundColor={"#000000"} intensity={1} />

          <Bird />
          <Sky 
          isRotating={isRotating}
          />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            
          />

          <Plane
            isRotating={isRotating}
            scale={PlaneScale}
            position={PlanePosition}
            rotation={[0, 20, 0]}

          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home