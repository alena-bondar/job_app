import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const response = await axios.post(
      `${process.env.NEXT_API_URL}/appliances`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return new NextResponse(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error("Error posting data:", error);
    return new NextResponse("Error posting data", { status: 500 });
  }
}
