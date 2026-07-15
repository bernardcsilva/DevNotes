
export default function CategoryFilter() {
    const categories = [
        "Todos",
        "React",
        "JavaScript",
        "CSS",
        "Node",
        "MongoDB",
    ]

    return (
        <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
                >
                    {category}
                </button>
            ))}
        </div>
    )
}