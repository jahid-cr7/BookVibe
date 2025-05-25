import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
const ReadBook = ({ book }) => {
  const { image, bookName, author, tags, publisher, category, rating } = book;
  return (
    <div className="border-1 border-gray-300 mb-5 p-4 rounded-lg shadow-md flex lg:flex-row md:flex-row flex-col gap-3 lg:w-[60%] mx-auto">
      <div className="lg:bg-gray-300 md:bg-gray-300 lg:p-6 p-3 md:text-left mx-auto rounded-lg bg-gray-300">
        <img className="w-[100px]" src={image} alt="" />
      </div>

      <div className="work">
        <h1 className="lg:text-[24px] md:text-[24px] font-bold play">
          {bookName}
        </h1>
        <h1>By : {author}</h1>
        <div className="flex justify-start items-center gap-3 lg:mt-4 md:mt-4 mt-2">
          <span className="font-bold">Tags : </span>
          {tags.map((tag) => (
            <button className="text-[#23BE0A] bg-[#daecd8] px-3  rounded-2xl py-1">
              {tag}
            </button>
          ))}
        </div>
        <p className="flex items-center gap-2 md:mt-3 lg:mt-3 mt-2">
          <HiMiniUserGroup size={20} /> Publisher : {publisher}
        </p>
        <div className="flex gap-5 lg:mt-3 md:mt-3 mt-2 ">
          <button className="bg-[#e0effe] text-[#328EFF] lg:px-3 lg:py-1 rounded-2xl lg:text-[16px] md:text-[14px] text-[10px] flex items-center gap-2">
            <span className="">{category}</span>
          </button>
          <button className="bg-[#fff2e0] text-[#FFAC33] px-3 py-1 rounded-2xl">
            Rating : {rating}
          </button>
          <butto className="bg-[#23BE0A] text-white px-3 py-1 rounded-2xl">
            View Details
          </butto>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
