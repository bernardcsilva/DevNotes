import { motion } from "framer-motion"

export default function Button({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
}) {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        
        secondary: "bg-slate-800 hover:bg-slate-700 text-white",

        danger: "bg-red-600 hover:bg-red-700 text-white",
    }

    return (
        <motion.button
          type={type}
          whileHover={{
            scale: 1.03,
            y: -2
          }}
          whileTap={{
            scale: 0.95
          }}
          className={`
            px-5
            py-3
            rounded-xl
            transition-all
            font-medium
            ${variants[variant]}
            ${className}
            cursor-pointer
            duration-200
          `}
          {...props}
        >
            {children}
        </motion.button>
    )
}