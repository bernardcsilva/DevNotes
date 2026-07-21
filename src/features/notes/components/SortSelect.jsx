
export default function SortSelect({
    sortBy,
    setSortBy
}) {
    return (
        <div className="mb-6 flex justify-end">

            <select 
                value={sortBy}
                onChange={(event) =>
                    setSortBy(event.target.value)
                }
                className="
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-900
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-blue-500
                    cursor-pointer
                "
            >
                        <option value="recent">
                            Mais recentes
                        </option>

                        <option value="old">
                            Mais antigas
                        </option>

                        <option value="az">
                            A → Z
                        </option>

                        <option value="za">
                            Z → A
                        </option>
                    </select>
        </div>
    )
}