
export function sortNotes(notes, sortBy) {


    const sortedNotes = [...notes]


    switch (sortBy) {
        
        case "recent":
            return sortedNotes.sort(
                (a, b) =>
                    new Date(b.createdAt) - new Date(a.createdAt)
            )

        case "old":
            return sortedNotes.sort(
                (a, b) =>
                    new Date(a.createdAt) - new Date(b.createdAt)
            )

        case "az":
            return sortedNotes.sort(
                (a, b) => a.title.localeCompare(b.title)
            )

        case "za":
            return sortedNotes.sort(
                (a, b) => b.title.localeCompare(a.title)
            )
        
        default: 
            return sortedNotes
    }
}