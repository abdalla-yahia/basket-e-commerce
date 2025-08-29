import Aside_Dashboard from "../Aside/Aside_Dashboard";

export default function Admins_Dashboard_Container() {
  return (
      <div className="w-[90%] flex justify-between items-start gap-5">
        {/*Aside Buttons*/}
           <Aside_Dashboard role={'admins'}/>
        {/*Page Content*/}
        <div className="w-[80%] flex flex-col justify-start items-start">
          content
        </div>
      </div>
  )
}
