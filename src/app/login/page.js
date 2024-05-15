'use client'
import { useState } from "react"
import ButtonLogin from "./_components/button-login"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const mudaInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const mudaInputSenha = (event) => {
        setSenha(event.target.value)
        console.log(senha)
    }

    const handleLogin = () => {
        window.alert('Logado')
    }

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="flex flex-col gap-1 bg-gray-100 rounded shadow-md px-5 py-5">
                <h1 className="text-center text-lg font-semibold text-blue-500">Login</h1>
                <label className="text-sm">E-mail:</label>
                <input value={email} onChange={mudaInputEmail} className="rounded-md focus:outline-none p-1"/>

                <label className="text-sm mt-1">Senha:</label>
                <input value={senha} onChange={mudaInputSenha} className="rounded-md focus:outline-none p-1" type="password"/>

                <ButtonLogin login={handleLogin} />
            </div>
        </div>
    )
}