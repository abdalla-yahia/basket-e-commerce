import Categories_List from "./Categories/Categories_List";

export default function Aside_Container() {
  return (
    <div className="w-1/3 flex flex-col justify-start items-start ">
      {/*Categories_List*/}
      <Categories_List />
    </div>
  )
}
