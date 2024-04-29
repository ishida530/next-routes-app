'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
    const pathName = usePathname()

    return (
        <Link
            href={href}
            className={`${pathName.startsWith(href) && "active"}`}>
            {children}
        </Link>
    )
}

export default NavLink