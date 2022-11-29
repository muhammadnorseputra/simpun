import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ArrowCircleLeftIcon, ArrowCircleRightIcon, CollectionIcon } from "@heroicons/react/outline";
import Image from 'next/image'
import {shimmer, toBase64} from 'utils'
import Link from "next/link";
import {
  ExternalLinkIcon,
} from "@heroicons/react/outline";
import { useRef } from "react";

export default function Project({ projects }: any) {
  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section id="projects" className='overflow-x-hidden'>
      <div className="relative px-6 py-8 min-h-[300px] bg-white dark:bg-blue-500 shadow-t-2xl -mt-5 rounded-t-2xl rounded-b-2xl dark:rounded-b-none overflow-hidden z-10" data-aos="fade-in" data-aos-delay="150">
        <CollectionIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-5 absolute -right-20 -bottom-10" />
        <h2 className="inline text-2xl font-bold text-slate-800 dark:text-white relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-white before:animate-pulse">
          Project
        </h2>
        <Slider ref={slider} {...settings} className="pt-5">
          {projects.map((project: any) => (
          <div key={project.id}>
            <div className="md:px-2 rounded-xl">
            <Image
              src={`https://raw.githubusercontent.com/muhammadnorseputra/simpun-api/master/${project.screenshoot[0].source}`}
              alt={project.title}
              width={800}
              height={390}
              className="rounded-xl"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 390))}`}
            />
            </div>
            <div className="flex justify-between items-center md:px-5">
              <div className="px-2 md:px-4 py-1 rounded-full bg-green-300 text-black text-xs my-2 inline-block">{project.technology}</div>
              <Link href={project.url} legacyBehavior>
                <a target="_blank" className="hover:text-blue-500 p-2 text-white bg-black/40 rounded-full right-1 relative" data-aos="fade-up" data-aos-delay="150"><ExternalLinkIcon className="w-5 h-5"/></a>
              </Link>
            </div>
            <h2 className="font-bold text-xl md:px-5" data-aos="fade-right" data-aos-delay="300">{project.title}</h2>
          </div>
          ))}
        </Slider>
        <button onClick={() => slider?.current?.slickNext()} data-aos="fade-down" data-aos-delay="250" className="bg-white hover:bg-blue-400 hover:text-white transition-all group text-black rounded-full absolute right-8 top-8 p-2" type="button" role="button"> <ArrowCircleRightIcon className="w-6 h-6 transition-all group-active:-scale-75"/> </button>
        <button onClick={() => slider?.current?.slickPrev()} data-aos="fade-down" data-aos-delay="150" className="bg-white hover:bg-blue-400 hover:text-white transition-all group text-black rounded-full absolute right-20 top-8 p-2" type="button" role="button"> <ArrowCircleLeftIcon className="w-6 h-6 transition-all group-active:-scale-75"/> </button>
      </div>
    </section>
  );
}
