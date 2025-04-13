    import gsap from "gsap";
    import { useGSAP } from "@gsap/react";
    import { ScrollTrigger } from "gsap/all";
    import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

    import AnimatedTitle from "./AnimatedTitle";

    gsap.registerPlugin(ScrollTrigger);

    const About = () => {

    useGSAP(() => {
        gsap.set(".mask-clip-path", {
          clipPath: "polygon(14% 0%, 82% 16%, 80% 92%, 6% 89%)",
        });
    
        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "56% center",
            end: "+=900 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const clipPathValue = `polygon(
                ${gsap.utils.interpolate(14, 0, progress)}% 0%, 
                ${gsap.utils.interpolate(82, 100, progress)}% 0%, 
                ${gsap.utils.interpolate(80, 100, progress)}% 100%, 
                ${gsap.utils.interpolate(6, 0, progress)}% 100%
              )`;
    
              gsap.to(".mask-clip-path", { clipPath: clipPathValue });
            },
          },
        });
    
        clipAnimation.to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
      }, []);



    return (
        <div id="about" className="min-h-screen w-screen">
        <div className="relative  mt-40 flex flex-col items-center gap-5">
            <p className="font-general text-sm uppercase md:text-[10px]">
                Welcome to Zentry
            </p>

            <AnimatedTitle
                text="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                className="mt-5 !text-black-10 text-center"
            />

            <MouseParallaxContainer  globalFactorX={0.1}   globalFactorY={0.1} >
                <MouseParallaxChild  factorX={0.3}  factorY={0.5} >
                    <div className="h-dvh w-screen" id="clip">
                        <div className="mask-clip-path about-image">
                            <img
                                src="img/about.webp"
                                alt="Background"
                                className="absolute left-0 top-0 size-full object-cover"
                              />
                        </div>

                        <div className="about-subtext  ">
                            <p>The Game of Games begins—your life, now an epic MMORPG</p>
                            <p className="text-gray-500">
                                Zentry unites every player from countless games and platforms, both
                                digital and physical, into a unified Play Economy
                            </p>
                        </div>
                    </div>
                </MouseParallaxChild>

            
            </MouseParallaxContainer>


            
        </div>

        
        </div>
    );
    };

export default About;






