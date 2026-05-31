import { NextResponse } from "next/server"

export async function GET() {
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    response_type: "code",
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
    scope: "identify",
  })

  return NextResponse.redirect(
    `https://discord.com/oauth2/authorize?${params}`
  )
}