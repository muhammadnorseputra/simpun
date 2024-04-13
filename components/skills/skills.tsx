import {
    ColorSwatchIcon,
  } from "@heroicons/react/outline";
import { Skill } from "../icons/brand";

export function SkillItem({icon, title}: any) {
  return (
    <div className="min-w-[220px] h-[220px] sm:min-w-[120px] sm:h-[120px] rounded-2xl bg-white dark:bg-slate-900 dark:border-slate-800 dark:border flex items-center justify-center relative overflow-hidden">
      {icon}
      <div className="absolute bottom-0 left-0 bg-black/50 text-white text-center w-full">{title}</div>
    </div>
  )
}

export default function Skills() {
    return (
        <section id="skills"  className='overflow-x-hidden'>
          <div className="relative px-6 py-12 bg-gray-100 dark:bg-slate-700 overflow-hidden -mt-5" data-aos="fade-in" data-aos-delay="150" data-aos-anchor-placement="top">
            <ColorSwatchIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-5 absolute -left-10 -bottom-10" />
            <h2 className="inline text-2xl font-bold text-gray-800 dark:text-white relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-gray-800 before:animate-pulse">
              Skill
            </h2>
            <div className="flex flex-nowrap sm:flex-wrap sm:justify-between sm:items-center  justify-evenly overflow-y-hidden overflow-x-auto scrolling-touch gap-y-3 gap-x-3 mt-8">
              <SkillItem icon={<Skill type="boostrap" />} title="bootsrap"/>
              <SkillItem icon={<Skill type="codeigniter" />} title="codeigniter"/>
              <SkillItem icon={<Skill type="cpanel" />} title="cpanel"/>
              <SkillItem icon={<Skill type="css3" />} title="css3"/>
              <SkillItem icon={<Skill type="figma" />} title="figma"/>
              <SkillItem icon={<Skill type="firebase" />} title="firebase"/>
              <SkillItem icon={<Skill type="html" />} title="html5"/>
              <SkillItem icon={<Skill type="javascript" />} title="javascript"/>
              <SkillItem icon={<Skill type="jquery" />} title="jquery"/>
              <SkillItem icon={<Skill type="laravel" />} title="laravel"/>
              <SkillItem icon={<Skill type="mysql" />} title="mysql"/>
              <SkillItem icon={<Skill type="photoshop" />} title="photoshop"/>
              <SkillItem icon={<Skill type="php" />} title="php"/>
              <SkillItem icon={<Skill type="sass" />} title="sass"/>
              <SkillItem icon={<Skill type="vscode" />} title="vscode"/>
              <SkillItem icon={<Skill type="xampp" />} title="xampp"/>
              <SkillItem icon={<Skill type="nextjs" />} title="nextjs"/>
              <SkillItem icon={<Skill type="reactjs" />} title="reactjs"/>
              <SkillItem icon={<Skill type="tailwindcss" />} title="tailwindcss"/>
            </div>
          </div>
        </section>
    )
}