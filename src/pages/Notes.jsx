import MainLayout from "../layouts/MainLayout"

import { useMemo, useState } from "react"
import { filterNotes } from "../features/notes/utils/filterNotes"

import NotesHeader from "../features/notes/components/NotesHeader"
import SearchBar from "../features/notes/components/SearchBar"
import CategoryFilter from "../features/notes/components/CategoryFilter"
import NotesGrid from "../features/notes/components/NotesGrid"
import NoteForm from "../features/notes/components/NoteForm"

import Modal from "../features/notes/components/Modal/Modal"

export default function Notes({ notes, setNotes }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [editingNote, setEditingNote] = useState(null)

    const [search, setSearch] = useState("")

    const filteredNotes = useMemo(() => {
        return filterNotes(notes, search)
    }, [notes, search])

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

      closeModal()
    }

    function deleteNote(noteId) {
        const confirmed = window.confirm(
            "Tem certeza que deseja excluir esta nota?"
        )

        if (!confirmed) return

        setNotes((previousNotes) =>
            previousNotes.filter((note) => note.id !== noteId)
        )
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

            <CategoryFilter />

            <NotesGrid 
              notes={filteredNotes}
              onEdit={openEditModal}
              onDelete={deleteNote}
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
        </MainLayout>
    )
}