import axios from "axios";
import { NextResponse } from "next/server";

const url = `https://eu1.make.com/api/v2/data-stores/19860/data?pg[limit]=50`;

export async function GET(req) {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: process.env.API_KEY,
        "Cache-Control": "no-cache",
      },
    });
    const data = await res.json();

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return error;
  }
}
