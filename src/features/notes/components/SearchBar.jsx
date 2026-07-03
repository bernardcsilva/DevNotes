import { Search } from "lucide-react"

export default function SearchBar() {
    return(
        <div className="relative mb-8">

            <Search
              size={20}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-500"
            />

            <input 
              type="text"
              placeholder="Pesquisar por título, categoria ou tags.."
              className="
              w-full
              rounded-xl
              bg-slate-900
              border
              border-slate-800
              py-4
              pl-12
              pr-4
              outline-none
              focus:border-blue-500"
            />
            
        </div>
    )
}