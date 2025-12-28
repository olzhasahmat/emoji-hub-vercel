"use client";

import { useEffect, useState } from "react";
import { getEmojiById } from "../../services/emojiApi";

export default function EmojiDetails({ params }: any) {
    const [emoji, setEmoji] = useState<any>(null);

    useEffect(() => {
        getEmojiById(params.id).then(res => setEmoji(res.data));
    }, []);

    if (!emoji) return <p>Loading...</p>;

    return (
        <div className="bg-white p-6 rounded shadow">
            <div
                className="text-6xl mb-4"
                dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
            />
            <h1 className="text-2xl font-bold">{emoji.name}</h1>
            <p className="text-gray-500">{emoji.category}</p>

            {emoji.atmosphere && (
                <p className="mt-4 italic">{emoji.atmosphere}</p>
            )}
        </div>
    );
}