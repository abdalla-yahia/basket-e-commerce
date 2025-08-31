import Link from 'next/link'
import * as icons from '@/Utils/Icons/Icons';
import dashboardIcons from '@/db/Icons-Dashboards.json'
import Dashboard_Icon from './Dashboard_Icon';

export default function Aside_Dashboard({role}:{role:string}) {
  return (
    <aside className="w-[15%]  flex flex-col justify-start items-start rounded   text-[#3E445A] font-[400] text-sm gap-0 border border-[#E4E5EE]">
          {
            role === 'users' ? (dashboardIcons?.users?.map(icon=>
              <Link key={icon?.id} href={icon?.href} className='w-full hover:bg-primary hover:text-white duration-100 cursor-pointer p-3  flex justify-between items-start gap-3'>
                    {icon?.title}
                    <Dashboard_Icon icon={icon?.icon as keyof typeof icons}/>
                </Link>
            )):

             role === 'admins' ? (dashboardIcons?.admins?.map(icon=>
                <Link key={icon?.id} href={icon?.href} className='w-full hover:bg-primary hover:text-white duration-100 cursor-pointer p-3  flex justify-between items-start gap-3'>
                    {icon?.title}
                    <Dashboard_Icon icon={icon?.icon as keyof typeof icons}/>
                </Link>
            )) :''
          }
        </aside>
  )
}
