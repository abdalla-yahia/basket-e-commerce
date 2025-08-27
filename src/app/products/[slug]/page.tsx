import Product_details_Container from "@/Components/Products/Product_Details/Product_details_Container";

export default async function Product_Details_Page({params}:{params:Promise<{slug:string}>}):Promise<React.ReactNode> {
    const {slug} = await params;
    return (
    <Product_details_Container slug={slug} />
  )
}
