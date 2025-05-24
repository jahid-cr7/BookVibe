import React, { Suspense } from "react";
import Book from "./Book";

const Books = ({ book }) => {
  return (
    <div className="min-h-[calc(100vh-121px)]">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20"></div>
      <h1 className="text-center mt-10">Books</h1>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-5 mt-10">
          {book.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
