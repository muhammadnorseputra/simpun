import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { CollectionIcon } from "@heroicons/react/outline";
import Image from 'next/image'
import {shimmer, toBase64} from 'utils'
import Link from "next/link";
import {
  ExternalLinkIcon,
} from "@heroicons/react/outline";

export default function Project({ projects }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <section id="projects" className='overflow-x-hidden'>
      <div className="relative px-6 py-8 min-h-[300px] bg-white dark:bg-slate-800 shadow-t-2xl -mt-5 rounded-t-2xl rounded-b-2xl dark:rounded-b-none overflow-hidden z-10" data-aos="fade-in" data-aos-delay="500">
        <CollectionIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-5 absolute -right-20 -bottom-10" />
        <h2 className="inline text-2xl font-bold text-slate-800 dark:text-white relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-800 before:animate-pulse">
          Project
        </h2>
        <Slider {...settings} className="pt-5">
          {projects.map((project: any) => (
          <div key={project.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_API}/${project.screenshoot[0].source}`}
              alt={project.title}
              width={800}
              height={390}
              className="rounded-xl"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 390))}`}
            />
            <div className="flex justify-between items-center">
              <div className="px-4 py-1 rounded-full bg-green-300 text-xs my-2 inline-block">{project.technology}</div>
              <Link href={project.url} legacyBehavior>
                <a target="_blank" className="hover:text-blue-600"><ExternalLinkIcon className="w-5 h-5"/></a>
              </Link>
            </div>
            <h2 className="font-bold text-xl">{project.title}</h2>
          </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
