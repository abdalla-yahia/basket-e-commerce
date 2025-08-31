import Brands_Container from "@/Components/Brands/Brands_Container"

export default async function Brand_With_Id({params}:{params:Promise<{id:string}>}):Promise<React.ReactNode> {
    const {id} = await params
  return (
    <Brands_Container id={id}/>
  )
}
