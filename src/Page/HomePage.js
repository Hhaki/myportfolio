import React from 'react'
import { BEAN_APP, BEAN_COVER, QUBISA_COVER,MINEOPT_COVER, CONTENT_BEAN,CONTENT_QUBISA, CONTENT_MINEOPT } from '../constants/images'

export default function HomePage() {
  return (
    <div>
      <nav className="flex justify-around space-x-4 pt-4">
        <a href='/'>Home</a>
        <a href='/'>Work</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
      </nav>
      <div className='pl-12 pt-8 '>Hey there, I'm Haki - a UI/UX designer.
      <br/> <span className='italic'> While being fascinated with all aspects of user experience design, I specialize in ideation, storytelling and visual design as well.
      <br/> I love diving into why and how people use it, and furthering those experiences to make them memorable.
      </span></div>
      <div className="pl-12 text-sm italic text-lime-600	 font-light">This is just a basic portfolio, I'm updating it and make it better asap!! Wait me pls ^^</div>
    <div className=' p-8 flex '>
      <div className=' w-6/12 pt-16 mr-32'>
      <a href='/beanapp'> 
        <img className='cursor-pointer'  src={BEAN_COVER}/></a>
      
      <img style={{width:280}} className="pt-4"src={CONTENT_BEAN}/>
      </div>
      <div className='w-6/12 pt-80'>
         <img src={QUBISA_COVER}/>
         <img className="pt-4" src={CONTENT_QUBISA}/>
         </div>  
         
    </div>
    <div style={{width:650}} className=' w-6/12 pl-8'>
      <img src={MINEOPT_COVER} />
      <img className="pt-4" src={CONTENT_MINEOPT} />
    </div>
    </div>
  
  )
}
