import { useState } from "react"

import Button from "../../../shared/components/Button/Button"
import Input from "../../../shared/components/Input/Input"

export default function AuthForm({
    title,
    buttonText,
    onSubmit
}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        onSubmit(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <h1 className="text-3xl font-bold text-center">
                {title}
            </h1>
            <Input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(event) => 
                setEmail(event.target.value)
              }
            />

            <Input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />

            <Button
              type="submit"
              className="w-full"
            >
                {buttonText}
            </Button>
        </form>
    )
}