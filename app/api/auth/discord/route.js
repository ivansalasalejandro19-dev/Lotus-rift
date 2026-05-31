import { NextResponse } from "next/server"

export async function GET() {
  const CLIENT_ID = process.env.DISCORD_CLIENT_ID

  const redirectUri = "https://lotus-rift.vercel.app/api/auth/discord/callback"

  const url = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=code&scope=identify`

  return NextResponse.redirect(url)
}