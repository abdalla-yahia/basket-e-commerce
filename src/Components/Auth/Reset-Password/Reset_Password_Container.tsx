'use client'
import { useActionState, useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { CreateUserValidation } from "@/Validation/UserValidation";
import { toast } from "react-toastify";
import { resetPassword } from "@/Feature/Actions/AuthActions";
import { useRouter } from "next/navigation";
import { ResetPassword } from "@/Interfaces/UserInterface";
import * as icon from '@/Utils/Icons/Icons';

export default function Reset_Password_Container() {
    const [isShow, setIsShow] = useState(false)
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const { Reset_Password, error, loading } = useAppSelector((state: RootState) => state.auth)
    const dispatch = useAppDispatch()
    const router = useRouter()
    //Form Login 
    const UserLogin = (prevState: ResetPassword, formData: FormData): ResetPassword => {
        const formState = {
            ...prevState,
            password: formData.get('UserPassword') as string,
        }
        if (ConfirmPassword !== formState?.password) {
            toast.warn('Password Not Matches')
            return formState;
        }
        //Check Validation 
        const PickData = CreateUserValidation?.pick({ password: true })
        const Validation = PickData?.safeParse(formState)

        if (!Validation?.success) {
            toast.warning(Validation?.error?.issues?.map(e => e.message).join(', '))
            return formState;
        }
        // Dispatch Data
        dispatch(resetPassword(Validation?.data))
        return formState
    }
    const InitalState = {
        password: '',
    }
    const [, ActionState] = useActionState(UserLogin, InitalState)
    //Redirect User To Homepage After Login
    if (Reset_Password?.status === 201) {
        router?.replace('/login')
    }
    console.log(Reset_Password)
    return (
        <div className='w-[50%] flex flex-col justify-center items-center'>
            {/*Main Title*/}
            <h1 className="text-4xl text-primary my-[20px] font-[700]">Enter Your New Password</h1>
            <form action={ActionState} className="w-[70%] p-4 shadow shadow-[#000000]/8 rounded flex flex-col justify-start items-start">
                {/*User Password*/}
                <label className="" htmlFor="UserPassword">Password:</label>
                <div className="w-full rounded flex justify-center items-center my-3 p-3 border border-[#DEDEDE] text-[#707070] gap-2">
                    {
                        isShow ? (<icon.FaRegEye onClick={() => setIsShow(!isShow)} className='text-xl cursor-pointer ' />) :
                            (<icon.FaRegEyeSlash onClick={() => setIsShow(!isShow)} className='text-xl cursor-pointer ' />)
                    }
                    <input type={isShow ? 'text' : 'password'} name="UserPassword" id="UserPassword" placeholder="User Password" className="w-full h-full outline-none  border-none " />
                </div>
                {/*Confirm Password*/}
                <label className="" htmlFor="ConfirmPassword">Confirm Password:</label>
                <div className="w-full rounded flex justify-center items-center mt-3 p-3 border border-[#DEDEDE] text-[#707070] gap-2">
                    {
                        isShow ? (<icon.FaRegEye onClick={() => setIsShow(!isShow)} className='text-xl cursor-pointer ' />) :
                            (<icon.FaRegEyeSlash onClick={() => setIsShow(!isShow)} className='text-xl cursor-pointer ' />)
                    }
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type={isShow ? 'text' : 'password'} name="ConfirmPassword" id="ConfirmPassword" placeholder="ConfirmPassword" className="w-full h-full outline-none border-none " />
                </div>
                {/*Submite Button*/}
                {
                    error && <p className="text-red-500">Failed to log in user</p>
                }
                <button type="submit" value="" className='bg-primary my-[15px] text-lg text-white cursor-pointer p-2 w-full rounded' >
                    {loading ? (
                        <div className="w-full flex justify-center items-center gap-2">
                            <icon.LuLoader className="h-4 w-4 animate-spin" />
                            Reset Password...
                        </div>
                    ) : (
                        "Change Password"
                    )}
                </button>
            </form>

        </div>
    )
}
