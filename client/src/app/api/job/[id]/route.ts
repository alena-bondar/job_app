import axios from "axios";
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const response = await axios.patch(
      `${process.env.NEXT_API_URL}/job/${id}`,
    );
    return new NextResponse(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error("Error posting data:", error);
    return new NextResponse("Error posting data", { status: 500 });
  }
}