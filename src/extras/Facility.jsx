import React from 'react'
import spa from '../assets/images/facilities/spa.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Facility = ({image, facility}) => {
  const desc = facility.description.substring(0, 150) + '...';

  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/facilities/details', { state: { facility } });
  };

  return (
    <>
      <div className="max-w-md bg-white shadow dark:bg-dark-grey dark:border-custom-white">
        <a>
          <img className="rounded-lg" src={image} alt="" />
        </a>

        <div className="p-4 rounded-b-lg">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom-white">{facility.name}</h5>
          </a>

          <p className="mb-3 font-normal text-white">{desc}</p>
          
          <div className="flex-grow"></div>
          <div className="relative flex flex-col w-full items-center">
              <button onClick={handleMoreClick} className="w-full px-3 py-2 text-md font-medium text-center text-dark-grey bg-custom-white rounded-lg duration-100 hover:bg-custom-purple cursor-pointer">
                FIND OUT MORE
              </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Facility