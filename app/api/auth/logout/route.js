import { NextResponse } from "next/server"

export async function GET() {
  const res = NextResponse.json({ ok: true })

  res.cookies.set("lotus_user", "", {
    path: "/",
    maxAge: 0,
  })

  return res
}