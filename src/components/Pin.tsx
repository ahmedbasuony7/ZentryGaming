import { useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MainContainer } from '../App';
import Pagginationitem from './Pagginationitem';
// import pagginationitem from './Pagginationitem';

gsap.registerPlugin(ScrollTrigger);

export default function Pin() {

    useEffect(() => {
        const ctx = gsap.context(() => {

            const  items  =  gsap.utils.toArray(".paggination");
            // const  paragraps  =  gsap.utils.toArray(".paggination  p ");
            // const  lineContainers  =  gsap.utils.toArray(".lineContainer");
            // const  titles  = gsap.utils.toArray(".paggination  h4");

            // gsap.set(paragraps , {opacity:0.3 , scaleY: 0  , visibility: "hidden " });
            // gsap.set(lineContainers , {opacity:0 , visibility: "hidden " , height:0});
            // gsap.set(titles , {opacity: 0.5});

            //   change color 
            ScrollTrigger.create({
                scroller: MainContainer,
                trigger: "#pin-last",
                start: "top 90%",
                // markers: true,

                animation: gsap.to("#pin-last", {
                    backgroundColor: "#edff66" 
                }),
            });

            let  cumulativeOffset  = 0;
            items.forEach(( item : HTMLDivElement  | any   ) => {

                if(!item) return;

                // const  lineContainer  = item.querySelector('.lineContainer');
                // console.log(lineContainer);
                // const  line  = item.querySelector('.line');
                // const  paragraph  =  item.querySelector("p");
                // const  title  =  item.querySelector("h4");

                
                // const  lineAnimationScrub = gsap.timeline({paused: true})
                // .to(line , {y: 100});

                const  start  =  `top+=${cumulativeOffset}   center `; 
                const  animationDuration  =  1000;
                const  end = `+=${animationDuration}`;

                // const  mainAnimation   =   gsap.timeline({paused: true})
                //     .to(lineContainer , {autoAlpha:1 , visibility : "visiable", height : "6rem" , duration: 0.2})
                //     .to(paragraph , {scaleY: 1 , visibility : "visiable" , autoAlpha: 1})
                //     .to(title, {autoAlpha: 1 , duration: 0.2} , "c");


                ScrollTrigger.create({
                    scroller: MainContainer,
                    start , 
                    end ,
                    trigger: item ,
                    // animation: lineAnimationScrub ,
                    scrub: 1 ,
                    // markers: true,

                    // onEnter: () => mainAnimation.play(),
                    // onLeave: () => mainAnimation.reverse(),
                    // onLeaveBack: () => mainAnimation.reverse() ,
                    // onEnterBack: () => mainAnimation.play() ,
                });
                cumulativeOffset  += animationDuration;
            })

            //  pin scroller
            ScrollTrigger.create({
                trigger: "#pin-last",
                start: "8%  top ",
                end: "+=4000  top" ,
                scrub :1.2 ,
                pin: true ,
                // scroller: MainContainer,
                pinSpacing: true ,

            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="pin-last"
            className="   min-h-[113dvh]  w-screen overflow-hidden  pb-20  bg-black-10 relative  "
        >
            <div className="   flex  gap-5  py-4 flex-col  items-start   ">
                <AnimatedTitle
                    text="THE UNIVERS<b>E</b> <br /> POWERED BY ZE<b>N</b>T"
                    className="ele   lg:mt-32  mt-20  !items-start  !p-0  !pl-0  !text-black-10 "
                />
            
                <div  className=' lg:mx-0  mx-auto  pl-12    ' >
                    <Button text="ENTER VAULT" id="vault"  backgroundColor="bg-black-10   !text-white-10  !px-8 "  className="!bg-black-10  !px-8  !text-white-10  " />            
                </div>

                <div   className=' size-52  md:size-96  lg:absolute  mx-auto  lg:right-10  bottom-10  z-30  ' >
                    <video 
                        // ref={videoRef}
                        loop  muted    autoPlay
                        src="/videos/v2.webm"
                        className='  ' 
                    />
                </div>

                <div  className='  flex  lg:mt-0  mt-40   flex-col  pl-8  items-start   '  >
                    <Pagginationitem   
                        num='01'  
                        text='Shaping Zentry Collectively'  
                        desc='Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by peoples imaginations'  
                    />

                    <Pagginationitem   
                        num='02'  
                        text='Unlocking Economic Opportunity'  
                        desc='ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem.'  
                    />

                    <Pagginationitem   
                        num='03'  
                        text='Sharing Value Accrued'  
                        desc='ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities.'  
                    />

                </div>
            </div>
        </section>
    );
}




