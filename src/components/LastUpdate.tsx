


import gsap from "gsap";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";

const LastUpdate: React.FC = () => {
    const frameRef = useRef<HTMLImageElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;
        if (!element) return;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.inOut",
        });
    };

    return (
        <section id="story" className="min-h-[113dvh] pt-32   pb-40   w-screen bg-blue-50    text-black-10  ">
            
            <div className="relative ">
                <div className="   ">

                    <div  className=" flex  justify-evenly   " >
                        <div  className="  text-black-10 " >
                            <AnimatedTitle
                                text="LAST<b>E</b> <br /> <b>U</b>pdate"
                                className="mt-5  relative  !lg:text-8xl  pointer-events-none mix-blend-difference  z-10"
                            />
                        </div>
    
                        <div className="flex  flex-col ">

                            
                            <div className="w-[40vw]    relative    ">
                                    <img
                                        ref={frameRef}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseUp={handleMouseLeave}
                                        onMouseEnter={handleMouseLeave}
                                        src="../../public/img/gallery-2.webp"
                                        alt="entrance.webp"
                                        className="rounded-sm"
                                        style={{borderRadius:"10px"}}
                                    />

                                    <div className="flex  gap-10  pt-8 " >
                                        <span> 09:05:2024 </span>
                                        <p className=" pr-56" >
                                            Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global Play Economy
                                        </p>
                                    </div>
                            </div>
    
                            <div className="w-[40vw]  relative  top-20     ">
                                    <img
                                        ref={frameRef}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseUp={handleMouseLeave}
                                        onMouseEnter={handleMouseLeave}
                                        src="../../public/img/gallery-3.webp"
                                        alt="entrance.webp"
                                        className="rounded-sm"
                                        style={{borderRadius:"10px"}}
                                    />

                                    <div className="flex  gap-10  pt-8 " >
                                        <span> 09:05:2024 </span>
                                        <p className=" pr-56" >
                                            Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global Play Economy
                                        </p>
                                    </div>
                            </div>

                        </div>

                    </div>

                        {/* for the rounded corner */}
                    <svg
                            className="invisible absolute size-0"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <filter id="flt_tag">
                                    <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation="8"
                                        result="blur"
                                    />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                        result="flt_tag"
                                    />
                                    <feComposite
                                        in="SourceGraphic"
                                        in2="flt_tag"
                                        operator="atop"
                                    />
                                </filter>
                            </defs>
                    </svg> 

                    
                </div>
            </div>

            
        </section>
    );
};

export default LastUpdate;
