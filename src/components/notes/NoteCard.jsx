
export default function NoteCard({ note }) {
    return (
        <div className="border border-slate-800 rounded-xl p-5 bg-slate-900 hover:border-blue-500 transition">
            
            <h2 className="text-xl font-semibold">
                {note.title}
            </h2>

            <p className="text-slate-400 mt-2">
                Categoria: {note.category}
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
                {note.tags.map((tap) => (
                    <span
                      key={tag}
                      className="bg-slate-800 px-3 py-1 rounded-full text-sm">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}