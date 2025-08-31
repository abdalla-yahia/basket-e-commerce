import Categories_Container from "@/Components/Categories/Categories_Container"

export default async function Category_With_Id({params}:{params:Promise<{id:string}>}):Promise<React.ReactNode> {
    const {id} = await params
  return (
    <Categories_Container id={id}/>
  )
}
