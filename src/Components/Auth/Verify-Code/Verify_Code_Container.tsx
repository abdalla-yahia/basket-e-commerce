'use client'
import { useActionState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useRouter } from "next/navigation";
import { VerifyCode } from "@/Interfaces/UserInterface";
import { verifyCode } from "@/Feature/Actions/AuthActions";

export default function Verify_Code_Container() {
    const { Verify_code, error, loading } = useAppSelector((state: RootState) => state.auth)
    const dispatch = useAppDispatch()
    const router = useRouter()
    //Form Login 
    const UserLogin = (prevState: VerifyCode, formData: FormData): VerifyCode => {
        const formState = {
            ...prevState,
            code: formData.get('Code') as string,
        }

        // Dispatch Data
        dispatch(verifyCode(formState))
        return formState
    }
    const InitalState = {
        code: '',
    }
    const [, ActionState] = useActionState(UserLogin, InitalState)
    //Redirect User To Homepage After Login
    if (Verify_code?.status === 200) {
        router?.replace('/reset-password')
    }
    console.log(Verify_code)
    return (
        <div className='w-full md:w-[50%] flex flex-col justify-center items-center'>
            {/*Main Title*/}
            <h1 className="text-4xl text-primary my-[20px] font-[700]">Enter Your Code</h1>
            <form action={ActionState} className="w-[70%] p-4 shadow shadow-[#000000]/8 rounded flex flex-col justify-start items-start">
                {/*Code*/}
                <div className="w-full rounded my-[15px]">
                    <label className="" htmlFor="UserEmail">Code:</label>
                    <input type="text" name="Code" id="UserEmail" placeholder="Code Verify" className="w-full mt-3 p-3 rounded border  border-[#DEDEDE] outline-none text-[#707070]" />
                </div >

                {/*Submite Button*/}
                {
                    error && <p className="text-red-500">Failed to USe Code</p>
                }
                <button type="submit" value="" className='bg-primary my-[15px] text-lg text-white cursor-pointer p-2 w-full rounded' >
                    {loading ? 'Check Code...' : 'Submit Code'}
                </button>
            </form>

        </div>
    )
}
