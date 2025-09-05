'use client'
import Aside_Dashboard from "@/Components/Dashboards/Aside/Aside_Dashboard";
import { loggedUser } from "@/Feature/Actions/AuthActions";
import { getUserById } from "@/Feature/Actions/UsersActions";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useEffect } from "react";

export default function UsersLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const { LogedUser } = useAppSelector((state: RootState) => state.auth)
  
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loggedUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUserById(LogedUser?.user?.id as string))
  }, [LogedUser?.user?.id]);
  
  return (
    <section className="w-full flex justify-center items-center mt-[40px]">
      <div className="w-[90%] flex justify-between items-start gap-5">
        {/*Aside Buttons*/}
        <Aside_Dashboard role={'users'} />
        {/*Page Content*/}
        <div className="w-[80%] flex flex-col justify-start items-start  text-[#3E445A] font-[400] text-sm gap-0 border border-[#E4E5EE] p-4 rounded">
          {children}
        </div>
      </div>
    </section>
  );
}
