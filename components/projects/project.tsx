import { CollectionIcon } from "@heroicons/react/outline";

export default function Project() {
  return (
    <section id="projects">
      <div className="relative px-6 py-8 min-h-[300px] bg-white shadow-t-2xl -mt-5 rounded-t-2xl rounded-b-2xl overflow-hidden z-10">
        <CollectionIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-5 absolute -right-20 -bottom-10" />
        <h2 className="inline text-2xl font-bold text-slate-800 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-800 before:animate-pulse">
          Project
        </h2>
      </div>
    </section>
  );
}
