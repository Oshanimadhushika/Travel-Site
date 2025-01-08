// // import { gsap } from "gsap";
// // import { useState, useRef, useEffect, MouseEvent, ReactNode } from "react";

// // interface VideoPreviewProps {
// //   children: ReactNode; 
// // }

// // export const VideoPreview: React.FC<VideoPreviewProps> = ({ children }) => {
// //   const [isHovering, setIsHovering] = useState(false);

// //   const sectionRef = useRef<HTMLDivElement | null>(null); 
// //   const contentRef = useRef<HTMLDivElement | null>(null); 

// //   const handleMouseMove = ({
// //     clientX,
// //     clientY,
// //     currentTarget,
// //   }: MouseEvent<HTMLDivElement>) => {
// //     const rect = currentTarget.getBoundingClientRect();

// //     const xOffset = clientX - (rect.left + rect.width / 2);
// //     const yOffset = clientY - (rect.top + rect.height / 2);

// //     if (isHovering) {
// //       gsap.to(sectionRef.current, {
// //         x: xOffset,
// //         y: yOffset,
// //         rotationY: xOffset / 2,
// //         rotationX: -yOffset / 2,
// //         transformPerspective: 500, 
// //         duration: 1,
// //         ease: "power1.out",
// //       });

// //       gsap.to(contentRef.current, {
// //         x: -xOffset,
// //         y: -yOffset,
// //         duration: 1,
// //         ease: "power1.out",
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     if (!isHovering) {
// //       gsap.to(sectionRef.current, {
// //         x: 0,
// //         y: 0,
// //         rotationY: 0,
// //         rotationX: 0,
// //         duration: 1,
// //         ease: "power1.out",
// //       });

// //       gsap.to(contentRef.current, {
// //         x: 0,
// //         y: 0,
// //         duration: 1,
// //         ease: "power1.out",
// //       });
// //     }
// //   }, [isHovering]);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       onMouseMove={handleMouseMove}
// //       onMouseEnter={() => setIsHovering(true)}
// //       onMouseLeave={() => setIsHovering(false)}
// //       // className="absolute z-50 size-full overflow-hidden rounded-lg"
// //        className="absolute z-50 inset-0 flex items-center justify-center overflow-hidden rounded-lg"
// //       style={{
// //         perspective: "500px",
// //       }}
// //     >
// //       <div
// //         ref={contentRef}
// //         className="origin-center rounded-lg"
// //         style={{
// //           transformStyle: "preserve-3d",
// //         }}
// //       >
// //         {children}
// //       </div>
// //     </section>
// //   );
// // };

// // export default VideoPreview;



// import { gsap } from "gsap";
// import { useState, useRef, useEffect, MouseEvent, ReactNode } from "react";

// interface VideoPreviewProps {
//   children: ReactNode;
// }

// const VideoPreview: React.FC<VideoPreviewProps> = ({ children }) => {
//   const [isHovering, setIsHovering] = useState(false);
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseMove = ({
//     clientX,
//     clientY,
//     currentTarget,
//   }: MouseEvent<HTMLDivElement>) => {
//     const rect = currentTarget.getBoundingClientRect();

//     const xOffset = clientX - (rect.left + rect.width / 2);
//     const yOffset = clientY - (rect.top + rect.height / 2);

//     if (isHovering) {
//       gsap.to(sectionRef.current, {
//         x: xOffset / 10,
//         y: yOffset / 10,
//         rotationY: xOffset / 20,
//         rotationX: -yOffset / 20,
//         transformPerspective: 1000,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//   };

//   useEffect(() => {
//     if (!isHovering) {
//       gsap.to(sectionRef.current, {
//         x: 0,
//         y: 0,
//         rotationY: 0,
//         rotationX: 0,
//         duration: 0.5,
//         ease: "power2.out",
//       });
//     }
//   }, [isHovering]);

//   return (
//     <div
//       ref={sectionRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       className="relative w-64 h-64 overflow-hidden rounded-lg"
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       <div
//         ref={contentRef}
//         className="w-full h-full rounded-lg"
//         style={{
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default VideoPreview;
