'use client'

import { useState } from 'react'
import { teamLogos } from '../../scripts/uploadTeams'

export default function SearchDropdown({
  id,
  openDropdown,
  setOpenDropdown,
  options,
  value,
  placeholder,
  onChange,
  disabled = false
}) {

  const [search, setSearch] = useState('')

 const filtered = (options || []).filter((option) => {

  const text =
    typeof option === 'string'
      ? option
      : option.name || option.id || ''

  return text
    .toLowerCase()
    .includes(search.toLowerCase())

})

  return (
    <div className="relative mt-4">

   <button
  disabled={disabled}
  onClick={() =>
    setOpenDropdown(
      openDropdown === id
        ? null
        : id
    )
  }
  className="
    w-full
    rounded-2xl
    border
    border-white/10
    bg-white/5
    hover:bg-white/10
    transition-all
    disabled:opacity-50
disabled:cursor-not-allowed
    p-4
    flex
    items-center
    justify-between
  "
>

  <span className="truncate">
    {value || placeholder}
  </span>

  <span
    className={`
      transition
      ${openDropdown === id ? 'rotate-180' : ''}
    `}
  >
    ▼
  </span>

</button>

      {!disabled && openDropdown === id && (
  <div
  className="
    absolute
    left-0
    right-0
    top-full
    mt-3
    z-[99999]

    overflow-visible

    rounded-2xl

    border
    border-white/10

    bg-[#0B1020]

    backdrop-blur-2xl

    shadow-[0_20px_60px_rgba(0,0,0,0.6)]
  "
>

          <div className="p-3 border-b border-white/10">

            <input
  placeholder="Buscar..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  className="
    w-full
    rounded-xl

    bg-white/5

    border
    border-white/10

    p-3

    outline-none

    focus:border-cyan-400

    transition
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
    : option.name || option.id
}
                onClick={() => {

                 onChange(
  typeof option === 'string'
    ? option
    : option.name || option.id
)

                  setOpenDropdown(null)
                  setSearch('')

                }}
                className="
  w-full
  text-left

  px-4
  py-4

  hover:bg-cyan-500/10

  border-b
  border-white/5

  transition
"
              >
                {typeof option === 'string' ? (

  option

) : option.logo ? (

  <div className="flex items-center gap-3">

    <img
      src={option.logo}
      alt=""
      className="w-8 h-8 object-contain"
    />

    <span className="font-semibold">
      {option.name}
    </span>

  </div>

) : (

 <div className="flex items-center gap-3">

  {option.team && (

    <img
      src={teamLogos[option.team]}
      alt=""
      className="
        w-8
        h-8
        object-contain
      "
    />

  )}

  <div>

    <div className="font-semibold">

      {option.id || option.name}

      {option.captain && (
        <span className="ml-2">
          👑
        </span>
      )}

    </div>

    {option.team && (

      <div className="text-xs text-white/50">

        {option.team} • {option.role}

      </div>

    )}

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