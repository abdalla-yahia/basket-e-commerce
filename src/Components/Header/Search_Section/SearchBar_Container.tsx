import Cart from './Cart'
import Login_User from './Login_User'
import Logo from './Logo'
import Search_Input from './Search_Input'

export default function SearchBar_Container() {
  return (
    <div className='h-[50px] md:h-[92.5px] w-full flex justify-center items-center'>
      <div className='w-[90%]  h-[92.5px] flex-wrap flex justify-between items-center gap-2 mt-[30px]'>
        {/*Logo*/}
        <Logo />
        {/*Search Input*/}
        <Search_Input />
        <div className=' w-[70%] md:w-fit flex gap-1 justify-center items-center'>
          {/*Login User*/}
          <Login_User />
          {/*Cart*/}
          <Cart />
        </div>
      </div>
    </div>
  )
}
