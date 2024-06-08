import React from 'react'
import Facility from '../components/Facility'
import spa from '../assets/images/facilities/spa.jpg'
import shop from '../assets/images/facilities/shop.jpg'
import bsc from '../assets/images/facilities/bsc.jpg'
import bowlingSalon from '../assets/images/facilities/bowling-salon.jpg'
import bar from '../assets/images/facilities/b-a-r.jpg'
import photoStudio from '../assets/images/facilities/photo-studio.jpg'

const FacilitiesPage = () => {
  const facilities = [
    {
      name: 'Spa & Fitness',
      description: 'Our Spa & Fitness facilities are available to Spa & Fitness Club members, and also to overnight hotel guests at preferential guest rates. Once you have exercised in our 25 meter indoor heated swimming pool, training gym, aerobics studio or other facilities, you can leisurely refresh your mind and body in our natural hot spring spa. Spa & Fitness club located in the refreshing greenery of the Shiba Park area. Cultivate, realign, repair and refresh both body and mind. *These facilities may only be used by guests of age 20 or over.'
    },
    {
      name: 'Shop',
      description: 'A gift store selling bonbon chocolates, baked goods, and original products. We will make proposals and help our customers to think of their loved ones according to their occasions.'
    },
    {
      name: 'Business Service Center',
      description: 'Internet. Printout copy. Fax transmission. Cellular phone rental. Interpreter and translation arrangements. EMS. DHL. FedEx,etc(pay service)'
    },
    {
      name: 'Bowling Salon',
      description: 'The bowling salon features 12 lanes and can be further divided into blocks of 4 lanes to create private lanes that feel like a bowling salon of your own. Additionally, the salon includes a bar and a billiards table. There is also a counter-style bar, where you can enjoy casual drinks and simple dishes.'
    },
    {
      name: 'Beauty & Relaxation',
      description: 'This relaxation spa uses the top-brand Thalgo for its thallaso therapy.The treatment which utilizes Thalgo products provides a superb healing experience.Please enjoy a blissful time in a relaxing and tranquil space.'
    },
    {
      name: 'Photo Studio',
      description: 'We offer a wide range of studio and location photography services to meet the needs of various life stages.(pay service)'
    }
  ];

  const images = [spa, shop, bsc, bowlingSalon, bar, photoStudio];

  return (
    <>
      <h1 className="pt-40 text-3xl font-bold text-custom-white text-center mx-auto">Facilities</h1>
      <h2 className="pt-12 text-2xl font-bold text-custom-white text-center mx-auto ">Our facilities provide you with a fulfilling hotel experience, including a spa complete with a natural hot spring, and relaxing aesthetic and beauty salons.</h2>
      <div className='pt-32 flex justify-center items-center flex-wrap gap-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-16">
          {facilities.map((facility, index) => (
              <Facility image={images[index]} facility={facility}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default FacilitiesPage