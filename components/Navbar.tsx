import Link from "next/link"
import { Button } from "./ui/button"


const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-12">

                <Link href="/" className="flex items-center gap-2">
                    <span className="font-heading text-xl font-bold tracking-tight text-white hover:text-white/90 transition-colors">
                        Founder OS
                    </span>
                </Link>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/"
                            className={`text-sm font-medium transition-colors hover:text-white`}
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/ideas"
                            className={`text-sm font-medium transition-colors hover:text-white`}
                        >
                            Ideas
                        </Link>
                        <Link
                            href="/resources"
                            className={`text-sm font-medium transition-colors hover:text-white`}
                        >
                            Resources
                        </Link>
                    </nav>
                    <Button
                        asChild
                        variant="outline"
                        className="h-8 px-4 rounded-xl border-white/10 text-white/80 hover:text-white hover:bg-white/5 text-xs font-medium transition-all duration-300 cursor-pointer"
                    >
                        <Link href="/submit">Submit New</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar