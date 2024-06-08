import React from 'react'
import spa from '../assets/images/facilities/spa.jpg'

const Facility = ({image, facility}) => {
  const desc = facility.description.substring(0, 150) + '...';
  return (
    <>
      <div className="max-w-md bg-white shadow dark:bg-dark-grey dark:border-custom-white">
        <a>
          <img className="rounded-lg" src={image} alt="" />
        </a>

        <div className="p-4 rounded-b-lg">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom-white">{facility.name}</h5>
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom-white">Spa & Fitness</h5> */}
          </a>

          <p className="mb-3 font-normal text-white">{desc}</p>
          {/* <p className="mb-3 font-normal text-white">A Special Time. A Special Place. Our Spa & Fitness facilities are available to Spa & Fitness Club members, and also to overnight hotel guests …</p> */}
          
          <div className="flex-grow"></div>
          <div className="relative flex flex-col w-full items-center">
              <a className="w-full px-3 py-2 text-md font-medium text-center text-dark-grey bg-custom-white rounded-lg duration-100 hover:bg-custom-purple cursor-pointer">
                FIND OUT MORE
              </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Facility