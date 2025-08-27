import Categories_List from "./Categories_List";
import CopyRights_Credit from "./CopyRights_Credit";
import Developer_Copy_Rights from "./Developer_Copy_Rights";
import Features_Section from "./Features_Section";
import News_Letter_Section from "./News_Letter_Section";
import Social_Media from "./Social_Media";

export default function Footer() {
  return (
    <footer className="w-full mt-[50px]">
      {/*News Letter Section*/}
        <News_Letter_Section />
        {/*List Features*/}
        <Features_Section />
        {/*List Of Categories*/}
        <Categories_List />
        {/*Contact On Social Media*/}
        <Social_Media />
        {/*CopyRight And Credit Card*/}
        <CopyRights_Credit />
        {/*Developer_Copy_Rights*/}
        <Developer_Copy_Rights />
    </footer>
  )
}
