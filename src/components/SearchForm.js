import React from 'react';
import { useState } from 'react';

export function SearchForm({searchCallback}) {

    const[queryText, setQueryText] = useState('');

    const handleChange = (event) => {
        setQueryText(event.target.value);
        searchCallback(event.target.value.toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCallback(queryText.toLowerCase());
        setQueryText("");
    }

    return (
        <div>
            <form className='form-inline mb-3' onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="searchQuery" className="mb-2">Where would you like to eat?</label>
                    <input type="text" className="form-control w-25" placeholder="Search for a restaurant name"
                         value={queryText} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">
                     Search!
                </button>
            </form>
        </div>
    )
}