import Categories_List from "./Categories_List";

export default function Aside_Container() {
  return (
    <aside className="w-full overflow-scroll scrollbar-none md:w-1/3  flex flex-col justify-start items-start ">
      {/*Categories_List*/}
      <Categories_List />
    </aside>
  )
}
