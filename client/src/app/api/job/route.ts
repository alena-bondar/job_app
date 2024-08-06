import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await axios.get(`${process.env.NEXT_API_URL}/job`);
  return new NextResponse(JSON.stringify(res.data), { status: 200 });
}
