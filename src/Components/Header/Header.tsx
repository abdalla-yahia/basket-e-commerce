import Main_Nav_page from './MainNav/Main_Nav_page';
import Nav_Page from './Nav/Nav_Page';
import SearchBar_Page from './SearchBar/SearchBar_Page';

export default function Header() {
  return (
    <header className=" w-full h-[257.5px] flex flex-col justify-center items-center">
        {/*Top Header*/}
        <div className="w-full h-[36px] bg-primary flex justify-center items-center">
            <div className="w-[90%] flex justify-center items-center">
                <p className="text-white">Due to current circumstances, there may be slight delays in order processing</p>
            </div>
        </div>
        {/*NavBar*/}
        <Nav_Page />
        {/*Search Bar*/}
        <SearchBar_Page />
        {/*Main Nav*/}
        <Main_Nav_page />
    </header>
  )
}
