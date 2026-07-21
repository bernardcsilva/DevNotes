import Button from "../../shared/components/Button/Button"
import { Star } from "lucide-react"

export default function NoteCard({ note, onEdit, onDelete, onFavorite }) {
    return (
        <div className="
                 border 
                 border-slate-800 
                 rounded-xl 
                 p-5 
                 bg-slate-900 
                 hover:border-blue-500 
                 transition-all
                 hover:-translate-y-1
                 hover:shadow-lg
                 hover:shadow-blue-900/20
                 cursor-pointer
                 "
        >
            
            <div className="flex items-start justify-between">

                <h2 className="text-xl font-semibold">
                    {note.title}
                </h2>

                <span className="
                        inline-block
                        mt-2
                        rounded-full
                        bg-slate-800
                        px-3
                        py-1
                        text-xs
                        text-slate-400"
                >
                    {note.category}
                </span>

            </div>

            <button
                onClick={() => onFavorite(note.id)}
                className="text-slate-500 hover:text-yellow-400 hover:scale-110 active:scale-95 transition-all duration-200"
            >
                <Star
                    size={22}
                    fill={note.favorite ? "currentColor" : "none"}/>
            </button>

            <p className="mt-4 text-slate-400 line-clamp-3">
                {note.content}
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
                {note.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-900/40 px-3 py-1 rounded-full text-xs text-blue-300">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="mt-6 border-t border-slate-800 pt-4">

                <p className="text-xs text-slate-500">
                    Criada em{" "}
                    {new Date(note.createdAt).toLocaleDateString("pt-BR")}
                </p>

                <div className="mt-4 flex justify-end gap-3">

                {onEdit && (
                    <Button
                        onClick={() => onEdit(note)}
                        variant="secondary">
                            Editar
                    </Button>
                )}

                {onDelete && (
                    <Button
                        onClick={() => onDelete(note.id)}
                        variant="danger"
                    >
                        Excluir
                    </Button>
                )}
                
                </div>
            </div>
        </div>
    )
}