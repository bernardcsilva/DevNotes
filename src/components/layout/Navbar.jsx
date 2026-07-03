
export default function Navbar() {
    return (
        <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

            <h2 className="text-xl font-semibold">
                Dashboard
            </h2>

            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium">
                Nova Nota
            </button>
            
        </header>
    )
}