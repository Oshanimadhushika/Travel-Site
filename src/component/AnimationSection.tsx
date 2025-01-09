import Spline from '@splinetool/react-spline';

const AnimationComponent = () => {

  return (
    <section>
        <Spline scene="https://prod.spline.design/J0eZuF4od0sO7UgK/scene.splinecode" />
    </section>
  )
};

export default AnimationComponent;





// "use client";

// import React, { Suspense } from "react";
// import dynamic from "next/dynamic";
// import Loader from "./Loader";

// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// const AnimationSection: React.FC = () => {
//   return (
//     <section className="w-full h-screen relative mb-10">
//       <Canvas
//         camera={{ near: 0.1, far: 1000, position: [5, 5, 5] }}
//         className="w-full h-auto relative"
//       >
//         <Suspense fallback={<Loader />}>
//         <div></div>
//         </Suspense>
//       </Canvas>
//     </section>
//   );
// };

// export default AnimationSection;

