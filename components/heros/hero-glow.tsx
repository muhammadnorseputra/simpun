import Image from 'next/image'
import { GithubIcon, FigmaIcon, TwitterIcon, IgIcon, FbIcon, DownloadIcon } from '../icons'
import MyPic from '../../public/mypic.png'

function HeroGlow( { my }: any ) {
  const { intro, tagline, description } = my
	return (
		<section>
        <div className="py-24 relative bg-white/60 dark:bg-black/70 animate-reduce overflow-hidden z-0">
          <div className="w-72 h-72 animate-debouce animate-reduce rounded-full absolute filter blur-2xl opacity-60 dark:opacity-80 bg-amber-200 top-12 left-1/2 mix-blend-multiply"></div>
          <div className="w-72 h-72 animate-debouce animate-reduce animate-delay-2000 rounded-full absolute filter blur-2xl opacity-60 dark:opacity-80 bg-pink-200 bottom-12 left-1/4 mix-blend-multiply"></div>
          <div className="w-72 h-72 animate-debouce animate-reduce animate-delay-4000 rounded-full absolute filter blur-2xl opacity-60 dark:opacity-80 bg-violet-200 top-4 right-1/2 mix-blend-multiply"></div>
          <div className="relative flex flex-col items-start justify-between space-y-8">
            <div>
              <div className="w-28 h-28 ml-4 bg-white p-1 rounded-full sm:ml-5 md:ml-10 overflow-hidden outline-offset-2" data-aos="fade-down">
                <Image src={MyPic} width="300" height="300" layout="responsive" className='rounded-full' placeholder="blur"/>
              </div>
            </div>
            <div className="px-5 sm:px-5 md:px-10">
              <h1 className="text-sm sm:text-xl font-bold text-black dark:text-white"  data-aos="fade-up">{intro}</h1>
              <p className="text-2xl sm:text-3xl font-bold py-2 text-green-600 dark:text-green-400"  data-aos="fade-up" data-aos-delay="300">{tagline}</p>
              <p className="text-sm sm:text-md leading-6 text-black/90 dark:text-gray-100" data-aos="fade-in" data-aos-delay="400"> {description} </p>
              <div className="flex items-end justify-start">
              <div data-aos="fade-right">
                <a href="https://www.goodcv.com/cv/7f5d247b795ccf1c49c7711290e1fc7f" target="_blank" className="px-3 py-2 text-sm transition-all ease-out text-green-200 mt-4 hover:shadow-lg hover:shadow-green-300 rounded-full bg-green-600 text-white inline-flex items-center justify-between gap-x-3 divide-x divide-green-500"><DownloadIcon className="w-6 h-6 text-green-400"/> <span className="pl-2 truncate">Download CV</span></a>
              </div>
              <ul className="flex justify-between items-center gap-x-1 sm:gap-x-2 ml-2">
                <li className="group"  data-aos="fade-left" data-aos-delay="200">
                  <a href="https://github.com/muhammadnorseputra" target="_blank"><GithubIcon className="w-10 h-10 text-white transition-all ease-out group-hover:text-slate-400 group-hover:shadow-slate-400 group-hover:fill-slate-600 origin-bottom group-hover:scale-150 group-hover:animate-bounce bg-black/20 group-hover:bg-white backdrop-blur-sm p-2 rounded-full"/></a>
                </li>
                <li className="group"  data-aos="fade-left" data-aos-delay="400">
                  <a href="https://twitter.com/@norsptra" target="_blank"><TwitterIcon className="w-10 h-10 text-white transition-all ease-out group-hover:text-blue-600 group-hover:shadow-blue-400 group-hover:fill-blue-400 origin-bottom group-hover:scale-150 group-hover:animate-bounce bg-black/20 group-hover:bg-white backdrop-blur-sm p-2 rounded-full"/></a>
                </li>
                <li className="group"  data-aos="fade-left" data-aos-delay="500">
                  <a href="https://www.instagram.com/iam.putraaaaaa/" target="_blank"><IgIcon className="w-10 h-10 text-white transition-all ease-out group-hover:text-violet-800 group-hover:shadow-violet-800 group-hover:fill-red-200 origin-bottom group-hover:scale-150 group-hover:animate-bounce bg-black/20 group-hover:bg-white backdrop-blur-sm p-2 rounded-full"/></a>
                </li>
                <li className="group"  data-aos="fade-left" data-aos-delay="600">
                  <a href="https://www.facebook.com/muhammadnorsaputra" target="_blank"><FbIcon className="w-10 h-10 text-white transition-all ease-out group-hover:text-blue-900 group-hover:shadow-blue-800 group-hover:fill-blue-800 origin-bottom group-hover:scale-150 group-hover:animate-bounce bg-black/20 group-hover:bg-white backdrop-blur-sm p-2 rounded-full"/></a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
	)
}

export default HeroGlow