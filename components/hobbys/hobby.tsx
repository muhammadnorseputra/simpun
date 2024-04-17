import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'
import { shimmer, toBase64 } from "@/utils/index";
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { useRef } from "react";

function Hobby({hobbys}: any) {
  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section className="overflow-hidden dark:border-b-8 dark:border-gray-900">
      <div className="relative px-6 py-8 bg-white dark:bg-slate-800">
        <h2 className="inline text-2xl font-bold text-black dark:text-slate-400 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-800 before:animate-pulse">
          #Hobby
        </h2>
        <Slider ref={slider} {...settings} className="pt-5">
          {
          hobbys.map((hobby: any) => (
          
          <div key={hobby.id} data-aos="fade-down" data-aos-delay="300">
            <div className="bg-white border rounded-2xl overflow-hidden flex justify-between items-center p-2">
            <div className="pl-3">
              <h3 className="font-bold text-slate-700 text-xl">{hobby.title}</h3>
              <p className="text-gray-400">{hobby.description}</p>
            </div>
            <Image src={hobby.image} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(90, 90))}`} title={hobby.title} width={90} height={90}/>
            </div>
          </div>
          ))}
        </Slider>
        <button onClick={() => slider?.current?.slickNext()} className="bg-white hover:bg-white hover:text-green-700 transition-all group text-black rounded-full absolute right-8 top-8 p-2" type="button" role="button"> <ArrowCircleRightIcon className="w-6 h-6 transition-all group-active:scale-75"/> </button>
        <button onClick={() => slider?.current?.slickPrev()} className="bg-white hover:bg-white hover:text-green-700 transition-all group text-black rounded-full absolute right-20 top-8 p-2" type="button" role="button"> <ArrowCircleLeftIcon className="w-6 h-6 transition-all group-active:scale-75"/> </button>

      </div>
    </section>
  );
}

export default Hobby;
