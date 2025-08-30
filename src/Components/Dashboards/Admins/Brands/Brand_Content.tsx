'use client'
import * as icon from '@/Utils/Icons/Icons';
import swal from 'sweetalert';
import Edit_Brand_Form from "./Form_Edit_Brand"
import Image from "next/image"
import { useAppDispatch } from '@/libs/store';
import { UpdateBrand } from '@/Interfaces/BrandInterface';
import { deleteBrand } from '@/Feature/Actions/BrandsActions';
import { useState } from 'react';

export default function Brand_Content({brand}:{brand:UpdateBrand}) {
      const [isToggle,setIsToggle] = useState(false)

      const dispatch = useAppDispatch()
    
      //Delete Brand Handler By Id
      const DeleteHandler =(id:string)=>{
          swal({
            title: "Are you sure you want to delete this Brand?",
            text: "Once you delete this Brand, you cannot recover its information!",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Delete"]
          })
          .then((willDelete) => {
            dispatch(deleteBrand(id as string));
            if (willDelete) {
              swal("Brand deleted successfully!", {
                icon: "success",
              });
              window.location.reload();
            } else {
              swal("The Brand is safe and was not deleted!");
            }
          });
      }
  return (
     <tr key={brand?.id}>
        <td className="p-2 border border-[#E4E5EE]">
          <Image src={brand?.image as string} alt={brand?.title as string} width={40} height={40}/>
          </td>
        <td className="p-2 border border-[#E4E5EE]">{brand?.title}</td>
        <td className="p-2 border border-[#E4E5EE]">{brand?.description}</td>
        <td className="p-2 border border-[#E4E5EE]">
          <div className="w-full flex justify-between items-center px-2">
              {/*Edit Brand Form*/}
              {
                isToggle && (<Edit_Brand_Form brand={brand} setIsToggle={setIsToggle}/>)
              }
              {/*Toggle Form Edit*/}
              <icon.FaRegEdit onClick={()=>setIsToggle(!isToggle)} title="Edit" className="text-green-500 cursor-pointer" />
              {/*Delete Brand Button*/}
              <icon.FaTrash onClick={()=>DeleteHandler(brand?.id as string)} title="Delete" className="text-red-500 cursor-pointer" />
            </div>
        </td>
      </tr>
  )
}
