import Categories_Dropdown from "./Categories_Dropdown";
import Main_NavBar from "./Main_NavBar";

export default function Main_Nav_page() {
  return (
    <div className='h-[92.5px] w-full flex justify-center items-center border-b-[0.5px] border-[#E3E4E6]'>
        <div className="w-[90%]  h-[92.5px] flex justify-between items-center ">
            {/*Select Category*/}
            <Categories_Dropdown />
            {/*Main Nav*/}
            <Main_NavBar />
        </div>
    </div>
  )
}
