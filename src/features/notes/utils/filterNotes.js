
export function filterNotes(notes, search, selectedCategory) {
    let filteredNotes = notes

     if (selectedCategory !== "Todos") {
      filteredNotes = filteredNotes.filter(
        (note) => note.category === selectedCategory
      )
    }

    if (!search.trim()) {
        return filteredNotes
    }

    const term = search.toLowerCase()

    return filteredNotes.filter((note) => {
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