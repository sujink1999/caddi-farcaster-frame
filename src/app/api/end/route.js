import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;

  let redirectURL = "${process.env.NEXT_PUBLIC_BASE_URL}/jaimin";
  if (buttonId === 1) {
    redirectURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`;
  } else if (buttonId === 2) {
    redirectURL = `${process.env.NEXT_PUBLIC_BASE_URL}/jaimin`;
  }
  const headers = new Headers();
  headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}/`);
  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`,
    {
      headers: headers,
      status: 302,
    }
  );
  return response;
}

export const dynamic = "force-dynamic";
