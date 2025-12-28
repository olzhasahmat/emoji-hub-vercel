import Link from "next/link";

export default function EmojiCard({ emoji }: any) {
    return (
        <Link href={`/emojis/${emoji.id}`}>
            <div className="bg-white p-4 rounded shadow hover:scale-105 transition">
                <div
                    className="text-4xl"
                    dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
                />
                <h3 className="font-semibold mt-2">{emoji.name}</h3>
                <p className="text-sm text-gray-500">{emoji.category}</p>
            </div>
        </Link>
    );
}