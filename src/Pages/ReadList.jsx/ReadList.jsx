import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getBook } from "../../Utility/Local";
import ReadBook from "../../ReadBook/ReadBook";


const ReadList = () => {
    const [myreadlist, setreadlist] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    useEffect(() => {
      const storedBookData = getBook();
      const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
      const readlist = data.filter((book) =>
        convertedStoredBooks.includes(book.bookId)
      );
      setreadlist(readlist);
    }, [data]);

    const handleSort = (type) => {
      setSort(type);
      if (type === "Pages") {
        const sortedBypages = [...myreadlist].sort(
          (a, b) => a.totalPages - b.totalPages
        );
        setreadlist(sortedBypages);
        console.log(sortedBypages);
      }
      if (type === "Ratings") {
        const sortedByRatings = [...myreadlist].sort(
          (a, b) => a.rating - b.rating
        );
        setreadlist(sortedByRatings);
      }
    };

    return (
      <div className="mt-5">
        <div className="dropdown dropdown-bottom mb-16">
          <div tabIndex={0} role="button" className="btn m-1 ">
            Sort By : {sort ? sort : ""}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
          </ul>
        </div>

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>WishLists</Tab>
          </TabList>

          <TabPanel>
            <div className="mt-10">
              {myreadlist.map((book) => (
                <ReadBook book={book} key={book.bookId}></ReadBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ReadList;
