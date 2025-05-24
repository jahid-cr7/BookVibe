import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addLocal } from "../../Utility/Local";

const BookDetails = () => {
  const { id } = useParams();
  const bookID = parseInt(id);
  console.log(bookID);
  const booksData = useLoaderData();

  const singleBook = booksData.find((book) => book.bookId === bookID);
  console.log(singleBook);
  const {
    bookName,
    image,
    author,
    category,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) =>{
    addLocal(id);
   alert('Book marked as read');
  }


  return (
    <div className="lg:flex justify-center gap-10 mt-10 text-white">
      <div className="bg-gray-300 p-7 rounded-2xl lg:w-[40%] md:w-[50%] md:mx-auto lg:my-0 md:my-6 mb-5">
        <img src={image} alt="" className="w-[325px] h-auto mx-auto" />
      </div>
      <div className="lg:w-[60%]">
        <div className="bg-gray-300 rounded-2xl  p-7 h-auto text-black">
          <h2 className="text-[40px]">{bookName}</h2>
          <div className="border-b pb-3 border-gray-400">
            <p className="text-[20px]">
              <span className="font-bold">By :</span> {author}
            </p>
          </div>
          <div className="border-b pb-3 border-gray-400">
            <p className="text-[20px]">{category}</p>
          </div>

          <div className="border-b pb-3 border-gray-400">
            <p className=" h-auto text-base">
              <span className="font-bold">Review : </span>
              {review}
            </p>
            <div className="flex gap-3">
              {tags.map((tag) => (
                <button className="text-[#23BE0A] bg-[#daecd8] px-3 mt-3 rounded-2xl py-1">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <p className="flex gap-9">
            <span className="font-bold ">Number of Pages: </span>
            {totalPages}
          </p>
          <p className="flex gap-24">
            <span className="font-bold ">Publisher: </span>
            {publisher}
          </p>
          <p className="flex gap-6">
            <span className="font-bold ">Year of Publishing : </span>
            {yearOfPublishing}
          </p>
          <p className="flex gap-28">
            <span className="font-bold">Rating : </span>
            {rating}
          </p>
        </div>
        <div className="flex gap-5 mb-7">
             <button onClick={()=> handleMarkAsRead(id)} className="btn mt-3">Mark as Read</button>
          <button className="btn mt-3">djajh</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
