import { AcademicCapIcon } from "@heroicons/react/outline";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hobby() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 2,
    centerMode: false,
    slidesToScroll: 1,
    centerPadding: '30px'
  };

  return (
    <section>
      <div className="relative px-6 py-8 bg-slate-700">
        <h2 className="inline text-2xl font-bold text-slate-400 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-400 before:animate-pulse">
          Hobby
        </h2>
        <Slider {...settings}>
          <div className="p-3 min-w-[300px] h-28 bg-slate-600 rounded-2xl overflow-hidden flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white text-xl">SD</h3>
              <p>SD Negeri Banua Hanyar</p>
            </div>
            <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-slate-100/30 fill-slate-200/30" />
          </div>
          <div className="p-3 min-w-[300px] h-28 bg-slate-600 rounded-2xl overflow-hidden flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white text-xl">SD</h3>
              <p>SD Negeri Banua Hanyar</p>
            </div>
            <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-slate-100/30 fill-slate-200/30" />
          </div>
          <div className="p-3 min-w-[300px] h-28 bg-slate-600 rounded-2xl overflow-hidden flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white text-xl">SD</h3>
              <p>SD Negeri Banua Hanyar</p>
            </div>
            <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-slate-100/30 fill-slate-200/30" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Hobby;
