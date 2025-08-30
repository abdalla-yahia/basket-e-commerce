'use client'
import * as icon from '@/Utils/Icons/Icons';
import swal from 'sweetalert';
import Edit_Category_Form from "./Form_Edit_Category"
import Image from "next/image"
import { useAppDispatch } from '@/libs/store';
import { UpdateCategory } from '@/Interfaces/CategoryInterface';
import { deleteCategory } from '@/Feature/Actions/CategoriesActions';
import { useState } from 'react';

export default function Category_Content({Category}:{Category:UpdateCategory}) {
      const [isToggle,setIsToggle] = useState(false)

      const dispatch = useAppDispatch()
    
      //Delete Category Handler By Id
      const DeleteHandler =(id:string)=>{
          swal({
            title: "Are you sure you want to delete this Category?",
            text: "Once you delete this Category, you cannot recover its information!",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Delete"]
          })
          .then((willDelete) => {
            dispatch(deleteCategory(id as string));
            if (willDelete) {
              swal("Category deleted successfully!", {
                icon: "success",
              });
              window.location.reload();
            } else {
              swal("The Category is safe and was not deleted!");
            }
          });
      }
  return (
     <tr key={Category?.id}>
        <td className="p-2 border border-[#E4E5EE]">
          <Image src={Category?.image as string} alt={Category?.title as string} width={40} height={40}/>
          </td>
        <td className="p-2 border border-[#E4E5EE]">{Category?.title}</td>
        <td className="p-2 border border-[#E4E5EE]">{Category?.description}</td>
        <td className="p-2 border border-[#E4E5EE]">
          <div className="w-full flex justify-between items-center px-2">
              {/*Edit Category Form*/}
              {
                isToggle && (<Edit_Category_Form Category={Category} setIsToggle={setIsToggle}/>)
              }
              {/*Toggle Form Edit*/}
              <icon.FaRegEdit onClick={()=>setIsToggle(!isToggle)} title="Edit" className="text-green-500 cursor-pointer" />
              {/*Delete Category Button*/}
              <icon.FaTrash onClick={()=>DeleteHandler(Category?.id as string)} title="Delete" className="text-red-500 cursor-pointer" />
            </div>
        </td>
      </tr>
  )
}
