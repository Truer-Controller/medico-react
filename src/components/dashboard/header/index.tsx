import React from 'react'
import Logo from '../../../assets/logo.png';

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-white">
            <div className='flex flex-col justify-start'>
                <p className='ml-4  font-bold text-lg'>Doutor Blabla</p>
                <p className='ml-4  font-bold text-sm'>Médico</p>
            </div>
            <div className='flex items-center justify-center mr-6'>
                <p>Doutor Blabla</p>
                <img className="h-10 w-10" src={Logo} alt="logo" />
            </div>
    </div>
  )
}
