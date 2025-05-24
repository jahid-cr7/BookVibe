import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getBook } from "../../Utility/Local";
import ReadBook from "../../ReadBook/ReadBook";


const ReadList = () => {
    const [myreadlist, setreadlist] = useState([])
  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const readlist = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setreadlist(readlist);
  }, [data]);
  return (
    <div className="mt-5">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishLists</Tab>
        </TabList>

        <TabPanel>
          <h2>Read Count : {myreadlist.length}</h2>
          <div>
            {
                myreadlist.map((book) => 
                <ReadBook book={book}></ReadBook>)
            }
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
