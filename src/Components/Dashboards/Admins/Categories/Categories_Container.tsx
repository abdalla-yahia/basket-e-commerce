'use client'
import { getAllCategories } from "@/Feature/Actions/CategoriesActions"
import { UpdateCategory } from "@/Interfaces/CategoryInterface"
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store"
import { useEffect } from "react"
import Category_Content from "./Category_Content"


export default function Categories_Container() {
  const { AllCategories } = useAppSelector((state: RootState) => state.category)
  const dispatch = useAppDispatch()
  //Fetch All Categories
  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  console.log(AllCategories)
  return (
    <div className="w-full flex justify-start items-start relative">
      {/*Categories Table*/}
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-[#E4E5EE]">Image</th>
            <th className="p-2 border border-[#E4E5EE]">Title</th>
            <th className="p-2 border border-[#E4E5EE]">Description</th>
            <th className="p-2 border border-[#E4E5EE]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            AllCategories?.categories?.map((Category: UpdateCategory) =>
              <Category_Content key={Category?.id} Category={Category} />
            )
          }
        </tbody>
      </table>

    </div>
  )
}
