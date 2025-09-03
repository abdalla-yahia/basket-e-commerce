import Products_Container from "@/Components/Brands/Products_Container"

export default async function Brand_With_Id({ params }: { params: Promise<{ id: string }> }): Promise<React.ReactNode> {
  const { id } = await params
  return (
    <Products_Container id={id} />
  )
}
