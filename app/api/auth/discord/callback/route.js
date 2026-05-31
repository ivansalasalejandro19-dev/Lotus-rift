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
      redirect_uri: "https://lotus-rift.vercel.app/api/auth/discord/callback",
    }),
  }).then((r) => r.json())

  const user = await fetch("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${data.access_token}`,
    },
  }).then((r) => r.json())

  const response = NextResponse.redirect("https://lotus-rift.vercel.app")

  response.cookies.set("lotus_user", JSON.stringify(user), {
  path: "/",
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 7,
})

  return response
}