'use client'
import { useActionState } from "react"
import { RootState, useAppDispatch,useAppSelector } from "@/libs/store";
import { CreateUserValidation } from "@/Validation/UserValidation";
import { toast } from "react-toastify";
import { forgetPassword } from "@/Feature/Actions/AuthActions";
import { useRouter } from "next/navigation";
import { ForgetPassword } from "@/Interfaces/UserInterface";

export default function Forget_Password_Container() {
    const { forget_Password, error, loading } = useAppSelector((state: RootState) => state.auth)
    const dispatch = useAppDispatch()
    const router = useRouter()
    //Form Login 
    const UserLogin = (prevState: ForgetPassword, formData: FormData): ForgetPassword => {
        const formState = {
            ...prevState,
            email: formData.get('UserEmail') as string,
        }
        //Check Validation 
        const PickData = CreateUserValidation?.pick({ email: true })
        const Validation = PickData?.safeParse(formState)

        if (!Validation?.success) {
            toast.warning(Validation?.error?.issues?.map(e => e.message).join(', '))
            return formState;
        }
        // Dispatch Data
        dispatch(forgetPassword(Validation?.data))
        return formState
    }
    const InitalState = {
        email: '',
    }
    const [, ActionState] = useActionState(UserLogin, InitalState)
    //Redirect User To Homepage After Login
    if (forget_Password?.status === 200) {
        router?.replace('/verify-code')
    }
    return (
        <div className='w-full md:w-[50%] flex flex-col justify-center items-center'>
            {/*Main Title*/}
            <h1 className="text-4xl text-primary my-[20px] font-[700]">Enter Your Email</h1>
            <form action={ActionState} className="w-[70%] p-4 shadow shadow-[#000000]/8 rounded flex flex-col justify-start items-start">
                {/*User Email*/}
                <div className="w-full rounded my-[15px]">
                    <label className="" htmlFor="UserEmail">Email:</label>
                    <input type="email" name="UserEmail" id="UserEmail" placeholder="Email @" className="w-full mt-3 p-3 rounded border  border-[#DEDEDE] outline-none text-[#707070]" />
                </div >

                {/*Submite Button*/}
                {
                    error && <p className="text-red-500">Failed to log in user</p>
                }
                <button type="submit" value="" className='bg-primary my-[15px] text-lg text-white cursor-pointer p-2 w-full rounded' >
                    {loading ? 'Sending Code...' : 'Submit Email'}
                </button>
            </form>

        </div>
    )
}
