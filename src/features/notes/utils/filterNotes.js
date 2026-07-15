
export function filterNotes(notes, search) {
    if (!search.trim()) {
        return notes
    }

    const term = search.toLowerCase()

    return notes.filter((note) => {
        const titleMatch = note.title
          .toLowerCase()
          .includes(term)

        const categoryMatch = note.category
          .toLowerCase()
          .includes(term)

        const tagMatch = note.tags.some((tag) =>
          tag.toLowerCase().includes(term)
        )

        return titleMatch || categoryMatch || tagMatch
    })
}