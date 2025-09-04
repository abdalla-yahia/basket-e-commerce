import Filter_Title from "@/Components/Shop/Aside_Filter/Filter/Filter_Title";
import * as icon from '@/Utils/Icons/Icons';

export default function Social_Media({title}:{title:string}) {
  return (
    <div className="flex flex-col w-full ">
        {/*Title*/}
        <Filter_Title title={title} />
        {/*Content Section*/}
        <div className="w-full  flex flex-col justify-start items-start gap-1">
                {/*Facebook*/}
                <div className="w-full flex rounded justify-between md:justify-center items-center bg-[#3B5998] text-white p-2">
                    <icon.FaFacebookF className="text-white mr-auto"/>
                    <span className="uppercase w-[70%] md:w-[60%]">Facebook</span>
                </div>
                {/*Instagram*/}
                <div className="w-full flex rounded justify-between md:justify-center items-center bg-[#CC2366] text-white p-2">
                    <icon.IoLogoInstagram className="text-white mr-auto"/>
                    <span className="uppercase w-[70%] md:w-[60%]">Instagram</span>
                </div>
                {/*X*/}
                <div className="w-full flex rounded justify-between md:justify-center items-center bg-[#000000] text-white p-2">
                    <icon.BsTwitterX className="text-white mr-auto"/>
                    <span className="uppercase w-[70%] md:w-[60%]">X</span>
                </div>
                {/*Reddit*/}
                <div className="w-full flex rounded justify-between md:justify-center items-center bg-[#FF4500] text-white p-2">
                    <icon.IoLogoReddit className="text-white mr-auto"/>
                    <span className="uppercase w-[70%] md:w-[60%]">Reddit</span>
                </div>
                {/*Pinterest*/}
                <div className="w-full flex rounded justify-between md:justify-center items-center bg-[#E60023] text-white p-2">
                    <icon.FaPinterestP className="text-white mr-auto"/>
                    <span className="uppercase w-[70%] md:w-[60%]">Pinterest</span>
                </div>
            </div>
    </div>
  )
}
