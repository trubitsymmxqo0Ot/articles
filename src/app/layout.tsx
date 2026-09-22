import type { ReactNode } from "react";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  //TODO: в будущем будут общие компоненты типа header и footer
  return (
    <main className="h-screen w-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="py-5 px-10 flex-1">{children}</section>
      </div>
    </main>
  );
};
