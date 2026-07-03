
export default function StatCard({ title, value, icon: Icon }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition-all">

            <div className="flex items-center justify-between">

                <div>
                    <p className="text-slate-400 text-sm">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                    </h2>
                </div>

                <Icon size={35} className="text-blue-500" />

            </div>
            
        </div>
    )
}