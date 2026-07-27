import { useNavigate } from "react-router-dom";
import AuthForm from "../features/notes/components/AuthForm";
import { registerUser } from "../features/notes/services/authService";

export default function Register() {
    const navigate = useNavigate()

    async function handleRegister(email, password) {

        try {
            await registerUser(email, password)

            navigate("/")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">

            <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-8">

                <AuthForm 
                    title="Criar Conta"
                    buttonText="Cadastrar"
                    onSubmit={handleRegister}
                />
                
            </div>

        </div>
    )
}