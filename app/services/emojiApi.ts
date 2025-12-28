import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getEmojis = (params?: any) =>
    api.get("/emojis", { params });

export const getEmojiById = (id: string) =>
    api.get(`/emojis/${id}`);