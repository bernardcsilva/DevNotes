import MainLayout from "../layouts/MainLayout"

import { useMemo, useState } from "react"
import { filterNotes } from "../features/notes/utils/filterNotes"
import { sortNotes } from "../features/notes/utils/sortNotes"

import NotesHeader from "../features/notes/components/NotesHeader"
import SearchBar from "../features/notes/components/SearchBar"
import CategoryFilter from "../features/notes/components/CategoryFilter"
import NotesGrid from "../features/notes/components/NotesGrid"
import NoteForm from "../features/notes/components/NoteForm"
import SortSelect from "../features/notes/components/SortSelect"

import Modal from "../features/notes/components/Modal/Modal"
import toast from "react-hot-toast"

export default function Notes({ notes, setNotes }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [editingNote, setEditingNote] = useState(null)

    const [search, setSearch] = useState("")

    const [sortBy, setSortBy] = useState("recent")

    const [selectedCategory, setSelectedCategory] = useState("Todos")

    const [noteToDelete, setNoteToDelete] = useState(null)

    const filteredNotes = useMemo(() => {
        return filterNotes(notes, search, selectedCategory)
    }, [notes, search, selectedCategory])

    const sortedNotes = useMemo(() => {
        return sortNotes(filteredNotes, sortBy)
    }, [filteredNotes, sortBy])

    function openCreateModal() {
        setEditingNote(null)
        setIsModalOpen(true)
    }

    function openEditModal(note) {
        setEditingNote(note)
        setIsModalOpen(true)

    }

    function closeModal() {
        setEditingNote(null)
        setIsModalOpen(false)
        
    }

    function createNote(newNote) {
        const note = {
            id: Date.now(),
            favorite: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            ...newNote,
        }

        setNotes((previousNotes) => [note, ...previousNotes])

        toast.success("Nota criada com sucesso!")

        closeModal()
    }

    function updateNote(updatedNote) {

        setNotes((previousNotes) =>
        previousNotes.map((note) =>
        note.id === updatedNote.id
          ? {
            ...updatedNote,
            updatedAt: new Date(),
          }
          : note
        )
      )

      toast.success("Nota atualizada!")

      closeModal()
    }

    function deleteNote(noteId) {

        if (!confirmed) return

        setNotes((previousNotes) =>
            previousNotes.filter((note) => note.id !== noteId)
        )
    }

    function openDeleteModal(noteId) {
        setNoteToDelete(noteId)
    }

    function confirmDelete() {
        setNotes((previousNotes) => 
            previousNotes.filter(
                (note) => note.id !== noteToDelete
            )
        )

        toast.success("Nota excluída!")

        setNoteToDelete(null)
    }

    function closeDeleteModal() {
        setNoteToDelete(null)
    }

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
            <NotesHeader 
                onCreateNote={openCreateModal}
            />

            <SearchBar 
             search={search}
             setSearch={setSearch}
            />

            <CategoryFilter 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <SortSelect
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            <NotesGrid 
              notes={sortedNotes}
              onEdit={openEditModal}
              onDelete={openDeleteModal}
              onFavorite={toggleFavorite}/>

            <Modal
              isOpen={isModalOpen}
              title={editingNote ? "Editar Nota" : "Nova Nota"}
              onClose={closeModal}
            >
                <NoteForm 
                 note={editingNote}
                 onSubmit={editingNote
                    ? updateNote
                    : createNote
                 } 
                />
            </Modal>

            <Modal
                isOpen={noteToDelete !== null}
                title="Excluir Nota"
                onClose={closeDeleteModal}
            >
                <p>Tem certeza que deseja excluir esta nota?</p>

                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={closeDeleteModal}
                        className="px-4 py-2 rounded bg-slate-700 cursor-pointer"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={confirmDelete}
                        className="px-4 py-2 rounded bg-red-600 cursor-pointer"
                    >
                        Excluir
                    </button>
                </div>
                </Modal>
        </MainLayout>
    )
}