import {useEffect} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import Button from "./Button";
// import AnimatedText from "./AnimatedText";
import AnimatedText from './AnimatedText ';

const AnimatedBox = ({src} : {src: string;}) => {
    return(
    <div className='size-6 md:size-10 rounded-sm md:rounded-md bg-transparent transition-all duration-500 ease-in-out relative animate-bounce hover:animate-none'>
        <div className='z-[1000] animated-box group size-full bg-black overflow-hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm md:rounded-md bg-black hover:size-[100px] lg:hover:size-[300px] transition-all duration-500 ease-in-out origin-center'>
            <img   alt="" src={src} className='size-full object-center object-fit scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100' />
        </div>
    </div>)
}
const Discover = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.discover',
                    start: '200 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            })

            tl.from('.animated-lines', {
                y: 100,
                opacity: 0,
                stagger: {
                    amount: 1,
                },
                duration: 1,
            })
            tl.from('#discover-subtext', {
                y: 50,
                opacity: 0,
                duration: 0.4,
            })
            tl.from('#discover-btn', {
                opacity: 0,
                duration: 0.4,
            })
        });

        return () => ctx.revert();
    },[])

  return (
    <section className='px-12 py-24 w-screen min-h-screen bg-blue-50 flex flex-center flex-col'>
          <AnimatedText text='who we are' />
        <div className='min-w-[300px] discover mt-10 text-black flex items-center justify-center flex-col special-font font-zentry font-black text-5xl uppercase leading-[.8] sm:px-32 md:text-[6rem]'>
            <div className='animated-lines opacity-1'>
                <h1 className='z-10'>We're b<b>u</b>ilding</h1>
            </div>
            <div className='animated-lines opacity-1 flex items-center gap-4 md:gap-8 mt-2'>
                <h1 className='z-10'>A new</h1>
                <AnimatedBox src='/public/img/about.webp' />
                <h1 className='z-10'>realit<b>y</b></h1>
            </div>
            <div className='animated-lines opacity-1 mt-2'>
                <h1 className='z-10'>That Rew<b>a</b>rds</h1>
            </div>
            <div className='animated-lines opacity-1 flex items-center gap-4 md:gap-8 mt-2'>
                <h1 className='z-10'>Play<b>e</b>rs</h1>
                <AnimatedBox src='/public/img/gallery-5.webp' />
                <h1 className='z-10'>And</h1>
            </div>
            <div className='animated-lines opacity-1 mt-2'>
                <h1 className='z-10'>E<b>m</b>powers</h1>
            </div>
            <div className='animated-lines opacity-1 mt-2'>
                <h1 className='z-10'>Hu<b>m</b>ans & AI</h1>
            </div>
            <div className='animated-lines opacity-1 flex items-center gap-4 md:gap-8 mt-2'>
                <h1 className='z-10'>To</h1>
                <AnimatedBox src='/img/about.webp' />
                <h1 className='z-10'>Thri<b>v</b>e</h1>
            </div>
        </div>
        <p id='discover-subtext' className='mt-6 font-circular  py-2 text-s  text-black-10  max-w-sm text-center opacity-1'>Zentry envisions a future where players, emerging tech, and a new economy unite at the convergence of gaming and AI.</p>
        <Button
                id="discover-btn"
                backgroundColor="mt-6 px-4 py-2 lg:py-2.5 lg:px-6 text-[10px] font-medium  !bg-black-10 !text-white-10 opacity-1 "
                text="discover who we are"
                className="mt-6 px-4 py-2 lg:py-2.5 lg:px-6 text-[10px] font-medium !bg-black !text-white opacity-1"
            />
    </section>
  )
}

export default Discover