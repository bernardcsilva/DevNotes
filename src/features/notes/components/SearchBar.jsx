import { Search } from "lucide-react"
import Input from "../../../shared/components/Input/Input"

export default function SearchBar({ search, setSearch }) {
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

            <Input 
              placeholder="Pesquisar notas..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="pl-12"/>
            
        </div>
    )
}