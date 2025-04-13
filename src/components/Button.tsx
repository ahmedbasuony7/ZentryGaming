import  { ReactNode } from 'react'

export default function Button( 
  {
    text ,
    backgroundColor="bg-yellow-300", 
    rightIcon,
    leftIcon,
    // @ts-ignore
    className,
    // @ts-ignore
    id
  } : {
    text:string; 
    backgroundColor?:string;
    rightIcon?:ReactNode;
    leftIcon?:ReactNode;
    className: string;
    id:string
  } ) {

  return (
    <div>
        <button  className={`py-2.5  px-5   flex  items-center  gap-2   rounded-full  ${backgroundColor}  `}   >  
            {leftIcon}  
            <span  className='font-general  text-xs  uppercase ' >   
                {text} 
            </span>
            {rightIcon} 
        </button>
    </div>
  )
}


