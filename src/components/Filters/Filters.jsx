import axios from 'axios';

import './Filters.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Filters({ setPlantList }) {
    const [formData, setFormData] = useState({
        search: '',
        order: '',
        edible: null,
        poisonous: null,
        cycle: '',
        watering: '',
        sunlight: '',
        indoor: '',
        hardiness: '',
    });

    // useEffect({

    // }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };



    async function handleSearch(evt) {
        evt.preventDefault();
        console.log(API_KEY)
        const params = {
            "q": formData.search,
            "order": formData.order,
            "edible": formData.edible,
            "poisonous": formData.poisonous,
            "cycle": formData.cycle,
            "watering": formData.watering,
            "sunlight": formData.sunlight,
            "indoor": formData.indoor,
            "hardiness": formData.hardiness,
            "key": API_KEY,
        };
        const apiBaseUrl = 'https://perenual.com/api';
        const plantResult = await axios.get(`${apiBaseUrl}/species-list`, { params });
        setPlantList(plantResult.data.data);
        console.log(plantResult.data.data);
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSearch} className='filter-form'>
                <label>Search</label>
                <input type="text" name="search" value={formData.search} onChange={handleChange} />
                <label>Order</label>
                <select name="order" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <fieldset className='radio'>
                    <legend>Edible:</legend>
                    <div>
                        <div className='radio-button'>
                            <label>Yes</label>
                            <input type="radio" name="edible" value="1" onChange={handleChange} />
                        </div>
                        <div className='radio-button'>
                            <label>No</label>
                            <input type="radio" name="edible" value="0" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <fieldset className='radio'>
                    <legend>Poisonous:</legend>
                    <div>
                        <div className='radio-button'>
                            <label>Yes</label>
                            <input type="radio" name="poisonous" value="1" onChange={handleChange} />
                        </div>
                        <div className='radio-button'>
                            <label>No</label>
                            <input type="radio" name="poisonous" value="0" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <label>Cycle</label>
                <select name="cycle" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="perennial">Perennial</option>
                    <option value="annual">Annual</option>
                    <option value="biennial">Biennial</option>
                    <option value="biannual">Biannual</option>
                </select>
                <label>Watering</label>
                <select name="watering" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="frequent">Frequent</option>
                    <option value="average">Average</option>
                    <option value="minimum">Minimum</option>
                    <option value="none">None</option>
                </select>
                <label>Sunlight</label>
                <select name="sunlight" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="full_shade">Full Shade</option>
                    <option value="part_shade">Part Shade</option>
                    <option value="sun-part_shade">Sun-Part Shade</option>
                    <option value="full_sun">Full Sun</option>
                </select>
                <fieldset className='radio'>
                    <legend>Indoor:</legend>
                    <div>
                        <div className='radio-button'>
                            <label>Yes</label>
                            <input type="radio" name="indoor" value="1" onChange={handleChange} />
                        </div>
                        <div className='radio-button'>
                            <label>No</label>
                            <input type="radio" name="indoor" value="0" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <label>Hardiness</label>
                <select name="hardiness" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                </select>
                <input type="reset" />
                <button type="submit">FILTER</button>
            </form>
        </div>
    );
}