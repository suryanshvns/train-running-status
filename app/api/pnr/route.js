import axiosInstance from "@/app/lib/axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pnr = searchParams.get("pnr");

  try {
    const response = await axiosInstance.get(`/pnr-status/v1/${pnr}`);

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to fetch PNR details", error: error.message },
      { status: 500 },
    );
  }
}
