import  { ReactNode, useRef } from 'react'

export default function GridCard( {text , video , pargraph } : {  text: ReactNode , video : string , pargraph : string}) {
    const  videoRef = useRef<HTMLVideoElement | null >  (null);

    return (
        <div
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
            className=' cursor-pointer  md:min-h-[75vh]  lg:h-full  relative h-96   w-full  rounded-xl   overflow-hidden  border border-white-20 ' >
            <div  className='absolute  size-full' >
                <video ref={videoRef} src={video}  className='size-full  object-cover '   />
            </div>

            <div className='px-5  py-2.5   relative  text-white-10   z-20  flex  flex-col  gap-2    ' >
                    <h3  className=' grid-title   ' >
                        {text}
                    </h3>

                    <p className=' mt-3  max-w-64    md:text-base   text:xs  ' >
                        {pargraph}
                    </p>

                </div>

            
        </div>
    )
}
