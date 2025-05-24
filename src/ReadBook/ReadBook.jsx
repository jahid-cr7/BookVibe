import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
const ReadBook = ({ book }) => {
  const { image, bookName, author, bookId, tags, publisher, category, rating } =
    book;
  return (
    <div className="border-2 border-gray-300 mb-5 p-4 rounded-lg shadow-md flex gap-3">
      <div className="bg-gray-300 p-6 rounded-lg">
        <img className="w-[150px]" src={image} alt="" />
      </div>

      <div className="work">
        <h1 className="text-[24px]">{bookName}</h1>
        <h1>By : {author}</h1>
        <div className="flex justify-start items-center gap-3 mt-4">
            <span className="font-bold">Tags : </span>
            {
           tags.map(tag => <button className="text-[#23BE0A] bg-[#daecd8] px-3  rounded-2xl py-1">{tag}</button>)
        }
        </div>
        <p className="flex items-center gap-2 mt-3 "><HiMiniUserGroup size={20}/> Publisher :  {publisher}</p>
        <div className="flex gap-5 mt-3">
            <button className="bg-[#e0effe] text-[#328EFF] px-3 py-1 rounded-2xl">Category: <span className="">{category}</span></button>
            <button className="bg-[#fff2e0] text-[#FFAC33] px-3 py-1 rounded-2xl">Rating : {rating}</button>
            <butto className='bg-[#23BE0A] text-white px-3 py-1 rounded-2xl'>View Details</butto>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
