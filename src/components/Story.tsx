import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage: React.FC = () => {
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
        <section id="story" className="min-h-[112dvh]  pt-32   relative  w-screen bg-black-10  py-10 pb-24   text-blue-50">
            <div className="flex   flex-col  gap-2  items-center ">
                <span className="font-general text-sm uppercase md:text-[10px]">
                    the multiversal ip world
                </span>

                <AnimatedTitle
                        text="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                        className="mt-5  relative  !lg:text-8xl   pointer-events-none mix-blend-difference  z-10"
                    />

            </div>
            
            <div className="relative ">
                <div className="h-[30vh]   md:h-dvh ">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src="/img/entrance.webp"
                                    alt="entrance.webp"
                                    className=""
                                />
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

                <br />
                <br />
                <br />
                <br />
                <br />
                


                <div className=" absolute  bottom-20  sm:mt-48     -mt-80 flex w-full justify-center md:mt-64 md:me-44 md:justify-end  ">
                    <div className="flex h-full w-fit flex-col items-center md:items-start  ">
                        <p className="mt-3 lg:pr-12  max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            Where realms converge, lies Zentry and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite
                            opportunities.
                        </p>

                        <Button
                            id="realm-btn"
                            text="discover prologue"
                            className="mt-10  " 
                            backgroundColor="bg-blue-50   text-black-10  font-general font-weight-bold  text-[16px]  mt-6  py-4 "
                        />
                    </div>
                </div>
            
        </section>
    );
};

export default FloatingImage;
