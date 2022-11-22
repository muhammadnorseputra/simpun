import Image from 'next/image'
import { GithubIcon, FigmaIcon, TwitterIcon, IgIcon, FbIcon, DownloadIcon } from '../icons'

function HeroGradient() {
	return (
		<section>
        <div className="bg-gradient-to-br from-green-100 via-amber-200 to-green-100 px-4 py-12 relative before:z-0 before:absolute before:inset-1 before:bg-white/45 before:backdrop-blur-xl overflow-hidden z-10">
          <div className="relative flex flex-col items-start justify-between space-y-8">
            <div>
              <div className="w-28 h-28 bg-white p-1 rounded-full ml-5 md:ml-10 overflow-hidden outline outline-2 outline-black outline-offset-2">
                <Image src="/mypic.png" width="300" height="300" layout="responsive"/>
              </div>
            </div>
            <div className="mx-5 md:mx-10">
              <h1 className="text-3xl tracking-normal font-bold">Hi, I am Putra</h1>
              <p className="tracking-wider font-bold py-2 text-green-700">Fullstack Web Developer &amp; Desainer</p>
              <p className="tracking-wider md:text-md leading-6"> Have experience in web developer since 2018. <br/>I have developed many web-apps using PHP native, CI Framework, Laravel Framework, Bootsrap, ReactJS, etc ... </p>
              <div className="flex items-end justify-start">
              <a href="#" className="px-3 py-2 text-sm mt-4 hover:shadow-lg hover:shadow-green-300 rounded-full bg-green-600 text-white inline-flex items-center justify-between gap-x-3 divide-x divide-green-500"><DownloadIcon className="w-6 h-6 text-green-400"/> <span className="pl-2">Download CV</span></a>
                <ul className="flex justify-between items-center gap-x-2 ml-2">
                  <li>
                    <a href="#"><GithubIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:shadow-lg"/></a>
                  </li>
                  <li>
                    <a href="#"><FigmaIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:shadow-lg"/></a>
                  </li>
                  <li>
                    <a href="#"><TwitterIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:shadow-lg"/></a>
                  </li>
                  <li>
                    <a href="#"><IgIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:shadow-lg"/></a>
                  </li>
                  <li>
                    <a href="#"><FbIcon className="w-10 h-10 text-black bg-white/30 backdrop-blur-sm p-2 rounded-full hover:shadow-lg"/></a>
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