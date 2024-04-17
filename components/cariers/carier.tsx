import { ShareIcon } from "@heroicons/react/outline";

export default function Carier({carriers}: any) {
  return (
    <section id="cariers" className='overflow-x-hidden dark:border-b-8 dark:border-gray-900'>
      <div className="relative px-6 py-8 overflow-hidden bg-white dark:bg-slate-700 z-10">
        <h2 className="inline text-2xl font-bold text-slate-800 dark:text-white relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-800 before:animate-pulse">
          Carier
        </h2>
        <ShareIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-5 absolute -right-10 -bottom-10 rotate-45" />
        <ul className="my-8 ml-4 border-l-4 border-gray-200 space-y-8 relative after:absolute after:-bottom-10 after:-left-1 after:border-l-4 after:border-dashed after:h-8">
        {carriers.map((carrier: any) => (
          <li key={carrier.id} className="px-8 relative before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:-left-2 before:outline-8 before:outline-gray-200 dark:before:outline-gray-600 before:outline before:top-2 hover:before:bg-green-600">
            <strong>{carrier.title}</strong> <br /> {carrier.location}
            <br />
            {carrier.carrier_start} - {carrier.carrier_end}
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
}
