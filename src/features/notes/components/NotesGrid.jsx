
import NoteCard from "../../../components/notes/NoteCard"

export default function NotesGrid({ notes, onEdit, onDelete, onFavorite }) {

    if (notes.length === 0) {
        return (
            <p className="mt-8 text-center text-slate-400">
                Nenhuma nota encontrada.
            </p>
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