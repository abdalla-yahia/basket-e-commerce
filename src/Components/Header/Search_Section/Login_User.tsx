'use client'
import { loggedUser, logoutUser } from '@/Feature/Actions/AuthActions';
import { RootState, useAppDispatch } from '@/libs/store';
import * as icon from '@/Utils/Icons/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Login_User() {
    const {LogedUser} = useSelector((state:RootState)=>state.auth)
    const dispatch = useAppDispatch()
    const router= useRouter()
    //Get Loged in User After Loading Page
    useEffect(()=>{
        dispatch(loggedUser())
    },[])

    //Logout User Handller
    const LogoutUserHandller =()=>{
        dispatch(logoutUser())
        router.replace('/')
        
    }
    return (
        <div className="login-icon cursor-pointer">
            {/*Icon*/}
            {
                LogedUser?.user?.name ?
                (
                    <div className='flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={LogedUser?.user?.image || 'https://static.vecteezy.com/system/resources/previews/060/423/145/non_2x/business-avatar-icon-with-a-simple-clean-design-featuring-a-man-in-a-suit-suitable-for-online-profiles-or-websites-free-png.png'} alt='user-image' width={50} height={50}/>
                        <span>{LogedUser?.user?.name.split(' ')[0]}</span>
                        <button onClick={()=>LogoutUserHandller()}  className='p-1 bg-primary text-white rounded'>Logout</button>

                    </div>
                    <Link className='flex flex-col justify-center items-center gap-1' href={LogedUser?.user?.role === 'ADMIN'?'/dashboard/admins':'/dashboard/users'}>
                        <icon.CiSettings className='text-[15px]' />
                        <span className='uppercase text-[10px] text-center w-[50%]'>{LogedUser?.user?.role === 'ADMIN' ? 'Admin ':'User '} dashboard</span>
                    </Link>
                    </div>

                )
                :
            <Link href={'/login'} className='cursor-pointer'>
                <icon.IoPersonCircleOutline className='text-[30px] text-primary'/>
            </Link>
            }
        </div>
    )
}
