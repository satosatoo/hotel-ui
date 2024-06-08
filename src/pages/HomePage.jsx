import React from 'react'
import im1 from '../assets/images/im1.jpg'
import im2 from '../assets/images/im2.jpg'
import im3 from '../assets/images/im3.jpg'
import im5 from '../assets/images/im6.jpg'
import im6 from '../assets/images/im7.jpg'
import About from '../components/About'

const HomePage = () => {

    const images = [
      im3, im1, im5, im6,
    ];

    return (
      <>
        <div>
        <div>
          <div className="flex flex-col space-y-4">
            <div className="w-full overflow-hidden">
              <img src={im2} alt="Hotel" className="w-full border-b" />
            </div>
          </div>
        </div>

        <div className="container mx-auto py-12 mb-8 mt-8">
            <div className="grid grid gap-4">
                <div className="py-4 px-14">
                    <div className="flex flex-col space-y-4">
                        <p className="text-xl leading-relaxed">We offer you calm and spacious skies at our location nestled in the natural splendor of Shiba Park, away from the bustle of the metropolis. With 33 floors above ground, the hotel stands alongside Tokyo Tower, the symbol of the city, and features a natural hot spring and full range of other amenities, such as restaurants and spa and fitness facilities. The Prince Park Tower Tokyo is a flagship hotel of Prince Hotels and a member of Preferred Hotels & Resorts.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-4 grid-rows-1 w-full h-auto gap-0">
            {images.map((image, index) => (
              <div key={index} className="w-full h-full">
                <img src={image} alt={image.alt} className="w-full h-full object-cover border-b border-t" style={{ borderColor: 'rgba(255, 255, 255, 1)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <About />
      </>
  );
}

export default HomePage