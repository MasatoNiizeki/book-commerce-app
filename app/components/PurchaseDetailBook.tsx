import Image from "next/image";
import React from "react";
import Book from "@/app/components/Book";
import {BookType} from "@/app/types/types";
import Link from "next/link";

type purchaseDetailBookProps = {
  purchaseDetailBook: BookType;
};

const PurchaseDetailBook = ({purchaseDetailBook} : purchaseDetailBookProps) => {
  return (
      <Link
          href={`/book/${purchaseDetailBook.id}`}
          className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
        >
        <Image
            priority
            src={purchaseDetailBook.thumbnail.url}
            alt={purchaseDetailBook.title}
            className="rounded-t-md"
            width={450}
            height={350}
        />
        <div className="px-4 py-4 bg-slate-100 rounded-b-md">
          <h2 className="text-2xl font-bold">{ purchaseDetailBook.title }</h2>
          <p className="mt-2 text-md text-slate-700">
            値段: {purchaseDetailBook.price}円
          </p>
        </div>
      </Link>
  );
};

export default PurchaseDetailBook;