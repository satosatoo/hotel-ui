import React from 'react'
import {FaAddressCard, FaRegCalendarCheck, FaParking } from 'react-icons/fa';
import { PiMapPinLineBold } from "react-icons/pi";
import { BsCreditCard2Front } from "react-icons/bs";
import { MdContactSupport,  } from "react-icons/md";
import { SiPrivateinternetaccess } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="bg-dark-grey text-white p-8 mt-16">
      <h1 className="text-center text-4xl font-bold mb-16">ABOUT US</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="text-center w-[30vw] text-[1em] leading-[1.5em] font-extralight pt-[0] px-[4vw] pb-[4vw] border-r-[2px] border-b-[2px] border-l-[0] border-solid">
          <PiMapPinLineBold className='text-4xl mb-4 mx-auto' color='#bdccff'/>
          <h2 className="text-xl font-semibold">Hotel Address</h2>
          <p className="mt-4">4-8-1 Shibakoen Minato, Tokyo 105-8563 Japan <br/> Tel: +81-(0)3-5400-1111</p>
        </div>
        <div className="text-center w-[30vw] text-[1em] leading-[1.5em] font-extralight pt-[0] px-[4vw] pb-[4vw] border-r-[2px] border-b-[2px] border-l-[0] border-solid">
          <FaRegCalendarCheck className='text-4xl mb-4 mx-auto' color='#bdccff'/>
          <h2 className="text-xl font-semibold">Check-in / check-out</h2>
          <p className="mt-4">Check-in: 3:00 p.m. / Check-out: 12:00 noon</p>
        </div>
        <div className="text-center w-[30vw] text-[1em] leading-[1.5em] font-extralight pt-[0] px-[4vw] pb-[4vw] border-r-[0px] border-b-[2px] border-l-[2px] border-solid">
          <BsCreditCard2Front className='text-4xl mb-4 mx-auto' color='#bdccff'/>
          <h2 className="text-xl font-semibold">Credit cards accepted</h2>
          <p className="mt-4">AMEX, VISA, Saison, NICOS, Diners, JCB, DC, UC, BANK, Million, JAL, Prince Card, China Union Pay, Master.</p>
        </div>
        <div className="text-center w-[30vw] text-[1em] leading-[1.5em] font-extralight pt-[0] px-[4vw] pb-[4vw] border-r-[2px] border-t-[2px] border-l-[0] border-solid">
        <MdContactSupport className='text-4xl mb-4 mt-5 mx-auto' color='#bdccff'/>
          <h2 className="text-xl font-semibold">Business support</h2>
          <p className="mt-4">Photocopies (b+w, color), Fax, Internet service (fees charged)</p>
        </div>
        <div className="text-center w-[30vw] text-[1em] leading-[1.5em] font-extralight pt-[0] px-[4vw] pb-[4vw] border-r-[2px] border-t-[2px] border-l-[0] border-solid">
          <SiPrivateinternetaccess className='text-4xl mb-4 mt-5 mx-auto' color='#bdccff'/>
          <h2 className="text-xl font-semibold">Internet</h2>
          <p className="mt-4">– Each room equipped with wired LAN and Wi-Fi. (Free)<br/>– Wi-Fi access available in the Lobby. (Free)<br/>Apply for net connection at the reception or conceirge.<br/>– Wired LAN available inside Banquet Halls and Meeting Rooms.</p>
        </div>
        <div className="text-center w-[30vw] text-[1em] leading-[1.5em] font-extralight pt-[0] px-[4vw] pb-[4vw] border-r-[0px] border-t-[2px] border-l-[2px] border-solid">
          <FaParking className='text-4xl mb-4 mt-5 mx-auto' color='#bdccff'/>
          <h2 className="text-xl font-semibold">Parking</h2>
          <p className="mt-4">1,500yen for 1 night accommodation. (500 yen/30 minutes for visitors)</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About