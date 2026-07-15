import { useState, useEffect } from "react"
import Input from "../../../shared/components/Input/Input"
import Button from "../../../shared/components/Button/Button"

const EMPTY_NOTE = {
    title: "",
    category: "React",
    tags: "",
    content: "",
}

const categories =[
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "CSS",
    "Git",
    "Outros",
]

export default function NoteForm({ onSubmit, note }) {
    const [formData, setFormData] = useState(EMPTY_NOTE)

    useEffect(() => {

        if (note) {

            setFormData({
                ...note,

                tags: Array.isArray(note.tags)
                    ? note.tags.join(", ")
                    : "",
            })

        } else {

            setFormData(EMPTY_NOTE)
        }
    }, [note])

    function handleChange(event) {
        const {name, value} = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }

    function resetForm() {
        setFormData(EMPTY_NOTE)
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!formData.title.trim()) {
            alert("Digite o título para a nota.")
            return
        }

        if (!formData.content.trim()) {
            alert("Digite o conteúdo da nota.")
            return
        }

        const newNote = {
            ...formData,

            tags: formData.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
        }

        onSubmit(newNote)

        if (!note) {
            resetForm()
        }
    }

    return (
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
            <Input
              name="title"
              placeholder="Título da nota"
              value={formData.title}
              onChange={handleChange}
            />

            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-800
                bg-slate-900
                px-4
                py-3
                outline-none
                transition
                focus:border-blue-500">
                    {categories.map((category) => (
                        <option 
                          key={category}
                          value={category}
                        >
                           {category}
                        </option>
                    ))}
                </select>

            <Input
              name="tags"
              placeholder="Tags (separadas por vírgula)"
              value={formData.tags}
              onChange={handleChange}
            />

            <textarea
              name="content"
              placeholder="Conteúdo da nota..."
              value={formData.content}
              onChange={handleChange}
              rows={8}
              className="
              w-full
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              px-4
              py-3
              outline-none
              transition
              resize-none
              focus:border-blue-500"
            />

            <div className="flex justify-end">
                <Button type="submit">
                    {note ? "Salvar Alterações" : "Salvar Nota"}
                </Button>
            </div>
        </form>
    )
}