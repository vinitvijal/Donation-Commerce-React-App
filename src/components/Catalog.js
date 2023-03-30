import React from 'react';
import './Catalog.css'
import Items from './Items';

const ProductPage = (
        <div className='productPage'>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>

        </div>
    )


const Catalog = () => {
    return (
        <div className='main gap'>
            {ProductPage}
        </div>
    );
}

export default Catalog;
