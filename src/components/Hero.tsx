import { useEffect, useRef  , useState} from 'react';
import '../index.css'
import Button from './Button';
import { TiLocation  } from "react-icons/ti";
import gsap from "gsap";
//import { useGSAP } from "@gsap/react";
import {ScrollTrigger}  from "gsap/all";


gsap.registerPlugin(ScrollTrigger);


function   Hero  ( ) {


    const  backGroundVideo  = useRef<HTMLVideoElement >(null)
    const  totalVideos  =  4;
    const  heroRef  =  useRef<HTMLDivElement | null> (null);
    const  [currentIndex , setCurrentIndex] = useState(0); 
    // @ts-ignore
    const  [ isMoving , setIsMoving ]  =  useState(false);
    const  [ loadedVideos  ,  setLoadedVideos ] = useState(0);
    const  [isLoading , setIsLoading]  =  useState(true);
    const  timeOutMouseRef =  useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if( loadedVideos   === totalVideos  - 1 ) {
            setIsLoading(false);
        }

    } );

    //  %  =>   0%4  => 0  , 1%4  => 1  , 4%4 => 1  , 5%4 => 1

    // const  isLoading  =  loadedVideos  !==  totalVideos;
    const  nextIndex  =  (currentIndex  + 1 )  %  totalVideos;

    const  handelNextVideo  =  ( ) =>  {

        setCurrentIndex(nextIndex);
        const  animatedVideo  = `#video-${nextIndex}`;
        const  videos = ['#video-0' , '#video-1' , '#video-2' , '#video-3' ]
        .filter((v)=> v !== animatedVideo )

        //  gsap.set()  =>  we use it to identifiy an element and apply on him some styling
        gsap.set(animatedVideo, {
            zIndex:30 ,
            width:"16rem",
            height:"16rem",
        });
        gsap.set(videos, {zIndex:20});
        
        const  currentVideo:HTMLVideoElement | null = document.querySelector(animatedVideo); 
        if(currentVideo) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            currentVideo.play();
        }

        gsap.to(animatedVideo , {
            clipPath: "polygon(0 0 , 100% 0 , 100% 100% , 0% 100%)",
            width:"100%",
            height:"100%",
            transformOrigin:'center  center '
        });

    } 

    useEffect(() => {
        setIsMoving(true);

        const  handelMouseEvente = (e: MouseEvent  ) => {
            // console.log(e);

            if ( !backGroundVideo.current ) return;
            if(timeOutMouseRef.current) clearTimeout(timeOutMouseRef.current);
            timeOutMouseRef.current  = setTimeout(( ) => {
                setIsMoving(false);
                gsap.to(backGroundVideo.current , {autoAlpha: 0 , duration: 0.5})
            } , 1000 );

            gsap.to(backGroundVideo.current , {autoAlpha: 1})


            const {clientX , clientY} = e;
            const  maxoffsetX = 800;
            const  maxoffsetY = 500;

            const  centerX = window.innerWidth/2;
            const  centerY =  window.innerHeight/2;

            const  constrainedX = Math.min(Math.max(clientX , clientX - maxoffsetX) , centerX + maxoffsetX); 
            const  constrainedY = Math.min(Math.max(clientY, clientY - maxoffsetY ) , centerY + maxoffsetY);

            const polygonClipPath = `polygon(
                ${Math.max(constrainedX - 100, 0)}px ${Math.max(constrainedY - 100, 0)}px,
                ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.max(constrainedY - 100, 0)}px,
                ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.min(constrainedY + 100, window.innerHeight)}px,
                ${Math.max(constrainedX - 100, 0)}px ${Math.min(constrainedY + 100, window.innerHeight)}px
            )`;
            
            gsap.to( backGroundVideo.current , {
                clipPath: polygonClipPath ,  
                duration: 0.3,
                ease: "power1.out"

            });
            backGroundVideo.current.style.clipPath  =  polygonClipPath;
        
        }
        const  hero = heroRef.current;
        if(!hero ) return;

        hero.addEventListener("mousemove" , handelMouseEvente)
        return ( ) => {
            hero.removeEventListener("mousemove" , handelMouseEvente)
        }

    } , []);


    //scroll  trigeer 

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger
    
        const ctx = gsap.context(() => {
            gsap.set("#video-frame", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",            });
        
            gsap.to("#video-frame", {
                clipPath: "polygon(14% 0, 72% 0, 90% 97%, 0 96%)",
                scrollTrigger: {
                trigger: "#video-frame",
                start: "center 40%",
                end : "bottom  center  ",
                // markers: true,
                scrub: true,
                // scroller:".main-container"
                },
            });
        });
        return () => ctx.revert(); 
    
    }, []);

    
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline()
                .to(".box", { x: 500 })
                .to(".box" , {y:-500})
                .to(".box", { y: 500 , duration:3 , rotate:180 });
        }); // ✅ Scope animations to heroRef

        return () => ctx.revert(); 
    }, []);

    return(
        <section  className=" relative  h-dvh   w-screen   "  >
            <div ref={heroRef} className=" z-10  h-dvh    overflow-hidden  bg-blue-50      "   >
                {/* <div className='box  w-52  h-52  bg-yellow-300  absolute  top1/2  left-1/2  z-50     ' ></div>                 */}
                
                {isLoading && (
                    <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                        {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                        <div className="three-body">
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                        </div>
                    </div>
                )}
                
                <div  id="video-frame"   className="relative  z-10 inset-0  w-full  h-full   " >
                    <video  
                        onClick={handelNextVideo}
                        ref={backGroundVideo}   
                        className=" invisible   object-cover   cursor-pointer   z-50  absolute h-full  w-full   "     
                        src={`/videos/hero-${nextIndex}.mp4`}    
                        autoPlay  loop muted   
                    />

                    {
                        Array.from({length:totalVideos} , (_,index) => (
                            <video 
                                key={index}
                                id={`video-${index}`}
                                className="object-cover absolute   top-1/2   -translate-y-1/2    left-1/2   -translate-x-1/2       h-full  w-full z-10"     
                                src={`/videos/hero-${index}.mp4`}  
                                autoPlay  loop  muted 
                                onLoadedData={() =>  setLoadedVideos((l) => l+ 1
                            )}  
                            />
                        ))
                    }

                    <h1   
                        className="lg:text-[12rem] absolute uppercase z-40  md:text-9xl 
                        sm:text-7xl    bottom-5 sm:right-10   text-blue-50  font-zentry  font-[900] "  > 
                        g<b className="special-font">a</b>ming  
                    </h1>
                </div> 
                
                <div  className="flex  flex-col  px-5   items-start  pt-14   z-40   gap-3  absolute  top-10   left-10    "  >
                    <h2   className=" special-font  lg:text-[12rem]  uppercase   md:text-9xl  sm:text-7xl   text-white-10  font-zentry  font-[900] "  > 
                        REDIFI N
                    </h2>

                    <p   className='mb-5  max-w-64    font-robert-regular  text-blue-100  ' > 
                        ENTER THE  METAGAME LAYER 
                        <br />
                        unleash the play economy
                    </p>
                    

                    <Button  id='' className=''  text="whath  trailer" leftIcon={<TiLocation />}   />

                </div>
                
            </div>

            <h2   
                className="lg:text-[12rem]  absolute uppercase   md:text-9xl  sm:text-7xl    
                bottom-5 sm:right-10   text-black-10  font-zentry  font-[900] "  > 
                g<b className="special-font">a</b>ming  
            </h2>
            
            
        </section>
    )
}


export   default  Hero;





