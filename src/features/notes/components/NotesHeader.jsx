import Button from "../../../shared/components/Button/Button"
import { Plus } from "lucide-react"

export default function NotesHeader({
    onCreateNote,
}) {
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

            <Button
               onClick={onCreateNote}
               className="flex items-center gap-2 cursor-pointer"
            >
               <Plus size={20}/>

               Nova Nota
            </Button>

        </div>
    )
}