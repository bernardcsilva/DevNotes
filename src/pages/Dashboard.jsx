import MainLayout from "../layouts/MainLayout"
import StatCard from "../components/ui/StatCard"

import {
    NotebookPen,
    Star,
    Folder,
    Tags,
} from "lucide-react"

export default function Dashboard({ notes }) {

    const totalNotes = notes.length

    const totalFavorites = notes.filter(
        (note) => note.favorite
    ).length

    const totalCategories = new Set(
        notes.map((note) => note.category)
    ).size

    const totalTags = new Set(
        notes.flatMap((note) => note.tags)
    ).size

    return (
        <>
        <MainLayout>

            <h1 className="text-4xl font-bold">
                Olá Bernardo
            </h1>

            <p className="text-slate-400 mt-2">
                Continue organizando seus estudos.
            </p>

            <div className="grid grid-cols-4 gap-6">

                <StatCard
                  title="Notas"
                  value={totalNotes}
                  icon={NotebookPen}
                />

                <StatCard
                  title="Favoritos"
                  value={totalFavorites}
                  icon={Star}
                />

                <StatCard
                  title="Categorias"
                  value={totalCategories}
                  icon={Folder}
                />

                <StatCard
                  title="Tags"
                  value={totalTags}
                  icon={Tags}
                />
                
            </div>
            
        </MainLayout>
        </>
    )
}