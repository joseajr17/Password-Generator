export function Header() {
    return (
        <header className="border-b-1 border-gray-600/50">
            <div className="flex p-2">
                <nav className="md:flex space-x-1">
                    <a href="#" className="p-4 hover:text-red-400/40 transition-all text-2xl text-red-400">Password Generator</a>
                </nav>

            </div>
        </header>

    );
}