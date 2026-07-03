import MainLayout from "../layouts/MainLayout"
import StatCard from "../components/ui/StatCard"

import {
    NotebookPen,
    Star,
    Folder,
    Tags,
} from "lucide-react"

export default function Dashboard() {
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
                  value="100"
                  icon={NotebookPen}
                />

                <StatCard
                  title="Favoritos"
                  value="30"
                  icon={Star}
                />

                <StatCard
                  title="Categorias"
                  value="12"
                  icon={Folder}
                />

                <StatCard
                  title="Tags"
                  value="300"
                  icon={Tags}
                />
                
            </div>
            
        </MainLayout>
        </>
    )
}