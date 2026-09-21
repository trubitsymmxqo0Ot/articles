import type { ReactNode } from "react"
import { Navbar } from "widgets/navbar";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    //TODO: в будущем будут общие компоненты типа header и footer
    return (
        <main className="h-screen w-full">
            <Navbar/>
            <section className="py-5 px-10">
            {children}

            </section>
        </main>
    )
}