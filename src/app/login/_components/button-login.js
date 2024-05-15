export default function ButtonLogin({login}) {
    return (
        <div className="flex justify-center mt-3">
            <button onClick={login} className="bg-blue-500 rounded-md w-full text-white text-sm px-2 py-2 hover:bg-blue-400 font-semibold">Entrar</button>
         </div>
    )
}