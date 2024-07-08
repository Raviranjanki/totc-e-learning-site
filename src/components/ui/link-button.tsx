import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface LinkProps {
    children: ReactNode | string
    href: string
    className?: string | undefined
}

export default function LinkButton({ children, href, className }: LinkProps) {
    return (
        <Link to={href} className={twMerge("inline-flex justify-center bg-teal-500 text-white my-8 py-3 px-6 rounded-lg", className)}>
            {children}
        </Link>
    )
}
