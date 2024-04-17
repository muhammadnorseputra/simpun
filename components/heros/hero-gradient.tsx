import Image from 'next/image'
import { GithubIcon, FigmaIcon, TwitterIcon, IgIcon, FbIcon, DownloadIcon } from '../icons'

function HeroGradient({ my }: any ) {
  const { intro, tagline, description } = my
	return (
		<section>
        <div className="bg-gradient-to-br from-green-100 via-amber-200 to-green-100 dark:from-green-900 dark:via-green-700 dark:to-green-900 px-4 py-12 relative before:z-0 before:absolute before:inset-1 before:bg-white/45 before:backdrop-blur-xl overflow-hidden z-10">
          <div className="relative flex flex-col items-start justify-between space-y-8">
            <div>
              <div className="w-28 h-28 bg-white p-1 rounded-full ml-5 md:ml-10 overflow-hidden outline outline-2 outline-black outline-offset-2">
                <Image src="/mypic.png" width="300" height="300" layout="responsive"/>
              </div>
            </div>
            <div className="mx-5 md:mx-10">
              <h1 className=" tracking-normal font-bold">{intro}</h1>
              <p className="tracking-wider text-3xl font-bold py-2 text-green-600 dark:text-amber-400">{tagline}</p>
              <p className="tracking-wider md:text-md leading-6"> {description} </p>
              <div className="flex items-end justify-start">
              <a href="#" className="px-3 py-2 text-sm mt-4 hover:shadow-lg hover:shadow-green-300 rounded-full bg-green-600 text-white inline-flex items-center justify-between gap-x-3 divide-x divide-green-500"><DownloadIcon className="w-6 h-6 text-green-200"/> <span className="pl-2">Download CV</span></a>
                <ul className="flex justify-between items-center gap-x-2 ml-2">
                  <li>
                    <a href="https://github.com/muhammadnorseputra" target="_blank"><GithubIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:backdrop-blur-none hover:bg-green-600 hover:text-white"/></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/@norsptra" target="_blank"><TwitterIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:backdrop-blur-none hover:bg-green-600 hover:text-white"/></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/iam.putraaaaaa/" target="_blank"><IgIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:backdrop-blur-none hover:bg-green-600 hover:text-white"/></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/muhammadnorsaputra" target="_blank"><FbIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:backdrop-blur-none hover:bg-green-600 hover:text-white"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
	)
}

export default HeroGradient