import type { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    //TODO: в будущем будут общие компоненты типа header и footer
    return (
        <main>
            {children}
        </main>
    )
}