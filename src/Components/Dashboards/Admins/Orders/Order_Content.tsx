'use client'
import * as icon from '@/Utils/Icons/Icons';
import swal from 'sweetalert';
import Edit_Order_Form from "./Form_Edit_Order"
import { useAppDispatch } from '@/libs/store';
import { UpdateOrder } from '@/Interfaces/OrderInterface';
import { deleteOrder } from '@/Feature/Actions/OrdersActions';
import { useState } from 'react';
import Link from 'next/link';

export default function Order_Content({Order}:{Order:UpdateOrder}) {
      const [isToggle,setIsToggle] = useState(false)

      const dispatch = useAppDispatch()
    const status = Order?.status
      //Delete Order Handler By Id
      const DeleteHandler =(id:string)=>{
          swal({
            title: "Are you sure you want to delete this Order?",
            text: "Once you delete this Order, you cannot recover its information!",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Delete"]
          })
          .then((willDelete) => {
            dispatch(deleteOrder(id as string));
            if (willDelete) {
              swal("Order deleted successfully!", {
                icon: "success",
              });
              window.location.reload();
            } else {
              swal("The Order is safe and was not deleted!");
            }
          });
      }
  return (
     <tr key={Order?.id}>
        <td className="p-2 border border-[#E4E5EE]">ORD:0{Order?.id}</td>
        <td className="p-2 border border-[#E4E5EE]">
          <Link href={`/users/${Order?.user?.id}`}>
           {Order?.user?.name}
          </Link>
          </td>
        <td className="p-2 border border-[#E4E5EE]">
          {/*Order Status*/}
       {
  status === 'PENDING' && (
    <p className="rounded-xl px-2 py-0.5 flex justify-center bg-yellow-400 text-yellow-900">
      {status.toLowerCase()}
    </p>
  ) ||
  status === 'PREPARING' && (
    <p className="rounded-xl px-2 py-0.5 flex justify-center bg-sky-600 text-white">
      {status.toLowerCase()}
    </p>
  ) ||
  status === 'SHIPPED' && (
    <p className="rounded-xl px-2 py-0.5 flex justify-center bg-orange-500 text-white">
      {status.toLowerCase()}
    </p>
  ) ||
  status === 'DELIVERED' && (
    <p className="rounded-xl px-2 py-0.5 flex justify-center bg-green-500 text-white">
      {status.toLowerCase()}
    </p>
  ) ||
  status === 'CANCELED' && (
    <p className="rounded-xl px-2 py-0.5 flex justify-center bg-red-600 text-white">
      {status.toLowerCase()}
    </p>
  ) ||
  status === 'RETURNED' && (
    <p className="rounded-xl px-2 py-0.5 flex justify-center bg-red-700 text-white">
      {status.toLowerCase()}
    </p>
  )
}
          </td>
        <td className="p-2 border border-[#E4E5EE]">{Order?.products?.map(product=>
          <Link key={product?.id} href={`/products/${product?.slug}`}>
          <span >{product?.title}</span> 
          </Link> ,
        )}</td>
        <td className="p-2 border border-[#E4E5EE]">
          <div className="w-full flex justify-between items-center px-2">
              {/*Edit Order Form*/}
              {
                isToggle && (<Edit_Order_Form Order={Order} setIsToggle={setIsToggle}/>)
              }
              {/*Toggle Form Edit*/}
              <icon.FaRegEdit onClick={()=>setIsToggle(!isToggle)} title="Edit" className="text-green-500 cursor-pointer" />
              {/*Delete Order Button*/}
              <icon.FaTrash onClick={()=>DeleteHandler(Order?.id as string)} title="Delete" className="text-red-500 cursor-pointer" />
            </div>
        </td>
      </tr>
  )
}
