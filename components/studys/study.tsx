import { AcademicCapIcon } from '@heroicons/react/outline'
function Study() {
	return (
	<section id="studys">
        <div className="relative px-6 py-8 bg-slate-800 overflow-hidden">
          <AcademicCapIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-10 -rotate-45 absolute -right-20 -bottom-10"/>
          <h2 className="inline text-2xl font-bold text-slate-200 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-300 before:animate-pulse">Study</h2>
          <div className="flex flex-nowrap space-x-10 mt-4 overflow-y-hidden overflow-x-auto scrolling-touch pb-8">
            <div className="min-w-[300px] h-28 bg-gray-100 rounded-2xl relative group">
              <div className="px-4 pb-6 pt-3 overflow-hidden relative">
                <h3 className="font-bold text-slate-600 text-xl">S1 - Administration Public</h3>
                <p>STIA Amuntai</p>
                <p>2018 - 2021</p>
                <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-blue-600 fill-blue-300 opacity-10 -rotate-45 absolute -right-10 top-0"/>
              </div>
              <div className="w-[260px] sm:w-[270px] h-2 bg-white/80 absolute left-5 -bottom-2 rounded-b-2xl transition-all delay-900 duration-800 ease-out group-hover:-translate-y-2 group-hover:opacity-0" />
              <div className="w-[230px] sm:w-[240px] h-2 bg-white/40 absolute left-10 -bottom-4 rounded-b-2xl transition-all group-hover:-translate-y-4  group-hover:opacity-0" />
            </div>

            <div className="min-w-[300px] h-28 bg-gray-100 rounded-2xl relative group">
              <div className="px-4 pb-6 pt-3 overflow-hidden relative">
                <h3 className="font-bold text-slate-600 text-xl">SMK</h3>
                <p>SMK Negeri Batumadi</p>
                <p>2016 - 2018</p>
                <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-blue-600 fill-blue-300 opacity-10 -rotate-45 absolute -right-10 top-0"/>
              </div>
              <div className="w-[260px] sm:w-[270px] h-2 bg-white/80 absolute left-5 -bottom-2 rounded-b-2xl transition-all delay-900 duration-800 ease-out group-hover:-translate-y-2 group-hover:opacity-0" />
              <div className="w-[230px] sm:w-[240px] h-2 bg-white/40 absolute left-10 -bottom-4 rounded-b-2xl transition-all group-hover:-translate-y-4  group-hover:opacity-0" />
            </div>
            
            <div className="min-w-[300px] h-28 bg-gray-100 rounded-2xl relative group">
              <div className="px-4 pb-6 pt-3 overflow-hidden relative">
                <h3 className="font-bold text-slate-600 text-xl">SMP</h3>
                <p>SMP Negeri Batumadi</p>
                <p>2013 - 2016</p>
                <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-blue-600 fill-blue-300 opacity-10 -rotate-45 absolute -right-10 top-0"/>
              </div>
              <div className="w-[260px] sm:w-[270px] h-2 bg-white/80 absolute left-5 -bottom-2 rounded-b-2xl transition-all delay-900 duration-800 ease-out group-hover:-translate-y-2 group-hover:opacity-0" />
              <div className="w-[230px] sm:w-[240px] h-2 bg-white/40 absolute left-10 -bottom-4 rounded-b-2xl transition-all group-hover:-translate-y-4  group-hover:opacity-0" />
            </div>

            <div className="min-w-[300px] h-28 bg-gray-100 rounded-2xl relative group">
              <div className="px-4 pb-6 pt-3 overflow-hidden relative">
              <h3 className="font-bold text-slate-600 text-xl">SD</h3>
              <p>SD Negeri Banua Hanyar</p>
              <p>2006 - 2012</p>
                <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-blue-600 fill-blue-300 opacity-10 -rotate-45 absolute -right-10 top-0"/>
              </div>
              <div className="w-[260px] sm:w-[270px] h-2 bg-white/80 absolute left-5 -bottom-2 rounded-b-2xl transition-all delay-900 duration-800 ease-out group-hover:-translate-y-2 group-hover:opacity-0" />
              <div className="w-[230px] sm:w-[240px] h-2 bg-white/40 absolute left-10 -bottom-4 rounded-b-2xl transition-all group-hover:-translate-y-4  group-hover:opacity-0" />
            </div>
          </div>
        </div>
    </section>
	)
}

export default Study