import MainLayout from "../layouts/MainLayout"
import StatCard from "../components/ui/StatCard"
import { motion } from "framer-motion"

import {
    NotebookPen,
    Star,
    Folder,
    Tags,
} from "lucide-react"

export default function Dashboard({ notes }) {

    const containerVariants = {
        hidden: {},

        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.35,
            },
        },
    }

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

            <motion.div 
                className="grid grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <motion.div variants={cardVariants}>
                    <StatCard
                      title="Notas"
                      value={totalNotes}
                      icon={NotebookPen}
                    />
                </motion.div>

                <motion.div variants={cardVariants}>
                    <StatCard
                      title="Favoritos"
                      value={totalFavorites}
                      icon={Star}
                    />
                </motion.div>

                <motion.div variants={cardVariants}>
                    <StatCard
                      title="Categorias"
                      value={totalCategories}
                      icon={Folder}
                    />
                </motion.div>

                <motion.div variants={cardVariants}>
                    <StatCard
                      title="Tags"
                      value={totalTags}
                      icon={Tags}
                    />
                </motion.div>
                
            </motion.div>
            
        </MainLayout>
        </>
    )
}