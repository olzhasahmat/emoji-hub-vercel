import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4 flex gap-6">
            <Link href="/" className="font-bold">Emoji Hub</Link>
            <Link href="/emojis">Emojis</Link>
        </nav>
    );
}