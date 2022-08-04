import {
    ColorSwatchIcon,
  } from "@heroicons/react/outline";
import { Skill } from "../../components/icons/skills";

export default function Skills() {
    return (
        <section id="skills">
          <div className="relative px-6 py-12 bg-green-500 overflow-hidden -mt-5">
            <ColorSwatchIcon className="w-64 h-64 stroke-1 stroke-slate-600 fill-slate-300 opacity-5 absolute -left-10 -bottom-10" />
            <h2 className="inline text-2xl font-bold text-green-800 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-green-800 before:animate-pulse">
              Skill
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-6 mt-8">
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="boostrap" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="codeigniter" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="cpanel" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="css3" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="figma" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="firebase" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="html" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="javascript" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="jquery" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="laravel" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="mysql" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="photoshop" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="php" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="sass" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="vscode" />
              </span>
              <span className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <Skill type="xampp" />
              </span>
            </div>
          </div>
        </section>
    )
}