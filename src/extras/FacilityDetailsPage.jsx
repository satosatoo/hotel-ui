import React from 'react'
import { useLocation } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import spa from '../assets/images/facilities/spa.jpg';
import shop from '../assets/images/facilities/shop.jpg';
import bsc from '../assets/images/facilities/bsc.jpg';

const FacilityDetailsPage = () => {
  const location = useLocation();
  const facility = location.state?.facility;

  if (!facility) {
    return <div>No facility information available.</div>;
  }

  const images = [
    spa, shop, bsc
  ];

  return (
    <div className="bg-dark-grey text-white min-h-screen p-6 pt-28">
        <Slide>
            <div className="each-slide-effect-facility">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect-facility">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect-facility">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
      
      <div className="mt-12 mb-16 mx-auto max-w-2xl">
        <p className="text-2xl font-semibold mb-8 text-center">{facility.name}</p>
        <p className="text-xl">{facility.description}</p>
        
        <div className="flex flex-wrap items-center mb-8 mt-8">
          <div className="w-full sm:w-1/2 md:w-1/3 text-lg">
            <p><strong>Location: </strong> {facility.location} </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 text-lg">
            <p><strong>Hours: </strong> {facility.hours} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityDetailsPage