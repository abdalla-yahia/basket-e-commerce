import Aside_Section from "./Aside/Aside_Section";
import Blog_Section from "./Blog_Section";

export default function Blogs_Container() {
    return (
        <div className="w-[90%]  flex justify-between items-start gap-5">
            {/*Blog Container*/}
            <div className="w-[75%]">
                <Blog_Section />
            </div>
            {/*Aside Blog */}
            <div className="w-[20%]">
                <Aside_Section />
            </div>
        </div>
    )
}
