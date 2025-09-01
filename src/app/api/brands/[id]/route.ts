import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { UpdateBrandValidation } from "@/Validation/BrandValidation";

/**
 * @access All Users
 * @method GET
 * @param id
 * @path '~/api/brands/[id]'
 * @returns  Get All Brands
 */

export async function GET(
  _: unknown,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    //Get Id From Params
    const { id } = await params;
    //Check If Brand Existes
    const IsExistes = await prisma.brand.findUnique({ where: { id } });
    if (!IsExistes) {
      return NextResponse.json({ message: "Brand Not Found" }, { status: 404 });
    }
    const brand = await prisma.brand.findUnique({ where: { id },
    include:{
      products:true
    }
    });
    return NextResponse.json(
      { message: "Get Brand Successfully", brand },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get Brand", error },
      { status: 500 }
    );
  }
}

/**
 * @access Only Admins
 * @method POST
 * @param id
 * @path '~/api/brands/[id]'
 * @returns  Get Updated Brand
 */

export async function POST(request: NextRequest,{ params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
  try {
    //Get Data From Body
    const data = await request.json();
    // Get Id of Brand From Params
    const { id } = await params;
    //Check If User Is Admin
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    const token = cookie?.value;
    const Decode = Jwt.verify(token,process.env.JWT_SECRET_KEY as string) as TokenInterFace;
    if (!Decode) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    //Check If User Role Is Admin
    if (Decode?.role !== "ADMIN") {
      return NextResponse.json(
        { message: "These permissions are restricted to admins only" },
        { status: 403 }
      );
    }
    //Check If Is Brand Existes
    const IsExistes = await prisma.brand.findUnique({ where: { id } });
    if (!IsExistes) {
      return NextResponse.json({ message: "Brand Not Found" }, { status: 404 });
    }
    //Check Validation Of Data
    const Validation = UpdateBrandValidation.safeParse(data);
    if (!Validation?.success) {
      return NextResponse.json({ message: "Data Not Valide" }, { status: 400 });
    }
    //Update Brand
    const brand = await prisma.brand.update({
      where: { id },
      data: Validation?.data,
    });
    return NextResponse.json(
      { message: "Brand Updated Successfully", brand },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Update Brand", error },
      { status: 500 }
    );
  }
}

/**
 * @access Only Admins
 * @method DELETE
 * @param id
 * @path '~/api/brands/[id]'
 * @returns  null
 */

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    // Get Id of Brand From Params
    const { id } = await params;
    //Check If User Is Admin
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    const token = cookie?.value;
    const Decode = Jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as TokenInterFace;
    if (!Decode) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    //Check If User Role Is Admin
    if (Decode?.role !== "ADMIN") {
      return NextResponse.json(
        { message: "These permissions are restricted to admins only" },
        { status: 403 }
      );
    }
    //Check If Is Brand Existes
    const IsExistes = await prisma.brand.findUnique({ where: { id } });
    if (!IsExistes) {
      return NextResponse.json({ message: "Brand Not Found" }, { status: 404 });
    }

    //Delete Brand
    await prisma.brand.delete({ where: { id } });
    return NextResponse.json(
      { message: "Brand Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Delete Brand", error },
      { status: 500 }
    );
  }
}
