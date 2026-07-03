import {
    House,
    NotebookPen,
    Star,
    Tags,
    Settings,
    User,
} from "lucide-react"

export default function Sidebar() {
    return (
        <aside className="w-72 border-r border-slate-800 bg-slate-900">

          <div className="p-6 border-b border-slate-800">

            <h1 className="text-2xl font-bold">
                DevNotes
            </h1>

            <p className="text-slate-400 text-sm mt-1">
                Seu segundo cérebro.
            </p>

          </div>

          <nav className="p-4 flex flex-col gap-2">

            <button className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800 transition">

                <House size={20} />

                Dashboard
            </button>

            <button className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800 transition">

                <NotebookPen size={20} />

                Notas
            </button>

            <button className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800 transition">

                <Star size={20} />

                Favoritos
            </button>

            <button className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800 transition">

                <Tags size={20} />

                Categorias
            </button>

            <button className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800 transition">

                <Settings size={20} />

                Configurações
            </button>

            <button className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800 transition">

                <User size={20} />

                Perfil
            </button>

          </nav>
          
        </aside>
    )
}