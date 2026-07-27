import { AnimatePresence, motion } from "framer-motion"
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
            <AnimatePresence>
            {notes.map((note) => (
                <motion.div
                    key={note.id}
                    layout
                    initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.97,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.8,
                        y: -40,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                >
                <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} onFavorite={onFavorite}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}