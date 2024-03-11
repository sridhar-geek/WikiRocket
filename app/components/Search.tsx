"use client"

import {FormEvent, useState} from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Search = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    console.log(pathname)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }
  return (
    <form className='w-50 flex justify-center ' onSubmit={handleSubmit} >
      <input type="text" onChange={(e)=> setSearch(e.target.value)} value={search} placeholder='Search' className='bg-white p-2 w-80 text-xl text-black rounded-xl' />
      <button type="submit" className='p-2 text-xl rounded-xl font-bold bg-slate-300 ml-2 ' >
        🚀
      </button>
    </form>
  )
}

export default Search