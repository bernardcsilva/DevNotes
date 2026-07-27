import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

import { observeAuthState } from "../features/notes/services/authService"

export default function ProtectedRoute({ children }) {

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        const unsubscribe = observeAuthState((currentUser) => {

            setUser(currentUser)

        })

        return unsubscribe
    }, [])

    if (user === undefined) {

        return (
            <div className="min-h-screen flex items-center justify-center">
                Carregando...
            </div>
        )
    }

    if (!user) {

        return <Navigate to="/login" replace/>
    }

    return children
}