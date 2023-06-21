import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { styles  } from '../styles';
import {navLinks } from "../constants";
import {logo,menu,close} from "../assets"
import resume from "./resume.pdf";




const Navbar = () => {


  const [active,setActive]=useState("")
  const [toggle,setToggle]=useState(false)
  const onButtonClick = () => {
    fetch(resume)
      .then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'resume.pdf';
          alink.click();
        });
      })
      .catch((error) => {
        console.error('Error occurred while downloading the resume:', error);
      });
  };

  return (
      <nav className={`${styles. paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
               <Link className='flex items-center gap-2'
               onClick={()=>{
                setActive("");
                window.scrollTo(0,0)
               }}>

                <img src={logo} alt="logo" 
                className='w-9 h-9  object-contain '/>
                     <div >
               <button 
               onClick={onButtonClick}
               className='bg-red-500 font-bold cursor-pointer h-9 w-52 rounded-md '>
                 Download Resume
                </button>
                </div>
              
               
               </Link>
          
               <ul className='list-none hidden  md:flex flex-row gap-10  '>
                 {navLinks.map((link)=>(
                  <li 
                  key={link.id}
                  className={`${active === link.title ? "text-white": "text-secondary"} 
                  hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={()=>setActive(link.title)}>
                    <a
                    href={`#${link.id}`}
                    >{link.title}</a>

                  </li>
                 ))}
               </ul>
               <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                  src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={()=>setToggle(!toggle)}/>
                <div 
                className={`${!toggle ? "hidden" : " flex"} p-6 black-gradient  absolute top-20 
                right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>

                    <ul className=' flex justify-end items-start flex-col gap-4  '>
                     {navLinks.map((link)=>(
                  <li 
                  key={link.id}
                  className={`${active === link.title ? "text-white": "text-secondary"} 
                  font-poppins  font-medium cursor-pointer text-[16px]`}
                  onClick={()=>{
                    setToggle(!toggle)
                    setActive(link.title)}}>
                    <a
                    href={`#${link.id}`}
                    >{link.title}</a>

                  </li>
                 ))}
                
                      </ul>
                      
                </div>
         

               </div>
            </div>
      </nav> 
  )
}

export default Navbar