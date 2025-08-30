import Image from "next/image";
import * as icon from '@/Utils/Icons/Icons';
import Edit_Product_Form from "./Form_Edit_Product"
import swal from 'sweetalert';
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { useState } from "react";
import { useAppDispatch } from "@/libs/store";
import { deleteProduct } from "@/Feature/Actions/ProductsActions";

export default function Product_content({product}:{product:UpdateProduct}) {
      const [isToggle,setIsToggle] = useState(false)
        const dispatch = useAppDispatch()
      
      //Delete Product Handler By Slug
  const DeleteHandler =(slug:string)=>{
      swal({
        title: "Are you sure you want to delete this product?",
        text: "Once you delete this product, you cannot recover its information!",
        icon: "warning",
        dangerMode: true,
        buttons: ["Cancel", "Delete"]
      })
      .then((willDelete) => {
        dispatch(deleteProduct(slug as string));
        if (willDelete) {
          swal("Product deleted successfully!", {
            icon: "success",
          });
          window.location.reload();
        } else {
          swal("The product is safe and was not deleted!");
        }
      });
  }
  return (
    <tr key={product?.id}>
        <td className="p-2 border border-[#E4E5EE] ">
        <Image src={product?.image as string} alt={product?.title as string} width={40} height={0}/>
        </td>
        <td className="p-2 border border-[#E4E5EE]">{product?.title}</td>
        <td className="p-2 border border-[#E4E5EE]">{product?.description}</td>
        <td className="p-2 border border-[#E4E5EE]">{product?.category?.title}</td>
        <td className="p-2 border border-[#E4E5EE]">{product?.brand?.title}</td>
        <td className="p-2 border border-[#E4E5EE]">{product?.quantity}</td>
        <td className="p-2 border border-[#E4E5EE]">
        <div className="w-full flex justify-between items-center px-2">
            {/*Edit Product Form*/}
            {
            isToggle && (<Edit_Product_Form product={product} setIsToggle={setIsToggle}/>)
            }
        {/*Toggle Form Edit*/}
        <icon.FaRegEdit onClick={()=>setIsToggle(!isToggle)} title="Edit" className="text-green-500 cursor-pointer" />
        {/*Delete Product Button*/}
        <icon.FaTrash onClick={()=>DeleteHandler(product?.slug as string)} title="Delete" className="text-red-500 cursor-pointer" />
        </div>
    </td>
</tr>
  )
}
