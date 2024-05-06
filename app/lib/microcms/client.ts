import {createClient} from 'microcms-js-sdk';
import {BookType} from "@/app/types/types";

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllBooks = async () => {
    return await client.getList<BookType>({
        endpoint: "bookcommerce",
    });
};

export const getDetailBook = async (contentId: string) => {
    const detailBook = await client.getListDetail<BookType>({
        endpoint: "bookcommerce",
        contentId,
    });

    return detailBook;
}