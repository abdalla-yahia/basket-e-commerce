'use client'
import Link from "next/link";
import { useActionState, useState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { CreateUser } from "@/Interfaces/UserInterface";
import { CreateUserValidation } from "@/Validation/UserValidation";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/libs/store";
import { createUser } from "@/Feature/Actions/UsersActions";
import { useRouter } from "next/navigation";

export default function Register_Container() {
    const [isShow,setIsShow] = useState(false)
    const [checkPasswordValid,setCheckPasswordValid]=useState('')
    const [ConfirmPassword,setConfirmPassword] = useState('')
    const {user,error,loading} = useSelector((state:RootState)=>state.user)
    const dispatch = useAppDispatch()
    const router = useRouter()
    //Form Handller Function
    const RegisterNewUser = (prevState:CreateUser,formData:FormData):CreateUser=>{
        const FormState = {
            ...prevState,
            name:formData.get('UserName') as string,
            email:formData.get('UserEmail') as string,
            password:formData.get('UserPassword') as string,
            address:formData.get('UserAddress') as string,
            phone:formData.get('UserPhone') as string,
            gender:formData.get('UserGender') as string || undefined
        }
        //Check Validation Of Data 
        const Validation =  CreateUserValidation.safeParse(FormState)
        if(!Validation?.success){
            toast.warning(Validation?.error?.issues?.map(e=>e.message).join(', '))
            return FormState as CreateUser;
        }
        //Check Matches Password
        if(ConfirmPassword !== FormState?.password){
            toast.warn('Password Not Matches')
            return FormState as CreateUser;
        }
        //Dispatch Data
        dispatch(createUser(Validation?.data))
        return FormState as CreateUser
    }
    //Initial State
    const InitialState ={
        name:'',
        email:'',
        password:'',
        address:'',
        phone:'',
        gender:undefined
    }
    const [,ActionForm] = useActionState(RegisterNewUser,InitialState)
    //Redirect User To Login Page
    if(user?.user?.name){
        router.replace('/login')
    }
  return (
    <div className='w-[50%] flex flex-col justify-center items-center'>
    {/*Main Title*/}
    <h1 className="text-4xl text-primary my-[20px] font-[700]">New User</h1>
    <form action={ActionForm}  className="w-[70%] p-4 shadow shadow-[#000000]/8 rounded flex flex-col justify-start items-start">
        {/*User Name*/}
        <div className="w-full rounded my-[15px]">
            <label className="" htmlFor="UserName">Name:</label>
            <input  type="text" name="UserName" id="UserName" placeholder="User Name" className="w-full mt-3 p-3 rounded border  border-[#DEDEDE] outline-none text-[#707070]"/>
        </div >
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
            <input onChange={(e)=>setCheckPasswordValid(e.target.value)} type={isShow ? 'text':'password' } name="UserPassword" id="UserPassword" placeholder="User Password" className="w-full h-full outline-none border-none "/>
        </div>
            {/*Check Valid Rols Password*/}
                <ul className="flex flex-col my-2">
                    <li className={`${/[A-Z]/.test(checkPasswordValid)?'text-green-500':'text-gray-500'} text-[10px] flex justify-start items-center`}> {/[A-Z]/.test(checkPasswordValid) && <icon.IoMdCheckmark className='text-green-500 text-[10px]'/>} Password Must Contain  Minimum 1 Capital Letter</li>
                    <li className={`${/[a-z]/.test(checkPasswordValid)?'text-green-500':'text-gray-500'} text-[10px] flex justify-start items-center`}> {/[a-z]/.test(checkPasswordValid) && <icon.IoMdCheckmark className='text-green-500 text-[10px]'/>} Password Must Contain  Minimum 1 Small Letter</li>
                    <li className={`${/[0-9]/.test(checkPasswordValid)?'text-green-500':'text-gray-500'} text-[10px] flex justify-start items-center`}> {/[0-9]/.test(checkPasswordValid) && <icon.IoMdCheckmark className='text-green-500 text-[10px]'/>} Password Must Contain  Minimum 1 Number</li>
                    <li className={`${checkPasswordValid?.length >= 8 ?'text-green-500':'text-gray-500'} text-[10px] flex justify-start items-center`}> {checkPasswordValid?.length >= 8  && <icon.IoMdCheckmark className='text-green-500 text-[10px]'/>} Password Length Must Equal Or Great Than 8 Leeters</li>
                </ul>
        <p></p>
        {/*Confirm Password*/}
        <label className="mt-3" htmlFor="ConfirmPassword">Confirm Password:</label>
        <div className="w-full rounded flex justify-center items-center mt-3 p-3 border border-[#DEDEDE] text-[#707070] gap-2">
            {
            isShow ? (<icon.FaRegEye onClick={()=>setIsShow(!isShow)} className='text-xl cursor-pointer '/>):
            (<icon.FaRegEyeSlash onClick={()=>setIsShow(!isShow)} className='text-xl cursor-pointer '/>)
            }
            <input onChange={(e)=>setConfirmPassword(e.target.value)} type={isShow ? 'text':'password' } name="ConfirmPassword" id="ConfirmPassword" placeholder="ConfirmPassword" className="w-full h-full outline-none border-none "/>
        </div>
         {/*User Phone*/}
          <div className='w-full rounded my-[15px]'>
              <label htmlFor="UserPhone">User Phone:</label>
              <input type="phone" name="UserPhone" id="UserPhone" placeholder="Phone" className='w-full mt-3 p-3 rounded border  border-[#DEDEDE] outline-none text-[#707070]'/>
          </div>
        {/*User Address*/}
        <div className="w-full rounded my-[15px]">
            <label className="" htmlFor="UserAddress">Address:</label>
            <input  type="text" name="UserAddress" id="UserAddress" placeholder="Address" className="w-full mt-3 p-3 rounded border  border-[#DEDEDE] outline-none text-[#707070]"/>
        </div >
        {/*User Gender*/}
        <label className="" htmlFor="UserGender">Gender:</label>
        <div className="w-full my-[15px] flex justify-start items-center rounded border  border-[#DEDEDE]">
            <select name="UserGender" defaultValue='' id="UserGender" className="w-full mt-3 px-3 py-2 outline-none text-[#707070]">
                <option value='' disabled>Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMAL">FeMale</option>
            </select>
        </div >
        {/*State Of Action*/}
        {
            user?.user?.name && <p className="text-green-500">Create User Successfully ✓</p>
        }
        {
            error && <p className="text-red-500">Faild To Create User  &#88; {error}</p>
        }
        {/*Submite Button*/}
        <button type="submit" value="" className='bg-primary my-[15px] text-xl text-white cursor-pointer p-2 w-full rounded' >
            {loading ?(
                <>
                <div className="w-full flex justify-center items-center gap-2">
                        <icon.LuLoader className="h-4 w-4 animate-spin" />
                Saving...
                </div>
                </>
            ) 
            
            :'Save'}
        </button>
    </form>
    {/* Account Links */}
        <div className="flex flex-col w-[70%] my-[15px] gap-3">
        <p className="text-[14px] text-black/50">
            Have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
            Login here
            </Link>
        </p>
        </div>
    </div>
  )
}
