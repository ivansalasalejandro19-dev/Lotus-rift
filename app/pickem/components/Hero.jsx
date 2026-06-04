'use client'

export default function Hero() {
  return (
    <section className="relative px-8 lg:px-20 py-24">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 text-center">

        <div className="text-8xl mb-8">
          🪷
        </div>

        <h1
  className="
    text-6xl
    md:text-8xl
    lg:text-9xl
    font-black
    tracking-tight
    leading-none
    bg-gradient-to-r
    from-pink-300
    via-fuchsia-300
    via-violet-300
    to-cyan-300
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_35px_rgba(236,72,153,0.35)]
  "
>
  𝐿𝑂𝑇𝑈𝑆
  <br />
  𝑃𝐼𝐶𝐾' 𝐸𝑀
</h1>

        <p className="mt-8 text-white/60 text-xl max-w-3xl mx-auto">
          ᴘʀᴇᴅɪᴄᴇ ᴇʟ ғᴜᴛᴜʀᴏ ᴅᴇʟ ᴛᴏʀɴᴇᴏ ʏ ᴄᴏᴍᴘɪᴛᴇ ᴄᴏɴᴛʀᴀ ᴛᴏᴅᴀ ʟᴀ ᴄᴏᴍᴜɴɪᴅᴀᴅ
        </p>

      </div>

    </section>
  )
}