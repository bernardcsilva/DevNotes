import MainLayout from "../layouts/MainLayout"
import NotesGrid from "../features/notes/components/NotesGrid"

export default function Favorites({ notes, setNotes }) {

    const favoriteNotes = notes.filter((note) => note.favorite)

    function toggleFavorite(id) {
        setNotes((previousNotes) => 
            previousNotes.map((note) =>
                note.id === id
                    ? {
                        ...note,
                        favorite: !note.favorite,
                    }
                    : note
                )
            )
    }

    return (
        <MainLayout>

        <h1 className="text-4xl font-bold">Favorites</h1>

        <p className="text-slate-400 mt-2">
            Suas notas favoritas
        </p>

        <NotesGrid
            notes={favoriteNotes}
            onFavorite={toggleFavorite}
        />

        
        </MainLayout>
    )
}