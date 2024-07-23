import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'



const navItems =[
  {path: '/about', text:'About'},
  {path: '/contact', text:'Contacto'},
  {path: '/pricing', text:'Precio'}
  
]



export const Navbar = async() => {

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href={'/'} className='flex items-center'>
        <HomeIcon size={16}  className='mr-2'/>
        <span>Home</span>
        
        </Link>

        <div className='flex flex-1'></div>
        {navItems.map(navItems =>(
         <ActiveLink key={navItems.path} path={navItems.path} text={navItems.text}  />  
         
        ))}
        

    </nav>
  ) 
}
