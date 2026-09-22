
export const Header = () => {

    return(
        <header className="p-4 border-b-elevated-1 bg-surface border-b-2 sticky top-0 z-1000">
            <nav className="max-w-full w-344 mx-auto flex justify-between items-center">
                <a className="flex items-center gap-2" href="/">
                    <h1 className="font-bold font-secondary md:text-2xl uppercase">aksara x dipo 1 </h1>
                </a>

                <ul className="flex gap-4">
                    {["Home", "Anggota", "Mapel", "Galeri",].map(d => (
                        <li key={d}>
                            <a href={`#${d.toLowerCase()}`} className="font-medium">{d}</a> 
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}