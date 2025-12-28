"use client";

import { useEffect, useState } from "react";
import { getEmojis } from "../services/emojiApi";
import EmojiCard from "../components/EmojiCard";
import SearchBar from "../components/SearchBar";

export default function EmojisPage() {
    const [emojis, setEmojis] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getEmojis({ search }).then(res => setEmojis(res.data));
    }, [search]);

    return (
        <>
            <SearchBar onSearch={setSearch} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {emojis.map((e: any) => (
                    <EmojiCard key={e.id} emoji={e} />
                ))}
            </div>
        </>
    );
}