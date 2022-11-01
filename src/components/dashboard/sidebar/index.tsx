import React from 'react'
import Logo from '../../../assets/logo.png';


export default function Sidebar() {
    return (
      <div className="bg-white w-64 h-screen px-7 sticky left-0 top-0 overflow-hidden">
        <div className="flex py-6 justify-center items-center ">
          <img className="h-10 w-10" src={Logo} alt="logo" />
          <p className="ml-4 inline-flex font-bold text-2xl ">SMS</p>
        </div>
        <hr/>
        <div className="flex flex-col justify-center mt-8">
          <div className="flex py-5  justify-left items-center">
            <img className="h-5 w-5" src={Logo} alt="logo" />
            <p className="ml-4 inline-flex font-bold text-lg ">Agendar Consulta</p>
          </div>
          <div className="flex py-5  justify-left items-center">
            <img className="h-5 w-5" src={Logo} alt="logo" />
            <p className="ml-4 inline-flex font-bold text-lg ">Agenda</p>
          </div>
          <div className="flex py-5  justify-left items-center">
            <img className="h-5 w-5" src={Logo} alt="logo" />
            <p className="ml-4 inline-flex font-bold text-lg ">Médicos</p>
          </div>
          <div className="flex py-5  justify-left items-center">
            <img className="h-5 w-5" src={Logo} alt="logo" />
            <p className="ml-4 inline-flex font-bold text-lg ">Horarios</p>
          </div>
          <div className="flex py-5  justify-left items-center">
            <img className="h-5 w-5" src={Logo} alt="logo" />
            <p className="ml-4 inline-flex font-bold text-lg ">SMS</p>
          </div>
        </div>
      </div>
    );
  }
  
