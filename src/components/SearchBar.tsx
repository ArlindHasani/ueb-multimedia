import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
      <div className="relative w-80">
        <input placeholder="Search.." className="relative w-full max-w-sm py-2 px-4 rounded-lg outline-none text-stone-200 text-sm bg-zinc-700"></input>
        <CiSearch className="w-6 h-6 text-stone-200 absolute right-2 top-1.5 translate-y-50"/>
      </div>
  )
}
