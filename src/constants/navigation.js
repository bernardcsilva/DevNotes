
import {
    House,
    NotebookPen,
    Star,
    User,
    Settings
} from "lucide-react"

export const navigation = [
    {
        title: "Dashboard",
        icon: House,
        path: "/",
    },

    {
        title: "Notas",
        icon: NotebookPen,
        path: "/notes",
    },

    {
        title: "Favoritos",
        icon: Star,
        path: "/favoritos",
    },

    {
        title: "Perfil",
        icon: User,
        path: "/profile",
    },

    {
        title: "Configurações",
        icon: Settings,
        path: "/settings",
    },
]