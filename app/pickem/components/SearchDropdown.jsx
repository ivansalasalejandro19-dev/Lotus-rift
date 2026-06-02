'use client'

import { useState } from 'react'

export default function SearchDropdown({
  options,
  value,
  onChange,
  placeholder
}) {

  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filtered = options.filter((option) => {

  const text =
    typeof option === 'string'
      ? option
      : option.name

  return text
    .toLowerCase()
    .includes(search.toLowerCase())

})

  return (
    <div className="relative mt-4">

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/10
          p-3
          text-left
          hover:bg-white/15
          transition
          flex
          justify-between
          items-center
        "
      >
        <span className="truncate">
          {value || placeholder}
        </span>

        <span className="text-white/50">
          ▼
        </span>
      </button>

      {open && (

        <div
          className="
            absolute
            top-full
            left-0
            mt-2
            w-full
            z-50
            rounded-2xl
            border
            border-white/10
            bg-[#14081f]
            backdrop-blur-xl
            shadow-2xl
            overflow-hidden
          "
        >

          <div className="p-3 border-b border-white/10">

            <input
              placeholder="🔍 Buscar..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                rounded-xl
                bg-white/10
                p-3
                outline-none
              "
            />

          </div>

          <div className="max-h-64 overflow-y-auto">

            {filtered.length === 0 && (

              <div className="p-4 text-center text-white/40">
                Sin resultados
              </div>

            )}

            {filtered.map((option) => (

              <button
                key={
  typeof option === 'string'
    ? option
    : option.name
}
                onClick={() => {

                  onChange(
  typeof option === 'string'
    ? option
    : option.name
)

                  setOpen(false)

                  setSearch('')

                }}
                className="
                  w-full
                  text-left
                  p-3
                  hover:bg-white/10
                  transition
                "
              >
                {typeof option === 'string' ? (

 option

) : (

  <div>

    <div className="font-semibold">
      {option.name}
    </div>

    <div className="text-xs text-white/50">
      {option.team}
    </div>

  </div>

)}
              </button>

            ))}

          </div>

        </div>

      )}

    </div>
  )
}