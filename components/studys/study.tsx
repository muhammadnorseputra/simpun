import { AcademicCapIcon } from '@heroicons/react/outline'


function Study({ studys }: any) {
	return (
	<section id="studys" className='overflow-x-hidden border-b-8 dark:border-b-0 border-gray-100'>
        <div className="relative px-6 py-8 dark:bg-black overflow-hidden">
          <AcademicCapIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-10 -rotate-45 absolute -right-20 -bottom-10"/>
          <h2 className="inline text-2xl font-bold text-slate-800 dark:text-white relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-800 before:animate-pulse">#Study</h2>
          <div className="flex flex-nowrap space-x-6 mt-4 overflow-y-hidden overflow-x-auto scrolling-touch pb-4">
            {studys.map((study:any) => (
            <div key={study.id} className="min-w-[300px] bg-green-50 rounded-2xl relative group border">
              <div className="px-4 pb-6 pt-3 overflow-hidden relative">
                <h3 className="font-bold text-green-600 text-xl">{study.tingkat} { study.jurusan ? '-':''} {study.jurusan}</h3>
                <p className="dark:text-green-900 text-gray-700 font-bold">{study.location}</p>
                <p className="dark:text-black text-gray-400">{study.year_start} - {study.year_end}</p>
                <AcademicCapIcon className="w-32 h-32 stroke-1 stroke-green-600 fill-green-300 opacity-10 -rotate-45 absolute -right-10 top-0"/>
              </div>
            </div>
            ))}
          </div>
        </div>
    </section>
	)
}

export default Study

