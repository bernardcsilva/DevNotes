
export default function Input({
    type="text",
    className = "",
    ...props
}) {
    return (
        <input
          type={type}
          className={`
            w-full
            rounded-xl
            border
            boder-slate-800
            bg-slate-900
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-500
            ${className}
            text-white
            placholder: text-slate-400
          `}
          {...props}
        />
    )
}