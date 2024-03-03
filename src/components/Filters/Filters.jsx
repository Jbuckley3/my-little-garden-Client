import './Filters.css'
import { useState } from 'react'

export default function Filters({setPlantList}) {
    const [search, setSearch] = useState('')

    function handleSearch(evt) {
        evt.preventDefault();
        const updatedPlantList = '' //Call API here
        setPlantList(updatedPlantList)
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSearch}>
                <label>Search</label>
                <input type="text" name="plantSearch" value={search} onChange={(evt) => setSearch(evt.target.value)} required />
                <button type="submit">LOG IN</button>
            </form>
        </div>
    )
}