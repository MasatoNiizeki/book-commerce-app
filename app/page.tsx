 // 疑似データ
 import Book from "@/app/components/Book";
 import {getAllBooks} from "@/app/lib/microcms/client";
 import {BookType, Purchase, User} from "@/app/types/types";
 import {getSession} from "next-auth/react";
 import {getServerSession} from "next-auth";
 import {nextAuthOptions} from "@/app/lib/next-auth/options";

 // eslint-disable-next-line @next/next/no-async-client-component
 export default async function Home() {
     const { contents} = await getAllBooks();
     const session = await getServerSession(nextAuthOptions);
     const user = session?.user as User;

     let purchaseBookIDs: string[];
     let books: JSX.Element[] = [];

     if(user) {
         const response = await fetch(
             `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
         );
         const purchasesData = await response.json();
         console.log(purchasesData);

         purchaseBookIDs = purchasesData.map(
             (purchaseBook: Purchase) => purchaseBook.bookId
         );

         books = contents.map((book: BookType) => (
             <Book key={book.id} book={book} isPurchased={purchaseBookIDs.includes(book.id)} />
         ));

         console.log(purchaseBookIDs);
     }
     else{
         books = contents.map((book: BookType) => (
             <Book key={book.id} book={book} isPurchased={false} />
         ));
     }

     return (
     <>
       <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
         <h2 className="text-center w-full font-bold text-3xl mb-2">
           Book Commerce
         </h2>
           {books}
       </main>
     </>
   );
 }