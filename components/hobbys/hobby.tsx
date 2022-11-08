import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'

function Hobby({hobbys}: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    // adaptiveHeight: true
  };

  return (
    <section>
      <div className="relative px-6 py-8 bg-slate-700">
        <h2 className="inline text-2xl font-bold text-slate-400 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-400 before:animate-pulse">
          Hobby
        </h2>
        <Slider {...settings} className="pt-5">
          {
          hobbys.map((hobby: any) => (
          
          <div key={hobby.id} className="px-3">
            <div className="bg-slate-600 rounded-2xl overflow-hidden flex justify-between items-center p-2">
            <div className="pl-3">
              <h3 className="font-bold text-white text-xl">{hobby.title}</h3>
              <p className="text-gray-400">{hobby.description}</p>
            </div>
            <Image src={hobby.image} title={hobby.title} width={90} height={90}/>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Hobby;
