import { NextResponse } from "next/server"

export async function GET(req) {
  const { searchParams } = new URL(req.url)

  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.redirect(
      "https://lotus-rift.vercel.app"
    )
  }

  const tokenRes = await fetch(
    "https://discord.com/api/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
      }),
    }
  )

  const tokenData = await tokenRes.json()

  const userRes = await fetch(
    "https://discord.com/api/users/@me",
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    }
  )

  const user = await userRes.json()

  const response = NextResponse.redirect(
    "https://lotus-rift.vercel.app"
  )

  response.cookies.set(
    "lotus_user",
    JSON.stringify({
      id: user.id,
      username: user.username,
      avatar: user.avatar,
    }),
    {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }
  )

  return response
}