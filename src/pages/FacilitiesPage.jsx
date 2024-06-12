import React, { useEffect, useState } from 'react'
import Facility from '../components/Facility'
import spa from '../assets/images/facilities/spa.jpg'
import shop from '../assets/images/facilities/shop.jpg'
import bsc from '../assets/images/facilities/bsc.jpg'
import bowlingSalon from '../assets/images/facilities/bowling-salon.jpg'
import bar from '../assets/images/facilities/b-a-r.jpg'
import photoStudio from '../assets/images/facilities/photo-studio.jpg'
import UserService from '../services/UserService'

const FacilitiesPage = () => {
  const [allFacilities, setAllFacilities] = useState([]);

  useEffect(() => {
    const fetchExtras = async () => {
      try {
        const response = await UserService.getExtras();
        setAllFacilities(response.data);
      } catch (error) {
        console.error('Error fetching facilities: ', error);
      }
    };

    fetchExtras();
  }, []);

  const images = [spa, shop, bsc, bowlingSalon, bar, photoStudio, spa, shop, bsc, bowlingSalon, bar, photoStudio, spa, shop, bsc];

  return (
    <>
      <h1 className="pt-40 text-3xl font-bold text-custom-white text-center mx-auto">Facilities</h1>
      <h2 className="pt-12 text-2xl font-bold text-custom-white text-center mx-auto ">Our facilities provide you with a fulfilling hotel experience, including a spa complete with a natural hot spring, and relaxing aesthetic and beauty salons.</h2>
      <div className='pt-32 flex justify-center items-center flex-wrap gap-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-16">
          {allFacilities.map((facility, index) => (
              <Facility image={images[index]} facility={facility}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default FacilitiesPage