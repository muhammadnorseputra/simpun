import Layouts from "@/components/layouts";
import type { NextPage } from "next";
import Image from "next/image";
import Maintenance from '../public/maintenance.png'

const Certificates: NextPage = () => {
  return (
  <Layouts>
    <div className="flex flex-1 flex-col items-center justify-center h-screen">
        <Image src={Maintenance} width={400} height={240} alt="maintenance featured"/>
        <h3 className="text-black dark:text-white font-bold text-xl">"Certificates" UNDER MAINTENANCE</h3>
    </div>
  </Layouts>
  );
};

export default Certificates;
