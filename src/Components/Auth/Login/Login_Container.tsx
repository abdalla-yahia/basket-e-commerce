'use client'
import { useActionState, useState } from "react"
import * as icon from '@/Utils/Icons/Icons';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/libs/store";
import { CreateUserValidation } from "@/Validation/UserValidation";
import { toast } from "react-toastify";
import { loginUser } from "@/Feature/Actions/AuthActions";
import { UserLogineInterface } from "@/Interfaces/UserInterface";
import { useRouter } from "next/navigation";

export default function Login_Container() {
    const {LogedUser,error,loading} = useSelector((state:RootState)=>state.auth)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [isShow,setIsShow] = useState(false)
    //Form Login 
    const UserLogin = (prevState:UserLogineInterface,formData:FormData):UserLogineInterface=>{
        const formState = {
            ...prevState,
            email:formData.get('UserEmail')  as string,
            password:formData.get('UserPassword') as string
        }
        //Check Validation 
        const PickData = CreateUserValidation?.pick({email:true,password:true})
        const Validation = PickData?.safeParse(formState)

        if(!Validation?.success){
            toast.warning(Validation?.error?.issues?.map(e=>e.message).join(', '))
            return formState;
        }
        // Dispatch Data
        dispatch(loginUser(Validation?.data))
        return formState
    }
    const InitalState ={
        email:'',
        password:''
    }
    const [,ActionState] = useActionState(UserLogin,InitalState)
    // //Redirect User To Homepage After Login
    // if(LogedUser?.user?.name){
    //     router?.replace('/')
    // }
  return ( 
    <div className='w-[50%] flex flex-col justify-center items-center'>
    {/*Main Title*/}
    <h1 className="text-4xl text-primary my-[20px] font-[700]">Login User</h1>
    <form action={ActionState}  className="w-[70%] p-4 shadow shadow-[#000000]/8 rounded flex flex-col justify-start items-start">
        {/*User Email*/}
        <div className="w-full rounded my-[15px]">
            <label className="" htmlFor="UserEmail">Email:</label>
            <input  type="email" name="UserEmail" id="UserEmail" placeholder="Email @" className="w-full mt-3 p-3 rounded border  border-[#DEDEDE] outline-none text-[#707070]"/>
        </div >
        {/*User Password*/}
        <label className="" htmlFor="UserPassword">Password:</label>
        <div className="w-full rounded flex justify-center items-center mt-3 p-3 border border-[#DEDEDE] text-[#707070] gap-2">
            {
            isShow ? (<icon.FaRegEye onClick={()=>setIsShow(!isShow)} className='text-xl cursor-pointer '/>):
            (<icon.FaRegEyeSlash onClick={()=>setIsShow(!isShow)} className='text-xl cursor-pointer '/>)
            }
            <input type={isShow ? 'text':'password' } name="UserPassword" id="UserPassword" placeholder="User Password" className="w-full h-full outline-none border-none "/>
        </div>
        {/*Submite Button*/}
        {
            LogedUser?.user?.name && <p className="text-green-500">User {LogedUser?.user?.name} logged in successfully</p>
        }
        {
            error && <p className="text-red-500">Failed to log in user</p>
        }
        <button type="submit" value="" className='bg-primary my-[15px] text-xl text-white cursor-pointer p-2 w-full rounded' >
            {loading ?
            (
                <>
                <div className="w-full flex justify-center items-center gap-2">
                        <icon.LuLoader className="h-4 w-4 animate-spin" />
                Logging in...
                </div>
                </>
            ) : 'Login' }
            </button>
    </form>
    {/* Account Links */}
        <div className="flex flex-col w-[70%] my-[15px] gap-3">
        <p className="text-[14px] text-black/50">
            Don’t have an account?{" "}
            <Link href="/register" className="text-red-500 hover:underline">
            Register here
            </Link>
        </p>
        <p className="text-[14px] text-black/50">
            Forgot your password?{" "}
            <Link href="/forget-password" className="text-red-500 hover:underline">
            Reset it here
            </Link>
        </p>
        </div>
    </div>
  )
}
