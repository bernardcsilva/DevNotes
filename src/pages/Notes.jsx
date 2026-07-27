import MainLayout from "../layouts/MainLayout"

import { useMemo, useState, useEffect } from "react"
import { filterNotes } from "../features/notes/utils/filterNotes"
import { sortNotes } from "../features/notes/utils/sortNotes"
import { addNote, getNotes, updateNote as updateFirestoreNote, deleteNote as deleteFirestoreNote } from "../features/notes/services/firestoreService"
import { auth } from "../firebase/firebase"

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

    useEffect(() => {
        async function loadNotes() {
            const firestoreNotes = await getNotes()

            setNotes(firestoreNotes)
        }

        loadNotes()
    }, [])

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

    async function createNote(newNote) {
        const note = {
            id: Date.now(),
            favorite: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            uid: auth.currentUser.uid,
            ...newNote,
        }


        const firestoreId = await addNote(note)

        setNotes((previousNotes) => [{
            ...note,
            firestoreId,
        },
        ...previousNotes,
    ])

        toast.success("Nota criada com sucesso!")

        closeModal()
    }

    async function updateNote(updatedNote) {

        await updateFirestoreNote(
            updatedNote.firestoreId,
            {
                ...updatedNote,
                updatedAt: new Date(),
            }
        )

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

    async function confirmDelete() {
        const note = notes.find(
            (note) => note.id === noteToDelete
        )

        if (!note) return

        await deleteFirestoreNote(note.firestoreId)

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

    async function toggleFavorite(id) {
        const note = notes.find((note) => note.id === id)

        if (!note) return

        const updatedNote = {
            ...note,
            favorite: !note.favorite,
        }

        await updateFirestoreNote(
            note.firestoreId,
            updatedNote
        )

        setNotes((previousNotes) =>
            previousNotes.map((note) =>
                note.id === id
                    ? updatedNote
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