import * as icon from '@/Utils/Icons/Icons';

export default function Contact_Container() {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center gap-9">
        {/*Header*/}
        <div className="w-[50%] flex flex-col justify-center items-center text-center gap-5 ">
           <h1 className="text-[#202435] text-[40px] font-[400]" style={{lineHeight:'48px'}}>Get In Touch</h1>
            <p className="text-[#202435] text-[14px] font-[400]  text-center w-full" style={{lineHeight:'24px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
        </div>
        {/*Contact*/}
        <div className="w-full flex justify-between items-center gap-6">
            {/*Map Contact*/}
            <div className='w-1/3 flex flex-col gap-9 justify-center p-7 rounded-2xl items-center bg-[#F3F3F6] border border-[#EDEEF5]'>
                <icon.FaLocationDot className='text-primary text-[36px]'/>
                <h2 className='text-[#202435] text-[15px] font-[500] '>102 Street 2714 Donovan</h2>
                <p className='text-[#202435] text-[13px] font-[400] '>Lorem ipsum dolar site amet discont</p>
            </div>
            <div className='w-1/3 flex flex-col gap-9 justify-center p-7 rounded-2xl items-center bg-[#F3F3F6] border border-[#EDEEF5]'>
                <icon.FiPhoneCall className='text-primary text-[36px]'/>
                <h2 className='text-[#202435] text-[15px] font-[500] '>+02 1234 567 88</h2>
                <p className='text-[#202435] text-[13px] font-[400] '>Lorem ipsum dolar site amet discont</p>
            </div>
            <div className='w-1/3 flex flex-col gap-9 justify-center p-7 rounded-2xl items-center bg-[#F3F3F6] border border-[#EDEEF5]'>
                <icon.MdOutlineLocalPostOffice className='text-primary text-[36px]'/>
                <h2 className='text-[#202435] text-[15px] font-[500] '>info@example.com</h2>
                <p className='text-[#202435] text-[13px] font-[400] '>Lorem ipsum dolar site amet discont</p>
            </div>
        </div>
        {/*Form Content*/}
        <div className='w-full flex flex-col justify-center items-center p-[40px] rounded-xl shadow-2xl shadow-[#000000]/8 border border-[#EDEEF5]'>
            {/*Send Us*/}
            <div className='w-[70%] flex flex-col justify-center items-center text-center p-7 border-b border-b-[#EDEEF5]'>
                <h2 className='text-[40px] font-[400]' style={{lineHeight:'48px'}}>Send Us</h2>
                <h5 className='text-[14px] font-[400]' style={{lineHeight:'24px'}}>Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.</h5>
            </div>
            {/*Contact Form*/}
            <form action="" className='w-[70%] flex flex-col justify-center py-8 items-center gap-5'>              
                {/*Name & Email*/}
                <div className='w-full flex justify-between items-center gap-5'>
                    {/*Name*/}
                    <div className='flex flex-col justify-start items-start w-full gap-3'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" className='p-2 bg-[#F3F4F7] rounded w-full'/>
                    </div>
                    {/*Email*/}
                    <div className='flex flex-col justify-start items-start w-full gap-3'>
                        <label htmlFor="">Email*</label>
                        <input type="email" name="" id="" className='p-2 bg-[#F3F4F7] rounded w-full'/>
                    </div>
                </div>
                {/**/}
                {/*Phone number*/}
                <div className='flex flex-col justify-start items-start w-full gap-3'>
                    <label htmlFor="">Phone number</label>
                    <input type="email" name="" id="" className='p-2 bg-[#F3F4F7] rounded w-full'/>
                </div>
                {/*Your message*/}
                <div className='flex flex-col justify-start items-start w-full gap-3'>
                    <label htmlFor="">Your message</label>
                    <textarea name="" id="" className='p-6 resize-none bg-[#F3F4F7] rounded w-full'></textarea>
                </div>
                {/*Submit Button*/}
                <button type='submit' className='p-3 px-6 bg-primary rounded cursor-pointer text-white mr-auto'>Send Message</button>
            </form>
        </div>
    </div>
  )
}
