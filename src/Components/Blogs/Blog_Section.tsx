import Pagination from "@/Utils/Pagination";
import Blog_Content from "./Blog_Content";

export default function Blog_Section() {
  return (
    <div className="flex flex-col justify-start items-center gap-3">
        {/*Blog Section*/}
        <Blog_Content img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756336045/blog_2_cew0ue.png'} category={'Grocery'} title={'But I must explain to you how all this mistaken idea'} date={'Jan 13 2025'} auther={'Sinan ISIK'} description={'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...'} />
        <Blog_Content img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756336041/blog_3_nzkzht.png'} category={'Grocery'} title={'The Problem With Typefaces on the Web'} date={'Jan 13 2025'} auther={'Sinan ISIK'} description={'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...'} />
        {/*Pagination*/}
        <Pagination />
    </div>
  )
}
