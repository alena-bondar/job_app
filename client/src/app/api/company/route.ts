import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await axios.get(`${process.env.NEXT_API_URL}/company`);
  return new NextResponse(JSON.stringify(res.data), { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const response = await axios.post(
      `${process.env.NEXT_API_URL}/company`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return new NextResponse(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    // @ts-ignore
    const errorMessage = error.response?.data?.message || "Error posting data";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
