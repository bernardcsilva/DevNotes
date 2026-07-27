import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function Modal({
    isOpen,
    title,
    children,
    onClose,
}) {

    return (
      <AnimatePresence>
        {isOpen && (
        <motion.div
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
            <motion.div
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
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
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
            </motion.div>
        </motion.div>
        )}
        </AnimatePresence>
    )
}