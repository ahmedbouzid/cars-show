'use client'
import { useState } from "react";
import SearchManuFacture from "./SearchManuFacture";

function SearchBar() {
    const [manufacture , setmanufacture] = useState('') ;
    const handleSearch = () => {

    }
    return (

        <form className='serachbar' onSubmit={handleSearch} >
            <div className="searchbar__item">
                <SearchManuFacture
                manufacture={setmanufacture} 
                setmanufacture={setmanufacture }
                 />
            </div>
        </form>
    );
}

export default SearchBar;