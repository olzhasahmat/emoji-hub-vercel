export default function SearchBar({ onSearch }: any) {
    return (
        <input
            className="border p-2 w-full mb-4"
            placeholder="Search emoji..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}