

import { ReactNode } from 'react'
// @ts-ignore

export default function ButtonNav( 
  {
    text ,
    // @ts-ignore
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
        <button    className={`py-2 bg-blue-50  px-3.5     flex  items-center  gap-2   rounded-full    `}   >  
            {leftIcon}  
            <span  className='font-general  text-xs  uppercase ' >   
                {text} 
            </span>
            {rightIcon} 
        </button>
    </div>
  )
}




