import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
const Book = ({ book }) => {
  const { bookName, image,author,category,rating,tags,bookId } = book;
  console.log(book);
  return (
    <Link to={`/BookDetails/${bookId}`}>
    <div className="mb-8 lg:mb-0">
      <div className="card bg-[#F3F3F3] shadow-sm lg:h-[550px] md:h-[600px]">
        <figure className="px-5 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl lg:h-[300px] md:h-[300px] h-[300px]"
          />
        </figure>
       
        <div className="flex justify-start ml-7 -mb-3 gap-3">
            {
           tags.map(tag => <button className="text-[#23BE0A] bg-[#daecd8] px-3 mt-3 rounded-2xl py-1">{tag}</button>)
        }
        </div>



        <div className="card-body text-center text-black ">
          <h2 className="card-title text-2xl play text-left">{bookName}</h2>
          <div className="border-b border-dashed pb-3 border-gray-400">
            <p className="text-[16px] text-left work  ">By : {author}          </p>
          </div>
          <div className="flex justify-between items-center gap-30 mt-4 work">
            <p>{category}</p>
            <p className="flex items-center gap-1"><span className="text-yellow-500"><CiStar size={20}/></span>{rating}</p>
          </div>
         

        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
