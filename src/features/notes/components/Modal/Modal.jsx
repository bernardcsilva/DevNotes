import { X } from "lucide-react"

export default function Modal({
    isOpen,
    title,
    children,
    onClose,
}) {
    if (!isOpen) return null

    return (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            bg-black/60
            flex
            items-center
            justify-center
            z-50
            p-4"
        >
            <div
              onClick={(event) => event.stopPropagation()}
              className="
                w-full
                max-w-2xl
                rounded-2xl
                bg-slate-900
                border
                border-slate-800
                p-6
                shadow-xl"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                        {title}
                    </h2>

                    <button
                      type="button"
                      aria-label="Fechar modal"
                      onClick={onClose}
                      className="text-slate-400 hover:text-white transition"
                    >
                        <X size={20}/>
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}