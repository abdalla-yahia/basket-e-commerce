'use client';
import Main_Nav_Container from './Main_Nav_Section/Main_Nav_Container';
import SubNav_Container from './Sub_Nav_Section/SubNav_Container';
import SearchBar_Container from './Search_Section/SearchBar_Container';
import { useEffect, useState } from 'react';
import { getProductsBySearchText } from '@/Feature/Actions/ProductsActions';
import { useAppDispatch } from '@/libs/store';

export default function Header() {
    const [pageNumber,setPageNumber] =useState(1)
    const [searchText,setSearchText] = useState('')
  const dispatch = useAppDispatch();

   const query ={
    pageNumber,
    searchText
  }
  //Get Products By Search Text
    useEffect(()=>{
      dispatch(getProductsBySearchText(query as {pageNumber:number,searchText:string}))
    },[dispatch,pageNumber,searchText])
    
  return (
    <header className=" w-full h-[257.5px]  flex flex-col justify-center items-center">
        {/*Top Header*/}
        <div className="w-full h-[36px] bg-primary flex justify-center items-center">
            <div className="w-[90%] flex justify-center items-center">
                <p className="text-white">Due to current circumstances, there may be slight delays in order processing</p>
            </div>
        </div>
        {/*NavBar*/}
        <SubNav_Container />
        {/*Search Bar*/}
        <SearchBar_Container setSearchText={setSearchText}/>
        {/*Main Nav*/}
        <Main_Nav_Container/>
    </header>
  )
}
