import axios from 'axios';
import './Filters.css';
import { useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Filters({ setPlantList }) {
    const [formData, setFormData] = useState({
        search: '',
        test: '',
    });

    // useEffect({

    // }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };



    async function handleSearch(evt) {
        evt.preventDefault();
        const params = {
            "q": formData.search,
            "key": API_KEY,
        };
        const apiBaseUrl = 'https://perenual.com/api';
        const plantResult = await axios.get(`${apiBaseUrl}/species-list`, { params });
        setPlantList(plantResult.data.data);
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSearch}>
                <label>Search</label>
                <input type="text" name="search" value={formData.search} onChange={handleChange} required />
                <label>Test</label>
                <input type="text" name="test" value={formData.test} onChange={handleChange} />
                <button type="submit">FILTER</button>
            </form>
        </div>
    );
}