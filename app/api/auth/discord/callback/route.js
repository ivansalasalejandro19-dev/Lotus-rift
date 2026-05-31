import { NextResponse } from "next/server"

export async function GET(req) {
  const url = new URL(req.url)
  const code = url.searchParams.get("code")

  const tokenRes = await fetch(
    "https://discord.com/api/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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

  const discordUser = await userRes.json()

  const user = {
    name: discordUser.username,
    photo: `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`,
    provider: "discord",
    id: discordUser.id,
  }

  const response = NextResponse.redirect("/")
  response.cookies.set("lotus_user", JSON.stringify(user), {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  })

  return response
}