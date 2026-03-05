import type { ComponentChildren } from "preact";
import Nav from "./Nav.tsx";

interface LayoutProps {
    children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Preact App</p>
            </footer>
        </>
    );
}
