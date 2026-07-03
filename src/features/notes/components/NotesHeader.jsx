
import { Plus } from "lucide-react"

export default function NotesHeader() {
    return (
        <div className="flex items-center justify-between mb-8">

            <div>

                <h1 className="text-4xl font-bold">
                    Minhas Notas
                </h1>

                <p className="text-slate-400 mt-2">
                    Organize tudo o que você aprende.
                </p>

            </div>

            <button
              className="
               flex
               items-center
               gap-2
               bg-blue-600
               hover:bg-blue-700
               transition
               px-5
               py-3
               rounded-xl"
            >
               <Plus size={20}/>

               Nova Nota
            </button>

        </div>
    )
}