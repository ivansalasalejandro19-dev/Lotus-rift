import { NextResponse } from "next/server"

export async function GET(req) {
  const url = new URL(req.url)
  const code = url.searchParams.get("code")

  const data = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://localhost:3000/api/auth/discord/callback",
    }),
  }).then((r) => r.json())

  const user = await fetch("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${data.access_token}`,
    },
  }).then((r) => r.json())

  const response = NextResponse.redirect("http://localhost:3000")

  response.cookies.set("lotus_user", JSON.stringify(user), {
    path: "/",
  })

  return response
}