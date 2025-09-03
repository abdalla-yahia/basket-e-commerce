'use client';
import Main_Nav_Container from './Main_Nav_Section/Main_Nav_Container';
import SubNav_Container from './Sub_Nav_Section/SubNav_Container';
import SearchBar_Container from './Search_Section/SearchBar_Container';

export default function Header() {

  return (
    <header className=" w-full h-[257.5px] flex flex-col justify-center items-center">
        {/*Top Header*/}
        <div className="w-full h-[36px] bg-primary flex justify-center items-center">
            <div className="w-[90%] flex justify-center items-center text-center">
                <p className="text-white">Due to current circumstances, there may be slight delays in order processing</p>
            </div>
        </div>
        {/*NavBar*/}
        <SubNav_Container />
        {/*Search Bar*/}
        <SearchBar_Container />
        {/*Main Nav*/}
        <Main_Nav_Container/>
    </header>
  )
}
