import Products_Container from "@/Components/Categories/Products_Container"

export default async function Category_With_Id({ params }: { params: Promise<{ id: string }> }): Promise<React.ReactNode> {
  const { id } = await params
  return (
    <Products_Container id={id} />
  )
}
