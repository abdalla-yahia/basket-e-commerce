
import Posts from "./Posts";
import Social_Media from "./Social_Media";
import Tags_Section from "./Tags_Section";
import Widget_Banner from "./Widget_Banner";

export default function Aside_Section() {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-4">
            {/*Posts*/}
            <Posts title="Recent Posts"/>
            {/*Social Media*/}
            <Social_Media title="Social Media" />
            {/*Widget Banner*/}
            <Widget_Banner title="Widget Banner"/>
            {/*Tags*/}
            <Tags_Section title="tags"/>
        </div>
    )
}
