import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const book = useLoaderData();

    return (
        <div>
        <Banner />
        <Books book={book}/>
       </div>
    );
};

export default Home;