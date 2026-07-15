
import { useState } from "react"

export function useNotesSearch() {
    const [search, setSearch] = useState("")

    return {
        search,
        setSearch,
    }
}