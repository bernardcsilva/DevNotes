
import NoteCard from "../../../components/notes/NoteCard"

export default function NotesGrid({ notes, onEdit, onDelete, onFavorite }) {

    if (notes.length === 0) {
        return (
            <div className="mt-16 text-center">

                <h2 className="font-semibold text-2xl text-slate-300">
                    Nenhuma nota encontrada.
                </h2>

                <p className="mt-3 text-slate-500">
                    Tente pesquisar outro termo ou alterar a categoria.
                </p>
            </div>
        )
    }
    return (
        <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} onFavorite={onFavorite}/>
            ))}
        </div>
    )
}