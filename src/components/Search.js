import { query } from '@firebase/database';
import React from 'react';
import { useState } from 'react';

export function Search({searchCallback}) {

    const[queryText, setQueryText] = useState('');

    const handleChange = (event) => {
        setQueryText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCallback(queryText.toLowerCase());
    }

    return (
        <div>
            <form className='form-inline' onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="searchQuery" className="mb-2">What would you like to find?</label>
                    <input type="text" className="form-control" placeholder="Search for a restaurant name"
                         value={queryText} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">
                     Search!
                </button>
            </form>
        </div>
    )
}