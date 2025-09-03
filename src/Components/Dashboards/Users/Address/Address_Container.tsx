'use client'
import { RootState, useAppSelector } from "@/libs/store"
import * as icon from '@/Utils/Icons/Icons';
import { UpdateAddresse } from "@/Interfaces/AddresseInterface"

export default function Address_Container() {
  const { user } = useAppSelector((state: RootState) => state.user)

  //Edit Address Handeler
  const EditAddressHandler = () => {

  }

  //Delete Order Handler By Id
  const DeleteAddressHandler = (id: string) => {
    swal({
      title: "Are you sure you want to delete this Order?",
      text: "Once you delete this Order, you cannot recover its information!",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Delete"]
    })
      .then((willDelete) => {
        // dispatch(deleteAddress(id as string));
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
    <div className="w-full flex flex-col justify-between items-start gap-3">
      {/*Section Title*/}
      <h1 className="text-xl font-bold my-4 text-primary flex justify-between items-center">
        <icon.FaMapLocationDot className="text-3xl mx-2" />
        All Addresses
      </h1>
      {/*Addresses Cards */}
      {/*Main Address*/}
      <div className="w-[50%] p-4 flex flex-col justify-start items-start rounded-lg bg-gray-200 gap-3">
        {/*Address Title*/}
        <div className="flex gap-2 px-2">
          <h2 className="text-[14px] font-bold text-gray-700">Address Title: </h2>
          <p className="text-[12px] font-bold text-gray-500">Main Address</p>
        </div>
        {/*Address Phone*/}
        <div className="flex gap-2 px-2">
          <h2 className="text-[14px] font-bold text-gray-700">Address Phone: </h2>
          <p className="text-[12px] font-bold text-gray-400">{user?.user?.phone}</p>
        </div>
        {/*Address*/}
        <div className="flex gap-2 px-2">
          <h2 className="text-[14px] font-bold text-gray-700">City: </h2>
          <p className="text-[12px] font-bold text-gray-400">{user?.user?.address}</p>
        </div>

        {/*Address Actions*/}
        <div className="w-full flex justify-between items-center gap-3">
          <button title="Edit Address" onClick={() => EditAddressHandler()} className="rounded cursor-pointer flex justify-center items-center gap-2 text-[10px] text-center p-1 bg-primary text-white ">
            <icon.FaRegEdit />
            Edit Address</button>
        </div>
      </div>
      {/*All Addressess*/}
      <div className="w-full flex justify-between items-start gap-3">
        {
          user?.user?.addresses?.map((address: UpdateAddresse) =>
            <div key={address?.id} className="w-[50%] p-4 flex flex-col justify-start items-start rounded-lg bg-gray-200 gap-3">
              {/*Address Title*/}
              <div className="flex gap-2 px-2">
                <h2 className="text-[14px] font-bold text-gray-700">Address Title: </h2>
                <p className="text-[12px] font-bold text-gray-500">{address?.title}</p>
              </div>
              {/*Address Phone*/}
              <div className="flex gap-2 px-2">
                <h2 className="text-[14px] font-bold text-gray-700">Address Phone: </h2>
                <p className="text-[12px] font-bold text-gray-400">{address?.phone}</p>
              </div>
              {/*Address*/}
              <div className="flex gap-2 px-2">
                <h2 className="text-[14px] font-bold text-gray-700">City: </h2>
                <p className="text-[12px] font-bold text-gray-400">{address?.city}</p>
              </div>
              {/*Address*/}
              <div className="flex gap-2 px-2">
                <h2 className="text-[14px] font-bold text-gray-700">Address Details: </h2>
                <p className="text-[12px] font-bold text-gray-400">{address?.details}</p>
              </div>
              {/*Address Actions*/}
              <div className="w-full flex justify-between items-center gap-3">
                <button title="Edit Address" onClick={() => EditAddressHandler()} className="rounded cursor-pointer flex justify-center items-center gap-2 text-[10px] text-center p-1 bg-primary text-white ">
                  <icon.FaRegEdit />
                  Edit Address</button>
                <button title="Delete Address" onClick={() => DeleteAddressHandler(address?.id)} className="rounded cursor-pointer flex justify-center items-center gap-2 text-[10px] text-center p-1 bg-red-500 text-white ">
                  <icon.MdDelete />
                  Delete Address</button>
              </div>
            </div>
          )
        }
      </div>
      {/*Add Anew Address*/}
      <button className="rounded cursor-pointer text-center flex justify-center items-center gap-2 p-2 bg-sky-500 text-white ">
        <icon.FaPlus />
        Add New Address
      </button>
    </div>
  )
}
