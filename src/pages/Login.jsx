import { useNavigate } from "react-router-dom"
import AuthForm from "../features/notes/components/AuthForm"
import { loginUser } from "../features/notes/services/authService"

export default function Login() {
    const navigate = useNavigate()

    async function handleLogin(email, password) {
        try {
            await loginUser(email, password)

            navigate("/")

        } catch (error) {

            alert(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">

            <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-8">

                <AuthForm title="Entrar" buttonText="Entrar" onSubmit={handleLogin}/>
            </div>
        </div>
    )
}